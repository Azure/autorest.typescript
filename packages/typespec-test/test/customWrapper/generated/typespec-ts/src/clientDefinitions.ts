// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetDeploymentParameters, DeployProjectParameters } from "./parameters";
import {
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  DeployProject201Response,
  DeployProject200Response,
  DeployProjectDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetDeployment {
  /** Gets the details of a deployment. */
  get(
    options?: GetDeploymentParameters
  ): StreamableMethod<GetDeployment200Response | GetDeploymentDefaultResponse>;
  /** Creates a new deployment or replaces an existing one. */
  put(
    options?: DeployProjectParameters
  ): StreamableMethod<
    | DeployProject201Response
    | DeployProject200Response
    | DeployProjectDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/authoring/analyze-text/deployments/\{deploymentName\}' has methods for the following verbs: get, put */
  (
    path: "/authoring/analyze-text/deployments/{deploymentName}",
    deploymentName: string
  ): GetDeployment;
}

export type AuthoringClient = Client & {
  path: Routes;
};
