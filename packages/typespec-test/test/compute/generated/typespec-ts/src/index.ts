// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureClouds, AzureSupportedClouds } from "./static-helpers/cloudSettingHelpers.js";
import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

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
} from "./models/compute/index.js";
export {
  ComputeDiskDisk,
  ComputeDiskDiskProperties,
  ComputeDiskDiskAccess,
  ComputeDiskDiskAccessProperties,
  ComputeDiskActionGroup,
  ComputeDiskActionGroupsProperties,
} from "./models/computeDisk/index.js";
export { ComputeClientOptionalParams } from "./api/index.js";
export {
  ActionGroupsListOptionalParams,
  ActionGroupsGetOptionalParams,
} from "./api/actionGroups/index.js";
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
  ActionGroupsOperations,
  DiskAccessesOperations,
  DisksOperations,
  RestorePointCollectionsOperations,
  VirtualMachinesOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { AzureClouds, AzureSupportedClouds };
