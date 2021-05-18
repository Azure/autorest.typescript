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
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint
    };
    super(optionsWithDefaults);
  }
}
