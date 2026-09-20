'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  Sun,
  Moon,
  Heart,
  Briefcase,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { BrandLogoMark } from '@/components/BrandLogo';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  mode: 'wife' | 'architect';
  onToggleMode: (mode: 'wife' | 'architect') => void;
}

export function Header({
  activeTab,
  onSelectTab,
  mode,
  onToggleMode,
}: HeaderProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme || theme;
  const isDark = mounted ? currentTheme === 'dark' : false;

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Brand Mark */}
        <div
          onClick={() => onSelectTab('fundamentals')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectTab('fundamentals')}
          className="flex items-center gap-2.5 shrink-0 cursor-pointer select-none"
        >
          <BrandLogoMark className="h-7 w-7" />
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-bold tracking-tight text-[var(--color-text-primary)] font-sans">
              {siteConfig.name}
            </span>
            <span className="hidden sm:inline-block rounded-full bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              {siteConfig.badge}
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {siteConfig.primaryNav.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`text-[13.5px] tracking-tight transition-colors whitespace-nowrap cursor-pointer relative py-1 font-medium ${
                  isActive
                    ? 'text-[var(--color-text-primary)] font-semibold'
                    : 'text-[#425466] dark:text-[#ADBDCC] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-[-13px] left-0 right-0 h-[2px] bg-[#533AFD] dark:bg-[#7A68FF] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Mode Switcher & Theme */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Wife Mode vs Architect Mode */}
          <div className="inline-flex rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onToggleMode('wife')}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                mode === 'wife'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
              title="ঘরোয়া সহজ গল্প মোড"
            >
              <Heart className="h-3 w-3" />
              <span className="text-[11px] sm:text-xs">Wife</span>
            </button>
            <button
              type="button"
              onClick={() => onToggleMode('architect')}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                mode === 'architect'
                  ? 'bg-[#533AFD] text-white shadow-xs'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
              title="$5k Upwork Architect মোড"
            >
              <Briefcase className="h-3 w-3" />
              <span className="text-[11px] sm:text-xs">Architect</span>
            </button>
          </div>

          {/* Theme Toggle Button */}
          {mounted && (
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="h-8 w-8 p-0 border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)] shadow-2xs rounded-[4px] cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-3.5 w-3.5 text-amber-500" />
              ) : (
                <Moon className="h-3.5 w-3.5 text-slate-700" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Horizontal Sub-Navigation (<1024px) */}
      <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-panel-subtle)] py-2 px-4 overflow-x-auto no-scrollbar flex items-center gap-4 flex-nowrap">
        {siteConfig.primaryNav.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`text-[13px] transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'text-[#533AFD] dark:text-[#7A68FF] font-semibold'
                  : 'text-[var(--color-text-secondary)] font-medium'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
