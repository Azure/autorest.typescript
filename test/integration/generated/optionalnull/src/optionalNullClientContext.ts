import * as coreClient from "@azure/core-client";
import { OptionalNullClientOptionalParams } from "./models";

export class OptionalNullClientContext extends coreClient.ServiceClient {
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
    const defaults: OptionalNullClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "{$host}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.$host = $host;
  }
}
