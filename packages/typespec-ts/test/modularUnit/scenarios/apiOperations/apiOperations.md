# should handle contentTypes has binary data in parameters

Api operations should handle contentTypes has binary data

## TypeSpec

```tsp
@route("/uploadFileViaBody")
@post op uploadFileViaBody(
  @header contentType: "application/octet-stream",
  @body body: bytes
): void;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _uploadFileViaBodySend(
  context: Client,
  body: Uint8Array,
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/uploadFileViaBody").post({
    ...operationOptionsToRequestParameters(options),
    contentType: (options.contentType as any) ?? "application/octet-stream",
    body: body
  });
}

export async function _uploadFileViaBodyDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function uploadFileViaBody(
  context: Client,
  body: Uint8Array,
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _uploadFileViaBodySend(context, body, options);
  return _uploadFileViaBodyDeserialize(result);
}
```

# should handle contentTypes has binary data if self defined scalar for upload

## TypeSpec

```tsp
@encode("binary")
scalar BinaryBytes extends bytes;

@route("/uploadFileViaBody")
@post op uploadFileViaBody(
  @header contentType: "application/octet-stream",
  @body body: BinaryBytes
): void;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _uploadFileViaBodySend(
  context: Client,
  body: Uint8Array,
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/uploadFileViaBody").post({
    ...operationOptionsToRequestParameters(options),
    contentType: (options.contentType as any) ?? "application/octet-stream",
    body: body
  });
}

export async function _uploadFileViaBodyDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function uploadFileViaBody(
  context: Client,
  body: Uint8Array,
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _uploadFileViaBodySend(context, body, options);
  return _uploadFileViaBodyDeserialize(result);
}
```

# should handle contentTypes has multiple form data in parameters

## TypeSpec

```tsp
@route("/uploadFile")
@post op uploadFile(
    @header contentType: "multipart/form-data",
    @body body: {
        name: string;
        file: bytes;
    }
): void;
```

## Models \_UploadFileRequest

```ts models interface _UploadFileRequest
/** model interface _UploadFileRequest */
export interface _UploadFileRequest {
  name: string;
  file: Uint8Array;
}
```

## Models function \_uploadFileRequestSerializer

```ts models function _uploadFileRequestSerializer
export function _uploadFileRequestSerializer(item: _UploadFileRequest): any {
  return {
    name: item["name"],
    file: uint8ArrayToString(item["file"], "base64")
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _uploadFileRequestSerializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _uploadFileSend(
  context: Client,
  body: {
    name: string;
    file: Uint8Array;
  },
  options: UploadFileOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/uploadFile").post({
    ...operationOptionsToRequestParameters(options),
    contentType: (options.contentType as any) ?? "multipart/form-data",
    body: _uploadFileRequestSerializer(body)
  });
}

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function uploadFile(
  context: Client,
  body: {
    name: string;
    file: Uint8Array;
  },
  options: UploadFileOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _uploadFileSend(context, body, options);
  return _uploadFileDeserialize(result);
}
```

# should handle contentTypes has multiple form data array in parameters

## TypeSpec

```tsp
scalar BinaryBytes extends bytes;

@route("/uploadFiles")
@post op uploadFiles(
  @header contentType: "multipart/form-data",
  @body body: {
    files: BinaryBytes[];
  }
): void;
```

## Models

```ts models
import { uint8ArrayToString } from "@azure/core-util";

/** model interface _UploadFilesRequest */
export interface _UploadFilesRequest {
  files: Uint8Array[];
}

export function _uploadFilesRequestSerializer(item: _UploadFilesRequest): any {
  return {
    files: item["files"].map((p: any) => {
      return uint8ArrayToString(p, "base64");
    })
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _uploadFilesRequestSerializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _uploadFilesSend(
  context: Client,
  body: {
    files: Uint8Array[];
  },
  options: UploadFilesOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/uploadFiles").post({
    ...operationOptionsToRequestParameters(options),
    contentType: (options.contentType as any) ?? "multipart/form-data",
    body: _uploadFilesRequestSerializer(body)
  });
}

export async function _uploadFilesDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function uploadFiles(
  context: Client,
  body: {
    files: Uint8Array[];
  },
  options: UploadFilesOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _uploadFilesSend(context, body, options);
  return _uploadFilesDeserialize(result);
}
```

# should handle contentTypes has binary data in response

## TypeSpec

```tsp
@route("/downloadFile")
@post
op downloadFile(): {
  @header contentType: "application/octet-stream";
  @body body: bytes;
};
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _downloadFileSend(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/downloadFile")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadFileDeserialize(
  result: PathUncheckedResponse
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function downloadFile(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} }
): Promise<Uint8Array> {
  const result = await _downloadFileSend(context, options);
  return _downloadFileDeserialize(result);
}
```

# should handle contentTypes has binary data if self defined scalar for download

## TypeSpec

```tsp
@encode("binary")
scalar BinaryBytes extends bytes;

@route("/downloadFile")
@post
op downloadFile(): {
  @header contentType: "application/octet-stream";
  @body body: BinaryBytes;
};
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _downloadFileSend(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/downloadFile")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadFileDeserialize(
  result: PathUncheckedResponse
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function downloadFile(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} }
): Promise<Uint8Array> {
  const result = await _downloadFileSend(context, options);
  return _downloadFileDeserialize(result);
}
```

# should handle contentTypes has multiple form data in response

## TypeSpec

```tsp
@route("/downloadFile")
@post
op downloadFile(): {
  @header contentType: "multipart/form-data";
  @body body: {
    name: string;
    file: bytes;
  };
};
```

## Models

```ts models
import { stringToUint8Array } from "@azure/core-util";

/** model interface _DownloadFileResponse */
export interface _DownloadFileResponse {
  name: string;
  file: Uint8Array;
}

export function _downloadFileResponseDeserializer(
  item: any
): _DownloadFileResponse {
  return {
    name: item["name"],
    file:
      typeof item["file"] === "string"
        ? stringToUint8Array(item["file"], "base64")
        : item["file"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _downloadFileResponseDeserializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _downloadFileSend(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/downloadFile")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadFileDeserialize(
  result: PathUncheckedResponse
): Promise<{
  name: string;
  file: Uint8Array;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _downloadFileResponseDeserializer(result.body);
}

export async function downloadFile(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} }
): Promise<{
  name: string;
  file: Uint8Array;
}> {
  const result = await _downloadFileSend(context, options);
  return _downloadFileDeserialize(result);
}
```

# should handle contentTypes has multiple form data array in response

## TypeSpec

```tsp
scalar BinaryBytes extends bytes;

@route("/downloadFile")
@post
op downloadFile(): {
  @header contentType: "multipart/form-data";
  @body body: {
    name: string;
    file: BinaryBytes[];
  };
};
```

## Models

```ts models
import { stringToUint8Array } from "@azure/core-util";

/** model interface _DownloadFileResponse */
export interface _DownloadFileResponse {
  name: string;
  file: Uint8Array[];
}

export function _downloadFileResponseDeserializer(
  item: any
): _DownloadFileResponse {
  return {
    name: item["name"],
    file: item["file"].map((p: any) => {
      return typeof p === "string" ? stringToUint8Array(p, "base64") : p;
    })
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _downloadFileResponseDeserializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _downloadFileSend(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/downloadFile")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadFileDeserialize(
  result: PathUncheckedResponse
): Promise<{
  name: string;
  file: Uint8Array[];
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _downloadFileResponseDeserializer(result.body);
}

export async function downloadFile(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} }
): Promise<{
  name: string;
  file: Uint8Array[];
}> {
  const result = await _downloadFileSend(context, options);
  return _downloadFileDeserialize(result);
}
```

# should generate apiVersion if there's a client level apiVersion but without default value

## TypeSpec

```tsp
model ApiVersionParameter {
  @query
  "api-version": string;
}
op test(...ApiVersionParameter): string;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _testSend(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _testDeserialize(
  result: PathUncheckedResponse
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function test(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} }
): Promise<string> {
  const result = await _testSend(context, options);
  return _testDeserialize(result);
}
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface TestingContext extends Client {}

/** Optional parameters for the client. */
export interface TestingClientOptionalParams extends ClientOptions {}

export function createTesting(
  endpointParam: string,
  options: TestingClientOptionalParams = {}
): TestingContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info }
  };
  const clientContext = getClient(
    options.endpoint ?? options.baseUrl ?? String(endpointParam),
    undefined,
    updatedOptions
  );
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return clientContext;
}
```

## classicClient

```ts classicClient
import { Pipeline } from "@azure/core-rest-pipeline";

export { TestingClientOptionalParams } from "./api/testingContext.js";

export class TestingClient {
  private _client: TestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: TestingClientOptionalParams = {}
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTesting(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix }
    });
    this.pipeline = this._client.pipeline;
  }

  test(options: TestOptionalParams = { requestOptions: {} }): Promise<string> {
    return test(this._client, options);
  }
}
```

# shouldn't generate apiVersion if there's a client level apiVersion and with default value

## TypeSpec

```tsp
model ApiVersionParameter {
  @query
  "api-version": string;
}
op test(...ApiVersionParameter): string;
```

```yaml
mustEmptyDiagnostic: false
needNamespaces: true
needAzureCore: false
withRawContent: false
withVersionedApiVersion: true
ignoreWeirdLine: false
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _testSend(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _testDeserialize(
  result: PathUncheckedResponse
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function test(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} }
): Promise<string> {
  const result = await _testSend(context, options);
  return _testDeserialize(result);
}
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface TestingContext extends Client {}

/** Optional parameters for the client. */
export interface TestingClientOptionalParams extends ClientOptions {
  apiVersion?: string;
}

export function createTesting(
  endpointParam: string,
  options: TestingClientOptionalParams = {}
): TestingContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info }
  };
  const clientContext = getClient(
    options.endpoint ?? options.baseUrl ?? String(endpointParam),
    undefined,
    updatedOptions
  );
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  const apiVersion = options.apiVersion ?? "2022-05-15-preview";
  clientContext.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVersion defined in request url directly
      // Append one if there is no apiVersion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version")) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    }
  });
  return clientContext;
}
```

## classicClient

```ts classicClient
import { Pipeline } from "@azure/core-rest-pipeline";

export { TestingClientOptionalParams } from "./api/testingContext.js";

export class TestingClient {
  private _client: TestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: TestingClientOptionalParams = {}
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTesting(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix }
    });
    this.pipeline = this._client.pipeline;
  }

  test(options: TestOptionalParams = { requestOptions: {} }): Promise<string> {
    return test(this._client, options);
  }
}
```

# should not generate apiVersion if there's no client level apiVersion

## TypeSpec

```tsp
model ApiVersionParameter {
  @query
  "api-version": string;
}
@route("/test")
op test(...ApiVersionParameter): string;
@route("/test1")
op test1(): string;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _testSend(
  context: Client,
  apiVersion: string,
  options: TestOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/test").get({
    ...operationOptionsToRequestParameters(options),
    queryParameters: { "api-version": apiVersion }
  });
}

export async function _testDeserialize(
  result: PathUncheckedResponse
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function test(
  context: Client,
  apiVersion: string,
  options: TestOptionalParams = { requestOptions: {} }
): Promise<string> {
  const result = await _testSend(context, apiVersion, options);
  return _testDeserialize(result);
}

export function _test1Send(
  context: Client,
  options: Test1OptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/test1")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _test1Deserialize(
  result: PathUncheckedResponse
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function test1(
  context: Client,
  options: Test1OptionalParams = { requestOptions: {} }
): Promise<string> {
  const result = await _test1Send(context, options);
  return _test1Deserialize(result);
}
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface TestingContext extends Client {}

/** Optional parameters for the client. */
export interface TestingClientOptionalParams extends ClientOptions {}

export function createTesting(
  endpointParam: string,
  options: TestingClientOptionalParams = {}
): TestingContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info }
  };
  const clientContext = getClient(
    options.endpoint ?? options.baseUrl ?? String(endpointParam),
    undefined,
    updatedOptions
  );
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level"
    );
  }
  return clientContext;
}
```

## classicClient

```ts classicClient
import { Pipeline } from "@azure/core-rest-pipeline";

export { TestingClientOptionalParams } from "./api/testingContext.js";

export class TestingClient {
  private _client: TestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: TestingClientOptionalParams = {}
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTesting(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix }
    });
    this.pipeline = this._client.pipeline;
  }

  test(
    apiVersion: string,
    options: TestOptionalParams = { requestOptions: {} }
  ): Promise<string> {
    return test(this._client, apiVersion, options);
  }

  test1(
    options: Test1OptionalParams = { requestOptions: {} }
  ): Promise<string> {
    return test1(this._client, options);
  }
}
```
