export type LearningTask = {
  id: string;
  title: string;
  description: string;
};

export const tasks: LearningTask[] = [
  { id: 'collect-fossil', title: '收藏一个云南化石资源', description: '在化石资源库中选择一个你认为最重要的资源并收藏。' },
  { id: 'find-chengjiang-node', title: '找到澄江生物群节点', description: '进入生命演化时间轴，查看“澄江生物群”的详细说明。' },
  { id: 'view-two-exhibits', title: '查看两个展厅展品', description: '在澄江数字展厅中打开至少两个展品详情。' },
  { id: 'answer-soft-tissue', title: '理解软体组织保存价值', description: '阅读问答中“为什么软体组织保存具有重要价值”的答案。' },
  { id: 'read-security', title: '阅读数据安全管理页面', description: '了解数字化平台为什么需要备份、权限控制和资料来源管理。' },
];
