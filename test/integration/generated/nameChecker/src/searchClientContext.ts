import * as coreHttp from "@azure/core-http";
import { SearchClientOptionalParams } from "./models";

const packageName = "@azure/search-documents";
const packageVersion = "1.0.0-preview1";

export class SearchClientContext extends coreHttp.ServiceClient {
  endpoint: string;
  indexName: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the SearchClientContext class.
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

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{endpoint}/indexes('{indexName}')";

    // Parameter assignments
    this.endpoint = endpoint;
    this.indexName = indexName;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "2020-06-30-Preview";
  }
}
