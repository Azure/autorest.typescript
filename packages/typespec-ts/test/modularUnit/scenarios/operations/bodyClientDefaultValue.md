# Should apply client default value for optional body parameter

Should apply client default value when optional body parameter (string) is not provided.

## TypeSpec

This tests that body parameters with clientDefaultValue apply defaults.

```tsp
@route("/api")
interface Operations {
  @post
  @route("/create")
  create(
    @body
    @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("default-body")
    body?: string
  ): string;
}
```

Enable the TCGC dependency for clientDefaultValue decorator.

```yaml
needTCGC: true
```

## Operations

The generated operation should apply default value for optional body parameter.

```ts operations
import { TestingContext as Client } from "./index.js";
import { CreateOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  options: CreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/api/create")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
      body: !options["body"] ? options["body"] : (options["body"] ?? "default-body"),
    });
}

export async function _createDeserialize(result: PathUncheckedResponse): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function create(
  context: Client,
  options: CreateOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _createSend(context, options);
  return _createDeserialize(result);
}
```
