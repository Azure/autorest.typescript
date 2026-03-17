# Should extract header from bodyRoot model containing header metadata

Tests that when a @bodyRoot model contains @header properties, the model interface keeps
the header property, the serializer filters it out, and the operation extracts the header
from the body parameter.

## TypeSpec

```tsp
model RequestBody {
  @header foo: string;
  name: string;
  age: int32;
}
@route("/bodyRoot-header")
@post
op bodyRootWithHeader(@bodyRoot body: RequestBody): void;
```

## Models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface RequestBody */
export interface RequestBody {
  foo: string;
  name: string;
  age: number;
}

export function requestBodySerializer(item: RequestBody): any {
  return { name: item["name"], age: item["age"] };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { RequestBody, requestBodySerializer } from "../models/models.js";
import { BodyRootWithHeaderOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _bodyRootWithHeaderSend(
  context: Client,
  body: RequestBody,
  options: BodyRootWithHeaderOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/bodyRoot-header")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { foo: body.foo, ...options.requestOptions?.headers },
      body: requestBodySerializer(body),
    });
}

export async function _bodyRootWithHeaderDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function bodyRootWithHeader(
  context: Client,
  body: RequestBody,
  options: BodyRootWithHeaderOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _bodyRootWithHeaderSend(context, body, options);
  return _bodyRootWithHeaderDeserialize(result);
}
```

# Should extract path parameter from body model containing path metadata

Tests that when a body model contains @path properties, the model interface keeps
the path property, the serializer filters it out, and the operation uses the path
parameter from the body model in the URL template.

## TypeSpec

```tsp
model ResourceBody {
  @path resourceId: string;
  name: string;
  value: int32;
}
@route("/resources/{resourceId}")
@post
op createResource(body: ResourceBody): void;
```

## Models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface ResourceBody */
export interface ResourceBody {
  resourceId: string;
  name: string;
  value: number;
}

export function resourceBodySerializer(item: ResourceBody): any {
  return { name: item["name"], value: item["value"] };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { ResourceBody, resourceBodySerializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { CreateResourceOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createResourceSend(
  context: Client,
  body: ResourceBody,
  options: CreateResourceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/resources/{resourceId}",
    {
      resourceId: body.resourceId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: { body: resourceBodySerializer(body) },
    });
}

export async function _createResourceDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function createResource(
  context: Client,
  body: ResourceBody,
  options: CreateResourceOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createResourceSend(context, body, options);
  return _createResourceDeserialize(result);
}
```

# Should extract optional header from bodyRoot model containing optional header metadata

Tests that when a @bodyRoot model contains optional @header properties, the operation
correctly handles the optional header extraction with conditional checks.

## TypeSpec

```tsp
model OptionalHeaderBody {
  @header foo?: string;
  name: string;
  age: int32;
}
@route("/bodyRoot-optional-header")
@post
op bodyRootWithOptionalHeader(@bodyRoot body: OptionalHeaderBody): void;
```

## Models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface OptionalHeaderBody */
export interface OptionalHeaderBody {
  foo?: string;
  name: string;
  age: number;
}

export function optionalHeaderBodySerializer(item: OptionalHeaderBody): any {
  return { name: item["name"], age: item["age"] };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { OptionalHeaderBody, optionalHeaderBodySerializer } from "../models/models.js";
import { BodyRootWithOptionalHeaderOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _bodyRootWithOptionalHeaderSend(
  context: Client,
  body: OptionalHeaderBody,
  options: BodyRootWithOptionalHeaderOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/bodyRoot-optional-header")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(body.foo !== undefined ? { foo: body.foo } : {}),
        ...options.requestOptions?.headers,
      },
      body: optionalHeaderBodySerializer(body),
    });
}

export async function _bodyRootWithOptionalHeaderDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function bodyRootWithOptionalHeader(
  context: Client,
  body: OptionalHeaderBody,
  options: BodyRootWithOptionalHeaderOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _bodyRootWithOptionalHeaderSend(context, body, options);
  return _bodyRootWithOptionalHeaderDeserialize(result);
}
```

# Should extract optional path from body model containing optional path metadata

Tests that when a body model contains optional @path properties, the operation
correctly handles the optional path parameter in the URL template.

## TypeSpec

```tsp
model OptionalPathBody {
  @path resourceId?: string;
  name: string;
  value: int32;
}
@route("/resources/{resourceId}")
@post
op createOptionalPathResource(body: OptionalPathBody): void;
```

## Models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface OptionalPathBody */
export interface OptionalPathBody {
  resourceId?: string;
  name: string;
  value: number;
}

export function optionalPathBodySerializer(item: OptionalPathBody): any {
  return { name: item["name"], value: item["value"] };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { OptionalPathBody, optionalPathBodySerializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { CreateOptionalPathResourceOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createOptionalPathResourceSend(
  context: Client,
  body: OptionalPathBody,
  options: CreateOptionalPathResourceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/resources/{resourceId}",
    {
      resourceId: body.resourceId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: { body: optionalPathBodySerializer(body) },
    });
}

export async function _createOptionalPathResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function createOptionalPathResource(
  context: Client,
  body: OptionalPathBody,
  options: CreateOptionalPathResourceOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createOptionalPathResourceSend(context, body, options);
  return _createOptionalPathResourceDeserialize(result);
}
```
