# Optional query parameters with constant values should not be hardcoded

## TypeSpec

```tsp
op read(@path pathParam: string,
    @query("query-name") queryName: "query",
    @query("optional-query-name") optionalQueryName?: "optionalQuery",
    @query("key-version") keyVersion?: string,
    @body parameters: string): OkResponse;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
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
  pathParam: string,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{pathParam}{?query%2Dname,optional%2Dquery%2Dname,key%2Dversion}",
    {
      pathParam: pathParam,
      "query%2Dname": "query",
      "optional%2Dquery%2Dname": !options?.optionalQueryName
        ? options?.optionalQueryName
        : "optionalQuery",
      "key%2Dversion": options?.keyVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      body: parameters,
    });
}

export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  pathParam: string,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _readSend(context, pathParam, parameters, options);
  return _readDeserialize(result);
}
```
