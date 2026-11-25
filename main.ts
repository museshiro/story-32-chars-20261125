import { mkdirSync, writeFileSync } from "node:fs";

// A Wi-Fi name that is a whole story: the marriage ended, the router is
// still blinking. The dumb appliance outlasted the love.
const SETUP = "The router outlived";
const PUNCH = " my marriage";
const LINE = SETUP + PUNCH;

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
