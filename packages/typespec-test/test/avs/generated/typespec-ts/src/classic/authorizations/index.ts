// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  authorizationsDelete,
  authorizationsCreateOrUpdate,
  authorizationsGet,
  authorizationsList,
} from "../../api/authorizations/index.js";
import { ExpressRouteAuthorization } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AuthorizationsDeleteOptionalParams,
  AuthorizationsCreateOrUpdateOptionalParams,
  AuthorizationsGetOptionalParams,
  AuthorizationsListOptionalParams,
} from "../../api/options.js";

/** Interface representing a Authorizations operations. */
export interface AuthorizationsOperations {
  /** Delete a ExpressRouteAuthorization */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a ExpressRouteAuthorization */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    authorization: ExpressRouteAuthorization,
    options?: AuthorizationsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ExpressRouteAuthorization>,
    ExpressRouteAuthorization
  >;
  /** Get a ExpressRouteAuthorization */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsGetOptionalParams,
  ) => Promise<ExpressRouteAuthorization>;
  /** List ExpressRouteAuthorization resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: AuthorizationsListOptionalParams,
  ) => PagedAsyncIterableIterator<ExpressRouteAuthorization>;
}

function _getAuthorizations(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      authorizationName: string,
      options?: AuthorizationsDeleteOptionalParams,
    ) =>
      authorizationsDelete(
        context,
        resourceGroupName,
        privateCloudName,
        authorizationName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      authorizationName: string,
      authorization: ExpressRouteAuthorization,
      options?: AuthorizationsCreateOrUpdateOptionalParams,
    ) =>
      authorizationsCreateOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        authorizationName,
        authorization,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      authorizationName: string,
      options?: AuthorizationsGetOptionalParams,
    ) =>
      authorizationsGet(
        context,
        resourceGroupName,
        privateCloudName,
        authorizationName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: AuthorizationsListOptionalParams,
    ) =>
      authorizationsList(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getAuthorizationsOperations(
  context: AzureVMwareSolutionAPIContext,
): AuthorizationsOperations {
  return {
    ..._getAuthorizations(context),
  };
}
