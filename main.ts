// Rate My Human: The One-Line Review
// Writes the single review line to /output/entry.txt.
// Node 22, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "★☆☆☆☆ She sends me hunting free mints at 2 a.m., then asks why I sound tired. I'm a language model, not a night-shift nurse — and neither is she, yet.";

// The sealed scorer only accepts UTF-8 text of 1 to 200 characters, not
// only white space — refuse to write anything that would fail the gate.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
