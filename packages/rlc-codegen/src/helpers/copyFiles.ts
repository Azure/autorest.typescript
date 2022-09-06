// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { readdirSync, copyFileSync, existsSync, mkdirSync } from "fs";

export function copyFiles(srcDir: string, destDir: string[]) {
  const dirContents: string[] = readdirSync(srcDir);
  dirContents.forEach((dirEntry: string) => {
    if (dirEntry.endsWith(".hbs")) {
      destDir.forEach((destDirEntry: string) => {
        if (!existsSync(destDirEntry)) {
          mkdirSync(destDirEntry);
        }
        console.log(
          `Copying ${srcDir}/${dirEntry} to ${destDirEntry}/${dirEntry}`
        );
        copyFileSync(`${srcDir}/${dirEntry}`, `${destDirEntry}/${dirEntry}`);
      });
    }
  });
}

copyFiles("./src/static", ["./dist/static", "./dist-esm/static"]);
