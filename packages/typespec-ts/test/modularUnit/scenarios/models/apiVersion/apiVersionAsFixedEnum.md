# Should generate as fixed enum if apiVersion enum is referenced by normal operation

Generally we will not recommend that version enum is referenced by normal operation. But if happened we would generate it as normal fixed enum.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/versioning";
import "@typespec/http";

using TypeSpec.Versioning;
using TypeSpec.Http;

@service(#{
  title: "Microsoft.Contoso management service",
})
@versioned(Microsoft.Contoso.Versions)
namespace Microsoft.Contoso;

/** The available API versions. */
enum Versions {
  /** 2021-10-01-preview version */
  v2021_10_01_preview: "2021-10-01-preview",
}

op foo(@header apiVersion: Versions): void;
```

The config would be like:

```yaml
withRawContent: true
```

## Models

Generate as normal enums.

```ts models
// This file contains only generated model types and (de)serializers.
// Disable this rule for deserializer functions which require 'any' for raw JSON input.
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** The available API versions. */
export type Versions = "2021-10-01-preview";
```

## Operations

Should normal operation with enum parameter:

```ts operations
import { ContosoContext as Client } from "./index.js";
import { FooOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _fooSend(
  context: Client,
  options: FooOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        "api-version": context.apiVersion,
        ...options.requestOptions?.headers,
      },
    });
}

export async function _fooDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function foo(
  context: Client,
  options: FooOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fooSend(context, options);
  return _fooDeserialize(result);
}
```
