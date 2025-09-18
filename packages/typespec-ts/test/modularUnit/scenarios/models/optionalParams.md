# only: Optional query parameters should be included in options interface

This test reproduces the issue where optional query parameters like `outContentType` were being incorrectly filtered out from the generated options interface due to a bug in the parameter filtering logic.

## TypeSpec

```tsp
@route("/secret/{secret-name}")
op getSecret(
  @path("secret-name") secretName: string,
  @query("api-version") apiVersion: string,
  @query secretVersion?: string,
  @query("outContentType") outContentType?: string
): {
  @statusCode statusCode: 200;
  @body value: string;
};
```

## Models with Options

The options file should correctly include both optional query parameters:

```ts models:withOptions
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface GetSecretOptionalParams extends OperationOptions {
  secretVersion?: string;
  outContentType?: string;
}
```

## Operations

The GetSecretOptionalParams interface should include both secretVersion and outContentType parameters in the options:

```ts operations
import { TestingContext as Client } from "./index.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetSecretOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSecretSend(
  context: Client,
  secretName: string,
  apiVersion: string,
  options: GetSecretOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/secret/{secret-name}{?api%2Dversion,secretVersion,outContentType}",
    {
      "secret-name": secretName,
      "api%2Dversion": apiVersion,
      secretVersion: options?.secretVersion,
      outContentType: options?.outContentType,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "text/plain",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getSecretDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getSecret(
  context: Client,
  secretName: string,
  apiVersion: string,
  options: GetSecretOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _getSecretSend(context, secretName, apiVersion, options);
  return _getSecretDeserialize(result);
}
```