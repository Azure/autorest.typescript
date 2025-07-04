// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConfluentContext } from "../../api/confluentContext.js";
import { APIKeyRecord, CreateAPIKeyModel } from "../../models/models.js";
import { SCClusterRecordsCreateAPIKeyOptionalParams } from "../../api/scClusterRecords/options.js";
import { createAPIKey } from "../../api/scClusterRecords/operations.js";

/** Interface representing a SCClusterRecords operations. */
export interface SCClusterRecordsOperations {
  /** Creates API key for a schema registry Cluster ID or Kafka Cluster ID under a environment */
  createAPIKey: (
    resourceGroupName: string,
    organizationName: string,
    environmentId: string,
    clusterId: string,
    body: CreateAPIKeyModel,
    options?: SCClusterRecordsCreateAPIKeyOptionalParams,
  ) => Promise<APIKeyRecord>;
}

function _getSCClusterRecords(context: ConfluentContext) {
  return {
    createAPIKey: (
      resourceGroupName: string,
      organizationName: string,
      environmentId: string,
      clusterId: string,
      body: CreateAPIKeyModel,
      options?: SCClusterRecordsCreateAPIKeyOptionalParams,
    ) =>
      createAPIKey(
        context,
        resourceGroupName,
        organizationName,
        environmentId,
        clusterId,
        body,
        options,
      ),
  };
}

export function _getSCClusterRecordsOperations(
  context: ConfluentContext,
): SCClusterRecordsOperations {
  return {
    ..._getSCClusterRecords(context),
  };
}
