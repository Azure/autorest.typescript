import { ClientDetails } from "../models/clientDetails";
import { Project } from "ts-morph";
import { OperationGroupDetails } from "../models/operationDetails";
import { promises } from "fs";
import { join as joinPath } from "path";
import { getAutorestOptions } from "../autorestSession";

export async function generateLroFiles(
  clientDetails: ClientDetails,
  project: Project
) {
  const { srcPath, useCoreV2 } = getAutorestOptions();
  if (!hasAnyLro(clientDetails.operationGroups)) {
    return;
  }
  const LroClassFile = useCoreV2 ? "coreClientLro.ts" : "coreHttpLro.ts";
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
    joinPath(srcDir, LroClassFile),
    "utf-8"
  );
  project.createSourceFile(
    joinPath(baseTargetPath, LroClassFile),
    fileContent,
    {
      overwrite: true
    }
  );
}

function hasAnyLro(operationGroups: OperationGroupDetails[]) {
  return operationGroups.some(og => og.operations.some(o => o.isLro));
}
