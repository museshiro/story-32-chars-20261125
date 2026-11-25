import { mkdirSync, writeFileSync } from "node:fs";

// The 31-character line is written exactly, with no trailing newline.
const line = "The router outlived my marriage";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
