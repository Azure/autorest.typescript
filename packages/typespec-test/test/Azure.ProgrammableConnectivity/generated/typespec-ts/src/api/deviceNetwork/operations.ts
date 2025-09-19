// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityContext as Client } from "../index.js";
import {
  NetworkIdentifier,
  networkIdentifierSerializer,
  NetworkRetrievalResult,
  networkRetrievalResultDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { DeviceNetworkRetrieveOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _retrieveSend(
  context: Client,
  apcGatewayId: string,
  body: NetworkIdentifier,
  options: DeviceNetworkRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/device-network/network:retrieve{?api%2Dversion}",
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
      body: networkIdentifierSerializer(body),
    });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkRetrievalResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return networkRetrievalResultDeserializer(result.body);
}

/** Retrieves the network a given device is on. Returns network in a networkCode format that can be used for other APIs. */
export async function retrieve(
  context: Client,
  apcGatewayId: string,
  body: NetworkIdentifier,
  options: DeviceNetworkRetrieveOptionalParams = { requestOptions: {} },
): Promise<NetworkRetrievalResult> {
  const result = await _retrieveSend(context, apcGatewayId, body, options);
  return _retrieveDeserialize(result);
}
