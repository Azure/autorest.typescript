# Should support complex cases with multiple conflicts and multiple properties' flattening

Should support complex cases with multiple conflicts and multiple properties' flattening

## TypeSpec

This is tsp definition.

```tsp
model A {
  x: string;
}

model ChildFlattenModel {
  description: string;
  baz: int32;
}

model FooProperties {
  bar?: A[];
  baz: A[];

  @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties?: ChildFlattenModel;
}

@doc("This is a simple model.")
model BodyParameter {
  baz: string;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: FooProperties;

  @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties2?: ChildFlattenModel;

  @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
  emptyFlatten?: ChildFlattenModel;
}

@doc("show example demo")
op read(@body widget?: BodyParameter): void;
```

Enable the raw content with TCGC dependency.

```yaml
needArmTemplate: true
withVersionedApiVersion: true
needTCGC: true
mustEmptyDiagnostic: false
```

## Example

Raw json files.

```json
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "widget": {
      "baz": "body name",
      "properties": {
        "baz": [
          {
            "x": "bbb"
          }
        ],
        "bar": [
          {
            "x": "xx"
          }
        ],
        "properties": {
          "baz": 222
        }
      },
      "properties2": {
        "baz": 111
      }
    }
  },
  "responses": {
    "200": {}
  }
}
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
/** This is a simple model. */
export interface BodyParameter {
  baz: string;
  bar?: A[];
  bazPropertiesBaz: A[];
  properties?: ChildFlattenModel;
  description?: string;
  bazProperties2Baz?: number;
  descriptionEmptyFlattenDescription?: string;
  bazEmptyFlattenBaz?: number;
}

export function bodyParameterSerializer(item: BodyParameter): any {
  return {
    baz: item["baz"],
    properties: _bodyParameterPropertiesSerializer(item),
    properties2: areAllPropsUndefined(item, ["description", "baz"])
      ? undefined
      : _bodyParameterProperties2Serializer(item),
    emptyFlatten: areAllPropsUndefined(item, ["description", "baz"])
      ? undefined
      : _bodyParameterEmptyFlattenSerializer(item)
  };
}

/** model interface FooProperties */
export interface FooProperties {
  bar?: A[];
  baz: A[];
  description?: string;
  bazPropertiesBaz?: number;
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return {
    bar: !item["bar"] ? item["bar"] : aArraySerializer(item["bar"]),
    baz: aArraySerializer(item["baz"]),
    properties: areAllPropsUndefined(item, ["description", "baz"])
      ? undefined
      : _fooPropertiesPropertiesSerializer(item)
  };
}

export function aArraySerializer(result: Array<A>): any[] {
  return result.map((item) => {
    return aSerializer(item);
  });
}

/** model interface A */
export interface A {
  x: string;
}

export function aSerializer(item: A): any {
  return { x: item["x"] };
}

/** model interface ChildFlattenModel */
export interface ChildFlattenModel {
  description: string;
  baz: number;
}

export function childFlattenModelSerializer(item: ChildFlattenModel): any {
  return { description: item["description"], baz: item["baz"] };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview"
}

export function _fooPropertiesPropertiesSerializer(item: FooProperties): any {
  return { description: item["description"], baz: item["bazPropertiesBaz"] };
}

export function _bodyParameterPropertiesSerializer(item: BodyParameter): any {
  return {
    bar: !item["bar"] ? item["bar"] : aArraySerializer(item["bar"]),
    baz: aArraySerializer(item["bazPropertiesBaz"]),
    properties: areAllPropsUndefined(item, ["description", "baz"])
      ? undefined
      : _fooPropertiesPropertiesSerializer(item)
  };
}

export function _bodyParameterProperties2Serializer(item: BodyParameter): any {
  return { description: item["description"], baz: item["bazProperties2Baz"] };
}

export function _bodyParameterEmptyFlattenSerializer(item: BodyParameter): any {
  return {
    description: item["descriptionEmptyFlattenDescription"],
    baz: item["bazEmptyFlattenBaz"]
  };
}
```

## Samples

Generate optional body in option parameter:

```ts samples
/** This file path is /samples-dev/readSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example demo
 *
 * @summary show example demo
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function read(): Promise<void> {
  const endpoint = process.env.TESTING_ENDPOINT || "";
  const client = new TestingClient(endpoint);
  await client.read({
    widget: {
      baz: "body name",
      bazPropertiesBaz: [{ x: "bbb" }],
      bar: [{ x: "xx" }],
      bazPropertiesBaz: 222,
      bazProperties2Baz: 111
    }
  });
}

async function main(): Promise<void> {
  await read();
}

main().catch(console.error);
```
