import * as coreHttp from "@azure/core-http";
import { Enum0, NoLicenseHeaderClientOptionalParams } from "./models";

const packageName = "nolicense-header";
const packageVersion = "1.0.0-preview1";

export class NoLicenseHeaderClientContext extends coreHttp.ServiceClient {
  $host: string;
  apiVersion: Enum0;

  /**
   * Initializes a new instance of the NoLicenseHeaderClientContext class.
   * @param $host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    $host: string,
    apiVersion: Enum0,
    options?: NoLicenseHeaderClientOptionalParams
  ) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
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
    this.apiVersion = apiVersion;
  }
}
