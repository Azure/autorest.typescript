import { ContentBuilder } from "@azure-tools/rlc-common";
import { buildTopLevelIndex } from "@azure-tools/rlc-common";
import { RLCModel, File as RLCFile } from "@azure-tools/rlc-common";
import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";
import * as path from "path";
import { buildSchemaTypes } from "@azure-tools/rlc-common";

export function generateFileByBuilder(
  project: Project,
  buildFnOrList: ContentBuilder | ContentBuilder[],
  rlcModels: RLCModel,
  hasSampleGenerated?: boolean
) {
  if (!Array.isArray(buildFnOrList)) {
    buildFnOrList = [buildFnOrList];
  }
  for (const buildFn of buildFnOrList) {
    const preparedFile: RLCFile | undefined = buildFn(
      rlcModels,
      hasSampleGenerated
    );
    generateFile(preparedFile, project);
  }
}

export function generateSchemaTypes(project: Project, rlcModels: RLCModel) {
  const { inputModelFile, outputModelFile } = buildSchemaTypes(rlcModels);
  generateFile(inputModelFile, project);
  generateFile(outputModelFile, project);
}

function generateFile(file: RLCFile | undefined, project: Project) {
  if (file) {
    project.createSourceFile(file.path, file.content, {
      overwrite: true
    });
  }
}

export function generateTopLevelIndexFile(
  rlcModels: RLCModel,
  project: Project
) {
  const { srcPath } = getAutorestOptions();
  const preparedContent = buildTopLevelIndex(rlcModels);
  if (preparedContent) {
    const fileDirectory = path.join(srcPath as string, "../../");
    const indexFile = project.createSourceFile(
      "/src/index.ts",
      preparedContent.content,
      {
        overwrite: true
      }
    );
    // post handle the file position
    indexFile.moveToDirectory(fileDirectory);
  }
}
