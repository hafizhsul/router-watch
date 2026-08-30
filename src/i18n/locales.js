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

  "nav.gateway": "Gateway",
  "nav.language": "Language",
  "nav.primary": "Primary",
  "brand.home": "Router Watch home",
  "brand.tagline": "Free credit, tracked",

  "hero.eyebrow": "Where the free credit is",
  "hero.title.lead": "Every AI gateway with free credit,",
  "hero.title.accent": "in one ledger.",
  "hero.body":
    "A working list of model gateways, resale routers, and signup bonuses. Each entry shows what you actually get, what it costs after the bonus, and how to claim it.",
  "hero.cta": "Browse gateways",
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
  "verification.verified": "Verified",
  "verification.unverified": "Unverified",
  "verification.disputed": "Disputed",
  "card.claim.aria": "Claim {name} signup bonus",

  "empty.title": "Nothing matches those filters.",
  "empty.action": "Clear filters",

  "footer.about":
    "An independent board of AI gateways offering signup credit. Check each offer yourself before you spend anything.",
  "footer.contribute": "Contribute a gateway",
};

/** @type {{ [code: string]: typeof en }} */
export const LOCALES = {
  en,

  id: {
    "meta.title": "Router Watch | Papan Gateway AI Berkredit Gratis",
    "meta.description":
      "Router Watch: semua gateway AI dengan kredit daftar gratis, dalam satu papan. Bandingkan bonus, model, dan batasannya sebelum kamu mendaftar.",

    "nav.gateway": "Gateway",
    "nav.language": "Bahasa",
    "nav.primary": "Utama",
    "brand.home": "Beranda Router Watch",
    "brand.tagline": "Kredit gratis, terpantau",

    "hero.eyebrow": "Tempat kredit gratis berada",
    "hero.title.lead": "Semua gateway AI berkredit gratis,",
    "hero.title.accent": "dalam satu papan.",
    "hero.body":
      "Daftar aktif gateway model, router resale, dan bonus pendaftaran. Setiap entri menunjukkan apa yang kamu terima, biayanya setelah bonus habis, dan cara mengklaimnya.",
    "hero.cta": "Lihat gateway",
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
    "verification.verified": "Terverifikasi",
    "verification.unverified": "Belum terverifikasi",
    "verification.disputed": "Dipersoalkan",
    "card.claim.aria": "Klaim bonus pendaftaran {name}",

    "empty.title": "Tidak ada yang cocok dengan filter itu.",
    "empty.action": "Hapus filter",

    "footer.about":
      "Papan independen gateway AI yang menawarkan kredit pendaftaran. Periksa sendiri setiap penawaran sebelum kamu mengeluarkan uang.",
    "footer.contribute": "Tambahkan gateway",
  },

  ja: {
    "meta.title": "Router Watch | 無料クレジット付きAIゲートウェイ一覧",
    "meta.description":
      "Router Watch: 登録クレジットがもらえるAIゲートウェイを1つのボードにまとめました。登録前にボーナス・モデル・制限事項を比較できます。",

    "nav.gateway": "ゲートウェイ",
    "nav.language": "言語",
    "nav.primary": "メイン",
    "brand.home": "Router Watch ホーム",
    "brand.tagline": "無料クレジットを追跡",

    "hero.eyebrow": "無料クレジットのある場所",
    "hero.title.lead": "無料クレジット付きのAIゲートウェイを、",
    "hero.title.accent": "1つの台帳に。",
    "hero.body":
      "モデルゲートウェイ、リセールルーター、登録ボーナスの実用的な一覧です。各項目で、実際に得られる内容、ボーナス終了後の費用、受け取り方法を確認できます。",
    "hero.cta": "ゲートウェイを見る",
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
    "verification.verified": "確認済み",
    "verification.unverified": "未確認",
    "verification.disputed": "疑義あり",
    "card.claim.aria": "{name} の登録ボーナスを受け取る",

    "empty.title": "条件に一致するものがありません。",
    "empty.action": "フィルターを解除",

    "footer.about":
      "登録クレジットを提供するAIゲートウェイの独立したボードです。お金を使う前に、必ずご自身で各オファーをご確認ください。",
    "footer.contribute": "ゲートウェイを追加",
  },

  zh: {
    "meta.title": "Router Watch | 免费额度 AI 网关一览",
    "meta.description":
      "Router Watch：汇总所有提供注册免费额度的 AI 网关。注册前先比较额度、模型与限制条件。",

    "nav.gateway": "网关",
    "nav.language": "语言",
    "nav.primary": "主导航",
    "brand.home": "Router Watch 首页",
    "brand.tagline": "追踪免费额度",

    "hero.eyebrow": "免费额度在哪里",
    "hero.title.lead": "所有带免费额度的 AI 网关，",
    "hero.title.accent": "尽在一张清单。",
    "hero.body":
      "这是一份可用的清单，收录模型网关、转售路由与注册奖励。每条都说明你实际能拿到什么、额度用完后的成本，以及领取方式。",
    "hero.cta": "浏览网关",
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
    "verification.verified": "已核实",
    "verification.unverified": "未核实",
    "verification.disputed": "有争议",
    "card.claim.aria": "领取 {name} 注册奖励",

    "empty.title": "没有符合这些筛选条件的结果。",
    "empty.action": "清除筛选",

    "footer.about":
      "独立的 AI 网关看板，收录提供注册额度的服务。花钱之前请自行核实每条优惠。",
    "footer.contribute": "提交网关",
  },

  es: {
    "meta.title": "Router Watch | Panel de Gateways IA con Crédito Gratis",
    "meta.description":
      "Router Watch: todos los gateways de IA con crédito gratis de registro, en un solo panel. Compara bonos, modelos y restricciones antes de registrarte.",

    "nav.gateway": "Gateway",
    "nav.language": "Idioma",
    "nav.primary": "Principal",
    "brand.home": "Inicio de Router Watch",
    "brand.tagline": "Crédito gratis, bajo seguimiento",

    "hero.eyebrow": "Dónde está el crédito gratis",
    "hero.title.lead": "Todos los gateways de IA con crédito gratis,",
    "hero.title.accent": "en un solo registro.",
    "hero.body":
      "Una lista funcional de gateways de modelos, routers de reventa y bonos de registro. Cada entrada muestra lo que recibes realmente, cuánto cuesta tras el bono y cómo reclamarlo.",
    "hero.cta": "Ver gateways",
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
    "verification.verified": "Verificado",
    "verification.unverified": "Sin verificar",
    "verification.disputed": "En disputa",
    "card.claim.aria": "Reclamar el bono de registro de {name}",

    "empty.title": "Nada coincide con esos filtros.",
    "empty.action": "Borrar filtros",

    "footer.about":
      "Un panel independiente de gateways de IA que ofrecen crédito de registro. Comprueba cada oferta por tu cuenta antes de gastar dinero.",
    "footer.contribute": "Aportar un gateway",
  },

  pt: {
    "meta.title": "Router Watch | Painel de Gateways de IA com Crédito Grátis",
    "meta.description":
      "Router Watch: todos os gateways de IA com crédito grátis de cadastro, em um só painel. Compare bônus, modelos e restrições antes de se inscrever.",

    "nav.gateway": "Gateway",
    "nav.language": "Idioma",
    "nav.primary": "Principal",
    "brand.home": "Início do Router Watch",
    "brand.tagline": "Crédito grátis, monitorado",

    "hero.eyebrow": "Onde está o crédito grátis",
    "hero.title.lead": "Todos os gateways de IA com crédito grátis,",
    "hero.title.accent": "em um só registro.",
    "hero.body":
      "Uma lista funcional de gateways de modelos, roteadores de revenda e bônus de cadastro. Cada item mostra o que você realmente recebe, quanto custa após o bônus e como resgatar.",
    "hero.cta": "Ver gateways",
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
    "verification.verified": "Verificado",
    "verification.unverified": "Não verificado",
    "verification.disputed": "Em disputa",
    "card.claim.aria": "Resgatar o bônus de cadastro da {name}",

    "empty.title": "Nada corresponde a esses filtros.",
    "empty.action": "Limpar filtros",

    "footer.about":
      "Um painel independente de gateways de IA que oferecem crédito de cadastro. Verifique cada oferta por conta própria antes de gastar dinheiro.",
    "footer.contribute": "Enviar um gateway",
  },

  fr: {
    "meta.title": "Router Watch | Tableau des Passerelles IA à Crédit Gratuit",
    "meta.description":
      "Router Watch : toutes les passerelles IA offrant un crédit d'inscription gratuit, réunies sur un seul tableau. Comparez bonus, modèles et restrictions avant de vous inscrire.",

    "nav.gateway": "Passerelles",
    "nav.language": "Langue",
    "nav.primary": "Principal",
    "brand.home": "Accueil Router Watch",
    "brand.tagline": "Crédit gratuit, suivi",

    "hero.eyebrow": "Là où se trouve le crédit gratuit",
    "hero.title.lead": "Toutes les passerelles IA à crédit gratuit,",
    "hero.title.accent": "en un seul registre.",
    "hero.body":
      "Une liste à jour de passerelles de modèles, routeurs de revente et primes d'inscription. Chaque entrée indique ce que vous recevez réellement, le coût après la prime et comment la réclamer.",
    "hero.cta": "Voir les passerelles",
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
    "verification.verified": "Vérifié",
    "verification.unverified": "Non vérifié",
    "verification.disputed": "Contesté",
    "card.claim.aria": "Réclamer la prime d'inscription de {name}",

    "empty.title": "Rien ne correspond à ces filtres.",
    "empty.action": "Effacer les filtres",

    "footer.about":
      "Un tableau indépendant des passerelles IA offrant un crédit d'inscription. Vérifiez chaque offre vous-même avant de dépenser de l'argent.",
    "footer.contribute": "Proposer une passerelle",
  },
};
