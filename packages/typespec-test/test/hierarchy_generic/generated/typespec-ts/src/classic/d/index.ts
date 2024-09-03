// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { A } from "../../models/models.js";
import { op1 } from "../../api/d/index.js";
import { DOp1OptionalParams } from "../../models/options.js";

/** Interface representing a D operations. */
export interface DOperations {
  op1: (body: A, options?: DOp1OptionalParams) => Promise<void>;
}

export function getD(context: FooContext) {
  return {
    op1: (body: A, options?: DOp1OptionalParams) => op1(context, body, options),
  };
}

export function getDOperations(context: FooContext): DOperations {
  return {
    ...getD(context),
  };
}
