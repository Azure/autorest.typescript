// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { intsOnlyGet, intsOnlySend } from "../../api/intsOnly/index.js";
import {
  IntsOnlyGetOptions,
  IntsOnlySendOptions,
} from "../../models/options.js";

export interface IntsOnlyOperations {
  get: (options?: IntsOnlyGetOptions) => Promise<{ prop: 1 | 2 | 3 }>;
  send: (prop: 1 | 2 | 3, options?: IntsOnlySendOptions) => Promise<void>;
}

export function getIntsOnly(context: UnionContext) {
  return {
    get: (options?: IntsOnlyGetOptions) => intsOnlyGet(context, options),
    send: (prop: 1 | 2 | 3, options?: IntsOnlySendOptions) =>
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
