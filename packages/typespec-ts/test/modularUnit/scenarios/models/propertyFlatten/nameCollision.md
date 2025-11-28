# only: Should handle name collision compared with base properties

Should support property flatten with optional `properties` and its model includes the same name property with top-level models.

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

# only: Should handle name collision compared with another flatten property

# only: Should handle one name with multiple collision times
