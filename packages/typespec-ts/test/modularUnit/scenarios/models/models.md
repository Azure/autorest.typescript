# generate constant type model

## TypeSpec

```tsp
model StreamingChatCompletionOptions {
  stream: true;
  messages: "aaaaa";
  index: 123;
}
op read(@path id: string): {
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

export function streamingChatCompletionOptionsDeserializer(
  item: any
): StreamingChatCompletionOptions {
  return {
    stream: true,
    messages: "aaaaa",
    index: 123
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamingChatCompletionOptions,
  streamingChatCompletionOptionsDeserializer
} from "../models/models.js";
import { ReadOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  id: string,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{id}",
    {
      id: id
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding
    }
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
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
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<StreamingChatCompletionOptions> {
  const result = await _readSend(context, id, options);
  return _readDeserialize(result);
}
```
