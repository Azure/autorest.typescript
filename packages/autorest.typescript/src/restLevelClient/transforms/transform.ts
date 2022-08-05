import { CodeModel } from "@autorest/codemodel";
import { ImportKind, RLCModel } from "@azure-tools/rlc-codegen";
import { getAutorestOptions } from "../../autorestSession";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { transformPaths } from "./transformPaths";
import { transformResponseTypes } from "./transformResponseTypes";
import { transformSchemas } from "./transformSchemas";

export function transform(
  model: CodeModel,
  {
    importedParameters = new Set<string>(),
    clientImports = new Set<string>(),
    importedResponses = new Set<string>()
  }: {
    importedParameters: Set<string>;
    importedResponses: Set<string>;
    clientImports: Set<string>;
  }
): RLCModel {
  const { srcPath, rlcShortcut } = getAutorestOptions();
  const importDetails = new Map<ImportKind, Set<string>>();
  const rlcModel: RLCModel = {
    libraryName: normalizeName(
      getLanguageMetadata(model.language).name,
      NameType.Interface
    ),
    srcPath,
    paths: transformPaths(model, {
      importedParameters,
      importedResponses,
      clientImports
    }),
    options: { includeShortcuts: rlcShortcut },
    schemas: transformSchemas(model),
    responses: transformResponseTypes(model, importDetails),
    importSet: importDetails
  };
  return rlcModel;
}
