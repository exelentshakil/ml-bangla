'use client';

import React from 'react';
import {
  Sparkles,
  Heart,
  Briefcase,
  Layers,
  Cpu,
  Zap,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-sm">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#E03177]/15 via-[#533AFD]/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-transparent blur-3xl" />

      <div className="relative z-10 space-y-6">
        {/* Eyebrow & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-50 dark:bg-rose-950/40 px-3.5 py-1 text-xs font-semibold text-rose-700 dark:text-rose-300">
            <Flame className="h-3.5 w-3.5 text-rose-500 animate-pulse" />
            <span>আকিরা নাকাই RWB দর্শন: স্টক এআই কেটে বেস্পোক ১-অব-১ ওয়াইডবডি মাস্টারপিস</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[var(--color-text-secondary)]">লার্নিং ভিউ:</span>
            <div className="inline-flex rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-1">
              <button
                type="button"
                onClick={() => setMode('wife')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  mode === 'wife'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Heart className="h-3.5 w-3.5" />
                <span>Wife Mode (সহজ ঘরোয়া গল্প)</span>
              </button>
              <button
                type="button"
                onClick={() => setMode('architect')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  mode === 'architect'
                    ? 'bg-[#533AFD] text-white shadow-xs'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Briefcase className="h-3.5 w-3.5" />
                <span>Architect Mode ($5,000 Upwork Master)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Master Heading */}
        <div className="space-y-3 max-w-4xl">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.2]">
            মেশিন লার্নিং ও এআই{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E03177] via-[#533AFD] to-[#00D4FF]">
              আকিরা নাকাই RWB স্টুডিও
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {mode === 'wife' ? (
              <span>
                🌸 <strong>সহজ ঘরোয়া গল্প:</strong> কঠিন কোনো অংক বা হাজার লাইনের কোড নয়। রেসিপি বইয়ের পেছনের স্টিকি নোট (LoRA), রান্নার আগে সবজি ধুয়ে নেওয়া (Data Prep), আর ১০ জন অভিজ্ঞ চিকিৎসকের বোর্ড মিটিংয়ের (Random Forest) মাধ্যমে পুরো এআইকে হাতের মুঠোয় আনা!
              </span>
            ) : (
              <span>
                🚀 <strong>সিনিয়র সিস্টেম আর্কিটেক্ট লেন্স:</strong> ১২ বছরের সফটওয়্যার ইঞ্জিনিয়ারিং অভিজ্ঞতার সাথে Git + Vercel + Inngest + Pexels + Dual Public AI এবং কাস্টম ট্রেইনড প্রাইভেট মডেল জুড়ে দিয়ে আপওয়ার্কে গড়ে $৫,০০০ মূল্যের ২০টি প্রজেক্ট প্রতি মাসে ডেলিভার করার অপরাজেয় অস্ত্রাগার।
              </span>
            )}
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">আকিরা মেথডোলজি</div>
            <div className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">১-অব-১ মাস্টারপিস</div>
            <div className="text-[11px] text-rose-500 font-medium">জিরো স্টক এআই স্লপ</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">ডুয়াল ইঞ্জিন ল্যাব</div>
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">ম্যাকবুক + ক্লাউড</div>
            <div className="text-[11px] text-[var(--color-text-secondary)]">$০ লোকাল বনাম A10G vLLM</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">আপওয়ার্ক উইনিং স্ট্যাক</div>
            <div className="text-lg font-bold text-[#533AFD] dark:text-[#7A68FF] mt-0.5">৬-পিলার অস্ত্রাগার</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">গড় চুক্তি $৫,০০০ USD</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">এন্টারপ্রাইজ সিকিউরিটি</div>
            <div className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">NIST AI RMF</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Securiti সার্টিফাইড</div>
          </div>
        </div>

        {/* Quick Tab Selector Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar text-xs font-semibold">
          {siteConfig.primaryNav.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer border ${
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
