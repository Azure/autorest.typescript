# Success path deserializer handles empty body (e.g. 204 with no body)

When an operation can return either a body response (200) or an empty body response (204),
by default the generated deserializer returns just the model type (no body guard emitted).
When `enable-optional-response` is enabled, the return type includes `| void` and a body guard is emitted.

## TypeSpec

```tsp
model KeyValue {
  key: string;
  value: string;
}

@route("/keys/{key}")
@delete
op deleteKeyValue(@path key: string): { @statusCode statusCode: 200; @body body: KeyValue; } | {
  @statusCode statusCode: 204;
};
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { KeyValue, keyValueDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { DeleteKeyValueOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _deleteKeyValueSend(
  context: Client,
  key: string,
  options: DeleteKeyValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/keys/{key}",
    {
      key: key,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _deleteKeyValueDeserialize(
  result: PathUncheckedResponse,
): Promise<KeyValue> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return keyValueDeserializer(result.body);
}

export async function deleteKeyValue(
  context: Client,
  key: string,
  options: DeleteKeyValueOptionalParams = { requestOptions: {} },
): Promise<KeyValue> {
  const result = await _deleteKeyValueSend(context, key, options);
  return _deleteKeyValueDeserialize(result);
}
```

# Success path deserializer handles empty body with enable-optional-response enabled

When `enable-optional-response` is enabled, the return type includes `| void` and a body guard is emitted.

## TypeSpec

```tsp
model KeyValue {
  key: string;
  value: string;
}

@route("/keys/{key}")
@delete
op deleteKeyValue(@path key: string): { @statusCode statusCode: 200; @body body: KeyValue; } | {
  @statusCode statusCode: 204;
};
```

```yaml
enable-optional-response: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { KeyValue, keyValueDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { DeleteKeyValueOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _deleteKeyValueSend(
  context: Client,
  key: string,
  options: DeleteKeyValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/keys/{key}",
    {
      key: key,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _deleteKeyValueDeserialize(
  result: PathUncheckedResponse,
): Promise<KeyValue | void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body ? keyValueDeserializer(result.body) : void;
}

export async function deleteKeyValue(
  context: Client,
  key: string,
  options: DeleteKeyValueOptionalParams = { requestOptions: {} },
): Promise<KeyValue | void> {
  const result = await _deleteKeyValueSend(context, key, options);
  return _deleteKeyValueDeserialize(result);
}
```

# Error path deserializer handles empty body (no body on error response)

When a service returns a non-success status code without a body (e.g. 412, 409),
the generated deserializer must not throw when trying to deserialize an absent error body.
The `error.details` assignment is now guarded with `if (result.body)`.

## TypeSpec

```tsp
@error
model ServiceError {
  code: string;
  message: string;
}

model Resource {
  id: string;
  name: string;
}

@route("/resources/{id}")
@get
op getResource(@path id: string): Resource | ServiceError;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Resource, resourceDeserializer, serviceErrorDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetResourceOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getResourceSend(
  context: Client,
  id: string,
  options: GetResourceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/resources/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getResourceDeserialize(result: PathUncheckedResponse): Promise<Resource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = serviceErrorDeserializer(result.body);
    }

    throw error;
  }

  return resourceDeserializer(result.body);
}

export async function getResource(
  context: Client,
  id: string,
  options: GetResourceOptionalParams = { requestOptions: {} },
): Promise<Resource> {
  const result = await _getResourceSend(context, id, options);
  return _getResourceDeserialize(result);
}
```

# Both empty body response and error response

When an operation can return either a body response (200), an empty body response (204),
or an error response (ServiceError), with the default behavior the return type is just the
model and no body guard is emitted on the success path (but the error-path body guard is
still guarded).

## TypeSpec

```tsp
@error
model ServiceError {
  code: string;
  message: string;
}

model KeyValue {
  key: string;
  value: string;
}

@route("/keys/{key}")
@delete
op deleteKeyValue(@path key: string): { @statusCode statusCode: 200; @body body: KeyValue; } | {
  @statusCode statusCode: 204;
} | ServiceError;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { KeyValue, keyValueDeserializer, serviceErrorDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { DeleteKeyValueOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _deleteKeyValueSend(
  context: Client,
  key: string,
  options: DeleteKeyValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/keys/{key}",
    {
      key: key,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _deleteKeyValueDeserialize(
  result: PathUncheckedResponse,
): Promise<KeyValue> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = serviceErrorDeserializer(result.body);
    }

    throw error;
  }

  return keyValueDeserializer(result.body);
}

export async function deleteKeyValue(
  context: Client,
  key: string,
  options: DeleteKeyValueOptionalParams = { requestOptions: {} },
): Promise<KeyValue> {
  const result = await _deleteKeyValueSend(context, key, options);
  return _deleteKeyValueDeserialize(result);
}
```

# Both empty body response and error response with enable-optional-response enabled

When `enable-optional-response` is enabled, the generated deserializer must guard both the
success-path body (for 204) and the error-path body deserialization.

## TypeSpec

```tsp
@error
model ServiceError {
  code: string;
  message: string;
}

model KeyValue {
  key: string;
  value: string;
}

@route("/keys/{key}")
@delete
op deleteKeyValue(@path key: string): { @statusCode statusCode: 200; @body body: KeyValue; } | {
  @statusCode statusCode: 204;
} | ServiceError;
```

```yaml
enable-optional-response: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { KeyValue, keyValueDeserializer, serviceErrorDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { DeleteKeyValueOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _deleteKeyValueSend(
  context: Client,
  key: string,
  options: DeleteKeyValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/keys/{key}",
    {
      key: key,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _deleteKeyValueDeserialize(
  result: PathUncheckedResponse,
): Promise<KeyValue | void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = serviceErrorDeserializer(result.body);
    }

    throw error;
  }

  return result.body ? keyValueDeserializer(result.body) : void;
}

export async function deleteKeyValue(
  context: Client,
  key: string,
  options: DeleteKeyValueOptionalParams = { requestOptions: {} },
): Promise<KeyValue | void> {
  const result = await _deleteKeyValueSend(context, key, options);
  return _deleteKeyValueDeserialize(result);
}
```
