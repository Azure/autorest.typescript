// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ExtensibleContext } from "../../api/ExtensibleContext.js";
import { DaysOfWeekExtensibleEnum } from "../../models/models.js";
import {
  getKnownValue,
  getUnknownValue,
  putKnownValue,
  putUnknownValue,
} from "../../api/string/index.js";
import {
  StringGetKnownValueOptions,
  StringGetUnknownValueOptions,
  StringPutKnownValueOptions,
  StringPutUnknownValueOptions,
} from "../../models/options.js";

export interface StringOperations {
  getKnownValue: (
    options?: StringGetKnownValueOptions,
  ) => Promise<DaysOfWeekExtensibleEnum>;
  getUnknownValue: (
    options?: StringGetUnknownValueOptions,
  ) => Promise<DaysOfWeekExtensibleEnum>;
  putKnownValue: (
    body: DaysOfWeekExtensibleEnum,
    options?: StringPutKnownValueOptions,
  ) => Promise<void>;
  putUnknownValue: (
    body: DaysOfWeekExtensibleEnum,
    options?: StringPutUnknownValueOptions,
  ) => Promise<void>;
}

export function getString(context: ExtensibleContext) {
  return {
    getKnownValue: (options?: StringGetKnownValueOptions) =>
      getKnownValue(context, options),
    getUnknownValue: (options?: StringGetUnknownValueOptions) =>
      getUnknownValue(context, options),
    putKnownValue: (
      body: DaysOfWeekExtensibleEnum,
      options?: StringPutKnownValueOptions,
    ) => putKnownValue(context, body, options),
    putUnknownValue: (
      body: DaysOfWeekExtensibleEnum,
      options?: StringPutUnknownValueOptions,
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
