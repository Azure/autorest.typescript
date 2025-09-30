// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityContext } from "../../api/programmableConnectivityContext.js";
import { verify, retrieve } from "../../api/simSwap/operations.js";
import {
  SimSwapVerifyOptionalParams,
  SimSwapRetrieveOptionalParams,
} from "../../api/simSwap/options.js";
import {
  SimSwapRetrievalContent,
  SimSwapRetrievalResult,
  SimSwapVerificationContent,
  SimSwapVerificationResult,
} from "../../models/models.js";

/** Interface representing a SimSwap operations. */
export interface SimSwapOperations {
  /** Verifies if a SIM swap has been performed during a past period (defined in the request with 'maxAgeHours' attribute). Returns 'True' if a SIM swap has occured. */
  verify: (
    body: SimSwapVerificationContent,
    apcGatewayId: string,
    options?: SimSwapVerifyOptionalParams,
  ) => Promise<SimSwapVerificationResult>;
  /** Provides timestamp of latest SIM swap */
  retrieve: (
    body: SimSwapRetrievalContent,
    apcGatewayId: string,
    options?: SimSwapRetrieveOptionalParams,
  ) => Promise<SimSwapRetrievalResult>;
}

function _getSimSwap(context: ProgrammableConnectivityContext) {
  return {
    verify: (
      body: SimSwapVerificationContent,
      apcGatewayId: string,
      options?: SimSwapVerifyOptionalParams,
    ) => verify(context, body, apcGatewayId, options),
    retrieve: (
      body: SimSwapRetrievalContent,
      apcGatewayId: string,
      options?: SimSwapRetrieveOptionalParams,
    ) => retrieve(context, body, apcGatewayId, options),
  };
}

export function _getSimSwapOperations(
  context: ProgrammableConnectivityContext,
): SimSwapOperations {
  return {
    ..._getSimSwap(context),
  };
}
