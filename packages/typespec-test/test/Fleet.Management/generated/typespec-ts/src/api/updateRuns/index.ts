// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  UpdateRun,
  UpdateRunListResult,
  SkipProperties,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ContainerServiceContext as Client,
  UpdateRunsCreateOrUpdate200Response,
  UpdateRunsCreateOrUpdate201Response,
  UpdateRunsCreateOrUpdateDefaultResponse,
  UpdateRunsCreateOrUpdateLogicalResponse,
  UpdateRunsDelete200Response,
  UpdateRunsDelete202Response,
  UpdateRunsDelete204Response,
  UpdateRunsDeleteDefaultResponse,
  UpdateRunsDeleteLogicalResponse,
  UpdateRunsGet200Response,
  UpdateRunsGetDefaultResponse,
  UpdateRunsListByFleet200Response,
  UpdateRunsListByFleetDefaultResponse,
  UpdateRunsSkip200Response,
  UpdateRunsSkip202Response,
  UpdateRunsSkipDefaultResponse,
  UpdateRunsSkipLogicalResponse,
  UpdateRunsStart200Response,
  UpdateRunsStart202Response,
  UpdateRunsStartDefaultResponse,
  UpdateRunsStartLogicalResponse,
  UpdateRunsStop200Response,
  UpdateRunsStop202Response,
  UpdateRunsStopDefaultResponse,
  UpdateRunsStopLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UpdateRunsGetOptionalParams,
  UpdateRunsCreateOrUpdateOptionalParams,
  UpdateRunsDeleteOptionalParams,
  UpdateRunsListByFleetOptionalParams,
  UpdateRunsStartOptionalParams,
  UpdateRunsStopOptionalParams,
  UpdateRunsSkipOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  options: UpdateRunsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<UpdateRunsGet200Response | UpdateRunsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      updateRunName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: UpdateRunsGet200Response | UpdateRunsGetDefaultResponse,
): Promise<UpdateRun> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          updateStrategyId: result.body.properties?.["updateStrategyId"],
          strategy: !result.body.properties?.strategy
            ? undefined
            : {
                stages: result.body.properties?.strategy?.["stages"].map(
                  (p) => ({
                    name: p["name"],
                    groups:
                      p["groups"] === undefined
                        ? p["groups"]
                        : p["groups"].map((p) => ({ name: p["name"] })),
                    afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
                  }),
                ),
              },
          managedClusterUpdate: {
            upgrade: {
              type: result.body.properties?.managedClusterUpdate.upgrade[
                "type"
              ],
              kubernetesVersion:
                result.body.properties?.managedClusterUpdate.upgrade[
                  "kubernetesVersion"
                ],
            },
            nodeImageSelection: !result.body.properties?.managedClusterUpdate
              .nodeImageSelection
              ? undefined
              : {
                  type: result.body.properties?.managedClusterUpdate
                    .nodeImageSelection?.["type"],
                },
          },
          status: !result.body.properties?.status
            ? undefined
            : {
                status: !result.body.properties?.status?.status
                  ? undefined
                  : {
                      startTime:
                        result.body.properties?.status?.status?.[
                          "startTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "startTime"
                              ],
                            )
                          : undefined,
                      completedTime:
                        result.body.properties?.status?.status?.[
                          "completedTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "completedTime"
                              ],
                            )
                          : undefined,
                      state: result.body.properties?.status?.status?.["state"],
                      error: !result.body.properties?.status?.status?.error
                        ? undefined
                        : {
                            code: result.body.properties?.status?.status
                              ?.error?.["code"],
                            message:
                              result.body.properties?.status?.status?.error?.[
                                "message"
                              ],
                            target:
                              result.body.properties?.status?.status?.error?.[
                                "target"
                              ],
                            details:
                              result.body.properties?.status?.status?.error?.[
                                "details"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["details"]
                                : result.body.properties?.status?.status?.error?.[
                                    "details"
                                  ].map((p) => ({
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
                              result.body.properties?.status?.status?.error?.[
                                "additionalInfo"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["additionalInfo"]
                                : result.body.properties?.status?.status?.error?.[
                                    "additionalInfo"
                                  ].map((p) => ({
                                    type: p["type"],
                                    info: p["info"],
                                  })),
                          },
                    },
                stages:
                  result.body.properties?.status?.["stages"] === undefined
                    ? result.body.properties?.status?.["stages"]
                    : result.body.properties?.status?.["stages"].map((p) => ({
                        status: !p.status
                          ? undefined
                          : {
                              startTime:
                                p.status?.["startTime"] !== undefined
                                  ? new Date(p.status?.["startTime"])
                                  : undefined,
                              completedTime:
                                p.status?.["completedTime"] !== undefined
                                  ? new Date(p.status?.["completedTime"])
                                  : undefined,
                              state: p.status?.["state"],
                              error: !p.status?.error
                                ? undefined
                                : {
                                    code: p.status?.error?.["code"],
                                    message: p.status?.error?.["message"],
                                    target: p.status?.error?.["target"],
                                    details:
                                      p.status?.error?.["details"] === undefined
                                        ? p.status?.error?.["details"]
                                        : p.status?.error?.["details"].map(
                                            (p) => ({
                                              code: p["code"],
                                              message: p["message"],
                                              target: p["target"],
                                              details: !p.details
                                                ? undefined
                                                : p.details,
                                              additionalInfo:
                                                p["additionalInfo"] ===
                                                undefined
                                                  ? p["additionalInfo"]
                                                  : p["additionalInfo"].map(
                                                      (p) => ({
                                                        type: p["type"],
                                                        info: p["info"],
                                                      }),
                                                    ),
                                            }),
                                          ),
                                    additionalInfo:
                                      p.status?.error?.["additionalInfo"] ===
                                      undefined
                                        ? p.status?.error?.["additionalInfo"]
                                        : p.status?.error?.[
                                            "additionalInfo"
                                          ].map((p) => ({
                                            type: p["type"],
                                            info: p["info"],
                                          })),
                                  },
                            },
                        name: p["name"],
                        groups:
                          p["groups"] === undefined
                            ? p["groups"]
                            : p["groups"].map((p) => ({
                                status: !p.status
                                  ? undefined
                                  : {
                                      startTime:
                                        p.status?.["startTime"] !== undefined
                                          ? new Date(p.status?.["startTime"])
                                          : undefined,
                                      completedTime:
                                        p.status?.["completedTime"] !==
                                        undefined
                                          ? new Date(
                                              p.status?.["completedTime"],
                                            )
                                          : undefined,
                                      state: p.status?.["state"],
                                      error: !p.status?.error
                                        ? undefined
                                        : {
                                            code: p.status?.error?.["code"],
                                            message:
                                              p.status?.error?.["message"],
                                            target: p.status?.error?.["target"],
                                            details:
                                              p.status?.error?.["details"] ===
                                              undefined
                                                ? p.status?.error?.["details"]
                                                : p.status?.error?.[
                                                    "details"
                                                  ].map((p) => ({
                                                    code: p["code"],
                                                    message: p["message"],
                                                    target: p["target"],
                                                    details: !p.details
                                                      ? undefined
                                                      : p.details,
                                                    additionalInfo:
                                                      p["additionalInfo"] ===
                                                      undefined
                                                        ? p["additionalInfo"]
                                                        : p[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  })),
                                            additionalInfo:
                                              p.status?.error?.[
                                                "additionalInfo"
                                              ] === undefined
                                                ? p.status?.error?.[
                                                    "additionalInfo"
                                                  ]
                                                : p.status?.error?.[
                                                    "additionalInfo"
                                                  ].map((p) => ({
                                                    type: p["type"],
                                                    info: p["info"],
                                                  })),
                                          },
                                    },
                                name: p["name"],
                                members:
                                  p["members"] === undefined
                                    ? p["members"]
                                    : p["members"].map((p) => ({
                                        status: !p.status
                                          ? undefined
                                          : {
                                              startTime:
                                                p.status?.["startTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.["startTime"],
                                                    )
                                                  : undefined,
                                              completedTime:
                                                p.status?.["completedTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.[
                                                        "completedTime"
                                                      ],
                                                    )
                                                  : undefined,
                                              state: p.status?.["state"],
                                              error: !p.status?.error
                                                ? undefined
                                                : {
                                                    code: p.status?.error?.[
                                                      "code"
                                                    ],
                                                    message:
                                                      p.status?.error?.[
                                                        "message"
                                                      ],
                                                    target:
                                                      p.status?.error?.[
                                                        "target"
                                                      ],
                                                    details:
                                                      p.status?.error?.[
                                                        "details"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "details"
                                                          ]
                                                        : p.status?.error?.[
                                                            "details"
                                                          ].map((p) => ({
                                                            code: p["code"],
                                                            message:
                                                              p["message"],
                                                            target: p["target"],
                                                            details: !p.details
                                                              ? undefined
                                                              : p.details,
                                                            additionalInfo:
                                                              p[
                                                                "additionalInfo"
                                                              ] === undefined
                                                                ? p[
                                                                    "additionalInfo"
                                                                  ]
                                                                : p[
                                                                    "additionalInfo"
                                                                  ].map(
                                                                    (p) => ({
                                                                      type: p[
                                                                        "type"
                                                                      ],
                                                                      info: p[
                                                                        "info"
                                                                      ],
                                                                    }),
                                                                  ),
                                                          })),
                                                    additionalInfo:
                                                      p.status?.error?.[
                                                        "additionalInfo"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "additionalInfo"
                                                          ]
                                                        : p.status?.error?.[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  },
                                            },
                                        name: p["name"],
                                        clusterResourceId:
                                          p["clusterResourceId"],
                                        operationId: p["operationId"],
                                        message: p["message"],
                                      })),
                              })),
                        afterStageWaitStatus: !p.afterStageWaitStatus
                          ? undefined
                          : {
                              status: !p.afterStageWaitStatus?.status
                                ? undefined
                                : {
                                    startTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "startTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "startTime"
                                            ],
                                          )
                                        : undefined,
                                    completedTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "completedTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "completedTime"
                                            ],
                                          )
                                        : undefined,
                                    state:
                                      p.afterStageWaitStatus?.status?.["state"],
                                    error: !p.afterStageWaitStatus?.status
                                      ?.error
                                      ? undefined
                                      : {
                                          code: p.afterStageWaitStatus?.status
                                            ?.error?.["code"],
                                          message:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["message"],
                                          target:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["target"],
                                          details:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["details"] === undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["details"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "details"
                                                ].map((p) => ({
                                                  code: p["code"],
                                                  message: p["message"],
                                                  target: p["target"],
                                                  details: !p.details
                                                    ? undefined
                                                    : p.details,
                                                  additionalInfo:
                                                    p["additionalInfo"] ===
                                                    undefined
                                                      ? p["additionalInfo"]
                                                      : p["additionalInfo"].map(
                                                          (p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          }),
                                                        ),
                                                })),
                                          additionalInfo:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["additionalInfo"] ===
                                            undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["additionalInfo"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "additionalInfo"
                                                ].map((p) => ({
                                                  type: p["type"],
                                                  info: p["info"],
                                                })),
                                        },
                                  },
                              waitDurationInSeconds:
                                p.afterStageWaitStatus?.[
                                  "waitDurationInSeconds"
                                ],
                            },
                      })),
                nodeImageSelection: !result.body.properties?.status
                  ?.nodeImageSelection
                  ? undefined
                  : {
                      selectedNodeImageVersions:
                        result.body.properties?.status?.nodeImageSelection?.[
                          "selectedNodeImageVersions"
                        ] === undefined
                          ? result.body.properties?.status
                              ?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ]
                          : result.body.properties?.status?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ].map((p) => ({ version: p["version"] })),
                    },
              },
        },
    eTag: result.body["eTag"],
  };
}

/** Get a UpdateRun */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  options: UpdateRunsGetOptionalParams = { requestOptions: {} },
): Promise<UpdateRun> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    fleetName,
    updateRunName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  resource: UpdateRun,
  options: UpdateRunsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | UpdateRunsCreateOrUpdate200Response
  | UpdateRunsCreateOrUpdate201Response
  | UpdateRunsCreateOrUpdateDefaultResponse
  | UpdateRunsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      updateRunName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
      },
      body: {
        properties: !resource.properties
          ? undefined
          : {
              updateStrategyId: resource.properties?.["updateStrategyId"],
              strategy: !resource.properties?.strategy
                ? undefined
                : {
                    stages: resource.properties?.strategy?.["stages"].map(
                      (p) => ({
                        name: p["name"],
                        groups:
                          p["groups"] === undefined
                            ? p["groups"]
                            : p["groups"].map((p) => ({ name: p["name"] })),
                        afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
                      }),
                    ),
                  },
              managedClusterUpdate: {
                upgrade: {
                  type: resource.properties?.managedClusterUpdate.upgrade[
                    "type"
                  ],
                  kubernetesVersion:
                    resource.properties?.managedClusterUpdate.upgrade[
                      "kubernetesVersion"
                    ],
                },
                nodeImageSelection: !resource.properties?.managedClusterUpdate
                  .nodeImageSelection
                  ? undefined
                  : {
                      type: resource.properties?.managedClusterUpdate
                        .nodeImageSelection?.["type"],
                    },
              },
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | UpdateRunsCreateOrUpdate200Response
    | UpdateRunsCreateOrUpdate201Response
    | UpdateRunsCreateOrUpdateDefaultResponse
    | UpdateRunsCreateOrUpdateLogicalResponse,
): Promise<UpdateRun> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as UpdateRunsCreateOrUpdateLogicalResponse;
  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          updateStrategyId: result.body.properties?.["updateStrategyId"],
          strategy: !result.body.properties?.strategy
            ? undefined
            : {
                stages: result.body.properties?.strategy?.["stages"].map(
                  (p) => ({
                    name: p["name"],
                    groups:
                      p["groups"] === undefined
                        ? p["groups"]
                        : p["groups"].map((p) => ({ name: p["name"] })),
                    afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
                  }),
                ),
              },
          managedClusterUpdate: {
            upgrade: {
              type: result.body.properties?.managedClusterUpdate.upgrade[
                "type"
              ],
              kubernetesVersion:
                result.body.properties?.managedClusterUpdate.upgrade[
                  "kubernetesVersion"
                ],
            },
            nodeImageSelection: !result.body.properties?.managedClusterUpdate
              .nodeImageSelection
              ? undefined
              : {
                  type: result.body.properties?.managedClusterUpdate
                    .nodeImageSelection?.["type"],
                },
          },
          status: !result.body.properties?.status
            ? undefined
            : {
                status: !result.body.properties?.status?.status
                  ? undefined
                  : {
                      startTime:
                        result.body.properties?.status?.status?.[
                          "startTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "startTime"
                              ],
                            )
                          : undefined,
                      completedTime:
                        result.body.properties?.status?.status?.[
                          "completedTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "completedTime"
                              ],
                            )
                          : undefined,
                      state: result.body.properties?.status?.status?.["state"],
                      error: !result.body.properties?.status?.status?.error
                        ? undefined
                        : {
                            code: result.body.properties?.status?.status
                              ?.error?.["code"],
                            message:
                              result.body.properties?.status?.status?.error?.[
                                "message"
                              ],
                            target:
                              result.body.properties?.status?.status?.error?.[
                                "target"
                              ],
                            details:
                              result.body.properties?.status?.status?.error?.[
                                "details"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["details"]
                                : result.body.properties?.status?.status?.error?.[
                                    "details"
                                  ].map((p) => ({
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
                              result.body.properties?.status?.status?.error?.[
                                "additionalInfo"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["additionalInfo"]
                                : result.body.properties?.status?.status?.error?.[
                                    "additionalInfo"
                                  ].map((p) => ({
                                    type: p["type"],
                                    info: p["info"],
                                  })),
                          },
                    },
                stages:
                  result.body.properties?.status?.["stages"] === undefined
                    ? result.body.properties?.status?.["stages"]
                    : result.body.properties?.status?.["stages"].map((p) => ({
                        status: !p.status
                          ? undefined
                          : {
                              startTime:
                                p.status?.["startTime"] !== undefined
                                  ? new Date(p.status?.["startTime"])
                                  : undefined,
                              completedTime:
                                p.status?.["completedTime"] !== undefined
                                  ? new Date(p.status?.["completedTime"])
                                  : undefined,
                              state: p.status?.["state"],
                              error: !p.status?.error
                                ? undefined
                                : {
                                    code: p.status?.error?.["code"],
                                    message: p.status?.error?.["message"],
                                    target: p.status?.error?.["target"],
                                    details:
                                      p.status?.error?.["details"] === undefined
                                        ? p.status?.error?.["details"]
                                        : p.status?.error?.["details"].map(
                                            (p) => ({
                                              code: p["code"],
                                              message: p["message"],
                                              target: p["target"],
                                              details: !p.details
                                                ? undefined
                                                : p.details,
                                              additionalInfo:
                                                p["additionalInfo"] ===
                                                undefined
                                                  ? p["additionalInfo"]
                                                  : p["additionalInfo"].map(
                                                      (p) => ({
                                                        type: p["type"],
                                                        info: p["info"],
                                                      }),
                                                    ),
                                            }),
                                          ),
                                    additionalInfo:
                                      p.status?.error?.["additionalInfo"] ===
                                      undefined
                                        ? p.status?.error?.["additionalInfo"]
                                        : p.status?.error?.[
                                            "additionalInfo"
                                          ].map((p) => ({
                                            type: p["type"],
                                            info: p["info"],
                                          })),
                                  },
                            },
                        name: p["name"],
                        groups:
                          p["groups"] === undefined
                            ? p["groups"]
                            : p["groups"].map((p) => ({
                                status: !p.status
                                  ? undefined
                                  : {
                                      startTime:
                                        p.status?.["startTime"] !== undefined
                                          ? new Date(p.status?.["startTime"])
                                          : undefined,
                                      completedTime:
                                        p.status?.["completedTime"] !==
                                        undefined
                                          ? new Date(
                                              p.status?.["completedTime"],
                                            )
                                          : undefined,
                                      state: p.status?.["state"],
                                      error: !p.status?.error
                                        ? undefined
                                        : {
                                            code: p.status?.error?.["code"],
                                            message:
                                              p.status?.error?.["message"],
                                            target: p.status?.error?.["target"],
                                            details:
                                              p.status?.error?.["details"] ===
                                              undefined
                                                ? p.status?.error?.["details"]
                                                : p.status?.error?.[
                                                    "details"
                                                  ].map((p) => ({
                                                    code: p["code"],
                                                    message: p["message"],
                                                    target: p["target"],
                                                    details: !p.details
                                                      ? undefined
                                                      : p.details,
                                                    additionalInfo:
                                                      p["additionalInfo"] ===
                                                      undefined
                                                        ? p["additionalInfo"]
                                                        : p[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  })),
                                            additionalInfo:
                                              p.status?.error?.[
                                                "additionalInfo"
                                              ] === undefined
                                                ? p.status?.error?.[
                                                    "additionalInfo"
                                                  ]
                                                : p.status?.error?.[
                                                    "additionalInfo"
                                                  ].map((p) => ({
                                                    type: p["type"],
                                                    info: p["info"],
                                                  })),
                                          },
                                    },
                                name: p["name"],
                                members:
                                  p["members"] === undefined
                                    ? p["members"]
                                    : p["members"].map((p) => ({
                                        status: !p.status
                                          ? undefined
                                          : {
                                              startTime:
                                                p.status?.["startTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.["startTime"],
                                                    )
                                                  : undefined,
                                              completedTime:
                                                p.status?.["completedTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.[
                                                        "completedTime"
                                                      ],
                                                    )
                                                  : undefined,
                                              state: p.status?.["state"],
                                              error: !p.status?.error
                                                ? undefined
                                                : {
                                                    code: p.status?.error?.[
                                                      "code"
                                                    ],
                                                    message:
                                                      p.status?.error?.[
                                                        "message"
                                                      ],
                                                    target:
                                                      p.status?.error?.[
                                                        "target"
                                                      ],
                                                    details:
                                                      p.status?.error?.[
                                                        "details"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "details"
                                                          ]
                                                        : p.status?.error?.[
                                                            "details"
                                                          ].map((p) => ({
                                                            code: p["code"],
                                                            message:
                                                              p["message"],
                                                            target: p["target"],
                                                            details: !p.details
                                                              ? undefined
                                                              : p.details,
                                                            additionalInfo:
                                                              p[
                                                                "additionalInfo"
                                                              ] === undefined
                                                                ? p[
                                                                    "additionalInfo"
                                                                  ]
                                                                : p[
                                                                    "additionalInfo"
                                                                  ].map(
                                                                    (p) => ({
                                                                      type: p[
                                                                        "type"
                                                                      ],
                                                                      info: p[
                                                                        "info"
                                                                      ],
                                                                    }),
                                                                  ),
                                                          })),
                                                    additionalInfo:
                                                      p.status?.error?.[
                                                        "additionalInfo"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "additionalInfo"
                                                          ]
                                                        : p.status?.error?.[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  },
                                            },
                                        name: p["name"],
                                        clusterResourceId:
                                          p["clusterResourceId"],
                                        operationId: p["operationId"],
                                        message: p["message"],
                                      })),
                              })),
                        afterStageWaitStatus: !p.afterStageWaitStatus
                          ? undefined
                          : {
                              status: !p.afterStageWaitStatus?.status
                                ? undefined
                                : {
                                    startTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "startTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "startTime"
                                            ],
                                          )
                                        : undefined,
                                    completedTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "completedTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "completedTime"
                                            ],
                                          )
                                        : undefined,
                                    state:
                                      p.afterStageWaitStatus?.status?.["state"],
                                    error: !p.afterStageWaitStatus?.status
                                      ?.error
                                      ? undefined
                                      : {
                                          code: p.afterStageWaitStatus?.status
                                            ?.error?.["code"],
                                          message:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["message"],
                                          target:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["target"],
                                          details:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["details"] === undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["details"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "details"
                                                ].map((p) => ({
                                                  code: p["code"],
                                                  message: p["message"],
                                                  target: p["target"],
                                                  details: !p.details
                                                    ? undefined
                                                    : p.details,
                                                  additionalInfo:
                                                    p["additionalInfo"] ===
                                                    undefined
                                                      ? p["additionalInfo"]
                                                      : p["additionalInfo"].map(
                                                          (p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          }),
                                                        ),
                                                })),
                                          additionalInfo:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["additionalInfo"] ===
                                            undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["additionalInfo"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "additionalInfo"
                                                ].map((p) => ({
                                                  type: p["type"],
                                                  info: p["info"],
                                                })),
                                        },
                                  },
                              waitDurationInSeconds:
                                p.afterStageWaitStatus?.[
                                  "waitDurationInSeconds"
                                ],
                            },
                      })),
                nodeImageSelection: !result.body.properties?.status
                  ?.nodeImageSelection
                  ? undefined
                  : {
                      selectedNodeImageVersions:
                        result.body.properties?.status?.nodeImageSelection?.[
                          "selectedNodeImageVersions"
                        ] === undefined
                          ? result.body.properties?.status
                              ?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ]
                          : result.body.properties?.status?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ].map((p) => ({ version: p["version"] })),
                    },
              },
        },
    eTag: result.body["eTag"],
  };
}

/** Create a UpdateRun */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  resource: UpdateRun,
  options: UpdateRunsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<UpdateRun>, UpdateRun> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<UpdateRun>, UpdateRun>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  options: UpdateRunsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | UpdateRunsDelete200Response
  | UpdateRunsDelete202Response
  | UpdateRunsDelete204Response
  | UpdateRunsDeleteDefaultResponse
  | UpdateRunsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      updateRunName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
    });
}

export async function _$deleteDeserialize(
  result:
    | UpdateRunsDelete200Response
    | UpdateRunsDelete202Response
    | UpdateRunsDelete204Response
    | UpdateRunsDeleteDefaultResponse
    | UpdateRunsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as UpdateRunsDeleteLogicalResponse;
  return;
}

/** Delete a UpdateRun */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  options: UpdateRunsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByFleetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: UpdateRunsListByFleetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  UpdateRunsListByFleet200Response | UpdateRunsListByFleetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByFleetDeserialize(
  result:
    | UpdateRunsListByFleet200Response
    | UpdateRunsListByFleetDefaultResponse,
): Promise<UpdateRunListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            provisioningState: p.properties?.["provisioningState"],
            updateStrategyId: p.properties?.["updateStrategyId"],
            strategy: !p.properties?.strategy
              ? undefined
              : {
                  stages: p.properties?.strategy?.["stages"].map((p) => ({
                    name: p["name"],
                    groups:
                      p["groups"] === undefined
                        ? p["groups"]
                        : p["groups"].map((p) => ({ name: p["name"] })),
                    afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
                  })),
                },
            managedClusterUpdate: {
              upgrade: {
                type: p.properties?.managedClusterUpdate.upgrade["type"],
                kubernetesVersion:
                  p.properties?.managedClusterUpdate.upgrade[
                    "kubernetesVersion"
                  ],
              },
              nodeImageSelection: !p.properties?.managedClusterUpdate
                .nodeImageSelection
                ? undefined
                : {
                    type: p.properties?.managedClusterUpdate
                      .nodeImageSelection?.["type"],
                  },
            },
            status: !p.properties?.status
              ? undefined
              : {
                  status: !p.properties?.status?.status
                    ? undefined
                    : {
                        startTime:
                          p.properties?.status?.status?.["startTime"] !==
                          undefined
                            ? new Date(
                                p.properties?.status?.status?.["startTime"],
                              )
                            : undefined,
                        completedTime:
                          p.properties?.status?.status?.["completedTime"] !==
                          undefined
                            ? new Date(
                                p.properties?.status?.status?.["completedTime"],
                              )
                            : undefined,
                        state: p.properties?.status?.status?.["state"],
                        error: !p.properties?.status?.status?.error
                          ? undefined
                          : {
                              code: p.properties?.status?.status?.error?.[
                                "code"
                              ],
                              message:
                                p.properties?.status?.status?.error?.[
                                  "message"
                                ],
                              target:
                                p.properties?.status?.status?.error?.["target"],
                              details:
                                p.properties?.status?.status?.error?.[
                                  "details"
                                ] === undefined
                                  ? p.properties?.status?.status?.error?.[
                                      "details"
                                    ]
                                  : p.properties?.status?.status?.error?.[
                                      "details"
                                    ].map((p) => ({
                                      code: p["code"],
                                      message: p["message"],
                                      target: p["target"],
                                      details: !p.details
                                        ? undefined
                                        : p.details,
                                      additionalInfo:
                                        p["additionalInfo"] === undefined
                                          ? p["additionalInfo"]
                                          : p["additionalInfo"].map((p) => ({
                                              type: p["type"],
                                              info: p["info"],
                                            })),
                                    })),
                              additionalInfo:
                                p.properties?.status?.status?.error?.[
                                  "additionalInfo"
                                ] === undefined
                                  ? p.properties?.status?.status?.error?.[
                                      "additionalInfo"
                                    ]
                                  : p.properties?.status?.status?.error?.[
                                      "additionalInfo"
                                    ].map((p) => ({
                                      type: p["type"],
                                      info: p["info"],
                                    })),
                            },
                      },
                  stages:
                    p.properties?.status?.["stages"] === undefined
                      ? p.properties?.status?.["stages"]
                      : p.properties?.status?.["stages"].map((p) => ({
                          status: !p.status
                            ? undefined
                            : {
                                startTime:
                                  p.status?.["startTime"] !== undefined
                                    ? new Date(p.status?.["startTime"])
                                    : undefined,
                                completedTime:
                                  p.status?.["completedTime"] !== undefined
                                    ? new Date(p.status?.["completedTime"])
                                    : undefined,
                                state: p.status?.["state"],
                                error: !p.status?.error
                                  ? undefined
                                  : {
                                      code: p.status?.error?.["code"],
                                      message: p.status?.error?.["message"],
                                      target: p.status?.error?.["target"],
                                      details:
                                        p.status?.error?.["details"] ===
                                        undefined
                                          ? p.status?.error?.["details"]
                                          : p.status?.error?.["details"].map(
                                              (p) => ({
                                                code: p["code"],
                                                message: p["message"],
                                                target: p["target"],
                                                details: !p.details
                                                  ? undefined
                                                  : p.details,
                                                additionalInfo:
                                                  p["additionalInfo"] ===
                                                  undefined
                                                    ? p["additionalInfo"]
                                                    : p["additionalInfo"].map(
                                                        (p) => ({
                                                          type: p["type"],
                                                          info: p["info"],
                                                        }),
                                                      ),
                                              }),
                                            ),
                                      additionalInfo:
                                        p.status?.error?.["additionalInfo"] ===
                                        undefined
                                          ? p.status?.error?.["additionalInfo"]
                                          : p.status?.error?.[
                                              "additionalInfo"
                                            ].map((p) => ({
                                              type: p["type"],
                                              info: p["info"],
                                            })),
                                    },
                              },
                          name: p["name"],
                          groups:
                            p["groups"] === undefined
                              ? p["groups"]
                              : p["groups"].map((p) => ({
                                  status: !p.status
                                    ? undefined
                                    : {
                                        startTime:
                                          p.status?.["startTime"] !== undefined
                                            ? new Date(p.status?.["startTime"])
                                            : undefined,
                                        completedTime:
                                          p.status?.["completedTime"] !==
                                          undefined
                                            ? new Date(
                                                p.status?.["completedTime"],
                                              )
                                            : undefined,
                                        state: p.status?.["state"],
                                        error: !p.status?.error
                                          ? undefined
                                          : {
                                              code: p.status?.error?.["code"],
                                              message:
                                                p.status?.error?.["message"],
                                              target:
                                                p.status?.error?.["target"],
                                              details:
                                                p.status?.error?.["details"] ===
                                                undefined
                                                  ? p.status?.error?.["details"]
                                                  : p.status?.error?.[
                                                      "details"
                                                    ].map((p) => ({
                                                      code: p["code"],
                                                      message: p["message"],
                                                      target: p["target"],
                                                      details: !p.details
                                                        ? undefined
                                                        : p.details,
                                                      additionalInfo:
                                                        p["additionalInfo"] ===
                                                        undefined
                                                          ? p["additionalInfo"]
                                                          : p[
                                                              "additionalInfo"
                                                            ].map((p) => ({
                                                              type: p["type"],
                                                              info: p["info"],
                                                            })),
                                                    })),
                                              additionalInfo:
                                                p.status?.error?.[
                                                  "additionalInfo"
                                                ] === undefined
                                                  ? p.status?.error?.[
                                                      "additionalInfo"
                                                    ]
                                                  : p.status?.error?.[
                                                      "additionalInfo"
                                                    ].map((p) => ({
                                                      type: p["type"],
                                                      info: p["info"],
                                                    })),
                                            },
                                      },
                                  name: p["name"],
                                  members:
                                    p["members"] === undefined
                                      ? p["members"]
                                      : p["members"].map((p) => ({
                                          status: !p.status
                                            ? undefined
                                            : {
                                                startTime:
                                                  p.status?.["startTime"] !==
                                                  undefined
                                                    ? new Date(
                                                        p.status?.["startTime"],
                                                      )
                                                    : undefined,
                                                completedTime:
                                                  p.status?.[
                                                    "completedTime"
                                                  ] !== undefined
                                                    ? new Date(
                                                        p.status?.[
                                                          "completedTime"
                                                        ],
                                                      )
                                                    : undefined,
                                                state: p.status?.["state"],
                                                error: !p.status?.error
                                                  ? undefined
                                                  : {
                                                      code: p.status?.error?.[
                                                        "code"
                                                      ],
                                                      message:
                                                        p.status?.error?.[
                                                          "message"
                                                        ],
                                                      target:
                                                        p.status?.error?.[
                                                          "target"
                                                        ],
                                                      details:
                                                        p.status?.error?.[
                                                          "details"
                                                        ] === undefined
                                                          ? p.status?.error?.[
                                                              "details"
                                                            ]
                                                          : p.status?.error?.[
                                                              "details"
                                                            ].map((p) => ({
                                                              code: p["code"],
                                                              message:
                                                                p["message"],
                                                              target:
                                                                p["target"],
                                                              details:
                                                                !p.details
                                                                  ? undefined
                                                                  : p.details,
                                                              additionalInfo:
                                                                p[
                                                                  "additionalInfo"
                                                                ] === undefined
                                                                  ? p[
                                                                      "additionalInfo"
                                                                    ]
                                                                  : p[
                                                                      "additionalInfo"
                                                                    ].map(
                                                                      (p) => ({
                                                                        type: p[
                                                                          "type"
                                                                        ],
                                                                        info: p[
                                                                          "info"
                                                                        ],
                                                                      }),
                                                                    ),
                                                            })),
                                                      additionalInfo:
                                                        p.status?.error?.[
                                                          "additionalInfo"
                                                        ] === undefined
                                                          ? p.status?.error?.[
                                                              "additionalInfo"
                                                            ]
                                                          : p.status?.error?.[
                                                              "additionalInfo"
                                                            ].map((p) => ({
                                                              type: p["type"],
                                                              info: p["info"],
                                                            })),
                                                    },
                                              },
                                          name: p["name"],
                                          clusterResourceId:
                                            p["clusterResourceId"],
                                          operationId: p["operationId"],
                                          message: p["message"],
                                        })),
                                })),
                          afterStageWaitStatus: !p.afterStageWaitStatus
                            ? undefined
                            : {
                                status: !p.afterStageWaitStatus?.status
                                  ? undefined
                                  : {
                                      startTime:
                                        p.afterStageWaitStatus?.status?.[
                                          "startTime"
                                        ] !== undefined
                                          ? new Date(
                                              p.afterStageWaitStatus?.status?.[
                                                "startTime"
                                              ],
                                            )
                                          : undefined,
                                      completedTime:
                                        p.afterStageWaitStatus?.status?.[
                                          "completedTime"
                                        ] !== undefined
                                          ? new Date(
                                              p.afterStageWaitStatus?.status?.[
                                                "completedTime"
                                              ],
                                            )
                                          : undefined,
                                      state:
                                        p.afterStageWaitStatus?.status?.[
                                          "state"
                                        ],
                                      error: !p.afterStageWaitStatus?.status
                                        ?.error
                                        ? undefined
                                        : {
                                            code: p.afterStageWaitStatus?.status
                                              ?.error?.["code"],
                                            message:
                                              p.afterStageWaitStatus?.status
                                                ?.error?.["message"],
                                            target:
                                              p.afterStageWaitStatus?.status
                                                ?.error?.["target"],
                                            details:
                                              p.afterStageWaitStatus?.status
                                                ?.error?.["details"] ===
                                              undefined
                                                ? p.afterStageWaitStatus?.status
                                                    ?.error?.["details"]
                                                : p.afterStageWaitStatus?.status?.error?.[
                                                    "details"
                                                  ].map((p) => ({
                                                    code: p["code"],
                                                    message: p["message"],
                                                    target: p["target"],
                                                    details: !p.details
                                                      ? undefined
                                                      : p.details,
                                                    additionalInfo:
                                                      p["additionalInfo"] ===
                                                      undefined
                                                        ? p["additionalInfo"]
                                                        : p[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  })),
                                            additionalInfo:
                                              p.afterStageWaitStatus?.status
                                                ?.error?.["additionalInfo"] ===
                                              undefined
                                                ? p.afterStageWaitStatus?.status
                                                    ?.error?.["additionalInfo"]
                                                : p.afterStageWaitStatus?.status?.error?.[
                                                    "additionalInfo"
                                                  ].map((p) => ({
                                                    type: p["type"],
                                                    info: p["info"],
                                                  })),
                                          },
                                    },
                                waitDurationInSeconds:
                                  p.afterStageWaitStatus?.[
                                    "waitDurationInSeconds"
                                  ],
                              },
                        })),
                  nodeImageSelection: !p.properties?.status?.nodeImageSelection
                    ? undefined
                    : {
                        selectedNodeImageVersions:
                          p.properties?.status?.nodeImageSelection?.[
                            "selectedNodeImageVersions"
                          ] === undefined
                            ? p.properties?.status?.nodeImageSelection?.[
                                "selectedNodeImageVersions"
                              ]
                            : p.properties?.status?.nodeImageSelection?.[
                                "selectedNodeImageVersions"
                              ].map((p) => ({ version: p["version"] })),
                      },
                },
          },
      eTag: p["eTag"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List UpdateRun resources by Fleet */
export function listByFleet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: UpdateRunsListByFleetOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<UpdateRun> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByFleetSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        options,
      ),
    _listByFleetDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _startSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  body: void,
  options: UpdateRunsStartOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | UpdateRunsStart200Response
  | UpdateRunsStart202Response
  | UpdateRunsStartDefaultResponse
  | UpdateRunsStartLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/start",
      subscriptionId,
      resourceGroupName,
      fleetName,
      updateRunName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
      body: body,
    });
}

export async function _startDeserialize(
  result:
    | UpdateRunsStart200Response
    | UpdateRunsStart202Response
    | UpdateRunsStartDefaultResponse
    | UpdateRunsStartLogicalResponse,
): Promise<UpdateRun> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as UpdateRunsStartLogicalResponse;
  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          updateStrategyId: result.body.properties?.["updateStrategyId"],
          strategy: !result.body.properties?.strategy
            ? undefined
            : {
                stages: result.body.properties?.strategy?.["stages"].map(
                  (p) => ({
                    name: p["name"],
                    groups:
                      p["groups"] === undefined
                        ? p["groups"]
                        : p["groups"].map((p) => ({ name: p["name"] })),
                    afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
                  }),
                ),
              },
          managedClusterUpdate: {
            upgrade: {
              type: result.body.properties?.managedClusterUpdate.upgrade[
                "type"
              ],
              kubernetesVersion:
                result.body.properties?.managedClusterUpdate.upgrade[
                  "kubernetesVersion"
                ],
            },
            nodeImageSelection: !result.body.properties?.managedClusterUpdate
              .nodeImageSelection
              ? undefined
              : {
                  type: result.body.properties?.managedClusterUpdate
                    .nodeImageSelection?.["type"],
                },
          },
          status: !result.body.properties?.status
            ? undefined
            : {
                status: !result.body.properties?.status?.status
                  ? undefined
                  : {
                      startTime:
                        result.body.properties?.status?.status?.[
                          "startTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "startTime"
                              ],
                            )
                          : undefined,
                      completedTime:
                        result.body.properties?.status?.status?.[
                          "completedTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "completedTime"
                              ],
                            )
                          : undefined,
                      state: result.body.properties?.status?.status?.["state"],
                      error: !result.body.properties?.status?.status?.error
                        ? undefined
                        : {
                            code: result.body.properties?.status?.status
                              ?.error?.["code"],
                            message:
                              result.body.properties?.status?.status?.error?.[
                                "message"
                              ],
                            target:
                              result.body.properties?.status?.status?.error?.[
                                "target"
                              ],
                            details:
                              result.body.properties?.status?.status?.error?.[
                                "details"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["details"]
                                : result.body.properties?.status?.status?.error?.[
                                    "details"
                                  ].map((p) => ({
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
                              result.body.properties?.status?.status?.error?.[
                                "additionalInfo"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["additionalInfo"]
                                : result.body.properties?.status?.status?.error?.[
                                    "additionalInfo"
                                  ].map((p) => ({
                                    type: p["type"],
                                    info: p["info"],
                                  })),
                          },
                    },
                stages:
                  result.body.properties?.status?.["stages"] === undefined
                    ? result.body.properties?.status?.["stages"]
                    : result.body.properties?.status?.["stages"].map((p) => ({
                        status: !p.status
                          ? undefined
                          : {
                              startTime:
                                p.status?.["startTime"] !== undefined
                                  ? new Date(p.status?.["startTime"])
                                  : undefined,
                              completedTime:
                                p.status?.["completedTime"] !== undefined
                                  ? new Date(p.status?.["completedTime"])
                                  : undefined,
                              state: p.status?.["state"],
                              error: !p.status?.error
                                ? undefined
                                : {
                                    code: p.status?.error?.["code"],
                                    message: p.status?.error?.["message"],
                                    target: p.status?.error?.["target"],
                                    details:
                                      p.status?.error?.["details"] === undefined
                                        ? p.status?.error?.["details"]
                                        : p.status?.error?.["details"].map(
                                            (p) => ({
                                              code: p["code"],
                                              message: p["message"],
                                              target: p["target"],
                                              details: !p.details
                                                ? undefined
                                                : p.details,
                                              additionalInfo:
                                                p["additionalInfo"] ===
                                                undefined
                                                  ? p["additionalInfo"]
                                                  : p["additionalInfo"].map(
                                                      (p) => ({
                                                        type: p["type"],
                                                        info: p["info"],
                                                      }),
                                                    ),
                                            }),
                                          ),
                                    additionalInfo:
                                      p.status?.error?.["additionalInfo"] ===
                                      undefined
                                        ? p.status?.error?.["additionalInfo"]
                                        : p.status?.error?.[
                                            "additionalInfo"
                                          ].map((p) => ({
                                            type: p["type"],
                                            info: p["info"],
                                          })),
                                  },
                            },
                        name: p["name"],
                        groups:
                          p["groups"] === undefined
                            ? p["groups"]
                            : p["groups"].map((p) => ({
                                status: !p.status
                                  ? undefined
                                  : {
                                      startTime:
                                        p.status?.["startTime"] !== undefined
                                          ? new Date(p.status?.["startTime"])
                                          : undefined,
                                      completedTime:
                                        p.status?.["completedTime"] !==
                                        undefined
                                          ? new Date(
                                              p.status?.["completedTime"],
                                            )
                                          : undefined,
                                      state: p.status?.["state"],
                                      error: !p.status?.error
                                        ? undefined
                                        : {
                                            code: p.status?.error?.["code"],
                                            message:
                                              p.status?.error?.["message"],
                                            target: p.status?.error?.["target"],
                                            details:
                                              p.status?.error?.["details"] ===
                                              undefined
                                                ? p.status?.error?.["details"]
                                                : p.status?.error?.[
                                                    "details"
                                                  ].map((p) => ({
                                                    code: p["code"],
                                                    message: p["message"],
                                                    target: p["target"],
                                                    details: !p.details
                                                      ? undefined
                                                      : p.details,
                                                    additionalInfo:
                                                      p["additionalInfo"] ===
                                                      undefined
                                                        ? p["additionalInfo"]
                                                        : p[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  })),
                                            additionalInfo:
                                              p.status?.error?.[
                                                "additionalInfo"
                                              ] === undefined
                                                ? p.status?.error?.[
                                                    "additionalInfo"
                                                  ]
                                                : p.status?.error?.[
                                                    "additionalInfo"
                                                  ].map((p) => ({
                                                    type: p["type"],
                                                    info: p["info"],
                                                  })),
                                          },
                                    },
                                name: p["name"],
                                members:
                                  p["members"] === undefined
                                    ? p["members"]
                                    : p["members"].map((p) => ({
                                        status: !p.status
                                          ? undefined
                                          : {
                                              startTime:
                                                p.status?.["startTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.["startTime"],
                                                    )
                                                  : undefined,
                                              completedTime:
                                                p.status?.["completedTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.[
                                                        "completedTime"
                                                      ],
                                                    )
                                                  : undefined,
                                              state: p.status?.["state"],
                                              error: !p.status?.error
                                                ? undefined
                                                : {
                                                    code: p.status?.error?.[
                                                      "code"
                                                    ],
                                                    message:
                                                      p.status?.error?.[
                                                        "message"
                                                      ],
                                                    target:
                                                      p.status?.error?.[
                                                        "target"
                                                      ],
                                                    details:
                                                      p.status?.error?.[
                                                        "details"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "details"
                                                          ]
                                                        : p.status?.error?.[
                                                            "details"
                                                          ].map((p) => ({
                                                            code: p["code"],
                                                            message:
                                                              p["message"],
                                                            target: p["target"],
                                                            details: !p.details
                                                              ? undefined
                                                              : p.details,
                                                            additionalInfo:
                                                              p[
                                                                "additionalInfo"
                                                              ] === undefined
                                                                ? p[
                                                                    "additionalInfo"
                                                                  ]
                                                                : p[
                                                                    "additionalInfo"
                                                                  ].map(
                                                                    (p) => ({
                                                                      type: p[
                                                                        "type"
                                                                      ],
                                                                      info: p[
                                                                        "info"
                                                                      ],
                                                                    }),
                                                                  ),
                                                          })),
                                                    additionalInfo:
                                                      p.status?.error?.[
                                                        "additionalInfo"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "additionalInfo"
                                                          ]
                                                        : p.status?.error?.[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  },
                                            },
                                        name: p["name"],
                                        clusterResourceId:
                                          p["clusterResourceId"],
                                        operationId: p["operationId"],
                                        message: p["message"],
                                      })),
                              })),
                        afterStageWaitStatus: !p.afterStageWaitStatus
                          ? undefined
                          : {
                              status: !p.afterStageWaitStatus?.status
                                ? undefined
                                : {
                                    startTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "startTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "startTime"
                                            ],
                                          )
                                        : undefined,
                                    completedTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "completedTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "completedTime"
                                            ],
                                          )
                                        : undefined,
                                    state:
                                      p.afterStageWaitStatus?.status?.["state"],
                                    error: !p.afterStageWaitStatus?.status
                                      ?.error
                                      ? undefined
                                      : {
                                          code: p.afterStageWaitStatus?.status
                                            ?.error?.["code"],
                                          message:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["message"],
                                          target:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["target"],
                                          details:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["details"] === undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["details"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "details"
                                                ].map((p) => ({
                                                  code: p["code"],
                                                  message: p["message"],
                                                  target: p["target"],
                                                  details: !p.details
                                                    ? undefined
                                                    : p.details,
                                                  additionalInfo:
                                                    p["additionalInfo"] ===
                                                    undefined
                                                      ? p["additionalInfo"]
                                                      : p["additionalInfo"].map(
                                                          (p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          }),
                                                        ),
                                                })),
                                          additionalInfo:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["additionalInfo"] ===
                                            undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["additionalInfo"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "additionalInfo"
                                                ].map((p) => ({
                                                  type: p["type"],
                                                  info: p["info"],
                                                })),
                                        },
                                  },
                              waitDurationInSeconds:
                                p.afterStageWaitStatus?.[
                                  "waitDurationInSeconds"
                                ],
                            },
                      })),
                nodeImageSelection: !result.body.properties?.status
                  ?.nodeImageSelection
                  ? undefined
                  : {
                      selectedNodeImageVersions:
                        result.body.properties?.status?.nodeImageSelection?.[
                          "selectedNodeImageVersions"
                        ] === undefined
                          ? result.body.properties?.status
                              ?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ]
                          : result.body.properties?.status?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ].map((p) => ({ version: p["version"] })),
                    },
              },
        },
    eTag: result.body["eTag"],
  };
}

/** Starts an UpdateRun. */
export function start(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  body: void,
  options: UpdateRunsStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<UpdateRun>, UpdateRun> {
  return getLongRunningPoller(context, _startDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _startSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        body,
        options,
      ),
  }) as PollerLike<OperationState<UpdateRun>, UpdateRun>;
}

export function _stopSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  body: void,
  options: UpdateRunsStopOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | UpdateRunsStop200Response
  | UpdateRunsStop202Response
  | UpdateRunsStopDefaultResponse
  | UpdateRunsStopLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/stop",
      subscriptionId,
      resourceGroupName,
      fleetName,
      updateRunName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
      body: body,
    });
}

export async function _stopDeserialize(
  result:
    | UpdateRunsStop200Response
    | UpdateRunsStop202Response
    | UpdateRunsStopDefaultResponse
    | UpdateRunsStopLogicalResponse,
): Promise<UpdateRun> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as UpdateRunsStopLogicalResponse;
  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          updateStrategyId: result.body.properties?.["updateStrategyId"],
          strategy: !result.body.properties?.strategy
            ? undefined
            : {
                stages: result.body.properties?.strategy?.["stages"].map(
                  (p) => ({
                    name: p["name"],
                    groups:
                      p["groups"] === undefined
                        ? p["groups"]
                        : p["groups"].map((p) => ({ name: p["name"] })),
                    afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
                  }),
                ),
              },
          managedClusterUpdate: {
            upgrade: {
              type: result.body.properties?.managedClusterUpdate.upgrade[
                "type"
              ],
              kubernetesVersion:
                result.body.properties?.managedClusterUpdate.upgrade[
                  "kubernetesVersion"
                ],
            },
            nodeImageSelection: !result.body.properties?.managedClusterUpdate
              .nodeImageSelection
              ? undefined
              : {
                  type: result.body.properties?.managedClusterUpdate
                    .nodeImageSelection?.["type"],
                },
          },
          status: !result.body.properties?.status
            ? undefined
            : {
                status: !result.body.properties?.status?.status
                  ? undefined
                  : {
                      startTime:
                        result.body.properties?.status?.status?.[
                          "startTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "startTime"
                              ],
                            )
                          : undefined,
                      completedTime:
                        result.body.properties?.status?.status?.[
                          "completedTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "completedTime"
                              ],
                            )
                          : undefined,
                      state: result.body.properties?.status?.status?.["state"],
                      error: !result.body.properties?.status?.status?.error
                        ? undefined
                        : {
                            code: result.body.properties?.status?.status
                              ?.error?.["code"],
                            message:
                              result.body.properties?.status?.status?.error?.[
                                "message"
                              ],
                            target:
                              result.body.properties?.status?.status?.error?.[
                                "target"
                              ],
                            details:
                              result.body.properties?.status?.status?.error?.[
                                "details"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["details"]
                                : result.body.properties?.status?.status?.error?.[
                                    "details"
                                  ].map((p) => ({
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
                              result.body.properties?.status?.status?.error?.[
                                "additionalInfo"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["additionalInfo"]
                                : result.body.properties?.status?.status?.error?.[
                                    "additionalInfo"
                                  ].map((p) => ({
                                    type: p["type"],
                                    info: p["info"],
                                  })),
                          },
                    },
                stages:
                  result.body.properties?.status?.["stages"] === undefined
                    ? result.body.properties?.status?.["stages"]
                    : result.body.properties?.status?.["stages"].map((p) => ({
                        status: !p.status
                          ? undefined
                          : {
                              startTime:
                                p.status?.["startTime"] !== undefined
                                  ? new Date(p.status?.["startTime"])
                                  : undefined,
                              completedTime:
                                p.status?.["completedTime"] !== undefined
                                  ? new Date(p.status?.["completedTime"])
                                  : undefined,
                              state: p.status?.["state"],
                              error: !p.status?.error
                                ? undefined
                                : {
                                    code: p.status?.error?.["code"],
                                    message: p.status?.error?.["message"],
                                    target: p.status?.error?.["target"],
                                    details:
                                      p.status?.error?.["details"] === undefined
                                        ? p.status?.error?.["details"]
                                        : p.status?.error?.["details"].map(
                                            (p) => ({
                                              code: p["code"],
                                              message: p["message"],
                                              target: p["target"],
                                              details: !p.details
                                                ? undefined
                                                : p.details,
                                              additionalInfo:
                                                p["additionalInfo"] ===
                                                undefined
                                                  ? p["additionalInfo"]
                                                  : p["additionalInfo"].map(
                                                      (p) => ({
                                                        type: p["type"],
                                                        info: p["info"],
                                                      }),
                                                    ),
                                            }),
                                          ),
                                    additionalInfo:
                                      p.status?.error?.["additionalInfo"] ===
                                      undefined
                                        ? p.status?.error?.["additionalInfo"]
                                        : p.status?.error?.[
                                            "additionalInfo"
                                          ].map((p) => ({
                                            type: p["type"],
                                            info: p["info"],
                                          })),
                                  },
                            },
                        name: p["name"],
                        groups:
                          p["groups"] === undefined
                            ? p["groups"]
                            : p["groups"].map((p) => ({
                                status: !p.status
                                  ? undefined
                                  : {
                                      startTime:
                                        p.status?.["startTime"] !== undefined
                                          ? new Date(p.status?.["startTime"])
                                          : undefined,
                                      completedTime:
                                        p.status?.["completedTime"] !==
                                        undefined
                                          ? new Date(
                                              p.status?.["completedTime"],
                                            )
                                          : undefined,
                                      state: p.status?.["state"],
                                      error: !p.status?.error
                                        ? undefined
                                        : {
                                            code: p.status?.error?.["code"],
                                            message:
                                              p.status?.error?.["message"],
                                            target: p.status?.error?.["target"],
                                            details:
                                              p.status?.error?.["details"] ===
                                              undefined
                                                ? p.status?.error?.["details"]
                                                : p.status?.error?.[
                                                    "details"
                                                  ].map((p) => ({
                                                    code: p["code"],
                                                    message: p["message"],
                                                    target: p["target"],
                                                    details: !p.details
                                                      ? undefined
                                                      : p.details,
                                                    additionalInfo:
                                                      p["additionalInfo"] ===
                                                      undefined
                                                        ? p["additionalInfo"]
                                                        : p[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  })),
                                            additionalInfo:
                                              p.status?.error?.[
                                                "additionalInfo"
                                              ] === undefined
                                                ? p.status?.error?.[
                                                    "additionalInfo"
                                                  ]
                                                : p.status?.error?.[
                                                    "additionalInfo"
                                                  ].map((p) => ({
                                                    type: p["type"],
                                                    info: p["info"],
                                                  })),
                                          },
                                    },
                                name: p["name"],
                                members:
                                  p["members"] === undefined
                                    ? p["members"]
                                    : p["members"].map((p) => ({
                                        status: !p.status
                                          ? undefined
                                          : {
                                              startTime:
                                                p.status?.["startTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.["startTime"],
                                                    )
                                                  : undefined,
                                              completedTime:
                                                p.status?.["completedTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.[
                                                        "completedTime"
                                                      ],
                                                    )
                                                  : undefined,
                                              state: p.status?.["state"],
                                              error: !p.status?.error
                                                ? undefined
                                                : {
                                                    code: p.status?.error?.[
                                                      "code"
                                                    ],
                                                    message:
                                                      p.status?.error?.[
                                                        "message"
                                                      ],
                                                    target:
                                                      p.status?.error?.[
                                                        "target"
                                                      ],
                                                    details:
                                                      p.status?.error?.[
                                                        "details"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "details"
                                                          ]
                                                        : p.status?.error?.[
                                                            "details"
                                                          ].map((p) => ({
                                                            code: p["code"],
                                                            message:
                                                              p["message"],
                                                            target: p["target"],
                                                            details: !p.details
                                                              ? undefined
                                                              : p.details,
                                                            additionalInfo:
                                                              p[
                                                                "additionalInfo"
                                                              ] === undefined
                                                                ? p[
                                                                    "additionalInfo"
                                                                  ]
                                                                : p[
                                                                    "additionalInfo"
                                                                  ].map(
                                                                    (p) => ({
                                                                      type: p[
                                                                        "type"
                                                                      ],
                                                                      info: p[
                                                                        "info"
                                                                      ],
                                                                    }),
                                                                  ),
                                                          })),
                                                    additionalInfo:
                                                      p.status?.error?.[
                                                        "additionalInfo"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "additionalInfo"
                                                          ]
                                                        : p.status?.error?.[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  },
                                            },
                                        name: p["name"],
                                        clusterResourceId:
                                          p["clusterResourceId"],
                                        operationId: p["operationId"],
                                        message: p["message"],
                                      })),
                              })),
                        afterStageWaitStatus: !p.afterStageWaitStatus
                          ? undefined
                          : {
                              status: !p.afterStageWaitStatus?.status
                                ? undefined
                                : {
                                    startTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "startTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "startTime"
                                            ],
                                          )
                                        : undefined,
                                    completedTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "completedTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "completedTime"
                                            ],
                                          )
                                        : undefined,
                                    state:
                                      p.afterStageWaitStatus?.status?.["state"],
                                    error: !p.afterStageWaitStatus?.status
                                      ?.error
                                      ? undefined
                                      : {
                                          code: p.afterStageWaitStatus?.status
                                            ?.error?.["code"],
                                          message:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["message"],
                                          target:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["target"],
                                          details:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["details"] === undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["details"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "details"
                                                ].map((p) => ({
                                                  code: p["code"],
                                                  message: p["message"],
                                                  target: p["target"],
                                                  details: !p.details
                                                    ? undefined
                                                    : p.details,
                                                  additionalInfo:
                                                    p["additionalInfo"] ===
                                                    undefined
                                                      ? p["additionalInfo"]
                                                      : p["additionalInfo"].map(
                                                          (p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          }),
                                                        ),
                                                })),
                                          additionalInfo:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["additionalInfo"] ===
                                            undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["additionalInfo"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "additionalInfo"
                                                ].map((p) => ({
                                                  type: p["type"],
                                                  info: p["info"],
                                                })),
                                        },
                                  },
                              waitDurationInSeconds:
                                p.afterStageWaitStatus?.[
                                  "waitDurationInSeconds"
                                ],
                            },
                      })),
                nodeImageSelection: !result.body.properties?.status
                  ?.nodeImageSelection
                  ? undefined
                  : {
                      selectedNodeImageVersions:
                        result.body.properties?.status?.nodeImageSelection?.[
                          "selectedNodeImageVersions"
                        ] === undefined
                          ? result.body.properties?.status
                              ?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ]
                          : result.body.properties?.status?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ].map((p) => ({ version: p["version"] })),
                    },
              },
        },
    eTag: result.body["eTag"],
  };
}

/** Stops an UpdateRun. */
export function stop(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  body: void,
  options: UpdateRunsStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<UpdateRun>, UpdateRun> {
  return getLongRunningPoller(context, _stopDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _stopSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        body,
        options,
      ),
  }) as PollerLike<OperationState<UpdateRun>, UpdateRun>;
}

export function _skipSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  body: SkipProperties,
  options: UpdateRunsSkipOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | UpdateRunsSkip200Response
  | UpdateRunsSkip202Response
  | UpdateRunsSkipDefaultResponse
  | UpdateRunsSkipLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/skip",
      subscriptionId,
      resourceGroupName,
      fleetName,
      updateRunName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
      body: {
        targets: body["targets"].map((p) => ({
          type: p["type"],
          name: p["name"],
        })),
      },
    });
}

export async function _skipDeserialize(
  result:
    | UpdateRunsSkip200Response
    | UpdateRunsSkip202Response
    | UpdateRunsSkipDefaultResponse
    | UpdateRunsSkipLogicalResponse,
): Promise<UpdateRun> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as UpdateRunsSkipLogicalResponse;
  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          updateStrategyId: result.body.properties?.["updateStrategyId"],
          strategy: !result.body.properties?.strategy
            ? undefined
            : {
                stages: result.body.properties?.strategy?.["stages"].map(
                  (p) => ({
                    name: p["name"],
                    groups:
                      p["groups"] === undefined
                        ? p["groups"]
                        : p["groups"].map((p) => ({ name: p["name"] })),
                    afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
                  }),
                ),
              },
          managedClusterUpdate: {
            upgrade: {
              type: result.body.properties?.managedClusterUpdate.upgrade[
                "type"
              ],
              kubernetesVersion:
                result.body.properties?.managedClusterUpdate.upgrade[
                  "kubernetesVersion"
                ],
            },
            nodeImageSelection: !result.body.properties?.managedClusterUpdate
              .nodeImageSelection
              ? undefined
              : {
                  type: result.body.properties?.managedClusterUpdate
                    .nodeImageSelection?.["type"],
                },
          },
          status: !result.body.properties?.status
            ? undefined
            : {
                status: !result.body.properties?.status?.status
                  ? undefined
                  : {
                      startTime:
                        result.body.properties?.status?.status?.[
                          "startTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "startTime"
                              ],
                            )
                          : undefined,
                      completedTime:
                        result.body.properties?.status?.status?.[
                          "completedTime"
                        ] !== undefined
                          ? new Date(
                              result.body.properties?.status?.status?.[
                                "completedTime"
                              ],
                            )
                          : undefined,
                      state: result.body.properties?.status?.status?.["state"],
                      error: !result.body.properties?.status?.status?.error
                        ? undefined
                        : {
                            code: result.body.properties?.status?.status
                              ?.error?.["code"],
                            message:
                              result.body.properties?.status?.status?.error?.[
                                "message"
                              ],
                            target:
                              result.body.properties?.status?.status?.error?.[
                                "target"
                              ],
                            details:
                              result.body.properties?.status?.status?.error?.[
                                "details"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["details"]
                                : result.body.properties?.status?.status?.error?.[
                                    "details"
                                  ].map((p) => ({
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
                              result.body.properties?.status?.status?.error?.[
                                "additionalInfo"
                              ] === undefined
                                ? result.body.properties?.status?.status
                                    ?.error?.["additionalInfo"]
                                : result.body.properties?.status?.status?.error?.[
                                    "additionalInfo"
                                  ].map((p) => ({
                                    type: p["type"],
                                    info: p["info"],
                                  })),
                          },
                    },
                stages:
                  result.body.properties?.status?.["stages"] === undefined
                    ? result.body.properties?.status?.["stages"]
                    : result.body.properties?.status?.["stages"].map((p) => ({
                        status: !p.status
                          ? undefined
                          : {
                              startTime:
                                p.status?.["startTime"] !== undefined
                                  ? new Date(p.status?.["startTime"])
                                  : undefined,
                              completedTime:
                                p.status?.["completedTime"] !== undefined
                                  ? new Date(p.status?.["completedTime"])
                                  : undefined,
                              state: p.status?.["state"],
                              error: !p.status?.error
                                ? undefined
                                : {
                                    code: p.status?.error?.["code"],
                                    message: p.status?.error?.["message"],
                                    target: p.status?.error?.["target"],
                                    details:
                                      p.status?.error?.["details"] === undefined
                                        ? p.status?.error?.["details"]
                                        : p.status?.error?.["details"].map(
                                            (p) => ({
                                              code: p["code"],
                                              message: p["message"],
                                              target: p["target"],
                                              details: !p.details
                                                ? undefined
                                                : p.details,
                                              additionalInfo:
                                                p["additionalInfo"] ===
                                                undefined
                                                  ? p["additionalInfo"]
                                                  : p["additionalInfo"].map(
                                                      (p) => ({
                                                        type: p["type"],
                                                        info: p["info"],
                                                      }),
                                                    ),
                                            }),
                                          ),
                                    additionalInfo:
                                      p.status?.error?.["additionalInfo"] ===
                                      undefined
                                        ? p.status?.error?.["additionalInfo"]
                                        : p.status?.error?.[
                                            "additionalInfo"
                                          ].map((p) => ({
                                            type: p["type"],
                                            info: p["info"],
                                          })),
                                  },
                            },
                        name: p["name"],
                        groups:
                          p["groups"] === undefined
                            ? p["groups"]
                            : p["groups"].map((p) => ({
                                status: !p.status
                                  ? undefined
                                  : {
                                      startTime:
                                        p.status?.["startTime"] !== undefined
                                          ? new Date(p.status?.["startTime"])
                                          : undefined,
                                      completedTime:
                                        p.status?.["completedTime"] !==
                                        undefined
                                          ? new Date(
                                              p.status?.["completedTime"],
                                            )
                                          : undefined,
                                      state: p.status?.["state"],
                                      error: !p.status?.error
                                        ? undefined
                                        : {
                                            code: p.status?.error?.["code"],
                                            message:
                                              p.status?.error?.["message"],
                                            target: p.status?.error?.["target"],
                                            details:
                                              p.status?.error?.["details"] ===
                                              undefined
                                                ? p.status?.error?.["details"]
                                                : p.status?.error?.[
                                                    "details"
                                                  ].map((p) => ({
                                                    code: p["code"],
                                                    message: p["message"],
                                                    target: p["target"],
                                                    details: !p.details
                                                      ? undefined
                                                      : p.details,
                                                    additionalInfo:
                                                      p["additionalInfo"] ===
                                                      undefined
                                                        ? p["additionalInfo"]
                                                        : p[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  })),
                                            additionalInfo:
                                              p.status?.error?.[
                                                "additionalInfo"
                                              ] === undefined
                                                ? p.status?.error?.[
                                                    "additionalInfo"
                                                  ]
                                                : p.status?.error?.[
                                                    "additionalInfo"
                                                  ].map((p) => ({
                                                    type: p["type"],
                                                    info: p["info"],
                                                  })),
                                          },
                                    },
                                name: p["name"],
                                members:
                                  p["members"] === undefined
                                    ? p["members"]
                                    : p["members"].map((p) => ({
                                        status: !p.status
                                          ? undefined
                                          : {
                                              startTime:
                                                p.status?.["startTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.["startTime"],
                                                    )
                                                  : undefined,
                                              completedTime:
                                                p.status?.["completedTime"] !==
                                                undefined
                                                  ? new Date(
                                                      p.status?.[
                                                        "completedTime"
                                                      ],
                                                    )
                                                  : undefined,
                                              state: p.status?.["state"],
                                              error: !p.status?.error
                                                ? undefined
                                                : {
                                                    code: p.status?.error?.[
                                                      "code"
                                                    ],
                                                    message:
                                                      p.status?.error?.[
                                                        "message"
                                                      ],
                                                    target:
                                                      p.status?.error?.[
                                                        "target"
                                                      ],
                                                    details:
                                                      p.status?.error?.[
                                                        "details"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "details"
                                                          ]
                                                        : p.status?.error?.[
                                                            "details"
                                                          ].map((p) => ({
                                                            code: p["code"],
                                                            message:
                                                              p["message"],
                                                            target: p["target"],
                                                            details: !p.details
                                                              ? undefined
                                                              : p.details,
                                                            additionalInfo:
                                                              p[
                                                                "additionalInfo"
                                                              ] === undefined
                                                                ? p[
                                                                    "additionalInfo"
                                                                  ]
                                                                : p[
                                                                    "additionalInfo"
                                                                  ].map(
                                                                    (p) => ({
                                                                      type: p[
                                                                        "type"
                                                                      ],
                                                                      info: p[
                                                                        "info"
                                                                      ],
                                                                    }),
                                                                  ),
                                                          })),
                                                    additionalInfo:
                                                      p.status?.error?.[
                                                        "additionalInfo"
                                                      ] === undefined
                                                        ? p.status?.error?.[
                                                            "additionalInfo"
                                                          ]
                                                        : p.status?.error?.[
                                                            "additionalInfo"
                                                          ].map((p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          })),
                                                  },
                                            },
                                        name: p["name"],
                                        clusterResourceId:
                                          p["clusterResourceId"],
                                        operationId: p["operationId"],
                                        message: p["message"],
                                      })),
                              })),
                        afterStageWaitStatus: !p.afterStageWaitStatus
                          ? undefined
                          : {
                              status: !p.afterStageWaitStatus?.status
                                ? undefined
                                : {
                                    startTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "startTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "startTime"
                                            ],
                                          )
                                        : undefined,
                                    completedTime:
                                      p.afterStageWaitStatus?.status?.[
                                        "completedTime"
                                      ] !== undefined
                                        ? new Date(
                                            p.afterStageWaitStatus?.status?.[
                                              "completedTime"
                                            ],
                                          )
                                        : undefined,
                                    state:
                                      p.afterStageWaitStatus?.status?.["state"],
                                    error: !p.afterStageWaitStatus?.status
                                      ?.error
                                      ? undefined
                                      : {
                                          code: p.afterStageWaitStatus?.status
                                            ?.error?.["code"],
                                          message:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["message"],
                                          target:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["target"],
                                          details:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["details"] === undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["details"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "details"
                                                ].map((p) => ({
                                                  code: p["code"],
                                                  message: p["message"],
                                                  target: p["target"],
                                                  details: !p.details
                                                    ? undefined
                                                    : p.details,
                                                  additionalInfo:
                                                    p["additionalInfo"] ===
                                                    undefined
                                                      ? p["additionalInfo"]
                                                      : p["additionalInfo"].map(
                                                          (p) => ({
                                                            type: p["type"],
                                                            info: p["info"],
                                                          }),
                                                        ),
                                                })),
                                          additionalInfo:
                                            p.afterStageWaitStatus?.status
                                              ?.error?.["additionalInfo"] ===
                                            undefined
                                              ? p.afterStageWaitStatus?.status
                                                  ?.error?.["additionalInfo"]
                                              : p.afterStageWaitStatus?.status?.error?.[
                                                  "additionalInfo"
                                                ].map((p) => ({
                                                  type: p["type"],
                                                  info: p["info"],
                                                })),
                                        },
                                  },
                              waitDurationInSeconds:
                                p.afterStageWaitStatus?.[
                                  "waitDurationInSeconds"
                                ],
                            },
                      })),
                nodeImageSelection: !result.body.properties?.status
                  ?.nodeImageSelection
                  ? undefined
                  : {
                      selectedNodeImageVersions:
                        result.body.properties?.status?.nodeImageSelection?.[
                          "selectedNodeImageVersions"
                        ] === undefined
                          ? result.body.properties?.status
                              ?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ]
                          : result.body.properties?.status?.nodeImageSelection?.[
                              "selectedNodeImageVersions"
                            ].map((p) => ({ version: p["version"] })),
                    },
              },
        },
    eTag: result.body["eTag"],
  };
}

/** Skips one or a combination of member/group/stage/afterStageWait(s) of an update run. */
export function skip(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateRunName: string,
  body: SkipProperties,
  options: UpdateRunsSkipOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<UpdateRun>, UpdateRun> {
  return getLongRunningPoller(context, _skipDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _skipSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        body,
        options,
      ),
  }) as PollerLike<OperationState<UpdateRun>, UpdateRun>;
}
