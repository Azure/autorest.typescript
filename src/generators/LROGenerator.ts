import { ClientDetails } from "../models/clientDetails";
import { Project } from "ts-morph";
import { OperationGroupDetails } from "../models/operationDetails";
import { promises } from "fs";

export async function generateLROFiles(
  clientDetails: ClientDetails,
  project: Project
) {
  if (!hasAnyLRO(clientDetails.operationGroups)) {
    return;
  }

  const lroDir = "./src/lro";
  const lroFiles = await promises.readdir(lroDir);

  for (let i = 0; i < lroFiles.length; i++) {
    const file = lroFiles[i];
    const fileContent = await promises.readFile(`${lroDir}/${file}`, "utf-8");

    project.createSourceFile(
      `${clientDetails.srcPath}/lro/${file}`,
      fileContent,
      { overwrite: true }
    );
  }
}

function hasAnyLRO(operationGroups: OperationGroupDetails[]) {
  return operationGroups.some((og) => og.operations.some((o) => o.isLRO));
}
