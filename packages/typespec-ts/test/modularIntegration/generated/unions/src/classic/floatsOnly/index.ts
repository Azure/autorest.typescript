// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { floatsOnlyGet, floatsOnlySend } from "../../api/floatsOnly/index.js";
import {
  FloatsOnlyGetOptions,
  FloatsOnlySendOptions,
} from "../../models/options.js";

export interface FloatsOnlyOperations {
  get: (options?: FloatsOnlyGetOptions) => Promise<{ prop: 1.1 | 2.2 | 3.3 }>;
  send: (
    prop: 1.1 | 2.2 | 3.3,
    options?: FloatsOnlySendOptions,
  ) => Promise<void>;
}

export function getFloatsOnly(context: UnionContext) {
  return {
    get: (options?: FloatsOnlyGetOptions) => floatsOnlyGet(context, options),
    send: (prop: 1.1 | 2.2 | 3.3, options?: FloatsOnlySendOptions) =>
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
