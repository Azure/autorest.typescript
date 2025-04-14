# should serialize name normalize in url query template

## TypeSpec

```tsp
op read(@path pathParam: string, @query("key-name")
    keyName: string, @query("key-version")
    keyVersion: string, @body
    parameters: string): OkResponse;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { ReadOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  pathParam: string,
  keyName: string,
  keyVersion: string,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{pathParam}{?key%2Dname,key%2Dversion}",
    {
      pathParam: pathParam,
      "key%2Dname": keyName,
      "key%2Dversion": keyVersion
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding
    }
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "text/plain",
    body: parameters
  });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  pathParam: string,
  keyName: string,
  keyVersion: string,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(
    context,
    pathParam,
    keyName,
    keyVersion,
    parameters,
    options
  );
  return _readDeserialize(result);
}
```
