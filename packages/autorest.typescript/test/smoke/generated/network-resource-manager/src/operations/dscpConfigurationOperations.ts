/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { DscpConfigurationOperations } from "../operationsInterfaces/index.js";
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
  DscpConfiguration,
  DscpConfigurationListNextOptionalParams,
  DscpConfigurationListOptionalParams,
  DscpConfigurationListResponse,
  DscpConfigurationListAllNextOptionalParams,
  DscpConfigurationListAllOptionalParams,
  DscpConfigurationListAllResponse,
  DscpConfigurationCreateOrUpdateOptionalParams,
  DscpConfigurationCreateOrUpdateResponse,
  DscpConfigurationDeleteOptionalParams,
  DscpConfigurationGetOptionalParams,
  DscpConfigurationGetResponse,
  DscpConfigurationListNextResponse,
  DscpConfigurationListAllNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing DscpConfigurationOperations operations. */
export class DscpConfigurationOperationsImpl
  implements DscpConfigurationOperations
{
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class DscpConfigurationOperations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: DscpConfigurationListOptionalParams,
  ): PagedAsyncIterableIterator<DscpConfiguration> {
    const iter = this.listPagingAll(resourceGroupName, options);
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
        return this.listPagingPage(resourceGroupName, options, settings);
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: DscpConfigurationListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DscpConfiguration[]> {
    let result: DscpConfigurationListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
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

  private async *listPagingAll(
    resourceGroupName: string,
    options?: DscpConfigurationListOptionalParams,
  ): AsyncIterableIterator<DscpConfiguration> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Gets all dscp configurations in a subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: DscpConfigurationListAllOptionalParams,
  ): PagedAsyncIterableIterator<DscpConfiguration> {
    const iter = this.listAllPagingAll(options);
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
        return this.listAllPagingPage(options, settings);
      },
    };
  }

  private async *listAllPagingPage(
    options?: DscpConfigurationListAllOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DscpConfiguration[]> {
    let result: DscpConfigurationListAllResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAll(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAllPagingAll(
    options?: DscpConfigurationListAllOptionalParams,
  ): AsyncIterableIterator<DscpConfiguration> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates or updates a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param parameters Parameters supplied to the create or update dscp configuration operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    dscpConfigurationName: string,
    parameters: DscpConfiguration,
    options?: DscpConfigurationCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DscpConfigurationCreateOrUpdateResponse>,
      DscpConfigurationCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<DscpConfigurationCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, dscpConfigurationName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      DscpConfigurationCreateOrUpdateResponse,
      OperationState<DscpConfigurationCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param parameters Parameters supplied to the create or update dscp configuration operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    dscpConfigurationName: string,
    parameters: DscpConfiguration,
    options?: DscpConfigurationCreateOrUpdateOptionalParams,
  ): Promise<DscpConfigurationCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      dscpConfigurationName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dscpConfigurationName: string,
    options?: DscpConfigurationDeleteOptionalParams,
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
      args: { resourceGroupName, dscpConfigurationName, options },
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
   * Deletes a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dscpConfigurationName: string,
    options?: DscpConfigurationDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dscpConfigurationName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dscpConfigurationName: string,
    options?: DscpConfigurationGetOptionalParams,
  ): Promise<DscpConfigurationGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dscpConfigurationName, options },
      getOperationSpec,
    );
  }

  /**
   * Gets a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: DscpConfigurationListOptionalParams,
  ): Promise<DscpConfigurationListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets all dscp configurations in a subscription.
   * @param options The options parameters.
   */
  private _listAll(
    options?: DscpConfigurationListAllOptionalParams,
  ): Promise<DscpConfigurationListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DscpConfigurationListNextOptionalParams,
  ): Promise<DscpConfigurationListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: DscpConfigurationListAllNextOptionalParams,
  ): Promise<DscpConfigurationListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dscpConfigurations/{dscpConfigurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DscpConfiguration,
    },
    201: {
      bodyMapper: Mappers.DscpConfiguration,
    },
    202: {
      bodyMapper: Mappers.DscpConfiguration,
    },
    204: {
      bodyMapper: Mappers.DscpConfiguration,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.dscpConfigurationName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dscpConfigurations/{dscpConfigurationName}",
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
    Parameters.dscpConfigurationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dscpConfigurations/{dscpConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscpConfiguration,
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
    Parameters.dscpConfigurationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dscpConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscpConfigurationListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAllOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/dscpConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscpConfigurationListResult,
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
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscpConfigurationListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscpConfigurationListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
