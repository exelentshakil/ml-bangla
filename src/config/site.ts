export interface SiteConfig {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  badge: string;
  primaryNav: Array<{
    id: string;
    label: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: 'আকিরা RWB এআই স্টুডিও',
  slug: 'ml-bangla',
  tagline: 'স্টক এআই নয়, ১-অব-১ বেস্পোক এন্টারপ্রাইজ মাস্টারপিস',
  description: 'মেশিন লার্নিংয়ের প্রতিটি কনসেপ্টের খাটি নির্যাস, অ্যাপল সিলিকন লোকাল ল্যাব এবং আপওয়ার্কে $৫,০০০+ হাই-টিকেট প্রজেক্ট ডেলিভার করার স্বয়ংসম্পূর্ণ অস্ত্রাগার।',
  badge: 'Akira RWB Masterpiece Engine',
  primaryNav: [
    { id: 'manifesto', label: '১. আকিরা ফিলোসফি ও ৬-পিলার স্ট্যাক' },
    { id: 'dualengine', label: '২. লোকাল ম্যাক (MLX) বনাম ক্লাউড জিপিইউ' },
    { id: 'masterpiece', label: '৩. ৪টি লাইভ প্রোডাকশন স্পেক কনফিগুریٹر' },
    { id: 'pipeline', label: '৪. কাঁচামাল থেকে ওয়াইডবডি টিউনিং পাইপলাইন' },
    { id: 'upworksprint', label: '৫. $৫,০০০ আপওয়ার্ক ডেলিভারি ও আর্কিটেকচার' },
    { id: 'mentor', label: '৬. লাইভ এআই মেন্টর (OpenAI + Gemini)' },
  ],
};
