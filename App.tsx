
import React from 'react';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { LearningCycleSection } from './components/LearningCycleSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ParticipantsSection } from './components/ParticipantsSection';
import { ContentListsSection } from './components/ContentListsSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { VisionSection } from './components/VisionSection';
import { CtaSection } from './components/CtaSection';
import { AboutUsSection } from './components/AboutUsSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased">
      <main>
        <Hero />
        <IntroSection />
        <LearningCycleSection />
        <HowItWorksSection />
        <ParticipantsSection />
        <ContentListsSection />
        <CompetenciesSection />
        <VisionSection />
        <CtaSection />
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
