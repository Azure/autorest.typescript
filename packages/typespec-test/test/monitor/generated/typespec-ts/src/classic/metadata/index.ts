// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorQueryLogsContext } from "../../api/monitorQueryLogsContext.js";
import { post, get } from "../../api/metadata/operations.js";
import {
  MetadataPostOptionalParams,
  MetadataGetOptionalParams,
} from "../../api/metadata/options.js";
import { MetadataResults } from "../../models/models.js";

/** Interface representing a Metadata operations. */
export interface MetadataOperations {
  /**
   * Retrieve the metadata information for the workspace, including its schema,
   * functions, workspace info, categories etc.
   */
  post: (
    workspaceId: string,
    options?: MetadataPostOptionalParams,
  ) => Promise<MetadataResults>;
  /**
   * Retrieve the metadata information for the workspace, including its schema,
   * functions, workspace info, categories etc.
   */
  get: (
    workspaceId: string,
    options?: MetadataGetOptionalParams,
  ) => Promise<MetadataResults>;
}

function _getMetadata(context: MonitorQueryLogsContext) {
  return {
    post: (workspaceId: string, options?: MetadataPostOptionalParams) =>
      post(context, workspaceId, options),
    get: (workspaceId: string, options?: MetadataGetOptionalParams) =>
      get(context, workspaceId, options),
  };
}

export function _getMetadataOperations(
  context: MonitorQueryLogsContext,
): MetadataOperations {
  return {
    ..._getMetadata(context),
  };
}
