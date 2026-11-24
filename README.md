# Blessing Alozie - Website

Personal landing site for Blessing Alozie (Design Engineer), built with Vue 3, TypeScript, and Vite.

## The Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)

## Setup 

```bash
npm install 
```

## Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm run dev`  | Start dev server (Vite)        |
| `npm run build`| Type-check and production build |
| `npm run preview` | Serve the `dist` output locally |

## Contact form email

The contact form posts to the server-side `api/contact.ts` Vercel function. For local development, the Vite dev server also runs this handler. Copy `.env.example` to `.env`, then set `RESEND_API_KEY` to a Resend API key. The recipient, sender, and reply-to addresses default to the values shown in `.env.example`. Restart the dev server after changing environment variables.

For the deployed site, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `CONTACT_REPLY_TO_EMAIL` to the Vercel project's Environment Variables for each environment you use, then redeploy. These settings are separate from local `.env` files. The sender address must belong to a domain verified in Resend.

## Stack

Vue 3, Vue Router, Vite, TypeScript, Tailwind CSS, GSAP, Radix Vue, Phosphor Icons.

## Live site

[https://blessingalozie.xyz/](https://blessingalozie.xyz/)
