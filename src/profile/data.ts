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
}

export const products: Product[] = [
  {
    title: 'KidsClubZone',
    year: '2024',
    url: 'https://kidsclubzone.com',
    urlLabel: 'Visit KidsClubZone',
    image: '/profile/portfolio/kidsclubzone.jpg',
    video: '/profile/portfolio/kidsclubzone.mp4',
    imageAlt: 'KidsClubZone homepage with the headline Ignite Curiosity & Creativity, featuring a student learning on a laptop.',
    imageHost: 'kidsclubzone.com',
    pitch: 'Educational web application for kids 6–17: STEM, coding, design, and creative arts.',
    detail: [
      'KidsClubZone is a learning platform that combines instructors with AI-powered paths for kids ages 6–17. I built responsive educational web applications in Vue.js and Tailwind CSS: reusable UI components, dynamic learning pages, and interactive experiences that keep students engaged.',
      'The work had to hold up on mobile, stay clear for parents and kids, and still feel like a product a child would want to open again.',
    ],
  },
  {
    title: 'The Boltcliq Company',
    year: '2024',
    url: 'https://boltcliq.com',
    urlLabel: 'Visit Boltcliq',
    image: '/profile/portfolio/boltcliq.jpg',
    video: '/profile/portfolio/boltcliq.mp4',
    imageAlt: 'The Boltcliq Company homepage with the headline Build the digital systems your next phase depends on.',
    imageHost: 'boltcliq.com',
    pitch: 'Agency site for an AI, software, and growth studio: services, consulting, and a clear path to book a conversation.',
    detail: [
      'The Boltcliq Company builds AI systems, software, and growth platforms. I interned on the frontend in 2024: responsive pages in HTML, CSS, and JavaScript, UI that holds up on mobile, and the cross-browser details that keep a marketing site feeling finished.',
      'The homepage has to read in one glance for a founder who is already busy: what the studio does, who it is for, and how to start. That is the kind of page I learned to ship there.',
    ],
  },
  {
    title: 'JobBox',
    year: '2025–2026',
    isNew: true,
    url: 'https://getjobbox.com',
    urlLabel: 'Visit JobBox',
    image: '/profile/portfolio/jobbox.jpg',
    video: '/profile/portfolio/jobbox.mp4',
    imageAlt: 'JobBox homepage with the headline Save 15+ hours weekly, Recruit Faster with AI.',
    imageHost: 'getjobbox.com',
    pitch: 'Product design and Vue.js frontend for an AI-native recruitment workspace.',
    detail: [
      'JobBox is an AI-native recruitment workspace for modern teams. I designed and built product interfaces in Figma and Vue.js so recruiters can run hiring workflows in one place, not across a pile of tabs.',
      'The work covered user flows, high-fidelity UI, and the frontend implementation: lists, workspaces, and the everyday screens a recruitment team actually lives in.',
    ],
  },
  {
    title: 'JobBox Dashboard',
    year: '2025–2026',
    isNew: true,
    url: 'https://app.getjobbox.com',
    urlLabel: 'Visit JobBox',
    image: '/profile/portfolio/jobbox-dashboard.jpg',
    video: '/profile/portfolio/jobbox-dashboard.mp4',
    imageAlt: 'JobBox dashboard with job listings, match scores, and the Home sidebar.',
    imageHost: 'app.getjobbox.com',
    pitch: 'The recruitment workspace itself: search, listings, and the screens a hiring team lives in.',
    detail: [
      'The JobBox dashboard is the product, not the brochure. I designed and built the workspace in Figma and Vue.js: Home, job listings, match scores, and the path from a search to a role a recruiter can act on.',
      'The interface has to stay clear under real volume — sidebar navigation, dense listing cards, and AI search without turning into a pile of panels.',
    ],
  },
  {
    title: 'JobBox Recruiter',
    year: '2025–2026',
    isNew: true,
    url: 'https://app.getjobbox.com',
    urlLabel: 'Visit JobBox',
    image: '/profile/portfolio/jobbox-recruiter.jpg',
    video: '/profile/portfolio/jobbox-recruiter.mp4',
    imageAlt: 'JobBox recruiter dashboard with pipeline overview, application stats, and an applications growth chart.',
    imageHost: 'app.getjobbox.com',
    pitch: 'The recruiter workspace: pipeline, analytics, and hiring volume in one dashboard.',
    detail: [
      'The recruiter side of JobBox is a different product surface from the candidate home. I designed and built the dashboard so a hiring team can see organisations, jobs, applications, and talent network at a glance, then drill into pipeline and analytics without leaving the workspace.',
      'The layout has to carry charts and counts without feeling like an admin dump: Quick Overview, Recruitment Pipeline, and Recruiter’s Desk in the same sidebar language as the rest of the app.',
    ],
  },
  {
    title: 'veenna',
    year: '2025–2026',
    isNew: true,
    url: 'https://veenna.getjobbox.com',
    urlLabel: 'Visit veenna',
    image: '/profile/portfolio/veenna.jpg',
    video: '/profile/portfolio/veenna.mp4',
    imageAlt: 'veenna home dashboard greeting Blessing, with Marv Magic, a 14-day streak, and sidebar navigation.',
    imageHost: 'veenna.getjobbox.com',
    pitch: 'Voice-first productivity workspace by JobBox: capture, tasks, and follow-through in one place.',
    detail: [
      'veenna is a voice-first workspace: speak the work, keep it organized, finish it without bouncing between apps. I designed and developed the product UI in Figma and Vue.js so capture, tasks, and follow-through feel like one product.',
      'The frontend had to hold up on web and feel calm enough for daily use: navigation, workspace screens, and the path from a spoken intent to something you can act on.',
    ],
  },
  {
    title: 'PeerPay Credit Dashboard',
    year: '2025',
    pitch: 'Dashboards and customer credit experiences for a fintech platform.',
    detail: [
      'I designed the PeerPay credit dashboard and customer-facing credit experiences. The job was to make lending and repayment feel understandable, not like a spreadsheet dropped into a browser.',
      'Work covered user flows, wireframes, prototypes, and high-fidelity interfaces in Figma, kept consistent across the fintech products around it.',
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
    pitch: 'Responsive booking experiences for a beauty services marketplace.',
    detail: [
      'Luvie is a beauty services marketplace. I designed and developed the responsive booking experience so customers can find a stylist and complete a booking on the devices they already use.',
      'The work combined product design with Vue.js implementation: the interface had to look right and it had to ship.',
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
    pitch: 'Marketing site for an AI education platform serving learners across Nigeria, Ghana, and Kenya.',
    detail: [
      'Top Universe Institute is an AI-first education platform: practical tracks, live mentorship, and a clear path to apply. I designed and built the public site so a prospective student can understand the offer, pick a track, and start an application without getting lost.',
      'The page had to feel serious enough for a career decision and still move: courses, outcomes, and a single primary action.',
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
      'Top Universe is a free education NGO: AI Academy, career tracks, and a path from first lesson to job placement. I designed and built the public site so a learner can understand the offer, apply, and join the community without paying a tuition wall.',
      'The homepage has to carry a live cohort, a clear apply action, and the trust of 16,000+ learners — without looking like a brochure.',
    ],
  },
  {
    title: 'IvoryLearn',
    year: '2025',
    url: 'https://www.ivorylearn.com',
    urlLabel: 'Visit IvoryLearn',
    image: '/profile/portfolio/ivorylearn.jpg',
    video: '/profile/portfolio/ivorylearn.mp4',
    imageAlt: 'IvoryLearn homepage with the headline Empowering Women to Build Careers and Grow Their Businesses.',
    imageHost: 'ivorylearn.com',
    pitch: 'Public site and LMS interfaces for a women-led digital skills academy.',
    detail: [
      'IvoryLearn is a community-led platform for women building careers and businesses: programs, mentorship, and a path from first lesson to launch. I develop responsive LMS interfaces in Vue.js and Tailwind CSS, wired to backend APIs, and I built the public site so a learner can understand the offer and join without getting lost.',
      'Navigation, accessibility, and SEO across learning pages are part of the same job, not extras.',
    ],
  },
  {
    title: 'CRRNetwork',
    year: '2025',
    pitch: 'SEO-optimized responsive landing page, designed and built in Vue.js.',
    detail: [
      'CRRNetwork needed a landing page that could rank and convert. I designed and developed a responsive page in Vue.js and Tailwind CSS, with SEO and performance treated as part of the product, not an afterthought.',
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
      { title: 'JobBox', role: 'Product Design & Frontend', affiliation: 'AI-native recruitment workspace', year: '2025', status: '2025 – 2026', url: 'https://getjobbox.com', roles: [{ role: 'Product Design & Frontend', period: '2025 – 2026' }] },
    ],
  },
  {
    industry: 'Productivity',
    companies: [
      { title: 'veenna', role: 'Product Design & Frontend', affiliation: 'Voice-first workspace · By JobBox', year: '2025', status: '2025 – 2026', url: 'https://veenna.getjobbox.com', roles: [{ role: 'Product Design & Frontend', period: '2025 – 2026' }] },
    ],
  },
  {
    industry: 'Education',
    companies: [
      { title: 'KidsClubZone', role: 'Frontend Developer', affiliation: 'Educational web applications', year: '2024', status: 'Present', url: 'https://kidsclubzone.com' },
      { title: 'IvoryLearn', role: 'Frontend Developer', affiliation: 'Learning management interfaces', year: '2025', status: 'Present', url: 'https://ivorylearn.com' },
    ],
  },
  {
    industry: 'Fintech',
    companies: [
      { title: 'PeerPay Network', role: 'UI/UX Product Designer', affiliation: 'Digital lending & credit', year: '2025', status: 'Present', url: 'https://peerpaynetwork.com' },
    ],
  },
  {
    industry: 'Beauty & lifestyle',
    companies: [
      { title: 'Luvie', role: 'Product Design & Frontend', affiliation: 'Beauty services marketplace', year: '2025', status: 'Present', url: 'https://luvie.io' },
    ],
  },
  {
    industry: 'Community',
    companies: [
      { title: "The Mom's Hub", role: 'Frontend Web Developer', affiliation: 'Websites & course landing pages', year: '2025', status: 'Aug – Dec 2025' },
    ],
  },
  {
    industry: 'Agency',
    companies: [
      { title: 'The Boltcliq Company', role: 'Frontend Web Development Intern', year: '2024', status: 'Jan – Dec 2024', url: 'https://boltcliq.com' },
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
    company: 'JobBox',
    url: 'https://getjobbox.com',
    detail: 'AI-native recruitment workspace',
    summary:
      'I designed and built Vue.js product interfaces for JobBox, an AI-native recruitment workspace. User flows, Figma UI, and the frontend that recruiters use every day: workspaces, lists, and hiring screens that have to stay clear under real volume.',
    roles: [
      { role: 'Product Design & Frontend', period: '2025 – 2026' },
    ],
  },
  {
    company: 'veenna',
    url: 'https://veenna.getjobbox.com',
    detail: 'Voice-first productivity workspace',
    summary:
      'I designed and developed the veenna product UI in Figma and Vue.js. veenna is a voice-first workspace for getting things done: tasks, notes, and agent follow-through in one place. The job was to make that feel usable, not like a demo of voice features.',
    roles: [
      { role: 'Product Design & Frontend', period: '2025 – 2026' },
    ],
  },
  {
    company: 'KidsClubZone',
    url: 'https://kidsclubzone.com',
    detail: 'Educational web applications',
    summary:
      'I build responsive educational web applications in Vue.js and Tailwind CSS. Reusable UI components, dynamic learning pages, and interactive experiences that keep students engaged. The work is always with designers and other engineers, and it has to hold up on mobile.',
    roles: [
      { role: 'Frontend Developer', period: 'Jan 2024 – Present' },
    ],
  },
  {
    company: 'PeerPay Network',
    url: 'https://peerpaynetwork.com',
    detail: 'Digital lending & credit',
    summary:
      'I design responsive web and mobile experiences for digital lending and credit products. User flows, wireframes, prototypes, and high-fidelity interfaces in Figma, with a consistent design language across the fintech products. The focus is onboarding and usability: credit should be understandable.',
    roles: [
      { role: 'UI/UX Product Designer', period: 'Apr 2025 – Present' },
    ],
  },
  {
    company: 'IvoryLearn',
    url: 'https://ivorylearn.com',
    detail: 'Learning management interfaces',
    summary:
      'I develop responsive LMS interfaces in Vue.js and Tailwind CSS, wired to backend APIs. Navigation, accessibility, and SEO across learning pages are part of the same job, not extras.',
    roles: [
      { role: 'Frontend Developer', period: 'Sep 2025 – Present' },
    ],
  },
  {
    company: "The Mom's Hub",
    detail: 'Websites & course landing pages',
    summary:
      'I designed and developed responsive websites and course landing pages in HTML, CSS, and JavaScript. Stakeholders brought the business requirements; I turned them into pages people could actually use.',
    roles: [
      { role: 'Frontend Web Developer', period: 'Aug 2025 – Dec 2025' },
    ],
  },
  {
    company: 'The Boltcliq Company',
    url: 'https://boltcliq.com',
    detail: 'Software development agency',
    summary:
      'Internship year on responsive web pages in HTML, CSS, and JavaScript. I optimized UI components for mobile and cross-browser compatibility, and worked with senior developers to debug and improve frontend performance.',
    roles: [
      { role: 'Frontend Web Development Intern', period: 'Jan 2024 – Dec 2024' },
    ],
  },
]
