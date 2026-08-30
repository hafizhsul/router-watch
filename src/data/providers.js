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
 * @typedef {{ name: string, category: string, description: string, tags: string[], rating: number, featured: boolean, baseUrl: string, codeParam: string, modelType: string, login: string, verification: string, creditUsd: number | null }} ProviderDef
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
    modelType: "anthropic",
    login: "github",
    verification: "unverified",
    creditUsd: 100,
    rating: 3.4,
    featured: true,
    baseUrl: "https://api.justwoker.icu/register",
    codeParam: "aff",
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

/** Active providers, code attached. Use this everywhere. */
export const activeProviders = PROVIDERS.map((p) => ({
  ...p,
  code: REFERRAL_CODES[p.name] ?? "",
}));

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
