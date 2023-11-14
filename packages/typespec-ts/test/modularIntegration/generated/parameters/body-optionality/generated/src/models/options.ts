// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface OptionalExplicitSetOptions extends OperationOptions {}

export interface OptionalExplicitOmitOptions extends OperationOptions {}

export interface RequiredExplicitOptions extends OperationOptions {}

export interface RequiredImplicitOptions extends OperationOptions {}
