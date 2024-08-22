# Should map empty anonymous model ({}) to Record<string, any>

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

## Operations

Body should get cast to `any` in the deserialize function:

```ts operations function _readDeserialize
export async function _readDeserialize(
  result: Read200Response
): Promise<Record<string, any>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}
```

The operation should have return type `Record<string, any>`:

```ts operations function read
export async function read(
  context: string,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<Record<string, any>> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```
