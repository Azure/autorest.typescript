import { Queue } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HeaderPrefixClient } from "../headerPrefixClient";
import {
  QueueGetPropertiesOptionalParams,
  QueueGetPropertiesResponse,
} from "../models";

/** Class containing Queue operations. */
export class QueueImpl implements Queue {
  private readonly client: HeaderPrefixClient;

  /**
   * Initialize a new instance of the class Queue class.
   * @param client Reference to the service client
   */
  constructor(client: HeaderPrefixClient) {
    this.client = client;
  }

  /**
   * Retrieves user-defined metadata and queue properties on the specified queue. Metadata is associated
   * with the queue as name-values pairs.
   * @param options The options parameters.
   */
  getProperties(
    options?: QueueGetPropertiesOptionalParams,
  ): Promise<QueueGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPropertiesOperationSpec,
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const getPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.QueueGetPropertiesHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.QueueGetPropertiesExceptionHeaders,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.metadata,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
