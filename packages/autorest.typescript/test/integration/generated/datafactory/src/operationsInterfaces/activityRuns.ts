import {
  RunFilterParameters,
  ActivityRunsQueryByPipelineRunOptionalParams,
  ActivityRunsQueryByPipelineRunResponse,
} from "../models";

/** Interface representing a ActivityRuns. */
export interface ActivityRuns {
  /**
   * Query activity runs based on input filter conditions.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param runId The pipeline run identifier.
   * @param filterParameters Parameters to filter the activity runs.
   * @param options The options parameters.
   */
  queryByPipelineRun(
    resourceGroupName: string,
    factoryName: string,
    runId: string,
    filterParameters: RunFilterParameters,
    options?: ActivityRunsQueryByPipelineRunOptionalParams,
  ): Promise<ActivityRunsQueryByPipelineRunResponse>;
}
