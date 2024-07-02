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

/** Interface representing a Duration operations. */
export interface DurationOperations {
  /** Get models that will return all properties in the model */
  getNonNull: (
    options?: DurationGetNonNullOptionalParams,
  ) => Promise<DurationProperty>;
  /** Get models that will return the default object */
  getNull: (
    options?: DurationGetNullOptionalParams,
  ) => Promise<DurationProperty>;
  /** Put a body with all properties present. */
  patchNonNull: (
    body: DurationProperty,
    options?: DurationPatchNonNullOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
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
