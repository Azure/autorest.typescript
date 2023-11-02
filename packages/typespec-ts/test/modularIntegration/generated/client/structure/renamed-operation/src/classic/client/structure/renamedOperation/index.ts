// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../../api/RenamedOperationContext.js";
import {
  renamedOne,
  renamedThree,
  renamedFive,
} from "../../../../api/client/structure/renamedOperation/index.js";
import {
  ClientStructureRenamedOperationRenamedOneOptions,
  ClientStructureRenamedOperationRenamedThreeOptions,
  ClientStructureRenamedOperationRenamedFiveOptions,
} from "../../../../models/options.js";

export interface ClientStructureRenamedOperationOperations {
  renamedOne: (
    options?: ClientStructureRenamedOperationRenamedOneOptions
  ) => Promise<void>;
  renamedThree: (
    options?: ClientStructureRenamedOperationRenamedThreeOptions
  ) => Promise<void>;
  renamedFive: (
    options?: ClientStructureRenamedOperationRenamedFiveOptions
  ) => Promise<void>;
}

export function getClientStructureRenamedOperation(context: ServiceContext) {
  return {
    renamedOne: (options?: ClientStructureRenamedOperationRenamedOneOptions) =>
      renamedOne(context, options),
    renamedThree: (
      options?: ClientStructureRenamedOperationRenamedThreeOptions
    ) => renamedThree(context, options),
    renamedFive: (
      options?: ClientStructureRenamedOperationRenamedFiveOptions
    ) => renamedFive(context, options),
  };
}

export function getClientStructureRenamedOperationOperations(
  context: ServiceContext
): ClientStructureRenamedOperationOperations {
  return {
    ...getClientStructureRenamedOperation(context),
  };
}
