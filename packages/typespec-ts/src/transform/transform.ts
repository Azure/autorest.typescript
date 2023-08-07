// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SdkClient,
  SdkContext
} from "@azure-tools/typespec-client-generator-core";
import {
  ImportKind,
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
  UrlInfo
} from "@azure-tools/rlc-common";
import { Program, getDoc } from "@typespec/compiler";
import { getServers } from "@typespec/http";
import { join } from "path";
import {
  getDefaultService,
  getFormattedPropertyDoc,
  getSchemaForType,
  getTypeName,
  predictDefaultValue
} from "../utils/modelUtils.js";
import { transformHelperFunctionDetails } from "./transformHelperFunctionDetails.js";
import { transformToParameterTypes } from "./transformParameters.js";
import { transformPaths } from "./transformPaths.js";
import { transformToResponseTypes } from "./transformResponses.js";
import { transformSchemas } from "./transformSchemas.js";
import { transformRLCOptions } from "./transfromRLCOptions.js";
import { transformApiVersionInfo } from "./transformApiVersionInfo.js";
import { getClientLroOverload } from "../utils/operationUtil.js";

export interface RLCSdkContext extends SdkContext {
  options?: RLCOptions;
}

export async function transformRLCModel(
  program: Program,
  emitterOptions: RLCOptions,
  client: SdkClient,
  emitterOutputDir: string,
  dpgContext: RLCSdkContext
): Promise<RLCModel> {
  const options: RLCOptions = transformRLCOptions(
    emitterOptions,
    emitterOutputDir,
    dpgContext
  );
  dpgContext.options = options;
  const srcPath = join(
    emitterOutputDir ?? "",
    "src",
    // When generating modular library, RLC has to go under rest folder
    options.isModularLibrary ? "rest" : "",
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
  const importSet = new Map<ImportKind, Set<string>>();
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
    dpgContext
  );
  const helperDetails = transformHelperFunctionDetails(client, dpgContext);
  // Enrich client-level annotation detail
  helperDetails.clientLroOverload = getClientLroOverload(paths);
  const urlInfo = transformUrlInfo(program, dpgContext);
  const apiVersionInfo = transformApiVersionInfo(client, dpgContext, urlInfo);
  return {
    srcPath,
    libraryName,
    paths,
    options,
    schemas,
    responses,
    importSet,
    apiVersionInfo,
    parameters,
    helperDetails,
    urlInfo
  };
}

export function transformUrlInfo(
  program: Program,
  dpgContext: SdkContext
): UrlInfo | undefined {
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

        const schema = getSchemaForType(
          dpgContext,
          type,
          [SchemaContext.Exception, SchemaContext.Input],
          false,
          property!
        );
        urlParameters.push({
          oriName: key,
          name: normalizeName(key, NameType.Parameter, true),
          type: getTypeName(schema),
          description:
            (getDoc(program, property) &&
              getFormattedPropertyDoc(program, property, schema, " ")) ??
            getFormattedPropertyDoc(program, type, schema, " " /* sperator*/),
          value: predictDefaultValue(dpgContext, host?.[0]?.parameters.get(key))
        });
      }
    }
  }
  if (endpoint && urlParameters.length > 0) {
    for (const param of urlParameters) {
      if (param.oriName) {
        const regexp = new RegExp(`{${param.oriName}}`, "g");
        endpoint = endpoint.replace(regexp, `{${param.name}}`);
      }
    }
  }
  // Set the default value if missing endpoint parameter
  if (endpoint == undefined && urlParameters.length === 0) {
    endpoint = "{endpoint}";
    urlParameters.push({
      name: "endpoint",
      type: "string"
    });
  }
  return { endpoint, urlParameters };
}
