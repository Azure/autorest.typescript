# Should handle name collision compared with base properties

Should handle name collision compared with base properties.

## TypeSpec

This is tsp definition.

```tsp
model FooProperties {
  bar?: string;
  baz: string;
}

model Test {
  bar?: string;
  baz: string;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: FooProperties;
}

op foo(body: Test): Test;
```

Enable the raw content with TCGC dependency.

```yaml
needArmTemplate: true
withVersionedApiVersion: true
needTCGC: true
```

## Models

Model generated.

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  bar?: string;
  baz: string;
  barPropertiesBar?: string;
  bazPropertiesBaz: string;
}

export function testSerializer(item: Test): any {
  return { bar: item["bar"], baz: item["baz"], properties: _testPropertiesSerializer(item) };
}

export function testDeserializer(item: any): Test {
  return {
    bar: item["bar"],
    baz: item["baz"],
    ..._testPropertiesDeserializer(item["properties"]),
  };
}

/** model interface FooProperties */
export interface FooProperties {
  bar?: string;
  baz: string;
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return { bar: item["bar"], baz: item["baz"] };
}

export function fooPropertiesDeserializer(item: any): FooProperties {
  return {
    bar: item["bar"],
    baz: item["baz"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _testPropertiesSerializer(item: Test): any {
  return { bar: item["barPropertiesBar"], baz: item["bazPropertiesBaz"] };
}

export function _testPropertiesDeserializer(item: any) {
  return {
    barPropertiesBar: item["bar"],
    bazPropertiesBaz: item["baz"],
  };
}
```

# Should handle name collision compared with another flatten property

Should handle name collision compared with another flatten property.

## TypeSpec

This is tsp definition.

```tsp
model FooProperties {
  bar?: string;
  baz: string;
}

model XProperties {
  bar?: string;
  baz: string;
  x: string;
}

model Test {
  result: string;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: FooProperties;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  anotherProperties?: XProperties;
}

op foo(body: Test): Test;
```

Enable the raw content with TCGC dependency.

```yaml
needArmTemplate: true
withVersionedApiVersion: true
needTCGC: true
```

## Models

Model generated.

```ts models
import { areAllPropsUndefined } from "../static-helpers/serialization/check-prop-undefined.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  result: string;
  bar?: string;
  baz: string;
  barAnotherPropertiesBar?: string;
  bazAnotherPropertiesBaz?: string;
  x?: string;
}

export function testSerializer(item: Test): any {
  return {
    result: item["result"],
    properties: _testPropertiesSerializer(item),
    anotherProperties: areAllPropsUndefined(item, ["bar", "baz", "x"])
      ? undefined
      : _testAnotherPropertiesSerializer(item),
  };
}

export function testDeserializer(item: any): Test {
  return {
    result: item["result"],
    ..._testPropertiesDeserializer(item["properties"]),
    ...(!item["anotherProperties"]
      ? item["anotherProperties"]
      : _testAnotherPropertiesDeserializer(item["anotherProperties"])),
  };
}

/** model interface FooProperties */
export interface FooProperties {
  bar?: string;
  baz: string;
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return { bar: item["bar"], baz: item["baz"] };
}

export function fooPropertiesDeserializer(item: any): FooProperties {
  return {
    bar: item["bar"],
    baz: item["baz"],
  };
}

/** model interface XProperties */
export interface XProperties {
  bar?: string;
  baz: string;
  x: string;
}

export function xPropertiesSerializer(item: XProperties): any {
  return { bar: item["bar"], baz: item["baz"], x: item["x"] };
}

export function xPropertiesDeserializer(item: any): XProperties {
  return {
    bar: item["bar"],
    baz: item["baz"],
    x: item["x"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _testPropertiesSerializer(item: Test): any {
  return { bar: item["bar"], baz: item["baz"] };
}

export function _testPropertiesDeserializer(item: any) {
  return {
    bar: item["bar"],
    baz: item["baz"],
  };
}

export function _testAnotherPropertiesSerializer(item: Test): any {
  return {
    bar: item["barAnotherPropertiesBar"],
    baz: item["bazAnotherPropertiesBaz"],
    x: item["x"],
  };
}

export function _testAnotherPropertiesDeserializer(item: any) {
  return {
    barAnotherPropertiesBar: item["bar"],
    bazAnotherPropertiesBaz: item["baz"],
    x: item["x"],
  };
}
```

# Should handle one name with multiple collision times

Should handle name collision compared with another flatten property.

## TypeSpec

This is tsp definition.

```tsp
model FooProperties {
  bar?: string;
  baz: string;
}

model XProperties {
  bar?: string;
  baz: string;
  result: string;
}

model Test {
  result: string;
  bar?: string;
  baz: string;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: FooProperties;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  anotherProperties?: XProperties;
}

op foo(body: Test): Test;
```

Enable the raw content with TCGC dependency.

```yaml
needArmTemplate: true
withVersionedApiVersion: true
needTCGC: true
```

## Models

Model generated.

```ts models
import { areAllPropsUndefined } from "../static-helpers/serialization/check-prop-undefined.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Test */
export interface Test {
  result: string;
  bar?: string;
  baz: string;
  barPropertiesBar?: string;
  bazPropertiesBaz: string;
  barAnotherPropertiesBar?: string;
  bazAnotherPropertiesBaz?: string;
  resultAnotherPropertiesResult?: string;
}

export function testSerializer(item: Test): any {
  return {
    result: item["result"],
    bar: item["bar"],
    baz: item["baz"],
    properties: _testPropertiesSerializer(item),
    anotherProperties: areAllPropsUndefined(item, ["bar", "baz", "result"])
      ? undefined
      : _testAnotherPropertiesSerializer(item),
  };
}

export function testDeserializer(item: any): Test {
  return {
    result: item["result"],
    bar: item["bar"],
    baz: item["baz"],
    ..._testPropertiesDeserializer(item["properties"]),
    ...(!item["anotherProperties"]
      ? item["anotherProperties"]
      : _testAnotherPropertiesDeserializer(item["anotherProperties"])),
  };
}

/** model interface FooProperties */
export interface FooProperties {
  bar?: string;
  baz: string;
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return { bar: item["bar"], baz: item["baz"] };
}

export function fooPropertiesDeserializer(item: any): FooProperties {
  return {
    bar: item["bar"],
    baz: item["baz"],
  };
}

/** model interface XProperties */
export interface XProperties {
  bar?: string;
  baz: string;
  result: string;
}

export function xPropertiesSerializer(item: XProperties): any {
  return { bar: item["bar"], baz: item["baz"], result: item["result"] };
}

export function xPropertiesDeserializer(item: any): XProperties {
  return {
    bar: item["bar"],
    baz: item["baz"],
    result: item["result"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _testPropertiesSerializer(item: Test): any {
  return { bar: item["barPropertiesBar"], baz: item["bazPropertiesBaz"] };
}

export function _testPropertiesDeserializer(item: any) {
  return {
    barPropertiesBar: item["bar"],
    bazPropertiesBaz: item["baz"],
  };
}

export function _testAnotherPropertiesSerializer(item: Test): any {
  return {
    bar: item["barAnotherPropertiesBar"],
    baz: item["bazAnotherPropertiesBaz"],
    result: item["resultAnotherPropertiesResult"],
  };
}

export function _testAnotherPropertiesDeserializer(item: any) {
  return {
    barAnotherPropertiesBar: item["bar"],
    bazAnotherPropertiesBaz: item["baz"],
    resultAnotherPropertiesResult: item["result"],
  };
}
```
