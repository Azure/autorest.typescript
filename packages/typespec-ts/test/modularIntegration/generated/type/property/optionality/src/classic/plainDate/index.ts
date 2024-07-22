// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { PlainDateProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/plainDate/index.js";
import {
  PlainDateGetAllOptionalParams,
  PlainDateGetDefaultOptionalParams,
  PlainDatePutAllOptionalParams,
  PlainDatePutDefaultOptionalParams,
} from "../../models/options.js";

/** Interface representing a PlainDate operations. */
export interface PlainDateOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: PlainDateGetAllOptionalParams,
  ) => Promise<PlainDateProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: PlainDateGetDefaultOptionalParams,
  ) => Promise<PlainDateProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: PlainDateProperty,
    options?: PlainDatePutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  putDefault: (
    body: PlainDateProperty,
    options?: PlainDatePutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getPlainDate(context: OptionalContext) {
  return {
    getAll: (options?: PlainDateGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: PlainDateGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: PlainDateProperty,
      options?: PlainDatePutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: PlainDateProperty,
      options?: PlainDatePutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getPlainDateOperations(
  context: OptionalContext,
): PlainDateOperations {
  return {
    ...getPlainDate(context),
  };
}
