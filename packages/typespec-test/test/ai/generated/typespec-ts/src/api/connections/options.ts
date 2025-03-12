// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectionType } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ConnectionsGetConnectionWithSecretsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ConnectionsGetConnectionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ConnectionsListConnectionsOptionalParams
  extends OperationOptions {
  /** Category of the workspace connection. */
  category?: ConnectionType;
  /** Indicates whether to list datastores. Service default: do not list datastores. */
  includeAll?: boolean;
  /** Target of the workspace connection. */
  target?: string;
}

/** Optional parameters. */
export interface ConnectionsGetWorkspaceOptionalParams
  extends OperationOptions {}
