/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { LoadBalancerBackendAddressPools } from "../operationsInterfaces/index.js";
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
  BackendAddressPool,
  LoadBalancerBackendAddressPoolsListNextOptionalParams,
  LoadBalancerBackendAddressPoolsListOptionalParams,
  LoadBalancerBackendAddressPoolsListResponse,
  LoadBalancerBackendAddressPoolsGetOptionalParams,
  LoadBalancerBackendAddressPoolsGetResponse,
  LoadBalancerBackendAddressPoolsCreateOrUpdateOptionalParams,
  LoadBalancerBackendAddressPoolsCreateOrUpdateResponse,
  LoadBalancerBackendAddressPoolsDeleteOptionalParams,
  LoadBalancerBackendAddressPoolsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing LoadBalancerBackendAddressPools operations. */
export class LoadBalancerBackendAddressPoolsImpl
  implements LoadBalancerBackendAddressPools
{
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class LoadBalancerBackendAddressPools class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the load balancer backed address pools.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancerBackendAddressPoolsListOptionalParams,
  ): PagedAsyncIterableIterator<BackendAddressPool> {
    const iter = this.listPagingAll(
      resourceGroupName,
      loadBalancerName,
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
        return this.listPagingPage(
          resourceGroupName,
          loadBalancerName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancerBackendAddressPoolsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BackendAddressPool[]> {
    let result: LoadBalancerBackendAddressPoolsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, loadBalancerName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        loadBalancerName,
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
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancerBackendAddressPoolsListOptionalParams,
  ): AsyncIterableIterator<BackendAddressPool> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      loadBalancerName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the load balancer backed address pools.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancerBackendAddressPoolsListOptionalParams,
  ): Promise<LoadBalancerBackendAddressPoolsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, loadBalancerName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadBalancerName: string,
    backendAddressPoolName: string,
    options?: LoadBalancerBackendAddressPoolsGetOptionalParams,
  ): Promise<LoadBalancerBackendAddressPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, loadBalancerName, backendAddressPoolName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param parameters Parameters supplied to the create or update load balancer backend address pool
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    loadBalancerName: string,
    backendAddressPoolName: string,
    parameters: BackendAddressPool,
    options?: LoadBalancerBackendAddressPoolsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LoadBalancerBackendAddressPoolsCreateOrUpdateResponse>,
      LoadBalancerBackendAddressPoolsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<LoadBalancerBackendAddressPoolsCreateOrUpdateResponse> => {
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
        loadBalancerName,
        backendAddressPoolName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      LoadBalancerBackendAddressPoolsCreateOrUpdateResponse,
      OperationState<LoadBalancerBackendAddressPoolsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param parameters Parameters supplied to the create or update load balancer backend address pool
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    loadBalancerName: string,
    backendAddressPoolName: string,
    parameters: BackendAddressPool,
    options?: LoadBalancerBackendAddressPoolsCreateOrUpdateOptionalParams,
  ): Promise<LoadBalancerBackendAddressPoolsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      loadBalancerName,
      backendAddressPoolName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the specified load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    loadBalancerName: string,
    backendAddressPoolName: string,
    options?: LoadBalancerBackendAddressPoolsDeleteOptionalParams,
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
        loadBalancerName,
        backendAddressPoolName,
        options,
      },
      spec: deleteOperationSpec,
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
   * Deletes the specified load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    loadBalancerName: string,
    backendAddressPoolName: string,
    options?: LoadBalancerBackendAddressPoolsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      loadBalancerName,
      backendAddressPoolName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    loadBalancerName: string,
    nextLink: string,
    options?: LoadBalancerBackendAddressPoolsListNextOptionalParams,
  ): Promise<LoadBalancerBackendAddressPoolsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, loadBalancerName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancerBackendAddressPoolListResult,
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
    Parameters.loadBalancerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackendAddressPool,
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
    Parameters.loadBalancerName,
    Parameters.backendAddressPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BackendAddressPool,
    },
    201: {
      bodyMapper: Mappers.BackendAddressPool,
    },
    202: {
      bodyMapper: Mappers.BackendAddressPool,
    },
    204: {
      bodyMapper: Mappers.BackendAddressPool,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters28,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.loadBalancerName,
    Parameters.backendAddressPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.loadBalancerName,
    Parameters.backendAddressPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancerBackendAddressPoolListResult,
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
    Parameters.loadBalancerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
