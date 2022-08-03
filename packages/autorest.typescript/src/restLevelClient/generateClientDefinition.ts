import { CodeModel } from "@autorest/codemodel";

import { Project } from "ts-morph";
import * as path from "path";

import { getAutorestOptions } from "../autorestSession";
import { NameType, normalizeName } from "../utils/nameUtils";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { transformPaths } from "./transforms/transformPaths";
import { Paths, buildClientDefinitions } from "@azure-tools/rlc-codegen";

export function generatePathFirstClient(model: CodeModel, project: Project) {
  let pathDictionary: Paths = {};

  const name = normalizeName(
    getLanguageMetadata(model.language).name,
    NameType.Interface
  );
  const { srcPath, rlcShortcut } = getAutorestOptions();

  // Get all paths
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();

  pathDictionary = transformPaths(model, {
    importedParameters,
    importedResponses,
    clientImports
  });

  const clientDefinitions = buildClientDefinitions(
    {
      libraryName: name,
      paths: pathDictionary,
      srcPath,
      options: { includeShortcuts: rlcShortcut }
    },
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
