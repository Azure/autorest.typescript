import { writeFileSync } from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const p = require("./package.json");

const cjsPackage = { ...p, type: "commonjs" };
writeFileSync("./dist/package.json", JSON.stringify(cjsPackage));


const esmPackage = { ...p, type: "module" };
writeFileSync("./dist-esm/package.json", JSON.stringify(esmPackage));