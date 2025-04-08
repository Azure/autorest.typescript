import type { ProductOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { OperationGroupClashClient } from "../operationGroupClashClient.js";
import type {
  ProductApiV1ValueGetOptionalParams,
  ProductApiV1ValueGetResponse,
} from "../models/index.js";

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
    options?: ProductApiV1ValueGetOptionalParams,
  ): Promise<ProductApiV1ValueGetResponse> {
    return this.client.sendOperationRequest(
      { options },
      apiV1ValueGetOperationSpec,
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
        type: { name: "Sequence", element: { type: { name: "String" } } },
      },
    },
  },
  queryParameters: [Parameters.pageRange],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.apiVersion],
  serializer,
};
