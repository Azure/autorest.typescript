// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityContext as Client } from "../index.js";
import {
  DeviceLocationVerificationContent,
  deviceLocationVerificationContentSerializer,
  DeviceLocationVerificationResult,
  deviceLocationVerificationResultDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { DeviceLocationVerifyOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _verifySend(
  context: Client,
  body: DeviceLocationVerificationContent,
  apcGatewayId: string,
  options: DeviceLocationVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/device-location/location:verify{?api%2Dversion}",
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
      body: deviceLocationVerificationContentSerializer(body),
    });
}

export async function _verifyDeserialize(
  result: PathUncheckedResponse,
): Promise<DeviceLocationVerificationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return deviceLocationVerificationResultDeserializer(result.body);
}

/** Verifies whether a device is within a specified location area, defined as an accuracy (radius) around a point, specified by longitude and latitude. */
export async function verify(
  context: Client,
  body: DeviceLocationVerificationContent,
  apcGatewayId: string,
  options: DeviceLocationVerifyOptionalParams = { requestOptions: {} },
): Promise<DeviceLocationVerificationResult> {
  const result = await _verifySend(context, body, apcGatewayId, options);
  return _verifyDeserialize(result);
}
