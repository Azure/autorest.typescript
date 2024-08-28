# Should generate samples for different types

Sample generation should handle different types in body.

## TypeSpec

```tsp
model Foo {
  bar: string;
  barDate?: utcDateTime;
}

model Widget {
  strValue: string;
  numValue: int32;
  enumValue: "red" | "blue";
  modelValue: Foo;
  dateValue: utcDateTime;
  arrValue: string[];
  unionValue: Foo | string;
  nullValue: null;
  @clientName("jsClientName", "javascript")
  renamedProp: string;
  ...Record<string>;
}

@doc("show example demo")
op read(@bodyRoot body: Widget): void;
```

## Example

```json
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "body": {
      "strValue": "00000000-0000-0000-0000-00000000000",
      "numValue": 0.12,
      "enumValue": "red",
      "modelValue": {
        "bar": "bar value",
        "barDate": "2022-08-09"
      },
      "dateValue": "2022-08-09",
      "arrValue": ["x", "y"],
      "unionValue": "test",
      "nullValue": null,
      "additionalProp": "additional prop",
      "renamedProp": "prop renamed"
    }
  },
  "responses": {
    "200": {}
  }
}
```

## Samples

Generate samples for for different types:

```ts samples
/** This file path is /samples-dev/readSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example demo
 *
 * @summary show example demo
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function read() {
  const client = new TestingClient();
  const result = await client.read({
    strValue: "00000000-0000-0000-0000-00000000000",
    numValue: 0.12,
    enumValue: "red",
    modelValue: { bar: "bar value", barDate: new Date("2022-08-09") },
    dateValue: new Date("2022-08-09"),
    arrValue: ["x", "y"],
    unionValue: test,
    nullValue: null,
    jsClientName: "prop renamed",
    additionalProp: "additional prop",
  });
  console.log(result);
}

async function main() {
  read();
}

main().catch(console.error);
```
