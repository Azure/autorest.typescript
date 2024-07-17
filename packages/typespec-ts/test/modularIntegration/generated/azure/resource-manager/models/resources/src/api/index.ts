// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
} from "./options.js";
export {
  createResources,
  ResourcesClientOptionalParams,
  ResourcesContext,
} from "./resourcesContext.js";
export {
  nestedProxyResourcesGet,
  nestedProxyResourcesCreateOrReplace,
  nestedProxyResourcesUpdate,
  nestedProxyResourcesDelete,
  nestedProxyResourcesListByTopLevelTrackedResource,
} from "./nestedProxyResources/index.js";
export {
  topLevelTrackedResourcesGet,
  topLevelTrackedResourcesCreateOrReplace,
  topLevelTrackedResourcesUpdate,
  topLevelTrackedResourcesDelete,
  topLevelTrackedResourcesListByResourceGroup,
  topLevelTrackedResourcesListBySubscription,
} from "./topLevelTrackedResources/index.js";
