// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/nullableContext.js";
import { DurationProperty } from "../../models/models.js";
import {
  getNonNull,
  getNull,
  patchNonNull,
  patchNull,
} from "../../api/duration/index.js";
import {
  DurationGetNonNullOptionalParams,
  DurationGetNullOptionalParams,
  DurationPatchNonNullOptionalParams,
  DurationPatchNullOptionalParams,
} from "../../models/options.js";

export interface DurationOperations {
  getNonNull: (
    options?: DurationGetNonNullOptionalParams,
  ) => Promise<DurationProperty>;
  getNull: (
    options?: DurationGetNullOptionalParams,
  ) => Promise<DurationProperty>;
  patchNonNull: (
    body: DurationProperty,
    options?: DurationPatchNonNullOptionalParams,
  ) => Promise<void>;
  patchNull: (
    body: DurationProperty,
    options?: DurationPatchNullOptionalParams,
  ) => Promise<void>;
}

export function getDuration(context: NullableContext) {
  return {
    getNonNull: (options?: DurationGetNonNullOptionalParams) =>
      getNonNull(context, options),
    getNull: (options?: DurationGetNullOptionalParams) =>
      getNull(context, options),
    patchNonNull: (
      body: DurationProperty,
      options?: DurationPatchNonNullOptionalParams,
    ) => patchNonNull(context, body, options),
    patchNull: (
      body: DurationProperty,
      options?: DurationPatchNullOptionalParams,
    ) => patchNull(context, body, options),
  };
}

export function getDurationOperations(
  context: NullableContext,
): DurationOperations {
  return {
    ...getDuration(context),
  };
}
