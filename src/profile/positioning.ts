import { identity } from './identity'

/** Premium positioning: specific person + specific outcome + proof. */
export const positioning = {
  title: 'Product Designer & Frontend Engineer',
  headline:
    'I design and build user-centered digital products from concept to implementation, combining UX design, product thinking, and Vue.js development.',
  subhead:
    'Currently shipping at KidsClubZone, PeerPay Network, and IvoryLearn. Previously The Mom\'s Hub and The Boltcliq Company.',
  contrarian:
    'Most products do not fail because of missing features. They fail because the interface is hard to trust, hard to use, or never gets built.',
  availabilityTitle: 'Open for product design and frontend work',
  availabilitySubtitle:
    'Figma to Vue.js. Limited capacity.',
  availabilityCta: 'Start a project',
  pitchHeading: 'How I help teams ship products people can use',
  pitchIntro:
    'I sit in the gap between design and engineering. The work is user flows, interfaces, and the Vue.js implementation that makes them real on every screen.',
  salesHook:
    'A Figma file that never ships is still a slide. A frontend with no product thinking is still a template. The products that convert, teach, and get booked are designed and built as one piece of work.',
  salesProblem:
    'If you run a product team, you have already seen the split: design hands off a file, engineering rebuilds it, and the live interface is neither. Onboarding leaks. Mobile breaks. Accessibility is a backlog item. SEO is someone else\'s problem.',
  salesOutcome:
    'The outcome I sell is a product experience in production: designed in Figma, built in Vue.js, responsive, accessible, and fast enough to keep. That is how I work on learning platforms, credit products, and booking flows.',
  salesAuthority:
    'I am a product designer and frontend engineer. I designed and built product UI for JobBox and veenna, design credit experiences at PeerPay Network, and ship educational interfaces at KidsClubZone and IvoryLearn. I have also shipped booking and landing work for Luvie and CRRNetwork.',
  salesCta: 'If you need the interface designed and shipped, start a project.',
  ctaKicker: 'Ready when the work is real',
  ctaHeadline: 'Design it. Build it. Ship it.',
  ctaBody:
    'If your product needs a clearer experience and a Vue.js frontend that can carry it, tell me the workflow. I will tell you whether I am the right person for it.',
} as const

export const seo = {
  homeTitle: 'Product Designer & Frontend Engineer | Blessing Alozie',
  homeDescription:
    'Blessing Alozie is a product designer and frontend engineer who designs and builds user-centered digital products in Vue.js, from Figma to production.',
  keywords:
    'Blessing Alozie, product designer, frontend engineer, Vue.js developer, Figma, UX design, UI design, Tailwind CSS, accessible web design, product design Nigeria',
  imageAlt: identity.imageAlt,
  aboutTitle: 'About Blessing Alozie | Product Designer & Frontend Engineer',
  aboutDescription:
    'About Blessing Alozie: product designer and frontend engineer shipping Vue.js products in education, fintech, and consumer services.',
  experienceTitle: 'Experience | Blessing Alozie',
  experienceDescription:
    'Experience of Blessing Alozie across JobBox, veenna, KidsClubZone, PeerPay Network, IvoryLearn, The Mom\'s Hub, and The Boltcliq Company.',
} as const

export const faqs = [
  {
    question: 'Do you design and also build?',
    answer:
      'Yes. I design in Figma and I implement in Vue.js. I will not leave you with a file nobody can ship, or a frontend that drifted from the design.',
  },
  {
    question: 'What kind of products do you work on?',
    answer:
      'Learning platforms, fintech dashboards, recruitment workspaces, voice products, and marketing sites that have to convert. Recent work includes JobBox, veenna, KidsClubZone, IvoryLearn, PeerPay Network, Luvie, and CRRNetwork.',
  },
  {
    question: 'Can you work from an existing Figma file or codebase?',
    answer:
      'Yes. I can take over an existing design system or Vue.js frontend, tighten what is already there, and ship the next flow without restarting the product.',
  },
  {
    question: 'Do you only do UI, or do you think about SEO and accessibility?',
    answer:
      'Both. Responsive layout, accessibility, SEO, and performance are part of the same delivery. A page that looks right and fails those tests is not finished.',
  },
  {
    question: 'How do I start a project?',
    answer:
      `Reach out at ${identity.email} or start a project on this site. Share the product, the flow that is stuck, and whether you need design, frontend, or both.`,
  },
] as const
