// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { RequiredAndOptionalProperty } from "../../models/models.js";
import {
  requiredAndOptionalGetAll,
  requiredAndOptionalGetRequiredOnly,
  requiredAndOptionalPutAll,
  requiredAndOptionalPutRequiredOnly,
} from "../../api/requiredAndOptional/index.js";
import {
  RequiredAndOptionalGetAllOptions,
  RequiredAndOptionalGetRequiredOnlyOptions,
  RequiredAndOptionalPutAllOptions,
  RequiredAndOptionalPutRequiredOnlyOptions,
} from "../../models/options.js";

export interface RequiredAndOptionalOperations {
  getAll: (
    options?: RequiredAndOptionalGetAllOptions,
  ) => Promise<RequiredAndOptionalProperty>;
  getRequiredOnly: (
    options?: RequiredAndOptionalGetRequiredOnlyOptions,
  ) => Promise<RequiredAndOptionalProperty>;
  putAll: (
    body: RequiredAndOptionalProperty,
    options?: RequiredAndOptionalPutAllOptions,
  ) => Promise<void>;
  putRequiredOnly: (
    body: RequiredAndOptionalProperty,
    options?: RequiredAndOptionalPutRequiredOnlyOptions,
  ) => Promise<void>;
}

export function getRequiredAndOptional(context: OptionalContext) {
  return {
    getAll: (options?: RequiredAndOptionalGetAllOptions) =>
      requiredAndOptionalGetAll(context, options),
    getRequiredOnly: (options?: RequiredAndOptionalGetRequiredOnlyOptions) =>
      requiredAndOptionalGetRequiredOnly(context, options),
    putAll: (
      body: RequiredAndOptionalProperty,
      options?: RequiredAndOptionalPutAllOptions,
    ) => requiredAndOptionalPutAll(context, body, options),
    putRequiredOnly: (
      body: RequiredAndOptionalProperty,
      options?: RequiredAndOptionalPutRequiredOnlyOptions,
    ) => requiredAndOptionalPutRequiredOnly(context, body, options),
  };
}

export function getRequiredAndOptionalOperations(
  context: OptionalContext,
): RequiredAndOptionalOperations {
  return {
    ...getRequiredAndOptional(context),
  };
}
