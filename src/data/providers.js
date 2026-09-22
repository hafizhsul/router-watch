/**
 * Router Watch: provider directory data.
 *
 * ########################################################################
 *  REFERRAL CODES - SINGLE EDITABLE POINT (one place, no hardcoding)
 * ########################################################################
 * Drop your own referral codes into REFERRAL_CODES below. Nothing else needs
 * editing. Each key matches a provider by `name`; the provider's signup URL is
 * built from `baseUrl` + `codeParam` + this code at render time.
 *
 * These are the owner's own codes. The previous site's codes were deliberately
 * not carried over, since they would route referral earnings to someone else.
 *
 * Replace a code here when you get a new one. Keep it as "" to link to the
 * plain signup page with no code attached.
 * ########################################################################
 */

/**
 * @typedef {{ [providerName: string]: string }} ReferralCodes
 */
/** @type {ReferralCodes} */
export const REFERRAL_CODES = {
  // https://api.bluesminds.com/sign-up?aff=68fe
  "Bluesminds": "68fe",
  // https://platform.xiaomimimo.com?ref=LDN2RK
  "Xiaomi Mimo": "LDN2RK",
  // https://agentrouter.org/register?aff=XxLa
  "Agent Router": "XxLa",
  // https://seekai.cc/sign-up?aff=b1Lh
  "See Kai": "b1Lh",
  // https://api.hcnsec.cn/sign-up?aff=NIgz
  "Hcnsec": "NIgz",
  // https://gorouter.app/sign-up?aff=FGH3
  "GoRouter": "FGH3",
  // https://chat.b.ai/chat?invite_code=KHCGPQ
  "Bai": "KHCGPQ",
  // https://tabitoken.com/sign-up?aff=AyCB
  "TaBiAi": "AyCB",
  // https://api.justwoker.icu/register?aff=Zgno
  "JustDoWork": "Zgno",
  // https://kktoken.cc/sign-up?aff=bpXO
  "KKToken": "bpXO",
};

/**
 * RATING SCALE (0-5, one decimal)
 *
 * `rating` is a composite of three things, in this order of weight:
 *
 *   1. Verification  - is the credit amount confirmed by a source that is not
 *                      the provider itself (or an affiliate earning from it)?
 *                      Unverifiable or self-contradicting offers lose the most.
 *   2. Usability     - model breadth, login friction, protocol restrictions.
 *   3. Durability    - is this likely to still exist in six months? Large-credit
 *                      referral farms on throwaway domains score low here.
 *
 * It is NOT a measure of how big the signup bonus is. A $2000 claim from a
 * forum giveaway thread rates BELOW a verified $70 from a company with docs.
 *
 * Keep ratings evidence-backed. When a rating is changed, leave the source in
 * the inline comment so the next person can re-check it.
 *
 * Base signup URL per provider, WITHOUT query string, plus the query param name
 * that service expects. The code itself comes from REFERRAL_CODES via the
 * provider `name`. Keeping param shape (aff= / ref= / invite_code=) here lets
 * each service keep its own convention.
 * modelType: "anthropic" | "chinese" | "wide" - the model family the gateway
    models: ["Claude Opus 5", "Claude Opus 4.8"],
    models: ["GPT-5.6", "Claude Opus 4.8", "Gemini 3.6 Flash", "DeepSeek V4", "Grok 4.6"],
    models: ["claude-opus-4-8", "claude-opus-4-8-thinking", "claude-opus-5", "claude-opus-5-thinking"],
    models: ["MiMo-V2.5-Pro", "MiMo-V2.5", "MiMo-V2-Flash", "MiMo-V2.5-ASR", "MiMo-V2.5-TTS"],
    models: ["GPT-5.6 Sol", "Claude Opus 4.8", "Claude Opus 5"],
 * actually serves, derived from its description/tags.
 * login: "github" | "google" | "any" the signup auth path, from the tags.
 * verification: "verified" | "unverified" | "disputed" | "none".
 *   Only set when the inline comment carries evidence (an independent review,
 *   a tag, or a conflicting source). "none" means no claim either way.
 * creditUsd: the stated signup credit in dollars, lower bound for ranges,
 *   null when it is not a dollar figure (tokens, credits, disputed).
 * @typedef {{ name: string, category: string, description: string, tags: string[], models: string[], rating: number, featured: boolean, baseUrl: string, codeParam: string, modelType: string, login: string, verification: string, creditUsd: number | null }} ProviderDef
 */

/** @type {ProviderDef[]} */
export const PROVIDERS = [
  {
    // Independent review (IADecider, 2026-08-18) rates this 3.9: 160+ models,
    // runs on the open-source New API gateway. GitHub signup credit scales with
    // account age ($100 fresh, reported up to $500 for older accounts). The
    // previous 2.1 reflected only model uptime, which is one factor of three.
    name: "Bluesminds",
    category: "API routers",
    description:
      "$100 welcome credit on GitHub signup, scaling with account age. Routes 160+ models over one OpenAI-compatible endpoint. Some models are intermittently unavailable.",
    tags: ["$100 base credit", "160+ models", "GitHub signup"],
    // Live /v1/models for a working key, 2026-08-30: 27 models (token-level
    // allowlist; the 160+ tag is the marketing breadth). kimi-k2.5 replaced
    // the earlier kimi-k3, and glm-5.3 is not served to this token.
    models: ["gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna", "gpt-5.5", "gpt-5.3-codex", "deepseek-v4-pro", "kimi-k2.5", "gpt-4o"],
    modelType: "wide",
    login: "github",
    verification: "verified",
    creditUsd: 100,
    rating: 3.9,
    featured: true,
    baseUrl: "https://api.bluesminds.com/sign-up",
    codeParam: "aff",
  },
  {
    // Official Xiaomi MiMo platform. ModelIndex.ai lists the models as VERIFIED
    // 22h ago (MiMo-V2.5 $0.14/$0.28, MiMo-V2.5-Pro $0.435/$0.87), and the
    // vendor docs specify the model family (Pro/Omni/Flash/ASR/TTS). So the
    // platform is a first-party vendor, not a reseller. Raises from the raw
    // "unverified" tag to "verified": the models are real and the pricing is
    // confirmed, even if the $3 signup credit itself is modest.
    favicon: "/favicons/aigratis/xiaomi-mimo.webp",
    favicon: "/favicons/aigratis/xiaomi-mimo.webp",
    name: "Xiaomi Mimo",
    category: "Official Router",
    description:
      "Get $3 credit on register. Refer and earn $3 per person, up to 30 people. Backed by an official vendor domain rather than a reseller.",
    tags: ["Refer and earn $3", "up to 30 people", "unverified"],
    models: ["MiMo-V2.5-Pro", "MiMo-V2.5", "MiMo-V2-Flash", "MiMo-V2.5-ASR", "MiMo-V2.5-TTS"],
    modelType: "wide",
    login: "any",
    verification: "verified",
    creditUsd: 3,
    rating: 4.2,
    featured: true,
    baseUrl: "https://platform.xiaomimimo.com",
    codeParam: "ref",
  },
  {
    // Independent reviews (IADecider 2026-08-05, BizTechScout 2026-07-13) and
    // community write-ups (Aug 2026) confirm real frontier models: GPT-5.6 Sol,
    // Claude Opus 4.8/5. What they also flag: the homepage touts "30+ providers"
    // but the public pricing page lists only three billable models, so the
    // marketing breadth is a capability claim, not the current catalogue.
    // Up to $250 on pre-2025 GitHub accounts plus $25/day check-in. Raises from
    // "none" to "verified" because an independent source now confirms the
    // models are genuine; rating climbs accordingly but is capped by the
    // three-model default group and no SLA.
    favicon: "/favicons/aigratis/agentrouter.webp",
    name: "Agent Router",
    category: "API routers",
    description:
      "$100-$200 credit on GitHub signup depending on the referral link. Coding agents only: requests must come from Claude Code, Codex, Cline and similar, not a chat client.",
    tags: ["GitHub login only", "coding agents only", "$100-$200"],
    models: ["GPT-5.6 Sol", "Claude Opus 4.8", "Claude Opus 5"],
    modelType: "wide",
    login: "github",
    verification: "verified",
    creditUsd: 100,
    rating: 4.3,
    featured: true,
    baseUrl: "https://agentrouter.org/register",
    codeParam: "aff",
  },
  {
    // No independent source found during the 2026-08-29 research pass, and the
    // model name in the original description could not be matched to any known
    // model. Rating kept as-is rather than guessed. Re-verify before adjusting.
    name: "See Kai",
    category: "API routers",
    description:
      "Reported $200 credit on signup, aimed at chat models. Amount and model list could not be confirmed against a non-affiliate source.",
    tags: ["chat models", "unverified"],
    // Live /v1/models for a working key, 2026-08-30: real frontier models
    // behind the gateway, even though the $200 credit claim stays unverified.
    models: ["gpt-5.6-sol", "claude-opus-5", "claude-fable-5", "claude-sonnet-5", "claude-opus-4-8", "gemini-3-6-flash", "grok-4-6", "deepseek-v4-pro", "glm-5-2"],
    modelType: "wide",
    login: "any",
    verification: "unverified",
    creditUsd: 200,
    rating: 2.2,
    featured: false,
    baseUrl: "https://seekai.cc/sign-up",
    codeParam: "aff",
  },
  {
    // Credit amount is disputed: external giveaway threads claim $4000, while
    // an independent listing says 4K credits (a different unit, not dollars).
    // The only figure we can defend is "thousands of credits, Chinese models".
    // Rating reflects the unverifiable amount, not the size of the claim.
    name: "Hcnsec",
    category: "API routers",
    description:
      "Large credit grant on register, reportedly thousands of credits. Only Chinese models. Amount could not be verified against a non-affiliate source.",
    tags: ["Chinese Models only", "amount unverified"],
    // Live /v1/models for a working key, 2026-08-30: 20 models, all Chinese
    // vendors (DeepSeek, Zhipu GLM, Moonshot Kimi, MiniMax, Qwen, SenseNova,
    // Step). Curated to chat models; auto/embedding/audio/image IDs omitted.
    models: ["DeepSeek-V4-Pro", "DeepSeek-V4-Flash", "kimi-k3", "MiniMax-M3", "Qwen3.8-27B", "glm-4.5-air", "step-3.7-flash"],
    modelType: "chinese",
    login: "any",
    verification: "disputed",
    creditUsd: null,
    rating: 2.6,
    featured: false,
    baseUrl: "https://api.hcnsec.cn/sign-up",
    codeParam: "aff",
  },
  {
    // Model availability is confirmed by third-party sources rather than only
    // the homepage: a Juejin aggregator post (2026-07-29) and a Threads guide
    // both list Claude Opus 5 and Opus 4.8 behind gorouter.app, and credit
    // terms match ($50 new users, $6-10 daily check-in). Same "Unified API
    // Gateway" template as TaBiAI, but with no negative community report, so
    // verified rather than disputed.
    name: "GoRouter",
    category: "API routers",
    description:
      "Register with old (before 2026) GitHub account and get $70. Only Anthropic models.",
    tags: ["Refer and get 40$", "70$ on sign up", "Github only"],
    models: ["Claude Opus 5", "Claude Opus 4.8"],
    modelType: "anthropic",
    login: "github",
    verification: "verified",
    creditUsd: 70,
    rating: 4.1,
    featured: true,
    baseUrl: "https://gorouter.app/sign-up",
    codeParam: "aff",
  },
  {
    // Independent reviews (IADecider 2026-08-05, TokenMix 2026-05-10) confirm a
    // real multi-model catalog, not a relay: GPT-5.6, Claude Opus 4.8, Gemini,
    // DeepSeek and Chinese labs, billed through one credit pool (1 USD = 1M
    // credits), with card or crypto top-up. The reviews note it is crypto-first
    // and has a $200 monthly subscription floor plus invite gating, which is
    // why the rating is solid but not top despite the verified models.
    favicon: "/favicons/aigratis/bai.webp",
    favicon: "/favicons/aigratis/bai.webp",
    name: "Bai",
    category: "API routers",
    description:
      "Register and get 300k tokens. Limited models in free plan but still good.",
    tags: ["Get 300k tokens with my link", "glm-5.3", "Google login", "Crypto"],
    models: ["GPT-5.6", "Claude Opus 4.8", "Gemini 3.6 Flash", "DeepSeek V4", "Grok 4.6"],
    modelType: "wide",
    login: "google",
    verification: "verified",
    creditUsd: null,
    rating: 4.2,
    featured: true,
    baseUrl: "https://chat.b.ai/chat",
    codeParam: "invite_code",
  },
  {
    // Conflicting evidence. ModelOC gives claude-opus-5 grade B / score 80 /
    // low risk (medium trust, 2026-08-28), suggesting genuine models and
    // decent uptime. But a community test on the same date reports the wallet
    // relay shows fake limits and billed "$28 for one test", calling it a
    // rip-off. Two sources disagree, so the status is disputed, not verified.
    // $120 signup is real but the conflicting reports cap the rating.
    name: "TaBiAi",
    category: "API routers",
    description:
      "Register and get $120. Only Anthropic models. Sign up with GitHub only.",
    tags: ["120$ on signup", "Github Signup"],
    models: ["claude-opus-4-8", "claude-opus-4-8-thinking", "claude-opus-5", "claude-opus-5-thinking"],
    modelType: "anthropic",
    login: "github",
    verification: "disputed",
    creditUsd: 120,
    rating: 3.9,
    featured: true,
    baseUrl: "https://tabitoken.com/sign-up",
    codeParam: "aff",
  },
  {
    name: "KKToken",
    category: "API routers",
    description:
      "New API-based gateway with referral access. Models, pricing and signup credit are only visible after login, so the catalogue and the amount could not be verified against an independent source.",
    tags: ["New API", "referral", "unverified"],
    // Live /v1/models for a working key, 2026-08-30: the public catalogue was
    // login-gated; behind a token it serves exactly four Claude Opus models.
    models: ["claude-opus-5", "claude-opus-5-thinking", "claude-opus-4-8", "claude-opus-4-8-thinking"],
    modelType: "wide",
    login: "any",
    verification: "unverified",
    creditUsd: null,
    rating: 2.5,
    featured: false,
    baseUrl: "https://kktoken.cc/sign-up",
    codeParam: "aff",
  },
  {
    // No independent source found. The dashboard is a locked New API install
    // (sign-in, register, GitHub login, Discord announcement), so the model
    // catalogue and the $100/$20 figures come only from the registration copy,
    // not a third party. Kept conservative rather than trusted on its own
    // claim, so unverified and rated low.
    name: "JustDoWork",
    category: "API routers",
    description:
      "Register and get $100. Only Anthropic models. $20 daily check-in.",
    tags: ["100$ on signup", "Github Signup only"],
    // Live /v1/models for a working key, 2026-08-30: exactly four Claude Opus
    // models, matching the "Only Anthropic models" signup claim.
    models: ["claude-opus-5", "claude-opus-5-thinking", "claude-opus-4-8", "claude-opus-4-8-thinking"],
    modelType: "anthropic",
    login: "github",
    verification: "unverified",
    creditUsd: 100,
    rating: 3.4,
    featured: true,
    baseUrl: "https://api.justwoker.icu/register",
    codeParam: "aff",
  },
  {
    // aigratis.my.id/provider/aihubmix (845 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/aihubmix.webp",
    name: "AIHubMix",
    category: "API routers",
    description:
      "Access leading AI models through one unified, OpenAI-compatible API. Connect to ChatGPT, Claude, Gemini, DeepSeek, Doubao, Qwen and more through a single endpoint.",
    tags: ["845 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://aihubmix.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/amd (7 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/amd.ico",
    name: "AMD AI 开发者计划",
    category: "API routers",
    description:
      "AMD AI Developer Program",
    tags: ["7 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://developer.amd.com.cn",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/apinex (30 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/apinex.webp",
    name: "APInex",
    category: "API routers",
    description:
      "One API key for OpenAI-compatible models, web research, Twitter/X and voice. One token balance, ~10× cheaper than official rates.",
    tags: ["30 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://apinex.bond",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/apmix-ai (2 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/apmix-ai.webp",
    name: "APMIX AI",
    category: "API routers",
    description:
      "One cheap plan from $4.99/month covers GPT, Claude, Gemini, Grok, DeepSeek and Qwen on a single API key. OpenAI- and Anthropic-compatible; works with Claude Code, Codex CLI and Cursor.",
    tags: ["2 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://apmix.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/agentnala (31 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/agentnala.webp",
    name: "Agent Nala",
    category: "API routers",
    description:
      "Claude Opus 5, GPT-5.6, DeepSeek V4 Pro, dan Kimi K2.7 / GLM-5.3 — dalam satu API kompatibel Anthropic & OpenAI.",
    tags: ["31 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://gateway.aplikasinala.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/agnes (12 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/agnes.webp",
    name: "Agnes",
    category: "API routers",
    description:
      "Agnes is an agentic consumer app accessible for everyone to think, create and co-vibe together.",
    tags: ["12 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://platform.agnes-ai.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/api-co-id (15 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/api-co-id.webp",
    name: "Api.co.id",
    category: "API routers",
    description:
      "Api.co.id adalah Provider API Terlengkap di Indonesia, mulai dari api wilayah indonesia, api kode pos, api cek ongkir, api cek rekening, dll",
    tags: ["15 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://api.co.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/atmorouter (121 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/atmorouter.ico",
    name: "AtmoRouter",
    category: "API routers",
    description:
      "One API key. Every frontier model. Pay per million tokens at a fraction of official pricing.",
    tags: ["121 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://atmorouter.dev",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/atria-dawn (1 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/atria-dawn.webp",
    name: "Atria Dawn Preview",
    category: "API routers",
    description:
      "Atria Dawn Preview 面向科研、工程与 Agent 任务，将复杂问题推进为可验证成果。",
    tags: ["1 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://atria-asi.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/ceoweb3 (25 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/ceoweb3.webp",
    name: "CEOWeb3",
    category: "API routers",
    description:
      "Akses Claude, GPT, Gemini, DeepSeek, dan model AI lainnya lewat satu API key. Harga hemat, credit fleksibel, redeem instan.",
    tags: ["25 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://ceoweb3.dev",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/cavoti (60 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/cavoti.webp",
    name: "Cavoti AI",
    category: "API routers",
    description:
      "Cavoti AI is a multi-provider API platform where developers can compare independent providers by model, price, performance and data policy, then connect through one OpenAI-compatible API.",
    tags: ["60 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://cavoti.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/cline (443 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/cline.webp",
    name: "Cline",
    category: "API routers",
    description:
      "Cline Dashboard",
    tags: ["443 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://app.cline.bot",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/cloudflare (27 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/cloudflare.webp",
    name: "Cloudflare",
    category: "API routers",
    description:
      "Welcome to Cloudflare - Powering the next generation of applications",
    tags: ["27 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://cloudflare.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/cutad-ai (24 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/cutad-ai.webp",
    name: "CutadAI",
    category: "API routers",
    description:
      "Satu API key untuk berbagai model AI. Kelola rate limit, usage analytics, webhook, dan billing dalam satu dashboard profesional.",
    tags: ["24 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://ai.cutad.web.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/databyte-ai (4 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/databyte-ai.webp",
    name: "DataByte AI",
    category: "API routers",
    description:
      "Anti token boncos. Request based AI. Pasang ke Claude Code, OpenCode, Databyte Agent langsung jalan.",
    tags: ["4 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://ai.databyte.co.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/dattio-ai (41 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/dattio-ai.webp",
    name: "Dattio AI",
    category: "API routers",
    description:
      "Paket token AI sekali bayar dengan checkout QRIS otomatis via Mayar. API key dikirim setelah pembayaran terverifikasi.",
    tags: ["41 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://dattio.my.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/deepseek (2 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/deepseek.ico",
    name: "DeepSeek | 深度求索",
    category: "API routers",
    description:
      "深度求索（DeepSeek），探索未至之境。专注于研究世界领先的通用人工智能底层模型与技术，开源 DeepSeek-V4、DeepSeek-R1 等前沿大模型。和 DeepSeek AI 对话，轻松接入 API。",
    tags: ["2 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://deepseek.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/escavalabs (32 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/escavalabs.webp",
    name: "EscavaLabs",
    category: "API routers",
    description:
      "The AI infrastructure developers deserve. Simple, reliable, and built to scale.",
    tags: ["32 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://escavalabs.dpdns.org",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/experientallabs (500 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/experientallabs.webp",
    name: "Experiential Labs",
    category: "API routers",
    description:
      "One API key for every model: hosted providers, your own keys, your own GPUs. Routing, access control, and attribution for everything your agents call.",
    tags: ["500 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://experientiallabs.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/felo-ai (26 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/felo-ai.webp",
    name: "Felo",
    category: "API routers",
    description:
      "Build search, agent, document, and model-powered applications with Felo API Platform.",
    tags: ["26 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://felo.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/gregateway (26 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    name: "Fregateway",
    category: "API routers",
    description:
      "Access 16 top AI models through a single OpenAI-compatible endpoint. Auto-failover, clear per-token pricing, prepaid credits.",
    tags: ["26 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://fregateway.biz.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/gate-ai (9 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    name: "Gate AI",
    category: "API routers",
    description:
      "API AI murah untuk semua model. Tanpa drama.",
    tags: ["9 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://gateai.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/gatekey (63 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/gatekey.webp",
    name: "GateKey",
    category: "API routers",
    description:
      "Akses model AI pilihan melalui satu endpoint yang kompatibel dengan OpenAI.",
    tags: ["63 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://ai.gatekey.cloud",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/guts-ai (51 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/guts-ai.webp",
    name: "Guts AI",
    category: "API routers",
    description:
      "The unified interface for every AI model. Starts from Rp 10.000 ($0.60 USDT) with non-expiring balance. Pay only for what you actually use.",
    tags: ["51 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://gutsai.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/hemattoken (24 models, synced 2026-09-17).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/hemattoken.webp",
    name: "HematToken",
    category: "API routers",
    description:
      "Sambungkan 191 provider lewat satu endpoint. Hemat token otomatis, pantau biaya real-time. Mulai Rp10.000/bulan.",
    tags: ["24 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://hemattoken.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/heraxles (4 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/heraxles.webp",
    name: "Heraxles Router",
    category: "API routers",
    description:
      "Akses model AI lewat endpoint kompatibel OpenAI. Satu key untuk seluruh katalog model, tanpa hitungan per token.",
    tags: ["4 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://heraxles.dev",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/holver-ai (19 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/holver-ai.webp",
    name: "HolverAI",
    category: "API routers",
    description:
      "Access the best AI models like Claude Sonnet via API. Top up balance, buy quota, and start using right away.",
    tags: ["19 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://holver.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/inceptions (2 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/inceptions.webp",
    name: "Inception",
    category: "API routers",
    description:
      "We are leveraging diffusion technology to develop a new generation of LLMs. Our dLLMs are much faster and more efficient than traditional autoregressive LLMs.",
    tags: ["2 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://inceptionlabs.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/inferx (11 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/inferx.webp",
    name: "InferX",
    category: "API routers",
    description:
      "Production-ready Endpoints for open models and Sovereign Endpoints™ powered by the InferX runtime.",
    tags: ["11 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://inferx.net",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/infron (459 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/infron.webp",
    name: "Infron",
    category: "API routers",
    description:
      "Enterprise-grade platform for models and agents — unified API, unified billing, deploy in minutes, with dedicated throughput and SLA-backed performance.",
    tags: ["459 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://infron.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/inxoralabs (39 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/inxoralabs.webp",
    name: "InxoraLabs",
    category: "API routers",
    description:
      "Connect Claude Code, Cursor, custom agents, and developer apps to Claude, GPT, DeepSeek, GLM, and Xera through one compatible AI API.",
    tags: ["39 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://labs.inxorastudio.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/jembatan-ai (6 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/jembatan-ai.webp",
    name: "JembatanAI",
    category: "API routers",
    description:
      "Klaim 1 juta token gratis di Telegram, dapat API key di chat, pakai Claude Code / Codex / Cline / Cursor lewat satu endpoint.",
    tags: ["6 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://jembatanai.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/kieai (208 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/kieai.ico",
    name: "Kie AI",
    category: "API routers",
    description:
      "Access the best AI models for AI chat, video, image, and music in one API. Get a free API key, stable performance, and pricing lower than Replicate.",
    tags: ["208 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://kie.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/kiosapi (27 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/kiosapi.webp",
    name: "KiosAPI",
    category: "API routers",
    description:
      "One production-ready gateway for AI provider routing, failover, billing, and observability.",
    tags: ["27 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://kiosapi.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/kiraai (54 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/kiraai.webp",
    name: "Kira AI",
    category: "API routers",
    description:
      "Trải nghiệm hệ sinh thái AI đỉnh cao với chatbot AI, tạo hình ảnh nghệ thuật, giọng nói tự nhiên và video chất lượng cao. API chất lượng và tốc độ",
    tags: ["54 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://kiraai.vn",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/minimax (8 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/minimax.ico",
    name: "MiniMax",
    category: "API routers",
    description:
      "Building AGI with our mission Intelligence with Everyone. Global leader in multi-modal models and AI-native products with over 200 million users.",
    tags: ["8 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://www.minimax.io",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/modelscope (33 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/modelscope.ico",
    name: "ModelScope",
    category: "API routers",
    description:
      "ModelScope",
    tags: ["33 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://modelscope.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/nvidia-nim (82 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/nvidia-nim.ico",
    name: "NVIDIA NIM APIs",
    category: "API routers",
    description:
      "Experience the leading models to build enterprise generative AI apps now.",
    tags: ["82 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://build.nvidia.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/nanogpt (599 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/nanogpt.webp",
    name: "NanoGPT",
    category: "API routers",
    description:
      "Access the newest AI models including ChatGPT, Claude, Gemini, Deepseek, and image/video models. Pay-as-you-go or subscribe. Local history by default.",
    tags: ["599 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://nano-gpt.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/nararouter (50 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/nararouter.webp",
    name: "NaraRouter",
    category: "API routers",
    description:
      "Access free and affordable AI models through one OpenAI-compatible API. NaraRouter gives developers fast routing, simple pricing, and one unified AI gateway.",
    tags: ["50 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://router.bynara.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/netraruntime (2 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/netraruntime.webp",
    name: "Netra Runtime",
    category: "API routers",
    description:
      "Run production AI with lower latency and higher throughput. Use Netra Cloud's OpenAI-compatible API or deploy Netra Runtime on your own GPU infrastructure.",
    tags: ["2 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://netraruntime.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/nexarouter (29 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/nexarouter.webp",
    name: "NexaRouter",
    category: "API routers",
    description:
      "Satu API untuk semua model AI. Akses OpenAI, Anthropic, Google, DeepSeek, Qwen, dan lainnya dengan routing stabil dan billing Indonesia.",
    tags: ["29 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://router.nexaworks.web.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/nilovr-ai (40 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/nilovr-ai.svg",
    name: "NilovrAI",
    category: "API routers",
    description:
      "Bayar seperlunya. Satu API key untuk Claude, GPT, Gemini, DeepSeek, dan lainnya. Topup kredit via QRIS, tanpa langganan.",
    tags: ["40 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://nilovr.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/novita-ai (120 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/novita-ai.ico",
    name: "Novita AI",
    category: "API routers",
    description:
      "Novita AI provides 200+ Model APIs, custom deployment, GPU Instances, and Serverless GPUs. Scale AI, optimize performance, and innovate with ease and efficiency.",
    tags: ["120 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://novita.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/on-token (35 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/on-token.webp",
    name: "ON Token",
    category: "API routers",
    description:
      "Gateway LLM Indonesia. Satu API key sk-ont- untuk Claude Sonnet, DeepSeek V4 Flash, GLM Flash, hingga Gemini. Top up QRIS mulai Rp1.000, bonus awal Rp10.000, tanpa kartu kredit.",
    tags: ["35 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://ontoken.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/ollama (20 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/ollama.webp",
    name: "Ollama",
    category: "API routers",
    description:
      "Ollama is the easiest way to automate your work using open models, while keeping your data safe.",
    tags: ["20 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://ollama.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/openai (136 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/openai.webp",
    name: "OpenAI",
    category: "API routers",
    description:
      "We believe our research will eventually lead to artificial general intelligence, a system that can solve human-level problems.",
    tags: ["136 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://openai.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/opencode (76 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/opencode.webp",
    name: "OpenCode",
    category: "API routers",
    description:
      "OpenCode - The open source coding agent.",
    tags: ["76 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://opencode.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/orcarouter (197 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/orcarouter.webp",
    name: "OrcaRouter",
    category: "API routers",
    description:
      "One OpenAI-compatible AI gateway for production AI — adaptive routing, load balancing, guardrails, agent firewall, observability and governance across 200+ models.",
    tags: ["197 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://orcarouter.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/osiris (53 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/osiris.webp",
    name: "Osiris",
    category: "API routers",
    description:
      "Ship with Claude, GPT, Gemini, DeepSeek and more through OpenAI, Anthropic, or Responses APIs. One key, observable usage, resilient routing.",
    tags: ["53 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://osiris-code.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/routeopen (5 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/routeopen.webp",
    name: "RouteOpen",
    category: "API routers",
    description:
      "Build with multiple AI providers through one OpenAI-compatible API.",
    tags: ["5 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://hashneuron.space",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/routeway-ai (263 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/routeway-ai.webp",
    name: "Routeway",
    category: "API routers",
    description:
      "Access DeepSeek, Claude, Gemini, MiniMax, and 100+ AI models through one unified, OpenAI-compatible API.",
    tags: ["263 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://routeway.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/snifox-ai (10 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/snifox-ai.webp",
    name: "SnifoxAI",
    category: "API routers",
    description:
      "AI Gateway platform — unified API access to multiple AI models at competitive pricing",
    tags: ["10 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://snifoxai.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/solvatra-ai (5 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/solvatra-ai.webp",
    name: "Solvatra AI",
    category: "API routers",
    description:
      "Satu API untuk semua model AI. Routing, fallback otomatis, cache, guardrails, dan observability dalam satu gateway produksi.",
    tags: ["5 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://solvatra.web.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/sumopod (59 models, synced 2026-09-19).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/sumopod.ico",
    name: "SumoPod",
    category: "API routers",
    description:
      "Simplify container and application purchasing with SumoPod",
    tags: ["59 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://sumopod.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/tokenharbor (53 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/tokenharbor.webp",
    name: "Token Harbor",
    category: "API routers",
    description:
      "A secure, unified API gateway for the world's leading AI models — one OpenAI-compatible endpoint, encrypted keys, automatic failover, and transparent per-token pricing. Free access to DeepSeek V4 Flash and MiMo V2.5.",
    tags: ["53 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://tokenharbor.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/tokenrouter (140 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/tokenrouter.webp",
    name: "TokenRouter",
    category: "API routers",
    description:
      "A unified AI model hub for aggregation and distribution. TokenRouter converts leading LLMs into OpenAI, Claude, and Gemini compatible APIs with centralized management for individuals and enterprises.",
    tags: ["140 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://tokenrouter.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/unikey (44 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/unikey.webp",
    name: "UNIKEY",
    category: "API routers",
    description:
      "Unified AI API gateway and admin dashboard.",
    tags: ["44 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://www.getunikey.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/unorouter (259 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    name: "Unorouter",
    category: "API routers",
    description:
      "AI gateway. Bonus signup tidak tercatat — cek situs penyedia.",
    tags: ["259 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://unorouter.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/venice (118 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/venice.webp",
    name: "Venice",
    category: "API routers",
    description:
      "Try Venice.ai for free. Generate text, images, characters and video using private and unbiased AI.",
    tags: ["118 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://venice.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/z-ai (16 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/z-ai.webp",
    name: "Z.ai",
    category: "API routers",
    description:
      "Meet Z.ai, the AI assistant powered by GLM-5.3-Flash. Build websites, write code, handle long-horizon tasks, and get instant answers. Fast, smart, and reliable.",
    tags: ["16 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://z.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/zanslab (17 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/zanslab.webp",
    name: "ZansLab AI",
    category: "API routers",
    description:
      "AI gateway. Bonus signup tidak tercatat — cek situs penyedia.",
    tags: ["17 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://zanslab.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/zenmux (194 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/zenmux.webp",
    name: "ZenMux",
    category: "API routers",
    description:
      "The Enterprise LLM Platform: Unified API for 100+ AI models (Claude, GPT, Gemini, DeepSeek), intelligent routing, and AI Model Insurance that compensates for subpar output.",
    tags: ["194 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://zenmux.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/llm-kita (34 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/llm-kita.webp",
    name: "llm-kita",
    category: "API routers",
    description:
      "llm-kita adalah gateway API untuk AI generatif. Satu kunci untuk video generation, image generation, text-to-speech, dan speech-to-text. OpenAI-compatible, tanpa vendor lock-in.",
    tags: ["34 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://llm-kita.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/nusarouter (39 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/nusarouter.webp",
    name: "nusarouter",
    category: "API routers",
    description:
      "One endpoint, one key, one bill, and one price per model that does not move.",
    tags: ["39 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://nusarouter.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/xkiro (111 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/xkiro.webp",
    name: "xKiro",
    category: "API routers",
    description:
      "Access DeepSeek, Claude, ChatGPT, Gemini and hundreds more models — one API key, compatible with both OpenAI and Anthropic.",
    tags: ["111 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://xkiro.com",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/zrouter (22 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/zrouter.webp",
    name: "zrouter",
    category: "API routers",
    description:
      "zcloud resells GPT, Claude, Gemini & 30+ models at ~5% of official pricing. One OpenAI-compatible API key, prepaid token plans from $1, crypto & QRIS payments.",
    tags: ["22 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://zrouter.dev",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/vikey (25 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/vikey.svg",
    name: "Vikey AI",
    category: "API routers",
    description:
      "AI gateway murah dengan model lengkap",
    tags: ["25 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://vikey.ai",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/kenari (80 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/kenari.webp",
    name: "Kenari",
    category: "API routers",
    description:
      "Gateway AI lokal Indonesia",
    tags: ["80 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://kenari.id",
    codeParam: "ref",
  },
  {
    // aigratis.my.id/provider/openrouter (443 models, synced 2026-09-21).
    // No signup-bonus info in source; verification none, rating 0.
    favicon: "/favicons/aigratis/openrouter.webp",
    name: "OpenRouter",
    category: "API routers",
    description:
      "Router ke ratusan model, harga transparan",
    tags: ["443 models", "bonus unlisted"],
    models: [],
    modelType: "wide",
    login: "any",
    verification: "none",
    creditUsd: null,
    rating: 0,
    featured: false,
    baseUrl: "https://openrouter.ai",
    codeParam: "ref",
  },
];

/**
 * A provider with its resolved referral-code attached.
 * @typedef {ProviderDef & { code: string }} Provider
 */

/**
 * Build the full signup URL for a provider by appending its code param from
 * REFERRAL_CODES. All param-shape knowledge (aff= / ref= / invite_code=) lives
 * here.
 * @param {ProviderDef} p
 * @returns {string}
 */
export function buildSignupUrl(p) {
  const code = REFERRAL_CODES[p.name] ?? "";
  if (!code) return p.baseUrl;

  // Splice the encoded query onto the original baseUrl string. Do not rebuild
  // this with `new URL()`: it normalises the path and appends a trailing slash
  // to bare domains, which turns "https://x.com" into "https://x.com/" and
  // breaks providers whose signup page sits at the root.
  const query = new URLSearchParams({ [p.codeParam]: code }).toString();
  const joiner = p.baseUrl.includes("?") ? "&" : "?";
  return `${p.baseUrl}${joiner}${query}`;
}

/** Active providers, code attached. Ranked: bonus-carrying first by rating, unlisted last. */
export const activeProviders = PROVIDERS.map((p) => ({
  ...p,
  code: REFERRAL_CODES[p.name] ?? "",
})).sort((a, b) => {
  const au = a.verification === "none" ? 1 : 0;
  const bu = b.verification === "none" ? 1 : 0;
  if (au !== bu) return au - bu;
  return b.rating - a.rating;
});

/** Distinct categories, for the filter control deck. */
export function categories() {
  return [...new Set(activeProviders.map((p) => p.category))].sort();
}

/** Distinct model families, for the model filter in the control deck. */
export function modelTypes() {
  return [...new Set(activeProviders.map((p) => p.modelType))].sort();
}

/**
 * Total stated signup credit in dollars. Credit that is not a dollar figure
 * (tokens, credits, disputed amounts) is excluded, so the number never mixes
 * units. Derived from each provider's creditUsd at render time.
 */
export const totalCreditUsd = PROVIDERS.reduce(
  (sum, p) => sum + (p.creditUsd ?? 0),
  0,
);
