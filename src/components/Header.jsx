import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header() {
  const navItems = [['/', 'Home'], ['/about', 'About'], ['/case-studies', 'Work'], ['/playground', 'Playground'], ['/contact', 'Contact']];
  return <header className="site-header"><div className="site-nav"><Link className="site-logo" to="/"><span>OS</span> / BigYemy</Link><nav className="nav-links" aria-label="Primary navigation">{navItems.map(([to,label]) => <NavLink key={to} to={to} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav><a className="nav-social" href="https://x.com/BigYemy" target="_blank" rel="noreferrer">@BigYemy ↗</a><button className="mobile-toggle" aria-label="Open navigation"><Menu size={22} /></button></div></header>;
}
