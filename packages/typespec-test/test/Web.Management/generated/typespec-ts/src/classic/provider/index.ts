// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import {
  getAvailableStacksOnPrem,
  getWebAppStacks,
  getWebAppStacksForLocation,
  getFunctionAppStacksForLocation,
  getFunctionAppStacks,
  getAvailableStacks,
  listOperations,
} from "../../api/provider/operations.js";
import {
  ProviderGetAvailableStacksOnPremOptionalParams,
  ProviderGetWebAppStacksOptionalParams,
  ProviderGetWebAppStacksForLocationOptionalParams,
  ProviderGetFunctionAppStacksForLocationOptionalParams,
  ProviderGetFunctionAppStacksOptionalParams,
  ProviderGetAvailableStacksOptionalParams,
  ProviderListOperationsOptionalParams,
} from "../../api/provider/options.js";
import {
  CsmOperationDescription,
  ApplicationStackResource,
  FunctionAppStack,
  WebAppStack,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Provider operations. */
export interface ProviderOperations {
  /** Description for Get available application frameworks and their versions */
  getAvailableStacksOnPrem: (
    options?: ProviderGetAvailableStacksOnPremOptionalParams,
  ) => PagedAsyncIterableIterator<ApplicationStackResource>;
  /** Description for Get available Web app frameworks and their versions */
  getWebAppStacks: (
    options?: ProviderGetWebAppStacksOptionalParams,
  ) => PagedAsyncIterableIterator<WebAppStack>;
  /** Description for Get available Web app frameworks and their versions for location */
  getWebAppStacksForLocation: (
    location: string,
    options?: ProviderGetWebAppStacksForLocationOptionalParams,
  ) => PagedAsyncIterableIterator<WebAppStack>;
  /** Description for Get available Function app frameworks and their versions for location */
  getFunctionAppStacksForLocation: (
    location: string,
    options?: ProviderGetFunctionAppStacksForLocationOptionalParams,
  ) => PagedAsyncIterableIterator<FunctionAppStack>;
  /** Description for Get available Function app frameworks and their versions */
  getFunctionAppStacks: (
    options?: ProviderGetFunctionAppStacksOptionalParams,
  ) => PagedAsyncIterableIterator<FunctionAppStack>;
  /** Description for Get available application frameworks and their versions */
  getAvailableStacks: (
    options?: ProviderGetAvailableStacksOptionalParams,
  ) => PagedAsyncIterableIterator<ApplicationStackResource>;
  /** Description for Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric definitions */
  listOperations: (
    options?: ProviderListOperationsOptionalParams,
  ) => PagedAsyncIterableIterator<CsmOperationDescription>;
}

function _getProvider(context: WebContext) {
  return {
    getAvailableStacksOnPrem: (options?: ProviderGetAvailableStacksOnPremOptionalParams) =>
      getAvailableStacksOnPrem(context, options),
    getWebAppStacks: (options?: ProviderGetWebAppStacksOptionalParams) =>
      getWebAppStacks(context, options),
    getWebAppStacksForLocation: (
      location: string,
      options?: ProviderGetWebAppStacksForLocationOptionalParams,
    ) => getWebAppStacksForLocation(context, location, options),
    getFunctionAppStacksForLocation: (
      location: string,
      options?: ProviderGetFunctionAppStacksForLocationOptionalParams,
    ) => getFunctionAppStacksForLocation(context, location, options),
    getFunctionAppStacks: (options?: ProviderGetFunctionAppStacksOptionalParams) =>
      getFunctionAppStacks(context, options),
    getAvailableStacks: (options?: ProviderGetAvailableStacksOptionalParams) =>
      getAvailableStacks(context, options),
    listOperations: (options?: ProviderListOperationsOptionalParams) =>
      listOperations(context, options),
  };
}

export function _getProviderOperations(context: WebContext): ProviderOperations {
  return {
    ..._getProvider(context),
  };
}
