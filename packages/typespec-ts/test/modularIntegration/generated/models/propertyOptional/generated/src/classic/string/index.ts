// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { StringProperty } from "../../models/models.js";
import {
  stringGetAll,
  stringGetDefault,
  stringPutAll,
  stringPutDefault,
} from "../../api/string/index.js";
import {
  StringGetAllOptions,
  StringGetDefaultOptions,
  StringPutAllOptions,
  StringPutDefaultOptions,
} from "../../models/options.js";

export interface StringOperations {
  getAll: (options?: StringGetAllOptions) => Promise<StringProperty>;
  getDefault: (options?: StringGetDefaultOptions) => Promise<StringProperty>;
  putAll: (
    body: StringProperty,
    options?: StringPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: StringProperty,
    options?: StringPutDefaultOptions,
  ) => Promise<void>;
}

export function getString(context: OptionalContext) {
  return {
    getAll: (options?: StringGetAllOptions) => stringGetAll(context, options),
    getDefault: (options?: StringGetDefaultOptions) =>
      stringGetDefault(context, options),
    putAll: (body: StringProperty, options?: StringPutAllOptions) =>
      stringPutAll(context, body, options),
    putDefault: (body: StringProperty, options?: StringPutDefaultOptions) =>
      stringPutDefault(context, body, options),
  };
}

export function getStringOperations(
  context: OptionalContext,
): StringOperations {
  return {
    ...getString(context),
  };
}
