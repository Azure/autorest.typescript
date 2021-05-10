import { PageBlob } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobClientContext } from "../storageBlobClientContext";
import {
  PageBlobUploadPagesOptionalParams,
  PageBlobUploadPagesResponse
} from "../models";

/** Class representing a PageBlob. */
export class PageBlobImpl implements PageBlob {
  private readonly client: StorageBlobClientContext;

  /**
   * Initialize a new instance of the class PageBlob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobClientContext) {
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
    body: coreHttp.HttpRequestBody,
    options?: PageBlobUploadPagesOptionalParams
  ): Promise<PageBlobUploadPagesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      uploadPagesOperationSpec
    ) as Promise<PageBlobUploadPagesResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const uploadPagesOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobUploadPagesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobUploadPagesExceptionHeaders
    }
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
    Parameters.requestId
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer
};
