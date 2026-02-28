// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureClouds, AzureSupportedClouds } from "./static-helpers/cloudSettingHelpers.js";
import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { ComputeClient } from "./computeClient.js";
export type { RestorePollerOptions } from "./restorePollerHelpers.js";
export { restorePoller } from "./restorePollerHelpers.js";
export type {
  ResourceProvisioningState,
  TrackedResource,
  Resource,
  SystemData,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  PrivateEndpointConnection,
  PrivateEndpointConnectionProperties,
  PrivateEndpoint,
  PrivateLinkServiceConnectionState,
  PrivateEndpointServiceConnectionStatus,
  PrivateEndpointConnectionProvisioningState,
} from "./models/index.js";
export {
  KnownResourceProvisioningState,
  KnownCreatedByType,
  KnownPrivateEndpointServiceConnectionStatus,
  KnownPrivateEndpointConnectionProvisioningState,
} from "./models/index.js";
export type {
  ComputeVirtualMachine,
  ComputeVirtualMachineProperties,
  ComputeRestorePointCollection,
  ComputeRestorePointCollectionProperties,
  ComputeActionGroup,
  ComputeActionGroupsProperties,
} from "./models/compute/index.js";
export type {
  ComputeDiskActionGroup,
  ComputeDiskActionGroupsProperties,
  ComputeDiskDisk,
  ComputeDiskDiskProperties,
  ComputeDiskDiskAccess,
  ComputeDiskDiskAccessProperties,
} from "./models/computeDisk/index.js";
export type { ComputeClientOptionalParams } from "./api/index.js";
export type {
  ActionGroupsListOptionalParams,
  ActionGroupsGetOptionalParams,
} from "./api/actionGroups/index.js";
export type {
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesGetOptionalParams,
} from "./api/diskAccesses/index.js";
export type {
  DisksCreateOrUpdateOptionalParams,
  DisksGetOptionalParams,
} from "./api/disks/index.js";
export type {
  RestorePointCollectionsCreateOrUpdateOptionalParams,
  RestorePointCollectionsGetOptionalParams,
} from "./api/restorePointCollections/index.js";
export type {
  VirtualMachinesCreateOrUpdateOptionalParams,
  VirtualMachinesGetOptionalParams,
} from "./api/virtualMachines/index.js";
export type {
  ActionGroupsOperations,
  DiskAccessesOperations,
  DisksOperations,
  RestorePointCollectionsOperations,
  VirtualMachinesOperations,
} from "./classic/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { AzureClouds };
export type { AzureSupportedClouds };
