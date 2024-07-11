// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/unionContext.js";
import { floatsOnlyGet, floatsOnlySend } from "../../api/floatsOnly/index.js";
import {
  FloatsOnlyGetOptionalParams,
  FloatsOnlySendOptionalParams,
} from "../../api/options.js";

/** Interface representing a FloatsOnly operations. */
export interface FloatsOnlyOperations {
  get: (
    options?: FloatsOnlyGetOptionalParams,
  ) => Promise<{ prop: 1.1 | 2.2 | 3.3 }>;
  send: (
    prop: 1.1 | 2.2 | 3.3,
    options?: FloatsOnlySendOptionalParams,
  ) => Promise<void>;
}

export function getFloatsOnly(context: UnionContext) {
  return {
    get: (options?: FloatsOnlyGetOptionalParams) =>
      floatsOnlyGet(context, options),
    send: (prop: 1.1 | 2.2 | 3.3, options?: FloatsOnlySendOptionalParams) =>
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
