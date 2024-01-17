// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../../../api/TwoOperationGroupContext.js";
import {
  one,
  three,
  four,
} from "../../../../../api/client/structure/twoOperationGroup/group1/index.js";
import {
  ClientStructureTwoOperationGroupGroup1OneOptions,
  ClientStructureTwoOperationGroupGroup1ThreeOptions,
  ClientStructureTwoOperationGroupGroup1FourOptions,
} from "../../../../../models/options.js";

export interface ClientStructureTwoOperationGroupGroup1Operations {
  one: (
    options?: ClientStructureTwoOperationGroupGroup1OneOptions,
  ) => Promise<void>;
  three: (
    options?: ClientStructureTwoOperationGroupGroup1ThreeOptions,
  ) => Promise<void>;
  four: (
    options?: ClientStructureTwoOperationGroupGroup1FourOptions,
  ) => Promise<void>;
}

export function getClientStructureTwoOperationGroupGroup1(
  context: ServiceContext,
) {
  return {
    one: (options?: ClientStructureTwoOperationGroupGroup1OneOptions) =>
      one(context, options),
    three: (options?: ClientStructureTwoOperationGroupGroup1ThreeOptions) =>
      three(context, options),
    four: (options?: ClientStructureTwoOperationGroupGroup1FourOptions) =>
      four(context, options),
  };
}

export function getClientStructureTwoOperationGroupGroup1Operations(
  context: ServiceContext,
): ClientStructureTwoOperationGroupGroup1Operations {
  return {
    ...getClientStructureTwoOperationGroupGroup1(context),
  };
}
