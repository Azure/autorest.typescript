# Example scenario

Scenario tests allow you to easily document the expected TypeScript code for a given TypeSpec. This file is a tutorial for how to write your own scenario tests, but it is also a scenario test in and of itself. It shows how you can use the Markdown syntax to both document the expected behavior and test the generator's correctness at the same time.

An individual Markdown file can contain one or more scenarios. Each scenario has a top-level heading (starting with `#`) which gives it a title. The test host will extract the TypeSpec, and compare the generated code with the expected TypeScript code in the file.

## Updating tests

You can set the environment variable `SCENARIOS_UPDATE` to `true` to run the snapshot tests in "write mode". This will overwrite the expected TypeScript code with the generated TypeScript code.

## Only running specific scenarios

You can add `only:` to the top-level heading of the scenario document to run only that scenario. This is useful when you are working on a specific scenario and want to run only that scenario. For example, the heading for this test would be changed to

```
  # only: Example scenario
```

This is the equivalent of using `it.only` for a Mocha/vitest test.

## TypeSpec

This is a basic TypeSpec with one model and one operation. The `tsp` language block heading indicates to the test runner that this is the input TypeSpec for the scenario.

```tsp
model Example {
  id: string;
}

op read(@path id: string): {
  @bodyRoot result: Example
};
```

## Models

These are the models that are generated. The language tag `ts models` is used to tell
the test host that the content of the code block represents the entire generated `models.ts` file.

```ts models
/** model interface Example */
export interface Example {
  id: string;
}

export function exampleDeserializer(item: any): Example {
  return {
    id: item["id"],
  };
}
```

You can also extract a specific model interface using `ts models interface <model name>`:

```ts models interface Example
/** model interface Example */
export interface Example {
  id: string;
}
```

You can also see the options interfaces that are generated using `ts models:withOptions`:

```ts models:withOptions
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ReadOptionalParams extends OperationOptions {}
```

If you want to see a specific options interface, and not the whole file, you can be more specific with `ts models:withOptions interface <interface name>`:

```ts models:withOptions interface ReadOptionalParams
export interface ReadOptionalParams extends OperationOptions {}
```

## Operations

You can extract the entire operations file using `ts operations`:

```ts operations
import { TestingContext as Client } from "./index.js";
import { Example, exampleDeserializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  id: string,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _readDeserialize(
  result: PathUncheckedResponse,
): Promise<Example> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return exampleDeserializer(result.body);
}

export async function read(
  context: Client,
  id: string,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<Example> {
  const result = await _readSend(context, id, options);
  return _readDeserialize(result);
}
```

Or you can extract a specific operation using `ts operations function <operation name>`:

```ts operations function read
export async function read(
  context: Client,
  id: string,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<Example> {
  const result = await _readSend(context, id, options);
  return _readDeserialize(result);
}
```
