// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { PlainTimeProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/plainTime/index.js";
import {
  PlainTimeGetAllOptionalParams,
  PlainTimeGetDefaultOptionalParams,
  PlainTimePutAllOptionalParams,
  PlainTimePutDefaultOptionalParams,
} from "../../models/options.js";

/** Interface representing a PlainTime operations. */
export interface PlainTimeOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: PlainTimeGetAllOptionalParams,
  ) => Promise<PlainTimeProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: PlainTimeGetDefaultOptionalParams,
  ) => Promise<PlainTimeProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: PlainTimeProperty,
    options?: PlainTimePutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  putDefault: (
    body: PlainTimeProperty,
    options?: PlainTimePutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getPlainTime(context: OptionalContext) {
  return {
    getAll: (options?: PlainTimeGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: PlainTimeGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: PlainTimeProperty,
      options?: PlainTimePutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: PlainTimeProperty,
      options?: PlainTimePutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getPlainTimeOperations(
  context: OptionalContext,
): PlainTimeOperations {
  return {
    ...getPlainTime(context),
  };
}
