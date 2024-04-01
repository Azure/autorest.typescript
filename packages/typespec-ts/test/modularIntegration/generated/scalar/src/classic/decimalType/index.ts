// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import {
  decimalTypeResponseBody,
  decimalTypeRequestBody,
  decimalTypeRequestParameter,
} from "../../api/decimalType/index.js";
import {
  ResponseBodyOptions,
  RequestBodyOptions,
  RequestParameterOptions,
} from "../../models/options.js";

export interface DecimalTypeOperations {
  responseBody: (options?: ResponseBodyOptions) => Promise<number>;
  requestBody: (body: number, options?: RequestBodyOptions) => Promise<void>;
  requestParameter: (
    value: number,
    options?: RequestParameterOptions,
  ) => Promise<void>;
}

export function getDecimalType(context: ScalarContext) {
  return {
    responseBody: (options?: ResponseBodyOptions) =>
      decimalTypeResponseBody(context, options),
    requestBody: (body: number, options?: RequestBodyOptions) =>
      decimalTypeRequestBody(context, body, options),
    requestParameter: (value: number, options?: RequestParameterOptions) =>
      decimalTypeRequestParameter(context, value, options),
  };
}

export function getDecimalTypeOperations(
  context: ScalarContext,
): DecimalTypeOperations {
  return {
    ...getDecimalType(context),
  };
}
