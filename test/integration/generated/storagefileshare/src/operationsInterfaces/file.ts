import {
  FileUploadRangeFromURLOptionalParams,
  FileUploadRangeFromURLResponse
} from "../models";

/** Interface representing a File. */
export interface File {
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
  uploadRangeFromURL(
    range: string,
    copySource: string,
    contentLength: number,
    options?: FileUploadRangeFromURLOptionalParams
  ): Promise<FileUploadRangeFromURLResponse>;
}
