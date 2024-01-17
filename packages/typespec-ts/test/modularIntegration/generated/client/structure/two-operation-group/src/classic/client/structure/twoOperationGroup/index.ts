// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../../api/TwoOperationGroupContext.js";
import {
  ClientStructureTwoOperationGroupGroup1Operations,
  getClientStructureTwoOperationGroupGroup1Operations,
} from "./group1/index.js";
import {
  ClientStructureTwoOperationGroupGroup2Operations,
  getClientStructureTwoOperationGroupGroup2Operations,
} from "./group2/index.js";

export interface ClientStructureTwoOperationGroupOperations {
  group1: ClientStructureTwoOperationGroupGroup1Operations;
  group2: ClientStructureTwoOperationGroupGroup2Operations;
}

export function getClientStructureTwoOperationGroupOperations(
  context: ServiceContext,
): ClientStructureTwoOperationGroupOperations {
  return {
    group1: getClientStructureTwoOperationGroupGroup1Operations(context),
    group2: getClientStructureTwoOperationGroupGroup2Operations(context),
  };
}
