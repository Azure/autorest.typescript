# should handle recursive nullable union

## TypeSpec

```tsp
union A {
  null,
  {
    code?: string,
    message?: string,
    propA?: A,
  },
}
op post(@body body: A): { @body body: A };
```

## Models

```ts models
/** model interface _PostRequest */
export interface _PostRequest {
  code?: string;
  message?: string;
  propA?: A;
}

export function _postRequestSerializer(item: _PostRequest): any {
  return {
    code: item["code"],
    message: item["message"],
    propA: !item["propA"]
      ? item["propA"]
      : _postRequestSerializer(item["propA"]),
  };
}

export function _postRequestDeserializer(item: any): _PostRequest {
  return {
    code: item["code"],
    message: item["message"],
    propA: !item["propA"]
      ? item["propA"]
      : _postRequestDeserializer(item["propA"]),
  };
}

/** Alias for A */
export type A = {
  code?: string;
  message?: string;
  propA?: A;
} | null;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  _postRequestSerializer,
  _postRequestDeserializer,
  A,
} from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _postSend(
  context: Client,
  body: A,
  options: PostOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: !body ? body : _postRequestSerializer(body),
    });
}

export async function _postDeserialize(
  result: PathUncheckedResponse,
): Promise<A> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    code: ["code"],
    message: ["message"],
    propA: !["propA"] ? ["propA"] : _postRequestDeserializer(["propA"]),
  };
}

export async function post(
  context: Client,
  body: A,
  options: PostOptionalParams = { requestOptions: {} },
): Promise<A> {
  const result = await _postSend(context, body, options);
  return _postDeserialize(result);
}
```
