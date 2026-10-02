export const coverImages = [
  'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg',
  'https://images.pexels.com/photos/37761567/pexels-photo-37761567.jpeg',
  'https://images.pexels.com/photos/38980878/pexels-photo-38980878.jpeg',
  'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg',
  'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg',
  'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg',
  'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg',
  'https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg',
  'https://images.pexels.com/photos/36939186/pexels-photo-36939186.jpeg',
  'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg',
  'https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg',
  'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
  'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg',
  'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg',
  'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg',
] as const

export const businessOfferings = [
  {
    title: 'Product design',
    description:
      'I map user flows, wireframe, prototype, and design high-fidelity interfaces in Figma so the product is clear before a line of code ships.',
  },
  {
    title: 'Frontend engineering',
    description:
      'I build responsive, accessible Vue.js interfaces with Tailwind CSS, reusable components, and the performance bar a real product needs.',
  },
  {
    title: 'Design to code',
    description:
      'I design the experience and I implement it. That is the same path I use on learning platforms, fintech dashboards, and booking products.',
  },
  {
    title: 'Product UX',
    description:
      'I tighten onboarding, navigation, and conversion on products people already use: credit, learning, bookings, and landing pages that have to rank.',
  },
] as const

export const achievements = [
  { value: 'Vue.js', label: 'Frontend shipped in production' },
  { value: 'Figma', label: 'Flows, prototypes, and UI systems' },
  { value: 'EdTech', label: 'LMS work at IvoryLearn' },
  { value: 'Fintech', label: 'Credit UX at PeerPay Network' },
  { value: 'Beauty', label: 'Booking products for Luvie' },
] as const

export const skills = [
  { group: 'Design', tags: ['Figma', 'Wireframing', 'Prototyping', 'User Flows', 'Design Systems'] },
  { group: 'Frontend', tags: ['Vue.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { group: 'Product', tags: ['Responsive Design', 'SEO', 'Accessibility', 'Performance Optimization'] },
  { group: 'Tools', tags: ['Git', 'GitHub'] },
] as const

export type Product = {
  title: string
  year: string
  pitch: string
  detail: string[]
  url?: string
  urlLabel?: string
  /** Still poster / fallback for the portfolio card. */
  image?: string
  imageAlt?: string
  /** Optional product demo video (mp4). Plays on hover and in the detail dialog. */
  video?: string
  /** Hostname shown in the portfolio browser chrome. */
  imageHost?: string
  /** Internal site path. When set, product opens this page instead of the modal. */
  page?: string
  isNew?: boolean
  /** When set, consecutive cards share one header (label + period) in the projects grid. */
  productGroup?: {
    id: string
    label: string
    period: string
  }
  /** Shown instead of `year` on the card for surfaces under the same employer/product. */
  surfaceLabel?: string
  /** Extra screenshots shown below the main image/video in the detail dialog. */
  gallery?: { src: string, alt: string }[]
}

export const products: Product[] = [
  {
    title: 'JobBox',
    year: 'Mar 2026 – Present',
    url: 'https://getjobbox.com',
    urlLabel: 'Visit JobBox',
    image: '/profile/portfolio/jobbox.jpg',
    video: '/profile/portfolio/jobbox.mp4',
    imageAlt: 'JobBox homepage with the headline Save 15+ hours weekly, Recruit Faster with AI.',
    imageHost: 'getjobbox.com',
    pitch: 'Frontend development for an AI-native recruitment platform: marketing site, candidate workspace, and recruiter dashboards.',
    detail: [
      'As frontend developer at JobBox AI I build responsive product interfaces and landing pages in Vue.js, JavaScript (ES6+), and Tailwind CSS.',
      'I implement recruiter- and candidate-facing features, including dashboards and recruitment workflows, and build reusable UI components that keep the component library consistent across the platform.',
      'I work with product designers and backend engineers to ship accessible, performant features that match the intended design.',
    ],
  },
  {
    title: 'veenna',
    year: 'Mar 2026 – Present',
    url: 'https://veenna.getjobbox.com',
    urlLabel: 'Visit veenna',
    image: '/profile/portfolio/veenna.jpg',
    video: '/profile/portfolio/veenna.mp4',
    imageAlt: 'veenna home dashboard greeting Blessing, with Marv Magic, a 14-day streak, and sidebar navigation.',
    imageHost: 'veenna.getjobbox.com',
    pitch: 'A product of JobBox AI: voice-first workspace for capture, tasks, and follow-through.',
    detail: [
      'veenna is a voice-first productivity product built by JobBox AI. I designed and developed the product UI in Figma and Vue.js so capture, tasks, and follow-through feel like one experience.',
      'The frontend had to hold up on web and feel calm enough for daily use: navigation, workspace screens, and the path from a spoken intent to something you can act on.',
    ],
  },
  {
    title: 'IvoryLearn',
    year: 'Oct 2025 – Mar 2026',
    url: 'https://www.ivorylearn.com',
    urlLabel: 'Visit IvoryLearn',
    image: '/profile/portfolio/ivorylearn.jpg',
    video: '/profile/portfolio/ivorylearn.mp4',
    imageAlt: 'IvoryLearn homepage with the headline Empowering Women to Build Careers and Grow Their Businesses.',
    imageHost: 'ivorylearn.com',
    pitch: 'LMS interfaces and public site for a digital skills academy.',
    detail: [
      'I built and styled responsive learning management system (LMS) pages in Astro and Tailwind CSS.',
      'I integrated frontend features with backend APIs and improved layouts, navigation, accessibility, and SEO across learning pages.',
    ],
  },
  {
    title: 'Luvie',
    year: '2026',
    url: 'https://luvie.io',
    urlLabel: 'Visit Luvie',
    image: '/profile/portfolio/luvie.jpg',
    video: '/profile/portfolio/luvie.mp4',
    imageAlt: 'Luvie homepage with the headline The Connected Hair Ecosystem for Afro-Textured Hair.',
    imageHost: 'luvie.io',
    pitch: 'Full-stack development for responsive booking on a beauty services marketplace.',
    detail: [
      'I built Luvie end-to-end as a full-stack developer: the responsive booking flows, the product interface, and the backend behind it.',
      'Customers can find a stylist and complete a booking on the devices they already use.',
    ],
  },
  {
    title: 'Boltcliq',
    year: 'Jan 2024 – Dec 2024',
    url: 'https://boltcliq.com',
    urlLabel: 'Visit Boltcliq',
    image: '/profile/portfolio/boltcliq.jpg',
    video: '/profile/portfolio/boltcliq.mp4',
    imageAlt: 'Boltcliq homepage with the headline Build the digital systems your next phase depends on.',
    imageHost: 'boltcliq.com',
    pitch: 'Frontend internship: responsive marketing pages in HTML, CSS, and JavaScript.',
    detail: [
      'I built responsive web pages using HTML, CSS and JavaScript.',
      'I optimised UI components for mobile responsiveness and cross-browser compatibility, and debugged and improved frontend performance alongside senior developers.',
    ],
  },
  {
    title: 'PeerPay Network',
    year: 'Apr 2025 – Present',
    url: 'https://peerpaynetwork.com',
    urlLabel: 'Visit PeerPay Network',
    imageHost: 'peerpaynetwork.com',
    pitch: 'UI/UX product design for digital credit products.',
    detail: [
      'I design responsive web and mobile experiences for digital credit products: user flows, wireframes, prototypes, and high-fidelity interfaces in Figma.',
      'I collaborate with developers and product managers on onboarding, usability, and consistent design patterns across fintech products.',
    ],
  },
  {
    title: 'BeautiGo',
    year: '2026',
    image: '/profile/portfolio/beautigo-hero.jpg',
    imageAlt: 'BeautiGo landing page headline Walk into every room looking like the main character, with Browse Artists and Explore the Feed buttons.',
    pitch: 'Personal project: product design in Figma for an on-demand beauty platform.',
    detail: [
      'BeautiGo is a personal project. I designed the artist acquisition experience for an on-demand beauty platform in Figma, focusing on trust, the booking flow, and onboarding conversion.',
      'The flows had to help stylists sign up and give customers enough confidence to book without friction. This is a design concept only; I have not built the product.',
    ],
    gallery: [
      {
        src: '/profile/portfolio/beautigo-for-artists.jpg',
        alt: 'BeautiGo artist acquisition page with the headline Your talent is not the problem, your visibility is, and a Join for free today button.',
      },
      {
        src: '/profile/portfolio/beautigo-feed.jpg',
        alt: 'BeautiGo featured looks feed showing makeup artist portfolios with the headline Fall in love with a look, meet the artist behind it.',
      },
    ],
  },
  {
    title: 'CRRNetwork',
    year: '2025',
    url: 'https://www.crrnetwork.org',
    urlLabel: 'Visit CRRNetwork',
    image: '/profile/portfolio/crrnetwork.jpg',
    imageAlt: 'CRRNetwork homepage with the headline Empowering families to break the cycle of poverty, and a Make an Impact Today button.',
    imageHost: 'crrnetwork.org',
    pitch: 'Vue.js & Tailwind CSS: SEO-optimized responsive landing page.',
    detail: [
      'I designed and developed an SEO-optimized responsive landing page for CRRNetwork in Vue.js and Tailwind CSS.',
      'SEO and performance were part of the product, not an afterthought.',
    ],
  },
]

export type CompanyRole = {
  role: string
  period?: string
}

export type Company = {
  title: string
  role: string
  year: string
  status: string
  url?: string
  /** Internal site path for dedicated company/product page. */
  page?: string
  flagship?: boolean
  affiliation?: string
  roles?: CompanyRole[]
}

export type CompanyIndustryGroup = {
  industry: string
  companies: Company[]
}

export const companies: CompanyIndustryGroup[] = [
  {
    industry: 'Recruitment',
    companies: [
      {
        title: 'JobBox AI',
        role: 'Frontend Engineer',
        affiliation: 'AI-native recruitment platform',
        year: '2026',
        status: 'Mar 2026 – Present',
        url: 'https://getjobbox.com',
        roles: [{ role: 'Frontend Engineer', period: 'Mar 2026 – Present' }],
      },
    ],
  },
  {
    industry: 'Education',
    companies: [
      {
        title: 'IvoryLearn',
        role: 'Frontend Developer',
        affiliation: 'Learning management interfaces',
        year: '2025',
        status: 'Oct 2025 – Mar 2026',
        url: 'https://ivorylearn.com',
        roles: [{ role: 'Frontend Developer', period: 'Oct 2025 – Mar 2026' }],
      },
    ],
  },
  {
    industry: 'Fintech',
    companies: [
      {
        title: 'PeerPay Network',
        role: 'UI/UX Product Designer',
        affiliation: 'Digital credit products',
        year: '2025',
        status: 'Apr 2025 – Present',
        url: 'https://peerpaynetwork.com',
        roles: [{ role: 'UI/UX Product Designer', period: 'Apr 2025 – Present' }],
      },
    ],
  },
  {
    industry: 'Agency',
    companies: [
      {
        title: 'Boltcliq',
        role: 'Frontend Web Development Intern',
        year: '2024',
        status: 'Jan 2024 – Dec 2024',
        url: 'https://boltcliq.com',
        roles: [{ role: 'Frontend Web Development Intern', period: 'Jan 2024 – Dec 2024' }],
      },
    ],
  },
]

export type ExperienceRole = {
  role: string
  period?: string
}

export type ExperienceGroup = {
  company: string
  url?: string
  page?: string
  detail?: string
  /** Short write-up shown when the experience card expands. */
  summary: string
  roles: ExperienceRole[]
}

export const experience: ExperienceGroup[] = [
  {
    company: 'JobBox AI',
    url: 'https://getjobbox.com',
    detail: 'AI-native recruitment platform',
    summary:
      'I collaborate with the engineering team to build responsive frontend experiences for JobBox, an AI-native recruitment platform. I develop landing pages and product interfaces in Vue.js, JavaScript, and Tailwind CSS; build reusable UI components; and contribute to a consistent design system. I work with product designers and backend engineers on recruiter and candidate-facing experiences, including dashboards and recruitment workflows.',
    roles: [
      { role: 'Frontend Engineer', period: 'Mar 2026 – Present' },
    ],
  },
  {
    company: 'PeerPay Network',
    url: 'https://peerpaynetwork.com',
    detail: 'Digital credit products',
    summary:
      'I design responsive web and mobile experiences for digital credit products. I create user flows, wireframes, prototypes, and high-fidelity interfaces in Figma; collaborate with developers and product managers to improve onboarding and usability; and maintain consistent design patterns across multiple fintech products.',
    roles: [
      { role: 'UI/UX Product Designer', period: 'Apr 2025 – Present' },
    ],
  },
  {
    company: 'IvoryLearn',
    url: 'https://ivorylearn.com',
    detail: 'Learning management interfaces',
    summary:
      'I built and styled responsive LMS pages in Astro and Tailwind CSS, integrated frontend features with backend APIs, and improved layouts, navigation, accessibility, and SEO across learning pages.',
    roles: [
      { role: 'Frontend Developer', period: 'Oct 2025 – Mar 2026' },
    ],
  },
  {
    company: 'Boltcliq',
    url: 'https://boltcliq.com',
    detail: 'Software development agency',
    summary:
      'I built responsive web pages in HTML, CSS, and JavaScript, optimized UI components for mobile responsiveness and cross-browser compatibility, and debugged and improved frontend performance with senior developers.',
    roles: [
      { role: 'Frontend Web Development Intern', period: 'Jan 2024 – Dec 2024' },
    ],
  },
]
