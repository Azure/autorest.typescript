# Header properties included in the response model interface by default

This scenario tests that metadata properties like headers are included in the generated TypeScript model interface by default.

## TypeSpec

```tsp
model User {
  name: string;
  email: string;

  @header("x-user-id")
  userId?: string;

  @header
  @encode("rfc7231")
  createdAt?: utcDateTime;
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
  createdAt?: Date;
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
    userId: headers?.["x-user-id"],
    createdAt: !headers?.["created-at"]
      ? headers?.["created-at"]
      : new Date(headers?.["created-at"])
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

# [void] Header properties included in the response model when there is no response body

## TypeSpec

```tsp

@delete op deleteUser(): { @header("x-request-id") requestId: string, @header("x-optional-header") optionalHeader?: string};
```

## Models

```ts models interface DeleteUserResponse
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Defines headers for operation response. */
export interface DeleteUserResponse {
  requestId: string;
  optionalHeader?: string;
}
```

```ts operations function deleteUser
export async function deleteUser(
  context: Client,
  options: DeleteUserOptionalParams = { requestOptions: {} }
): Promise<{ requestId: string; optionalHeader?: string }> {
  const result = await _deleteUserSend(context, options);
  return _deleteUserDeserialize(result);
}
```

```ts operations function _deleteUserDeserialize
export async function _deleteUserDeserialize(
  result: PathUncheckedResponse
): Promise<{ requestId: string; optionalHeader?: string }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    requestId: result.headers["x-request-id"]!,
    optionalHeader: result.headers?.["x-optional-header"]
  } as DeleteUserResponse;
}
```

# Header-only response with typed properties (boolean, date, bytes)

## TypeSpec

```tsp
@get op getAccountInfo(): {
  @header("date") date: utcDateTime;
  @header("x-ms-legal-hold") legalHold: boolean;
  @header("content-md5") contentMd5: bytes;
  @header("x-ms-request-id") requestId?: string;
};
```

## Models

```ts models interface GetAccountInfoResponse
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Defines headers for operation response. */
export interface GetAccountInfoResponse {
  date: Date;
  legalHold: boolean;
  contentMd5: Uint8Array;
  requestId?: string;
}
```

```ts operations function getAccountInfo
export async function getAccountInfo(
  context: Client,
  options: GetAccountInfoOptionalParams = { requestOptions: {} }
): Promise<{
  date: Date;
  legalHold: boolean;
  contentMd5: Uint8Array;
  requestId?: string;
}> {
  const result = await _getAccountInfoSend(context, options);
  return _getAccountInfoDeserialize(result);
}
```

```ts operations function _getAccountInfoDeserialize
export async function _getAccountInfoDeserialize(
  result: PathUncheckedResponse
): Promise<{
  date: Date;
  legalHold: boolean;
  contentMd5: Uint8Array;
  requestId?: string;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    date: new Date(result.headers["date"]!),
    legalHold: result.headers["x-ms-legal-hold"]! === "true",
    contentMd5: stringToUint8Array(result.headers["content-md5"]!, "base64"),
    requestId: result.headers?.["x-ms-request-id"]
  } as GetAccountInfoResponse;
}
```
