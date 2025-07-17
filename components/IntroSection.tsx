
import React from 'react';
import { Section, SectionTitle } from './Section';
import { introContent, whyNowContent, whatContent } from '../constants';

const FeatureCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-teal-500 transition-colors duration-300">
    <h4 className="text-xl font-bold text-teal-400 mb-3">{title}</h4>
    <p className="text-slate-300">{children}</p>
  </div>
);

export const IntroSection = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg leading-relaxed text-slate-200">
          {introContent.description}
        </p>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">背景課題 (Why Now)</h3>
          <ul className="space-y-4">
            {whyNowContent.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">プログラムの特長 (What)</h3>
          <ul className="space-y-4">
             {whatContent.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
