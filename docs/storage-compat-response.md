# Storage-Compat Response Feature

## Overview

The `enable-storage-compat` emitter option augments every regular (non-LRO, non-paging) operation return type with a `_response` property that provides access to the raw HTTP response, the deserialized body, and the deserialized headers. This is primarily used for Azure Storage SDK compatibility where consumers need access to low-level HTTP response details alongside the deserialized result.

## Usage

Enable the feature in your `tspconfig.yaml`:

```yaml
options:
  "@azure-tools/typespec-ts":
    enable-storage-compat: true
```

## Design

### Architecture

The feature follows the **Static Helper** pattern used elsewhere in the emitter (e.g., `pagingHelpers.ts`, `pollingHelpers.ts`). It consists of:

1. **A static helper file** (`static/static-helpers/storageCompatResponse.ts`) containing:
   - `StorageCompatResponseInfo<TBody, THeaders>` — a generic interface defining the `_response` shape
   - `addStorageCompatResponse()` — a utility function that augments a deserialized response with the `_response` metadata

2. **Conditional operation generation** in `operationHelpers.ts` that wraps return values when the flag is enabled

### Generated Code Shape

#### Operation with model body and typed headers

```typescript
import {
  addStorageCompatResponse,
  createStorageCompatOnResponse,
  StorageCompatResponseInfo,
} from "../static-helpers/storageCompatResponse.js";

export async function getWidget(
  context: Client,
  options: GetWidgetOptionalParams = { requestOptions: {} },
): Promise<
  Widget &
    StorageCompatResponseInfo<Widget, { requestId: string; etag?: string }>
> {
  const _storageCompat = createStorageCompatOnResponse(options.onResponse);
  const result = await _getWidgetSend(context, {
    ...options,
    onResponse: _storageCompat.onResponse,
  });
  const parsedBody = await _getWidgetDeserialize(result);
  const parsedHeaders = _getWidgetDeserializeHeaders(result);
  return addStorageCompatResponse(
    _storageCompat.getRawResponse()!,
    parsedBody,
    parsedHeaders,
  );
}
```

#### Void operation (e.g., DELETE)

```typescript
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
  return addStorageCompatResponse(
    _storageCompat.getRawResponse()!,
    undefined,
    {},
  );
}
```

#### Operation without typed headers

```typescript
export async function getSimpleValue(
  context: Client,
  options: GetSimpleValueOptionalParams = { requestOptions: {} },
): Promise<
  string & StorageCompatResponseInfo<string, Record<string, unknown>>
> {
  const _storageCompat = createStorageCompatOnResponse(options.onResponse);
  const result = await _getSimpleValueSend(context, {
    ...options,
    onResponse: _storageCompat.onResponse,
  });
  const parsedBody = await _getSimpleValueDeserialize(result);
  return addStorageCompatResponse(
    _storageCompat.getRawResponse()!,
    parsedBody,
    {},
  );
}
```

### Consumer Usage

```typescript
const client = new StorageClient(/* ... */);
const response = await client.getWidget("widget-1");

// Standard typed access
console.log(response.name); // Widget property

// Raw PipelineResponse access (captured via onResponse callback)
console.log(response._response.rawResponse.status); // 200 (number, from PipelineResponse)
console.log(response._response.parsedBody.name); // Same as response.name
console.log(response._response.parsedHeaders.requestId); // Typed header

// Users can still provide their own onResponse callback — it will be chained
const response2 = await client.getWidget("widget-2", {
  onResponse: (raw) => console.log("Raw status:", raw.status),
});
```

## `_response` Property Shape

```typescript
interface StorageCompatResponseInfo<TBody, THeaders> {
  _response: {
    /** The raw PipelineResponse from the HTTP pipeline, captured via the onResponse callback. */
    rawResponse: PipelineResponse;
    /** The deserialized response body. */
    parsedBody: TBody;
    /** The deserialized response headers. */
    parsedHeaders: THeaders;
  };
}
```

| Property | Type | Description |
|----------|------|-------------|
| `rawResponse` | `PipelineResponse` | The raw HTTP response from the pipeline, captured via the `onResponse` callback. From `@azure/core-rest-pipeline` (Azure flavor) or `@typespec/ts-http-runtime` (generic) |
| `parsedBody` | `TBody` | The deserialized response body; `undefined` for void operations |
| `parsedHeaders` | `THeaders` | The deserialized response headers using the same deserialization as `include-headers-in-response`; `Record<string, unknown>` when no headers are defined in the spec |

## How It Works

The feature uses the `onResponse` callback mechanism built into the HTTP runtime:

1. Before calling the send function, a `createStorageCompatOnResponse()` interceptor is created
2. The interceptor wraps any user-provided `onResponse` callback, chaining them together
3. The interceptor's `onResponse` is injected into the operation options and passed to the send function
4. When the HTTP pipeline fires the callback, the `FullOperationResponse` (which extends `PipelineResponse`) is captured
5. After deserialization completes, `addStorageCompatResponse()` augments the result with the captured `PipelineResponse`

## Files Changed

| File | Change |
|------|--------|
| `packages/typespec-ts/src/lib.ts` | Added `enable-storage-compat` option to `EmitterOptions` and `RLCOptionsSchema` |
| `packages/rlc-common/src/interfaces.ts` | Added `enableStorageCompat` to `RLCOptions` interface |
| `packages/typespec-ts/src/transform/transfromRLCOptions.ts` | Extract the option into `RLCOptions` |
| `packages/typespec-ts/static/static-helpers/storageCompatResponse.ts` | **New file** — `StorageCompatResponseInfo` type, `createStorageCompatOnResponse` function, `addStorageCompatResponse` function |
| `packages/typespec-ts/src/modular/static-helpers-metadata.ts` | Registered `StorageCompatHelpers` |
| `packages/typespec-ts/src/index.ts` | Conditionally include `StorageCompatHelpers` in `loadStaticHelpers()` |
| `packages/typespec-ts/src/modular/helpers/operationHelpers.ts` | Modified `getOperationFunction()` to wrap returns; modified `getDeserializeHeadersPrivateFunction()` to also generate when storage-compat is on |

## Scope & Limitations

### Phase 1 (Current)

- ✅ Regular operations (with model body, primitive body, void, binary, header-only)
- ✅ Void operations return `StorageCompatResponseInfo<undefined>`
- ✅ Response headers are deserialized even without `include-headers-in-response`

### Future Phases

- ❌ LRO operations (`PollerLike<...>` return type) — not yet supported
- ❌ Paging operations (`PagedAsyncIterableIterator<T>` return type) — not yet supported

## Relationship to `include-headers-in-response`

These two options are independent:

- `include-headers-in-response` merges response headers directly into the return type
- `enable-storage-compat` wraps the entire return with `_response` metadata (and always deserializes headers for `parsedHeaders`)

They can be used together, but `enable-storage-compat` independently ensures headers are deserialized regardless of `include-headers-in-response`.
