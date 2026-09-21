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
  description: 'বিজনেস প্রবলেম সলভিং ও আপওয়ার্কে $৫,০০০+ হাই-টিকেট প্রজেক্ট জেতার কমপ্যাক্ট হ্যান্ডবুক।',
  badge: 'RWB Masterstroke Edition',
  primaryNav: [
    { id: 'cookbook', label: '১. সম্পূর্ণ ৮টি স্টেজ কুকবুক' },
    { id: 'masterstroke', label: '২. দ্য মাস্টারস্ট্রোক ($5k Take My Money)' },
    { id: 'dualengine', label: '৩. লোকাল ম্যাক বনাম ক্লাউড জিপিইউ' },
    { id: 'realbids', label: '৪. আপওয়ার্ক রিয়েল প্রজেক্ট সমাধান' },
    { id: 'mentor', label: '৫. লাইভ এআই ল্যাব (GPT + Gemini)' },
  ],
};
