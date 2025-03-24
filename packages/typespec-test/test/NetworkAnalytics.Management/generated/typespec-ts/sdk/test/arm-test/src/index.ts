// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { NetworkAnalyticsApi } from "./networkAnalyticsApi.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  ManagedServiceIdentityV4,
  KnownManagedServiceIdentityType,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  DataProductUpdate,
  DataProductUpdateProperties,
  ProxyResource,
  DataTypeUpdate,
  DataTypeUpdateProperties,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
} from "./models/index.js";
export {
  DataProduct,
  DataProductProperties,
  KnownProvisioningState,
  ProvisioningState,
  KnownControlState,
  ControlState,
  EncryptionKeyDetails,
  DataProductNetworkAcls,
  VirtualNetworkRule,
  IPRules,
  KnownDefaultAction,
  DefaultAction,
  ManagedResourceGroupConfiguration,
  ConsumptionEndpointsProperties,
  AccountSas,
  AccountSasToken,
  KeyVaultInfo,
  RoleAssignmentCommonProperties,
  KnownDataProductUserRole,
  DataProductUserRole,
  RoleAssignmentDetail,
  ListRoleAssignments,
  DataType,
  DataTypeProperties,
  KnownDataTypeState,
  DataTypeState,
  ContainerSaS,
  ContainerSasToken,
  DataProductsCatalog,
  DataProductsCatalogProperties,
  PublisherInformation,
  DataProductInformation,
  DataProductVersion,
  KnownVersions,
} from "./models/networkAnalytics/index.js";
export { NetworkAnalyticsApiOptionalParams } from "./api/index.js";
export {
  DataProductsListBySubscriptionOptionalParams,
  DataProductsListByResourceGroupOptionalParams,
  DataProductsListRolesAssignmentsOptionalParams,
  DataProductsRemoveUserRoleOptionalParams,
  DataProductsAddUserRoleOptionalParams,
  DataProductsRotateKeyOptionalParams,
  DataProductsGenerateStorageAccountSasTokenOptionalParams,
  DataProductsDeleteOptionalParams,
  DataProductsUpdateOptionalParams,
  DataProductsGetOptionalParams,
  DataProductsCreateOptionalParams,
} from "./api/dataProducts/index.js";
export {
  DataProductsCatalogsListBySubscriptionOptionalParams,
  DataProductsCatalogsListByResourceGroupOptionalParams,
  DataProductsCatalogsGetOptionalParams,
} from "./api/dataProductsCatalogs/index.js";
export {
  DataTypesListByDataProductOptionalParams,
  DataTypesGenerateStorageContainerSasTokenOptionalParams,
  DataTypesDeleteDataOptionalParams,
  DataTypesDeleteOptionalParams,
  DataTypesUpdateOptionalParams,
  DataTypesGetOptionalParams,
  DataTypesCreateOptionalParams,
} from "./api/dataTypes/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  DataProductsOperations,
  DataProductsCatalogsOperations,
  DataTypesOperations,
  OperationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
