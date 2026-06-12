import arthropodImage from '../assets/images/misszhouia-arthropod.jpg';
import brachiopodImage from '../assets/images/heliomedusa-brachiopod.jpg';
import chordateImage from '../assets/images/myllokunmingia-chordate.jpg';
import softTissueImage from '../assets/images/yunnanozoon-soft-tissue.jpg';
import spongeImage from '../assets/images/choia-sponge.jpg';
import wormImage from '../assets/images/cricocosmia-worm.jpg';

export type Exhibit = {
  id: string;
  code: string;
  name: string;
  group: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  morphology: string;
  preservation: string;
  significance: string;
  cambrianRelation: string;
  question: string;
};

export const exhibits: Exhibit[] = [
  {
    id: 'arthropod',
    code: 'CJ-EX-001',
    name: '节肢动物类化石示意展品',
    group: '节肢动物类',
    image: arthropodImage,
    imageAlt: 'Misszhouia longicaudata 化石照片',
    imageCredit: '图片来源：Wikimedia Commons, Misszhouia longicaudata 2',
    morphology: '身体分节明显，附肢结构显示出运动和摄食功能的分化。',
    preservation: '部分个体可见轮廓、附肢和体节印痕，体现精细结构保存价值。',
    significance: '有助于认识早期动物运动方式、捕食关系和身体分区。',
    cambrianRelation: '节肢动物多样化是寒武纪生命大爆发中生态复杂化的重要表现。',
    question: '如果只能看到身体轮廓和附肢印痕，你会如何判断它的生活方式？',
  },
  {
    id: 'worm',
    code: 'CJ-EX-002',
    name: '蠕虫状动物化石示意展品',
    group: '蠕虫状动物',
    image: wormImage,
    imageAlt: 'Cricocosmia 化石照片',
    imageCredit: '图片来源：Wikimedia Commons, Cricocosmia',
    morphology: '体形细长，可能具有柔软体壁和简单运动结构。',
    preservation: '软体轮廓保存提示沉积环境对柔软组织埋藏具有重要影响。',
    significance: '为理解早期底栖动物生活方式和沉积物活动提供线索。',
    cambrianRelation: '蠕虫状动物显示了寒武纪海洋底栖生态位的扩展。',
    question: '软体动物为什么比硬壳动物更难以形成清晰化石？',
  },
  {
    id: 'chordate',
    code: 'CJ-EX-003',
    name: '早期脊索动物相关类群示意展品',
    group: '早期脊索动物相关类群',
    image: chordateImage,
    imageAlt: 'Myllokunmingia 化石照片',
    imageCredit: '图片来源：Wikimedia Commons, Myllokunmingia',
    morphology: '可观察到长条形身体和与支撑、运动相关的结构线索。',
    preservation: '细微结构保存对于判断其演化位置十分关键。',
    significance: '帮助学习者理解脊椎动物演化并非突然出现，而有更早的结构基础。',
    cambrianRelation: '相关类群为寒武纪动物身体构型多样化提供重要证据。',
    question: '为什么一个细小结构可能改变我们对动物演化关系的判断？',
  },
  {
    id: 'brachiopod',
    code: 'CJ-EX-004',
    name: '早期腕足动物相关类群示意展品',
    group: '腕足动物相关类群',
    image: brachiopodImage,
    imageAlt: 'Heliomedusa orienta 化石照片',
    imageCredit: '图片来源：Wikimedia Commons, Heliomedusa orienta',
    morphology: '整体呈圆盘状或瓣壳状轮廓，边缘和中央区域的差异可用于观察早期壳体结构。',
    preservation: '圆盘状轮廓以压印形式保存，适合与节肢动物、蠕虫状动物的软体轮廓进行比较。',
    significance: '适合说明早期壳体动物在寒武纪海洋生态中的位置，以及化石解释需要结合形态和分类证据。',
    cambrianRelation: '腕足动物相关类群体现寒武纪海洋中附着、滤食等生态方式的出现和扩展。',
    question: '当化石只保存为圆盘状压印时，研究者还需要哪些证据来判断它的分类位置？',
  },
  {
    id: 'sponge',
    code: 'CJ-EX-005',
    name: '海绵动物类化石示意展品',
    group: '海绵动物类',
    image: spongeImage,
    imageAlt: 'Choia xiaolantianensis 化石照片',
    imageCredit: '图片来源：Wikimedia Commons, Choia xiaolantianensis',
    morphology: '结构相对简单，可能呈网状、管状或不规则体形。',
    preservation: '保存形态常与沉积压实和原有骨针结构有关。',
    significance: '有助于理解早期动物中较基础类群的生态角色。',
    cambrianRelation: '海绵动物提示寒武纪海洋生态系统包含多层次滤食和附着生物。',
    question: '结构简单的生物为什么同样具有重要演化意义？',
  },
  {
    id: 'soft-tissue',
    code: 'CJ-EX-006',
    name: '软体组织保存示例展品',
    group: '保存类型',
    image: softTissueImage,
    imageAlt: 'Yunnanozoon lividum 化石照片',
    imageCredit: '图片来源：Wikimedia Commons, Yunnanozoon lividum',
    morphology: '展现非硬壳结构的轮廓、内部痕迹或局部组织差异。',
    preservation: '强调快速埋藏、沉积环境和成岩过程对软体结构保存的影响。',
    significance: '软体组织提供的信息常常是重建早期动物形态和生态关系的关键。',
    cambrianRelation: '澄江化石地在寒武纪生命大爆发研究中的突出价值，正与软体结构保存密切相关。',
    question: '如果缺少软体组织信息，我们对早期动物的认识会少掉哪些部分？',
  },
];
