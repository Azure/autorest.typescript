// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  VirtualMachineInstance,
  VirtualMachineInstanceUpdate,
  StopVirtualMachineOptions,
  VirtualMachineCreateCheckpoint,
  VirtualMachineDeleteCheckpoint,
  VirtualMachineRestoreCheckpoint,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  list,
  stop,
  start,
  restart,
  createCheckpoint,
  deleteCheckpoint,
  restoreCheckpoint,
} from "../../api/virtualMachineInstances/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualMachineInstancesGetOptionalParams,
  VirtualMachineInstancesCreateOrUpdateOptionalParams,
  VirtualMachineInstancesUpdateOptionalParams,
  VirtualMachineInstancesDeleteOptionalParams,
  VirtualMachineInstancesListOptionalParams,
  VirtualMachineInstancesStopOptionalParams,
  VirtualMachineInstancesStartOptionalParams,
  VirtualMachineInstancesRestartOptionalParams,
  VirtualMachineInstancesCreateCheckpointOptionalParams,
  VirtualMachineInstancesDeleteCheckpointOptionalParams,
  VirtualMachineInstancesRestoreCheckpointOptionalParams,
} from "../../models/options.js";

export interface VirtualMachineInstancesOperations {
  get: (
    resourceUri: string,
    options?: VirtualMachineInstancesGetOptionalParams,
  ) => Promise<VirtualMachineInstance>;
  createOrUpdate: (
    resourceUri: string,
    resource: VirtualMachineInstance,
    options?: VirtualMachineInstancesCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<VirtualMachineInstance>,
    VirtualMachineInstance
  >;
  update: (
    resourceUri: string,
    properties: VirtualMachineInstanceUpdate,
    options?: VirtualMachineInstancesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<VirtualMachineInstance>,
    VirtualMachineInstance
  >;
  delete: (
    resourceUri: string,
    options?: VirtualMachineInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  list: (
    resourceUri: string,
    options?: VirtualMachineInstancesListOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineInstance>;
  stop: (
    resourceUri: string,
    body: StopVirtualMachineOptions,
    options?: VirtualMachineInstancesStopOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  start: (
    resourceUri: string,
    options?: VirtualMachineInstancesStartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  restart: (
    resourceUri: string,
    options?: VirtualMachineInstancesRestartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  createCheckpoint: (
    resourceUri: string,
    body: VirtualMachineCreateCheckpoint,
    options?: VirtualMachineInstancesCreateCheckpointOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  deleteCheckpoint: (
    resourceUri: string,
    body: VirtualMachineDeleteCheckpoint,
    options?: VirtualMachineInstancesDeleteCheckpointOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  restoreCheckpoint: (
    resourceUri: string,
    body: VirtualMachineRestoreCheckpoint,
    options?: VirtualMachineInstancesRestoreCheckpointOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getVirtualMachineInstances(context: ScVmmContext) {
  return {
    get: (
      resourceUri: string,
      options?: VirtualMachineInstancesGetOptionalParams,
    ) => get(context, resourceUri, options),
    createOrUpdate: (
      resourceUri: string,
      resource: VirtualMachineInstance,
      options?: VirtualMachineInstancesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceUri, resource, options),
    update: (
      resourceUri: string,
      properties: VirtualMachineInstanceUpdate,
      options?: VirtualMachineInstancesUpdateOptionalParams,
    ) => update(context, resourceUri, properties, options),
    delete: (
      resourceUri: string,
      options?: VirtualMachineInstancesDeleteOptionalParams,
    ) => $delete(context, resourceUri, options),
    list: (
      resourceUri: string,
      options?: VirtualMachineInstancesListOptionalParams,
    ) => list(context, resourceUri, options),
    stop: (
      resourceUri: string,
      body: StopVirtualMachineOptions,
      options?: VirtualMachineInstancesStopOptionalParams,
    ) => stop(context, resourceUri, body, options),
    start: (
      resourceUri: string,
      options?: VirtualMachineInstancesStartOptionalParams,
    ) => start(context, resourceUri, options),
    restart: (
      resourceUri: string,
      options?: VirtualMachineInstancesRestartOptionalParams,
    ) => restart(context, resourceUri, options),
    createCheckpoint: (
      resourceUri: string,
      body: VirtualMachineCreateCheckpoint,
      options?: VirtualMachineInstancesCreateCheckpointOptionalParams,
    ) => createCheckpoint(context, resourceUri, body, options),
    deleteCheckpoint: (
      resourceUri: string,
      body: VirtualMachineDeleteCheckpoint,
      options?: VirtualMachineInstancesDeleteCheckpointOptionalParams,
    ) => deleteCheckpoint(context, resourceUri, body, options),
    restoreCheckpoint: (
      resourceUri: string,
      body: VirtualMachineRestoreCheckpoint,
      options?: VirtualMachineInstancesRestoreCheckpointOptionalParams,
    ) => restoreCheckpoint(context, resourceUri, body, options),
  };
}

export function getVirtualMachineInstancesOperations(
  context: ScVmmContext,
): VirtualMachineInstancesOperations {
  return {
    ...getVirtualMachineInstances(context),
  };
}
