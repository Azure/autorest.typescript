import { NameType, normalizeName } from "@azure-tools/rlc-codegen";
import { OperationDetails } from "@cadl-lang/rest/http";

export function isSingleOperationGroup(routes: OperationDetails[]) {
  const operationGroups = new Set();
  for (const route of routes) {
    operationGroups.add(route.groupName);
  }
  return (operationGroups.size === 1);
}

export function getNormalizedOperationName(route: OperationDetails, includeGroupName = true) {
  return includeGroupName ?
    normalizeName(`${route.groupName}_${route.operation.name}`, NameType.Interface) :
    normalizeName(`${route.operation.name}`, NameType.Interface);
}