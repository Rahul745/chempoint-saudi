import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const clientOutput = resolve("dist/client");
const exportOutput = resolve("out");

if (!existsSync(clientOutput)) {
  throw new Error("Static client output was not found after the build.");
}

rmSync(exportOutput, { recursive: true, force: true });
mkdirSync(exportOutput, { recursive: true });
cpSync(clientOutput, exportOutput, { recursive: true });

console.log("Static export generated in ./out");