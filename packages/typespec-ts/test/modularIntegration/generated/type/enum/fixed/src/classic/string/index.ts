// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FixedContext } from "../../api/fixedContext.js";
import { DaysOfWeekEnum } from "../../models/models.js";
import {
  getKnownValue,
  putKnownValue,
  putUnknownValue,
} from "../../api/string/index.js";
import {
  StringGetKnownValueOptionalParams,
  StringPutKnownValueOptionalParams,
  StringPutUnknownValueOptionalParams,
} from "../../models/options.js";

/** Interface representing a String operations. */
export interface StringOperations {
  /** getKnownValue */
  getKnownValue: (
    options?: StringGetKnownValueOptionalParams,
  ) => Promise<DaysOfWeekEnum>;
  /** putKnownValue */
  putKnownValue: (
    body: DaysOfWeekEnum,
    options?: StringPutKnownValueOptionalParams,
  ) => Promise<void>;
  /** putUnknownValue */
  putUnknownValue: (
    body: DaysOfWeekEnum,
    options?: StringPutUnknownValueOptionalParams,
  ) => Promise<void>;
}

export function getString(context: FixedContext) {
  return {
    getKnownValue: (options?: StringGetKnownValueOptionalParams) =>
      getKnownValue(context, options),
    putKnownValue: (
      body: DaysOfWeekEnum,
      options?: StringPutKnownValueOptionalParams,
    ) => putKnownValue(context, body, options),
    putUnknownValue: (
      body: DaysOfWeekEnum,
      options?: StringPutUnknownValueOptionalParams,
    ) => putUnknownValue(context, body, options),
  };
}

export function getStringOperations(context: FixedContext): StringOperations {
  return {
    ...getString(context),
  };
}
