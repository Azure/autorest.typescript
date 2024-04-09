// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnionStringLiteralProperty } from "../../models/models.js";
import {
  unionStringLiteralGet,
  unionStringLiteralPut,
} from "../../api/unionStringLiteral/index.js";
import {
  UnionStringLiteralGetOptionalParams,
  UnionStringLiteralPutOptionalParams,
} from "../../models/options.js";

export interface UnionStringLiteralOperations {
  get: (
    options?: UnionStringLiteralGetOptionalParams,
  ) => Promise<UnionStringLiteralProperty>;
  put: (
    body: UnionStringLiteralProperty,
    options?: UnionStringLiteralPutOptionalParams,
  ) => Promise<void>;
}

export function getUnionStringLiteral(context: ValueTypesContext) {
  return {
    get: (options?: UnionStringLiteralGetOptionalParams) =>
      unionStringLiteralGet(context, options),
    put: (
      body: UnionStringLiteralProperty,
      options?: UnionStringLiteralPutOptionalParams,
    ) => unionStringLiteralPut(context, body, options),
  };
}

export function getUnionStringLiteralOperations(
  context: ValueTypesContext,
): UnionStringLiteralOperations {
  return {
    ...getUnionStringLiteral(context),
  };
}
