// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProviderOsTypeSelected, ProviderStackOsType } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ProviderGetAvailableStacksOnPremOptionalParams extends OperationOptions {
  osTypeSelected?: ProviderOsTypeSelected;
}

/** Optional parameters. */
export interface ProviderGetWebAppStacksOptionalParams extends OperationOptions {
  /** Stack OS Type */
  stackOsType?: ProviderStackOsType;
}

/** Optional parameters. */
export interface ProviderGetWebAppStacksForLocationOptionalParams extends OperationOptions {
  /** Stack OS Type */
  stackOsType?: ProviderStackOsType;
}

/** Optional parameters. */
export interface ProviderGetFunctionAppStacksForLocationOptionalParams extends OperationOptions {
  /** Stack OS Type */
  stackOsType?: ProviderStackOsType;
}

/** Optional parameters. */
export interface ProviderGetFunctionAppStacksOptionalParams extends OperationOptions {
  /** Stack OS Type */
  stackOsType?: ProviderStackOsType;
}

/** Optional parameters. */
export interface ProviderGetAvailableStacksOptionalParams extends OperationOptions {
  osTypeSelected?: ProviderOsTypeSelected;
}

/** Optional parameters. */
export interface ProviderListOperationsOptionalParams extends OperationOptions {}
