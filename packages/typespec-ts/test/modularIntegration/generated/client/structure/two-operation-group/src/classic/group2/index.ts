// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/TwoOperationGroupContext.js";
import { two, five, six } from "../../api/group2/index.js";
import {
  Group2TwoOptions,
  Group2FiveOptions,
  Group2SixOptions,
} from "../../models/options.js";

export interface Group2Operations {
  two: (options?: Group2TwoOptions) => Promise<void>;
  five: (options?: Group2FiveOptions) => Promise<void>;
  six: (options?: Group2SixOptions) => Promise<void>;
}

export function getGroup2(context: ServiceContext) {
  return {
    two: (options?: Group2TwoOptions) => two(context, options),
    five: (options?: Group2FiveOptions) => five(context, options),
    six: (options?: Group2SixOptions) => six(context, options),
  };
}

export function getGroup2Operations(context: ServiceContext): Group2Operations {
  return {
    ...getGroup2(context),
  };
}
