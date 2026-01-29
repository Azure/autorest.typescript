// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProviderOsTypeSelected, ProviderStackOsType } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ProviderOperationGroupGetAvailableStacksOnPremOptionalParams extends OperationOptions {
  osTypeSelected?: ProviderOsTypeSelected;
}

/** Optional parameters. */
export interface ProviderOperationGroupGetWebAppStacksOptionalParams extends OperationOptions {
  /** Stack OS Type */
  stackOsType?: ProviderStackOsType;
}

/** Optional parameters. */
export interface ProviderOperationGroupGetWebAppStacksForLocationOptionalParams extends OperationOptions {
  /** Stack OS Type */
  stackOsType?: ProviderStackOsType;
}

/** Optional parameters. */
export interface ProviderOperationGroupGetFunctionAppStacksForLocationOptionalParams extends OperationOptions {
  /** Stack OS Type */
  stackOsType?: ProviderStackOsType;
}

/** Optional parameters. */
export interface ProviderOperationGroupGetFunctionAppStacksOptionalParams extends OperationOptions {
  /** Stack OS Type */
  stackOsType?: ProviderStackOsType;
}

/** Optional parameters. */
export interface ProviderOperationGroupGetAvailableStacksOptionalParams extends OperationOptions {
  osTypeSelected?: ProviderOsTypeSelected;
}
