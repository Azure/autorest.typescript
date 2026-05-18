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
  VirtualMachine,
  VirtualMachineProperties,
  RestorePointCollection,
  RestorePointCollectionProperties,
  ComputeActionGroup,
  ComputeActionGroupsProperties,
  VirtualMachineScaleSetExtension,
  VirtualMachineScaleSetExtensionProperties,
  SubResourceReadOnly,
} from "./models/compute/index.js";
export type {
  ComputeDiskActionGroup,
  ComputeDiskActionGroupsProperties,
  Disk,
  DiskProperties,
  DiskAccess,
  DiskAccessProperties,
} from "./models/computeDisk/index.js";
export type { ComputeClientOptionalParams } from "./api/index.js";
export type {
  ActionGroupsOperations,
  DiskAccessesOperations,
  DisksOperations,
  RestorePointCollectionsOperations,
  VirtualMachinesOperations,
  VirtualMachineScaleSetExtensionsOperations,
} from "./classic/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { AzureClouds };
export type { AzureSupportedClouds };
export { RestError, isRestError } from "@azure/core-rest-pipeline";
