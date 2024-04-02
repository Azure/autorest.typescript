// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import { FineTuningJobs, getFineTuningJobsOperations } from "./jobs/index.js";

export interface FineTuning {
  jobs: FineTuningJobs;
}

export function getFineTuningOperations(context: OpenAIContext): FineTuning {
  return {
    jobs: getFineTuningJobsOperations(context),
  };
}
