// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  GroupGetSampleResourceGroupOptionalParams,
  GroupGetSampleResourceGroupResponse,
} from "../models";

/** Interface representing a Group. */
export interface Group {
  /**
   * Provides a resouce group with name 'testgroup101' and location 'West US'.
   * @param resourceGroupName Resource Group name 'testgroup101'.
   * @param options The options parameters.
   */
  getSampleResourceGroup(
    resourceGroupName: string,
    options?: GroupGetSampleResourceGroupOptionalParams,
  ): Promise<GroupGetSampleResourceGroupResponse>;
}
