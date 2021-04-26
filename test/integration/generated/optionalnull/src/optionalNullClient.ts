import { DocumentsImpl } from "./operations";
import { Documents } from "./operationsInterfaces";
import { OptionalNullClientContext } from "./optionalNullClientContext";
import { OptionalNullClientOptionalParams } from "./models";

export class OptionalNullClient extends OptionalNullClientContext {
  /**
   * Initializes a new instance of the OptionalNullClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: OptionalNullClientOptionalParams) {
    super($host, options);
    this.documents = new DocumentsImpl(this);
  }

  documents: Documents;
}
