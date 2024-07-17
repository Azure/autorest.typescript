// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ExtendsStringAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/extendsString/index.js";
import {
  ExtendsStringGetOptionalParams,
  ExtendsStringPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a ExtendsString operations. */
export interface ExtendsStringOperations {
  /** Get call */
  get: (
    options?: ExtendsStringGetOptionalParams,
  ) => Promise<ExtendsStringAdditionalProperties>;
  /** Put operation */
  put: (
    body: ExtendsStringAdditionalProperties,
    options?: ExtendsStringPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsString(context: AdditionalPropertiesContext) {
  return {
    get: (options?: ExtendsStringGetOptionalParams) => get(context, options),
    put: (
      body: ExtendsStringAdditionalProperties,
      options?: ExtendsStringPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsStringOperations(
  context: AdditionalPropertiesContext,
): ExtendsStringOperations {
  return {
    ...getExtendsString(context),
  };
}
