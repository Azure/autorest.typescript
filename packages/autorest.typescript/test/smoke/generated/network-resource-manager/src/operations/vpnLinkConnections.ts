/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { VpnLinkConnections } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetworkManagementClient } from "../networkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  VpnSiteLinkConnection,
  VpnLinkConnectionsListByVpnConnectionNextOptionalParams,
  VpnLinkConnectionsListByVpnConnectionOptionalParams,
  VpnLinkConnectionsListByVpnConnectionResponse,
  VpnLinkConnectionsResetConnectionOptionalParams,
  VpnLinkConnectionsGetIkeSasOptionalParams,
  VpnLinkConnectionsGetIkeSasResponse,
  VpnLinkConnectionsListByVpnConnectionNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing VpnLinkConnections operations. */
export class VpnLinkConnectionsImpl implements VpnLinkConnections {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VpnLinkConnections class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
   * @param resourceGroupName The resource group name of the vpn gateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param options The options parameters.
   */
  public listByVpnConnection(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    options?: VpnLinkConnectionsListByVpnConnectionOptionalParams,
  ): PagedAsyncIterableIterator<VpnSiteLinkConnection> {
    const iter = this.listByVpnConnectionPagingAll(
      resourceGroupName,
      gatewayName,
      connectionName,
      options,
    );
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
        return this.listByVpnConnectionPagingPage(
          resourceGroupName,
          gatewayName,
          connectionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByVpnConnectionPagingPage(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    options?: VpnLinkConnectionsListByVpnConnectionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<VpnSiteLinkConnection[]> {
    let result: VpnLinkConnectionsListByVpnConnectionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByVpnConnection(
        resourceGroupName,
        gatewayName,
        connectionName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByVpnConnectionNext(
        resourceGroupName,
        gatewayName,
        connectionName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByVpnConnectionPagingAll(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    options?: VpnLinkConnectionsListByVpnConnectionOptionalParams,
  ): AsyncIterableIterator<VpnSiteLinkConnection> {
    for await (const page of this.listByVpnConnectionPagingPage(
      resourceGroupName,
      gatewayName,
      connectionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Resets the VpnLink connection specified.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param linkConnectionName The name of the vpn link connection.
   * @param options The options parameters.
   */
  async beginResetConnection(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    linkConnectionName: string,
    options?: VpnLinkConnectionsResetConnectionOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        gatewayName,
        connectionName,
        linkConnectionName,
        options,
      },
      spec: resetConnectionOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Resets the VpnLink connection specified.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param linkConnectionName The name of the vpn link connection.
   * @param options The options parameters.
   */
  async beginResetConnectionAndWait(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    linkConnectionName: string,
    options?: VpnLinkConnectionsResetConnectionOptionalParams,
  ): Promise<void> {
    const poller = await this.beginResetConnection(
      resourceGroupName,
      gatewayName,
      connectionName,
      linkConnectionName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists IKE Security Associations for Vpn Site Link Connection in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param linkConnectionName The name of the vpn link connection.
   * @param options The options parameters.
   */
  async beginGetIkeSas(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    linkConnectionName: string,
    options?: VpnLinkConnectionsGetIkeSasOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VpnLinkConnectionsGetIkeSasResponse>,
      VpnLinkConnectionsGetIkeSasResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VpnLinkConnectionsGetIkeSasResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        gatewayName,
        connectionName,
        linkConnectionName,
        options,
      },
      spec: getIkeSasOperationSpec,
    });
    const poller = await createHttpPoller<
      VpnLinkConnectionsGetIkeSasResponse,
      OperationState<VpnLinkConnectionsGetIkeSasResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Lists IKE Security Associations for Vpn Site Link Connection in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param linkConnectionName The name of the vpn link connection.
   * @param options The options parameters.
   */
  async beginGetIkeSasAndWait(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    linkConnectionName: string,
    options?: VpnLinkConnectionsGetIkeSasOptionalParams,
  ): Promise<VpnLinkConnectionsGetIkeSasResponse> {
    const poller = await this.beginGetIkeSas(
      resourceGroupName,
      gatewayName,
      connectionName,
      linkConnectionName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
   * @param resourceGroupName The resource group name of the vpn gateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param options The options parameters.
   */
  private _listByVpnConnection(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    options?: VpnLinkConnectionsListByVpnConnectionOptionalParams,
  ): Promise<VpnLinkConnectionsListByVpnConnectionResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, connectionName, options },
      listByVpnConnectionOperationSpec,
    );
  }

  /**
   * ListByVpnConnectionNext
   * @param resourceGroupName The resource group name of the vpn gateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param nextLink The nextLink from the previous successful call to the ListByVpnConnection method.
   * @param options The options parameters.
   */
  private _listByVpnConnectionNext(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    nextLink: string,
    options?: VpnLinkConnectionsListByVpnConnectionNextOptionalParams,
  ): Promise<VpnLinkConnectionsListByVpnConnectionNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, connectionName, nextLink, options },
      listByVpnConnectionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const resetConnectionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/vpnConnections/{connectionName}/vpnLinkConnections/{linkConnectionName}/resetconnection",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectionName,
    Parameters.gatewayName,
    Parameters.linkConnectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getIkeSasOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/vpnConnections/{connectionName}/vpnLinkConnections/{linkConnectionName}/getikesas",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } },
    },
    201: {
      bodyMapper: { type: { name: "String" } },
    },
    202: {
      bodyMapper: { type: { name: "String" } },
    },
    204: {
      bodyMapper: { type: { name: "String" } },
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectionName,
    Parameters.gatewayName,
    Parameters.linkConnectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByVpnConnectionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/vpnConnections/{connectionName}/vpnLinkConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSiteLinkConnectionsResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectionName,
    Parameters.gatewayName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByVpnConnectionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSiteLinkConnectionsResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.connectionName,
    Parameters.gatewayName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
