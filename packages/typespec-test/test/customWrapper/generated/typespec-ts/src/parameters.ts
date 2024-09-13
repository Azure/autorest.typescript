// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";
import { DeploymentCreationParameters } from "./models.js";

export type GetDeploymentParameters = RequestParameters;

export interface DeployProjectBodyParam {
  /** Parameter of type 'DeploymentCreationParameters' in the body. */
  body?: DeploymentCreationParameters;
}

export type DeployProjectParameters = DeployProjectBodyParam &
  RequestParameters;
