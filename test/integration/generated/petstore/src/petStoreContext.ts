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
