// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { NeverProperty } from "../../models/models.js";
import { neverGet, neverPut } from "../../api/never/index.js";
import {
  NeverGetOptionalParams,
  NeverPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a Never operations. */
export interface NeverOperations {
  /** Get call */
  get: (options?: NeverGetOptionalParams) => Promise<NeverProperty>;
  /** Put operation */
  put: (body: NeverProperty, options?: NeverPutOptionalParams) => Promise<void>;
}

export function getNever(context: ValueTypesContext) {
  return {
    get: (options?: NeverGetOptionalParams) => neverGet(context, options),
    put: (body: NeverProperty, options?: NeverPutOptionalParams) =>
      neverPut(context, body, options),
  };
}

export function getNeverOperations(
  context: ValueTypesContext,
): NeverOperations {
  return {
    ...getNever(context),
  };
}
