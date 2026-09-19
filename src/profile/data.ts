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
  { value: 'EdTech', label: 'KidsClubZone and IvoryLearn' },
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
}

export const products: Product[] = [
  {
    title: 'JobBox',
    year: 'Mar 2026 – Present',
    productGroup: { id: 'jobbox', label: 'JobBox AI', period: 'Mar 2026 – Present' },
    surfaceLabel: 'Marketing & landing',
    url: 'https://getjobbox.com',
    urlLabel: 'Visit JobBox',
    image: '/profile/portfolio/jobbox.jpg',
    video: '/profile/portfolio/jobbox.mp4',
    imageAlt: 'JobBox homepage with the headline Save 15+ hours weekly, Recruit Faster with AI.',
    imageHost: 'getjobbox.com',
    pitch: 'Landing pages and marketing UI for an AI-native recruitment platform.',
    detail: [
      'At JobBox AI I build responsive frontend experiences for an AI-native recruitment platform, including public landing pages and product interfaces in Vue.js, JavaScript, and Tailwind CSS.',
      'Reusable UI components and a consistent design system support recruiter and candidate-facing flows.',
    ],
  },
  {
    title: 'JobBox Dashboard',
    year: 'Mar 2026 – Present',
    productGroup: { id: 'jobbox', label: 'JobBox AI', period: 'Mar 2026 – Present' },
    surfaceLabel: 'Candidate workspace',
    url: 'https://app.getjobbox.com',
    urlLabel: 'Visit JobBox',
    image: '/profile/portfolio/jobbox-dashboard.jpg',
    video: '/profile/portfolio/jobbox-dashboard.mp4',
    imageAlt: 'JobBox dashboard with job listings, match scores, and the Home sidebar.',
    imageHost: 'app.getjobbox.com',
    pitch: 'Candidate-facing recruitment workspace: search, listings, and workflows.',
    detail: [
      'Frontend work on the JobBox product interface: home, job listings, match scores, and paths from search to action.',
      'Built with Vue.js and Tailwind CSS alongside designers and backend engineers.',
    ],
  },
  {
    title: 'JobBox Recruiter',
    year: 'Mar 2026 – Present',
    productGroup: { id: 'jobbox', label: 'JobBox AI', period: 'Mar 2026 – Present' },
    surfaceLabel: 'Recruiter workspace',
    url: 'https://app.getjobbox.com',
    urlLabel: 'Visit JobBox',
    image: '/profile/portfolio/jobbox-recruiter.jpg',
    video: '/profile/portfolio/jobbox-recruiter.mp4',
    imageAlt: 'JobBox recruiter dashboard with pipeline overview, application stats, and an applications growth chart.',
    imageHost: 'app.getjobbox.com',
    pitch: 'Recruiter dashboards, pipeline views, and hiring analytics.',
    detail: [
      'Recruiter-facing experiences at JobBox: pipeline overview, application stats, and recruitment workflows in one dashboard.',
      'Contributed to high-performance, user-centered web applications with the engineering team.',
    ],
  },
  {
    title: 'veenna',
    year: 'Mar 2026 – Present',
    productGroup: { id: 'jobbox', label: 'JobBox AI', period: 'Mar 2026 – Present' },
    surfaceLabel: 'veenna · voice product',
    url: 'https://veenna.getjobbox.com',
    urlLabel: 'Visit veenna',
    image: '/profile/portfolio/veenna.jpg',
    video: '/profile/portfolio/veenna.mp4',
    imageAlt: 'veenna home dashboard greeting Blessing, with Marv Magic, a 14-day streak, and sidebar navigation.',
    imageHost: 'veenna.getjobbox.com',
    pitch: 'JobBox product: voice-first workspace for capture, tasks, and follow-through.',
    detail: [
      'veenna is a voice-first productivity product inside the JobBox ecosystem. I designed and developed the product UI in Figma and Vue.js so capture, tasks, and follow-through feel like one experience.',
      'The frontend had to hold up on web and feel calm enough for daily use: navigation, workspace screens, and the path from a spoken intent to something you can act on.',
    ],
  },
  {
    title: 'KidsClubZone',
    year: 'Jan 2026 – Present',
    url: 'https://kidsclubzone.com',
    urlLabel: 'Visit KidsClubZone',
    image: '/profile/portfolio/kidsclubzone.jpg',
    video: '/profile/portfolio/kidsclubzone.mp4',
    imageAlt: 'KidsClubZone homepage with the headline Ignite Curiosity & Creativity, featuring a student learning on a laptop.',
    imageHost: 'kidsclubzone.com',
    pitch: 'Educational web applications in Vue.js and Tailwind CSS.',
    detail: [
      'I develop responsive educational web applications: reusable UI components, dynamic learning pages, and interactive experiences that improve student engagement.',
      'KidsClubZone is a learning platform for kids ages 6–17 combining instructors with structured learning paths.',
    ],
  },
  {
    title: 'Top Universe',
    year: '2026',
    url: 'https://www.topuniverse.org',
    urlLabel: 'Visit Top Universe',
    image: '/profile/portfolio/topuniverse-org.jpg',
    video: '/profile/portfolio/topuniverse-org.mp4',
    imageAlt: 'Top Universe homepage with the headline AI Academy: your starting point in AI.',
    imageHost: 'topuniverse.org',
    pitch: 'Public site for a free AI academy and tech education NGO across Africa.',
    detail: [
      'I designed and built the Top Universe public site: AI Academy, career tracks, and a clear apply path for learners.',
    ],
  },
  {
    title: 'IvoryLearn',
    year: 'Mar 2025 – Jan 2026',
    url: 'https://www.ivorylearn.com',
    urlLabel: 'Visit IvoryLearn',
    image: '/profile/portfolio/ivorylearn.jpg',
    video: '/profile/portfolio/ivorylearn.mp4',
    imageAlt: 'IvoryLearn homepage with the headline Empowering Women to Build Careers and Grow Their Businesses.',
    imageHost: 'ivorylearn.com',
    pitch: 'LMS interfaces and public site for a digital skills academy.',
    detail: [
      'I developed responsive LMS interfaces in Vue.js and Tailwind CSS, integrated frontend features with backend APIs, and improved navigation, accessibility, and SEO across learning pages.',
    ],
  },
  {
    title: 'Luvie',
    year: '2025',
    url: 'https://luvie.io',
    urlLabel: 'Visit Luvie',
    image: '/profile/portfolio/luvie.jpg',
    video: '/profile/portfolio/luvie.mp4',
    imageAlt: 'Luvie homepage with the headline The Connected Hair Ecosystem for Afro-Textured Hair.',
    imageHost: 'luvie.io',
    pitch: 'Vue.js and product design for responsive booking on a beauty services marketplace.',
    detail: [
      'I designed and developed responsive booking experiences for Luvie, a beauty services marketplace.',
      'Customers can find a stylist and complete a booking on the devices they already use; the work combined product design with Vue.js implementation.',
    ],
  },
  {
    title: 'Top Universe Institute',
    year: '2025',
    url: 'https://topuniverse.institute',
    urlLabel: 'Visit Top Universe Institute',
    image: '/profile/portfolio/topuniverse.jpg',
    video: '/profile/portfolio/topuniverse.mp4',
    imageAlt: 'Top Universe Institute homepage with the headline AI Education Built for Africa.',
    imageHost: 'topuniverse.institute',
    pitch: 'Marketing site for an AI education platform across Nigeria, Ghana, and Kenya.',
    detail: [
      'I designed and built the public site for Top Universe Institute so prospective students can understand the offer and start an application.',
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
    pitch: 'Frontend internship — responsive marketing pages in HTML, CSS, and JavaScript.',
    detail: [
      'I built responsive web pages, optimized UI components for mobile and cross-browser compatibility, and improved frontend performance with senior developers during my 2024 internship.',
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
    year: '2025',
    pitch: 'Product design — artist acquisition for an on-demand beauty platform.',
    detail: [
      'I designed the artist acquisition experience for BeautiGo, an on-demand beauty platform, focusing on trust, bookings, and onboarding conversion.',
      'The flows had to help stylists sign up and give customers enough confidence to book without friction.',
    ],
  },
  {
    title: 'CRRNetwork',
    year: '2025',
    pitch: 'Vue.js & Tailwind CSS — SEO-optimized responsive landing page.',
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
        title: 'KidsClubZone',
        role: 'Frontend Developer',
        affiliation: 'Educational web applications',
        year: '2026',
        status: 'Jan 2026 – Present',
        url: 'https://kidsclubzone.com',
        roles: [{ role: 'Frontend Developer', period: 'Jan 2026 – Present' }],
      },
      {
        title: 'IvoryLearn',
        role: 'Frontend Developer',
        affiliation: 'Learning management interfaces',
        year: '2025',
        status: 'Mar 2025 – Jan 2026',
        url: 'https://ivorylearn.com',
        roles: [{ role: 'Frontend Developer', period: 'Mar 2025 – Jan 2026' }],
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
    company: 'KidsClubZone',
    url: 'https://kidsclubzone.com',
    detail: 'Educational web applications',
    summary:
      'I develop responsive educational web applications in Vue.js and Tailwind CSS: reusable UI components, dynamic pages for learning platforms, and interactive experiences that improve student engagement. I collaborate with designers and developers on scalable, user-centered interfaces, responsive layout, and performance optimization.',
    roles: [
      { role: 'Frontend Developer', period: 'Jan 2026 – Present' },
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
      'I developed responsive LMS interfaces in Vue.js and Tailwind CSS, integrated frontend features with backend APIs, and improved navigation, accessibility, and SEO across learning pages.',
    roles: [
      { role: 'Frontend Developer', period: 'Mar 2025 – Jan 2026' },
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
