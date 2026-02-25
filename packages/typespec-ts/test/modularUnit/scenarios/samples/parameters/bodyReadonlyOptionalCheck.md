# Should not generate readonly optional body in sample

Should not generate readonly optional body properties in sample as they cannot be set by users.

## TypeSpec

This is tsp definition.

```tsp
@doc("This is a simple model.")
model BodyParameter {
  name: string;
  @doc("This is a readonly optional property.")
  @visibility(Lifecycle.Read)
  sku?: Sku;
}

@doc("SKU details.")
model Sku {
  name: string;
  tier: string;
}

@doc("This is a model with all http request decorator.")
model CompositeRequest {
  @path
  name: string;

  @query
  requiredQuery: string;

  @body
  widget: BodyParameter;
}

@doc("show example demo")
op read(...CompositeRequest): { @body body: {}};
```

## Example

Raw json files.

```json
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "name": "required path param",
    "requiredQuery": "required query",
    "body": {
      "name": "body name",
      "sku": {
        "name": "ManagedOps",
        "tier": "Essential"
      }
    }
  },
  "responses": {
    "200": {}
  }
}
```

## Provide generated operation options

Generated operation options.

```ts models:withOptions
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ReadOptionalParams extends OperationOptions {}
```

## Provide generated operations to call rest-level methods

## Operations

Should generate operations correctly:

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  BodyParameter,
  bodyParameterSerializer,
  _readResponseDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { ReadOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  name: string,
  requiredQuery: string,
  widget: BodyParameter,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{name}{?requiredQuery}",
    {
      name: name,
      requiredQuery: requiredQuery,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: bodyParameterSerializer(widget),
    });
}

export async function _readDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _readResponseDeserializer(result.body);
}

/** show example demo */
export async function read(
  context: Client,
  name: string,
  requiredQuery: string,
  widget: BodyParameter,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _readSend(context, name, requiredQuery, widget, options);
  return _readDeserialize(result);
}
```

## Samples

Generate body parameter but exclude readonly optional properties:

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
  const result = await client.read("required path param", "required query", { name: "body name" });
  console.log(result);
}

async function main(): Promise<void> {
  await read();
}

main().catch(console.error);
```
