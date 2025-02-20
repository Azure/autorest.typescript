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
/** model interface TypeScriptTestingInputOutputModel */
export interface TypeScriptTestingInputOutputModel {
  prop: TypeScriptTestingFoo;
}

export function typeScriptTestingInputOutputModelSerializer(
  item: TypeScriptTestingInputOutputModel,
): any {
  return { prop: typeScriptTestingFooSerializer(item["prop"]) };
}

export function typeScriptTestingInputOutputModelDeserializer(
  item: any,
): TypeScriptTestingInputOutputModel {
  return {
    prop: typeScriptTestingFooDeserializer(item["prop"]),
  };
}

/** model interface TypeScriptTestingFoo */
export interface TypeScriptTestingFoo {
  x: TypeScriptTestingTemplatedBase;
  y: TypeScriptTestingTemplated;
  z: TypeScriptTestingTemplated_1;
  h: TypeScriptTestingTemplated_2;
  j: TypeScriptTestingTemplated_3;
}

export function typeScriptTestingFooSerializer(
  item: TypeScriptTestingFoo,
): any {
  return {
    x: typeScriptTestingTemplatedBaseSerializer(item["x"]),
    y: typeScriptTestingTemplatedSerializer(item["y"]),
    z: typeScriptTestingTemplatedSerializer(item["z"]),
    h: typeScriptTestingTemplatedSerializer(item["h"]),
    j: typeScriptTestingTemplatedSerializer(item["j"]),
  };
}

export function typeScriptTestingFooDeserializer(
  item: any,
): TypeScriptTestingFoo {
  return {
    x: typeScriptTestingTemplatedBaseDeserializer(item["x"]),
    y: typeScriptTestingTemplatedDeserializer(item["y"]),
    z: typeScriptTestingTemplatedDeserializer(item["z"]),
    h: typeScriptTestingTemplatedDeserializer(item["h"]),
    j: typeScriptTestingTemplatedDeserializer(item["j"]),
  };
}

/** model interface TypeScriptTestingTemplatedBase */
export interface TypeScriptTestingTemplatedBase {
  prop: TypeScriptTestingBase;
}

export function typeScriptTestingTemplatedBaseSerializer(
  item: TypeScriptTestingTemplatedBase,
): any {
  return { prop: typeScriptTestingBaseSerializer(item["prop"]) };
}

export function typeScriptTestingTemplatedBaseDeserializer(
  item: any,
): TypeScriptTestingTemplatedBase {
  return {
    prop: typeScriptTestingBaseDeserializer(item["prop"]),
  };
}

/** model interface TypeScriptTestingBase */
export interface TypeScriptTestingBase {}

export function typeScriptTestingBaseSerializer(
  item: TypeScriptTestingBase,
): any {
  return item;
}

export function typeScriptTestingBaseDeserializer(
  item: any,
): TypeScriptTestingBase {
  return item;
}

/** model interface TypeScriptTestingTemplated */
export interface TypeScriptTestingTemplated {
  prop: string;
}

export function typeScriptTestingTemplatedSerializer(
  item: TypeScriptTestingTemplated,
): any {
  return { prop: item["prop"] };
}

export function typeScriptTestingTemplatedDeserializer(
  item: any,
): TypeScriptTestingTemplated {
  return {
    prop: item["prop"],
  };
}

/** model interface TypeScriptTestingTemplated */
export interface TypeScriptTestingTemplated_1 {
  prop: "cat";
}

/** model interface TypeScriptTestingTemplated */
export interface TypeScriptTestingTemplated_2 {
  prop: true;
}

/** model interface TypeScriptTestingTemplated */
export interface TypeScriptTestingTemplated_3 {
  prop: 1;
}
```
