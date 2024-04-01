// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { EnumsOnlyCases } from "../../models/models.js";
import { enumsOnlyGet, enumsOnlySend } from "../../api/enumsOnly/index.js";
import {
  EnumsOnlyGetOptions,
  EnumsOnlySendOptions,
} from "../../models/options.js";

export interface EnumsOnlyOperations {
  get: (options?: EnumsOnlyGetOptions) => Promise<{ prop: EnumsOnlyCases }>;
  send: (prop: EnumsOnlyCases, options?: EnumsOnlySendOptions) => Promise<void>;
}

export function getEnumsOnly(context: UnionContext) {
  return {
    get: (options?: EnumsOnlyGetOptions) => enumsOnlyGet(context, options),
    send: (prop: EnumsOnlyCases, options?: EnumsOnlySendOptions) =>
      enumsOnlySend(context, prop, options),
  };
}

export function getEnumsOnlyOperations(
  context: UnionContext,
): EnumsOnlyOperations {
  return {
    ...getEnumsOnly(context),
  };
}
