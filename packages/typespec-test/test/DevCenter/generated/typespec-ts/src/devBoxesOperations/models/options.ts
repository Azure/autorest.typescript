// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface ListPoolsOptionalParams extends OperationOptions {}

export interface GetPoolOptionalParams extends OperationOptions {}

export interface ListSchedulesOptionalParams extends OperationOptions {}

export interface GetScheduleOptionalParams extends OperationOptions {}

export interface ListAllDevBoxesOptionalParams extends OperationOptions {}

export interface ListAllDevBoxesByUserOptionalParams extends OperationOptions {}

export interface ListDevBoxesOptionalParams extends OperationOptions {}

export interface GetDevBoxOptionalParams extends OperationOptions {}

export interface CreateDevBoxOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DeleteDevBoxOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface StartDevBoxOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface StopDevBoxOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Optional parameter to hibernate the dev box. */
  hibernate?: boolean;
}

export interface RestartDevBoxOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface GetRemoteConnectionOptionalParams extends OperationOptions {}

export interface ListDevBoxActionsOptionalParams extends OperationOptions {}

export interface GetDevBoxActionOptionalParams extends OperationOptions {}

export interface SkipActionOptionalParams extends OperationOptions {}

export interface DelayActionOptionalParams extends OperationOptions {}

export interface DelayAllActionsOptionalParams extends OperationOptions {}
