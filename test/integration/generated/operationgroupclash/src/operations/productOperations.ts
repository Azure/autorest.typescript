import { ProductOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationGroupClashClient } from "../operationGroupClashClient";
import {
  ProductApiV1ValueGetOptionalParams,
  ProductApiV1ValueGetResponse
} from "../models";

/** Class containing ProductOperations operations. */
export class ProductOperationsImpl implements ProductOperations {
  private readonly client: OperationGroupClashClient;

  /**
   * Initialize a new instance of the class ProductOperations class.
   * @param client Reference to the service client
   */
  constructor(client: OperationGroupClashClient) {
    this.client = client;
  }

  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: ProductApiV1ValueGetOptionalParams
  ): Promise<ProductApiV1ValueGetResponse> {
    return this.client.sendOperationRequest(
      { options },
      apiV1ValueGetOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const apiV1ValueGetOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/value",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    }
  },
  queryParameters: [Parameters.pageRange],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.apiVersion],
  serializer
};
