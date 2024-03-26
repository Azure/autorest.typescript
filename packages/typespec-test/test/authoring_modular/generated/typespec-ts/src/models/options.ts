// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface ProjectsCreateOrUpdateOptions extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface ProjectsGetOptions extends OperationOptions {}

export interface ProjectsDeleteOperationOptions extends OperationOptions {}

export interface ProjectsListProjectsOptions extends OperationOptions {}

export interface ProjectsExportOperationOptions extends OperationOptions {}

export interface ProjectsImportxOptions extends OperationOptions {}

export interface ProjectsTrainOptions extends OperationOptions {}

export interface DeploymentsGetDeploymentOptions extends OperationOptions {}

export interface DeploymentsDeployProjectOptions extends OperationOptions {}

export interface DeploymentsDeleteDeploymentOptions extends OperationOptions {}

export interface DeploymentsListDeploymentsOptions extends OperationOptions {}

export interface DeploymentsSwapDeploymentsOptions extends OperationOptions {}

export interface JobsGetDeploymentStatusOptions extends OperationOptions {}

export interface JobsGetSwapDeploymentsStatusOptions extends OperationOptions {}

export interface GlobalGetSupportedLanguagesOptions extends OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface GlobalListTrainingConfigVersionsOptions
  extends OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}
