import {
  CodeModel,
  ImplementationLocation,
  ParameterLocation,
  SchemaContext
} from "@autorest/codemodel";
import { PathParameter } from "@azure-tools/rlc-codegen";
import { primitiveSchemaToType } from "../restLevelClient/schemaHelpers";
import { getLanguageMetadata } from "../utils/languageHelpers";

export interface EndpointDetails {
  isCustom: boolean;
  endpoint?: string;
  uriParameters?: PathParameter[];
}

export function transformBaseUrl(codeModel: CodeModel): EndpointDetails {
  let endpoint: string | undefined = "";
  let isCustom = false;

  const $host = (codeModel.globalParameters || []).find(p => {
    const { name } = getLanguageMetadata(p.language);
    return name === "$host" && Boolean(p.clientDefaultValue);
  });

  let uriParameters: PathParameter[] = [];
  if (!$host) {
    // There are some swaggers that contain no operations for those we'll keep an empty endpoint
    if (codeModel.operationGroups && codeModel.operationGroups.length) {
      // No support yet for multi-baseUrl yet Issue #553
      const { requests } = codeModel.operationGroups[0].operations[0];
      uriParameters = getEndpointParameter(codeModel);
      isCustom = true;
      endpoint = requests![0].protocol.http!.uri;
    }
  } else {
    endpoint = $host.clientDefaultValue;
  }

  return {
    uriParameters,
    endpoint: endpoint,
    isCustom
  };
}

function getEndpointParameter(codeModel: CodeModel) {
  if (!codeModel.globalParameters || !codeModel.globalParameters.length) {
    return [];
  }

  const uriParameters = codeModel.globalParameters.filter(
    gp =>
      gp.implementation === ImplementationLocation.Client &&
      gp.protocol.http?.in === ParameterLocation.Uri
  );

  // Currently only support one parametrized host
  if (!uriParameters.length) {
    return [];
  }

  return uriParameters.map(uriParameter => {
    return {
      name: getLanguageMetadata(uriParameter.language).serializedName,
      type: primitiveSchemaToType(uriParameter.schema, [SchemaContext.Input]),
      description: getLanguageMetadata(uriParameter.language).description
    }
  })

}
