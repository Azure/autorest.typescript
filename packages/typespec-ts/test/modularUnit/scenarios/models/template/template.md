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
  z: Templated_1;
  h: Templated_2;
  j: Templated_3;
}

export function fooSerializer(item: Foo): any {
  return {
    x: templatedBaseSerializer(item["x"]),
    y: templatedSerializer(item["y"]),
    z: __PLACEHOLDER_o329_sserializer__(item["z"]),
    h: __PLACEHOLDER_o330_sserializer__(item["h"]),
    j: __PLACEHOLDER_o331_sserializer__(item["j"]),
  };
}

export function fooDeserializer(item: any): Foo {
  return {
    x: templatedBaseDeserializer(item["x"]),
    y: templatedDeserializer(item["y"]),
    z: __PLACEHOLDER_o329_sdeserializer__(item["z"]),
    h: __PLACEHOLDER_o330_sdeserializer__(item["h"]),
    j: __PLACEHOLDER_o331_sdeserializer__(item["j"]),
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

/** model interface Templated */
export interface Templated_1 {
  prop: "cat";
}

/** model interface Templated */
export interface Templated_2 {
  prop: true;
}

/** model interface Templated */
export interface Templated_3 {
  prop: 1;
}
```
