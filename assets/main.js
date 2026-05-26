/* ── Project Data ─────────────────────────────────────── */
const PROJECTS = {
  'real-estate': {
    num:    '05',
    title:  '资金计划 2.0 重构',
    client: '某知名全国性房地产集团（行业 TOP5）',
    role:   '产品经理',
    period: '2020.06 — 2020.11',
    tags:   ['IBM TM1', '元年 TaBase', '多维数据库', '资金管理', '投融资计划'],
    background:
      '集团原有资金计划系统为定制化开发，数据孤岛严重，性能与扩展性不足，无法支撑集团全域投融资管理需求，亟需进行系统性重构。',
    actions: [
      '统筹 20+ 人跨职能实施团队，协调业务、IT 及供应商三方资源，推进全流程交付',
      '梳理集团所有区域及项目的投融资计划、资金预测、资金分析与预警等核心业务逻辑',
      '基于 IBM TM1 多维数据库完成新系统完整架构设计，推动从定制开发向平台化迁移',
      '建立 UAT 测试标准与验收机制，保障数据准确性和上线稳定性',
    ],
    results: [
      '系统成功上线，功能覆盖度、运行性能、用户体验及数据准确性均实现飞跃式提升',
      '实现集团投融资全链路线上化管理，资金管控效率大幅提升',
      '主导 20+ 人团队完成从方案设计、开发测试到上线运维全流程交付',
    ]
  },
  'insurance': {
    num:    '04',
    title:  '投资管理系统',
    client: '某国内顶级寿险集团旗下健康投资公司',
    role:   '项目经理 / 主管',
    period: '2020.11 — 2022.10',
    tags:   ['先胜业财 Seepln', '投资全周期管理', '全面预算', '健康产业', '业财连接'],
    background:
      '客户需将分散的投资管理与预算管理流程系统化，建立从投前测算、投中监控到投后分析的全周期管理平台，同时打通养老社区、康复医院、纪念园三大业态的预算管理闭环。',
    actions: [
      '统筹两个百万级项目并行推进，协调集团各事业部与总部多团队协同落地',
      '主导投资模型产品方案设计，建立数据与系统贯通的"投资–规划–预算"全新业务形态',
      '推动全面预算项目打通从投资到规划到预算的完整策略闭环，历时 6 个月',
      '协调 50+ 编制单位、200+ 用户的需求对齐与系统上线培训',
    ],
    results: [
      '投资模型项目：30+ 在投项目维护至系统，完成 20+ 新投资项目在线投前测算',
      '全面预算项目：打通泰康从投资到规划到预算的全链路数据闭环，提升各事业部审批效率',
      '两个项目合计覆盖 50+ 编制单位、200+ 用户，为集团重要投资决策提供数据支撑',
    ]
  },
  'photovoltaic': {
    num:    '03',
    title:  '全面预算平台',
    client: '某 A 股上市光伏制造龙头企业',
    role:   '项目经理 / 主管',
    period: '2021.04 — 2021.11',
    tags:   ['元年 C1', 'ERP 集成', 'BI 系统', '全面预算', '预实分析', '制造业'],
    background:
      '企业原有预算管理高度依赖手工 Excel，版本管理混乱，业财数据割裂，无法支撑上市公司多维度预算管控需求，亟需构建统一的信息化预算平台。',
    actions: [
      '梳理预算管理体系，以利润预算为主线拉通各业务部门，设计全模块覆盖的预算方案',
      '主导打通 ERP 系统、费控系统与 BI 系统的数据集成，实现预实对比与多版本管理',
      '设计滚动预算与预实分析功能，为管理层提供实时经营决策数据支撑',
      '开展 20+ 场次系统培训，推动全员预算管理认知升级与操作落地',
    ],
    results: [
      '百万级项目成功上线，覆盖 5 个板块、8 家公司、70+ 部门、300+ 用户',
      '实现生产、采购、销售、人力、财务、费用、固定资产等全模块预算管理',
      '彻底替代手工 Excel，数据准确性与预算管控效率大幅提升',
    ]
  },
  'medical': {
    num:    '02',
    title:  'OTC 业财中台',
    client: '某外资高端连锁医疗集团（北京 / 上海 / 广州 / 深圳 / 天津 / 青岛）',
    role:   '项目经理 / 主管',
    period: '2022.01 — 2023.05',
    tags:   ['DeepFos', '会计引擎', '聚合支付', 'OTC', '业财中台', '医疗行业'],
    background:
      '集团旗下 6 城 9 院区账单流程高度依赖纸质与人工处理，跨院区数据割裂，OTC 各环节效率低下，每年产生大量纸质账单寄送成本，亟需构建统一的业财管理中台。',
    actions: [
      '设计并推动构建 Order To Cash 全链路业财中台，覆盖 9 部门、100+ 用户',
      '推进账单电子化无纸化改造，接入远程聚合支付，替代患者到院支付流程',
      '引入会计引擎实现财务凭证自动生成，打通业务数据与财务系统的实时链接',
      '推动成立财务共享中心，系统化承接账单追账、交易对账、会计处理等工作',
      '梳理并输出 40+ 份工作流规范文档，推动 OTC 全流程标准化',
    ],
    results: [
      '账单电子化无纸化落地，节省每年近百万寄送费和打印成本',
      '成立财务共享中心，减少约 100+ FTE 人工工作量',
      '患者可通过手机远程完成账单签名和付款，服务体验大幅提升',
      '40+ 份工作流规范落地，OTC 各环节流程标准化程度显著提高',
    ]
  }
};

/* ── Navbar scroll state ─────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', onScroll, { passive: true });

/* ── Section tracking ────────────────────────────────── */
const sections = [...document.querySelectorAll('.section')];
const dots     = [...document.querySelectorAll('.dot')];
const navLinks = [...document.querySelectorAll('.nav-links a')];

function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 30);

  let active = sections[0].id;
  sections.forEach(s => {
    if (s.getBoundingClientRect().top <= window.innerHeight * 0.45) active = s.id;
  });
  dots.forEach(d     => d.classList.toggle('active', d.dataset.target  === active));
  navLinks.forEach(a => a.classList.toggle('active', a.dataset.section === active));
}
onScroll();

dots.forEach(dot => {
  dot.addEventListener('click', () =>
    document.getElementById(dot.dataset.target).scrollIntoView({ behavior: 'smooth' })
  );
});

/* ── Reveal on scroll ────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Modal ───────────────────────────────────────────── */
const overlay      = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');

document.querySelectorAll('.project-card:not(.project-soon)').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});

function openModal(id) {
  const d = PROJECTS[id];
  if (!d) return;

  const tagsHtml    = d.tags.map(t => `<span>${t}</span>`).join('');
  const actionsHtml = d.actions.map(a => `<li>${a}</li>`).join('');
  const resultsHtml = d.results.map(r => `<li>${r}</li>`).join('');

  modalContent.innerHTML = `
    <div class="m-header">
      <span class="m-num">${d.num}</span>
      <div class="m-header-text">
        <h2 class="m-title">${d.title}</h2>
        <p class="m-client">${d.client}</p>
      </div>
    </div>
    <div class="m-meta-row">
      <span class="m-meta-item"><strong>角色</strong>${d.role}</span>
      <span class="m-meta-sep">·</span>
      <span class="m-meta-item">${d.period}</span>
    </div>
    <div class="m-tags">${tagsHtml}</div>
    <div class="m-section">
      <h4 class="m-section-title">项目背景</h4>
      <p class="m-body">${d.background}</p>
    </div>
    <div class="m-section">
      <h4 class="m-section-title">关键动作</h4>
      <ul class="m-list m-actions">${actionsHtml}</ul>
    </div>
    <div class="m-section">
      <h4 class="m-section-title">核心成果</h4>
      <ul class="m-list m-results">${resultsHtml}</ul>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
