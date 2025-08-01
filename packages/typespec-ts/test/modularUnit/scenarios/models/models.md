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
