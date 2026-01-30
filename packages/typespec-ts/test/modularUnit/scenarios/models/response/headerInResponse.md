# Header properties included in the response model interface by default

This scenario tests that metadata properties like headers are included in the generated TypeScript model interface by default.

## TypeSpec

```tsp
model User {
  name: string;
  email: string;

  @header("x-user-id")
  userId: string;
}

op getUser(): User;
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
  userId?: string;
}
```

```ts operations function getUser
export async function getUser(
  context: Client,
  options: GetUserOptionalParams = { requestOptions: {} }
): Promise<User> {
  const result = await _getUserSend(context, options);
  return _getUserDeserialize(result);
}
```

```ts models function userDeserializer
export function userDeserializer(item: any, headers?: any): User {
  return {
    name: item["name"],
    email: item["email"],
    userId: headers?.["x-user-id"]
  };
}
```

```ts operations function _getUserDeserialize
export async function _getUserDeserialize(
  result: PathUncheckedResponse
): Promise<User> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }
  return userDeserializer(result.body, result.headers);
}
```
