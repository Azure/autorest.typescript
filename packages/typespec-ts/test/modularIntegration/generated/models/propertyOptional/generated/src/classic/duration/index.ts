// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { DurationProperty } from "../../models/models.js";
import {
  durationGetAll,
  durationGetDefault,
  durationPutAll,
  durationPutDefault,
} from "../../api/duration/index.js";
import {
  DurationGetAllOptions,
  DurationGetDefaultOptions,
  DurationPutAllOptions,
  DurationPutDefaultOptions,
} from "../../models/options.js";

export interface DurationOperations {
  getAll: (options?: DurationGetAllOptions) => Promise<DurationProperty>;
  getDefault: (
    options?: DurationGetDefaultOptions,
  ) => Promise<DurationProperty>;
  putAll: (
    body: DurationProperty,
    options?: DurationPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: DurationProperty,
    options?: DurationPutDefaultOptions,
  ) => Promise<void>;
}

export function getDuration(context: OptionalContext) {
  return {
    getAll: (options?: DurationGetAllOptions) =>
      durationGetAll(context, options),
    getDefault: (options?: DurationGetDefaultOptions) =>
      durationGetDefault(context, options),
    putAll: (body: DurationProperty, options?: DurationPutAllOptions) =>
      durationPutAll(context, body, options),
    putDefault: (body: DurationProperty, options?: DurationPutDefaultOptions) =>
      durationPutDefault(context, body, options),
  };
}

export function getDurationOperations(
  context: OptionalContext,
): DurationOperations {
  return {
    ...getDuration(context),
  };
}
