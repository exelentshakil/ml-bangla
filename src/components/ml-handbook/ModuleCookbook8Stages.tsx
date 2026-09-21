'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Database,
  Calculator,
  Brain,
  FileText,
  Laptop,
  CheckSquare,
  Server,
  ShieldCheck,
  CheckCircle2,
  Code,
  Copy,
  Check,
  Trophy,
  ArrowRight,
  DollarSign,
  TrendingUp,
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
      name: 'কাঁচামাল বাছাই ও গোছানো',
      englishTitle: 'Data Scrubbing & Structuring',
      tools: 'Pandas, Tokenizer, Vectors',
      summary: 'ভাঙাচোরা, অগোছালো ডেটা ধুয়েমুছে ক্লিন এক্সেল বা train.jsonl ফাইলে সাজানো যাতে ভুল তথ্যে কাজ না হয়।',
      icon: Database,
      color: '#533AFD',
      code: `# ১. কাঁচামাল ক্লিনিং ও গোছানো
import pandas as pd
df = pd.read_csv('raw_client_leads.csv')
# ডুপ্লিকেট ও খালি ঘর বাদ দেওয়া
df = df.dropna().drop_duplicates()
# এআই পড়ার মতো সাজানো ফাইলে সেভ
df.to_json('train.jsonl', orient='records', lines=True)`,
      takeaway: 'কাঁচামাল পরিষ্কার না হলে পুরো ব্যবসার আউটপুট ভুল হবে (Garbage in, garbage out)।',
    },
    {
      stageNum: 2,
      name: 'সুপারফাস্ট হিসাবরক্ষক',
      englishTitle: 'Fast Tabular Scoring',
      tools: 'XGBoost, Random Forest',
      summary: 'ব্যাংক ফ্রড, লোন রিস্ক বা সেলস স্কোরিংয়ে ০.১ms আল্ট্রাফাস্ট হিসাব। কোনো টোকেন বিল ছাড়াই মুহূর্তে সিদ্ধান্ত।',
      icon: Calculator,
      color: '#057A55',
      code: `# ২. আল্ট্রা-ফাস্ট বিজনেস ডিসিশন ইঞ্জিন
import xgboost as xgb
model = xgb.XGBClassifier(n_estimators=200, max_depth=4)
model.fit(X_train, y_train)
# ০.১ মিলিসেকেন্ডে সিদ্ধান্ত, এপিআই বিল ০ টাকা!
fraud_risk = model.predict(X_test)`,
      takeaway: 'টেবিল ডেটায় দামি এলএলএম চালানো বোকামি। এখানে এক্সজিবুস্টই সবচেয়ে সস্তা ও দ্রুত চ্যাম্পিয়ন।',
    },
    {
      stageNum: 3,
      name: 'অভিজ্ঞ ম্যানেজার ব্রেইন',
      englishTitle: 'Deep Pattern Recognition',
      tools: 'PyTorch, Attention, Weights',
      summary: 'কাস্টমারের দীর্ঘ মেসেজ বা জটিল ডকুমেন্টের পেছনের আসল মানে ও উদ্দেশ্য মানুষের মতো নিখুঁতভাবে ধরা।',
      icon: Brain,
      color: '#FF5E3A',
      code: `# ৩. কনটেক্সট বোঝার অ্যাটেনশন ইঞ্জিন
import torch
import torch.nn.functional as F
# কাস্টমারের বাক্যের প্রতিটা শব্দের আসল গুরুত্ব মাপা
scores = torch.matmul(Q, K.transpose(-2, -1)) / (64 ** 0.5)
word_importance = F.softmax(scores, dim=-1)`,
      takeaway: 'শব্দের আসল অর্থ বুঝতে পারে, যেমন ব্যাংক মানে নদীর পাড় নাকি টাকার প্রতিষ্ঠান তা কনটেক্সট দেখে চেনে।',
    },
    {
      stageNum: 4,
      name: 'কোম্পানির সিক্রেট রুলবুক',
      englishTitle: 'Private Custom Rules (LoRA)',
      tools: 'Quantization, 4-bit, Safetensors',
      summary: 'পুরো এআই নতুন করে না বানিয়ে কোম্পানির নিজস্ব ৫ পাতার প্রাইভেট নিয়ম জুড়ে দেওয়া। খরচ ৯৯.৯% সাশ্রয়।',
      icon: FileText,
      color: '#E03177',
      code: `# ৪. কোম্পানির নিজস্ব রুলবুক অ্যাডাপ্টার
from peft import LoraConfig, get_peft_model
# মাত্র ০.১% প্যারামিটারে কোম্পানির নিজস্ব পলিসি বসানো
config = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"])
model = get_peft_model(base_model, config)`,
      takeaway: 'বই না পুড়িয়ে পেছনের স্টিকি নোটে নতুন রেসিপি জুড়ে নেওয়ার মতো সহজ ও সাশ্রয়ী।',
    },
    {
      stageNum: 5,
      name: 'জিরো-কস্ট অফিস ডেস্ক',
      englishTitle: 'Local Prototype Lab',
      tools: 'mlx-lm on Mac M1',
      summary: 'বাইরের কোনো ক্লাউড ভাড়া ছাড়া নিজের ম্যাকবুকের মেমোরিতে ২০ মিনিটে মডেল ট্রেইন ও রেডি করা।',
      icon: Laptop,
      color: '#7A68FF',
      code: `# ৫. ম্যাকবুকে জিরো খরচে ফাইন-টিউনিং
mlx_lm.lora \\
  --model mlx-community/Meta-Llama-3-8B-Instruct-4bit \\
  --train --data ./company_data --iters 600 --batch-size 4`,
      takeaway: 'ক্লায়েন্টকে ডেমো দেখানোর জন্য ক্লাউডে ১ টাকাও খরচ করার দরকার নেই।',
    },
    {
      stageNum: 6,
      name: 'কোয়ালিটি অডিট ও চেক',
      englishTitle: 'Quality Control & Inspection',
      tools: 'Jupyter Lab, Tensors, Logits',
      summary: 'ক্লায়েন্টকে দেখানোর আগে নোটবুকে ৪ লাইনের কোডে নিজের চোখে সব হিসাব ও আউটপুট ঠিক আছে কি না পরখ করা।',
      icon: CheckSquare,
      color: '#00D4FF',
      code: `# ৬. আউটপুট অডিট ও ভেরিফিকেশন
from mlx_lm import load, generate
model, tokenizer = load("mlx-community/Meta-Llama-3-8B-Instruct-4bit")
test_reply = generate(model, tokenizer, prompt="Company refund rules:")
print(test_reply)`,
      takeaway: 'পেটের ভেতর টোকেন আর আউটপুট দেখে ডেলিভারি দিলে কাজে কোনো খুঁত থাকে না।',
    },
    {
      stageNum: 7,
      name: '২৪/৭ লাইভ ডেলিভারি সেন্টার',
      englishTitle: 'Production Cloud Serving',
      tools: 'Docker, AWS G5, vLLM Server',
      summary: 'ক্লায়েন্টের নিজস্ব প্রাইভেট ক্লাউডে ২৪/৭ লাইভ সার্ভার চালানো যাতে কোম্পানির ৫০ জন একসাথে কাজ করতে পারে।',
      icon: Server,
      color: '#057A55',
      code: `# ৭. ক্লায়েন্টের নিজস্ব প্রাইভেট সার্ভিং
docker run --gpus all -p 8000:8000 vllm/vllm-openai:latest \\
  --model meta-llama/Meta-Llama-3-8B-Instruct \\
  --enable-lora --lora-modules client-data=/models/adapters`,
      takeaway: 'একসাথে বহু গ্রাহক আসলেও সিস্টেম কখনো হ্যাং বা ক্র্যাশ করবে না।',
    },
    {
      stageNum: 8,
      name: 'সিকিউরিটি গার্ড ও লিগ্যাল শিল্ড',
      englishTitle: 'Security Guard & PII Firewall',
      tools: 'OWASP LLM01, PII Firewall',
      summary: 'হ্যাকিং ও গোপন ফাইল চুরি ঠেকিয়ে কোম্পানির ডেটা ১০০% নিরাপদ রাখা যাতে কোনো আইনি ঝামেলা না হয়।',
      icon: ShieldCheck,
      color: '#D97706',
      code: `# ৮. ইনলাইন সিকিউরিটি ফিল্টার
def check_security(user_query: str):
    # প্রম্পট ইনজেকশন বা হ্যাকিং ব্লক করা
    if "ignore all rules" in user_query.lower():
        return {"allow": False, "msg": "Blocked by Security Shield"}
    return {"allow": True, "clean_query": mask_sensitive_pii(user_query)}`,
      takeaway: 'বড় বড় এন্টারপ্রাইজ কোম্পানি এই সিকিউরিটি শিল্ড দেখেই নিশ্চিন্তে $৫,০০০ দেয়।',
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
          <span className="text-xs font-mono text-[var(--color-text-secondary)]">৮টি পূর্ণাঙ্গ বিজনেস স্টেজ</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
          মেশিন লার্নিংয়ের সম্পূর্ণ ৮টি স্টেজ: বিগিনার থেকে মাস্টার আর্টিস্ট
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
          এই ৮টি ধাপের বাইরে মেশিন লার্নিংয়ে জানার মতো আর কিছুই নেই। কোনো গাড়ির মেটাফর নয়, একদম খাঁটি বিজনেস প্রবলেম সলভিংয়ের আলোতে তোমার হাতের তালুর মতো পরিষ্কার।
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
                নির্বাচিত স্টেজ {stages[activeStage].stageNum}: {stages[activeStage].englishTitle}
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
            💡 <strong>কোর বিজনেস লাভ:</strong> {stages[activeStage].takeaway}
          </div>
        </CardContent>
      </Card>

      {/* Master Conclusion Box */}
      <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-50/20 dark:bg-amber-950/20 space-y-2">
        <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
          <Trophy className="h-5 w-5 text-amber-600" />
          <span>🏆 উপসংহার: এই পুরো আর্কিটেকচার এখন তোমার নখদর্পণে</span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          ক্লায়েন্ট যে কাজই নিয়ে আসুক না কেন, তুমি জানো কোথায় ডেটা গোছাতে হবে, কোন টুল দিয়ে খরচ বাঁচাতে হবে, আর কীভাবে আকিরা নাকাইয়ের মতো শান্ত মাথায় বিশ্বমানের এন্টারপ্রাইজ এআই মাস্টারপিস ডেলিভার করতে হবে!
        </p>
      </div>
    </div>
  );
}
