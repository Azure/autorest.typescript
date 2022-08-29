// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-codegen";
import { OperationDetails } from "@cadl-lang/rest/http";

export function getNormalizedOperationName(
  route: OperationDetails,
  includeGroupName = true
) {
  return includeGroupName
    ? normalizeName(
        `${route.container?.name}_${route.operation.name}`,
        NameType.Interface
      )
    : normalizeName(`${route.operation.name}`, NameType.Interface);
}

