# should serialize name normalize in url path template

## TypeSpec

```tsp
alias KeyVaultOperation<
  TParams extends Reflection.Model,
  TResponse,
  Traits extends Reflection.Model = {},
> = Foundations.Operation<TParams, TResponse, Traits>;
model KeyBundle {
  key?: string;
}
#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "Foundations.Operation is necessary for Key Vault"
@summary("The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Azure Key Vault.")
@route("/keys/{key-name}/{key-version}")
@put
op updateKey is KeyVaultOperation<
  {
    /**
     * The name of key to update.
     */
    @path("key-name")
    keyName: string;

    /**
     * The version of the key to update.
     */
    @path("key-version")
    keyVersion: string;

    /**
     * The parameters of the key to update.
     */
    @body
    parameters: string;
  },
  KeyBundle
>;

```

The config would be like:

```yaml
needAzureCore: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { KeyBundle, keyBundleDeserializer } from "../models/models.js";
import { UpdateKeyOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _updateKeySend(
  context: Client,
  keyName: string,
  keyVersion: string,
  parameters: string,
  options: UpdateKeyOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = expandUrlTemplate(
    "/keys/{key-name}/{key-version}{?api%2Dversion}",
    {
      "key-name": keyName,
      "key-version": keyVersion,
      "api%2Dversion": context.apiVersion
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding
    }
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "text/plain",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    },
    body: parameters
  });
}

export async function _updateKeyDeserialize(
  result: PathUncheckedResponse
): Promise<KeyBundle> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return keyBundleDeserializer(result.body);
}

/** The most basic operation. */
export async function updateKey(
  context: Client,
  keyName: string,
  keyVersion: string,
  parameters: string,
  options: UpdateKeyOptionalParams = { requestOptions: {} }
): Promise<KeyBundle> {
  const result = await _updateKeySend(
    context,
    keyName,
    keyVersion,
    parameters,
    options
  );
  return _updateKeyDeserialize(result);
}
```
