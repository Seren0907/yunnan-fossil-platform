export type TimelineNode = {
  id: string;
  time: string;
  title: string;
  summary: string;
  significance: string;
  yunnanRelation: string;
  highlighted: boolean;
};

export const timeline: TimelineNode[] = [
  {
    id: 'early-life',
    time: '约35亿—38亿年前以来',
    title: '早期生命出现',
    summary: '地球早期环境中出现原始生命证据，生命演化从微小、简单的结构和代谢系统开始。',
    significance: '奠定了后续细胞结构、代谢方式和生态系统形成的基础。',
    yunnanRelation: '这一阶段早于云南代表性化石资源，但为理解之后生命复杂化提供背景。',
    highlighted: false,
  },
  {
    id: 'multicellular',
    time: '前寒武纪晚期',
    title: '多细胞生命发展',
    summary: '多细胞结构逐渐发展，生命体的组织分工和体型复杂度提高。',
    significance: '多细胞化为动物形态多样化和生态关系复杂化提供条件。',
    yunnanRelation: '澄江化石地所见动物复杂结构，是多细胞生命长期发展的后续结果。',
    highlighted: false,
  },
  {
    id: 'ediacaran',
    time: '埃迪卡拉纪',
    title: '埃迪卡拉纪生物',
    summary: '出现一批形态特殊的宏体生物，显示早期复杂生命的多种尝试。',
    significance: '帮助理解寒武纪之前复杂生命已经出现，但其与后续动物类群的关系仍需谨慎分析。',
    yunnanRelation: '为解释澄江生物群出现前的演化背景提供对照。',
    highlighted: false,
  },
  {
    id: 'cambrian-explosion',
    time: '约5.39亿—5.41亿年前开始',
    title: '寒武纪生命大爆发',
    summary: '动物主要类群在较短地质时期内快速分化，生态系统结构明显复杂化。',
    significance: '是生命演化史中的关键事件，涉及身体构型、捕食关系和生态位扩展。',
    yunnanRelation: '澄江化石地是认识这一事件的重要化石记录之一。',
    highlighted: true,
  },
  {
    id: 'chengjiang-biota',
    time: '早寒武世，约5.3亿年前',
    title: '澄江生物群',
    summary: '保存了多类早期动物及其软体结构，展示复杂海洋生态系统的早期面貌。',
    significance: '为研究早期动物结构、系统演化和古生态复原提供高价值证据。',
    yunnanRelation: '位于云南澄江，是本平台重点学习对象。',
    highlighted: true,
  },
  {
    id: 'vertebrates',
    time: '古生代以来',
    title: '脊椎动物演化',
    summary: '脊椎动物逐步发展出复杂骨骼、运动方式和感知系统。',
    significance: '体现动物身体结构和生态适应的持续演化。',
    yunnanRelation: '早期脊索动物相关类群可帮助学习者理解脊椎动物演化的深层背景。',
    highlighted: false,
  },
  {
    id: 'terrestrial',
    time: '古生代晚期至中生代',
    title: '陆生生物发展',
    summary: '植物、节肢动物和脊椎动物不断适应陆地环境，陆地生态系统逐渐丰富。',
    significance: '生命活动空间从海洋扩展到陆地，是生态系统演化的重要转折。',
    yunnanRelation: '禄丰恐龙化石可作为认识中生代陆地生态的云南案例。',
    highlighted: false,
  },
  {
    id: 'human',
    time: '新近纪晚期至第四纪',
    title: '古人类演化与活动记录',
    summary: '人属及相关古人类类群在环境变化中演化和扩散，并逐步形成更复杂的行为能力。',
    significance: '将生命演化主题延伸到人类自身的起源、适应与环境关系，同时提醒学习者区分“人属出现”和具体区域古人类活动记录。',
    yunnanRelation: '元谋古人类化石为云南第四纪古人类研究提供代表性材料。',
    highlighted: false,
  },
];
