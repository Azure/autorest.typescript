# should not generate models if there is no operations

## TypeSpec

```tsp
model Test {
  prop: string;
}
```

## Models

```ts models
// (file was not generated)
```

# should handle type_literals:boolean -> boolean_literals

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";

using TypeSpec.Rest;
using TypeSpec.Http;
using TypeSpec.Versioning;

#suppress "@azure-tools/typespec-azure-core/auth-required" "for test"
@service({
  title: "Azure TypeScript Testing"
})
namespace Azure.TypeScript.Testing;

#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
model InputOutputModel {
  prop: true;
}

#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
@route("/models")
@get
op getModel(@body input: InputOutputModel): InputOutputModel;
```

```yaml
needOptions: false
withRawContent: true
```

## Models

```ts models
/** model interface InputOutputModel */
export interface InputOutputModel {
  prop: true;
}

export function inputOutputModelSerializer(item: InputOutputModel): any {
  return { prop: item["prop"] };
}

export function inputOutputModelDeserializer(item: any): InputOutputModel {
  return {
    prop: item["prop"]
  };
}
```

# should handle type_literals:number -> number_literals

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";

using TypeSpec.Rest;
using TypeSpec.Http;
using TypeSpec.Versioning;

#suppress "@azure-tools/typespec-azure-core/auth-required" "for test"

@service({
  title: "Azure TypeScript Testing"
})
namespace Azure.TypeScript.Testing;

#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
model InputOutputModel {
  prop: 1;
}

#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
@route("/models")
@get
op getModel(@body input: InputOutputModel): InputOutputModel;
```

```yaml
needOptions: false
withRawContent: true
```

## Models

```ts models
/** model interface InputOutputModel */
export interface InputOutputModel {
  prop: 1;
}

export function inputOutputModelSerializer(item: InputOutputModel): any {
  return { prop: item["prop"] };
}

export function inputOutputModelDeserializer(item: any): InputOutputModel {
  return {
    prop: item["prop"]
  };
}
```

# should handle type_literals:string -> string_literals

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";

using TypeSpec.Rest;
using TypeSpec.Http;
using TypeSpec.Versioning;

#suppress "@azure-tools/typespec-azure-core/auth-required" "for test"
@service({
  title: "Azure TypeScript Testing"
})
namespace Azure.TypeScript.Testing;

#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
model InputOutputModel {
  prop: "foo";
}

#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
@route("/models")
@get
op getModel(@body input: InputOutputModel): InputOutputModel;
```

```yaml
needOptions: false
withRawContent: true
```

## Models

```ts models
/** model interface InputOutputModel */
export interface InputOutputModel {
  prop: "foo";
}

export function inputOutputModelSerializer(item: InputOutputModel): any {
  return { prop: item["prop"] };
}

export function inputOutputModelDeserializer(item: any): InputOutputModel {
  return {
    prop: item["prop"]
  };
}
```

# should handle enum member

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";

using TypeSpec.Rest;
using TypeSpec.Http;
using TypeSpec.Versioning;

#suppress "@azure-tools/typespec-azure-core/auth-required" "for test"
@service({
  title: "Azure TypeScript Testing"
})
namespace Azure.TypeScript.Testing;

  @doc("Translation Language Values")
  enum TranslationLanguageValues {
    @doc("English descriptions")
    English: "English",
    @doc("Chinese descriptions")
    Chinese: "Chinese",
  }
#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
model InputOutputModel {
  prop: TranslationLanguageValues.English;
}

#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
@route("/models")
@get
op getModel(@body input: InputOutputModel): InputOutputModel;
```

```yaml
needOptions: false
withRawContent: true
```

## Models

```ts models
/** model interface InputOutputModel */
export interface InputOutputModel {
  prop: "English";
}

export function inputOutputModelSerializer(item: InputOutputModel): any {
  return { prop: item["prop"] };
}

export function inputOutputModelDeserializer(item: any): InputOutputModel {
  return {
    prop: item["prop"]
  };
}

/** Translation Language Values */
export type TranslationLanguageValues = "English" | "Chinese";
```

# should handle boolean literal type

## TypeSpec

```tsp
@doc("The configuration for a streaming chat completion request.")
model StreamingChatCompletionOptions {
    @doc("Indicates whether the completion is a streaming or non-streaming completion.")
    stream: true;
}
@route("/createStreaming")
@post op createStreaming(
    ...StreamingChatCompletionOptions
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

export function _createStreamingSend(
  context: Client,
  options: CreateStreamingOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/createStreaming").post({
    ...operationOptionsToRequestParameters(options),
    body: { stream: true }
  });
}

export async function _createStreamingDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function createStreaming(
  context: Client,
  options: CreateStreamingOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _createStreamingSend(context, options);
  return _createStreamingDeserialize(result);
}
```

# should handle property type plainDate, plainTime, utcDateTime, offsetDatetime with default encoding

## TypeSpec

```tsp
model Foo {
    prop1: plainDate;
    prop2: plainTime;
    prop3: utcDateTime;
    prop4: offsetDateTime;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models interface Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: string;
  prop2: string;
  prop3: Date;
  prop4: string;
}
```

## Models function fooSerializer

```ts models function fooSerializer
export function fooSerializer(item: Foo): any {
  return {
    prop1: item["prop1"],
    prop2: item["prop2"],
    prop3: item["prop3"].toISOString(),
    prop4: item["prop4"]
  };
}
```

## Models function fooDeserializer

```ts models function fooDeserializer
export function fooDeserializer(item: any): Foo {
  return {
    prop1: item["prop1"],
    prop2: item["prop2"],
    prop3: new Date(item["prop3"]),
    prop4: item["prop4"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle header parameter type utcDateTime with default encoding

## TypeSpec

```tsp
op read(@header prop: utcDateTime): OkResponse;
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
  prop: Date,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").get({
    ...operationOptionsToRequestParameters(options),
    headers: { prop: prop.toUTCString() }
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
  prop: Date,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(context, prop, options);
  return _readDeserialize(result);
}
```

# should handle property type utcDateTime, offsetDateTime with rfc3339 encoding

## TypeSpec

```tsp
model Foo {
    @encode(DateTimeKnownEncoding.rfc3339)
    prop1: utcDateTime;
    @encode(DateTimeKnownEncoding.rfc3339)
    prop2: offsetDateTime;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: Date;
  prop2: string;
}
```

## Models function fooSerializer

```ts models function fooSerializer
export function fooSerializer(item: Foo): any {
  return { prop1: item["prop1"].toISOString(), prop2: item["prop2"] };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle property type utcDateTime, offsetDateTime with rfc7231 encoding

## TypeSpec

```tsp
model Foo {
    @encode(DateTimeKnownEncoding.rfc7231)
    prop1: utcDateTime;
    @encode(DateTimeKnownEncoding.rfc7231)
    prop2: offsetDateTime;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: Date;
  prop2: string;
}
```

## Models function fooSerializer

```ts models function fooSerializer
export function fooSerializer(item: Foo): any {
  return { prop1: item["prop1"].toUTCString(), prop2: item["prop2"] };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle property type utcDateTime with unixTimestamp encoding

## TypeSpec

```tsp
model Foo {
    @encode(DateTimeKnownEncoding.unixTimestamp, int64)
    prop1: utcDateTime;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: Date;
}
```

## Models function fooSerializer

```ts models function fooSerializer
export function fooSerializer(item: Foo): any {
  return { prop1: (item["prop1"].getTime() / 1000) | 0 };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle property type duration with default encoding

## TypeSpec

```tsp
model Foo {
    prop1: duration;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: string;
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle property type duration with ISO8601 encoding

## TypeSpec

```tsp
model Foo {
    @encode(DurationKnownEncoding.ISO8601)
    prop1: duration;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: string;
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle property type duration with seconds encoding

## TypeSpec

```tsp
model Foo {
    @encode(DurationKnownEncoding.seconds, float32)
    prop1: duration;
    @encode(DurationKnownEncoding.seconds, int64)
    prop2: duration;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: number;
  prop2: number;
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle property type bytes with default encoding

## TypeSpec

```tsp
model Foo {
    prop1: bytes;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: Uint8Array;
}
```

## Models function fooSerializer

```ts models function fooSerializer
export function fooSerializer(item: Foo): any {
  return { prop1: uint8ArrayToString(item["prop1"], "base64") };
}
```

## Models function fooDeserializer

```ts models function fooDeserializer
export function fooDeserializer(item: any): Foo {
  return {
    prop1:
      typeof item["prop1"] === "string"
        ? stringToUint8Array(item["prop1"], "base64")
        : item["prop1"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle property type bytes with base64 encoding

## TypeSpec

```tsp
model Foo {
    @encode(BytesKnownEncoding.base64)
    prop1: bytes;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: Uint8Array;
}
```

## Models function fooSerializer

```ts models function fooSerializer
export function fooSerializer(item: Foo): any {
  return { prop1: uint8ArrayToString(item["prop1"], "base64") };
}
```

## Models function fooDeserializer

```ts models function fooDeserializer
export function fooDeserializer(item: any): Foo {
  return {
    prop1:
      typeof item["prop1"] === "string"
        ? stringToUint8Array(item["prop1"], "base64")
        : item["prop1"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle property type bytes with base64url encoding

## TypeSpec

```tsp
model Foo {
    @encode(BytesKnownEncoding.base64url)
    prop1: bytes;
}
op read(@body body: Foo): { @body body: Foo };
```

## Models Foo

```ts models interface Foo
/** model interface Foo */
export interface Foo {
  prop1: Uint8Array;
}
```

## Models function fooSerializer

```ts models function fooSerializer
export function fooSerializer(item: Foo): any {
  return { prop1: uint8ArrayToString(item["prop1"], "base64url") };
}
```

## Models function fooDeserializer

```ts models function fooDeserializer
export function fooDeserializer(item: any): Foo {
  return {
    prop1:
      typeof item["prop1"] === "string"
        ? stringToUint8Array(item["prop1"], "base64url")
        : item["prop1"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
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
): Promise<Foo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fooDeserializer(result.body);
}

export async function read(
  context: Client,
  body: Foo,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Foo> {
  const result = await _readSend(context, body, options);
  return _readDeserialize(result);
}
```

# should handle inheritance model

## TypeSpec

```tsp
model Pet {
    name: string;
    weight?: float32;
}
model Cat extends Pet {
    kind: "cat";
    meow: int32;
}
model Dog extends Pet {
    kind: "dog";
    bark: string;
}
op read(): { @body body: Cat | Dog };
```

## Models

```ts models
/** model interface Cat */
export interface Cat extends Pet {
  kind: "cat";
  meow: number;
}

export function catDeserializer(item: any): Cat {
  return {
    name: item["name"],
    weight: item["weight"],
    kind: item["kind"],
    meow: item["meow"]
  };
}

/** model interface Pet */
export interface Pet {
  name: string;
  weight?: number;
}

export function petDeserializer(item: any): Pet {
  return {
    name: item["name"],
    weight: item["weight"]
  };
}

/** model interface Dog */
export interface Dog extends Pet {
  kind: "dog";
  bark: string;
}

export function dogDeserializer(item: any): Dog {
  return {
    name: item["name"],
    weight: item["weight"],
    kind: item["kind"],
    bark: item["bark"]
  };
}

/** Alias for _ReadResponse */
export type _ReadResponse = Cat | Dog;

export function _readResponseDeserializer(item: any): _ReadResponse {
  return item;
}
```

# should handle inheritance model in operations

## TypeSpec

```tsp
model Pet {
    name: string;
    weight?: float32;
}
model Cat extends Pet {
    kind: "cat";
    meow: int32;
}
model Dog extends Pet {
    kind: "dog";
    bark: string;
}
op read(): { @body body: Cat };
```

## Models

```ts models
/** model interface Cat */
export interface Cat extends Pet {
  kind: "cat";
  meow: number;
}

export function catDeserializer(item: any): Cat {
  return {
    name: item["name"],
    weight: item["weight"],
    kind: item["kind"],
    meow: item["meow"]
  };
}

/** model interface Pet */
export interface Pet {
  name: string;
  weight?: number;
}

export function petDeserializer(item: any): Pet {
  return {
    name: item["name"],
    weight: item["weight"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Cat, catDeserializer } from "../models/models.js";
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
): Promise<Cat> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return catDeserializer(result.body);
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Cat> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# should handle multi level inheritance model in operations

## TypeSpec

```tsp
model Animal {
    name: string;
}
model Pet extends Animal {
    weight?: float32;
}
model Cat extends Pet {
    kind: "cat";
    meow: int32;
}
op read(): { @body body: Cat };
```

## Models

```ts models
/** model interface Cat */
export interface Cat extends Pet {
  kind: "cat";
  meow: number;
}

export function catDeserializer(item: any): Cat {
  return {
    weight: item["weight"],
    name: item["name"],
    kind: item["kind"],
    meow: item["meow"]
  };
}

/** model interface Pet */
export interface Pet extends Animal {
  weight?: number;
}

export function petDeserializer(item: any): Pet {
  return {
    name: item["name"],
    weight: item["weight"]
  };
}

/** model interface Animal */
export interface Animal {
  name: string;
}

export function animalDeserializer(item: any): Animal {
  return {
    name: item["name"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Cat, catDeserializer } from "../models/models.js";
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
): Promise<Cat> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return catDeserializer(result.body);
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Cat> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# should handle inheritance model with discriminator in operations

## TypeSpec

```tsp
@discriminator("kind")
model Pet {
    kind: string;
    name: string;
    weight?: float32;
}
model Cat extends Pet {
    kind: "cat";
    meow: int32;
}
model Dog extends Pet {
    kind: "dog";
    bark: string;
}
op read(): { @body body: Cat };
```

## Models

```ts models
/** model interface Cat */
export interface Cat extends Pet {
  kind: "cat";
  meow: number;
}

export function catDeserializer(item: any): Cat {
  return {
    kind: item["kind"],
    name: item["name"],
    weight: item["weight"],
    meow: item["meow"]
  };
}

/** model interface Pet */
export interface Pet {
  kind: string;
  name: string;
  weight?: number;
}

export function petDeserializer(item: any): Pet {
  return {
    kind: item["kind"],
    name: item["name"],
    weight: item["weight"]
  };
}

/** Alias for PetUnion */
export type PetUnion = Cat | Pet;

export function petUnionDeserializer(item: any): PetUnion {
  switch (item.kind) {
    case "cat":
      return catDeserializer(item as Cat);

    default:
      return petDeserializer(item);
  }
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Cat, catDeserializer } from "../models/models.js";
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
): Promise<Cat> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return catDeserializer(result.body);
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Cat> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# should handle base model with discriminator in operations

## TypeSpec

```tsp
@discriminator("kind")
model Pet {
    kind: string;
    name: string;
    weight?: float32;
}
model Cat extends Pet {
    kind: "cat";
    meow: int32;
}
model Dog extends Pet {
    kind: "dog";
    bark: string;
}
op read(): { @body body: Pet };
```

## Models

```ts models
/** model interface Pet */
export interface Pet {
  kind: string;
  name: string;
  weight?: number;
}

export function petDeserializer(item: any): Pet {
  return {
    kind: item["kind"],
    name: item["name"],
    weight: item["weight"]
  };
}

/** Alias for PetUnion */
export type PetUnion = Cat | Dog | Pet;

export function petUnionDeserializer(item: any): PetUnion {
  switch (item.kind) {
    case "cat":
      return catDeserializer(item as Cat);

    case "dog":
      return dogDeserializer(item as Dog);

    default:
      return petDeserializer(item);
  }
}

/** model interface Cat */
export interface Cat extends Pet {
  kind: "cat";
  meow: number;
}

export function catDeserializer(item: any): Cat {
  return {
    kind: item["kind"],
    name: item["name"],
    weight: item["weight"],
    meow: item["meow"]
  };
}

/** model interface Dog */
export interface Dog extends Pet {
  kind: "dog";
  bark: string;
}

export function dogDeserializer(item: any): Dog {
  return {
    kind: item["kind"],
    name: item["name"],
    weight: item["weight"],
    bark: item["bark"]
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { petUnionDeserializer, PetUnion } from "../models/models.js";
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
): Promise<PetUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return petUnionDeserializer(result.body);
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<PetUnion> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# should handle circular in model properties with inheritance

## TypeSpec

```tsp
@discriminator("kind")
model Pet {
    kind: string;
    name: string;
    weight?: float32;
}
model Cat extends Pet {
    kind: "cat";
    meow: int32;
}
@discriminator("type")
model Dog extends Pet {
    kind: "dog";
    type: string;
    bark: string;
}
model Gold extends Dog {
    type: "gold";
    friends: Pet[];
}
op read(): { @body body: Pet };
```

## Models

```ts models
/** model interface Pet */
export interface Pet {
  kind: string;
  name: string;
  weight?: number;
}

export function petDeserializer(item: any): Pet {
  return {
    kind: item["kind"],
    name: item["name"],
    weight: item["weight"]
  };
}

/** Alias for PetUnion */
export type PetUnion = Cat | DogUnion | Pet;

export function petUnionDeserializer(item: any): PetUnion {
  switch (item.kind) {
    case "cat":
      return catDeserializer(item as Cat);

    case "dog":
      return dogUnionDeserializer(item as DogUnion);

    default:
      return petDeserializer(item);
  }
}

/** model interface Cat */
export interface Cat extends Pet {
  kind: "cat";
  meow: number;
}

export function catDeserializer(item: any): Cat {
  return {
    kind: item["kind"],
    name: item["name"],
    weight: item["weight"],
    meow: item["meow"]
  };
}

/** model interface Dog */
export interface Dog extends Pet {
  kind: "dog";
  type: string;
  bark: string;
}

export function dogDeserializer(item: any): Dog {
  return {
    kind: item["kind"],
    name: item["name"],
    weight: item["weight"],
    type: item["type"],
    bark: item["bark"]
  };
}

/** Alias for DogUnion */
export type DogUnion = Gold | Dog;

export function dogUnionDeserializer(item: any): DogUnion {
  switch (item.type) {
    case "gold":
      return goldDeserializer(item as Gold);

    default:
      return dogDeserializer(item);
  }
}

/** model interface Gold */
export interface Gold extends Dog {
  type: "gold";
  friends: PetUnion[];
}

export function goldDeserializer(item: any): Gold {
  return {
    kind: item["kind"],
    type: item["type"],
    bark: item["bark"],
    name: item["name"],
    weight: item["weight"],
    friends: petUnionArrayDeserializer(item["friends"])
  };
}

export function petUnionArrayDeserializer(result: Array<PetUnion>): any[] {
  return result.map((item) => {
    return petUnionDeserializer(item);
  });
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { petUnionDeserializer, PetUnion } from "../models/models.js";
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
): Promise<PetUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return petUnionDeserializer(result.body);
}

export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<PetUnion> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

# should handle circular in model properties with combination

## TypeSpec

```tsp
model Foo {
  name: string;
  weight?: float32;
  bar: Bar;
}
model Bar {
  foo: Foo;
}
op read(): { @body body: Foo };
```

## Models

```ts models
/** model interface Foo */
export interface Foo {
  name: string;
  weight?: number;
  bar: Bar;
}

export function fooDeserializer(item: any): Foo {
  return {
    name: item["name"],
    weight: item["weight"],
    bar: barDeserializer(item["bar"])
  };
}

/** model interface Bar */
export interface Bar {
  foo: Foo;
}

export function barDeserializer(item: any): Bar {
  return {
    foo: fooDeserializer(item["foo"])
  };
}
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

# union variants with string literals being used in contentType headers

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service({
  title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;

union SchemaContentTypeValues {
  avro: "application/json; serialization=Avro",
  json: "application/json; serialization=json",
  custom: "text/plain; charset=utf-8",
  protobuf: "text/vnd.ms.protobuf",
}

op get(
  @header("Content-Type") contentType: SchemaContentTypeValues,
  @body body: string,
): NoContentResponse;
```

```yaml
needOptions: false
withRawContent: true
mustEmptyDiagnostic: false
needNamespaces: false
needAzureCore: false
```

## Models

```ts models
/** Type of SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
```

## Operations

```ts operations
import { DemoServiceContext as Client } from "./index.js";
import { SchemaContentTypeValues } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  contentType: SchemaContentTypeValues,
  body: string,
  options: GetOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    contentType: contentType,
    body: body
  });
}

export async function _getDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function get(
  context: Client,
  contentType: SchemaContentTypeValues,
  body: string,
  options: GetOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _getSend(context, contentType, body, options);
  return _getDeserialize(result);
}
```

# named union with string literals being used in regular headers

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service({
  title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;

union SchemaContentTypeValues {
  avro: "application/json; serialization=Avro",
  json: "application/json; serialization=json",
  custom: "text/plain; charset=utf-8",
  protobuf: "text/vnd.ms.protobuf",
}

op get(
  @header("test-header") testHeader: SchemaContentTypeValues,
  @body body: string,
): { @header("test-header") testHeader: SchemaContentTypeValues; @statusCode _: 204; };
```

```yaml
needOptions: false
withRawContent: true
```

## Models

```ts models
/** Type of SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
```

# anonymous union with string literals being used in regular headers

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service({
  title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;

op get(
  @header("test-header") testHeader: "A" | "B",
  @body body: string,
): { @header("test-header") testHeader: "A" | "B"; @statusCode _: 204; };
```

```yaml
needOptions: false
withRawContent: true
mustEmptyDiagnostic: true
needNamespaces: false
needAzureCore: false
```

## Models

```ts models
// (file was not generated)
```

## Operations

```ts operations
import { DemoServiceContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  testHeader: "A" | "B",
  body: string,
  options: GetOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").post({
    ...operationOptionsToRequestParameters(options),
    headers: { "test-header": testHeader },
    body: body
  });
}

export async function _getDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function get(
  context: Client,
  testHeader: "A" | "B",
  body: string,
  options: GetOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _getSend(context, testHeader, body, options);
  return _getDeserialize(result);
}
```

# should generate correct name and properties if A is B<Template>

## TypeSpec

```tsp
model B<Parameter> {
    prop1: string;
    prop2: Parameter;
}
model A is B<string> {
    @query
    name: string;
};
op read(@bodyRoot body: A): void;
```

## Model interface A

```ts models interface A
/** model interface A */
export interface A {
  prop1: string;
  prop2: string;
}
```

## Model function aSerializer

```ts models function aSerializer
export function aSerializer(item: A): any {
  return { prop1: item["prop1"], prop2: item["prop2"] };
}
```

# should generate correct name and properties if A extends B

## TypeSpec

```tsp
model B {
  prop1: string;
  prop2: string;
}
model A extends B {
  @query
  name: string;
};
op read(@bodyRoot body: A): void;
```

## Model interface B

```ts models interface B
/** model interface B */
export interface B {
  prop1: string;
  prop2: string;
}
```

## Model function bSerializer

```ts models function bSerializer
export function bSerializer(item: B): any {
  return { prop1: item["prop1"], prop2: item["prop2"] };
}
```

## Model interface A

```ts models interface A
/** model interface A */
export interface A extends B {}
```

## Model function aSerializer

```ts models function aSerializer
export function aSerializer(item: A): any {
  return { prop1: item["prop1"], prop2: item["prop2"] };
}
```

# should generate readonly for @visibility('read')

## TypeSpec

```tsp
model A  {
  @visibility("read")
  exactVersion?: string;
};
op read(@body body: A): void;
```

## Models

```ts models
/** model interface A */
export interface A {
  readonly exactVersion?: string;
}

export function aSerializer(item: A): any {
  return item;
}
```

# should not generate readonly for @visibility('read', 'create')

## TypeSpec

```tsp
model A  {
  @visibility("read", "create")
  exactVersion?: string;
};
op read(@body body: A): void;
```

## Model interface A

```ts models interface A
/** model interface A */
export interface A {
  exactVersion?: string;
}
```

## Model function aSerializer

```ts models function aSerializer
export function aSerializer(item: A): any {
  return { exactVersion: item["exactVersion"] };
}
```

# should handle model additional properties from spread record of int64 | string in compatibleMode

## TypeSpec

```tsp
model Vegetables {
    ...Record<int64 | string>;
    carrots: int64;
    beans: int64;
}
op post(@body body: Vegetables): { @body body: Vegetables };
```

```yaml
compatibilityMode: true
```

## Model interface Vegetables

```ts models interface Vegetables
/** model interface Vegetables */
export interface Vegetables extends Record<string, number | string> {
  carrots: number;
  beans: number;
}
```

## Model function vegetablesSerializer

```ts models function vegetablesSerializer
export function vegetablesSerializer(item: Vegetables): any {
  return { ...item, carrots: item["carrots"], beans: item["beans"] };
}
```

# should fail to handle model additional properties from spread record of int64 | string in non compatible mode

## TypeSpec

```tsp
model Vegetables {
  ...Record<int64 | string>;
  carrots: int64;
  beans: int64;
}
op post(@body body: Vegetables): { @body body: Vegetables };
```

Should ingore the warning `@azure-tools/typespec-ts/compatible-additional-properties`:

```yaml
mustEmptyDiagnostic: false
```

## Models

```ts models
/** model interface Vegetables */
export interface Vegetables extends Record<string, number | string> {
  carrots: number;
  beans: number;
}

export function vegetablesSerializer(item: Vegetables): any {
  return { ...item, carrots: item["carrots"], beans: item["beans"] };
}

export function vegetablesDeserializer(item: any): Vegetables {
  return {
    ...item,
    carrots: item["carrots"],
    beans: item["beans"]
  };
}

/** Alias for _VegetablesAdditionalProperty */
export type _VegetablesAdditionalProperty = number | string;

export function _vegetablesAdditionalPropertySerializer(
  item: _VegetablesAdditionalProperty
): any {
  return item;
}

export function _vegetablesAdditionalPropertyDeserializer(
  item: any
): _VegetablesAdditionalProperty {
  return item;
}
```

# should handle model extends with additional properties

## TypeSpec

```tsp
model Base {
  foo: int32;
}
model A extends Base{
  ...Record<int32>;
  prop: int32
}
op post(@body body: A): { @body body: A };
```

```yaml
compatibilityMode: true
```

## Model interface A

```ts models interface A
/** model interface A */
export interface A extends Base, Record<string, number> {
  prop: number;
}
```

## Model function aSerializer

```ts models function aSerializer
export function aSerializer(item: A): any {
  return { ...item, foo: item["foo"], prop: item["prop"] };
}
```

## Model interface Base

```ts models interface Base
/** model interface Base */
export interface Base {
  foo: number;
}
```

## Model function baseSerializer

```ts models function baseSerializer
export function baseSerializer(item: Base): any {
  return { foo: item["foo"] };
}
```
