import React from 'react';
import { Section } from './Section';

export const VisionSection = () => {
  return (
    <Section className="text-center" style={{
        backgroundImage: `radial-gradient(circle at center, rgba(30, 64, 175, 0.15), transparent 50%)`
    }}>
      <h3 className="text-2xl sm:text-3xl font-bold text-teal-300 font-orbitron tracking-wide">VISION</h3>
      <p className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight break-keep">
        「誰が正しいか」ではなく、<br className="hidden sm:block" />「誰とどう関係し直せるか」
      </p>
      <p className="mt-8 text-lg max-w-3xl mx-auto text-slate-300 leading-relaxed">
        違いが跳ね、問いが生まれ、学びが社会と呼吸する循環へ。<br/>
        プラネタリーラーニングは、そんな学びのOSをひらきます。
      </p>
    </Section>
  );
};