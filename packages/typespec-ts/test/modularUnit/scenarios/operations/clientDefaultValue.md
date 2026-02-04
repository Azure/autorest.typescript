# Should apply client default values for optional query and header parameters

## TypeSpec

This tests that query and header parameters with clientDefaultValue are applied when not provided by the user.

```tsp
model Configuration {
  name: string;
}

@route("/api")
interface Operations {
  @get
  @route("/test")
  testQuery(
    @query
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue(10)
    maxResults?: int32,
    
    @query
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("asc")
    sortOrder?: string,
    
    @header
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("application/json")
    customHeader?: string,
    
    @query
    limit?: int32
  ): Configuration;
}
```

Enable the TCGC dependency for clientDefaultValue decorator.

```yaml
needTCGC: true
```

## Operations

The generated operation should apply default values for query and header parameters.

```ts operations
import { TestingContext as Client } from "./index.js";
import { Configuration, configurationDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { TestQueryOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _testQuerySend(
  context: Client,
  options: TestQueryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/test{?maxResults,sortOrder,limit}",
    {
      maxResults: options?.maxResults ?? 10,
      sortOrder: options?.sortOrder ?? "asc",
      limit: options?.limit,
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
        "custom-header": options?.customHeader ?? "application/json",
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _testQueryDeserialize(result: PathUncheckedResponse): Promise<Configuration> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return configurationDeserializer(result.body);
}

export async function testQuery(
  context: Client,
  options: TestQueryOptionalParams = { requestOptions: {} },
): Promise<Configuration> {
  const result = await _testQuerySend(context, options);
  return _testQueryDeserialize(result);
}
```
