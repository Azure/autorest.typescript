// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityContext as Client } from "../index.js";
import {
  SimSwapRetrievalContent,
  simSwapRetrievalContentSerializer,
  SimSwapRetrievalResult,
  simSwapRetrievalResultDeserializer,
  SimSwapVerificationContent,
  simSwapVerificationContentSerializer,
  SimSwapVerificationResult,
  simSwapVerificationResultDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  SimSwapVerifyOptionalParams,
  SimSwapRetrieveOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _verifySend(
  context: Client,
  apcGatewayId: string,
  body: SimSwapVerificationContent,
  options: SimSwapVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/sim-swap/sim-swap:verify{?api%2Dversion}",
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
      body: simSwapVerificationContentSerializer(body),
    });
}

export async function _verifyDeserialize(
  result: PathUncheckedResponse,
): Promise<SimSwapVerificationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return simSwapVerificationResultDeserializer(result.body);
}

/** Verifies if a SIM swap has been performed during a past period (defined in the request with 'maxAgeHours' attribute). Returns 'True' if a SIM swap has occured. */
export async function verify(
  context: Client,
  apcGatewayId: string,
  body: SimSwapVerificationContent,
  options: SimSwapVerifyOptionalParams = { requestOptions: {} },
): Promise<SimSwapVerificationResult> {
  const result = await _verifySend(context, apcGatewayId, body, options);
  return _verifyDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  apcGatewayId: string,
  body: SimSwapRetrievalContent,
  options: SimSwapRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/sim-swap/sim-swap:retrieve{?api%2Dversion}",
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
      body: simSwapRetrievalContentSerializer(body),
    });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<SimSwapRetrievalResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return simSwapRetrievalResultDeserializer(result.body);
}

/** Provides timestamp of latest SIM swap */
export async function retrieve(
  context: Client,
  apcGatewayId: string,
  body: SimSwapRetrievalContent,
  options: SimSwapRetrieveOptionalParams = { requestOptions: {} },
): Promise<SimSwapRetrievalResult> {
  const result = await _retrieveSend(context, apcGatewayId, body, options);
  return _retrieveDeserialize(result);
}
