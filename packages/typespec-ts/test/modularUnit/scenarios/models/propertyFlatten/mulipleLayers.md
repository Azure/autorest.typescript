# Flatten transitions are not supported so consecutive transitions will be ignored and we only handle the first layer flattening

Flatten transitions are not supported so the transitions will be ignored.

## TypeSpec

This is tsp definition.

```tsp
model ChildModel {
  description: string;
  age: int32;
}

model NestedFlattenModel {
  name: string;

  @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: ChildFlattenModel;
}
model ChildFlattenModel {
  summary: string;

  @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: ChildModel;
}

op foo(body: NestedFlattenModel): NestedFlattenModel;
```

Enable the raw content with TCGC dependency.

```yaml
needArmTemplate: true
withVersionedApiVersion: true
needTCGC: true
mustEmptyDiagnostic: false
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
/** model interface NestedFlattenModel */
export interface NestedFlattenModel {
  name: string;
  summary: string;
  properties: ChildModel;
}

export function nestedFlattenModelSerializer(item: NestedFlattenModel): any {
  return { name: item["name"], properties: _nestedFlattenModelPropertiesSerializer(item) };
}

export function nestedFlattenModelDeserializer(item: any): NestedFlattenModel {
  return {
    name: item["name"],
    ..._nestedFlattenModelPropertiesDeserializer(item["properties"]),
  };
}

/** model interface ChildFlattenModel */
export interface ChildFlattenModel {
  summary: string;
  description: string;
  age: number;
}

export function childFlattenModelSerializer(item: ChildFlattenModel): any {
  return { summary: item["summary"], properties: _childFlattenModelPropertiesSerializer(item) };
}

export function childFlattenModelDeserializer(item: any): ChildFlattenModel {
  return {
    summary: item["summary"],
    ..._childFlattenModelPropertiesDeserializer(item["properties"]),
  };
}

/** model interface ChildModel */
export interface ChildModel {
  description: string;
  age: number;
}

export function childModelSerializer(item: ChildModel): any {
  return { description: item["description"], age: item["age"] };
}

export function childModelDeserializer(item: any): ChildModel {
  return {
    description: item["description"],
    age: item["age"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _childFlattenModelPropertiesSerializer(item: ChildFlattenModel): any {
  return { description: item["description"], age: item["age"] };
}

export function _childFlattenModelPropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    age: item["age"],
  };
}

export function _nestedFlattenModelPropertiesSerializer(item: NestedFlattenModel): any {
  return { summary: item["summary"], properties: childModelSerializer(item["properties"]) };
}

export function _nestedFlattenModelPropertiesDeserializer(item: any) {
  return {
    summary: item["summary"],
    properties: childModelDeserializer(item["properties"]),
  };
}
```

# Non-consecutive transitions will be treated as single layer flatten operation and should be handled correctly

Non-consecutive transitions will be treated as first layer flatten operation.

## TypeSpec

This is tsp definition.

```tsp
model ChildModel {
  description: string;
  age: int32;
}

model NestedFlattenModel {
  name: string;

  @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: ChildFlattenModel;
}
model ChildFlattenModel {
  summary: string;

  foo: Foo;
}

model Foo {
  @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: ChildModel;
}

op foo(body: NestedFlattenModel): NestedFlattenModel;
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
/** model interface NestedFlattenModel */
export interface NestedFlattenModel {
  name: string;
  summary: string;
  foo: Foo;
}

export function nestedFlattenModelSerializer(item: NestedFlattenModel): any {
  return {
    name: item["name"],
    properties: _nestedFlattenModelPropertiesSerializer(item)
  };
}

export function nestedFlattenModelDeserializer(item: any): NestedFlattenModel {
  return {
    name: item["name"],
    ..._nestedFlattenModelPropertiesDeserializer(item["properties"])
  };
}

/** model interface ChildFlattenModel */
export interface ChildFlattenModel {
  summary: string;
  foo: Foo;
}

export function childFlattenModelSerializer(item: ChildFlattenModel): any {
  return { summary: item["summary"], foo: fooSerializer(item["foo"]) };
}

export function childFlattenModelDeserializer(item: any): ChildFlattenModel {
  return {
    summary: item["summary"],
    foo: fooDeserializer(item["foo"])
  };
}

/** model interface Foo */
export interface Foo {
  description: string;
  age: number;
}

export function fooSerializer(item: Foo): any {
  return { properties: _fooPropertiesSerializer(item) };
}

export function fooDeserializer(item: any): Foo {
  return {
    ..._fooPropertiesDeserializer(item["properties"])
  };
}

/** model interface ChildModel */
export interface ChildModel {
  description: string;
  age: number;
}

export function childModelSerializer(item: ChildModel): any {
  return { description: item["description"], age: item["age"] };
}

export function childModelDeserializer(item: any): ChildModel {
  return {
    description: item["description"],
    age: item["age"]
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview"
}

export function _fooPropertiesSerializer(item: Foo): any {
  return { description: item["description"], age: item["age"] };
}

export function _fooPropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    age: item["age"]
  };
}

export function _nestedFlattenModelPropertiesSerializer(
  item: NestedFlattenModel
): any {
  return { summary: item["summary"], foo: fooSerializer(item["foo"]) };
}

export function _nestedFlattenModelPropertiesDeserializer(item: any) {
  return {
    summary: item["summary"],
    foo: fooDeserializer(item["foo"])
  };
}
```
