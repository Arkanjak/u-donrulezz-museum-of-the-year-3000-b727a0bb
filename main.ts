import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "Cookie consent banner, c. 2024. Millions agreed to it daily, instantly, without reading a word: the era's only unanimous literature.";

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, label, "utf8");
