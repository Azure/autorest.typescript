// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityContext } from "../../api/programmableConnectivityContext.js";
import {
  verifyWithCode,
  verifyWithoutCode,
} from "../../api/numberVerification/operations.js";
import {
  NumberVerificationVerifyWithCodeOptionalParams,
  NumberVerificationVerifyWithoutCodeOptionalParams,
} from "../../api/numberVerification/options.js";
import {
  NumberVerificationWithoutCodeContent,
  NumberVerificationWithCodeContent,
  NumberVerificationResult,
} from "../../models/models.js";

/** Interface representing a NumberVerification operations. */
export interface NumberVerificationOperations {
  /** Verifies the phone number (MSISDN) associated with a device. */
  verifyWithCode: (
    body: NumberVerificationWithCodeContent,
    apcGatewayId: string,
    options?: NumberVerificationVerifyWithCodeOptionalParams,
  ) => Promise<NumberVerificationResult>;
  /** Verifies the phone number (MSISDN) associated with a device. As part of the frontend authorization flow, the device is redirected to the operator network to authenticate directly. */
  verifyWithoutCode: (
    body: NumberVerificationWithoutCodeContent,
    apcGatewayId: string,
    options?: NumberVerificationVerifyWithoutCodeOptionalParams,
  ) => Promise<void>;
}

function _getNumberVerification(context: ProgrammableConnectivityContext) {
  return {
    verifyWithCode: (
      body: NumberVerificationWithCodeContent,
      apcGatewayId: string,
      options?: NumberVerificationVerifyWithCodeOptionalParams,
    ) => verifyWithCode(context, body, apcGatewayId, options),
    verifyWithoutCode: (
      body: NumberVerificationWithoutCodeContent,
      apcGatewayId: string,
      options?: NumberVerificationVerifyWithoutCodeOptionalParams,
    ) => verifyWithoutCode(context, body, apcGatewayId, options),
  };
}

export function _getNumberVerificationOperations(
  context: ProgrammableConnectivityContext,
): NumberVerificationOperations {
  return {
    ..._getNumberVerification(context),
  };
}
