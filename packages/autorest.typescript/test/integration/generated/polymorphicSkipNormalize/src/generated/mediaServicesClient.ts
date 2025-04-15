import * as coreClient from "@azure/core-client";
import { MediaServicesClientOptionalParams } from "./models";

export class MediaServicesClient extends coreClient.ServiceClient {
  /**
   * Initializes a new instance of the MediaServicesClient class.
   * @param options The parameter options
   */
  constructor(options?: MediaServicesClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MediaServicesClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
    };

    const packageDetails = `azsdk-js-media-services/1.0.0-preview1`;
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
      endpoint: options.endpoint ?? options.baseUri ?? "",
    };
    super(optionsWithDefaults);
  }
}
