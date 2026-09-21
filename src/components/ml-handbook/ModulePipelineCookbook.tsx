'use client';

import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  Database,
  Cpu,
  Brain,
  Zap,
  CheckCircle2,
  ArrowRight,
  Code,
  Terminal,
  Activity,
  Heart,
  Briefcase,
  AlertTriangle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ModulePipelineCookbook({ mode }: { mode: 'wife' | 'architect' }) {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 'dataprep',
      title: 'ধাপ ১: কাঁচামাল স্ক্রাবিং ও টোকেনাইজেশন',
      subtitle: 'Data Scrubbing & Feature Engineering (Study Mart ভিডিও ১-২০)',
      wifeMetaphor: 'কাঁচাবাজার থেকে শাকসবজি এনে ধুয়ে পচা পাতা বাদ দেওয়া ও সাইজ মতো কাটা।',
      architectLens: 'Missing value imputation (Mean/Median), One-Hot Encoding, StandardScaler, এবং BPE টোকেনাইজেশন।',
      codeSnippet: `# ১. কাঁচামাল প্রিপারেশন পাইপলাইন
import pandas as pd
from sklearn.preprocessing import StandardScaler

df = pd.read_csv('client_raw_data.csv')
# মিসিং ডেটা হ্যান্ডলিং
df['salary'] = df['salary'].fillna(df['salary'].median())
# ক্যাটাগরিক্যাল থেকে নিউমেরিক কনভার্সন
df = pd.get_dummies(df, columns=['department', 'role'], drop_first=True)

# ফিচার স্কেলিং যাতে কোনো একটি কলাম অন্য কলামকে ডমিনেট না করে
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df.drop(columns=['target']))`,
      takeaway: 'মডেলের অ্যালগরিদম যতই শক্তিশালী হোক, কাঁচা ডেটা আবর্জনা হলে আউটপুটও আবর্জনা হবে (Garbage In, Garbage Out)।',
    },
    {
      id: 'tabular',
      title: 'ধাপ ২: আল্ট্রা-ফাস্ট ট্যাবুলার শ্যাসিস (XGBoost)',
      subtitle: 'Classical Machine Learning (Study Mart ভিডিও ২১-৪৫)',
      wifeMetaphor: '১০ জন অভিজ্ঞ ডাক্তারের কনসালটেশন বোর্ড (Random Forest)। একা একজন ভুল করলেও সবাই মিলে সঠিক রায় দেয়।',
      architectLens: 'ট্যাবুলার ডেটায় (সিআরএম, ফাইন্যান্স, ফ্রড ডিটেকশন) কখনো এলএলএম চালাবে না। XGBoost ০.২ মিলিসেকেন্ডে জিরো ক্লাউড কস্টে কাজ করে।',
      codeSnippet: `# ২. হাই-স্পিড XGBoost ক্লাসিফায়ার
import xgboost as xgb
from sklearn.metrics import roc_auc_score

model = xgb.XGBClassifier(
    n_estimators=300,
    max_depth=5,
    learning_rate=0.05,
    tree_method='hist' # আল্ট্রা-ফাস্ট সিপিইউ/জিপিইউ ট্রেইনিং
)
model.fit(X_train, y_train)

# প্রেডিকশন স্পিড: মাত্র ০.২ মিলিসেকেন্ড!
predictions = model.predict_proba(X_test)[:, 1]
print("AUC Score:", roc_auc_score(y_test, predictions))`,
      takeaway: 'সব জায়গায় এলএলএম ব্যবহার করা বোকামি। টেবিল ডেটায় ডিসিশন ট্রি ও এক্সজিবুস্টই বিশ্বের অপরাজেয় চ্যাম্পিয়ন।',
    },
    {
      id: 'deeplearning',
      title: 'ধাপ ৩: ডিপ নিউরাল মেকানিক্স (PyTorch & Transformers)',
      subtitle: 'Deep Learning & Attention Mechanism (Study Mart ভিডিও ৪৬-৬০)',
      wifeMetaphor: 'গরম পাতিলে হাত লাগলে ঝটকা দিয়ে সরানো (নিউরন অ্যাক্টিভেশন) এবং বাচ্চার ভুল শুধরে দেওয়া (ব্যাকপ্রপ)।',
      architectLens: 'মাল্টি-হেড সেলফ-অ্যাটেনশন, ম্যাট্রিক্স মাল্টিপ্লিকেশন (Q, K, V), এবং অ্যাডাম অপটিমাইজারে লস ডিকে মিনিমাইজেশন।',
      codeSnippet: `# ৩. পাইটর্চ টেনসর মেকানিক্স
import torch
import torch.nn as nn

# সেলফ-অ্যাটেনশন কোর সমীকরণ: Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) * V
class MinimalAttention(nn.Module):
    def __init__(self, embed_dim=4096, heads=32):
        super().__init__()
        self.q_proj = nn.Linear(embed_dim, embed_dim, bias=False)
        self.k_proj = nn.Linear(embed_dim, embed_dim, bias=False)
        self.v_proj = nn.Linear(embed_dim, embed_dim, bias=False)

    def forward(self, x):
        # টেনসর শেপ: [Batch, SeqLen, EmbedDim]
        Q, K, V = self.q_proj(x), self.k_proj(x), self.v_proj(x)
        scores = torch.matmul(Q, K.transpose(-2, -1)) / (4096 ** 0.5)
        weights = torch.softmax(scores, dim=-1)
        return torch.matmul(weights, V)`,
      takeaway: 'অ্যাটেনশন মেকানিজম শব্দের পেছনের কনটেক্সট বোঝে। ব্যাংক মানে নদীর তীর নাকি টাকার ব্যাংক তা পাশের শব্দ দেখে নির্ণয় করে।',
    },
    {
      id: 'lora-ewc',
      title: 'ধাপ ৪: ওয়াইডবডি টিউনিং ও ভুলে যাওয়া রোধ (LoRA & EWC)',
      subtitle: 'PEFT, LoRA & Catastrophic Forgetting (Study Mart ভিডিও ৬১-৬৮)',
      wifeMetaphor: '১,০০০ পাতার রেসিপি বই না পুড়িয়ে পেছনের ৫ পাতার স্টিকি নোটে নতুন রেসিপি জুড়ে দেওয়া।',
      architectLens: 'W = W0 + Delta W। Fisher Information Matrix দিয়ে গুরুত্বপূর্ণ ওজনগুলোতে রাবার ব্যান্ড পরিয়ে পুরনো জ্ঞান রক্ষা করা (EWC)।',
      codeSnippet: `# ৪. PEFT / LoRA কনফিগারেশন
from peft import LoraConfig, get_peft_model

peft_config = LoraConfig(
    r=16,                         # LoRA Rank (লোকাল মেমোরি ফ্রেন্ডলি)
    lora_alpha=32,                # স্কেলিং ফ্যাক্টর (2 * r)
    target_modules=["q_proj", "v_proj"], # অ্যাটেনশন লেয়ারগুলোতে মোড বসানো
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)
# অরিজিনাল মডেলের ৯৯.৯% প্যারামিটার ফ্রিজ থাকবে, মাত্র ০.১% প্যারামিটার ট্রেইন হবে!
model = get_peft_model(base_model, peft_config)`,
      takeaway: 'পুরো মডেল নতুন করে ট্রেইন করতে $১০০,০০০ খরচ করা বোকাদের কাজ। বুদ্ধিমান আর্কিটেক্ট মাত্র $০ খরচে LoRA অ্যাডাপ্টার জোড়ে।',
    },
  ];

  return (
    <div className="space-y-8">
      <Card className="border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
        <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/30 text-xs font-mono">
                  স্টাডি মার্ট ৬৮টি ভিডিওর খাঁটি নির্যাস
                </Badge>
                <CardTitle className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                  কাঁচামাল থেকে ওয়াইডবডি টিউনিং: ৪-ধাপের কমপ্লিট কুকবুক
                </CardTitle>
              </div>
              <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                কোনো ঘণ্টার পর ঘণ্টা থিওরি মুখস্থ করার দরকার নেই। এই ৪টি ধাপেই পুরো মেশিন লার্নিং ইন্ডাস্ট্রি পরিচালিত হয়।
              </CardDescription>
            </div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              ১,০০০ ঘণ্টা → ৫ মিনিটে আয়ত্ত
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {/* Stage Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {stages.map((st, idx) => (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  activeStage === idx
                    ? 'border-[#533AFD] bg-[#533AFD]/10 shadow-xs'
                    : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] hover:border-[var(--color-text-secondary)]'
                }`}
              >
                <div className="text-[10px] font-mono font-bold uppercase text-[var(--color-text-muted)]">
                  স্টেপ {idx + 1}
                </div>
                <div className="text-xs font-bold text-[var(--color-text-primary)] mt-1 line-clamp-1">
                  {st.title.split(':')[1] || st.title}
                </div>
                <div className="text-[11px] text-[var(--color-text-secondary)] mt-0.5 truncate">
                  {st.subtitle.split('(')[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Detail */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-5 space-y-5">
            <div className="border-b border-[var(--color-border)] pb-3">
              <h4 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                {stages[activeStage].title}
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                {stages[activeStage].subtitle}
              </p>
            </div>

            {/* Metaphor / Explanation Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <Heart className="h-4 w-4" />
                  সহজ ঘরোয়া গল্প (Wife Mode)
                </span>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {stages[activeStage].wifeMetaphor}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#533AFD]/20 bg-[#533AFD]/5 space-y-1.5">
                <span className="text-xs font-bold text-[#533AFD] dark:text-[#7A68FF] flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4" />
                  সিনিয়র সিস্টেম আর্কিটেক্ট লেন্স
                </span>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {stages[activeStage].architectLens}
                </p>
              </div>
            </div>

            {/* Code Block */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[var(--color-text-primary)] flex items-center gap-1.5">
                  <Code className="h-4 w-4 text-[#533AFD]" />
                  প্রোডাকশন পাইথন ইমপ্লিমেন্টেশন
                </span>
                <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                  Python 3.11+
                </span>
              </div>
              <pre className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto leading-relaxed">
                {stages[activeStage].codeSnippet}
              </pre>
            </div>

            {/* Practical Takeaway */}
            <div className="p-3.5 rounded-lg border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 font-medium">
              💡 <strong>আকিরা গোল্ডেন রুল:</strong> {stages[activeStage].takeaway}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
