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
    'I am a design engineer. I design the experience in Figma, then I build it in Vue.js. This is the short version: how I work, what I have shipped, and where I am pointed.',
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
        'At JobBox AI I build responsive frontend experiences for an AI-native recruitment platform: landing pages, product UI, and recruiter and candidate workflows in Vue.js and Tailwind CSS. At KidsClubZone I develop educational web applications. At PeerPay Network I design digital credit products in Figma.',
        'I was frontend developer at IvoryLearn (Mar 2025 – Jan 2026) and frontend intern at Boltcliq in 2024.',
        'Featured projects on this site and my resume include BeautiGo, Luvie, and CRRNetwork, plus additional product work such as veenna.',
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
        'Product design and frontend engineering for teams that need both. Live work is at JobBox AI, KidsClubZone, and PeerPay Network.',
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
