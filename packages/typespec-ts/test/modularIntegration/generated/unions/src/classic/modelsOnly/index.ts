// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { Cat, Dog } from "../../models/models.js";
import { modelsOnlyGet, modelsOnlySend } from "../../api/modelsOnly/index.js";
import { GetOptions, SendOptions } from "../../models/options.js";

export interface ModelsOnlyOperations {
  get: (options?: GetOptions) => Promise<{ prop: Cat | Dog }>;
  send: (prop: Cat | Dog, options?: SendOptions) => Promise<void>;
}

export function getModelsOnly(context: UnionContext) {
  return {
    get: (options?: GetOptions) => modelsOnlyGet(context, options),
    send: (prop: Cat | Dog, options?: SendOptions) =>
      modelsOnlySend(context, prop, options),
  };
}

export function getModelsOnlyOperations(
  context: UnionContext,
): ModelsOnlyOperations {
  return {
    ...getModelsOnly(context),
  };
}
