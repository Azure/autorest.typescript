import { ClientDetails } from "../models/clientDetails";
import { Project } from "ts-morph";
import { OperationGroupDetails } from "../models/operationDetails";
import { promises } from "fs";
import { join as joinPath } from "path";

export async function generateLROFiles(
  clientDetails: ClientDetails,
  project: Project
) {
  if (!hasAnyLRO(clientDetails.operationGroups)) {
    return;
  }

  const lroDir = joinPath(__dirname, "..", "..", "..", "src", "lro");
  const lroFiles = await promises.readdir(lroDir);

  for (let i = 0; i < lroFiles.length; i++) {
    const file = lroFiles[i];
    const filePath = joinPath(lroDir, file);
    const fileContent = await promises.readFile(filePath, "utf-8");

    project.createSourceFile(
      joinPath(clientDetails.srcPath || "", "lro", file),
      fileContent,
      { overwrite: true }
    );
  }
}

function hasAnyLRO(operationGroups: OperationGroupDetails[]) {
  return operationGroups.some(og => og.operations.some(o => o.isLRO));
}
