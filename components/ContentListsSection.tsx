
import React from 'react';
import { Section, SectionTitle } from './Section';
import { yangContent, yinContent } from '../constants';

const ContentList = ({ title, items, colorClass }: { title: string, items: string[], colorClass: string }) => (
    <div className="bg-slate-800/50 p-6 sm:p-8 rounded-lg border border-slate-700">
        <h3 className={`text-2xl font-bold mb-6 ${colorClass}`}>{title}</h3>
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li key={index} className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-3 ${colorClass.replace('text-', 'bg-')}`}></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);


export const ContentListsSection = () => {
    return (
        <Section>
            <SectionTitle>コンテンツ一覧</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <ContentList title="陽コンテンツ" items={yangContent} colorClass="text-orange-400" />
                <ContentList title="陰コンテンツ" items={yinContent} colorClass="text-indigo-400" />
            </div>
        </Section>
    );
};
