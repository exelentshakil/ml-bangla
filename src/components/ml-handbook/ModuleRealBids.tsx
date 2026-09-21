'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Layers,
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ModuleRealBids({ mode }: { mode: 'wife' | 'architect' }) {
  const [selectedBid, setSelectedBid] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const realBids = [
    {
      title: 'Law Firm Internal App (27 Staff)',
      budget: '$৫,০০০ - $৭,০০০',
      fear: 'অ্যাটর্নি-ক্লায়েন্ট প্রিভিলেজড গোপন ফাইল বাইরে যাওয়া সম্পূর্ণ নিষিদ্ধ।',
      solution: 'মডেল ক্লায়েন্টের নিজস্ব ভিপিসিতে ৪-বিট LoRA কন্টেইনারে চলবে। কোনো এপিআই কল ইন্টারনেটে যাবে না।',
      techStack: 'Meta Llama-3-8B + Apple MLX/Docker + Inngest + Next.js',
      proposalSnippet: 'i built a working prototype showing how a private 4-bit model analyzes legal contracts in an isolated container with zero data leaks to third parties.',
    },
    {
      title: 'Medical Ops / AI Prior Auth (Cozad)',
      budget: '$৩,০০০ - $৫,০০০',
      fear: 'HIPAA ভায়োলেশন ও রোগীর রোগ সম্পর্কিত ব্যক্তিগত তথ্য ফাঁসের আইনি ঝুঁকি।',
      solution: 'ইনলাইন PII রেড্যাকশন ফায়ারওয়াল + অফলাইন কোয়ান্টাইজড এলএলএম ভল্ট।',
      techStack: 'NIST AI RMF Firewall + 4-bit Mistral + PostgreSQL + Vercel',
      proposalSnippet: 'our architecture enforces an inline pii redaction firewall before querying the model, guaranteeing strict hipaa compliance for all prior auth workflows.',
    },
    {
      title: 'California Real Estate Autonomous Ops',
      budget: '$৭,৫০০ ফিক্সড',
      fear: 'প্রপার্টি ভ্যালুয়েশন ও টেবিল ডেটা অ্যানালাইসিসে এআই এর ধীরগতি ও ভুলের ভয়।',
      solution: 'XGBoost ক্লাসিক্যাল রিগ্রেশন দিয়ে ০.১ মিলিসেকেন্ডে প্রপার্টি প্রাইসিং এবং ইনজেস্ট কিউ দিয়ে ডকুমেন্ট হ্যান্ডলিং।',
      techStack: 'XGBoost + Inngest Event Queue + Gemini Flash Routing',
      proposalSnippet: 'instead of slow llm calls for property pricing, we run dedicated xgboost pipelines delivering 0.1ms valuations with zero token overhead.',
    },
    {
      title: 'Platform-Compliant Influencer CRM',
      budget: '$৩,০০০ ফ্ল্যাট',
      fear: 'সোশ্যাল মিডিয়া রেট-লিমিট ও হাজার হাজার পোস্ট অ্যানালাইসিসে এপিআই খরচের বিস্ফোরণ।',
      solution: 'জেমিনি ২.০ ফ্ল্যাশ দিয়ে দ্রুত ক্যাটাগরাইজেশন ও লোকাল এমবেডিংস দিয়ে ক্রিয়েটর ম্যাচিং।',
      techStack: 'Gemini 2.0 Flash + Supabase Vector + Next.js 15',
      proposalSnippet: 'we pair gemini 2.0 flash for high-speed routing with local vector embeddings, cutting your monthly inference costs by over 80%.',
    },
  ];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="p-4 sm:p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <Badge className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/20 text-xs font-mono">
            রিয়েল আপওয়ার্ক প্রজেক্ট সমাধান
          </Badge>
          <span className="text-xs font-mono text-[var(--color-text-secondary)]">BIDS.md থেকে সরাসরি নেওয়া</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
          ক্লায়েন্ট যে ডোমেন থেকেই আসুক, তোমার কাছে আছে রেডিমেড সমাধান
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
          আইন সংস্থা, স্বাস্থ্যসেবা, রিয়েল এস্টেট কিংবা সিআরএম: সবার মূল ভয়ের বিপরীতে এই মাস্টারস্ট্রোক কাজ করে।
        </p>
      </div>

      {/* Grid of Real Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {realBids.map((b, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]">
              <div>
                <h3 className="font-bold text-sm text-[var(--color-text-primary)]">
                  {b.title}
                </h3>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  বাজেট: {b.budget}
                </span>
              </div>
              <Badge variant="outline" className="text-xs font-mono bg-[var(--color-panel-subtle)]">
                Upwork Verified
              </Badge>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-[var(--color-text-secondary)]">
                <span className="font-bold text-rose-600 dark:text-rose-400">ক্লায়েন্টের গোপন ভয়: </span>
                {b.fear}
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[var(--color-text-secondary)]">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">আকিরা মাস্টারস্ট্রোক সমাধান: </span>
                {b.solution}
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                {b.techStack}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(b.proposalSnippet, idx)}
                className="h-7 text-xs font-mono cursor-pointer text-[#533AFD] hover:text-[#432DE0]"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1" />
                    কপি হয়েছে!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    হুক কপি
                  </>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
