// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { ResourcesClient } from "./resourcesClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ProxyResource,
  NestedProxyResource,
  NestedProxyResourceProperties,
  KnownResourceProvisioningState,
  ResourceProvisioningState,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  NestedProxyResourceUpdate,
  NestedProxyResourceUpdateProperties,
  TrackedResource,
  TopLevelTrackedResource,
  TopLevelTrackedResourceProperties,
  TopLevelTrackedResourceUpdate,
  TopLevelTrackedResourceUpdateProperties,
  Versions,
  ProvisioningState,
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./models/index.js";
export {
  TopLevelTrackedResourcesGetOptionalParams,
  TopLevelTrackedResourcesCreateOrReplaceOptionalParams,
  TopLevelTrackedResourcesUpdateOptionalParams,
  TopLevelTrackedResourcesDeleteOptionalParams,
  TopLevelTrackedResourcesListByResourceGroupOptionalParams,
  TopLevelTrackedResourcesListBySubscriptionOptionalParams,
  NestedProxyResourcesGetOptionalParams,
  NestedProxyResourcesCreateOrReplaceOptionalParams,
  NestedProxyResourcesUpdateOptionalParams,
  NestedProxyResourcesDeleteOptionalParams,
  NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams,
  ResourcesClientOptionalParams,
} from "./api/index.js";
export {
  NestedProxyResourcesOperations,
  TopLevelTrackedResourcesOperations,
} from "./classic/index.js";
