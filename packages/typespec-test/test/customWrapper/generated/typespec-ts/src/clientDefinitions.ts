// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetDeploymentParameters,
  DeployProjectParameters,
} from "./parameters.js";
import type {
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  DeployProject200Response,
  DeployProject201Response,
  DeployProjectDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetDeployment {
  /** Gets the details of a deployment. */
  get(
    options?: GetDeploymentParameters,
  ): StreamableMethod<GetDeployment200Response | GetDeploymentDefaultResponse>;
  /** Creates a new deployment or replaces an existing one. */
  put(
    options?: DeployProjectParameters,
  ): StreamableMethod<
    | DeployProject200Response
    | DeployProject201Response
    | DeployProjectDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/authoring/analyze-text/deployments/\{deploymentName\}' has methods for the following verbs: get, put */
  (
    path: "/authoring/analyze-text/deployments/{deploymentName}",
    deploymentName: string,
  ): GetDeployment;
}

export type AuthoringClient = Client & {
  path: Routes;
};
