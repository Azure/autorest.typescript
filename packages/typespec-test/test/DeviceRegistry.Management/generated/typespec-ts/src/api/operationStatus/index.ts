// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationStatusResult } from "../../models/models.js";
import {
  isUnexpected,
  DeviceRegistryContext as Client,
  OperationStatusGet200Response,
  OperationStatusGetDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { OperationStatusGetOptionalParams } from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  location: string,
  operationId: string,
  options: OperationStatusGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  OperationStatusGet200Response | OperationStatusGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/locations/{location}/operationStatuses/{operationId}",
      subscriptionId,
      location,
      operationId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: OperationStatusGet200Response | OperationStatusGetDefaultResponse,
): Promise<OperationStatusResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    status: result.body["status"],
    percentComplete: result.body["percentComplete"],
    startTime:
      result.body["startTime"] !== undefined
        ? new Date(result.body["startTime"])
        : undefined,
    endTime:
      result.body["endTime"] !== undefined
        ? new Date(result.body["endTime"])
        : undefined,
    operations: result.body["operations"].map((p) => ({
      id: p["id"],
      name: p["name"],
      status: p["status"],
      percentComplete: p["percentComplete"],
      startTime:
        p["startTime"] !== undefined ? new Date(p["startTime"]) : undefined,
      endTime: p["endTime"] !== undefined ? new Date(p["endTime"]) : undefined,
      operations: p.operations as any,
      error: !p.error
        ? undefined
        : {
            code: p.error?.["code"],
            message: p.error?.["message"],
            target: p.error?.["target"],
            details:
              p.error?.["details"] === undefined
                ? p.error?.["details"]
                : p.error?.["details"].map((p) => ({
                    code: p["code"],
                    message: p["message"],
                    target: p["target"],
                    details: !p.details ? undefined : p.details,
                    additionalInfo:
                      p["additionalInfo"] === undefined
                        ? p["additionalInfo"]
                        : p["additionalInfo"].map((p) => ({
                            type: p["type"],
                            info: p["info"],
                          })),
                  })),
            additionalInfo:
              p.error?.["additionalInfo"] === undefined
                ? p.error?.["additionalInfo"]
                : p.error?.["additionalInfo"].map((p) => ({
                    type: p["type"],
                    info: p["info"],
                  })),
          },
    })),
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
          target: result.body.error?.["target"],
          details:
            result.body.error?.["details"] === undefined
              ? result.body.error?.["details"]
              : result.body.error?.["details"].map((p) => ({
                  code: p["code"],
                  message: p["message"],
                  target: p["target"],
                  details: !p.details ? undefined : p.details,
                  additionalInfo:
                    p["additionalInfo"] === undefined
                      ? p["additionalInfo"]
                      : p["additionalInfo"].map((p) => ({
                          type: p["type"],
                          info: p["info"],
                        })),
                })),
          additionalInfo:
            result.body.error?.["additionalInfo"] === undefined
              ? result.body.error?.["additionalInfo"]
              : result.body.error?.["additionalInfo"].map((p) => ({
                  type: p["type"],
                  info: p["info"],
                })),
        },
  };
}

/** Returns the current status of an async operation. */
export async function get(
  context: Client,
  subscriptionId: string,
  location: string,
  operationId: string,
  options: OperationStatusGetOptionalParams = { requestOptions: {} },
): Promise<OperationStatusResult> {
  const result = await _getSend(
    context,
    subscriptionId,
    location,
    operationId,
    options,
  );
  return _getDeserialize(result);
}
