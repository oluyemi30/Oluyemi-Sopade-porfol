import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return <section id="contact" className="contact-banner"><span className="section-index">05 / CONTACT</span><h2>Have a project, an idea,<br /><em>or something to build?</em></h2><p style={{color:'var(--ca-muted)', maxWidth:520, margin:'0 auto 30px', lineHeight:1.6}}>Have a project, an idea, or something interesting to build? Let&apos;s talk.</p><Link className="button button-primary" to="/contact">Let&apos;s talk <ArrowUpRight size={17} /></Link></section>;
}
