// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../api/ServiceContext.js";
import { seven } from "../../../api/baz/foo/index.js";
import { BazFooSevenOptions } from "../../../models/options.js";

export interface BazFooOperations {
  seven: (options?: BazFooSevenOptions) => Promise<void>;
}

export function getBazFoo(context: ServiceContext) {
  return {
    seven: (options?: BazFooSevenOptions) => seven(context, options),
  };
}

export function getBazFooOperations(context: ServiceContext): BazFooOperations {
  return {
    ...getBazFoo(context),
  };
}
