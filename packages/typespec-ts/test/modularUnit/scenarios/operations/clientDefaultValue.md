# Should apply client default values for optional query, header, and body parameters

## TypeSpec

This tests that query, header, and body parameters with clientDefaultValue are applied when not provided by the user.

```tsp
model Configuration {
  name: string;
}

@route("/api")
interface Operations {
  @get
  @route("/test")
  testQuery(
    @query
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue(10)
    maxResults?: int32,
    
    @query
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("asc")
    sortOrder?: string,
    
    @header
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("application/json")
    customHeader?: string,
    
    @query
    limit?: int32,
    
    @query
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("mismatch")
    typeMismatch?: int32,
    
    @query
    serverDefault?: int32 = 100
  ): Configuration;
  
  @post
  @route("/create")
  create(
    @body
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("default-body")
    body?: string
  ): string;
}
```

Enable the TCGC dependency for clientDefaultValue decorator.

```yaml
needTCGC: true
```

## Operations

The generated operations should apply default values for query, header, and body parameters.

```ts operations
import { TestingContext as Client } from "./index.js";
import { Configuration, configurationDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { CreateOptionalParams, TestQueryOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  options: CreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/api/create")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
      body: options["body"] ?? "default-body",
    });
}

export async function _createDeserialize(result: PathUncheckedResponse): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function create(
  context: Client,
  options: CreateOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _createSend(context, options);
  return _createDeserialize(result);
}

export function _testQuerySend(
  context: Client,
  options: TestQueryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/test{?maxResults,sortOrder,limit,typeMismatch,serverDefault}",
    {
      maxResults: options?.maxResults ?? 10,
      sortOrder: options?.sortOrder ?? "asc",
      limit: options?.limit,
      typeMismatch: options?.typeMismatch,
      serverDefault: options?.serverDefault,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.customHeader !== undefined
          ? { "custom-header": options?.customHeader ?? "application/json" }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _testQueryDeserialize(result: PathUncheckedResponse): Promise<Configuration> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return configurationDeserializer(result.body);
}

export async function testQuery(
  context: Client,
  options: TestQueryOptionalParams = { requestOptions: {} },
): Promise<Configuration> {
  const result = await _testQuerySend(context, options);
  return _testQueryDeserialize(result);
}
```

# Should not apply client default values for required parameters

## TypeSpec

```tsp
model Configuration {
  name: string;
}

@route("/api")
interface Operations {
  @get
  @route("/required")
  testRequired(
    @query
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue(10)
    maxResults: int32,

    @header
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("application/json")
    customHeader: string,

    @query
    limit: int32
  ): Configuration;

  @post
  @route("/createRequired")
  createRequired(
    @body
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("default-body")
    body: string
  ): string;
}
```

```yaml
needTCGC: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Configuration, configurationDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { CreateRequiredOptionalParams, TestRequiredOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createRequiredSend(
  context: Client,
  body: string,
  options: CreateRequiredOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/api/createRequired")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
      body: body,
    });
}

export async function _createRequiredDeserialize(result: PathUncheckedResponse): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function createRequired(
  context: Client,
  body: string,
  options: CreateRequiredOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _createRequiredSend(context, body, options);
  return _createRequiredDeserialize(result);
}

export function _testRequiredSend(
  context: Client,
  maxResults: number,
  customHeader: string,
  limit: number,
  options: TestRequiredOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/required{?maxResults,limit}",
    {
      maxResults: maxResults,
      limit: limit,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        "custom-header": customHeader,
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _testRequiredDeserialize(
  result: PathUncheckedResponse,
): Promise<Configuration> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return configurationDeserializer(result.body);
}

export async function testRequired(
  context: Client,
  maxResults: number,
  customHeader: string,
  limit: number,
  options: TestRequiredOptionalParams = { requestOptions: {} },
): Promise<Configuration> {
  const result = await _testRequiredSend(context, maxResults, customHeader, limit, options);
  return _testRequiredDeserialize(result);
}
```
