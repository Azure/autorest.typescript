# wrap-non-model-return wraps string scalar response with body property

When `wrap-non-model-return` is enabled, scalar/non-model responses are wrapped with a `body` property to maintain HLC compatibility.

## TypeSpec

```tsp
scalar PrivateDnsZoneSuffix extends string;

@route("/dns")
@get
op get(): PrivateDnsZoneSuffix;
```

```yaml
wrap-non-model-return: true
```

## Models

```ts models alias GetResponse
export type GetResponse = { body: string };
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { GetResponse } from "../models/models.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/dns")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<GetResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return { body: result.body };
}

export async function get(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<GetResponse> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
```

# wrap-non-model-return wraps string array response with body property

## TypeSpec

```tsp
@route("/domains")
@post
op listDomains(): string[];
```

```yaml
wrap-non-model-return: true
```

## Models

```ts models alias ListDomainsResponse
export type ListDomainsResponse = { body: string[] };
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { ListDomainsResponse } from "../models/models.js";
import { ListDomainsOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listDomainsSend(
  context: Client,
  options: ListDomainsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/domains")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listDomainsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListDomainsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    body: result.body.map((p: any) => {
      return p;
    }),
  };
}

export async function listDomains(
  context: Client,
  options: ListDomainsOptionalParams = { requestOptions: {} },
): Promise<ListDomainsResponse> {
  const result = await _listDomainsSend(context, options);
  return _listDomainsDeserialize(result);
}
```

# wrap-non-model-return wraps binary response with blobBody and readableStreamBody

## TypeSpec

```tsp
@route("/logs")
@get
op getLogs(): {
  @header contentType: "application/octet-stream";
  @body body: bytes;
};
```

```yaml
wrap-non-model-return: true
```

## Models

```ts models alias GetLogsResponse
export type GetLogsResponse = {
  /**
   * The response body as a browser Blob.
   */
  blobBody?: Promise<Blob>;
  /**
   * The response body as a node.js Readable stream.
   */
  readableStreamBody?: Promise<NodeJS.ReadableStream | undefined>;
};
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { GetLogsResponse } from "../models/models.js";
import { toBlob } from "../static-helpers/serialization/to-blob.js";
import { GetLogsOptionalParams } from "./options.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getLogsSend(
  context: Client,
  options: GetLogsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/logs")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/octet-stream", ...options.requestOptions?.headers },
    });
}

export async function _getLogsDeserialize(result: StreamableMethod): Promise<GetLogsResponse> {
  try {
    const blobBody = toBlob((result as StreamableMethod).asBrowserStream());
    return { blobBody, readableStreamBody: undefined };
  } catch {
    return { blobBody: undefined, readableStreamBody: (result as StreamableMethod).asNodeStream().then((r) => r.body) };
  }
}

export async function getLogs(
  context: Client,
  options: GetLogsOptionalParams = { requestOptions: {} },
): Promise<GetLogsResponse> {
  const result = _getLogsSend(context, options);
  return _getLogsDeserialize(result);
}
```

# wrap-non-model-return is false: returns non-model type directly

When wrap-non-model-return is false, non-model types are returned directly.

## TypeSpec

```tsp
scalar PrivateDnsZoneSuffix extends string;

@route("/dns")
@get
op get(): PrivateDnsZoneSuffix;
```

```yaml
wrap-non-model-return: false
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/dns")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function get(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
```

# wrap-non-model-return wraps array-of-models response with body property

Array-of-models responses are wrapped just like primitive arrays (matching HLC behavior).

## TypeSpec

```tsp
model Resource {
  id: string;
  name: string;
  scope: string;
}

@route("/resources")
@get
op list(): Resource[];
```

```yaml
wrap-non-model-return: true
```

## Models

```ts models alias ListResponse
export type ListResponse = { body: Resource[] };
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { resourceDeserializer, ListResponse } from "../models/models.js";
import { ListOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSend(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/resources")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listDeserialize(result: PathUncheckedResponse): Promise<ListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    body: result.body.map((p: any) => {
      return resourceDeserializer(p);
    }),
  };
}

export async function list(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): Promise<ListResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}
```

# wrap-non-model-return does not wrap model response types

Model types (interfaces) are always returned directly even when wrap-non-model-return is true.

## TypeSpec

```tsp
model MyModel {
  name: string;
}

@route("/models")
@get
op getModel(): MyModel;
```

```yaml
wrap-non-model-return: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { MyModel, myModelDeserializer } from "../models/models.js";
import { GetModelOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getModelSend(
  context: Client,
  options: GetModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/models")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getModelDeserialize(result: PathUncheckedResponse): Promise<MyModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return myModelDeserializer(result.body);
}

export async function getModel(
  context: Client,
  options: GetModelOptionalParams = { requestOptions: {} },
): Promise<MyModel> {
  const result = await _getModelSend(context, options);
  return _getModelDeserialize(result);
}
```
