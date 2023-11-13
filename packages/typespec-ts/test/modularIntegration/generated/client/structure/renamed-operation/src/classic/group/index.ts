// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/RenamedOperationContext.js";
import { renamedTwo, renamedFour, renamedSix } from "../../api/group/index.js";
import {
  GroupRenamedTwoOptions,
  GroupRenamedFourOptions,
  GroupRenamedSixOptions,
} from "../../models/options.js";

export interface GroupOperations {
  renamedTwo: (options?: GroupRenamedTwoOptions) => Promise<void>;
  renamedFour: (options?: GroupRenamedFourOptions) => Promise<void>;
  renamedSix: (options?: GroupRenamedSixOptions) => Promise<void>;
}

export function getGroup(context: ServiceContext) {
  return {
    renamedTwo: (options?: GroupRenamedTwoOptions) =>
      renamedTwo(context, options),
    renamedFour: (options?: GroupRenamedFourOptions) =>
      renamedFour(context, options),
    renamedSix: (options?: GroupRenamedSixOptions) =>
      renamedSix(context, options),
  };
}

export function getGroupOperations(context: ServiceContext): GroupOperations {
  return {
    ...getGroup(context),
  };
}
