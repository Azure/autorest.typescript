// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import { listByNetworkFunction, get } from "../../api/components/operations.js";
import {
  ComponentsListByNetworkFunctionOptionalParams,
  ComponentsGetOptionalParams,
} from "../../api/components/options.js";
import { Component } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Components operations. */
export interface ComponentsOperations {
  /** Lists all the component resources in a network function. */
  listByNetworkFunction: (
    resourceGroupName: string,
    networkFunctionName: string,
    options?: ComponentsListByNetworkFunctionOptionalParams,
  ) => PagedAsyncIterableIterator<Component>;
  /** Gets information about the specified application instance resource. */
  get: (
    resourceGroupName: string,
    networkFunctionName: string,
    componentName: string,
    options?: ComponentsGetOptionalParams,
  ) => Promise<Component>;
}

function _getComponents(context: HybridNetworkManagementContext) {
  return {
    listByNetworkFunction: (
      resourceGroupName: string,
      networkFunctionName: string,
      options?: ComponentsListByNetworkFunctionOptionalParams,
    ) => listByNetworkFunction(context, resourceGroupName, networkFunctionName, options),
    get: (
      resourceGroupName: string,
      networkFunctionName: string,
      componentName: string,
      options?: ComponentsGetOptionalParams,
    ) => get(context, resourceGroupName, networkFunctionName, componentName, options),
  };
}

export function _getComponentsOperations(
  context: HybridNetworkManagementContext,
): ComponentsOperations {
  return {
    ..._getComponents(context),
  };
}
