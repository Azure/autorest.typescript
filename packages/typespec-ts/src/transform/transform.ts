// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Client,
  DpgContext,
  getDefaultApiVersion
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
import {
  Program,
  Type,
  BooleanLiteral,
  StringLiteral,
  NumericLiteral,
  ModelProperty,
  listServices,
  NoTarget,
  Service,
  getDoc,
  getService
} from "@typespec/compiler";
import { getServers } from "@typespec/http";
import { join } from "path";
import {
  getFormattedPropertyDoc,
  getSchemaForType,
  getTypeName
} from "../modelUtils.js";
import { transformAnnotationDetails } from "./transformAnnotationDetails.js";
import { transformToParameterTypes } from "./transformParameters.js";
import { transformPaths } from "./transformPaths.js";
import { transformToResponseTypes } from "./transformResponses.js";
import { transformSchemas } from "./transformSchemas.js";
import { transformRLCOptions } from "./transfromRLCOptions.js";
import { isApiVersion } from "@azure-tools/typespec-client-generator-core";
import { reportDiagnostic } from "../lib.js";
import { transformApiVersionParam } from "./transformApiVersionParam.js";

export async function transformRLCModel(
  program: Program,
  emitterOptions: RLCOptions,
  client: Client,
  emitterOutputDir: string,
  dpgContext: DpgContext
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
    options.batch && options.batch.length > 1
      ? client.name
      : options?.title ?? getDefaultService(program)?.title ?? "",
    NameType.Class
  );
  const importSet = new Map<ImportKind, Set<string>>();
  const paths: Paths = transformPaths(program, client, dpgContext);
  const schemas: Schema[] = transformSchemas(program, client, dpgContext);
  const apiVersionInQueryParam = transformApiVersionParam(
    client,
    program,
    dpgContext
  );
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
  const annotations = transformAnnotationDetails(program, client, dpgContext);
  const urlInfo = transformUrlInfo(program, dpgContext);
  return {
    srcPath,
    libraryName,
    paths,
    options,
    schemas,
    responses,
    importSet,
    apiVersionInQueryParam,
    parameters,
    annotations,
    urlInfo
  };
}

export function transformUrlInfo(
  program: Program,
  dpgContext: DpgContext
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
              getFormattedPropertyDoc(
                program,
                property,
                schema,
                " " /* sperator*/
              )) ??
            getFormattedPropertyDoc(program, type, schema, " " /* sperator*/),
          value: getDefaultValue(
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

export function getDefaultValue(
  program: Program,
  dpgContext: DpgContext,
  param?: ModelProperty
) {
  const otherDefaultValue = param?.default;
  const serviceNamespace = getDefaultService(program)?.type;
  if (!serviceNamespace) {
    return undefined;
  }
  const defaultApiVersion =
    getDefaultApiVersion(dpgContext, serviceNamespace)?.value ??
    getService(program, serviceNamespace)?.version;
  if (param && isApiVersion(dpgContext, param) && defaultApiVersion) {
    return defaultApiVersion;
  } else if (isLiteralValue(otherDefaultValue)) {
    return otherDefaultValue.value;
  }
  return undefined;
}

function isLiteralValue(
  type?: Type
): type is StringLiteral | NumericLiteral | BooleanLiteral {
  if (!type) {
    return false;
  }

  if (
    type.kind === "Boolean" ||
    type.kind === "String" ||
    type.kind === "Number"
  ) {
    return type.value !== undefined;
  }

  return false;
}

export function getDefaultService(program: Program): Service | undefined {
  const services = listServices(program);
  if (!services || services.length === 0) {
    reportDiagnostic(program, {
      code: "no-service-defined",
      target: NoTarget
    });
  }
  if (services.length > 1) {
    reportDiagnostic(program, {
      code: "more-than-one-service",
      target: NoTarget
    });
  }
  return services[0];
}
