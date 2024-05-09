// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { StringProperty } from "../../models/models.js";
import {
  stringGetAll,
  stringGetDefault,
  stringPutAll,
  stringPutDefault,
} from "../../api/string/index.js";
import {
  StringGetAllOptionalParams,
  StringGetDefaultOptionalParams,
  StringPutAllOptionalParams,
  StringPutDefaultOptionalParams,
} from "../../models/options.js";

export interface StringOperations {
  getAll: (options?: StringGetAllOptionalParams) => Promise<StringProperty>;
  getDefault: (
    options?: StringGetDefaultOptionalParams,
  ) => Promise<StringProperty>;
  putAll: (
    body: StringProperty,
    options?: StringPutAllOptionalParams,
  ) => Promise<void>;
  putDefault: (
    body: StringProperty,
    options?: StringPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getString(context: OptionalContext) {
  return {
    getAll: (options?: StringGetAllOptionalParams) =>
      stringGetAll(context, options),
    getDefault: (options?: StringGetDefaultOptionalParams) =>
      stringGetDefault(context, options),
    putAll: (body: StringProperty, options?: StringPutAllOptionalParams) =>
      stringPutAll(context, body, options),
    putDefault: (
      body: StringProperty,
      options?: StringPutDefaultOptionalParams,
    ) => stringPutDefault(context, body, options),
  };
}

export function getStringOperations(
  context: OptionalContext,
): StringOperations {
  return {
    ...getString(context),
  };
}
