// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  VmmServer,
  VmmServerTagsUpdate,
  ForceDelete,
  Cloud,
  CloudTagsUpdate,
  VirtualNetwork,
  VirtualNetworkTagsUpdate,
  VirtualMachineTemplate,
  VirtualMachineTemplateTagsUpdate,
  AvailabilitySet,
  AvailabilitySetTagsUpdate,
  InventoryItem,
  VirtualMachineInstance,
  VirtualMachineInstanceUpdate,
  DeleteFromHost,
  StopVirtualMachineOptions,
  VirtualMachineCreateCheckpoint,
  VirtualMachineDeleteCheckpoint,
  VirtualMachineRestoreCheckpoint,
  GuestAgent,
} from "./models.js";

export type OperationsListParameters = RequestParameters;
export type VmmServersGetParameters = RequestParameters;

export interface VmmServersCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: VmmServer;
}

export type VmmServersCreateOrUpdateParameters =
  VmmServersCreateOrUpdateBodyParam & RequestParameters;

export interface VmmServersUpdateBodyParam {
  /** The resource properties to be updated. */
  body: VmmServerTagsUpdate;
}

export type VmmServersUpdateParameters = VmmServersUpdateBodyParam &
  RequestParameters;

export interface VmmServersDeleteQueryParamProperties {
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface VmmServersDeleteQueryParam {
  queryParameters?: VmmServersDeleteQueryParamProperties;
}

export type VmmServersDeleteParameters = VmmServersDeleteQueryParam &
  RequestParameters;
export type VmmServersListByResourceGroupParameters = RequestParameters;
export type VmmServersListBySubscriptionParameters = RequestParameters;
export type CloudsGetParameters = RequestParameters;

export interface CloudsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: Cloud;
}

export type CloudsCreateOrUpdateParameters = CloudsCreateOrUpdateBodyParam &
  RequestParameters;

export interface CloudsUpdateBodyParam {
  /** The resource properties to be updated. */
  body: CloudTagsUpdate;
}

export type CloudsUpdateParameters = CloudsUpdateBodyParam & RequestParameters;

export interface CloudsDeleteQueryParamProperties {
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface CloudsDeleteQueryParam {
  queryParameters?: CloudsDeleteQueryParamProperties;
}

export type CloudsDeleteParameters = CloudsDeleteQueryParam & RequestParameters;
export type CloudsListByResourceGroupParameters = RequestParameters;
export type CloudsListBySubscriptionParameters = RequestParameters;
export type VirtualNetworksGetParameters = RequestParameters;

export interface VirtualNetworksCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: VirtualNetwork;
}

export type VirtualNetworksCreateOrUpdateParameters =
  VirtualNetworksCreateOrUpdateBodyParam & RequestParameters;

export interface VirtualNetworksUpdateBodyParam {
  /** The resource properties to be updated. */
  body: VirtualNetworkTagsUpdate;
}

export type VirtualNetworksUpdateParameters = VirtualNetworksUpdateBodyParam &
  RequestParameters;

export interface VirtualNetworksDeleteQueryParamProperties {
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface VirtualNetworksDeleteQueryParam {
  queryParameters?: VirtualNetworksDeleteQueryParamProperties;
}

export type VirtualNetworksDeleteParameters = VirtualNetworksDeleteQueryParam &
  RequestParameters;
export type VirtualNetworksListByResourceGroupParameters = RequestParameters;
export type VirtualNetworksListBySubscriptionParameters = RequestParameters;
export type VirtualMachineTemplatesGetParameters = RequestParameters;

export interface VirtualMachineTemplatesCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: VirtualMachineTemplate;
}

export type VirtualMachineTemplatesCreateOrUpdateParameters =
  VirtualMachineTemplatesCreateOrUpdateBodyParam & RequestParameters;

export interface VirtualMachineTemplatesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: VirtualMachineTemplateTagsUpdate;
}

export type VirtualMachineTemplatesUpdateParameters =
  VirtualMachineTemplatesUpdateBodyParam & RequestParameters;

export interface VirtualMachineTemplatesDeleteQueryParamProperties {
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface VirtualMachineTemplatesDeleteQueryParam {
  queryParameters?: VirtualMachineTemplatesDeleteQueryParamProperties;
}

export type VirtualMachineTemplatesDeleteParameters =
  VirtualMachineTemplatesDeleteQueryParam & RequestParameters;
export type VirtualMachineTemplatesListByResourceGroupParameters =
  RequestParameters;
export type VirtualMachineTemplatesListBySubscriptionParameters =
  RequestParameters;
export type AvailabilitySetsGetParameters = RequestParameters;

export interface AvailabilitySetsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: AvailabilitySet;
}

export type AvailabilitySetsCreateOrUpdateParameters =
  AvailabilitySetsCreateOrUpdateBodyParam & RequestParameters;

export interface AvailabilitySetsUpdateBodyParam {
  /** The resource properties to be updated. */
  body: AvailabilitySetTagsUpdate;
}

export type AvailabilitySetsUpdateParameters = AvailabilitySetsUpdateBodyParam &
  RequestParameters;

export interface AvailabilitySetsDeleteQueryParamProperties {
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface AvailabilitySetsDeleteQueryParam {
  queryParameters?: AvailabilitySetsDeleteQueryParamProperties;
}

export type AvailabilitySetsDeleteParameters =
  AvailabilitySetsDeleteQueryParam & RequestParameters;
export type AvailabilitySetsListByResourceGroupParameters = RequestParameters;
export type AvailabilitySetsListBySubscriptionParameters = RequestParameters;
export type InventoryItemsGetParameters = RequestParameters;

export interface InventoryItemsCreateBodyParam {
  /** Resource create parameters. */
  body: InventoryItem;
}

export type InventoryItemsCreateParameters = InventoryItemsCreateBodyParam &
  RequestParameters;
export type InventoryItemsDeleteParameters = RequestParameters;
export type InventoryItemsListByVmmServerParameters = RequestParameters;
export type VirtualMachineInstancesGetParameters = RequestParameters;

export interface VirtualMachineInstancesCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: VirtualMachineInstance;
}

export type VirtualMachineInstancesCreateOrUpdateParameters =
  VirtualMachineInstancesCreateOrUpdateBodyParam & RequestParameters;

export interface VirtualMachineInstancesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: VirtualMachineInstanceUpdate;
}

export type VirtualMachineInstancesUpdateParameters =
  VirtualMachineInstancesUpdateBodyParam & RequestParameters;

export interface VirtualMachineInstancesDeleteQueryParamProperties {
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
  /** Whether to disable the VM from azure and also delete it from Vmm. */
  deleteFromHost?: DeleteFromHost;
}

export interface VirtualMachineInstancesDeleteQueryParam {
  queryParameters?: VirtualMachineInstancesDeleteQueryParamProperties;
}

export type VirtualMachineInstancesDeleteParameters =
  VirtualMachineInstancesDeleteQueryParam & RequestParameters;
export type VirtualMachineInstancesListParameters = RequestParameters;

export interface VirtualMachineInstancesStopBodyParam {
  /** The content of the action request */
  body: StopVirtualMachineOptions;
}

export type VirtualMachineInstancesStopParameters =
  VirtualMachineInstancesStopBodyParam & RequestParameters;
export type VirtualMachineInstancesStartParameters = RequestParameters;
export type VirtualMachineInstancesRestartParameters = RequestParameters;

export interface VirtualMachineInstancesCreateCheckpointBodyParam {
  /** The content of the action request */
  body: VirtualMachineCreateCheckpoint;
}

export type VirtualMachineInstancesCreateCheckpointParameters =
  VirtualMachineInstancesCreateCheckpointBodyParam & RequestParameters;

export interface VirtualMachineInstancesDeleteCheckpointBodyParam {
  /** The content of the action request */
  body: VirtualMachineDeleteCheckpoint;
}

export type VirtualMachineInstancesDeleteCheckpointParameters =
  VirtualMachineInstancesDeleteCheckpointBodyParam & RequestParameters;

export interface VirtualMachineInstancesRestoreCheckpointBodyParam {
  /** The content of the action request */
  body: VirtualMachineRestoreCheckpoint;
}

export type VirtualMachineInstancesRestoreCheckpointParameters =
  VirtualMachineInstancesRestoreCheckpointBodyParam & RequestParameters;
export type VmInstanceHybridIdentityMetadatasGetParameters = RequestParameters;
export type VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceParameters =
  RequestParameters;
export type GuestAgentsGetParameters = RequestParameters;

export interface GuestAgentsCreateBodyParam {
  /** Resource create parameters. */
  body: GuestAgent;
}

export type GuestAgentsCreateParameters = GuestAgentsCreateBodyParam &
  RequestParameters;
export type GuestAgentsDeleteParameters = RequestParameters;
export type GuestAgentsListByVirtualMachineInstanceParameters =
  RequestParameters;
