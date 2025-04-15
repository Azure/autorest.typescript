import { PageBlob } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobClient } from "../storageBlobClient";
import {
  PageBlobUploadPagesOptionalParams,
  PageBlobUploadPagesResponse,
} from "../models";

/** Class containing PageBlob operations. */
export class PageBlobImpl implements PageBlob {
  private readonly client: StorageBlobClient;

  /**
   * Initialize a new instance of the class PageBlob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobClient) {
    this.client = client;
  }

  /**
   * The Upload Pages operation writes a range of pages to a page blob
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  uploadPages(
    contentLength: number,
    body: coreRestPipeline.RequestBodyType,
    options?: PageBlobUploadPagesOptionalParams,
  ): Promise<PageBlobUploadPagesResponse> {
    return this.client.sendOperationRequest(
      { contentLength, body, options },
      uploadPagesOperationSpec,
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const uploadPagesOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobUploadPagesHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobUploadPagesExceptionHeaders,
    },
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.comp, Parameters.timeout],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.pageWrite,
    Parameters.contentLength,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.range,
    Parameters.leaseId,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.encryptionScope,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.version,
    Parameters.requestId,
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer,
};
