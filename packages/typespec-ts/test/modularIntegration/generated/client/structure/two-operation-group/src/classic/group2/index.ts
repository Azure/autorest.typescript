// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/twoOperationGroupContext.js";
import { two, five, six } from "../../api/group2/index.js";
import {
  Group2TwoOptionalParams,
  Group2FiveOptionalParams,
  Group2SixOptionalParams,
} from "../../models/options.js";

/** Interface representing a Group2 operations. */
export interface Group2Operations {
  two: (options?: Group2TwoOptionalParams) => Promise<void>;
  five: (options?: Group2FiveOptionalParams) => Promise<void>;
  six: (options?: Group2SixOptionalParams) => Promise<void>;
}

export function getGroup2(context: ServiceContext) {
  return {
    two: (options?: Group2TwoOptionalParams) => two(context, options),
    five: (options?: Group2FiveOptionalParams) => five(context, options),
    six: (options?: Group2SixOptionalParams) => six(context, options),
  };
}

export function getGroup2Operations(context: ServiceContext): Group2Operations {
  return {
    ...getGroup2(context),
  };
}
