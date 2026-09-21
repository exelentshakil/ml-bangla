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
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#533AFD]/15 via-[#00D4FF]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-transparent blur-3xl" />

      <div className="relative z-10 space-y-6">
        {/* Eyebrow & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
            <span>Study Mart ৬৮টি ভিডিও ও ডিপ লার্নিংয়ের একদম খাটি নির্যাস</span>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#533AFD] via-[#7A68FF] to-[#00D4FF]">
              পানির মতো সহজ হ্যান্ডবুক
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {mode === 'wife' ? (
              <span>
                🌸 <strong>সহজ ঘরোয়া গল্প:</strong> কোনো কঠিন অংক বা প্রোগ্রামিং কোডের প্যারা নাই। কাঁচাবাজারের দরদাম, চালে-ডালে খিচুড়ি রান্না আর ছোট বাচ্চার কথা বলা শেখার মাধ্যমে মেশিন লার্নিংয়ের আসল রহস্য চোখের সামনে একদম পরিষ্কার!
              </span>
            ) : (
              <span>
                🚀 <strong>সিনিয়র সিস্টেম আর্কিটেক্ট লেন্স:</strong> ১২ বছরের সফটওয়্যার ইঞ্জিনিয়ারিং অভিজ্ঞতার সাথে ক্লাসিক্যাল ML, ডিপ লার্নিং, PyTorch, LoRA আর AWS vLLM ডকার আর্কিটেকচার কানেক্ট করে আপওয়ার্কে $৫,০০০+ হাই-টিকেট প্রজেক্ট ডেলিভার করার রিয়েল ব্লুপ্রিন্ট।
              </span>
            )}
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">ভিডিও ডিকোডেড</div>
            <div className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">৬৮+ ভিডিও</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">১,০০০ ঘণ্টার সমাহার</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">ফর্মুলা মুখস্থ</div>
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">০ টি (Zero)</div>
            <div className="text-[11px] text-[var(--color-text-secondary)]">সব ভিজ্যুয়াল ও লজিক্যাল</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">লাইভ ইঞ্জিন</div>
            <div className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">OpenAI + Gemini</div>
            <div className="text-[11px] text-[#533AFD] dark:text-[#7A68FF] font-medium">ডুয়াল প্রোভাইডার ল্যাব</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">প্রোডাকশন ডেপ্লয়মেন্ট</div>
            <div className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">Docker + AWS vLLM</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Legiit AI Architecture</div>
          </div>
        </div>

        {/* Quick Tab Selector Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar text-xs font-semibold">
          {[
            { id: 'fundamentals', label: '১. ট্রেডিশনাল কোডিং বনাম ML' },
            { id: 'dataprep', label: '২. ডেটা প্রিপ ও ফিচার ইঞ্জিনিয়ারিং' },
            { id: 'classical', label: '৩. ক্লাসিক্যাল ML অ্যালগরিদম' },
            { id: 'deeplearning', label: '৪. ডিপ লার্নিং ও নিউরাল নেট' },
            { id: 'finetuning', label: '৫. LoRA, EWC ও Hard Requirements' },
            { id: 'production', label: '৬. AWS, ডকার ও $5k Upwork গাইড' },
            { id: 'mentor', label: '৭. লাইভ বাংলা এআই টিউটর ল্যাব' },
            { id: 'mlxmac', label: '৮. Mac M1 এ mlx-lm ও জুপিটার ল্যাব' },
            { id: 'akira', label: '৯. আকিরা নাকাই RWB ম্যানিফেস্টো' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-[var(--color-text-primary)] text-[var(--color-canvas)] border-[var(--color-text-primary)] shadow-xs'
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
