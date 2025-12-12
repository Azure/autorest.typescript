# only: Should generate file model

## TypeSpec

```tsp
model Site {
    name: string;
}
op test(@body site:Site): File<"application/octet-stream">;
```

## Model

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Site */
export interface Site {
  name: string;
}

export function siteSerializer(item: Site): any {
  return { name: item["name"] };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Site, siteSerializer } from "../models/models.js";
import { TestOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _testSend(
  context: Client,
  site: Site,
  options: TestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/octet-stream", ...options.requestOptions?.headers },
      body: siteSerializer(site),
    });
}

export async function _testDeserialize(
  result: PathUncheckedResponse,
): Promise<__PLACEHOLDER_o22__> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return __PLACEHOLDER_o22_sdeserializer__(result.body);
}

export async function test(
  context: Client,
  site: Site,
  options: TestOptionalParams = { requestOptions: {} },
): Promise<__PLACEHOLDER_o22__> {
  const result = await _testSend(context, site, options);
  return _testDeserialize(result);
}
```