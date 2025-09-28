// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityContext } from "../../api/programmableConnectivityContext.js";
import { verify } from "../../api/deviceLocation/operations.js";
import { DeviceLocationVerifyOptionalParams } from "../../api/deviceLocation/options.js";
import {
  DeviceLocationVerificationContent,
  DeviceLocationVerificationResult,
} from "../../models/models.js";

/** Interface representing a DeviceLocation operations. */
export interface DeviceLocationOperations {
  /** Verifies whether a device is within a specified location area, defined as an accuracy (radius) around a point, specified by longitude and latitude. */
  verify: (
    body: DeviceLocationVerificationContent,
    apcGatewayId: string,
    options?: DeviceLocationVerifyOptionalParams,
  ) => Promise<DeviceLocationVerificationResult>;
}

function _getDeviceLocation(context: ProgrammableConnectivityContext) {
  return {
    verify: (
      body: DeviceLocationVerificationContent,
      apcGatewayId: string,
      options?: DeviceLocationVerifyOptionalParams,
    ) => verify(context, body, apcGatewayId, options),
  };
}

export function _getDeviceLocationOperations(
  context: ProgrammableConnectivityContext,
): DeviceLocationOperations {
  return {
    ..._getDeviceLocation(context),
  };
}
