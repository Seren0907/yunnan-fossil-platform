export type ReferenceItem = {
  id: string;
  title: string;
  type: string;
  usage: string;
  link: string;
};

export const references: ReferenceItem[] = [
  {
    id: 'unesco-chengjiang',
    title: 'UNESCO World Heritage Centre: Chengjiang Fossil Site',
    type: '世界遗产公开资料',
    usage: '用于说明澄江化石地的世界自然遗产属性和突出普遍价值。',
    link: '待补充链接',
  },
  {
    id: 'yn-forestry',
    title: '云南省林业和草原局关于澄江化石地世界自然遗产的公开资料',
    type: '政府公开资料',
    usage: '用于补充澄江化石地保护管理和云南自然遗产背景。',
    link: '待补充链接',
  },
  {
    id: 'museum',
    title: '澄江化石地世界自然遗产博物馆相关公开资料',
    type: '博物馆公开资料',
    usage: '用于理解数字展厅内容组织、展品解说和科普展示方式。',
    link: '待补充链接',
  },
  {
    id: 'academic-cambrian',
    title: '澄江生物群、江川生物群、寒武纪生命大爆发相关学术论文',
    type: '学术论文',
    usage: '用于支撑生命演化时间轴、软体组织保存价值、埃迪卡拉纪—寒武纪过渡和古生态系统解释。',
    link: '待补充链接',
  },
  {
    id: 'unesco-digital',
    title: 'UNESCO 关于文化遗产数字化的资料',
    type: '国际组织资料',
    usage: '用于说明数字化遗产保护、开放共享与数据管理之间的关系。',
    link: '待补充链接',
  },
  {
    id: 'wikimedia-images',
    title: 'Wikimedia Commons 化石图片资料',
    type: '开放图片资料',
    usage: '用于本原型澄江数字展厅中的类型化展品图片，包括 Misszhouia、Cricocosmia、Myllokunmingia、Heliomedusa、Choia、Yunnanozoon 等化石图片。正式发布前需进一步核验授权和署名格式。',
    link: '待补充各图片原始页面链接',
  },
];
