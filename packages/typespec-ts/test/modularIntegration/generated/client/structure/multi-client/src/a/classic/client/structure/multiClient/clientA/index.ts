// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../../../api/AContext.js";
import {
  renamedOne,
  renamedThree,
  renamedFive,
} from "../../../../../api/client/structure/multiClient/clientA/index.js";
import {
  ClientStructureMultiClientClientARenamedOneOptions,
  ClientStructureMultiClientClientARenamedThreeOptions,
  ClientStructureMultiClientClientARenamedFiveOptions,
} from "../../../../../models/options.js";

export interface ClientStructureMultiClientClientAOperations {
  renamedOne: (
    options?: ClientStructureMultiClientClientARenamedOneOptions,
  ) => Promise<void>;
  renamedThree: (
    options?: ClientStructureMultiClientClientARenamedThreeOptions,
  ) => Promise<void>;
  renamedFive: (
    options?: ClientStructureMultiClientClientARenamedFiveOptions,
  ) => Promise<void>;
}

export function getClientStructureMultiClientClientA(context: ServiceContext) {
  return {
    renamedOne: (
      options?: ClientStructureMultiClientClientARenamedOneOptions,
    ) => renamedOne(context, options),
    renamedThree: (
      options?: ClientStructureMultiClientClientARenamedThreeOptions,
    ) => renamedThree(context, options),
    renamedFive: (
      options?: ClientStructureMultiClientClientARenamedFiveOptions,
    ) => renamedFive(context, options),
  };
}

export function getClientStructureMultiClientClientAOperations(
  context: ServiceContext,
): ClientStructureMultiClientClientAOperations {
  return {
    ...getClientStructureMultiClientClientA(context),
  };
}
