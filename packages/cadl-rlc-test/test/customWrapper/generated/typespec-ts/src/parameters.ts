// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { DeploymentCreationParameters } from "./models";

export type GetDeploymentParameters = RequestParameters;

export interface DeployProjectBodyParam {
  /** Parameter of type 'DeploymentCreationParameters' in the body. */
  body?: DeploymentCreationParameters;
}

export type DeployProjectParameters = DeployProjectBodyParam &
  RequestParameters;
