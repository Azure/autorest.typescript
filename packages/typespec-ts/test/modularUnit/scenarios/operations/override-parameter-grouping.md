# only: Should handle parameter grouping when using @@override

Tests that parameters are correctly grouped into options model when using @@override directive.

## TypeSpec

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";
using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service(#{
  title: "Override Service"
})
namespace Override;

// Original operation with separate query parameters
@route("/group")
@get
op groupOriginal(
  @query param1: string,
  @query param2: string,
): void;

// Override model to group parameters
model GroupParametersOptions {
  @query param1: string;
  @query param2: string;
}

// Override operation with grouped parameters
op groupCustomized(
  options: GroupParametersOptions,
): void;

@@override(Override.groupOriginal, Override.groupCustomized);
```

The config would be like:

```yaml
needTCGC: true
needAzureCore: true
withRawContent: true
```

## Models

```ts models
/** model interface GroupParametersOptions */
export interface GroupParametersOptions {
  /** Query parameter param1 */
  param1: string;
  /** Query parameter param2 */
  param2: string;
}

export function groupParametersOptionsSerializer(
  item: GroupParametersOptions,
): any {
  return { param1: item["param1"], param2: item["param2"] };
}
```

## Models with Options

The options interface should be correctly generated:

```ts models:withOptions
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface GroupOriginalOptionalParams extends OperationOptions {}
```

## Operations

```ts operations
import { OverrideContext as Client } from "./index.js";
import { GroupParametersOptions } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GroupOriginalOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _groupOriginalSend(
  context: Client,
  options: GroupParametersOptions,
  optionalParams: GroupOriginalOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/group{?param1,param2}",
    {
      param1: options.param1,
      param2: options.param2,
    },
    {
      allowReserved: optionalParams?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(optionalParams) });
}

export async function _groupOriginalDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function groupOriginal(
  context: Client,
  options: GroupParametersOptions,
  optionalParams: GroupOriginalOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _groupOriginalSend(context, options, optionalParams);
  return _groupOriginalDeserialize(result);
}
```