import * as coreClient from "@azure/core-client";
import { PageBlobImpl, BlockBlobImpl, AppendBlobImpl } from "./operations";
import { PageBlob, BlockBlob, AppendBlob } from "./operationsInterfaces";
import { StorageBlobClientOptionalParams } from "./models";

export class StorageBlobClient extends coreClient.ServiceClient {
  url: string;
  version: string;

  /**
   * Initializes a new instance of the StorageBlobClient class.
   * @param url The URL of the service account, container, or blob that is the targe of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageBlobClientOptionalParams) {
    if (url === undefined) {
      throw new Error("'url' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: StorageBlobClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
    };

    const packageDetails = `azsdk-js-storageblob/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{url}",
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.url = url;

    // Assigning values to Constant parameters
    this.version = options.version || "2020-06-12";
    this.pageBlob = new PageBlobImpl(this);
    this.blockBlob = new BlockBlobImpl(this);
    this.appendBlob = new AppendBlobImpl(this);
  }

  pageBlob: PageBlob;
  blockBlob: BlockBlob;
  appendBlob: AppendBlob;
}
