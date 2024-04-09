// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { intsOnlyGet, intsOnlySend } from "../../api/intsOnly/index.js";
import {
  IntsOnlyGetOptionalParams,
  IntsOnlySendOptionalParams,
} from "../../models/options.js";

export interface IntsOnlyOperations {
  get: (options?: IntsOnlyGetOptionalParams) => Promise<{ prop: 1 | 2 | 3 }>;
  send: (
    prop: 1 | 2 | 3,
    options?: IntsOnlySendOptionalParams,
  ) => Promise<void>;
}

export function getIntsOnly(context: UnionContext) {
  return {
    get: (options?: IntsOnlyGetOptionalParams) => intsOnlyGet(context, options),
    send: (prop: 1 | 2 | 3, options?: IntsOnlySendOptionalParams) =>
      intsOnlySend(context, prop, options),
  };
}

export function getIntsOnlyOperations(
  context: UnionContext,
): IntsOnlyOperations {
  return {
    ...getIntsOnly(context),
  };
}
