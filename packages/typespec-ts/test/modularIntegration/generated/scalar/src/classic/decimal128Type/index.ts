// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import {
  decimal128TypeResponseBody,
  decimal128TypeRequestBody,
  decimal128TypeRequestParameter,
} from "../../api/decimal128Type/index.js";
import {
  ResponseBodyOptions,
  RequestBodyOptions,
  RequestParameterOptions,
} from "../../models/options.js";

export interface Decimal128TypeOperations {
  responseBody: (options?: ResponseBodyOptions) => Promise<number>;
  requestBody: (body: number, options?: RequestBodyOptions) => Promise<void>;
  requestParameter: (
    value: number,
    options?: RequestParameterOptions,
  ) => Promise<void>;
}

export function getDecimal128Type(context: ScalarContext) {
  return {
    responseBody: (options?: ResponseBodyOptions) =>
      decimal128TypeResponseBody(context, options),
    requestBody: (body: number, options?: RequestBodyOptions) =>
      decimal128TypeRequestBody(context, body, options),
    requestParameter: (value: number, options?: RequestParameterOptions) =>
      decimal128TypeRequestParameter(context, value, options),
  };
}

export function getDecimal128TypeOperations(
  context: ScalarContext,
): Decimal128TypeOperations {
  return {
    ...getDecimal128Type(context),
  };
}
