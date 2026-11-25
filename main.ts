// Invent a Word We Need.
//
// Coin one new English word and define it in a single clear line of
// at most 140 characters. The word should fill a real gap, the
// definition should land in one reading, and the word itself should
// be sayable, spellable and memorable. This program writes that line
// to entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const coinage =
  "scrollnesia (n.): the complete inability to recall a single thing from an hour of scrolling.";

// The gate: one line, 1 to 140 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...coinage].length;
if (size < 1 || size > 140) {
  throw new Error(`coinage must be 1 to 140 characters, got ${size}`);
}
if (coinage.trim() !== coinage || coinage.includes("\n")) {
  throw new Error("coinage must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), coinage, "utf8");
