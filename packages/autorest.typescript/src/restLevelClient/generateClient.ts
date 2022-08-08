import {
  CodeModel,
} from "@autorest/codemodel";
import { transform } from "./transforms/transform";
import { generateClient as generateClientForRLC} from "@azure-tools/rlc-codegen"
import {
  Project,
} from "ts-morph";

export function generateClient(model: CodeModel, project: Project) {
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  generateClientForRLC(rlcModels, project);

}
