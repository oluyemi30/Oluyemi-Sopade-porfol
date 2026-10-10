import React from 'react';
import { ArrowUpRight, CircleArrowDown, Cpu, PenLine, Radio, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData, projects, socialLinks, writing } from '../data/portfolioData';
import Footer from '../components/Footer';

const explorations = [
  { icon: Cpu, number: '01', title: 'Intelligent systems', text: 'AI experiments, computer vision, and machine learning that make ideas more useful.' },
  { icon: Radio, number: '02', title: 'Connected things', text: 'Robotics, embedded systems, sensors, and the bridge between software and hardware.' },
  { icon: PenLine, number: '03', title: 'Writing it down', text: 'Notes on technology, building in public, lessons learned, and the questions in between.' },
];

export default function Home() {
  return <div className="site-shell">
    <main>
      <section className="hero-section">
        <div className="eyebrow"><span className="status-dot" /> Lagos, Nigeria <span className="eyebrow-divider">/</span> 2026</div>
        <div className="hero-grid">
          <div>
            <p className="kicker">Developer · Builder · Writer</p>
            <h1>Building things<br /><em>that move</em><br />ideas forward.</h1>
            <p className="hero-copy">I&apos;m Oluyemi Sopade — a developer, builder, and writer exploring the intersection of web development, AI, robotics, and connected systems.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a><Link className="button button-quiet" to="/contact">Get in touch <ArrowUpRight size={17} /></Link></div>
          </div>
          <div className="portrait-wrap"><div className="portrait-frame"><img src={portfolioData.hero.media[0].src} alt="Oluyemi Sopade wearing a black hoodie" /></div><span className="portrait-caption">A developer in his element<br /><strong>— BigYemy</strong></span><span className="portrait-mark">OS / 01</span></div>
        </div>
        <a className="scroll-cue" href="#work"><CircleArrowDown size={20} /> Scroll to explore</a>
      </section>

      <section className="statement-section"><span className="section-index">01 / INTRO</span><div><h2>From the browser<br />to physical hardware.</h2><p>{portfolioData.bio.story}</p></div></section>

      <section id="work" className="work-section"><div className="section-heading"><div><span className="section-index">02 / PROOF OF WORK</span><h2>Selected builds<br /><em>&amp; experiments.</em></h2></div><Link to="/case-studies" className="text-link">View all work <ArrowUpRight size={17} /></Link></div><div className="project-grid">{projects.slice(0, 4).map((project, index) => <Link to={`/case-studies/${project.slug}`} className={`project-card project-card-${index + 1}`} key={project.slug}><div className="project-visual"><img src={project.image} alt="" /><span className="project-number">{String(index + 1).padStart(2, '0')}</span><span className="project-status">{project.status}</span></div><div className="project-meta"><div><p>{project.category}</p><h3>{project.title}</h3></div><ArrowUpRight size={20} /></div><p className="project-description">{project.description}</p></Link>)}</div></section>

      <section className="exploration-section"><div className="section-heading"><div><span className="section-index">03 / AREAS OF EXPLORATION</span><h2>Curious by<br /><em>default.</em></h2></div><Sparkles className="section-spark" size={28} /></div><div className="exploration-grid">{explorations.map(({ icon: Icon, number, title, text }) => <article key={number}><span className="exploration-number">{number}</span><Icon size={23} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="writing-section"><div className="section-heading"><div><span className="section-index">04 / WRITING</span><h2>Thinking<br /><em>out loud.</em></h2></div><Link to="/about" className="text-link">About me <ArrowUpRight size={17} /></Link></div><div className="writing-list">{writing.map((article, index) => <article key={article.title}><span>0{index + 1}</span><div><p className="article-category">{article.category} · {article.date}</p><h3>{article.title}</h3><p>{article.excerpt}</p></div><span className="article-read">{article.readTime}</span></article>)}</div></section>

      <section className="contact-banner"><span className="section-index">05 / CONTACT</span><h2>Have a project, an idea,<br /><em>or something to build?</em></h2><Link className="button button-primary" to="/contact">Let&apos;s talk <ArrowUpRight size={17} /></Link><div className="social-row"><a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a><a href={socialLinks.x} target="_blank" rel="noreferrer">X / @BigYemy</a><a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram</a></div></section>
    </main><Footer />
  </div>;
}
