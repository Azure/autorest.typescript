// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { Cat, Dog } from "../../models/models.js";
import { modelsOnlyGet, modelsOnlySend } from "../../api/modelsOnly/index.js";
import {
  ModelsOnlyGetOptions,
  ModelsOnlySendOptions,
} from "../../models/options.js";

export interface ModelsOnlyOperations {
  get: (options?: ModelsOnlyGetOptions) => Promise<{ prop: Cat | Dog }>;
  send: (prop: Cat | Dog, options?: ModelsOnlySendOptions) => Promise<void>;
}

export function getModelsOnly(context: UnionContext) {
  return {
    get: (options?: ModelsOnlyGetOptions) => modelsOnlyGet(context, options),
    send: (prop: Cat | Dog, options?: ModelsOnlySendOptions) =>
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
