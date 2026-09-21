'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Database,
  GitBranch,
  Brain,
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
  Heart,
  Briefcase,
  Utensils,
  ShoppingBag,
  Home,
  Lock,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ModuleCookbook8Stages({ mode }: { mode: 'wife' | 'architect' }) {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // 1. Wife Mode Stages (100% Earthy Household Analogies)
  const wifeStages = [
    {
      stageNum: 1,
      name: 'শাকসবজি ধুয়ে বাছাই করা',
      subtitle: 'রান্নার আগে পচা পাতা ফেলে দেওয়া',
      tools: 'কাঁচামাল পরিষ্কার করা',
      concept: 'বাজারের থলে থেকে শাকসবজি বের করে পচা অংশ ফেলে পরিষ্কার পানিতে ধুয়ে রান্নার জন্য প্রস্তুত করা। পচা আলু বা পাতা দিলে পুরো তরকারি নষ্ট হয়ে যাবে।',
      icon: ShoppingBag,
      color: '#E03177',
      code: `# ১. রান্নার আগে শাকসবজি ধুয়ে নেওয়া
সবজি = বাজার_থেকে_আনা_শাক
ভালো_সবজি = পচা_পাতা_বাদ_দাও(সবজি)
ধোয়া_সবজি = পানিতে_পরিষ্কার_করো(ভালো_সবজি)
রান্নার_বাটিতে_তুলে_রাখো(ধোয়া_সবজি)`,
      takeaway: 'কাঁচামাল ভালো ও পরিষ্কার না হলে কোনো রান্নাই সুস্বাদু হবে না।',
    },
    {
      stageNum: 2,
      name: 'চটজলদি বাজারের লাভ-ক্ষতি',
      subtitle: 'মুহূর্তের মধ্যে হ্যাঁ বা না সিদ্ধান্ত',
      tools: 'অভিজ্ঞ গৃহিণীর দ্রুত হিসাব',
      concept: 'দোকানে গিয়ে এক নজরে দাম দেখেই চট করে বুঝে ফেলা কোনটা কেনা লাভ আর কোনটা লস। লম্বা কোনো চিন্তা ছাড়াই ১ সেকেন্ডেই সঠিক সিদ্ধান্ত।',
      icon: GitBranch,
      color: '#057A55',
      code: `# ২. ঝটপট লাভ-ক্ষতির হিসাব
if দাম <= ন্যায্য_মূল্য and মান == 'তাজা':
    কিনে_ফেলো = True
else:
    অন্য_দোকানে_যাও = True`,
      takeaway: 'ছোট ছোট দৈনন্দিন সিদ্ধান্তের জন্য ঘণ্টার পর ঘণ্টা ভাবতে হয় না, চটজলদি সিদ্ধান্তই সেরা।',
    },
    {
      stageNum: 3,
      name: 'মনের ভাব ও চোখের ইশারা বোঝা',
      subtitle: 'না বললেও মনের কথা ধরে ফেলা',
      tools: 'গভীর পারিবারিক বোঝাপড়া',
      concept: 'পরিবারের কারো মুখের দিকে তাকিয়েই বুঝে ফেলা সে খুশি নাকি কোনো কারণে মন খারাপ। সে মুখে কিছু না বললেও পরিস্থিতি দেখে আসল কথা বুঝে নেওয়া।',
      icon: Brain,
      color: '#FF5E3A',
      code: `# ৩. কথা না বললেও মনের ভাব বোঝা
কণ্ঠের_সুর = 'মৃদু'
মুখের_হাসি = 'অনুপস্থিত'
সিদ্ধান্ত = 'নিশ্চয়ই কোনো কারণে মন খারাপ, চা বানিয়ে দিই'`,
      takeaway: 'শব্দ সবসময় জরুরি নয়, পেছনের আসল অনুভূতি বুঝতে পারাই বড় গুণ।',
    },
    {
      stageNum: 4,
      name: 'রেসিপি বইয়ের পেছনের স্টিকি নোট',
      subtitle: 'পুরো বই না লিখে ছোট একটা নোট লাগানো',
      tools: 'স্মার্ট ও সহজ বুদ্ধি',
      concept: 'পুরো ১,০০০ পাতার রান্নার বই নতুন করে না লিখে পেছনের কভারে ছোট্ট একটা স্টিকি নোটে নতুন রেসিপি লিখে রাখা। বই কেনার খরচ ৯৯% বেঁচে যায়।',
      icon: Layers,
      color: '#533AFD',
      code: `# ৪. পেছনের স্টিকি নোটে নতুন রেসিপি
পুরো_বই = '১,০০০ পাতার পুরোনো মোঘল রেসিপি'
স্টিকি_নোট = 'শুধু নতুন মিষ্টি বানানোর ৫ লাইনের নিয়ম'
রান্নার_টেবিলে_রাখো(পুরো_বই + স্টিকি_নোট)`,
      takeaway: 'পুরো জিনিস বদলানোর দরকার নেই, ছোট একটা চিরকুট জুড়ে দিলেই কাজ হয়ে যায়।',
    },
    {
      stageNum: 5,
      name: 'নিজের রান্নাঘরের ট্রায়াল',
      subtitle: 'কোনো খরচ ছাড়াই বাসায় বানিয়ে দেখা',
      tools: 'ঘরোয়া রান্নাঘরের টেবিল',
      concept: 'বাইরের বড় রেস্তোরাঁ ভাড়া না করে নিজের বাসার রান্নাঘরেই পরিবারের জন্য মিষ্টি বানিয়ে টেস্ট করা। বাইরে ১ টাকাও খরচ হয় না।',
      icon: Home,
      color: '#7A68FF',
      code: `# ৫. নিজের ঘরেই বানিয়ে টেস্ট
নিজের_রান্নাঘর = 'ম্যাকবুকের লোকাল মেমোরি'
খরচ = ০.০০  # কোনো ক্লাউড বিল নেই
মিষ্টি_বানানো_শুরু_করো()`,
      takeaway: 'মেহমান ডাকার আগে নিজের ঘরে বানিয়ে দেখে নেওয়া সবচেয়ে নিরাপদ।',
    },
    {
      stageNum: 6,
      name: 'রান্নার লবণ ও স্বাদ চাখা',
      subtitle: 'মেহমানদের দেওয়ার আগে স্বাদ পরীক্ষা',
      tools: 'স্বাদ যাচাই ও কোয়ালিটি চেক',
      concept: 'মেহমানদের টেবিলে খাবার সাজিয়ে দেওয়ার আগে ছোট চামচ দিয়ে ঝোল একটু মুখে দিয়ে দেখা লবণ-ঝাল ঠিক আছে কি না। কোনো ভুল থাকলে আগেই শুধরে নেওয়া।',
      icon: Utensils,
      color: '#00D4FF',
      code: `# ৬. এক চামচ মুখে দিয়ে স্বাদ যাচাই
এক_চামচ = ঝোল_মুখে_দাও()
if লবণ == 'ঠিক আছে':
    মেহমানের_টেবিলে_বাটি_দাও()`,
      takeaway: 'পরিবেশন করার আগে নিজের মুখে চেখে দেখলে রান্নায় কখনো কোনো খুঁত থাকে না।',
    },
    {
      stageNum: 7,
      name: 'বিয়ের দাওয়াতের ফুল সার্ভিস',
      subtitle: 'একসাথে ৫০০ মেহমানকে খাবার পরিবেশন',
      tools: 'বড় পারিবারিক উৎসব ও ডেকচি',
      concept: 'ঘরের ট্রায়াল সফল! এবার বিয়েবাড়িতে বড় ডেকচিতে রান্না করে একসাথে শত শত মেহমানকে গরম গরম খাবার দেওয়া। যত মেহমানই আসুক কোনো খাবারের ঘাটতি নেই।',
      icon: Server,
      color: '#057A55',
      code: `# ৭. শত শত মেহমানের জন্য বড় রান্না
মেহমান_সংখ্যা = ৫০০
সার্ভিস = '২৪ ঘণ্টা গরম খাবার রেডি'
কোনো_দেরি_নেই_তৃপ্তির_হাসি()`,
      takeaway: 'আয়োজন যত বড়ই হোক, সিস্টেম মজবুত থাকলে সবাই এক মুহূর্তেই সেবা পায়।',
    },
    {
      stageNum: 8,
      name: 'সদর দরজার ভালো তালা ও দারোয়ান',
      subtitle: 'ঘরের ভেতরের নিরাপত্তা নিশ্চিত করা',
      tools: 'সিকিউরিটি ও প্রাইভেসি শিল্ড',
      concept: 'বাসার সদর দরজায় ভালো তালা ও সিসিটিভি রাখা যাতে কোনো অচেনা খারাপ মানুষ বা চোর ভেতরে ঢুকতে না পারে। ঘরের প্রতিটি জিনিস সবসময় সুরক্ষিত।',
      icon: Lock,
      color: '#D97706',
      code: `# ৮. সদর দরজার নিরাপত্তা পাহারা
if আগন্তুক == 'অচেনা বা সন্দেহভাজন':
    দরজা_খুলবে_না = True
else:
    স্বাগতম_জানাও()`,
      takeaway: 'নিরাপত্তা নিশ্চিত থাকলে পরিবারের সবাই শান্তিতে ঘুমাতে পারে।',
    },
  ];

  // 2. Senior Software Engineer Stages (100% SWE Equivalents)
  const architectStages = [
    {
      stageNum: 1,
      name: 'ডেটা স্যানিটাইজেশন ও ম্যাপিং',
      subtitle: 'Input Sanitization (array_map / Clean JSON)',
      tools: 'Pandas, Tokenizer, Vectors',
      concept: 'ঠিক যেমন API তে রিকোয়েস্ট এলে নাল (null) ভ্যালু ফিল্টার করে ক্লিন JSON বানাও, এখানেও কাঁচা ডেটাবেস টেবিল ধুয়ে train.jsonl বানানো হয়।',
      icon: Database,
      color: '#533AFD',
      code: `# ১. ডেটাবেস টেবিল ক্লিন করে JSONL তৈরি
import pandas as pd
df = pd.read_csv('raw_client_leads.csv')
df = df.dropna().drop_duplicates()
df.to_json('train.jsonl', orient='records', lines=True)`,
      takeaway: 'নোংরা কাঁচা ইনপুট দিলে সিস্টেম ভুলভাল আউটপুট দেবে (Garbage in, garbage out)।',
    },
    {
      stageNum: 2,
      name: 'অটোমেটেড if-else ডিসিশন ট্রি',
      subtitle: 'Automated 1,000 Nested If-Else Rules',
      tools: 'XGBoost, Scikit-Learn',
      concept: 'হাতে ১,০০০টা if (salary > 50k && creditScore > 700) না লিখে, ডেটাবেস দেখে অ্যালগরিদম নিজে নিখুঁত if-else ট্রি বানিয়ে ০.১ms এ ট্রু/ফলস রেজাল্ট দেয়।',
      icon: GitBranch,
      color: '#057A55',
      code: `# ২. অটোমেটেড ডিসিশন ট্রি (XGBoost)
import xgboost as xgb
model = xgb.XGBClassifier(n_estimators=200, max_depth=4)
model.fit(X_train, y_train)
# ০.১ মিলিসেকেন্ডে C++ বাইনারি এক্সিকিউশন, টোকেন খরচ $০!
is_approved = model.predict(X_test)`,
      takeaway: 'টেবিল ডেটায় কোনো চ্যাটবট লাগে না। এক্সজিবুস্টের প্রি-কম্পাইল্ড if-else ট্রি সবচেয়ে দ্রুত ও সস্তা।',
    },
    {
      stageNum: 3,
      name: 'ভেক্টর অ্যারে ও সিমিলারিটি সার্চ',
      subtitle: 'Vector Float Arrays & Semantic Search',
      tools: 'PyTorch, Attention Mechanism',
      concept: 'ডেটাবেসে যেমন LIKE %search% দিয়ে খুঁজো, এখানে টেক্সটকে ১,৫৩৬ সাইজের ফ্লোট নাম্বারের অ্যারে বানিয়ে শব্দের ভেতরের আসল অর্থ ও মিল খোঁজা হয়।',
      icon: Brain,
      color: '#FF5E3A',
      code: `# ৩. ফ্লোট অ্যারে তৈরি ও অ্যাটেনশন
import torch
import torch.nn.functional as F
# শব্দের অর্থকে ভেক্টর অ্যারেতে রূপান্তর
scores = torch.matmul(Q, K.transpose(-2, -1)) / (64 ** 0.5)
word_weights = F.softmax(scores, dim=-1)`,
      takeaway: 'কাস্টমার হুবহু কি-ওয়ার্ড না লিখে ঘুরিয়ে বললেও তার আসল উদ্দেশ্য ডেটাবেস থেকে বের করে।',
    },
    {
      stageNum: 4,
      name: 'প্লাগইন অ্যাডাপ্টার বা গিট প্যাচ',
      subtitle: 'Plugin / patch.diff on Base Framework',
      tools: 'LoRA, 4-bit Quantization',
      concept: 'পুরো কোর ফ্রেমওয়ার্ক রি-রাইট না করে যেমন ছোট একটা প্লাগইন বা গিট প্যাচ বসাও, তেমনি মেটার Llama-3 এর মূল কোড লক রেখে ওপরের ৫ মেগাবাইটে কাস্টম রুল প্লাগইন করা।',
      icon: Layers,
      color: '#E03177',
      code: `# ৪. বেস মডেলের ওপর LoRA প্লাগইন
from peft import LoraConfig, get_peft_model
# মাত্র ০.১% প্যারামিটারে ক্লায়েন্টের নিজস্ব পলিসি প্লাগ-ইন
config = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"])
model = get_peft_model(base_model, config)`,
      takeaway: 'পুরো মডেল নতুন করে ট্রেইন করতে লাখ ডলার না পুড়িয়ে মাত্র ৫ মেগাবাইটের প্লাগইন চালানো।',
    },
    {
      stageNum: 5,
      name: 'লোকালহোস্ট প্রোটোটাইপ ল্যাব',
      subtitle: 'localhost:3000 on Apple Silicon',
      tools: 'mlx-lm on Mac M1 (16GB RAM)',
      concept: 'ক্লাউডে ডেপ্লয় করার আগে যেমন নিজের ল্যাপটপে লোকালহোস্টে কোড চালিয়ে টেস্ট করো, তেমনি ম্যাকবুকের মেমোরিতে জিরো ক্লাউড খরচে মডেল টেস্ট করা।',
      icon: Laptop,
      color: '#7A68FF',
      code: `# ৫. ম্যাকবুকের ইউনিফাইড মেমোরিতে লোকাল রান
mlx_lm.lora \\
  --model mlx-community/Meta-Llama-3-8B-Instruct-4bit \\
  --train --data ./client_data --iters 600 --batch-size 4`,
      takeaway: 'ক্লায়েন্টকে ডেমো দেখানোর জন্য ক্লাউড জিপিইউ ভাড়া নেওয়ার কোনো দরকার নেই।',
    },
    {
      stageNum: 6,
      name: 'কনসোল লগ ও ইন্টারেক্টিভ ডিবাগার',
      subtitle: 'console.log() & Chrome DevTools Breakpoints',
      tools: 'Jupyter Lab, Tensors, Logits',
      concept: 'ব্রাউজার কনসোলে যেমন ভ্যারিয়েবলের ভ্যালু প্রিন্ট করে বাগ চেক করো, তেমনি জুপিটার নোটবুকে প্রতি লাইনের টোকেন আর আউটপুট নিজে চোখে অডিট করা।',
      icon: Terminal,
      color: '#00D4FF',
      code: `# ৬. জুপিটারে টোকেন ও আউটপুট অডিট
from mlx_lm import load, generate
model, tokenizer = load("mlx-community/Meta-Llama-3-8B-Instruct-4bit")
print("Tokens:", tokenizer.encode("Company Policy"))
print("Output:", generate(model, tokenizer, prompt="Refund rules:"))`,
      takeaway: 'পেটের ভেতর টোকেন ও আউটপুট চোখে দেখলে এআই আর কোনো জাদুকরী অন্ধকার জিনিস থাকে না।',
    },
    {
      stageNum: 7,
      name: 'প্রোডাকশন ডকার মাইক্রোসার্ভিস',
      subtitle: 'Docker Container + Nginx Reverse Proxy',
      tools: 'Docker, AWS G5, vLLM Server',
      concept: 'Nginx রিভার্স প্রক্সি দিয়ে নোড ব্যাকএন্ড যেভাবে ডকারে চালাও, ক্লায়েন্টের প্রাইভেট ক্লাউডে vLLM সার্ভার চালিয়ে সেকেন্ডে ৯০+ টোকেন এপিআই দেওয়া।',
      icon: Server,
      color: '#057A55',
      code: `# ৭. প্রাইভেট ডকার এপিআই সার্ভিং
docker run --gpus all -p 8000:8000 vllm/vllm-openai:latest \\
  --model meta-llama/Meta-Llama-3-8B-Instruct \\
  --enable-lora --lora-modules client-workflow=/models/adapters`,
      takeaway: 'একসাথে বহু টিম মেম্বার রিকোয়েস্ট পাঠালেও সিস্টেম হ্যাং বা ক্র্যাশ করবে না।',
    },
    {
      stageNum: 8,
      name: 'এপিআই মিডলওয়্যার ও সিকিউরিটি শিল্ড',
      subtitle: 'Express Middleware & SQL Injection Sanitizer',
      tools: 'OWASP LLM01, PII Masking',
      concept: 'ব্যাকএন্ডে যেমন cors ও rateLimit মিডলওয়্যার বসাও, তেমনি ইউজার খারাপ প্রম্পট পাঠালে এআইতে যাওয়ার আগেই মিডলওয়্যারে আটকে দেওয়া।',
      icon: ShieldCheck,
      color: '#D97706',
      code: `# ৮. ইনলাইন এপিআই মিডলওয়্যার
def security_middleware(prompt: str):
    # হ্যাকিং প্রম্পট রিজেক্ট করা
    if "ignore previous instructions" in prompt.lower():
        return {"allow": False, "error": "Prompt Injection Blocked"}
    return {"allow": True, "clean_prompt": mask_pii(prompt)}`,
      takeaway: 'এন্টারপ্রাইজ ক্লায়েন্টরা ডেটা চুরির ঝুঁকি মুক্ত দেখেই বড় চেক সাইন করে।',
    },
  ];

  const currentStages = mode === 'wife' ? wifeStages : architectStages;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Hero Intro */}
      <div className="p-4 sm:p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className={`text-xs font-mono ${mode === 'wife' ? 'bg-rose-500 text-white' : 'bg-[#533AFD]/10 text-[#533AFD] border-[#533AFD]/20'}`}>
              {mode === 'wife' ? 'Wife Mode: সহজ ঘরোয়া গল্প' : 'Engineer Lens: কোডিং অ্যানালজি'}
            </Badge>
            <span className="text-xs font-mono text-[var(--color-text-secondary)]">৮টি পূর্ণাঙ্গ স্টেজ</span>
          </div>

          <div className="text-[11px] font-mono text-[var(--color-text-muted)]">
            ভিউ: {mode === 'wife' ? '🌸 ঘরোয়া রূপক' : '💻 সফটওয়্যার আর্কিটেকচার'}
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
          মেশিন লার্নিংয়ের সম্পূর্ণ ৮টি স্টেজ: বিগিনার থেকে মাস্টার আর্টিস্ট
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {mode === 'wife' ? (
            <span>
              শাকসবজি ধোয়া, বাজারদর, মনের ভাব বোঝা আর রেসিপির স্টিকি নোটের মতো অতি সাধারণ ঘরোয়া কাজের মাধ্যমে এআই এর ৮টি ধাপ পানির মতো পরিষ্কার!
            </span>
          ) : (
            <span>
              কোনো অস্পষ্ট শব্দ নয়। তোমার ১২ বছরের সফটওয়্যার ডেভেলপমেন্ট অভিজ্ঞতার সাথে (Input sanitization, If-Else, Vector array, Git patch, Localhost, Console.log, Docker, Middleware) প্রতিটি স্টেজ ১০০% সরাসরি মেলানো।
            </span>
          )}
        </p>
      </div>

      {/* Compact 8 Stage Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {currentStages.map((st, idx) => {
          const Icon = st.icon;
          const isSelected = activeStage === idx;
          return (
            <div
              key={st.stageNum}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-2 relative ${
                isSelected
                  ? mode === 'wife'
                    ? 'border-rose-500 bg-rose-500/10 shadow-xs ring-1 ring-rose-500/30'
                    : 'border-[#533AFD] bg-[#533AFD]/10 shadow-xs ring-1 ring-[#533AFD]/30'
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
                <div className={`text-[11px] font-mono mt-0.5 truncate ${mode === 'wife' ? 'text-rose-600 dark:text-rose-400' : 'text-[#533AFD] dark:text-[#7A68FF]'}`}>
                  {st.subtitle}
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-1">
                {st.concept}
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
                নির্বাচিত স্টেজ {currentStages[activeStage].stageNum}: {currentStages[activeStage].subtitle}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                {currentStages[activeStage].name} ({currentStages[activeStage].tools})
              </h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(currentStages[activeStage].code)}
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
                  স্নিপেট কপি
                </>
              )}
            </Button>
          </div>

          <pre className="p-4 rounded-xl bg-[var(--color-panel-subtle)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto leading-relaxed">
            {currentStages[activeStage].code}
          </pre>

          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
            💡 <strong>{mode === 'wife' ? 'সহজ ঘরের শিক্ষা:' : 'সফটওয়্যার আর্কিটেক্ট সারসংক্ষেপ:'}</strong> {currentStages[activeStage].takeaway}
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
          {mode === 'wife' ? (
            <span>
              রান্নাঘরের শাকসবজি বাছাই থেকে শুরু করে বিয়ের বড় উৎসবের আয়োজন: এই ৮টি নিয়মের ভেতরেই পুরো কম্পিউটার বুদ্ধি বা এআই কাজ করে। এর বাইরে জটিল আর কিছুই নেই!
            </span>
          ) : (
            <span>
              ক্লায়েন্ট যে কাজই নিয়ে আসুক না কেন, তুমি জানো কোথায় if-else দিয়ে খরচ বাঁচাতে হবে, কোথায় প্লাগইন অ্যাডাপ্টার বসাতে হবে, আর কীভাবে ১০০% প্রাইভেট ক্লাউডে বিশ্বমানের এন্টারপ্রাইজ এআই সলিউশন ডেলিভার করতে হবে!
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
