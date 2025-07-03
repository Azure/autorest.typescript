// Licensed under the MIT License.

import { StatusCodeRangeContext as Client } from "./index.js";
import {
  errorInRangeDeserializer,
  defaultErrorDeserializer,
  notFoundErrorDeserializer,
  standard4XXErrorDeserializer,
} from "../models/models.js";
import {
  ErrorResponseStatusCode404OptionalParams,
  ErrorResponseStatusCodeInRangeOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _errorResponseStatusCode404Send(
  context: Client,
  options: ErrorResponseStatusCode404OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/response/status-code-range/error-response-status-code-404")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _errorResponseStatusCode404Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    const statusCode = Number.parseInt(result.status);
    if (statusCode === 404) {
      error.details = notFoundErrorDeserializer(result.body);
    } else if (statusCode >= 400 && statusCode <= 499) {
      error.details = standard4XXErrorDeserializer(result.body);
    }
    throw error;
  }

  return;
}

export async function errorResponseStatusCode404(
  context: Client,
  options: ErrorResponseStatusCode404OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _errorResponseStatusCode404Send(context, options);
  return _errorResponseStatusCode404Deserialize(result);
}

export function _errorResponseStatusCodeInRangeSend(
  context: Client,
  options: ErrorResponseStatusCodeInRangeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/response/status-code-range/error-response-status-code-in-range")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _errorResponseStatusCodeInRangeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    const statusCode = Number.parseInt(result.status);
    if (statusCode >= 494 && statusCode <= 499) {
      error.details = errorInRangeDeserializer(result.body);
    } else {
      error.details = defaultErrorDeserializer(result.body);
    }
    throw error;
  }

  return;
}

export async function errorResponseStatusCodeInRange(
  context: Client,
  options: ErrorResponseStatusCodeInRangeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _errorResponseStatusCodeInRangeSend(context, options);
  return _errorResponseStatusCodeInRangeDeserialize(result);
}
