// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type { DeploymentCreationParameters } from "./models.js";

export type GetDeploymentParameters = RequestParameters;

export interface DeployProjectBodyParam {
  /** Deployment resource creation parameters. */
  body?: DeploymentCreationParameters;
}

export type DeployProjectParameters = DeployProjectBodyParam &
  RequestParameters;
