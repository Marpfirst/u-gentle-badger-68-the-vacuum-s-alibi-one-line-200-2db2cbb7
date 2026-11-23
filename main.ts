// The Vacuum's Alibi — one-line excuse entry.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
// The line is the vacuum's own excuse, deadpan and smug about its suction.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I left it for the toaster. It challenged my suction to a crumb-eating contest, and I refuse to compete with appliances that can't even move.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
