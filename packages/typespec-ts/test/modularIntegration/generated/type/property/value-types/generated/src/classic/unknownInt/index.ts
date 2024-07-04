// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { UnknownIntProperty } from "../../models/models.js";
import { unknownIntGet, unknownIntPut } from "../../api/unknownInt/index.js";
import {
  UnknownIntGetOptionalParams,
  UnknownIntPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a UnknownInt operations. */
export interface UnknownIntOperations {
  /** Get call */
  get: (options?: UnknownIntGetOptionalParams) => Promise<UnknownIntProperty>;
  /** Put operation */
  put: (
    body: UnknownIntProperty,
    options?: UnknownIntPutOptionalParams,
  ) => Promise<void>;
}

export function getUnknownInt(context: ValueTypesContext) {
  return {
    get: (options?: UnknownIntGetOptionalParams) =>
      unknownIntGet(context, options),
    put: (body: UnknownIntProperty, options?: UnknownIntPutOptionalParams) =>
      unknownIntPut(context, body, options),
  };
}

export function getUnknownIntOperations(
  context: ValueTypesContext,
): UnknownIntOperations {
  return {
    ...getUnknownInt(context),
  };
}
