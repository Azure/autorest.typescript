// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ExtendsModelArrayAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/extendsModelArray/index.js";
import {
  ExtendsModelArrayGetOptionalParams,
  ExtendsModelArrayPutOptionalParams,
} from "../../models/options.js";

export interface ExtendsModelArrayOperations {
  get: (
    options?: ExtendsModelArrayGetOptionalParams,
  ) => Promise<ExtendsModelArrayAdditionalProperties>;
  put: (
    body: ExtendsModelArrayAdditionalProperties,
    options?: ExtendsModelArrayPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsModelArray(context: AdditionalPropertiesContext) {
  return {
    get: (options?: ExtendsModelArrayGetOptionalParams) =>
      get(context, options),
    put: (
      body: ExtendsModelArrayAdditionalProperties,
      options?: ExtendsModelArrayPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsModelArrayOperations(
  context: AdditionalPropertiesContext,
): ExtendsModelArrayOperations {
  return {
    ...getExtendsModelArray(context),
  };
}
