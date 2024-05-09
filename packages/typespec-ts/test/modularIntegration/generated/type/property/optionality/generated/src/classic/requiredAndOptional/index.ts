// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { RequiredAndOptionalProperty } from "../../models/models.js";
import {
  requiredAndOptionalGetAll,
  requiredAndOptionalGetRequiredOnly,
  requiredAndOptionalPutAll,
  requiredAndOptionalPutRequiredOnly,
} from "../../api/requiredAndOptional/index.js";
import {
  RequiredAndOptionalGetAllOptionalParams,
  RequiredAndOptionalGetRequiredOnlyOptionalParams,
  RequiredAndOptionalPutAllOptionalParams,
  RequiredAndOptionalPutRequiredOnlyOptionalParams,
} from "../../models/options.js";

export interface RequiredAndOptionalOperations {
  getAll: (
    options?: RequiredAndOptionalGetAllOptionalParams,
  ) => Promise<RequiredAndOptionalProperty>;
  getRequiredOnly: (
    options?: RequiredAndOptionalGetRequiredOnlyOptionalParams,
  ) => Promise<RequiredAndOptionalProperty>;
  putAll: (
    body: RequiredAndOptionalProperty,
    options?: RequiredAndOptionalPutAllOptionalParams,
  ) => Promise<void>;
  putRequiredOnly: (
    body: RequiredAndOptionalProperty,
    options?: RequiredAndOptionalPutRequiredOnlyOptionalParams,
  ) => Promise<void>;
}

export function getRequiredAndOptional(context: OptionalContext) {
  return {
    getAll: (options?: RequiredAndOptionalGetAllOptionalParams) =>
      requiredAndOptionalGetAll(context, options),
    getRequiredOnly: (
      options?: RequiredAndOptionalGetRequiredOnlyOptionalParams,
    ) => requiredAndOptionalGetRequiredOnly(context, options),
    putAll: (
      body: RequiredAndOptionalProperty,
      options?: RequiredAndOptionalPutAllOptionalParams,
    ) => requiredAndOptionalPutAll(context, body, options),
    putRequiredOnly: (
      body: RequiredAndOptionalProperty,
      options?: RequiredAndOptionalPutRequiredOnlyOptionalParams,
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
