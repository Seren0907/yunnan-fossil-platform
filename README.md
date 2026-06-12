# 云南化石生命演化数字科普平台

本项目是课程论文《数字技术赋能云南化石保护与生命演化科普研究——以澄江化石地为例》的配套实践平台原型。平台名称为“云南化石生命演化数字科普平台”，面向大学生和普通学习者，重点围绕澄江化石地，同时兼顾江川生物群、禄丰恐龙化石、元谋古人类化石等云南代表性资源。

平台不是课堂展示网页，也不是单页宣传页面，而是一个具有基础交互功能的数字科普平台原型。设计目标是体现“可查询、可浏览、可学习、可互动、可记录”。

## 在线访问地址

项目适配 GitHub Pages 后，公网访问地址形式为：

```text
https://<你的GitHub用户名>.github.io/yunnan-fossil-platform/
```

由于 GitHub Pages 是静态托管，本项目使用 HashRouter。子页面链接形式为：

```text
https://<你的GitHub用户名>.github.io/yunnan-fossil-platform/#/fossils
https://<你的GitHub用户名>.github.io/yunnan-fossil-platform/#/timeline
https://<你的GitHub用户名>.github.io/yunnan-fossil-platform/#/exhibition
```

## 功能模块

- 首页 Dashboard：展示平台简介、数据概览、功能入口和平台建设逻辑图。
- 化石资源库：支持关键词搜索、地质年代筛选、化石类型筛选、详情弹窗和收藏。
- 生命演化时间轴：展示关键演化节点，突出寒武纪生命大爆发和澄江生物群。
- 澄江数字展厅：以类型化展品展示节肢动物类、蠕虫状动物、早期脊索动物相关类群等内容。
- 互动学习任务：提供问答折叠面板、学习任务勾选和进度条。
- 数据安全管理：展示化石数据库、数字展品、学习记录、备份恢复、权限控制等管理思路。
- 参考资料：列出内容依据，链接不确定时标注“待补充链接”。

## 运行方式

```bash
npm install
npm run dev
```

构建检查：

```bash
npm run build
```

## 技术栈

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- localStorage

## 目录结构

```text
src/
  components/       通用组件和业务组件
  data/             平台模拟数据
  pages/            七个路由页面
  utils/            localStorage 工具
  App.tsx           路由配置
  main.tsx          应用入口
  styles.css        Tailwind 与基础样式
```

核心数据文件：

- `src/data/fossils.ts`
- `src/data/timeline.ts`
- `src/data/exhibits.ts`
- `src/data/tasks.ts`
- `src/data/qa.ts`
- `src/data/security.ts`
- `src/data/references.ts`

## 与课程论文第五部分的对应关系

论文第五部分提出以数字技术建设云南化石生命演化科普平台的构想。本原型将该构想拆解为五个连续环节：

1. 化石资源数字化：通过化石资源库组织云南代表性资源。
2. 生命演化可视化：通过时间轴呈现生命演化关键节点。
3. 数字展厅互动化：通过澄江数字展厅展示类型化展品和学习问题。
4. 学习任务记录化：通过收藏、任务勾选和学习进度形成基础记录。
5. 数据管理安全化：通过安全管理页面说明保护、共享和安全之间的关系。

本次优化后，首页 Dashboard 更强调平台工作台属性，能够同步展示收藏数量、展厅浏览数量和学习任务完成进度；化石资源库承担资源检索与收藏功能；澄江数字展厅承担展品浏览与学习问题引导功能；互动学习任务承担学习进度记录功能。这些模块共同对应论文中“数字化保护、可视化科普、互动学习和安全管理”的实践路径。

## 为什么去掉“专业视角解读”模块

本原型根据课程论文平台构想的主线进行收敛，重点放在云南化石资源、澄江数字展厅、生命演化时间轴、互动学习任务和数据安全管理。去掉“专业视角解读”模块后，平台结构更接近一个面向普通学习者的科普学习系统，避免把重心转向大数据、临床医学、土木工程、制药工程、网络安全等专业融合卡片，也避免削弱澄江化石地与生命演化科普的核心主题。

本版本明确不设置专业卡片、专业矩阵和 `majors.ts` 数据文件。平台重点转向化石资源学习、展厅互动、生命演化理解和学习进度记录，更符合课程论文中以澄江化石地为例展开数字科普平台建设的定位。

## 图片素材说明

展厅中的真实图片素材已下载到 `src/assets/images/`，用于课程论文平台原型演示。图片主要来自 Wikimedia Commons 公开图片页面，包括：

- `chengjiang-fossil-site.jpg`：澄江化石地相关图片。
- `misszhouia-arthropod.jpg`：Misszhouia longicaudata 化石图片，用于节肢动物类展品。
- `cricocosmia-worm.jpg`：Cricocosmia 化石图片，用于蠕虫状动物展品。
- `myllokunmingia-chordate.jpg`：Myllokunmingia 化石图片，用于早期脊索动物相关类群展品。
- `heliomedusa-brachiopod.jpg`：Heliomedusa orienta 化石图片，用于早期腕足动物相关类群展品。
- `choia-sponge.jpg`：Choia xiaolantianensis 化石图片，用于海绵动物类展品。
- `yunnanozoon-soft-tissue.jpg`：Yunnanozoon lividum 化石图片，用于软体组织保存示例。

这些图片用于类型化展品学习展示，后续若正式发布，应逐项补充原始页面链接、作者、许可协议和标准署名。

## 数据与隐私说明

本项目没有真实后端。化石资源、时间轴、展品、问答、任务、安全说明和参考资料均为本地模拟数据。收藏化石、已完成学习任务和已查看展品保存在浏览器 localStorage 中，不上传服务器，也不采集真实身份信息。

## 后续可扩展方向

- 接入真实的化石资源数据库和规范化元数据。
- 增加三维标本展示、展品图像标注和数字讲解。
- 增加教师端学习任务发布和班级学习记录导出。
- 完善参考资料链接核验、版本管理和数据备份机制。
- 在真实部署时补充用户权限、日志审计和隐私保护策略。
