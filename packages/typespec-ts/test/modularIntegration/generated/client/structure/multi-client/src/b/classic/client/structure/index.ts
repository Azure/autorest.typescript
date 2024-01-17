// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClientStructureMultiClientOperations } from "../../../../a/classic/client/structure/multiClient/index.js";
import { ClientStructureMultiClientOperations } from "../../../../a/index.js";
import { ServiceContext } from "../../../api/BContext.js";

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
