// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import {
  decimal128TypeResponseBody,
  decimal128TypeRequestBody,
  decimal128TypeRequestParameter,
} from "../../api/decimal128Type/index.js";
import {
  Decimal128TypeResponseBodyOptions,
  Decimal128TypeRequestBodyOptions,
  Decimal128TypeRequestParameterOptions,
} from "../../models/options.js";

export interface Decimal128TypeOperations {
  responseBody: (
    options?: Decimal128TypeResponseBodyOptions,
  ) => Promise<number>;
  requestBody: (
    body: number,
    options?: Decimal128TypeRequestBodyOptions,
  ) => Promise<void>;
  requestParameter: (
    value: number,
    options?: Decimal128TypeRequestParameterOptions,
  ) => Promise<void>;
}

export function getDecimal128Type(context: ScalarContext) {
  return {
    responseBody: (options?: Decimal128TypeResponseBodyOptions) =>
      decimal128TypeResponseBody(context, options),
    requestBody: (body: number, options?: Decimal128TypeRequestBodyOptions) =>
      decimal128TypeRequestBody(context, body, options),
    requestParameter: (
      value: number,
      options?: Decimal128TypeRequestParameterOptions,
    ) => decimal128TypeRequestParameter(context, value, options),
  };
}

export function getDecimal128TypeOperations(
  context: ScalarContext,
): Decimal128TypeOperations {
  return {
    ...getDecimal128Type(context),
  };
}
