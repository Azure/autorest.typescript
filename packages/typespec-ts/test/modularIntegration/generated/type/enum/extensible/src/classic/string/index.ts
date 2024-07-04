// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ExtensibleContext } from "../../api/extensibleContext.js";
import { DaysOfWeekExtensibleEnum } from "../../models/models.js";
import {
  getKnownValue,
  getUnknownValue,
  putKnownValue,
  putUnknownValue,
} from "../../api/string/index.js";
import {
  StringGetKnownValueOptionalParams,
  StringGetUnknownValueOptionalParams,
  StringPutKnownValueOptionalParams,
  StringPutUnknownValueOptionalParams,
} from "../../models/options.js";

/** Interface representing a String operations. */
export interface StringOperations {
  getKnownValue: (
    options?: StringGetKnownValueOptionalParams,
  ) => Promise<DaysOfWeekExtensibleEnum>;
  getUnknownValue: (
    options?: StringGetUnknownValueOptionalParams,
  ) => Promise<DaysOfWeekExtensibleEnum>;
  putKnownValue: (
    body: DaysOfWeekExtensibleEnum,
    options?: StringPutKnownValueOptionalParams,
  ) => Promise<void>;
  putUnknownValue: (
    body: DaysOfWeekExtensibleEnum,
    options?: StringPutUnknownValueOptionalParams,
  ) => Promise<void>;
}

export function getString(context: ExtensibleContext) {
  return {
    getKnownValue: (options?: StringGetKnownValueOptionalParams) =>
      getKnownValue(context, options),
    getUnknownValue: (options?: StringGetUnknownValueOptionalParams) =>
      getUnknownValue(context, options),
    putKnownValue: (
      body: DaysOfWeekExtensibleEnum,
      options?: StringPutKnownValueOptionalParams,
    ) => putKnownValue(context, body, options),
    putUnknownValue: (
      body: DaysOfWeekExtensibleEnum,
      options?: StringPutUnknownValueOptionalParams,
    ) => putUnknownValue(context, body, options),
  };
}

export function getStringOperations(
  context: ExtensibleContext,
): StringOperations {
  return {
    ...getString(context),
  };
}
