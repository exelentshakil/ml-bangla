'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  Server,
  Cloud,
  Layers,
  ArrowRight,
  DollarSign,
  AlertTriangle,
  Cpu,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ModuleMasterstroke({ mode }: { mode: 'wife' | 'architect' }) {
  const [copiedPitch, setCopiedPitch] = useState(false);

  const pitchText =
    'the underlying engine uses 4-bit quantized lora adapters running in an isolated container. your data stays 100% inside your private cloud.';

  const fullProposal = `live: https://ml-bangla.vercel.app
code: https://github.com/exelentshakil/ml-bangla
work: https://shakilhq.com

hi,

i built a working prototype so you can test how this workflow runs with zero data leaks.

the underlying engine uses 4-bit quantized lora adapters running in an isolated container. your data stays 100% inside your private cloud.

for fast public routing we use gemini 2.0 flash and openai gpt-4o-mini, while all confidential business data stays strictly inside your isolated private model.

we structure this turnkey delivery across 3 clean milestones:
• milestone 1 (days 1-3): private data scrubbing and baseline 4-bit container setup
• milestone 2 (days 4-7): custom lora training, inngest event queue, and retry pipelines
• milestone 3 (days 8-10): security firewall audit, load testing, and production handover

which cloud infrastructure are you currently running on (aws, gcp, or private vpc)?

happy to hop on a quick 10-minute call to walk through the architecture.

best,
Shak`;

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(pitchText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Masterstroke Hero Hook Card */}
      <div className="p-5 sm:p-7 rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/10 via-[#533AFD]/10 to-transparent shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <Badge className="bg-rose-500 text-white text-xs font-mono font-bold">
            THE MASTERSTROKE
          </Badge>
          <span className="text-xs font-mono text-[var(--color-text-secondary)]">
            $৫,০০০ - $১০,০০০ Take My Money ফর্মুলা
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl font-bold text-[var(--color-text-primary)] leading-snug">
          &quot;{pitchText}&quot;
        </h2>

        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          এই একটি বাক্যই আপওয়ার্কের সাধারণ এআই প্রপোজাল থেকে তোমার প্রস্তাবনাকে আলাদা করে দেয়। যেখানে অন্য সবাই ওপেনএআই এপিআই কল করে বসে থাকে, সেখানে তুমি ক্লায়েন্টকে শতভাগ ডেটা সুরক্ষার গ্যারান্টি দাও।
        </p>

        <div className="pt-2">
          <Button
            onClick={handleCopyPitch}
            className="h-9 px-4 text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white cursor-pointer flex items-center gap-1.5 shadow-xs"
          >
            {copiedPitch ? (
              <>
                <Check className="h-3.5 w-3.5" />
                কপি হয়েছে!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                মাস্টারস্ট্রোক হুক কপি করুন
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Wife Mode Explanatory Card */}
      {mode === 'wife' && (
        <div className="p-4 sm:p-5 rounded-xl border border-rose-400/30 bg-rose-50/20 dark:bg-rose-950/20 space-y-2">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold text-sm">
            <span>🌸 কেন ক্লায়েন্টরা সস্তা ফ্রিল্যান্সারদের বাদ দিয়ে শাকিলকে $৫,০০০ দেয়?</span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
            সস্তা ফ্রিল্যান্সাররা হলো এমন রাঁধুনি যে রান্না করার জন্য মেহমানের বাড়ির গোপন ডায়রি আর খরচের খাতা বাইরের প্রতিবেশীর বাড়িতে পাঠিয়ে দেয়। কোনো বুদ্ধিমান বাড়িওয়ালাই তাকে রান্নাঘরে ঢুকতে দেবে না! 
            আর শাকিল হলো সেই বুদ্ধিমান রাঁধুনি যে নিজের গোপন মসলার ছোট কৌটো (৪-বিট কন্টেইনার) নিয়ে এসে বাড়ির ভেতর সদর দরজায় তালা দিয়ে রান্না করে। বাড়ির এক টুকরো খবরও বাইরে যায় না। তাই ক্লায়েন্টরা নিশ্চিন্তে বলে: &quot;Take my money!&quot;
          </p>
        </div>
      )}

      {/* Side-by-Side Comparison: Cheap Wrapper vs Shakil Enterprise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* The Cheap API Wrapper Trap */}
        <div className="p-4 sm:p-5 rounded-xl border border-rose-500/30 bg-rose-500/5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4" />
              সস্তা ১৫ ডলার ফ্রিল্যান্সার
            </span>
            <Badge variant="outline" className="text-rose-500 border-rose-500/30 text-[10px]">
              রিজেক্টেড ❌
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-1.5">
              <span className="text-rose-500">•</span>
              <span>ক্লায়েন্টের কনফিডেনশিয়াল ফাইল সরাসরি OpenAI এর পাবলিক সার্ভারে পাঠিয়ে দেয়।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-rose-500">•</span>
              <span>ক্লায়েন্টের লিগ্যাল টিম ডেটা প্রাইভেসির কারণে প্রজেক্ট বাতিল করে দেয়।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-rose-500">•</span>
              <span>ইউজার বাড়লে এপিআই বিল অনিয়ন্ত্রিতভাবে বেড়ে যায়।</span>
            </li>
          </ul>
        </div>

        {/* Shakil's Enterprise Architecture */}
        <div className="p-4 sm:p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" />
              শাকিলের হাইব্রিড এন্টারপ্রাইজ সিস্টেম
            </span>
            <Badge className="bg-emerald-500 text-white text-[10px]">
              Take My Money! ✅
            </Badge>
          </div>
          <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600">•</span>
              <span><strong>পাবলিক লেয়ার:</strong> দ্রুত ও সস্তা ইনটেন্ট রাউটিংয়ের জন্য Gemini 2.0 Flash ও GPT-4o-mini।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600">•</span>
              <span><strong>প্রাইভেট ভল্ট লেয়ার:</strong> গোপন গ্রাহক ডেটা ও ইন্টারনাল লজিকের জন্য ৪-বিট LoRA কন্টেইনার।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600">•</span>
              <span>ডেটা ক্লায়েন্টের ক্লাউড থেকে ইন্টারনেটে এক ইঞ্চিও বাইরে যায় না। ফিক্সড বাজেট।</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Complete Proposal Snippet Box */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-5 border-b border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold text-[var(--color-text-primary)]">
                ফুল টার্নকি আপওয়ার্ক প্রপোজাল (Zero Em Dashes)
              </CardTitle>
              <CardDescription className="text-xs text-[var(--color-text-secondary)]">
                যেকোনো হাই-টিকেট প্রাইভেট এআই বিডে সরাসরি ব্যবহারের উপযোগী।
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(fullProposal);
                setCopiedPitch(true);
                setTimeout(() => setCopiedPitch(false), 2000);
              }}
              className="h-8 text-xs font-mono cursor-pointer"
            >
              {copiedPitch ? <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
              প্রপোজাল কপি করুন
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-5">
          <pre className="p-4 rounded-xl bg-[var(--color-panel-subtle)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] whitespace-pre-wrap leading-relaxed overflow-x-auto">
            {fullProposal}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
