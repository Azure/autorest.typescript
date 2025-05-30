/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ManagementGroupNetworkManagerConnections } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetworkManagementClient } from "../networkManagementClient.js";
import {
  NetworkManagerConnection,
  ManagementGroupNetworkManagerConnectionsListNextOptionalParams,
  ManagementGroupNetworkManagerConnectionsListOptionalParams,
  ManagementGroupNetworkManagerConnectionsListResponse,
  ManagementGroupNetworkManagerConnectionsCreateOrUpdateOptionalParams,
  ManagementGroupNetworkManagerConnectionsCreateOrUpdateResponse,
  ManagementGroupNetworkManagerConnectionsGetOptionalParams,
  ManagementGroupNetworkManagerConnectionsGetResponse,
  ManagementGroupNetworkManagerConnectionsDeleteOptionalParams,
  ManagementGroupNetworkManagerConnectionsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagementGroupNetworkManagerConnections operations. */
export class ManagementGroupNetworkManagerConnectionsImpl
  implements ManagementGroupNetworkManagerConnections
{
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ManagementGroupNetworkManagerConnections class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * List all network manager connections created by this management group.
   * @param managementGroupId The management group Id which uniquely identify the Microsoft Azure
   *                          management group.
   * @param options The options parameters.
   */
  public list(
    managementGroupId: string,
    options?: ManagementGroupNetworkManagerConnectionsListOptionalParams,
  ): PagedAsyncIterableIterator<NetworkManagerConnection> {
    const iter = this.listPagingAll(managementGroupId, options);
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
        return this.listPagingPage(managementGroupId, options, settings);
      },
    };
  }

  private async *listPagingPage(
    managementGroupId: string,
    options?: ManagementGroupNetworkManagerConnectionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NetworkManagerConnection[]> {
    let result: ManagementGroupNetworkManagerConnectionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(managementGroupId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        managementGroupId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    managementGroupId: string,
    options?: ManagementGroupNetworkManagerConnectionsListOptionalParams,
  ): AsyncIterableIterator<NetworkManagerConnection> {
    for await (const page of this.listPagingPage(managementGroupId, options)) {
      yield* page;
    }
  }

  /**
   * Create a network manager connection on this management group.
   * @param managementGroupId The management group Id which uniquely identify the Microsoft Azure
   *                          management group.
   * @param networkManagerConnectionName Name for the network manager connection.
   * @param parameters Network manager connection to be created/updated.
   * @param options The options parameters.
   */
  createOrUpdate(
    managementGroupId: string,
    networkManagerConnectionName: string,
    parameters: NetworkManagerConnection,
    options?: ManagementGroupNetworkManagerConnectionsCreateOrUpdateOptionalParams,
  ): Promise<ManagementGroupNetworkManagerConnectionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, networkManagerConnectionName, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Get a specified connection created by this management group.
   * @param managementGroupId The management group Id which uniquely identify the Microsoft Azure
   *                          management group.
   * @param networkManagerConnectionName Name for the network manager connection.
   * @param options The options parameters.
   */
  get(
    managementGroupId: string,
    networkManagerConnectionName: string,
    options?: ManagementGroupNetworkManagerConnectionsGetOptionalParams,
  ): Promise<ManagementGroupNetworkManagerConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, networkManagerConnectionName, options },
      getOperationSpec,
    );
  }

  /**
   * Delete specified pending connection created by this management group.
   * @param managementGroupId The management group Id which uniquely identify the Microsoft Azure
   *                          management group.
   * @param networkManagerConnectionName Name for the network manager connection.
   * @param options The options parameters.
   */
  delete(
    managementGroupId: string,
    networkManagerConnectionName: string,
    options?: ManagementGroupNetworkManagerConnectionsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { managementGroupId, networkManagerConnectionName, options },
      deleteOperationSpec,
    );
  }

  /**
   * List all network manager connections created by this management group.
   * @param managementGroupId The management group Id which uniquely identify the Microsoft Azure
   *                          management group.
   * @param options The options parameters.
   */
  private _list(
    managementGroupId: string,
    options?: ManagementGroupNetworkManagerConnectionsListOptionalParams,
  ): Promise<ManagementGroupNetworkManagerConnectionsListResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param managementGroupId The management group Id which uniquely identify the Microsoft Azure
   *                          management group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    managementGroupId: string,
    nextLink: string,
    options?: ManagementGroupNetworkManagerConnectionsListNextOptionalParams,
  ): Promise<ManagementGroupNetworkManagerConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Network/networkManagerConnections/{networkManagerConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkManagerConnection,
    },
    201: {
      bodyMapper: Mappers.NetworkManagerConnection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters34,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.networkManagerConnectionName,
    Parameters.managementGroupId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Network/networkManagerConnections/{networkManagerConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkManagerConnection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.networkManagerConnectionName,
    Parameters.managementGroupId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Network/networkManagerConnections/{networkManagerConnectionName}",
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
    Parameters.networkManagerConnectionName,
    Parameters.managementGroupId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Network/networkManagerConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkManagerConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skipToken,
  ],
  urlParameters: [Parameters.$host, Parameters.managementGroupId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkManagerConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.managementGroupId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
