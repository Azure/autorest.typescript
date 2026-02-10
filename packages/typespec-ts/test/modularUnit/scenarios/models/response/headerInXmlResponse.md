# Header properties included in the response type when `include-headers-in-response` is enabled

This scenario tests that, when the `include-headers-in-response: true` feature flag is enabled, metadata properties like headers are included in the generated operation response type (while the underlying `User` model interface does not contain header properties).

## TypeSpec

```yaml
include-headers-in-response: true
```

```tsp
model User {
  name: string;
  email: string;
}

op getUser(): {...User,   @header("content-type")
  contentType: "application/xml";
  @header("x-user-id")
  userId?: string;

  @header
  @encode("rfc7231")
  createdAt?: utcDateTime;};
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
  options: GetUserOptionalParams = { requestOptions: {} }
): Promise<{
  name: string;
  email: string;
  userId?: string;
  createdAt?: Date;
  contentType: "application/xml";
}> {
  const result = await _getUserSend(context, options);
  const headers = {
    userId:
      result.headers["x-user-id"] === undefined ||
      result.headers["x-user-id"] === null
        ? result.headers["x-user-id"]
        : result.headers["x-user-id"],
    createdAt:
      result.headers["created-at"] === undefined ||
      result.headers["created-at"] === null
        ? result.headers["created-at"]
        : new Date(result.headers["created-at"]),
    contentType: result.headers["content-type"] as any
  };
  const payload = await _getUserDeserialize(result);
  return { ...payload, ...headers };
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

  return userXmlDeserializer(result.body);
}
```

# [void] Header properties included in the response model when there is no response body

## TypeSpec

```yaml
include-headers-in-response: true
```

```tsp

@delete op deleteUser(): { @header("x-request-id") requestId: string, @header("x-optional-header") optionalHeader?: string};
```

## Models

```ts operations function deleteUser
export async function deleteUser(
  context: Client,
  options: DeleteUserOptionalParams = { requestOptions: {} }
): Promise<{ requestId: string; optionalHeader?: string }> {
  const result = await _deleteUserSend(context, options);
  const headers = {
    requestId: result.headers["x-request-id"],
    optionalHeader:
      result.headers["x-optional-header"] === undefined ||
      result.headers["x-optional-header"] === null
        ? result.headers["x-optional-header"]
        : result.headers["x-optional-header"]
  };
  return { ...headers };
}
```

```ts operations function _deleteUserDeserialize
export async function _deleteUserDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}
```

# Header-only response with typed properties (boolean, date, bytes)

## TypeSpec

```yaml
include-headers-in-response: true
```

```tsp
@get op getAccountInfo(): {
  @header("date") date: utcDateTime;
  @header("x-ms-legal-hold") legalHold: boolean;
  @header("content-md5") contentMd5: bytes;
  @header("x-ms-request-id") requestId?: string;
};
```

## Models

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
  const headers = {
    date: new Date(result.headers["date"]),
    legalHold:
      result.headers["x-ms-legal-hold"].trim().toLowerCase() === "true",
    contentMd5:
      typeof result.headers["content-md5"] === "string"
        ? stringToUint8Array(result.headers["content-md5"], "base64")
        : result.headers["content-md5"],
    requestId:
      result.headers["x-ms-request-id"] === undefined ||
      result.headers["x-ms-request-id"] === null
        ? result.headers["x-ms-request-id"]
        : result.headers["x-ms-request-id"]
  };
  return { ...headers };
}
```

```ts operations function _getAccountInfoDeserialize
export async function _getAccountInfoDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}
```
