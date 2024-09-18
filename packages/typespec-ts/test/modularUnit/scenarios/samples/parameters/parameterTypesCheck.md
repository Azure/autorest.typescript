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
  stringLiteral: "foo";
  booleanLiteral: true;
  numberLiteral: 12;
  plainDateProp: plainDate;
  plainTimeProp: plainTime;
  utcDateTimeProp: utcDateTime;
  offsetDateTimeProp: offsetDateTime;
  durationProp: duration;
}

@doc("show example demo")
op read(@bodyRoot body: Widget): { @body body: {}};
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
      "renamedProp": "prop renamed",
      "stringLiteral": "foo",
      "booleanLiteral": true,
      "numberLiteral": 12,
      "plainDateProp": "2022-12-12",
      "plainTimeProp": "13:06:12",
      "utcDateTimeProp": "2022-08-26T18:38:00Z",
      "offsetDateTimeProp": "2022-08-26T18:38:00Z",
      "durationProp": "P123DT22H14M12.011S"
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
    stringLiteral: "foo",
    booleanLiteral: true,
    numberLiteral: 12,
    plainDateProp: "2022-12-12",
    plainTimeProp: "13:06:12",
    utcDateTimeProp: new Date("2022-08-26T18:38:00Z"),
    offsetDateTimeProp: "2022-08-26T18:38:00Z",
    durationProp: "P123DT22H14M12.011S",
    additionalProp: "additional prop",
  });
  console.log(result);
}

async function main() {
  read();
}

main().catch(console.error);
```
