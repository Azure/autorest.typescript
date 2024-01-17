// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../../api/AContext.js";
import {
  ClientStructureMultiClientClientAOperations,
  getClientStructureMultiClientClientAOperations,
} from "./clientA/index.js";

export interface ClientStructureMultiClientOperations {
  clientA: ClientStructureMultiClientClientAOperations;
}

export function getClientStructureMultiClientOperations(
  context: ServiceContext,
): ClientStructureMultiClientOperations {
  return {
    clientA: getClientStructureMultiClientClientAOperations(context),
  };
}
