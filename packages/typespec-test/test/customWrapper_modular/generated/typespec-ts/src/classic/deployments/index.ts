// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AuthoringContext } from "../../api/AuthoringContext.js";
import {
  Deployment,
  DeploymentCreationParameters,
} from "../../models/models.js";
import { getDeployment, deployProject } from "../../api/deployments/index.js";
import {
  DeploymentsGetDeploymentOptions,
  DeploymentsDeployProjectOptions,
} from "../../models/options.js";

export interface DeploymentsOperations {
  getDeployment: (
    deploymentName: string,
    options?: DeploymentsGetDeploymentOptions,
  ) => Promise<Deployment>;
  deployProject: (
    deploymentName: string,
    body?: DeploymentCreationParameters,
    options?: DeploymentsDeployProjectOptions,
  ) => Promise<Deployment>;
}

export function getDeployments(context: AuthoringContext) {
  return {
    getDeployment: (
      deploymentName: string,
      options?: DeploymentsGetDeploymentOptions,
    ) => getDeployment(context, deploymentName, options),
    deployProject: (
      deploymentName: string,
      body?: DeploymentCreationParameters,
      options?: DeploymentsDeployProjectOptions,
    ) => deployProject(context, deploymentName, body, options),
  };
}

export function getDeploymentsOperations(
  context: AuthoringContext,
): DeploymentsOperations {
  return {
    ...getDeployments(context),
  };
}
