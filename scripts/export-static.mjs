import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const clientOutput = resolve("dist/client");
const exportOutput = resolve("out");
const homepage = resolve(clientOutput, "index.html");

if (!existsSync(homepage)) {
  throw new Error("Prerendered homepage not found; check the static build output.");
}

rmSync(exportOutput, { recursive: true, force: true });
mkdirSync(exportOutput, { recursive: true });
cpSync(clientOutput, exportOutput, { recursive: true });

console.log("Static export generated in ./out");