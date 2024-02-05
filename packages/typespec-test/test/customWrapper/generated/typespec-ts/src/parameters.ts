// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { DeploymentCreationParameters } from "./models";

export interface GetDeploymentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetDeploymentQueryParam {
  queryParameters: GetDeploymentQueryParamProperties;
}

export type GetDeploymentParameters = GetDeploymentQueryParam &
  RequestParameters;

export interface DeployProjectBodyParam {
  /** Parameter of type 'DeploymentCreationParameters' in the body. */
  body?: DeploymentCreationParameters;
}

export interface DeployProjectQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeployProjectQueryParam {
  queryParameters: DeployProjectQueryParamProperties;
}

export type DeployProjectParameters = DeployProjectQueryParam &
  DeployProjectBodyParam &
  RequestParameters;
