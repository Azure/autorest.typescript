// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadContext } from "../../api/SpreadContext.js";
import { BodyParameter } from "../../models/models.js";
import { modelSpreadAsRequestBody } from "../../api/model/index.js";
import { SpreadAsRequestBodyOptions } from "../../models/options.js";

export interface ModelOperations {
  spreadAsRequestBody: (
    body: BodyParameter,
    options?: SpreadAsRequestBodyOptions,
  ) => Promise<void>;
}

export function getModel(context: SpreadContext) {
  return {
    spreadAsRequestBody: (
      body: BodyParameter,
      options?: SpreadAsRequestBodyOptions,
    ) => modelSpreadAsRequestBody(context, body, options),
  };
}

export function getModelOperations(context: SpreadContext): ModelOperations {
  return {
    ...getModel(context),
  };
}
