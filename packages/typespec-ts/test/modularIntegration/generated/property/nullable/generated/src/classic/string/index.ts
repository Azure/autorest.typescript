// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/NullableContext.js";
import { StringProperty } from "../../models/models.js";
import {
  stringGetNonNull,
  stringGetNull,
  stringPatchNonNull,
  stringPatchNull,
} from "../../api/string/index.js";
import {
  StringGetNonNullOptions,
  StringGetNullOptions,
  StringPatchNonNullOptions,
  StringPatchNullOptions,
} from "../../models/options.js";

export interface StringOperations {
  getNonNull: (options?: StringGetNonNullOptions) => Promise<StringProperty>;
  getNull: (options?: StringGetNullOptions) => Promise<StringProperty>;
  patchNonNull: (
    body: StringProperty,
    options?: StringPatchNonNullOptions,
  ) => Promise<void>;
  patchNull: (
    body: StringProperty,
    options?: StringPatchNullOptions,
  ) => Promise<void>;
}

export function getString(context: NullableContext) {
  return {
    getNonNull: (options?: StringGetNonNullOptions) =>
      stringGetNonNull(context, options),
    getNull: (options?: StringGetNullOptions) =>
      stringGetNull(context, options),
    patchNonNull: (body: StringProperty, options?: StringPatchNonNullOptions) =>
      stringPatchNonNull(context, body, options),
    patchNull: (body: StringProperty, options?: StringPatchNullOptions) =>
      stringPatchNull(context, body, options),
  };
}

export function getStringOperations(
  context: NullableContext,
): StringOperations {
  return {
    ...getString(context),
  };
}
