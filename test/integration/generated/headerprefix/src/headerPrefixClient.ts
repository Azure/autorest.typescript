import { QueueImpl } from "./operations";
import { Queue } from "./operationsInterfaces";
import { HeaderPrefixClientOptionalParams } from "./models";

export class HeaderPrefixClient extends coreClient.ServiceClient {
  Host: string;

  /**
   * Initializes a new instance of the HeaderPrefixClient class.
   * @param Host server parameter
   * @param options The parameter options
   */
  constructor(Host: string, options?: HeaderPrefixClientOptionalParams) {
    if (Host === undefined) {
      throw new Error("'Host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: HeaderPrefixClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-headerprefix/1.0.0-preview1`;
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
    this.queue = new QueueImpl(this);
  }

  queue: Queue;
}
