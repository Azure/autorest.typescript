// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as fsextra from "fs-extra";

export function copyFiles(srcDir: string, destDir: string[]) {
  const dirContents: string[] = fsextra.readdirSync(srcDir);
  dirContents.forEach((dirEntry: string) => {
    if (dirEntry.endsWith(".hbs")) {
      destDir.forEach((destDirEntry: string) => {
        console.log(
          `Copying ${srcDir}/${dirEntry} to ${destDirEntry}/${dirEntry}`
        );
        fsextra.copyFileSync(
          `${srcDir}/${dirEntry}`,
          `${destDirEntry}/${dirEntry}`
        );
      });
    }
  });
}

copyFiles("./src/restLevelClient", ["./dist/src/restLevelClient", "./dist"]);
copyFiles("./src/generators/test", ["./dist/src/generators/test", "./dist"]);
copyFiles("./src/generators/static", [
  "./dist/src/generators/static",
  "./dist"
]);
copyFiles("./src/generators/samples", [
  "./dist/src/generators/samples",
  "./dist"
]);
