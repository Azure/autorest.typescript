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
  const { srcPath } = getAutorestOptions();
  if (!hasAnyLro(clientDetails.operationGroups)) {
    return;
  }
  const LroClassFile = "lroImpl.ts";
  const baseTargetPath = srcPath || "";
  const srcDir = joinPath(__dirname, "..", "..", "..", "src");
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
