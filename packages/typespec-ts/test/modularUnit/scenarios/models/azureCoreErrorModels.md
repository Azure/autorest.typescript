# Custom ErrorDetail model referencing Azure Core ErrorResponse

## TypeSpec

```tsp
model CustomErrorDetail {
  /** Custom error code */
  code: string;
  /** Custom error message */
  message: string;
  /** Custom additional details */
  details?: string;
}

model CustomErrorResponse {
  /** The error information */
  error: CustomErrorDetail;
  /** Reference to Azure Core error response */
  coreError?: Azure.Core.Foundations.ErrorResponse;
}

op getError(): CustomErrorResponse;
```

```yaml
needAzureCore: true
```

## Models

```ts models
/** model interface CustomErrorResponse */
export interface CustomErrorResponse {
  /** The error information */
  error: CustomErrorDetail;
  /** Reference to Azure Core error response */
  coreError?: __PLACEHOLDER_o18__;
}

export function customErrorResponseDeserializer(
  item: any
): CustomErrorResponse {
  return {
    error: customErrorDetailDeserializer(item["error"]),
    coreError: !item["coreError"] ? item["coreError"] : item["coreError"]
  };
}

/** model interface CustomErrorDetail */
export interface CustomErrorDetail {
  /** Custom error code */
  code: string;
  /** Custom error message */
  message: string;
  /** Custom additional details */
  details?: string;
}

export function customErrorDetailDeserializer(item: any): CustomErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    details: item["details"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  CustomErrorResponse,
  customErrorResponseDeserializer
} from "../models/models.js";
import { GetErrorOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _getErrorSend(
  context: Client,
  options: GetErrorOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
}

export async function _getErrorDeserialize(
  result: PathUncheckedResponse
): Promise<CustomErrorResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return customErrorResponseDeserializer(result.body);
}

export async function getError(
  context: Client,
  options: GetErrorOptionalParams = { requestOptions: {} }
): Promise<CustomErrorResponse> {
  const result = await _getErrorSend(context, options);
  return _getErrorDeserialize(result);
}
```
