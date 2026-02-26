# @clientOption("header", ...) on error model adds property and deserializes from header

Tests that when an error model has `@clientOption("header", "x-ms-error-code:errorCode", "javascript")`,
the generated code adds the `errorCode` property to the model interface and deserializes it from
the response header in the exception handling code. This works independently of `include-headers-in-response`.

## TypeSpec

```yaml
withRawContent: true
needTCGC: true
```

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";
using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service(#{
  title: "Test Service"
})
namespace TestService;

#suppress "@azure-tools/typespec-client-generator-core/client-option"
@clientOption("header", "x-ms-error-code:errorCode", "javascript")
@error
model ApiError {
  code: string;
  message: string;
}

model Widget {
  id: string;
  name: string;
}

@route("/widgets/{id}")
@get
op getWidget(@path id: string): Widget | ApiError;
```

## Models

```ts models interface ApiError
/** model interface ApiError */
export interface ApiError {
  code: string;
  message: string;
  errorCode?: string;
}
```

## Operations

```ts operations function _getWidgetDeserialize
export async function _getWidgetDeserialize(result: PathUncheckedResponse): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = apiErrorDeserializer(result.body);
    error.details = { ...(error.details as any), errorCode: result.headers["x-ms-error-code"] };
    throw error;
  }

  return widgetDeserializer(result.body);
}
```

# @clientOption("header", ...) with multiple headers on error model

Tests that multiple `@clientOption("header", ...)` decorators on an error model generate
multiple header extractions.

## TypeSpec

```yaml
withRawContent: true
needTCGC: true
```

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";
using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service(#{
  title: "Test Service"
})
namespace TestService;

#suppress "@azure-tools/typespec-client-generator-core/client-option"
@clientOption("header", "x-ms-error-code:errorCode", "javascript")
#suppress "@azure-tools/typespec-client-generator-core/client-option"
@clientOption("header", "x-ms-request-id:requestId", "javascript")
@error
model ServiceError {
  code: string;
  message: string;
}

model Item {
  id: string;
}

@route("/items/{id}")
@get
op getItem(@path id: string): Item | ServiceError;
```

## Models

```ts models interface ServiceError
/** model interface ServiceError */
export interface ServiceError {
  code: string;
  message: string;
  requestId?: string;
  errorCode?: string;
}
```

## Operations

```ts operations function _getItemDeserialize
export async function _getItemDeserialize(result: PathUncheckedResponse): Promise<Item> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = serviceErrorDeserializer(result.body);
    error.details = {
      ...(error.details as any),
      requestId: result.headers["x-ms-request-id"],
      errorCode: result.headers["x-ms-error-code"],
    };
    throw error;
  }

  return itemDeserializer(result.body);
}
```

# @clientOption("header", ...) with property that already exists in model

Tests that when the error model already has a property with the same name as the
@clientOption header mapping, it still deserializes from the header (overriding the body value),
and does not duplicate the property in the interface.

## TypeSpec

```yaml
withRawContent: true
needTCGC: true
```

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";
using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service(#{
  title: "Test Service"
})
namespace TestService;

#suppress "@azure-tools/typespec-client-generator-core/client-option"
@clientOption("header", "x-ms-error-code:errorCode", "javascript")
@error
model ApiError {
  code: string;
  message: string;
  errorCode: string;
}

model Widget {
  id: string;
  name: string;
}

@route("/widgets/{id}")
@get
op getWidget(@path id: string): Widget | ApiError;
```

## Models

```ts models interface ApiError
/** model interface ApiError */
export interface ApiError {
  code: string;
  message: string;
  errorCode: string;
  errorCode?: string;
}
```

## Operations

```ts operations function _getWidgetDeserialize
export async function _getWidgetDeserialize(result: PathUncheckedResponse): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = apiErrorDeserializer(result.body);
    error.details = { ...(error.details as any), errorCode: result.headers["x-ms-error-code"] };
    throw error;
  }

  return widgetDeserializer(result.body);
}
```
