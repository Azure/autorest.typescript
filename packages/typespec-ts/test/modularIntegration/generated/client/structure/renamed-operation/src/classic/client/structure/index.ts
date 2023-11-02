// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../api/RenamedOperationContext.js";
import {
  ClientStructureRenamedOperationOperations,
  getClientStructureRenamedOperationOperations,
} from "./renamedOperation/index.js";

export interface ClientStructureOperations {
  renamedOperation: ClientStructureRenamedOperationOperations;
}

export function getClientStructureOperations(
  context: ServiceContext
): ClientStructureOperations {
  return {
    renamedOperation: getClientStructureRenamedOperationOperations(context),
  };
}
