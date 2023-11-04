// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../api/FooContext.js";
import { A } from "../../models/models.js";
import { op1 } from "../../api/d/index.js";
import { DOp1Options } from "../../models/options.js";

export interface DOperations {
  op1: (body: A, options?: DOp1Options) => Promise<void>;
}

export function getD(context: FooContext) {
  return {
    op1: (body: A, options?: DOp1Options) => op1(context, body, options),
  };
}

export function getDOperations(context: FooContext): DOperations {
  return {
    ...getD(context),
  };
}
