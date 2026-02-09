// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import { listByResource, get } from "../../api/privateLinkResources/operations.js";
import {
  PrivateLinkResourcesListByResourceOptionalParams,
  PrivateLinkResourcesGetOptionalParams,
} from "../../api/privateLinkResources/options.js";
import { PrivateLinkResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a PrivateLinkResources operations. */
export interface PrivateLinkResourcesOperations {
  /** List all the private link resources under a topic, domain, or partner namespace or namespace. */
  listByResource: (
    resourceGroupName: string,
    parentType: string,
    parentName: string,
    options?: PrivateLinkResourcesListByResourceOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateLinkResource>;
  /** Get properties of a private link resource. */
  get: (
    resourceGroupName: string,
    parentType: string,
    parentName: string,
    privateLinkResourceName: string,
    options?: PrivateLinkResourcesGetOptionalParams,
  ) => Promise<PrivateLinkResource>;
}

function _getPrivateLinkResources(context: EventGridContext) {
  return {
    listByResource: (
      resourceGroupName: string,
      parentType: string,
      parentName: string,
      options?: PrivateLinkResourcesListByResourceOptionalParams,
    ) => listByResource(context, resourceGroupName, parentType, parentName, options),
    get: (
      resourceGroupName: string,
      parentType: string,
      parentName: string,
      privateLinkResourceName: string,
      options?: PrivateLinkResourcesGetOptionalParams,
    ) => get(context, resourceGroupName, parentType, parentName, privateLinkResourceName, options),
  };
}

export function _getPrivateLinkResourcesOperations(
  context: EventGridContext,
): PrivateLinkResourcesOperations {
  return {
    ..._getPrivateLinkResources(context),
  };
}
