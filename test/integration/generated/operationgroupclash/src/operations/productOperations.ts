import { ProductOperations } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationGroupClashClientContext } from "../operationGroupClashClientContext";
import {
  ProductOperationsApiV1ValueGetOptionalParams,
  ProductOperationsApiV1ValueGetResponse
} from "../models";

/** Class representing a ProductOperations. */
export class ProductOperationsImpl implements ProductOperations {
  private readonly client: OperationGroupClashClientContext;

  /**
   * Initialize a new instance of the class ProductOperations class.
   * @param client Reference to the service client
   */
  constructor(client: OperationGroupClashClientContext) {
    this.client = client;
  }

  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: ProductOperationsApiV1ValueGetOptionalParams
  ): Promise<ProductOperationsApiV1ValueGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      apiV1ValueGetOperationSpec
    ) as Promise<ProductOperationsApiV1ValueGetResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const apiV1ValueGetOperationSpec: coreHttp.OperationSpec = {
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
