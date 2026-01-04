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
} from "./api/diskAccesses/index.js";
export { DisksCreateOrUpdateOptionalParams, DisksGetOptionalParams } from "./api/disks/index.js";
export {
  RestorePointCollectionsCreateOrUpdateOptionalParams,
  RestorePointCollectionsGetOptionalParams,
} from "./api/restorePointCollections/index.js";
export {
  VirtualMachinesCreateOrUpdateOptionalParams,
  VirtualMachinesGetOptionalParams,
} from "./api/virtualMachines/index.js";
export {
  DiskAccessesOperations,
  DisksOperations,
  RestorePointCollectionsOperations,
  VirtualMachinesOperations,
} from "./classic/index.js";
export { AzureClouds, AzureSupportedClouds };
