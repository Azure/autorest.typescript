import { ClientDetails } from "../models/clientDetails";
import { Project } from "ts-morph";
import { OperationGroupDetails } from "../models/operationDetails";
import { readFile } from "fs";

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
    const fileContent = await getFileContent(file);

    project.createSourceFile(
      `${clientDetails.srcPath}/lro/${name}.ts`,
      fileContent,
      { overwrite: true }
    );
  }
}

function getFileContent(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(filePath, "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

function hasAnyLRO(operationGroups: OperationGroupDetails[]) {
  return operationGroups.some(og => og.operations.some(o => o.isLRO));
}
