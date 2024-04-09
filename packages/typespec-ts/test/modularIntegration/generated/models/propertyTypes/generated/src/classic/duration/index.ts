// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { DurationProperty } from "../../models/models.js";
import { durationGet, durationPut } from "../../api/duration/index.js";
import {
  DurationGetOptionalParams,
  DurationPutOptionalParams,
} from "../../models/options.js";

export interface DurationOperations {
  get: (options?: DurationGetOptionalParams) => Promise<DurationProperty>;
  put: (
    body: DurationProperty,
    options?: DurationPutOptionalParams,
  ) => Promise<void>;
}

export function getDuration(context: ValueTypesContext) {
  return {
    get: (options?: DurationGetOptionalParams) => durationGet(context, options),
    put: (body: DurationProperty, options?: DurationPutOptionalParams) =>
      durationPut(context, body, options),
  };
}

export function getDurationOperations(
  context: ValueTypesContext,
): DurationOperations {
  return {
    ...getDuration(context),
  };
}
