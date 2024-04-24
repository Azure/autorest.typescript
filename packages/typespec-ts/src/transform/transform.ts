// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SdkClient } from "@azure-tools/typespec-client-generator-core";
import {
  buildRuntimeImports,
  NameType,
  normalizeName,
  OperationParameter,
  OperationResponse,
  PathParameter,
  Paths,
  RLCModel,
  RLCOptions,
  Schema,
  SchemaContext,
  UrlInfo,
  initInternalImports,
  transformSampleGroups,
  Imports
} from "@azure-tools/rlc-common";
import { getDoc } from "@typespec/compiler";
import { getServers } from "@typespec/http";
import { join } from "path";
import {
  getDefaultService,
  getFormattedPropertyDoc,
  getImportedModelName,
  getSchemaForType,
  getTypeName,
  predictDefaultValue
} from "../utils/modelUtils.js";
import { transformHelperFunctionDetails } from "./transformHelperFunctionDetails.js";
import { transformToParameterTypes } from "./transformParameters.js";
import { transformPaths } from "./transformPaths.js";
import { transformToResponseTypes } from "./transformResponses.js";
import { transformSchemas } from "./transformSchemas.js";
import { transformApiVersionInfo } from "./transformApiVersionInfo.js";
import { getClientLroOverload } from "../utils/operationUtil.js";
import { transformTelemetryInfo } from "./transformTelemetryInfo.js";
import { SdkContext } from "../utils/interfaces.js";

export async function transformRLCModel(
  client: SdkClient,
  dpgContext: SdkContext
): Promise<RLCModel> {
  const program = dpgContext.program;
  const options: RLCOptions = dpgContext.rlcOptions!;
  const srcPath = join(
    dpgContext.generationPathDetail?.rlcSourcesDir ?? "",
    options.batch && options.batch.length > 1
      ? normalizeName(client.name.replace("Client", ""), NameType.File)
      : ""
  );
  const libraryName = normalizeName(
    options.batch && (options.isModularLibrary || options.batch.length > 1)
      ? client.name
      : options?.title ??
          client.name ??
          getDefaultService(program)?.title ??
          "",
    NameType.Class
  );
  const importSet = initInternalImports();
  const urlInfo = transformUrlInfo(client, dpgContext, importSet);
  const paths: Paths = transformPaths(program, client, dpgContext);
  const schemas: Schema[] = transformSchemas(program, client, dpgContext);
  const responses: OperationResponse[] = transformToResponseTypes(
    importSet,
    client,
    dpgContext
  );
  const parameters: OperationParameter[] = transformToParameterTypes(
    importSet,
    client,
    dpgContext,
    urlInfo?.apiVersionInfo
  );
  const helperDetails = transformHelperFunctionDetails(
    client,
    dpgContext,
    options.flavor
  );
  // Enrich client-level annotation detail
  helperDetails.clientLroOverload = getClientLroOverload(paths);

  const telemetryOptions = transformTelemetryInfo(dpgContext, client);
  const model: RLCModel = {
    srcPath,
    libraryName,
    paths,
    options,
    schemas,
    responses,
    apiVersionInfo: urlInfo?.apiVersionInfo,
    parameters,
    helperDetails,
    urlInfo,
    telemetryOptions,
    importInfo: {
      internalImports: importSet,
      runtimeImports: buildRuntimeImports(options.flavor)
    }
  };
  model.sampleGroups = transformSampleGroups(
    model,
    options?.generateSample ===
      true /* Enable mock sample content if generateSample === true */
  );
  options.generateSample =
    (options.generateSample === true || options.generateSample === undefined) &&
    (model.sampleGroups ?? []).length > 0;
  return model;
}

export function transformUrlInfo(
  client: SdkClient,
  dpgContext: SdkContext,
  importDetails: Imports
): UrlInfo | undefined {
  const importedModels = new Set<string>();
  const usage = [SchemaContext.Exception, SchemaContext.Input];
  const program = dpgContext.program;
  const serviceNs = getDefaultService(program)?.type;
  let endpoint = undefined;
  const urlParameters: PathParameter[] = [];
  if (serviceNs) {
    const host = getServers(program, serviceNs);
    if (host?.[0]?.url) {
      endpoint = host[0].url;
    }
    if (host && host?.[0] && host?.[0]?.parameters) {
      // Currently we only support one parameter in the servers definition
      for (const key of host[0].parameters.keys()) {
        const property = host?.[0]?.parameters.get(key);
        const type = property?.type;

        if (!property || !type) {
          continue;
        }

        const schema = getSchemaForType(dpgContext, type, {
          usage: usage,
          needRef: false,
          relevantProperty: property
        });
        getImportedModelName(schema, usage)?.forEach(
          importedModels.add,
          importedModels
        );
        urlParameters.push({
          oriName: key,
          name: normalizeName(key, NameType.Parameter, true),
          type: getTypeName(schema, usage),
          description:
            (getDoc(program, property) &&
              getFormattedPropertyDoc(program, property, schema, " ")) ??
            getFormattedPropertyDoc(program, type, schema, " " /* separator*/),
          value: predictDefaultValue(dpgContext, host?.[0]?.parameters.get(key))
        });
      }
    }
  }
  if (importedModels.size > 0) {
    importDetails.rlcClientFactory.importsSet = importedModels;
  }
  let hasApiVersionInUrl = false;
  if (endpoint && urlParameters.length > 0) {
    for (const param of urlParameters) {
      if (param.oriName === "apiVersion") {
        hasApiVersionInUrl = true;
        dpgContext.hasApiVersionInClient = true;
      }
      if (param.oriName) {
        const regexp = new RegExp(`{${param.oriName}}`, "g");
        endpoint = endpoint.replace(regexp, `{${param.name}}`);
      }
    }
  }
  // Set the default value if missing endpoint parameter
  if (endpoint == undefined && urlParameters.length === 0) {
    endpoint = "{endpointParam}";
    urlParameters.push({
      name: "endpointParam",
      type: "string"
    });
  }
  const apiVersionInfo = !hasApiVersionInUrl
    ? transformApiVersionInfo(client, dpgContext, { endpoint, urlParameters })
    : undefined;
  if (
    apiVersionInfo &&
    urlParameters &&
    apiVersionInfo?.definedPosition === "query" &&
    !apiVersionInfo.isCrossedVersion &&
    !apiVersionInfo.defaultValue
  ) {
    urlParameters.push({
      name: "api-version",
      type: "string"
    });
  }
  return { endpoint, urlParameters, apiVersionInfo };
}
