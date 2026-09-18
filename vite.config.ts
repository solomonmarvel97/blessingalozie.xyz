import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { homeLdJsonDocument } from './src/profile/structuredDataSchemas'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'inject-home-ld-json',
      transformIndexHtml(html) {
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
})
