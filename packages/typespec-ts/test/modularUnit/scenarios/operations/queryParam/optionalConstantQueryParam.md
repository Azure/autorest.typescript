# Optional constant query parameters should read from options

## TypeSpec

```tsp
op read(@path pathParam: string,
    @query("query-name") queryName: "query",
    @query("optional-query-name") optionalQueryName?: "optionalQuery",
    @query("key-version") keyVersion?: string,
    @body parameters: string): OkResponse;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
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
  pathParam: string,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{pathParam}{?query%2Dname,optional%2Dquery%2Dname,key%2Dversion}",
    {
      pathParam: pathParam,
      "query%2Dname": "query",
      "optional%2Dquery%2Dname": !options?.optionalQueryName
        ? options?.optionalQueryName
        : "optionalQuery",
      "key%2Dversion": options?.keyVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      body: parameters,
    });
}

export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  pathParam: string,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _readSend(context, pathParam, parameters, options);
  return _readDeserialize(result);
}
```

# Optional constant header parameters should read from options

## TypeSpec

```tsp
op read(
    @header("required-header") requiredHeader: "requiredValue",
    @header("optional-header") optionalHeader?: "optionalValue",
    @header("optional-string-header") optionalStringHeader?: string,
    @body parameters: string): OkResponse;
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
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      headers: {
        "required-header": "requiredValue",
        ...(options?.optionalHeader !== undefined
          ? {
              "optional-header": !options?.optionalHeader
                ? options?.optionalHeader
                : "optionalValue",
            }
          : {}),
        ...(options?.optionalStringHeader !== undefined
          ? { "optional-string-header": options?.optionalStringHeader }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: parameters,
    });
}

export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _readSend(context, parameters, options);
  return _readDeserialize(result);
}
```

# Required constant body with optional constant query and header

## TypeSpec

```tsp
op read(
    @query("optional-query") optionalQuery?: "optionalQueryValue",
    @header("optional-header") optionalHeader?: "optionalHeaderValue",
    @body parameters: string): OkResponse;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
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
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{?optional%2Dquery}",
    {
      "optional%2Dquery": !options?.optionalQuery
        ? options?.optionalQuery
        : "optionalQueryValue",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      headers: {
        ...(options?.optionalHeader !== undefined
          ? {
              "optional-header": !options?.optionalHeader
                ? options?.optionalHeader
                : "optionalHeaderValue",
            }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: parameters,
    });
}

export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _readSend(context, parameters, options);
  return _readDeserialize(result);
}
```
