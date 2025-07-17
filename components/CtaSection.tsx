
import React from 'react';
import { Section } from './Section';

export const CtaSection = () => {
  return (
    <Section>
      <div className="bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg p-8 sm:p-12 text-center shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          今すぐ新しい学びのOSを体験してみませんか？
        </h3>
        <button className="mt-4 px-8 py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-slate-100 transition-transform transform hover:scale-105 shadow-lg">
          お問い合わせ
        </button>
      </div>
    </Section>
  );
};
