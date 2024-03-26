// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DeploymentJob, SwapDeploymentsJob } from "../../models/models.js";
import {
  isUnexpected,
  AuthoringContext as Client,
  GetDeploymentStatus200Response,
  GetDeploymentStatusDefaultResponse,
  GetSwapDeploymentsStatus200Response,
  GetSwapDeploymentsStatusDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  JobsGetDeploymentStatusOptions,
  JobsGetSwapDeploymentsStatusOptions,
} from "../../models/options.js";

export function _getDeploymentStatusSend(
  context: Client,
  projectName: string,
  deploymentName: string,
  jobId: string,
  options: JobsGetDeploymentStatusOptions = { requestOptions: {} },
): StreamableMethod<
  GetDeploymentStatus200Response | GetDeploymentStatusDefaultResponse
> {
  return context
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/jobs/{jobId}",
      projectName,
      deploymentName,
      jobId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeploymentStatusDeserialize(
  result: GetDeploymentStatus200Response | GetDeploymentStatusDefaultResponse,
): Promise<DeploymentJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    jobId: result.body["jobId"],
    createdDateTime: new Date(result.body["createdDateTime"]),
    lastUpdatedDateTime: new Date(result.body["lastUpdatedDateTime"]),
    expirationDateTime: new Date(result.body["expirationDateTime"]),
    status: result.body["status"],
    warnings: result.body["warnings"].map((p) => ({
      code: p["code"],
      message: p["message"],
    })),
    errors: result.body.errors,
    id: result.body["id"],
  };
}

/** Gets the status of an existing deployment job. */
export async function getDeploymentStatus(
  context: Client,
  projectName: string,
  deploymentName: string,
  jobId: string,
  options: JobsGetDeploymentStatusOptions = { requestOptions: {} },
): Promise<DeploymentJob> {
  const result = await _getDeploymentStatusSend(
    context,
    projectName,
    deploymentName,
    jobId,
    options,
  );
  return _getDeploymentStatusDeserialize(result);
}

export function _getSwapDeploymentsStatusSend(
  context: Client,
  projectName: string,
  deploymentName: string,
  jobId: string,
  options: JobsGetSwapDeploymentsStatusOptions = { requestOptions: {} },
): StreamableMethod<
  GetSwapDeploymentsStatus200Response | GetSwapDeploymentsStatusDefaultResponse
> {
  return context
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/swap/jobs/{jobId}",
      projectName,
      deploymentName,
      jobId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getSwapDeploymentsStatusDeserialize(
  result:
    | GetSwapDeploymentsStatus200Response
    | GetSwapDeploymentsStatusDefaultResponse,
): Promise<SwapDeploymentsJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    jobId: result.body["jobId"],
    createdDateTime: new Date(result.body["createdDateTime"]),
    lastUpdatedDateTime: new Date(result.body["lastUpdatedDateTime"]),
    expirationDateTime: new Date(result.body["expirationDateTime"]),
    status: result.body["status"],
    warnings: result.body["warnings"].map((p) => ({
      code: p["code"],
      message: p["message"],
    })),
    errors: result.body.errors,
    id: result.body["id"],
  };
}

/** Gets the status of an existing swap deployment job. */
export async function getSwapDeploymentsStatus(
  context: Client,
  projectName: string,
  deploymentName: string,
  jobId: string,
  options: JobsGetSwapDeploymentsStatusOptions = { requestOptions: {} },
): Promise<SwapDeploymentsJob> {
  const result = await _getSwapDeploymentsStatusSend(
    context,
    projectName,
    deploymentName,
    jobId,
    options,
  );
  return _getSwapDeploymentsStatusDeserialize(result);
}
