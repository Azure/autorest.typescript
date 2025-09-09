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
    apcGatewayId: string,
    body: SimSwapVerificationContent,
    options?: SimSwapVerifyOptionalParams,
  ) => Promise<SimSwapVerificationResult>;
  /** Provides timestamp of latest SIM swap */
  retrieve: (
    apcGatewayId: string,
    body: SimSwapRetrievalContent,
    options?: SimSwapRetrieveOptionalParams,
  ) => Promise<SimSwapRetrievalResult>;
}

function _getSimSwap(context: ProgrammableConnectivityContext) {
  return {
    verify: (
      apcGatewayId: string,
      body: SimSwapVerificationContent,
      options?: SimSwapVerifyOptionalParams,
    ) => verify(context, apcGatewayId, body, options),
    retrieve: (
      apcGatewayId: string,
      body: SimSwapRetrievalContent,
      options?: SimSwapRetrieveOptionalParams,
    ) => retrieve(context, apcGatewayId, body, options),
  };
}

export function _getSimSwapOperations(
  context: ProgrammableConnectivityContext,
): SimSwapOperations {
  return {
    ..._getSimSwap(context),
  };
}
