-- DebatedAI — high-level data model outline (public sample)
-- Not production SQL. No secrets. Illustrates the concepts only.
-- Live app: https://devtool.freedev.app

-- Authenticated users are identified via Firebase UID.
-- Build metadata and usage live in Postgres (Supabase).

-- builds
--   id, user_id, framework, import_mode, prompt_summary,
--   status, reviewer_model_id, verdict, created_at, ...

-- build_usage
--   user_id, usage_date (UTC), build_count
--   Enforces the daily free-tier limit server-side.

-- github_links
--   user_id, github_username, linked_at
--   Powers “Save to GitHub”.

-- Optional future (BYOK era):
-- user_api_keys (encrypted) — user-supplied Z.ai / NVIDIA keys
