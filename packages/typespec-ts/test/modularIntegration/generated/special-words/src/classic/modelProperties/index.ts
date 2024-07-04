// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpecialWordsContext } from "../../api/specialWordsContext.js";
import { SameAsModel } from "../../models/models.js";
import { modelPropertiesSameAsModel } from "../../api/modelProperties/index.js";
import { ModelPropertiesSameAsModelOptionalParams } from "../../models/options.js";

/** Interface representing a ModelProperties operations. */
export interface ModelPropertiesOperations {
  sameAsModel: (
    body: SameAsModel,
    options?: ModelPropertiesSameAsModelOptionalParams,
  ) => Promise<void>;
}

export function getModelProperties(context: SpecialWordsContext) {
  return {
    sameAsModel: (
      body: SameAsModel,
      options?: ModelPropertiesSameAsModelOptionalParams,
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
