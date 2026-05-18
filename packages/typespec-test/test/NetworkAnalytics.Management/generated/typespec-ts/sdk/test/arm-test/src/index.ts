// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureClouds, AzureSupportedClouds } from "./static-helpers/cloudSettingHelpers.js";
import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { NetworkAnalyticsApi } from "./networkAnalyticsApi.js";
export type { SimplePollerLike } from "./static-helpers/simplePollerHelpers.js";
export type { RestorePollerOptions } from "./restorePollerHelpers.js";
export { restorePoller } from "./restorePollerHelpers.js";
export type {
  Operation,
  OperationDisplay,
  Origin,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  DataProductsCatalog,
  DataProductsCatalogProperties,
  ProvisioningState,
  PublisherInformation,
  DataProductInformation,
  DataProductVersion,
  ProxyResource,
  Resource,
  SystemData,
  CreatedByType,
  DataType,
  DataTypeProperties,
  DataTypeState,
  DataTypeUpdate,
  DataTypeUpdateProperties,
  ContainerSaS,
  ContainerSasToken,
  DataProduct,
  DataProductProperties,
  ControlState,
  EncryptionKeyDetails,
  DataProductNetworkAcls,
  VirtualNetworkRule,
  IPRules,
  DefaultAction,
  ManagedResourceGroupConfiguration,
  ConsumptionEndpointsProperties,
  ManagedServiceIdentityV4,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  TrackedResource,
  DataProductUpdate,
  DataProductUpdateProperties,
  AccountSas,
  AccountSasToken,
  KeyVaultInfo,
  RoleAssignmentCommonProperties,
  DataProductUserRole,
  RoleAssignmentDetail,
  ListRoleAssignments,
  Client,
} from "./models/index.js";
export {
  KnownOrigin,
  KnownActionType,
  KnownProvisioningState,
  KnownCreatedByType,
  KnownDataTypeState,
  KnownControlState,
  KnownDefaultAction,
  KnownManagedServiceIdentityType,
  KnownDataProductUserRole,
  KnownVersions,
} from "./models/index.js";
export type { NetworkAnalyticsApiOptionalParams } from "./api/index.js";
export type {
  DataProductsOperations,
  DataProductsCatalogsOperations,
  DataTypesOperations,
  OperationsOperations,
} from "./classic/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { AzureClouds };
export type { AzureSupportedClouds };
export { RestError, isRestError } from "@azure/core-rest-pipeline";
