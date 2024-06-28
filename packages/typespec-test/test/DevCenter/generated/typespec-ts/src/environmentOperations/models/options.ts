// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface ListAllEnvironmentsOptionalParams extends OperationOptions {}

export interface ListEnvironmentsOptionalParams extends OperationOptions {}

export interface GetEnvironmentOptionalParams extends OperationOptions {}

export interface CreateOrUpdateEnvironmentOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DeleteEnvironmentOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ListCatalogsOptionalParams extends OperationOptions {}

export interface GetCatalogOptionalParams extends OperationOptions {}

export interface ListEnvironmentDefinitionsOptionalParams
  extends OperationOptions {}

export interface ListEnvironmentDefinitionsByCatalogOptionalParams
  extends OperationOptions {}

export interface GetEnvironmentDefinitionOptionalParams
  extends OperationOptions {}

export interface ListEnvironmentTypesOptionalParams extends OperationOptions {}
