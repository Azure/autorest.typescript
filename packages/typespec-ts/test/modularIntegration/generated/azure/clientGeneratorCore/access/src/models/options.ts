// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface NoDecoratorInPublicOptions extends OperationOptions {}

export interface PublicDecoratorInPublicOptions extends OperationOptions {}

export interface NoDecoratorInInternalOptions extends OperationOptions {}

export interface InternalDecoratorInInternalOptions extends OperationOptions {}

export interface PublicDecoratorInInternalOptions extends OperationOptions {}

export interface PublicOptions extends OperationOptions {}

export interface InternalOptions extends OperationOptions {}

export interface OperationOptions extends OperationOptions {}

export interface DiscriminatorOptions extends OperationOptions {}
