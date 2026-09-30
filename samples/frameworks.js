/**
 * DebatedAI — framework catalog (public sample)
 *
 * This mirrors the high-level framework list shown in the build wizard.
 * It is intentionally free of proprietary generation logic.
 *
 * Live app: https://devtool.freedev.app
 */

export const FRAMEWORKS = [
  { id: "nextjs", name: "Next.js", blurb: "React framework, SSR + API routes", icon: "▲" },
  { id: "node", name: "Node.js", blurb: "Backend service / REST API", icon: "⬢" },
  { id: "javascript", name: "JavaScript", blurb: "Plain HTML/CSS/JS site", icon: "JS" },
  { id: "react", name: "React", blurb: "Single-page app (Vite + React)", icon: "⚛" },
  { id: "android", name: "Android App", blurb: "Kotlin + Jetpack Compose", icon: "▶" },
  { id: "php", name: "PHP", blurb: "Classic server-rendered PHP app", icon: "🐘" },
  { id: "python", name: "Python", blurb: "Flask / FastAPI backend", icon: "PY" },
  { id: "vue", name: "Vue", blurb: "Vue 3 single-page app", icon: "V" }
];

export const IMPORT_MODES = [
  {
    id: "zip",
    title: "Zip archive",
    blurb: "Get the whole project bundled as a single .zip you can unzip anywhere."
  },
  {
    id: "raw",
    title: "Raw unpacked files",
    blurb: "Get each file individually, and preview & edit them in Code Studio first."
  }
];
