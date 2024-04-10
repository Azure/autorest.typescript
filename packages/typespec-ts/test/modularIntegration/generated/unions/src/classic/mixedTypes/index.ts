// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { MixedTypesCases } from "../../models/models.js";
import { mixedTypesGet, mixedTypesSend } from "../../api/mixedTypes/index.js";
import {
  MixedTypesGetOptionalParams,
  MixedTypesSendOptionalParams,
} from "../../models/options.js";

export interface MixedTypesOperations {
  get: (
    options?: MixedTypesGetOptionalParams,
  ) => Promise<{ prop: MixedTypesCases }>;
  send: (
    prop: MixedTypesCases,
    options?: MixedTypesSendOptionalParams,
  ) => Promise<void>;
}

export function getMixedTypes(context: UnionContext) {
  return {
    get: (options?: MixedTypesGetOptionalParams) =>
      mixedTypesGet(context, options),
    send: (prop: MixedTypesCases, options?: MixedTypesSendOptionalParams) =>
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
