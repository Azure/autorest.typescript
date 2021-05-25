import * as coreHttp from "@azure/core-http";
import { PetStoreOptionalParams } from "./models";

const packageName = "petstore";
const packageVersion = "1.0.0-preview1";

export class PetStoreContext extends coreHttp.ServiceClient {
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

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";
    this.baseUri = options.endpoint || "http://petstore.swagger.io/v2";

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://petstore.swagger.io/v2";
  }
}
