import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

const links = [['/about', 'About'], ['/case-studies', 'Work'], ['/writing', 'Writing'], ['/now', 'Now']];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">O</span><span>{siteConfig.name}</span></Link><nav className="desktop-nav">{links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav><div className="header-actions"><a className="header-social" href={siteConfig.social.x} target="_blank" rel="noreferrer">{siteConfig.handle}</a><Link className="button button-small" to="/contact">Let&apos;s talk <span>↗</span></Link><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>{open && <nav className="mobile-nav">{links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}<Link to="/contact" onClick={() => setOpen(false)}>Let&apos;s talk ↗</Link></nav>}</header>;
}
