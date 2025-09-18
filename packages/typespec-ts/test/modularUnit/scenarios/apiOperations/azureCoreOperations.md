# should handle Azure Core LRO operations without placeholder issues

Azure Core LRO operations should generate proper TypeScript code without unresolved placeholders.

## TypeSpec

```tsp
using Azure.Core.Traits;

/** A widget. */
@resource("widgets")
model WidgetSuite {
  /** The widget name. */
  @key
  name: string;

  /** The ID of the widget's manufacturer. */
  manufacturerId: string;

  /** The faked shared model. */
  sharedModel?: FakedSharedModel;
}

/** Faked shared model */
model FakedSharedModel {
  /** The tag. */
  tag: string;

  /** The created date. */
  createdAt: offsetDateTime;
}

alias ServiceTraits = Azure.Core.Traits.SupportsRepeatableRequests &
  Azure.Core.Traits.SupportsConditionalRequests &
  Azure.Core.Traits.SupportsClientRequestId;

alias Operations = Azure.Core.ResourceOperations<ServiceTraits>;

interface Widgets {
  @doc("Get the status of a long-running operation on widgets.")
  getWidgetOperationStatus is Operations.GetResourceOperationStatus<WidgetSuite>;
}
```

The config would be like:

```yaml
needAzureCore: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetWidgetOperationStatusOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getWidgetOperationStatusSend(
  context: Client,
  name: string,
  operationId: string,
  options: GetWidgetOperationStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/{name}/operations/{operationId}{?api%2Dversion}",
    {
      name: name,
      operationId: operationId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getWidgetOperationStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<__PLACEHOLDER_o21__> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return __PLACEHOLDER_o21_sdeserializer__(result.body);
}

/** Get the status of a long-running operation on widgets. */
export async function getWidgetOperationStatus(
  context: Client,
  name: string,
  operationId: string,
  options: GetWidgetOperationStatusOptionalParams = { requestOptions: {} },
): Promise<__PLACEHOLDER_o21__> {
  const result = await _getWidgetOperationStatusSend(
    context,
    name,
    operationId,
    options,
  );
  return _getWidgetOperationStatusDeserialize(result);
}
```
