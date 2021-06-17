import { ClientDetails } from "../models/clientDetails";
import { Project } from "ts-morph";
import { OperationGroupDetails } from "../models/operationDetails";
import { promises } from "fs";
import { join as joinPath } from "path";
import { getAutorestOptions } from "../autorestSession";

export async function generateLROFiles(
  clientDetails: ClientDetails,
  project: Project
) {
  const { srcPath } = getAutorestOptions();
  if (!hasAnyLRO(clientDetails.operationGroups)) {
    return;
  }
  const baseTargetPath = srcPath || "";
  const srcDir = joinPath(__dirname, "..", "..", "..", "src");
  const lroDir = joinPath(srcDir, "lro");
  const lroFiles = await promises.readdir(lroDir);

  for (let i = 0; i < lroFiles.length; i++) {
    const file = lroFiles[i];
    const filePath = joinPath(lroDir, file);
    const fileContent = await promises.readFile(filePath, "utf-8");

    project.createSourceFile(
      joinPath(baseTargetPath, "lro", file),
      fileContent,
      { overwrite: true }
    );
  }
  const fileContent = await promises.readFile(
    joinPath(srcDir, "coreClientLRO.ts"),
    "utf-8"
  );
  project.createSourceFile(
    joinPath(baseTargetPath, "coreClientLRO.ts"),
    fileContent,
    {
      overwrite: true
    }
  );
}

function hasAnyLRO(operationGroups: OperationGroupDetails[]) {
  return operationGroups.some(og => og.operations.some(o => o.isLRO));
}
