import { ChildProcess } from "child_process";

export const onExit = (childProcess: ChildProcess) => {
  return new Promise<void>((resolve, reject) => {
    childProcess.once("exit", (code: number, signal: string) => {
      if (code === 0) {
        resolve();
      }
      reject(new Error(`Exit with code: ${code}`));
    });

    childProcess.once("error", (error: Error) => {
      reject(error);
    });
  });
};
