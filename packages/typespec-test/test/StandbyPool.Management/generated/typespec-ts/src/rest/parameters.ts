// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  StandbyVirtualMachinePoolResource,
  StandbyVirtualMachinePoolResourceUpdate,
  StandbyContainerGroupPoolResource,
  StandbyContainerGroupPoolResourceUpdate,
} from "./models.js";

export type OperationsListParameters = RequestParameters;
export type StandbyVirtualMachinePoolsGetParameters = RequestParameters;

export interface StandbyVirtualMachinePoolsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: StandbyVirtualMachinePoolResource;
}

export type StandbyVirtualMachinePoolsCreateOrUpdateParameters =
  StandbyVirtualMachinePoolsCreateOrUpdateBodyParam & RequestParameters;
export type StandbyVirtualMachinePoolsDeleteParameters = RequestParameters;

export interface StandbyVirtualMachinePoolsUpdateBodyParam {
  /** The resource properties to be updated. */
  body: StandbyVirtualMachinePoolResourceUpdate;
}

export type StandbyVirtualMachinePoolsUpdateParameters =
  StandbyVirtualMachinePoolsUpdateBodyParam & RequestParameters;
export type StandbyVirtualMachinePoolsListByResourceGroupParameters =
  RequestParameters;
export type StandbyVirtualMachinePoolsListBySubscriptionParameters =
  RequestParameters;
export type StandbyVirtualMachinesGetParameters = RequestParameters;
export type StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceParameters =
  RequestParameters;
export type StandbyContainerGroupPoolsGetParameters = RequestParameters;

export interface StandbyContainerGroupPoolsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: StandbyContainerGroupPoolResource;
}

export type StandbyContainerGroupPoolsCreateOrUpdateParameters =
  StandbyContainerGroupPoolsCreateOrUpdateBodyParam & RequestParameters;
export type StandbyContainerGroupPoolsDeleteParameters = RequestParameters;

export interface StandbyContainerGroupPoolsUpdateBodyParam {
  /** The resource properties to be updated. */
  body: StandbyContainerGroupPoolResourceUpdate;
}

export type StandbyContainerGroupPoolsUpdateParameters =
  StandbyContainerGroupPoolsUpdateBodyParam & RequestParameters;
export type StandbyContainerGroupPoolsListByResourceGroupParameters =
  RequestParameters;
export type StandbyContainerGroupPoolsListBySubscriptionParameters =
  RequestParameters;
