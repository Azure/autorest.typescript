// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/RenamedOperationContext.js";
import { renamedTwo, renamedFour, renamedSix } from "../../api/group/index.js";
import {
  GroupRenamedTwoOptionalParams,
  GroupRenamedFourOptionalParams,
  GroupRenamedSixOptionalParams,
} from "../../models/options.js";

export interface GroupOperations {
  renamedTwo: (options?: GroupRenamedTwoOptionalParams) => Promise<void>;
  renamedFour: (options?: GroupRenamedFourOptionalParams) => Promise<void>;
  renamedSix: (options?: GroupRenamedSixOptionalParams) => Promise<void>;
}

export function getGroup(context: ServiceContext) {
  return {
    renamedTwo: (options?: GroupRenamedTwoOptionalParams) =>
      renamedTwo(context, options),
    renamedFour: (options?: GroupRenamedFourOptionalParams) =>
      renamedFour(context, options),
    renamedSix: (options?: GroupRenamedSixOptionalParams) =>
      renamedSix(context, options),
  };
}

export function getGroupOperations(context: ServiceContext): GroupOperations {
  return {
    ...getGroup(context),
  };
}
