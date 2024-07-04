// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import { OperationStatusResult } from "../../models/models.js";
import { get } from "../../api/operationStatus/index.js";
import { OperationStatusGetOptionalParams } from "../../models/options.js";

/** Interface representing a OperationStatus operations. */
export interface OperationStatusOperations {
  /** Returns the current status of an async operation. */
  get: (
    location: string,
    operationId: string,
    options?: OperationStatusGetOptionalParams,
  ) => Promise<OperationStatusResult>;
}

export function getOperationStatus(
  context: DeviceRegistryContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      operationId: string,
      options?: OperationStatusGetOptionalParams,
    ) => get(context, subscriptionId, location, operationId, options),
  };
}

export function getOperationStatusOperations(
  context: DeviceRegistryContext,
  subscriptionId: string,
): OperationStatusOperations {
  return {
    ...getOperationStatus(context, subscriptionId),
  };
}
