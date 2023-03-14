import {
  Client,
  DpgContext,
  isApiVersion,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { ignoreDiagnostics, Program } from "@typespec/compiler";
import { Parameter } from "@azure-tools/rlc-common";
import { getHttpOperation } from "@typespec/http";
import { getDefaultService, getDefaultValue } from "./transform.js";

export function transformApiVersionParam(
  client: Client,
  program: Program,
  dpgContext: DpgContext
): Parameter | undefined {
  const operationGroups = listOperationGroups(dpgContext, client);
  let apiVersionParam;
  let hasClientApiVersion = false;
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      const apiVersions = route.parameters.parameters.filter(
        (p) =>
          p.type === "query" &&
          isApiVersion(dpgContext, p) &&
          getDefaultValue(program, dpgContext, p.param)
      );
      if (
        apiVersions.length === 1 &&
        !hasClientApiVersion &&
        !apiVersionParam
      ) {
        apiVersionParam = apiVersions[0];
        hasClientApiVersion = true;
      } else if (apiVersions.length !== 1) {
        hasClientApiVersion = false;
        break;
      } else if (
        apiVersions.length == 1 &&
        getDefaultValue(program, dpgContext, apiVersions[0]?.param) !==
          getDefaultValue(program, dpgContext, apiVersionParam?.param)
      ) {
        hasClientApiVersion = false;
        break;
      }
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    const apiVersions = route.parameters.parameters.filter(
      (p) =>
        p.type === "query" &&
        isApiVersion(dpgContext, p) &&
        getDefaultValue(program, dpgContext, p.param)
    );
    if (apiVersions.length === 1 && !hasClientApiVersion && !apiVersionParam) {
      apiVersionParam = apiVersions[0];
      hasClientApiVersion = true;
    } else if (apiVersions.length !== 1) {
      hasClientApiVersion = false;
      break;
    } else if (
      apiVersions.length == 1 &&
      getDefaultValue(program, dpgContext, apiVersions[0]?.param) !==
        getDefaultValue(program, dpgContext, apiVersionParam?.param)
    ) {
      hasClientApiVersion = false;
      break;
    }
  }

  const apiVersion = getDefaultValue(
    program,
    dpgContext,
    apiVersionParam?.param
  );
  if (hasClientApiVersion && apiVersion && apiVersion !== "0000-00-00") {
    return {
      name: "api-version",
      type: "constant",
      default: apiVersion
    };
  }
  const serviceApiVersion = getDefaultService(program)?.version;
  if (
    serviceApiVersion &&
    serviceApiVersion &&
    serviceApiVersion !== "0000-00-00"
  ) {
    return {
      name: "api-version",
      type: "constant",
      default: serviceApiVersion
    };
  }
  return undefined;
}
