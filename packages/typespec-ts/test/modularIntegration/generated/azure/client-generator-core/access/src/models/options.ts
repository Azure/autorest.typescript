// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface NoDecoratorInPublicOptionalParams extends OperationOptions {}

export interface PublicDecoratorInPublicOptionalParams
  extends OperationOptions {}

export interface NoDecoratorInInternalOptionalParams extends OperationOptions {}

export interface InternalDecoratorInInternalOptionalParams
  extends OperationOptions {}

export interface PublicDecoratorInInternalOptionalParams
  extends OperationOptions {}

export interface PublicOptionalParams extends OperationOptions {}

export interface InternalOptionalParams extends OperationOptions {}

export interface OperationOptionalParams extends OperationOptions {}

export interface DiscriminatorOptionalParams extends OperationOptions {}
