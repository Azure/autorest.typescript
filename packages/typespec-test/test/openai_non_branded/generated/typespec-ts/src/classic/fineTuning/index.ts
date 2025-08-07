// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  FineTuningJobsOperations,
  _getFineTuningJobsOperations,
} from "./jobs/index.js";

/** Interface representing a FineTuning operations. */
export interface FineTuningOperations {
  jobs: FineTuningJobsOperations;
}

export function _getFineTuningOperations(
  context: OpenAIContext,
): FineTuningOperations {
  return {
    jobs: _getFineTuningJobsOperations(context),
  };
}
