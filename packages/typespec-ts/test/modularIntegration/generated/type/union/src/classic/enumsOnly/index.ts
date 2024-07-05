// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/unionContext.js";
import { EnumsOnlyCases } from "../../models/models.js";
import { enumsOnlyGet, enumsOnlySend } from "../../api/enumsOnly/index.js";
import {
  EnumsOnlyGetOptionalParams,
  EnumsOnlySendOptionalParams,
} from "../../models/options.js";

/** Interface representing a EnumsOnly operations. */
export interface EnumsOnlyOperations {
  get: (
    options?: EnumsOnlyGetOptionalParams,
  ) => Promise<{ prop: EnumsOnlyCases }>;
  send: (
    prop: EnumsOnlyCases,
    options?: EnumsOnlySendOptionalParams,
  ) => Promise<void>;
}

export function getEnumsOnly(context: UnionContext) {
  return {
    get: (options?: EnumsOnlyGetOptionalParams) =>
      enumsOnlyGet(context, options),
    send: (prop: EnumsOnlyCases, options?: EnumsOnlySendOptionalParams) =>
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
