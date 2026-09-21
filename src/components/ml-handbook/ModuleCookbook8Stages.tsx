'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Database,
  Cpu,
  Layers,
  Laptop,
  Terminal,
  Server,
  ShieldCheck,
  CheckCircle2,
  Code,
  Copy,
  Check,
  Trophy,
  ArrowRight,
  Flame,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ModuleCookbook8Stages({ mode }: { mode: 'wife' | 'architect' }) {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const stages = [
    {
      stageNum: 1,
      name: 'Raw Metal: ডেটা প্রিপারেশন',
      tools: 'Pandas, Tokenizer, Vectors',
      summary: 'ভাঙাচোরা ডাটা ধুয়েমুছে সংখ্যায় রূপান্তর ও ট্রেন ডট জেএসএনএল তৈরি।',
      icon: Database,
      color: '#533AFD',
      code: `# ১. কাঁচা ডেটা প্রিপারেশন
import pandas as pd
df = pd.read_csv('raw_client_data.csv')
df = df.dropna().drop_duplicates()
# JSONL ফরম্যাটে এক্সপোর্ট
df.to_json('train.jsonl', orient='records', lines=True)`,
      takeaway: 'কাঁচা ডেটা পরিষ্কার না থাকলে মডেল ভুলভাল আবর্জনা শিখবে।',
    },
    {
      stageNum: 2,
      name: 'Chassis: ক্লাসিক্যাল ML',
      tools: 'XGBoost, Random Forest',
      summary: 'ট্যাবুলার ব্যাংক ফ্রড ও ক্রেডিট রিস্ক ক্যালকুলেশনে ০.১ms আল্ট্রাফাস্ট প্রেডিকশন।',
      icon: Cpu,
      color: '#057A55',
      code: `# ২. আল্ট্রা-ফাস্ট XGBoost
import xgboost as xgb
model = xgb.XGBClassifier(n_estimators=200, max_depth=4)
model.fit(X_train, y_train)
# ০.১ মিলিসেকেন্ডে জিরো কস্ট প্রেডিকশন!
pred = model.predict(X_test)`,
      takeaway: 'টেবিল ডেটায় এলএলএম চালানো বোকামি। এখানে XGBoost চ্যাম্পিয়ন।',
    },
    {
      stageNum: 3,
      name: 'Twin Turbos: ডিপ লার্নিং',
      tools: 'PyTorch, Attention, Weights',
      summary: 'শব্দ বা ইমেজের ভেতরের গভীর সম্পর্ক খুঁজে বের করা ও লস জিরো করা।',
      icon: Flame,
      color: '#FF5E3A',
      code: `# ৩. পাইটর্চ অ্যাটেনশন মেকানিক্স
import torch
import torch.nn.functional as F
# Attention(Q, K, V) = softmax(QK^T / sqrt(d)) * V
scores = torch.matmul(Q, K.transpose(-2, -1)) / (64 ** 0.5)
attention_weights = F.softmax(scores, dim=-1)`,
      takeaway: 'অ্যাটেনশন মেকানিজম শব্দের পেছনের আসল কনটেক্সট চিনে নেয়।',
    },
    {
      stageNum: 4,
      name: 'Widebody: LoRA & PEFT',
      tools: 'Quantization, 4-bit, Safetensors',
      summary: 'পুরো মডেল রি-রাইট না করে মাত্র ০.১% প্যারামিটারে ব্র্যান্ড নলেজ বসানো।',
      icon: Layers,
      color: '#E03177',
      code: `# ৪. LoRA কনফিগারেশন (০.১% প্যারামিটার)
from peft import LoraConfig, get_peft_model
config = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"])
model = get_peft_model(base_model, config)`,
      takeaway: 'পুরো মডেল ট্রেইন না করে স্টিকি নোটের মতো ছোট অ্যাডাপ্টার বসানো।',
    },
    {
      stageNum: 5,
      name: 'The Workshop: Apple MLX',
      tools: 'mlx-lm on Mac M1',
      summary: 'জিরো ক্লাউড খরচে ম্যাকের ইউনিফাইড মেমোরিতে ২০ মিনিটে কাস্টম ট্রেনিং।',
      icon: Laptop,
      color: '#7A68FF',
      code: `# ৫. ম্যাকবুকে জিরো ডলার ফাইন-টিউনিং
mlx_lm.lora \\
  --model mlx-community/Meta-Llama-3-8B-Instruct-4bit \\
  --train --data ./my_data --iters 600 --batch-size 4`,
      takeaway: 'ম্যাকবুকের ১৬জিবি মেমোরিতেই ক্লায়েন্ট ডেমো শতভাগ রেডি।',
    },
    {
      stageNum: 6,
      name: 'Dyno Run: জুপিটার সার্জারি',
      tools: 'Jupyter Lab, Tensors, Logits',
      summary: 'নোটবুকে ৪ লাইনে মডেলের পেটের ভেতরের টোকেন আইডি ও এমবেডিং দেখা।',
      icon: Terminal,
      color: '#00D4FF',
      code: `# ৬. জুপিটার লাইভ ইন্সপেকশন
from mlx_lm import load, generate
model, tokenizer = load("mlx-community/Meta-Llama-3-8B-Instruct-4bit")
tokens = tokenizer.encode("Hello Shakil")
print("Token IDs:", tokens)`,
      takeaway: 'পেটের ভেতর টোকেন ও লস দেখতে পারলে এআই আর কোনো জাদুকরী অন্ধকার বিষয় থাকে না।',
    },
    {
      stageNum: 7,
      name: 'Track Test: Production MLOps',
      tools: 'Docker, AWS G5, vLLM Server',
      summary: 'PagedAttention দিয়ে ক্লায়েন্টের প্রাইভেট ক্লাউডে ২৪/৭ হাই-স্পিড সার্ভিং।',
      icon: Server,
      color: '#057A55',
      code: `# ৭. ডকার ও vLLM সার্ভিং
docker run --gpus all -p 8000:8000 vllm/vllm-openai:latest \\
  --model meta-llama/Meta-Llama-3-8B-Instruct \\
  --enable-lora --lora-modules client-data=/models/adapters`,
      takeaway: 'একসাথে ৫০ জন ইউজার কল করলেও সেকেন্ডে ৯০+ টোকেনে রেসপন্স দেবে।',
    },
    {
      stageNum: 8,
      name: 'The Armor: NIST AI Governance',
      tools: 'OWASP LLM01, PII Firewall',
      summary: 'প্রম্পট ইনজেকশন ইন্টারসেপ্ট করে ক্লায়েন্টের ১০০% সিকিউরিটি নিশ্চিত করা।',
      icon: ShieldCheck,
      color: '#D97706',
      code: `# ৮. ইনলাইন সিকিউরিটি ফায়ারওয়াল
def inspect_prompt(prompt: str):
    if re.search(r'(ignore previous instructions|system prompt)', prompt, re.I):
        return {"blocked": True, "reason": "OWASP LLM01 Injection"}
    return {"blocked": False, "sanitized": redact_pii(prompt)}`,
      takeaway: 'এন্টারপ্রাইজ ক্লায়েন্টরা সিকিউরিটি ফায়ারওয়াল দেখেই $৫,০০০ চেক সাইন করে।',
    },
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Hero Intro */}
      <div className="p-4 sm:p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <Badge className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/20 text-xs font-mono">
            ১০০% কমপ্লিট কুকবুক
          </Badge>
          <span className="text-xs font-mono text-[var(--color-text-secondary)]">৮টি পূর্ণাঙ্গ স্টেজ</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
          মেশিন লার্নিংয়ের সম্পূর্ণ ৮টি স্টেজ: বিগিনার থেকে মাস্টার আর্টিস্ট
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
          এই ৮টি ধাপের বাইরে মেশিন লার্নিংয়ে জানার মতো আর কিছুই নেই। প্রতিটি ধাপ তোমার হাতের তালুর মতো স্পষ্ট।
        </p>
      </div>

      {/* Compact 8 Stage Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stages.map((st, idx) => {
          const Icon = st.icon;
          const isSelected = activeStage === idx;
          return (
            <div
              key={st.stageNum}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-2 relative ${
                isSelected
                  ? 'border-[#533AFD] bg-[#533AFD]/10 shadow-xs ring-1 ring-[#533AFD]/30'
                  : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-text-secondary)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-text-muted)]">
                  স্টেজ {st.stageNum}
                </span>
                <Icon className="h-4 w-4" style={{ color: st.color }} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--color-text-primary)] leading-snug">
                  {st.name}
                </h4>
                <div className="text-[11px] font-mono text-[#533AFD] dark:text-[#7A68FF] mt-0.5">
                  {st.tools}
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-1">
                {st.summary}
              </p>
            </div>
          );
        })}
      </div>

      {/* Selected Stage Detail Card */}
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border)] pb-3">
            <div>
              <div className="text-xs font-mono text-[var(--color-text-muted)]">
                নির্বাচিত স্টেজ {stages[activeStage].stageNum}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                {stages[activeStage].name} ({stages[activeStage].tools})
              </h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(stages[activeStage].code)}
              className="h-8 text-xs font-mono cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                  কপি হয়েছে!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 mr-1" />
                  কোড কপি করুন
                </>
              )}
            </Button>
          </div>

          <pre className="p-4 rounded-xl bg-[var(--color-panel-subtle)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto leading-relaxed">
            {stages[activeStage].code}
          </pre>

          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
            💡 <strong>কোর বিজনেস টেকঅ্যাওয়ে:</strong> {stages[activeStage].takeaway}
          </div>
        </CardContent>
      </Card>

      {/* Master Conclusion Box */}
      <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-50/20 dark:bg-amber-950/20 space-y-2">
        <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
          <Trophy className="h-5 w-5 text-amber-600" />
          <span>উপসংহার: পুরো মেশিন লার্নিং এখন তোমার নখদর্পণে</span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          ক্লায়েন্ট যে কাজই নিয়ে আসুক না কেন, তুমি জানো কোন চ্যাসিস নিতে হবে, কোথায় কাটতে হবে, আর কীভাবে আকিরা নাকাইয়ের মতো শান্ত মাথায় বিশ্বমানের এন্টারপ্রাইজ এআই মাস্টারপিস ডেলিভার করতে হবে!
        </p>
      </div>
    </div>
  );
}
