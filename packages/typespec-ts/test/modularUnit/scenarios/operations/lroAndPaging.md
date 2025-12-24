# only: Should generate lro and paging operation

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;

@armProviderNamespace
@service
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
namespace Microsoft.Web;

enum Versions {
    v2023_12_01: "2023-12-01",
}

@doc("A web app")
model Site is TrackedResource<SiteProperties> {
    @doc("Name of the app.")
    @key("name")
    @path
    @segment("sites")
    name: string;
}

@doc("Site properties")
model SiteProperties {
    @doc("Current state of the app.")
    state?: string;
}

@doc("Collection of App Service apps - Page type")
model WebAppCollection is Page<Site>;

@armResourceOperations
interface Sites {
    @action("suspend")
    @list
    suspend is Azure.ResourceManager.ArmResourceActionAsyncBase<
        Site,
        Request = void,
        Response = ArmResponse<WebAppCollection> &
            ArmLroLocationHeader<FinalResult = WebAppCollection>,
        BaseParameters = Azure.ResourceManager.Foundations.DefaultBaseParameters<Site>
    >;
}

```

```yaml
withRawContent: true
```

## Operations

```ts operations
import { WebContext as Client } from "./index.js";
import {
  _WebAppCollection,
  _webAppCollectionDeserializer,
  Site,
  errorResponseDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { SuspendOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _suspendSend(
  context: Client,
  resourceGroupName: string,
  name: string,
  options: SuspendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/suspend{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      name: name,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _suspendDeserialize(
  result: PathUncheckedResponse,
): Promise<_WebAppCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _webAppCollectionDeserializer(result.body);
}

/** A long-running resource action. */
export async function suspend(
  context: Client,
  resourceGroupName: string,
  name: string,
  options: SuspendOptionalParams = { requestOptions: {} },
): Promise<Site[]> {
  const result = await _suspendSend(context, resourceGroupName, name, options);
  return _suspendDeserialize(result);
}
```