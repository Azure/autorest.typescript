# only: ARM PATCH operation with union response type

## TypeSpec

```tsp
import "@typespec/rest";
import "@typespec/http";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Rest;
using TypeSpec.Http;
using Azure.Core;
using Azure.ResourceManager;

@armProviderNamespace
@service(#{
  title: "Test ARM Patch Service"
})
namespace Microsoft.TestArmPatch;

model PartnerTopicProperties {
  provisioningState?: string;
  activationState?: string;
}

@doc("Event Grid Partner Topic.")
model PartnerTopic is TrackedResource<PartnerTopicProperties> {
  @key("partnerTopicName")
  @segment("partnerTopics")
  @path
  name: string;
}

@doc("Properties of the Partner Topic update.")
model PartnerTopicUpdateParameters {
  @doc("Tags of the Partner Topic resource.")
  tags?: Record<string>;

  @doc("Identity information for the resource.")
  identity?: {
    type?: string;
    principalId?: string;
  };
}

@armResourceOperations
interface PartnerTopics {
  @patch
  update is ArmCustomPatchSync<
    PartnerTopic,
    PatchModel = PartnerTopicUpdateParameters,
    Response = OkResponse | ArmResourceCreatedSyncResponse<PartnerTopic>
  >;
}
```

```yaml
withRawContent: true
```

## operations

```ts operations
import { TestArmPatchContext as Client } from "./index.js";
import {
  PartnerTopic,
  partnerTopicDeserializer,
  errorResponseDeserializer,
  PartnerTopicUpdateParameters,
  partnerTopicUpdateParametersSerializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { UpdateOptionalParams, GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _updateSend(
  context: Client,
  apiVersion: string,
  resourceGroupName: string,
  partnerTopicName: string,
  properties: PartnerTopicUpdateParameters,
  options: UpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TestArmPatch/partnerTopics/{partnerTopicName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      partnerTopicName: partnerTopicName,
      "api%2Dversion": apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: partnerTopicUpdateParametersSerializer(properties),
    });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Asynchronously updates a partner topic with the specified parameters. */
export async function update(
  context: Client,
  apiVersion: string,
  resourceGroupName: string,
  partnerTopicName: string,
  properties: PartnerTopicUpdateParameters,
  options: UpdateOptionalParams = { requestOptions: {} },
): Promise<PartnerTopic> {
  const result = await _updateSend(
    context,
    apiVersion,
    resourceGroupName,
    partnerTopicName,
    properties,
    options,
  );
  return _updateDeserialize(result);
}

export function _getSend(
  context: Client,
  apiVersion: string,
  resourceGroupName: string,
  partnerTopicName: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TestArmPatch/partnerTopics/{partnerTopicName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      partnerTopicName: partnerTopicName,
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<PartnerTopic> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return partnerTopicDeserializer(result.body);
}

/** Get properties of a partner topic. */
export async function get(
  context: Client,
  apiVersion: string,
  resourceGroupName: string,
  partnerTopicName: string,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<PartnerTopic> {
  const result = await _getSend(context, apiVersion, resourceGroupName, partnerTopicName, options);
  return _getDeserialize(result);
}
```
