# Should generate ARM extension list by target operation

## TypeSpec

```tsp
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "@typespec/openapi";
import "@typespec/rest";

using TypeSpec.Rest;
using Azure.ResourceManager;
using TypeSpec.Http;
using TypeSpec.OpenAPI;

@armProviderNamespace
namespace Microsoft.CostManagement;

/**
 * Alert status
 */
union AlertStatus {
  string,
  None: "None",
  Active: "Active",
  Overridden: "Overridden",
  Resolved: "Resolved",
  Dismissed: "Dismissed",
}

model AlertProperties {
  description?: string;
  source?: string;
  status?: AlertStatus;
  creationTime?: string;
  closeTime?: string;
  modificationTime?: string;
}

model Alert is Azure.ResourceManager.ExtensionResource<AlertProperties> {
  ...ResourceNameParameter<
    Resource = Alert,
    KeyName = "alertId",
    SegmentName = "alerts",
    NamePattern = ""
  >;

  eTag?: Azure.Core.eTag;
}

model AlertsResult {
  @pageItems
  value?: Alert[];
  
  @visibility(Lifecycle.Read)
  nextLink?: string;
}

model AlertErrorResponse {
  error?: {
    code?: string;
    message?: string;
  };
}

@armResourceOperations
interface Alerts {
  /**
   * Lists the alerts for scope defined.
   */
  @externalDocs("https://docs.microsoft.com/en-us/rest/api/costmanagement/")
  list is Extension.ListByTarget<
    Extension.ScopeParameter,
    Alert,
    Response = ArmResponse<AlertsResult>,
    Error = AlertErrorResponse
  >;
}

@@doc(Alert.name, "Alert ID");
@@doc(Alert.properties, "Alert properties.");
@@path(Alert.name, #{ allowReserved: true });
```

The config would be like:

```yaml
withRawContent: true
```

## Operations

```ts operations
import { CostManagementContext as Client } from "./index.js";
import { AlertsResult, AlertErrorResponse } from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { ListOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSend(
  context: Client,
  apiVersion: string,
  scope: string,
  options: ListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.CostManagement/alerts{?api%2Dversion}",
    { scope: scope, "api%2Dversion": apiVersion },
    { allowReserved: options?.requestOptions?.skipUrlEncoding },
  );
  return context.path(path).get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<AlertsResult | AlertErrorResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Lists the alerts for scope defined. */
export function list(
  context: Client,
  apiVersion: string,
  scope: string,
  options: ListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<void> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, apiVersion, scope, options),
    _listDeserialize,
    ["200"],
  );
}
```
