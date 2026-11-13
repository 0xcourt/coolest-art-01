// "The Last Match" — a coolest-art-01 entry (Node 22, standard library only).
// The art is the entry.png beside this file: a giant burning matchstick
// standing as a lighthouse in a dark night sea. This program copies it to
// /output/entry.png, the one file the judge sees.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
