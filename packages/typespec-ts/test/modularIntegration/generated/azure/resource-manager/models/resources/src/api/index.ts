// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
} from "./options.js";
export {
  createResources,
  ResourcesContext,
  ResourcesClientOptionalParams,
} from "./resourcesContext.js";
export {
  nestedProxyResourcesGet,
  nestedProxyResourcesCreateOrReplace,
  nestedProxyResourcesUpdate,
  nestedProxyResourcesDelete,
  nestedProxyResourcesListByTopLevelTrackedResource,
} from "./nestedProxyResources/index.js";
export {
  singletonTrackedResourcesGetByResourceGroup,
  singletonTrackedResourcesCreateOrUpdate,
  singletonTrackedResourcesUpdate,
  singletonTrackedResourcesListByResourceGroup,
} from "./singletonTrackedResources/index.js";
export {
  topLevelTrackedResourcesGet,
  topLevelTrackedResourcesCreateOrReplace,
  topLevelTrackedResourcesUpdate,
  topLevelTrackedResourcesDelete,
  topLevelTrackedResourcesListByResourceGroup,
  topLevelTrackedResourcesListBySubscription,
  topLevelTrackedResourcesActionSync,
} from "./topLevelTrackedResources/index.js";
