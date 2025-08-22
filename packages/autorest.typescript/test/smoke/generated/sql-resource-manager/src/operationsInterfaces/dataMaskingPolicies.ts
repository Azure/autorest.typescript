// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DataMaskingPolicy,
  DataMaskingPoliciesCreateOrUpdateOptionalParams,
  DataMaskingPoliciesCreateOrUpdateResponse,
  DataMaskingPoliciesGetOptionalParams,
  DataMaskingPoliciesGetResponse,
} from "../models/index.js";

/** Interface representing a DataMaskingPolicies. */
export interface DataMaskingPolicies {
  /**
   * Creates or updates a database data masking policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters Parameters for creating or updating a data masking policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: DataMaskingPolicy,
    options?: DataMaskingPoliciesCreateOrUpdateOptionalParams,
  ): Promise<DataMaskingPoliciesCreateOrUpdateResponse>;
  /**
   * Gets a database data masking policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataMaskingPoliciesGetOptionalParams,
  ): Promise<DataMaskingPoliciesGetResponse>;
}
