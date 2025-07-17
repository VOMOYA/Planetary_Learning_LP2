
import React from 'react';
import { Section, SectionTitle } from './Section';
import { teamMembers } from '../constants';

export const AboutUsSection = () => {
    return (
        <Section>
            <SectionTitle>About Us</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col items-center text-center">
                        <img 
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mb-4 border-4 border-slate-600 object-cover"
                        />
                        <h4 className="text-xl font-bold text-white">{member.name}</h4>
                        <p className="text-teal-400 text-sm mb-4">{member.role}</p>
                        <p className="text-slate-300 text-sm">{member.bio}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
