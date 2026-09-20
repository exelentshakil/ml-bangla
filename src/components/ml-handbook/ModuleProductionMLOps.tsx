'use client';

import React, { useState } from 'react';
import {
  Server,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Cpu,
  Lock,
  DollarSign,
  FileCode,
  ArrowRight,
  Laptop,
  Mic,
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ModuleProductionMLOps({ mode }: { mode: 'wife' | 'architect' }) {
  const [copiedCode, setCopiedCode] = useState(false);

  const dockerRunCode = `docker run --gpus all -d \\
  --name vllm-server \\
  -p 8000:8000 \\
  --ipc=host \\
  -v ~/.cache/huggingface:/root/.cache/huggingface \\
  vllm/vllm-openai:latest \\
  --model meta-llama/Meta-Llama-3-8B-Instruct \\
  --max-model-len 4096 \\
  --gpu-memory-utilization 0.90`;

  const handleCopy = () => {
    navigator.clipboard.writeText(dockerRunCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* 1. Legiit AI Chat Reverse-Engineered */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/30 text-xs font-mono">
              প্রোডাকশন MLOps ব্লুপ্রিন্ট
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              Legiit AI Chat আর্কিটেকচার: AWS-এ আসলে কী চলছে?
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            একটি ওপেন-সোর্স মডেলকে কীভাবে ডকারে ভরে AWS সার্ভারে আনলিমিটেড প্রাইভেট এআই এপিআই বানানো হয়।
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {/* Visual Architecture Pipeline */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 sm:p-6 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
              ৪-ধাপের প্রোডাকশন আর্কিটেকচার ফ্লো
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-1">
                <div className="text-[10px] text-[var(--color-text-muted)] uppercase">ধাপ ১: মডেল</div>
                <div className="font-bold text-[#533AFD]">Hugging Face</div>
                <p className="text-[11px] text-[var(--color-text-secondary)] font-sans mt-1">
                  Meta Llama-3-8B-Instruct মডেলের ওয়েটস সরাসরি ডাউনলোড।
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-1">
                <div className="text-[10px] text-[var(--color-text-muted)] uppercase">ধাপ ২: ইঞ্জিন</div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400">vLLM Server</div>
                <p className="text-[11px] text-[var(--color-text-secondary)] font-sans mt-1">
                  PagedAttention দিয়ে আল্ট্রাফাস্ট কনকারেন্ট টোকেন সার্ভিং ইঞ্জিন।
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-1">
                <div className="text-[10px] text-[var(--color-text-muted)] uppercase">ধাপ ৩: কন্টেইনার</div>
                <div className="font-bold text-teal-600 dark:text-teal-400">Docker Packaging</div>
                <p className="text-[11px] text-[var(--color-text-secondary)] font-sans mt-1">
                  NVIDIA CUDA ড্রাইভার সহ সেলফ-কন্টেইন্ড ডকার ইমেজ।
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-1">
                <div className="text-[10px] text-[var(--color-text-muted)] uppercase">ধাপ ৪: ক্লাউড</div>
                <div className="font-bold text-purple-600 dark:text-purple-400">AWS EC2 (G5)</div>
                <p className="text-[11px] text-[var(--color-text-secondary)] font-sans mt-1">
                  g5.xlarge ইনস্ট্যান্স (NVIDIA A10G 24GB VRAM) ক্লাউড ভিপিসির ভেতরে।
                </p>
              </div>
            </div>
          </div>

          {/* Docker Terminal Snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-text-primary)]">
                <Terminal className="h-4 w-4 text-emerald-600" />
                <span>The 1-Line Production Docker Command (প্রোডাকশন রেডি)</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-7 text-xs font-mono text-[var(--color-text-secondary)]"
              >
                {copiedCode ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    Copy Command
                  </>
                )}
              </Button>
            </div>
            <pre className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto leading-relaxed">
              {dockerRunCode}
            </pre>
            <p className="text-[11px] text-[var(--color-text-muted)] font-mono">
              কমান্ডটি রান হওয়ার পর সার্ভারটি স্বয়ংক্রিয়ভাবে OpenAI-এর কমপ্যাটেবল এপিআই (<code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">http://aws-ip:8000/v1/chat/completions</code>) পরিবেশন করে!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 2. Local Mac M1 vs Cloud GPU: Real Economics */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-300 text-xs font-mono">
              বাস্তব ইকোনমিক্স ও খরচ হিসাব
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              লোকাল Mac M1 বনাম Cloud GPU (A10G/A100): ১,০০০ অডিও ফাইল বা ট্রেনিং কখন কোথায় করব?
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            তোমার ১৬ জিবি ম্যাকবুকে কী কী আরামে হবে, আর ক্লাউড জিপিইউ ভাড়া নিয়ে ক্লায়েন্টের কাজ দ্রুত ডেলিভারির সঠিক অংক।
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Local M1 Card */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-bold text-sm text-[var(--color-text-primary)]">
                  <Laptop className="h-4 w-4 text-[#533AFD]" />
                  লোকাল Mac M1 (16GB Unified RAM)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-semibold">
                  $0 খরচ
                </span>
              </div>

              <div className="space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  <strong>কী কী আরামে করতে পারবে:</strong>
                </p>
                <ul className="space-y-1.5 list-disc pl-4 text-[11px]">
                  <li>
                    <strong>ছোট ফাইন-টিউনিং (LoRA):</strong> ১,০০০টি প্রশ্ন-উত্তরের ডেটাসেট অ্যাপলের <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded font-mono">mlx-lm</code> ফ্রেমওয়ার্কে মাত্র ৩০-৬০ মিনিটে একদম ফ্রিতে ট্রেইন হয়ে যায়।
                  </li>
                  <li>
                    <strong>৪-বিট কুয়ান্টাইজড মডেল রান:</strong> Llama-3-8B বা Mistral-7B লোকাল Ollama দিয়ে টেস্ট করা।
                  </li>
                  <li>
                    <strong>১০-২০টি ক্লাসের অডিও:</strong> Whisper ছোট ব্যাচে লোকাল টেস্টিং।
                  </li>
                </ul>

                <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-500/20 text-[11px] text-rose-700 dark:text-rose-300">
                  ⚠️ <strong>যেখানে আটকে যাবে:</strong> ১,০০০ ঘণ্টার অডিও ম্যাকবুকে দিলে টানা ৩০০ ঘণ্টা ফ্যান ঘুরবে, ব্যাটারি গরম হবে আর পুরো মেশিন জ্যাম হয়ে থাকবে।
                </div>
              </div>
            </div>

            {/* Cloud GPU Card */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20 p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-bold text-sm text-emerald-800 dark:text-emerald-300">
                  <Cloud className="h-4 w-4 text-emerald-600" />
                  Cloud GPU (RunPod / AWS G5 A10G / A100)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 font-semibold">
                  খরচ: মাত্র $১৫-$২৫
                </span>
              </div>

              <div className="space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  <strong>১,০০০ ক্লাসের অডিও ট্রান্সক্রিপশন কৌশল:</strong>
                </p>
                <ul className="space-y-1.5 list-disc pl-4 text-[11px]">
                  <li>
                    <strong>Insanely-Fast-Whisper:</strong> ক্লাউড A10G বা A100 জিপিইউতে অপটিমাইজড পাইপলাইন ১ ঘণ্টার অডিও ট্রান্সক্রাইব করতে মাত্র ১-২ মিনিট নেয়।
                  </li>
                  <li>
                    <strong>গতি ও সময়:</strong> ১,০০০ ঘণ্টার অডিও মাত্র ১৫ থেকে ২০ ঘণ্টার ভেতরে ১০০% কমপ্লিট!
                  </li>
                  <li>
                    <strong>বাস্তব খরচ:</strong> RunPod-এ A10G জিপিইউ ঘণ্টায় মাত্র $০.৭৫ সেন্ট। ২০ ঘণ্টা চললে খরচ হবে মোট <strong>$১৫ ডলার</strong>!
                  </li>
                </ul>

                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-800 dark:text-emerald-200">
                  💡 <strong>ক্লায়েন্ট থেকে চার্জ করার নিয়ম:</strong> ক্লাউড খরচ ($১৫-$২৫) ক্লায়েন্টের কার্ড বা ইনভয়েসে অ্যাড হবে, কিন্তু এই অটোমেটেড ট্রান্সক্রিপশন ও RAG পাইপলাইন ডেলিভারির জন্য তোমার আর্কিটেক্ট ফি হবে <strong>$৩,০০০ থেকে $৫,০০০</strong>!
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. Client Objection Handling ($5,000 Upwork Pitch) */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 text-xs font-mono">
              Upwork উইনিং প্লেবুক
            </Badge>
            <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              ক্লায়েন্টের ৩টি প্রশ্ন ও তোমার মোক্ষম টেকনিক্যাল জবাব
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            এই ৩টি জবাব শুনলেই ক্লায়েন্ট বুঝবে তুমি কোনো সস্তা স্ক্রিপ্টার নও, একজন প্রকৃত এন্টারপ্রাইজ সিস্টেম আর্কিটেক্ট!
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-4">
          {/* Objection 1 */}
          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-2">
            <div className="text-xs font-bold text-rose-600 dark:text-rose-400 font-mono">
              ক্লায়েন্টের প্রশ্ন ১: &quot;আমাদের বিজনেসের ডেটা বাইরে যেতে পারবে না। আমরা কীভাবে আমাদের নিজস্ব মডেল চালাব?&quot;
            </div>
            <div className="p-3 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] text-xs text-[var(--color-text-primary)] leading-relaxed">
              <strong>তোমার আর্কিটেক্ট জবাব:</strong><br />
              &quot;আমরা কোনো থার্ড-পার্টি ক্লাউড API (OpenAI/Claude) ব্যবহার করব না। আমরা আপনার নিজস্ব AWS VPC-র ভেতরে একটি কন্টেইনারাইজড vLLM সার্ভারে Meta Llama-3 মডেল ডেপ্লয় করব। আপনার ইন্টারনাল ভিপিএন ছাড়া কোনো ডেটা বাইরে যাবে না এবং আপনি ১০০% ক্রেডেনশিয়াল ও মডেলের মালিক থাকবেন।&quot;
            </div>
          </div>

          {/* Objection 2 */}
          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-2">
            <div className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
              ক্লায়েন্টের প্রশ্ন ২: &quot;আমরা কি মডেল ট্রেইন করব নাকি RAG ব্যবহার করব?&quot;
            </div>
            <div className="p-3 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] text-xs text-[var(--color-text-primary)] leading-relaxed">
              <strong>তোমার আর্কিটেক্ট জবাব:</strong><br />
              &quot;যেহেতু আপনার বিজনেসের পলিসি এবং ডাটা প্রতিনিয়ত আপডেট হয়, আমরা হাইব্রিড আর্কিটেকচার ব্যবহার করব: RAG (PostgreSQL pgvector / Supabase) দিয়ে তাজা তথ্য হ্যান্ডেল করব যাতে রি-ট্রেনিংয়ের খরচ বাঁচে, আর LoRA দিয়ে মডেলকে আপনার নির্দিষ্ট আউটপুট ফরম্যাট ও ভয়েস টোনে কথা বলা শেখাব।&quot;
            </div>
          </div>

          {/* Objection 3 */}
          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-2">
            <div className="text-xs font-bold text-[#533AFD] font-mono">
              ক্লায়েন্টের প্রশ্ন ৩: &quot;ইউজাররা যদি প্রম্পট ইঞ্জেকশন দিয়ে অ্যাডমিন ডেটা চুরি করে নেয়?&quot;
            </div>
            <div className="p-3 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] text-xs text-[var(--color-text-primary)] leading-relaxed">
              <strong>তোমার আর্কিটেক্ট জবাব:</strong><br />
              &quot;আমি Securiti সার্টিফাইড AI Security &amp; Governance আর্কিটেক্ট। মডেলের ইনপুটে আমরা ইনলাইন LLM Firewall (NIST AI RMF / OWASP LLM01) বসাব যা ০ মিলিসেকেন্ডে প্রম্পট ইঞ্জেকশন কোয়ারান্টিন করবে এবং সোশ্যাল সিকিউরিটি বা ক্রেডিট কার্ড নম্বর তৎক্ষণাৎ PII Redaction করে দেবে।&quot;
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
