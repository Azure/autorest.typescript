// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { StringProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/string/index.js";
import {
  StringGetAllOptionalParams,
  StringGetDefaultOptionalParams,
  StringPutAllOptionalParams,
  StringPutDefaultOptionalParams,
} from "../../models/options.js";

/** Interface representing a String operations. */
export interface StringOperations {
  /** Get models that will return all properties in the model */
  getAll: (options?: StringGetAllOptionalParams) => Promise<StringProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: StringGetDefaultOptionalParams,
  ) => Promise<StringProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: StringProperty,
    options?: StringPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  putDefault: (
    body: StringProperty,
    options?: StringPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getString(context: OptionalContext) {
  return {
    getAll: (options?: StringGetAllOptionalParams) => getAll(context, options),
    getDefault: (options?: StringGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (body: StringProperty, options?: StringPutAllOptionalParams) =>
      putAll(context, body, options),
    putDefault: (
      body: StringProperty,
      options?: StringPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getStringOperations(
  context: OptionalContext,
): StringOperations {
  return {
    ...getString(context),
  };
}
