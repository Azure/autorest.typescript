import * as coreClient from "@azure/core-client";
import { DocumentsImpl } from "./operations";
import { Documents } from "./operationsInterfaces";
import { SearchClientOptionalParams } from "./models";

export class SearchClient extends coreClient.ServiceClient {
  endpoint: string;
  indexName: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the SearchClient class.
   * @param endpoint The endpoint URL of the search service.
   * @param indexName The name of the index.
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    indexName: string,
    options?: SearchClientOptionalParams
  ) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }
    if (indexName === undefined) {
      throw new Error("'indexName' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SearchClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-search-documents/1.0.0-preview1`;
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
      baseUri:
        options.endpoint ??
        options.baseUri ??
        "{endpoint}/indexes('{indexName}')"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;
    this.indexName = indexName;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "2020-06-30-Preview";
    this.documents = new DocumentsImpl(this);
  }

  documents: Documents;
}
