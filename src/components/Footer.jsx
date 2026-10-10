import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return <footer className="site-footer"><span>© 2026 Oluyemi Sopade</span><nav><Link to="/about">About</Link><span> · </span><Link to="/case-studies">Work</Link><span> · </span><Link to="/contact">Contact</Link></nav><span>Building things that move ideas forward.</span></footer>;
}
