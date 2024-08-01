// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ModelSpreadAsRequestBodyOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ModelSpreadCompositeRequestOnlyWithBodyOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ModelSpreadCompositeRequestWithoutBodyOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ModelSpreadCompositeRequestOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ModelSpreadCompositeRequestMixOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AliasSpreadAsRequestBodyOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AliasSpreadParameterWithInnerModelOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AliasSpreadAsRequestParameterOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AliasSpreadWithMultipleParametersOptionalParams
  extends OperationOptions {
  /** optional int */
  optionalInt?: number;
  /** optional string */
  optionalStringList?: string[];
}

/** Optional parameters. */
export interface AliasSpreadParameterWithInnerAliasOptionalParams
  extends OperationOptions {}
