// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureClouds, AzureSupportedClouds } from "./static-helpers/cloudSettingHelpers.js";

export { ComputeClient } from "./computeClient.js";
export {
  KnownResourceProvisioningState,
  ResourceProvisioningState,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  PrivateEndpointConnection,
  PrivateEndpointConnectionProperties,
  PrivateEndpoint,
  PrivateLinkServiceConnectionState,
  KnownPrivateEndpointServiceConnectionStatus,
  PrivateEndpointServiceConnectionStatus,
  KnownPrivateEndpointConnectionProvisioningState,
  PrivateEndpointConnectionProvisioningState,
} from "./models/index.js";
export {
  ComputeVirtualMachine,
  ComputeVirtualMachineProperties,
  ComputeRestorePointCollection,
  ComputeRestorePointCollectionProperties,
  ComputeActionGroup,
  ComputeActionGroupsProperties,
} from "./models/compute/index.js";
export {
  ComputeDiskActionGroup,
  ComputeDiskActionGroupsProperties,
  ComputeDiskDisk,
  ComputeDiskDiskProperties,
  ComputeDiskDiskAccess,
  ComputeDiskDiskAccessProperties,
} from "./models/computeDisk/index.js";
export { ComputeClientOptionalParams } from "./api/index.js";
export { AzureClouds, AzureSupportedClouds };
export { VirtualMachines } from "./virtualMachines/virtualMachines.js";
export { restorePoller, RestorePollerOptions } from "./virtualMachines/restorePollerHelpers.js";
export {
  CreateOrUpdateOptionalParams,
  GetOptionalParams,
  VirtualMachinesOptionalParams,
} from "./virtualMachines/api/index.js";
export { RestorePointCollections } from "./restorePointCollections/restorePointCollections.js";
export {
  CreateOrUpdateOptionalParams as RestorePointCollectionsCreateOrUpdateOptionalParams,
  GetOptionalParams as RestorePointCollectionsGetOptionalParams,
  RestorePointCollectionsOptionalParams,
} from "./restorePointCollections/api/index.js";
export { ActionGroups } from "./actionGroups/actionGroups.js";
export {
  ActionGroupsOptionalParams,
  ListOptionalParams,
  GetOptionalParams as ActionGroupsGetOptionalParams,
} from "./actionGroups/api/index.js";
export { Disks } from "./disks/disks.js";
export {
  restorePoller as DisksrestorePoller,
  RestorePollerOptions as DisksRestorePollerOptions,
} from "./disks/restorePollerHelpers.js";
export {
  DisksOptionalParams,
  CreateOrUpdateOptionalParams as DisksCreateOrUpdateOptionalParams,
  GetOptionalParams as DisksGetOptionalParams,
} from "./disks/api/index.js";
export { DiskAccesses } from "./diskAccesses/diskAccesses.js";
export {
  restorePoller as DiskAccessesrestorePoller,
  RestorePollerOptions as DiskAccessesRestorePollerOptions,
} from "./diskAccesses/restorePollerHelpers.js";
export {
  DiskAccessesOptionalParams,
  CreateOrUpdateOptionalParams as DiskAccessesCreateOrUpdateOptionalParams,
  GetOptionalParams as DiskAccessesGetOptionalParams,
} from "./diskAccesses/api/index.js";
