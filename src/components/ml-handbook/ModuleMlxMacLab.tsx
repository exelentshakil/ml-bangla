'use client';

import React, { useState } from 'react';
import {
  Laptop,
  Terminal,
  Cpu,
  Sparkles,
  Play,
  RotateCcw,
  Check,
  Copy,
  Layers,
  FileCode,
  Zap,
  CheckCircle2,
  DollarSign,
  Activity,
  HardDrive,
  Eye,
  ArrowRight,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ModuleMlxMacLab({ mode }: { mode: 'wife' | 'architect' }) {
  // Simulator 1: Interactive Training State
  const [iterations, setIterations] = useState(600);
  const [loraRank, setLoraRank] = useState(16);
  const [loraLayers, setLoraLayers] = useState(16);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Simulator 2: Interactive JSONL Dataset Builder
  const [customerName, setCustomerName] = useState('রহিম ব্রাদার্স ট্রেডিং');
  const [systemInstruction, setSystemInstruction] = useState('তুমি একজন বিশ্বস্ত ও দক্ষ কাস্টমার রিলেশনস ম্যানেজার।');
  const [userQuery, setUserQuery] = useState('আমাদের পাইকারি চালের অর্ডারে কত পারসেন্ট ডিসকাউন্ট পাব?');
  const [assistantReply, setAssistantReply] = useState('রহিম ব্রাদার্স, আপনাদের ৫০ বস্তা বা তার বেশি চালের অর্ডারে আমরা ফ্ল্যাট ৭% কর্পোরেট ডিসকাউন্ট ও ফ্রি ডেলিভারি দিচ্ছি।');

  // Copy helper
  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(key);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  // Generate dynamic loss curve data based on iterations and rank
  const generateLossData = () => {
    const points = [];
    const steps = 10;
    const stepSize = iterations / steps;
    const baseInitialLoss = 2.85;
    const finalLossTarget = Math.max(0.18, 0.45 - (iterations / 1000) * 0.2 - (loraRank / 32) * 0.05);

    for (let i = 0; i <= steps; i++) {
      const iter = Math.round(i * stepSize);
      // Exponential decay curve
      const decay = Math.exp(-i / 2.8);
      const loss = finalLossTarget + (baseInitialLoss - finalLossTarget) * decay + (Math.random() * 0.04 - 0.02);
      points.push({
        step: `Iter ${iter}`,
        iter,
        loss: Number(loss.toFixed(3)),
        accuracy: Math.min(99.2, Number((40 + (1 - loss / baseInitialLoss) * 58).toFixed(1))),
      });
    }
    return points;
  };

  const lossData = generateLossData();

  // JSONL formatted sample
  const jsonlOutput = JSON.stringify(
    {
      messages: [
        { role: 'system', content: systemInstruction },
        { role: 'user', content: `[${customerName}] ${userQuery}` },
        { role: 'assistant', content: assistantReply },
      ],
    },
    null,
    2
  );

  return (
    <div className="space-y-8">
      {/* 1. Header & The Mental Model Shift */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/30 text-xs font-mono">
              মডিউল ৮ • লাইভ ল্যাব ও এক্সিকিউশন
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              Mac M1 এ `mlx-lm` ও জুপিটার ল্যাব: চাকা তৈরি না করে ফেরারি গাড়ি বানানোর খেলা
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            রিসার্চারদের মতো প্রাচীন থিওরি মুখস্থের দিন শেষ। আধুনিক টুলস দিয়ে কীভাবে ১০ হাজার ডলারের এআই অ্যাপ তৈরি করবে তার প্রমাণ।
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {/* Comparison Cards: Researcher vs Systems Architect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-bold text-sm text-[var(--color-text-primary)]">
                  <FileCode className="h-4 w-4 text-slate-500" />
                  রিসার্চারের রাস্তা (গাড়ির চাকা নতুন করে আবিষ্কার)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  থিওরি ও পেপার
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {mode === 'wife' ? (
                  <span>
                    বাজার থেকে গোটা মশলা কিনে শিলপাটায় ১ মাস ধরে পিষে পিষে গুঁড়া করা। রান্না শুরু করার আগেই হাত ব্যথা, সময় নষ্ট এবং মেজাজ খারাপ! শেষ পর্যন্ত খাওয়ার সময় পার হয়ে যায় কিন্তু রান্না শেষ হয় না।
                  </span>
                ) : (
                  <span>
                    স্ক্র্যাচ থেকে ক্যালকুলাসের ডেরিভেটিভ লেখা, ম্যাট্রিক্স মাল্টিপ্লিকেশন সি++ এ অপটিমাইজ করা, কিংবা টাইটানিক ডেটাসেটের প্যাসেঞ্জার ক্লাসিফিকেশন কোড মুখস্থ করা। দিনশেষে ক্লায়েন্টের এন্টারপ্রাইজ বিজনেসে এর কোনো ভ্যালু থাকে না।
                  </span>
                )}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20 p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-bold text-sm text-emerald-800 dark:text-emerald-300">
                  <Zap className="h-4 w-4 text-emerald-600" />
                  তোমার আর্কিটেক্ট রাস্তা (রেডিমেড ইঞ্জিনে ফেরারি তৈরি)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold">
                  $10k Client Value
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {mode === 'wife' ? (
                  <span>
                    বিশ্বের সেরা ইলেকট্রিক ব্লেন্ডার মেশিন (Apple Mac M1) আর শেফদের সেরা প্যাকেটের স্পেশাল মশলা (`mlx-lm`) নিয়ে আসা। মাত্র ১৫ মিনিটে এমন রাজকীয় বিরিয়ানি রান্না করে ফেলা যা সবাই চেটেপুটে খাবে এবং প্রশংসায় ভাসিয়ে দেবে!
                  </span>
                ) : (
                  <span>
                    অ্যাপলের অপটিমাইজড `mlx-lm` দিয়ে ১৬ জিবি ম্যাকবুকেই মাত্র ৪০ মিনিটে ক্লায়েন্টের কোম্পানির ভাষায় Llama-3 কে ফাইন-টিউন করে ফেলা। শূন্য ডলার ক্লাউড বিল, ১০০% লোকাল প্রাইভেসি, এবং সাথে সাথে vLLM দিয়ে প্রোডাকশনে সার্ভ করে $৫,০০০-$১০,০০০ ইনভয়েস রেইজ করা।
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Key Advantages Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-1">
              <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">ট্রেইনিং খরচ</div>
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">$০ (সম্পূর্ণ ফ্রি)</div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">ম্যাকবুকের ইউনিফাইড মেমোরি ব্যবহার করে।</p>
            </div>
            <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-1">
              <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">অ্যাডাপ্টার সাইজ</div>
              <div className="text-lg font-bold text-[#533AFD]">৫০-৮০ MB</div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">১৬ জিবি মডেলের বদলে মাত্র ০.১% প্যারামিটার।</p>
            </div>
            <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-1">
              <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">ট্রেইনিং সময়</div>
              <div className="text-lg font-bold text-amber-600 dark:text-amber-400">২০-৪৫ মিনিট</div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">ক্লায়েন্টের ৩০০-১,০০০ প্রশ্ন-উত্তরের ডেটাসেটে।</p>
            </div>
            <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-1">
              <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">এপিআই সার্ভার</div>
              <div className="text-lg font-bold text-teal-600 dark:text-teal-400">OpenAI Compatible</div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">Next.js বা PHP দিয়ে ডাইরেক্ট ফেচ কল।</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Interactive Simulator: LoRA Loss Curve & Parameter Tuning */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 text-xs font-mono">
              ইন্টারেক্টিভ সিমুলেটর
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              LoRA ফাইন-টিউনিং ও লস কার্ভ (Loss Curve) পর্যবেক্ষণ
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            প্যারামিটার পরিবর্তন করে লাইভ দেখো কীভাবে মডেল প্রতি স্টেপে ভুল শুধরে সঠিক উত্তরের দিকে এগোয়!
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {/* Controls Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3.5 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)] space-y-2">
              <div className="flex justify-between font-semibold">
                <span>ইটারেশন (Iterations):</span>
                <span className="text-[#533AFD] font-bold">{iterations} steps</span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={iterations}
                onChange={(e) => setIterations(Number(e.target.value))}
                className="w-full accent-[#533AFD] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--color-text-muted)]">
                <span>100 (দ্রুত টেস্ট)</span>
                <span>1,000 (পারফেক্ট)</span>
              </div>
            </div>

            <div className="p-3.5 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)] space-y-2">
              <div className="flex justify-between font-semibold">
                <span>LoRA Rank (r):</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{loraRank} rank</span>
              </div>
              <input
                type="range"
                min="8"
                max="32"
                step="8"
                value={loraRank}
                onChange={(e) => setLoraRank(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--color-text-muted)]">
                <span>r=8 (হালকা)</span>
                <span>r=32 (গভীর জ্ঞান)</span>
              </div>
            </div>

            <div className="p-3.5 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)] space-y-2">
              <div className="flex justify-between font-semibold">
                <span>LoRA Layers:</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold">{loraLayers} layers</span>
              </div>
              <input
                type="range"
                min="8"
                max="32"
                step="8"
                value={loraLayers}
                onChange={(e) => setLoraLayers(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--color-text-muted)]">
                <span>8 লেয়ার (কম মেমোরি)</span>
                <span>32 লেয়ার (ফুল অ্যাডাপ্ট)</span>
              </div>
            </div>
          </div>

          {/* Recharts Area Curve */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 sm:p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-bold font-mono text-[var(--color-text-primary)]">
                  রিয়েল-টাইম ট্রেইনিং লস ফল (Gradient Descent Visualization)
                </span>
              </div>
              <div className="text-xs font-mono text-[var(--color-text-secondary)]">
                টার্গেট লস: <strong className="text-emerald-600 dark:text-emerald-400">{lossData[lossData.length - 1].loss}</strong> (৯৭%+ অ্যাকুরেসি)
              </div>
            </div>

            <div className="h-56 sm:h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={lossData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="lossGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#533AFD" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#533AFD" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="step" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 3.2]} tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-surface)',
                      borderColor: 'var(--color-border)',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="loss"
                    stroke="#533AFD"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#lossGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-2 text-[11px] text-[var(--color-text-muted)] font-mono flex items-center justify-between">
              <span>Iter 0: Loss 2.85 (শুরুতে মডেল অন্ধের মতো ভুল বলছিল)</span>
              <span>Iter {iterations}: Loss {lossData[lossData.length - 1].loss} (এখন নিখুঁত উত্তর দিচ্ছে)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. Interactive Dataset Builder: train.jsonl */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-300 text-xs font-mono">
              ডেটা প্রিপারেশন ল্যাব
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              ক্লায়েন্টের ডেটা থেকে `train.jsonl` তৈরি: আসল সিক্রেট সস
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            মডেলকে স্পেসিফিক কোনো স্টাইলে কথা বলা শেখানোর সবচেয়ে গুরুত্বপূর্ণ ধাপ হলো ডেটাসেটের ফরম্যাটিং।
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Inputs (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-3 text-xs font-mono">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-[var(--color-text-secondary)]">
                  ক্লায়েন্টের প্রতিষ্ঠানের নাম:
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] focus:border-[#533AFD] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-[var(--color-text-secondary)]">
                  সিস্টেম নির্দেশিকা (System Prompt):
                </label>
                <input
                  type="text"
                  value={systemInstruction}
                  onChange={(e) => setSystemInstruction(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] focus:border-[#533AFD] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-[var(--color-text-secondary)]">
                  কাস্টমারের ইনপুট প্রশ্ন (User Query):
                </label>
                <input
                  type="text"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] focus:border-[#533AFD] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-[var(--color-text-secondary)]">
                  আদর্শ উত্তর যা মডেল শিখবে (Target Assistant Reply):
                </label>
                <textarea
                  rows={3}
                  value={assistantReply}
                  onChange={(e) => setAssistantReply(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] focus:border-[#533AFD] outline-none resize-none"
                />
              </div>
            </div>

            {/* Right Live JSONL Preview (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[var(--color-text-primary)] flex items-center gap-1.5">
                  <FileCode className="h-4 w-4 text-amber-600" />
                  <span>train.jsonl ফাইলের ১টি লাইভ রেকর্ড</span>
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy('jsonl', jsonlOutput)}
                  className="h-7 text-xs font-mono text-[var(--color-text-secondary)]"
                >
                  {copiedSection === 'jsonl' ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1" />
                      Copy JSON
                    </>
                  )}
                </Button>
              </div>

              <pre className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto max-h-64 leading-relaxed">
                {jsonlOutput}
              </pre>
              <p className="text-[11px] text-[var(--color-text-muted)] font-mono">
                💡 এমন ২০০ থেকে ৫০০টি লাইন একটি <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">train.jsonl</code> ফাইলে রাখলেই তোমার ক্লায়েন্টের কাস্টম মডেল ট্রেইন করার পুরো ম্যাটেরিয়াল রেডি!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 4. The 4 Commands to Rule Upwork ($10,000 Delivery Suite) */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/30 text-xs font-mono">
              প্র্যাকটিক্যাল কমান্ড সুইট
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              ম্যাকে চালানোর ৪টি মাস্টার কমান্ড (The 4 Commands to Rule Upwork)
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            এই ৪টি কমান্ড রান করলেই ক্লায়েন্টের পুরো কাস্টম এআই পাইপলাইন তোমার হাতের মুঠোয় চলে আসবে!
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-4">
          {/* Command 1 */}
          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#533AFD] flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span>কমান্ড ১: ইনস্টলেশন (ম্যাকে একবারই রান করবে)</span>
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy('cmd1', 'pip install mlx-lm jupyterlab pandas')}
                className="h-7 text-xs font-mono text-[var(--color-text-secondary)]"
              >
                {copiedSection === 'cmd1' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </Button>
            </div>
            <pre className="p-3 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto">
              pip install mlx-lm jupyterlab pandas
            </pre>
            <p className="text-[11px] text-[var(--color-text-secondary)]">
              অ্যাপলের সিলিকন চিপের জন্য নেটিভলি অপটিমাইজড লাইব্রেরি ও জুপিটার ইনস্টল হয়ে যাবে।
            </p>
          </div>

          {/* Command 2 */}
          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span>কমান্ড ২: কাস্টম LoRA ট্রেইনিং (মডেলকে ক্লায়েন্টের ডাটা শেখানো)</span>
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  handleCopy(
                    'cmd2',
                    'mlx_lm.lora --model mlx-community/Meta-Llama-3-8B-Instruct-4bit --train --data ./my_data --iters 600 --batch-size 4 --lora-layers 16'
                  )
                }
                className="h-7 text-xs font-mono text-[var(--color-text-secondary)]"
              >
                {copiedSection === 'cmd2' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </Button>
            </div>
            <pre className="p-3 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto">
              mlx_lm.lora --model mlx-community/Meta-Llama-3-8B-Instruct-4bit --train --data ./my_data --iters 600 --batch-size 4 --lora-layers 16
            </pre>
            <p className="text-[11px] text-[var(--color-text-secondary)]">
              মাত্র ২৫ মিনিটে ১৬ জিবি ম্যাকবুকে ট্রেইনিং শেষ হয়ে <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded font-mono">adapters.safetensors</code> ফাইল তৈরি হবে!
            </p>
          </div>

          {/* Command 3 */}
          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span>কমান্ড ৩: মডেল টেস্ট ও আউটপুট ভেরিফিকেশন (Inference)</span>
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  handleCopy(
                    'cmd3',
                    'mlx_lm.generate --model mlx-community/Meta-Llama-3-8B-Instruct-4bit --adapter-path adapters --prompt "[রহিম ব্রাদার্স ট্রেডিং] আমাদের ডিসকাউন্ট অফার কত?"'
                  )
                }
                className="h-7 text-xs font-mono text-[var(--color-text-secondary)]"
              >
                {copiedSection === 'cmd3' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </Button>
            </div>
            <pre className="p-3 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto">
              mlx_lm.generate --model mlx-community/Meta-Llama-3-8B-Instruct-4bit --adapter-path adapters --prompt &quot;[রহিম ব্রাদার্স ট্রেডিং] আমাদের ডিসকাউন্ট অফার কত?&quot;
            </pre>
            <p className="text-[11px] text-[var(--color-text-secondary)]">
              মডেলটি সাথে সাথে তোমার শেখানো টোনে নিখুঁত উত্তর দিয়ে স্ক্রিনে প্রিন্ট করবে।
            </p>
          </div>

          {/* Command 4 */}
          <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-50/20 dark:bg-teal-950/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-teal-800 dark:text-teal-300 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-teal-600" />
                <span>কমান্ড ৪: লোকাল OpenAI Compatible API সার্ভার চালু করা</span>
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  handleCopy(
                    'cmd4',
                    'mlx_lm.server --model mlx-community/Meta-Llama-3-8B-Instruct-4bit --adapter-path adapters --port 8080'
                  )
                }
                className="h-7 text-xs font-mono text-[var(--color-text-secondary)]"
              >
                {copiedSection === 'cmd4' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </Button>
            </div>
            <pre className="p-3 bg-[var(--color-surface)] rounded-lg border border-teal-500/30 text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto">
              mlx_lm.server --model mlx-community/Meta-Llama-3-8B-Instruct-4bit --adapter-path adapters --port 8080
            </pre>
            <p className="text-[11px] text-[var(--color-text-secondary)]">
              তোমার ম্যাকে <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded font-mono">http://localhost:8080/v1/chat/completions</code> লাইভ হয়ে যাবে। এরপর যে কোনো Next.js, Node.js বা PHP ওয়েবসাইট থেকে সরাসরি চ্যাটজিপিটির মতো কল করা যাবে!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 5. Jupyter Notebook Live Inspection (How to see inside the model) */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-300 text-xs font-mono">
              জুপিটার সার্জারি
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              জুপিটার ল্যাবে মডেলের ভেতরের টেনসর ও লস ব্যবচ্ছেদ
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            টার্মিনালে `jupyter lab` কমান্ড দিয়ে নোটবুকে নিচের ৪ লাইনের পাইথন কোড চালিয়ে মডেলের পেটের জিনিসপত্র লাইভ দেখো!
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--color-text-secondary)] font-bold">
                Jupyter Notebook Cell (Python 3):
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  handleCopy(
                    'jupyterCode',
                    `import mlx.core as mx\nimport mlx_lm\n\n# ১. মডেল ও টোকেনাইজার লোড করা\nmodel, tokenizer = mlx_lm.load("mlx-community/Meta-Llama-3-8B-Instruct-4bit")\n\n# ২. টেক্সটকে সংখ্যায় রূপান্তর (Tokenization)\ntokens = tokenizer.encode("Shakil Ahmed - AI Architect")\nprint("Token IDs:", tokens)\n\n# ৩. মডেলের মেমরি শেইপ ও ওয়েটস দেখা\nprint("Total Layers:", len(model.model.layers))\nprint("Embedding Shape:", model.model.embed_tokens.weight.shape)`
                  )
                }
                className="h-7 text-xs font-mono text-[var(--color-text-secondary)]"
              >
                {copiedSection === 'jupyterCode' ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    Copy Code
                  </>
                )}
              </Button>
            </div>

            <pre className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto leading-relaxed">
{`import mlx.core as mx
import mlx_lm

# ১. মডেল ও টোকেনাইজার লোড করা (ম্যাকে ৪-বিট অপটিমাইজড)
model, tokenizer = mlx_lm.load("mlx-community/Meta-Llama-3-8B-Instruct-4bit")

# ২. টেক্সটকে সংখ্যায় রূপান্তর (Tokenization)
tokens = tokenizer.encode("Shakil Ahmed: AI Automation Architect")
print("Token IDs:", tokens)
# Output: [128000, 4120, 8921, 25, 14920, 38129, 6721]

# ৩. মডেলের লেয়ার ও টেনসরের শেইপ পরীক্ষা
print("Total Transformer Layers:", len(model.model.layers))
# Output: 32 Layers

print("Vocabulary Embedding Shape:", model.model.embed_tokens.weight.shape)
# Output: [128256, 4096] (১ লাখ ২৮ হাজার শব্দ x ৪ হাজার ডাইমেনশন)`}
            </pre>

            <div className="p-3 bg-emerald-50/40 dark:bg-emerald-950/40 rounded-lg border border-emerald-500/20 text-xs text-[var(--color-text-secondary)] leading-relaxed">
              👉 <strong>কেন এটা তোমার জন্য থরের হাতুড়ি:</strong> তুমি যখন নিজের চোখে দেখবে যে ইংরেজি বা বাংলা লেখাটি কীভাবে <code className="font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded">[4120, 8921...]</code> সংখ্যায় পরিণত হচ্ছে আর ৩২টি ট্রান্সফরমার লেয়ারের ভেতর দিয়ে প্রসেস হয়ে আবার নতুন শব্দ জন্ম নিচ্ছে, তখন এআই আর কোনো জাদুকরী রহস্য থাকবে না। তুমি নিজেই এর মাস্টার আর্কিটেক্ট!
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
