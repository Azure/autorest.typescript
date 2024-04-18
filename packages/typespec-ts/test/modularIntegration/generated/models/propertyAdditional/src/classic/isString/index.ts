// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { get, put } from "../../api/isString/index.js";
import {
  IsStringGetOptionalParams,
  IsStringPutOptionalParams,
} from "../../models/options.js";

export interface IsStringOperations {
  get: (options?: IsStringGetOptionalParams) => Promise<Record<string, string>>;
  put: (
    body: Record<string, string>,
    options?: IsStringPutOptionalParams,
  ) => Promise<void>;
}

export function getIsString(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsStringGetOptionalParams) => get(context, options),
    put: (body: Record<string, string>, options?: IsStringPutOptionalParams) =>
      put(context, body, options),
  };
}

export function getIsStringOperations(
  context: AdditionalPropertiesContext,
): IsStringOperations {
  return {
    ...getIsString(context),
  };
}
