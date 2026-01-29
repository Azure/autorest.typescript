// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext } from "../../api/webSiteManagementContext.js";
import {
  getAvailableStacksOnPrem,
  getWebAppStacks,
  getWebAppStacksForLocation,
  getFunctionAppStacksForLocation,
  getFunctionAppStacks,
  getAvailableStacks,
} from "../../api/providerOperationGroup/operations.js";
import {
  ProviderOperationGroupGetAvailableStacksOnPremOptionalParams,
  ProviderOperationGroupGetWebAppStacksOptionalParams,
  ProviderOperationGroupGetWebAppStacksForLocationOptionalParams,
  ProviderOperationGroupGetFunctionAppStacksForLocationOptionalParams,
  ProviderOperationGroupGetFunctionAppStacksOptionalParams,
  ProviderOperationGroupGetAvailableStacksOptionalParams,
} from "../../api/providerOperationGroup/options.js";
import { ApplicationStackResource, FunctionAppStack, WebAppStack } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ProviderOperationGroup operations. */
export interface ProviderOperationGroupOperations {
  /** Description for Get available application frameworks and their versions */
  getAvailableStacksOnPrem: (
    options?: ProviderOperationGroupGetAvailableStacksOnPremOptionalParams,
  ) => PagedAsyncIterableIterator<ApplicationStackResource>;
  /** Description for Get available Web app frameworks and their versions */
  getWebAppStacks: (
    options?: ProviderOperationGroupGetWebAppStacksOptionalParams,
  ) => PagedAsyncIterableIterator<WebAppStack>;
  /** Description for Get available Web app frameworks and their versions for location */
  getWebAppStacksForLocation: (
    location: string,
    options?: ProviderOperationGroupGetWebAppStacksForLocationOptionalParams,
  ) => PagedAsyncIterableIterator<WebAppStack>;
  /** Description for Get available Function app frameworks and their versions for location */
  getFunctionAppStacksForLocation: (
    location: string,
    options?: ProviderOperationGroupGetFunctionAppStacksForLocationOptionalParams,
  ) => PagedAsyncIterableIterator<FunctionAppStack>;
  /** Description for Get available Function app frameworks and their versions */
  getFunctionAppStacks: (
    options?: ProviderOperationGroupGetFunctionAppStacksOptionalParams,
  ) => PagedAsyncIterableIterator<FunctionAppStack>;
  /** Description for Get available application frameworks and their versions */
  getAvailableStacks: (
    options?: ProviderOperationGroupGetAvailableStacksOptionalParams,
  ) => PagedAsyncIterableIterator<ApplicationStackResource>;
}

function _getProviderOperationGroup(context: WebSiteManagementContext) {
  return {
    getAvailableStacksOnPrem: (
      options?: ProviderOperationGroupGetAvailableStacksOnPremOptionalParams,
    ) => getAvailableStacksOnPrem(context, options),
    getWebAppStacks: (options?: ProviderOperationGroupGetWebAppStacksOptionalParams) =>
      getWebAppStacks(context, options),
    getWebAppStacksForLocation: (
      location: string,
      options?: ProviderOperationGroupGetWebAppStacksForLocationOptionalParams,
    ) => getWebAppStacksForLocation(context, location, options),
    getFunctionAppStacksForLocation: (
      location: string,
      options?: ProviderOperationGroupGetFunctionAppStacksForLocationOptionalParams,
    ) => getFunctionAppStacksForLocation(context, location, options),
    getFunctionAppStacks: (options?: ProviderOperationGroupGetFunctionAppStacksOptionalParams) =>
      getFunctionAppStacks(context, options),
    getAvailableStacks: (options?: ProviderOperationGroupGetAvailableStacksOptionalParams) =>
      getAvailableStacks(context, options),
  };
}

export function _getProviderOperationGroupOperations(
  context: WebSiteManagementContext,
): ProviderOperationGroupOperations {
  return {
    ..._getProviderOperationGroup(context),
  };
}
