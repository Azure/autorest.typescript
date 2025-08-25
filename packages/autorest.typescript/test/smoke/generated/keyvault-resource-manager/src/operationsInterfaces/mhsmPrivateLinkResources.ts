// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MhsmPrivateLinkResourcesListByMhsmResourceOptionalParams,
  MhsmPrivateLinkResourcesListByMhsmResourceResponse,
} from "../models/index.js";

/** Interface representing a MhsmPrivateLinkResources. */
export interface MhsmPrivateLinkResources {
  /**
   * Gets the private link resources supported for the managed hsm pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param options The options parameters.
   */
  listByMhsmResource(
    resourceGroupName: string,
    name: string,
    options?: MhsmPrivateLinkResourcesListByMhsmResourceOptionalParams,
  ): Promise<MhsmPrivateLinkResourcesListByMhsmResourceResponse>;
}
