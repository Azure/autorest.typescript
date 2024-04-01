// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnionStringLiteralProperty } from "../../models/models.js";
import {
  unionStringLiteralGet,
  unionStringLiteralPut,
} from "../../api/unionStringLiteral/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnionStringLiteralOperations {
  get: (options?: GetOptions) => Promise<UnionStringLiteralProperty>;
  put: (
    body: UnionStringLiteralProperty,
    options?: PutOptions,
  ) => Promise<void>;
}

export function getUnionStringLiteral(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => unionStringLiteralGet(context, options),
    put: (body: UnionStringLiteralProperty, options?: PutOptions) =>
      unionStringLiteralPut(context, body, options),
  };
}

export function getUnionStringLiteralOperations(
  context: ValueTypesContext,
): UnionStringLiteralOperations {
  return {
    ...getUnionStringLiteral(context),
  };
}
