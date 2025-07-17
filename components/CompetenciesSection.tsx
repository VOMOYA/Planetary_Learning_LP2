import React from 'react';
import { Section, SectionTitle } from './Section';
import { competencies, CompetencyIcons } from '../constants';

export const CompetenciesSection = () => {
    return (
        <Section className="bg-slate-800/30">
            <SectionTitle>育成される力 (コンピテンシー)</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {competencies.map((comp, index) => {
                    const Icon = CompetencyIcons[comp.iconKey];
                    return (
                        <div key={index} className="flex flex-col items-center text-center p-4">
                            <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-slate-700/50 border border-slate-600 text-teal-400">
                                {Icon && <Icon className="w-10 h-10" />}
                            </div>
                            <h4 className="font-bold text-white mb-1">{comp.title}</h4>
                            <p className="text-sm text-slate-300">({comp.subtitle})</p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};