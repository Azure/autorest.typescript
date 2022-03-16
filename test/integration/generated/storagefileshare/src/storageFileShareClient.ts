import * as coreClient from "@azure/core-client";
import { FileImpl } from "./operations";
import { File } from "./operationsInterfaces";
import { StorageFileShareClientOptionalParams } from "./models";

export class StorageFileShareClient extends coreClient.ServiceClient {
  url: string;
  fileRangeWriteFromUrl: string;
  version: string;

  /**
   * Initializes a new instance of the StorageFileShareClient class.
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
    const defaults: StorageFileShareClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-storagefileshare/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint ?? options.baseUri ?? "{url}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.url = url;

    // Assigning values to Constant parameters
    this.fileRangeWriteFromUrl = options.fileRangeWriteFromUrl || "update";
    this.version = options.version || "2020-04-08";
    this.file = new FileImpl(this);
  }

  file: File;
}
