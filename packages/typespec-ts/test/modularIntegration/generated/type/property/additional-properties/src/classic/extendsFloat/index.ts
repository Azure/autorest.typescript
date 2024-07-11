// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ExtendsFloatAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/extendsFloat/index.js";
import {
  ExtendsFloatGetOptionalParams,
  ExtendsFloatPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a ExtendsFloat operations. */
export interface ExtendsFloatOperations {
  /** Get call */
  get: (
    options?: ExtendsFloatGetOptionalParams,
  ) => Promise<ExtendsFloatAdditionalProperties>;
  /** Put operation */
  put: (
    body: ExtendsFloatAdditionalProperties,
    options?: ExtendsFloatPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsFloat(context: AdditionalPropertiesContext) {
  return {
    get: (options?: ExtendsFloatGetOptionalParams) => get(context, options),
    put: (
      body: ExtendsFloatAdditionalProperties,
      options?: ExtendsFloatPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsFloatOperations(
  context: AdditionalPropertiesContext,
): ExtendsFloatOperations {
  return {
    ...getExtendsFloat(context),
  };
}
