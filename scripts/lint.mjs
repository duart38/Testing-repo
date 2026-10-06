import { readdirSync, readFileSync } from "node:fs";

let problems = 0;
for (const dir of ["src", "test"]) {
  for (const file of readdirSync(dir)) {
    const text = readFileSync(`${dir}/${file}`, "utf8");
    text.split("\n").forEach((line, i) => {
      if (/\s+$/.test(line)) {
        console.error(`${dir}/${file}:${i + 1} trailing whitespace`);
        problems++;
      }
      if (line.includes("\t")) {
        console.error(`${dir}/${file}:${i + 1} tab character`);
        problems++;
      }
    });
  }
}
if (problems > 0) process.exit(1);
console.log("lint ok");
