// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadContext } from "../../api/spreadContext.js";
import { BodyParameter } from "../../models/models.js";
import { modelSpreadAsRequestBody } from "../../api/model/index.js";
import { ModelSpreadAsRequestBodyOptionalParams } from "../../models/options.js";

export interface ModelOperations {
  spreadAsRequestBody: (
    body: BodyParameter,
    options?: ModelSpreadAsRequestBodyOptionalParams,
  ) => Promise<void>;
}

export function getModel(context: SpreadContext) {
  return {
    spreadAsRequestBody: (
      body: BodyParameter,
      options?: ModelSpreadAsRequestBodyOptionalParams,
    ) => modelSpreadAsRequestBody(context, body, options),
  };
}

export function getModelOperations(context: SpreadContext): ModelOperations {
  return {
    ...getModel(context),
  };
}
