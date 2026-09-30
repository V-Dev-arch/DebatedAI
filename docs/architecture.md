# DebatedAI — Architecture Notes

> Public design notes. Implementation details of the generation and review pipeline remain private.

## Product thesis

Single-model code generation optimizes for speed.  
DebatedAI optimizes for **challenged output**.

Every build is produced by one model and then examined by a different model drawn from a large pool. The second model can approve, request changes, or apply limited patches. The user sees both the artifact and the review context.

## Stack

| Layer | Technology |
|-------|------------|
| App | Next.js 14 (App Router), React 18, Tailwind |
| Auth & files | Firebase Auth + Storage |
| Database | Supabase (Postgres) |
| Builder | Z.ai API — GLM 4.7 Flash |
| Reviewers | NVIDIA API — auto-discovered chat models |
| Editor | Monaco (`@monaco-editor/react`) |
| GitHub | Octokit (create repo + push) |
| Hosting | Vercel |

## Core flow

1. User authenticates (Google / GitHub / email).
2. Wizard: framework → export mode (zip / raw) → prompt (+ optional text attachments).
3. Server enforces daily build limit (server-side, per authenticated user).
4. Builder model generates project files.
5. Reviewer model (random from eligible NVIDIA models) evaluates output.
6. Result + verdict stored; user opens Code Studio or downloads.
7. Optional: “Save to GitHub” creates a repo and pushes files.

## Design principles

- **Separation of roles** — builder and reviewer are never the same model family instance for a given build.
- **Honest limits** — usage is tracked in the database, not in the browser.
- **Progressive disclosure** — landing → wizard → debate result → studio.
- **Export first** — you own the files (zip, raw, or GitHub).

## What is intentionally not public

- Exact system prompts and tool schemas for generation/review
- Internal retry and scoring logic
- Production environment configuration
- Full application source of the live service

This repository exists to explain the product, share safe samples, and track the public roadmap (including **BYOK**).
