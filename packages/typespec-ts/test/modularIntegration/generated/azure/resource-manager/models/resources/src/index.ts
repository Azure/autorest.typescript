// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  ResourcesClient,
  ResourcesClientOptionalParams,
} from "./resourcesClient.js";
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
  TrackedResource,
  TopLevelTrackedResource,
  TopLevelTrackedResourceProperties,
  Versions,
  ProvisioningState,
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
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./models/index.js";
export {
  NestedProxyResourcesOperations,
  TopLevelTrackedResourcesOperations,
} from "./classic/index.js";
