export type SecurityLayer = {
  id: string;
  title: string;
  description: string;
  measures: string[];
};

export type SecurityRisk = {
  risk: string;
  impact: string;
  response: string;
  platformPractice: string;
};

export const securityLayers: SecurityLayer[] = [
  { id: 'database', title: '化石数据库安全', description: '对资源名称、地质年代、类型和说明信息进行结构化管理。', measures: ['字段规范', '版本留痕', '定期备份'] },
  { id: 'images', title: '数字展品与图像资源保护', description: '展品图片、示意图和数字模型需要明确来源和使用边界。', measures: ['资源编号', '来源标注', '防止误替换'] },
  { id: 'records', title: '用户学习记录保护', description: '收藏、任务完成等记录应尽量减少敏感信息采集。', measures: ['仅本地保存', '不采集身份信息', '可清除记录'] },
  { id: 'backup', title: '数据备份与恢复', description: '平台资料应具备恢复机制，避免单点损坏导致资料不可用。', measures: ['定期备份', '恢复演练', '重要数据多副本'] },
  { id: 'permission', title: '访问权限控制', description: '管理者、教师和学习者应具有不同操作权限。', measures: ['权限分级', '管理端审核', '关键操作确认'] },
  { id: 'integrity', title: '防止数据篡改', description: '化石说明和参考资料应避免被随意修改。', measures: ['数据校验', '修改记录', '发布前审核'] },
  { id: 'sources', title: '资料来源规范管理', description: '科普内容需要保留资料依据，避免来源不清造成知识误导。', measures: ['参考资料清单', '链接核验', '用途说明'] },
];

export const securityRisks: SecurityRisk[] = [
  { risk: '数据丢失', impact: '资源库、展品说明或学习记录无法恢复。', response: '建立定期备份和恢复机制，重要数据保留多份副本。', platformPractice: '本原型把核心内容结构化在 src/data 中，便于后续纳入版本管理和备份。' },
  { risk: '非法访问', impact: '未授权人员可能修改资料或查看不应公开的信息。', response: '采用权限分级，关键管理功能仅对授权角色开放。', platformPractice: '当前无管理端，后续接入真实后端时应区分学习者、教师和管理员权限。' },
  { risk: '数字展品被篡改', impact: '展品说明失真，影响学习者判断。', response: '对展品数据进行版本管理、来源核验和发布前审核。', platformPractice: '展品图片与说明统一在本地数据中维护，README 记录图片来源，减少来源混乱。' },
  { risk: '用户学习记录泄露', impact: '学习行为信息被不当使用。', response: '减少个人信息采集，说明本地存储范围，提供后续清除机制。', platformPractice: '只在 localStorage 保存收藏、任务和浏览展品 ID，不采集姓名、学号或联系方式。' },
  { risk: '资料来源不清', impact: '科普内容缺少依据，可能产生误读。', response: '为资料设置标题、类型、用途说明和链接状态，后续补充可核验来源。', platformPractice: '参考资料页保留“待补充链接”，不伪造不确定来源。' },
];
