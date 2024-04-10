// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import {
  decimalTypeResponseBody,
  decimalTypeRequestBody,
  decimalTypeRequestParameter,
} from "../../api/decimalType/index.js";
import {
  DecimalTypeResponseBodyOptionalParams,
  DecimalTypeRequestBodyOptionalParams,
  DecimalTypeRequestParameterOptionalParams,
} from "../../models/options.js";

export interface DecimalTypeOperations {
  responseBody: (
    options?: DecimalTypeResponseBodyOptionalParams,
  ) => Promise<number>;
  requestBody: (
    body: number,
    options?: DecimalTypeRequestBodyOptionalParams,
  ) => Promise<void>;
  requestParameter: (
    value: number,
    options?: DecimalTypeRequestParameterOptionalParams,
  ) => Promise<void>;
}

export function getDecimalType(context: ScalarContext) {
  return {
    responseBody: (options?: DecimalTypeResponseBodyOptionalParams) =>
      decimalTypeResponseBody(context, options),
    requestBody: (
      body: number,
      options?: DecimalTypeRequestBodyOptionalParams,
    ) => decimalTypeRequestBody(context, body, options),
    requestParameter: (
      value: number,
      options?: DecimalTypeRequestParameterOptionalParams,
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
