import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded bg-red-600" />
          <span className="text-sm font-semibold tracking-wide text-white">AutoTube</span>
        </a>
        <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden rounded-md border border-white/15 px-3 py-1.5 text-sm text-white hover:bg-white/10 md:block">Pricing</a>
          <a href="#cta" className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-red-500">Get Started</a>
        </div>
      </div>
    </header>
  );
}
