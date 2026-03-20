# Storage compat response wrapping for model with headers

When `enable-storage-compat: true` is set, operations return the result augmented with a `_response`
property containing `rawResponse` (PipelineResponse), `parsedBody`, and `parsedHeaders`. The raw
response is captured via the `onResponse` callback injected into the operation options.

## TypeSpec

```yaml
enable-storage-compat: true
include-headers-in-response: true
```

```tsp
model Widget {
  name: string;

  @header("x-request-id")
  requestId?: string;
}

op getWidget(@path id: string): Widget;
```

```ts operations function getWidget
export async function getWidget(
  context: Client,
  id: string,
  options: GetWidgetOptionalParams = { requestOptions: {} },
): Promise<
  { requestId?: string } & Widget & StorageCompatResponseInfo<Widget, { requestId?: string }>
> {
  const _storageCompat = createStorageCompatOnResponse(options.onResponse);
  const result = await _getWidgetSend(context, id, {
    ...options,
    onResponse: _storageCompat.onResponse,
  });
  const parsedBody = await _getWidgetDeserialize(result);
  const parsedHeaders = _getWidgetDeserializeHeaders(result);
  return addStorageCompatResponse(_storageCompat.getRawResponse()!, parsedBody, parsedHeaders);
}
```

# Storage compat response wrapping for void operation

When `enable-storage-compat: true` is set, void operations return `StorageCompatResponseInfo<undefined>`.

## TypeSpec

```yaml
enable-storage-compat: true
```

```tsp
op deleteWidget(@path id: string): void;
```

```ts operations function deleteWidget
export async function deleteWidget(
  context: Client,
  id: string,
  options: DeleteWidgetOptionalParams = { requestOptions: {} },
): Promise<StorageCompatResponseInfo<undefined, Record<string, unknown>>> {
  const _storageCompat = createStorageCompatOnResponse(options.onResponse);
  const result = await _deleteWidgetSend(context, id, {
    ...options,
    onResponse: _storageCompat.onResponse,
  });
  await _deleteWidgetDeserialize(result);
  return addStorageCompatResponse(_storageCompat.getRawResponse()!, undefined, {});
}
```

# Storage compat response wrapping for model without headers

When `enable-storage-compat: true` is set and there are no response headers, `parsedHeaders` defaults to `{}`.

## TypeSpec

```yaml
enable-storage-compat: true
```

```tsp
model Item {
  id: string;
  value: int32;
}

op getItem(@path id: string): Item;
```

```ts operations function getItem
export async function getItem(
  context: Client,
  id: string,
  options: GetItemOptionalParams = { requestOptions: {} },
): Promise<Item & StorageCompatResponseInfo<Item, Record<string, unknown>>> {
  const _storageCompat = createStorageCompatOnResponse(options.onResponse);
  const result = await _getItemSend(context, id, {
    ...options,
    onResponse: _storageCompat.onResponse,
  });
  const parsedBody = await _getItemDeserialize(result);
  return addStorageCompatResponse(_storageCompat.getRawResponse()!, parsedBody, {});
}
```

# Storage compat with void body and response headers

When the operation has no body but has response headers, the body type should be `undefined`
and headers should still be deserialized into `parsedHeaders`.

## TypeSpec

```yaml
enable-storage-compat: true
include-headers-in-response: true
```

```tsp
@put
op setTags(@path id: string): {
  @header("x-ms-request-id")
  requestId?: string;

  @header("x-ms-version")
  version: string;

  @statusCode _: 204;
};
```

```ts operations function setTags
export async function setTags(
  context: Client,
  id: string,
  options: SetTagsOptionalParams = { requestOptions: {} },
): Promise<
  { requestId?: string; version: string } & StorageCompatResponseInfo<
    undefined,
    { requestId?: string; version: string }
  >
> {
  const _storageCompat = createStorageCompatOnResponse(options.onResponse);
  const result = await _setTagsSend(context, id, {
    ...options,
    onResponse: _storageCompat.onResponse,
  });
  await _setTagsDeserialize(result);
  const parsedHeaders = _setTagsDeserializeHeaders(result);
  return addStorageCompatResponse(_storageCompat.getRawResponse()!, undefined, parsedHeaders);
}
```

# Storage compat disabled by default

When `enable-storage-compat` is not set, operations return the normal type without `_response`.

## TypeSpec

```tsp
model Item {
  id: string;
  value: int32;
}

op getItem(@path id: string): Item;
```

```ts operations function getItem
export async function getItem(
  context: Client,
  id: string,
  options: GetItemOptionalParams = { requestOptions: {} },
): Promise<Item> {
  const result = await _getItemSend(context, id, options);
  return _getItemDeserialize(result);
}
```

# Storage compat void body with headers and error enrichment

When `enable-storage-compat: true` and `include-headers-in-response: true` are set,
an operation returning no body but with response headers and an error model should:
1. Generate the error enrichment (`error.details`) in the deserializer
2. Generate exception headers deserialization
3. Include `parsedHeaders` in the storage-compat operation return

## TypeSpec

```yaml
enable-storage-compat: true
include-headers-in-response: true
```

```tsp
@error
model StorageError {
  code: string;
  message: string;
  @header("x-ms-error-code") errorCode: string;
}

op setTags(@path id: string): {
  @header("x-ms-request-id")
  requestId?: string;

  @header("x-ms-version")
  version: string;

  @statusCode _: 204;
} | StorageError;
```

## Operations

```ts operations function _setTagsDeserializeExceptionHeaders
export function _setTagsDeserializeExceptionHeaders(result: PathUncheckedResponse): {
  errorCode: string;
} {
  return { errorCode: result.headers["x-ms-error-code"] };
}
```

```ts operations function _setTagsDeserialize
export async function _setTagsDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = storageErrorDeserializer(result.body);
    error.details = { ...(error.details as any), ..._setTagsDeserializeExceptionHeaders(result) };
    throw error;
  }

  return;
}
```

```ts operations function setTags
export async function setTags(
  context: Client,
  id: string,
  options: SetTagsOptionalParams = { requestOptions: {} },
): Promise<
  { requestId?: string; version: string } & StorageCompatResponseInfo<
    undefined,
    { requestId?: string; version: string }
  >
> {
  const _storageCompat = createStorageCompatOnResponse(options.onResponse);
  const result = await _setTagsSend(context, id, {
    ...options,
    onResponse: _storageCompat.onResponse,
  });
  await _setTagsDeserialize(result);
  const parsedHeaders = _setTagsDeserializeHeaders(result);
  return addStorageCompatResponse(_storageCompat.getRawResponse()!, undefined, parsedHeaders);
}
```

# Storage compat response wrapping for streaming

When `enable-storage-compat: true` is set, streaming operations return `{ blobBody, readableStreamBody, }`.

## TypeSpec

```yaml
enable-storage-compat: true
include-headers-in-response: true
wrap-non-model-return: true
```

```tsp
@error
@mediaTypeHint("application/xml")
model Error {
  code: string;
  message: string;
  @header("x-ms-error-code") errorCode: string;
}

model Widget {
  name: string;

  @header("x-request-id")
  requestId?: string;
}

@get
op download(
  @header("x-request-id")
  requestId?: string,
): {
  @statusCode statusCode: 200 | 206;
  @header("x-ms-client-request-id")
  clientRequestId?: string;  
  @body
  body: bytes;
} | Error;
```

## Operations

```ts operations function _downloadDeserializeExceptionHeaders
export function _downloadDeserializeExceptionHeaders(
  result: PathUncheckedResponse
): {
  errorCode: string;
} {
  return { errorCode: result.headers["x-ms-error-code"] };
}
```

```ts operations function _downloadDeserialize
export async function _downloadDeserialize(
  result: PathUncheckedResponse & DownloadResponse,
): Promise<DownloadResponse> {
  const expectedStatuses = ["200", "206"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorXmlDeserializer(result.body);
    error.details = { ...(error.details as any), ..._downloadDeserializeExceptionHeaders(result) };
    throw error;
  }

  return { blobBody: result.blobBody, readableStreamBody: result.readableStreamBody };
}
```

```ts operations function download
export async function download(
  context: Client,
  options: DownloadOptionalParams = { requestOptions: {} },
): Promise<
  { clientRequestId?: string; } & DownloadResponse &
    StorageCompatResponseInfo<
      DownloadResponse,
      { clientRequestId?: string; }
    >
> {
  const _storageCompat = createStorageCompatOnResponse(options.onResponse);
  const streamableMethod = _downloadSend(context, {
    ...options,
    onResponse: _storageCompat.onResponse,
  });
  const result = await getBinaryStream(streamableMethod);
  const parsedBody = await _downloadDeserialize(result);
  const parsedHeaders = _downloadDeserializeHeaders(result);
  return addStorageCompatResponse(_storageCompat.getRawResponse()!, parsedBody, parsedHeaders);
}

```
