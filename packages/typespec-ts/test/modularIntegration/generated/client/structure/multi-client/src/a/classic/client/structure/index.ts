// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../api/AContext.js";

export interface ClientStructureOperations {
  multiClient: ClientStructureMultiClientOperations;
}

export function getClientStructureOperations(
  context: ServiceContext,
): ClientStructureOperations {
  return {
    multiClient: getClientStructureMultiClientOperations(context),
  };
}
