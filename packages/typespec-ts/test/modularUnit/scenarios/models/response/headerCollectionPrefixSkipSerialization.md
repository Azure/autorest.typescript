# Headers with headerCollectionPrefix clientOption are skipped in serialization and deserialization

This scenario tests that when a header property has the `@clientOption` decorator with `"headerCollectionPrefix"`,
the header is excluded from serialization (request send function) and deserialization (response deserialize functions),
but the model interface still retains the property. This applies when `include-headers-in-response: true` is enabled.

## TypeSpec

```yaml
withRawContent: true
needTCGC: true
include-headers-in-response: true
```

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";
using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service(#{
  title: "Test Service"
})
namespace TestService;

model CommonHeaders {
  @header("x-ms-request-id")
  requestId?: string;

  #suppress "@azure-tools/typespec-client-generator-core/client-option"
  @clientOption("headerCollectionPrefix", "x-ms-meta-", "javascript")
  @header("x-ms-meta-")
  metadata?: Record<string>;
}

model BlobProperties {
  name: string;
  contentLength: int64;
}

@route("/blobs/{name}")
@get
op getBlob(@path name: string, ...CommonHeaders): {
  ...BlobProperties;
  ...CommonHeaders;
};
```

## Models

The model interface still includes the metadata property, it is only excluded from ser/deser.

```ts models interface BlobProperties
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface BlobProperties */
export interface BlobProperties {
  name: string;
  contentLength: number;
}
```

## Operations

The send function should NOT include the `metadata` header in the headers block,
but should still include `requestId`.

```ts operations function _getBlobSend
export function _getBlobSend(
  context: Client,
  name: string,
  options: GetBlobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/blobs/{name}",
    {
      name: name,
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
        ...(options?.requestId !== undefined ? { "x-ms-request-id": options?.requestId } : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}
```

The deserialize headers function should NOT include `metadata` but should include `requestId`.

```ts operations function _getBlobDeserializeHeaders
export function _getBlobDeserializeHeaders(result: PathUncheckedResponse): { requestId?: string } {
  return {
    requestId:
      result.headers["x-ms-request-id"] === undefined || result.headers["x-ms-request-id"] === null
        ? result.headers["x-ms-request-id"]
        : result.headers["x-ms-request-id"],
  };
}
```

The body deserializer should remain unchanged.

```ts operations function _getBlobDeserialize
export async function _getBlobDeserialize(result: PathUncheckedResponse): Promise<BlobProperties> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return blobPropertiesDeserializer(result.body);
}
```

The public function should merge body and headers (without metadata).

```ts operations function getBlob
export async function getBlob(
  context: Client,
  name: string,
  options: GetBlobOptionalParams = { requestOptions: {} },
): Promise<{
  name: string;
  contentLength: number;
  requestId?: string;
}> {
  const result = await _getBlobSend(context, name, options);
  const headers = _getBlobDeserializeHeaders(result);
  const payload = await _getBlobDeserialize(result);
  return { ...payload, ...headers };
}
```
