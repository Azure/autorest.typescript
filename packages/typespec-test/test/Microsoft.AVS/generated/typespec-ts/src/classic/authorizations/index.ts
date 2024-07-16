// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { ExpressRouteAuthorization } from "../../models/models.js";
import {
  listByPrivateCloud,
  get,
  createOrUpdate,
  $delete,
} from "../../api/authorizations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AuthorizationsListByPrivateCloudOptionalParams,
  AuthorizationsGetOptionalParams,
  AuthorizationsCreateOrUpdateOptionalParams,
  AuthorizationsDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a Authorizations operations. */
export interface AuthorizationsOperations {
  /** List ExpressRouteAuthorization resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: AuthorizationsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<ExpressRouteAuthorization>;
  /** Get a ExpressRouteAuthorization */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsGetOptionalParams,
  ) => Promise<ExpressRouteAuthorization>;
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
  /** Delete a ExpressRouteAuthorization */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getAuthorizations(context: AVSContext, subscriptionId: string) {
  return {
    listByPrivateCloud: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: AuthorizationsListByPrivateCloudOptionalParams,
    ) =>
      listByPrivateCloud(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      authorizationName: string,
      options?: AuthorizationsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
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
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        authorizationName,
        authorization,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      authorizationName: string,
      options?: AuthorizationsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        authorizationName,
        options,
      ),
  };
}

export function getAuthorizationsOperations(
  context: AVSContext,
  subscriptionId: string,
): AuthorizationsOperations {
  return {
    ...getAuthorizations(context, subscriptionId),
  };
}
