
const { join } = require("path");

const { promisify } = require("util");
const cp = require("child_process");
const exec = promisify(cp.exec);
const fs = require("fs");
const stat = promisify(fs.stat);
const filesize = require("filesize");
const dependencies = require("./dependencies");

async function getBundleSize() {
  await new Promise((resolve) => {
    const child = cp.spawn(join(__dirname, "../node_modules/.bin/webpack"), ['-p'], { maxBuffer: 1024 * 1024, stdio: 'inherit' });
    child.on('exit', () => resolve());
  });
  const status = await stat(join(__dirname, "../testBundle.js"));
  return status.size;
}

function execVerbose(script) {
  console.log(`> ${script}`);
  return exec(script, { maxBuffer: 1024 * 1024 });
}

async function main() {
  await execVerbose("git reset --hard " + process.env.TRAVIS_BRANCH);
  dependencies.refreshNodeModules();
  const baseSize = await getBundleSize();

  await execVerbose("git reset --hard " + process.env.TRAVIS_PULL_REQUEST_SHA);
  dependencies.refreshNodeModules();
  const headSize = await getBundleSize();

  const change = (headSize / baseSize) - 1;
  const percentChange = (Math.abs(change) * 100).toFixed(2) + '%';

  const json = JSON.stringify({
    title: `Size ${change >= 0 ? "increased" : "decreased"} by ${percentChange} (${filesize(headSize - baseSize)})`,
    summary: ""
  });

  console.log(`---output
${json}
---`);
}

main()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
  });
