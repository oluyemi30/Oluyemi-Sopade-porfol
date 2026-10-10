export const socialLinks = {
  github: 'https://github.com/oluyemi30',
  x: 'https://x.com/BigYemy',
  instagram: 'https://www.instagram.com/oluyemisopade/',
  linkedin: '',
  substack: '',
  email: '',
};

export const projects = [
  { slug: 'navtrack', title: 'NavTrack', category: 'Robotics and IoT', status: 'Experiment', description: 'A GPS/GSM tracking system exploring embedded telemetry, positioning, cellular communication, and a monitoring dashboard.', tags: ['GPS', 'GSM', 'IoT', 'Embedded systems'], image: '/projects/trackr-banner.jpg' },
  { slug: 'signai', title: 'SignAI / Silent Voice AI', category: 'Artificial Intelligence', status: 'Experiment', description: 'A computer-vision experiment for sign-language learning using MediaPipe and an LSTM-based approach.', tags: ['Python', 'MediaPipe', 'Machine learning'], image: '/projects/checkam-home.jpg' },
  { slug: 'footballgpt', title: 'FootballGPT', category: 'Machine Learning', status: 'Experiment', description: 'An exploration of football data, prediction workflows, and interfaces for making analytics easier to use.', tags: ['Python', 'ML', 'Football data'], image: '/projects/fasttrack-result.jpg' },
  { slug: 'smart-compost', title: 'Smart Compost', category: 'Embedded Systems', status: 'Experiment', description: 'An Arduino-based composting system using sensors, a pump, relay, and LCD for automated monitoring.', tags: ['Arduino', 'Sensors', 'Automation'], image: '/projects/agrofinis-farm.png' },
  { slug: 'lectureai', title: 'LectureAI', category: 'Artificial Intelligence', status: 'In Progress', description: 'An experiment in lecture transcription, summarization, and document generation.', tags: ['AI', 'Transcription', 'Documents'], image: '/projects/kuza-logo.jpg' },
  { slug: 'civic-report', title: 'Civic Report', category: 'Web Development', status: 'Experiment', description: 'A civic technology concept for reporting infrastructure problems and communicating them clearly.', tags: ['Web', 'Civic tech', 'Interfaces'], image: '/projects/luxe-estate.png' },
];

export const writing = [
  { title: 'Notes from building in public', excerpt: 'A placeholder for a future essay about experiments, lessons, and the work behind the work.', category: 'Building in Public', date: 'Draft', readTime: '—' },
  { title: 'Things I am learning about intelligent systems', excerpt: 'A placeholder for notes on AI, robotics, and making complex ideas practical.', category: 'AI and Robotics', date: 'Draft', readTime: '—' },
  { title: 'The value of small working experiments', excerpt: 'A placeholder for reflections on starting small, testing assumptions, and sharing the process.', category: 'Ideas and Perspectives', date: 'Draft', readTime: '—' },
];

export const portfolioData = {
  name: 'Oluyemi Sopade',
  role: 'Developer, Builder & Writer',
  status: 'Currently exploring connected systems',
  location: 'Lagos, Nigeria',
  seo_title: 'Oluyemi Sopade — Developer, Builder & Writer',
  seo_description: 'Explore the projects, experiments, and writing of Oluyemi Sopade across web development, AI, robotics, IoT, and technology.',
  hero: {
    nameDisplay: 'OLUYEMI', label: 'hello, I am', status: 'Open to interesting builds', location: 'Lagos, Nigeria', role: 'Developer, Builder & Writer',
    media: [{ src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/L4R92Jrt_400x400-zSHzU20XjFVhRKfUsqT1RJIjyDjkXv.jpg' }],
    notes: [{ text: 'Developer + Builder', color: 'var(--ca-lime)' }, { text: 'Lagos, Nigeria', color: 'var(--ca-paper)' }],
    title: 'Building things that move ideas forward.', ctaPrimary: 'Explore my work',
  },
  bio: {
    label: 'A quick note', title: 'About', cardLabel: 'The short version',
    body: "I'm Oluyemi Sopade, a developer and builder exploring the intersection of web development, AI, robotics, and connected systems. I build projects, solve problems, and write about what I learn.",
    story: 'From the browser to physical hardware, I enjoy turning ideas into working experiments and documenting the process along the way. My interests move between interfaces, intelligent systems, electronics, and the questions that make technology useful.',
    callout: 'Building things that move ideas forward.', note: 'This site is a living archive of projects, experiments, and notes.',
    photo: [{ src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/L4R92Jrt_400x400-zSHzU20XjFVhRKfUsqT1RJIjyDjkXv.jpg', caption: 'Oluyemi Sopade' }],
    skills: [{ label: 'Web development', color: 'var(--ca-lime)', dark: true }, { label: 'AI + ML', color: 'var(--ca-paper)', dark: false }, { label: 'Robotics + IoT', color: 'var(--ca-sand)', dark: false }],
    stack: [{ category: 'Web', items: ['JavaScript', 'React', 'Node.js', 'Python'] }, { category: 'Systems', items: ['Arduino', 'Sensors', 'Computer vision', 'Machine learning'] }],
    principles: [], milestones: [], work: [],
  },
  case_studies: { label: 'Selected proof of work', title: 'BUILDS & EXPERIMENTS', description: 'A growing archive of things I have built, explored, and learned from.', relatedTitle: 'More projects', items: projects.map((project, index) => ({ ...project, num: String(index + 1).padStart(2, '0'), featured: index < 3, subtitle: project.category, color: 'var(--ca-lime)', textColor: 'text-white', bgClass: 'bg-[var(--ca-ink)]', heroImages: [{ type: 'image', src: project.image, alt: project.title }], facts: [{ label: 'Status', value: project.status }, { label: 'Category', value: project.category }], story: { problem: { description: project.description, media: [] }, solution: { description: 'Details are being documented as this project develops.', media: [] }, result: { description: 'Editable case-study placeholder: add verified results, links, and screenshots here.', media: [] } } })), },
  contact: { comment: { avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/L4R92Jrt_400x400-zSHzU20XjFVhRKfUsqT1RJIjyDjkXv.jpg' } },
};

export { projects as projectArchive };
