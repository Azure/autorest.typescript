# only: should handle model property name with capitalized first letter

## TypeSpec

```tsp
model ListCredentialsRequest{
  serviceName: string
}

@doc("show example demo")
op post(@body ListCredentialsRequest?: ListCredentialsRequest): { @body ListCredentialsRequest?: ListCredentialsRequest};

```

## Example

Raw json files.

```json
{
  "title": "post",
  "operationId": "post",
  "parameters": {
    "ListCredentialsRequest": {
      "serviceName": "SSH"
    },
  },
  "responses": {
    "200": {}
  }
}
```

## Provide generated operation options

```ts models:withOptions
import { ListCredentialsRequest } from "../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface PostOptionalParams extends OperationOptions {
  listCredentialsRequest?: ListCredentialsRequest;
}
```

## Samples

Generate optional body in option parameter:

```ts samples
```