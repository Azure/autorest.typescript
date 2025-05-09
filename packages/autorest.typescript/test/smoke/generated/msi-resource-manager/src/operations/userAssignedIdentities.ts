/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { UserAssignedIdentities } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ManagedServiceIdentityClient } from "../managedServiceIdentityClient.js";
import {
  Identity,
  UserAssignedIdentitiesListBySubscriptionNextOptionalParams,
  UserAssignedIdentitiesListBySubscriptionOptionalParams,
  UserAssignedIdentitiesListBySubscriptionResponse,
  UserAssignedIdentitiesListByResourceGroupNextOptionalParams,
  UserAssignedIdentitiesListByResourceGroupOptionalParams,
  UserAssignedIdentitiesListByResourceGroupResponse,
  UserAssignedIdentitiesCreateOrUpdateOptionalParams,
  UserAssignedIdentitiesCreateOrUpdateResponse,
  IdentityUpdate,
  UserAssignedIdentitiesUpdateOptionalParams,
  UserAssignedIdentitiesUpdateResponse,
  UserAssignedIdentitiesGetOptionalParams,
  UserAssignedIdentitiesGetResponse,
  UserAssignedIdentitiesDeleteOptionalParams,
  UserAssignedIdentitiesListBySubscriptionNextResponse,
  UserAssignedIdentitiesListByResourceGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing UserAssignedIdentities operations. */
export class UserAssignedIdentitiesImpl implements UserAssignedIdentities {
  private readonly client: ManagedServiceIdentityClient;

  /**
   * Initialize a new instance of the class UserAssignedIdentities class.
   * @param client Reference to the service client
   */
  constructor(client: ManagedServiceIdentityClient) {
    this.client = client;
  }

  /**
   * Lists all the userAssignedIdentities available under the specified subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: UserAssignedIdentitiesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Identity> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: UserAssignedIdentitiesListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Identity[]> {
    let result: UserAssignedIdentitiesListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: UserAssignedIdentitiesListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<Identity> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all the userAssignedIdentities available under the specified ResourceGroup.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: UserAssignedIdentitiesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Identity> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: UserAssignedIdentitiesListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Identity[]> {
    let result: UserAssignedIdentitiesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: UserAssignedIdentitiesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<Identity> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the userAssignedIdentities available under the specified subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: UserAssignedIdentitiesListBySubscriptionOptionalParams,
  ): Promise<UserAssignedIdentitiesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Lists all the userAssignedIdentities available under the specified ResourceGroup.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: UserAssignedIdentitiesListByResourceGroupOptionalParams,
  ): Promise<UserAssignedIdentitiesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Create or update an identity in the specified subscription and resource group.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param parameters Parameters to create or update the identity
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    parameters: Identity,
    options?: UserAssignedIdentitiesCreateOrUpdateOptionalParams,
  ): Promise<UserAssignedIdentitiesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Update an identity in the specified subscription and resource group.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param parameters Parameters to update the identity
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    parameters: IdentityUpdate,
    options?: UserAssignedIdentitiesUpdateOptionalParams,
  ): Promise<UserAssignedIdentitiesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Gets the identity.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: UserAssignedIdentitiesGetOptionalParams,
  ): Promise<UserAssignedIdentitiesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      getOperationSpec,
    );
  }

  /**
   * Deletes the identity.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    options?: UserAssignedIdentitiesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: UserAssignedIdentitiesListBySubscriptionNextOptionalParams,
  ): Promise<UserAssignedIdentitiesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: UserAssignedIdentitiesListByResourceGroupNextOptionalParams,
  ): Promise<UserAssignedIdentitiesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedIdentity/userAssignedIdentities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserAssignedIdentitiesListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserAssignedIdentitiesListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Identity,
    },
    201: {
      bodyMapper: Mappers.Identity,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Identity,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Identity,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserAssignedIdentitiesListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserAssignedIdentitiesListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
