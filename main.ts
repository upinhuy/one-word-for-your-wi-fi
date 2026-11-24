// One Word for Your Wi-Fi — make.fun bounty entry
// u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// The program writes a single word describing home Wi-Fi to
// /output/entry.txt, as the competition contract requires.
//
// The word: "Parttime".
// Home Wi-Fi behaves like a part-time employee: it shows up when it
// feels like it, clocks out right when you need it most, and still
// expects full credit for the hours it did work. Full bars, nothing
// loading; fine all morning, gone the second the video call starts.
// That is the whole joke, and it needs no explanation.
//
// The program validates the word against the competition gate
// (UTF-8 text, 1 to 20 characters, not only whitespace) before
// writing it, so a bad word can never be submitted silently.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Parttime";

if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote ${WORD.length}-character entry to /output/entry.txt`);
