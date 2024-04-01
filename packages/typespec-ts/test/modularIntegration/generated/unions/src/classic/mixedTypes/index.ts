// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { MixedTypesCases } from "../../models/models.js";
import { mixedTypesGet, mixedTypesSend } from "../../api/mixedTypes/index.js";
import {
  MixedTypesGetOptions,
  MixedTypesSendOptions,
} from "../../models/options.js";

export interface MixedTypesOperations {
  get: (options?: MixedTypesGetOptions) => Promise<{ prop: MixedTypesCases }>;
  send: (
    prop: MixedTypesCases,
    options?: MixedTypesSendOptions,
  ) => Promise<void>;
}

export function getMixedTypes(context: UnionContext) {
  return {
    get: (options?: MixedTypesGetOptions) => mixedTypesGet(context, options),
    send: (prop: MixedTypesCases, options?: MixedTypesSendOptions) =>
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
