# Optional query parameters should be included in options interface

This test reproduces the issue where optional query parameters like `outContentType` were being incorrectly filtered out from the generated options interface due to a bug in the parameter filtering logic.

The config would be like:

```yaml
needAzureCore: true
```

## TypeSpec

```tsp
alias KeyVaultOperation<
  TParams extends Reflection.Model,
  TResponse,
  Traits extends Reflection.Model = {},
> = Foundations.Operation<TParams, TResponse, Traits, {}>;

#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "Foundations.Operation is necessary for Key Vault"
@summary("Get a specified secret from a given key vault.")
@route("/secrets/{secret-name}/{secret-version}")
@get
op getSecret is KeyVaultOperation<
    {
        @path("secret-name")
        secretName: string;

        @path("secret-version")
        secretVersion?: string;

        @query("outContentType")
        outContentType?: string;
    },
    {}
>;
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
  options: GetSecretOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/secrets/{secret-name}/{secret-version}{?api%2Dversion,outContentType}",
    {
      "secret-name": secretName,
      "secret-version": options["secretVersion"],
      "api%2Dversion": context.apiVersion,
      outContentType: options?.outContentType,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getSecretDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** The most basic operation. */
export async function getSecret(
  context: Client,
  secretName: string,
  options: GetSecretOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getSecretSend(context, secretName, options);
  return _getSecretDeserialize(result);
}
```