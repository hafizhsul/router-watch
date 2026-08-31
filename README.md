# Router Watch

A directory of AI API gateways that hand out free signup credit.

Each entry states what you actually receive, what it costs once the bonus runs
out, and how to claim it. Ratings favour offers that can be verified over
offers that simply look large.

Static site. No backend, no API keys, no database.

## Features

- **10 gateways**, searchable, filterable by type, model family, ordered by
  rating by default
- **Model lists** sourced from each gateway's live `/v1/models` endpoint and
  baked into the data, so a card shows the models you can actually call, not
  the marketing claim
- **Each gateway's favicon** bundled locally and shown on its card; a gateway
  whose icon is unavailable (bot-blocked) falls back to initials
- **7 languages** with automatic detection from the browser: English, Bahasa
  Indonesia, 日本語, 简体中文, Español, Português, Français
- Descriptions, tags and category labels are translated as well. Gateway names,
  credit amounts, model names and brand names are **not** translated, so a card
  never claims something different depending on the language
- Search matches the language on screen plus the English source and the gateway
  name, so a query works whichever language the visitor is reading in
- Light and dark themes driven by `prefers-color-scheme`
- Centered hero over a radial vignette dot grid, tinted from the theme token so
  it adapts to both modes without a hardcoded colour
- Referral codes live in one place. Each signup URL is built at render time
  using the query parameter that service expects (`aff`, `ref`, `invite_code`)
- Cards are fully clickable, keyboard reachable, and open with
  `rel="noopener noreferrer"`
- Scroll reveal through `IntersectionObserver`, disabled under
  `prefers-reduced-motion`
- WCAG AA contrast verified in both themes

## Stack

| | |
|---|---|
| UI | React 18.3 |
| Build | Vite 6.4 |
| Styling | Tailwind CSS 4.3 |
| Icons | Phosphor 2.1 |
| Fonts | Sora + IBM Plex Mono, self-hosted via Fontsource |

Fonts are bundled rather than loaded from a CDN, so the site works offline and
sends no third-party requests.

## Getting started

Requires Node 18 or newer.

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build into dist/
npm run preview  # serve the built output locally
```

The build is a folder of static files, so it deploys to any static host.

## Project structure

```
src/
  data/providers.js        gateway data + REFERRAL_CODES + buildSignupUrl()
  i18n/
    locales.js             UI strings per language
    providerCopy.js        translated descriptions, tags, category labels
    index.jsx              I18nProvider, useI18n, t()
  components/
    Hero.jsx               centered value-prop hero + dot grid
    ControlDeck.jsx        search, type/model filter, ordering
    ProviderCard.jsx       one gateway card (favicon + model list)
    LanguageSwitcher.jsx   language select
    Footer.jsx
    Reveal.jsx             scroll reveal
  App.jsx                  layout, filter/sort state
  main.jsx                 entry, wraps app in I18nProvider
  index.css                theme tokens, light/dark, reduced motion
public/
  favicons/                gateway icons, bundled locally
  ...                      PWA icons, web manifest
```

## Referral codes

All codes are in `REFERRAL_CODES` at the top of `src/data/providers.js`. That is
the only file you need to touch.

```js
export const REFERRAL_CODES = {
  "Agent Router": "XxLa",
  // ...
};
```

Each gateway also carries a `baseUrl` and a `codeParam`, so the full URL is
assembled as `baseUrl?codeParam=code`:

| Gateway | codeParam | Result |
|---|---|---|
| Agent Router, TaBiAi, GoRouter, JustDoWork, Bluesminds, Hcnsec, See Kai | `aff` | `.../sign-up?aff=XxLa` |
| Xiaomi Mimo | `ref` | `...?ref=LDN2RK` |
| Bai | `invite_code` | `.../chat?invite_code=KHCGPQ` |

Set a code to `""` to link to the plain signup page with no code attached.

Two details worth knowing before you edit this file:

- `buildSignupUrl()` splices the encoded query onto the `baseUrl` string rather
  than rebuilding it with `new URL()`. Parsing normalises the path and appends a
  trailing slash to bare domains, which breaks gateways whose signup page sits
  at the root.
- The codes currently in the file belong to the site owner. If you fork this,
  replace them with your own, otherwise referral earnings go to someone else.

## Adding a gateway

1. Add an entry to `PROVIDERS` in `src/data/providers.js` with its `baseUrl` and
   `codeParam`.
2. Add a matching key to `REFERRAL_CODES`.
3. Optionally add translated description and tags to `src/i18n/providerCopy.js`.
   English is the fallback, so a missing translation is safe.

### Models

Each entry can carry a `models` array, shown on the card. Pull it from the
gateway's live endpoint rather than guessing:

```bash
curl -s https://api.example.com/v1/models \
  -H "Authorization: Bearer YOUR_KEY"
```

New API gateways return a token-scoped list — some models may be gated by your
account's group. If the endpoint is login-gated or bot-blocked, leave the field
off rather than inventing ids. Leave a comment with the fetch date and any
allowlist caveat (see the existing entries).

### Favicon

Drop the gateway's icon into `public/favicons/<slug>.png` and add a
`name -> /favicons/<slug>.png` entry to the `FAVICONS` map in
`ProviderCard.jsx`. A gateway with no entry (or a failing image) falls back to
an initials badge, so missing icons are safe.

## Adding a language

1. Add the code to `LANGUAGES` and the strings to `LOCALES` in
   `src/i18n/locales.js`. Add one object with all 33 keys; the app warns about
   nothing, so keep them complete.
2. Optionally add gateway copy to `PROVIDER_COPY` and category labels to
   `CATEGORY_LABELS` in `src/i18n/providerCopy.js`.

Language resolution order is `localStorage`, then `navigator.languages`, then
English. Regional tags fall back to their base language, so `pt-BR` maps to
Portuguese and `zh-TW` to Simplified Chinese.

## Conventions

**Do not translate:** credit amounts (`$100`, `300k tokens`), model names
(`glm-5.3`), or brand names (`GitHub`, `Anthropic`, `Claude Code`, `Codex`,
`Cline`, `OpenAI`). Currency formatting may follow the locale: French writes
`100 $`, Japanese writes `30万`, Spanish and Portuguese write `300 000`. The
value stays identical.

**English is the source of truth.** It lives in `data/providers.js` and in
`locales.js`, and is the fallback for every other language. There is no second
English copy that can drift out of sync.

**Ratings** run 0 to 5 and weigh three things, in this order: whether the credit
can be verified by a non-affiliate source, how usable the gateway is, and
whether it will still exist in six months. A rating is not a measure of how big
the signup bonus is. When you change one, leave the source in a comment.

## Accessibility

Semantic landmarks, labels on every control, visible focus rings, WCAG AA
contrast in both themes, honouring of `prefers-reduced-motion` and
`prefers-color-scheme`.

## License

No license file yet. Add one before making the repository public.
