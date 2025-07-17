
import React from 'react';

export const introContent = {
    description: "プラネタリーラーニングとは、他者、自然、AIと出会い、問いを立て、応答することで、自分と社会を編み直す新しい学びのプロセスです。違いを序列化や分断の原因にせず、違いのあいだをゆらいだり、往復したりすると、次元を上げて統合する可能性が開かれてきます。違いを統合への手がかりとすることができると、違いがお互いのギフトになります。このような学び方を身につけることで、惑星規模の共生社会で生きる力を身につけることができます。",
};

export const whyNowContent = [
    "標準化と正解主義の教育モデルの限界",
    "探究学習における「自由な問い」「跳ねる学び」の欠如",
    "AI時代の意味生成型能力の必要性",
];

export const whatContent = [
    "社会を「機械」ではなく「生態系」として捉える世界観",
    "自己と世界との関係性を再構成する「問い→跳躍→再編」の学び",
    "違いを分断や序列ではなく「問いの源泉」とする構造",
    "プロジェクト実践中に必要なことを\"その都度\"AIと共に学ぶミッション・ベースド・ラーニング（Mission-Based Learning）",
];

export const weeklySchedule = [
    { week: '第1週', type: '陽', typeDetail: '構成', subject: 'アドバイザー／メンター', content: '思考法・スキル習得' },
    { week: '第2週', type: '陰', typeDetail: '生成', subject: '学習者＋コーディネーター', content: 'プロジェクト実践／動かしながら考える／問いの跳躍' },
    { week: '第3週', type: '陽', typeDetail: '再構成', subject: 'アドバイザー／メンター', content: '意味の整理／共有／対話' },
    { week: '第4週', type: '陰', typeDetail: '再生成', subject: '学習者＋コーディネーター', content: '振り返り・問いの還元・新たな種の発芽' },
];

export const yangSkills = [
    { area: '🌀 課題認識・意味づけ', skills: '感知力／構造把握／社会文脈接続力' },
    { area: '💡 代案創出', skills: '問いの跳躍／創発的思考／アイデア統合力' },
    { area: '🛠 具現化・実装', skills: 'プロトタイピング／ビジネスモデル設計／マーケティング／プレゼン／交渉力' },
    { area: '🤝 共創・合意形成', skills: '跳躍的対話／コンセンサス形成／ファシリテーション' },
    { area: '🤖 AI協働', skills: 'GPT対話設計／AIとの共創学習／即時スキル獲得（MBL）' },
];

export const yinYangReciprocity = [
    { yang: '思考法やスキルの習得', yin: 'プロジェクトで使いながら問いが深まる' },
    { yang: '知識のモデル化', yin: '自分の問いを再構成し直す経験' },
    { yang: 'メンタルモデルのメタ認知', yin: 'ゆらぎや偶発からの跳躍' },
];

export const coordinatorMeetingsContent = {
  description: '各拠点のコーディネーターによる事例共有や学び合いを隔週で行います。コーディネーター同士のつながりが、学習者の繋がりを生み出す源泉となります。',
  points: [
    '実践の共有と相互ふりかえり',
    'ZPD（跳躍の土壌）の再設計',
    '意味が生成される瞬間の記録と支援'
  ]
}

export const participants = [
    { type: 'フリースクール', purpose: '多様な学びの保障', format: 'コーディネーター2名＋地域窓口', price: '2万円〜' },
    { type: '学校', purpose: '探究導入・教師育成', format: 'コーディネーター2名＋教材提供', price: '4万円〜' },
    { type: '中小企業', purpose: '社会接続・未来人材育成', format: 'コーディネーター2名参加', price: '6万円～' },
    { type: '大企業', purpose: 'ESG／SDGs戦略', format: 'コーディネーター2名＋発信連携', price: '12万円～' },
];

export const yangContent = [
    'フィールドワーク', '傾聴（ディープ・リスニング）', 'システム思考', 'デザイン思考', 'アイディア創発', '推論形式（帰納、演繹、アブダクション）', 'AI共創ラーニング', 'プロトタイピング', 'AIアプリ構築', 'バイブコーディング', 'ビジネスモデル', 'プレゼンテーション', 'マーケティング', '交渉術', 'ファシリテーション', 'コンセンサス型合意形成'
];

export const yinContent = [
    '未来フェス', 'OST', 'プロジェクト実践', 'メンタリング', 'グループコーチング', 'ZINE作成'
];

export const competencies = [
    { title: '問いを立てる力', subtitle: 'Abduction', iconKey: 'Question' },
    { title: '関係を再構成する力', subtitle: 'Intra-action', iconKey: 'Connection' },
    { title: '意味を跳ねさせる力', subtitle: '創発', iconKey: 'Sparkle' },
    { title: 'プロトタイプで考える力', subtitle: 'Making', iconKey: 'Build' },
    { title: '自分の物語を語る力', subtitle: 'Narrative', iconKey: 'Narrative' },
    { title: '他者と共創する力', subtitle: 'Facilitation', iconKey: 'Collaboration' },
    { title: 'AIと共に学ぶ力', subtitle: 'Mission-Based Learning', iconKey: 'AI' },
];

export const teamMembers = [
    { name: '田原真人', role: '社会変革デジタルファシリテーター', bio: '『Zoomオンライン革命！』『出現する参加型社会』など著書多数。全体コンセプトとAI共創ラーニングを担当', imageUrl: 'https://i.imgur.com/7GYMFey.jpeg' },
    { name: '野邊みなも', role: '教育コーディネーター', bio: 'デジタルを活用した探究学習を実践。テレプレゼンスシステム「窓」を活用して学びのフィールドを拡張している。', imageUrl: 'https://i.imgur.com/XuJG2LY.jpeg' },
    { name: '梅田雄基', role: '私塾Biden主宰', bio: '一人ひとりが自分の人生を構築する支援を行う。自分史とコーチング、プロジェクトを組み合わせる梅田メソッド開発者。', imageUrl: 'https://i.imgur.com/RUEnXG9.jpeg' },
    { name: '北田朋也', role: 'Kyoto AI×Edu Lab ファウンダー', bio: 'システム思考とNVCを組み合わせて学習する組織を実現。小学生の探究学習や生成AI教育活用のトップランナー。', imageUrl: 'https://i.imgur.com/3aIgpX1.jpeg' },
    { name: '伊原淳子', role: 'TAKiBiBA主宰', bio: 'かすみがうら市のコミュニティスペースを主宰。一人ひとりの想いが交差し、コミュニティが生成するプロセスをサポート。', imageUrl: 'https://i.imgur.com/k3uP3mH.jpeg' },
];

// --- ICONS ---

export const YinYangIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8V4z"></path><circle cx="12" cy="8" r="2"></circle><circle cx="12" cy="16" r="2" fill="#fff"></circle>
  </svg>
);


export const CompetencyIcons: { [key: string]: React.FC<{className?: string}> } = {
  Question: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  ),
  Connection: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
  ),
  Sparkle: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
  ),
  Build: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
  ),
  Narrative: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
  ),
  Collaboration: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
  ),
  AI: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V5m0 14v-1m6-7h1M5 12h1m12 0h1M12 18v-1m0-12V5"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path></svg>
  )
};