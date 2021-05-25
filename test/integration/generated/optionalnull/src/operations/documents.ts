import { Documents } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OptionalNullClientContext } from "../optionalNullClientContext";
import { DocumentsSearchGetOptionalParams } from "../models";

/** Class representing a Documents. */
export class DocumentsImpl implements Documents {
  private readonly client: OptionalNullClientContext;

  /**
   * Initialize a new instance of the class Documents class.
   * @param client Reference to the service client
   */
  constructor(client: OptionalNullClientContext) {
    this.client = client;
  }

  /**
   * Searches for documents in the index.
   * @param options The options parameters.
   */
  searchGet(
    options?: DocumentsSearchGetOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      searchGetOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const searchGetOperationSpec: coreHttp.OperationSpec = {
  path: "/docs",
  httpMethod: "GET",
  responses: { 200: {} },
  queryParameters: [Parameters.searchText, Parameters.includeTotalResultCount],
  urlParameters: [Parameters.$host],
  serializer
};
