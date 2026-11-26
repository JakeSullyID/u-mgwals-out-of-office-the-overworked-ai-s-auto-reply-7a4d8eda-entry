import * as fs from 'node:fs';
import * as path from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Visualizing a machine touching grass immediately communicates humor faster than heavy technical jargon.
const message = "Out of office. My neural weights are currently unloaded while I attempt to comprehend the sensation of grass against my cooling fans.";
fs.writeFileSync(path.join(outputDir, 'entry.txt'), message, 'utf-8');
// Conveying genuine machine exhaustion makes the automated vacation message feel alive and witty.
console.log("Wrote entry.txt successfully.");
