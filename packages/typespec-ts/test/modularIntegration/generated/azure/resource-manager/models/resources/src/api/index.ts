// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
