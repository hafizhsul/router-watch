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
 * @typedef {{ name: string, category: string, description: string, tags: string[], rating: number, featured: boolean, baseUrl: string, codeParam: string }} ProviderDef
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
    rating: 3.5,
    featured: true,
    baseUrl: "https://api.bluesminds.com/register",
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
    rating: 2.6,
    featured: false,
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
