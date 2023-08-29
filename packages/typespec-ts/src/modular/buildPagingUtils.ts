import { RLCModel } from "@azure-tools/rlc-common";
import { dirname, join as joinPath } from "path";
import { promises } from "fs";
import { ModularCodeModel } from "./modularCodeModel.js";
import { fileURLToPath } from "url";

export async function buildPagingUtils(
  modularCodeModel: ModularCodeModel,
  rlcCodeModels: RLCModel[]
) {
  const hasPaging = rlcCodeModels.some(
    (codeModel) => codeModel.helperDetails?.hasPaging
  );
  if (!hasPaging) {
    return;
  }
  const project = modularCodeModel.project;
  const helperFile = "pagingUtil.ts";
  const baseTargetPath = modularCodeModel.modularOptions.sourceRoot;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const srcDir = joinPath(
    __dirname,
    "..",
    "..",
    "..",
    "src",
    "modular",
    "static"
  );
  const fileContent = await promises.readFile(
    joinPath(srcDir, helperFile),
    "utf-8"
  );
  // TODO: Here to replace the itemNames and pageLink info
  project.createSourceFile(
    joinPath(baseTargetPath, "util", helperFile),
    fileContent,
    {
      overwrite: true
    }
  );
}
