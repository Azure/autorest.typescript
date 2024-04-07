// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FixedContext } from "../../api/FixedContext.js";
import { DaysOfWeekEnum } from "../../models/models.js";
import {
  getKnownValue,
  putKnownValue,
  putUnknownValue,
} from "../../api/string/index.js";
import {
  StringGetKnownValueOptions,
  StringPutKnownValueOptions,
  StringPutUnknownValueOptions,
} from "../../models/options.js";

export interface StringOperations {
  getKnownValue: (
    options?: StringGetKnownValueOptions,
  ) => Promise<DaysOfWeekEnum>;
  putKnownValue: (
    body: DaysOfWeekEnum,
    options?: StringPutKnownValueOptions,
  ) => Promise<void>;
  putUnknownValue: (
    body: DaysOfWeekEnum,
    options?: StringPutUnknownValueOptions,
  ) => Promise<void>;
}

export function getString(context: FixedContext) {
  return {
    getKnownValue: (options?: StringGetKnownValueOptions) =>
      getKnownValue(context, options),
    putKnownValue: (
      body: DaysOfWeekEnum,
      options?: StringPutKnownValueOptions,
    ) => putKnownValue(context, body, options),
    putUnknownValue: (
      body: DaysOfWeekEnum,
      options?: StringPutUnknownValueOptions,
    ) => putUnknownValue(context, body, options),
  };
}

export function getStringOperations(context: FixedContext): StringOperations {
  return {
    ...getString(context),
  };
}
