import { ClientDetails } from "../models/clientDetails";
import { Project } from "ts-morph";
import { promises } from "fs";
import { join as joinPath } from "path";
import { getAutorestOptions } from "../autorestSession";

export async function generatePagingFiles(
  clientDetails: ClientDetails,
  project: Project
) {
  const { srcPath, disablePagingAsyncIterators } = getAutorestOptions();

  if (disablePagingAsyncIterators || !clientDetails.options.hasPaging) {
    return;
  }
  const helperFile = "pagingHelper.ts";
  const baseTargetPath = srcPath || "";
  const srcDir = joinPath(__dirname, "..", "..", "..", "src");
  const fileContent = await promises.readFile(
    joinPath(srcDir, helperFile),
    "utf-8"
  );
  project.createSourceFile(joinPath(baseTargetPath, helperFile), fileContent, {
    overwrite: true
  });
}
