import * as coreHttp from "@azure/core-http";
import { StorageFileShareClientOptionalParams } from "./models";

const packageName = "storagefileshare";
const packageVersion = "1.0.0-preview1";

export class StorageFileShareClientContext extends coreHttp.ServiceClient {
  url: string;
  fileRangeWriteFromUrl: string;
  version: string;

  /**
   * Initializes a new instance of the StorageFileShareClientContext class.
   * @param url The URL of the service account, share, directory or file that is the target of the
   *            desired operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageFileShareClientOptionalParams) {
    if (url === undefined) {
      throw new Error("'url' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";
    this.baseUri = options.endpoint || "{url}";
    // Parameter assignments
    this.url = url;

    // Assigning values to Constant parameters
    this.fileRangeWriteFromUrl = options.fileRangeWriteFromUrl || "update";
    this.version = options.version || "2020-04-08";
  }
}
