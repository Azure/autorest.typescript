// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConfluentContext } from "../../api/confluentContext.js";
import { APIKeyRecord } from "../../models/models.js";
import {
  OrganizationResourceAPIKeyActionsDeleteClusterAPIKeyOptionalParams,
  OrganizationResourceAPIKeyActionsGetClusterAPIKeyOptionalParams,
} from "../../api/organizationResourceAPIKeyActions/options.js";
import {
  deleteClusterAPIKey,
  getClusterAPIKey,
} from "../../api/organizationResourceAPIKeyActions/operations.js";

/** Interface representing a OrganizationResourceAPIKeyActions operations. */
export interface OrganizationResourceAPIKeyActionsOperations {
  /** Deletes API key of a kafka or schema registry cluster */
  deleteClusterAPIKey: (
    resourceGroupName: string,
    organizationName: string,
    apiKeyId: string,
    options?: OrganizationResourceAPIKeyActionsDeleteClusterAPIKeyOptionalParams,
  ) => Promise<void>;
  /** Get API key details of a kafka or schema registry cluster */
  getClusterAPIKey: (
    resourceGroupName: string,
    organizationName: string,
    apiKeyId: string,
    options?: OrganizationResourceAPIKeyActionsGetClusterAPIKeyOptionalParams,
  ) => Promise<APIKeyRecord>;
}

function _getOrganizationResourceAPIKeyActions(context: ConfluentContext) {
  return {
    deleteClusterAPIKey: (
      resourceGroupName: string,
      organizationName: string,
      apiKeyId: string,
      options?: OrganizationResourceAPIKeyActionsDeleteClusterAPIKeyOptionalParams,
    ) =>
      deleteClusterAPIKey(
        context,
        resourceGroupName,
        organizationName,
        apiKeyId,
        options,
      ),
    getClusterAPIKey: (
      resourceGroupName: string,
      organizationName: string,
      apiKeyId: string,
      options?: OrganizationResourceAPIKeyActionsGetClusterAPIKeyOptionalParams,
    ) =>
      getClusterAPIKey(
        context,
        resourceGroupName,
        organizationName,
        apiKeyId,
        options,
      ),
  };
}

export function _getOrganizationResourceAPIKeyActionsOperations(
  context: ConfluentContext,
): OrganizationResourceAPIKeyActionsOperations {
  return {
    ..._getOrganizationResourceAPIKeyActions(context),
  };
}
