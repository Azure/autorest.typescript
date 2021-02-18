import * as coreHttp from "@azure/core-http";
import { MediaServicesClientOptionalParams } from "./models";

const packageName = "@azure/media-services";
const packageVersion = "1.0.0-preview1";

export class MediaServicesClientContext extends coreHttp.ServiceClient {
  /**
   * Initializes a new instance of the MediaServicesClientContext class.
   * @param options The parameter options
   */
  constructor(options?: MediaServicesClientOptionalParams) {
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

    this.baseUri = options.endpoint;
  }
}
