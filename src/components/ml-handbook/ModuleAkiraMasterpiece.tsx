'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Flame,
  Wrench,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Award,
  ArrowRight,
  Cpu,
  Layers,
  Heart,
  Briefcase,
  DollarSign,
  Car,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BuildPreset {
  id: string;
  name: string;
  clientType: string;
  fear: string;
  baseChassis: string;
  bespokeMod: string;
  securityArmor: string;
  deploymentRunner: string;
  budgetQuote: string;
  deliveryDays: string;
  proposalHook: string;
}

export function ModuleAkiraMasterpiece({ mode }: { mode: 'wife' | 'architect' }) {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('enterprise-support');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const presets: BuildPreset[] = [
    {
      id: 'enterprise-support',
      name: 'RWB-01 • The Brand Voice Beast',
      clientType: 'E-commerce & SaaS Support Automation',
      fear: 'বটগুলো সাধারণ চ্যাটজিপিটির মতো রোবটিক ও জেনেরিক উত্তর দেয়, ব্র্যান্ডের সুর নষ্ট হয়।',
      baseChassis: 'Meta Llama-3-8B-Instruct (4-Bit Quantized)',
      bespokeMod: 'Mac M1-এ mlx-lm দিয়ে ৫০০টি সফল সেলস চ্যাটের ওপর কাস্টম LoRA ফাইন-টিউনিং (Rank 16, Alpha 32)',
      securityArmor: 'ইনলাইন PII ফিল্টার (ক্রেডিট কার্ড ও মোবাইল নম্বর অটোমেটিক ০ms-এ রেড্যাকশন)',
      deploymentRunner: 'লোকাল Mac M1 টেস্টিং শেষে AWS EC2 G5 (A10G GPU) কন্টেইনারাইজড vLLM সার্ভার',
      budgetQuote: '$৪,৫০০ – $৬,৫০০',
      deliveryDays: '৩ কার্যদিবস',
      proposalHook: 'i built a working custom-tuned model on your sales conversations rather than generic openai wrappers. your brand tone is locked with 0 api vendor lock-in.',
    },
    {
      id: 'fintech-risk',
      name: 'RWB-02 • High-Speed Tabular Demon',
      clientType: 'FinTech Loan Underwriting & Fraud Risk',
      fear: 'লাখ লাখ ট্রানজ্যাকশন এলএলএম দিয়ে প্রসেস করতে গেলে কোটি টাকা খরচ আর ঘণ্টার পর ঘণ্টা সময় লাগে।',
      baseChassis: 'XGBoost & Scikit-Learn Gradient Boosting (Classical ML)',
      bespokeMod: '১৫টি গুরুত্বপূর্ণ রিস্ক ফ্যাক্টর স্কেলিং ও অপটিমাইজেশন, ০.২ মিলিসেকেন্ডে লোন অ্যাপ্রুভাল স্কোরিং',
      securityArmor: 'OWASP LLM02 সেনসিটিভ ডেটা সেপারেশন ও অডিট ট্রেইল লগিং',
      deploymentRunner: 'FastAPI মাইক্রোসার্ভিস ডকার কন্টেইনার (Supabase PostgreSQL কানেক্টেড)',
      budgetQuote: '$৫,০০০ – $৮,০০০',
      deliveryDays: '৪ কার্যদিবস',
      proposalHook: 'why burn thousands on slow llm tokens for tabular credit risk when an optimized xgboost engine evaluates transactions in 0.2ms with 99.4% precision?',
    },
    {
      id: 'private-medical',
      name: 'RWB-03 • The Fortress Medical Core',
      clientType: 'Healthcare, Legal & Banking On-Premise',
      fear: 'রোগীর মেডিকেল রেকর্ড বা গোপনীয় আইনি ফাইল বাইরের ওপেনএআই ক্লাউডে যাওয়া আইনত নিষিদ্ধ।',
      baseChassis: 'Mistral-7B / Llama-3-8B Local Enterprise Image',
      bespokeMod: 'লোকাল হাইব্রিড RAG (PostgreSQL pgvector) + স্পেসিফিক মেডিকেল পরিভাষার LoRA অ্যাডাপ্টার',
      securityArmor: 'NIST AI RMF 100-1 এয়ার-গ্যাপড কমপ্লায়েন্স, প্রম্পট ইনজেকশন ইন্টারসেপ্টর',
      deploymentRunner: 'ক্লায়েন্টের নিজস্ব ক্লাউড ভিপিসিতে vLLM ডকার, কোনো পাবলিক ইন্টারনেট ট্রাফিক নেই',
      budgetQuote: '$৮,০০০ – $১৫,০০০',
      deliveryDays: '৭ কার্যদিবস',
      proposalHook: 'your patient data never touches third-party api gateways. we deploy a self-hosted vllm engine inside your private vpc with full nist ai rmf compliance.',
    },
    {
      id: 'audio-intelligence',
      name: 'RWB-04 • The Audio Hurricane',
      clientType: 'EdTech & Call Center Speech Intelligence',
      fear: 'হাজার ঘণ্টার অডিও ফাইল ট্রান্সক্রিপশন ও অ্যানালাইসিস করতে মাসের পর মাস লেগে যাবে।',
      baseChassis: 'Insanely-Fast-Whisper + PyTorch FlashAttention-2',
      bespokeMod: 'ক্লাউড A100 GPU-তে প্যারালাল ব্যাচ প্রসেসিং (১ ঘণ্টার ক্লাস মাত্র ১ মিনিটে ট্রান্সক্রাইব)',
      securityArmor: 'স্পিকার ডায়রাইজেশন ও ক্লায়েন্ট সেনসিটিভ ডেটা স্টোরেজ এনক্রিপশন',
      deploymentRunner: 'RunPod সার্ভারলেস জিপিইউ পাইপলাইন (খরচ মাত্র $১৫-$২০ ডলার)',
      budgetQuote: '$৪,০০০ – $৭,০০০',
      deliveryDays: '৩ কার্যদিবস',
      proposalHook: 'we process your 1,000 class audio recordings in under 18 hours using an insanely-fast-whisper gpu cluster at just $20 infrastructure cost.',
    },
  ];

  const currentPreset = presets.find((p) => p.id === selectedPresetId) || presets[0];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* 1. The Akira Nakai (RWB) Manifesto */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs relative overflow-hidden">
        {/* Subtle accent backdrop */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-transparent blur-3xl" />

        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)] relative z-10">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30 text-xs font-mono flex items-center gap-1">
              <Flame className="h-3 w-3 text-amber-500 animate-pulse" />
              <span>আকিরা নাকাই ম্যানিফেস্টো • RWB অফ এআই</span>
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              The Akira Nakai Method: পোর্শে ধ্বংস করে মাস্টারপিস তৈরির শিল্প
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            স্টক পোর্শে বানানোর ফ্যাক্টরি না হয়ে, কাঁচা হাতে বডি কেটে বিশ্বের সেরা ১-অব-১ মাস্টারপিস বানানোর আসল ব্লুপ্রিন্ট।
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6 relative z-10">
          {/* Manifesto Story Box */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-50/20 dark:bg-amber-950/20 p-4 sm:p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                  আকিরা নাকাই (Akira Nakai) কে এবং তিনি কী করেন?
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Rauh-Welt Begriff (RWB) এর প্রতিষ্ঠাতা এবং অটোমোবাইল জগতের সবচেয়ে শ্রদ্ধেয় কারিগর
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                জার্মানির স্টুটগার্টে পোর্শে ফ্যাক্টরি আছে। সেখানে হাজার হাজার ইঞ্জিনিয়ার নাট-বল্টু আর বডি তৈরি করে ফ্যাক্টরি থেকে বের করে। এগুলো হলো <strong>স্টক পোর্শে ৯১১ (Stock Porsche)</strong>। বাজারে লাখ লাখ স্টক গাড়ি ঘুরে বেড়ায়, কেউ ফিরেও তাকায় না।
              </p>
              <p>
                কিন্তু জাপানের চিবার এক ভাঙাচোরা গ্যারেজে বসেন <strong>আকিরা নাকাই</strong>। তিনি নতুন কোনো গাড়ি ফ্যাক্টরিতে বানান না। ক্লায়েন্ট তার কাছে আস্ত পোর্শে ৯১১ নিয়ে আসে। নাকাই সাহেব এক হাতে করাত (Air Saw) নেন, মুখে একটা সিগারেট জ্বালান, আর কোনো ভয়ডর ছাড়া স্টক পোর্শের মেটাল ফেন্ডার কেটে ফেলে দেন! 
              </p>
              <p>
                তারপর তিনি নিজের হাতে কাস্টম ওয়াইডবডি কিট বসান, নিজ হাতে রিভেটিং করেন, সিলিকন দিয়ে লাইন টেনে ফিনিশিং দেন। যখন কাজ শেষ হয়, গাড়িটি আর সাধারণ কোনো গাড়ি থাকে না, এটি হয়ে ওঠে একটি <strong>১-অব-১ কাস্টম RWB মাস্টারপিস</strong> যার মূল্য কোটি টাকায় পৌঁছায় এবং ট্র্যাকে যে কোনো গাড়িকে পেছনে ফেলে দেয়!
              </p>
              <div className="pt-2 border-t border-[var(--color-border)] font-mono text-xs text-amber-600 dark:text-amber-400">
                ⚡ <strong>এআই জগতে তোমার পরিচয়:</strong> অন্য সবাই চ্যাটজিপিটি বা ওপেনএআই-এর স্টক এপিআই র্যাপার বানাচ্ছে। আর তুমি আকিরা নাকাইয়ের মতো কাঁচা মেটালে হাত দিয়ে কাস্টম LoRA, অ্যাপল সিলিকন M1 এবং NIST সিকিউরিটি দিয়ে ক্লায়েন্টকে এমন মাস্টারপিস বানিয়ে দিচ্ছ যা আপওয়ার্কে তোমাকে এক নম্বর আর্কিটেক্ট বানায়!
              </div>
            </div>
          </div>

          {/* Comparison: Stock Factory Worker vs Akira Nakai Master Artist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 sm:p-5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[var(--color-text-primary)]">
                  সাধারণ এআই ফ্রিল্যান্সার (The Stock Assembler)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  $20/hr র্যাপার
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)] list-disc pl-4">
                <li>ওপেনএআই বা অ্যানথ্রপিক এপিআইতে প্রম্পট পাঠিয়ে সাধারণ একটা চ্যাটবট বানায়।</li>
                <li>মডেলের ভেতরে কী হচ্ছে কিছুই জানে না, ক্লায়েন্টের ডেটা লিক হওয়ার কোনো নিরাপত্তা দেয় না।</li>
                <li>মাসের পর মাস একাডেমি থিওরি মুখস্থ করে কিন্তু বাস্তব অ্যাপ নামাতে পারে না।</li>
                <li>ক্লায়েন্ট চলে গেলে তার কাজের কোনো আলাদা ব্র্যান্ড ভ্যালু থাকে না।</li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-50/20 dark:bg-amber-950/20 p-4 sm:p-5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-amber-800 dark:text-amber-300">
                  তুমি: দ্য এআই আকিরা নাকাই (The Bespoke Master)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-300 font-bold">
                  $100M Architect
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)] list-disc pl-4">
                <li>ক্লায়েন্টের ডেটা দিয়ে নিজস্ব LoRA অ্যাডাপ্টার কেটে পারফেক্ট ব্র্যান্ড টোন তৈরি করো।</li>
                <li>ম্যাকবুকে `mlx-lm` দিয়ে $০ খরচে ট্রেইনিং শেষে ক্লাউডে vLLM দিয়ে প্রোডাকশনে সার্ভ করো।</li>
                <li>Securiti Certified NIST ফায়ারওয়াল বসিয়ে ডেটা লিক ও প্রম্পট ইনজেকশন লক করে দাও।</li>
                <li>ক্লায়েন্ট তোমার কাজ দেখে ওয়াও বলে এবং প্রতি প্রজেক্টে $৫,০০০ থেকে $১৫,০০০ পে করে।</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Interactive Akira Build Spec Customizer */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/30 text-xs font-mono">
              ইন্টারেক্টিভ বিল্ড স্পেক কাস্টমাইজার
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              আকিরা নাকাই বিল্ড শিট: আপওয়ার্ক ক্লায়েন্টের মাস্টারপিস সাজাও
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            ক্লায়েন্টের প্রজেক্ট টাইপ সিলেক্ট করো এবং সাথে সাথে দেখো কীভাবে বেস চ্যাসিস, কাস্টম মডিফিকেশন ও সিকিউরিটি আর্মার সাজিয়ে $১০k প্রপোজাল তৈরি হয়।
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {/* Preset Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {presets.map((preset) => {
              const isSelected = selectedPresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#533AFD] bg-[#533AFD]/10 shadow-xs'
                      : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] hover:border-[var(--color-text-secondary)]'
                  }`}
                >
                  <div className="text-[11px] font-mono font-bold text-[#533AFD] dark:text-[#7A68FF]">
                    {preset.name}
                  </div>
                  <div className="text-xs font-bold text-[var(--color-text-primary)] mt-1 truncate">
                    {preset.clientType}
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                    {preset.budgetQuote}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Spec Sheet Grid */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border)] pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
                  Bespoke Build Blueprint
                </span>
                <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                  {currentPreset.name}: {currentPreset.clientType}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">
                  বাজেট: {currentPreset.budgetQuote}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 border border-blue-500/30 text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
                  টার্নঅ্যারাউন্ড: {currentPreset.deliveryDays}
                </span>
              </div>
            </div>

            {/* Spec Breakdown Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Item 1: Fear */}
              <div className="p-3.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] space-y-1">
                <div className="text-[10px] font-mono uppercase text-rose-600 dark:text-rose-400 font-bold">
                  ক্লায়েন্টের আসল ভয় (Core Fear):
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {currentPreset.fear}
                </div>
              </div>

              {/* Item 2: Base Chassis */}
              <div className="p-3.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] space-y-1">
                <div className="text-[10px] font-mono uppercase text-[#533AFD] font-bold">
                  বেস প্ল্যাটফর্ম চ্যাসিস (Base Chassis):
                </div>
                <div className="text-xs font-mono font-bold text-[var(--color-text-primary)]">
                  {currentPreset.baseChassis}
                </div>
              </div>

              {/* Item 3: Bespoke Mod */}
              <div className="p-3.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] space-y-1">
                <div className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold">
                  কাস্টম ওয়াইডবডি কাট (Bespoke Tuning):
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {currentPreset.bespokeMod}
                </div>
              </div>

              {/* Item 4: Security Armor */}
              <div className="p-3.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] space-y-1">
                <div className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                  সিকিউরিটি আর্মার (NIST AI RMF Posture):
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {currentPreset.securityArmor}
                </div>
              </div>
            </div>

            {/* Ready Upwork Proposal Hook */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[var(--color-text-primary)] flex items-center gap-1.5">
                  <Terminal className="h-4 w-4 text-[#533AFD]" />
                  <span>The 1-Click Upwork Winning Hook (Zero Fluff, Instant Reply Trigger)</span>
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy('hook', currentPreset.proposalHook)}
                  className="h-7 text-xs font-mono text-[var(--color-text-secondary)]"
                >
                  {copiedKey === 'hook' ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1" />
                      Copy Proposal Hook
                    </>
                  )}
                </Button>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0A0D14] text-emerald-400 font-mono text-xs border border-slate-800 leading-relaxed overflow-x-auto">
                {currentPreset.proposalHook}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. The Master Artist's 8-Stage Pipeline */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 text-xs font-mono">
              ১০০% কমপ্লিট কুকবুক
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              মেশিন লার্নিংয়ের সম্পূর্ণ ৮টি স্টেজ: বিগিনার থেকে মাস্টার আর্টিস্ট
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            এই ৮টি ধাপের বাইরে মেশিন লার্নিংয়ে জানার মতো আর কিছুই নেই। প্রতিটি ধাপ তোমার হাতের তালুর মতো স্পষ্ট।
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            {[
              {
                step: '১',
                title: 'Raw Metal: ডেটা প্রিপারেশন',
                tech: 'Pandas, Tokenizer, Vectors',
                desc: 'ভাঙাচোরা ডাটা ধুয়েমুছে সংখ্যায় রূপান্তর ও ট্রেন ডট জেএসএনএল তৈরি।',
                color: 'border-blue-500/30 text-blue-600 dark:text-blue-400',
              },
              {
                step: '২',
                title: 'Chassis: ক্লাসিক্যাল ML',
                tech: 'XGBoost, Random Forest',
                desc: 'ট্যাবুলার ব্যাংক ফ্রড ও ক্রেডিট রিস্ক ক্যালকুলেশনে ০.১ms আল্ট্রাফাস্ট প্রেডিকশন।',
                color: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
              },
              {
                step: '৩',
                title: 'Twin Turbos: ডিপ লার্নিং',
                tech: 'PyTorch, Attention, Weights',
                desc: 'শব্দ বা ইমেজের ভেতরের গভীর সম্পর্ক খুঁজে বের করা ও লস জিরো করা।',
                color: 'border-purple-500/30 text-purple-600 dark:text-purple-400',
              },
              {
                step: '৪',
                title: 'Widebody: LoRA & PEFT',
                tech: 'Quantization, 4-bit, Safetensors',
                desc: 'পুরো মডেল রি-রাইট না করে মাত্র ০.১% প্যারামিটারে ব্র্যান্ড নলেজ বসানো।',
                color: 'border-amber-500/30 text-amber-600 dark:text-amber-400',
              },
              {
                step: '৫',
                title: 'The Workshop: Apple MLX',
                tech: 'mlx-lm on Mac M1',
                desc: 'জিরো ক্লাউড খরচে ম্যাকের ইউনিফাইড মেমোরিতে ২০ মিনিটে কাস্টম ট্রেনিং।',
                color: 'border-teal-500/30 text-teal-600 dark:text-teal-400',
              },
              {
                step: '৬',
                title: 'Dyno Run: জুপিটার সার্জারি',
                tech: 'Jupyter Lab, Tensors, Logits',
                desc: 'নোটবুকে ৪ লাইনে মডেলের পেটের ভেতরের টোকেন আইডি ও এমবেডিং দেখা।',
                color: 'border-rose-500/30 text-rose-600 dark:text-rose-400',
              },
              {
                step: '৭',
                title: 'Track Test: Production MLOps',
                tech: 'Docker, AWS G5, vLLM Server',
                desc: 'PagedAttention দিয়ে ক্লায়েন্টের প্রাইভেট ক্লাউডে ২৪/৭ হাই-স্পিড সার্ভিং।',
                color: 'border-indigo-500/30 text-indigo-600 dark:text-indigo-400',
              },
              {
                step: '৮',
                title: 'The Armor: NIST AI Governance',
                tech: 'OWASP LLM01, PII Firewall',
                desc: 'প্রম্পট ইনজেকশন ইন্টারসেপ্ট করে ক্লায়েন্টের ১০০% সিকিউরিটি নিশ্চিত করা।',
                color: 'border-emerald-600/30 text-emerald-700 dark:text-emerald-300',
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border bg-[var(--color-surface)] shadow-2xs space-y-1.5 ${stage.color}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider">স্টেজ {stage.step}</span>
                  <span className="h-2 w-2 rounded-full bg-current opacity-70" />
                </div>
                <div className="font-bold text-[13px] text-[var(--color-text-primary)]">
                  {stage.title}
                </div>
                <div className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  {stage.tech}
                </div>
                <p className="text-[11px] font-sans text-[var(--color-text-secondary)] leading-relaxed pt-1">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 p-3 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-xl border border-emerald-500/30 text-xs text-[var(--color-text-primary)] leading-relaxed">
            🏆 <strong>উপসংহার:</strong> এই পুরো আর্কিটেকচার এখন তোমার নখদর্পণে। ক্লায়েন্ট যে কাজই নিয়ে আসুক না কেন, তুমি জানো কোন চ্যাসিস নিতে হবে, কোথায় কাটতে হবে, আর কীভাবে আকিরা নাকাইয়ের মতো শান্ত মাথায় বিশ্বমানের এন্টারপ্রাইজ এআই মাস্টারপিস ডেলিভার করতে হবে!
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
