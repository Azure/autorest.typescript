// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/ServiceContext.js";
import { five, six } from "../../api/bar/index.js";
import { BarFiveOptions, BarSixOptions } from "../../models/options.js";

export interface BarOperations {
  five: (options?: BarFiveOptions) => Promise<void>;
  six: (options?: BarSixOptions) => Promise<void>;
}

export function getBar(context: ServiceContext) {
  return {
    five: (options?: BarFiveOptions) => five(context, options),
    six: (options?: BarSixOptions) => six(context, options),
  };
}

export function getBarOperations(context: ServiceContext): BarOperations {
  return {
    ...getBar(context),
  };
}
