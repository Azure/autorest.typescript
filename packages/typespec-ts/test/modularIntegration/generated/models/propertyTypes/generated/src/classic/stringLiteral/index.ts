// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { StringLiteralProperty } from "../../models/models.js";
import {
  stringLiteralGet,
  stringLiteralPut,
} from "../../api/stringLiteral/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface StringLiteralOperations {
  get: (options?: GetOptions) => Promise<StringLiteralProperty>;
  put: (body: StringLiteralProperty, options?: PutOptions) => Promise<void>;
}

export function getStringLiteral(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => stringLiteralGet(context, options),
    put: (body: StringLiteralProperty, options?: PutOptions) =>
      stringLiteralPut(context, body, options),
  };
}

export function getStringLiteralOperations(
  context: ValueTypesContext,
): StringLiteralOperations {
  return {
    ...getStringLiteral(context),
  };
}
