# Should generate samples for for different types

The return type for an empty anonymous model `{}` should be Record<string, any>

## TypeSpec

```tsp
model Foo {
  bar: string;
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
  ...Record<string>;
}

op read(body: Widget): void;
```

## Example

```json_read_operations
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "body": {
      "strValue": "00000000-0000-0000-0000-00000000000",
      "numValue": 0.12,
      "enumValue": "red",
      "modelValue": {
        "bar": "bar value"
      },
      "dateValue": "2022-08-09",
      "arrValue": ["x", "y"],
      "unionValue": "test",
      "nullValue": null,
      "additionalProp": "additional prop"
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
/**
 * This sample demonstrates how to undefined
 *
 * @summary undefined
 * x-ms-original-file: json_read_operations.json
 */ async function read() {
  const client = new TestingClient();
  const result = await client.read();
  console.log(result);
}

async function main() {
  __PLACEHOLDER_o13__();
}

main().catch(console.error);
```
