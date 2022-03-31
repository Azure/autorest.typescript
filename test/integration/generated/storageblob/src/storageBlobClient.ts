import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
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
      requestContentType: "application/json; charset=utf-8"
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
        userAgentPrefix
      },
      baseUri: options.endpoint ?? options.baseUri ?? "{url}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.url = url;

    // Assigning values to Constant parameters
    this.version = options.version || "2020-06-12";
    this.pageBlob = new PageBlobImpl(this);
    this.blockBlob = new BlockBlobImpl(this);
    this.appendBlob = new AppendBlobImpl(this);
    if (options.apiVersion) {
      this.customApiVersion(options.apiVersion);
    }
  }

  /**  A policy that sets the api-version (or equivalent) to reflect the library version. */
  private customApiVersion(apiVersion: string) {
    const apiVersionPolicy = {
      name: "replace api version",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return item.replace(/(?<==).*$/, apiVersion);
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  pageBlob: PageBlob;
  blockBlob: BlockBlob;
  appendBlob: AppendBlob;
}
