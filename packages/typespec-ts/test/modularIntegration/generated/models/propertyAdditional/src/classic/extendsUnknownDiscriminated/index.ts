// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ExtendsUnknownAdditionalPropertiesDiscriminatedUnion } from "../../models/models.js";
import { get, put } from "../../api/extendsUnknownDiscriminated/index.js";
import {
  ExtendsUnknownDiscriminatedGetOptionalParams,
  ExtendsUnknownDiscriminatedPutOptionalParams,
} from "../../models/options.js";

export interface ExtendsUnknownDiscriminatedOperations {
  get: (
    options?: ExtendsUnknownDiscriminatedGetOptionalParams,
  ) => Promise<ExtendsUnknownAdditionalPropertiesDiscriminatedUnion>;
  put: (
    body: ExtendsUnknownAdditionalPropertiesDiscriminatedUnion,
    options?: ExtendsUnknownDiscriminatedPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsUnknownDiscriminated(
  context: AdditionalPropertiesContext,
) {
  return {
    get: (options?: ExtendsUnknownDiscriminatedGetOptionalParams) =>
      get(context, options),
    put: (
      body: ExtendsUnknownAdditionalPropertiesDiscriminatedUnion,
      options?: ExtendsUnknownDiscriminatedPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsUnknownDiscriminatedOperations(
  context: AdditionalPropertiesContext,
): ExtendsUnknownDiscriminatedOperations {
  return {
    ...getExtendsUnknownDiscriminated(context),
  };
}
