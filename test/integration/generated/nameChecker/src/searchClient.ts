import { Documents } from "./operations";
import { SearchClientContext } from "./searchClientContext";
import { SearchClientOptionalParams } from "./models";

export class SearchClient extends SearchClientContext {
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
    super(endpoint, indexName, options);
    this.documents = new Documents(this);
  }

  documents: Documents;
}
