import { BlockBlob } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobClientContext } from "../storageBlobClientContext";
import {
  BlockBlobUploadOptionalParams,
  BlockBlobUploadResponse,
  BlockBlobPutBlobFromUrlOptionalParams,
  BlockBlobPutBlobFromUrlResponse
} from "../models";

/** Class representing a BlockBlob. */
export class BlockBlobImpl implements BlockBlob {
  private readonly client: StorageBlobClientContext;

  /**
   * Initialize a new instance of the class BlockBlob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobClientContext) {
    this.client = client;
  }

  /**
   * The Upload Block Blob operation updates the content of an existing block blob. Updating an existing
   * block blob overwrites any existing metadata on the blob. Partial updates are not supported with Put
   * Blob; the content of the existing blob is overwritten with the content of the new blob. To perform a
   * partial update of the content of a block blob, use the Put Block List operation.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  upload(
    contentLength: number,
    body: coreHttp.HttpRequestBody,
    options?: BlockBlobUploadOptionalParams
  ): Promise<BlockBlobUploadResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      uploadOperationSpec
    ) as Promise<BlockBlobUploadResponse>;
  }

  /**
   * The Put Blob from URL operation creates a new Block Blob where the contents of the blob are read
   * from a given URL.  This API is supported beginning with the 2020-04-08 version. Partial updates are
   * not supported with Put Blob from URL; the content of an existing blob is overwritten with the
   * content of the new blob.  To perform partial updates to a block blob’s contents using a source URL,
   * use the Put Block from URL API in conjunction with Put Block List.
   * @param contentLength The length of the request.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up to
   *                   2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would
   *                   appear in a request URI. The source blob must either be public or must be authenticated via a shared
   *                   access signature.
   * @param options The options parameters.
   */
  putBlobFromUrl(
    contentLength: number,
    copySource: string,
    options?: BlockBlobPutBlobFromUrlOptionalParams
  ): Promise<BlockBlobPutBlobFromUrlResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      copySource,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putBlobFromUrlOperationSpec
    ) as Promise<BlockBlobPutBlobFromUrlResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const uploadOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobUploadHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobUploadExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.timeout],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.blobType,
    Parameters.transactionalContentMD5,
    Parameters.contentLength,
    Parameters.blobContentType,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentMD5,
    Parameters.blobCacheControl,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.blobContentDisposition,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.encryptionScope,
    Parameters.tier,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.version,
    Parameters.requestId,
    Parameters.blobTagsString
  ],
  mediaType: "binary",
  serializer
};
const putBlobFromUrlOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobPutBlobFromUrlHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobPutBlobFromUrlExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.blobType,
    Parameters.transactionalContentMD5,
    Parameters.contentLength,
    Parameters.blobContentType,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentMD5,
    Parameters.blobCacheControl,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.blobContentDisposition,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.encryptionScope,
    Parameters.tier,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.version,
    Parameters.requestId,
    Parameters.blobTagsString,
    Parameters.accept1,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
    Parameters.sourceIfTags,
    Parameters.sourceContentMD5,
    Parameters.copySource,
    Parameters.copySourceBlobProperties
  ],
  isXML: true,
  serializer: xmlSerializer
};
