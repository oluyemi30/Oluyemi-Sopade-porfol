export const siteConfig = {
  name: 'Oluyemi Sopade',
  handle: '@BigYemy',
  description: 'Developer, builder, and writer exploring web development, artificial intelligence, robotics, embedded systems, and the Internet of Things.',
  location: 'Nigeria',
  email: 'your-email@example.com',
  social: {
    github: 'https://github.com/your-github-username',
    x: 'https://x.com/BigYemy',
    linkedin: 'https://www.linkedin.com/in/your-linkedin-username',
    substack: 'https://your-substack.substack.com',
    instagram: 'https://instagram.com/Oluyemisopade',
    whatsapp: 'https://wa.me/your-number'
  },
  portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/L4R92Jrt_400x400-KSw1GYsRte94OxacxtkdkSXYKCvTHU.jpg'
};

export const projects = [
  { slug: 'navtrack', title: 'NavTrack', category: 'Robotics & IoT', status: 'Exploring', description: 'GPS/GSM tracking and IoT telemetry project.', technologies: ['GPS', 'GSM', 'IoT'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' },
  { slug: 'signai', title: 'SignAI / Silent Voice AI', category: 'Artificial Intelligence', status: 'Experiment', description: 'A camera-based sign-language learning experiment.', technologies: ['Computer Vision', 'AI'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' },
  { slug: 'footballgpt', title: 'FootballGPT', category: 'Machine Learning', status: 'Experiment', description: 'A football analytics and prediction project.', technologies: ['Python', 'Machine Learning'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' },
  { slug: 'smart-compost', title: 'Smart Compost', category: 'Robotics & IoT', status: 'Prototype', description: 'A sensor-assisted composting prototype.', technologies: ['Sensors', 'Embedded Systems'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' },
  { slug: 'smartsalerevenue', title: 'SmartSaleRevenue', category: 'Web Development', status: 'Building', description: 'A revenue tracking web application.', technologies: ['Web Development'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' },
  { slug: 'ozyport', title: 'Ozyport', category: 'Web Development', status: 'Building', description: 'A real-estate management interface.', technologies: ['React', 'Web Development'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' },
  { slug: 'lectureai', title: 'LectureAI', category: 'Artificial Intelligence', status: 'Exploring', description: 'A lecture transcription and summarization concept.', technologies: ['AI', 'Speech'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' },
  { slug: 'civic-report', title: 'Civic Report', category: 'Web Development', status: 'Concept', description: 'A civic infrastructure reporting project.', technologies: ['Web Development'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' },
  { slug: 'yoruba-ai-chatbot', title: 'Yoruba AI Chatbot', category: 'Artificial Intelligence', status: 'Exploring', description: 'An experiment in conversational AI and Yoruba language.', technologies: ['AI', 'Language'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' },
  { slug: 'plant-monitoring', title: 'Plant Monitoring System', category: 'Robotics & IoT', status: 'Prototype', description: 'A connected system for monitoring plant conditions.', technologies: ['Sensors', 'IoT'], contribution: 'Details to be added.', problem: 'Details to be added.', implementation: 'Details to be added.', lesson: 'Details to be added.' }
];

export const articles = [
  { slug: 'notes-from-the-workbench', title: 'Notes from the workbench', category: 'Building in public', date: 'Draft', readingTime: 'Draft', excerpt: 'A place for field notes on building across software, hardware, and intelligent systems.' },
  { slug: 'learning-in-public', title: 'Learning in public', category: 'Ideas & perspectives', date: 'Draft', readingTime: 'Draft', excerpt: 'Thoughts on documenting experiments, unfinished ideas, and the useful things between the milestones.' }
];

export const portfolioData = {
  name: siteConfig.name,
  role: 'Developer, builder & writer',
  status: 'Currently exploring',
  location: siteConfig.location,
  seo_title: `${siteConfig.name} — Developer, builder & writer`,
  seo_description: siteConfig.description,
  hero: { nameDisplay: 'OLUYEMI', label: 'hello, I am', status: 'Currently exploring', location: siteConfig.location, role: 'Developer, builder & writer', media: [{ src: siteConfig.portrait }, { src: siteConfig.portrait }], notes: [{ text: 'Developer + builder' }, { text: 'Nigeria' }], title: 'Building things that move ideas forward.', ctaPrimary: 'Get in touch' },
  bio: { label: 'a little about me', title: 'About', body: 'I build for the web, experiment with intelligent systems, work with hardware, and document what I learn along the way.', photo: [{ src: siteConfig.portrait, caption: 'Oluyemi Sopade' }], story: 'I am exploring the space where software meets the physical world. My work moves between web development, artificial intelligence, robotics, embedded systems, and the Internet of Things. This portfolio is a living record of projects, questions, and lessons.', callout: 'Currently building, learning, and writing from Nigeria.', note: 'The details of my story, experience, and education are intentionally easy to update as the work grows.', principles: [], milestones: [], stack: [], work: [], skills: [] },
  case_studies: { label: 'proof of work', title: 'Selected projects', description: 'A growing archive of experiments and builds. Project details are kept honest and editable as the work develops.', items: projects },
  contact: { label: 'say hello', banner: 'Get in touch', description: 'Have a question, an idea, or a useful problem to work through?', email: siteConfig.email, social: siteConfig.social }
};

export default portfolioData;
