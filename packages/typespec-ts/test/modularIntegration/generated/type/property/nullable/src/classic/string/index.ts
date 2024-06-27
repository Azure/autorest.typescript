// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/nullableContext.js";
import { StringProperty } from "../../models/models.js";
import {
  getNonNull,
  getNull,
  patchNonNull,
  patchNull,
} from "../../api/string/index.js";
import {
  StringGetNonNullOptionalParams,
  StringGetNullOptionalParams,
  StringPatchNonNullOptionalParams,
  StringPatchNullOptionalParams,
} from "../../models/options.js";

export interface StringOperations {
  getNonNull: (
    options?: StringGetNonNullOptionalParams,
  ) => Promise<StringProperty>;
  getNull: (options?: StringGetNullOptionalParams) => Promise<StringProperty>;
  patchNonNull: (
    body: StringProperty,
    options?: StringPatchNonNullOptionalParams,
  ) => Promise<void>;
  patchNull: (
    body: StringProperty,
    options?: StringPatchNullOptionalParams,
  ) => Promise<void>;
}

export function getString(context: NullableContext) {
  return {
    getNonNull: (options?: StringGetNonNullOptionalParams) =>
      getNonNull(context, options),
    getNull: (options?: StringGetNullOptionalParams) =>
      getNull(context, options),
    patchNonNull: (
      body: StringProperty,
      options?: StringPatchNonNullOptionalParams,
    ) => patchNonNull(context, body, options),
    patchNull: (
      body: StringProperty,
      options?: StringPatchNullOptionalParams,
    ) => patchNull(context, body, options),
  };
}

export function getStringOperations(
  context: NullableContext,
): StringOperations {
  return {
    ...getString(context),
  };
}
