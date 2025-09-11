// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityContext as Client } from "../index.js";
import {
  NumberVerificationWithoutCodeContent,
  numberVerificationWithoutCodeContentSerializer,
  NumberVerificationWithCodeContent,
  numberVerificationWithCodeContentSerializer,
  NumberVerificationResult,
  numberVerificationResultDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  NumberVerificationVerifyWithCodeOptionalParams,
  NumberVerificationVerifyWithoutCodeOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _verifyWithCodeSend(
  context: Client,
  apcGatewayId: string,
  body: NumberVerificationWithCodeContent,
  options: NumberVerificationVerifyWithCodeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/number-verification/number:verify{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        "apc-gateway-id": apcGatewayId,
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: numberVerificationWithCodeContentSerializer(body),
    });
}

export async function _verifyWithCodeDeserialize(
  result: PathUncheckedResponse,
): Promise<NumberVerificationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return numberVerificationResultDeserializer(result.body);
}

/** Verifies the phone number (MSISDN) associated with a device. */
export async function verifyWithCode(
  context: Client,
  apcGatewayId: string,
  body: NumberVerificationWithCodeContent,
  options: NumberVerificationVerifyWithCodeOptionalParams = {
    requestOptions: {},
  },
): Promise<NumberVerificationResult> {
  const result = await _verifyWithCodeSend(
    context,
    apcGatewayId,
    body,
    options,
  );
  return _verifyWithCodeDeserialize(result);
}

export function _verifyWithoutCodeSend(
  context: Client,
  apcGatewayId: string,
  body: NumberVerificationWithoutCodeContent,
  options: NumberVerificationVerifyWithoutCodeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/number-verification/number:verify{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        "apc-gateway-id": apcGatewayId,
        ...options.requestOptions?.headers,
      },
      body: numberVerificationWithoutCodeContentSerializer(body),
    });
}

export async function _verifyWithoutCodeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["302"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Verifies the phone number (MSISDN) associated with a device. As part of the frontend authorization flow, the device is redirected to the operator network to authenticate directly. */
export async function verifyWithoutCode(
  context: Client,
  apcGatewayId: string,
  body: NumberVerificationWithoutCodeContent,
  options: NumberVerificationVerifyWithoutCodeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _verifyWithoutCodeSend(
    context,
    apcGatewayId,
    body,
    options,
  );
  return _verifyWithoutCodeDeserialize(result);
}
