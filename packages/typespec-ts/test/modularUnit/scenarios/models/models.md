# generate constant type model

## TypeSpec

```tsp
model StreamingChatCompletionOptions {
  stream: true;
  messages: "aaaaa";
  index: 123;
}
op read(@path id: string; @body body: StreamingChatCompletionOptions): {
  @bodyRoot result: StreamingChatCompletionOptions
};
```

## Models

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface StreamingChatCompletionOptions */
export interface StreamingChatCompletionOptions {
  stream: true;
  messages: "aaaaa";
  index: 123;
}

export function streamingChatCompletionOptionsSerializer(
  item: StreamingChatCompletionOptions,
): any {
  return {
    stream: item["stream"],
    messages: item["messages"],
    index: item["index"],
  };
}

export function streamingChatCompletionOptionsDeserializer(
  item: any,
): StreamingChatCompletionOptions {
  return {
    stream: item["stream"],
    messages: item["messages"],
    index: item["index"],
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamingChatCompletionOptions,
  streamingChatCompletionOptionsSerializer,
  streamingChatCompletionOptionsDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { ReadOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  id: string,
  body: StreamingChatCompletionOptions,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{id}",
    {
      id: id,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: streamingChatCompletionOptionsSerializer(body),
    });
}

export async function _readDeserialize(
  result: PathUncheckedResponse,
): Promise<StreamingChatCompletionOptions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return streamingChatCompletionOptionsDeserializer(result.body);
}

export async function read(
  context: Client,
  id: string,
  body: StreamingChatCompletionOptions,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<StreamingChatCompletionOptions> {
  const result = await _readSend(context, id, body, options);
  return _readDeserialize(result);
}
```

# generate only constant type model

## TypeSpec

```tsp
model StreamingChatCompletionOptions {
  stream: true;
  messages: "aaaaa";
  index: 123;
}
op read(...StreamingChatCompletionOptions): {
  @bodyRoot stream: true;
};
```

## Models

```ts models
// (file was not generated)
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { ReadOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
      body: { stream: true, messages: "aaaaa", index: 123 },
    });
}

export async function _readDeserialize(
  result: PathUncheckedResponse,
): Promise<true> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<true> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

// We need to skip this case due to tcgc issue: https://github.com/Azure/typespec-azure/issues/3088
# skip: Should get the effective model name

## TypeSpec

```tsp
model TodoItem {
  /** The item's unique id */
  @visibility(Lifecycle.Read) @key id: safeint;

  /** The item's title */
  @maxLength(255)
  title: string;

  /** User that created the todo */
  @visibility(Lifecycle.Read) createdBy: string;

  /** User that the todo is assigned to */
  assignedTo?: string;

  /** A longer description of the todo item in markdown format */
  description?: string;

  /** The status of the todo item */
  status: "NotStarted" | "InProgress" | "Completed";

  /** When the todo item was created. */
  @visibility(Lifecycle.Read) createdAt: utcDateTime;

  /** When the todo item was last updated */
  @visibility(Lifecycle.Read) updatedAt: utcDateTime;

  /** When the todo item was makred as completed */
  @visibility(Lifecycle.Read) completedAt?: utcDateTime;

  // Want the read form to be normalized to TodoLabelRecord[], but can't
  // https://github.com/microsoft/typespec/issues/2926
  labels?: string[];

  // hack to get a different schema for create
  // (fastify glue doesn't support readonly)
  @visibility(Lifecycle.Create) dummy?: string;
}

op try(@header contentType: "multipart/form-data",
    @multipartBody body: {
  item: HttpPart<TodoItem>;
}): void;
```

## Models

```ts models
/** model interface _TryRequest */
export interface _TryRequest {
  item: {
    title: string;
    assignedTo?: string;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    labels?: string[];
    dummy?: string;
  };
}

export function _tryRequestSerializer(item: _TryRequest): any {
  return [
    {
      name: "item",
      body: {
        title: title,
        assignedTo: options?.assignedTo,
        description: options?.description,
        status: status,
        labels: !options?.labels
          ? options?.labels
          : options?.labels.map((p: any) => {
              return p;
            }),
        dummy: options?.dummy,
      },
    },
  ];
}
```