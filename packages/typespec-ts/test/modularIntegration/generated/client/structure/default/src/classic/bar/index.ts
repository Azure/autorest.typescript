// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/serviceContext.js";
import { five, six } from "../../api/bar/index.js";
import {
  BarFiveOptionalParams,
  BarSixOptionalParams,
} from "../../models/options.js";

export interface BarOperations {
  five: (options?: BarFiveOptionalParams) => Promise<void>;
  six: (options?: BarSixOptionalParams) => Promise<void>;
}

export function getBar(context: ServiceContext) {
  return {
    five: (options?: BarFiveOptionalParams) => five(context, options),
    six: (options?: BarSixOptionalParams) => six(context, options),
  };
}

export function getBarOperations(context: ServiceContext): BarOperations {
  return {
    ...getBar(context),
  };
}
