import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import Footer from '../components/Footer';

export default function Contact() {
  return <div className="site-shell"><main className="contact-banner" style={{minHeight:'calc(100vh - 65px)', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}><span className="section-index">Contact / 01</span><h1>Let&apos;s build something<br /><em>worth showing.</em></h1><p style={{color:'var(--ca-muted)', maxWidth:520, lineHeight:1.7, margin:'28px 0'}}>Have a project, an idea, or something interesting to build? Reach out through one of the links below.</p><div className="social-row"><a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href={socialLinks.x} target="_blank" rel="noreferrer">X / @BigYemy <ArrowUpRight size={14} /></a><a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div></main><Footer /></div>;
}
