import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  AppendBlobAppendBlockOptionalParams,
  AppendBlobAppendBlockResponse,
} from "../models";

/** Interface representing a AppendBlob. */
export interface AppendBlob {
  /**
   * The Append Block operation commits a new block of data to the end of an existing append blob. The
   * Append Block operation is permitted only if the blob was created with x-ms-blob-type set to
   * AppendBlob. Append Block is supported only on version 2015-02-21 version or later.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  appendBlock(
    contentLength: number,
    body: coreRestPipeline.RequestBodyType,
    options?: AppendBlobAppendBlockOptionalParams,
  ): Promise<AppendBlobAppendBlockResponse>;
}
