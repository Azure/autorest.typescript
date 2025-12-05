# Should support property flatten with required `properties`

Should support property flatten with required `properties` and its model includes optional and required properties.

## TypeSpec

This is tsp definition.

```tsp
model A {
  x: string;
}
model FooProperties {
  bar?: A[];
  baz: A[];
}

model Test {
  result: string;

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
  result: string;
  bar?: A[];
  baz: A[];
}

export function testSerializer(item: Test): any {
  return { result: item["result"], properties: _testPropertiesSerializer(item) };
}

export function testDeserializer(item: any): Test {
  return {
    result: item["result"],
    ..._testPropertiesDeserializer(item["properties"]),
  };
}

/** model interface FooProperties */
export interface FooProperties {
  bar?: A[];
  baz: A[];
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return {
    bar: !item["bar"] ? item["bar"] : aArraySerializer(item["bar"]),
    baz: aArraySerializer(item["baz"]),
  };
}

export function fooPropertiesDeserializer(item: any): FooProperties {
  return {
    bar: !item["bar"] ? item["bar"] : aArrayDeserializer(item["bar"]),
    baz: aArrayDeserializer(item["baz"]),
  };
}

export function aArraySerializer(result: Array<A>): any[] {
  return result.map((item) => {
    return aSerializer(item);
  });
}

export function aArrayDeserializer(result: Array<A>): any[] {
  return result.map((item) => {
    return aDeserializer(item);
  });
}

/** model interface A */
export interface A {
  x: string;
}

export function aSerializer(item: A): any {
  return { x: item["x"] };
}

export function aDeserializer(item: any): A {
  return {
    x: item["x"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _testPropertiesSerializer(item: Test): any {
  return {
    bar: !item["bar"] ? item["bar"] : aArraySerializer(item["bar"]),
    baz: aArraySerializer(item["baz"]),
  };
}

export function _testPropertiesDeserializer(item: any) {
  return {
    bar: !item["bar"] ? item["bar"] : aArrayDeserializer(item["bar"]),
    baz: aArrayDeserializer(item["baz"]),
  };
}
```

# Should support property flatten with optional `properties`

Should support property flatten with optional `properties` and its model includes optional and required properties.

## TypeSpec

This is tsp definition.

```tsp
model A {
  x: string;
}
model FooProperties {
  bar?: A[];
  baz: A[];
}

model Test {
  result: string;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties?: FooProperties;
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
  bar?: A[];
  baz?: A[];
}

export function testSerializer(item: Test): any {
  return {
    result: item["result"],
    properties: areAllPropsUndefined(item, ["bar", "baz"])
      ? undefined
      : _testPropertiesSerializer(item),
  };
}

export function testDeserializer(item: any): Test {
  return {
    result: item["result"],
    ...(!item["properties"] ? item["properties"] : _testPropertiesDeserializer(item["properties"])),
  };
}

/** model interface FooProperties */
export interface FooProperties {
  bar?: A[];
  baz: A[];
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return {
    bar: !item["bar"] ? item["bar"] : aArraySerializer(item["bar"]),
    baz: aArraySerializer(item["baz"]),
  };
}

export function fooPropertiesDeserializer(item: any): FooProperties {
  return {
    bar: !item["bar"] ? item["bar"] : aArrayDeserializer(item["bar"]),
    baz: aArrayDeserializer(item["baz"]),
  };
}

export function aArraySerializer(result: Array<A>): any[] {
  return result.map((item) => {
    return aSerializer(item);
  });
}

export function aArrayDeserializer(result: Array<A>): any[] {
  return result.map((item) => {
    return aDeserializer(item);
  });
}

/** model interface A */
export interface A {
  x: string;
}

export function aSerializer(item: A): any {
  return { x: item["x"] };
}

export function aDeserializer(item: any): A {
  return {
    x: item["x"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _testPropertiesSerializer(item: Test): any {
  return {
    bar: !item["bar"] ? item["bar"] : aArraySerializer(item["bar"]),
    baz: !item["baz"] ? item["baz"] : aArraySerializer(item["baz"]),
  };
}

export function _testPropertiesDeserializer(item: any) {
  return {
    bar: !item["bar"] ? item["bar"] : aArrayDeserializer(item["bar"]),
    baz: !item["baz"] ? item["baz"] : aArrayDeserializer(item["baz"]),
  };
}
```

# Should support property flatten with `properties` in nested models

Should support property flatten with optional `properties` and the property is positioned in a nested body model.

## TypeSpec

This is tsp definition.

```tsp
model TestFoo {
  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: FooProperties;
}

model FooProperties {
  bar?: string;
  baz: string;
}

model Test {
  result: string;
  foo: TestFoo;
}

op foo(body: Test): void;
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
  result: string;
  foo: TestFoo;
}

export function testSerializer(item: Test): any {
  return { result: item["result"], foo: testFooSerializer(item["foo"]) };
}

/** model interface TestFoo */
export interface TestFoo {
  bar?: string;
  baz: string;
}

export function testFooSerializer(item: TestFoo): any {
  return { properties: _testFooPropertiesSerializer(item) };
}

/** model interface FooProperties */
export interface FooProperties {
  bar?: string;
  baz: string;
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return { bar: item["bar"], baz: item["baz"] };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _testFooPropertiesSerializer(item: TestFoo): any {
  return { bar: item["bar"], baz: item["baz"] };
}
```

# Should support property flatten with `properties` and it has base model and readOnly visibility property

Should support property flatten with optional `properties` and its model has a parent model.

## TypeSpec

This is tsp definition.

```tsp

model Baz {
  @visibility(Lifecycle.Read)
  readOnlyProp: string;
  baz: string;
}

model FooProperties extends Baz{
  bar?: string;
  baz: "baz";
}

model Test {
  result: string;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties?: FooProperties;
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
  readonly readOnlyProp?: string;
  baz?: "baz";
  bar?: string;
}

export function testSerializer(item: Test): any {
  return {
    result: item["result"],
    properties: areAllPropsUndefined(item, ["baz", "bar"])
      ? undefined
      : _testPropertiesSerializer(item),
  };
}

export function testDeserializer(item: any): Test {
  return {
    result: item["result"],
    ...(!item["properties"] ? item["properties"] : _testPropertiesDeserializer(item["properties"])),
  };
}

/** model interface FooProperties */
export interface FooProperties extends Baz {
  bar?: string;
  baz: "baz";
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return { baz: item["baz"], bar: item["bar"] };
}

export function fooPropertiesDeserializer(item: any): FooProperties {
  return {
    readOnlyProp: item["readOnlyProp"],
    baz: item["baz"],
    bar: item["bar"],
  };
}

/** model interface Baz */
export interface Baz {
  readonly readOnlyProp: string;
  baz: string;
}

export function bazSerializer(item: Baz): any {
  return { baz: item["baz"] };
}

export function bazDeserializer(item: any): Baz {
  return {
    readOnlyProp: item["readOnlyProp"],
    baz: item["baz"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _testPropertiesSerializer(item: Test): any {
  return { baz: item["baz"], bar: item["bar"] };
}

export function _testPropertiesDeserializer(item: any) {
  return {
    readOnlyProp: item["readOnlyProp"],
    baz: item["baz"],
    bar: item["bar"],
  };
}
```

# Should support property flatten with random property name and multiple properties but only single layer

Should support property flatten with optional `identifiers` and its model has a parent model.

## TypeSpec

This is tsp definition.

```tsp

model Baz {
  @visibility(Lifecycle.Read)
  readOnlyProp: string;
  baz: string;
}

model FooProperties extends Baz{
  bar?: string;
  baz: "baz";
}

model TestIdentifiers {
  id: string;
  location?: string;
}

model Test {
  result: string;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties?: FooProperties;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  identifiers: TestIdentifiers;
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
  readonly readOnlyProp?: string;
  baz?: "baz";
  bar?: string;
  id: string;
  location?: string;
}

export function testSerializer(item: Test): any {
  return {
    result: item["result"],
    properties: areAllPropsUndefined(item, ["baz", "bar"])
      ? undefined
      : _testPropertiesSerializer(item),
    identifiers: _testIdentifiersSerializer(item),
  };
}

export function testDeserializer(item: any): Test {
  return {
    result: item["result"],
    ...(!item["properties"] ? item["properties"] : _testPropertiesDeserializer(item["properties"])),
    ..._testIdentifiersDeserializer(item["identifiers"]),
  };
}

/** model interface FooProperties */
export interface FooProperties extends Baz {
  bar?: string;
  baz: "baz";
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return { baz: item["baz"], bar: item["bar"] };
}

export function fooPropertiesDeserializer(item: any): FooProperties {
  return {
    readOnlyProp: item["readOnlyProp"],
    baz: item["baz"],
    bar: item["bar"],
  };
}

/** model interface TestIdentifiers */
export interface TestIdentifiers {
  id: string;
  location?: string;
}

export function testIdentifiersSerializer(item: TestIdentifiers): any {
  return { id: item["id"], location: item["location"] };
}

export function testIdentifiersDeserializer(item: any): TestIdentifiers {
  return {
    id: item["id"],
    location: item["location"],
  };
}

/** model interface Baz */
export interface Baz {
  readonly readOnlyProp: string;
  baz: string;
}

export function bazSerializer(item: Baz): any {
  return { baz: item["baz"] };
}

export function bazDeserializer(item: any): Baz {
  return {
    readOnlyProp: item["readOnlyProp"],
    baz: item["baz"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _testPropertiesSerializer(item: Test): any {
  return { baz: item["baz"], bar: item["bar"] };
}

export function _testPropertiesDeserializer(item: any) {
  return {
    readOnlyProp: item["readOnlyProp"],
    baz: item["baz"],
    bar: item["bar"],
  };
}

export function _testIdentifiersSerializer(item: Test): any {
  return { id: item["id"], location: item["location"] };
}

export function _testIdentifiersDeserializer(item: any) {
  return {
    id: item["id"],
    location: item["location"],
  };
}
```
