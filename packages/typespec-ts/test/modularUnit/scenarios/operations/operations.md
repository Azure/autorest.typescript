# void request body should be omitted

operations void request body should be omitted

## TypeSpec

```tsp
op read(@body param: void): void;
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

export function _readSend(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# void response body should be omitted

## TypeSpec

```tsp
op read(): { @body _: void;};
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

export function _readSend(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# required & optional & nullable headers

## TypeSpec

```tsp
model Bar {
    prop1: string;
    prop2: int64;
}
@encode(BytesKnownEncoding.base64url)
scalar base64urlBytes extends bytes;
op read(
    @header requiredHeader: string,
    @header optionalHeader?: string,
    @header nullableOptionalHeader?: string | null,
    @header bytesHeader: bytes,
    @header @encode(BytesKnownEncoding.base64) value: bytes,
    @header({
    format: "csv",
    })
    csvArrayHeader: base64urlBytes[],
    @header utcDateHeader: utcDateTime,
    @header optionalDateHeader?: utcDateTime,
    @header nullableDateHeader?: utcDateTime | null,
    ...Bar): OkResponse;
```

Should ingore the warning `@azure-tools/typespec-ts/unable-serialized-type`:

```yaml
mustEmptyDiagnostic: false
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { buildCsvCollection } from "../static-helpers/serialization/build-csv-collection.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";

export function _readSend(
  context: Client,
  requiredHeader: string,
  bytesHeader: Uint8Array,
  value: Uint8Array,
  csvArrayHeader: Uint8Array[],
  utcDateHeader: Date,
  prop1: string,
  prop2: number,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      "required-header": requiredHeader,
      ...(options?.optionalHeader !== undefined
        ? { "optional-header": options?.optionalHeader }
        : {}),
      ...(options?.nullableOptionalHeader !== undefined &&
      options?.nullableOptionalHeader !== null
        ? { "nullable-optional-header": options?.nullableOptionalHeader }
        : {}),
      "bytes-header": uint8ArrayToString(bytesHeader, "base64"),
      value: uint8ArrayToString(value, "base64"),
      "csv-array-header": buildCsvCollection(
        csvArrayHeader.map((p: any) => {
          return uint8ArrayToString(p, "base64url");
        })
      ),
      "utc-date-header": utcDateHeader.toUTCString(),
      ...(options?.optionalDateHeader !== undefined
        ? {
            "optional-date-header": !options?.optionalDateHeader
              ? options?.optionalDateHeader
              : options?.optionalDateHeader.toUTCString()
          }
        : {}),
      ...(options?.nullableDateHeader !== undefined &&
      options?.nullableDateHeader !== null
        ? {
            "nullable-date-header": !options?.nullableDateHeader
              ? options?.nullableDateHeader
              : options?.nullableDateHeader.toUTCString()
          }
        : {})
    },
    body: { prop1: prop1, prop2: prop2 }
  });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  requiredHeader: string,
  bytesHeader: Uint8Array,
  value: Uint8Array,
  csvArrayHeader: Uint8Array[],
  utcDateHeader: Date,
  prop1: string,
  prop2: number,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(
    context,
    requiredHeader,
    bytesHeader,
    value,
    csvArrayHeader,
    utcDateHeader,
    prop1,
    prop2,
    options
  );
  return _readDeserialize(result);
}
```

# should generate code for required nullable header

## TypeSpec

```tsp
op read( @header nullableRequiredHeader: string | null): OkResponse;
```

Should ingore the warning `@azure-tools/typespec-ts/nullable-required-header`:

```yaml
mustEmptyDiagnostic: false
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

export function _readSend(
  context: Client,
  nullableRequiredHeader: string | null,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").get({
    ...operationOptionsToRequestParameters(options),
    headers: { "nullable-required-header": nullableRequiredHeader }
  });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  nullableRequiredHeader: string | null,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(context, nullableRequiredHeader, options);
  return _readDeserialize(result);
}
```

# should generate required model array as request body

## TypeSpec

```tsp
model Bar {
    prop1: string;
    prop2: int64;
}
op read(@body bars?: Bar[]): OkResponse;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { barArraySerializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    body: !options["bars"]
      ? options["bars"]
      : barArraySerializer(options["bars"])
  });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# should handle `undefined` for named model array as request body

## TypeSpec

```tsp
model Bar {
    prop1: string;
    prop2: int64;
}
op read(@body bars: Bar[]): OkResponse;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Bar, barArraySerializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  bars: Bar[],
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    body: barArraySerializer(bars)
  });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  bars: Bar[],
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(context, bars, options);
  return _readDeserialize(result);
}
```

# should handle `null` for anonymous model array as request body

## TypeSpec

```tsp
model Bar {
    prop1: string;
    prop2: int64;
}
op read(): { a: Bar}[] | null;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Bar, readResponseArrayDeserializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _readDeserialize(result: PathUncheckedResponse): Promise<
  {
    a: Bar;
  }[]
> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return readResponseArrayDeserializer(result.body);
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<
  {
    a: Bar;
  }[]
> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# should handle `null` for named array as response body

## TypeSpec

```tsp
model Bar {
    prop1: string;
    prop2: int64;
}
op read(@body bars?: Bar[]): Bar[] | null;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  Bar,
  barArraySerializer,
  barArrayDeserializer
} from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    body: !options["bars"]
      ? options["bars"]
      : barArraySerializer(options["bars"])
  });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<Bar[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return barArrayDeserializer(result.body);
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Bar[]> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# should handle `undefined`/`null` for array in request body

## TypeSpec

```tsp
model Bar {
    prop1: string;
    prop2: int64;
}
model Foo {
    optionalBars?: Bar[];
    requiredBars: Bar[];
    nullableBars?: Bar[] | null;
    nullableRequiredBars: Bar[] | null;
}
op read(@body body: Foo): OkResponse;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    body: fooSerializer(body)
  });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle `undefined`/`null` for array in response body

## TypeSpec

```tsp
model Bar {
    prop1: string;
    prop2: int64;
}
model Foo {
    optionalBars?: Bar[];
    requiredBars: Bar[];
    nullableBars?: Bar[] | null;
    nullableRequiredBars: Bar[] | null;
}
op read(): Foo;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooDeserializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# should generate paging if @items defined

## TypeSpec

```tsp
@error
model Error {
    code: int32;
    message: string;
}

@pagedResult
model Bar {
    @items
    lists: string[];
}
@post
op test(): Error | Bar;
```

```yaml
needAzureCore: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _Bar, _barDeserializer } from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator
} from "../static-helpers/pagingHelpers.js";
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
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _testDeserialize(
  result: PathUncheckedResponse
): Promise<_Bar> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _barDeserializer(result.body);
}

export function test(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} }
): PagedAsyncIterableIterator<string> {
  return buildPagedAsyncIterator(
    context,
    () => _testSend(context, options),
    _testDeserialize,
    ["200"],
    { itemName: "lists" }
  );
}
```

# should generate paging if no @items defined

## TypeSpec

```tsp
@error
model Error {
    code: int32;
    message: string;
}

@pagedResult
model Bar {
    lists: string[];
}
@post
op test(): Error | Bar;
```

```yaml
needAzureCore: true
mustEmptyDiagnostic: false
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Bar, barDeserializer } from "../models/models.js";
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
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _testDeserialize(
  result: PathUncheckedResponse
): Promise<Bar> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return barDeserializer(result.body);
}

export async function test(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} }
): Promise<Bar> {
  const result = await _testSend(context, options);
  return _testDeserialize(result);
}
```

# should generate paging if have extend model

## TypeSpec

```tsp
@error
model Error {
    code: int32;
    message: string;
}

@pagedResult
model Bar {
    @items
    lists: string[];
    @TypeSpec.nextLink
    nextLink: string;
}

model Child extends Bar {
    message: string
}

@post
op test(): Error | Child;
```

```yaml
needAzureCore: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { _Child, _childDeserializer } from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator
} from "../static-helpers/pagingHelpers.js";
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
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _testDeserialize(
  result: PathUncheckedResponse
): Promise<_Child> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _childDeserializer(result.body);
}

export function test(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} }
): PagedAsyncIterableIterator<string> {
  return buildPagedAsyncIterator(
    context,
    () => _testSend(context, options),
    _testDeserialize,
    ["200"],
    { itemName: "lists", nextLinkName: "nextLink" }
  );
}
```
