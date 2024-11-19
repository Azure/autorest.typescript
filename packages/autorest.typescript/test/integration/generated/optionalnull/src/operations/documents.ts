import { Documents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OptionalNullClient } from "../optionalNullClient";
import { DocumentsSearchGetOptionalParams } from "../models";

/** Class containing Documents operations. */
export class DocumentsImpl implements Documents {
  private readonly client: OptionalNullClient;

  /**
   * Initialize a new instance of the class Documents class.
   * @param client Reference to the service client
   */
  constructor(client: OptionalNullClient) {
    this.client = client;
  }

  /**
   * Searches for documents in the index.
   * @param options The options parameters.
   */
  searchGet(options?: DocumentsSearchGetOptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      searchGetOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const searchGetOperationSpec: coreClient.OperationSpec = {
  path: "/docs",
  httpMethod: "GET",
  responses: { 200: {} },
  queryParameters: [Parameters.searchText, Parameters.includeTotalResultCount],
  urlParameters: [Parameters.$host],
  serializer,
};
