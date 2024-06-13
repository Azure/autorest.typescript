// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createAzureFleet,
  AzureFleetClientOptions,
  AzureFleetContext,
} from "./azureFleetContext.js";
export {
  list,
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
  listVirtualMachineScaleSets,
} from "./operations.js";
