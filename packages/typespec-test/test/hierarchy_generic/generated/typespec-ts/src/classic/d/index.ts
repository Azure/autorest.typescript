// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { A } from "../../models/models.js";
import { opD } from "../../api/d/index.js";
import { DOpDOptionalParams } from "../../models/options.js";

/** Interface representing a D operations. */
export interface DOperations {
  /** show example opD */
  opD: (body: A, options?: DOpDOptionalParams) => Promise<Record<string, any>>;
}

export function getD(context: FooContext) {
  return {
    opD: (body: A, options?: DOpDOptionalParams) => opD(context, body, options),
  };
}

export function getDOperations(context: FooContext): DOperations {
  return {
    ...getD(context),
  };
}
