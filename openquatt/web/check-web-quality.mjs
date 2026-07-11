import { gzipSync } from "node:zlib";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webDir = path.dirname(fileURLToPath(import.meta.url));
const sourceRoots = [path.join(webDir, "js", "src"), path.join(webDir, "css", "src")];
const mojibakePattern = /â€|Ã.|Â(?:\s|\u00a0)/u;
const budgets = [
  { file: "js/openquatt-app.js", raw: 792_000, gzip: 213_000 },
  { file: "css/openquatt-app.css", raw: 255_000, gzip: 42_000 },
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(entryPath) : [entryPath];
  }));
  return files.flat();
}

const sourceFiles = (await Promise.all(sourceRoots.map(collectFiles))).flat();
const encodingFailures = [];
for (const sourceFile of sourceFiles) {
  const source = await readFile(sourceFile, "utf8");
  if (mojibakePattern.test(source)) {
    encodingFailures.push(path.relative(webDir, sourceFile));
  }
}

const budgetFailures = [];
for (const budget of budgets) {
  const contents = await readFile(path.join(webDir, budget.file));
  const sizes = { raw: contents.byteLength, gzip: gzipSync(contents).byteLength };
  for (const kind of ["raw", "gzip"]) {
    if (sizes[kind] > budget[kind]) {
      budgetFailures.push(`${budget.file} ${kind}: ${sizes[kind]} > ${budget[kind]} bytes`);
    }
  }
}

if (encodingFailures.length || budgetFailures.length) {
  const failures = [
    ...encodingFailures.map((file) => `${file}: vermoedelijke mojibake`),
    ...budgetFailures,
  ];
  throw new Error(`Web quality check failed:\n- ${failures.join("\n- ")}`);
}

console.log(`Web quality ok: ${sourceFiles.length} source files and ${budgets.length} bundle budgets`);
