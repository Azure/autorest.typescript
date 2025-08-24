// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface RelationshipDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface RelationshipGetOptionalParams extends OperationOptions {
  /** Limits whether includes extended information. */
  extendedInfo?: boolean;
}

/** Optional parameters. */
export interface RelationshipUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface RelationshipCreateOptionalParams extends OperationOptions {}
