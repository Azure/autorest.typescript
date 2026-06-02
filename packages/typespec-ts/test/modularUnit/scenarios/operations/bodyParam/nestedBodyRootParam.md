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

/** model interface _StopTestParameterBody */
export interface _StopTestParameterBody {
  stopParameters: StopParameters;
}

export function stopParametersSerializer(item: StopParameters): any {
  return {
    category: item["category"],
    linkType: item["linkType"],
    wasSuccessful: item["wasSuccessful"],
  };
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

# Nested bodyRoot with optional wrapper should add null guard

Tests that when the wrapper model parameter is optional, the generated code adds a null guard
for the nested body accessor path (e.g., `options?.body?.stopParameters`).

## TypeSpec

```tsp
model StopParameters {
  category?: string;
  linkType?: string;
  wasSuccessful?: boolean;
}

@route("/stop-optional-wrapper")
@post
op stopOptionalWrapperTest(body?: {
  @bodyRoot stopParameters: StopParameters;
}): void;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { stopParametersSerializer } from "../models/models.js";
import { StopOptionalWrapperTestOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _stopOptionalWrapperTestSend(
  context: Client,
  options: StopOptionalWrapperTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/stop-optional-wrapper")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: !options?.body?.stopParameters
        ? options?.body?.stopParameters
        : stopParametersSerializer(options?.body?.stopParameters),
    });
}

export async function _stopOptionalWrapperTestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function stopOptionalWrapperTest(
  context: Client,
  options: StopOptionalWrapperTestOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stopOptionalWrapperTestSend(context, options);
  return _stopOptionalWrapperTestDeserialize(result);
}
```

# Nested bodyRoot with optional property should add null guard

Tests that when the `@bodyRoot` property itself is optional within a required wrapper,
the generated code adds a null guard for the optional body parameter.

## TypeSpec

```tsp
model StopParameters {
  category?: string;
  linkType?: string;
  wasSuccessful?: boolean;
}

@route("/stop-optional-prop")
@post
op stopOptionalPropTest(body: {
  @bodyRoot stopParameters?: StopParameters;
}): void;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { StopParameters, stopParametersSerializer } from "../models/models.js";
import { StopOptionalPropTestOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _stopOptionalPropTestSend(
  context: Client,
  body: {
    stopParameters?: StopParameters;
  },
  options: StopOptionalPropTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/stop-optional-prop")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: !body.stopParameters
        ? body.stopParameters
        : stopParametersSerializer(body.stopParameters),
    });
}

export async function _stopOptionalPropTestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function stopOptionalPropTest(
  context: Client,
  body: {
    stopParameters?: StopParameters;
  },
  options: StopOptionalPropTestOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stopOptionalPropTestSend(context, body, options);
  return _stopOptionalPropTestDeserialize(result);
}
```

# Nested bodyRoot with both optional wrapper and optional property

Tests that when both the wrapper model parameter and the `@bodyRoot` property are optional,
the generated code adds a null guard with full optional chaining.

## TypeSpec

```tsp
model StopParameters {
  category?: string;
  linkType?: string;
  wasSuccessful?: boolean;
}

@route("/stop-both-optional")
@post
op stopBothOptionalTest(body?: {
  @bodyRoot stopParameters?: StopParameters;
}): void;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { stopParametersSerializer } from "../models/models.js";
import { StopBothOptionalTestOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _stopBothOptionalTestSend(
  context: Client,
  options: StopBothOptionalTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/stop-both-optional")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: !options?.body?.stopParameters
        ? options?.body?.stopParameters
        : stopParametersSerializer(options?.body?.stopParameters),
    });
}

export async function _stopBothOptionalTestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function stopBothOptionalTest(
  context: Client,
  options: StopBothOptionalTestOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stopBothOptionalTestSend(context, options);
  return _stopBothOptionalTestDeserialize(result);
}
```