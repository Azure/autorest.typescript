// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureClouds,
  AzureSupportedClouds,
} from "./static-helpers/cloudSettingHelpers.js";
import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { ManagementClient } from "./managementClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResult,
  Reason,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  TenantBackfillStatusResult,
  Status,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  ManagementGroup,
  ManagementGroupProperties,
  ManagementGroupDetails,
  ParentGroupInfo,
  ManagementGroupPathElement,
  ManagementGroupChildInfo,
  ManagementGroupChildType,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  CreateManagementGroupRequest,
  CreateManagementGroupProperties,
  CreateManagementGroupDetails,
  CreateParentGroupInfo,
  CreateManagementGroupChildInfo,
  ManagementGroupInfoProperties,
  PatchManagementGroupRequest,
  DescendantInfo,
  DescendantInfoProperties,
  DescendantParentGroupInfo,
  ManagementGroupInfo,
  HierarchySettingsInfo,
  HierarchySettingsProperties,
  HierarchySettings,
  CreateOrUpdateSettingsRequest,
  CreateOrUpdateSettingsProperties,
  SubscriptionUnderManagementGroup,
  SubscriptionUnderManagementGroupProperties,
  EntityInfo,
  EntityInfoProperties,
  EntityParentGroupInfo,
  Permissions,
  KnownManagementGroupExpandType,
  ManagementGroupExpandType,
  KnownEntitySearchType,
  EntitySearchType,
  KnownEntityViewParameterType,
  EntityViewParameterType,
  KnownVersions,
} from "./models/index.js";
export {
  ManagementClientOptionalParams,
  TenantBackfillStatusOptionalParams,
  StartTenantBackfillOptionalParams,
  CheckNameAvailabilityOptionalParams,
} from "./api/index.js";
export { EntitiesListOptionalParams } from "./api/entities/index.js";
export {
  HierarchySettingsDeleteOptionalParams,
  HierarchySettingsUpdateOptionalParams,
  HierarchySettingsCreateOrUpdateOptionalParams,
  HierarchySettingsGetOptionalParams,
  HierarchySettingsListOptionalParams,
} from "./api/hierarchySettings/index.js";
export {
  ManagementGroupsListOptionalParams,
  ManagementGroupsGetDescendantsOptionalParams,
  ManagementGroupsDeleteOptionalParams,
  ManagementGroupsUpdateOptionalParams,
  ManagementGroupsCreateOrUpdateOptionalParams,
  ManagementGroupsGetOptionalParams,
} from "./api/managementGroups/index.js";
export {
  ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOptionalParams,
  ManagementGroupSubscriptionsDeleteOptionalParams,
  ManagementGroupSubscriptionsCreateOptionalParams,
  ManagementGroupSubscriptionsGetSubscriptionOptionalParams,
} from "./api/managementGroupSubscriptions/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  EntitiesOperations,
  HierarchySettingsOperations,
  ManagementGroupsOperations,
  ManagementGroupSubscriptionsOperations,
  OperationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { AzureClouds, AzureSupportedClouds };
