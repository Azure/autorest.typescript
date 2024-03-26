// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AuthoringContext } from "../../api/AuthoringContext.js";
import {
  Deployment,
  SwapDeploymentsOptions,
  OperationStatus,
} from "../../models/models.js";
import {
  getDeployment,
  deployProject,
  deleteDeployment,
  listDeployments,
  swapDeployments,
} from "../../api/deployments/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  DeploymentsGetDeploymentOptions,
  DeploymentsDeployProjectOptions,
  DeploymentsDeleteDeploymentOptions,
  DeploymentsListDeploymentsOptions,
  DeploymentsSwapDeploymentsOptions,
} from "../../models/options.js";

export interface DeploymentsOperations {
  getDeployment: (
    projectName: string,
    deploymentName: string,
    options?: DeploymentsGetDeploymentOptions,
  ) => Promise<Deployment>;
  deployProject: (
    projectName: string,
    deploymentName: string,
    resource: Deployment,
    options?: DeploymentsDeployProjectOptions,
  ) => Promise<Deployment>;
  deleteDeployment: (
    projectName: string,
    deploymentName: string,
    options?: DeploymentsDeleteDeploymentOptions,
  ) => Promise<OperationStatus>;
  listDeployments: (
    projectName: string,
    options?: DeploymentsListDeploymentsOptions,
  ) => PagedAsyncIterableIterator<Deployment>;
  swapDeployments: (
    projectName: string,
    body: SwapDeploymentsOptions,
    options?: DeploymentsSwapDeploymentsOptions,
  ) => Promise<void>;
}

export function getDeployments(context: AuthoringContext) {
  return {
    getDeployment: (
      projectName: string,
      deploymentName: string,
      options?: DeploymentsGetDeploymentOptions,
    ) => getDeployment(context, projectName, deploymentName, options),
    deployProject: (
      projectName: string,
      deploymentName: string,
      resource: Deployment,
      options?: DeploymentsDeployProjectOptions,
    ) => deployProject(context, projectName, deploymentName, resource, options),
    deleteDeployment: (
      projectName: string,
      deploymentName: string,
      options?: DeploymentsDeleteDeploymentOptions,
    ) => deleteDeployment(context, projectName, deploymentName, options),
    listDeployments: (
      projectName: string,
      options?: DeploymentsListDeploymentsOptions,
    ) => listDeployments(context, projectName, options),
    swapDeployments: (
      projectName: string,
      body: SwapDeploymentsOptions,
      options?: DeploymentsSwapDeploymentsOptions,
    ) => swapDeployments(context, projectName, body, options),
  };
}

export function getDeploymentsOperations(
  context: AuthoringContext,
): DeploymentsOperations {
  return {
    ...getDeployments(context),
  };
}
