// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { NeverProperty } from "../../models/models.js";
import { neverGet, neverPut } from "../../api/never/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface NeverOperations {
  get: (options?: GetOptions) => Promise<NeverProperty>;
  put: (body: NeverProperty, options?: PutOptions) => Promise<void>;
}

export function getNever(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => neverGet(context, options),
    put: (body: NeverProperty, options?: PutOptions) =>
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
