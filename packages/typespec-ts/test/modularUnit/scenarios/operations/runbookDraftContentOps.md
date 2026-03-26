# Should generate getContent and replaceContent operations for runbook draft with text/powershell content type

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
using Azure.ResourceManager;
using Azure.ResourceManager.Private;

@armProviderNamespace
@service
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
namespace Microsoft.Automation;

enum Versions {
  v2024_10_23: "2024-10-23",
}

model RunbookProperties {
  state?: string;
}

model Runbook is TrackedResource<RunbookProperties> {
  ...ResourceNameParameter<
    Resource = Runbook,
    KeyName = "runbookName",
    SegmentName = "runbooks"
  >;
}

alias ReplaceContentRequest = {
  @header("Content-Type")
  contentType: "text/powershell";

  #suppress "@azure-tools/typespec-azure-core/known-encoding" "Temporary fix."
  @bodyRoot
  @encode("bytes")
  runbookContent: bytes;
};

alias ReplaceContentResponse = {
  @header("Content-Type")
  contentType: "text/powershell";

  #suppress "@azure-tools/typespec-azure-core/known-encoding" "Temporary fix."
  @bodyRoot
  @encode("bytes")
  body: bytes;
};

@autoRoute
@armResourceAction(Resource)
@enforceConstraint(Resource, Azure.ResourceManager.Foundations.Resource)
@post
op ArmResourceActionAsyncCustom<
  Resource extends Azure.ResourceManager.Foundations.SimpleResource,
  Request,
  Response extends TypeSpec.Reflection.Model | unknown | void,
  BaseParameters extends TypeSpec.Reflection.Model = Azure.ResourceManager.Foundations.DefaultBaseParameters<Resource>,
  Parameters extends {} = {},
  Error extends {} = ErrorResponse
>(
  ...ResourceInstanceParameters<Resource, BaseParameters>,
  ...Parameters,
  ...Request,
): Response | Error;

@armResourceOperations
interface Runbooks {
  /**
   * Retrieve the content of runbook draft identified by runbook name.
   */
  @get
  @action("draft/content")
  getContent is ArmResourceActionSync<
    Runbook,
    void,
    {
      @header("Content-Type")
      contentType: "text/powershell";

      #suppress "@azure-tools/typespec-azure-core/known-encoding" "Temporary fix."
      @bodyRoot
      @encode("bytes")
      body: bytes;
    }
  >;

  /**
   * Replaces the runbook draft content.
   */
  #suppress "@azure-tools/typespec-azure-resource-manager/arm-put-operation-response-codes" "FIXME"
  @put
  @action("draft/content")
  replaceContent is ArmResourceActionAsyncCustom<
    Runbook,
    ReplaceContentRequest,
    ReplaceContentResponse | ArmAcceptedLroResponse<LroHeaders = ArmAsyncOperationHeader<FinalResult = ReplaceContentResponse> &
      Azure.Core.Foundations.RetryAfterHeader & {
        @header("Location")
        location: string;
      }>
  >;
}
```

```yaml
withRawContent: true
```

## operations

```ts operations
import { AutomationContext as Client } from "./index.js";
import {
  errorResponseDeserializer,
  _replaceContentFinalResultDeserializer,
} from "../models/models.js";
import { getLongRunningPoller } from "../static-helpers/pollingHelpers.js";
import { getBinaryResponse } from "../static-helpers/serialization/get-binary-response.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { ReplaceContentOptionalParams, GetContentOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _replaceContentSend(
  context: Client,
  resourceGroupName: string,
  runbookName: string,
  runbookContent: Uint8Array,
  options: ReplaceContentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/runbooks/{runbookName}/draft/content{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      runbookName: runbookName,
      "api%2Dversion": context.apiVersion ?? "2024-10-23",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/powershell",
      headers: { accept: "text/powershell", ...options.requestOptions?.headers },
      body: runbookContent,
    });
}

export async function _replaceContentDeserialize(result: PathUncheckedResponse): Promise<{
  contentType: "text/powershell";
  body: Uint8Array;
}> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return _replaceContentFinalResultDeserializer(result.body);
}

/** Replaces the runbook draft content. */
export function replaceContent(
  context: Client,
  resourceGroupName: string,
  runbookName: string,
  runbookContent: Uint8Array,
  options: ReplaceContentOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<{
    contentType: "text/powershell";
    body: Uint8Array;
  }>,
  {
    contentType: "text/powershell";
    body: Uint8Array;
  }
> {
  return getLongRunningPoller(context, _replaceContentDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _replaceContentSend(context, resourceGroupName, runbookName, runbookContent, options),
    resourceLocationConfig: "azure-async-operation",
    apiVersion: context.apiVersion ?? "2024-10-23",
  }) as PollerLike<
    OperationState<{
      contentType: "text/powershell";
      body: Uint8Array;
    }>,
    {
      contentType: "text/powershell";
      body: Uint8Array;
    }
  >;
}

export function _getContentSend(
  context: Client,
  resourceGroupName: string,
  runbookName: string,
  options: GetContentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/runbooks/{runbookName}/draft/content{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      runbookName: runbookName,
      "api%2Dversion": context.apiVersion ?? "2024-10-23",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "text/powershell", ...options.requestOptions?.headers },
    });
}

export async function _getContentDeserialize(result: PathUncheckedResponse): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return result.body;
}

/** Retrieve the content of runbook draft identified by runbook name. */
export async function getContent(
  context: Client,
  resourceGroupName: string,
  runbookName: string,
  options: GetContentOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _getContentSend(context, resourceGroupName, runbookName, options);
  const result = await getBinaryResponse(streamableMethod);
  return _getContentDeserialize(result);
}
```
