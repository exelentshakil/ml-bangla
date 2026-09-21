'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HandbookHero } from '@/components/ml-handbook/HandbookHero';
import { ModuleManifestoStack } from '@/components/ml-handbook/ModuleManifestoStack';
import { ModuleDualEngine } from '@/components/ml-handbook/ModuleDualEngine';
import { ModuleAkiraMasterpiece } from '@/components/ml-handbook/ModuleAkiraMasterpiece';
import { ModulePipelineCookbook } from '@/components/ml-handbook/ModulePipelineCookbook';
import { ModuleUpworkSprint } from '@/components/ml-handbook/ModuleUpworkSprint';
import { ModuleLiveMentor } from '@/components/ml-handbook/ModuleLiveMentor';

export default function HomePage() {
  const [mode, setMode] = useState<'wife' | 'architect'>('wife');
  const [activeTab, setActiveTab] = useState<string>('manifesto');

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-canvas)] text-[var(--color-text-primary)] antialiased selection:bg-[#533AFD]/15 selection:text-[#533AFD]">
      {/* Sticky Header with Mode & Tab Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          const contentArea = document.getElementById('handbook-content');
          if (contentArea && window.scrollY > 300) {
            contentArea.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        mode={mode}
        onToggleMode={setMode}
      />

      {/* Main Handbook Body */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        {/* Master Hero Banner */}
        <HandbookHero
          mode={mode}
          setMode={setMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Dynamic Tab Content Renderer */}
        <div id="handbook-content" className="scroll-mt-20">
          {activeTab === 'manifesto' && <ModuleManifestoStack mode={mode} />}
          {activeTab === 'dualengine' && <ModuleDualEngine mode={mode} />}
          {activeTab === 'masterpiece' && <ModuleAkiraMasterpiece mode={mode} />}
          {activeTab === 'pipeline' && <ModulePipelineCookbook mode={mode} />}
          {activeTab === 'upworksprint' && <ModuleUpworkSprint mode={mode} />}
          {activeTab === 'mentor' && <ModuleLiveMentor initialMode={mode} />}
        </div>
      </main>

      {/* Authoritative Systems Architect Footer */}
      <Footer />
    </div>
  );
}
