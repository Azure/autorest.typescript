import { DocumentsImpl } from "./operations";
import { Documents } from "./operationsInterfaces";
import { OptionalNullClientOptionalParams } from "./models";

export class OptionalNullClient extends coreClient.ServiceClient {
  Host: string;

  /**
   * Initializes a new instance of the OptionalNullClient class.
   * @param Host server parameter
   * @param options The parameter options
   */
  constructor(Host: string, options?: OptionalNullClientOptionalParams) {
    if (Host === undefined) {
      throw new Error("'Host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: OptionalNullClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-optionalnull/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "{$host}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.Host = Host;
    this.documents = new DocumentsImpl(this);
  }

  documents: Documents;
}
