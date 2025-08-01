# void request body should be omitted

operations void request body should be omitted

## TypeSpec

```tsp
op read(@body param: void): void;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { ReadOptionalParams } from "./options.js";
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
import { ReadOptionalParams } from "./options.js";
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
    #suppress "deprecated" "Legacy test"
    @header
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
import { ReadOptionalParams } from "./options.js";
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
    contentType: "application/json",
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
        : {}),
      ...options.requestOptions?.headers
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
import { ReadOptionalParams } from "./options.js";
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
    headers: {
      "nullable-required-header": nullableRequiredHeader,
      ...options.requestOptions?.headers
    }
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
import { ReadOptionalParams } from "./options.js";
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
    contentType: "application/json",
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
import { ReadOptionalParams } from "./options.js";
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
    contentType: "application/json",
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
import { Bar, _readResponseArrayDeserializer } from "../models/models.js";
import { ReadOptionalParams } from "./options.js";
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
  return context.path("/").get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
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

  return _readResponseArrayDeserializer(result.body);
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
import { ReadOptionalParams } from "./options.js";
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
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    },
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
import { ReadOptionalParams } from "./options.js";
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
    contentType: "application/json",
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
import { ReadOptionalParams } from "./options.js";
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
  return context.path("/").get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
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

model Bar {
    @pageItems
    lists: string[];
}
@post
@list
op test(): Error | Bar;
```

The config would be like:

```yaml
needAzureCore: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { errorDeserializer, _Bar, _barDeserializer } from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator
} from "../static-helpers/pagingHelpers.js";
import { TestOptionalParams } from "./options.js";
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
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
}

export async function _testDeserialize(
  result: PathUncheckedResponse
): Promise<_Bar> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
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

# skip: should generate paging if no @items defined

## TypeSpec

```tsp
@error
model Error {
    code: int32;
    message: string;
}

model Bar {
    lists: string[];
}
@post
@list
op test(): Error | Bar;
```

The config would be like:

```yaml
needAzureCore: true
mustEmptyDiagnostic: false
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { errorDeserializer, Bar, barDeserializer } from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator
} from "../static-helpers/pagingHelpers.js";
import { TestOptionalParams } from "./options.js";
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
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
}

export async function _testDeserialize(
  result: PathUncheckedResponse
): Promise<Bar> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return barDeserializer(result.body);
}

export function test(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} }
): PagedAsyncIterableIterator<void> {
  return buildPagedAsyncIterator(
    context,
    () => _testSend(context, options),
    _testDeserialize,
    ["200"]
  );
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

model Bar {
    @pageItems
    lists: string[];
    @TypeSpec.nextLink
    nextLink: string;
}

model Child extends Bar {
    message: string
}

@post
@list
op test(): Error | Child;
```

The config would be like:

```yaml
needAzureCore: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  errorDeserializer,
  _Child,
  _childDeserializer
} from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator
} from "../static-helpers/pagingHelpers.js";
import { TestOptionalParams } from "./options.js";
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
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
}

export async function _testDeserialize(
  result: PathUncheckedResponse
): Promise<_Child> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
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

# should recursive array type

## TypeSpec

```tsp
model Test {
  prop?: Test[];
}
model TestArrayModel {
  prop: Test[];
}
op get(): TestArrayModel;
```

## Models

```ts models
/** model interface TestArrayModel */
export interface TestArrayModel {
  prop: Test[];
}

export function testArrayModelDeserializer(item: any): TestArrayModel {
  return {
    prop: testArrayDeserializer(item["prop"])
  };
}

export function testArrayDeserializer(result: Array<Test>): any[] {
  return result.map((item) => {
    return testDeserializer(item);
  });
}

/** model interface Test */
export interface Test {
  prop?: Test[];
}

export function testDeserializer(item: any): Test {
  return {
    prop: !item["prop"] ? item["prop"] : testArrayDeserializer(item["prop"])
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  TestArrayModel,
  testArrayModelDeserializer
} from "../models/models.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
}

export async function _getDeserialize(
  result: PathUncheckedResponse
): Promise<TestArrayModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testArrayModelDeserializer(result.body);
}

export async function get(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} }
): Promise<TestArrayModel> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
```

# should recursive dictionary type

## TypeSpec

```tsp
model Test {
  prop?: Record<Test>;
}
model TestDictionary {
  prop: Record<Test>;
}
op get(): TestDictionary;

```

## models

```ts models
/** model interface TestDictionary */
export interface TestDictionary {
  prop: Record<string, Test>;
}

export function testDictionaryDeserializer(item: any): TestDictionary {
  return {
    prop: testRecordDeserializer(item["prop"])
  };
}

export function testRecordDeserializer(
  item: Record<string, any>
): Record<string, Test> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : testDeserializer(item[key]);
  });
  return result;
}

/** model interface Test */
export interface Test {
  prop?: Record<string, Test>;
}

export function testDeserializer(item: any): Test {
  return {
    prop: !item["prop"] ? item["prop"] : testRecordDeserializer(item["prop"])
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  TestDictionary,
  testDictionaryDeserializer
} from "../models/models.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
}

export async function _getDeserialize(
  result: PathUncheckedResponse
): Promise<TestDictionary> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testDictionaryDeserializer(result.body);
}

export async function get(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} }
): Promise<TestDictionary> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
```

# should use correct parameter name (endpointParam) in body serialization for endpoint parameters

## TypeSpec

```tsp
 model Endpoint {
  name: string;
  description?: string;
}

@route("/endpoints/{endpointName}")
op createOrUpdateEndpoint(
  @path endpointName: string,
  @body endpoint: Endpoint
): Endpoint;
```

## models

```ts models
/** model interface Endpoint */
export interface Endpoint {
  name: string;
  description?: string;
}

export function endpointSerializer(item: Endpoint): any {
  return { name: item["name"], description: item["description"] };
}

export function endpointDeserializer(item: any): Endpoint {
  return {
    name: item["name"],
    description: item["description"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  Endpoint,
  endpointSerializer,
  endpointDeserializer
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { CreateOrUpdateEndpointOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _createOrUpdateEndpointSend(
  context: Client,
  endpointName: string,
  endpointParam: Endpoint,
  options: CreateOrUpdateEndpointOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = expandUrlTemplate(
    "/endpoints/{endpointName}",
    {
      endpointName: endpointName
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding
    }
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    },
    body: endpointSerializer(endpointParam)
  });
}

export async function _createOrUpdateEndpointDeserialize(
  result: PathUncheckedResponse
): Promise<Endpoint> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return endpointDeserializer(result.body);
}

export async function createOrUpdateEndpoint(
  context: Client,
  endpointName: string,
  endpointParam: Endpoint,
  options: CreateOrUpdateEndpointOptionalParams = { requestOptions: {} }
): Promise<Endpoint> {
  const result = await _createOrUpdateEndpointSend(
    context,
    endpointName,
    endpointParam,
    options
  );
  return _createOrUpdateEndpointDeserialize(result);
}
```
