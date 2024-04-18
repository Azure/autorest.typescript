// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { get, put } from "../../api/isUnknownDiscriminated/index.js";
import {
  IsUnknownDiscriminatedGetOptionalParams,
  IsUnknownDiscriminatedPutOptionalParams,
} from "../../models/options.js";

export interface IsUnknownDiscriminatedOperations {
  get: (
    options?: IsUnknownDiscriminatedGetOptionalParams,
  ) => Promise<Record<string, unknown>>;
  put: (
    body: Record<string, unknown>,
    options?: IsUnknownDiscriminatedPutOptionalParams,
  ) => Promise<void>;
}

export function getIsUnknownDiscriminated(
  context: AdditionalPropertiesContext,
) {
  return {
    get: (options?: IsUnknownDiscriminatedGetOptionalParams) =>
      get(context, options),
    put: (
      body: Record<string, unknown>,
      options?: IsUnknownDiscriminatedPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getIsUnknownDiscriminatedOperations(
  context: AdditionalPropertiesContext,
): IsUnknownDiscriminatedOperations {
  return {
    ...getIsUnknownDiscriminated(context),
  };
}
