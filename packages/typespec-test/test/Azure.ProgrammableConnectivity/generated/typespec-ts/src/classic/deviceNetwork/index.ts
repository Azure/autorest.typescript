// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityContext } from "../../api/programmableConnectivityContext.js";
import { retrieve } from "../../api/deviceNetwork/operations.js";
import { DeviceNetworkRetrieveOptionalParams } from "../../api/deviceNetwork/options.js";
import {
  NetworkIdentifier,
  NetworkRetrievalResult,
} from "../../models/models.js";

/** Interface representing a DeviceNetwork operations. */
export interface DeviceNetworkOperations {
  /** Retrieves the network a given device is on. Returns network in a networkCode format that can be used for other APIs. */
  retrieve: (
    apcGatewayId: string,
    body: NetworkIdentifier,
    options?: DeviceNetworkRetrieveOptionalParams,
  ) => Promise<NetworkRetrievalResult>;
}

function _getDeviceNetwork(context: ProgrammableConnectivityContext) {
  return {
    retrieve: (
      apcGatewayId: string,
      body: NetworkIdentifier,
      options?: DeviceNetworkRetrieveOptionalParams,
    ) => retrieve(context, apcGatewayId, body, options),
  };
}

export function _getDeviceNetworkOperations(
  context: ProgrammableConnectivityContext,
): DeviceNetworkOperations {
  return {
    ..._getDeviceNetwork(context),
  };
}
