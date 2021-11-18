import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import {
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse
} from "../models";

/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Gets the private link resources
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourcesWrapper
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
