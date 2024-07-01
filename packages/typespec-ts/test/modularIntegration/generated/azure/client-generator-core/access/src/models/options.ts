// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface NoDecoratorInPublicOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PublicDecoratorInPublicOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface NoDecoratorInInternalOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface InternalDecoratorInInternalOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PublicDecoratorInInternalOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PublicOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface InternalOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface OperationOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DiscriminatorOptionalParams extends OperationOptions {}
