import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/70 to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 shadow">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> Live automation platform
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Launch YouTube channels on autopilot
          </h1>
          <p className="mt-4 max-w-xl text-base text-neutral-300 sm:text-lg">
            AutoTube handles ideation, scriptwriting, voiceover, editing, thumbnails, scheduling, and analytics — so you can scale content, not headcount.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/30 hover:bg-red-500">Start for free</a>
            <a href="#features" className="rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">See features</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-neutral-300">
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> No code required</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> AI-first workflow</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> You own the channel</div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 backdrop-blur">
            <div className="grid grid-cols-2 gap-3 text-xs text-neutral-300">
              {[
                { t: 'Ideas ➝ Scripts', d: 'Topic mining and script drafts in minutes.' },
                { t: 'VO & Avatars', d: 'Studio-grade AI voiceovers and presenters.' },
                { t: 'Stock & B-roll', d: 'Auto-sourced assets with licenses.' },
                { t: 'Edit & Cut', d: 'Timing, captions, transitions — done.' },
                { t: 'Thumbs', d: 'CTR-optimized thumbnails with variants.' },
                { t: 'Schedule', d: 'Auto-publish with best-time detection.' },
                { t: 'Analyze', d: 'A/B tests and retention analytics.' },
                { t: 'Repurpose', d: 'Clips for Shorts, TikTok, Reels.' },
              ].map((i) => (
                <div key={i.t} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-white">{i.t}</div>
                  <div className="mt-1 text-[11px] text-neutral-400">{i.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-500/10 p-3 text-emerald-300">
              <div className="text-sm font-medium">Automation score: 92%</div>
              <div className="text-[11px] text-emerald-200/80">Based on last 30 days of tasks completed automatically.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
