/**
 * Router Watch: provider directory data.
 *
 * ########################################################################
 *  REFERRAL CODES - SINGLE EDITABLE POINT (one place, no hardcoding)
 * ########################################################################
 * Drop your own referral codes into REFERRAL_CODES below. Nothing else needs
 * editing. Each key matches a provider by `name`; the provider's signup URL is
 * built with `yourCode` at render time (@see buildSignupUrl).
 *
 * Original codes were the prior site owner's, so they are intentionally NOT
 * carried over. Fill these in: <YOUR_CODE>
 * ########################################################################
 */

/**
 * @typedef {{ [providerName: string]: string }} ReferralCodes
 */
/** @type {ReferralCodes} */
export const REFERRAL_CODES = {
  // Bluesminds: https://api.bluesminds.com/register?aff=<YOUR_CODE>
  "Bluesminds": "",
  // Xiaomi Mimo: https://platform.xiaomimimo.com?ref=<YOUR_CODE>
  "Xiaomi Mimo": "",
  // Agent Router: https://agentrouter.org/register?aff=<YOUR_CODE>
  "Agent Router": "",
  // See Kai: https://seekai.cc/sign-up?aff=<YOUR_CODE>
  "See Kai": "",
  // Hcnsec: https://api.hcnsec.cn/register?aff=<YOUR_CODE>
  "Hcnsec": "",
  // GoRouter: https://gorouter.app/sign-up?aff=<YOUR_CODE>
  "GoRouter": "",
  // Bai: https://chat.b.ai/chat?invite_code=<YOUR_CODE>
  "Bai": "",
  // TaBiAi: https://tabitoken.com/sign-up?aff=<YOUR_CODE>
  "TaBiAi": "",
  // JustDoWork: https://api.justwoker.icu/sign-up?aff=<YOUR_CODE>
  "JustDoWork": "",
};

/**
 * Base signup URL per provider, WITHOUT query string, plus the query param name
 * that service expects. The code itself comes from REFERRAL_CODES via the
 * provider `name`. Keeping param shape (aff= / ref= / invite_code=) here lets
 * each service keep its own convention.
 * @typedef {{ name: string, category: string, description: string, tags: string[], rating: number, featured: boolean, baseUrl: string, codeParam: string }} ProviderDef
 */

/** @type {ProviderDef[]} */
export const PROVIDERS = [
  {
    name: "Bluesminds",
    category: "API routers",
    description:
      "100$ for Registering, Models don't works most of the time.",
    tags: ["100$"],
    rating: 2.1,
    featured: true,
    baseUrl: "https://api.bluesminds.com/register",
    codeParam: "aff",
  },
  {
    name: "Xiaomi Mimo",
    category: "Official Router",
    description:
      "Get 3$ credit on register. Official site, mimo. Refer and earn 3$ per person, up to 30 people, real models.",
    tags: ["Refer and earn 3$", "upto 30 people", "Real Models"],
    rating: 4,
    featured: true,
    baseUrl: "https://platform.xiaomimimo.com",
    codeParam: "ref",
  },
  {
    name: "Agent Router",
    category: "API routers",
    description:
      "Sign up to receive $200 and invite others to receive $100. Opus-5, Sol-5.6.",
    tags: ["GitHub login only", "best free models", "dail check in"],
    rating: 4.8,
    featured: true,
    baseUrl: "https://agentrouter.org/register",
    codeParam: "aff",
  },
  {
    name: "See Kai",
    category: "API routers",
    description:
      "Sign up to receive $200. Fable, Sol-5.6.",
    tags: ["Only chat models kind of useless", "200$", "Latest Models"],
    rating: 2.2,
    featured: true,
    baseUrl: "https://seekai.cc/sign-up",
    codeParam: "aff",
  },
  {
    name: "Hcnsec",
    category: "API routers",
    description:
      "Register and get $2000. Only Chinese models.",
    tags: ["Chinese Models only", "200$"],
    rating: 4,
    featured: true,
    baseUrl: "https://api.hcnsec.cn/register",
    codeParam: "aff",
  },
  {
    name: "GoRouter",
    category: "API routers",
    description:
      "Register with old (before 2026) GitHub account and get $70. Only Anthropic models.",
    tags: ["Refer and get 40$", "70$ on sign up", "Github only"],
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
    rating: 4.2,
    featured: true,
    baseUrl: "https://api.justwoker.icu/sign-up",
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
  const parsed = new URL(p.baseUrl);
  const code = REFERRAL_CODES[p.name] ?? "";
  if (code) parsed.searchParams.set(p.codeParam, code);
  return parsed.toString();
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
