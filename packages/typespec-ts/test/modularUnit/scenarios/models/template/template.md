# should generate template model successfully even without @friendlyName

## TypeSpec

```tsp
model Base { }

model Templated<T> {
    prop: T;
}

model Foo {
    x: Templated<Base>;
    y: Templated<string>;
    z: Templated<"cat">;
    h: Templated<true>;
    j: Templated<1>;
}
#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
model InputOutputModel {
    prop: Foo;
}

#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
@route("/models")
@get
op getModel(@bodyRoot input: InputOutputModel): InputOutputModel;
```

## Models

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface InputOutputModel */
export interface InputOutputModel {
  prop: Foo;
}

export function inputOutputModelSerializer(item: InputOutputModel): any {
  return { prop: fooSerializer(item["prop"]) };
}

export function inputOutputModelDeserializer(item: any): InputOutputModel {
  return {
    prop: fooDeserializer(item["prop"]),
  };
}

/** model interface Foo */
export interface Foo {
  x: TemplatedBase;
  y: Templated;
  z: Templated1;
  h: Templated2;
  j: Templated3;
}

export function fooSerializer(item: Foo): any {
  return {
    x: templatedBaseSerializer(item["x"]),
    y: templatedSerializer(item["y"]),
    z: templated1Serializer(item["z"]),
    h: templated2Serializer(item["h"]),
    j: templated3Serializer(item["j"]),
  };
}

export function fooDeserializer(item: any): Foo {
  return {
    x: templatedBaseDeserializer(item["x"]),
    y: templatedDeserializer(item["y"]),
    z: templated1Deserializer(item["z"]),
    h: templated2Deserializer(item["h"]),
    j: templated3Deserializer(item["j"]),
  };
}

/** model interface TemplatedBase */
export interface TemplatedBase {
  prop: Base;
}

export function templatedBaseSerializer(item: TemplatedBase): any {
  return { prop: baseSerializer(item["prop"]) };
}

export function templatedBaseDeserializer(item: any): TemplatedBase {
  return {
    prop: baseDeserializer(item["prop"]),
  };
}

/** model interface Base */
export interface Base {}

export function baseSerializer(item: Base): any {
  return item;
}

export function baseDeserializer(item: any): Base {
  return item;
}

/** model interface Templated */
export interface Templated {
  prop: string;
}

export function templatedSerializer(item: Templated): any {
  return { prop: item["prop"] };
}

export function templatedDeserializer(item: any): Templated {
  return {
    prop: item["prop"],
  };
}

/** model interface Templated1 */
export interface Templated1 {
  prop: "cat";
}

export function templated1Serializer(item: Templated1): any {
  return { prop: item["prop"] };
}

export function templated1Deserializer(item: any): Templated1 {
  return {
    prop: item["prop"],
  };
}

/** model interface Templated2 */
export interface Templated2 {
  prop: true;
}

export function templated2Serializer(item: Templated2): any {
  return { prop: item["prop"] };
}

export function templated2Deserializer(item: any): Templated2 {
  return {
    prop: item["prop"],
  };
}

/** model interface Templated3 */
export interface Templated3 {
  prop: 1;
}

export function templated3Serializer(item: Templated3): any {
  return { prop: item["prop"] };
}

export function templated3Deserializer(item: any): Templated3 {
  return {
    prop: item["prop"],
  };
}
```
