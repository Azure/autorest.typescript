# @clientOption("restErrorCodeHeader", ...) sets error.code from response header

Tests that when an error model has `@clientOption("restErrorCodeHeader", "x-ms-error-code", "javascript")`,
the generated code conditionally sets `error.code` from the specified response header.

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
@clientOption("restErrorCodeHeader", "x-ms-error-code", "javascript")
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

## Operations

```ts operations function _getWidgetDeserialize
export async function _getWidgetDeserialize(result: PathUncheckedResponse): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = apiErrorDeserializer(result.body);
    const restErrorCodeValue = result.headers["x-ms-error-code"];
    if (restErrorCodeValue !== undefined) {
      error.code = restErrorCodeValue;
    }
    throw error;
  }

  return widgetDeserializer(result.body);
}
```

# @clientOption("restErrorCodeHeader", ...) combined with @clientOption("header", ...)

Tests that both restErrorCodeHeader and header client options work together on the same error model.

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
@clientOption("restErrorCodeHeader", "x-ms-error-code", "javascript")
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
}
```

## Operations

```ts operations function _getItemDeserialize
export async function _getItemDeserialize(result: PathUncheckedResponse): Promise<Item> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = serviceErrorDeserializer(result.body);
    error.details = { ...(error.details as any), requestId: result.headers["x-ms-request-id"] };
    const restErrorCodeValue = result.headers["x-ms-error-code"];
    if (restErrorCodeValue !== undefined) {
      error.code = restErrorCodeValue;
    }
    throw error;
  }

  return itemDeserializer(result.body);
}
```

# No error.code override without @clientOption("restErrorCodeHeader", ...)

Tests that without the restErrorCodeHeader client option, no error.code assignment is generated.

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

## Operations

```ts operations function _getWidgetDeserialize
export async function _getWidgetDeserialize(result: PathUncheckedResponse): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = apiErrorDeserializer(result.body);

    throw error;
  }

  return widgetDeserializer(result.body);
}
```
