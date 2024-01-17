// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../../../api/RenamedOperationContext.js";
import {
  renamedTwo,
  renamedFour,
  renamedSix,
} from "../../../../../api/client/structure/renamedOperation/group/index.js";
import {
  ClientStructureRenamedOperationGroupRenamedTwoOptions,
  ClientStructureRenamedOperationGroupRenamedFourOptions,
  ClientStructureRenamedOperationGroupRenamedSixOptions,
} from "../../../../../models/options.js";

export interface ClientStructureRenamedOperationGroupOperations {
  renamedTwo: (
    options?: ClientStructureRenamedOperationGroupRenamedTwoOptions,
  ) => Promise<void>;
  renamedFour: (
    options?: ClientStructureRenamedOperationGroupRenamedFourOptions,
  ) => Promise<void>;
  renamedSix: (
    options?: ClientStructureRenamedOperationGroupRenamedSixOptions,
  ) => Promise<void>;
}

export function getClientStructureRenamedOperationGroup(
  context: ServiceContext,
) {
  return {
    renamedTwo: (
      options?: ClientStructureRenamedOperationGroupRenamedTwoOptions,
    ) => renamedTwo(context, options),
    renamedFour: (
      options?: ClientStructureRenamedOperationGroupRenamedFourOptions,
    ) => renamedFour(context, options),
    renamedSix: (
      options?: ClientStructureRenamedOperationGroupRenamedSixOptions,
    ) => renamedSix(context, options),
  };
}

export function getClientStructureRenamedOperationGroupOperations(
  context: ServiceContext,
): ClientStructureRenamedOperationGroupOperations {
  return {
    ...getClientStructureRenamedOperationGroup(context),
  };
}
