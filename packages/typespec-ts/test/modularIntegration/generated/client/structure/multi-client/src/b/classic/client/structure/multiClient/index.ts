// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../../api/BContext.js";
import {
  ClientStructureMultiClientClientBOperations,
  getClientStructureMultiClientClientBOperations,
} from "./clientB/index.js";

export interface ClientStructureMultiClientOperations {
  clientB: ClientStructureMultiClientClientBOperations;
}

export function getClientStructureMultiClientOperations(
  context: ServiceContext,
): ClientStructureMultiClientOperations {
  return {
    clientB: getClientStructureMultiClientClientBOperations(context),
  };
}
