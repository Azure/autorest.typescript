// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import { OperationStatusResult } from "../../models/models.js";
import { get } from "../../api/operationStatus/index.js";
import { OperationStatusGetOptionalParams } from "../../models/options.js";

export interface OperationStatusOperations {
  get: (
    subscriptionId: string,
    location: string,
    operationId: string,
    options?: OperationStatusGetOptionalParams,
  ) => Promise<OperationStatusResult>;
}

export function getOperationStatus(context: DeviceRegistryContext) {
  return {
    get: (
      subscriptionId: string,
      location: string,
      operationId: string,
      options?: OperationStatusGetOptionalParams,
    ) => get(context, subscriptionId, location, operationId, options),
  };
}

export function getOperationStatusOperations(
  context: DeviceRegistryContext,
): OperationStatusOperations {
  return {
    ...getOperationStatus(context),
  };
}
