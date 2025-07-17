import React from 'react';
import { Section, SectionTitle } from './Section';
import { weeklySchedule, yangSkills, yinYangReciprocity, coordinatorMeetingsContent } from '../constants';

const Table = ({ children }: { children: React.ReactNode }) => (
    <div className="">
        <table className="w-full text-left border-collapse">{children}</table>
    </div>
);

const Th = ({ children }: { children: React.ReactNode }) => (
    <th className="border-b border-slate-600 p-3 text-slate-100 text-sm">{children}</th>
);

const Td = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <td className={`border-b border-slate-700 p-3 text-slate-200 text-sm ${className || ''}`}>{children}</td>
);


export const HowItWorksSection = () => {
  return (
    <Section>
      <SectionTitle>学習の仕組み (How)</SectionTitle>
      
      <div className="space-y-20">

        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">陰陽循環による週次設計</h3>
          <p className="text-center max-w-2xl mx-auto mb-8">拠点を超えて繋がって学ぶプログラムです。週1回90～120分程度です。体系的な学び（陽）と生成的な学び（陰）を交互に行います。</p>
          <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-lg p-1 border border-slate-700">
              <Table>
                  <thead>
                      <tr>
                          <Th>週</Th>
                          <Th>陰陽</Th>
                          <Th>主体</Th>
                          <Th>内容</Th>
                      </tr>
                  </thead>
                  <tbody>
                      {weeklySchedule.map(row => (
                          <tr key={row.week} className="hover:bg-slate-800 transition-colors">
                              <Td className="whitespace-nowrap">{row.week}</Td>
                              <Td className="whitespace-nowrap"><span className={`px-2 py-1 rounded-full text-xs ${row.type === '陽' ? 'bg-orange-500/20 text-orange-300' : 'bg-indigo-500/20 text-indigo-300'}`}>{row.type}</span> ({row.typeDetail})</Td>
                              <Td className="whitespace-nowrap">{row.subject}</Td>
                              <Td className="whitespace-nowrap">{row.content}</Td>
                          </tr>
                      ))}
                  </tbody>
              </Table>
          </div>
        </div>

        <div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">陽：思考法やスキルを構成的に学ぶフェーズ</h3>
            <p className="text-center max-w-2xl mx-auto mb-8">思考法やスキルを身につけることで、自分の問いを形にして社会へ届ける力をつける</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yangSkills.map(skill => (
                    <div key={skill.area} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                        <h4 className="font-bold text-teal-400 text-lg mb-3">{skill.area}</h4>
                        <p className="text-slate-300">{skill.skills}</p>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">陰：生成的な学びのフェーズ（プロジェクト実践）</h3>
            <p className="text-center max-w-2xl mx-auto mb-8">"動かしながら考える"中で、問いが跳ね、関係性が生成される</p>
            <ul className="text-center space-y-2 max-w-md mx-auto">
                <li>未来フェス：問いや成果を他者と交差させる発信の場</li>
                <li>OST：問いからプロジェクトが自発的に立ち上がる</li>
                <li className="whitespace-nowrap">相互報告・触発：各自の実践が他のZPDを刺激し、跳ね合う知へ</li>
            </ul>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">コーディネーター会議</h3>
            <p className="mb-4">{coordinatorMeetingsContent.description}</p>
            <ul className="space-y-2 list-disc list-inside">
              {coordinatorMeetingsContent.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">陰陽の往復がつくる学びのOS</h3>
            <div className="bg-slate-800/50 rounded-lg p-1 border border-slate-700">
              <Table>
                <thead>
                  <tr>
                    <Th>陽 (構成)</Th>
                    <Th>陰 (生成)</Th>
                  </tr>
                </thead>
                <tbody>
                  {yinYangReciprocity.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-800 transition-colors">
                      <Td className="whitespace-nowrap">{row.yang}</Td>
                      <Td className="whitespace-nowrap">{row.yin}</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};