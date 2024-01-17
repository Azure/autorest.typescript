// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../../../api/TwoOperationGroupContext.js";
import {
  two,
  five,
  six,
} from "../../../../../api/client/structure/twoOperationGroup/group2/index.js";
import {
  ClientStructureTwoOperationGroupGroup2TwoOptions,
  ClientStructureTwoOperationGroupGroup2FiveOptions,
  ClientStructureTwoOperationGroupGroup2SixOptions,
} from "../../../../../models/options.js";

export interface ClientStructureTwoOperationGroupGroup2Operations {
  two: (
    options?: ClientStructureTwoOperationGroupGroup2TwoOptions,
  ) => Promise<void>;
  five: (
    options?: ClientStructureTwoOperationGroupGroup2FiveOptions,
  ) => Promise<void>;
  six: (
    options?: ClientStructureTwoOperationGroupGroup2SixOptions,
  ) => Promise<void>;
}

export function getClientStructureTwoOperationGroupGroup2(
  context: ServiceContext,
) {
  return {
    two: (options?: ClientStructureTwoOperationGroupGroup2TwoOptions) =>
      two(context, options),
    five: (options?: ClientStructureTwoOperationGroupGroup2FiveOptions) =>
      five(context, options),
    six: (options?: ClientStructureTwoOperationGroupGroup2SixOptions) =>
      six(context, options),
  };
}

export function getClientStructureTwoOperationGroupGroup2Operations(
  context: ServiceContext,
): ClientStructureTwoOperationGroupGroup2Operations {
  return {
    ...getClientStructureTwoOperationGroupGroup2(context),
  };
}
