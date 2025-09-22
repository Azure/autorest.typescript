# Should handle optional parameter filtering when using @@override

Tests that optional parameters are correctly removed from URI templates when using @@override directive.

## TypeSpec

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";
using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service(#{
  title: "KeyVault Service"
})
namespace KeyVault;

// Original operation with outContentType parameter
@route("/secrets/{secretName}")
@get
op getSecretOriginal(
  @path secretName: string,
  @query @clientName("outContentType") outContentType?: string
): void;

// Override operation without outContentType parameter
op getSecret(
  @path secretName: string,
): void;

@@override(KeyVault.getSecretOriginal, KeyVault.getSecret);
```

The config would be like:

```yaml
needTCGC: true
needAzureCore: true
withRawContent: true
```

## Models with Options

The options interface should be correctly generated:

```ts models:withOptions
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface GetSecretOriginalOptionalParams extends OperationOptions {}
```

## Operations

```ts operations
import { KeyVaultContext as Client } from "./index.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetSecretOriginalOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSecretOriginalSend(
  context: Client,
  secretName: string,
  options: GetSecretOriginalOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/secrets/{secretName}",
    {
      secretName: secretName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getSecretOriginalDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function getSecretOriginal(
  context: Client,
  secretName: string,
  options: GetSecretOriginalOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getSecretOriginalSend(context, secretName, options);
  return _getSecretOriginalDeserialize(result);
}
```
