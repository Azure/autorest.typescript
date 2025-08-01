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
import { UploadFileViaBodyOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _uploadFileViaBodySend(
  context: Client,
  body: Uint8Array,
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/uploadFileViaBody")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/octet-stream",
      body: body,
    });
}

export async function _uploadFileViaBodyDeserialize(
  result: PathUncheckedResponse,
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
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} },
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
import { UploadFileViaBodyOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _uploadFileViaBodySend(
  context: Client,
  body: Uint8Array,
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/uploadFileViaBody")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/octet-stream",
      body: body,
    });
}

export async function _uploadFileViaBodyDeserialize(
  result: PathUncheckedResponse,
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
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _uploadFileViaBodySend(context, body, options);
  return _uploadFileViaBodyDeserialize(result);
}
```

# should handle contentTypes has multiple form data in parameters

## TypeSpec

```tsp
@route("/uploadFile")
@post
op uploadFile(
    @header contentType: "multipart/form-data",
    @multipartBody body: {
        name: HttpPart<string>;
        file: HttpPart<bytes>;
    }
): void;
```

## Models \_UploadFileRequest

```ts models interface _UploadFileRequest
/** model interface _UploadFileRequest */
export interface _UploadFileRequest {
  name: string;
  file:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
}
```

## Models function \_uploadFileRequestSerializer

```ts models function _uploadFileRequestSerializer
export function _uploadFileRequestSerializer(item: _UploadFileRequest): any {
  return [
    { name: "name", body: item["name"] },
    createFilePartDescriptor("file", item["file"], "application/octet-stream"),
  ];
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _uploadFileRequestSerializer } from "../models/models.js";
import { UploadFileOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _uploadFileSend(
  context: Client,
  body: {
    name: string;
    file: Uint8Array;
  },
  options: UploadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/uploadFile")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: _uploadFileRequestSerializer(body),
    });
}

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse,
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
  options: UploadFileOptionalParams = { requestOptions: {} },
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
@post
op uploadFiles(
  @header contentType: "multipart/form-data",
  @multipartBody body: {
    files: HttpPart<BinaryBytes>[];
  }
): void;
```

## Models

```ts models
import {
  FileContents,
  createFilePartDescriptor,
} from "../static-helpers/multipartHelpers.js";

/** model interface _UploadFilesRequest */
export interface _UploadFilesRequest {
  files: Array<
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string }
  >;
}

export function _uploadFilesRequestSerializer(item: _UploadFilesRequest): any {
  return [
    ...item["files"].map((x: unknown) =>
      createFilePartDescriptor("files", x, "application/octet-stream"),
    ),
  ];
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _uploadFilesRequestSerializer } from "../models/models.js";
import { UploadFilesOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _uploadFilesSend(
  context: Client,
  body: {
    files: Uint8Array[];
  },
  options: UploadFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/uploadFiles")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: _uploadFilesRequestSerializer(body),
    });
}

export async function _uploadFilesDeserialize(
  result: PathUncheckedResponse,
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
  options: UploadFilesOptionalParams = { requestOptions: {} },
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
import { DownloadFileOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _downloadFileSend(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/downloadFile")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/octet-stream",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _downloadFileDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function downloadFile(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} },
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
import { DownloadFileOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _downloadFileSend(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/downloadFile")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/octet-stream",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _downloadFileDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function downloadFile(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} },
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
  @multipartBody body: {
    name: HttpPart<string>;
    file: HttpPart<bytes>[];
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
  item: any,
): _DownloadFileResponse {
  return {
    name: item["name"],
    file: item["file"].map((p: any) => {
      return typeof p === "string" ? stringToUint8Array(p, "base64") : p;
    }),
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _downloadFileResponseDeserializer } from "../models/models.js";
import { DownloadFileOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _downloadFileSend(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/downloadFile")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "multipart/form-data",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _downloadFileDeserialize(
  result: PathUncheckedResponse,
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
  options: DownloadFileOptionalParams = { requestOptions: {} },
): Promise<{
  name: string;
  file: Uint8Array[];
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
  @multipartBody body: {
    name: HttpPart<string>;
    file: HttpPart<BinaryBytes>[];
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
  item: any,
): _DownloadFileResponse {
  return {
    name: item["name"],
    file: item["file"].map((p: any) => {
      return typeof p === "string" ? stringToUint8Array(p, "base64") : p;
    }),
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _downloadFileResponseDeserializer } from "../models/models.js";
import { DownloadFileOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _downloadFileSend(
  context: Client,
  options: DownloadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/downloadFile")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "multipart/form-data",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _downloadFileDeserialize(
  result: PathUncheckedResponse,
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
  options: DownloadFileOptionalParams = { requestOptions: {} },
): Promise<{
  name: string;
  file: Uint8Array[];
}> {
  const result = await _downloadFileSend(context, options);
  return _downloadFileDeserialize(result);
}
```

# should handle contentTypes with default value in parameters

Api operations should handle contentTypes has default value

## TypeSpec

```tsp
@route("/uploadFileViaBody")
@post op uploadFileViaBody(
  @header contentType: string = "application/octet-stream",
  @body body: bytes
): void;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { UploadFileViaBodyOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _uploadFileViaBodySend(
  context: Client,
  contentType: string,
  body: Uint8Array,
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/uploadFileViaBody")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: contentType,
      body: body,
    });
}

export async function _uploadFileViaBodyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function uploadFileViaBody(
  context: Client,
  contentType: string,
  body: Uint8Array,
  options: UploadFileViaBodyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _uploadFileViaBodySend(
    context,
    contentType,
    body,
    options,
  );
  return _uploadFileViaBodyDeserialize(result);
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
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { TestOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _testSend(
  context: Client,
  apiVersion: string,
  options: TestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{?api%2Dversion}",
    {
      "api%2Dversion": apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
    });
}

export async function _testDeserialize(
  result: PathUncheckedResponse,
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
  options: TestOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _testSend(context, apiVersion, options);
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
  options: TestingClientOptionalParams = {},
): TestingContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
```

## classicClient

```ts classicClient
import { test } from "./api/operations.js";
import { TestOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TestingClientOptionalParams } from "./api/testingContext.js";

export class TestingClient {
  private _client: TestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: TestingClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTesting(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  test(
    apiVersion: string,
    options: TestOptionalParams = { requestOptions: {} },
  ): Promise<string> {
    return test(this._client, apiVersion, options);
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

The config would be like:

```yaml
mustEmptyDiagnostic: false
needNamespaces: true
needAzureCore: false
withRawContent: false
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { TestOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _testSend(
  context: Client,
  apiVersion: string,
  options: TestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{?api%2Dversion}",
    {
      "api%2Dversion": apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
    });
}

export async function _testDeserialize(
  result: PathUncheckedResponse,
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
  options: TestOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _testSend(context, apiVersion, options);
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
  options: TestingClientOptionalParams = {},
): TestingContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
```

## classicClient

```ts classicClient
import { test } from "./api/operations.js";
import { TestOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TestingClientOptionalParams } from "./api/testingContext.js";

export class TestingClient {
  private _client: TestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: TestingClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTesting(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  test(
    apiVersion: string,
    options: TestOptionalParams = { requestOptions: {} },
  ): Promise<string> {
    return test(this._client, apiVersion, options);
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
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { Test1OptionalParams, TestOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _test1Send(
  context: Client,
  options: Test1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test1")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
    });
}

export async function _test1Deserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function test1(
  context: Client,
  options: Test1OptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _test1Send(context, options);
  return _test1Deserialize(result);
}

export function _testSend(
  context: Client,
  apiVersion: string,
  options: TestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test{?api%2Dversion}",
    {
      "api%2Dversion": apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
    });
}

export async function _testDeserialize(
  result: PathUncheckedResponse,
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
  options: TestOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _testSend(context, apiVersion, options);
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
  options: TestingClientOptionalParams = {},
): TestingContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
```

## classicClient

```ts classicClient
import { test1, test } from "./api/operations.js";
import { Test1OptionalParams, TestOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TestingClientOptionalParams } from "./api/testingContext.js";

export class TestingClient {
  private _client: TestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: TestingClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTesting(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  test1(
    options: Test1OptionalParams = { requestOptions: {} },
  ): Promise<string> {
    return test1(this._client, options);
  }

  test(
    apiVersion: string,
    options: TestOptionalParams = { requestOptions: {} },
  ): Promise<string> {
    return test(this._client, apiVersion, options);
  }
}
```

# Should generate LRO for ARM operation

Sample generation should arm template and operations successfully.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;
using Azure.ResourceManager.Foundations;
using OpenAPI;

/** Microsoft.Contoso Resource Provider management API. */
@armProviderNamespace
@service(#{
  title: "Microsoft.Contoso management service",
})
@versioned(Microsoft.Contoso.Versions)
namespace Microsoft.Contoso;

/** The available API versions. */
enum Versions {
  /** 2021-10-01-preview version */
  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
  v2021_10_01_preview: "2021-10-01-preview",
}

interface Operations extends Azure.ResourceManager.Operations {}

@doc("FileShareSnapshot resource")
@parentResource(FileShare)
model FileShareSnapshot
  is Azure.ResourceManager.ProxyResource<FileShareSnapshotProperties> {
  ...ResourceNameParameter<
    Resource = FileShareSnapshot,
    KeyName = "name",
    NamePattern = "^([a-z]|[0-9])([a-z]|[0-9]|(-(?!-))){1,61}([a-z]|[0-9])$",
    SegmentName = "fileShareSnapshots"
  >;
}
model FileShareProperties {
  mountName?: string;

  hostName?: string;
}

@doc("File share resource")
model FileShare is Azure.ResourceManager.TrackedResource<FileShareProperties> {
  @doc("The resource name of the file share, as seen by the administrator through Azure Resource Manager.")
  @pattern("^([a-z]|[0-9])([a-z]|[0-9]|(-(?!-))){1,61}([a-z]|[0-9])$")
  @key("resourceName")
  @path
  @segment("fileShares")
  name: string;
}


model FileShareSnapshotProperties {
  initiatorId?: string;
}

@armResourceOperations
interface FileShareSnapshots {
 updateFileShareSnapshot is ArmCustomPatchAsync<
    FileShareSnapshot,
    ResourceUpdateModel<FileShareSnapshot, FileShareSnapshotProperties>,
    BaseParameters<FileShareSnapshot>,
    Response = ArmAcceptedLroResponse<LroHeaders = ArmAsyncOperationHeader &
      ArmLroLocationHeader<FinalResult = FileShareSnapshot> &
      Azure.Core.Foundations.RetryAfterHeader>
  >;
}
```

The config would be like:

```yaml
withRawContent: true
```

## Operations

```ts operations
import { ContosoContext as Client } from "./index.js";
import {
  _OperationListResult,
  _operationListResultDeserializer,
  Operation,
  errorResponseDeserializer,
  FileShareSnapshotUpdate,
  fileShareSnapshotUpdateSerializer,
  FileShareSnapshot,
  fileShareSnapshotDeserializer,
} from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  UpdateFileShareSnapshotOptionalParams,
  ListOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _updateFileShareSnapshotSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  properties: FileShareSnapshotUpdate,
  options: UpdateFileShareSnapshotOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/fileShares/{resourceName}/fileShareSnapshots/{name}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
      name: name,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: fileShareSnapshotUpdateSerializer(properties),
    });
}

export async function _updateFileShareSnapshotDeserialize(
  result: PathUncheckedResponse,
): Promise<FileShareSnapshot> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fileShareSnapshotDeserializer(result.body);
}

/** Update a FileShareSnapshot */
export function updateFileShareSnapshot(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  name: string,
  properties: FileShareSnapshotUpdate,
  options: UpdateFileShareSnapshotOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FileShareSnapshot>, FileShareSnapshot> {
  return getLongRunningPoller(
    context,
    _updateFileShareSnapshotDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _updateFileShareSnapshotSend(
          context,
          resourceGroupName,
          resourceName,
          name,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<FileShareSnapshot>, FileShareSnapshot>;
}

export function _listSend(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Contoso/operations{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_OperationListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _operationListResultDeserializer(result.body);
}

/** List the operations for the provider */
export function list(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Operation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
```