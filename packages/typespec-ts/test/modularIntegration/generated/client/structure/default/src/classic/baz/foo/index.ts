// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../../api/serviceContext.js";
import { seven } from "../../../api/baz/foo/index.js";
import { BazFooSevenOptionalParams } from "../../../models/options.js";

/** Interface representing a BazFoo operations. */
export interface BazFooOperations {
  seven: (options?: BazFooSevenOptionalParams) => Promise<void>;
}

export function getBazFoo(context: ServiceContext) {
  return {
    seven: (options?: BazFooSevenOptionalParams) => seven(context, options),
  };
}

export function getBazFooOperations(context: ServiceContext): BazFooOperations {
  return {
    ...getBazFoo(context),
  };
}
