# Error response headers deserialized when include-headers-in-response is enabled

Tests that when an error model has `@header` properties and `include-headers-in-response: true` is set,
a separate `_<op>DeserializeExceptionHeaders` function is generated and called from the deserialize function.

## TypeSpec

```yaml
include-headers-in-response: true
```

```tsp
@error
model ApiError {
  code: string;
  message: string;
  @header("x-ms-error-code") errorCode: string;
}

model Widget {
  id: string;
  name: string;
}

@route("/widgets/{id}")
@get
op getWidget(@path id: string): Widget | ApiError;
```

## Operations

```ts operations function _getWidgetDeserializeExceptionHeaders
export function _getWidgetDeserializeExceptionHeaders(
  result: PathUncheckedResponse
): {
  errorCode: string;
} {
  return { errorCode: result.headers["x-ms-error-code"] };
}
```

```ts operations function _getWidgetDeserialize
export async function _getWidgetDeserialize(
  result: PathUncheckedResponse
): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = apiErrorDeserializer(result.body);
    Object.assign(error.details, _getWidgetDeserializeExceptionHeaders(result));
    throw error;
  }

  return widgetDeserializer(result.body);
}
```

# Error response headers not generated when include-headers-in-response is disabled

Tests that when `include-headers-in-response` is not set (default), no exception headers function is generated.

## TypeSpec

```tsp
@error
model ApiError {
  code: string;
  message: string;
  @header("x-ms-error-code") errorCode: string;
}

model Widget {
  id: string;
  name: string;
}

@route("/widgets/{id}")
@get
op getWidget(@path id: string): Widget | ApiError;
```

## Operations

```ts operations function _getWidgetDeserialize
export async function _getWidgetDeserialize(
  result: PathUncheckedResponse
): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = apiErrorDeserializer(result.body);
    throw error;
  }

  return widgetDeserializer(result.body);
}
```

# Error response headers with typed properties (boolean, date)

Tests that error response headers with non-string types are properly deserialized with type coercion in the exception headers function.

## TypeSpec

```yaml
include-headers-in-response: true
```

```tsp
@error
model StorageError {
  code: string;
  message: string;
  @header("x-ms-error-code") errorCode: string;
  @header("x-ms-is-retryable") isRetryable?: boolean;
  @header("x-ms-retry-after") @encode("rfc7231") retryAfter?: utcDateTime;
}

model Item {
  id: string;
}

@route("/items/{id}")
@get
op getItem(@path id: string): Item | StorageError;
```

## Operations

```ts operations function _getItemDeserializeExceptionHeaders
export function _getItemDeserializeExceptionHeaders(
  result: PathUncheckedResponse
): {
  errorCode: string;
  isRetryable?: boolean;
  retryAfter?: Date;
} {
  return {
    errorCode: result.headers["x-ms-error-code"],
    isRetryable:
      result.headers["x-ms-is-retryable"] === undefined ||
      result.headers["x-ms-is-retryable"] === null
        ? result.headers["x-ms-is-retryable"]
        : result.headers["x-ms-is-retryable"].trim().toLowerCase() === "true",
    retryAfter:
      result.headers["x-ms-retry-after"] === undefined ||
      result.headers["x-ms-retry-after"] === null
        ? result.headers["x-ms-retry-after"]
        : new Date(result.headers["x-ms-retry-after"])
  };
}
```

```ts operations function _getItemDeserialize
export async function _getItemDeserialize(
  result: PathUncheckedResponse
): Promise<Item> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = storageErrorDeserializer(result.body);
    Object.assign(error.details, _getItemDeserializeExceptionHeaders(result));
    throw error;
  }

  return itemDeserializer(result.body);
}
```

# XML error with response headers

Tests that XML error deserialization works alongside the exception headers function.

## TypeSpec

```yaml
include-headers-in-response: true
```

```tsp
@error
@mediaTypeHint("application/xml")
model StorageError {
  @Xml.name("Code") code?: string;
  @Xml.name("Message") message?: string;
  @header("x-ms-error-code") errorCode: string;
}

model Widget {
  id: string;
  name: string;
}

@route("/widgets/{id}")
@get
op getWidget(@path id: string): Widget | StorageError;
```

## Operations

```ts operations function _getWidgetDeserializeExceptionHeaders
export function _getWidgetDeserializeExceptionHeaders(
  result: PathUncheckedResponse
): {
  errorCode: string;
} {
  return { errorCode: result.headers["x-ms-error-code"] };
}
```

```ts operations function _getWidgetDeserialize
export async function _getWidgetDeserialize(
  result: PathUncheckedResponse
): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = storageErrorXmlDeserializer(result.body);
    Object.assign(error.details, _getWidgetDeserializeExceptionHeaders(result));
    throw error;
  }

  return widgetDeserializer(result.body);
}
```
