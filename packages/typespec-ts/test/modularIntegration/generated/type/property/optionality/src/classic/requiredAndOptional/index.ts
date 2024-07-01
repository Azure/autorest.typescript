// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { RequiredAndOptionalProperty } from "../../models/models.js";
import {
  getAll,
  getRequiredOnly,
  putAll,
  putRequiredOnly,
} from "../../api/requiredAndOptional/index.js";
import {
  RequiredAndOptionalGetAllOptionalParams,
  RequiredAndOptionalGetRequiredOnlyOptionalParams,
  RequiredAndOptionalPutAllOptionalParams,
  RequiredAndOptionalPutRequiredOnlyOptionalParams,
} from "../../models/options.js";

/** Interface representing a RequiredAndOptional operations. */
export interface RequiredAndOptionalOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: RequiredAndOptionalGetAllOptionalParams,
  ) => Promise<RequiredAndOptionalProperty>;
  /** Get models that will return only the required properties */
  getRequiredOnly: (
    options?: RequiredAndOptionalGetRequiredOnlyOptionalParams,
  ) => Promise<RequiredAndOptionalProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: RequiredAndOptionalProperty,
    options?: RequiredAndOptionalPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with only required properties. */
  putRequiredOnly: (
    body: RequiredAndOptionalProperty,
    options?: RequiredAndOptionalPutRequiredOnlyOptionalParams,
  ) => Promise<void>;
}

export function getRequiredAndOptional(context: OptionalContext) {
  return {
    getAll: (options?: RequiredAndOptionalGetAllOptionalParams) =>
      getAll(context, options),
    getRequiredOnly: (
      options?: RequiredAndOptionalGetRequiredOnlyOptionalParams,
    ) => getRequiredOnly(context, options),
    putAll: (
      body: RequiredAndOptionalProperty,
      options?: RequiredAndOptionalPutAllOptionalParams,
    ) => putAll(context, body, options),
    putRequiredOnly: (
      body: RequiredAndOptionalProperty,
      options?: RequiredAndOptionalPutRequiredOnlyOptionalParams,
    ) => putRequiredOnly(context, body, options),
  };
}

export function getRequiredAndOptionalOperations(
  context: OptionalContext,
): RequiredAndOptionalOperations {
  return {
    ...getRequiredAndOptional(context),
  };
}
