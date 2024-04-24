// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/unionContext.js";
import { Cat, Dog } from "../../models/models.js";
import { modelsOnlyGet, modelsOnlySend } from "../../api/modelsOnly/index.js";
import {
  ModelsOnlyGetOptionalParams,
  ModelsOnlySendOptionalParams,
} from "../../models/options.js";

export interface ModelsOnlyOperations {
  get: (options?: ModelsOnlyGetOptionalParams) => Promise<{ prop: Cat | Dog }>;
  send: (
    prop: Cat | Dog,
    options?: ModelsOnlySendOptionalParams,
  ) => Promise<void>;
}

export function getModelsOnly(context: UnionContext) {
  return {
    get: (options?: ModelsOnlyGetOptionalParams) =>
      modelsOnlyGet(context, options),
    send: (prop: Cat | Dog, options?: ModelsOnlySendOptionalParams) =>
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
