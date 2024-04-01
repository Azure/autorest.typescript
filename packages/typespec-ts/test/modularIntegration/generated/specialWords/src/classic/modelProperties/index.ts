// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpecialWordsContext } from "../../api/SpecialWordsContext.js";
import { SameAsModel } from "../../models/models.js";
import { modelPropertiesSameAsModel } from "../../api/modelProperties/index.js";
import { ModelPropertiesSameAsModelOptions } from "../../models/options.js";

export interface ModelPropertiesOperations {
  sameAsModel: (
    body: SameAsModel,
    options?: ModelPropertiesSameAsModelOptions,
  ) => Promise<void>;
}

export function getModelProperties(context: SpecialWordsContext) {
  return {
    sameAsModel: (
      body: SameAsModel,
      options?: ModelPropertiesSameAsModelOptions,
    ) => modelPropertiesSameAsModel(context, body, options),
  };
}

export function getModelPropertiesOperations(
  context: SpecialWordsContext,
): ModelPropertiesOperations {
  return {
    ...getModelProperties(context),
  };
}
