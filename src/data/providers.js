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
    rating: 3.5,
    featured: true,
    baseUrl: "https://api.bluesminds.com/sign-up",
    codeParam: "aff",
  },
  {
    // No independent source found during the 2026-08-29 research pass. Rating
    // kept as-is rather than guessed. Re-verify before adjusting.
    name: "Xiaomi Mimo",
    category: "Official Router",
    description:
      "Get $3 credit on register. Refer and earn $3 per person, up to 30 people. Backed by an official vendor domain rather than a reseller.",
    tags: ["Refer and earn $3", "up to 30 people", "unverified"],
    modelType: "wide",
    login: "any",
    verification: "unverified",
    creditUsd: 3,
    rating: 4,
    featured: true,
    baseUrl: "https://platform.xiaomimimo.com",
    codeParam: "ref",
  },
  {
    // Relay, not a general gateway: it rejects requests that do not look like
    // they came from a coding agent ("401 unauthorized client detected"), so
    // the credits cannot be used in ordinary chat clients. That restriction is
    // the main caveat and is reflected in the rating despite the large credit.
    name: "Agent Router",
    category: "API routers",
    description:
      "$100-$200 credit on GitHub signup depending on the referral link. Coding agents only: requests must come from Claude Code, Codex, Cline and similar, not a chat client.",
    tags: ["GitHub login only", "coding agents only", "$100-$200"],
    modelType: "wide",
    login: "github",
    verification: "none",
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
    name: "GoRouter",
    category: "API routers",
    description:
      "Register with old (before 2026) GitHub account and get $70. Only Anthropic models.",
    tags: ["Refer and get 40$", "70$ on sign up", "Github only"],
    modelType: "anthropic",
    login: "github",
    verification: "none",
    creditUsd: 70,
    rating: 4.1,
    featured: true,
    baseUrl: "https://gorouter.app/sign-up",
    codeParam: "aff",
  },
  {
    name: "Bai",
    category: "API routers",
    description:
      "Register and get 300k tokens. Limited models in free plan but still good.",
    tags: ["Get 300k tokens with my link", "glm-5.3", "Google login", "Crypto"],
    modelType: "wide",
    login: "google",
    verification: "none",
    creditUsd: null,
    rating: 4.1,
    featured: true,
    baseUrl: "https://chat.b.ai/chat",
    codeParam: "invite_code",
  },
  {
    name: "TaBiAi",
    category: "API routers",
    description:
      "Register and get $120. Only Anthropic models. Sign up with GitHub only.",
    tags: ["120$ on signup", "Github Signup"],
    modelType: "anthropic",
    login: "github",
    verification: "none",
    creditUsd: 120,
    rating: 4.3,
    featured: true,
    baseUrl: "https://tabitoken.com/sign-up",
    codeParam: "aff",
  },
  {
    name: "JustDoWork",
    category: "API routers",
    description:
      "Register and get $100. Only Anthropic models. $20 daily check-in.",
    tags: ["100$ on signup", "Github Signup only"],
    modelType: "anthropic",
    login: "github",
    verification: "none",
    creditUsd: 100,
    rating: 4.2,
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
