# should handle model property name with capitalized first letter

## TypeSpec

```tsp
model ListCredentialsRequest{
  serviceName: string;
  PROPERTY_NAME: string;
}

@doc("show example demo")
op post(@query QUERY_PARAM?: string, @header HEADER_PARAM?: string,@path PATH_PARAM?: string, @body ListCredentialsRequest?: ListCredentialsRequest): void;
```

Should ingore the warning `@azure-tools/typespec-ts/property-name-normalized`:

```yaml
mustEmptyDiagnostic: false
```

## Example

Raw json files.

```json
{
  "title": "post",
  "operationId": "post",
  "parameters": {
    "QUERY_PARAM": "query",
    "header_param": "header",
    "PATH_PARAM": "path",
    "ListCredentialsRequest": {
      "serviceName": "SSH",
      "PROPERTY_NAME": "name"
    }
  },
  "responses": {
    "200": {}
  }
}
```

## Provide generated operations, models and samples

Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { listCredentialsRequestSerializer } from "../models/models.js";
import { PostOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _postSend(
  context: Client,
  options: PostOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = expandUrlTemplate(
    "{/PATH_PARAM}{?QUERY_PARAM}",
    {
      PATH_PARAM: options["pathParam"],
      QUERY_PARAM: options?.queryParam
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding
    }
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      ...(options?.headerParam !== undefined
        ? { header_param: options?.headerParam }
        : {}),
      ...options.requestOptions?.headers
    },
    body: !options["listCredentialsRequest"]
      ? options["listCredentialsRequest"]
      : listCredentialsRequestSerializer(options["listCredentialsRequest"])
  });
}

export async function _postDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** show example demo */
export async function post(
  context: Client,
  options: PostOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _postSend(context, options);
  return _postDeserialize(result);
}
```

Models

```ts models:withOptions
import { ListCredentialsRequest } from "../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface PostOptionalParams extends OperationOptions {
  queryParam?: string;
  headerParam?: string;
  pathParam?: string;
  listCredentialsRequest?: ListCredentialsRequest;
}
```

Samples

```ts samples
/** This file path is /samples-dev/postSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example demo
 *
 * @summary show example demo
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function post(): Promise<void> {
  const client = new TestingClient();
  await client.post({
    listCredentialsRequest: { serviceName: "SSH", propertyName: "name" },
    queryParam: "query",
    headerParam: "header",
    pathParam: "path"
  });
}

async function main(): Promise<void> {
  await post();
}

main().catch(console.error);
```
