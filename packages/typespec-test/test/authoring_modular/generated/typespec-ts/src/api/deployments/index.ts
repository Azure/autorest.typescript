// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Deployment,
  SwapDeploymentsOptions,
  OperationStatus,
  PagedDeployment,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AuthoringContext as Client,
  DeleteDeployment202Response,
  DeleteDeploymentDefaultResponse,
  DeleteDeploymentLogicalResponse,
  DeployProject200Response,
  DeployProject201Response,
  DeployProjectDefaultResponse,
  DeployProjectLogicalResponse,
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  ListDeployments200Response,
  ListDeploymentsDefaultResponse,
  SwapDeployments202Response,
  SwapDeploymentsDefaultResponse,
  SwapDeploymentsLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DeploymentsGetDeploymentOptions,
  DeploymentsDeployProjectOptions,
  DeploymentsDeleteDeploymentOptions,
  DeploymentsListDeploymentsOptions,
  DeploymentsSwapDeploymentsOptions,
} from "../../models/options.js";

export function _getDeploymentSend(
  context: Client,
  projectName: string,
  deploymentName: string,
  options: DeploymentsGetDeploymentOptions = { requestOptions: {} },
): StreamableMethod<GetDeployment200Response | GetDeploymentDefaultResponse> {
  return context
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}",
      projectName,
      deploymentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeploymentDeserialize(
  result: GetDeployment200Response | GetDeploymentDefaultResponse,
): Promise<Deployment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

/** Gets the details of a deployment. */
export async function getDeployment(
  context: Client,
  projectName: string,
  deploymentName: string,
  options: DeploymentsGetDeploymentOptions = { requestOptions: {} },
): Promise<Deployment> {
  const result = await _getDeploymentSend(
    context,
    projectName,
    deploymentName,
    options,
  );
  return _getDeploymentDeserialize(result);
}

export function _deployProjectSend(
  context: Client,
  projectName: string,
  deploymentName: string,
  resource: Deployment,
  options: DeploymentsDeployProjectOptions = { requestOptions: {} },
): StreamableMethod<
  | DeployProject200Response
  | DeployProject201Response
  | DeployProjectDefaultResponse
  | DeployProjectLogicalResponse
> {
  return context
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}",
      projectName,
      deploymentName,
    )
    .put({ ...operationOptionsToRequestParameters(options), body: resource });
}

export async function _deployProjectDeserialize(
  result:
    | DeployProject200Response
    | DeployProject201Response
    | DeployProjectDefaultResponse
    | DeployProjectLogicalResponse,
): Promise<Deployment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

/** Creates a new deployment or replaces an existing one. */
export async function deployProject(
  context: Client,
  projectName: string,
  deploymentName: string,
  resource: Deployment,
  options: DeploymentsDeployProjectOptions = { requestOptions: {} },
): Promise<Deployment> {
  const result = await _deployProjectSend(
    context,
    projectName,
    deploymentName,
    resource,
    options,
  );
  return _deployProjectDeserialize(result);
}

export function _deleteDeploymentSend(
  context: Client,
  projectName: string,
  deploymentName: string,
  options: DeploymentsDeleteDeploymentOptions = { requestOptions: {} },
): StreamableMethod<
  | DeleteDeployment202Response
  | DeleteDeploymentDefaultResponse
  | DeleteDeploymentLogicalResponse
> {
  return context
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}",
      projectName,
      deploymentName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteDeploymentDeserialize(
  result:
    | DeleteDeployment202Response
    | DeleteDeploymentDefaultResponse
    | DeleteDeploymentLogicalResponse,
): Promise<OperationStatus> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error,
  };
}

/** Deletes a project deployment. */
export async function deleteDeployment(
  context: Client,
  projectName: string,
  deploymentName: string,
  options: DeploymentsDeleteDeploymentOptions = { requestOptions: {} },
): Promise<OperationStatus> {
  const result = await _deleteDeploymentSend(
    context,
    projectName,
    deploymentName,
    options,
  );
  return _deleteDeploymentDeserialize(result);
}

export function _listDeploymentsSend(
  context: Client,
  projectName: string,
  options: DeploymentsListDeploymentsOptions = { requestOptions: {} },
): StreamableMethod<
  ListDeployments200Response | ListDeploymentsDefaultResponse
> {
  return context
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments",
      projectName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeploymentsDeserialize(
  result: ListDeployments200Response | ListDeploymentsDefaultResponse,
): Promise<PagedDeployment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({ name: p["name"] })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists the existing deployments. */
export function listDeployments(
  context: Client,
  projectName: string,
  options: DeploymentsListDeploymentsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<Deployment> {
  return buildPagedAsyncIterator(
    context,
    () => _listDeploymentsSend(context, projectName, options),
    _listDeploymentsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _swapDeploymentsSend(
  context: Client,
  projectName: string,
  body: SwapDeploymentsOptions,
  options: DeploymentsSwapDeploymentsOptions = { requestOptions: {} },
): StreamableMethod<
  | SwapDeployments202Response
  | SwapDeploymentsDefaultResponse
  | SwapDeploymentsLogicalResponse
> {
  return context
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments:swap",
      projectName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        firstDeploymentName: body["firstDeploymentName"],
        secondDeploymentName: body["secondDeploymentName"],
      },
    });
}

export async function _swapDeploymentsDeserialize(
  result:
    | SwapDeployments202Response
    | SwapDeploymentsDefaultResponse
    | SwapDeploymentsLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Swaps two existing deployments with each other. */
export async function swapDeployments(
  context: Client,
  projectName: string,
  body: SwapDeploymentsOptions,
  options: DeploymentsSwapDeploymentsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _swapDeploymentsSend(
    context,
    projectName,
    body,
    options,
  );
  return _swapDeploymentsDeserialize(result);
}
