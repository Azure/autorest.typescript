import { BlockBlob } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobClient } from "../storageBlobClient";
import {
  BlockBlobStageBlockOptionalParams,
  BlockBlobStageBlockResponse,
  BlockBlobUploadOptionalParams,
  BlockBlobUploadResponse,
  BlockBlobPutBlobFromUrlOptionalParams,
  BlockBlobPutBlobFromUrlResponse
} from "../models";

/** Class containing BlockBlob operations. */
export class BlockBlobImpl implements BlockBlob {
  private readonly client: StorageBlobClient;

  /**
   * Initialize a new instance of the class BlockBlob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobClient) {
    this.client = client;
  }

  /**
   * The Stage Block operation creates a new block to be committed as part of a blob
   * @param blockId A valid Base64 string value that identifies the block. Prior to encoding, the string
   *                must be less than or equal to 64 bytes in size. For a given blob, the length of the value specified
   *                for the blockid parameter must be the same size for each block.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  stageBlock(
    blockId: string,
    contentLength: number,
    body: coreRestPipeline.RequestBodyType,
    options?: BlockBlobStageBlockOptionalParams
  ): Promise<BlockBlobStageBlockResponse> {
    return this.client.sendOperationRequest(
      { blockId, contentLength, body, options },
      stageBlockOperationSpec
    );
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
    body: coreRestPipeline.RequestBodyType,
    options?: BlockBlobUploadOptionalParams
  ): Promise<BlockBlobUploadResponse> {
    return this.client.sendOperationRequest(
      { contentLength, body, options },
      uploadOperationSpec
    );
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
    return this.client.sendOperationRequest(
      { contentLength, copySource, options },
      putBlobFromUrlOperationSpec
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const stageBlockOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobStageBlockHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobStageBlockExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.timeout, Parameters.comp1, Parameters.blockId],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.contentLength,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.leaseId,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.encryptionScope,
    Parameters.version,
    Parameters.requestId
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer
};
const uploadOperationSpec: coreClient.OperationSpec = {
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
    Parameters.contentLength,
    Parameters.transactionalContentMD5,
    Parameters.leaseId,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.encryptionScope,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.version,
    Parameters.requestId,
    Parameters.blobType,
    Parameters.blobContentType,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentMD5,
    Parameters.blobCacheControl,
    Parameters.metadata,
    Parameters.blobContentDisposition,
    Parameters.tier,
    Parameters.blobTagsString
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer
};
const putBlobFromUrlOperationSpec: coreClient.OperationSpec = {
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
    Parameters.contentLength,
    Parameters.transactionalContentMD5,
    Parameters.leaseId,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.encryptionScope,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.version,
    Parameters.requestId,
    Parameters.blobType,
    Parameters.blobContentType,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentMD5,
    Parameters.blobCacheControl,
    Parameters.metadata,
    Parameters.blobContentDisposition,
    Parameters.tier,
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
