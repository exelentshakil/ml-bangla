/**
 * ML Bangla - মেশিন লার্নিং ও এআই মাস্টার হ্যান্ডবুক
 * Study Mart 68 Videos Decoded + Akira Nakai (RWB) Masterpiece Blueprint
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
}

export const siteConfig: SiteConfig = {
  slug: 'ml-bangla',
  name: 'ML Bangla',
  badge: 'RWB Masterpiece Edition',
  tagline: 'বাংলায় মেশিন লার্নিং ও এআই মাস্টার হ্যান্ডবুক',
  description: 'পোর্শে তৈরির ফ্যাক্টরি না হয়ে আকিরা নাকাইয়ের মতো ১-অব-১ কাস্টম মাস্টারপিস বানানোর শিল্প। স্টাডি মার্টের ৬৮টি ভিডিও, ডিপ লার্নিং ও mlx-lm এর ১০০% খাঁটি নির্যাস।',
  archetype: 'stripe',
  primaryNav: [
    { id: 'fundamentals', label: '১. ফান্ডামেন্টালস' },
    { id: 'dataprep', label: '২. ডেটা প্রিপারেশন' },
    { id: 'classical', label: '৩. ক্লাসিক্যাল ML' },
    { id: 'deeplearning', label: '৪. ডিপ লার্নিং' },
    { id: 'finetuning', label: '৫. LoRA ও ফাইন-টিউনিং' },
    { id: 'production', label: '৬. AWS ও MLOps' },
    { id: 'mentor', label: '৭. লাইভ AI মেন্টর' },
    { id: 'mlxmac', label: '৮. Mac M1 এ mlx-lm ল্যাব' },
    { id: 'akira', label: '৯. আকিরা নাকাই RWB ম্যানিফেস্টো' },
  ],
  metrics: [
    {
      id: 'videos',
      title: 'ভিডিও সংখ্যা ডিকোডেড',
      value: '৬৮+ ভিডিও',
      change: '১,০০০+ ঘণ্টা সেভ',
      trend: 'up',
      subtext: 'স্টাডি মার্ট পুরো প্লেলিস্ট',
      badge: '১০০% কমপ্লিট',
    },
    {
      id: 'formulas',
      title: 'ফর্মুলা মুখস্থ লাগবে',
      value: '০ টি (Zero)',
      change: '১০০% ভিজ্যুয়াল লজিক',
      trend: 'neutral',
      subtext: 'রান্না ও বাজারের গল্প',
      badge: 'সহজ ব্রেইন ফ্রেন্ডলি',
    },
    {
      id: 'ai-engine',
      title: 'লাইভ এআই মেন্টর ল্যাব',
      value: 'OpenAI + Gemini',
      change: 'ডুয়াল প্রোভাইডার ফেলওভার',
      trend: 'up',
      subtext: 'রিয়েল-টাইম বাংলা গাইড',
      badge: 'লাইভ কানেক্টেড',
    },
  ],
};
