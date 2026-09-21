'use client';

import React, { useState } from 'react';
import {
  Laptop,
  Cloud,
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
  ShieldCheck,
  Server,
  Workflow,
  Clock,
  Coins,
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

export function ModuleDualEngine({ mode }: { mode: 'wife' | 'architect' }) {
  const [activeEngine, setActiveEngine] = useState<'local' | 'cloud'>('local');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Simulator 1: Interactive Training State
  const [iterations, setIterations] = useState(600);
  const [loraRank, setLoraRank] = useState(16);
  const [loraLayers, setLoraLayers] = useState(16);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStep, setCurrentStep] = useState(600);
  const [currentLoss, setCurrentLoss] = useState('0.24');

  // Simulator 2: Token Inspection
  const [sampleSentence, setSampleSentence] = useState(
    'Shakil is fine-tuning Llama-3 locally on Apple Silicon unified memory.'
  );

  // Training curve data generator
  const generateChartData = (maxSteps: number) => {
    const points = [];
    const count = 15;
    for (let i = 0; i <= count; i++) {
      const step = Math.round((maxSteps / count) * i);
      const loss = 2.85 * Math.exp(-0.0045 * step) + 0.22 + Math.sin(i * 1.5) * 0.04;
      points.push({
        step: `Step ${step}`,
        loss: Math.max(0.18, Number(loss.toFixed(2))),
        perplexity: Math.max(1.2, Number((Math.exp(loss) * 0.8).toFixed(1))),
      });
    }
    return points;
  };

  const [chartData, setChartData] = useState(() => generateChartData(600));

  const runLiveTraining = () => {
    setIsSimulating(true);
    setCurrentStep(0);
    setCurrentLoss('2.85');

    let current = 0;
    const interval = setInterval(() => {
      current += 60;
      if (current >= iterations) {
        current = iterations;
        clearInterval(interval);
        setIsSimulating(false);
      }
      setCurrentStep(current);
      const finalLoss = 2.85 * Math.exp(-0.0045 * current) + 0.22;
      setCurrentLoss(finalLoss.toFixed(2));
    }, 120);

    setChartData(generateChartData(iterations));
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const localRecipes = [
    {
      title: '১. ম্যাকবুকে ডিপেন্ডেন্সি ইনস্টল (Apple Silicon Metal Accel)',
      code: `pip install mlx-lm jupyterlab pandas numpy
# ভেরিফিকেশন: ম্যাকবুকের M1 GPU সক্রিয় আছে কি না দেখা
python3 -c "import mlx.core as mx; print('Apple Silicon Active:', mx.default_device())"`,
      desc: 'অ্যাপল সিলিকন ইউনিফাইড মেমোরি ব্যবহারের জন্য কোনো ভারী কুডা ড্রাইভারের দরকার নেই।',
    },
    {
      title: '২. ৪-বিট Llama-3 মডেলে কাস্টম LoRA ফাইন-টিউনিং',
      code: `mlx_lm.lora \\
  --model mlx-community/Meta-Llama-3-8B-Instruct-4bit \\
  --train \\
  --data ./client_knowledge_data \\
  --iters ${iterations} \\
  --batch-size 4 \\
  --lora-layers ${loraLayers} \\
  --adapter-path ./adapters`,
      desc: 'ম্যাকবুকের ১৬জিবি র‍্যামে মাত্র ৫ থেকে ৮ মিনিটে অ্যাডাপ্টার তৈরি হয়ে যাবে। খরচ শূন্য ডলার।',
    },
    {
      title: '৩. ফাইন-টিউনড অ্যাডাপ্টার টেস্ট ও ভ্যালিডেশন',
      code: `mlx_lm.generate \\
  --model mlx-community/Meta-Llama-3-8B-Instruct-4bit \\
  --adapter-path ./adapters \\
  --prompt "User: আমাদের ইন্টারনাল পলিসি অনুযায়ী রিফান্ড দেওয়ার নিয়ম কী?\\nAssistant:" \\
  --max-tokens 250`,
      desc: 'অরিজিনাল মডেলের সাথে তোমার নতুন অ্যাডাপ্টারের নলেজ মিলিয়ে নিখুঁত উত্তর দেবে।',
    },
    {
      title: '৪. লোকাল OpenAI-কম্প্যাটিবল সার্ভার রান করা',
      code: `mlx_lm.server \\
  --model mlx-community/Meta-Llama-3-8B-Instruct-4bit \\
  --adapter-path ./adapters \\
  --port 8080
# তোমার Next.js কোডবেস সরাসরি baseURL: "http://localhost:8080/v1" দিয়ে কল করতে পারবে!`,
      desc: 'কোনো এপিআই বিল ছাড়াই তোমার যেকোনো লোকাল অ্যাপ্লিকেশনে প্রাইভেট মডেল কানেক্টেড।',
    },
  ];

  const cloudRecipes = [
    {
      title: '১. RunPod অথবা AWS EC2 A10G স্পিন আপ ($০.৪৪/ঘণ্টা)',
      code: `# RunPod PyTorch 2.4 + CUDA 12.4 টেমপ্লেট বেছে নাও
# SSH দিয়ে সার্ভারে কানেক্ট করো:
ssh root@<runpod-ip-address> -p <port> -i ~/.ssh/id_rsa
nvidia-smi  # চেক করো ২৪জিবি VRAM রেডি আছে কি না`,
      desc: 'ক্লায়েন্টের বাজেটে সরাসরি রানপড বা এডব্লিউএস অ্যাকাউন্ট বানিয়ে লিঙ্ক করে দেওয়া হবে।',
    },
    {
      title: '২. ১,০০০ ফাইল বা অডিও ট্রান্সক্রিপশন (Insanely-Fast-Whisper)',
      code: `pip install insanely-fast-whisper optimum auto-gptq
# ১,০০০ ঘণ্টার অডিও ফাইল মাত্র ১৫ ডলারে ট্রান্সক্রাইব করার আল্ট্রা-ফাস্ট পাইপলাইন
insanely-fast-whisper \\
  --file-name ./client_audio_folder \\
  --device-id 0 \\
  --batch-size 24 \\
  --model-name openai/whisper-large-v3 \\
  --output-dir ./transcripts`,
      desc: 'ম্যাকবুকে যেটা করতে ৩ দিন লাগত, ক্লাউড এ১০জি জিপিইউতে সেটা মাত্র ৪০ মিনিটে শেষ হয়ে যাবে।',
    },
    {
      title: '৩. প্রোডাকশন ডকার ও vLLM সার্ভিং (High-Concurrency Legiit Style)',
      code: `docker run --gpus all \\
  -v /root/models:/models \\
  -p 8000:8000 \\
  --ipc=host \\
  vllm/vllm-openai:latest \\
  --model meta-llama/Meta-Llama-3-8B-Instruct \\
  --enable-lora \\
  --lora-modules client-knowledge=/models/adapters \\
  --gpu-memory-utilization 0.90 \\
  --max-model-len 8192`,
      desc: 'একসাথে ৫০ জন ইন্টারনাল টিম মেম্বার সেকেন্ডে ৯০+ টোকেন স্পিডে রেসপন্স পাবে।',
    },
    {
      title: '৪. ইনজেস্ট ইভেন্ট কিউ দিয়ে ক্লাউড মডেল আর্কিটেকচার কানেক্ট',
      code: `// src/inngest/functions/model-queue.ts
export const processLargeBatch = inngest.createFunction(
  { id: 'client-ai-batch-sync', retries: 3 },
  { event: 'ai/batch.requested' },
  async ({ event, step }) => {
    // ১. ক্লাউড vLLM সার্ভারে প্রাইভেট রিকোয়েস্ট পাঠানো
    const result = await step.run('call-private-vllm', async () => {
      const res = await fetch('http://private-gpu.internal:8000/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'client-knowledge',
          messages: [{ role: 'user', content: event.data.prompt }]
        })
      });
      return res.json();
    });
    return { status: 'completed', result };
  }
);`,
      desc: 'ইনজেস্ট ইভেন্ট কিউ ব্যবহারে ব্যাকগ্রাউন্ডে ১০০% ফেইলওভার ও অটোমেটিক রিট্রাই নিশ্চিত থাকে।',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner: Local vs Cloud Engine Decision */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/30 text-xs font-mono">
                  ডুয়াল এক্সিকিউশন ইঞ্জিন
                </Badge>
                <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                  ম্যাকবুক M1 বনাম ক্লাউড জিপিইউ: সাইড-বাই-সাইড প্রোডাকশন গাইড
                </CardTitle>
              </div>
              <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                কখন নিজের ম্যাকের মেমোরিতে $০ খরচে মডেল বানাবে, আর কখন ক্লায়েন্টের টাকায় ক্লাউড জিপিইউ চালাবে তার সুস্পষ্ট ফর্মুলা।
              </CardDescription>
            </div>

            {/* Engine Switcher */}
            <div className="inline-flex rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-1.5 text-xs font-semibold shrink-0">
              <button
                type="button"
                onClick={() => setActiveEngine('local')}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  activeEngine === 'local'
                    ? 'bg-[#533AFD] text-white shadow-xs'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Laptop className="h-4 w-4" />
                <span>🖥️ লোকাল ম্যাক M1 ($০ খরচ • প্রোটোটাইপ)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveEngine('cloud')}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  activeEngine === 'cloud'
                    ? 'bg-[#057A55] text-white shadow-xs'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Cloud className="h-4 w-4" />
                <span>☁️ ক্লাউড জিপিইউ ($০.৫০/ঘণ্টা • ক্লায়েন্ট বিল)</span>
              </button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {/* Side by Side Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Local Engine Card */}
            <div className={`p-4 sm:p-5 rounded-xl border transition-all ${
              activeEngine === 'local'
                ? 'border-[#533AFD] bg-[#533AFD]/5 ring-1 ring-[#533AFD]/20'
                : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] opacity-75'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-[#533AFD]" />
                  <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                    লোকাল ম্যাক M1 (Apple Silicon mlx-lm)
                  </h4>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-xs font-mono">
                  $০.০০ খরচ
                </Badge>
              </div>

              <div className="pt-3 space-y-2.5 text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>কখন চালাবে:</strong> আপওয়ার্ক ডেমো রেকর্ড করতে, কুইক ক্লায়েন্ট PoC টেস্ট করতে, এবং ছোট প্রাইভেট নলেজ বেসে ফাইন-টিউন করতে।</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>মেমোরি আর্কিটেকচার:</strong> ১৬জিবি ইউনিফাইড মেমোরি। সিপিইউ ও জিপিইউ একই র‍্যাম শেয়ার করে বলে কোনো ডেটা কপি করার ল্যাগ নেই।</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ডেটা সিকিউরিটি:</strong> ১০০% এয়ার-গ্যাপড প্রাইভেসি। ক্লায়েন্টের ডেটা তোমার কম্পিউটার থেকে ইন্টারনেটে এক বাইটও বের হবে না।</span>
                </div>
              </div>
            </div>

            {/* Cloud Engine Card */}
            <div className={`p-4 sm:p-5 rounded-xl border transition-all ${
              activeEngine === 'cloud'
                ? 'border-[#057A55] bg-[#057A55]/5 ring-1 ring-[#057A55]/20'
                : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] opacity-75'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-[#057A55]" />
                  <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                    ক্লাউড জিপিইউ (RunPod / AWS EC2 A10G vLLM)
                  </h4>
                </div>
                <Badge className="bg-[#057A55]/10 text-[#057A55] border-[#057A55]/20 text-xs font-mono">
                  ক্লায়েন্ট ইনভয়েস ($১৫-$৩০)
                </Badge>
              </div>

              <div className="pt-3 space-y-2.5 text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#057A55] shrink-0 mt-0.5" />
                  <span><strong>কখন চালাবে:</strong> ১,০০০+ অডিও ফাইল বা ভিডিও ক্লাস, বড় ট্রেইনিং ডেটাসেট, এবং যখন ক্লায়েন্টের গোটা টিম ২৪/৭ লাইভ ইউজ করবে।</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#057A55] shrink-0 mt-0.5" />
                  <span><strong>গতি ও কনকারেন্সি:</strong> ২৪জিবি VRAM ও সেকেন্ডে ৯০+ টোকেন স্পিড। একসাথে ৫০ জন ইউজার রিকোয়েস্ট করলেও কোনো ড্রপ হবে না।</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#057A55] shrink-0 mt-0.5" />
                  <span><strong>ডেলিভারি মেথড:</strong> ডকার কন্টেইনারে vLLM চালিয়ে প্রাইভেট ভিপিসি এন্ডপয়েন্ট বানিয়ে দেওয়া, ঠিক যেমন Legiit এন্টারপ্রাইজ সিস্টেমে চলে।</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Command Center */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-[#533AFD]" />
                <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                  {activeEngine === 'local'
                    ? 'ম্যাকবুক M1 টার্মিনাল এক্সিকিউশন রেসিপি (Apple MLX)'
                    : 'ক্লাউড জিপিইউ টার্মিনাল ও ডকার রেসিপি (RunPod & AWS vLLM)'}
                </h4>
              </div>
              <span className="text-[11px] font-mono text-[var(--color-text-secondary)]">
                ১-ক্লিক কপি ও রান
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {(activeEngine === 'local' ? localRecipes : cloudRecipes).map((r, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--color-text-primary)]">
                      {r.title}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(r.code, idx)}
                      className="h-7 text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                          কপি হয়েছে!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 mr-1" />
                          কপি কোড
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="p-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto leading-relaxed">
                    {r.code}
                  </pre>
                  <p className="text-[11px] text-[var(--color-text-muted)]">
                    💡 {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Simulator: Interactive Loss Curve & Tuning Parameters */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 text-xs font-mono">
                  লাইভ ভিজ্যুয়ালাইজার
                </Badge>
                <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                  LoRA ট্রেইনিং লস ডিকে (Loss Decay) এবং গ্র্যাডিয়েন্ট সিমুলেটর
                </CardTitle>
              </div>
              <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                প্যারামিটার অ্যাডজাস্ট করে দেখো কীভাবে মডেলের ভুলের মাত্রা (Loss: ২.৮৫ থেকে ০.২২ এ নেমে আসে) এবং শেখা নিখুঁত হয়।
              </CardDescription>
            </div>

            <Button
              onClick={runLiveTraining}
              disabled={isSimulating}
              className="h-9 px-4 text-xs font-semibold bg-[#533AFD] hover:bg-[#432DE0] text-white shadow-xs cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              {isSimulating ? (
                <>
                  <Activity className="h-3.5 w-3.5 animate-spin" />
                  ট্রেইনিং চলছে... ({currentStep}/{iterations})
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" />
                  সিমুলেট ট্রেইনিং রান
                </>
              )}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="space-y-1.5 bg-[var(--color-panel-subtle)] p-3 rounded-xl border border-[var(--color-border)]">
              <div className="flex justify-between font-semibold text-[var(--color-text-primary)]">
                <span>ট্রেইনিং ইটারেশন (Steps):</span>
                <span className="text-[#533AFD]">{iterations}</span>
              </div>
              <input
                type="range"
                min="200"
                max="1200"
                step="100"
                value={iterations}
                onChange={(e) => setIterations(Number(e.target.value))}
                className="w-full accent-[#533AFD] cursor-pointer"
              />
              <span className="text-[10px] text-[var(--color-text-muted)] font-sans">
                বেশি স্টেপ দিলে নিখুঁত হয়, তবে ওভারফিটিং এড়াতে ৬০০ যথেষ্ট।
              </span>
            </div>

            <div className="space-y-1.5 bg-[var(--color-panel-subtle)] p-3 rounded-xl border border-[var(--color-border)]">
              <div className="flex justify-between font-semibold text-[var(--color-text-primary)]">
                <span>LoRA Rank (r):</span>
                <span className="text-teal-600 dark:text-teal-400">{loraRank}</span>
              </div>
              <input
                type="range"
                min="8"
                max="64"
                step="8"
                value={loraRank}
                onChange={(e) => setLoraRank(Number(e.target.value))}
                className="w-full accent-teal-500 cursor-pointer"
              />
              <span className="text-[10px] text-[var(--color-text-muted)] font-sans">
                Rank ১৬ হলো গোল্ডেন স্ট্যান্ডার্ড। কম র‍্যামে সর্বোচ্চ নলেজ ধরে রাখে।
              </span>
            </div>

            <div className="space-y-1.5 bg-[var(--color-panel-subtle)] p-3 rounded-xl border border-[var(--color-border)]">
              <div className="flex justify-between font-semibold text-[var(--color-text-primary)]">
                <span>LoRA Layers:</span>
                <span className="text-amber-600 dark:text-amber-400">{loraLayers}</span>
              </div>
              <input
                type="range"
                min="8"
                max="32"
                step="4"
                value={loraLayers}
                onChange={(e) => setLoraLayers(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <span className="text-[10px] text-[var(--color-text-muted)] font-sans">
                মডেলের ৩২টি লেয়ারের মধ্যে ওপরের ১৬টি লেয়ার ফাইন-টিউন করলেই কেল্লাফতে।
              </span>
            </div>
          </div>

          {/* Metric Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)]">
              <div className="text-[10px] font-mono uppercase text-[var(--color-text-secondary)]">বর্তমান লস (Loss)</div>
              <div className="text-lg font-bold text-[#533AFD] mt-0.5">{currentLoss}</div>
              <div className="text-[10px] text-emerald-600 font-medium">টার্গেট &lt; ০.২৫</div>
            </div>
            <div className="p-3 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)]">
              <div className="text-[10px] font-mono uppercase text-[var(--color-text-secondary)]">ম্যাকবুক র‍্যাম ইউজ</div>
              <div className="text-lg font-bold text-teal-600 mt-0.5">৬.৪ জিবি</div>
              <div className="text-[10px] text-[var(--color-text-muted)]">১৬জিবির অর্ধেকেরও কম</div>
            </div>
            <div className="p-3 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)]">
              <div className="text-[10px] font-mono uppercase text-[var(--color-text-secondary)]">ট্রেইনিং স্পিড</div>
              <div className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">২২ tok/s</div>
              <div className="text-[10px] text-[var(--color-text-muted)]">Apple Metal Core</div>
            </div>
            <div className="p-3 bg-[var(--color-panel-subtle)] rounded-xl border border-[var(--color-border)]">
              <div className="text-[10px] font-mono uppercase text-[var(--color-text-secondary)]">ক্লাউড খরচ তুলনা</div>
              <div className="text-lg font-bold text-emerald-600 mt-0.5">$০.০০ ডলার</div>
              <div className="text-[10px] text-[var(--color-text-muted)]">ম্যাকবুকে ফ্রিতে সম্পন্ন</div>
            </div>
          </div>

          {/* Recharts Area Chart */}
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#533AFD" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#533AFD" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorPerplexity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#057A55" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#057A55" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.6} />
                <XAxis dataKey="step" tick={{ fontSize: 11 }} stroke="var(--color-text-muted)" />
                <YAxis tick={{ fontSize: 11 }} stroke="var(--color-text-muted)" />
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
                  name="Training Loss (ভুল)"
                  stroke="#533AFD"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorLoss)"
                />
                <Area
                  type="monotone"
                  dataKey="perplexity"
                  name="Perplexity (দ্বিধা)"
                  stroke="#057A55"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  fillOpacity={1}
                  fill="url(#colorPerplexity)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
