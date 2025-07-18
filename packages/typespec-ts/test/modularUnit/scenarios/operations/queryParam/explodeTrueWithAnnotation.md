# Should generate query explode: true parameter for @query(#{ explode: true }

## TypeSpec

This is tsp definition.

```tsp
model SelectQueryParameter {
  @query(#{ explode: true })
  select?: string[];
  @query("bar")
  foo: string;
  @query
  "api-version": string;
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
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { RequiredOptionalParams, OptionalOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _requiredSend(
  context: Client,
  select: string[],
  options: RequiredOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/annotation/required{?select*}",
    {
      select: select.map((p: any) => {
        return p;
      }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _requiredDeserialize(
  result: PathUncheckedResponse,
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
  options: RequiredOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _requiredSend(context, select, options);
  return _requiredDeserialize(result);
}

export function _optionalSend(
  context: Client,
  foo: string,
  apiVersion: string,
  options: OptionalOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/annotation/optional{?select*,bar,api%2Dversion}",
    {
      select: !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
      bar: foo,
      "api%2Dversion": apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _optionalDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function optional(
  context: Client,
  foo: string,
  apiVersion: string,
  options: OptionalOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _optionalSend(context, foo, apiVersion, options);
  return _optionalDeserialize(result);
}
```
