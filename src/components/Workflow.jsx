import React from 'react';
import { Check } from 'lucide-react';

const steps = [
  {
    step: '1',
    title: 'Connect your channels',
    desc: 'Link YouTube accounts and content sources like Drive or Notion. Choose templates to start fast.'
  },
  {
    step: '2',
    title: 'Assemble your flow',
    desc: 'Drag steps for Script → Voiceover → B-roll → Thumbnail → Upload. Add review gates where needed.'
  },
  {
    step: '3',
    title: 'Review and schedule',
    desc: 'Approve drafts, auto-generate SEO metadata, and schedule for peak audience times across timezones.'
  },
  {
    step: '4',
    title: 'Analyze and iterate',
    desc: 'Track RPM, AVD, CTR, and retention curves. Auto-tweak titles/thumbnails based on performance.'
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">From idea to upload—on autopilot</h2>
            <p className="mt-3 text-white/70">Design a repeatable pipeline that turns prompts into published videos with minimal oversight.</p>
            <ul className="mt-6 space-y-4">
              {steps.map((s) => (
                <li key={s.step} className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-black font-semibold">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-medium">{s.title}</h3>
                    <p className="text-sm text-white/70">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {['No-code editor', 'Human-in-the-loop reviews', 'Versioning', 'Multi-channel posting'].map((b) => (
                <span key={b} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                  <Check className="h-4 w-4 text-white/80" /> {b}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-black/60 p-4 backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <Card title="Script" desc="Generate 8-min script with hook, chapters, CTA" status="Ready" />
                <Card title="Voiceover" desc="Natural US male voice, -3dB normalization" status="Queued" />
                <Card title="B-roll" desc="Auto-select stock, align to beats" status="Processing" />
                <Card title="Thumbnail" desc="A/B test 2 variants, bold title" status="Draft" />
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Scheduled</span>
                  <span className="rounded-full bg-white text-black px-2 py-0.5 text-xs">Fri 5:30 PM</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded bg-white/10">
                  <div className="h-full w-2/3 bg-white" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, status }) {
  const statusColors = {
    Ready: 'bg-emerald-400',
    Queued: 'bg-amber-300',
    Processing: 'bg-sky-300',
    Draft: 'bg-zinc-300',
  };
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">{title}</h4>
        <span className={`h-2 w-2 rounded-full ${statusColors[status] || 'bg-zinc-300'}`} />
      </div>
      <p className="mt-2 text-xs text-white/70 min-h-[2rem]">{desc}</p>
      <div className="mt-3 inline-flex rounded-full bg-black/60 border border-white/10 px-2 py-1 text-xs text-white/70">
        {status}
      </div>
    </div>
  );
}
