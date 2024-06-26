// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  OperationListResultOutput,
  ErrorResponseOutput,
  VmmServerOutput,
  VmmServerListResultOutput,
  CloudOutput,
  CloudListResultOutput,
  VirtualNetworkOutput,
  VirtualNetworkListResultOutput,
  VirtualMachineTemplateOutput,
  VirtualMachineTemplateListResultOutput,
  AvailabilitySetOutput,
  AvailabilitySetListResultOutput,
  InventoryItemOutput,
  InventoryItemListResultOutput,
  VirtualMachineInstanceOutput,
  VirtualMachineInstanceListResultOutput,
  VmInstanceHybridIdentityMetadataOutput,
  VmInstanceHybridIdentityMetadataListResultOutput,
  GuestAgentOutput,
  GuestAgentListResultOutput,
} from "./outputModels.js";

/** Azure operation completed successfully. */
export interface OperationsList200Response extends HttpResponse {
  status: "200";
  body: OperationListResultOutput;
}

export interface OperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface VmmServersGet200Response extends HttpResponse {
  status: "200";
  body: VmmServerOutput;
}

export interface VmmServersGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'VmmServer' update operation succeeded */
export interface VmmServersCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: VmmServerOutput;
}

export interface VmmServersCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'VmmServer' create operation succeeded */
export interface VmmServersCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: VmmServerOutput;
  headers: RawHttpHeaders & VmmServersCreateOrUpdate201Headers;
}

export interface VmmServersCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface VmmServersCreateOrUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: VmmServerOutput;
}

/** Azure operation completed successfully. */
export interface VmmServersUpdate200Response extends HttpResponse {
  status: "200";
  body: VmmServerOutput;
}

export interface VmmServersUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface VmmServersUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VmmServersUpdate202Headers;
}

export interface VmmServersUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface VmmServersUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: VmmServerOutput;
}

export interface VmmServersDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface VmmServersDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VmmServersDelete202Headers;
}

/** Resource does not exist. */
export interface VmmServersDelete204Response extends HttpResponse {
  status: "204";
}

export interface VmmServersDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface VmmServersDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface VmmServersListByResourceGroup200Response extends HttpResponse {
  status: "200";
  body: VmmServerListResultOutput;
}

export interface VmmServersListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface VmmServersListBySubscription200Response extends HttpResponse {
  status: "200";
  body: VmmServerListResultOutput;
}

export interface VmmServersListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CloudsGet200Response extends HttpResponse {
  status: "200";
  body: CloudOutput;
}

export interface CloudsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'Cloud' update operation succeeded */
export interface CloudsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CloudOutput;
}

export interface CloudsCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'Cloud' create operation succeeded */
export interface CloudsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CloudOutput;
  headers: RawHttpHeaders & CloudsCreateOrUpdate201Headers;
}

export interface CloudsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface CloudsCreateOrUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: CloudOutput;
}

/** Azure operation completed successfully. */
export interface CloudsUpdate200Response extends HttpResponse {
  status: "200";
  body: CloudOutput;
}

export interface CloudsUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface CloudsUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CloudsUpdate202Headers;
}

export interface CloudsUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface CloudsUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: CloudOutput;
}

export interface CloudsDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface CloudsDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CloudsDelete202Headers;
}

/** Resource does not exist. */
export interface CloudsDelete204Response extends HttpResponse {
  status: "204";
}

export interface CloudsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface CloudsDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface CloudsListByResourceGroup200Response extends HttpResponse {
  status: "200";
  body: CloudListResultOutput;
}

export interface CloudsListByResourceGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CloudsListBySubscription200Response extends HttpResponse {
  status: "200";
  body: CloudListResultOutput;
}

export interface CloudsListBySubscriptionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface VirtualNetworksGet200Response extends HttpResponse {
  status: "200";
  body: VirtualNetworkOutput;
}

export interface VirtualNetworksGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'VirtualNetwork' update operation succeeded */
export interface VirtualNetworksCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: VirtualNetworkOutput;
}

export interface VirtualNetworksCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'VirtualNetwork' create operation succeeded */
export interface VirtualNetworksCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: VirtualNetworkOutput;
  headers: RawHttpHeaders & VirtualNetworksCreateOrUpdate201Headers;
}

export interface VirtualNetworksCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface VirtualNetworksCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: VirtualNetworkOutput;
}

/** Azure operation completed successfully. */
export interface VirtualNetworksUpdate200Response extends HttpResponse {
  status: "200";
  body: VirtualNetworkOutput;
}

export interface VirtualNetworksUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface VirtualNetworksUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualNetworksUpdate202Headers;
}

export interface VirtualNetworksUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface VirtualNetworksUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: VirtualNetworkOutput;
}

export interface VirtualNetworksDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface VirtualNetworksDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualNetworksDelete202Headers;
}

/** Resource does not exist. */
export interface VirtualNetworksDelete204Response extends HttpResponse {
  status: "204";
}

export interface VirtualNetworksDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface VirtualNetworksDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface VirtualNetworksListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: VirtualNetworkListResultOutput;
}

export interface VirtualNetworksListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface VirtualNetworksListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: VirtualNetworkListResultOutput;
}

export interface VirtualNetworksListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface VirtualMachineTemplatesGet200Response extends HttpResponse {
  status: "200";
  body: VirtualMachineTemplateOutput;
}

export interface VirtualMachineTemplatesGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'VirtualMachineTemplate' update operation succeeded */
export interface VirtualMachineTemplatesCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: VirtualMachineTemplateOutput;
}

export interface VirtualMachineTemplatesCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'VirtualMachineTemplate' create operation succeeded */
export interface VirtualMachineTemplatesCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: VirtualMachineTemplateOutput;
  headers: RawHttpHeaders & VirtualMachineTemplatesCreateOrUpdate201Headers;
}

export interface VirtualMachineTemplatesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface VirtualMachineTemplatesCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: VirtualMachineTemplateOutput;
}

/** Azure operation completed successfully. */
export interface VirtualMachineTemplatesUpdate200Response extends HttpResponse {
  status: "200";
  body: VirtualMachineTemplateOutput;
}

export interface VirtualMachineTemplatesUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface VirtualMachineTemplatesUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineTemplatesUpdate202Headers;
}

export interface VirtualMachineTemplatesUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface VirtualMachineTemplatesUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: VirtualMachineTemplateOutput;
}

export interface VirtualMachineTemplatesDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface VirtualMachineTemplatesDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineTemplatesDelete202Headers;
}

/** Resource does not exist. */
export interface VirtualMachineTemplatesDelete204Response extends HttpResponse {
  status: "204";
}

export interface VirtualMachineTemplatesDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface VirtualMachineTemplatesDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface VirtualMachineTemplatesListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: VirtualMachineTemplateListResultOutput;
}

export interface VirtualMachineTemplatesListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface VirtualMachineTemplatesListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: VirtualMachineTemplateListResultOutput;
}

export interface VirtualMachineTemplatesListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AvailabilitySetsGet200Response extends HttpResponse {
  status: "200";
  body: AvailabilitySetOutput;
}

export interface AvailabilitySetsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'AvailabilitySet' update operation succeeded */
export interface AvailabilitySetsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: AvailabilitySetOutput;
}

export interface AvailabilitySetsCreateOrUpdate201Headers {
  /** A link to the status monitor */
  "azure-asyncoperation"?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'AvailabilitySet' create operation succeeded */
export interface AvailabilitySetsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: AvailabilitySetOutput;
  headers: RawHttpHeaders & AvailabilitySetsCreateOrUpdate201Headers;
}

export interface AvailabilitySetsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface AvailabilitySetsCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AvailabilitySetOutput;
}

/** Azure operation completed successfully. */
export interface AvailabilitySetsUpdate200Response extends HttpResponse {
  status: "200";
  body: AvailabilitySetOutput;
}

export interface AvailabilitySetsUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface AvailabilitySetsUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AvailabilitySetsUpdate202Headers;
}

export interface AvailabilitySetsUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface AvailabilitySetsUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: AvailabilitySetOutput;
}

export interface AvailabilitySetsDelete202Headers {
  /** A link to the status monitor */
  "azure-asyncoperation"?: string;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface AvailabilitySetsDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AvailabilitySetsDelete202Headers;
}

/** Resource does not exist. */
export interface AvailabilitySetsDelete204Response extends HttpResponse {
  status: "204";
}

export interface AvailabilitySetsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface AvailabilitySetsDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface AvailabilitySetsListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: AvailabilitySetListResultOutput;
}

export interface AvailabilitySetsListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AvailabilitySetsListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: AvailabilitySetListResultOutput;
}

export interface AvailabilitySetsListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface InventoryItemsGet200Response extends HttpResponse {
  status: "200";
  body: InventoryItemOutput;
}

export interface InventoryItemsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'InventoryItem' update operation succeeded */
export interface InventoryItemsCreate200Response extends HttpResponse {
  status: "200";
  body: InventoryItemOutput;
}

/** Resource 'InventoryItem' create operation succeeded */
export interface InventoryItemsCreate201Response extends HttpResponse {
  status: "201";
  body: InventoryItemOutput;
}

export interface InventoryItemsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource deleted successfully. */
export interface InventoryItemsDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface InventoryItemsDelete204Response extends HttpResponse {
  status: "204";
}

export interface InventoryItemsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface InventoryItemsListByVmmServer200Response extends HttpResponse {
  status: "200";
  body: InventoryItemListResultOutput;
}

export interface InventoryItemsListByVmmServerDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface VirtualMachineInstancesGet200Response extends HttpResponse {
  status: "200";
  body: VirtualMachineInstanceOutput;
}

export interface VirtualMachineInstancesGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'VirtualMachineInstance' update operation succeeded */
export interface VirtualMachineInstancesCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: VirtualMachineInstanceOutput;
}

export interface VirtualMachineInstancesCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'VirtualMachineInstance' create operation succeeded */
export interface VirtualMachineInstancesCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: VirtualMachineInstanceOutput;
  headers: RawHttpHeaders & VirtualMachineInstancesCreateOrUpdate201Headers;
}

export interface VirtualMachineInstancesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface VirtualMachineInstancesCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: VirtualMachineInstanceOutput;
}

/** Azure operation completed successfully. */
export interface VirtualMachineInstancesUpdate200Response extends HttpResponse {
  status: "200";
  body: VirtualMachineInstanceOutput;
}

export interface VirtualMachineInstancesUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface VirtualMachineInstancesUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineInstancesUpdate202Headers;
}

export interface VirtualMachineInstancesUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface VirtualMachineInstancesUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: VirtualMachineInstanceOutput;
}

export interface VirtualMachineInstancesDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface VirtualMachineInstancesDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineInstancesDelete202Headers;
}

/** Resource does not exist. */
export interface VirtualMachineInstancesDelete204Response extends HttpResponse {
  status: "204";
}

export interface VirtualMachineInstancesDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface VirtualMachineInstancesDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface VirtualMachineInstancesList200Response extends HttpResponse {
  status: "200";
  body: VirtualMachineInstanceListResultOutput;
}

export interface VirtualMachineInstancesListDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface VirtualMachineInstancesStop202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface VirtualMachineInstancesStop202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineInstancesStop202Headers;
}

export interface VirtualMachineInstancesStopDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running stop operation */
export interface VirtualMachineInstancesStopLogicalResponse
  extends HttpResponse {
  status: "200";
}

export interface VirtualMachineInstancesStart202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface VirtualMachineInstancesStart202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineInstancesStart202Headers;
}

export interface VirtualMachineInstancesStartDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running start operation */
export interface VirtualMachineInstancesStartLogicalResponse
  extends HttpResponse {
  status: "200";
}

export interface VirtualMachineInstancesRestart202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface VirtualMachineInstancesRestart202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineInstancesRestart202Headers;
}

export interface VirtualMachineInstancesRestartDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running restart operation */
export interface VirtualMachineInstancesRestartLogicalResponse
  extends HttpResponse {
  status: "200";
}

export interface VirtualMachineInstancesCreateCheckpoint202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface VirtualMachineInstancesCreateCheckpoint202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineInstancesCreateCheckpoint202Headers;
}

export interface VirtualMachineInstancesCreateCheckpointDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createCheckpoint operation */
export interface VirtualMachineInstancesCreateCheckpointLogicalResponse
  extends HttpResponse {
  status: "200";
}

export interface VirtualMachineInstancesDeleteCheckpoint202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface VirtualMachineInstancesDeleteCheckpoint202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineInstancesDeleteCheckpoint202Headers;
}

export interface VirtualMachineInstancesDeleteCheckpointDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running deleteCheckpoint operation */
export interface VirtualMachineInstancesDeleteCheckpointLogicalResponse
  extends HttpResponse {
  status: "200";
}

export interface VirtualMachineInstancesRestoreCheckpoint202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface VirtualMachineInstancesRestoreCheckpoint202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualMachineInstancesRestoreCheckpoint202Headers;
}

export interface VirtualMachineInstancesRestoreCheckpointDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running restoreCheckpoint operation */
export interface VirtualMachineInstancesRestoreCheckpointLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface VmInstanceHybridIdentityMetadatasGet200Response
  extends HttpResponse {
  status: "200";
  body: VmInstanceHybridIdentityMetadataOutput;
}

export interface VmInstanceHybridIdentityMetadatasGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance200Response
  extends HttpResponse {
  status: "200";
  body: VmInstanceHybridIdentityMetadataListResultOutput;
}

export interface VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface GuestAgentsGet200Response extends HttpResponse {
  status: "200";
  body: GuestAgentOutput;
}

export interface GuestAgentsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'GuestAgent' update operation succeeded */
export interface GuestAgentsCreate200Response extends HttpResponse {
  status: "200";
  body: GuestAgentOutput;
}

export interface GuestAgentsCreate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'GuestAgent' create operation succeeded */
export interface GuestAgentsCreate201Response extends HttpResponse {
  status: "201";
  body: GuestAgentOutput;
  headers: RawHttpHeaders & GuestAgentsCreate201Headers;
}

export interface GuestAgentsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running create operation */
export interface GuestAgentsCreateLogicalResponse extends HttpResponse {
  status: "200";
  body: GuestAgentOutput;
}

/** Resource deleted successfully. */
export interface GuestAgentsDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface GuestAgentsDelete204Response extends HttpResponse {
  status: "204";
}

export interface GuestAgentsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface GuestAgentsListByVirtualMachineInstance200Response
  extends HttpResponse {
  status: "200";
  body: GuestAgentListResultOutput;
}

export interface GuestAgentsListByVirtualMachineInstanceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
