export const inquiryIntents = ['diagnostic', 'sprint', 'partnership', 'engagement'] as const

export type InquiryIntent = (typeof inquiryIntents)[number]

export type InquiryFieldKey = 'industry' | 'workflow' | 'timeline' | 'role' | 'message'

export type InquiryField = {
  key: InquiryFieldKey
  label: string
  placeholder: string
  type: 'text' | 'textarea'
  required: boolean
}

export type InquiryFormConfig = {
  title: string
  subtitle: string
  submit: string
  successTitle: string
  successBody: string
  emailLabel: string
  fields: InquiryField[]
}

export const inquiryForms: Record<InquiryIntent, InquiryFormConfig> = {
  diagnostic: {
    title: 'Product review',
    subtitle: 'A short look at what is working in the UX and frontend, and what is not.',
    submit: 'Book a review',
    successTitle: 'Request sent.',
    successBody: 'Thanks. I will reply to your email if a review session is a fit.',
    emailLabel: 'Product review',
    fields: [
      {
        key: 'industry',
        label: 'Product or industry',
        placeholder: 'EdTech, fintech, marketplace, marketing site…',
        type: 'text',
        required: true,
      },
      {
        key: 'message',
        label: 'What is stuck?',
        placeholder: 'The flow, the interface, and what you have already tried.',
        type: 'textarea',
        required: true,
      },
    ],
  },
  sprint: {
    title: 'Design-to-code sprint',
    subtitle: 'A scoped engagement that designs one flow in Figma and ships it in Vue.js.',
    submit: 'Request a sprint',
    successTitle: 'Request sent.',
    successBody: 'Thanks. I will reply with whether a sprint is the right next step.',
    emailLabel: 'Design-to-code sprint',
    fields: [
      {
        key: 'industry',
        label: 'Product or industry',
        placeholder: 'EdTech, fintech, marketplace, marketing site…',
        type: 'text',
        required: true,
      },
      {
        key: 'workflow',
        label: 'Which flow should ship first?',
        placeholder: 'Onboarding, booking, dashboard, landing page, LMS navigation…',
        type: 'textarea',
        required: true,
      },
      {
        key: 'timeline',
        label: 'When do you need this live?',
        placeholder: 'e.g. 2 to 6 weeks, or a specific date',
        type: 'text',
        required: false,
      },
    ],
  },
  partnership: {
    title: 'Product design + frontend',
    subtitle: 'I design the experience and I build it: ongoing product design and Vue.js implementation.',
    submit: 'Discuss a partnership',
    successTitle: 'Request sent.',
    successBody: 'Thanks. I will reply if a partnership conversation makes sense.',
    emailLabel: 'Product design + frontend partnership',
    fields: [
      {
        key: 'role',
        label: 'Your role',
        placeholder: 'Founder, product lead, design lead…',
        type: 'text',
        required: false,
      },
      {
        key: 'industry',
        label: 'Product or industry',
        placeholder: 'EdTech, fintech, marketplace, marketing site…',
        type: 'text',
        required: true,
      },
      {
        key: 'message',
        label: 'What should this become?',
        placeholder: 'The product you need designed and built, and the outcome you need in production.',
        type: 'textarea',
        required: true,
      },
    ],
  },
  engagement: {
    title: 'Start a project',
    subtitle: 'Tell me the product, the flow, and whether you need design, frontend, or both. I reply by email if it is a fit.',
    submit: 'Send inquiry',
    successTitle: 'Message sent.',
    successBody: "Thanks - I'll reply to your email as soon as I can.",
    emailLabel: 'Project inquiry',
    fields: [
      {
        key: 'message',
        label: 'How can I help?',
        placeholder: 'Product, flow, and what you need designed or built.',
        type: 'textarea',
        required: true,
      },
    ],
  },
}

export function isInquiryIntent(value: unknown): value is InquiryIntent {
  return typeof value === 'string' && (inquiryIntents as readonly string[]).includes(value)
}
