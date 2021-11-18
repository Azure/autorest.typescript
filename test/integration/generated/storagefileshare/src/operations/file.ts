import { File } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageFileShareClient } from "../storageFileShareClient";
import {
  FileUploadRangeFromUrlOptionalParams,
  FileUploadRangeFromUrlResponse
} from "../models";

/** Class containing File operations. */
export class FileImpl implements File {
  private readonly client: StorageFileShareClient;

  /**
   * Initialize a new instance of the class File class.
   * @param client Reference to the service client
   */
  constructor(client: StorageFileShareClient) {
    this.client = client;
  }

  /**
   * Upload a range of bytes to a file where the contents are read from a URL.
   * @param range Writes data to the specified byte range in the file.
   * @param copySource Specifies the URL of the source file or blob, up to 2 KB in length. To copy a file
   *                   to another file within the same storage account, you may use Shared Key to authenticate the source
   *                   file. If you are copying a file from another storage account, or if you are copying a blob from the
   *                   same storage account or another storage account, then you must authenticate the source file or blob
   *                   using a shared access signature. If the source is a public blob, no authentication is required to
   *                   perform the copy operation. A file in a share snapshot can also be specified as a copy source.
   * @param contentLength Specifies the number of bytes being transmitted in the request body. When the
   *                      x-ms-write header is set to clear, the value of this header must be set to zero.
   * @param options The options parameters.
   */
  uploadRangeFromUrl(
    range: string,
    copySource: string,
    contentLength: number,
    options?: FileUploadRangeFromUrlOptionalParams
  ): Promise<FileUploadRangeFromUrlResponse> {
    return this.client.sendOperationRequest(
      { range, copySource, contentLength, options },
      uploadRangeFromUrlOperationSpec
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const uploadRangeFromUrlOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.FileUploadRangeFromUrlHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileUploadRangeFromUrlExceptionHeaders
    }
  },
  queryParameters: [Parameters.comp, Parameters.timeout],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.range,
    Parameters.copySource,
    Parameters.sourceRange,
    Parameters.fileRangeWriteFromUrl,
    Parameters.contentLength,
    Parameters.sourceContentCrc64,
    Parameters.sourceIfMatchCrc64,
    Parameters.sourceIfNoneMatchCrc64,
    Parameters.version,
    Parameters.leaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
