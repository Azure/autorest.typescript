// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeModel, ImplementationLocation, ParameterLocation } from "@autorest/codemodel";
import { ImportKind, RLCModel } from "@azure-tools/rlc-codegen";
import { getAutorestOptions } from "../../autorestSession";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { isConstantSchema } from "../schemaHelpers";
import { transformOptions } from "./transformOptions";
import { transformParameterTypes } from "./transformParameterTypes";
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
  const { srcPath } = getAutorestOptions();
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
    options: transformOptions(model),
    schemas: transformSchemas(model),
    responses: transformResponseTypes(model, importDetails),
    importSet: importDetails,
    apiVersionParam: transformApiVersionParam(model),
    parameters: transformParameterTypes(model, importDetails)
  };
  return rlcModel;
}

function transformApiVersionParam(model: CodeModel) {
  if (!model.globalParameters || !model.globalParameters.length) {
    return undefined;
  }

  const apiVersionParam = model.globalParameters
    .filter(
      gp =>
        gp.implementation === ImplementationLocation.Client &&
        gp.protocol.http?.in === ParameterLocation.Query
    )
    .find(
      param =>
        getLanguageMetadata(param.language).serializedName === "api-version"
    );

  if (apiVersionParam && isConstantSchema(apiVersionParam.schema)) {
    return {
      name: 'api-version',
      type: 'constant',
      default: apiVersionParam.schema.value.value.toString()
    }
  }

  return undefined;
}