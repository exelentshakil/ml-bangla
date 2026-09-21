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
  name: 'আকিরা RWB এআই',
  slug: 'ml-bangla',
  tagline: 'স্টক এআই নয়, ১-অব-১ বেস্পোক এন্টারপ্রাইজ মাস্টারপিস',
  description: 'সফটওয়্যার ইঞ্জিনিয়ারদের জন্য মেশিন লার্নিং ডিকোডেড: ৮টি সহজ স্টেজ ও আপওয়ার্ক মাস্টারস্ট্রোক।',
  badge: 'SWE Edition',
  primaryNav: [
    { id: 'cookbook', label: 'কুকবুক' },
    { id: 'masterstroke', label: 'মাস্টারস্ট্রোক' },
    { id: 'dualengine', label: 'ম্যাক বনাম ক্লাউড' },
    { id: 'realbids', label: 'আপওয়ার্ক প্রজেক্ট' },
    { id: 'mentor', label: 'এআই ল্যাব' },
  ],
};
