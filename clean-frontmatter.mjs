import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || "content";
let changed = 0;
let failed = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".md")) {
      try { clean(p); } catch (err) { failed++; }
    }
  }
}

function isEmptyItem(line) {
  return /^\s*-\s*(""|'')?\s*$/.test(line);
}

function clean(file) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.startsWith("---")) return;
  const lines = text.split("\n");
  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if (/^---\s*$/.test(lines[i])) { end = i; break; }
  }
  if (end < 0) return;

  const out = [lines[0]];
  let i = 1;
  while (i < end) {
    const m = lines[i].match(/^([^\s#:\-][^:]*):\s*(.*)$/);
    if (!m) { out.push(lines[i]); i++; continue; }
    let j = i + 1;
    const block = [];
    while (j < end && (/^\s+\S/.test(lines[j]) || /^-(\s|$)/.test(lines[j]) || lines[j].trim() === "")) {
      block.push(lines[j]);
      j++;
    }
    const v = m[2].trim();
    const inlineEmpty = ["", "[]", "null", "~", '""', "''"].includes(v);
    const meaningful = block.filter((l) => l.trim() !== "" && !isEmptyItem(l));
    if (inlineEmpty && meaningful.length === 0) {
      i = j; // 빈 속성: 삭제
    } else {
      out.push(lines[i]);
      for (const b of block) out.push(b);
      i = j;
    }
  }
  for (let k = end; k < lines.length; k++) out.push(lines[k]);

  const result = out.join("\n");
  if (result !== text) {
    fs.writeFileSync(file, result);
    changed++;
  }
}

walk(root);
console.log("빈 속성 정리: " + changed + "개 파일 수정, 실패 " + failed + "개");
