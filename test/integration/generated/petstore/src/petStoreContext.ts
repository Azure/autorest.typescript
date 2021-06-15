import * as coreClient from "@azure/core-client";
import { PetStoreOptionalParams } from "./models";

export class PetStoreContext extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the PetStoreContext class.
   * @param options The parameter options
   */
  constructor(options?: PetStoreOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PetStoreOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-petstore/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;
    options.userAgentOptions = {
      userAgentPrefix: userAgentPrefix
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "http://petstore.swagger.io/v2"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://petstore.swagger.io/v2";
  }
}
