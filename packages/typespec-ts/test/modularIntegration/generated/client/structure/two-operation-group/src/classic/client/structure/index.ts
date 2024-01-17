// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../api/TwoOperationGroupContext.js";
import {
  ClientStructureTwoOperationGroupOperations,
  getClientStructureTwoOperationGroupOperations,
} from "./twoOperationGroup/index.js";

export interface ClientStructureOperations {
  twoOperationGroup: ClientStructureTwoOperationGroupOperations;
  twoOperationGroup: ClientStructureTwoOperationGroupOperations;
}

export function getClientStructureOperations(
  context: ServiceContext,
): ClientStructureOperations {
  return {
    twoOperationGroup: getClientStructureTwoOperationGroupOperations(context),
    twoOperationGroup: getClientStructureTwoOperationGroupOperations(context),
  };
}
