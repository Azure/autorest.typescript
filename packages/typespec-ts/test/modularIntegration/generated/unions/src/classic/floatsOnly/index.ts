// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { floatsOnlyGet, floatsOnlySend } from "../../api/floatsOnly/index.js";
import { GetOptions, SendOptions } from "../../models/options.js";

export interface FloatsOnlyOperations {
  get: (options?: GetOptions) => Promise<{ prop: 1.1 | 2.2 | 3.3 }>;
  send: (prop: 1.1 | 2.2 | 3.3, options?: SendOptions) => Promise<void>;
}

export function getFloatsOnly(context: UnionContext) {
  return {
    get: (options?: GetOptions) => floatsOnlyGet(context, options),
    send: (prop: 1.1 | 2.2 | 3.3, options?: SendOptions) =>
      floatsOnlySend(context, prop, options),
  };
}

export function getFloatsOnlyOperations(
  context: UnionContext,
): FloatsOnlyOperations {
  return {
    ...getFloatsOnly(context),
  };
}
