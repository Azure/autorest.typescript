import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  BlockBlobStageBlockOptionalParams,
  BlockBlobStageBlockResponse,
  BlockBlobUploadOptionalParams,
  BlockBlobUploadResponse,
  BlockBlobPutBlobFromUrlOptionalParams,
  BlockBlobPutBlobFromUrlResponse,
} from "../models";

/** Interface representing a BlockBlob. */
export interface BlockBlob {
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
    options?: BlockBlobStageBlockOptionalParams,
  ): Promise<BlockBlobStageBlockResponse>;
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
    options?: BlockBlobUploadOptionalParams,
  ): Promise<BlockBlobUploadResponse>;
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
    options?: BlockBlobPutBlobFromUrlOptionalParams,
  ): Promise<BlockBlobPutBlobFromUrlResponse>;
}
