import { CodeModel } from "@autorest/codemodel";
import { Project } from "ts-morph";
import { generateSchemaTypes as generateSchemaTypesForRLC } from "@azure-tools/rlc-codegen";
import { transform } from "./transforms/transform";

/**
 * Generates types to represent schema definitions in the swagger
 */
export function generateSchemaTypes(model: CodeModel, project: Project) {
  // Get all paths
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  generateSchemaTypesForRLC(rlcModels, project);
}
