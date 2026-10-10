import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/portfolioData';

export default function Writing() {
  return <main className="page-shell"><p className="eyebrow">Writing / field notes</p><h1 className="page-title">Things I&apos;m learning<br /><em>out loud.</em></h1><p className="lede">Notes on technical tutorials, AI, robotics, web development, building in public, and the questions that keep me curious.</p><div className="article-grid">{articles.map((article) => <article className="article-card" key={article.slug}><span className="eyebrow">{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><div className="article-meta"><span>{article.date}</span><span>{article.readingTime}</span></div></article>)}</div></main>;
}
