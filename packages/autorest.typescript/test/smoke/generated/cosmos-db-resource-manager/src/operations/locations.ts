/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Locations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient.js";
import {
  LocationGetResult,
  LocationsListOptionalParams,
  LocationsListResponse,
  LocationsGetOptionalParams,
  LocationsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Locations operations. */
export class LocationsImpl implements Locations {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class Locations class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * List Cosmos DB locations and their properties
   * @param options The options parameters.
   */
  public list(
    options?: LocationsListOptionalParams,
  ): PagedAsyncIterableIterator<LocationGetResult> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: LocationsListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<LocationGetResult[]> {
    let result: LocationsListResponse;
    result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: LocationsListOptionalParams,
  ): AsyncIterableIterator<LocationGetResult> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List Cosmos DB locations and their properties
   * @param options The options parameters.
   */
  private _list(
    options?: LocationsListOptionalParams,
  ): Promise<LocationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get the properties of an existing Cosmos DB location
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param options The options parameters.
   */
  get(
    location: string,
    options?: LocationsGetOptionalParams,
  ): Promise<LocationsGetResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocationListResult,
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
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocationGetResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
