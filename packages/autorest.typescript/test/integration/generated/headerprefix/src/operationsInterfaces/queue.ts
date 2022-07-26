import {
  QueueGetPropertiesOptionalParams,
  QueueGetPropertiesResponse
} from "../models";

/** Interface representing a Queue. */
export interface Queue {
  /**
   * Retrieves user-defined metadata and queue properties on the specified queue. Metadata is associated
   * with the queue as name-values pairs.
   * @param options The options parameters.
   */
  getProperties(
    options?: QueueGetPropertiesOptionalParams
  ): Promise<QueueGetPropertiesResponse>;
}
