# treat-unknown-as-record maps unknown property to Record<string, unknown>

When `treat-unknown-as-record` is enabled, TypeSpec `unknown` type properties should be mapped to `Record<string, unknown>` instead of `any` in Modular SDK.

## TypeSpec

```tsp
model Foo {
  bar: unknown;
  baz: unknown[];
}
op read(): Foo;
```

```yaml
treat-unknown-as-record: true
```

## Models

```ts models interface Foo
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Foo */
export interface Foo {
  bar: Record<string, unknown>;
  baz: Record<string, unknown>[];
}
```

# treat-unknown-as-record disabled maps unknown to any

When `treat-unknown-as-record` is not set, TypeSpec `unknown` type properties should be mapped to `any`.

## TypeSpec

```tsp
model Foo {
  bar: unknown;
  baz: unknown[];
}
op read(): Foo;
```

## Models

```ts models interface Foo
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Foo */
export interface Foo {
  bar: any;
  baz: any[];
}
```

# treat-unknown-as-record with wrap-non-model-return does not wrap unknown return type

When both `treat-unknown-as-record` and `wrap-non-model-return` are enabled, the `unknown` return type should NOT be wrapped (i.e., no `GetXxxResponse` alias is generated).

## TypeSpec

```tsp
@route("/any")
@get
op getAny(): unknown;
```

```yaml
treat-unknown-as-record: true
wrap-non-model-return: true
```

## Models

```ts models
// (file was not generated)
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { GetAnyOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getAnySend(
  context: Client,
  options: GetAnyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/any")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getAnyDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, unknown>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getAny(
  context: Client,
  options: GetAnyOptionalParams = { requestOptions: {} },
): Promise<Record<string, unknown>> {
  const result = await _getAnySend(context, options);
  return _getAnyDeserialize(result);
}
```
