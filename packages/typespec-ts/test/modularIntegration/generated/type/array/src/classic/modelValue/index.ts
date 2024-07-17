// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import { InnerModel } from "../../models/models.js";
import { modelValueGet, modelValuePut } from "../../api/modelValue/index.js";
import {
  ModelValueGetOptionalParams,
  ModelValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a ModelValue operations. */
export interface ModelValueOperations {
  get: (options?: ModelValueGetOptionalParams) => Promise<InnerModel[]>;
  put: (
    body: InnerModel[],
    options?: ModelValuePutOptionalParams,
  ) => Promise<void>;
}

export function getModelValue(context: ArrayContext) {
  return {
    get: (options?: ModelValueGetOptionalParams) =>
      modelValueGet(context, options),
    put: (body: InnerModel[], options?: ModelValuePutOptionalParams) =>
      modelValuePut(context, body, options),
  };
}

export function getModelValueOperations(
  context: ArrayContext,
): ModelValueOperations {
  return {
    ...getModelValue(context),
  };
}
