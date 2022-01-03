import { QueueImpl } from "./operations";
import { Queue } from "./operationsInterfaces";
import { HeaderPrefixClientContext } from "./headerPrefixClientContext";
import { HeaderPrefixClientOptionalParams } from "./models";

export class HeaderPrefixClient extends HeaderPrefixClientContext {
  /**
   * Initializes a new instance of the HeaderPrefixClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: HeaderPrefixClientOptionalParams) {
    super($host, options);
    this.queue = new QueueImpl(this);
  }

  queue: Queue;
}
