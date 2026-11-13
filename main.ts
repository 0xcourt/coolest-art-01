// "Folding the Sunset" — a coolest-art-01 entry (Node 22, standard library only).
// The art is the entry.png beside this file: a tiny silhouetted figure folds
// a huge glowing sunset like a bedsheet at dusk, vast bands of orange, rose
// and violet fabric glowing against a deepening blue sky. This program
// copies it to /output/entry.png, the one file the judge sees.
// Note: entry.png holds JPEG bytes (the gate tells PNG from JPEG by the
// first bytes, and the name stays entry.png either way per RULES.txt).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
