import { CodeModel } from "@autorest/codemodel";

import { Project } from "ts-morph";
import * as path from "path";

import { getAutorestOptions } from "../autorestSession";
import { NameType, normalizeName } from "../utils/nameUtils";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { transform } from "./transforms/transform";
import { Paths, buildClientDefinitions } from "@azure-tools/rlc-codegen";

export function generatePathFirstClient(model: CodeModel, project: Project) {
  const { srcPath } = getAutorestOptions();

  // Get all paths
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();

  const rlcModel = transform(model, {importedParameters, importedResponses, clientImports});

  const clientDefinitions = buildClientDefinitions(
    rlcModel,
    { importedParameters, importedResponses, clientImports }
  );

  project.createSourceFile(
    path.join(srcPath, `clientDefinitions.ts`),
    clientDefinitions.content,
    {
      overwrite: true
    }
  );
}
