# Flatten transitions are not supported for sample input

Should support property flatten with required `properties` and its model includes optional and required properties.

## TypeSpec

This is tsp definition.

```tsp
model A {
  x: string;
  y: string;
}
model FooProperties {
  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  bar?: A;

  baz?: string;
}

@doc("This is a simple model.")
model BodyParameter {
  name: string;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: FooProperties;
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
      "name": "body name",
      "properties": {
        "bar": {
            "x": "xx"
        }
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
  name: string;
  bar?: A;
  baz?: string;
}

export function bodyParameterSerializer(item: BodyParameter): any {
  return { name: item["name"], properties: _bodyParameterPropertiesSerializer(item) };
}

/** model interface FooProperties */
export interface FooProperties {
  baz?: string;
  x?: string;
  y?: string;
}

export function fooPropertiesSerializer(item: FooProperties): any {
  return {
    bar: areAllPropsUndefined(item, ["x", "y"]) ? undefined : _fooPropertiesBarSerializer(item),
    baz: item["baz"],
  };
}

/** model interface A */
export interface A {
  x: string;
  y: string;
}

export function aSerializer(item: A): any {
  return { x: item["x"], y: item["y"] };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2022-05-15-preview */
  V20220515Preview = "2022-05-15-preview",
}

export function _fooPropertiesBarSerializer(item: FooProperties): any {
  return { x: item["x"], y: item["y"] };
}

export function _bodyParameterPropertiesSerializer(item: BodyParameter): any {
  return { bar: !item["bar"] ? item["bar"] : aSerializer(item["bar"]), baz: item["baz"] };
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
  await client.read({ widget: { name: "body name", bar: { x: "xx" } } });
}

async function main(): Promise<void> {
  await read();
}

main().catch(console.error);
```