import React from 'react';

const features = [
  {
    title: 'Research & Ideation',
    desc: 'Mine trends, competitors, and keywords to generate high-performing content ideas automatically.',
    icon: '🔎',
  },
  {
    title: 'Scriptwriting',
    desc: 'Outline and write scripts with brand voice presets and fact-checking hooks.',
    icon: '✍️',
  },
  {
    title: 'Voice & Avatars',
    desc: 'Natural AI voiceovers with emotion control and on-screen avatar presenters.',
    icon: '🎙️',
  },
  {
    title: 'Autonomous Editing',
    desc: 'Smart cuts, captions, b-roll, transitions, and music timed to script beats.',
    icon: '🎬',
  },
  {
    title: 'Thumbnails',
    desc: 'Generate click-worthy thumbnails with A/B variants and brand templates.',
    icon: '🖼️',
  },
  {
    title: 'Scheduling',
    desc: 'Auto-publish to YouTube with best-time detection and content calendar.',
    icon: '🗓️',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need to scale</h2>
        <p className="mt-2 text-neutral-400">An end-to-end stack for YouTube automation, built for speed and quality.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5 shadow">
            <div className="mb-2 text-2xl">{f.icon}</div>
            <div className="text-lg font-semibold text-white">{f.title}</div>
            <div className="mt-1 text-sm text-neutral-400">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
