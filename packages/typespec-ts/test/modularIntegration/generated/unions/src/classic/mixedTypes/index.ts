// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { MixedTypesCases } from "../../models/models.js";
import { mixedTypesGet, mixedTypesSend } from "../../api/mixedTypes/index.js";
import { GetOptions, SendOptions } from "../../models/options.js";

export interface MixedTypesOperations {
  get: (options?: GetOptions) => Promise<{ prop: MixedTypesCases }>;
  send: (prop: MixedTypesCases, options?: SendOptions) => Promise<void>;
}

export function getMixedTypes(context: UnionContext) {
  return {
    get: (options?: GetOptions) => mixedTypesGet(context, options),
    send: (prop: MixedTypesCases, options?: SendOptions) =>
      mixedTypesSend(context, prop, options),
  };
}

export function getMixedTypesOperations(
  context: UnionContext,
): MixedTypesOperations {
  return {
    ...getMixedTypes(context),
  };
}
