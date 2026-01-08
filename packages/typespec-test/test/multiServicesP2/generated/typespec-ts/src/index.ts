// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureClouds, AzureSupportedClouds } from "./static-helpers/cloudSettingHelpers.js";

export { ComputeClient } from "./computeClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
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
  KnownComputeVersions,
} from "./models/compute/index.js";
export {
  ComputeDiskDisk,
  ComputeDiskDiskProperties,
  ComputeDiskDiskAccess,
  ComputeDiskDiskAccessProperties,
  ComputeDiskActionGroup,
  ComputeDiskActionGroupsProperties,
  KnownComputeDiskVersions,
} from "./models/computeDisk/index.js";
export { ComputeClientOptionalParams } from "./api/index.js";
export { ActionGroupsListOptionalParams as ComputeDiskActionGroupsListOptionalParams } from "./computeDisk/api/actionGroups/index.js";
export {
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesGetOptionalParams,
} from "./computeDisk/api/diskAccesses/index.js";
export { DisksCreateOrUpdateOptionalParams, DisksGetOptionalParams } from "./computeDisk/api/disks/index.js";
export { ActionGroupsGetOptionalParams as ComputeActionGroupsGetOptionalParams } from "./compute/api/actionGroups/index.js";
export {
  RestorePointCollectionsCreateOrUpdateOptionalParams,
  RestorePointCollectionsGetOptionalParams,
} from "./compute/api/restorePointCollections/index.js";
export {
  VirtualMachinesCreateOrUpdateOptionalParams,
  VirtualMachinesGetOptionalParams,
} from "./compute/api/virtualMachines/index.js";
export {
  ActionGroupsOperations as ComputeDiskActionGroupsOperations,
  DiskAccessesOperations,
  DisksOperations,
} from "./computeDisk/classic/index.js";
export {
  ActionGroupsOperations as ComputeActionGroupsOperations,
  RestorePointCollectionsOperations,
  VirtualMachinesOperations,
} from "./compute/classic/index.js";
export { AzureClouds, AzureSupportedClouds };
