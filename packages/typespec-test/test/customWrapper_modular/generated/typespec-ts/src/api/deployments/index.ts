// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Deployment,
  DeploymentCreationParameters,
} from "../../models/models.js";
import {
  isUnexpected,
  AuthoringContext as Client,
  DeployProject200Response,
  DeployProject201Response,
  DeployProjectDefaultResponse,
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DeploymentsGetDeploymentOptions,
  DeploymentsDeployProjectOptions,
} from "../../models/options.js";

export function _getDeploymentSend(
  context: Client,
  deploymentName: string,
  options: DeploymentsGetDeploymentOptions = { requestOptions: {} },
): StreamableMethod<GetDeployment200Response | GetDeploymentDefaultResponse> {
  return context
    .path(
      "/authoring/analyze-text/deployments/{deploymentName}",
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
    user: result.body["user"],
    inputType: result.body["input_type"],
    model: result.body["model"],
    input: result.body["input"],
  };
}

/** Gets the details of a deployment. */
export async function getDeployment(
  context: Client,
  deploymentName: string,
  options: DeploymentsGetDeploymentOptions = { requestOptions: {} },
): Promise<Deployment> {
  const result = await _getDeploymentSend(context, deploymentName, options);
  return _getDeploymentDeserialize(result);
}

export function _deployProjectSend(
  context: Client,
  deploymentName: string,
  body?: DeploymentCreationParameters,
  options: DeploymentsDeployProjectOptions = { requestOptions: {} },
): StreamableMethod<
  | DeployProject200Response
  | DeployProject201Response
  | DeployProjectDefaultResponse
> {
  return context
    .path(
      "/authoring/analyze-text/deployments/{deploymentName}",
      deploymentName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body:
        body === undefined
          ? body
          : {
              user: body["user"],
              input_type: body["inputType"],
              model: body["model"],
              input: body["input"],
            },
    });
}

export async function _deployProjectDeserialize(
  result:
    | DeployProject200Response
    | DeployProject201Response
    | DeployProjectDefaultResponse,
): Promise<Deployment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    user: result.body["user"],
    inputType: result.body["input_type"],
    model: result.body["model"],
    input: result.body["input"],
  };
}

/** Creates a new deployment or replaces an existing one. */
export async function deployProject(
  context: Client,
  deploymentName: string,
  body?: DeploymentCreationParameters,
  options: DeploymentsDeployProjectOptions = { requestOptions: {} },
): Promise<Deployment> {
  const result = await _deployProjectSend(
    context,
    deploymentName,
    body,
    options,
  );
  return _deployProjectDeserialize(result);
}
