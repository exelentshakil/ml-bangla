'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  Workflow,
  Globe,
  Lock,
  Flame,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Heart,
  Video,
  DollarSign,
  Terminal,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ModuleManifestoStack({ mode }: { mode: 'wife' | 'architect' }) {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'git-vercel',
      title: '১. Git + Vercel (লাইটস্পিড লাইভ ডেমো)',
      badge: 'Speed Weapon',
      color: '#533AFD',
      summary: 'প্রথম মেসেজেই ক্লিক করার মতো ১০০% লাইভ লিঙ্ক পাঠানো। কোনো ক্লায়েন্ট কথা শোনে না, তারা চোখের সামনে লাইভ সফটওয়্যার দেখতে চায়।',
      whyWins: 'যেখানে অন্য ফ্রিল্যান্সাররা লম্বা লম্বা প্যারাগ্রাফ লেখে, সেখানে তোমার লাইভ লিঙ্ক দেখে ক্লায়েন্টের চোয়াল ঝুলে যায়। আপওয়ার্কে বিডের প্রথম ২ ঘণ্টার মধ্যে কনভার্সন নিশ্চিত হয়।',
      tech: 'Next.js 15 App Router, Vercel Edge Network, sub-30s CI/CD builds.',
    },
    {
      id: 'pexels-media',
      title: '২. Pexels API (মিলিয়ন ডলার ভিজ্যুয়াল স্যুট)',
      badge: 'Visual Authority',
      color: '#00D4FF',
      summary: 'অটোমেটেড হাই-রেজোলিউশন ভিডিও ব্যাকড্রপ ও ইন্ডাস্ট্রি-গ্রেড ইমেজ ইন্টিগ্রেশন। কোনো স্টক ওয়াটারমার্ক ছাড়া খাঁটি এন্টারপ্রাইজ লুক।',
      whyWins: 'কোর টেকনোলজি যতই ভালো হোক, যদি দেখতে ক্যাটক্যাটে বা সস্তা দেখায় তবে ক্লায়েন্ট $৫,০০০ দেবে না। প্রিমিয়াম ড্যাশবোর্ড ফিল তাকে বড় বাজেট দিতে বাধ্য করে।',
      tech: 'barakahsoft/.env.local Pexels Key, Automated hero video streaming, dynamic fallback.',
    },
    {
      id: 'dual-public-ai',
      title: '৩. ডুয়াল এআই ইঞ্জিন (OpenAI + Gemini Flash)',
      badge: 'High-Speed Gateway',
      color: '#10A37F',
      summary: 'পাবলিক রিকোয়েস্ট হ্যান্ডলিং ও আল্ট্রা-ফাস্ট রাউটিং। OpenAI জিপিটি-৪ও-মিনি ও গুগল জেমিনি ২.০ ফ্ল্যাশ অটোমেটিক ফেইলওভার সহ প্রি-কানেক্টেড।',
      whyWins: 'একটা এপিআই ডাউন হলে তোমার সিস্টেম কখনো বন্ধ হবে না। ক্লায়েন্ট দেখে সিস্টেমটি প্রোডাকশন-রেডি এবং হাই-কনকারেন্সিতে ক্র্যাশ করে না।',
      tech: 'Native fetch, automated model fallback, 80ms latency response, zero sdk lag.',
    },
    {
      id: 'inngest-queues',
      title: '৪. Inngest ইভেন্ট কিউ (এন্টারপ্রাইজ ব্যাকগ্রাউন্ড ইঞ্জিন)',
      badge: 'Resilience Engine',
      color: '#FF5E3A',
      summary: 'লং-রানিং এআই জবস, ডেটা সিঙ্ক ও বাল্ক মডেল ইনফারেন্সের ব্যাকগ্রাউন্ড কিউ। কোনো টাইমআউট নেই, স্বয়ংক্রিয় রিট্রাই লুপ।',
      whyWins: 'সস্তা ডেভেলপাররা নেক্সটজেস এপিআইতে ভারী কাজ চালিয়ে ৫৪ সেকেন্ডে টাইমআউট খেয়ে বসে থাকে। ইনজেস্টের স্টেপ-ফাংশন আর্কিটেকচার সিস্টেমকে ব্ল্যাকআউট-প্রুফ করে।',
      tech: 'Inngest Serverless Event Bus, Step-level durability, automated backpressure handling.',
    },
    {
      id: 'ai-firewall',
      title: '৫. NIST AI RMF ও সিকিউরিটি ফায়ারওয়াল',
      badge: 'Enterprise Moat',
      color: '#D97706',
      summary: 'OWASP LLM01 প্রম্পট ইনজেকশন শিল্ড এবং অটোমেটেড PII মাস্কিং। সিকিউরিটি সার্টিফাইড আর্কিটেকচার (Cert ID: 14B411BCE-14B411A3D-1451CFE76)।',
      whyWins: 'কোনো বড় এন্টারপ্রাইজ বা হেলথকেয়ার ক্লায়েন্ট আনপ্রোটেক্টেড এআই নেয় না। এই সিকিউরিটি শিল্ড থাকার কারণে তোমার আওয়ার্লি রেট $৮০-$১২০ এ জাস্টিফাইড হয়।',
      tech: 'Inline regex + embedding tokenizer, zero-leak telemetry, audit logging.',
    },
    {
      id: 'custom-private-model',
      title: '৬. কাস্টম ট্রেইনড প্রাইভেট মডেল (আকিরা RWB ওয়াইডবডি)',
      badge: 'The Final Boss',
      color: '#E03177',
      summary: 'অ্যাপল সিলিকন MLX অথবা ক্লাউড vLLM ডকারে ক্লায়েন্টের প্রাইভেট ডেটায় ফাইন-টিউনড নিজস্ব মডেল। কোম্পানির ডেটা কোম্পানি থেকে বাইরে যায় না।',
      whyWins: 'এটাই সেই নিউক্লিয়ার ওয়েপন যা কোনো সস্তা ইঞ্জিনিয়ারের কাছে নেই। ক্লায়েন্ট ১০০% কনফিডেন্সে তোমাকে $৫,০০০ প্রোজেক্ট দিয়ে দেয় কারণ তার সিক্রেট সম্পূর্ণ সুরক্ষিত।',
      tech: 'Apple MLX Metal Accel, 4-bit LoRA (r=16, alpha=32), Dockerized vLLM serving.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. The Akira Nakai RWB Philosophy Card */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs overflow-hidden relative">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#E03177]/15 via-[#533AFD]/10 to-transparent blur-3xl" />

        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)] relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30 text-xs font-mono">
                RWB MANIFESTO
              </Badge>
              <CardTitle className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
                আকিরা নাকাই দর্শন: পোরশে তৈরি না করে কেন আমরা পোরশে কাটি?
              </CardTitle>
            </div>
            <span className="text-xs font-mono text-rose-500 font-bold">
              RAUH-Welt BEGRIFF AI
            </span>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            মেশিন লার্নিং কোনো অ্যাকাডেমিক অংকের প্রতিযোগিতা নয়, এটি হলো বিশ্বের সেরা স্টক মডেল নিয়ে ক্লায়েন্টের জন্য ১-অব-১ বেস্পোক মাস্টারপিস বানানোর আর্ট।
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Old Academic Trap */}
            <div className="p-4 sm:p-5 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-3">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                <Flame className="h-4 w-4" />
                <span>প্রচলিত ভুল রাস্তা (The Academic Trap)</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                ১,০০০ ঘণ্টার ইউটিউব ভিডিও দেখা, ব্ল্যাকবোর্ডে ব্যাকপ্রপ সমীকরণ মুখস্থ করা, স্ক্র্যাচ থেকে নতুন টেনসরফ্লো ইঞ্জিন বানানোর চেষ্টা করা। মাস শেষে রেজাল্ট শূন্য, ক্লাউডে হাজার ডলারের অপচয়, এবং আপওয়ার্কে ক্লায়েন্ট এসে বলে: &quot;ভাই তুমি কি ডেমো বানিয়ে দেখাতে পারো?&quot; তখন আর মুখে কথা থাকে না।
              </p>
              <div className="text-[11px] font-mono text-rose-500 bg-rose-500/10 p-2 rounded-lg">
                ❌ ভুল: ১ বিলিয়ন প্যারামিটার মডেল স্ক্র্যাচ থেকে ট্রেইন করতে যাওয়া
              </div>
            </div>

            {/* The Akira Nakai Way */}
            <div className="p-4 sm:p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Sparkles className="h-4 w-4" />
                <span>আকিরা নাকাই পদ্ধতি (RWB Master Artist)</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                আকিরা নাকাই নিজে কোনো পোরশে কারখানার ইঞ্জিন বা বডি বানায় না। মেটা, মিস্ট্রাল ও ওপেনএআই ইতোমধ্যে শত মিলিয়ন ডলার খরচ করে বিশ্বমানের স্টক ইঞ্জিন (Llama-3, Whisper) বানিয়ে রেখেছে। আমরা সেই স্টক শ্যাসিস হাতে নিয়ে নিখুঁত কাটিং করে ৪-বিট LoRA ওয়াইডবডি কিট এবং নিজস্ব সিকিউরিটি আরমার বসিয়ে ১-অব-১ মাস্টারপিস বানাই!
              </p>
              <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-2 rounded-lg">
                ✅ সঠিক: বিশ্বের সেরা ওপেন-ওয়েট মডেলের ওপর বেস্পোক LoRA অ্যাডাপ্টার
              </div>
            </div>
          </div>

          {/* Core Takeaway Quote */}
          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed">
            <p className="font-semibold text-[#533AFD] dark:text-[#7A68FF] mb-1">
              💡 ভাই ব্রাদার সারসংক্ষেপ:
            </p>
            &quot;তুমি যখন ক্লায়েন্টকে বলবে যে তার ডেটা ওপেনএআই-এর সার্ভারে যাবে না, তার নিজের প্রাইভেট ডকার বা লোকাল অ্যাপলে ৪-বিট কোয়ান্টাইজড হয়ে ঘুরবে, এবং সামনে থাকবে ইনজেস্ট ব্যাকগ্রাউন্ড কিউ আর পেক্সেলের এন্টারপ্রাইজ ফিনিশ: তখন কোনো ৫ ডলারের ফ্রিল্যান্সারের সাধ্য নেই তোমার ক্লায়েন্ট ভাঙিয়ে নেয়!&quot;
          </div>
        </CardContent>
      </Card>

      {/* 2. The 6-Pillar Battle Weapon Stack */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/30 text-xs font-mono">
                  THE WEAPON STACK
                </Badge>
                <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                  শাকিলের ৬-পিলার আপওয়ার্ক কম্যান্ড সিস্টেম
                </CardTitle>
              </div>
              <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                এই ৬টি টুলের সুসংহত মিশ্রণেই প্রতিটি বিড পরিণত হয় $৫,০০০-$১০,০০০ হাই-টিকেট ক্লোজিং মেশিনে।
              </CardDescription>
            </div>
            <div className="text-xs font-mono text-[var(--color-text-muted)]">
              Sub-3.5 Minute Turnaround
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {pillars.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePillar(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activePillar === idx
                    ? 'border-[#533AFD] bg-[#533AFD]/10 shadow-xs'
                    : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] hover:border-[var(--color-text-secondary)]'
                }`}
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  পিলার {idx + 1}
                </div>
                <div className="text-xs font-bold text-[var(--color-text-primary)] mt-1 truncate">
                  {p.badge}
                </div>
              </button>
            ))}
          </div>

          {/* Active Pillar Showcase */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border)] pb-3">
              <div>
                <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                  {pillars[activePillar].title}
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                  {pillars[activePillar].summary}
                </p>
              </div>
              <Badge className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/30 text-xs font-mono self-start sm:self-auto">
                {pillars[activePillar].badge}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1.5 bg-[var(--color-surface)] p-4 rounded-lg border border-[var(--color-border)]">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  কেন এটা ক্লায়েন্টকে ঘায়েল করে?
                </span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {pillars[activePillar].whyWins}
                </p>
              </div>

              <div className="space-y-1.5 bg-[var(--color-surface)] p-4 rounded-lg border border-[var(--color-border)]">
                <span className="font-bold text-[#533AFD] dark:text-[#7A68FF] flex items-center gap-1.5">
                  <Terminal className="h-4 w-4" />
                  আন্ডারলাইং টেকনোলজি আর্কিটেকচার
                </span>
                <p className="font-mono text-xs text-[var(--color-text-primary)] leading-relaxed">
                  {pillars[activePillar].tech}
                </p>
              </div>
            </div>
          </div>

          {/* Operational Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)]">
              <div className="text-[10px] font-mono uppercase text-[var(--color-text-secondary)]">টার্গেট ভলিউম</div>
              <div className="text-xl font-bold text-[var(--color-text-primary)] mt-0.5">২০টি প্রোজেক্ট/মাস</div>
              <div className="text-[10px] text-emerald-600 font-medium">স্মুথ ফ্লো ডেলিভারি</div>
            </div>
            <div className="p-3 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)]">
              <div className="text-[10px] font-mono uppercase text-[var(--color-text-secondary)]">গড় চুক্তি মূল্য</div>
              <div className="text-xl font-bold text-[#533AFD] mt-0.5">$৫,০০০ USD</div>
              <div className="text-[10px] text-[var(--color-text-muted)]">হাই-টিকেট এন্টারপ্রাইজ</div>
            </div>
            <div className="p-3 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)]">
              <div className="text-[10px] font-mono uppercase text-[var(--color-text-secondary)]">টার্নঅ্যারাউন্ড সময়</div>
              <div className="text-xl font-bold text-teal-600 mt-0.5">&lt; ৩.৫ মিনিট</div>
              <div className="text-[10px] text-[var(--color-text-muted)]">বিড থেকে লাইভ ডেপ্লয়</div>
            </div>
            <div className="p-3 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)]">
              <div className="text-[10px] font-mono uppercase text-[var(--color-text-secondary)]">ক্লায়েন্ট কনভার্সন</div>
              <div className="text-xl font-bold text-emerald-600 mt-0.5">৫-স্টার রেটিং</div>
              <div className="text-[10px] text-[var(--color-text-muted)]">১০০% জব সাকসেস স্কোর</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
