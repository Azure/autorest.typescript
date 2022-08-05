import { CodeModel } from "@autorest/codemodel";
import { Project } from "ts-morph";
import { generateSchemaTypes as generateSchemaTypesForRLC } from "@azure-tools/rlc-codegen"
import { transform } from "./transforms/transform";

/**
 * Generates types to represent schema definitions in the swagger
 */
export function generateSchemaTypes(model: CodeModel, project: Project) {
  const rlcModels = transform(model);
  generateSchemaTypesForRLC(rlcModels, project);
}
