import React from 'react';
import { Section, SectionTitle } from './Section';
import { participants } from '../constants';

export const ParticipantsSection = () => {
    return (
        <Section className="bg-slate-800/30">
            <SectionTitle>異なるカテゴリの参加者が共に学びます</SectionTitle>
            <p className="max-w-3xl mx-auto text-center mb-12">
                インストール型の学びでは、学習者を均一化する必要がありますが、違いを学びの源にするプラネタリーラーニングでは、学習者の多様性が重要になります。
            </p>

            <div className="max-w-5xl mx-auto overflow-x-auto shadow-lg rounded-lg border border-slate-700">
                <table className="w-full text-left">
                    <thead className="bg-slate-800">
                        <tr>
                            <th className="p-4 font-bold text-white">属性</th>
                            <th className="p-4 font-bold text-white">目的</th>
                            <th className="p-4 font-bold text-white">参加形式</th>
                            <th className="p-4 font-bold text-white text-right">月額例</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-800/50 text-slate-200">
                        {participants.map((p, index) => (
                            <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/50 transition-colors">
                                <td className="p-4 font-bold text-teal-300">{p.type}</td>
                                <td className="p-4">{p.purpose}</td>
                                <td className="p-4">{p.format}</td>
                                <td className="p-4 text-right font-mono text-white">{p.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <p className="text-center mt-6 text-sm text-slate-300">各参加者のメリット (Who)</p>
        </Section>
    );
};