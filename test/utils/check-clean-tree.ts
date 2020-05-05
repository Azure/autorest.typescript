import { spawn, ChildProcess } from "child_process";

const onExit = (childProcess: ChildProcess) => {
  let messages: string[] = [];
  return new Promise((resolve, reject) => {
    if (childProcess.stdout) {
      console.log("HEY!!!");
      childProcess.stdout.on("data", message => messages.push(message));
    }
    childProcess.once("exit", (code: number, signal: string) => {
      if (code === 0) {
        resolve(messages);
      }
      reject(new Error(`Exit with code: ${code}`));
    });

    childProcess.once("error", (error: Error) => {
      reject(error);
    });
  });
};

async function check_tree() {
  await onExit(
    spawn("git", ["add", "-A"], {
      stdio: [process.stdin, process.stdout, process.stderr]
    })
  );

  const messages = await onExit(
    spawn("git", ["diff", "--staged", "--compact-summary"])
  );

  console.log(messages);
}

check_tree().catch(console.error);
