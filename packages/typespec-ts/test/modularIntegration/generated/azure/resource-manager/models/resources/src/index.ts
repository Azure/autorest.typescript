// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { ResourcesClient } from "./resourcesClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  SingletonTrackedResource,
  SingletonTrackedResourceProperties,
  ProvisioningState,
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
  NestedProxyResource,
  NestedProxyResourceProperties,
  ProvisioningState_1,
  ProxyResource,
  TopLevelTrackedResource,
  TopLevelTrackedResourceProperties,
  ProvisioningState_2,
  NotificationDetails,
} from "./models/index.js";
export {
  TopLevelTrackedResourcesGetOptionalParams,
  TopLevelTrackedResourcesCreateOrReplaceOptionalParams,
  TopLevelTrackedResourcesUpdateOptionalParams,
  TopLevelTrackedResourcesDeleteOptionalParams,
  TopLevelTrackedResourcesListByResourceGroupOptionalParams,
  TopLevelTrackedResourcesListBySubscriptionOptionalParams,
  TopLevelTrackedResourcesActionSyncOptionalParams,
  NestedProxyResourcesGetOptionalParams,
  NestedProxyResourcesCreateOrReplaceOptionalParams,
  NestedProxyResourcesUpdateOptionalParams,
  NestedProxyResourcesDeleteOptionalParams,
  NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams,
  SingletonTrackedResourcesGetByResourceGroupOptionalParams,
  SingletonTrackedResourcesCreateOrUpdateOptionalParams,
  SingletonTrackedResourcesUpdateOptionalParams,
  SingletonTrackedResourcesListByResourceGroupOptionalParams,
  ResourcesClientOptionalParams,
} from "./api/index.js";
export {
  NestedProxyResourcesOperations,
  SingletonTrackedResourcesOperations,
  TopLevelTrackedResourcesOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
