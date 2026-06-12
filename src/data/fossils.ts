export type FossilResource = {
  id: string;
  name: string;
  location: string;
  period: string;
  type: string;
  keywords: string[];
  summary: string;
  scientificValue: string;
  publicValue: string;
  featured: boolean;
  tags: string[];
  learningTip: string;
};

export const fossils: FossilResource[] = [
  {
    id: 'chengjiang',
    name: '澄江化石地',
    location: '云南省玉溪市澄江市',
    period: '早寒武世，约5.3亿年前',
    type: '海洋动物群化石',
    keywords: ['澄江', '寒武纪', '软体组织', '世界自然遗产'],
    summary: '澄江化石地保存了约5.3亿年前早寒武世海洋生态系统中的多类动物化石，是理解寒武纪生命大爆发的重要窗口。',
    scientificValue: '其价值不仅在于化石数量和门类丰富，更在于保存了大量软体结构，为研究早期动物身体构型、生态关系和演化分化提供了关键证据。',
    publicValue: '适合向学习者展示生命演化并非线性上升，而是在特定地质时期出现快速分化、生态位扩展和结构复杂化。',
    featured: true,
    tags: ['重点资源', '世界自然遗产', '早寒武世', '寒武纪生命大爆发', '软体组织保存'],
    learningTip: '观察澄江化石时，可重点关注“保存了什么结构”以及这些结构如何帮助复原早期海洋生态系统。',
  },
  {
    id: 'jiangchuan',
    name: '江川生物群',
    location: '云南省玉溪市江川区',
    period: '埃迪卡拉纪末期—寒武纪初期过渡',
    type: '早期复杂生命化石',
    keywords: ['江川', '埃迪卡拉纪', '寒武纪', '过渡时期', '云南化石'],
    summary: '江川生物群代表了云南地区埃迪卡拉纪末期至寒武纪初期过渡阶段的早期复杂生命记录，有助于理解寒武纪生命大爆发前后的连续演化背景。',
    scientificValue: '可用于讨论寒武纪生命大爆发并非孤立突发事件，而与更早的复杂多细胞生命和动物演化背景相联系。',
    publicValue: '有助于学习者认识云南化石资源不是单一地点，也能把澄江化石地放在更长的生命演化序列中理解。',
    featured: false,
    tags: ['埃迪卡拉纪末期', '寒武纪初期', '云南化石资源', '演化过渡'],
    learningTip: '可与澄江化石地对照，思考寒武纪生命大爆发之前是否已经存在复杂动物演化的准备阶段。',
  },
  {
    id: 'lufeng',
    name: '禄丰恐龙化石',
    location: '云南省楚雄彝族自治州禄丰市',
    period: '侏罗纪',
    type: '恐龙及脊椎动物化石',
    keywords: ['禄丰', '恐龙', '侏罗纪', '脊椎动物'],
    summary: '禄丰地区以恐龙化石闻名，是认识中生代陆地生态系统和脊椎动物演化的重要资源。',
    scientificValue: '相关化石为研究早期恐龙形态、分类和中生代陆相沉积环境提供证据。',
    publicValue: '恐龙主题具有较高科普吸引力，适合作为连接大众兴趣与严谨古生物知识的入口。',
    featured: false,
    tags: ['侏罗纪', '恐龙化石', '脊椎动物', '陆地生态'],
    learningTip: '将禄丰恐龙与澄江海洋动物群比较，可帮助理解不同地质时期生命演化场景的转换。',
  },
  {
    id: 'yuanmou',
    name: '元谋古人类化石',
    location: '云南省楚雄彝族自治州元谋县',
    period: '第四纪',
    type: '古人类化石',
    keywords: ['元谋', '古人类', '第四纪', '人类演化'],
    summary: '元谋古人类化石是云南古人类与第四纪古环境研究中的代表性资料。',
    scientificValue: '为研究东亚早期人类活动、古环境变化和古人类适应提供重要线索。',
    publicValue: '能够把生命演化主题延伸到人类起源与环境适应，增强学习者对长时段演化过程的整体理解。',
    featured: false,
    tags: ['第四纪', '古人类', '人类演化', '环境适应'],
    learningTip: '从早寒武世到第四纪，时间跨度巨大，学习时应注意地质时间尺度与日常时间尺度的差异。',
  },
];
