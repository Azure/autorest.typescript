import * as coreClient from "@azure/core-client";
import { MediaServicesClientOptionalParams } from "./models";

export class MediaServicesClientContext extends coreClient.ServiceClient {
  /**
   * Initializes a new instance of the MediaServicesClientContext class.
   * @param options The parameter options
   */
  constructor(options?: MediaServicesClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MediaServicesClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} @azure/media-services/1.0.0-preview1`
        : `@azure/media-services/1.0.0-preview1`;
    options.userAgentOptions = {
      userAgentPrefix: userAgentPrefix
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint
    };
    super(optionsWithDefaults);
  }
}
