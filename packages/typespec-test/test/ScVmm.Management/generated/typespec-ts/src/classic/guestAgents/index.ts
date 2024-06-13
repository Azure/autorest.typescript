// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { GuestAgent } from "../../models/models.js";
import {
  get,
  create,
  $delete,
  listByVirtualMachineInstance,
} from "../../api/guestAgents/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  GuestAgentsGetOptionalParams,
  GuestAgentsCreateOptionalParams,
  GuestAgentsDeleteOptionalParams,
  GuestAgentsListByVirtualMachineInstanceOptionalParams,
} from "../../models/options.js";

export interface GuestAgentsOperations {
  get: (
    resourceUri: string,
    options?: GuestAgentsGetOptionalParams,
  ) => Promise<GuestAgent>;
  create: (
    resourceUri: string,
    resource: GuestAgent,
    options?: GuestAgentsCreateOptionalParams,
  ) => PollerLike<OperationState<GuestAgent>, GuestAgent>;
  delete: (
    resourceUri: string,
    options?: GuestAgentsDeleteOptionalParams,
  ) => Promise<void>;
  listByVirtualMachineInstance: (
    resourceUri: string,
    options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
  ) => PagedAsyncIterableIterator<GuestAgent>;
}

export function getGuestAgents(context: ScVmmContext) {
  return {
    get: (resourceUri: string, options?: GuestAgentsGetOptionalParams) =>
      get(context, resourceUri, options),
    create: (
      resourceUri: string,
      resource: GuestAgent,
      options?: GuestAgentsCreateOptionalParams,
    ) => create(context, resourceUri, resource, options),
    delete: (resourceUri: string, options?: GuestAgentsDeleteOptionalParams) =>
      $delete(context, resourceUri, options),
    listByVirtualMachineInstance: (
      resourceUri: string,
      options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
    ) => listByVirtualMachineInstance(context, resourceUri, options),
  };
}

export function getGuestAgentsOperations(
  context: ScVmmContext,
): GuestAgentsOperations {
  return {
    ...getGuestAgents(context),
  };
}
