// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  FineTuningJobsOperations,
  getFineTuningJobsOperations,
} from "./jobs/index.js";

export interface FineTuningOperations {
  jobs: FineTuningJobsOperations;
}

export function getFineTuningOperations(
  context: OpenAIContext,
): FineTuningOperations {
  return {
    jobs: getFineTuningJobsOperations(context),
  };
}
