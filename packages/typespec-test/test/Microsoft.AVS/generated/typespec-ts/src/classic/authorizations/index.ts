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

export interface AuthorizationsOperations {
  listByPrivateCloud: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: AuthorizationsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<ExpressRouteAuthorization>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsGetOptionalParams,
  ) => Promise<ExpressRouteAuthorization>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    authorization: ExpressRouteAuthorization,
    options?: AuthorizationsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ExpressRouteAuthorization>,
    ExpressRouteAuthorization
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getAuthorizations(context: AVSContext) {
  return {
    listByPrivateCloud: (
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
): AuthorizationsOperations {
  return {
    ...getAuthorizations(context),
  };
}
