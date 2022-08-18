import { RLCModel, File } from "@azure-tools/rlc-codegen";
import { Project } from "ts-morph";

export type ContentBuilder = (
  model: RLCModel,
  hasSampleGenerated?: boolean
) => File | undefined;

export function generateFileByBuilder(
  project: Project,
  buildFn: ContentBuilder,
  rlcModels: RLCModel,
  hasSampleGenerated?: boolean
) {
  const preparedFile = buildFn(rlcModels, hasSampleGenerated);
  if (preparedFile) {
    project.createSourceFile(preparedFile.path, preparedFile.content, {
      overwrite: true
    });
  }
}
