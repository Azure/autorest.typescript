# Should generate query explode: true parameter for @query(#{ explode: true }

## TypeSpec

This is tsp definition.

```tsp
model SelectQueryParameter {
  @query(#{ explode: true })
  select?: string[];
}
@route("annotation/optional")
op optional(...SelectQueryParameter): void;

model RequiredSelectQueryParameter {
  @query(#{ explode: true })
  select: string[];
}
@route("annotation/required")
op required(...RequiredSelectQueryParameter): void;
```

## Provide generated operations to call rest-level methods

## Operations

Should enable URI template parse for parameters:

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _optionalSend(
  context: Client,
  options: OptionalOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = __PLACEHOLDER_o15__("/annotation/optional{?select}").expand({
    select: !options?.select
      ? options?.select
      : options?.select.map((p: any) => {
          return p;
        })
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _optionalDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function optional(
  context: Client,
  options: OptionalOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _optionalSend(context, options);
  return _optionalDeserialize(result);
}

export function _requiredSend(
  context: Client,
  select: string[],
  options: RequiredOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = __PLACEHOLDER_o15__("/annotation/required{?select}").expand({
    select: select.map((p: any) => {
      return p;
    })
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _requiredDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function required(
  context: Client,
  select: string[],
  options: RequiredOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _requiredSend(context, select, options);
  return _requiredDeserialize(result);
}
```
