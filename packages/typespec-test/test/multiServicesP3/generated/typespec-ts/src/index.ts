// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureClouds, AzureSupportedClouds } from "./static-helpers/cloudSettingHelpers.js";

export { ComputeClient } from "./computeClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  VirtualMachine,
  VirtualMachineProperties,
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
  RestorePointCollection,
  RestorePointCollectionProperties,
  Disk,
  DiskProperties,
  DiskAccess,
  DiskAccessProperties,
  PrivateEndpointConnection,
  PrivateEndpointConnectionProperties,
  PrivateEndpoint,
  PrivateLinkServiceConnectionState,
  KnownPrivateEndpointServiceConnectionStatus,
  PrivateEndpointServiceConnectionStatus,
  KnownPrivateEndpointConnectionProvisioningState,
  PrivateEndpointConnectionProvisioningState,
  KnownVersions,
  KnownVersions_1,
} from "./models/index.js";
export { ComputeClientOptionalParams } from "./api/index.js";
export {
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesGetOptionalParams,
} from "./computeDisk/api/diskAccesses/index.js";
export { DisksCreateOrUpdateOptionalParams, DisksGetOptionalParams } from "./computeDisk/api/disks/index.js";
export {
  RestorePointCollectionsCreateOrUpdateOptionalParams,
  RestorePointCollectionsGetOptionalParams,
} from "./compute/api/restorePointCollections/index.js";
export {
  VirtualMachinesCreateOrUpdateOptionalParams,
  VirtualMachinesGetOptionalParams,
} from "./compute/api/virtualMachines/index.js";
export {
  DiskAccessesOperations,
  DisksOperations,
} from "./computeDisk/classic/index.js";
export {
  RestorePointCollectionsOperations,
  VirtualMachinesOperations,
} from "./compute/classic/index.js";
export { AzureClouds, AzureSupportedClouds };
