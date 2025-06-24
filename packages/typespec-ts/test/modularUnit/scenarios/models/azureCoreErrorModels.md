# Custom ErrorDetail model referencing Azure Core ErrorResponse

## TypeSpec

```tsp
model ErrorDetail {
  code: string;
  message: string;
  details?: string;
}

model ErrorResponse {
  error: ErrorDetail;
  coreError?: Azure.Core.Foundations.ErrorResponse;
}

op getError(): ErrorResponse;
```

```yaml
needAzureCore: true
```

## Models

```ts models
/** model interface ErrorResponse */
export interface ErrorResponse {
  error: ErrorDetail;
  coreError?: __PLACEHOLDER_o18__;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: errorDetailDeserializer(item["error"]),
    coreError: !item["coreError"] ? item["coreError"] : item["coreError"]
  };
}

/** model interface ErrorDetail */
export interface ErrorDetail {
  code: string;
  message: string;
  details?: string;
}

export function errorDetailDeserializer(item: any): ErrorDetail {
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
import { ErrorResponse, errorResponseDeserializer } from "../models/models.js";
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
): Promise<ErrorResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return errorResponseDeserializer(result.body);
}

export async function getError(
  context: Client,
  options: GetErrorOptionalParams = { requestOptions: {} }
): Promise<ErrorResponse> {
  const result = await _getErrorSend(context, options);
  return _getErrorDeserialize(result);
}
```
