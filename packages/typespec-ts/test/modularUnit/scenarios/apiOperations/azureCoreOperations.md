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
import {
  ResourceOperationStatusWidgetSuiteWidgetSuiteError,
  resourceOperationStatusWidgetSuiteWidgetSuiteErrorDeserializer,
} from "../models/models.js";
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
  apiVersion: string,
  name: string,
  operationId: string,
  options: GetWidgetOperationStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/{name}/operations/{operationId}{?api%2Dversion}",
    {
      name: name,
      operationId: operationId,
      "api%2Dversion": apiVersion,
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
): Promise<ResourceOperationStatusWidgetSuiteWidgetSuiteError> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return resourceOperationStatusWidgetSuiteWidgetSuiteErrorDeserializer(
    result.body,
  );
}

/** Get the status of a long-running operation on widgets. */
export async function getWidgetOperationStatus(
  context: Client,
  apiVersion: string,
  name: string,
  operationId: string,
  options: GetWidgetOperationStatusOptionalParams = { requestOptions: {} },
): Promise<ResourceOperationStatusWidgetSuiteWidgetSuiteError> {
  const result = await _getWidgetOperationStatusSend(
    context,
    apiVersion,
    name,
    operationId,
    options,
  );
  return _getWidgetOperationStatusDeserialize(result);
}
```

Generate the models

```ts models
import { ErrorModel } from "@azure-rest/core-client";

/** Provides status details for long running operations. */
export interface ResourceOperationStatusWidgetSuiteWidgetSuiteError {
  /** The unique ID of the operation. */
  id: string;
  /** The status of the operation */
  status: OperationState;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: WidgetSuite;
}

export function resourceOperationStatusWidgetSuiteWidgetSuiteErrorDeserializer(
  item: any,
): ResourceOperationStatusWidgetSuiteWidgetSuiteError {
  return {
    id: item["id"],
    status: item["status"],
    error: !item["error"] ? item["error"] : item["error"],
    result: !item["result"]
      ? item["result"]
      : widgetSuiteDeserializer(item["result"]),
  };
}

/** Enum describing allowed operation states. */
export type OperationState =
  | "NotStarted"
  | "Running"
  | "Succeeded"
  | "Failed"
  | "Canceled";

/** A widget. */
export interface WidgetSuite {
  /** The widget name. */
  name: string;
  /** The ID of the widget's manufacturer. */
  manufacturerId: string;
  /** The faked shared model. */
  sharedModel?: FakedSharedModel;
}

export function widgetSuiteDeserializer(item: any): WidgetSuite {
  return {
    name: item["name"],
    manufacturerId: item["manufacturerId"],
    sharedModel: !item["sharedModel"]
      ? item["sharedModel"]
      : fakedSharedModelDeserializer(item["sharedModel"]),
  };
}

/** Faked shared model */
export interface FakedSharedModel {
  /** The tag. */
  tag: string;
  /** The created date. */
  createdAt: string;
}

export function fakedSharedModelDeserializer(item: any): FakedSharedModel {
  return {
    tag: item["tag"],
    createdAt: item["createdAt"],
  };
}
```
