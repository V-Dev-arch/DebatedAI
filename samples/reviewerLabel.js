/**
 * DebatedAI — human-friendly reviewer labels (public sample)
 *
 * Reviewers are stored as NVIDIA model IDs (e.g. "meta/llama-3.3-70b-instruct").
 * This helper turns those IDs into readable names for the UI.
 *
 * Live app: https://devtool.freedev.app
 */

const LEGACY = {
  lightning: "NVIDIA Nemotron 3.5 Lightning",
  ultra: "NVIDIA Nemotron 3 Ultra",
  laguna: "Poolside Laguna XS 2.1",
  hy3: "Tencent Hy3",
  minimax: "MiniMax M2.5",
  oss: "OpenAI gpt-oss-120b",
  super: "NVIDIA Nemotron 3 Super",
  nemotron: "NVIDIA Nemotron",
  deepseek: "DeepSeek",
  claude: "Claude",
  codex: "Codex"
};

export function reviewerLabel(reviewer) {
  if (!reviewer) return "an NVIDIA reviewer";
  if (LEGACY[reviewer]) return LEGACY[reviewer];

  const name = String(reviewer).split("/").pop();
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map((w) =>
      /^\d+(\.\d+)?[bkm]$/i.test(w)
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");
}
