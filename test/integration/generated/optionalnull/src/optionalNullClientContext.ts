import * as coreHttp from "@azure/core-http";
import { OptionalNullClientOptionalParams } from "./models";

const packageName = "optionalnull";
const packageVersion = "1.0.0-preview1";

export class OptionalNullClientContext extends coreHttp.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the OptionalNullClientContext class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: OptionalNullClientOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

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
    this.baseUri = options.endpoint || "{$host}";
    // Parameter assignments
    this.$host = $host;
  }
}
