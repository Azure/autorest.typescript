// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAiContext.js";
import {
  FineTuningJobsOperations,
  getFineTuningJobsOperations,
} from "./jobs/index.js";

/** Interface representing a FineTuning operations. */
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
