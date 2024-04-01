// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { DurationProperty } from "../../models/models.js";
import { durationGet, durationPut } from "../../api/duration/index.js";
import {
  DurationGetOptions,
  DurationPutOptions,
} from "../../models/options.js";

export interface DurationOperations {
  get: (options?: DurationGetOptions) => Promise<DurationProperty>;
  put: (body: DurationProperty, options?: DurationPutOptions) => Promise<void>;
}

export function getDuration(context: ValueTypesContext) {
  return {
    get: (options?: DurationGetOptions) => durationGet(context, options),
    put: (body: DurationProperty, options?: DurationPutOptions) =>
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
