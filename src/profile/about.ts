export type AboutPhoto = {
  src: string
  alt: string
  caption: string
}

export type AboutSection = {
  id: string
  title: string
  body: string[]
  photos?: AboutPhoto[]
}

/** About Blessing Alozie: story beats for /about. First person on-page. */
export const aboutStory: {
  pageTitle: string
  intro: string
  sections: AboutSection[]
} = {
  pageTitle: 'About Blessing Alozie',
  intro:
    'I am a product designer and frontend engineer. I design the experience, then I build it in Vue.js. This is the short version: how I work, what I have shipped, and where I am pointed.',
  sections: [
    {
      id: 'work',
      title: 'How I work',
      body: [
        'I combine UX design, product thinking, and Vue.js development. The sequence is usually the same: understand the user, map the flow, prototype in Figma, then ship a responsive, accessible interface in production.',
        'I care about the parts that get skipped when design and engineering sit in different rooms: mobile, accessibility, SEO, and performance. If the page cannot be used, it is not done.',
      ],
    },
    {
      id: 'shipped',
      title: 'What I have shipped',
      body: [
        'At JobBox I designed and built Vue.js interfaces for an AI-native recruitment workspace. At veenna I did the same for a voice-first productivity product: capture, tasks, and follow-through in one UI.',
        'At KidsClubZone I build educational web applications: reusable Vue.js components, dynamic learning pages, and interactive experiences for students. At IvoryLearn I do the same for LMS interfaces, including API-backed pages, navigation, accessibility, and SEO.',
        'At PeerPay Network I design marketing landing pages and product UI for digital lending and credit—public site pages, dashboards, and customer flows—with user flows, wireframes, prototypes, and high-fidelity interfaces in Figma.',
        'I have also designed and built booking experiences for Luvie, the CRRNetwork landing page, and websites and course pages for The Mom\'s Hub. I started as a frontend intern at The Boltcliq Company in 2024.',
      ],
    },
    {
      id: 'learned',
      title: 'What I learned',
      body: [
        'A product is not a Figma file. It is what a person can do on their phone without getting lost. Credit dashboards, learning platforms, and booking flows all fail the same way when the interface is unclear.',
        'The other lesson is that design and frontend should not be two handoffs. When I own both, the live product stays closer to the intent, and the team spends less time arguing about the gap.',
      ],
    },
    {
      id: 'education',
      title: 'Education',
      body: [
        'B.Sc. Sociology, Ahmadu Bello University, March 2022 to July 2025.',
        'Certified Web Developer, LearnCode Academy, July 2023 to January 2024. That is where the frontend craft started in earnest: HTML, CSS, JavaScript, and the habit of shipping pages that work.',
      ],
    },
    {
      id: 'now',
      title: 'What I am building now',
      body: [
        'Product design and frontend engineering for teams that need both. Live work is at KidsClubZone, PeerPay Network, and IvoryLearn.',
        'I am available for product design and Vue.js work when the product is a fit.',
      ],
    },
    {
      id: 'going',
      title: 'Where I am going',
      body: [
        'Same bet, clearer: user-centered products that are designed and built as one piece of work, especially in education, fintech, and consumer services.',
        'I want the public work on this site to stay honest. When a product ships, it will be here.',
      ],
    },
  ],
}
