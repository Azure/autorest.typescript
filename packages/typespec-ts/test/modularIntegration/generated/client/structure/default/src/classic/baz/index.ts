// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/serviceContext.js";
import { BazFooOperations, getBazFooOperations } from "./foo/index.js";

/** Interface representing a Baz operations. */
export interface BazOperations {
  foo: BazFooOperations;
}

export function getBazOperations(context: ServiceContext): BazOperations {
  return {
    foo: getBazFooOperations(context),
  };
}
