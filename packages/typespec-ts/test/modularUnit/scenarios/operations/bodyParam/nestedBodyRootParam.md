# Nested bodyRoot parameter should use correct accessor from methodParameterSegments

Tests that when a `@bodyRoot` property is nested inside a wrapper model (e.g., as a named
property of an anonymous model parameter), the generated code correctly accesses the body
through the wrapper (e.g., `body.stopParameters`) instead of using the property name directly.

## TypeSpec

```tsp
model StopParameters {
  category?: string;
  linkType?: string;
  wasSuccessful?: boolean;
}

@route("/stop")
@post
op stopTest(body: {
  @bodyRoot stopParameters: StopParameters;
}): void;
```

## Models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface StopParameters */
export interface StopParameters {
  category?: string;
  linkType?: string;
  wasSuccessful?: boolean;
}

export function stopParametersSerializer(item: StopParameters): any {
  return {
    category: item["category"],
    linkType: item["linkType"],
    wasSuccessful: item["wasSuccessful"],
  };
}

/** model interface _StopTestParameterBody */
export interface _StopTestParameterBody {
  stopParameters: StopParameters;
}

export function _stopTestParameterBodySerializer(item: _StopTestParameterBody): any {
  return { stopParameters: stopParametersSerializer(item["stopParameters"]) };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { StopParameters, stopParametersSerializer } from "../models/models.js";
import { StopTestOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _stopTestSend(
  context: Client,
  body: {
    stopParameters: StopParameters;
  },
  options: StopTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/stop")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: stopParametersSerializer(body.stopParameters),
    });
}

export async function _stopTestDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function stopTest(
  context: Client,
  body: {
    stopParameters: StopParameters;
  },
  options: StopTestOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stopTestSend(context, body, options);
  return _stopTestDeserialize(result);
}
```
