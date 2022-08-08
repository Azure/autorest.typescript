import { CodeModel } from "@autorest/codemodel";
import { RLCModel } from "@azure-tools/rlc-codegen";
import { getAutorestOptions } from "../../autorestSession";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { transformOptions } from "./transformOptions";
import { transformPaths } from "./transformPaths";
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
  const { srcPath } = getAutorestOptions();
  const rlcModel = {
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
    options: transformOptions(model),
    schemas: transformSchemas(model)
  };
  return rlcModel;
}
