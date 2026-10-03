<p align="center">
  <img src="docs/banner.svg" alt="DebatedAI" width="720" />
</p>

<h1 align="center">DebatedAI</h1>

<p align="center">
  <strong>The AI workspace where Artificial Intelligence debates — just for you.</strong><br/>
  Describe an app. Watch two models build and challenge it. Ship with confidence.
</p>

<p align="center">
  <a href="https://debatedai.vercel.app"><img src="https://img.shields.io/badge/Live_App-debatedai.vercel.app-7C3AED?style=for-the-badge&logo=vercel&logoColor=white" alt="Live App" /></a>
  <a href="https://devtool.freedev.app/docs"><img src="https://img.shields.io/badge/Docs-Read_the_docs-111827?style=for-the-badge" alt="Docs" /></a>
  <img src="https://img.shields.io/badge/Status-Public_Beta-10B981?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/BYOK-Coming_Soon-F59E0B?style=for-the-badge" alt="BYOK" />
</p>

---

## Why DebatedAI?

Most AI coding tools give you **one model’s first draft**.

DebatedAI is different.

1. **Builder** — Z.ai’s GLM 4.7 Flash turns your prompt into a real project  
2. **Reviewer** — A second model, picked at random from NVIDIA’s catalog, reviews, challenges, and may patch the build  
3. **You** — Only then do you see the result, the verdict, and the debate trail

That second opinion is the **debate**. It’s not a chatbot. It’s a workspace that refuses to ship unchallenged code.

> **Live product:** [https://debatedai.vercel.app](https://debatedai.vercel.app)  
> Free tier · 2 builds / day · No credit card

---

## Features

| Feature | What you get |
|--------|----------------|
| **Prompt → Project** | Next.js, React, Vue, Node, Python, PHP, Android (Kotlin), plain JS |
| **Dual-model debate** | Builder + random NVIDIA reviewer (never the same model) |
| **Code Studio** | File tree, tabs, Monaco editor, live preview |
| **Export** | Zip download or raw files |
| **Save to GitHub** | One click → new repo on your linked account |
| **Auth** | Google, GitHub, Email |
| **Fair limits** | Server-side daily build tracking (not client-side) |

---

## How it works

```text
┌─────────────┐     ┌──────────────────────┐     ┌─────────────────┐
│  Your prompt │ ──▶ │  GLM 4.7 Flash       │ ──▶ │  NVIDIA pool    │
│  + framework │     │  (builder)           │     │  (random model) │
└─────────────┘     └──────────────────────┘     └────────┬────────┘
                                                          │
                     ┌────────────────────────────────────┘
                     ▼
              Approve / Patch / Notes
                     │
                     ▼
              Code Studio + Download
```

- The reviewer is **never** the builder.
- If a reviewer is unavailable, another is tried (up to a small retry budget).
- You always see which model reviewed the build.

---

## Supported frameworks

| ID | Name | Notes |
|----|------|--------|
| `nextjs` | Next.js | React + SSR + API routes |
| `react` | React | Vite + React SPA |
| `vue` | Vue | Vue 3 SPA |
| `node` | Node.js | Backend / REST API |
| `python` | Python | Flask / FastAPI style |
| `php` | PHP | Classic server-rendered |
| `javascript` | JavaScript | Plain HTML/CSS/JS |
| `android` | Android | Kotlin + Jetpack Compose |

---

## 🔑 BYOK — Bring Your Own Keys *(releasing soon)*

We’re shipping **Bring Your Own Keys** so power users and teams can:

- Plug in their own AI API keys  
- Remove shared free-tier limits  
- Keep full control of cost, rate limits, and model access  
- Still get the same dual-model debate pipeline  

**Status:** In active development · Public release coming soon  
Watch this repo and the [live app](https://devtool.freedev.app) for the announcement.

---

## Architecture (high level)

```text
Next.js 14 (App Router)
├── Firebase          → Auth + Storage
├── Supabase          → Postgres (builds, usage, metadata)
├── Z.ai API          → Builder (GLM 4.7 Flash)
├── NVIDIA API        → Reviewer pool (auto-discovered models)
├── Monaco Editor     → Code Studio
└── Octokit           → “Save to GitHub”
```

Deploy target: **Vercel**.

This public repository is the **product presence & documentation** home.  
The production application runs at [devtool.freedev.app](https://devtool.freedev.app).

---

## Open samples in this repo

Safe, illustrative snippets that show how DebatedAI thinks — **not** the full proprietary pipeline:

| Path | Purpose |
|------|---------|
| [`samples/frameworks.js`](samples/frameworks.js) | Framework catalog used by the wizard |
| [`samples/reviewerLabel.js`](samples/reviewerLabel.js) | Human-friendly labels for reviewer model IDs |
| [`samples/schema.outline.sql`](samples/schema.outline.sql) | High-level data model (no secrets, no production SQL) |
| [`docs/architecture.md`](docs/architecture.md) | Deeper product & design notes |

No API keys, no generation prompts, no review logic, and no private routes are published here.

---

## Quick links

- **Product:** [https://devtool.freedev.app](https://devtool.freedev.app)  
- **Docs (in-app):** [https://devtool.freedev.app/docs](https://devtool.freedev.app/docs)  
- **Author:** [V-Dev-arch](https://github.com/V-Dev-arch)  
- **Portfolio:** [Kalp-porti-folio.lovable.app](https://Kalp-porti-folio.lovable.app)

---

## Roadmap (public)

- [x] Dual-model build + review pipeline  
- [x] Multi-framework support  
- [x] Code Studio + GitHub export  
- [x] Fair server-side daily limits  
- [ ] **BYOK (Bring Your Own Keys)** — *releasing soon*  
- [ ] Team workspaces  
- [ ] More frameworks & language packs  
- [ ] Public debate history (opt-in)

---

## License

Documentation and sample files in this repository are released under the [MIT License](LICENSE).

The live DebatedAI application and its proprietary generation/review pipeline remain closed source.

---

<p align="center">
  <sub>Built with care by an independent developer · Ship code that has already been argued over.</sub>
</p>
