import {
  OperationResultsGetOptionalParams,
  OperationResultsGetResponse
} from "../models";

/** Interface representing a OperationResults. */
export interface OperationResults {
  /**
   * Get the operation result for a long running operation.
   * @param locationName The location of the operation.
   * @param operationResultId The ID of the operation result to get.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    operationResultId: string,
    options?: OperationResultsGetOptionalParams
  ): Promise<OperationResultsGetResponse>;
}
