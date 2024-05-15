// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ExtendsStringAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/extendsString/index.js";
import {
  ExtendsStringGetOptionalParams,
  ExtendsStringPutOptionalParams,
} from "../../models/options.js";

export interface ExtendsStringOperations {
  get: (
    options?: ExtendsStringGetOptionalParams,
  ) => Promise<ExtendsStringAdditionalProperties>;
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
