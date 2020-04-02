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

  const lroFiles = [
    { name: "bodyPollingStrategy", file: "./src/lro/bodyPollingStrategy.ts" },
    { name: "lroPoller", file: "./src/lro/lroPoller.ts" },
    { name: "models", file: "./src/lro/models.ts" },
    { name: "operation", file: "./src/lro/operation.ts" }
  ];

  for (let i = 0; i < lroFiles.length; i++) {
    const { name, file } = lroFiles[i];
    const fileContent = await promises.readFile(file, "utf-8");

    project.createSourceFile(
      `${clientDetails.srcPath}/lro/${name}.ts`,
      fileContent,
      { overwrite: true }
    );
  }
}

function hasAnyLRO(operationGroups: OperationGroupDetails[]) {
  return operationGroups.some(og => og.operations.some(o => o.isLRO));
}
