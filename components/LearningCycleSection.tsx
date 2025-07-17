
import React from 'react';
import { Section, SectionTitle } from './Section';
import { YinYangIcon } from '../constants';

export const LearningCycleSection = () => {
  return (
    <Section className="bg-slate-900/70" style={{
      backgroundImage: `radial-gradient(circle at top right, rgba(13, 148, 136, 0.1), transparent 40%),
                       radial-gradient(circle at bottom left, rgba(79, 70, 229, 0.1), transparent 40%)`
    }}>
      <SectionTitle>
        体系的な学び(陽)と生成的な学び(陰)を循環します
      </SectionTitle>
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <YinYangIcon className="w-24 h-24 text-white" />
        </div>
        <p className="text-lg leading-relaxed text-slate-200">
          体系的な学びは、すでに確立した知の体系を効率的に学ぶものです。生成的な学びは、新しいものが生まれてくる学びです。プラネタリーラーニングでは、これらを相互補完的なものと捉え、両者を行き来することで、一人ひとりが異なる学びの原理を身体化して統合することを目指します。
        </p>
      </div>
    </Section>
  );
};
