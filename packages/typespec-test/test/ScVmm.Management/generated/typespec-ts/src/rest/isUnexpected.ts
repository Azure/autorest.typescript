// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  VmmServersGet200Response,
  VmmServersGetDefaultResponse,
  VmmServersCreateOrUpdate200Response,
  VmmServersCreateOrUpdate201Response,
  VmmServersCreateOrUpdateLogicalResponse,
  VmmServersCreateOrUpdateDefaultResponse,
  VmmServersUpdate200Response,
  VmmServersUpdate202Response,
  VmmServersUpdateLogicalResponse,
  VmmServersUpdateDefaultResponse,
  VmmServersDelete202Response,
  VmmServersDelete204Response,
  VmmServersDeleteLogicalResponse,
  VmmServersDeleteDefaultResponse,
  VmmServersListByResourceGroup200Response,
  VmmServersListByResourceGroupDefaultResponse,
  VmmServersListBySubscription200Response,
  VmmServersListBySubscriptionDefaultResponse,
  CloudsGet200Response,
  CloudsGetDefaultResponse,
  CloudsCreateOrUpdate200Response,
  CloudsCreateOrUpdate201Response,
  CloudsCreateOrUpdateLogicalResponse,
  CloudsCreateOrUpdateDefaultResponse,
  CloudsUpdate200Response,
  CloudsUpdate202Response,
  CloudsUpdateLogicalResponse,
  CloudsUpdateDefaultResponse,
  CloudsDelete202Response,
  CloudsDelete204Response,
  CloudsDeleteLogicalResponse,
  CloudsDeleteDefaultResponse,
  CloudsListByResourceGroup200Response,
  CloudsListByResourceGroupDefaultResponse,
  CloudsListBySubscription200Response,
  CloudsListBySubscriptionDefaultResponse,
  VirtualNetworksGet200Response,
  VirtualNetworksGetDefaultResponse,
  VirtualNetworksCreateOrUpdate200Response,
  VirtualNetworksCreateOrUpdate201Response,
  VirtualNetworksCreateOrUpdateLogicalResponse,
  VirtualNetworksCreateOrUpdateDefaultResponse,
  VirtualNetworksUpdate200Response,
  VirtualNetworksUpdate202Response,
  VirtualNetworksUpdateLogicalResponse,
  VirtualNetworksUpdateDefaultResponse,
  VirtualNetworksDelete202Response,
  VirtualNetworksDelete204Response,
  VirtualNetworksDeleteLogicalResponse,
  VirtualNetworksDeleteDefaultResponse,
  VirtualNetworksListByResourceGroup200Response,
  VirtualNetworksListByResourceGroupDefaultResponse,
  VirtualNetworksListBySubscription200Response,
  VirtualNetworksListBySubscriptionDefaultResponse,
  VirtualMachineTemplatesGet200Response,
  VirtualMachineTemplatesGetDefaultResponse,
  VirtualMachineTemplatesCreateOrUpdate200Response,
  VirtualMachineTemplatesCreateOrUpdate201Response,
  VirtualMachineTemplatesCreateOrUpdateLogicalResponse,
  VirtualMachineTemplatesCreateOrUpdateDefaultResponse,
  VirtualMachineTemplatesUpdate200Response,
  VirtualMachineTemplatesUpdate202Response,
  VirtualMachineTemplatesUpdateLogicalResponse,
  VirtualMachineTemplatesUpdateDefaultResponse,
  VirtualMachineTemplatesDelete202Response,
  VirtualMachineTemplatesDelete204Response,
  VirtualMachineTemplatesDeleteLogicalResponse,
  VirtualMachineTemplatesDeleteDefaultResponse,
  VirtualMachineTemplatesListByResourceGroup200Response,
  VirtualMachineTemplatesListByResourceGroupDefaultResponse,
  VirtualMachineTemplatesListBySubscription200Response,
  VirtualMachineTemplatesListBySubscriptionDefaultResponse,
  AvailabilitySetsGet200Response,
  AvailabilitySetsGetDefaultResponse,
  AvailabilitySetsCreateOrUpdate200Response,
  AvailabilitySetsCreateOrUpdate201Response,
  AvailabilitySetsCreateOrUpdateLogicalResponse,
  AvailabilitySetsCreateOrUpdateDefaultResponse,
  AvailabilitySetsUpdate200Response,
  AvailabilitySetsUpdate202Response,
  AvailabilitySetsUpdateLogicalResponse,
  AvailabilitySetsUpdateDefaultResponse,
  AvailabilitySetsDelete202Response,
  AvailabilitySetsDelete204Response,
  AvailabilitySetsDeleteLogicalResponse,
  AvailabilitySetsDeleteDefaultResponse,
  AvailabilitySetsListByResourceGroup200Response,
  AvailabilitySetsListByResourceGroupDefaultResponse,
  AvailabilitySetsListBySubscription200Response,
  AvailabilitySetsListBySubscriptionDefaultResponse,
  InventoryItemsGet200Response,
  InventoryItemsGetDefaultResponse,
  InventoryItemsCreate200Response,
  InventoryItemsCreate201Response,
  InventoryItemsCreateDefaultResponse,
  InventoryItemsDelete200Response,
  InventoryItemsDelete204Response,
  InventoryItemsDeleteDefaultResponse,
  InventoryItemsListByVmmServer200Response,
  InventoryItemsListByVmmServerDefaultResponse,
  VirtualMachineInstancesGet200Response,
  VirtualMachineInstancesGetDefaultResponse,
  VirtualMachineInstancesCreateOrUpdate200Response,
  VirtualMachineInstancesCreateOrUpdate201Response,
  VirtualMachineInstancesCreateOrUpdateLogicalResponse,
  VirtualMachineInstancesCreateOrUpdateDefaultResponse,
  VirtualMachineInstancesUpdate200Response,
  VirtualMachineInstancesUpdate202Response,
  VirtualMachineInstancesUpdateLogicalResponse,
  VirtualMachineInstancesUpdateDefaultResponse,
  VirtualMachineInstancesDelete202Response,
  VirtualMachineInstancesDelete204Response,
  VirtualMachineInstancesDeleteLogicalResponse,
  VirtualMachineInstancesDeleteDefaultResponse,
  VirtualMachineInstancesList200Response,
  VirtualMachineInstancesListDefaultResponse,
  VirtualMachineInstancesStop202Response,
  VirtualMachineInstancesStopLogicalResponse,
  VirtualMachineInstancesStopDefaultResponse,
  VirtualMachineInstancesStart202Response,
  VirtualMachineInstancesStartLogicalResponse,
  VirtualMachineInstancesStartDefaultResponse,
  VirtualMachineInstancesRestart202Response,
  VirtualMachineInstancesRestartLogicalResponse,
  VirtualMachineInstancesRestartDefaultResponse,
  VirtualMachineInstancesCreateCheckpoint202Response,
  VirtualMachineInstancesCreateCheckpointLogicalResponse,
  VirtualMachineInstancesCreateCheckpointDefaultResponse,
  VirtualMachineInstancesDeleteCheckpoint202Response,
  VirtualMachineInstancesDeleteCheckpointLogicalResponse,
  VirtualMachineInstancesDeleteCheckpointDefaultResponse,
  VirtualMachineInstancesRestoreCheckpoint202Response,
  VirtualMachineInstancesRestoreCheckpointLogicalResponse,
  VirtualMachineInstancesRestoreCheckpointDefaultResponse,
  VmInstanceHybridIdentityMetadatasGet200Response,
  VmInstanceHybridIdentityMetadatasGetDefaultResponse,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance200Response,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse,
  GuestAgentsGet200Response,
  GuestAgentsGetDefaultResponse,
  GuestAgentsCreate200Response,
  GuestAgentsCreate201Response,
  GuestAgentsCreateLogicalResponse,
  GuestAgentsCreateDefaultResponse,
  GuestAgentsDelete200Response,
  GuestAgentsDelete204Response,
  GuestAgentsDeleteDefaultResponse,
  GuestAgentsListByVirtualMachineInstance200Response,
  GuestAgentsListByVirtualMachineInstanceDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /providers/Microsoft.ScVmm/operations": ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/vmmServers": [
    "200",
  ],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/clouds": [
    "200",
  ],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualNetworks":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualMachineTemplates":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/availabilitySets":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}":
    ["200", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems":
    ["200"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    ["200"],
  "PUT /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    ["200", "201"],
  "PATCH /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    ["200", "202"],
  "DELETE /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    ["202", "204"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances": [
    "200",
  ],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop":
    ["200", "202"],
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop":
    ["202"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start":
    ["200", "202"],
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start":
    ["202"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart":
    ["200", "202"],
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart":
    ["202"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint":
    ["200", "202"],
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint":
    ["202"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint":
    ["200", "202"],
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint":
    ["202"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint":
    ["200", "202"],
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint":
    ["202"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata/default":
    ["200"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata":
    ["200"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default":
    ["200"],
  "PUT /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default":
    ["200", "201"],
  "DELETE /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default":
    ["200", "204"],
  "GET /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents":
    ["200"],
};

export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response: VmmServersGet200Response | VmmServersGetDefaultResponse,
): response is VmmServersGetDefaultResponse;
export function isUnexpected(
  response:
    | VmmServersCreateOrUpdate200Response
    | VmmServersCreateOrUpdate201Response
    | VmmServersCreateOrUpdateLogicalResponse
    | VmmServersCreateOrUpdateDefaultResponse,
): response is VmmServersCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | VmmServersUpdate200Response
    | VmmServersUpdate202Response
    | VmmServersUpdateLogicalResponse
    | VmmServersUpdateDefaultResponse,
): response is VmmServersUpdateDefaultResponse;
export function isUnexpected(
  response:
    | VmmServersDelete202Response
    | VmmServersDelete204Response
    | VmmServersDeleteLogicalResponse
    | VmmServersDeleteDefaultResponse,
): response is VmmServersDeleteDefaultResponse;
export function isUnexpected(
  response:
    | VmmServersListByResourceGroup200Response
    | VmmServersListByResourceGroupDefaultResponse,
): response is VmmServersListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | VmmServersListBySubscription200Response
    | VmmServersListBySubscriptionDefaultResponse,
): response is VmmServersListBySubscriptionDefaultResponse;
export function isUnexpected(
  response: CloudsGet200Response | CloudsGetDefaultResponse,
): response is CloudsGetDefaultResponse;
export function isUnexpected(
  response:
    | CloudsCreateOrUpdate200Response
    | CloudsCreateOrUpdate201Response
    | CloudsCreateOrUpdateLogicalResponse
    | CloudsCreateOrUpdateDefaultResponse,
): response is CloudsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | CloudsUpdate200Response
    | CloudsUpdate202Response
    | CloudsUpdateLogicalResponse
    | CloudsUpdateDefaultResponse,
): response is CloudsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | CloudsDelete202Response
    | CloudsDelete204Response
    | CloudsDeleteLogicalResponse
    | CloudsDeleteDefaultResponse,
): response is CloudsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | CloudsListByResourceGroup200Response
    | CloudsListByResourceGroupDefaultResponse,
): response is CloudsListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | CloudsListBySubscription200Response
    | CloudsListBySubscriptionDefaultResponse,
): response is CloudsListBySubscriptionDefaultResponse;
export function isUnexpected(
  response: VirtualNetworksGet200Response | VirtualNetworksGetDefaultResponse,
): response is VirtualNetworksGetDefaultResponse;
export function isUnexpected(
  response:
    | VirtualNetworksCreateOrUpdate200Response
    | VirtualNetworksCreateOrUpdate201Response
    | VirtualNetworksCreateOrUpdateLogicalResponse
    | VirtualNetworksCreateOrUpdateDefaultResponse,
): response is VirtualNetworksCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | VirtualNetworksUpdate200Response
    | VirtualNetworksUpdate202Response
    | VirtualNetworksUpdateLogicalResponse
    | VirtualNetworksUpdateDefaultResponse,
): response is VirtualNetworksUpdateDefaultResponse;
export function isUnexpected(
  response:
    | VirtualNetworksDelete202Response
    | VirtualNetworksDelete204Response
    | VirtualNetworksDeleteLogicalResponse
    | VirtualNetworksDeleteDefaultResponse,
): response is VirtualNetworksDeleteDefaultResponse;
export function isUnexpected(
  response:
    | VirtualNetworksListByResourceGroup200Response
    | VirtualNetworksListByResourceGroupDefaultResponse,
): response is VirtualNetworksListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | VirtualNetworksListBySubscription200Response
    | VirtualNetworksListBySubscriptionDefaultResponse,
): response is VirtualNetworksListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineTemplatesGet200Response
    | VirtualMachineTemplatesGetDefaultResponse,
): response is VirtualMachineTemplatesGetDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineTemplatesCreateOrUpdate200Response
    | VirtualMachineTemplatesCreateOrUpdate201Response
    | VirtualMachineTemplatesCreateOrUpdateLogicalResponse
    | VirtualMachineTemplatesCreateOrUpdateDefaultResponse,
): response is VirtualMachineTemplatesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineTemplatesUpdate200Response
    | VirtualMachineTemplatesUpdate202Response
    | VirtualMachineTemplatesUpdateLogicalResponse
    | VirtualMachineTemplatesUpdateDefaultResponse,
): response is VirtualMachineTemplatesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineTemplatesDelete202Response
    | VirtualMachineTemplatesDelete204Response
    | VirtualMachineTemplatesDeleteLogicalResponse
    | VirtualMachineTemplatesDeleteDefaultResponse,
): response is VirtualMachineTemplatesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineTemplatesListByResourceGroup200Response
    | VirtualMachineTemplatesListByResourceGroupDefaultResponse,
): response is VirtualMachineTemplatesListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineTemplatesListBySubscription200Response
    | VirtualMachineTemplatesListBySubscriptionDefaultResponse,
): response is VirtualMachineTemplatesListBySubscriptionDefaultResponse;
export function isUnexpected(
  response: AvailabilitySetsGet200Response | AvailabilitySetsGetDefaultResponse,
): response is AvailabilitySetsGetDefaultResponse;
export function isUnexpected(
  response:
    | AvailabilitySetsCreateOrUpdate200Response
    | AvailabilitySetsCreateOrUpdate201Response
    | AvailabilitySetsCreateOrUpdateLogicalResponse
    | AvailabilitySetsCreateOrUpdateDefaultResponse,
): response is AvailabilitySetsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AvailabilitySetsUpdate200Response
    | AvailabilitySetsUpdate202Response
    | AvailabilitySetsUpdateLogicalResponse
    | AvailabilitySetsUpdateDefaultResponse,
): response is AvailabilitySetsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AvailabilitySetsDelete202Response
    | AvailabilitySetsDelete204Response
    | AvailabilitySetsDeleteLogicalResponse
    | AvailabilitySetsDeleteDefaultResponse,
): response is AvailabilitySetsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | AvailabilitySetsListByResourceGroup200Response
    | AvailabilitySetsListByResourceGroupDefaultResponse,
): response is AvailabilitySetsListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | AvailabilitySetsListBySubscription200Response
    | AvailabilitySetsListBySubscriptionDefaultResponse,
): response is AvailabilitySetsListBySubscriptionDefaultResponse;
export function isUnexpected(
  response: InventoryItemsGet200Response | InventoryItemsGetDefaultResponse,
): response is InventoryItemsGetDefaultResponse;
export function isUnexpected(
  response:
    | InventoryItemsCreate200Response
    | InventoryItemsCreate201Response
    | InventoryItemsCreateDefaultResponse,
): response is InventoryItemsCreateDefaultResponse;
export function isUnexpected(
  response:
    | InventoryItemsDelete200Response
    | InventoryItemsDelete204Response
    | InventoryItemsDeleteDefaultResponse,
): response is InventoryItemsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | InventoryItemsListByVmmServer200Response
    | InventoryItemsListByVmmServerDefaultResponse,
): response is InventoryItemsListByVmmServerDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesGet200Response
    | VirtualMachineInstancesGetDefaultResponse,
): response is VirtualMachineInstancesGetDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesCreateOrUpdate200Response
    | VirtualMachineInstancesCreateOrUpdate201Response
    | VirtualMachineInstancesCreateOrUpdateLogicalResponse
    | VirtualMachineInstancesCreateOrUpdateDefaultResponse,
): response is VirtualMachineInstancesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesUpdate200Response
    | VirtualMachineInstancesUpdate202Response
    | VirtualMachineInstancesUpdateLogicalResponse
    | VirtualMachineInstancesUpdateDefaultResponse,
): response is VirtualMachineInstancesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesDelete202Response
    | VirtualMachineInstancesDelete204Response
    | VirtualMachineInstancesDeleteLogicalResponse
    | VirtualMachineInstancesDeleteDefaultResponse,
): response is VirtualMachineInstancesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesList200Response
    | VirtualMachineInstancesListDefaultResponse,
): response is VirtualMachineInstancesListDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesStop202Response
    | VirtualMachineInstancesStopLogicalResponse
    | VirtualMachineInstancesStopDefaultResponse,
): response is VirtualMachineInstancesStopDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesStart202Response
    | VirtualMachineInstancesStartLogicalResponse
    | VirtualMachineInstancesStartDefaultResponse,
): response is VirtualMachineInstancesStartDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesRestart202Response
    | VirtualMachineInstancesRestartLogicalResponse
    | VirtualMachineInstancesRestartDefaultResponse,
): response is VirtualMachineInstancesRestartDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesCreateCheckpoint202Response
    | VirtualMachineInstancesCreateCheckpointLogicalResponse
    | VirtualMachineInstancesCreateCheckpointDefaultResponse,
): response is VirtualMachineInstancesCreateCheckpointDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesDeleteCheckpoint202Response
    | VirtualMachineInstancesDeleteCheckpointLogicalResponse
    | VirtualMachineInstancesDeleteCheckpointDefaultResponse,
): response is VirtualMachineInstancesDeleteCheckpointDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachineInstancesRestoreCheckpoint202Response
    | VirtualMachineInstancesRestoreCheckpointLogicalResponse
    | VirtualMachineInstancesRestoreCheckpointDefaultResponse,
): response is VirtualMachineInstancesRestoreCheckpointDefaultResponse;
export function isUnexpected(
  response:
    | VmInstanceHybridIdentityMetadatasGet200Response
    | VmInstanceHybridIdentityMetadatasGetDefaultResponse,
): response is VmInstanceHybridIdentityMetadatasGetDefaultResponse;
export function isUnexpected(
  response:
    | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance200Response
    | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse,
): response is VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse;
export function isUnexpected(
  response: GuestAgentsGet200Response | GuestAgentsGetDefaultResponse,
): response is GuestAgentsGetDefaultResponse;
export function isUnexpected(
  response:
    | GuestAgentsCreate200Response
    | GuestAgentsCreate201Response
    | GuestAgentsCreateLogicalResponse
    | GuestAgentsCreateDefaultResponse,
): response is GuestAgentsCreateDefaultResponse;
export function isUnexpected(
  response:
    | GuestAgentsDelete200Response
    | GuestAgentsDelete204Response
    | GuestAgentsDeleteDefaultResponse,
): response is GuestAgentsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | GuestAgentsListByVirtualMachineInstance200Response
    | GuestAgentsListByVirtualMachineInstanceDefaultResponse,
): response is GuestAgentsListByVirtualMachineInstanceDefaultResponse;
export function isUnexpected(
  response:
    | OperationsList200Response
    | OperationsListDefaultResponse
    | VmmServersGet200Response
    | VmmServersGetDefaultResponse
    | VmmServersCreateOrUpdate200Response
    | VmmServersCreateOrUpdate201Response
    | VmmServersCreateOrUpdateLogicalResponse
    | VmmServersCreateOrUpdateDefaultResponse
    | VmmServersUpdate200Response
    | VmmServersUpdate202Response
    | VmmServersUpdateLogicalResponse
    | VmmServersUpdateDefaultResponse
    | VmmServersDelete202Response
    | VmmServersDelete204Response
    | VmmServersDeleteLogicalResponse
    | VmmServersDeleteDefaultResponse
    | VmmServersListByResourceGroup200Response
    | VmmServersListByResourceGroupDefaultResponse
    | VmmServersListBySubscription200Response
    | VmmServersListBySubscriptionDefaultResponse
    | CloudsGet200Response
    | CloudsGetDefaultResponse
    | CloudsCreateOrUpdate200Response
    | CloudsCreateOrUpdate201Response
    | CloudsCreateOrUpdateLogicalResponse
    | CloudsCreateOrUpdateDefaultResponse
    | CloudsUpdate200Response
    | CloudsUpdate202Response
    | CloudsUpdateLogicalResponse
    | CloudsUpdateDefaultResponse
    | CloudsDelete202Response
    | CloudsDelete204Response
    | CloudsDeleteLogicalResponse
    | CloudsDeleteDefaultResponse
    | CloudsListByResourceGroup200Response
    | CloudsListByResourceGroupDefaultResponse
    | CloudsListBySubscription200Response
    | CloudsListBySubscriptionDefaultResponse
    | VirtualNetworksGet200Response
    | VirtualNetworksGetDefaultResponse
    | VirtualNetworksCreateOrUpdate200Response
    | VirtualNetworksCreateOrUpdate201Response
    | VirtualNetworksCreateOrUpdateLogicalResponse
    | VirtualNetworksCreateOrUpdateDefaultResponse
    | VirtualNetworksUpdate200Response
    | VirtualNetworksUpdate202Response
    | VirtualNetworksUpdateLogicalResponse
    | VirtualNetworksUpdateDefaultResponse
    | VirtualNetworksDelete202Response
    | VirtualNetworksDelete204Response
    | VirtualNetworksDeleteLogicalResponse
    | VirtualNetworksDeleteDefaultResponse
    | VirtualNetworksListByResourceGroup200Response
    | VirtualNetworksListByResourceGroupDefaultResponse
    | VirtualNetworksListBySubscription200Response
    | VirtualNetworksListBySubscriptionDefaultResponse
    | VirtualMachineTemplatesGet200Response
    | VirtualMachineTemplatesGetDefaultResponse
    | VirtualMachineTemplatesCreateOrUpdate200Response
    | VirtualMachineTemplatesCreateOrUpdate201Response
    | VirtualMachineTemplatesCreateOrUpdateLogicalResponse
    | VirtualMachineTemplatesCreateOrUpdateDefaultResponse
    | VirtualMachineTemplatesUpdate200Response
    | VirtualMachineTemplatesUpdate202Response
    | VirtualMachineTemplatesUpdateLogicalResponse
    | VirtualMachineTemplatesUpdateDefaultResponse
    | VirtualMachineTemplatesDelete202Response
    | VirtualMachineTemplatesDelete204Response
    | VirtualMachineTemplatesDeleteLogicalResponse
    | VirtualMachineTemplatesDeleteDefaultResponse
    | VirtualMachineTemplatesListByResourceGroup200Response
    | VirtualMachineTemplatesListByResourceGroupDefaultResponse
    | VirtualMachineTemplatesListBySubscription200Response
    | VirtualMachineTemplatesListBySubscriptionDefaultResponse
    | AvailabilitySetsGet200Response
    | AvailabilitySetsGetDefaultResponse
    | AvailabilitySetsCreateOrUpdate200Response
    | AvailabilitySetsCreateOrUpdate201Response
    | AvailabilitySetsCreateOrUpdateLogicalResponse
    | AvailabilitySetsCreateOrUpdateDefaultResponse
    | AvailabilitySetsUpdate200Response
    | AvailabilitySetsUpdate202Response
    | AvailabilitySetsUpdateLogicalResponse
    | AvailabilitySetsUpdateDefaultResponse
    | AvailabilitySetsDelete202Response
    | AvailabilitySetsDelete204Response
    | AvailabilitySetsDeleteLogicalResponse
    | AvailabilitySetsDeleteDefaultResponse
    | AvailabilitySetsListByResourceGroup200Response
    | AvailabilitySetsListByResourceGroupDefaultResponse
    | AvailabilitySetsListBySubscription200Response
    | AvailabilitySetsListBySubscriptionDefaultResponse
    | InventoryItemsGet200Response
    | InventoryItemsGetDefaultResponse
    | InventoryItemsCreate200Response
    | InventoryItemsCreate201Response
    | InventoryItemsCreateDefaultResponse
    | InventoryItemsDelete200Response
    | InventoryItemsDelete204Response
    | InventoryItemsDeleteDefaultResponse
    | InventoryItemsListByVmmServer200Response
    | InventoryItemsListByVmmServerDefaultResponse
    | VirtualMachineInstancesGet200Response
    | VirtualMachineInstancesGetDefaultResponse
    | VirtualMachineInstancesCreateOrUpdate200Response
    | VirtualMachineInstancesCreateOrUpdate201Response
    | VirtualMachineInstancesCreateOrUpdateLogicalResponse
    | VirtualMachineInstancesCreateOrUpdateDefaultResponse
    | VirtualMachineInstancesUpdate200Response
    | VirtualMachineInstancesUpdate202Response
    | VirtualMachineInstancesUpdateLogicalResponse
    | VirtualMachineInstancesUpdateDefaultResponse
    | VirtualMachineInstancesDelete202Response
    | VirtualMachineInstancesDelete204Response
    | VirtualMachineInstancesDeleteLogicalResponse
    | VirtualMachineInstancesDeleteDefaultResponse
    | VirtualMachineInstancesList200Response
    | VirtualMachineInstancesListDefaultResponse
    | VirtualMachineInstancesStop202Response
    | VirtualMachineInstancesStopLogicalResponse
    | VirtualMachineInstancesStopDefaultResponse
    | VirtualMachineInstancesStart202Response
    | VirtualMachineInstancesStartLogicalResponse
    | VirtualMachineInstancesStartDefaultResponse
    | VirtualMachineInstancesRestart202Response
    | VirtualMachineInstancesRestartLogicalResponse
    | VirtualMachineInstancesRestartDefaultResponse
    | VirtualMachineInstancesCreateCheckpoint202Response
    | VirtualMachineInstancesCreateCheckpointLogicalResponse
    | VirtualMachineInstancesCreateCheckpointDefaultResponse
    | VirtualMachineInstancesDeleteCheckpoint202Response
    | VirtualMachineInstancesDeleteCheckpointLogicalResponse
    | VirtualMachineInstancesDeleteCheckpointDefaultResponse
    | VirtualMachineInstancesRestoreCheckpoint202Response
    | VirtualMachineInstancesRestoreCheckpointLogicalResponse
    | VirtualMachineInstancesRestoreCheckpointDefaultResponse
    | VmInstanceHybridIdentityMetadatasGet200Response
    | VmInstanceHybridIdentityMetadatasGetDefaultResponse
    | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance200Response
    | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse
    | GuestAgentsGet200Response
    | GuestAgentsGetDefaultResponse
    | GuestAgentsCreate200Response
    | GuestAgentsCreate201Response
    | GuestAgentsCreateLogicalResponse
    | GuestAgentsCreateDefaultResponse
    | GuestAgentsDelete200Response
    | GuestAgentsDelete204Response
    | GuestAgentsDeleteDefaultResponse
    | GuestAgentsListByVirtualMachineInstance200Response
    | GuestAgentsListByVirtualMachineInstanceDefaultResponse,
): response is
  | OperationsListDefaultResponse
  | VmmServersGetDefaultResponse
  | VmmServersCreateOrUpdateDefaultResponse
  | VmmServersUpdateDefaultResponse
  | VmmServersDeleteDefaultResponse
  | VmmServersListByResourceGroupDefaultResponse
  | VmmServersListBySubscriptionDefaultResponse
  | CloudsGetDefaultResponse
  | CloudsCreateOrUpdateDefaultResponse
  | CloudsUpdateDefaultResponse
  | CloudsDeleteDefaultResponse
  | CloudsListByResourceGroupDefaultResponse
  | CloudsListBySubscriptionDefaultResponse
  | VirtualNetworksGetDefaultResponse
  | VirtualNetworksCreateOrUpdateDefaultResponse
  | VirtualNetworksUpdateDefaultResponse
  | VirtualNetworksDeleteDefaultResponse
  | VirtualNetworksListByResourceGroupDefaultResponse
  | VirtualNetworksListBySubscriptionDefaultResponse
  | VirtualMachineTemplatesGetDefaultResponse
  | VirtualMachineTemplatesCreateOrUpdateDefaultResponse
  | VirtualMachineTemplatesUpdateDefaultResponse
  | VirtualMachineTemplatesDeleteDefaultResponse
  | VirtualMachineTemplatesListByResourceGroupDefaultResponse
  | VirtualMachineTemplatesListBySubscriptionDefaultResponse
  | AvailabilitySetsGetDefaultResponse
  | AvailabilitySetsCreateOrUpdateDefaultResponse
  | AvailabilitySetsUpdateDefaultResponse
  | AvailabilitySetsDeleteDefaultResponse
  | AvailabilitySetsListByResourceGroupDefaultResponse
  | AvailabilitySetsListBySubscriptionDefaultResponse
  | InventoryItemsGetDefaultResponse
  | InventoryItemsCreateDefaultResponse
  | InventoryItemsDeleteDefaultResponse
  | InventoryItemsListByVmmServerDefaultResponse
  | VirtualMachineInstancesGetDefaultResponse
  | VirtualMachineInstancesCreateOrUpdateDefaultResponse
  | VirtualMachineInstancesUpdateDefaultResponse
  | VirtualMachineInstancesDeleteDefaultResponse
  | VirtualMachineInstancesListDefaultResponse
  | VirtualMachineInstancesStopDefaultResponse
  | VirtualMachineInstancesStartDefaultResponse
  | VirtualMachineInstancesRestartDefaultResponse
  | VirtualMachineInstancesCreateCheckpointDefaultResponse
  | VirtualMachineInstancesDeleteCheckpointDefaultResponse
  | VirtualMachineInstancesRestoreCheckpointDefaultResponse
  | VmInstanceHybridIdentityMetadatasGetDefaultResponse
  | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse
  | GuestAgentsGetDefaultResponse
  | GuestAgentsCreateDefaultResponse
  | GuestAgentsDeleteDefaultResponse
  | GuestAgentsListByVirtualMachineInstanceDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
