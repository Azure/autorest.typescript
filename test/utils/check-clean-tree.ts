import { exec } from "child_process";

const execute = (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) {
        reject(error.message);
      }
      resolve(stdout);
    });
  });
};

const check_tree = async () => {
  await execute("git add -A");
  const diff = await execute("git diff --staged --compact-summary");

  if (diff) {
    throw new Error(`Found un-commited changes, please regenerate all swaggers and commit all intended changes.
    ${diff}`);
  }
};

check_tree().catch(error => {
  console.error(error);
  process.exit(-1);
});
