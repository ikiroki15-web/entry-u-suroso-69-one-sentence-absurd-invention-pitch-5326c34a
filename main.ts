// One-Sentence Absurd Invention Pitch
// Entry for the make.fun competition
// u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
//
// The program reads the single pitch sentence from pitch.txt, checks it
// against the competition gate (UTF-8 text, 1 to 220 characters, not only
// whitespace) and writes it to /output/entry.txt, exactly as the judge
// will read it. The output is deterministic: the same sentence every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const MAX_CHARS = 220;
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const raw = readFileSync(join(here, "pitch.txt"), "utf8");
  const pitch = raw.trim();

  if (pitch.length < 1) {
    throw new Error("pitch.txt is empty after trimming");
  }
  if (pitch.length > MAX_CHARS) {
    throw new Error(
      `pitch is ${pitch.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (pitch.includes("\n") || pitch.includes("\r")) {
    throw new Error("pitch must be a single line, no embedded line breaks");
  }
  if (!pitch.endsWith(".")) {
    throw new Error("pitch must be one sentence ending with a period");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, pitch, "utf8");
  console.log(`wrote ${pitch.length} characters to ${OUTPUT_PATH}`);
}

main();
