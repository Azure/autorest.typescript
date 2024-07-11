// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ExtendsModelAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/extendsModel/index.js";
import {
  ExtendsModelGetOptionalParams,
  ExtendsModelPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a ExtendsModel operations. */
export interface ExtendsModelOperations {
  /** Get call */
  get: (
    options?: ExtendsModelGetOptionalParams,
  ) => Promise<ExtendsModelAdditionalProperties>;
  /** Put operation */
  put: (
    body: ExtendsModelAdditionalProperties,
    options?: ExtendsModelPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsModel(context: AdditionalPropertiesContext) {
  return {
    get: (options?: ExtendsModelGetOptionalParams) => get(context, options),
    put: (
      body: ExtendsModelAdditionalProperties,
      options?: ExtendsModelPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsModelOperations(
  context: AdditionalPropertiesContext,
): ExtendsModelOperations {
  return {
    ...getExtendsModel(context),
  };
}
