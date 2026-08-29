/**
 * Translated provider copy (description + tags) and category labels.
 *
 * English is deliberately absent. The English text in data/providers.js stays
 * the single source of truth and is used as the fallback, so there is no
 * duplicated copy to drift out of sync.
 *
 * DO NOT translate these, in any language:
 *   - amounts   : $100, $120, 300k tokens, 40$, 70$
 *   - model names: glm-5.3
 *   - brands    : GitHub, Google, Anthropic, Claude Code, Codex, Cline, OpenAI
 * Those are facts about the offer. Rendering $100 as "100 dólares" or renaming
 * a model would change what the card actually claims.
 */

/** @type {{ [lang: string]: { [name: string]: { description: string, tags: string[] } } }} */
export const PROVIDER_COPY = {
  id: {
    Bluesminds: {
      description:
        "Kredit sambutan $100 saat daftar lewat GitHub, besarnya bertambah sesuai usia akun. Menyalurkan 160+ model lewat satu endpoint yang kompatibel dengan OpenAI. Beberapa model kadang tidak tersedia.",
      tags: ["Kredit dasar $100", "160+ model", "Daftar via GitHub"],
    },
    "Xiaomi Mimo": {
      description:
        "Dapat kredit $3 saat mendaftar. Ajak orang dan dapat $3 per orang, maksimal 30 orang. Dikelola domain vendor resmi, bukan reseller.",
      tags: ["Ajak & dapat $3", "maksimal 30 orang", "belum terverifikasi"],
    },
    "Agent Router": {
      description:
        "Kredit $100-$200 saat daftar lewat GitHub, tergantung link referral. Khusus coding agent: permintaan harus datang dari Claude Code, Codex, Cline, dan sejenisnya, bukan aplikasi chat.",
      tags: ["Login GitHub saja", "coding agent saja", "$100-$200"],
    },
    "See Kai": {
      description:
        "Dilaporkan kredit $200 saat mendaftar, ditujukan untuk model chat. Besaran dan daftar model tidak dapat dikonfirmasi dari sumber non-afiliasi.",
      tags: ["model chat", "belum terverifikasi"],
    },
    Hcnsec: {
      description:
        "Pemberian kredit besar saat mendaftar, disebut-sebut mencapai ribuan kredit. Hanya model Cina. Besarannya tidak dapat diverifikasi dari sumber non-afiliasi.",
      tags: ["Hanya model Cina", "besaran belum terverifikasi"],
    },
    GoRouter: {
      description:
        "Daftar dengan akun GitHub lama (sebelum 2026) dan dapat $70. Hanya model Anthropic.",
      tags: ["Ajak & dapat 40$", "70$ saat daftar", "GitHub saja"],
    },
    Bai: {
      description:
        "Daftar dan dapat 300k token. Model di paket gratis terbatas, tetapi masih cukup baik.",
      tags: [
        "Dapat 300k token lewat link saya",
        "glm-5.3",
        "Login Google",
        "Kripto",
      ],
    },
    TaBiAi: {
      description:
        "Daftar dan dapat $120. Hanya model Anthropic. Pendaftaran hanya lewat GitHub.",
      tags: ["120$ saat daftar", "Daftar via GitHub"],
    },
    JustDoWork: {
      description:
        "Daftar dan dapat $100. Hanya model Anthropic. Check-in harian $20.",
      tags: ["100$ saat daftar", "Daftar via GitHub saja"],
    },
  },

  ja: {
    Bluesminds: {
      description:
        "GitHub登録で$100のウェルカムクレジット。アカウントの作成時期に応じて増額されます。OpenAI互換の単一エンドポイントで160以上のモデルを中継します。一部のモデルは断続的に利用できません。",
      tags: ["基本クレジット$100", "160以上のモデル", "GitHub登録"],
    },
    "Xiaomi Mimo": {
      description:
        "登録で$3のクレジット。紹介すると1人につき$3、最大30人まで獲得できます。転売業者ではなく正規ベンダーのドメインが運営しています。",
      tags: ["紹介で$3獲得", "最大30人", "未確認"],
    },
    "Agent Router": {
      description:
        "紹介リンクによりGitHub登録で$100〜$200のクレジット。コーディングエージェント専用です。リクエストはClaude Code、Codex、Clineなどから送る必要があり、チャットクライアントからは利用できません。",
      tags: ["GitHubログインのみ", "コーディングエージェント専用", "$100〜$200"],
    },
    "See Kai": {
      description:
        "登録で$200のクレジットと報告されていますが、チャットモデル向けです。金額とモデル一覧はアフィリエイト以外の情報源で確認できませんでした。",
      tags: ["チャットモデル", "未確認"],
    },
    Hcnsec: {
      description:
        "登録時に大量のクレジットが付与され、数千クレジットとの報告があります。中国製モデルのみ対応。金額はアフィリエイト以外の情報源で確認できませんでした。",
      tags: ["中国製モデルのみ", "金額は未確認"],
    },
    GoRouter: {
      description:
        "2026年より前に作成されたGitHubアカウントで登録すると$70を獲得できます。Anthropicモデルのみ対応。",
      tags: ["紹介で40$獲得", "登録で70$", "GitHubのみ"],
    },
    Bai: {
      description:
        "登録で30万トークンを獲得。無料プランで使えるモデルは限られますが、実用的です。",
      tags: ["リンク経由で30万トークン", "glm-5.3", "Googleログイン", "暗号資産"],
    },
    TaBiAi: {
      description:
        "登録で$120を獲得。Anthropicモデルのみ対応。登録はGitHub限定です。",
      tags: ["登録で120$", "GitHub登録"],
    },
    JustDoWork: {
      description:
        "登録で$100を獲得。Anthropicモデルのみ対応。毎日のチェックインで$20。",
      tags: ["登録で100$", "GitHub登録のみ"],
    },
  },

  zh: {
    Bluesminds: {
      description:
        "通过 GitHub 注册可获得 $100 迎新额度，额度随账号注册时间增加。通过单一 OpenAI 兼容端点中转 160 多个模型。部分模型会间歇性不可用。",
      tags: ["$100 基础额度", "160+ 模型", "GitHub 注册"],
    },
    "Xiaomi Mimo": {
      description:
        "注册即获 $3 额度。每邀请 1 人得 $3，最多 30 人。由官方厂商域名运营，而非转售商。",
      tags: ["邀请得 $3", "最多 30 人", "未核实"],
    },
    "Agent Router": {
      description:
        "通过 GitHub 注册可获得 $100-$200 额度，具体取决于邀请链接。仅限编程代理：请求必须来自 Claude Code、Codex、Cline 等工具，而非聊天客户端。",
      tags: ["仅 GitHub 登录", "仅限编程代理", "$100-$200"],
    },
    "See Kai": {
      description:
        "据称注册可获 $200 额度，面向聊天模型。金额与模型清单无法从非推广来源核实。",
      tags: ["聊天模型", "未核实"],
    },
    Hcnsec: {
      description:
        "注册时发放大量额度，据称可达数千点数。仅支持中国模型。金额无法从非推广来源核实。",
      tags: ["仅中国模型", "金额未核实"],
    },
    GoRouter: {
      description:
        "使用 2026 年之前注册的旧 GitHub 账号注册可获得 $70。仅支持 Anthropic 模型。",
      tags: ["邀请得 40$", "注册得 70$", "仅 GitHub"],
    },
    Bai: {
      description:
        "注册即获 30 万 token。免费版可用模型有限，但仍实用。",
      tags: ["通过我的链接得 30 万 token", "glm-5.3", "Google 登录", "加密货币"],
    },
    TaBiAi: {
      description:
        "注册即获 $120。仅支持 Anthropic 模型。仅限 GitHub 注册。",
      tags: ["注册得 120$", "GitHub 注册"],
    },
    JustDoWork: {
      description:
        "注册即获 $100。仅支持 Anthropic 模型。每日签到 $20。",
      tags: ["注册得 100$", "仅 GitHub 注册"],
    },
  },

  es: {
    Bluesminds: {
      description:
        "Crédito de bienvenida de $100 al registrarte con GitHub, que aumenta según la antigüedad de la cuenta. Enruta más de 160 modelos por un único endpoint compatible con OpenAI. Algunos modelos fallan de forma intermitente.",
      tags: ["Crédito base de $100", "160+ modelos", "Registro con GitHub"],
    },
    "Xiaomi Mimo": {
      description:
        "Obtén $3 de crédito al registrarte. Por cada invitado ganas $3, hasta 30 personas. Respaldado por un dominio de fabricante oficial, no por un revendedor.",
      tags: ["Gana $3 por invitado", "hasta 30 personas", "sin verificar"],
    },
    "Agent Router": {
      description:
        "Crédito de $100-$200 al registrarte con GitHub, según el enlace de invitación. Solo para agentes de código: las peticiones deben venir de Claude Code, Codex, Cline o similares, no de un cliente de chat.",
      tags: ["Solo inicio con GitHub", "solo agentes de código", "$100-$200"],
    },
    "See Kai": {
      description:
        "Se reportan $200 de crédito al registrarte, orientado a modelos de chat. Ni el importe ni la lista de modelos se pudieron confirmar con una fuente no afiliada.",
      tags: ["modelos de chat", "sin verificar"],
    },
    Hcnsec: {
      description:
        "Gran concesión de crédito al registrarte, según se informa de miles de créditos. Solo modelos chinos. El importe no se pudo verificar con una fuente no afiliada.",
      tags: ["Solo modelos chinos", "importe sin verificar"],
    },
    GoRouter: {
      description:
        "Regístrate con una cuenta de GitHub antigua (anterior a 2026) y obtén $70. Solo modelos de Anthropic.",
      tags: ["Gana 40$ por invitado", "70$ al registrarte", "solo GitHub"],
    },
    Bai: {
      description:
        "Regístrate y obtén 300 000 tokens. Los modelos del plan gratuito son limitados, pero siguen siendo útiles.",
      tags: [
        "300 000 tokens con mi enlace",
        "glm-5.3",
        "inicio con Google",
        "cripto",
      ],
    },
    TaBiAi: {
      description:
        "Regístrate y obtén $120. Solo modelos de Anthropic. El registro es únicamente con GitHub.",
      tags: ["120$ al registrarte", "registro con GitHub"],
    },
    JustDoWork: {
      description:
        "Regístrate y obtén $100. Solo modelos de Anthropic. $20 por check-in diario.",
      tags: ["100$ al registrarte", "solo registro con GitHub"],
    },
  },

  pt: {
    Bluesminds: {
      description:
        "Crédito de boas-vindas de $100 no cadastro via GitHub, que aumenta conforme a idade da conta. Roteia mais de 160 modelos por um único endpoint compatível com OpenAI. Alguns modelos ficam indisponíveis de forma intermitente.",
      tags: ["Crédito base de $100", "160+ modelos", "Cadastro via GitHub"],
    },
    "Xiaomi Mimo": {
      description:
        "Ganhe $3 de crédito ao se cadastrar. Indique e ganhe $3 por pessoa, até 30 pessoas. Operado por um domínio de fabricante oficial, não por um revendedor.",
      tags: ["Ganhe $3 por indicação", "até 30 pessoas", "não verificado"],
    },
    "Agent Router": {
      description:
        "Crédito de $100-$200 no cadastro via GitHub, dependendo do link de indicação. Somente para agentes de código: as requisições devem vir de Claude Code, Codex, Cline e similares, não de um cliente de chat.",
      tags: ["Somente login GitHub", "somente agentes de código", "$100-$200"],
    },
    "See Kai": {
      description:
        "Há relatos de $200 de crédito no cadastro, voltado a modelos de chat. Nem o valor nem a lista de modelos puderam ser confirmados por uma fonte não afiliada.",
      tags: ["modelos de chat", "não verificado"],
    },
    Hcnsec: {
      description:
        "Grande concessão de crédito no cadastro, segundo relatos de milhares de créditos. Somente modelos chineses. O valor não pôde ser verificado por uma fonte não afiliada.",
      tags: ["Somente modelos chineses", "valor não verificado"],
    },
    GoRouter: {
      description:
        "Cadastre-se com uma conta GitHub antiga (anterior a 2026) e ganhe $70. Somente modelos da Anthropic.",
      tags: ["Ganhe 40$ por indicação", "70$ no cadastro", "somente GitHub"],
    },
    Bai: {
      description:
        "Cadastre-se e ganhe 300 000 tokens. Os modelos do plano gratuito são limitados, mas ainda úteis.",
      tags: [
        "300 000 tokens com meu link",
        "glm-5.3",
        "login Google",
        "cripto",
      ],
    },
    TaBiAi: {
      description:
        "Cadastre-se e ganhe $120. Somente modelos da Anthropic. O cadastro é exclusivamente via GitHub.",
      tags: ["120$ no cadastro", "cadastro via GitHub"],
    },
    JustDoWork: {
      description:
        "Cadastre-se e ganhe $100. Somente modelos da Anthropic. $20 por check-in diário.",
      tags: ["100$ no cadastro", "somente cadastro via GitHub"],
    },
  },

  fr: {
    Bluesminds: {
      description:
        "Crédit de bienvenue de 100 $ à l'inscription via GitHub, qui augmente selon l'ancienneté du compte. Achemine plus de 160 modèles via un unique endpoint compatible OpenAI. Certains modèles sont intermittemment indisponibles.",
      tags: ["Crédit de base de 100 $", "160+ modèles", "Inscription GitHub"],
    },
    "Xiaomi Mimo": {
      description:
        "Obtenez 3 $ de crédit à l'inscription. Parrainez et gagnez 3 $ par personne, jusqu'à 30 personnes. Exploité par un domaine de fabricant officiel, pas par un revendeur.",
      tags: ["3 $ par filleul", "jusqu'à 30 personnes", "non vérifié"],
    },
    "Agent Router": {
      description:
        "Crédit de 100 $ à 200 $ à l'inscription via GitHub, selon le lien de parrainage. Réservé aux agents de code : les requêtes doivent provenir de Claude Code, Codex, Cline ou similaires, et non d'un client de chat.",
      tags: ["Connexion GitHub uniquement", "agents de code uniquement", "100 $ - 200 $"],
    },
    "See Kai": {
      description:
        "200 $ de crédit à l'inscription selon les témoignages, destinés aux modèles de chat. Ni le montant ni la liste des modèles n'ont pu être confirmés par une source non affiliée.",
      tags: ["modèles de chat", "non vérifié"],
    },
    Hcnsec: {
      description:
        "Important crédit à l'inscription, apparemment plusieurs milliers de crédits. Modèles chinois uniquement. Le montant n'a pas pu être vérifié par une source non affiliée.",
      tags: ["Modèles chinois uniquement", "montant non vérifié"],
    },
    GoRouter: {
      description:
        "Inscrivez-vous avec un compte GitHub ancien (avant 2026) et recevez 70 $. Modèles Anthropic uniquement.",
      tags: ["40 $ par filleul", "70 $ à l'inscription", "GitHub uniquement"],
    },
    Bai: {
      description:
        "Inscrivez-vous et recevez 300 000 tokens. Les modèles du plan gratuit sont limités mais restent corrects.",
      tags: [
        "300 000 tokens avec mon lien",
        "glm-5.3",
        "connexion Google",
        "crypto",
      ],
    },
    TaBiAi: {
      description:
        "Inscrivez-vous et recevez 120 $. Modèles Anthropic uniquement. Inscription exclusivement via GitHub.",
      tags: ["120 $ à l'inscription", "inscription GitHub"],
    },
    JustDoWork: {
      description:
        "Inscrivez-vous et recevez 100 $. Modèles Anthropic uniquement. 20 $ par check-in quotidien.",
      tags: ["100 $ à l'inscription", "inscription GitHub uniquement"],
    },
  },
};

/**
 * Display labels for categories. Keys are the canonical category values from
 * data/providers.js; filtering always compares canonical values, never labels.
 * English is omitted on purpose and falls back to the canonical value.
 * @type {{ [lang: string]: { [category: string]: string } }}
 */
export const CATEGORY_LABELS = {
  id: { "API routers": "Router API", "Official Router": "Router resmi" },
  ja: { "API routers": "APIルーター", "Official Router": "公式ルーター" },
  zh: { "API routers": "API 路由", "Official Router": "官方路由" },
  es: { "API routers": "Enrutadores API", "Official Router": "Enrutador oficial" },
  pt: { "API routers": "Roteadores API", "Official Router": "Roteador oficial" },
  fr: { "API routers": "Routeurs API", "Official Router": "Routeur officiel" },
};
