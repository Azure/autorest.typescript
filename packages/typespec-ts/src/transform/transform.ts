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
} from "../modelUtils.js";
import { transformHelperFunctionDetails } from "./transformHelperFunctionDetails.js";
import { transformToParameterTypes } from "./transformParameters.js";
import { transformPaths } from "./transformPaths.js";
import { transformToResponseTypes } from "./transformResponses.js";
import { transformSchemas } from "./transformSchemas.js";
import { transformRLCOptions } from "./transfromRLCOptions.js";
import { transformApiVersionInfo } from "./transformApiVersionInfo.js";
import { getClientLroOverload } from "../operationUtil.js";

export async function transformRLCModel(
  program: Program,
  emitterOptions: RLCOptions,
  client: SdkClient,
  emitterOutputDir: string,
  dpgContext: SdkContext
): Promise<RLCModel> {
  const options: RLCOptions = transformRLCOptions(
    program,
    emitterOptions,
    emitterOutputDir,
    dpgContext
  );
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
      : options?.title ?? getDefaultService(program)?.title ?? "",
    NameType.Class
  );
  const importSet = new Map<ImportKind, Set<string>>();
  const paths: Paths = transformPaths(program, client, dpgContext);
  const schemas: Schema[] = transformSchemas(program, client, dpgContext);

  const responses: OperationResponse[] = transformToResponseTypes(
    program,
    importSet,
    client,
    dpgContext
  );
  const parameters: OperationParameter[] = transformToParameterTypes(
    program,
    importSet,
    client,
    dpgContext
  );
  const helperDetails = transformHelperFunctionDetails(
    program,
    client,
    dpgContext
  );
  // Enrich client-level annotation detail
  helperDetails.clientLroOverload = getClientLroOverload(paths);
  const urlInfo = transformUrlInfo(program, dpgContext);
  const apiVersionInfo = transformApiVersionInfo(
    client,
    program,
    dpgContext,
    urlInfo
  );
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

        if (!type) {
          continue;
        }

        const schema = getSchemaForType(program, type);
        urlParameters.push({
          name: key,
          type: getTypeName(schema),
          description:
            (getDoc(program, property) &&
              getFormattedPropertyDoc(program, property, schema, " ")) ??
            getFormattedPropertyDoc(program, type, schema, " " /* sperator*/),
          value: predictDefaultValue(
            program,
            dpgContext,
            host?.[0]?.parameters.get(key)
          )
        });
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
