// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  datetimeValueGet,
  datetimeValuePut,
} from "../../api/datetimeValue/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface DatetimeValueOperations {
  get: (options?: GetOptions) => Promise<Date[]>;
  put: (body: Date[], options?: PutOptions) => Promise<void>;
}

export function getDatetimeValue(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => datetimeValueGet(context, options),
    put: (body: Date[], options?: PutOptions) =>
      datetimeValuePut(context, body, options),
  };
}

export function getDatetimeValueOperations(
  context: ArrayContext,
): DatetimeValueOperations {
  return {
    ...getDatetimeValue(context),
  };
}
