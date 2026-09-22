/**
 * Translation dictionaries.
 *
 * Keys mirror the UI surface. Placeholders use the {name} form and are filled
 * by t(key, { name: value }).
 *
 * Provider names, descriptions, tags and categories are intentionally NOT
 * translated. They are factual data about each service, and translating bonus
 * amounts or model names risks changing their meaning.
 *
 * Codes follow ISO 639-1. `zh` is Simplified Chinese, `pt` is Portuguese.
 */

/**
 * @typedef {{ code: string, label: string, english: string }} LanguageMeta
 */

/** @type {{ [code: string]: LanguageMeta }} */
export const LANGUAGES = {
  en: { code: "en", label: "English", english: "English" },
  id: { code: "id", label: "Bahasa Indonesia", english: "Indonesian" },
  ja: { code: "ja", label: "日本語", english: "Japanese" },
  zh: { code: "zh", label: "简体中文", english: "Chinese (Simplified)" },
  es: { code: "es", label: "Español", english: "Spanish" },
  pt: { code: "pt", label: "Português", english: "Portuguese" },
  fr: { code: "fr", label: "Français", english: "French" },
};

/** Ordered list, used to render the switcher. */
export const LANGUAGE_LIST = Object.values(LANGUAGES);

/** Fallback when a key is missing in a locale. */
export const DEFAULT_LANGUAGE = "en";

/**
 * CJK locales. Used to drop the italic display accent, because synthesized
 * oblique CJK glyphs render poorly and the emphasis reads as a rendering bug.
 * @type {string[]}
 */
export const CJK_LANGUAGES = ["ja", "zh"];

const en = {
  "meta.title": "Router Watch | Free Credit AI Gateway Board",
  "meta.description":
    "Router Watch: every AI gateway with free signup credit, in one board. Compare bonuses, models, and restrictions before you sign up.",
  "nav.language": "Language",
  "brand.home": "Router Watch home",
  "brand.tagline": "Free credit, tracked",
  "hero.title.lead": "Compare every AI gateway's free credit",
  "hero.title.accent": "in one place.",
  "hero.body":
    "Each gateway with free signup credit: its bonus, the models behind it, and what it really costs after. No surprises, no hidden fees.",
  "hero.cta.count": "Browse {n} verified gateways",
  "hero.stats.monitored": "Gateways Monitored",
  "hero.stats.value": "Identified Signup Value",
  "hero.stats.dispute": "Dispute Ratio",
  "hero.stats.audit": "Last Audit Run",
  "hero.stats.today": "Today",
      "hero.count": "{n} gateways tracked",
  "hero.credit": "${n} in signup credit",
    "hero.live": "Live signals",
    "hero.best.title": "Best offer on the board",
    "hero.best.cta": "Claim it",
    "hero.ticker": "On the board right now",


  "catalog.title": "Gateway list",
  "catalog.body":
    "Every gateway, its signup bonus, and the models behind it. Narrow the list before you commit to a signup.",

  "filter.search.label": "Search gateways",
  "filter.search.placeholder": "Search by gateway or model",
  "filter.type.label": "Type",
  "filter.type.all": "Any type",
    "filter.order.label": "Order",
  "filter.model.label": "Model",
  "filter.model.all": "Any model",
  "filter.model.anthropic": "Anthropic",
  "filter.model.chinese": "Chinese",
  "filter.model.wide": "Wide",

  "order.featured": "Featured",
  "order.rating": "Rating",
  "order.name": "Name",
  "order.category": "Type",

      "card.claim": "Claim bonus",
  "card.models": "Models",
  "verification.verified": "Verified",
  "verification.unverified": "Unverified",
  "verification.none": "Unlisted",
  "verification.disputed": "Disputed",
  "card.claim.aria": "Claim {name} signup bonus",

  "empty.title": "Nothing matches those filters.",
  "empty.action": "Clear filters",

  "footer.about":
    "An independent board of AI gateways offering signup credit. Check each offer yourself before you spend anything.",
  "footer.contribute": "Contribute a gateway",
  "quick.title": "Quick Filters",
  "quick.verified": "Verified Only",
  "quick.claude": "Claude Opus 5 / 4.8",
  "quick.agents": "Coding Agents",
  "quick.deepseek": "DeepSeek V4",
  "quick.reset": "Reset",
  "quick.note": "Ratings reflect API uptime and delivery of bonus tokens",
  "view.label": "View",
  "view.grid": "Grid",
  "view.table": "Audit Table",
  "table.gateway": "Gateway",
  "table.type": "Type",
  "table.status": "Audit Status",
  "table.bonus": "Claimed Bonus",
  "table.models": "Primary Models",
  "table.rating": "Rating",
  "table.action": "Action",
  "footer.nav": "Footer",
  "footer.submit": "Submit Router",
  "footer.report": "Report Disputed",
  "footer.disclaimer": "Disclaimer: Gateway policies, free credit allocations, model availability, and verification audits are updated independently. No affiliate relationships dictate rank placement or verified tags. Always review terms on the respective provider portal.",
  "footer.rights": "© 2025 Router Watch Index.",
};

/** @type {{ [code: string]: typeof en }} */
export const LOCALES = {
  en,

  id: {
    "meta.title": "Router Watch | Papan Gateway AI Berkredit Gratis",
    "meta.description":
      "Router Watch: semua gateway AI dengan kredit daftar gratis, dalam satu papan. Bandingkan bonus, model, dan batasannya sebelum kamu mendaftar.",
    "nav.language": "Bahasa",
    "brand.home": "Beranda Router Watch",
    "brand.tagline": "Kredit gratis, terpantau",
    "hero.title.lead": "Bandingkan kredit gratis semua gateway AI",
    "hero.title.accent": "dalam satu tempat.",
    "hero.body":
      "Setiap gateway dengan kredit pendaftaran gratis: bonusnya, model di baliknya, dan biaya sebenarnya setelah bonus habis. Tanpa kejutan, tanpa biaya tersembunyi.",
    "hero.cta.count": "Lihat {n} gateway terverifikasi",
    "hero.stats.monitored": "Gateway Terpantau",
    "hero.stats.value": "Nilai Pendaftaran Teridentifikasi",
    "hero.stats.dispute": "Rasio Sengketa",
    "hero.stats.audit": "Audit Terakhir",
    "hero.stats.today": "Hari ini",
        "hero.count": "{n} gateway terpantau",
    "hero.credit": "${n} kredit pendaftaran",
    "hero.live": "Sinyal langsung",
    "hero.best.title": "Penawaran terbaik di papan",
    "hero.best.cta": "Klaim sekarang",
    "hero.ticker": "Sedang tampil di papan",


    "catalog.title": "Daftar gateway",
    "catalog.body":
      "Setiap gateway, bonus pendaftarannya, dan model di baliknya. Persempit daftar sebelum kamu mendaftar.",

    "filter.search.label": "Cari gateway",
    "filter.search.placeholder": "Cari gateway atau model",
    "filter.type.label": "Jenis",
    "filter.type.all": "Semua jenis",
        "filter.order.label": "Urutan",
    "filter.model.label": "Model",
    "filter.model.all": "Semua model",
    "filter.model.anthropic": "Anthropic",
    "filter.model.chinese": "Tiongkok",
    "filter.model.wide": "Umum",

    "order.featured": "Unggulan",
    "order.rating": "Rating",
    "order.name": "Nama",
    "order.category": "Jenis",

            "card.claim": "Klaim bonus",
    "card.models": "Model",
    "verification.verified": "Terverifikasi",
    "verification.unverified": "Belum terverifikasi",
  "verification.none": "Belum Tercatat",
    "verification.disputed": "Dipersoalkan",
    "card.claim.aria": "Klaim bonus pendaftaran {name}",

    "empty.title": "Tidak ada yang cocok dengan filter itu.",
    "empty.action": "Hapus filter",

    "footer.about":
      "Papan independen gateway AI yang menawarkan kredit pendaftaran. Periksa sendiri setiap penawaran sebelum kamu mengeluarkan uang.",
    "footer.contribute": "Tambahkan gateway",
    "quick.title": "Filter Cepat",
    "quick.verified": "Hanya Terverifikasi",
    "quick.claude": "Claude Opus 5 / 4.8",
    "quick.agents": "Agen Koding",
    "quick.deepseek": "DeepSeek V4",
    "quick.reset": "Atur ulang",
    "quick.note": "Rating mencerminkan uptime API dan penyaluran bonus",
    "view.label": "Tampilan",
    "view.grid": "Grid",
    "view.table": "Tabel Audit",
    "table.gateway": "Gateway",
    "table.type": "Jenis",
    "table.status": "Status Audit",
    "table.bonus": "Bonus Klaim",
    "table.models": "Model Utama",
    "table.rating": "Rating",
    "table.action": "Aksi",
    "footer.nav": "Footer",
    "footer.submit": "Kirim Router",
    "footer.report": "Laporkan Sengketa",
    "footer.disclaimer": "Penafian: kebijakan gateway, alokasi kredit gratis, ketersediaan model, dan audit verifikasi diperbarui secara independen. Tidak ada hubungan afiliasi yang menentukan peringkat atau label terverifikasi. Selalu baca ketentuan di portal penyedia.",
    "footer.rights": "© 2025 Router Watch Index.",
  },

  ja: {
    "meta.title": "Router Watch | 無料クレジット付きAIゲートウェイ一覧",
    "meta.description":
      "Router Watch: 登録クレジットがもらえるAIゲートウェイを1つのボードにまとめました。登録前にボーナス・モデル・制限事項を比較できます。",
    "nav.language": "言語",
    "brand.home": "Router Watch ホーム",
    "brand.tagline": "無料クレジットを追跡",
    "hero.title.lead": "すべてのAIゲートウェイの無料クレジットを",
    "hero.title.accent": "1つの場所で比較。",
    "hero.body":
      "無料登録クレジット付きの各ゲートウェイ：ボーナス、その裏にあるモデル、そして終了後の本当の費用。サプライズも隠れた手数料もありません。",
    "hero.cta.count": "検証済み{n}件を見る",
    "hero.stats.monitored": "監視中のゲートウェイ",
    "hero.stats.value": "特定された登録額",
    "hero.stats.dispute": "係争率",
    "hero.stats.audit": "最終監査",
    "hero.stats.today": "今日",
        "hero.count": "{n} 件のゲートウェイを掲載",
    "hero.credit": "登録クレジット合計 ${n}",
    "hero.live": "ライブシグナル",
    "hero.best.title": "ボード最良のオファー",
    "hero.best.cta": "今すぐ受け取る",
    "hero.ticker": "ボードの掲載状況",


    "catalog.title": "ゲートウェイ一覧",
    "catalog.body":
      "各ゲートウェイの登録ボーナスと、その裏側にあるモデルを掲載しています。登録する前に絞り込みましょう。",

    "filter.search.label": "ゲートウェイを検索",
    "filter.search.placeholder": "ゲートウェイ名またはモデル名で検索",
    "filter.type.label": "種類",
    "filter.type.all": "すべての種類",
        "filter.order.label": "並び替え",
    "filter.model.label": "モデル",
    "filter.model.all": "すべてのモデル",
    "filter.model.anthropic": "Anthropic",
    "filter.model.chinese": "中国製",
    "filter.model.wide": "汎用",

    "order.featured": "注目",
    "order.rating": "評価",
    "order.name": "名前",
    "order.category": "種類",

            "card.claim": "ボーナスを受け取る",
    "card.models": "モデル",
    "verification.verified": "確認済み",
    "verification.unverified": "未確認",
  "verification.none": "未掲載",
    "verification.disputed": "疑義あり",
    "card.claim.aria": "{name} の登録ボーナスを受け取る",

    "empty.title": "条件に一致するものがありません。",
    "empty.action": "フィルターを解除",

    "footer.about":
      "登録クレジットを提供するAIゲートウェイの独立したボードです。お金を使う前に、必ずご自身で各オファーをご確認ください。",
    "footer.contribute": "ゲートウェイを追加",
    "quick.title": "クイックフィルター",
    "quick.verified": "確認済みのみ",
    "quick.claude": "Claude Opus 5 / 4.8",
    "quick.agents": "コーディングエージェント",
    "quick.deepseek": "DeepSeek V4",
    "quick.reset": "リセット",
    "quick.note": "評価はAPI稼働率とボーナス付与を反映",
    "view.label": "表示",
    "view.grid": "グリッド",
    "view.table": "監査表",
    "table.gateway": "ゲートウェイ",
    "table.type": "種類",
    "table.status": "監査ステータス",
    "table.bonus": "申告ボーナス",
    "table.models": "主要モデル",
    "table.rating": "評価",
    "table.action": "操作",
    "footer.nav": "フッター",
    "footer.submit": "ルーターを投稿",
    "footer.report": "係争を報告",
    "footer.disclaimer": "免責：ゲートウェイの方針、無料クレジット、モデルの提供状況、検証監査は独立に更新されます。アフィリエイト関係が順位や確認済みタグを左右することはありません。各プロバイダーの条件を必ず確認してください。",
    "footer.rights": "© 2025 Router Watch Index.",
  },

  zh: {
    "meta.title": "Router Watch | 免费额度 AI 网关一览",
    "meta.description":
      "Router Watch：汇总所有提供注册免费额度的 AI 网关。注册前先比较额度、模型与限制条件。",
    "nav.language": "语言",
    "brand.home": "Router Watch 首页",
    "brand.tagline": "追踪免费额度",
    "hero.title.lead": "比较每个 AI 网关的免费额度",
    "hero.title.accent": "一处集中对比。",
    "hero.body":
      "每个提供注册免费额度的网关：奖励、背后的模型，以及额度用完后真正的成本。没有意外，没有隐藏费用。",
    "hero.cta.count": "浏览 {n} 个已核实网关",
    "hero.stats.monitored": "监控中的网关",
    "hero.stats.value": "已识别注册价值",
    "hero.stats.dispute": "争议比例",
    "hero.stats.audit": "上次审计",
    "hero.stats.today": "今天",
        "hero.count": "已收录 {n} 个网关",
    "hero.credit": "注册额度合计 ${n}",
    "hero.live": "实时信号",
    "hero.best.title": "看板最佳优惠",
    "hero.best.cta": "立即领取",
    "hero.ticker": "当前在看板",


    "catalog.title": "网关列表",
    "catalog.body":
      "列出每个网关的注册奖励及其背后的模型。注册之前先缩小范围。",

    "filter.search.label": "搜索网关",
    "filter.search.placeholder": "按网关或模型搜索",
    "filter.type.label": "类型",
    "filter.type.all": "所有类型",
        "filter.order.label": "排序",
    "filter.model.label": "模型",
    "filter.model.all": "所有模型",
    "filter.model.anthropic": "Anthropic",
    "filter.model.chinese": "中国模型",
    "filter.model.wide": "通用",

    "order.featured": "精选",
    "order.rating": "评分",
    "order.name": "名称",
    "order.category": "类型",

            "card.claim": "领取奖励",
    "card.models": "模型",
    "verification.verified": "已核实",
    "verification.unverified": "未核实",
  "verification.none": "未收录",
    "verification.disputed": "有争议",
    "card.claim.aria": "领取 {name} 注册奖励",

    "empty.title": "没有符合这些筛选条件的结果。",
    "empty.action": "清除筛选",

    "footer.about":
      "独立的 AI 网关看板，收录提供注册额度的服务。花钱之前请自行核实每条优惠。",
    "footer.contribute": "提交网关",
    "quick.title": "快速筛选",
    "quick.verified": "仅看已核实",
    "quick.claude": "Claude Opus 5 / 4.8",
    "quick.agents": "编程智能体",
    "quick.deepseek": "DeepSeek V4",
    "quick.reset": "重置",
    "quick.note": "评分反映 API 可用性与奖励发放",
    "view.label": "视图",
    "view.grid": "网格",
    "view.table": "审计表",
    "table.gateway": "网关",
    "table.type": "类型",
    "table.status": "审计状态",
    "table.bonus": "宣称奖励",
    "table.models": "主要模型",
    "table.rating": "评分",
    "table.action": "操作",
    "footer.nav": "页脚",
    "footer.submit": "提交网关",
    "footer.report": "报告争议",
    "footer.disclaimer": "免责声明：网关政策、免费额度、模型可用性与核验审计均独立更新。任何推广关系都不决定排名或已核实标签。请务必查阅各服务商条款。",
    "footer.rights": "© 2025 Router Watch Index.",
  },

  es: {
    "meta.title": "Router Watch | Panel de Gateways IA con Crédito Gratis",
    "meta.description":
      "Router Watch: todos los gateways de IA con crédito gratis de registro, en un solo panel. Compara bonos, modelos y restricciones antes de registrarte.",
    "nav.language": "Idioma",
    "brand.home": "Inicio de Router Watch",
    "brand.tagline": "Crédito gratis, bajo seguimiento",
    "hero.title.lead": "Compara el crédito gratis de cada gateway de IA",
    "hero.title.accent": "en un solo lugar.",
    "hero.body":
      "Cada gateway con crédito de registro gratuito: su bono, los modelos que hay detrás y lo que realmente cuesta después. Sin sorpresas, sin cargos ocultos.",
    "hero.cta.count": "Ver {n} gateways verificados",
    "hero.stats.monitored": "Gateways supervisados",
    "hero.stats.value": "Valor de registro identificado",
    "hero.stats.dispute": "Tasa de disputa",
    "hero.stats.audit": "Última auditoría",
    "hero.stats.today": "Hoy",
        "hero.count": "{n} gateways registrados",
    "hero.credit": "${n} en crédito de registro",
    "hero.live": "Señales en directo",
    "hero.best.title": "Mejor oferta del panel",
    "hero.best.cta": "Reclamarla",
    "hero.ticker": "Ahora mismo en el panel",


    "catalog.title": "Lista de gateways",
    "catalog.body":
      "Cada gateway, su bono de registro y los modelos que hay detrás. Reduce la lista antes de registrarte.",

    "filter.search.label": "Buscar gateways",
    "filter.search.placeholder": "Buscar por gateway o modelo",
    "filter.type.label": "Tipo",
    "filter.type.all": "Cualquier tipo",
        "filter.order.label": "Orden",
    "filter.model.label": "Modelo",
    "filter.model.all": "Cualquier modelo",
    "filter.model.anthropic": "Anthropic",
    "filter.model.chinese": "Chino",
    "filter.model.wide": "Amplio",

    "order.featured": "Destacados",
    "order.rating": "Valoración",
    "order.name": "Nombre",
    "order.category": "Tipo",

            "card.claim": "Reclamar bono",
    "card.models": "Modelos",
    "verification.verified": "Verificado",
    "verification.unverified": "Sin verificar",
  "verification.none": "Sin registrar",
    "verification.disputed": "En disputa",
    "card.claim.aria": "Reclamar el bono de registro de {name}",

    "empty.title": "Nada coincide con esos filtros.",
    "empty.action": "Borrar filtros",

    "footer.about":
      "Un panel independiente de gateways de IA que ofrecen crédito de registro. Comprueba cada oferta por tu cuenta antes de gastar dinero.",
    "footer.contribute": "Aportar un gateway",
    "quick.title": "Filtros rápidos",
    "quick.verified": "Solo verificados",
    "quick.claude": "Claude Opus 5 / 4.8",
    "quick.agents": "Agentes de código",
    "quick.deepseek": "DeepSeek V4",
    "quick.reset": "Restablecer",
    "quick.note": "Las valoraciones reflejan el uptime y la entrega de bonos",
    "view.label": "Vista",
    "view.grid": "Cuadrícula",
    "view.table": "Tabla de auditoría",
    "table.gateway": "Gateway",
    "table.type": "Tipo",
    "table.status": "Estado de auditoría",
    "table.bonus": "Bono declarado",
    "table.models": "Modelos principales",
    "table.rating": "Valoración",
    "table.action": "Acción",
    "footer.nav": "Pie",
    "footer.submit": "Enviar router",
    "footer.report": "Informar disputa",
    "footer.disclaimer": "Aviso: las políticas, créditos gratuitos, disponibilidad de modelos y auditorías se actualizan de forma independiente. Ninguna afiliación determina el ranking ni las etiquetas. Revisa siempre los términos del proveedor.",
    "footer.rights": "© 2025 Router Watch Index.",
  },

  pt: {
    "meta.title": "Router Watch | Painel de Gateways de IA com Crédito Grátis",
    "meta.description":
      "Router Watch: todos os gateways de IA com crédito grátis de cadastro, em um só painel. Compare bônus, modelos e restrições antes de se inscrever.",
    "nav.language": "Idioma",
    "brand.home": "Início do Router Watch",
    "brand.tagline": "Crédito grátis, monitorado",
    "hero.title.lead": "Compare o crédito grátis de cada gateway de IA",
    "hero.title.accent": "em um só lugar.",
    "hero.body":
      "Cada gateway com crédito de cadastro gratuito: seu bônus, os modelos por trás e o custo real depois. Sem surpresas, sem tarifas ocultas.",
    "hero.cta.count": "Ver {n} gateways verificados",
    "hero.stats.monitored": "Gateways monitorados",
    "hero.stats.value": "Valor de cadastro identificado",
    "hero.stats.dispute": "Taxa de disputa",
    "hero.stats.audit": "Última auditoria",
    "hero.stats.today": "Hoje",
        "hero.count": "{n} gateways monitorados",
    "hero.credit": "${n} em crédito de cadastro",
    "hero.live": "Sinais ao vivo",
    "hero.best.title": "Melhor oferta do painel",
    "hero.best.cta": "Resgatar",
    "hero.ticker": "Agora no painel",


    "catalog.title": "Lista de gateways",
    "catalog.body":
      "Cada gateway, seu bônus de cadastro e os modelos por trás dele. Reduza a lista antes de se inscrever.",

    "filter.search.label": "Buscar gateways",
    "filter.search.placeholder": "Buscar por gateway ou modelo",
    "filter.type.label": "Tipo",
    "filter.type.all": "Qualquer tipo",
        "filter.order.label": "Ordem",
    "filter.model.label": "Modelo",
    "filter.model.all": "Qualquer modelo",
    "filter.model.anthropic": "Anthropic",
    "filter.model.chinese": "Chinês",
    "filter.model.wide": "Amplo",

    "order.featured": "Destaques",
    "order.rating": "Avaliação",
    "order.name": "Nome",
    "order.category": "Tipo",

            "card.claim": "Resgatar bônus",
    "card.models": "Modelos",
    "verification.verified": "Verificado",
    "verification.unverified": "Não verificado",
  "verification.none": "Não listado",
    "verification.disputed": "Em disputa",
    "card.claim.aria": "Resgatar o bônus de cadastro da {name}",

    "empty.title": "Nada corresponde a esses filtros.",
    "empty.action": "Limpar filtros",

    "footer.about":
      "Um painel independente de gateways de IA que oferecem crédito de cadastro. Verifique cada oferta por conta própria antes de gastar dinheiro.",
    "footer.contribute": "Enviar um gateway",
    "quick.title": "Filtros rápidos",
    "quick.verified": "Somente verificados",
    "quick.claude": "Claude Opus 5 / 4.8",
    "quick.agents": "Agentes de código",
    "quick.deepseek": "DeepSeek V4",
    "quick.reset": "Redefinir",
    "quick.note": "As avaliações refletem uptime e entrega de bônus",
    "view.label": "Visualização",
    "view.grid": "Grade",
    "view.table": "Tabela de auditoria",
    "table.gateway": "Gateway",
    "table.type": "Tipo",
    "table.status": "Estado da auditoria",
    "table.bonus": "Bônus declarado",
    "table.models": "Modelos principais",
    "table.rating": "Avaliação",
    "table.action": "Ação",
    "footer.nav": "Rodapé",
    "footer.submit": "Enviar router",
    "footer.report": "Informar disputa",
    "footer.disclaimer": "Aviso: políticas, créditos grátis, disponibilidade de modelos e auditorias são atualizados de forma independente. Nenhuma afiliação define o ranking nem os selos. Confira sempre os termos do provedor.",
    "footer.rights": "© 2025 Router Watch Index.",
  },

  fr: {
    "meta.title": "Router Watch | Tableau des Passerelles IA à Crédit Gratuit",
    "meta.description":
      "Router Watch : toutes les passerelles IA offrant un crédit d'inscription gratuit, réunies sur un seul tableau. Comparez bonus, modèles et restrictions avant de vous inscrire.",
    "nav.language": "Langue",
    "brand.home": "Accueil Router Watch",
    "brand.tagline": "Crédit gratuit, suivi",
    "hero.title.lead": "Comparez le crédit gratuit de chaque passerelle IA",
    "hero.title.accent": "au même endroit.",
    "hero.body":
      "Chaque passerelle offrant un crédit d'inscription gratuit : sa prime, les modèles associés et le coût réel ensuite. Sans surprise, sans frais cachés.",
    "hero.cta.count": "Voir {n} passerelles vérifiées",
    "hero.stats.monitored": "Passerelles surveillées",
    "hero.stats.value": "Valeur d’inscription identifiée",
    "hero.stats.dispute": "Taux de litige",
    "hero.stats.audit": "Dernier audit",
    "hero.stats.today": "Aujourd’hui",
        "hero.count": "{n} passerelles suivies",
    "hero.credit": "${n} de crédit d'inscription",
    "hero.live": "Signaux en direct",
    "hero.best.title": "Meilleure offre du tableau",
    "hero.best.cta": "La réclamer",
    "hero.ticker": "Actuellement sur le tableau",


    "catalog.title": "Liste des passerelles",
    "catalog.body":
      "Chaque passerelle, sa prime d'inscription et les modèles associés. Affinez la liste avant de vous inscrire.",

    "filter.search.label": "Rechercher des passerelles",
    "filter.search.placeholder": "Rechercher par passerelle ou modèle",
    "filter.type.label": "Type",
    "filter.type.all": "Tous les types",
        "filter.order.label": "Ordre",
    "filter.model.label": "Modèle",
    "filter.model.all": "Tous les modèles",
    "filter.model.anthropic": "Anthropic",
    "filter.model.chinese": "Chinois",
    "filter.model.wide": "Large",

    "order.featured": "En vedette",
    "order.rating": "Note",
    "order.name": "Nom",
    "order.category": "Type",

            "card.claim": "Réclamer la prime",
    "card.models": "Modèles",
    "verification.verified": "Vérifié",
    "verification.unverified": "Non vérifié",
  "verification.none": "Non répertorié",
    "verification.disputed": "Contesté",
    "card.claim.aria": "Réclamer la prime d'inscription de {name}",

    "empty.title": "Rien ne correspond à ces filtres.",
    "empty.action": "Effacer les filtres",

    "footer.about":
      "Un tableau indépendant des passerelles IA offrant un crédit d'inscription. Vérifiez chaque offre vous-même avant de dépenser de l'argent.",
    "footer.contribute": "Proposer une passerelle",
    "quick.title": "Filtres rapides",
    "quick.verified": "Vérifiés uniquement",
    "quick.claude": "Claude Opus 5 / 4.8",
    "quick.agents": "Agents de code",
    "quick.deepseek": "DeepSeek V4",
    "quick.reset": "Réinitialiser",
    "quick.note": "Les notes reflètent le temps de fonctionnement et la distribution des bonus",
    "view.label": "Affichage",
    "view.grid": "Grille",
    "view.table": "Tableau d’audit",
    "table.gateway": "Passerelle",
    "table.type": "Type",
    "table.status": "Statut d’audit",
    "table.bonus": "Prime déclarée",
    "table.models": "Modèles principaux",
    "table.rating": "Note",
    "table.action": "Action",
    "footer.nav": "Pied de page",
    "footer.submit": "Proposer une passerelle",
    "footer.report": "Signaler un litige",
    "footer.disclaimer": "Avertissement : politiques, crédits gratuits, disponibilité des modèles et audits sont mis à jour de façon indépendante. Aucune affiliation ne détermine le classement ni les labels. Vérifiez toujours les conditions du fournisseur.",
    "footer.rights": "© 2025 Router Watch Index.",
  },
};
