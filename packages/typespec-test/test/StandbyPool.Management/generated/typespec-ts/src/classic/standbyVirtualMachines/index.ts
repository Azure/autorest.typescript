// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StandbyPoolContext } from "../../api/standbyPoolContext.js";
import { StandbyVirtualMachineResource } from "../../models/models.js";
import {
  get,
  listByStandbyVirtualMachinePoolResource,
} from "../../api/standbyVirtualMachines/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  StandbyVirtualMachinesGetOptionalParams,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
} from "../../models/options.js";

export interface StandbyVirtualMachinesOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    standbyVirtualMachineName: string,
    options?: StandbyVirtualMachinesGetOptionalParams,
  ) => Promise<StandbyVirtualMachineResource>;
  listByStandbyVirtualMachinePoolResource: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    options?: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyVirtualMachineResource>;
}

export function getStandbyVirtualMachines(context: StandbyPoolContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      standbyVirtualMachineName: string,
      options?: StandbyVirtualMachinesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        standbyVirtualMachineName,
        options,
      ),
    listByStandbyVirtualMachinePoolResource: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      options?: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
    ) =>
      listByStandbyVirtualMachinePoolResource(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
  };
}

export function getStandbyVirtualMachinesOperations(
  context: StandbyPoolContext,
): StandbyVirtualMachinesOperations {
  return {
    ...getStandbyVirtualMachines(context),
  };
}
