# Plain body without HttpPart should use default serialization

When a model is used with multipart content type but properties don't use `HttpPart<T>`, the serializer should use default handling (return the item as-is) rather than array-of-parts serialization.

This scenario represents cases like Azure Storage's `submitBatch` where the entire multipart content is assembled as a plain string body.

## TypeSpec

```tsp
model BatchRequest {
  body: string;
}

@route("/batch")
op submitBatch(@body body: BatchRequest): void;
```

## Models

For a model without HttpPart properties, even if it's used with multipart, the serializer should just return the item unchanged:

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface BatchRequest */
export interface BatchRequest {
  body: string;
}

export function batchRequestSerializer(item: BatchRequest): any {
  return { body: item["body"] };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { BatchRequest, batchRequestSerializer } from "../models/models.js";
import { SubmitBatchOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _submitBatchSend(
  context: Client,
  body: BatchRequest,
  options: SubmitBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/batch")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: batchRequestSerializer(body),
    });
}

export async function _submitBatchDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function submitBatch(
  context: Client,
  body: BatchRequest,
  options: SubmitBatchOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _submitBatchSend(context, body, options);
  return _submitBatchDeserialize(result);
}
```
