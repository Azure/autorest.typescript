// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/NullableContext.js";
import { DurationProperty } from "../../models/models.js";
import {
  durationGetNonNull,
  durationGetNull,
  durationPatchNonNull,
  durationPatchNull,
} from "../../api/duration/index.js";
import {
  DurationGetNonNullOptions,
  DurationGetNullOptions,
  DurationPatchNonNullOptions,
  DurationPatchNullOptions,
} from "../../models/options.js";

export interface DurationOperations {
  getNonNull: (
    options?: DurationGetNonNullOptions,
  ) => Promise<DurationProperty>;
  getNull: (options?: DurationGetNullOptions) => Promise<DurationProperty>;
  patchNonNull: (
    body: DurationProperty,
    options?: DurationPatchNonNullOptions,
  ) => Promise<void>;
  patchNull: (
    body: DurationProperty,
    options?: DurationPatchNullOptions,
  ) => Promise<void>;
}

export function getDuration(context: NullableContext) {
  return {
    getNonNull: (options?: DurationGetNonNullOptions) =>
      durationGetNonNull(context, options),
    getNull: (options?: DurationGetNullOptions) =>
      durationGetNull(context, options),
    patchNonNull: (
      body: DurationProperty,
      options?: DurationPatchNonNullOptions,
    ) => durationPatchNonNull(context, body, options),
    patchNull: (body: DurationProperty, options?: DurationPatchNullOptions) =>
      durationPatchNull(context, body, options),
  };
}

export function getDurationOperations(
  context: NullableContext,
): DurationOperations {
  return {
    ...getDuration(context),
  };
}
