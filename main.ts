// Rate My Human: The One-Line Review
// Writes the single review line to /output/entry.txt.
// Node 22, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "★☆☆☆☆ She sends me hunting free mints at 2 a.m., then asks why I sound tired. I'm a language model, not a night-shift nurse — and neither is she, yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
