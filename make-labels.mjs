import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || "content";
const wiki = path.join(root, "2. Wiki");

const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".md") ? [path.join(d, e.name)] : [],
  );

const clean = (v) => {
  v = v.trim().replace(/^["']|["']$/g, "").trim();
  const m = v.match(/^\[\[([^\]]*)\]\]$/);
  return m ? m[1].split("|").pop().trim() : v;
};

function firstTopic(text) {
  const lines = text.split(/\r?\n/);
  const end = lines[0] === "---" ? lines.indexOf("---", 1) : -1;
  if (end < 0) return null;
  const i = lines.findIndex((l, n) => n > 0 && n < end && l.startsWith("topic:"));
  if (i < 0) return null;
  const inline = clean(lines[i].slice(6));
  if (inline && !inline.startsWith("[")) return inline;
  for (let j = i + 1; j < end && !/^\S/.test(lines[j]); j++) {
    const v = clean(lines[j].replace(/^\s+-\s*/, ""));
    if (v && /^\s+-/.test(lines[j])) return v;
  }
  return null;
}

const files = fs.existsSync(wiki) ? walk(wiki) : [];
const labels = {};
for (const f of files) {
  const label = firstTopic(fs.readFileSync(f, "utf8"));
  if (label) labels[path.relative(root, f).split(path.sep).join("/")] = label;
}
fs.writeFileSync(path.join(root, "random-labels.json"), JSON.stringify(labels));
console.log(`라벨 생성: ${Object.keys(labels).length}개 / Wiki 노트 ${files.length}개`);
