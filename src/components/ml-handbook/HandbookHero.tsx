'use client';

import React from 'react';
import {
  Sparkles,
  Heart,
  Briefcase,
  Flame,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config/site';

export function HandbookHero({
  mode,
  setMode,
  activeTab,
  setActiveTab,
}: {
  mode: 'wife' | 'architect';
  setMode: (mode: 'wife' | 'architect') => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7 shadow-xs">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-[#E03177]/15 via-[#533AFD]/15 to-transparent blur-3xl" />

      <div className="relative z-10 space-y-5">
        {/* Eyebrow & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-50 dark:bg-rose-950/40 px-3.5 py-1 text-xs font-semibold text-rose-700 dark:text-rose-300">
            <Flame className="h-3.5 w-3.5 text-rose-500" />
            <span>আকিরা নাকাই RWB দর্শন: স্টক এআই কেটে ১-অব-১ মাস্টারপিস তৈরি</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[var(--color-text-secondary)]">ভিউ:</span>
            <div className="inline-flex rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMode('wife')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                  mode === 'wife'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Heart className="h-3.5 w-3.5" />
                <span>Wife Mode (সহজ গল্প)</span>
              </button>
              <button
                type="button"
                onClick={() => setMode('architect')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                  mode === 'architect'
                    ? 'bg-[#533AFD] text-white shadow-xs'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Briefcase className="h-3.5 w-3.5" />
                <span>Architect ($5k Master)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Master Heading */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight">
            মেশিন লার্নিং ও এআই{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E03177] via-[#533AFD] to-[#00D4FF]">
              আকিরা নাকাই RWB স্টুডিও
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
            {mode === 'wife' ? (
              <span>
                🌸 <strong>সহজ ঘরোয়া গল্প:</strong> কোনো কঠিন অংক বা প্যারা নেই। রেসিপি বইয়ের পেছনের স্টিকি নোট (LoRA) আর ১০ ডাক্তারের বোর্ড মিটিংয়ের (Random Forest) মতো সহজ রূপকে পুরো এআই বোঝা!
              </span>
            ) : (
              <span>
                🚀 <strong>সিনিয়র আর্কিটেক্ট লেন্স:</strong> Git + Vercel + Inngest + Pexels + Gemini/GPT এবং কাস্টম ৪-বিট প্রাইভেট কন্টেইনার মডেল দিয়ে আপওয়ার্কে গড়ে $৫,০০০ মূল্যের ২০টি প্রজেক্ট প্রতি মাসে ডেলিভার করার কমপ্যাক্ট গাইড।
              </span>
            )}
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5">
            <div className="text-[10px] font-bold uppercase text-[var(--color-text-secondary)]">৮টি স্টেজ কুকবুক</div>
            <div className="text-base font-bold text-[var(--color-text-primary)] mt-0.5">১০০% কভার্ড</div>
            <div className="text-[10px] text-emerald-600 font-medium">জিরো অতিরিক্ত থিওরি</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5">
            <div className="text-[10px] font-bold uppercase text-[var(--color-text-secondary)]">দ্য মাস্টারস্ট্রোক</div>
            <div className="text-base font-bold text-rose-600 mt-0.5">৪-বিট কন্টেইনার</div>
            <div className="text-[10px] text-[var(--color-text-muted)]">১০০% প্রাইভেট ক্লাউড</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5">
            <div className="text-[10px] font-bold uppercase text-[var(--color-text-secondary)]">লোকাল ভার্সাস ক্লাউড</div>
            <div className="text-base font-bold text-[#533AFD] mt-0.5">ম্যাক M1 বনাম A10G</div>
            <div className="text-[10px] text-[var(--color-text-muted)]">$০ বনাম $০.৫০/ঘণ্টা</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5">
            <div className="text-[10px] font-bold uppercase text-[var(--color-text-secondary)]">টার্গেট ভলিউম</div>
            <div className="text-base font-bold text-emerald-600 mt-0.5">২০টি বিড/মাস</div>
            <div className="text-[10px] text-emerald-600 font-medium">গড় চুক্তি $৫,০০০</div>
          </div>
        </div>

        {/* Compact Navigation Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs font-semibold">
          {siteConfig.primaryNav.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-[var(--color-text-primary)] text-[var(--color-canvas)] border-[var(--color-text-primary)] shadow-xs font-bold'
                  : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
