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

  const _result = result as unknown as OperationStatusGet200Response;
  return {
    id: _result.body["id"],
    name: _result.body["name"],
    status: _result.body["status"],
    percentComplete: _result.body["percentComplete"],
    startTime:
      _result.body["startTime"] !== undefined
        ? new Date(_result.body["startTime"])
        : undefined,
    endTime:
      _result.body["endTime"] !== undefined
        ? new Date(_result.body["endTime"])
        : undefined,
    operations:
      _result.body["operations"] === undefined
        ? _result.body["operations"]
        : _result.body["operations"].map((p) => {
            return {
              id: p["id"],
              name: p["name"],
              status: p["status"],
              percentComplete: p["percentComplete"],
              startTime:
                p["startTime"] !== undefined
                  ? new Date(p["startTime"])
                  : undefined,
              endTime:
                p["endTime"] !== undefined ? new Date(p["endTime"]) : undefined,
              operations: !p.operations ? undefined : (p.operations as any),
              error: !p.error
                ? undefined
                : {
                    code: p.error?.["code"],
                    message: p.error?.["message"],
                    target: p.error?.["target"],
                    details:
                      p.error?.["details"] === undefined
                        ? p.error?.["details"]
                        : p.error?.["details"].map((p) => {
                            return {
                              code: p["code"],
                              message: p["message"],
                              target: p["target"],
                              details: !p.details ? undefined : p.details,
                              additionalInfo:
                                p["additionalInfo"] === undefined
                                  ? p["additionalInfo"]
                                  : p["additionalInfo"].map((p) => {
                                      return {
                                        type: p["type"],
                                        info: p["info"],
                                      };
                                    }),
                            };
                          }),
                    additionalInfo:
                      p.error?.["additionalInfo"] === undefined
                        ? p.error?.["additionalInfo"]
                        : p.error?.["additionalInfo"].map((p) => {
                            return { type: p["type"], info: p["info"] };
                          }),
                  },
            };
          }),
    error: !_result.body.error
      ? undefined
      : {
          code: _result.body.error?.["code"],
          message: _result.body.error?.["message"],
          target: _result.body.error?.["target"],
          details:
            _result.body.error?.["details"] === undefined
              ? _result.body.error?.["details"]
              : _result.body.error?.["details"].map((p) => {
                  return {
                    code: p["code"],
                    message: p["message"],
                    target: p["target"],
                    details: !p.details ? undefined : p.details,
                    additionalInfo:
                      p["additionalInfo"] === undefined
                        ? p["additionalInfo"]
                        : p["additionalInfo"].map((p) => {
                            return { type: p["type"], info: p["info"] };
                          }),
                  };
                }),
          additionalInfo:
            _result.body.error?.["additionalInfo"] === undefined
              ? _result.body.error?.["additionalInfo"]
              : _result.body.error?.["additionalInfo"].map((p) => {
                  return { type: p["type"], info: p["info"] };
                }),
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
