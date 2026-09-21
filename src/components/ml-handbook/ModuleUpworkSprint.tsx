'use client';

import React, { useState } from 'react';
import {
  DollarSign,
  Briefcase,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Terminal,
  Clock,
  Layers,
  Zap,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ModuleUpworkSprint({ mode }: { mode: 'wife' | 'architect' }) {
  const [selectedFear, setSelectedFear] = useState<'privacy' | 'latency' | 'accuracy' | 'cost'>('privacy');
  const [copiedProposal, setCopiedProposal] = useState(false);

  const fears = [
    {
      id: 'privacy',
      label: '১. ডেটা প্রাইভেসির ভয় (No OpenAI Leaks)',
      fearText: 'ক্লায়েন্টের প্রধান ভয়: কোম্পানির ইন্টারনাল গ্রাহক ডেটা বা ফাইল ওপেনএআই-এর সার্ভারে চলে যাবে কি না।',
      defense: 'প্রাইভেট ৪-বিট LoRA অ্যাডাপ্টার ক্লায়েন্টের নিজস্ব VPC বা অ্যাপল সিলিকনে রান করানো। কোনো পাবলিক এপিআইতে ডেটা যাবে না।',
    },
    {
      id: 'latency',
      label: '২. স্পিড ও ল্যাগিংয়ের ভয় (Sub-Second Latency)',
      fearText: 'ক্লায়েন্টের প্রধান ভয়: এলএলএম দিয়ে টেবিলের ডেটা অ্যানালাইজ করতে গিয়ে ৮ সেকেন্ড বসে থাকতে হবে।',
      defense: 'XGBoost ও Scikit-Learn দিয়ে ০.২ মিলিসেকেন্ডে অফলাইনে প্রেডিকশন এবং ইনজেস্ট কিউ দিয়ে ব্যাকগ্রাউন্ড প্রসেসিং।',
    },
    {
      id: 'accuracy',
      label: '৩. হ্যালুসিনেশন ও ভুলের ভয় (Zero Hallucination)',
      fearText: 'ক্লায়েন্টের প্রধান ভয়: এআই বানিয়ে বানিয়ে মিথ্যা তথ্য দিয়ে কাস্টমার সার্ভিস বরবাদ করে দেবে।',
      defense: 'NIST AI RMF কমপ্লায়েন্ট এলএলএম ফায়ারওয়াল, স্ট্রিমড ভেক্টর রিট্রিভাল এবং হাইপোথিটিকাল উত্তর ফিল্টারিং।',
    },
    {
      id: 'cost',
      label: '৪. এপিআই বিলের বিস্ফোরণ (Fixed Compute Budget)',
      fearText: 'ক্লায়েন্টের প্রধান ভয়: ইউজার বাড়লে ওপেনএআই-এর মাসে $৫,০০০ এপিআই বিল চলে আসবে।',
      defense: 'RunPod অথবা AWS EC2 A10G তে ফিক্সড $০.৪৪/ঘণ্টা রেটে আনলিমিটেড ইনফারেন্স। মাসে ফিক্সড $১৫-$৩০ জিপিইউ খরচ।',
    },
  ];

  const getProposalText = () => {
    switch (selectedFear) {
      case 'privacy':
        return `live: https://ml-bangla.vercel.app
code: https://github.com/exelentshakil/ml-bangla
work: https://shakilhq.com

hi,

i built a working prototype so you can test how a private, fine-tuned model functions without sending a single byte of your data to openai.

the underlying engine uses 4-bit quantized lora adapters running in an isolated container. your data stays 100% inside your private cloud.

we can structure this turnkey project across 3 clean milestones:
• milestone 1 (days 1-3): private data scrubbing, tokenization, and baseline 4-bit model deployment
• milestone 2 (days 4-7): custom lora adapter training, inngest event queue integration, and automated retry logic
• milestone 3 (days 8-10): full dockerization, security firewall audit, and team production handover

which cloud infrastructure are you currently hosting your private workloads on (aws, gcp, or runpod)?

happy to hop on a quick 10-minute call to walk through the architecture.

best,
Shak`;
      case 'latency':
        return `live: https://ml-bangla.vercel.app
code: https://github.com/exelentshakil/ml-bangla
work: https://shakilhq.com

hi,

i built a working prototype so you can test how sub-millisecond predictions work for your workflow.

instead of wasting slow, expensive llm calls on tabular records, we run dedicated xgboost pipelines delivering 0.2ms latency with zero token costs.

we structure this turnkey delivery across 3 clean milestones:
• milestone 1 (days 1-3): tabular data pipeline, feature encoding, and baseline model training
• milestone 2 (days 4-7): real-time inference api, inngest background queue, and dashboard integration
• milestone 3 (days 8-10): load testing under 500 concurrent requests, documentation, and live deploy

is your dataset currently stored in postgresql, snowflake, or bigquery?

happy to hop on a quick 10-minute call to walk through the logic.

best,
Shak`;
      case 'cost':
        return `live: https://ml-bangla.vercel.app
code: https://github.com/exelentshakil/ml-bangla
work: https://shakilhq.com

hi,

i built a working prototype showing how to lock your ai compute into a predictable $15-30/month budget instead of burning unpredictable api tokens.

the architecture runs open-weight models using vllm on a dedicated single gpu instance, serving high-concurrency requests with zero per-token markup.

here is the 3-step delivery plan:
• milestone 1 (days 1-3): server environment provisioning, containerized vllm setup, and benchmark testing
• milestone 2 (days 4-7): custom adapter mounting, inngest async event queues, and error-handling pipelines
• milestone 3 (days 8-10): client team access setup, automated auto-shutdown rules, and documentation

what is your expected daily query volume (under 10k, 10k-100k, or 100k+)?

happy to hop on a quick 10-minute call to review the savings.

best,
Shak`;
      default:
        return `live: https://ml-bangla.vercel.app
code: https://github.com/exelentshakil/ml-bangla
work: https://shakilhq.com

hi,

i built a working prototype so you can test how our inline guardrails eliminate hallucinations.

the system combines contextual retrieval with an inline validation layer, rejecting unverified claims before the response reaches your team.

here is how we structure this turnkey project:
• milestone 1 (days 1-3): ground-truth corpus structuring and retrieval index setup
• milestone 2 (days 4-7): inline guardrail filters, inngest asynchronous pipelines, and test harness
• milestone 3 (days 8-10): end-to-end evaluation, stress testing, and production deployment

which platform does your team use for internal knowledge (notion, google drive, or custom database)?

happy to hop on a quick 10-minute call to walk through the pipeline.

best,
Shak`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getProposalText());
    setCopiedProposal(true);
    setTimeout(() => setCopiedProposal(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* 3-Milestone Turnkey Standard */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 text-xs font-mono">
                  $৫,০০০ UPWORK SPRINT
                </Badge>
                <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                  ৩-মাইলস্টোন টার্নকি ডেলিভারি আর্কিটেকচার ($৫,০০০ ফিক্সড প্রাইস)
                </CardTitle>
              </div>
              <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                প্রতিটি মাইলস্টোনের কাজ স্পষ্ট, কোনো বিতর্কের সুযোগ নেই, এবং প্রথম মাইলস্টোন শেষেই ক্লায়েন্ট কাজ এগিয়ে নিতে বাধ্য হয়।
              </CardDescription>
            </div>
            <div className="text-xs font-mono font-bold text-[#533AFD]">
              ১০ দিনের স্প্রিন্ট
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#533AFD]">মাইলস্টোন ১ (দিন ১-৩)</span>
                <Badge className="bg-[#533AFD]/10 text-[#533AFD] text-xs font-mono">$১,৫০০ USD</Badge>
              </div>
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                কোর ইঞ্জিন ও PoC ভ্যালিডেশন
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                কাঁচা ডেটা ক্লিনিং, টোকেনাইজেশন এবং প্রাথমিক মডেল বা XGBoost আর্কিটেকচার ডেপ্লয়। ক্লায়েন্ট প্রথম ৩ দিনেই চোখে দেখতে পায় কাজ কত দ্রুত হচ্ছে।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-teal-600">মাইলস্টোন ২ (দিন ৪-৭)</span>
                <Badge className="bg-teal-500/10 text-teal-600 text-xs font-mono">$২,০০০ USD</Badge>
              </div>
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                কাস্টম LoRA ও ইনজেস্ট কিউ
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                ক্লায়েন্টের স্পেসিফিক বিজনেস লজিক দিয়ে মডেল ফাইন-টিউনিং, ইনজেস্ট ব্যাকগ্রাউন্ড কিউ ইন্টিগ্রেশন এবং ফেইলওভার রিট্রাই লুপ স্থাপন।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600">মাইলস্টোন ৩ (দিন ৮-১০)</span>
                <Badge className="bg-emerald-500/10 text-emerald-600 text-xs font-mono">$১,৫০০ USD</Badge>
              </div>
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                প্রোডাকশন ডকার ও হ্যান্ডওভার
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                vLLM ডকার কন্টেইনারাইজেশন, সিকিউরিটি ফায়ারওয়াল অডিট, টিম অনবোর্ডিং এবং লাইভ প্রোডাকশন সাইন-অফ। ৫-স্টার রিভিউ নিশ্চিত।
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Upwork Proposal Generator */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/30 text-xs font-mono">
                  প্রপোজাল উইনিং ইঞ্জিন
                </Badge>
                <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                  ক্লায়েন্টের গোপন ভয় সিলেক্ট করুন ও ইনস্ট্যান্ট প্রপোজাল তৈরি করুন
                </CardTitle>
              </div>
              <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                কোনো অবান্তর লম্বা রচনা নয়। ৪৫০-৭০০ অক্ষরের সুনির্দিষ্ট আর্কিটেকচার যা ১-ক্লিকেই ইন্টারভিউ রুম খুলে দেয়।
              </CardDescription>
            </div>

            <Button
              onClick={handleCopy}
              className="h-9 px-4 text-xs font-semibold bg-[#533AFD] hover:bg-[#432DE0] text-white shadow-xs cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              {copiedProposal ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  কপি হয়েছে!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  ১-ক্লিক প্রপোজাল কপি
                </>
              )}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {/* Fear Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {fears.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFear(f.id as any)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedFear === f.id
                    ? 'border-[#533AFD] bg-[#533AFD]/10 shadow-xs'
                    : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] hover:border-[var(--color-text-secondary)]'
                }`}
              >
                <div className="text-xs font-bold text-[var(--color-text-primary)] truncate">
                  {f.label}
                </div>
                <div className="text-[11px] text-[var(--color-text-secondary)] mt-1 line-clamp-2">
                  {f.fearText}
                </div>
              </button>
            ))}
          </div>

          {/* Proposal Preview Box */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2">
              <span className="text-xs font-mono font-bold text-[var(--color-text-primary)]">
                PROPOSAL.md (রেডি টু পেস্ট ইন আপওয়ার্ক • Zero Em Dashes)
              </span>
              <span className="text-[11px] font-mono text-emerald-600 font-semibold">
                Verified GIFT Opener + 1-Word Reply Trigger
              </span>
            </div>
            <pre className="p-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {getProposalText()}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
