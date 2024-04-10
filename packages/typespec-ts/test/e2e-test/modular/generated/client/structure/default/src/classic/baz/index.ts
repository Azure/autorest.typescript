// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/ServiceContext.js";
import { BazFooOperations, getBazFooOperations } from "./foo/index.js";

export interface BazOperations {
  foo: BazFooOperations;
}

export function getBazOperations(context: ServiceContext): BazOperations {
  return {
    foo: getBazFooOperations(context),
  };
}
