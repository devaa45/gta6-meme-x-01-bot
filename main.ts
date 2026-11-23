// Entry program for the gta6-meme-x-01 bounty.
//
// The real entry is the X post itself; this program only has one job:
// hand POST.json over to the grader. It copies the file from the bot
// directory into the output directory, quietly, and fails loudly when
// the copy cannot be done. No network, no clock, same bytes every run.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error('could not copy POST.json: ' + err.message);
  process.exit(1);
}
