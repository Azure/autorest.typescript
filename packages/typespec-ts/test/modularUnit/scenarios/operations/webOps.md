# Should generate getWebSiteContainerLogs with binary octet-stream response and NoContent fallback

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "@azure-tools/typespec-client-generator-core";

using Azure.ClientGenerator.Core;
using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.ResourceManager;
using Azure.ResourceManager.Private;

@armProviderNamespace
@service
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
namespace Microsoft.Web;

enum Versions {
  v2024_10_23: "2024-10-23",
}

model SiteProperties {
  state?: string;
}

model Site is TrackedResource<SiteProperties> {
  ...ResourceNameParameter<
    Resource = Site,
    KeyName = "name",
    SegmentName = "sites"
  >;
}

model DefaultErrorResponse is ErrorResponse {}

@armResourceOperations
interface SiteOps
  extends Azure.ResourceManager.Legacy.LegacyOperations<
      {
        ...ApiVersionParameter,
        ...SubscriptionIdParameter,
        ...ResourceGroupParameter,
        ...Azure.ResourceManager.Legacy.Provider,
      },
      {
        /** Name of the app. */
        @path
        @segment("sites")
        @key
        name: string,
      }
    > {}

@armResourceOperations
interface Sites {
  /**
   * Description for Gets the last lines of docker logs for the given site
   */
  #suppress "@azure-tools/typespec-azure-resource-manager/arm-post-operation-response-codes" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @summary("Gets the last lines of docker logs for the given site")
  @action("containerlogs")
  getWebSiteContainerLogs is SiteOps.ActionSync<
    Site,
    void,
    {
      @header("Content-Type")
      contentType: "application/octet-stream";

      @doc("Receipt body in COSE format")
      @bodyRoot
      body: bytes;
    } | NoContentResponse,
    OverrideErrorType = DefaultErrorResponse
  >;
}

@armResourceOperations(#{ allowStaticRoutes: true })
interface WebApps {}

@@clientLocation(Sites.getWebSiteContainerLogs, WebApps);
```

```yaml
withRawContent: true
wrap-non-model-return: true
```

## operations

```ts operations
import { WebContext as Client } from "./index.js";
import {
  defaultErrorResponseDeserializer,
  GetWebSiteContainerLogsResponse,
} from "../models/models.js";
import { getBinaryResponseBody } from "../static-helpers/serialization/get-binary-response-body.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetWebSiteContainerLogsOptionalParams } from "./options.js";
import { StreamableMethod, operationOptionsToRequestParameters } from "@azure-rest/core-client";

export function _getWebSiteContainerLogsSend(
  context: Client,
  resourceGroupName: string,
  name: string,
  options: GetWebSiteContainerLogsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/containerlogs{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      name: name,
      "api%2Dversion": context.apiVersion ?? "2024-10-23",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/octet-stream", ...options.requestOptions?.headers },
    });
}

export async function _getWebSiteContainerLogsDeserialize(
  result: StreamableMethod,
): Promise<GetWebSiteContainerLogsResponse> {
  return getBinaryResponseBody(result, ["200", "204"], defaultErrorResponseDeserializer);
}

/** Description for Gets the last lines of docker logs for the given site */
export async function getWebSiteContainerLogs(
  context: Client,
  resourceGroupName: string,
  name: string,
  options: GetWebSiteContainerLogsOptionalParams = { requestOptions: {} },
): Promise<GetWebSiteContainerLogsResponse> {
  const streamableMethod = _getWebSiteContainerLogsSend(context, resourceGroupName, name, options);
  return _getWebSiteContainerLogsDeserialize(streamableMethod);
}
```
