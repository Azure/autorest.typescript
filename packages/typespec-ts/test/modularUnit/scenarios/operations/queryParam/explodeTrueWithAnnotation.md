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
import { buildMultiCollection } from "../static-helpers/serialization/build-multi-collection.js";
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
  const pathParser = __PLACEHOLDER_o14__("/annotation/optional{?select}");
  const path = pathParser.expand({
    select:
      options?.select !== undefined
        ? buildMultiCollection(
            !options?.select
              ? options?.select
              : options?.select.map((p: any) => {
                  return p;
                }),
            "select"
          )
        : undefined
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
  const pathParser = __PLACEHOLDER_o14__("/annotation/required{?select}");
  const path = pathParser.expand({
    select: buildMultiCollection(
      select.map((p: any) => {
        return p;
      }),
      "select"
    )
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