# Should convert null example values to empty defaults for array and object types when ignore-nullable-on-optional is true

When `ignore-nullable-on-optional` is true (default for Azure), null example values for nullable
array and object properties should be converted to empty defaults (`[]` and `{}`) to avoid
TypeScript compilation errors in generated samples.

## TypeSpec

```tsp
model Inner {
  value: string;
}

model Widget {
  nullableArray?: string[] | null;
  nullableModel?: Inner | null;
  nullableDict?: Record<string> | null;
  nullableString?: string | null;
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
      "nullableArray": null,
      "nullableModel": null,
      "nullableDict": null,
      "nullableString": null
    }
  },
  "responses": {
    "200": {}
  }
}
```

## Samples

Generate samples with empty defaults for null array and object values:

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
  const result = await client.read({
    nullableArray: [],
    nullableModel: {},
    nullableDict: {},
  });
  console.log(result);
}

async function main(): Promise<void> {
  await read();
}

main().catch(console.error);
```

---

# Should keep null for array and object types when ignore-nullable-on-optional is false

When `ignore-nullable-on-optional` is false, null example values should remain as `null` in
the generated sample since the TypeScript type includes `| null`.

## TypeSpec

```tsp
model Inner {
  value: string;
}

model Widget {
  nullableArray?: string[] | null;
  nullableModel?: Inner | null;
  nullableDict?: Record<string> | null;
  nullableString?: string | null;
}

@doc("show example demo")
op read(@bodyRoot body: Widget): { @body body: {}};
```

## config

```yaml
ignore-nullable-on-optional: false
```

## Example

```json
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "body": {
      "nullableArray": null,
      "nullableModel": null,
      "nullableDict": null,
      "nullableString": null
    }
  },
  "responses": {
    "200": {}
  }
}
```

## Samples

Generate samples keeping null values when ignore-nullable-on-optional is false:

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
  const result = await client.read({
    nullableArray: null,
    nullableModel: null,
    nullableDict: null,
    nullableString: null,
  });
  console.log(result);
}

async function main(): Promise<void> {
  await read();
}

main().catch(console.error);
```
