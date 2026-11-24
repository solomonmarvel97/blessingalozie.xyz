import path from 'node:path'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { homeLdJsonDocument } from './src/profile/structuredDataSchemas'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

type ContactRequest = IncomingMessage & { body?: unknown }
type ContactResponse = ServerResponse & {
  status: (code: number) => ContactResponse
  json: (payload: unknown) => ContactResponse
}
type ContactHandler = (req: ContactRequest, res: ContactResponse) => Promise<unknown>

function localContactApi(): Plugin {
  return {
    name: 'local-contact-api',
    apply: 'serve',
    configureServer(server) {
      let handlerPromise: Promise<ContactHandler> | undefined

      server.middlewares.use(async (request, response, next) => {
        if (request.url?.split('?')[0] !== '/api/contact') return next()

        const req = request as ContactRequest
        const res = response as ContactResponse
        res.status = function (code: number) {
          res.statusCode = code
          return this
        }
        res.json = function (payload: unknown) {
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify(payload))
          return this
        }

        try {
          if (req.method === 'POST') {
            let rawBody = ''
            for await (const chunk of req) {
              rawBody += chunk.toString()
              if (rawBody.length > 64_000) {
                res.status(413).json({ error: 'Request body is too large' })
                return
              }
            }

            try {
              req.body = JSON.parse(rawBody)
            } catch {
              res.status(400).json({ error: 'Invalid request body' })
              return
            }
          }

          handlerPromise ??= server.ssrLoadModule('/api/contact.ts').then(
            module => module.default as ContactHandler,
          )
          await (await handlerPromise)(req, res)
        } catch {
          if (!res.headersSent) {
            res.status(500).json({ error: 'Something went wrong. Please try again.' })
          }
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    const env = loadEnv(mode, __dirname, '')
    for (const key of ['RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL', 'CONTACT_REPLY_TO_EMAIL']) {
      if (env[key] !== undefined) process.env[key] = env[key]
    }
  }

  return {
    plugins: [
      vue(),
      localContactApi(),
      {
        name: 'inject-home-ld-json',
        transformIndexHtml(html: string) {
          const json = JSON.stringify(homeLdJsonDocument(), null, 2)
          const script = `<script type="application/ld+json" data-profile-ld="true">\n  ${json.replace(/\n/g, '\n  ')}\n  </script>`
          return html.replace('<!-- HOME_LD_JSON -->', script)
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.ngrok.io'],
    },
  }
})
