// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsListParameters,
  VmmServersGetParameters,
  VmmServersCreateOrUpdateParameters,
  VmmServersUpdateParameters,
  VmmServersDeleteParameters,
  VmmServersListByResourceGroupParameters,
  VmmServersListBySubscriptionParameters,
  CloudsGetParameters,
  CloudsCreateOrUpdateParameters,
  CloudsUpdateParameters,
  CloudsDeleteParameters,
  CloudsListByResourceGroupParameters,
  CloudsListBySubscriptionParameters,
  VirtualNetworksGetParameters,
  VirtualNetworksCreateOrUpdateParameters,
  VirtualNetworksUpdateParameters,
  VirtualNetworksDeleteParameters,
  VirtualNetworksListByResourceGroupParameters,
  VirtualNetworksListBySubscriptionParameters,
  VirtualMachineTemplatesGetParameters,
  VirtualMachineTemplatesCreateOrUpdateParameters,
  VirtualMachineTemplatesUpdateParameters,
  VirtualMachineTemplatesDeleteParameters,
  VirtualMachineTemplatesListByResourceGroupParameters,
  VirtualMachineTemplatesListBySubscriptionParameters,
  AvailabilitySetsGetParameters,
  AvailabilitySetsCreateOrUpdateParameters,
  AvailabilitySetsUpdateParameters,
  AvailabilitySetsDeleteParameters,
  AvailabilitySetsListByResourceGroupParameters,
  AvailabilitySetsListBySubscriptionParameters,
  InventoryItemsGetParameters,
  InventoryItemsCreateParameters,
  InventoryItemsDeleteParameters,
  InventoryItemsListByVmmServerParameters,
  VirtualMachineInstancesGetParameters,
  VirtualMachineInstancesCreateOrUpdateParameters,
  VirtualMachineInstancesUpdateParameters,
  VirtualMachineInstancesDeleteParameters,
  VirtualMachineInstancesListParameters,
  VirtualMachineInstancesStopParameters,
  VirtualMachineInstancesStartParameters,
  VirtualMachineInstancesRestartParameters,
  VirtualMachineInstancesCreateCheckpointParameters,
  VirtualMachineInstancesDeleteCheckpointParameters,
  VirtualMachineInstancesRestoreCheckpointParameters,
  VmInstanceHybridIdentityMetadatasGetParameters,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceParameters,
  GuestAgentsGetParameters,
  GuestAgentsCreateParameters,
  GuestAgentsDeleteParameters,
  GuestAgentsListByVirtualMachineInstanceParameters,
} from "./parameters.js";
import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  VmmServersGet200Response,
  VmmServersGetDefaultResponse,
  VmmServersCreateOrUpdate200Response,
  VmmServersCreateOrUpdate201Response,
  VmmServersCreateOrUpdateDefaultResponse,
  VmmServersUpdate200Response,
  VmmServersUpdate202Response,
  VmmServersUpdateDefaultResponse,
  VmmServersDelete202Response,
  VmmServersDelete204Response,
  VmmServersDeleteDefaultResponse,
  VmmServersListByResourceGroup200Response,
  VmmServersListByResourceGroupDefaultResponse,
  VmmServersListBySubscription200Response,
  VmmServersListBySubscriptionDefaultResponse,
  CloudsGet200Response,
  CloudsGetDefaultResponse,
  CloudsCreateOrUpdate200Response,
  CloudsCreateOrUpdate201Response,
  CloudsCreateOrUpdateDefaultResponse,
  CloudsUpdate200Response,
  CloudsUpdate202Response,
  CloudsUpdateDefaultResponse,
  CloudsDelete202Response,
  CloudsDelete204Response,
  CloudsDeleteDefaultResponse,
  CloudsListByResourceGroup200Response,
  CloudsListByResourceGroupDefaultResponse,
  CloudsListBySubscription200Response,
  CloudsListBySubscriptionDefaultResponse,
  VirtualNetworksGet200Response,
  VirtualNetworksGetDefaultResponse,
  VirtualNetworksCreateOrUpdate200Response,
  VirtualNetworksCreateOrUpdate201Response,
  VirtualNetworksCreateOrUpdateDefaultResponse,
  VirtualNetworksUpdate200Response,
  VirtualNetworksUpdate202Response,
  VirtualNetworksUpdateDefaultResponse,
  VirtualNetworksDelete202Response,
  VirtualNetworksDelete204Response,
  VirtualNetworksDeleteDefaultResponse,
  VirtualNetworksListByResourceGroup200Response,
  VirtualNetworksListByResourceGroupDefaultResponse,
  VirtualNetworksListBySubscription200Response,
  VirtualNetworksListBySubscriptionDefaultResponse,
  VirtualMachineTemplatesGet200Response,
  VirtualMachineTemplatesGetDefaultResponse,
  VirtualMachineTemplatesCreateOrUpdate200Response,
  VirtualMachineTemplatesCreateOrUpdate201Response,
  VirtualMachineTemplatesCreateOrUpdateDefaultResponse,
  VirtualMachineTemplatesUpdate200Response,
  VirtualMachineTemplatesUpdate202Response,
  VirtualMachineTemplatesUpdateDefaultResponse,
  VirtualMachineTemplatesDelete202Response,
  VirtualMachineTemplatesDelete204Response,
  VirtualMachineTemplatesDeleteDefaultResponse,
  VirtualMachineTemplatesListByResourceGroup200Response,
  VirtualMachineTemplatesListByResourceGroupDefaultResponse,
  VirtualMachineTemplatesListBySubscription200Response,
  VirtualMachineTemplatesListBySubscriptionDefaultResponse,
  AvailabilitySetsGet200Response,
  AvailabilitySetsGetDefaultResponse,
  AvailabilitySetsCreateOrUpdate200Response,
  AvailabilitySetsCreateOrUpdate201Response,
  AvailabilitySetsCreateOrUpdateDefaultResponse,
  AvailabilitySetsUpdate200Response,
  AvailabilitySetsUpdate202Response,
  AvailabilitySetsUpdateDefaultResponse,
  AvailabilitySetsDelete202Response,
  AvailabilitySetsDelete204Response,
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
  VirtualMachineInstancesCreateOrUpdateDefaultResponse,
  VirtualMachineInstancesUpdate200Response,
  VirtualMachineInstancesUpdate202Response,
  VirtualMachineInstancesUpdateDefaultResponse,
  VirtualMachineInstancesDelete202Response,
  VirtualMachineInstancesDelete204Response,
  VirtualMachineInstancesDeleteDefaultResponse,
  VirtualMachineInstancesList200Response,
  VirtualMachineInstancesListDefaultResponse,
  VirtualMachineInstancesStop202Response,
  VirtualMachineInstancesStopDefaultResponse,
  VirtualMachineInstancesStart202Response,
  VirtualMachineInstancesStartDefaultResponse,
  VirtualMachineInstancesRestart202Response,
  VirtualMachineInstancesRestartDefaultResponse,
  VirtualMachineInstancesCreateCheckpoint202Response,
  VirtualMachineInstancesCreateCheckpointDefaultResponse,
  VirtualMachineInstancesDeleteCheckpoint202Response,
  VirtualMachineInstancesDeleteCheckpointDefaultResponse,
  VirtualMachineInstancesRestoreCheckpoint202Response,
  VirtualMachineInstancesRestoreCheckpointDefaultResponse,
  VmInstanceHybridIdentityMetadatasGet200Response,
  VmInstanceHybridIdentityMetadatasGetDefaultResponse,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance200Response,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse,
  GuestAgentsGet200Response,
  GuestAgentsGetDefaultResponse,
  GuestAgentsCreate200Response,
  GuestAgentsCreate201Response,
  GuestAgentsCreateDefaultResponse,
  GuestAgentsDelete200Response,
  GuestAgentsDelete204Response,
  GuestAgentsDeleteDefaultResponse,
  GuestAgentsListByVirtualMachineInstance200Response,
  GuestAgentsListByVirtualMachineInstanceDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface OperationsList {
  /** List the operations for the provider */
  get(
    options?: OperationsListParameters,
  ): StreamableMethod<
    OperationsList200Response | OperationsListDefaultResponse
  >;
}

export interface VmmServersGet {
  /** Implements VmmServer GET method. */
  get(
    options?: VmmServersGetParameters,
  ): StreamableMethod<VmmServersGet200Response | VmmServersGetDefaultResponse>;
  /** Onboards the SCVmm fabric as an Azure VmmServer resource. */
  put(
    options: VmmServersCreateOrUpdateParameters,
  ): StreamableMethod<
    | VmmServersCreateOrUpdate200Response
    | VmmServersCreateOrUpdate201Response
    | VmmServersCreateOrUpdateDefaultResponse
  >;
  /** Updates the VmmServers resource. */
  patch(
    options: VmmServersUpdateParameters,
  ): StreamableMethod<
    | VmmServersUpdate200Response
    | VmmServersUpdate202Response
    | VmmServersUpdateDefaultResponse
  >;
  /** Removes the SCVmm fabric from Azure. */
  delete(
    options?: VmmServersDeleteParameters,
  ): StreamableMethod<
    | VmmServersDelete202Response
    | VmmServersDelete204Response
    | VmmServersDeleteDefaultResponse
  >;
}

export interface VmmServersListByResourceGroup {
  /** List of VmmServers in a resource group. */
  get(
    options?: VmmServersListByResourceGroupParameters,
  ): StreamableMethod<
    | VmmServersListByResourceGroup200Response
    | VmmServersListByResourceGroupDefaultResponse
  >;
}

export interface VmmServersListBySubscription {
  /** List of VmmServers in a subscription. */
  get(
    options?: VmmServersListBySubscriptionParameters,
  ): StreamableMethod<
    | VmmServersListBySubscription200Response
    | VmmServersListBySubscriptionDefaultResponse
  >;
}

export interface CloudsGet {
  /** Implements Cloud GET method. */
  get(
    options?: CloudsGetParameters,
  ): StreamableMethod<CloudsGet200Response | CloudsGetDefaultResponse>;
  /** Onboards the ScVmm fabric cloud as an Azure cloud resource. */
  put(
    options: CloudsCreateOrUpdateParameters,
  ): StreamableMethod<
    | CloudsCreateOrUpdate200Response
    | CloudsCreateOrUpdate201Response
    | CloudsCreateOrUpdateDefaultResponse
  >;
  /** Updates the Clouds resource. */
  patch(
    options: CloudsUpdateParameters,
  ): StreamableMethod<
    | CloudsUpdate200Response
    | CloudsUpdate202Response
    | CloudsUpdateDefaultResponse
  >;
  /** Deregisters the ScVmm fabric cloud from Azure. */
  delete(
    options?: CloudsDeleteParameters,
  ): StreamableMethod<
    | CloudsDelete202Response
    | CloudsDelete204Response
    | CloudsDeleteDefaultResponse
  >;
}

export interface CloudsListByResourceGroup {
  /** List of Clouds in a resource group. */
  get(
    options?: CloudsListByResourceGroupParameters,
  ): StreamableMethod<
    | CloudsListByResourceGroup200Response
    | CloudsListByResourceGroupDefaultResponse
  >;
}

export interface CloudsListBySubscription {
  /** List of Clouds in a subscription. */
  get(
    options?: CloudsListBySubscriptionParameters,
  ): StreamableMethod<
    | CloudsListBySubscription200Response
    | CloudsListBySubscriptionDefaultResponse
  >;
}

export interface VirtualNetworksGet {
  /** Implements VirtualNetwork GET method. */
  get(
    options?: VirtualNetworksGetParameters,
  ): StreamableMethod<
    VirtualNetworksGet200Response | VirtualNetworksGetDefaultResponse
  >;
  /** Onboards the ScVmm virtual network as an Azure virtual network resource. */
  put(
    options: VirtualNetworksCreateOrUpdateParameters,
  ): StreamableMethod<
    | VirtualNetworksCreateOrUpdate200Response
    | VirtualNetworksCreateOrUpdate201Response
    | VirtualNetworksCreateOrUpdateDefaultResponse
  >;
  /** Updates the VirtualNetworks resource. */
  patch(
    options: VirtualNetworksUpdateParameters,
  ): StreamableMethod<
    | VirtualNetworksUpdate200Response
    | VirtualNetworksUpdate202Response
    | VirtualNetworksUpdateDefaultResponse
  >;
  /** Deregisters the ScVmm virtual network from Azure. */
  delete(
    options?: VirtualNetworksDeleteParameters,
  ): StreamableMethod<
    | VirtualNetworksDelete202Response
    | VirtualNetworksDelete204Response
    | VirtualNetworksDeleteDefaultResponse
  >;
}

export interface VirtualNetworksListByResourceGroup {
  /** List of VirtualNetworks in a resource group. */
  get(
    options?: VirtualNetworksListByResourceGroupParameters,
  ): StreamableMethod<
    | VirtualNetworksListByResourceGroup200Response
    | VirtualNetworksListByResourceGroupDefaultResponse
  >;
}

export interface VirtualNetworksListBySubscription {
  /** List of VirtualNetworks in a subscription. */
  get(
    options?: VirtualNetworksListBySubscriptionParameters,
  ): StreamableMethod<
    | VirtualNetworksListBySubscription200Response
    | VirtualNetworksListBySubscriptionDefaultResponse
  >;
}

export interface VirtualMachineTemplatesGet {
  /** Implements VirtualMachineTemplate GET method. */
  get(
    options?: VirtualMachineTemplatesGetParameters,
  ): StreamableMethod<
    | VirtualMachineTemplatesGet200Response
    | VirtualMachineTemplatesGetDefaultResponse
  >;
  /** Onboards the ScVmm VM Template as an Azure VM Template resource. */
  put(
    options: VirtualMachineTemplatesCreateOrUpdateParameters,
  ): StreamableMethod<
    | VirtualMachineTemplatesCreateOrUpdate200Response
    | VirtualMachineTemplatesCreateOrUpdate201Response
    | VirtualMachineTemplatesCreateOrUpdateDefaultResponse
  >;
  /** Updates the VirtualMachineTemplate resource. */
  patch(
    options: VirtualMachineTemplatesUpdateParameters,
  ): StreamableMethod<
    | VirtualMachineTemplatesUpdate200Response
    | VirtualMachineTemplatesUpdate202Response
    | VirtualMachineTemplatesUpdateDefaultResponse
  >;
  /** Deregisters the ScVmm VM Template from Azure. */
  delete(
    options?: VirtualMachineTemplatesDeleteParameters,
  ): StreamableMethod<
    | VirtualMachineTemplatesDelete202Response
    | VirtualMachineTemplatesDelete204Response
    | VirtualMachineTemplatesDeleteDefaultResponse
  >;
}

export interface VirtualMachineTemplatesListByResourceGroup {
  /** List of VirtualMachineTemplates in a resource group. */
  get(
    options?: VirtualMachineTemplatesListByResourceGroupParameters,
  ): StreamableMethod<
    | VirtualMachineTemplatesListByResourceGroup200Response
    | VirtualMachineTemplatesListByResourceGroupDefaultResponse
  >;
}

export interface VirtualMachineTemplatesListBySubscription {
  /** List of VirtualMachineTemplates in a subscription. */
  get(
    options?: VirtualMachineTemplatesListBySubscriptionParameters,
  ): StreamableMethod<
    | VirtualMachineTemplatesListBySubscription200Response
    | VirtualMachineTemplatesListBySubscriptionDefaultResponse
  >;
}

export interface AvailabilitySetsGet {
  /** Implements AvailabilitySet GET method. */
  get(
    options?: AvailabilitySetsGetParameters,
  ): StreamableMethod<
    AvailabilitySetsGet200Response | AvailabilitySetsGetDefaultResponse
  >;
  /** Onboards the ScVmm availability set as an Azure resource. */
  put(
    options: AvailabilitySetsCreateOrUpdateParameters,
  ): StreamableMethod<
    | AvailabilitySetsCreateOrUpdate200Response
    | AvailabilitySetsCreateOrUpdate201Response
    | AvailabilitySetsCreateOrUpdateDefaultResponse
  >;
  /** Updates the AvailabilitySets resource. */
  patch(
    options: AvailabilitySetsUpdateParameters,
  ): StreamableMethod<
    | AvailabilitySetsUpdate200Response
    | AvailabilitySetsUpdate202Response
    | AvailabilitySetsUpdateDefaultResponse
  >;
  /** Deregisters the ScVmm availability set from Azure. */
  delete(
    options?: AvailabilitySetsDeleteParameters,
  ): StreamableMethod<
    | AvailabilitySetsDelete202Response
    | AvailabilitySetsDelete204Response
    | AvailabilitySetsDeleteDefaultResponse
  >;
}

export interface AvailabilitySetsListByResourceGroup {
  /** List of AvailabilitySets in a resource group. */
  get(
    options?: AvailabilitySetsListByResourceGroupParameters,
  ): StreamableMethod<
    | AvailabilitySetsListByResourceGroup200Response
    | AvailabilitySetsListByResourceGroupDefaultResponse
  >;
}

export interface AvailabilitySetsListBySubscription {
  /** List of AvailabilitySets in a subscription. */
  get(
    options?: AvailabilitySetsListBySubscriptionParameters,
  ): StreamableMethod<
    | AvailabilitySetsListBySubscription200Response
    | AvailabilitySetsListBySubscriptionDefaultResponse
  >;
}

export interface InventoryItemsGet {
  /** Shows an inventory item. */
  get(
    options?: InventoryItemsGetParameters,
  ): StreamableMethod<
    InventoryItemsGet200Response | InventoryItemsGetDefaultResponse
  >;
  /** Create Or Update InventoryItem. */
  put(
    options: InventoryItemsCreateParameters,
  ): StreamableMethod<
    | InventoryItemsCreate200Response
    | InventoryItemsCreate201Response
    | InventoryItemsCreateDefaultResponse
  >;
  /** Deletes an inventoryItem. */
  delete(
    options?: InventoryItemsDeleteParameters,
  ): StreamableMethod<
    | InventoryItemsDelete200Response
    | InventoryItemsDelete204Response
    | InventoryItemsDeleteDefaultResponse
  >;
}

export interface InventoryItemsListByVmmServer {
  /** Returns the list of inventoryItems in the given VmmServer. */
  get(
    options?: InventoryItemsListByVmmServerParameters,
  ): StreamableMethod<
    | InventoryItemsListByVmmServer200Response
    | InventoryItemsListByVmmServerDefaultResponse
  >;
}

export interface VirtualMachineInstancesGet {
  /** Retrieves information about a virtual machine instance. */
  get(
    options?: VirtualMachineInstancesGetParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesGet200Response
    | VirtualMachineInstancesGetDefaultResponse
  >;
  /** The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation. */
  put(
    options: VirtualMachineInstancesCreateOrUpdateParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesCreateOrUpdate200Response
    | VirtualMachineInstancesCreateOrUpdate201Response
    | VirtualMachineInstancesCreateOrUpdateDefaultResponse
  >;
  /** The operation to update a virtual machine instance. */
  patch(
    options: VirtualMachineInstancesUpdateParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesUpdate200Response
    | VirtualMachineInstancesUpdate202Response
    | VirtualMachineInstancesUpdateDefaultResponse
  >;
  /** The operation to delete a virtual machine instance. */
  delete(
    options?: VirtualMachineInstancesDeleteParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesDelete202Response
    | VirtualMachineInstancesDelete204Response
    | VirtualMachineInstancesDeleteDefaultResponse
  >;
}

export interface VirtualMachineInstancesList {
  /** Lists all of the virtual machine instances within the specified parent resource. */
  get(
    options?: VirtualMachineInstancesListParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesList200Response
    | VirtualMachineInstancesListDefaultResponse
  >;
}

export interface VirtualMachineInstancesStop {
  /** The operation to power off (stop) a virtual machine instance. */
  post(
    options: VirtualMachineInstancesStopParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesStop202Response
    | VirtualMachineInstancesStopDefaultResponse
  >;
}

export interface VirtualMachineInstancesStart {
  /** The operation to start a virtual machine instance. */
  post(
    options: VirtualMachineInstancesStartParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesStart202Response
    | VirtualMachineInstancesStartDefaultResponse
  >;
}

export interface VirtualMachineInstancesRestart {
  /** The operation to restart a virtual machine instance. */
  post(
    options: VirtualMachineInstancesRestartParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesRestart202Response
    | VirtualMachineInstancesRestartDefaultResponse
  >;
}

export interface VirtualMachineInstancesCreateCheckpoint {
  /** Creates a checkpoint in virtual machine instance. */
  post(
    options: VirtualMachineInstancesCreateCheckpointParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesCreateCheckpoint202Response
    | VirtualMachineInstancesCreateCheckpointDefaultResponse
  >;
}

export interface VirtualMachineInstancesDeleteCheckpoint {
  /** Deletes a checkpoint in virtual machine instance. */
  post(
    options: VirtualMachineInstancesDeleteCheckpointParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesDeleteCheckpoint202Response
    | VirtualMachineInstancesDeleteCheckpointDefaultResponse
  >;
}

export interface VirtualMachineInstancesRestoreCheckpoint {
  /** Restores to a checkpoint in virtual machine instance. */
  post(
    options: VirtualMachineInstancesRestoreCheckpointParameters,
  ): StreamableMethod<
    | VirtualMachineInstancesRestoreCheckpoint202Response
    | VirtualMachineInstancesRestoreCheckpointDefaultResponse
  >;
}

export interface VmInstanceHybridIdentityMetadatasGet {
  /** Implements HybridIdentityMetadata GET method. */
  get(
    options?: VmInstanceHybridIdentityMetadatasGetParameters,
  ): StreamableMethod<
    | VmInstanceHybridIdentityMetadatasGet200Response
    | VmInstanceHybridIdentityMetadatasGetDefaultResponse
  >;
}

export interface VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance {
  /** Returns the list of HybridIdentityMetadata of the given VM. */
  get(
    options?: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceParameters,
  ): StreamableMethod<
    | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance200Response
    | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse
  >;
}

export interface GuestAgentsGet {
  /** Implements GuestAgent GET method. */
  get(
    options?: GuestAgentsGetParameters,
  ): StreamableMethod<
    GuestAgentsGet200Response | GuestAgentsGetDefaultResponse
  >;
  /** Create Or Update GuestAgent. */
  put(
    options: GuestAgentsCreateParameters,
  ): StreamableMethod<
    | GuestAgentsCreate200Response
    | GuestAgentsCreate201Response
    | GuestAgentsCreateDefaultResponse
  >;
  /** Implements GuestAgent DELETE method. */
  delete(
    options?: GuestAgentsDeleteParameters,
  ): StreamableMethod<
    | GuestAgentsDelete200Response
    | GuestAgentsDelete204Response
    | GuestAgentsDeleteDefaultResponse
  >;
}

export interface GuestAgentsListByVirtualMachineInstance {
  /** Returns the list of GuestAgent of the given vm. */
  get(
    options?: GuestAgentsListByVirtualMachineInstanceParameters,
  ): StreamableMethod<
    | GuestAgentsListByVirtualMachineInstance200Response
    | GuestAgentsListByVirtualMachineInstanceDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/providers/Microsoft.ScVmm/operations' has methods for the following verbs: get */
  (path: "/providers/Microsoft.ScVmm/operations"): OperationsList;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/vmmServers/\{vmmServerName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
    subscriptionId: string,
    resourceGroupName: string,
    vmmServerName: string,
  ): VmmServersGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/vmmServers' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers",
    subscriptionId: string,
    resourceGroupName: string,
  ): VmmServersListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.ScVmm/vmmServers' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/vmmServers",
    subscriptionId: string,
  ): VmmServersListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/clouds/\{cloudResourceName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
    subscriptionId: string,
    resourceGroupName: string,
    cloudResourceName: string,
  ): CloudsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/clouds' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds",
    subscriptionId: string,
    resourceGroupName: string,
  ): CloudsListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.ScVmm/clouds' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/clouds",
    subscriptionId: string,
  ): CloudsListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/virtualNetworks/\{virtualNetworkName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
    subscriptionId: string,
    resourceGroupName: string,
    virtualNetworkName: string,
  ): VirtualNetworksGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/virtualNetworks' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks",
    subscriptionId: string,
    resourceGroupName: string,
  ): VirtualNetworksListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.ScVmm/virtualNetworks' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualNetworks",
    subscriptionId: string,
  ): VirtualNetworksListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/virtualMachineTemplates/\{virtualMachineTemplateName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
    subscriptionId: string,
    resourceGroupName: string,
    virtualMachineTemplateName: string,
  ): VirtualMachineTemplatesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/virtualMachineTemplates' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates",
    subscriptionId: string,
    resourceGroupName: string,
  ): VirtualMachineTemplatesListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.ScVmm/virtualMachineTemplates' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualMachineTemplates",
    subscriptionId: string,
  ): VirtualMachineTemplatesListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/availabilitySets/\{availabilitySetResourceName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
    subscriptionId: string,
    resourceGroupName: string,
    availabilitySetResourceName: string,
  ): AvailabilitySetsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/availabilitySets' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets",
    subscriptionId: string,
    resourceGroupName: string,
  ): AvailabilitySetsListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.ScVmm/availabilitySets' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/availabilitySets",
    subscriptionId: string,
  ): AvailabilitySetsListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/vmmServers/\{vmmServerName\}/inventoryItems/\{inventoryItemResourceName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
    subscriptionId: string,
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
  ): InventoryItemsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ScVmm/vmmServers/\{vmmServerName\}/inventoryItems' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems",
    subscriptionId: string,
    resourceGroupName: string,
    vmmServerName: string,
  ): InventoryItemsListByVmmServer;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
    resourceUri: string,
  ): VirtualMachineInstancesGet;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances' has methods for the following verbs: get */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances",
    resourceUri: string,
  ): VirtualMachineInstancesList;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop' has methods for the following verbs: post */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop",
    resourceUri: string,
  ): VirtualMachineInstancesStop;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start' has methods for the following verbs: post */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start",
    resourceUri: string,
  ): VirtualMachineInstancesStart;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart' has methods for the following verbs: post */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart",
    resourceUri: string,
  ): VirtualMachineInstancesRestart;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint' has methods for the following verbs: post */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint",
    resourceUri: string,
  ): VirtualMachineInstancesCreateCheckpoint;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint' has methods for the following verbs: post */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint",
    resourceUri: string,
  ): VirtualMachineInstancesDeleteCheckpoint;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint' has methods for the following verbs: post */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint",
    resourceUri: string,
  ): VirtualMachineInstancesRestoreCheckpoint;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata/default' has methods for the following verbs: get */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata/default",
    resourceUri: string,
  ): VmInstanceHybridIdentityMetadatasGet;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata' has methods for the following verbs: get */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata",
    resourceUri: string,
  ): VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default' has methods for the following verbs: get, put, delete */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
    resourceUri: string,
  ): GuestAgentsGet;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents' has methods for the following verbs: get */
  (
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents",
    resourceUri: string,
  ): GuestAgentsListByVirtualMachineInstance;
}

export type ScVmmContext = Client & {
  path: Routes;
};
