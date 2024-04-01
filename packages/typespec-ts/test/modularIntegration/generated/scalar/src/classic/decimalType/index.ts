// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import {
  decimalTypeResponseBody,
  decimalTypeRequestBody,
  decimalTypeRequestParameter,
} from "../../api/decimalType/index.js";
import {
  DecimalTypeResponseBodyOptions,
  DecimalTypeRequestBodyOptions,
  DecimalTypeRequestParameterOptions,
} from "../../models/options.js";

export interface DecimalTypeOperations {
  responseBody: (options?: DecimalTypeResponseBodyOptions) => Promise<number>;
  requestBody: (
    body: number,
    options?: DecimalTypeRequestBodyOptions,
  ) => Promise<void>;
  requestParameter: (
    value: number,
    options?: DecimalTypeRequestParameterOptions,
  ) => Promise<void>;
}

export function getDecimalType(context: ScalarContext) {
  return {
    responseBody: (options?: DecimalTypeResponseBodyOptions) =>
      decimalTypeResponseBody(context, options),
    requestBody: (body: number, options?: DecimalTypeRequestBodyOptions) =>
      decimalTypeRequestBody(context, body, options),
    requestParameter: (
      value: number,
      options?: DecimalTypeRequestParameterOptions,
    ) => decimalTypeRequestParameter(context, value, options),
  };
}

export function getDecimalTypeOperations(
  context: ScalarContext,
): DecimalTypeOperations {
  return {
    ...getDecimalType(context),
  };
}
