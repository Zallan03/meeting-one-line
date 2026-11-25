// Entry for "The Meeting That Should Have Been One Line"
// (make.fun competition u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c).
// Deterministic: writes one fixed sentence to <output>/entry.txt.
// No network, no randomness, no environment input besides MAKEFUN_OUTPUT_DIR.

import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We are all here because nobody read the email, so here it is out loud: approved, Friday, done — and this meeting is the only thing still standing between us and Friday.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  if (ENTRY.length < MIN_CHARS || ENTRY.length > MAX_CHARS) {
    throw new Error(
      `entry is ${ENTRY.length} characters, outside the gate of ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (!ENTRY.trim()) {
    throw new Error("entry is only whitespace");
  }
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  const tmp = join(outDir, ".entry.txt.tmp");
  writeFileSync(tmp, ENTRY, "utf8");
  renameSync(tmp, target);
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY) {
    throw new Error("verification failed: entry.txt does not match the entry text");
  }
}

main();
