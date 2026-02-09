# Intersection of model and header in response

This scenario tests that metadata properties like headers are included in the generated TypeScript model interface by default.

## TypeSpec

```yaml
include-headers-in-response: true
```

```tsp
model User {
  name: string;
  email: string;
}

op getUser(): User & {@header requestId: string};
```

## Models

```ts models interface User
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface User */
export interface User {
  name: string;
  email: string;
}
```

```ts operations function getUser
export async function getUser(
  context: Client,
  options: GetUserOptionalParams = { requestOptions: {} },
): Promise<{
  name: string;
  email: string;
  requestId: string;
}> {
  const result = await _getUserSend(context, options);
  const headers = { requestId: result.headers["request-id"] };
  const payload = await _getUserDeserialize(result);
  return { ...payload, ...headers };
}
```
