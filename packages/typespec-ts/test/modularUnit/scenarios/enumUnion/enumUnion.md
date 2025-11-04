# header parameters named union fixed as contentType

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service(#{
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

The config would be like:

```yaml
mustEmptyDiagnostic: false
needNamespaces: false
needAzureCore: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Type of SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
```

## paramOutput

```ts operations
import { DemoServiceContext as Client } from "./index.js";
import { SchemaContentTypeValues } from "../models/models.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  contentType: SchemaContentTypeValues,
  body: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: contentType,
      body: body,
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
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
  options: GetOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getSend(context, contentType, body, options);
  return _getDeserialize(result);
}
```

# header parameters named union fixed in regular headers

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service(#{
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

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Type of SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
```

# union with string as extensible enum is exhaustive

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service(#{
    title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
union SchemaContentTypeValues {
  custom: "text/plain; charset=utf-8",
  protobuf: "text/vnd.ms.protobuf",
  others: string,
}

op get(
  @header("test-header") testHeader: SchemaContentTypeValues,
  @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Type of SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
```

# union contains union with string element

## TypeSpec

```tsp
 import "@typespec/http";
import "@typespec/rest";

@service(#{
    title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
union JsonContentType {
  avro: "application/json; serialization=Avro",
  json: "application/json; serialization=json",
}

union SchemaContentTypeValues {
  JsonContentType,
  custom: "text/plain; charset=utf-8",
  protobuf: "text/vnd.ms.protobuf",
  others: string,
}

op get(
  @header("test-header") testHeader: SchemaContentTypeValues,
  @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Alias for SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | JsonContentType
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf"
  | string;

export function schemaContentTypeValuesSerializer(
  item: SchemaContentTypeValues,
): any {
  return item;
}

/** Type of JsonContentType */
export type JsonContentType =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json";
```

# union contains enum with string element

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service(#{
    title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
enum JsonContentType {
    avro: "application/json; serialization=Avro",
    json: "application/json; serialization=json",
}

union SchemaContentTypeValues {
    JsonContentType,
    custom: "text/plain; charset=utf-8",
    protobuf: "text/vnd.ms.protobuf",
    others: string,
}

op get(
    @header("test-header") testHeader: SchemaContentTypeValues,
    @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Alias for SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | JsonContentType
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf"
  | string;

export function schemaContentTypeValuesSerializer(
  item: SchemaContentTypeValues,
): any {
  return item;
}

/** Type of JsonContentType */
export type JsonContentType =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json";
```

# union with string as extensible enum

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service(#{
    title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
union SchemaContentTypeValues {
    custom: "text/plain; charset=utf-8",
    protobuf: "text/vnd.ms.protobuf",
    others: string,
}

op get(
    @header("test-header") testHeader: SchemaContentTypeValues,
    @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Type of SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
```

# union contains union with string element

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service(#{
    title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
union JsonContentType {
    avro: "application/json; serialization=Avro",
    json: "application/json; serialization=json",
}

union SchemaContentTypeValues {
    JsonContentType,
    custom: "text/plain; charset=utf-8",
    protobuf: "text/vnd.ms.protobuf",
    others: string,
}

op get(
    @header("test-header") testHeader: SchemaContentTypeValues,
    @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Alias for SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | JsonContentType
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf"
  | string;

export function schemaContentTypeValuesSerializer(
  item: SchemaContentTypeValues,
): any {
  return item;
}

/** Type of JsonContentType */
export type JsonContentType =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json";
```

# union contains enum with string element

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service(#{
    title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
enum JsonContentType {
    avro: "application/json; serialization=Avro",
    json: "application/json; serialization=json",
}

union SchemaContentTypeValues {
    JsonContentType,
    custom: "text/plain; charset=utf-8",
    protobuf: "text/vnd.ms.protobuf",
    others: string,
}

op get(
    @header("test-header") testHeader: SchemaContentTypeValues,
    @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Alias for SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | JsonContentType
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf"
  | string;

export function schemaContentTypeValuesSerializer(
  item: SchemaContentTypeValues,
): any {
  return item;
}

/** Type of JsonContentType */
export type JsonContentType =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json";
```

# anonymous union with "|" fixed in regular headers

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service(#{
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

The config would be like:

```yaml
mustEmptyDiagnostic: true
needNamespaces: false
needAzureCore: false
withRawContent: true
needOptions: false
```

## schemaOutput

```ts models
// (file was not generated)
```

## Operations

```ts operations
import { DemoServiceContext as Client } from "./index.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  testHeader: "A" | "B",
  body: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      headers: {
        "test-header": testHeader,
        ...options.requestOptions?.headers,
      },
      body: body,
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
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
  options: GetOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getSend(context, testHeader, body, options);
  return _getDeserialize(result);
}
```

# anonymous union with "|" extensible in regular headers

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";

@service(#{
    title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
op get(
    @header("test-header") testHeader: "A" | "B" | string,
    @body body: string,
): { @header("test-header") testHeader: "A" | "B" | string; @statusCode _: 204; };
```

The config would be like:

```yaml
mustEmptyDiagnostic: true
needNamespaces: false
needAzureCore: false
withRawContent: true
needOptions: false
experimental-extensible-enums: true
```

## schemaOutput

```ts models
// (file was not generated)
```

## Operations

```ts operations
import { DemoServiceContext as Client } from "./index.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  testHeader: string,
  body: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      headers: {
        "test-header": testHeader,
        ...options.requestOptions?.headers,
      },
      body: body,
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function get(
  context: Client,
  testHeader: string,
  body: string,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getSend(context, testHeader, body, options);
  return _getDeserialize(result);
}
```

# should be taken as fixed enum with @fixed

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";

@service(#{
    title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

enum SchemaContentTypeValues {
    avro: "application/json; serialization=Avro",
    json: "application/json; serialization=json",
    custom: "text/plain; charset=utf-8",
    protobuf: "text/vnd.ms.protobuf",
}

op get(
    @header("test-header") testHeader: SchemaContentTypeValues,
    @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Type of SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
```

# should be taken as fixed enum without @fixed

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";

@service(#{
    title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

enum SchemaContentTypeValues {
    avro: "application/json; serialization=Avro",
    json: "application/json; serialization=json",
    custom: "text/plain; charset=utf-8",
    protobuf: "text/vnd.ms.protobuf",
}

op get(
    @header("test-header") testHeader: SchemaContentTypeValues,
    @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Type of SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
```

# number extensible enum should be generated correctly

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";

@service(#{
  title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

union EnumTest  {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  others: int32
}

op get(
  @header("test-header") testHeader: EnumTest,
  @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Type of EnumTest */
export type EnumTest = 1 | 2 | 3 | 4;
```

# mixed union types should be generated correctly

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";

@service(#{
  title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

enum EnumTest  {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
}

model Foo {}

union MixedTypes {
  EnumTest,
  string,
  Foo
}

op get(
  @header("test-header") testHeader: MixedTypes,
  @body body: string,
): NoContentResponse;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
needAzureCore: false
compatibility-mode: false
mustEmptyDiagnostic: false
```

## schemaOutput

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Foo */
export interface Foo {}

export function fooSerializer(item: Foo): any {
  return item;
}

/** Alias for MixedTypes */
export type MixedTypes = EnumTest | string | Foo;

export function mixedTypesSerializer(item: MixedTypes): any {
  return item;
}

/** Type of EnumTest */
export type EnumTest = 1 | 2 | 3 | 4;
```

# model type string enum

## TypeSpec

```tsp
model Test {
    color: "red" | "blue";
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  color: "red" | "blue";
}
```

## Model function testSerializer

```ts models function testSerializer
export function testSerializer(item: Test): any {
  return { color: item["color"] };
}
```

# model type string enum member

## TypeSpec

```tsp
enum Color {
    Red: "red",
    Blue: "blue"
}
model Test {
    color: Color.Red;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  color: "red";
}
```

## Model Alias Color

```ts models alias Color
/** Type of Color */
export type Color = "red" | "blue";
```

# model type nullable string literal

## TypeSpec

```tsp
model Test {
    content: "red" | null;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  content: "red" | null;
}
```

## Model function testSerializer

```ts models function testSerializer
export function testSerializer(item: Test): any {
  return { content: item["content"] };
}
```

# model type nullable string

## TypeSpec

```tsp
model Test {
    content: string | null;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  content: string | null;
}
```

## Model function testSerializer

```ts models function testSerializer
export function testSerializer(item: Test): any {
  return { content: item["content"] };
}
```

# model type number enum

## TypeSpec

```tsp
model Test {
    color: 1 | 2;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  color: 1 | 2;
}
```

## Model function testSerializer

```ts models function testSerializer
export function testSerializer(item: Test): any {
  return { color: item["color"] };
}
```

# model type number enum member and shouldn't report enum member diagnostic because of no generation

## TypeSpec

```tsp
enum Color {
    Color1: 1,
    Color2: 2
}
model Test {
    color: Color.Color1;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  color: 1;
}
```

## Model Alias Color

```ts models alias Color
/** Type of Color */
export type Color = 1 | 2;
```

# model type nullable enum without @fixed would be interpreted as non-branded enum which is fixed

## TypeSpec

```tsp
enum Color {
    Color1: 1,
    Color2: 2
}
model Test {
    color: Color | null;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  color: Color | null;
}
```

# model type nullable @fixed enum would be interpreted as azure enum which is fixed

## TypeSpec

```tsp
enum Color {
    Color1: 1,
    Color2: 2
}
model Test {
    color: Color | null;
}
op read(@body body: Test): void;
```

The config would be like:

```yaml
needOptions: false
withRawContent: false
needAzureCore: true
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  color: Color | null;
}
```

## Model alias Color

```ts models alias Color
/** Type of Color */
export type Color = 1 | 2;
```

# model type union of enum with experimental extensible enum flags

## TypeSpec

```tsp
union ImageSize {
  string,

  @doc("""
    Very small image size of 256x256 pixels.
    Only supported with dall-e-2 models.
    """)
  size256x256: "256x256",

  @doc("""
    A smaller image size of 512x512 pixels.
    Only supported with dall-e-2 models.
    """)
  size512x512: "512x512",

  @doc("""
    A standard, square image size of 1024x1024 pixels.
    Supported by both dall-e-2 and dall-e-3 models.
    """)
  size1024x1024: "1024x1024",

  @doc("""
    A wider image size of 1024x1792 pixels.
    Only supported with dall-e-3 models.
    """)
  size1792x1024: "1792x1024",

  @doc("""
    A taller image size of 1792x1024 pixels.
    Only supported with dall-e-3 models.
    """)
  size1024x1792: "1024x1792",
}
model Test {
  color: ImageSize;
}
op read(@body body: Test): void;
```

The config would be like:

```yaml
needOptions: false
withRawContent: false
needAzureCore: false
compatibility-mode: false
mustEmptyDiagnostic: true
experimental-extensible-enums: true
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  color: ImageSize;
}
```

## Model Enum KnownImageSize

```ts models enum KnownImageSize
/** Known values of {@link ImageSize} that the service accepts. */
export enum KnownImageSize {
  /**
   * Very small image size of 256x256 pixels.
   * Only supported with dall-e-2 models.
   */
  Size256X256 = "256x256",
  /**
   * A smaller image size of 512x512 pixels.
   * Only supported with dall-e-2 models.
   */
  Size512X512 = "512x512",
  /**
   * A standard, square image size of 1024x1024 pixels.
   * Supported by both dall-e-2 and dall-e-3 models.
   */
  Size1024X1024 = "1024x1024",
  /**
   * A wider image size of 1024x1792 pixels.
   * Only supported with dall-e-3 models.
   */
  Size1792X1024 = "1792x1024",
  /**
   * A taller image size of 1792x1024 pixels.
   * Only supported with dall-e-3 models.
   */
  Size1024X1792 = "1024x1792",
}
```

# model type union of enum

## TypeSpec

```tsp
enum LR {
  left,
  right,
}
enum UD {
  up,
  down,
}

model Test {
  color: LR | UD;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  color: LR | UD;
}
```

## Model Alias LR

```ts models alias LR
/** Type of LR */
export type LR = "left" | "right";
```

## Model Alias UD

```ts models alias UD
/** Type of UD */
export type UD = "up" | "down";
```

# model type non-standard enum/union name

## TypeSpec

```tsp
union leftAndRight {
  "left",
  "right",
}
enum upAndDown {
  up,
  down,
}

model Test {
  color: leftAndRight | upAndDown;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  color: LeftAndRight | UpAndDown;
}
```

## Model Alias LeftAndRight

```ts models alias LeftAndRight
/** Type of LeftAndRight */
export type LeftAndRight = "left" | "right";
```

## Model Alias UpAndDown

```ts models alias UpAndDown
/** Type of UpAndDown */
export type UpAndDown = "up" | "down";
```

# model type nullable numeric literal

## TypeSpec

```tsp
model Test {
    content: 1 | null;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  content: 1 | null;
}
```

## Model function testSerializer

```ts models function testSerializer
export function testSerializer(item: Test): any {
  return { content: item["content"] };
}
```

# model type nullable number

## TypeSpec

```tsp
model Test {
    content: int32 | null;
}
op read(@body body: Test): void;
```

## Model interface Test

```ts models interface Test
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  content: number | null;
}
```

## Model function testSerializer

```ts models function testSerializer
export function testSerializer(item: Test): any {
  return { content: item["content"] };
}
```
