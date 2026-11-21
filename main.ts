// News-image entry (Node 22, standard library only). The repository holds the
// finished front page as entry.png, and this program copies it to the
// grader's output file. It is deterministic: the same bytes go out on every
// run, and it needs no network.
//
// Note: entry.png holds JPEG bytes under the .png name (the rules tell the
// two apart by the file's first bytes, not its extension) — the PNG of this
// page came to 1.2 MiB, over the 1 MiB cap, so the same pixels were saved as
// JPEG instead.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'entry.png'),
  join(outDir, 'entry.png'),
);
