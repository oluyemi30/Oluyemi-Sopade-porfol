import React from 'react';

const areas = [
  ['Building', 'Small, useful systems across the web, AI, and connected devices.'],
  ['Learning', 'Embedded systems, robotics, machine learning, and the engineering details underneath the interface.'],
  ['Writing', 'Making notes from experiments so the next attempt starts with a little more context.']
];

export default function Now() { return <main className="page-shell"><p className="eyebrow">Now / currently</p><h1 className="page-title">What has my<br /><em>attention.</em></h1><p className="lede">A short, deliberately updateable snapshot of what I am building, learning, exploring, and writing about.</p><div className="now-list">{areas.map(([title, body], index) => <section key={title} className="now-item"><span className="now-index">0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div></main>; }
