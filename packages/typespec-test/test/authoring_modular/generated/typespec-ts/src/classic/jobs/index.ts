// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AuthoringContext } from "../../api/AuthoringContext.js";
import { DeploymentJob, SwapDeploymentsJob } from "../../models/models.js";
import {
  getDeploymentStatus,
  getSwapDeploymentsStatus,
} from "../../api/jobs/index.js";
import {
  JobsGetDeploymentStatusOptions,
  JobsGetSwapDeploymentsStatusOptions,
} from "../../models/options.js";

export interface JobsOperations {
  getDeploymentStatus: (
    projectName: string,
    deploymentName: string,
    jobId: string,
    options?: JobsGetDeploymentStatusOptions,
  ) => Promise<DeploymentJob>;
  getSwapDeploymentsStatus: (
    projectName: string,
    deploymentName: string,
    jobId: string,
    options?: JobsGetSwapDeploymentsStatusOptions,
  ) => Promise<SwapDeploymentsJob>;
}

export function getJobs(context: AuthoringContext) {
  return {
    getDeploymentStatus: (
      projectName: string,
      deploymentName: string,
      jobId: string,
      options?: JobsGetDeploymentStatusOptions,
    ) =>
      getDeploymentStatus(context, projectName, deploymentName, jobId, options),
    getSwapDeploymentsStatus: (
      projectName: string,
      deploymentName: string,
      jobId: string,
      options?: JobsGetSwapDeploymentsStatusOptions,
    ) =>
      getSwapDeploymentsStatus(
        context,
        projectName,
        deploymentName,
        jobId,
        options,
      ),
  };
}

export function getJobsOperations(context: AuthoringContext): JobsOperations {
  return {
    ...getJobs(context),
  };
}
