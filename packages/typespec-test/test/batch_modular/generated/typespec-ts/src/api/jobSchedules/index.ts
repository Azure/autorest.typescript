// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BatchJobSchedule,
  BatchJobScheduleUpdateOptions,
  BatchJobScheduleCreateOptions,
  BatchJobScheduleListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  BatchContext as Client,
  CreateJobSchedule201Response,
  CreateJobScheduleDefaultResponse,
  DeleteJobSchedule202Response,
  DeleteJobScheduleDefaultResponse,
  DisableJobSchedule204Response,
  DisableJobScheduleDefaultResponse,
  EnableJobSchedule204Response,
  EnableJobScheduleDefaultResponse,
  GetJobSchedule200Response,
  GetJobScheduleDefaultResponse,
  JobScheduleExists200Response,
  JobScheduleExists404Response,
  JobScheduleExistsDefaultResponse,
  ListJobSchedules200Response,
  ListJobSchedulesDefaultResponse,
  ReplaceJobSchedule200Response,
  ReplaceJobScheduleDefaultResponse,
  TerminateJobSchedule202Response,
  TerminateJobScheduleDefaultResponse,
  UpdateJobSchedule200Response,
  UpdateJobScheduleDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  JobSchedulesJobScheduleExistsOptions,
  JobSchedulesDeleteJobScheduleOptions,
  JobSchedulesGetJobScheduleOptions,
  JobSchedulesUpdateJobScheduleOptions,
  JobSchedulesReplaceJobScheduleOptions,
  JobSchedulesDisableJobScheduleOptions,
  JobSchedulesEnableJobScheduleOptions,
  JobSchedulesTerminateJobScheduleOptions,
  JobSchedulesCreateJobScheduleOptions,
  JobSchedulesListJobSchedulesOptions,
} from "../../models/options.js";

export function _jobScheduleExistsSend(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesJobScheduleExistsOptions = { requestOptions: {} },
): StreamableMethod<
  | JobScheduleExists200Response
  | JobScheduleExists404Response
  | JobScheduleExistsDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _jobScheduleExistsDeserialize(
  result:
    | JobScheduleExists200Response
    | JobScheduleExists404Response
    | JobScheduleExistsDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Checks the specified Job Schedule exists. */
export async function jobScheduleExists(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesJobScheduleExistsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _jobScheduleExistsSend(context, jobScheduleId, options);
  return _jobScheduleExistsDeserialize(result);
}

export function _deleteJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesDeleteJobScheduleOptions = { requestOptions: {} },
): StreamableMethod<
  DeleteJobSchedule202Response | DeleteJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _deleteJobScheduleDeserialize(
  result: DeleteJobSchedule202Response | DeleteJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When you delete a Job Schedule, this also deletes all Jobs and Tasks under that
 * schedule. When Tasks are deleted, all the files in their working directories on
 * the Compute Nodes are also deleted (the retention period is ignored). The Job
 * Schedule statistics are no longer accessible once the Job Schedule is deleted,
 * though they are still counted towards Account lifetime statistics.
 */
export async function deleteJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesDeleteJobScheduleOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteJobScheduleSend(context, jobScheduleId, options);
  return _deleteJobScheduleDeserialize(result);
}

export function _getJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesGetJobScheduleOptions = { requestOptions: {} },
): StreamableMethod<GetJobSchedule200Response | GetJobScheduleDefaultResponse> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        timeOut: options?.timeOut,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _getJobScheduleDeserialize(
  result: GetJobSchedule200Response | GetJobScheduleDefaultResponse,
): Promise<BatchJobSchedule> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    url: result.body["url"],
    eTag: result.body["eTag"],
    lastModified:
      result.body["lastModified"] !== undefined
        ? new Date(result.body["lastModified"])
        : undefined,
    creationTime:
      result.body["creationTime"] !== undefined
        ? new Date(result.body["creationTime"])
        : undefined,
    state: result.body["state"],
    stateTransitionTime:
      result.body["stateTransitionTime"] !== undefined
        ? new Date(result.body["stateTransitionTime"])
        : undefined,
    previousState: result.body["previousState"],
    previousStateTransitionTime:
      result.body["previousStateTransitionTime"] !== undefined
        ? new Date(result.body["previousStateTransitionTime"])
        : undefined,
    schedule: {
      doNotRunUntil:
        result.body.schedule["doNotRunUntil"] !== undefined
          ? new Date(result.body.schedule["doNotRunUntil"])
          : undefined,
      doNotRunAfter:
        result.body.schedule["doNotRunAfter"] !== undefined
          ? new Date(result.body.schedule["doNotRunAfter"])
          : undefined,
      startWindow: result.body.schedule["startWindow"],
      recurrenceInterval: result.body.schedule["recurrenceInterval"],
    },
    jobSpecification: {
      priority: result.body.jobSpecification["priority"],
      allowTaskPreemption: result.body.jobSpecification["allowTaskPreemption"],
      maxParallelTasks: result.body.jobSpecification["maxParallelTasks"],
      displayName: result.body.jobSpecification["displayName"],
      usesTaskDependencies:
        result.body.jobSpecification["usesTaskDependencies"],
      onAllTasksComplete: result.body.jobSpecification["onAllTasksComplete"],
      onTaskFailure: result.body.jobSpecification["onTaskFailure"],
      networkConfiguration: !result.body.jobSpecification.networkConfiguration
        ? undefined
        : {
            subnetId:
              result.body.jobSpecification.networkConfiguration?.["subnetId"],
          },
      constraints: !result.body.jobSpecification.constraints
        ? undefined
        : {
            maxWallClockTime:
              result.body.jobSpecification.constraints?.["maxWallClockTime"],
            maxTaskRetryCount:
              result.body.jobSpecification.constraints?.["maxTaskRetryCount"],
          },
      jobManagerTask: !result.body.jobSpecification.jobManagerTask
        ? undefined
        : {
            id: result.body.jobSpecification.jobManagerTask?.["id"],
            displayName:
              result.body.jobSpecification.jobManagerTask?.["displayName"],
            commandLine:
              result.body.jobSpecification.jobManagerTask?.["commandLine"],
            containerSettings: !result.body.jobSpecification.jobManagerTask
              ?.containerSettings
              ? undefined
              : {
                  containerRunOptions:
                    result.body.jobSpecification.jobManagerTask
                      ?.containerSettings?.["containerRunOptions"],
                  imageName:
                    result.body.jobSpecification.jobManagerTask
                      ?.containerSettings?.["imageName"],
                  registry: !result.body.jobSpecification.jobManagerTask
                    ?.containerSettings?.registry
                    ? undefined
                    : {
                        username:
                          result.body.jobSpecification.jobManagerTask
                            ?.containerSettings?.registry?.["username"],
                        password:
                          result.body.jobSpecification.jobManagerTask
                            ?.containerSettings?.registry?.["password"],
                        registryServer:
                          result.body.jobSpecification.jobManagerTask
                            ?.containerSettings?.registry?.["registryServer"],
                        identityReference: !result.body.jobSpecification
                          .jobManagerTask?.containerSettings?.registry
                          ?.identityReference
                          ? undefined
                          : {
                              resourceId:
                                result.body.jobSpecification.jobManagerTask
                                  ?.containerSettings?.registry
                                  ?.identityReference?.["resourceId"],
                            },
                      },
                  workingDirectory:
                    result.body.jobSpecification.jobManagerTask
                      ?.containerSettings?.["workingDirectory"],
                },
            resourceFiles: !result.body.jobSpecification.jobManagerTask?.[
              "resourceFiles"
            ]
              ? result.body.jobSpecification.jobManagerTask?.["resourceFiles"]
              : result.body.jobSpecification.jobManagerTask?.[
                  "resourceFiles"
                ].map((p) => ({
                  autoStorageContainerName: p["autoStorageContainerName"],
                  storageContainerUrl: p["storageContainerUrl"],
                  httpUrl: p["httpUrl"],
                  blobPrefix: p["blobPrefix"],
                  filePath: p["filePath"],
                  fileMode: p["fileMode"],
                  identityReference: !p.identityReference
                    ? undefined
                    : { resourceId: p.identityReference?.["resourceId"] },
                })),
            outputFiles: !result.body.jobSpecification.jobManagerTask?.[
              "outputFiles"
            ]
              ? result.body.jobSpecification.jobManagerTask?.["outputFiles"]
              : result.body.jobSpecification.jobManagerTask?.[
                  "outputFiles"
                ].map((p) => ({
                  filePattern: p["filePattern"],
                  destination: {
                    container: !p.destination.container
                      ? undefined
                      : {
                          path: p.destination.container?.["path"],
                          containerUrl:
                            p.destination.container?.["containerUrl"],
                          identityReference: !p.destination.container
                            ?.identityReference
                            ? undefined
                            : {
                                resourceId:
                                  p.destination.container?.identityReference?.[
                                    "resourceId"
                                  ],
                              },
                          uploadHeaders: !p.destination.container?.[
                            "uploadHeaders"
                          ]
                            ? p.destination.container?.["uploadHeaders"]
                            : p.destination.container?.["uploadHeaders"].map(
                                (p) => ({ name: p["name"], value: p["value"] }),
                              ),
                        },
                  },
                  uploadOptions: {
                    uploadCondition: p.uploadOptions["uploadCondition"],
                  },
                })),
            environmentSettings: !result.body.jobSpecification.jobManagerTask?.[
              "environmentSettings"
            ]
              ? result.body.jobSpecification.jobManagerTask?.[
                  "environmentSettings"
                ]
              : result.body.jobSpecification.jobManagerTask?.[
                  "environmentSettings"
                ].map((p) => ({ name: p["name"], value: p["value"] })),
            constraints: !result.body.jobSpecification.jobManagerTask
              ?.constraints
              ? undefined
              : {
                  maxWallClockTime:
                    result.body.jobSpecification.jobManagerTask?.constraints?.[
                      "maxWallClockTime"
                    ],
                  retentionTime:
                    result.body.jobSpecification.jobManagerTask?.constraints?.[
                      "retentionTime"
                    ],
                  maxTaskRetryCount:
                    result.body.jobSpecification.jobManagerTask?.constraints?.[
                      "maxTaskRetryCount"
                    ],
                },
            requiredSlots:
              result.body.jobSpecification.jobManagerTask?.["requiredSlots"],
            killJobOnCompletion:
              result.body.jobSpecification.jobManagerTask?.[
                "killJobOnCompletion"
              ],
            userIdentity: !result.body.jobSpecification.jobManagerTask
              ?.userIdentity
              ? undefined
              : {
                  username:
                    result.body.jobSpecification.jobManagerTask?.userIdentity?.[
                      "username"
                    ],
                  autoUser: !result.body.jobSpecification.jobManagerTask
                    ?.userIdentity?.autoUser
                    ? undefined
                    : {
                        scope:
                          result.body.jobSpecification.jobManagerTask
                            ?.userIdentity?.autoUser?.["scope"],
                        elevationLevel:
                          result.body.jobSpecification.jobManagerTask
                            ?.userIdentity?.autoUser?.["elevationLevel"],
                      },
                },
            runExclusive:
              result.body.jobSpecification.jobManagerTask?.["runExclusive"],
            applicationPackageReferences: !result.body.jobSpecification
              .jobManagerTask?.["applicationPackageReferences"]
              ? result.body.jobSpecification.jobManagerTask?.[
                  "applicationPackageReferences"
                ]
              : result.body.jobSpecification.jobManagerTask?.[
                  "applicationPackageReferences"
                ].map((p) => ({
                  applicationId: p["applicationId"],
                  version: p["version"],
                })),
            authenticationTokenSettings: !result.body.jobSpecification
              .jobManagerTask?.authenticationTokenSettings
              ? undefined
              : {
                  access:
                    result.body.jobSpecification.jobManagerTask
                      ?.authenticationTokenSettings?.["access"],
                },
            allowLowPriorityNode:
              result.body.jobSpecification.jobManagerTask?.[
                "allowLowPriorityNode"
              ],
          },
      jobPreparationTask: !result.body.jobSpecification.jobPreparationTask
        ? undefined
        : {
            id: result.body.jobSpecification.jobPreparationTask?.["id"],
            commandLine:
              result.body.jobSpecification.jobPreparationTask?.["commandLine"],
            containerSettings: !result.body.jobSpecification.jobPreparationTask
              ?.containerSettings
              ? undefined
              : {
                  containerRunOptions:
                    result.body.jobSpecification.jobPreparationTask
                      ?.containerSettings?.["containerRunOptions"],
                  imageName:
                    result.body.jobSpecification.jobPreparationTask
                      ?.containerSettings?.["imageName"],
                  registry: !result.body.jobSpecification.jobPreparationTask
                    ?.containerSettings?.registry
                    ? undefined
                    : {
                        username:
                          result.body.jobSpecification.jobPreparationTask
                            ?.containerSettings?.registry?.["username"],
                        password:
                          result.body.jobSpecification.jobPreparationTask
                            ?.containerSettings?.registry?.["password"],
                        registryServer:
                          result.body.jobSpecification.jobPreparationTask
                            ?.containerSettings?.registry?.["registryServer"],
                        identityReference: !result.body.jobSpecification
                          .jobPreparationTask?.containerSettings?.registry
                          ?.identityReference
                          ? undefined
                          : {
                              resourceId:
                                result.body.jobSpecification.jobPreparationTask
                                  ?.containerSettings?.registry
                                  ?.identityReference?.["resourceId"],
                            },
                      },
                  workingDirectory:
                    result.body.jobSpecification.jobPreparationTask
                      ?.containerSettings?.["workingDirectory"],
                },
            resourceFiles: !result.body.jobSpecification.jobPreparationTask?.[
              "resourceFiles"
            ]
              ? result.body.jobSpecification.jobPreparationTask?.[
                  "resourceFiles"
                ]
              : result.body.jobSpecification.jobPreparationTask?.[
                  "resourceFiles"
                ].map((p) => ({
                  autoStorageContainerName: p["autoStorageContainerName"],
                  storageContainerUrl: p["storageContainerUrl"],
                  httpUrl: p["httpUrl"],
                  blobPrefix: p["blobPrefix"],
                  filePath: p["filePath"],
                  fileMode: p["fileMode"],
                  identityReference: !p.identityReference
                    ? undefined
                    : { resourceId: p.identityReference?.["resourceId"] },
                })),
            environmentSettings: !result.body.jobSpecification
              .jobPreparationTask?.["environmentSettings"]
              ? result.body.jobSpecification.jobPreparationTask?.[
                  "environmentSettings"
                ]
              : result.body.jobSpecification.jobPreparationTask?.[
                  "environmentSettings"
                ].map((p) => ({ name: p["name"], value: p["value"] })),
            constraints: !result.body.jobSpecification.jobPreparationTask
              ?.constraints
              ? undefined
              : {
                  maxWallClockTime:
                    result.body.jobSpecification.jobPreparationTask
                      ?.constraints?.["maxWallClockTime"],
                  retentionTime:
                    result.body.jobSpecification.jobPreparationTask
                      ?.constraints?.["retentionTime"],
                  maxTaskRetryCount:
                    result.body.jobSpecification.jobPreparationTask
                      ?.constraints?.["maxTaskRetryCount"],
                },
            waitForSuccess:
              result.body.jobSpecification.jobPreparationTask?.[
                "waitForSuccess"
              ],
            userIdentity: !result.body.jobSpecification.jobPreparationTask
              ?.userIdentity
              ? undefined
              : {
                  username:
                    result.body.jobSpecification.jobPreparationTask
                      ?.userIdentity?.["username"],
                  autoUser: !result.body.jobSpecification.jobPreparationTask
                    ?.userIdentity?.autoUser
                    ? undefined
                    : {
                        scope:
                          result.body.jobSpecification.jobPreparationTask
                            ?.userIdentity?.autoUser?.["scope"],
                        elevationLevel:
                          result.body.jobSpecification.jobPreparationTask
                            ?.userIdentity?.autoUser?.["elevationLevel"],
                      },
                },
            rerunOnNodeRebootAfterSuccess:
              result.body.jobSpecification.jobPreparationTask?.[
                "rerunOnNodeRebootAfterSuccess"
              ],
          },
      jobReleaseTask: !result.body.jobSpecification.jobReleaseTask
        ? undefined
        : {
            id: result.body.jobSpecification.jobReleaseTask?.["id"],
            commandLine:
              result.body.jobSpecification.jobReleaseTask?.["commandLine"],
            containerSettings: !result.body.jobSpecification.jobReleaseTask
              ?.containerSettings
              ? undefined
              : {
                  containerRunOptions:
                    result.body.jobSpecification.jobReleaseTask
                      ?.containerSettings?.["containerRunOptions"],
                  imageName:
                    result.body.jobSpecification.jobReleaseTask
                      ?.containerSettings?.["imageName"],
                  registry: !result.body.jobSpecification.jobReleaseTask
                    ?.containerSettings?.registry
                    ? undefined
                    : {
                        username:
                          result.body.jobSpecification.jobReleaseTask
                            ?.containerSettings?.registry?.["username"],
                        password:
                          result.body.jobSpecification.jobReleaseTask
                            ?.containerSettings?.registry?.["password"],
                        registryServer:
                          result.body.jobSpecification.jobReleaseTask
                            ?.containerSettings?.registry?.["registryServer"],
                        identityReference: !result.body.jobSpecification
                          .jobReleaseTask?.containerSettings?.registry
                          ?.identityReference
                          ? undefined
                          : {
                              resourceId:
                                result.body.jobSpecification.jobReleaseTask
                                  ?.containerSettings?.registry
                                  ?.identityReference?.["resourceId"],
                            },
                      },
                  workingDirectory:
                    result.body.jobSpecification.jobReleaseTask
                      ?.containerSettings?.["workingDirectory"],
                },
            resourceFiles: !result.body.jobSpecification.jobReleaseTask?.[
              "resourceFiles"
            ]
              ? result.body.jobSpecification.jobReleaseTask?.["resourceFiles"]
              : result.body.jobSpecification.jobReleaseTask?.[
                  "resourceFiles"
                ].map((p) => ({
                  autoStorageContainerName: p["autoStorageContainerName"],
                  storageContainerUrl: p["storageContainerUrl"],
                  httpUrl: p["httpUrl"],
                  blobPrefix: p["blobPrefix"],
                  filePath: p["filePath"],
                  fileMode: p["fileMode"],
                  identityReference: !p.identityReference
                    ? undefined
                    : { resourceId: p.identityReference?.["resourceId"] },
                })),
            environmentSettings: !result.body.jobSpecification.jobReleaseTask?.[
              "environmentSettings"
            ]
              ? result.body.jobSpecification.jobReleaseTask?.[
                  "environmentSettings"
                ]
              : result.body.jobSpecification.jobReleaseTask?.[
                  "environmentSettings"
                ].map((p) => ({ name: p["name"], value: p["value"] })),
            maxWallClockTime:
              result.body.jobSpecification.jobReleaseTask?.["maxWallClockTime"],
            retentionTime:
              result.body.jobSpecification.jobReleaseTask?.["retentionTime"],
            userIdentity: !result.body.jobSpecification.jobReleaseTask
              ?.userIdentity
              ? undefined
              : {
                  username:
                    result.body.jobSpecification.jobReleaseTask?.userIdentity?.[
                      "username"
                    ],
                  autoUser: !result.body.jobSpecification.jobReleaseTask
                    ?.userIdentity?.autoUser
                    ? undefined
                    : {
                        scope:
                          result.body.jobSpecification.jobReleaseTask
                            ?.userIdentity?.autoUser?.["scope"],
                        elevationLevel:
                          result.body.jobSpecification.jobReleaseTask
                            ?.userIdentity?.autoUser?.["elevationLevel"],
                      },
                },
          },
      commonEnvironmentSettings: !result.body.jobSpecification[
        "commonEnvironmentSettings"
      ]
        ? result.body.jobSpecification["commonEnvironmentSettings"]
        : result.body.jobSpecification["commonEnvironmentSettings"].map(
            (p) => ({ name: p["name"], value: p["value"] }),
          ),
      poolInfo: {
        poolId: result.body.jobSpecification.poolInfo["poolId"],
        autoPoolSpecification: !result.body.jobSpecification.poolInfo
          .autoPoolSpecification
          ? undefined
          : {
              autoPoolIdPrefix:
                result.body.jobSpecification.poolInfo.autoPoolSpecification?.[
                  "autoPoolIdPrefix"
                ],
              poolLifetimeOption:
                result.body.jobSpecification.poolInfo.autoPoolSpecification?.[
                  "poolLifetimeOption"
                ],
              keepAlive:
                result.body.jobSpecification.poolInfo.autoPoolSpecification?.[
                  "keepAlive"
                ],
              pool: !result.body.jobSpecification.poolInfo.autoPoolSpecification
                ?.pool
                ? undefined
                : {
                    displayName:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["displayName"],
                    vmSize:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["vmSize"],
                    cloudServiceConfiguration: !result.body.jobSpecification
                      .poolInfo.autoPoolSpecification?.pool
                      ?.cloudServiceConfiguration
                      ? undefined
                      : {
                          osFamily:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.cloudServiceConfiguration?.["osFamily"],
                          osVersion:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.cloudServiceConfiguration?.["osVersion"],
                        },
                    virtualMachineConfiguration: !result.body.jobSpecification
                      .poolInfo.autoPoolSpecification?.pool
                      ?.virtualMachineConfiguration
                      ? undefined
                      : {
                          imageReference: {
                            publisher:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "publisher"
                              ],
                            offer:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "offer"
                              ],
                            sku: result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "sku"
                            ],
                            version:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "version"
                              ],
                            virtualMachineImageId:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "virtualMachineImageId"
                              ],
                            exactVersion:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "exactVersion"
                              ],
                          },
                          nodeAgentSKUId:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.["nodeAgentSKUId"],
                          windowsConfiguration: !result.body.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.windowsConfiguration
                            ? undefined
                            : {
                                enableAutomaticUpdates:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.windowsConfiguration?.[
                                    "enableAutomaticUpdates"
                                  ],
                              },
                          dataDisks: !result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.["dataDisks"]
                            ? result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["dataDisks"]
                            : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                "dataDisks"
                              ].map((p) => ({
                                lun: p["lun"],
                                caching: p["caching"],
                                diskSizeGB: p["diskSizeGB"],
                                storageAccountType: p["storageAccountType"],
                              })),
                          licenseType:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.["licenseType"],
                          containerConfiguration: !result.body.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration
                            ?.containerConfiguration
                            ? undefined
                            : {
                                type: result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.containerConfiguration?.["type"],
                                containerImageNames:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.containerConfiguration?.[
                                    "containerImageNames"
                                  ],
                                containerRegistries: !result.body
                                  .jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.containerConfiguration?.[
                                  "containerRegistries"
                                ]
                                  ? result.body.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.[
                                      "containerRegistries"
                                    ]
                                  : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                      "containerRegistries"
                                    ].map((p) => ({
                                      username: p["username"],
                                      password: p["password"],
                                      registryServer: p["registryServer"],
                                      identityReference: !p.identityReference
                                        ? undefined
                                        : {
                                            resourceId:
                                              p.identityReference?.[
                                                "resourceId"
                                              ],
                                          },
                                    })),
                              },
                          diskEncryptionConfiguration: !result.body
                            .jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.virtualMachineConfiguration
                            ?.diskEncryptionConfiguration
                            ? undefined
                            : {
                                targets:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.diskEncryptionConfiguration?.["targets"],
                              },
                          nodePlacementConfiguration: !result.body
                            .jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.virtualMachineConfiguration
                            ?.nodePlacementConfiguration
                            ? undefined
                            : {
                                policy:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.nodePlacementConfiguration?.["policy"],
                              },
                          extensions: !result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.["extensions"]
                            ? result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["extensions"]
                            : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                "extensions"
                              ].map((p) => ({
                                name: p["name"],
                                publisher: p["publisher"],
                                type: p["type"],
                                typeHandlerVersion: p["typeHandlerVersion"],
                                autoUpgradeMinorVersion:
                                  p["autoUpgradeMinorVersion"],
                                enableAutomaticUpgrade:
                                  p["enableAutomaticUpgrade"],
                                settings: p["settings"],
                                protectedSettings: p["protectedSettings"],
                                provisionAfterExtensions:
                                  p["provisionAfterExtensions"],
                              })),
                          osDisk: !result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.osDisk
                            ? undefined
                            : {
                                ephemeralOSDiskSettings: !result.body
                                  .jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.osDisk
                                  ?.ephemeralOSDiskSettings
                                  ? undefined
                                  : {
                                      placement:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration?.osDisk
                                          ?.ephemeralOSDiskSettings?.[
                                          "placement"
                                        ],
                                    },
                              },
                        },
                    taskSlotsPerNode:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["taskSlotsPerNode"],
                    taskSchedulingPolicy: !result.body.jobSpecification.poolInfo
                      .autoPoolSpecification?.pool?.taskSchedulingPolicy
                      ? undefined
                      : {
                          nodeFillType:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.taskSchedulingPolicy?.["nodeFillType"],
                        },
                    resizeTimeout:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["resizeTimeout"],
                    targetDedicatedNodes:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["targetDedicatedNodes"],
                    targetLowPriorityNodes:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "targetLowPriorityNodes"
                      ],
                    enableAutoScale:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["enableAutoScale"],
                    autoScaleFormula:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["autoScaleFormula"],
                    autoScaleEvaluationInterval:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "autoScaleEvaluationInterval"
                      ],
                    enableInterNodeCommunication:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "enableInterNodeCommunication"
                      ],
                    networkConfiguration: !result.body.jobSpecification.poolInfo
                      .autoPoolSpecification?.pool?.networkConfiguration
                      ? undefined
                      : {
                          subnetId:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.networkConfiguration?.["subnetId"],
                          dynamicVNetAssignmentScope:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.networkConfiguration?.[
                              "dynamicVNetAssignmentScope"
                            ],
                          endpointConfiguration: !result.body.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool
                            ?.networkConfiguration?.endpointConfiguration
                            ? undefined
                            : {
                                inboundNATPools:
                                  result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                    "inboundNATPools"
                                  ].map((p) => ({
                                    name: p["name"],
                                    protocol: p["protocol"],
                                    backendPort: p["backendPort"],
                                    frontendPortRangeStart:
                                      p["frontendPortRangeStart"],
                                    frontendPortRangeEnd:
                                      p["frontendPortRangeEnd"],
                                    networkSecurityGroupRules: !p[
                                      "networkSecurityGroupRules"
                                    ]
                                      ? p["networkSecurityGroupRules"]
                                      : p["networkSecurityGroupRules"].map(
                                          (p) => ({
                                            priority: p["priority"],
                                            access: p["access"],
                                            sourceAddressPrefix:
                                              p["sourceAddressPrefix"],
                                            sourcePortRanges:
                                              p["sourcePortRanges"],
                                          }),
                                        ),
                                  })),
                              },
                          publicIPAddressConfiguration: !result.body
                            .jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.networkConfiguration
                            ?.publicIPAddressConfiguration
                            ? undefined
                            : {
                                provision:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.publicIPAddressConfiguration?.[
                                    "provision"
                                  ],
                                ipAddressIds:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.publicIPAddressConfiguration?.[
                                    "ipAddressIds"
                                  ],
                              },
                          enableAcceleratedNetworking:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.networkConfiguration?.[
                              "enableAcceleratedNetworking"
                            ],
                        },
                    startTask: !result.body.jobSpecification.poolInfo
                      .autoPoolSpecification?.pool?.startTask
                      ? undefined
                      : {
                          commandLine:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "commandLine"
                            ],
                          containerSettings: !result.body.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool?.startTask
                            ?.containerSettings
                            ? undefined
                            : {
                                containerRunOptions:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.containerSettings?.[
                                    "containerRunOptions"
                                  ],
                                imageName:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.containerSettings?.["imageName"],
                                registry: !result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask
                                  ?.containerSettings?.registry
                                  ? undefined
                                  : {
                                      username:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry?.["username"],
                                      password:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry?.["password"],
                                      registryServer:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry?.["registryServer"],
                                      identityReference: !result.body
                                        .jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.registry
                                        ?.identityReference
                                        ? undefined
                                        : {
                                            resourceId:
                                              result.body.jobSpecification
                                                .poolInfo.autoPoolSpecification
                                                ?.pool?.startTask
                                                ?.containerSettings?.registry
                                                ?.identityReference?.[
                                                "resourceId"
                                              ],
                                          },
                                    },
                                workingDirectory:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.containerSettings?.["workingDirectory"],
                              },
                          resourceFiles: !result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.startTask?.[
                            "resourceFiles"
                          ]
                            ? result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool?.startTask?.[
                                "resourceFiles"
                              ]
                            : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                "resourceFiles"
                              ].map((p) => ({
                                autoStorageContainerName:
                                  p["autoStorageContainerName"],
                                storageContainerUrl: p["storageContainerUrl"],
                                httpUrl: p["httpUrl"],
                                blobPrefix: p["blobPrefix"],
                                filePath: p["filePath"],
                                fileMode: p["fileMode"],
                                identityReference: !p.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.identityReference?.["resourceId"],
                                    },
                              })),
                          environmentSettings: !result.body.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool?.startTask?.[
                            "environmentSettings"
                          ]
                            ? result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool?.startTask?.[
                                "environmentSettings"
                              ]
                            : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                "environmentSettings"
                              ].map((p) => ({
                                name: p["name"],
                                value: p["value"],
                              })),
                          userIdentity: !result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.startTask
                            ?.userIdentity
                            ? undefined
                            : {
                                username:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.userIdentity?.["username"],
                                autoUser: !result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask
                                  ?.userIdentity?.autoUser
                                  ? undefined
                                  : {
                                      scope:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.userIdentity?.autoUser?.[
                                          "scope"
                                        ],
                                      elevationLevel:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.userIdentity?.autoUser?.[
                                          "elevationLevel"
                                        ],
                                    },
                              },
                          maxTaskRetryCount:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "maxTaskRetryCount"
                            ],
                          waitForSuccess:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "waitForSuccess"
                            ],
                        },
                    certificateReferences: !result.body.jobSpecification
                      .poolInfo.autoPoolSpecification?.pool?.[
                      "certificateReferences"
                    ]
                      ? result.body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.[
                          "certificateReferences"
                        ]
                      : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                          "certificateReferences"
                        ].map((p) => ({
                          thumbprint: p["thumbprint"],
                          thumbprintAlgorithm: p["thumbprintAlgorithm"],
                          storeLocation: p["storeLocation"],
                          storeName: p["storeName"],
                          visibility: p["visibility"],
                        })),
                    applicationPackageReferences: !result.body.jobSpecification
                      .poolInfo.autoPoolSpecification?.pool?.[
                      "applicationPackageReferences"
                    ]
                      ? result.body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.[
                          "applicationPackageReferences"
                        ]
                      : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                          "applicationPackageReferences"
                        ].map((p) => ({
                          applicationId: p["applicationId"],
                          version: p["version"],
                        })),
                    applicationLicenses:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["applicationLicenses"],
                    userAccounts: !result.body.jobSpecification.poolInfo
                      .autoPoolSpecification?.pool?.["userAccounts"]
                      ? result.body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.["userAccounts"]
                      : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                          "userAccounts"
                        ].map((p) => ({
                          name: p["name"],
                          password: p["password"],
                          elevationLevel: p["elevationLevel"],
                          linuxUserConfiguration: !p.linuxUserConfiguration
                            ? undefined
                            : {
                                uid: p.linuxUserConfiguration?.["uid"],
                                gid: p.linuxUserConfiguration?.["gid"],
                                sshPrivateKey:
                                  p.linuxUserConfiguration?.["sshPrivateKey"],
                              },
                          windowsUserConfiguration: !p.windowsUserConfiguration
                            ? undefined
                            : {
                                loginMode:
                                  p.windowsUserConfiguration?.["loginMode"],
                              },
                        })),
                    metadata: !result.body.jobSpecification.poolInfo
                      .autoPoolSpecification?.pool?.["metadata"]
                      ? result.body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.["metadata"]
                      : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                          "metadata"
                        ].map((p) => ({ name: p["name"], value: p["value"] })),
                    mountConfiguration: !result.body.jobSpecification.poolInfo
                      .autoPoolSpecification?.pool?.["mountConfiguration"]
                      ? result.body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.["mountConfiguration"]
                      : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                          "mountConfiguration"
                        ].map((p) => ({
                          azureBlobFileSystemConfiguration:
                            !p.azureBlobFileSystemConfiguration
                              ? undefined
                              : {
                                  accountName:
                                    p.azureBlobFileSystemConfiguration?.[
                                      "accountName"
                                    ],
                                  containerName:
                                    p.azureBlobFileSystemConfiguration?.[
                                      "containerName"
                                    ],
                                  accountKey:
                                    p.azureBlobFileSystemConfiguration?.[
                                      "accountKey"
                                    ],
                                  sasKey:
                                    p.azureBlobFileSystemConfiguration?.[
                                      "sasKey"
                                    ],
                                  blobfuseOptions:
                                    p.azureBlobFileSystemConfiguration?.[
                                      "blobfuseOptions"
                                    ],
                                  relativeMountPath:
                                    p.azureBlobFileSystemConfiguration?.[
                                      "relativeMountPath"
                                    ],
                                  identityReference: !p
                                    .azureBlobFileSystemConfiguration
                                    ?.identityReference
                                    ? undefined
                                    : {
                                        resourceId:
                                          p.azureBlobFileSystemConfiguration
                                            ?.identityReference?.["resourceId"],
                                      },
                                },
                          nfsMountConfiguration: !p.nfsMountConfiguration
                            ? undefined
                            : {
                                source: p.nfsMountConfiguration?.["source"],
                                relativeMountPath:
                                  p.nfsMountConfiguration?.[
                                    "relativeMountPath"
                                  ],
                                mountOptions:
                                  p.nfsMountConfiguration?.["mountOptions"],
                              },
                          cifsMountConfiguration: !p.cifsMountConfiguration
                            ? undefined
                            : {
                                username:
                                  p.cifsMountConfiguration?.["username"],
                                source: p.cifsMountConfiguration?.["source"],
                                relativeMountPath:
                                  p.cifsMountConfiguration?.[
                                    "relativeMountPath"
                                  ],
                                mountOptions:
                                  p.cifsMountConfiguration?.["mountOptions"],
                                password:
                                  p.cifsMountConfiguration?.["password"],
                              },
                          azureFileShareConfiguration:
                            !p.azureFileShareConfiguration
                              ? undefined
                              : {
                                  accountName:
                                    p.azureFileShareConfiguration?.[
                                      "accountName"
                                    ],
                                  azureFileUrl:
                                    p.azureFileShareConfiguration?.[
                                      "azureFileUrl"
                                    ],
                                  accountKey:
                                    p.azureFileShareConfiguration?.[
                                      "accountKey"
                                    ],
                                  relativeMountPath:
                                    p.azureFileShareConfiguration?.[
                                      "relativeMountPath"
                                    ],
                                  mountOptions:
                                    p.azureFileShareConfiguration?.[
                                      "mountOptions"
                                    ],
                                },
                        })),
                    targetNodeCommunicationMode:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "targetNodeCommunicationMode"
                      ],
                  },
            },
      },
      metadata: !result.body.jobSpecification["metadata"]
        ? result.body.jobSpecification["metadata"]
        : result.body.jobSpecification["metadata"].map((p) => ({
            name: p["name"],
            value: p["value"],
          })),
    },
    executionInfo: !result.body.executionInfo
      ? undefined
      : {
          nextRunTime:
            result.body.executionInfo?.["nextRunTime"] !== undefined
              ? new Date(result.body.executionInfo?.["nextRunTime"])
              : undefined,
          recentJob: !result.body.executionInfo?.recentJob
            ? undefined
            : {
                id: result.body.executionInfo?.recentJob?.["id"],
                url: result.body.executionInfo?.recentJob?.["url"],
              },
          endTime:
            result.body.executionInfo?.["endTime"] !== undefined
              ? new Date(result.body.executionInfo?.["endTime"])
              : undefined,
        },
    metadata: !result.body["metadata"]
      ? result.body["metadata"]
      : result.body["metadata"].map((p) => ({
          name: p["name"],
          value: p["value"],
        })),
    stats: !result.body.stats
      ? undefined
      : {
          url: result.body.stats?.["url"],
          startTime: new Date(result.body.stats?.["startTime"]),
          lastUpdateTime: new Date(result.body.stats?.["lastUpdateTime"]),
          userCPUTime: result.body.stats?.["userCPUTime"],
          kernelCPUTime: result.body.stats?.["kernelCPUTime"],
          wallClockTime: result.body.stats?.["wallClockTime"],
          readIOps: result.body.stats?.["readIOps"],
          writeIOps: result.body.stats?.["writeIOps"],
          readIOGiB: result.body.stats?.["readIOGiB"],
          writeIOGiB: result.body.stats?.["writeIOGiB"],
          numSucceededTasks: result.body.stats?.["numSucceededTasks"],
          numFailedTasks: result.body.stats?.["numFailedTasks"],
          numTaskRetries: result.body.stats?.["numTaskRetries"],
          waitTime: result.body.stats?.["waitTime"],
        },
  };
}

/** Gets information about the specified Job Schedule. */
export async function getJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesGetJobScheduleOptions = { requestOptions: {} },
): Promise<BatchJobSchedule> {
  const result = await _getJobScheduleSend(context, jobScheduleId, options);
  return _getJobScheduleDeserialize(result);
}

export function _updateJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  body: BatchJobScheduleUpdateOptions,
  options: JobSchedulesUpdateJobScheduleOptions = { requestOptions: {} },
): StreamableMethod<
  UpdateJobSchedule200Response | UpdateJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: { timeOut: options?.timeOut },
      body: {
        schedule: !body.schedule
          ? undefined
          : {
              doNotRunUntil: body.schedule?.["doNotRunUntil"]?.toISOString(),
              doNotRunAfter: body.schedule?.["doNotRunAfter"]?.toISOString(),
              startWindow: body.schedule?.["startWindow"],
              recurrenceInterval: body.schedule?.["recurrenceInterval"],
            },
        jobSpecification: !body.jobSpecification
          ? undefined
          : {
              priority: body.jobSpecification?.["priority"],
              allowTaskPreemption:
                body.jobSpecification?.["allowTaskPreemption"],
              maxParallelTasks: body.jobSpecification?.["maxParallelTasks"],
              displayName: body.jobSpecification?.["displayName"],
              usesTaskDependencies:
                body.jobSpecification?.["usesTaskDependencies"],
              onAllTasksComplete: body.jobSpecification?.["onAllTasksComplete"],
              onTaskFailure: body.jobSpecification?.["onTaskFailure"],
              networkConfiguration: !body.jobSpecification?.networkConfiguration
                ? undefined
                : {
                    subnetId:
                      body.jobSpecification?.networkConfiguration?.["subnetId"],
                  },
              constraints: !body.jobSpecification?.constraints
                ? undefined
                : {
                    maxWallClockTime:
                      body.jobSpecification?.constraints?.["maxWallClockTime"],
                    maxTaskRetryCount:
                      body.jobSpecification?.constraints?.["maxTaskRetryCount"],
                  },
              jobManagerTask: !body.jobSpecification?.jobManagerTask
                ? undefined
                : {
                    id: body.jobSpecification?.jobManagerTask?.["id"],
                    displayName:
                      body.jobSpecification?.jobManagerTask?.["displayName"],
                    commandLine:
                      body.jobSpecification?.jobManagerTask?.["commandLine"],
                    containerSettings: !body.jobSpecification?.jobManagerTask
                      ?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            body.jobSpecification?.jobManagerTask
                              ?.containerSettings?.["containerRunOptions"],
                          imageName:
                            body.jobSpecification?.jobManagerTask
                              ?.containerSettings?.["imageName"],
                          registry: !body.jobSpecification?.jobManagerTask
                            ?.containerSettings?.registry
                            ? undefined
                            : {
                                username:
                                  body.jobSpecification?.jobManagerTask
                                    ?.containerSettings?.registry?.["username"],
                                password:
                                  body.jobSpecification?.jobManagerTask
                                    ?.containerSettings?.registry?.["password"],
                                registryServer:
                                  body.jobSpecification?.jobManagerTask
                                    ?.containerSettings?.registry?.[
                                    "registryServer"
                                  ],
                                identityReference: !body.jobSpecification
                                  ?.jobManagerTask?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        body.jobSpecification?.jobManagerTask
                                          ?.containerSettings?.registry
                                          ?.identityReference?.["resourceId"],
                                    },
                              },
                          workingDirectory:
                            body.jobSpecification?.jobManagerTask
                              ?.containerSettings?.["workingDirectory"],
                        },
                    resourceFiles: !body.jobSpecification?.jobManagerTask?.[
                      "resourceFiles"
                    ]
                      ? body.jobSpecification?.jobManagerTask?.["resourceFiles"]
                      : body.jobSpecification?.jobManagerTask?.[
                          "resourceFiles"
                        ].map((p) => ({
                          autoStorageContainerName:
                            p["autoStorageContainerName"],
                          storageContainerUrl: p["storageContainerUrl"],
                          httpUrl: p["httpUrl"],
                          blobPrefix: p["blobPrefix"],
                          filePath: p["filePath"],
                          fileMode: p["fileMode"],
                          identityReference: !p.identityReference
                            ? undefined
                            : {
                                resourceId: p.identityReference?.["resourceId"],
                              },
                        })),
                    outputFiles: !body.jobSpecification?.jobManagerTask?.[
                      "outputFiles"
                    ]
                      ? body.jobSpecification?.jobManagerTask?.["outputFiles"]
                      : body.jobSpecification?.jobManagerTask?.[
                          "outputFiles"
                        ].map((p) => ({
                          filePattern: p["filePattern"],
                          destination: {
                            container: !p.destination.container
                              ? undefined
                              : {
                                  path: p.destination.container?.["path"],
                                  containerUrl:
                                    p.destination.container?.["containerUrl"],
                                  identityReference: !p.destination.container
                                    ?.identityReference
                                    ? undefined
                                    : {
                                        resourceId:
                                          p.destination.container
                                            ?.identityReference?.["resourceId"],
                                      },
                                  uploadHeaders: !p.destination.container?.[
                                    "uploadHeaders"
                                  ]
                                    ? p.destination.container?.["uploadHeaders"]
                                    : p.destination.container?.[
                                        "uploadHeaders"
                                      ].map((p) => ({
                                        name: p["name"],
                                        value: p["value"],
                                      })),
                                },
                          },
                          uploadOptions: {
                            uploadCondition: p.uploadOptions["uploadCondition"],
                          },
                        })),
                    environmentSettings: !body.jobSpecification
                      ?.jobManagerTask?.["environmentSettings"]
                      ? body.jobSpecification?.jobManagerTask?.[
                          "environmentSettings"
                        ]
                      : body.jobSpecification?.jobManagerTask?.[
                          "environmentSettings"
                        ].map((p) => ({ name: p["name"], value: p["value"] })),
                    constraints: !body.jobSpecification?.jobManagerTask
                      ?.constraints
                      ? undefined
                      : {
                          maxWallClockTime:
                            body.jobSpecification?.jobManagerTask
                              ?.constraints?.["maxWallClockTime"],
                          retentionTime:
                            body.jobSpecification?.jobManagerTask
                              ?.constraints?.["retentionTime"],
                          maxTaskRetryCount:
                            body.jobSpecification?.jobManagerTask
                              ?.constraints?.["maxTaskRetryCount"],
                        },
                    requiredSlots:
                      body.jobSpecification?.jobManagerTask?.["requiredSlots"],
                    killJobOnCompletion:
                      body.jobSpecification?.jobManagerTask?.[
                        "killJobOnCompletion"
                      ],
                    userIdentity: !body.jobSpecification?.jobManagerTask
                      ?.userIdentity
                      ? undefined
                      : {
                          username:
                            body.jobSpecification?.jobManagerTask
                              ?.userIdentity?.["username"],
                          autoUser: !body.jobSpecification?.jobManagerTask
                            ?.userIdentity?.autoUser
                            ? undefined
                            : {
                                scope:
                                  body.jobSpecification?.jobManagerTask
                                    ?.userIdentity?.autoUser?.["scope"],
                                elevationLevel:
                                  body.jobSpecification?.jobManagerTask
                                    ?.userIdentity?.autoUser?.[
                                    "elevationLevel"
                                  ],
                              },
                        },
                    runExclusive:
                      body.jobSpecification?.jobManagerTask?.["runExclusive"],
                    applicationPackageReferences: !body.jobSpecification
                      ?.jobManagerTask?.["applicationPackageReferences"]
                      ? body.jobSpecification?.jobManagerTask?.[
                          "applicationPackageReferences"
                        ]
                      : body.jobSpecification?.jobManagerTask?.[
                          "applicationPackageReferences"
                        ].map((p) => ({
                          applicationId: p["applicationId"],
                          version: p["version"],
                        })),
                    authenticationTokenSettings: !body.jobSpecification
                      ?.jobManagerTask?.authenticationTokenSettings
                      ? undefined
                      : {
                          access:
                            body.jobSpecification?.jobManagerTask
                              ?.authenticationTokenSettings?.["access"],
                        },
                    allowLowPriorityNode:
                      body.jobSpecification?.jobManagerTask?.[
                        "allowLowPriorityNode"
                      ],
                  },
              jobPreparationTask: !body.jobSpecification?.jobPreparationTask
                ? undefined
                : {
                    id: body.jobSpecification?.jobPreparationTask?.["id"],
                    commandLine:
                      body.jobSpecification?.jobPreparationTask?.[
                        "commandLine"
                      ],
                    containerSettings: !body.jobSpecification
                      ?.jobPreparationTask?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            body.jobSpecification?.jobPreparationTask
                              ?.containerSettings?.["containerRunOptions"],
                          imageName:
                            body.jobSpecification?.jobPreparationTask
                              ?.containerSettings?.["imageName"],
                          registry: !body.jobSpecification?.jobPreparationTask
                            ?.containerSettings?.registry
                            ? undefined
                            : {
                                username:
                                  body.jobSpecification?.jobPreparationTask
                                    ?.containerSettings?.registry?.["username"],
                                password:
                                  body.jobSpecification?.jobPreparationTask
                                    ?.containerSettings?.registry?.["password"],
                                registryServer:
                                  body.jobSpecification?.jobPreparationTask
                                    ?.containerSettings?.registry?.[
                                    "registryServer"
                                  ],
                                identityReference: !body.jobSpecification
                                  ?.jobPreparationTask?.containerSettings
                                  ?.registry?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        body.jobSpecification
                                          ?.jobPreparationTask
                                          ?.containerSettings?.registry
                                          ?.identityReference?.["resourceId"],
                                    },
                              },
                          workingDirectory:
                            body.jobSpecification?.jobPreparationTask
                              ?.containerSettings?.["workingDirectory"],
                        },
                    resourceFiles: !body.jobSpecification?.jobPreparationTask?.[
                      "resourceFiles"
                    ]
                      ? body.jobSpecification?.jobPreparationTask?.[
                          "resourceFiles"
                        ]
                      : body.jobSpecification?.jobPreparationTask?.[
                          "resourceFiles"
                        ].map((p) => ({
                          autoStorageContainerName:
                            p["autoStorageContainerName"],
                          storageContainerUrl: p["storageContainerUrl"],
                          httpUrl: p["httpUrl"],
                          blobPrefix: p["blobPrefix"],
                          filePath: p["filePath"],
                          fileMode: p["fileMode"],
                          identityReference: !p.identityReference
                            ? undefined
                            : {
                                resourceId: p.identityReference?.["resourceId"],
                              },
                        })),
                    environmentSettings: !body.jobSpecification
                      ?.jobPreparationTask?.["environmentSettings"]
                      ? body.jobSpecification?.jobPreparationTask?.[
                          "environmentSettings"
                        ]
                      : body.jobSpecification?.jobPreparationTask?.[
                          "environmentSettings"
                        ].map((p) => ({ name: p["name"], value: p["value"] })),
                    constraints: !body.jobSpecification?.jobPreparationTask
                      ?.constraints
                      ? undefined
                      : {
                          maxWallClockTime:
                            body.jobSpecification?.jobPreparationTask
                              ?.constraints?.["maxWallClockTime"],
                          retentionTime:
                            body.jobSpecification?.jobPreparationTask
                              ?.constraints?.["retentionTime"],
                          maxTaskRetryCount:
                            body.jobSpecification?.jobPreparationTask
                              ?.constraints?.["maxTaskRetryCount"],
                        },
                    waitForSuccess:
                      body.jobSpecification?.jobPreparationTask?.[
                        "waitForSuccess"
                      ],
                    userIdentity: !body.jobSpecification?.jobPreparationTask
                      ?.userIdentity
                      ? undefined
                      : {
                          username:
                            body.jobSpecification?.jobPreparationTask
                              ?.userIdentity?.["username"],
                          autoUser: !body.jobSpecification?.jobPreparationTask
                            ?.userIdentity?.autoUser
                            ? undefined
                            : {
                                scope:
                                  body.jobSpecification?.jobPreparationTask
                                    ?.userIdentity?.autoUser?.["scope"],
                                elevationLevel:
                                  body.jobSpecification?.jobPreparationTask
                                    ?.userIdentity?.autoUser?.[
                                    "elevationLevel"
                                  ],
                              },
                        },
                    rerunOnNodeRebootAfterSuccess:
                      body.jobSpecification?.jobPreparationTask?.[
                        "rerunOnNodeRebootAfterSuccess"
                      ],
                  },
              jobReleaseTask: !body.jobSpecification?.jobReleaseTask
                ? undefined
                : {
                    id: body.jobSpecification?.jobReleaseTask?.["id"],
                    commandLine:
                      body.jobSpecification?.jobReleaseTask?.["commandLine"],
                    containerSettings: !body.jobSpecification?.jobReleaseTask
                      ?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            body.jobSpecification?.jobReleaseTask
                              ?.containerSettings?.["containerRunOptions"],
                          imageName:
                            body.jobSpecification?.jobReleaseTask
                              ?.containerSettings?.["imageName"],
                          registry: !body.jobSpecification?.jobReleaseTask
                            ?.containerSettings?.registry
                            ? undefined
                            : {
                                username:
                                  body.jobSpecification?.jobReleaseTask
                                    ?.containerSettings?.registry?.["username"],
                                password:
                                  body.jobSpecification?.jobReleaseTask
                                    ?.containerSettings?.registry?.["password"],
                                registryServer:
                                  body.jobSpecification?.jobReleaseTask
                                    ?.containerSettings?.registry?.[
                                    "registryServer"
                                  ],
                                identityReference: !body.jobSpecification
                                  ?.jobReleaseTask?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        body.jobSpecification?.jobReleaseTask
                                          ?.containerSettings?.registry
                                          ?.identityReference?.["resourceId"],
                                    },
                              },
                          workingDirectory:
                            body.jobSpecification?.jobReleaseTask
                              ?.containerSettings?.["workingDirectory"],
                        },
                    resourceFiles: !body.jobSpecification?.jobReleaseTask?.[
                      "resourceFiles"
                    ]
                      ? body.jobSpecification?.jobReleaseTask?.["resourceFiles"]
                      : body.jobSpecification?.jobReleaseTask?.[
                          "resourceFiles"
                        ].map((p) => ({
                          autoStorageContainerName:
                            p["autoStorageContainerName"],
                          storageContainerUrl: p["storageContainerUrl"],
                          httpUrl: p["httpUrl"],
                          blobPrefix: p["blobPrefix"],
                          filePath: p["filePath"],
                          fileMode: p["fileMode"],
                          identityReference: !p.identityReference
                            ? undefined
                            : {
                                resourceId: p.identityReference?.["resourceId"],
                              },
                        })),
                    environmentSettings: !body.jobSpecification
                      ?.jobReleaseTask?.["environmentSettings"]
                      ? body.jobSpecification?.jobReleaseTask?.[
                          "environmentSettings"
                        ]
                      : body.jobSpecification?.jobReleaseTask?.[
                          "environmentSettings"
                        ].map((p) => ({ name: p["name"], value: p["value"] })),
                    maxWallClockTime:
                      body.jobSpecification?.jobReleaseTask?.[
                        "maxWallClockTime"
                      ],
                    retentionTime:
                      body.jobSpecification?.jobReleaseTask?.["retentionTime"],
                    userIdentity: !body.jobSpecification?.jobReleaseTask
                      ?.userIdentity
                      ? undefined
                      : {
                          username:
                            body.jobSpecification?.jobReleaseTask
                              ?.userIdentity?.["username"],
                          autoUser: !body.jobSpecification?.jobReleaseTask
                            ?.userIdentity?.autoUser
                            ? undefined
                            : {
                                scope:
                                  body.jobSpecification?.jobReleaseTask
                                    ?.userIdentity?.autoUser?.["scope"],
                                elevationLevel:
                                  body.jobSpecification?.jobReleaseTask
                                    ?.userIdentity?.autoUser?.[
                                    "elevationLevel"
                                  ],
                              },
                        },
                  },
              commonEnvironmentSettings: !body.jobSpecification?.[
                "commonEnvironmentSettings"
              ]
                ? body.jobSpecification?.["commonEnvironmentSettings"]
                : body.jobSpecification?.["commonEnvironmentSettings"].map(
                    (p) => ({ name: p["name"], value: p["value"] }),
                  ),
              poolInfo: {
                poolId: body.jobSpecification?.poolInfo["poolId"],
                autoPoolSpecification: !body.jobSpecification?.poolInfo
                  .autoPoolSpecification
                  ? undefined
                  : {
                      autoPoolIdPrefix:
                        body.jobSpecification?.poolInfo.autoPoolSpecification?.[
                          "autoPoolIdPrefix"
                        ],
                      poolLifetimeOption:
                        body.jobSpecification?.poolInfo.autoPoolSpecification?.[
                          "poolLifetimeOption"
                        ],
                      keepAlive:
                        body.jobSpecification?.poolInfo.autoPoolSpecification?.[
                          "keepAlive"
                        ],
                      pool: !body.jobSpecification?.poolInfo
                        .autoPoolSpecification?.pool
                        ? undefined
                        : {
                            displayName:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.["displayName"],
                            vmSize:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.["vmSize"],
                            cloudServiceConfiguration: !body.jobSpecification
                              ?.poolInfo.autoPoolSpecification?.pool
                              ?.cloudServiceConfiguration
                              ? undefined
                              : {
                                  osFamily:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.cloudServiceConfiguration?.["osFamily"],
                                  osVersion:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.cloudServiceConfiguration?.[
                                      "osVersion"
                                    ],
                                },
                            virtualMachineConfiguration: !body.jobSpecification
                              ?.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ? undefined
                              : {
                                  imageReference: {
                                    publisher:
                                      body.jobSpecification?.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["publisher"],
                                    offer:
                                      body.jobSpecification?.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["offer"],
                                    sku: body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["sku"],
                                    version:
                                      body.jobSpecification?.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["version"],
                                    virtualMachineImageId:
                                      body.jobSpecification?.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference[
                                        "virtualMachineImageId"
                                      ],
                                  },
                                  nodeAgentSKUId:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "nodeAgentSKUId"
                                    ],
                                  windowsConfiguration: !body.jobSpecification
                                    ?.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.windowsConfiguration
                                    ? undefined
                                    : {
                                        enableAutomaticUpdates:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.windowsConfiguration?.[
                                            "enableAutomaticUpdates"
                                          ],
                                      },
                                  dataDisks: !body.jobSpecification?.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.["dataDisks"]
                                    ? body.jobSpecification?.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration?.[
                                        "dataDisks"
                                      ]
                                    : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                        "dataDisks"
                                      ].map((p) => ({
                                        lun: p["lun"],
                                        caching: p["caching"],
                                        diskSizeGB: p["diskSizeGB"],
                                        storageAccountType:
                                          p["storageAccountType"],
                                      })),
                                  licenseType:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "licenseType"
                                    ],
                                  containerConfiguration: !body.jobSpecification
                                    ?.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.containerConfiguration
                                    ? undefined
                                    : {
                                        type: body.jobSpecification?.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.containerConfiguration?.["type"],
                                        containerImageNames:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.containerConfiguration?.[
                                            "containerImageNames"
                                          ],
                                        containerRegistries: !body
                                          .jobSpecification?.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.containerConfiguration?.[
                                          "containerRegistries"
                                        ]
                                          ? body.jobSpecification?.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.virtualMachineConfiguration
                                              ?.containerConfiguration?.[
                                              "containerRegistries"
                                            ]
                                          : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                              "containerRegistries"
                                            ].map((p) => ({
                                              username: p["username"],
                                              password: p["password"],
                                              registryServer:
                                                p["registryServer"],
                                              identityReference:
                                                !p.identityReference
                                                  ? undefined
                                                  : {
                                                      resourceId:
                                                        p.identityReference?.[
                                                          "resourceId"
                                                        ],
                                                    },
                                            })),
                                      },
                                  diskEncryptionConfiguration: !body
                                    .jobSpecification?.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.diskEncryptionConfiguration
                                    ? undefined
                                    : {
                                        targets:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.diskEncryptionConfiguration?.[
                                            "targets"
                                          ],
                                      },
                                  nodePlacementConfiguration: !body
                                    .jobSpecification?.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.nodePlacementConfiguration
                                    ? undefined
                                    : {
                                        policy:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.nodePlacementConfiguration?.[
                                            "policy"
                                          ],
                                      },
                                  extensions: !body.jobSpecification?.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.[
                                    "extensions"
                                  ]
                                    ? body.jobSpecification?.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration?.[
                                        "extensions"
                                      ]
                                    : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                        "extensions"
                                      ].map((p) => ({
                                        name: p["name"],
                                        publisher: p["publisher"],
                                        type: p["type"],
                                        typeHandlerVersion:
                                          p["typeHandlerVersion"],
                                        autoUpgradeMinorVersion:
                                          p["autoUpgradeMinorVersion"],
                                        enableAutomaticUpgrade:
                                          p["enableAutomaticUpgrade"],
                                        settings: p["settings"],
                                        protectedSettings:
                                          p["protectedSettings"],
                                        provisionAfterExtensions:
                                          p["provisionAfterExtensions"],
                                      })),
                                  osDisk: !body.jobSpecification?.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.osDisk
                                    ? undefined
                                    : {
                                        ephemeralOSDiskSettings: !body
                                          .jobSpecification?.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration?.osDisk
                                          ?.ephemeralOSDiskSettings
                                          ? undefined
                                          : {
                                              placement:
                                                body.jobSpecification?.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.virtualMachineConfiguration
                                                  ?.osDisk
                                                  ?.ephemeralOSDiskSettings?.[
                                                  "placement"
                                                ],
                                            },
                                      },
                                },
                            taskSlotsPerNode:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.[
                                "taskSlotsPerNode"
                              ],
                            taskSchedulingPolicy: !body.jobSpecification
                              ?.poolInfo.autoPoolSpecification?.pool
                              ?.taskSchedulingPolicy
                              ? undefined
                              : {
                                  nodeFillType:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.taskSchedulingPolicy?.["nodeFillType"],
                                },
                            resizeTimeout:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.["resizeTimeout"],
                            targetDedicatedNodes:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.[
                                "targetDedicatedNodes"
                              ],
                            targetLowPriorityNodes:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.[
                                "targetLowPriorityNodes"
                              ],
                            enableAutoScale:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.[
                                "enableAutoScale"
                              ],
                            autoScaleFormula:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.[
                                "autoScaleFormula"
                              ],
                            autoScaleEvaluationInterval:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.[
                                "autoScaleEvaluationInterval"
                              ],
                            enableInterNodeCommunication:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.[
                                "enableInterNodeCommunication"
                              ],
                            networkConfiguration: !body.jobSpecification
                              ?.poolInfo.autoPoolSpecification?.pool
                              ?.networkConfiguration
                              ? undefined
                              : {
                                  subnetId:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.networkConfiguration?.["subnetId"],
                                  dynamicVNetAssignmentScope:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.networkConfiguration?.[
                                      "dynamicVNetAssignmentScope"
                                    ],
                                  endpointConfiguration: !body.jobSpecification
                                    ?.poolInfo.autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.endpointConfiguration
                                    ? undefined
                                    : {
                                        inboundNATPools:
                                          body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                            "inboundNATPools"
                                          ].map((p) => ({
                                            name: p["name"],
                                            protocol: p["protocol"],
                                            backendPort: p["backendPort"],
                                            frontendPortRangeStart:
                                              p["frontendPortRangeStart"],
                                            frontendPortRangeEnd:
                                              p["frontendPortRangeEnd"],
                                            networkSecurityGroupRules: !p[
                                              "networkSecurityGroupRules"
                                            ]
                                              ? p["networkSecurityGroupRules"]
                                              : p[
                                                  "networkSecurityGroupRules"
                                                ].map((p) => ({
                                                  priority: p["priority"],
                                                  access: p["access"],
                                                  sourceAddressPrefix:
                                                    p["sourceAddressPrefix"],
                                                  sourcePortRanges:
                                                    p["sourcePortRanges"],
                                                })),
                                          })),
                                      },
                                  publicIPAddressConfiguration: !body
                                    .jobSpecification?.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.publicIPAddressConfiguration
                                    ? undefined
                                    : {
                                        provision:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.networkConfiguration
                                            ?.publicIPAddressConfiguration?.[
                                            "provision"
                                          ],
                                        ipAddressIds:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.networkConfiguration
                                            ?.publicIPAddressConfiguration?.[
                                            "ipAddressIds"
                                          ],
                                      },
                                  enableAcceleratedNetworking:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.networkConfiguration?.[
                                      "enableAcceleratedNetworking"
                                    ],
                                },
                            startTask: !body.jobSpecification?.poolInfo
                              .autoPoolSpecification?.pool?.startTask
                              ? undefined
                              : {
                                  commandLine:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool?.startTask?.[
                                      "commandLine"
                                    ],
                                  containerSettings: !body.jobSpecification
                                    ?.poolInfo.autoPoolSpecification?.pool
                                    ?.startTask?.containerSettings
                                    ? undefined
                                    : {
                                        containerRunOptions:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings?.[
                                            "containerRunOptions"
                                          ],
                                        imageName:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings?.[
                                            "imageName"
                                          ],
                                        registry: !body.jobSpecification
                                          ?.poolInfo.autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry
                                          ? undefined
                                          : {
                                              username:
                                                body.jobSpecification?.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.startTask?.containerSettings
                                                  ?.registry?.["username"],
                                              password:
                                                body.jobSpecification?.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.startTask?.containerSettings
                                                  ?.registry?.["password"],
                                              registryServer:
                                                body.jobSpecification?.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.startTask?.containerSettings
                                                  ?.registry?.[
                                                  "registryServer"
                                                ],
                                              identityReference: !body
                                                .jobSpecification?.poolInfo
                                                .autoPoolSpecification?.pool
                                                ?.startTask?.containerSettings
                                                ?.registry?.identityReference
                                                ? undefined
                                                : {
                                                    resourceId:
                                                      body.jobSpecification
                                                        ?.poolInfo
                                                        .autoPoolSpecification
                                                        ?.pool?.startTask
                                                        ?.containerSettings
                                                        ?.registry
                                                        ?.identityReference?.[
                                                        "resourceId"
                                                      ],
                                                  },
                                            },
                                        workingDirectory:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings?.[
                                            "workingDirectory"
                                          ],
                                      },
                                  resourceFiles: !body.jobSpecification
                                    ?.poolInfo.autoPoolSpecification?.pool
                                    ?.startTask?.["resourceFiles"]
                                    ? body.jobSpecification?.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.startTask?.["resourceFiles"]
                                    : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                        "resourceFiles"
                                      ].map((p) => ({
                                        autoStorageContainerName:
                                          p["autoStorageContainerName"],
                                        storageContainerUrl:
                                          p["storageContainerUrl"],
                                        httpUrl: p["httpUrl"],
                                        blobPrefix: p["blobPrefix"],
                                        filePath: p["filePath"],
                                        fileMode: p["fileMode"],
                                        identityReference: !p.identityReference
                                          ? undefined
                                          : {
                                              resourceId:
                                                p.identityReference?.[
                                                  "resourceId"
                                                ],
                                            },
                                      })),
                                  environmentSettings: !body.jobSpecification
                                    ?.poolInfo.autoPoolSpecification?.pool
                                    ?.startTask?.["environmentSettings"]
                                    ? body.jobSpecification?.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.startTask?.["environmentSettings"]
                                    : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                        "environmentSettings"
                                      ].map((p) => ({
                                        name: p["name"],
                                        value: p["value"],
                                      })),
                                  userIdentity: !body.jobSpecification?.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.userIdentity
                                    ? undefined
                                    : {
                                        username:
                                          body.jobSpecification?.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.userIdentity?.[
                                            "username"
                                          ],
                                        autoUser: !body.jobSpecification
                                          ?.poolInfo.autoPoolSpecification?.pool
                                          ?.startTask?.userIdentity?.autoUser
                                          ? undefined
                                          : {
                                              scope:
                                                body.jobSpecification?.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.startTask?.userIdentity
                                                  ?.autoUser?.["scope"],
                                              elevationLevel:
                                                body.jobSpecification?.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.startTask?.userIdentity
                                                  ?.autoUser?.[
                                                  "elevationLevel"
                                                ],
                                            },
                                      },
                                  maxTaskRetryCount:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool?.startTask?.[
                                      "maxTaskRetryCount"
                                    ],
                                  waitForSuccess:
                                    body.jobSpecification?.poolInfo
                                      .autoPoolSpecification?.pool?.startTask?.[
                                      "waitForSuccess"
                                    ],
                                },
                            certificateReferences: !body.jobSpecification
                              ?.poolInfo.autoPoolSpecification?.pool?.[
                              "certificateReferences"
                            ]
                              ? body.jobSpecification?.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "certificateReferences"
                                ]
                              : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.[
                                  "certificateReferences"
                                ].map((p) => ({
                                  thumbprint: p["thumbprint"],
                                  thumbprintAlgorithm: p["thumbprintAlgorithm"],
                                  storeLocation: p["storeLocation"],
                                  storeName: p["storeName"],
                                  visibility: p["visibility"],
                                })),
                            applicationPackageReferences: !body.jobSpecification
                              ?.poolInfo.autoPoolSpecification?.pool?.[
                              "applicationPackageReferences"
                            ]
                              ? body.jobSpecification?.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "applicationPackageReferences"
                                ]
                              : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.[
                                  "applicationPackageReferences"
                                ].map((p) => ({
                                  applicationId: p["applicationId"],
                                  version: p["version"],
                                })),
                            applicationLicenses:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.[
                                "applicationLicenses"
                              ],
                            userAccounts: !body.jobSpecification?.poolInfo
                              .autoPoolSpecification?.pool?.["userAccounts"]
                              ? body.jobSpecification?.poolInfo
                                  .autoPoolSpecification?.pool?.["userAccounts"]
                              : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.[
                                  "userAccounts"
                                ].map((p) => ({
                                  name: p["name"],
                                  password: p["password"],
                                  elevationLevel: p["elevationLevel"],
                                  linuxUserConfiguration:
                                    !p.linuxUserConfiguration
                                      ? undefined
                                      : {
                                          uid: p.linuxUserConfiguration?.[
                                            "uid"
                                          ],
                                          gid: p.linuxUserConfiguration?.[
                                            "gid"
                                          ],
                                          sshPrivateKey:
                                            p.linuxUserConfiguration?.[
                                              "sshPrivateKey"
                                            ],
                                        },
                                  windowsUserConfiguration:
                                    !p.windowsUserConfiguration
                                      ? undefined
                                      : {
                                          loginMode:
                                            p.windowsUserConfiguration?.[
                                              "loginMode"
                                            ],
                                        },
                                })),
                            metadata: !body.jobSpecification?.poolInfo
                              .autoPoolSpecification?.pool?.["metadata"]
                              ? body.jobSpecification?.poolInfo
                                  .autoPoolSpecification?.pool?.["metadata"]
                              : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.[
                                  "metadata"
                                ].map((p) => ({
                                  name: p["name"],
                                  value: p["value"],
                                })),
                            mountConfiguration: !body.jobSpecification?.poolInfo
                              .autoPoolSpecification?.pool?.[
                              "mountConfiguration"
                            ]
                              ? body.jobSpecification?.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "mountConfiguration"
                                ]
                              : body.jobSpecification?.poolInfo.autoPoolSpecification?.pool?.[
                                  "mountConfiguration"
                                ].map((p) => ({
                                  azureBlobFileSystemConfiguration:
                                    !p.azureBlobFileSystemConfiguration
                                      ? undefined
                                      : {
                                          accountName:
                                            p
                                              .azureBlobFileSystemConfiguration?.[
                                              "accountName"
                                            ],
                                          containerName:
                                            p
                                              .azureBlobFileSystemConfiguration?.[
                                              "containerName"
                                            ],
                                          accountKey:
                                            p
                                              .azureBlobFileSystemConfiguration?.[
                                              "accountKey"
                                            ],
                                          sasKey:
                                            p
                                              .azureBlobFileSystemConfiguration?.[
                                              "sasKey"
                                            ],
                                          blobfuseOptions:
                                            p
                                              .azureBlobFileSystemConfiguration?.[
                                              "blobfuseOptions"
                                            ],
                                          relativeMountPath:
                                            p
                                              .azureBlobFileSystemConfiguration?.[
                                              "relativeMountPath"
                                            ],
                                          identityReference: !p
                                            .azureBlobFileSystemConfiguration
                                            ?.identityReference
                                            ? undefined
                                            : {
                                                resourceId:
                                                  p
                                                    .azureBlobFileSystemConfiguration
                                                    ?.identityReference?.[
                                                    "resourceId"
                                                  ],
                                              },
                                        },
                                  nfsMountConfiguration:
                                    !p.nfsMountConfiguration
                                      ? undefined
                                      : {
                                          source:
                                            p.nfsMountConfiguration?.["source"],
                                          relativeMountPath:
                                            p.nfsMountConfiguration?.[
                                              "relativeMountPath"
                                            ],
                                          mountOptions:
                                            p.nfsMountConfiguration?.[
                                              "mountOptions"
                                            ],
                                        },
                                  cifsMountConfiguration:
                                    !p.cifsMountConfiguration
                                      ? undefined
                                      : {
                                          username:
                                            p.cifsMountConfiguration?.[
                                              "username"
                                            ],
                                          source:
                                            p.cifsMountConfiguration?.[
                                              "source"
                                            ],
                                          relativeMountPath:
                                            p.cifsMountConfiguration?.[
                                              "relativeMountPath"
                                            ],
                                          mountOptions:
                                            p.cifsMountConfiguration?.[
                                              "mountOptions"
                                            ],
                                          password:
                                            p.cifsMountConfiguration?.[
                                              "password"
                                            ],
                                        },
                                  azureFileShareConfiguration:
                                    !p.azureFileShareConfiguration
                                      ? undefined
                                      : {
                                          accountName:
                                            p.azureFileShareConfiguration?.[
                                              "accountName"
                                            ],
                                          azureFileUrl:
                                            p.azureFileShareConfiguration?.[
                                              "azureFileUrl"
                                            ],
                                          accountKey:
                                            p.azureFileShareConfiguration?.[
                                              "accountKey"
                                            ],
                                          relativeMountPath:
                                            p.azureFileShareConfiguration?.[
                                              "relativeMountPath"
                                            ],
                                          mountOptions:
                                            p.azureFileShareConfiguration?.[
                                              "mountOptions"
                                            ],
                                        },
                                })),
                            targetNodeCommunicationMode:
                              body.jobSpecification?.poolInfo
                                .autoPoolSpecification?.pool?.[
                                "targetNodeCommunicationMode"
                              ],
                          },
                    },
              },
              metadata: !body.jobSpecification?.["metadata"]
                ? body.jobSpecification?.["metadata"]
                : body.jobSpecification?.["metadata"].map((p) => ({
                    name: p["name"],
                    value: p["value"],
                  })),
            },
        metadata: !body["metadata"]
          ? body["metadata"]
          : body["metadata"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
      },
    });
}

export async function _updateJobScheduleDeserialize(
  result: UpdateJobSchedule200Response | UpdateJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This replaces only the Job Schedule properties specified in the request. For
 * example, if the schedule property is not specified with this request, then the
 * Batch service will keep the existing schedule. Changes to a Job Schedule only
 * impact Jobs created by the schedule after the update has taken place; currently
 * running Jobs are unaffected.
 */
export async function updateJobSchedule(
  context: Client,
  jobScheduleId: string,
  body: BatchJobScheduleUpdateOptions,
  options: JobSchedulesUpdateJobScheduleOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _updateJobScheduleSend(
    context,
    jobScheduleId,
    body,
    options,
  );
  return _updateJobScheduleDeserialize(result);
}

export function _replaceJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  body: BatchJobSchedule,
  options: JobSchedulesReplaceJobScheduleOptions = { requestOptions: {} },
): StreamableMethod<
  ReplaceJobSchedule200Response | ReplaceJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: { timeOut: options?.timeOut },
      body: {
        schedule: {
          doNotRunUntil: body.schedule["doNotRunUntil"]?.toISOString(),
          doNotRunAfter: body.schedule["doNotRunAfter"]?.toISOString(),
          startWindow: body.schedule["startWindow"],
          recurrenceInterval: body.schedule["recurrenceInterval"],
        },
        jobSpecification: {
          priority: body.jobSpecification["priority"],
          allowTaskPreemption: body.jobSpecification["allowTaskPreemption"],
          maxParallelTasks: body.jobSpecification["maxParallelTasks"],
          displayName: body.jobSpecification["displayName"],
          usesTaskDependencies: body.jobSpecification["usesTaskDependencies"],
          onAllTasksComplete: body.jobSpecification["onAllTasksComplete"],
          onTaskFailure: body.jobSpecification["onTaskFailure"],
          networkConfiguration: !body.jobSpecification.networkConfiguration
            ? undefined
            : {
                subnetId:
                  body.jobSpecification.networkConfiguration?.["subnetId"],
              },
          constraints: !body.jobSpecification.constraints
            ? undefined
            : {
                maxWallClockTime:
                  body.jobSpecification.constraints?.["maxWallClockTime"],
                maxTaskRetryCount:
                  body.jobSpecification.constraints?.["maxTaskRetryCount"],
              },
          jobManagerTask: !body.jobSpecification.jobManagerTask
            ? undefined
            : {
                id: body.jobSpecification.jobManagerTask?.["id"],
                displayName:
                  body.jobSpecification.jobManagerTask?.["displayName"],
                commandLine:
                  body.jobSpecification.jobManagerTask?.["commandLine"],
                containerSettings: !body.jobSpecification.jobManagerTask
                  ?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        body.jobSpecification.jobManagerTask
                          ?.containerSettings?.["containerRunOptions"],
                      imageName:
                        body.jobSpecification.jobManagerTask
                          ?.containerSettings?.["imageName"],
                      registry: !body.jobSpecification.jobManagerTask
                        ?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              body.jobSpecification.jobManagerTask
                                ?.containerSettings?.registry?.["username"],
                            password:
                              body.jobSpecification.jobManagerTask
                                ?.containerSettings?.registry?.["password"],
                            registryServer:
                              body.jobSpecification.jobManagerTask
                                ?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !body.jobSpecification
                              .jobManagerTask?.containerSettings?.registry
                              ?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    body.jobSpecification.jobManagerTask
                                      ?.containerSettings?.registry
                                      ?.identityReference?.["resourceId"],
                                },
                          },
                      workingDirectory:
                        body.jobSpecification.jobManagerTask
                          ?.containerSettings?.["workingDirectory"],
                    },
                resourceFiles: !body.jobSpecification.jobManagerTask?.[
                  "resourceFiles"
                ]
                  ? body.jobSpecification.jobManagerTask?.["resourceFiles"]
                  : body.jobSpecification.jobManagerTask?.["resourceFiles"].map(
                      (p) => ({
                        autoStorageContainerName: p["autoStorageContainerName"],
                        storageContainerUrl: p["storageContainerUrl"],
                        httpUrl: p["httpUrl"],
                        blobPrefix: p["blobPrefix"],
                        filePath: p["filePath"],
                        fileMode: p["fileMode"],
                        identityReference: !p.identityReference
                          ? undefined
                          : { resourceId: p.identityReference?.["resourceId"] },
                      }),
                    ),
                outputFiles: !body.jobSpecification.jobManagerTask?.[
                  "outputFiles"
                ]
                  ? body.jobSpecification.jobManagerTask?.["outputFiles"]
                  : body.jobSpecification.jobManagerTask?.["outputFiles"].map(
                      (p) => ({
                        filePattern: p["filePattern"],
                        destination: {
                          container: !p.destination.container
                            ? undefined
                            : {
                                path: p.destination.container?.["path"],
                                containerUrl:
                                  p.destination.container?.["containerUrl"],
                                identityReference: !p.destination.container
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.destination.container
                                          ?.identityReference?.["resourceId"],
                                    },
                                uploadHeaders: !p.destination.container?.[
                                  "uploadHeaders"
                                ]
                                  ? p.destination.container?.["uploadHeaders"]
                                  : p.destination.container?.[
                                      "uploadHeaders"
                                    ].map((p) => ({
                                      name: p["name"],
                                      value: p["value"],
                                    })),
                              },
                        },
                        uploadOptions: {
                          uploadCondition: p.uploadOptions["uploadCondition"],
                        },
                      }),
                    ),
                environmentSettings: !body.jobSpecification.jobManagerTask?.[
                  "environmentSettings"
                ]
                  ? body.jobSpecification.jobManagerTask?.[
                      "environmentSettings"
                    ]
                  : body.jobSpecification.jobManagerTask?.[
                      "environmentSettings"
                    ].map((p) => ({ name: p["name"], value: p["value"] })),
                constraints: !body.jobSpecification.jobManagerTask?.constraints
                  ? undefined
                  : {
                      maxWallClockTime:
                        body.jobSpecification.jobManagerTask?.constraints?.[
                          "maxWallClockTime"
                        ],
                      retentionTime:
                        body.jobSpecification.jobManagerTask?.constraints?.[
                          "retentionTime"
                        ],
                      maxTaskRetryCount:
                        body.jobSpecification.jobManagerTask?.constraints?.[
                          "maxTaskRetryCount"
                        ],
                    },
                requiredSlots:
                  body.jobSpecification.jobManagerTask?.["requiredSlots"],
                killJobOnCompletion:
                  body.jobSpecification.jobManagerTask?.["killJobOnCompletion"],
                userIdentity: !body.jobSpecification.jobManagerTask
                  ?.userIdentity
                  ? undefined
                  : {
                      username:
                        body.jobSpecification.jobManagerTask?.userIdentity?.[
                          "username"
                        ],
                      autoUser: !body.jobSpecification.jobManagerTask
                        ?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              body.jobSpecification.jobManagerTask?.userIdentity
                                ?.autoUser?.["scope"],
                            elevationLevel:
                              body.jobSpecification.jobManagerTask?.userIdentity
                                ?.autoUser?.["elevationLevel"],
                          },
                    },
                runExclusive:
                  body.jobSpecification.jobManagerTask?.["runExclusive"],
                applicationPackageReferences: !body.jobSpecification
                  .jobManagerTask?.["applicationPackageReferences"]
                  ? body.jobSpecification.jobManagerTask?.[
                      "applicationPackageReferences"
                    ]
                  : body.jobSpecification.jobManagerTask?.[
                      "applicationPackageReferences"
                    ].map((p) => ({
                      applicationId: p["applicationId"],
                      version: p["version"],
                    })),
                authenticationTokenSettings: !body.jobSpecification
                  .jobManagerTask?.authenticationTokenSettings
                  ? undefined
                  : {
                      access:
                        body.jobSpecification.jobManagerTask
                          ?.authenticationTokenSettings?.["access"],
                    },
                allowLowPriorityNode:
                  body.jobSpecification.jobManagerTask?.[
                    "allowLowPriorityNode"
                  ],
              },
          jobPreparationTask: !body.jobSpecification.jobPreparationTask
            ? undefined
            : {
                id: body.jobSpecification.jobPreparationTask?.["id"],
                commandLine:
                  body.jobSpecification.jobPreparationTask?.["commandLine"],
                containerSettings: !body.jobSpecification.jobPreparationTask
                  ?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        body.jobSpecification.jobPreparationTask
                          ?.containerSettings?.["containerRunOptions"],
                      imageName:
                        body.jobSpecification.jobPreparationTask
                          ?.containerSettings?.["imageName"],
                      registry: !body.jobSpecification.jobPreparationTask
                        ?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              body.jobSpecification.jobPreparationTask
                                ?.containerSettings?.registry?.["username"],
                            password:
                              body.jobSpecification.jobPreparationTask
                                ?.containerSettings?.registry?.["password"],
                            registryServer:
                              body.jobSpecification.jobPreparationTask
                                ?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !body.jobSpecification
                              .jobPreparationTask?.containerSettings?.registry
                              ?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    body.jobSpecification.jobPreparationTask
                                      ?.containerSettings?.registry
                                      ?.identityReference?.["resourceId"],
                                },
                          },
                      workingDirectory:
                        body.jobSpecification.jobPreparationTask
                          ?.containerSettings?.["workingDirectory"],
                    },
                resourceFiles: !body.jobSpecification.jobPreparationTask?.[
                  "resourceFiles"
                ]
                  ? body.jobSpecification.jobPreparationTask?.["resourceFiles"]
                  : body.jobSpecification.jobPreparationTask?.[
                      "resourceFiles"
                    ].map((p) => ({
                      autoStorageContainerName: p["autoStorageContainerName"],
                      storageContainerUrl: p["storageContainerUrl"],
                      httpUrl: p["httpUrl"],
                      blobPrefix: p["blobPrefix"],
                      filePath: p["filePath"],
                      fileMode: p["fileMode"],
                      identityReference: !p.identityReference
                        ? undefined
                        : { resourceId: p.identityReference?.["resourceId"] },
                    })),
                environmentSettings: !body.jobSpecification
                  .jobPreparationTask?.["environmentSettings"]
                  ? body.jobSpecification.jobPreparationTask?.[
                      "environmentSettings"
                    ]
                  : body.jobSpecification.jobPreparationTask?.[
                      "environmentSettings"
                    ].map((p) => ({ name: p["name"], value: p["value"] })),
                constraints: !body.jobSpecification.jobPreparationTask
                  ?.constraints
                  ? undefined
                  : {
                      maxWallClockTime:
                        body.jobSpecification.jobPreparationTask?.constraints?.[
                          "maxWallClockTime"
                        ],
                      retentionTime:
                        body.jobSpecification.jobPreparationTask?.constraints?.[
                          "retentionTime"
                        ],
                      maxTaskRetryCount:
                        body.jobSpecification.jobPreparationTask?.constraints?.[
                          "maxTaskRetryCount"
                        ],
                    },
                waitForSuccess:
                  body.jobSpecification.jobPreparationTask?.["waitForSuccess"],
                userIdentity: !body.jobSpecification.jobPreparationTask
                  ?.userIdentity
                  ? undefined
                  : {
                      username:
                        body.jobSpecification.jobPreparationTask
                          ?.userIdentity?.["username"],
                      autoUser: !body.jobSpecification.jobPreparationTask
                        ?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              body.jobSpecification.jobPreparationTask
                                ?.userIdentity?.autoUser?.["scope"],
                            elevationLevel:
                              body.jobSpecification.jobPreparationTask
                                ?.userIdentity?.autoUser?.["elevationLevel"],
                          },
                    },
                rerunOnNodeRebootAfterSuccess:
                  body.jobSpecification.jobPreparationTask?.[
                    "rerunOnNodeRebootAfterSuccess"
                  ],
              },
          jobReleaseTask: !body.jobSpecification.jobReleaseTask
            ? undefined
            : {
                id: body.jobSpecification.jobReleaseTask?.["id"],
                commandLine:
                  body.jobSpecification.jobReleaseTask?.["commandLine"],
                containerSettings: !body.jobSpecification.jobReleaseTask
                  ?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        body.jobSpecification.jobReleaseTask
                          ?.containerSettings?.["containerRunOptions"],
                      imageName:
                        body.jobSpecification.jobReleaseTask
                          ?.containerSettings?.["imageName"],
                      registry: !body.jobSpecification.jobReleaseTask
                        ?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              body.jobSpecification.jobReleaseTask
                                ?.containerSettings?.registry?.["username"],
                            password:
                              body.jobSpecification.jobReleaseTask
                                ?.containerSettings?.registry?.["password"],
                            registryServer:
                              body.jobSpecification.jobReleaseTask
                                ?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !body.jobSpecification
                              .jobReleaseTask?.containerSettings?.registry
                              ?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    body.jobSpecification.jobReleaseTask
                                      ?.containerSettings?.registry
                                      ?.identityReference?.["resourceId"],
                                },
                          },
                      workingDirectory:
                        body.jobSpecification.jobReleaseTask
                          ?.containerSettings?.["workingDirectory"],
                    },
                resourceFiles: !body.jobSpecification.jobReleaseTask?.[
                  "resourceFiles"
                ]
                  ? body.jobSpecification.jobReleaseTask?.["resourceFiles"]
                  : body.jobSpecification.jobReleaseTask?.["resourceFiles"].map(
                      (p) => ({
                        autoStorageContainerName: p["autoStorageContainerName"],
                        storageContainerUrl: p["storageContainerUrl"],
                        httpUrl: p["httpUrl"],
                        blobPrefix: p["blobPrefix"],
                        filePath: p["filePath"],
                        fileMode: p["fileMode"],
                        identityReference: !p.identityReference
                          ? undefined
                          : { resourceId: p.identityReference?.["resourceId"] },
                      }),
                    ),
                environmentSettings: !body.jobSpecification.jobReleaseTask?.[
                  "environmentSettings"
                ]
                  ? body.jobSpecification.jobReleaseTask?.[
                      "environmentSettings"
                    ]
                  : body.jobSpecification.jobReleaseTask?.[
                      "environmentSettings"
                    ].map((p) => ({ name: p["name"], value: p["value"] })),
                maxWallClockTime:
                  body.jobSpecification.jobReleaseTask?.["maxWallClockTime"],
                retentionTime:
                  body.jobSpecification.jobReleaseTask?.["retentionTime"],
                userIdentity: !body.jobSpecification.jobReleaseTask
                  ?.userIdentity
                  ? undefined
                  : {
                      username:
                        body.jobSpecification.jobReleaseTask?.userIdentity?.[
                          "username"
                        ],
                      autoUser: !body.jobSpecification.jobReleaseTask
                        ?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              body.jobSpecification.jobReleaseTask?.userIdentity
                                ?.autoUser?.["scope"],
                            elevationLevel:
                              body.jobSpecification.jobReleaseTask?.userIdentity
                                ?.autoUser?.["elevationLevel"],
                          },
                    },
              },
          commonEnvironmentSettings: !body.jobSpecification[
            "commonEnvironmentSettings"
          ]
            ? body.jobSpecification["commonEnvironmentSettings"]
            : body.jobSpecification["commonEnvironmentSettings"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          poolInfo: {
            poolId: body.jobSpecification.poolInfo["poolId"],
            autoPoolSpecification: !body.jobSpecification.poolInfo
              .autoPoolSpecification
              ? undefined
              : {
                  autoPoolIdPrefix:
                    body.jobSpecification.poolInfo.autoPoolSpecification?.[
                      "autoPoolIdPrefix"
                    ],
                  poolLifetimeOption:
                    body.jobSpecification.poolInfo.autoPoolSpecification?.[
                      "poolLifetimeOption"
                    ],
                  keepAlive:
                    body.jobSpecification.poolInfo.autoPoolSpecification?.[
                      "keepAlive"
                    ],
                  pool: !body.jobSpecification.poolInfo.autoPoolSpecification
                    ?.pool
                    ? undefined
                    : {
                        displayName:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["displayName"],
                        vmSize:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["vmSize"],
                        cloudServiceConfiguration: !body.jobSpecification
                          .poolInfo.autoPoolSpecification?.pool
                          ?.cloudServiceConfiguration
                          ? undefined
                          : {
                              osFamily:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.cloudServiceConfiguration?.["osFamily"],
                              osVersion:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.cloudServiceConfiguration?.["osVersion"],
                            },
                        virtualMachineConfiguration: !body.jobSpecification
                          .poolInfo.autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration
                          ? undefined
                          : {
                              imageReference: {
                                publisher:
                                  body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["publisher"],
                                offer:
                                  body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["offer"],
                                sku: body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "sku"
                                ],
                                version:
                                  body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["version"],
                                virtualMachineImageId:
                                  body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["virtualMachineImageId"],
                              },
                              nodeAgentSKUId:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.[
                                  "nodeAgentSKUId"
                                ],
                              windowsConfiguration: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.windowsConfiguration
                                ? undefined
                                : {
                                    enableAutomaticUpdates:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.windowsConfiguration?.[
                                        "enableAutomaticUpdates"
                                      ],
                                  },
                              dataDisks: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["dataDisks"]
                                ? body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.["dataDisks"]
                                : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                    "dataDisks"
                                  ].map((p) => ({
                                    lun: p["lun"],
                                    caching: p["caching"],
                                    diskSizeGB: p["diskSizeGB"],
                                    storageAccountType: p["storageAccountType"],
                                  })),
                              licenseType:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.[
                                  "licenseType"
                                ],
                              containerConfiguration: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.containerConfiguration
                                ? undefined
                                : {
                                    type: body.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.["type"],
                                    containerImageNames:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.[
                                        "containerImageNames"
                                      ],
                                    containerRegistries: !body.jobSpecification
                                      .poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.[
                                      "containerRegistries"
                                    ]
                                      ? body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.containerConfiguration?.[
                                          "containerRegistries"
                                        ]
                                      : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                          "containerRegistries"
                                        ].map((p) => ({
                                          username: p["username"],
                                          password: p["password"],
                                          registryServer: p["registryServer"],
                                          identityReference:
                                            !p.identityReference
                                              ? undefined
                                              : {
                                                  resourceId:
                                                    p.identityReference?.[
                                                      "resourceId"
                                                    ],
                                                },
                                        })),
                                  },
                              diskEncryptionConfiguration: !body
                                .jobSpecification.poolInfo.autoPoolSpecification
                                ?.pool?.virtualMachineConfiguration
                                ?.diskEncryptionConfiguration
                                ? undefined
                                : {
                                    targets:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.diskEncryptionConfiguration?.[
                                        "targets"
                                      ],
                                  },
                              nodePlacementConfiguration: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.nodePlacementConfiguration
                                ? undefined
                                : {
                                    policy:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.nodePlacementConfiguration?.[
                                        "policy"
                                      ],
                                  },
                              extensions: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["extensions"]
                                ? body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.[
                                    "extensions"
                                  ]
                                : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                    "extensions"
                                  ].map((p) => ({
                                    name: p["name"],
                                    publisher: p["publisher"],
                                    type: p["type"],
                                    typeHandlerVersion: p["typeHandlerVersion"],
                                    autoUpgradeMinorVersion:
                                      p["autoUpgradeMinorVersion"],
                                    enableAutomaticUpgrade:
                                      p["enableAutomaticUpgrade"],
                                    settings: p["settings"],
                                    protectedSettings: p["protectedSettings"],
                                    provisionAfterExtensions:
                                      p["provisionAfterExtensions"],
                                  })),
                              osDisk: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.osDisk
                                ? undefined
                                : {
                                    ephemeralOSDiskSettings: !body
                                      .jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.osDisk
                                      ?.ephemeralOSDiskSettings
                                      ? undefined
                                      : {
                                          placement:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.virtualMachineConfiguration
                                              ?.osDisk
                                              ?.ephemeralOSDiskSettings?.[
                                              "placement"
                                            ],
                                        },
                                  },
                            },
                        taskSlotsPerNode:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["taskSlotsPerNode"],
                        taskSchedulingPolicy: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.taskSchedulingPolicy
                          ? undefined
                          : {
                              nodeFillType:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.taskSchedulingPolicy?.["nodeFillType"],
                            },
                        resizeTimeout:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["resizeTimeout"],
                        targetDedicatedNodes:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["targetDedicatedNodes"],
                        targetLowPriorityNodes:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["targetLowPriorityNodes"],
                        enableAutoScale:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["enableAutoScale"],
                        autoScaleFormula:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["autoScaleFormula"],
                        autoScaleEvaluationInterval:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["autoScaleEvaluationInterval"],
                        enableInterNodeCommunication:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["enableInterNodeCommunication"],
                        networkConfiguration: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.networkConfiguration
                          ? undefined
                          : {
                              subnetId:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.networkConfiguration?.["subnetId"],
                              dynamicVNetAssignmentScope:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.networkConfiguration?.[
                                  "dynamicVNetAssignmentScope"
                                ],
                              endpointConfiguration: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.networkConfiguration?.endpointConfiguration
                                ? undefined
                                : {
                                    inboundNATPools:
                                      body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                        "inboundNATPools"
                                      ].map((p) => ({
                                        name: p["name"],
                                        protocol: p["protocol"],
                                        backendPort: p["backendPort"],
                                        frontendPortRangeStart:
                                          p["frontendPortRangeStart"],
                                        frontendPortRangeEnd:
                                          p["frontendPortRangeEnd"],
                                        networkSecurityGroupRules: !p[
                                          "networkSecurityGroupRules"
                                        ]
                                          ? p["networkSecurityGroupRules"]
                                          : p["networkSecurityGroupRules"].map(
                                              (p) => ({
                                                priority: p["priority"],
                                                access: p["access"],
                                                sourceAddressPrefix:
                                                  p["sourceAddressPrefix"],
                                                sourcePortRanges:
                                                  p["sourcePortRanges"],
                                              }),
                                            ),
                                      })),
                                  },
                              publicIPAddressConfiguration: !body
                                .jobSpecification.poolInfo.autoPoolSpecification
                                ?.pool?.networkConfiguration
                                ?.publicIPAddressConfiguration
                                ? undefined
                                : {
                                    provision:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.networkConfiguration
                                        ?.publicIPAddressConfiguration?.[
                                        "provision"
                                      ],
                                    ipAddressIds:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.networkConfiguration
                                        ?.publicIPAddressConfiguration?.[
                                        "ipAddressIds"
                                      ],
                                  },
                              enableAcceleratedNetworking:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.networkConfiguration?.[
                                  "enableAcceleratedNetworking"
                                ],
                            },
                        startTask: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.startTask
                          ? undefined
                          : {
                              commandLine:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask?.[
                                  "commandLine"
                                ],
                              containerSettings: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.containerSettings
                                ? undefined
                                : {
                                    containerRunOptions:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.[
                                        "containerRunOptions"
                                      ],
                                    imageName:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.["imageName"],
                                    registry: !body.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.startTask
                                      ?.containerSettings?.registry
                                      ? undefined
                                      : {
                                          username:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.["username"],
                                          password:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.["password"],
                                          registryServer:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.["registryServer"],
                                          identityReference: !body
                                            .jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings
                                            ?.registry?.identityReference
                                            ? undefined
                                            : {
                                                resourceId:
                                                  body.jobSpecification.poolInfo
                                                    .autoPoolSpecification?.pool
                                                    ?.startTask
                                                    ?.containerSettings
                                                    ?.registry
                                                    ?.identityReference?.[
                                                    "resourceId"
                                                  ],
                                              },
                                        },
                                    workingDirectory:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.[
                                        "workingDirectory"
                                      ],
                                  },
                              resourceFiles: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool?.startTask?.[
                                "resourceFiles"
                              ]
                                ? body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask?.[
                                    "resourceFiles"
                                  ]
                                : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                    "resourceFiles"
                                  ].map((p) => ({
                                    autoStorageContainerName:
                                      p["autoStorageContainerName"],
                                    storageContainerUrl:
                                      p["storageContainerUrl"],
                                    httpUrl: p["httpUrl"],
                                    blobPrefix: p["blobPrefix"],
                                    filePath: p["filePath"],
                                    fileMode: p["fileMode"],
                                    identityReference: !p.identityReference
                                      ? undefined
                                      : {
                                          resourceId:
                                            p.identityReference?.["resourceId"],
                                        },
                                  })),
                              environmentSettings: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["environmentSettings"]
                                ? body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask?.[
                                    "environmentSettings"
                                  ]
                                : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                    "environmentSettings"
                                  ].map((p) => ({
                                    name: p["name"],
                                    value: p["value"],
                                  })),
                              userIdentity: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.userIdentity
                                ? undefined
                                : {
                                    username:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.userIdentity?.["username"],
                                    autoUser: !body.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.startTask
                                      ?.userIdentity?.autoUser
                                      ? undefined
                                      : {
                                          scope:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.userIdentity
                                              ?.autoUser?.["scope"],
                                          elevationLevel:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.userIdentity
                                              ?.autoUser?.["elevationLevel"],
                                        },
                                  },
                              maxTaskRetryCount:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask?.[
                                  "maxTaskRetryCount"
                                ],
                              waitForSuccess:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask?.[
                                  "waitForSuccess"
                                ],
                            },
                        certificateReferences: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.[
                          "certificateReferences"
                        ]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["certificateReferences"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "certificateReferences"
                            ].map((p) => ({
                              thumbprint: p["thumbprint"],
                              thumbprintAlgorithm: p["thumbprintAlgorithm"],
                              storeLocation: p["storeLocation"],
                              storeName: p["storeName"],
                              visibility: p["visibility"],
                            })),
                        applicationPackageReferences: !body.jobSpecification
                          .poolInfo.autoPoolSpecification?.pool?.[
                          "applicationPackageReferences"
                        ]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["applicationPackageReferences"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "applicationPackageReferences"
                            ].map((p) => ({
                              applicationId: p["applicationId"],
                              version: p["version"],
                            })),
                        applicationLicenses:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["applicationLicenses"],
                        userAccounts: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.["userAccounts"]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["userAccounts"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "userAccounts"
                            ].map((p) => ({
                              name: p["name"],
                              password: p["password"],
                              elevationLevel: p["elevationLevel"],
                              linuxUserConfiguration: !p.linuxUserConfiguration
                                ? undefined
                                : {
                                    uid: p.linuxUserConfiguration?.["uid"],
                                    gid: p.linuxUserConfiguration?.["gid"],
                                    sshPrivateKey:
                                      p.linuxUserConfiguration?.[
                                        "sshPrivateKey"
                                      ],
                                  },
                              windowsUserConfiguration:
                                !p.windowsUserConfiguration
                                  ? undefined
                                  : {
                                      loginMode:
                                        p.windowsUserConfiguration?.[
                                          "loginMode"
                                        ],
                                    },
                            })),
                        metadata: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.["metadata"]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["metadata"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "metadata"
                            ].map((p) => ({
                              name: p["name"],
                              value: p["value"],
                            })),
                        mountConfiguration: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.["mountConfiguration"]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["mountConfiguration"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "mountConfiguration"
                            ].map((p) => ({
                              azureBlobFileSystemConfiguration:
                                !p.azureBlobFileSystemConfiguration
                                  ? undefined
                                  : {
                                      accountName:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "accountName"
                                        ],
                                      containerName:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "containerName"
                                        ],
                                      accountKey:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "accountKey"
                                        ],
                                      sasKey:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "sasKey"
                                        ],
                                      blobfuseOptions:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "blobfuseOptions"
                                        ],
                                      relativeMountPath:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "relativeMountPath"
                                        ],
                                      identityReference: !p
                                        .azureBlobFileSystemConfiguration
                                        ?.identityReference
                                        ? undefined
                                        : {
                                            resourceId:
                                              p.azureBlobFileSystemConfiguration
                                                ?.identityReference?.[
                                                "resourceId"
                                              ],
                                          },
                                    },
                              nfsMountConfiguration: !p.nfsMountConfiguration
                                ? undefined
                                : {
                                    source: p.nfsMountConfiguration?.["source"],
                                    relativeMountPath:
                                      p.nfsMountConfiguration?.[
                                        "relativeMountPath"
                                      ],
                                    mountOptions:
                                      p.nfsMountConfiguration?.["mountOptions"],
                                  },
                              cifsMountConfiguration: !p.cifsMountConfiguration
                                ? undefined
                                : {
                                    username:
                                      p.cifsMountConfiguration?.["username"],
                                    source:
                                      p.cifsMountConfiguration?.["source"],
                                    relativeMountPath:
                                      p.cifsMountConfiguration?.[
                                        "relativeMountPath"
                                      ],
                                    mountOptions:
                                      p.cifsMountConfiguration?.[
                                        "mountOptions"
                                      ],
                                    password:
                                      p.cifsMountConfiguration?.["password"],
                                  },
                              azureFileShareConfiguration:
                                !p.azureFileShareConfiguration
                                  ? undefined
                                  : {
                                      accountName:
                                        p.azureFileShareConfiguration?.[
                                          "accountName"
                                        ],
                                      azureFileUrl:
                                        p.azureFileShareConfiguration?.[
                                          "azureFileUrl"
                                        ],
                                      accountKey:
                                        p.azureFileShareConfiguration?.[
                                          "accountKey"
                                        ],
                                      relativeMountPath:
                                        p.azureFileShareConfiguration?.[
                                          "relativeMountPath"
                                        ],
                                      mountOptions:
                                        p.azureFileShareConfiguration?.[
                                          "mountOptions"
                                        ],
                                    },
                            })),
                        targetNodeCommunicationMode:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["targetNodeCommunicationMode"],
                      },
                },
          },
          metadata: !body.jobSpecification["metadata"]
            ? body.jobSpecification["metadata"]
            : body.jobSpecification["metadata"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
        },
        metadata: !body["metadata"]
          ? body["metadata"]
          : body["metadata"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
      },
    });
}

export async function _replaceJobScheduleDeserialize(
  result: ReplaceJobSchedule200Response | ReplaceJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This fully replaces all the updatable properties of the Job Schedule. For
 * example, if the schedule property is not specified with this request, then the
 * Batch service will remove the existing schedule. Changes to a Job Schedule only
 * impact Jobs created by the schedule after the update has taken place; currently
 * running Jobs are unaffected.
 */
export async function replaceJobSchedule(
  context: Client,
  jobScheduleId: string,
  body: BatchJobSchedule,
  options: JobSchedulesReplaceJobScheduleOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceJobScheduleSend(
    context,
    jobScheduleId,
    body,
    options,
  );
  return _replaceJobScheduleDeserialize(result);
}

export function _disableJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesDisableJobScheduleOptions = { requestOptions: {} },
): StreamableMethod<
  DisableJobSchedule204Response | DisableJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}/disable", jobScheduleId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _disableJobScheduleDeserialize(
  result: DisableJobSchedule204Response | DisableJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** No new Jobs will be created until the Job Schedule is enabled again. */
export async function disableJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesDisableJobScheduleOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _disableJobScheduleSend(context, jobScheduleId, options);
  return _disableJobScheduleDeserialize(result);
}

export function _enableJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesEnableJobScheduleOptions = { requestOptions: {} },
): StreamableMethod<
  EnableJobSchedule204Response | EnableJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}/enable", jobScheduleId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _enableJobScheduleDeserialize(
  result: EnableJobSchedule204Response | EnableJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Enables a Job Schedule. */
export async function enableJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesEnableJobScheduleOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _enableJobScheduleSend(context, jobScheduleId, options);
  return _enableJobScheduleDeserialize(result);
}

export function _terminateJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesTerminateJobScheduleOptions = { requestOptions: {} },
): StreamableMethod<
  TerminateJobSchedule202Response | TerminateJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}/terminate", jobScheduleId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _terminateJobScheduleDeserialize(
  result: TerminateJobSchedule202Response | TerminateJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Terminates a Job Schedule. */
export async function terminateJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: JobSchedulesTerminateJobScheduleOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateJobScheduleSend(
    context,
    jobScheduleId,
    options,
  );
  return _terminateJobScheduleDeserialize(result);
}

export function _createJobScheduleSend(
  context: Client,
  body: BatchJobScheduleCreateOptions,
  options: JobSchedulesCreateJobScheduleOptions = { requestOptions: {} },
): StreamableMethod<
  CreateJobSchedule201Response | CreateJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: {
        id: body["id"],
        displayName: body["displayName"],
        schedule: {
          doNotRunUntil: body.schedule["doNotRunUntil"]?.toISOString(),
          doNotRunAfter: body.schedule["doNotRunAfter"]?.toISOString(),
          startWindow: body.schedule["startWindow"],
          recurrenceInterval: body.schedule["recurrenceInterval"],
        },
        jobSpecification: {
          priority: body.jobSpecification["priority"],
          allowTaskPreemption: body.jobSpecification["allowTaskPreemption"],
          maxParallelTasks: body.jobSpecification["maxParallelTasks"],
          displayName: body.jobSpecification["displayName"],
          usesTaskDependencies: body.jobSpecification["usesTaskDependencies"],
          onAllTasksComplete: body.jobSpecification["onAllTasksComplete"],
          onTaskFailure: body.jobSpecification["onTaskFailure"],
          networkConfiguration: !body.jobSpecification.networkConfiguration
            ? undefined
            : {
                subnetId:
                  body.jobSpecification.networkConfiguration?.["subnetId"],
              },
          constraints: !body.jobSpecification.constraints
            ? undefined
            : {
                maxWallClockTime:
                  body.jobSpecification.constraints?.["maxWallClockTime"],
                maxTaskRetryCount:
                  body.jobSpecification.constraints?.["maxTaskRetryCount"],
              },
          jobManagerTask: !body.jobSpecification.jobManagerTask
            ? undefined
            : {
                id: body.jobSpecification.jobManagerTask?.["id"],
                displayName:
                  body.jobSpecification.jobManagerTask?.["displayName"],
                commandLine:
                  body.jobSpecification.jobManagerTask?.["commandLine"],
                containerSettings: !body.jobSpecification.jobManagerTask
                  ?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        body.jobSpecification.jobManagerTask
                          ?.containerSettings?.["containerRunOptions"],
                      imageName:
                        body.jobSpecification.jobManagerTask
                          ?.containerSettings?.["imageName"],
                      registry: !body.jobSpecification.jobManagerTask
                        ?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              body.jobSpecification.jobManagerTask
                                ?.containerSettings?.registry?.["username"],
                            password:
                              body.jobSpecification.jobManagerTask
                                ?.containerSettings?.registry?.["password"],
                            registryServer:
                              body.jobSpecification.jobManagerTask
                                ?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !body.jobSpecification
                              .jobManagerTask?.containerSettings?.registry
                              ?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    body.jobSpecification.jobManagerTask
                                      ?.containerSettings?.registry
                                      ?.identityReference?.["resourceId"],
                                },
                          },
                      workingDirectory:
                        body.jobSpecification.jobManagerTask
                          ?.containerSettings?.["workingDirectory"],
                    },
                resourceFiles: !body.jobSpecification.jobManagerTask?.[
                  "resourceFiles"
                ]
                  ? body.jobSpecification.jobManagerTask?.["resourceFiles"]
                  : body.jobSpecification.jobManagerTask?.["resourceFiles"].map(
                      (p) => ({
                        autoStorageContainerName: p["autoStorageContainerName"],
                        storageContainerUrl: p["storageContainerUrl"],
                        httpUrl: p["httpUrl"],
                        blobPrefix: p["blobPrefix"],
                        filePath: p["filePath"],
                        fileMode: p["fileMode"],
                        identityReference: !p.identityReference
                          ? undefined
                          : { resourceId: p.identityReference?.["resourceId"] },
                      }),
                    ),
                outputFiles: !body.jobSpecification.jobManagerTask?.[
                  "outputFiles"
                ]
                  ? body.jobSpecification.jobManagerTask?.["outputFiles"]
                  : body.jobSpecification.jobManagerTask?.["outputFiles"].map(
                      (p) => ({
                        filePattern: p["filePattern"],
                        destination: {
                          container: !p.destination.container
                            ? undefined
                            : {
                                path: p.destination.container?.["path"],
                                containerUrl:
                                  p.destination.container?.["containerUrl"],
                                identityReference: !p.destination.container
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.destination.container
                                          ?.identityReference?.["resourceId"],
                                    },
                                uploadHeaders: !p.destination.container?.[
                                  "uploadHeaders"
                                ]
                                  ? p.destination.container?.["uploadHeaders"]
                                  : p.destination.container?.[
                                      "uploadHeaders"
                                    ].map((p) => ({
                                      name: p["name"],
                                      value: p["value"],
                                    })),
                              },
                        },
                        uploadOptions: {
                          uploadCondition: p.uploadOptions["uploadCondition"],
                        },
                      }),
                    ),
                environmentSettings: !body.jobSpecification.jobManagerTask?.[
                  "environmentSettings"
                ]
                  ? body.jobSpecification.jobManagerTask?.[
                      "environmentSettings"
                    ]
                  : body.jobSpecification.jobManagerTask?.[
                      "environmentSettings"
                    ].map((p) => ({ name: p["name"], value: p["value"] })),
                constraints: !body.jobSpecification.jobManagerTask?.constraints
                  ? undefined
                  : {
                      maxWallClockTime:
                        body.jobSpecification.jobManagerTask?.constraints?.[
                          "maxWallClockTime"
                        ],
                      retentionTime:
                        body.jobSpecification.jobManagerTask?.constraints?.[
                          "retentionTime"
                        ],
                      maxTaskRetryCount:
                        body.jobSpecification.jobManagerTask?.constraints?.[
                          "maxTaskRetryCount"
                        ],
                    },
                requiredSlots:
                  body.jobSpecification.jobManagerTask?.["requiredSlots"],
                killJobOnCompletion:
                  body.jobSpecification.jobManagerTask?.["killJobOnCompletion"],
                userIdentity: !body.jobSpecification.jobManagerTask
                  ?.userIdentity
                  ? undefined
                  : {
                      username:
                        body.jobSpecification.jobManagerTask?.userIdentity?.[
                          "username"
                        ],
                      autoUser: !body.jobSpecification.jobManagerTask
                        ?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              body.jobSpecification.jobManagerTask?.userIdentity
                                ?.autoUser?.["scope"],
                            elevationLevel:
                              body.jobSpecification.jobManagerTask?.userIdentity
                                ?.autoUser?.["elevationLevel"],
                          },
                    },
                runExclusive:
                  body.jobSpecification.jobManagerTask?.["runExclusive"],
                applicationPackageReferences: !body.jobSpecification
                  .jobManagerTask?.["applicationPackageReferences"]
                  ? body.jobSpecification.jobManagerTask?.[
                      "applicationPackageReferences"
                    ]
                  : body.jobSpecification.jobManagerTask?.[
                      "applicationPackageReferences"
                    ].map((p) => ({
                      applicationId: p["applicationId"],
                      version: p["version"],
                    })),
                authenticationTokenSettings: !body.jobSpecification
                  .jobManagerTask?.authenticationTokenSettings
                  ? undefined
                  : {
                      access:
                        body.jobSpecification.jobManagerTask
                          ?.authenticationTokenSettings?.["access"],
                    },
                allowLowPriorityNode:
                  body.jobSpecification.jobManagerTask?.[
                    "allowLowPriorityNode"
                  ],
              },
          jobPreparationTask: !body.jobSpecification.jobPreparationTask
            ? undefined
            : {
                id: body.jobSpecification.jobPreparationTask?.["id"],
                commandLine:
                  body.jobSpecification.jobPreparationTask?.["commandLine"],
                containerSettings: !body.jobSpecification.jobPreparationTask
                  ?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        body.jobSpecification.jobPreparationTask
                          ?.containerSettings?.["containerRunOptions"],
                      imageName:
                        body.jobSpecification.jobPreparationTask
                          ?.containerSettings?.["imageName"],
                      registry: !body.jobSpecification.jobPreparationTask
                        ?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              body.jobSpecification.jobPreparationTask
                                ?.containerSettings?.registry?.["username"],
                            password:
                              body.jobSpecification.jobPreparationTask
                                ?.containerSettings?.registry?.["password"],
                            registryServer:
                              body.jobSpecification.jobPreparationTask
                                ?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !body.jobSpecification
                              .jobPreparationTask?.containerSettings?.registry
                              ?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    body.jobSpecification.jobPreparationTask
                                      ?.containerSettings?.registry
                                      ?.identityReference?.["resourceId"],
                                },
                          },
                      workingDirectory:
                        body.jobSpecification.jobPreparationTask
                          ?.containerSettings?.["workingDirectory"],
                    },
                resourceFiles: !body.jobSpecification.jobPreparationTask?.[
                  "resourceFiles"
                ]
                  ? body.jobSpecification.jobPreparationTask?.["resourceFiles"]
                  : body.jobSpecification.jobPreparationTask?.[
                      "resourceFiles"
                    ].map((p) => ({
                      autoStorageContainerName: p["autoStorageContainerName"],
                      storageContainerUrl: p["storageContainerUrl"],
                      httpUrl: p["httpUrl"],
                      blobPrefix: p["blobPrefix"],
                      filePath: p["filePath"],
                      fileMode: p["fileMode"],
                      identityReference: !p.identityReference
                        ? undefined
                        : { resourceId: p.identityReference?.["resourceId"] },
                    })),
                environmentSettings: !body.jobSpecification
                  .jobPreparationTask?.["environmentSettings"]
                  ? body.jobSpecification.jobPreparationTask?.[
                      "environmentSettings"
                    ]
                  : body.jobSpecification.jobPreparationTask?.[
                      "environmentSettings"
                    ].map((p) => ({ name: p["name"], value: p["value"] })),
                constraints: !body.jobSpecification.jobPreparationTask
                  ?.constraints
                  ? undefined
                  : {
                      maxWallClockTime:
                        body.jobSpecification.jobPreparationTask?.constraints?.[
                          "maxWallClockTime"
                        ],
                      retentionTime:
                        body.jobSpecification.jobPreparationTask?.constraints?.[
                          "retentionTime"
                        ],
                      maxTaskRetryCount:
                        body.jobSpecification.jobPreparationTask?.constraints?.[
                          "maxTaskRetryCount"
                        ],
                    },
                waitForSuccess:
                  body.jobSpecification.jobPreparationTask?.["waitForSuccess"],
                userIdentity: !body.jobSpecification.jobPreparationTask
                  ?.userIdentity
                  ? undefined
                  : {
                      username:
                        body.jobSpecification.jobPreparationTask
                          ?.userIdentity?.["username"],
                      autoUser: !body.jobSpecification.jobPreparationTask
                        ?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              body.jobSpecification.jobPreparationTask
                                ?.userIdentity?.autoUser?.["scope"],
                            elevationLevel:
                              body.jobSpecification.jobPreparationTask
                                ?.userIdentity?.autoUser?.["elevationLevel"],
                          },
                    },
                rerunOnNodeRebootAfterSuccess:
                  body.jobSpecification.jobPreparationTask?.[
                    "rerunOnNodeRebootAfterSuccess"
                  ],
              },
          jobReleaseTask: !body.jobSpecification.jobReleaseTask
            ? undefined
            : {
                id: body.jobSpecification.jobReleaseTask?.["id"],
                commandLine:
                  body.jobSpecification.jobReleaseTask?.["commandLine"],
                containerSettings: !body.jobSpecification.jobReleaseTask
                  ?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        body.jobSpecification.jobReleaseTask
                          ?.containerSettings?.["containerRunOptions"],
                      imageName:
                        body.jobSpecification.jobReleaseTask
                          ?.containerSettings?.["imageName"],
                      registry: !body.jobSpecification.jobReleaseTask
                        ?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              body.jobSpecification.jobReleaseTask
                                ?.containerSettings?.registry?.["username"],
                            password:
                              body.jobSpecification.jobReleaseTask
                                ?.containerSettings?.registry?.["password"],
                            registryServer:
                              body.jobSpecification.jobReleaseTask
                                ?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !body.jobSpecification
                              .jobReleaseTask?.containerSettings?.registry
                              ?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    body.jobSpecification.jobReleaseTask
                                      ?.containerSettings?.registry
                                      ?.identityReference?.["resourceId"],
                                },
                          },
                      workingDirectory:
                        body.jobSpecification.jobReleaseTask
                          ?.containerSettings?.["workingDirectory"],
                    },
                resourceFiles: !body.jobSpecification.jobReleaseTask?.[
                  "resourceFiles"
                ]
                  ? body.jobSpecification.jobReleaseTask?.["resourceFiles"]
                  : body.jobSpecification.jobReleaseTask?.["resourceFiles"].map(
                      (p) => ({
                        autoStorageContainerName: p["autoStorageContainerName"],
                        storageContainerUrl: p["storageContainerUrl"],
                        httpUrl: p["httpUrl"],
                        blobPrefix: p["blobPrefix"],
                        filePath: p["filePath"],
                        fileMode: p["fileMode"],
                        identityReference: !p.identityReference
                          ? undefined
                          : { resourceId: p.identityReference?.["resourceId"] },
                      }),
                    ),
                environmentSettings: !body.jobSpecification.jobReleaseTask?.[
                  "environmentSettings"
                ]
                  ? body.jobSpecification.jobReleaseTask?.[
                      "environmentSettings"
                    ]
                  : body.jobSpecification.jobReleaseTask?.[
                      "environmentSettings"
                    ].map((p) => ({ name: p["name"], value: p["value"] })),
                maxWallClockTime:
                  body.jobSpecification.jobReleaseTask?.["maxWallClockTime"],
                retentionTime:
                  body.jobSpecification.jobReleaseTask?.["retentionTime"],
                userIdentity: !body.jobSpecification.jobReleaseTask
                  ?.userIdentity
                  ? undefined
                  : {
                      username:
                        body.jobSpecification.jobReleaseTask?.userIdentity?.[
                          "username"
                        ],
                      autoUser: !body.jobSpecification.jobReleaseTask
                        ?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              body.jobSpecification.jobReleaseTask?.userIdentity
                                ?.autoUser?.["scope"],
                            elevationLevel:
                              body.jobSpecification.jobReleaseTask?.userIdentity
                                ?.autoUser?.["elevationLevel"],
                          },
                    },
              },
          commonEnvironmentSettings: !body.jobSpecification[
            "commonEnvironmentSettings"
          ]
            ? body.jobSpecification["commonEnvironmentSettings"]
            : body.jobSpecification["commonEnvironmentSettings"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          poolInfo: {
            poolId: body.jobSpecification.poolInfo["poolId"],
            autoPoolSpecification: !body.jobSpecification.poolInfo
              .autoPoolSpecification
              ? undefined
              : {
                  autoPoolIdPrefix:
                    body.jobSpecification.poolInfo.autoPoolSpecification?.[
                      "autoPoolIdPrefix"
                    ],
                  poolLifetimeOption:
                    body.jobSpecification.poolInfo.autoPoolSpecification?.[
                      "poolLifetimeOption"
                    ],
                  keepAlive:
                    body.jobSpecification.poolInfo.autoPoolSpecification?.[
                      "keepAlive"
                    ],
                  pool: !body.jobSpecification.poolInfo.autoPoolSpecification
                    ?.pool
                    ? undefined
                    : {
                        displayName:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["displayName"],
                        vmSize:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["vmSize"],
                        cloudServiceConfiguration: !body.jobSpecification
                          .poolInfo.autoPoolSpecification?.pool
                          ?.cloudServiceConfiguration
                          ? undefined
                          : {
                              osFamily:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.cloudServiceConfiguration?.["osFamily"],
                              osVersion:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.cloudServiceConfiguration?.["osVersion"],
                            },
                        virtualMachineConfiguration: !body.jobSpecification
                          .poolInfo.autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration
                          ? undefined
                          : {
                              imageReference: {
                                publisher:
                                  body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["publisher"],
                                offer:
                                  body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["offer"],
                                sku: body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "sku"
                                ],
                                version:
                                  body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["version"],
                                virtualMachineImageId:
                                  body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["virtualMachineImageId"],
                              },
                              nodeAgentSKUId:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.[
                                  "nodeAgentSKUId"
                                ],
                              windowsConfiguration: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.windowsConfiguration
                                ? undefined
                                : {
                                    enableAutomaticUpdates:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.windowsConfiguration?.[
                                        "enableAutomaticUpdates"
                                      ],
                                  },
                              dataDisks: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["dataDisks"]
                                ? body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.["dataDisks"]
                                : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                    "dataDisks"
                                  ].map((p) => ({
                                    lun: p["lun"],
                                    caching: p["caching"],
                                    diskSizeGB: p["diskSizeGB"],
                                    storageAccountType: p["storageAccountType"],
                                  })),
                              licenseType:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.[
                                  "licenseType"
                                ],
                              containerConfiguration: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.containerConfiguration
                                ? undefined
                                : {
                                    type: body.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.["type"],
                                    containerImageNames:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.[
                                        "containerImageNames"
                                      ],
                                    containerRegistries: !body.jobSpecification
                                      .poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.[
                                      "containerRegistries"
                                    ]
                                      ? body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.containerConfiguration?.[
                                          "containerRegistries"
                                        ]
                                      : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                          "containerRegistries"
                                        ].map((p) => ({
                                          username: p["username"],
                                          password: p["password"],
                                          registryServer: p["registryServer"],
                                          identityReference:
                                            !p.identityReference
                                              ? undefined
                                              : {
                                                  resourceId:
                                                    p.identityReference?.[
                                                      "resourceId"
                                                    ],
                                                },
                                        })),
                                  },
                              diskEncryptionConfiguration: !body
                                .jobSpecification.poolInfo.autoPoolSpecification
                                ?.pool?.virtualMachineConfiguration
                                ?.diskEncryptionConfiguration
                                ? undefined
                                : {
                                    targets:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.diskEncryptionConfiguration?.[
                                        "targets"
                                      ],
                                  },
                              nodePlacementConfiguration: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.nodePlacementConfiguration
                                ? undefined
                                : {
                                    policy:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.nodePlacementConfiguration?.[
                                        "policy"
                                      ],
                                  },
                              extensions: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["extensions"]
                                ? body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.[
                                    "extensions"
                                  ]
                                : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                    "extensions"
                                  ].map((p) => ({
                                    name: p["name"],
                                    publisher: p["publisher"],
                                    type: p["type"],
                                    typeHandlerVersion: p["typeHandlerVersion"],
                                    autoUpgradeMinorVersion:
                                      p["autoUpgradeMinorVersion"],
                                    enableAutomaticUpgrade:
                                      p["enableAutomaticUpgrade"],
                                    settings: p["settings"],
                                    protectedSettings: p["protectedSettings"],
                                    provisionAfterExtensions:
                                      p["provisionAfterExtensions"],
                                  })),
                              osDisk: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.osDisk
                                ? undefined
                                : {
                                    ephemeralOSDiskSettings: !body
                                      .jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.osDisk
                                      ?.ephemeralOSDiskSettings
                                      ? undefined
                                      : {
                                          placement:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.virtualMachineConfiguration
                                              ?.osDisk
                                              ?.ephemeralOSDiskSettings?.[
                                              "placement"
                                            ],
                                        },
                                  },
                            },
                        taskSlotsPerNode:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["taskSlotsPerNode"],
                        taskSchedulingPolicy: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.taskSchedulingPolicy
                          ? undefined
                          : {
                              nodeFillType:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.taskSchedulingPolicy?.["nodeFillType"],
                            },
                        resizeTimeout:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["resizeTimeout"],
                        targetDedicatedNodes:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["targetDedicatedNodes"],
                        targetLowPriorityNodes:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["targetLowPriorityNodes"],
                        enableAutoScale:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["enableAutoScale"],
                        autoScaleFormula:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["autoScaleFormula"],
                        autoScaleEvaluationInterval:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["autoScaleEvaluationInterval"],
                        enableInterNodeCommunication:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["enableInterNodeCommunication"],
                        networkConfiguration: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.networkConfiguration
                          ? undefined
                          : {
                              subnetId:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.networkConfiguration?.["subnetId"],
                              dynamicVNetAssignmentScope:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.networkConfiguration?.[
                                  "dynamicVNetAssignmentScope"
                                ],
                              endpointConfiguration: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.networkConfiguration?.endpointConfiguration
                                ? undefined
                                : {
                                    inboundNATPools:
                                      body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                        "inboundNATPools"
                                      ].map((p) => ({
                                        name: p["name"],
                                        protocol: p["protocol"],
                                        backendPort: p["backendPort"],
                                        frontendPortRangeStart:
                                          p["frontendPortRangeStart"],
                                        frontendPortRangeEnd:
                                          p["frontendPortRangeEnd"],
                                        networkSecurityGroupRules: !p[
                                          "networkSecurityGroupRules"
                                        ]
                                          ? p["networkSecurityGroupRules"]
                                          : p["networkSecurityGroupRules"].map(
                                              (p) => ({
                                                priority: p["priority"],
                                                access: p["access"],
                                                sourceAddressPrefix:
                                                  p["sourceAddressPrefix"],
                                                sourcePortRanges:
                                                  p["sourcePortRanges"],
                                              }),
                                            ),
                                      })),
                                  },
                              publicIPAddressConfiguration: !body
                                .jobSpecification.poolInfo.autoPoolSpecification
                                ?.pool?.networkConfiguration
                                ?.publicIPAddressConfiguration
                                ? undefined
                                : {
                                    provision:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.networkConfiguration
                                        ?.publicIPAddressConfiguration?.[
                                        "provision"
                                      ],
                                    ipAddressIds:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.networkConfiguration
                                        ?.publicIPAddressConfiguration?.[
                                        "ipAddressIds"
                                      ],
                                  },
                              enableAcceleratedNetworking:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.networkConfiguration?.[
                                  "enableAcceleratedNetworking"
                                ],
                            },
                        startTask: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.startTask
                          ? undefined
                          : {
                              commandLine:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask?.[
                                  "commandLine"
                                ],
                              containerSettings: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.containerSettings
                                ? undefined
                                : {
                                    containerRunOptions:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.[
                                        "containerRunOptions"
                                      ],
                                    imageName:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.["imageName"],
                                    registry: !body.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.startTask
                                      ?.containerSettings?.registry
                                      ? undefined
                                      : {
                                          username:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.["username"],
                                          password:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.["password"],
                                          registryServer:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.["registryServer"],
                                          identityReference: !body
                                            .jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings
                                            ?.registry?.identityReference
                                            ? undefined
                                            : {
                                                resourceId:
                                                  body.jobSpecification.poolInfo
                                                    .autoPoolSpecification?.pool
                                                    ?.startTask
                                                    ?.containerSettings
                                                    ?.registry
                                                    ?.identityReference?.[
                                                    "resourceId"
                                                  ],
                                              },
                                        },
                                    workingDirectory:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.[
                                        "workingDirectory"
                                      ],
                                  },
                              resourceFiles: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool?.startTask?.[
                                "resourceFiles"
                              ]
                                ? body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask?.[
                                    "resourceFiles"
                                  ]
                                : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                    "resourceFiles"
                                  ].map((p) => ({
                                    autoStorageContainerName:
                                      p["autoStorageContainerName"],
                                    storageContainerUrl:
                                      p["storageContainerUrl"],
                                    httpUrl: p["httpUrl"],
                                    blobPrefix: p["blobPrefix"],
                                    filePath: p["filePath"],
                                    fileMode: p["fileMode"],
                                    identityReference: !p.identityReference
                                      ? undefined
                                      : {
                                          resourceId:
                                            p.identityReference?.["resourceId"],
                                        },
                                  })),
                              environmentSettings: !body.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["environmentSettings"]
                                ? body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask?.[
                                    "environmentSettings"
                                  ]
                                : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                    "environmentSettings"
                                  ].map((p) => ({
                                    name: p["name"],
                                    value: p["value"],
                                  })),
                              userIdentity: !body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.userIdentity
                                ? undefined
                                : {
                                    username:
                                      body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.userIdentity?.["username"],
                                    autoUser: !body.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.startTask
                                      ?.userIdentity?.autoUser
                                      ? undefined
                                      : {
                                          scope:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.userIdentity
                                              ?.autoUser?.["scope"],
                                          elevationLevel:
                                            body.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.userIdentity
                                              ?.autoUser?.["elevationLevel"],
                                        },
                                  },
                              maxTaskRetryCount:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask?.[
                                  "maxTaskRetryCount"
                                ],
                              waitForSuccess:
                                body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask?.[
                                  "waitForSuccess"
                                ],
                            },
                        certificateReferences: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.[
                          "certificateReferences"
                        ]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["certificateReferences"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "certificateReferences"
                            ].map((p) => ({
                              thumbprint: p["thumbprint"],
                              thumbprintAlgorithm: p["thumbprintAlgorithm"],
                              storeLocation: p["storeLocation"],
                              storeName: p["storeName"],
                              visibility: p["visibility"],
                            })),
                        applicationPackageReferences: !body.jobSpecification
                          .poolInfo.autoPoolSpecification?.pool?.[
                          "applicationPackageReferences"
                        ]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["applicationPackageReferences"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "applicationPackageReferences"
                            ].map((p) => ({
                              applicationId: p["applicationId"],
                              version: p["version"],
                            })),
                        applicationLicenses:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["applicationLicenses"],
                        userAccounts: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.["userAccounts"]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["userAccounts"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "userAccounts"
                            ].map((p) => ({
                              name: p["name"],
                              password: p["password"],
                              elevationLevel: p["elevationLevel"],
                              linuxUserConfiguration: !p.linuxUserConfiguration
                                ? undefined
                                : {
                                    uid: p.linuxUserConfiguration?.["uid"],
                                    gid: p.linuxUserConfiguration?.["gid"],
                                    sshPrivateKey:
                                      p.linuxUserConfiguration?.[
                                        "sshPrivateKey"
                                      ],
                                  },
                              windowsUserConfiguration:
                                !p.windowsUserConfiguration
                                  ? undefined
                                  : {
                                      loginMode:
                                        p.windowsUserConfiguration?.[
                                          "loginMode"
                                        ],
                                    },
                            })),
                        metadata: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.["metadata"]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["metadata"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "metadata"
                            ].map((p) => ({
                              name: p["name"],
                              value: p["value"],
                            })),
                        mountConfiguration: !body.jobSpecification.poolInfo
                          .autoPoolSpecification?.pool?.["mountConfiguration"]
                          ? body.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["mountConfiguration"]
                          : body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                              "mountConfiguration"
                            ].map((p) => ({
                              azureBlobFileSystemConfiguration:
                                !p.azureBlobFileSystemConfiguration
                                  ? undefined
                                  : {
                                      accountName:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "accountName"
                                        ],
                                      containerName:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "containerName"
                                        ],
                                      accountKey:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "accountKey"
                                        ],
                                      sasKey:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "sasKey"
                                        ],
                                      blobfuseOptions:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "blobfuseOptions"
                                        ],
                                      relativeMountPath:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "relativeMountPath"
                                        ],
                                      identityReference: !p
                                        .azureBlobFileSystemConfiguration
                                        ?.identityReference
                                        ? undefined
                                        : {
                                            resourceId:
                                              p.azureBlobFileSystemConfiguration
                                                ?.identityReference?.[
                                                "resourceId"
                                              ],
                                          },
                                    },
                              nfsMountConfiguration: !p.nfsMountConfiguration
                                ? undefined
                                : {
                                    source: p.nfsMountConfiguration?.["source"],
                                    relativeMountPath:
                                      p.nfsMountConfiguration?.[
                                        "relativeMountPath"
                                      ],
                                    mountOptions:
                                      p.nfsMountConfiguration?.["mountOptions"],
                                  },
                              cifsMountConfiguration: !p.cifsMountConfiguration
                                ? undefined
                                : {
                                    username:
                                      p.cifsMountConfiguration?.["username"],
                                    source:
                                      p.cifsMountConfiguration?.["source"],
                                    relativeMountPath:
                                      p.cifsMountConfiguration?.[
                                        "relativeMountPath"
                                      ],
                                    mountOptions:
                                      p.cifsMountConfiguration?.[
                                        "mountOptions"
                                      ],
                                    password:
                                      p.cifsMountConfiguration?.["password"],
                                  },
                              azureFileShareConfiguration:
                                !p.azureFileShareConfiguration
                                  ? undefined
                                  : {
                                      accountName:
                                        p.azureFileShareConfiguration?.[
                                          "accountName"
                                        ],
                                      azureFileUrl:
                                        p.azureFileShareConfiguration?.[
                                          "azureFileUrl"
                                        ],
                                      accountKey:
                                        p.azureFileShareConfiguration?.[
                                          "accountKey"
                                        ],
                                      relativeMountPath:
                                        p.azureFileShareConfiguration?.[
                                          "relativeMountPath"
                                        ],
                                      mountOptions:
                                        p.azureFileShareConfiguration?.[
                                          "mountOptions"
                                        ],
                                    },
                            })),
                        targetNodeCommunicationMode:
                          body.jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.["targetNodeCommunicationMode"],
                      },
                },
          },
          metadata: !body.jobSpecification["metadata"]
            ? body.jobSpecification["metadata"]
            : body.jobSpecification["metadata"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
        },
        metadata: !body["metadata"]
          ? body["metadata"]
          : body["metadata"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
      },
    });
}

export async function _createJobScheduleDeserialize(
  result: CreateJobSchedule201Response | CreateJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Creates a Job Schedule to the specified Account. */
export async function createJobSchedule(
  context: Client,
  body: BatchJobScheduleCreateOptions,
  options: JobSchedulesCreateJobScheduleOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _createJobScheduleSend(context, body, options);
  return _createJobScheduleDeserialize(result);
}

export function _listJobSchedulesSend(
  context: Client,
  options: JobSchedulesListJobSchedulesOptions = { requestOptions: {} },
): StreamableMethod<
  ListJobSchedules200Response | ListJobSchedulesDefaultResponse
> {
  return context
    .path("/jobschedules")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $filter: options?.$filter,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _listJobSchedulesDeserialize(
  result: ListJobSchedules200Response | ListJobSchedulesDefaultResponse,
): Promise<BatchJobScheduleListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          id: p["id"],
          displayName: p["displayName"],
          url: p["url"],
          eTag: p["eTag"],
          lastModified:
            p["lastModified"] !== undefined
              ? new Date(p["lastModified"])
              : undefined,
          creationTime:
            p["creationTime"] !== undefined
              ? new Date(p["creationTime"])
              : undefined,
          state: p["state"],
          stateTransitionTime:
            p["stateTransitionTime"] !== undefined
              ? new Date(p["stateTransitionTime"])
              : undefined,
          previousState: p["previousState"],
          previousStateTransitionTime:
            p["previousStateTransitionTime"] !== undefined
              ? new Date(p["previousStateTransitionTime"])
              : undefined,
          schedule: {
            doNotRunUntil:
              p.schedule["doNotRunUntil"] !== undefined
                ? new Date(p.schedule["doNotRunUntil"])
                : undefined,
            doNotRunAfter:
              p.schedule["doNotRunAfter"] !== undefined
                ? new Date(p.schedule["doNotRunAfter"])
                : undefined,
            startWindow: p.schedule["startWindow"],
            recurrenceInterval: p.schedule["recurrenceInterval"],
          },
          jobSpecification: {
            priority: p.jobSpecification["priority"],
            allowTaskPreemption: p.jobSpecification["allowTaskPreemption"],
            maxParallelTasks: p.jobSpecification["maxParallelTasks"],
            displayName: p.jobSpecification["displayName"],
            usesTaskDependencies: p.jobSpecification["usesTaskDependencies"],
            onAllTasksComplete: p.jobSpecification["onAllTasksComplete"],
            onTaskFailure: p.jobSpecification["onTaskFailure"],
            networkConfiguration: !p.jobSpecification.networkConfiguration
              ? undefined
              : {
                  subnetId:
                    p.jobSpecification.networkConfiguration?.["subnetId"],
                },
            constraints: !p.jobSpecification.constraints
              ? undefined
              : {
                  maxWallClockTime:
                    p.jobSpecification.constraints?.["maxWallClockTime"],
                  maxTaskRetryCount:
                    p.jobSpecification.constraints?.["maxTaskRetryCount"],
                },
            jobManagerTask: !p.jobSpecification.jobManagerTask
              ? undefined
              : {
                  id: p.jobSpecification.jobManagerTask?.["id"],
                  displayName:
                    p.jobSpecification.jobManagerTask?.["displayName"],
                  commandLine:
                    p.jobSpecification.jobManagerTask?.["commandLine"],
                  containerSettings: !p.jobSpecification.jobManagerTask
                    ?.containerSettings
                    ? undefined
                    : {
                        containerRunOptions:
                          p.jobSpecification.jobManagerTask
                            ?.containerSettings?.["containerRunOptions"],
                        imageName:
                          p.jobSpecification.jobManagerTask
                            ?.containerSettings?.["imageName"],
                        registry: !p.jobSpecification.jobManagerTask
                          ?.containerSettings?.registry
                          ? undefined
                          : {
                              username:
                                p.jobSpecification.jobManagerTask
                                  ?.containerSettings?.registry?.["username"],
                              password:
                                p.jobSpecification.jobManagerTask
                                  ?.containerSettings?.registry?.["password"],
                              registryServer:
                                p.jobSpecification.jobManagerTask
                                  ?.containerSettings?.registry?.[
                                  "registryServer"
                                ],
                              identityReference: !p.jobSpecification
                                .jobManagerTask?.containerSettings?.registry
                                ?.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.jobSpecification.jobManagerTask
                                        ?.containerSettings?.registry
                                        ?.identityReference?.["resourceId"],
                                  },
                            },
                        workingDirectory:
                          p.jobSpecification.jobManagerTask
                            ?.containerSettings?.["workingDirectory"],
                      },
                  resourceFiles: !p.jobSpecification.jobManagerTask?.[
                    "resourceFiles"
                  ]
                    ? p.jobSpecification.jobManagerTask?.["resourceFiles"]
                    : p.jobSpecification.jobManagerTask?.["resourceFiles"].map(
                        (p) => ({
                          autoStorageContainerName:
                            p["autoStorageContainerName"],
                          storageContainerUrl: p["storageContainerUrl"],
                          httpUrl: p["httpUrl"],
                          blobPrefix: p["blobPrefix"],
                          filePath: p["filePath"],
                          fileMode: p["fileMode"],
                          identityReference: !p.identityReference
                            ? undefined
                            : {
                                resourceId: p.identityReference?.["resourceId"],
                              },
                        }),
                      ),
                  outputFiles: !p.jobSpecification.jobManagerTask?.[
                    "outputFiles"
                  ]
                    ? p.jobSpecification.jobManagerTask?.["outputFiles"]
                    : p.jobSpecification.jobManagerTask?.["outputFiles"].map(
                        (p) => ({
                          filePattern: p["filePattern"],
                          destination: {
                            container: !p.destination.container
                              ? undefined
                              : {
                                  path: p.destination.container?.["path"],
                                  containerUrl:
                                    p.destination.container?.["containerUrl"],
                                  identityReference: !p.destination.container
                                    ?.identityReference
                                    ? undefined
                                    : {
                                        resourceId:
                                          p.destination.container
                                            ?.identityReference?.["resourceId"],
                                      },
                                  uploadHeaders: !p.destination.container?.[
                                    "uploadHeaders"
                                  ]
                                    ? p.destination.container?.["uploadHeaders"]
                                    : p.destination.container?.[
                                        "uploadHeaders"
                                      ].map((p) => ({
                                        name: p["name"],
                                        value: p["value"],
                                      })),
                                },
                          },
                          uploadOptions: {
                            uploadCondition: p.uploadOptions["uploadCondition"],
                          },
                        }),
                      ),
                  environmentSettings: !p.jobSpecification.jobManagerTask?.[
                    "environmentSettings"
                  ]
                    ? p.jobSpecification.jobManagerTask?.["environmentSettings"]
                    : p.jobSpecification.jobManagerTask?.[
                        "environmentSettings"
                      ].map((p) => ({ name: p["name"], value: p["value"] })),
                  constraints: !p.jobSpecification.jobManagerTask?.constraints
                    ? undefined
                    : {
                        maxWallClockTime:
                          p.jobSpecification.jobManagerTask?.constraints?.[
                            "maxWallClockTime"
                          ],
                        retentionTime:
                          p.jobSpecification.jobManagerTask?.constraints?.[
                            "retentionTime"
                          ],
                        maxTaskRetryCount:
                          p.jobSpecification.jobManagerTask?.constraints?.[
                            "maxTaskRetryCount"
                          ],
                      },
                  requiredSlots:
                    p.jobSpecification.jobManagerTask?.["requiredSlots"],
                  killJobOnCompletion:
                    p.jobSpecification.jobManagerTask?.["killJobOnCompletion"],
                  userIdentity: !p.jobSpecification.jobManagerTask?.userIdentity
                    ? undefined
                    : {
                        username:
                          p.jobSpecification.jobManagerTask?.userIdentity?.[
                            "username"
                          ],
                        autoUser: !p.jobSpecification.jobManagerTask
                          ?.userIdentity?.autoUser
                          ? undefined
                          : {
                              scope:
                                p.jobSpecification.jobManagerTask?.userIdentity
                                  ?.autoUser?.["scope"],
                              elevationLevel:
                                p.jobSpecification.jobManagerTask?.userIdentity
                                  ?.autoUser?.["elevationLevel"],
                            },
                      },
                  runExclusive:
                    p.jobSpecification.jobManagerTask?.["runExclusive"],
                  applicationPackageReferences: !p.jobSpecification
                    .jobManagerTask?.["applicationPackageReferences"]
                    ? p.jobSpecification.jobManagerTask?.[
                        "applicationPackageReferences"
                      ]
                    : p.jobSpecification.jobManagerTask?.[
                        "applicationPackageReferences"
                      ].map((p) => ({
                        applicationId: p["applicationId"],
                        version: p["version"],
                      })),
                  authenticationTokenSettings: !p.jobSpecification
                    .jobManagerTask?.authenticationTokenSettings
                    ? undefined
                    : {
                        access:
                          p.jobSpecification.jobManagerTask
                            ?.authenticationTokenSettings?.["access"],
                      },
                  allowLowPriorityNode:
                    p.jobSpecification.jobManagerTask?.["allowLowPriorityNode"],
                },
            jobPreparationTask: !p.jobSpecification.jobPreparationTask
              ? undefined
              : {
                  id: p.jobSpecification.jobPreparationTask?.["id"],
                  commandLine:
                    p.jobSpecification.jobPreparationTask?.["commandLine"],
                  containerSettings: !p.jobSpecification.jobPreparationTask
                    ?.containerSettings
                    ? undefined
                    : {
                        containerRunOptions:
                          p.jobSpecification.jobPreparationTask
                            ?.containerSettings?.["containerRunOptions"],
                        imageName:
                          p.jobSpecification.jobPreparationTask
                            ?.containerSettings?.["imageName"],
                        registry: !p.jobSpecification.jobPreparationTask
                          ?.containerSettings?.registry
                          ? undefined
                          : {
                              username:
                                p.jobSpecification.jobPreparationTask
                                  ?.containerSettings?.registry?.["username"],
                              password:
                                p.jobSpecification.jobPreparationTask
                                  ?.containerSettings?.registry?.["password"],
                              registryServer:
                                p.jobSpecification.jobPreparationTask
                                  ?.containerSettings?.registry?.[
                                  "registryServer"
                                ],
                              identityReference: !p.jobSpecification
                                .jobPreparationTask?.containerSettings?.registry
                                ?.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.jobSpecification.jobPreparationTask
                                        ?.containerSettings?.registry
                                        ?.identityReference?.["resourceId"],
                                  },
                            },
                        workingDirectory:
                          p.jobSpecification.jobPreparationTask
                            ?.containerSettings?.["workingDirectory"],
                      },
                  resourceFiles: !p.jobSpecification.jobPreparationTask?.[
                    "resourceFiles"
                  ]
                    ? p.jobSpecification.jobPreparationTask?.["resourceFiles"]
                    : p.jobSpecification.jobPreparationTask?.[
                        "resourceFiles"
                      ].map((p) => ({
                        autoStorageContainerName: p["autoStorageContainerName"],
                        storageContainerUrl: p["storageContainerUrl"],
                        httpUrl: p["httpUrl"],
                        blobPrefix: p["blobPrefix"],
                        filePath: p["filePath"],
                        fileMode: p["fileMode"],
                        identityReference: !p.identityReference
                          ? undefined
                          : { resourceId: p.identityReference?.["resourceId"] },
                      })),
                  environmentSettings: !p.jobSpecification.jobPreparationTask?.[
                    "environmentSettings"
                  ]
                    ? p.jobSpecification.jobPreparationTask?.[
                        "environmentSettings"
                      ]
                    : p.jobSpecification.jobPreparationTask?.[
                        "environmentSettings"
                      ].map((p) => ({ name: p["name"], value: p["value"] })),
                  constraints: !p.jobSpecification.jobPreparationTask
                    ?.constraints
                    ? undefined
                    : {
                        maxWallClockTime:
                          p.jobSpecification.jobPreparationTask?.constraints?.[
                            "maxWallClockTime"
                          ],
                        retentionTime:
                          p.jobSpecification.jobPreparationTask?.constraints?.[
                            "retentionTime"
                          ],
                        maxTaskRetryCount:
                          p.jobSpecification.jobPreparationTask?.constraints?.[
                            "maxTaskRetryCount"
                          ],
                      },
                  waitForSuccess:
                    p.jobSpecification.jobPreparationTask?.["waitForSuccess"],
                  userIdentity: !p.jobSpecification.jobPreparationTask
                    ?.userIdentity
                    ? undefined
                    : {
                        username:
                          p.jobSpecification.jobPreparationTask?.userIdentity?.[
                            "username"
                          ],
                        autoUser: !p.jobSpecification.jobPreparationTask
                          ?.userIdentity?.autoUser
                          ? undefined
                          : {
                              scope:
                                p.jobSpecification.jobPreparationTask
                                  ?.userIdentity?.autoUser?.["scope"],
                              elevationLevel:
                                p.jobSpecification.jobPreparationTask
                                  ?.userIdentity?.autoUser?.["elevationLevel"],
                            },
                      },
                  rerunOnNodeRebootAfterSuccess:
                    p.jobSpecification.jobPreparationTask?.[
                      "rerunOnNodeRebootAfterSuccess"
                    ],
                },
            jobReleaseTask: !p.jobSpecification.jobReleaseTask
              ? undefined
              : {
                  id: p.jobSpecification.jobReleaseTask?.["id"],
                  commandLine:
                    p.jobSpecification.jobReleaseTask?.["commandLine"],
                  containerSettings: !p.jobSpecification.jobReleaseTask
                    ?.containerSettings
                    ? undefined
                    : {
                        containerRunOptions:
                          p.jobSpecification.jobReleaseTask
                            ?.containerSettings?.["containerRunOptions"],
                        imageName:
                          p.jobSpecification.jobReleaseTask
                            ?.containerSettings?.["imageName"],
                        registry: !p.jobSpecification.jobReleaseTask
                          ?.containerSettings?.registry
                          ? undefined
                          : {
                              username:
                                p.jobSpecification.jobReleaseTask
                                  ?.containerSettings?.registry?.["username"],
                              password:
                                p.jobSpecification.jobReleaseTask
                                  ?.containerSettings?.registry?.["password"],
                              registryServer:
                                p.jobSpecification.jobReleaseTask
                                  ?.containerSettings?.registry?.[
                                  "registryServer"
                                ],
                              identityReference: !p.jobSpecification
                                .jobReleaseTask?.containerSettings?.registry
                                ?.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.jobSpecification.jobReleaseTask
                                        ?.containerSettings?.registry
                                        ?.identityReference?.["resourceId"],
                                  },
                            },
                        workingDirectory:
                          p.jobSpecification.jobReleaseTask
                            ?.containerSettings?.["workingDirectory"],
                      },
                  resourceFiles: !p.jobSpecification.jobReleaseTask?.[
                    "resourceFiles"
                  ]
                    ? p.jobSpecification.jobReleaseTask?.["resourceFiles"]
                    : p.jobSpecification.jobReleaseTask?.["resourceFiles"].map(
                        (p) => ({
                          autoStorageContainerName:
                            p["autoStorageContainerName"],
                          storageContainerUrl: p["storageContainerUrl"],
                          httpUrl: p["httpUrl"],
                          blobPrefix: p["blobPrefix"],
                          filePath: p["filePath"],
                          fileMode: p["fileMode"],
                          identityReference: !p.identityReference
                            ? undefined
                            : {
                                resourceId: p.identityReference?.["resourceId"],
                              },
                        }),
                      ),
                  environmentSettings: !p.jobSpecification.jobReleaseTask?.[
                    "environmentSettings"
                  ]
                    ? p.jobSpecification.jobReleaseTask?.["environmentSettings"]
                    : p.jobSpecification.jobReleaseTask?.[
                        "environmentSettings"
                      ].map((p) => ({ name: p["name"], value: p["value"] })),
                  maxWallClockTime:
                    p.jobSpecification.jobReleaseTask?.["maxWallClockTime"],
                  retentionTime:
                    p.jobSpecification.jobReleaseTask?.["retentionTime"],
                  userIdentity: !p.jobSpecification.jobReleaseTask?.userIdentity
                    ? undefined
                    : {
                        username:
                          p.jobSpecification.jobReleaseTask?.userIdentity?.[
                            "username"
                          ],
                        autoUser: !p.jobSpecification.jobReleaseTask
                          ?.userIdentity?.autoUser
                          ? undefined
                          : {
                              scope:
                                p.jobSpecification.jobReleaseTask?.userIdentity
                                  ?.autoUser?.["scope"],
                              elevationLevel:
                                p.jobSpecification.jobReleaseTask?.userIdentity
                                  ?.autoUser?.["elevationLevel"],
                            },
                      },
                },
            commonEnvironmentSettings: !p.jobSpecification[
              "commonEnvironmentSettings"
            ]
              ? p.jobSpecification["commonEnvironmentSettings"]
              : p.jobSpecification["commonEnvironmentSettings"].map((p) => ({
                  name: p["name"],
                  value: p["value"],
                })),
            poolInfo: {
              poolId: p.jobSpecification.poolInfo["poolId"],
              autoPoolSpecification: !p.jobSpecification.poolInfo
                .autoPoolSpecification
                ? undefined
                : {
                    autoPoolIdPrefix:
                      p.jobSpecification.poolInfo.autoPoolSpecification?.[
                        "autoPoolIdPrefix"
                      ],
                    poolLifetimeOption:
                      p.jobSpecification.poolInfo.autoPoolSpecification?.[
                        "poolLifetimeOption"
                      ],
                    keepAlive:
                      p.jobSpecification.poolInfo.autoPoolSpecification?.[
                        "keepAlive"
                      ],
                    pool: !p.jobSpecification.poolInfo.autoPoolSpecification
                      ?.pool
                      ? undefined
                      : {
                          displayName:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["displayName"],
                          vmSize:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["vmSize"],
                          cloudServiceConfiguration: !p.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool
                            ?.cloudServiceConfiguration
                            ? undefined
                            : {
                                osFamily:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.cloudServiceConfiguration?.["osFamily"],
                                osVersion:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.cloudServiceConfiguration?.["osVersion"],
                              },
                          virtualMachineConfiguration: !p.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration
                            ? undefined
                            : {
                                imageReference: {
                                  publisher:
                                    p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["publisher"],
                                  offer:
                                    p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["offer"],
                                  sku: p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["sku"],
                                  version:
                                    p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["version"],
                                  virtualMachineImageId:
                                    p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["virtualMachineImageId"],
                                  exactVersion:
                                    p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["exactVersion"],
                                },
                                nodeAgentSKUId:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.[
                                    "nodeAgentSKUId"
                                  ],
                                windowsConfiguration: !p.jobSpecification
                                  .poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.windowsConfiguration
                                  ? undefined
                                  : {
                                      enableAutomaticUpdates:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.windowsConfiguration?.[
                                          "enableAutomaticUpdates"
                                        ],
                                    },
                                dataDisks: !p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.["dataDisks"]
                                  ? p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "dataDisks"
                                    ]
                                  : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                      "dataDisks"
                                    ].map((p) => ({
                                      lun: p["lun"],
                                      caching: p["caching"],
                                      diskSizeGB: p["diskSizeGB"],
                                      storageAccountType:
                                        p["storageAccountType"],
                                    })),
                                licenseType:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.[
                                    "licenseType"
                                  ],
                                containerConfiguration: !p.jobSpecification
                                  .poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.containerConfiguration
                                  ? undefined
                                  : {
                                      type: p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.["type"],
                                      containerImageNames:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.containerConfiguration?.[
                                          "containerImageNames"
                                        ],
                                      containerRegistries: !p.jobSpecification
                                        .poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.[
                                        "containerRegistries"
                                      ]
                                        ? p.jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.containerConfiguration?.[
                                            "containerRegistries"
                                          ]
                                        : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                            "containerRegistries"
                                          ].map((p) => ({
                                            username: p["username"],
                                            password: p["password"],
                                            registryServer: p["registryServer"],
                                            identityReference:
                                              !p.identityReference
                                                ? undefined
                                                : {
                                                    resourceId:
                                                      p.identityReference?.[
                                                        "resourceId"
                                                      ],
                                                  },
                                          })),
                                    },
                                diskEncryptionConfiguration: !p.jobSpecification
                                  .poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.diskEncryptionConfiguration
                                  ? undefined
                                  : {
                                      targets:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.diskEncryptionConfiguration?.[
                                          "targets"
                                        ],
                                    },
                                nodePlacementConfiguration: !p.jobSpecification
                                  .poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.nodePlacementConfiguration
                                  ? undefined
                                  : {
                                      policy:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.nodePlacementConfiguration?.[
                                          "policy"
                                        ],
                                    },
                                extensions: !p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.["extensions"]
                                  ? p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "extensions"
                                    ]
                                  : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                      "extensions"
                                    ].map((p) => ({
                                      name: p["name"],
                                      publisher: p["publisher"],
                                      type: p["type"],
                                      typeHandlerVersion:
                                        p["typeHandlerVersion"],
                                      autoUpgradeMinorVersion:
                                        p["autoUpgradeMinorVersion"],
                                      enableAutomaticUpgrade:
                                        p["enableAutomaticUpgrade"],
                                      settings: p["settings"],
                                      protectedSettings: p["protectedSettings"],
                                      provisionAfterExtensions:
                                        p["provisionAfterExtensions"],
                                    })),
                                osDisk: !p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.osDisk
                                  ? undefined
                                  : {
                                      ephemeralOSDiskSettings: !p
                                        .jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration?.osDisk
                                        ?.ephemeralOSDiskSettings
                                        ? undefined
                                        : {
                                            placement:
                                              p.jobSpecification.poolInfo
                                                .autoPoolSpecification?.pool
                                                ?.virtualMachineConfiguration
                                                ?.osDisk
                                                ?.ephemeralOSDiskSettings?.[
                                                "placement"
                                              ],
                                          },
                                    },
                              },
                          taskSlotsPerNode:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["taskSlotsPerNode"],
                          taskSchedulingPolicy: !p.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.taskSchedulingPolicy
                            ? undefined
                            : {
                                nodeFillType:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.taskSchedulingPolicy?.["nodeFillType"],
                              },
                          resizeTimeout:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["resizeTimeout"],
                          targetDedicatedNodes:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["targetDedicatedNodes"],
                          targetLowPriorityNodes:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["targetLowPriorityNodes"],
                          enableAutoScale:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["enableAutoScale"],
                          autoScaleFormula:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["autoScaleFormula"],
                          autoScaleEvaluationInterval:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["autoScaleEvaluationInterval"],
                          enableInterNodeCommunication:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["enableInterNodeCommunication"],
                          networkConfiguration: !p.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.networkConfiguration
                            ? undefined
                            : {
                                subnetId:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration?.["subnetId"],
                                dynamicVNetAssignmentScope:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration?.[
                                    "dynamicVNetAssignmentScope"
                                  ],
                                endpointConfiguration: !p.jobSpecification
                                  .poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration?.endpointConfiguration
                                  ? undefined
                                  : {
                                      inboundNATPools:
                                        p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                          "inboundNATPools"
                                        ].map((p) => ({
                                          name: p["name"],
                                          protocol: p["protocol"],
                                          backendPort: p["backendPort"],
                                          frontendPortRangeStart:
                                            p["frontendPortRangeStart"],
                                          frontendPortRangeEnd:
                                            p["frontendPortRangeEnd"],
                                          networkSecurityGroupRules: !p[
                                            "networkSecurityGroupRules"
                                          ]
                                            ? p["networkSecurityGroupRules"]
                                            : p[
                                                "networkSecurityGroupRules"
                                              ].map((p) => ({
                                                priority: p["priority"],
                                                access: p["access"],
                                                sourceAddressPrefix:
                                                  p["sourceAddressPrefix"],
                                                sourcePortRanges:
                                                  p["sourcePortRanges"],
                                              })),
                                        })),
                                    },
                                publicIPAddressConfiguration: !p
                                  .jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.networkConfiguration
                                  ?.publicIPAddressConfiguration
                                  ? undefined
                                  : {
                                      provision:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.networkConfiguration
                                          ?.publicIPAddressConfiguration?.[
                                          "provision"
                                        ],
                                      ipAddressIds:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.networkConfiguration
                                          ?.publicIPAddressConfiguration?.[
                                          "ipAddressIds"
                                        ],
                                    },
                                enableAcceleratedNetworking:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration?.[
                                    "enableAcceleratedNetworking"
                                  ],
                              },
                          startTask: !p.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.startTask
                            ? undefined
                            : {
                                commandLine:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask?.[
                                    "commandLine"
                                  ],
                                containerSettings: !p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask
                                  ?.containerSettings
                                  ? undefined
                                  : {
                                      containerRunOptions:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings?.[
                                          "containerRunOptions"
                                        ],
                                      imageName:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings?.[
                                          "imageName"
                                        ],
                                      registry: !p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.registry
                                        ? undefined
                                        : {
                                            username:
                                              p.jobSpecification.poolInfo
                                                .autoPoolSpecification?.pool
                                                ?.startTask?.containerSettings
                                                ?.registry?.["username"],
                                            password:
                                              p.jobSpecification.poolInfo
                                                .autoPoolSpecification?.pool
                                                ?.startTask?.containerSettings
                                                ?.registry?.["password"],
                                            registryServer:
                                              p.jobSpecification.poolInfo
                                                .autoPoolSpecification?.pool
                                                ?.startTask?.containerSettings
                                                ?.registry?.["registryServer"],
                                            identityReference: !p
                                              .jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.identityReference
                                              ? undefined
                                              : {
                                                  resourceId:
                                                    p.jobSpecification.poolInfo
                                                      .autoPoolSpecification
                                                      ?.pool?.startTask
                                                      ?.containerSettings
                                                      ?.registry
                                                      ?.identityReference?.[
                                                      "resourceId"
                                                    ],
                                                },
                                          },
                                      workingDirectory:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings?.[
                                          "workingDirectory"
                                        ],
                                    },
                                resourceFiles: !p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask?.[
                                  "resourceFiles"
                                ]
                                  ? p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.startTask?.[
                                      "resourceFiles"
                                    ]
                                  : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                      "resourceFiles"
                                    ].map((p) => ({
                                      autoStorageContainerName:
                                        p["autoStorageContainerName"],
                                      storageContainerUrl:
                                        p["storageContainerUrl"],
                                      httpUrl: p["httpUrl"],
                                      blobPrefix: p["blobPrefix"],
                                      filePath: p["filePath"],
                                      fileMode: p["fileMode"],
                                      identityReference: !p.identityReference
                                        ? undefined
                                        : {
                                            resourceId:
                                              p.identityReference?.[
                                                "resourceId"
                                              ],
                                          },
                                    })),
                                environmentSettings: !p.jobSpecification
                                  .poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["environmentSettings"]
                                  ? p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.startTask?.[
                                      "environmentSettings"
                                    ]
                                  : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                      "environmentSettings"
                                    ].map((p) => ({
                                      name: p["name"],
                                      value: p["value"],
                                    })),
                                userIdentity: !p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask
                                  ?.userIdentity
                                  ? undefined
                                  : {
                                      username:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.userIdentity?.[
                                          "username"
                                        ],
                                      autoUser: !p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.userIdentity?.autoUser
                                        ? undefined
                                        : {
                                            scope:
                                              p.jobSpecification.poolInfo
                                                .autoPoolSpecification?.pool
                                                ?.startTask?.userIdentity
                                                ?.autoUser?.["scope"],
                                            elevationLevel:
                                              p.jobSpecification.poolInfo
                                                .autoPoolSpecification?.pool
                                                ?.startTask?.userIdentity
                                                ?.autoUser?.["elevationLevel"],
                                          },
                                    },
                                maxTaskRetryCount:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask?.[
                                    "maxTaskRetryCount"
                                  ],
                                waitForSuccess:
                                  p.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask?.[
                                    "waitForSuccess"
                                  ],
                              },
                          certificateReferences: !p.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.[
                            "certificateReferences"
                          ]
                            ? p.jobSpecification.poolInfo.autoPoolSpecification
                                ?.pool?.["certificateReferences"]
                            : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                "certificateReferences"
                              ].map((p) => ({
                                thumbprint: p["thumbprint"],
                                thumbprintAlgorithm: p["thumbprintAlgorithm"],
                                storeLocation: p["storeLocation"],
                                storeName: p["storeName"],
                                visibility: p["visibility"],
                              })),
                          applicationPackageReferences: !p.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool?.[
                            "applicationPackageReferences"
                          ]
                            ? p.jobSpecification.poolInfo.autoPoolSpecification
                                ?.pool?.["applicationPackageReferences"]
                            : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                "applicationPackageReferences"
                              ].map((p) => ({
                                applicationId: p["applicationId"],
                                version: p["version"],
                              })),
                          applicationLicenses:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["applicationLicenses"],
                          userAccounts: !p.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.["userAccounts"]
                            ? p.jobSpecification.poolInfo.autoPoolSpecification
                                ?.pool?.["userAccounts"]
                            : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                "userAccounts"
                              ].map((p) => ({
                                name: p["name"],
                                password: p["password"],
                                elevationLevel: p["elevationLevel"],
                                linuxUserConfiguration:
                                  !p.linuxUserConfiguration
                                    ? undefined
                                    : {
                                        uid: p.linuxUserConfiguration?.["uid"],
                                        gid: p.linuxUserConfiguration?.["gid"],
                                        sshPrivateKey:
                                          p.linuxUserConfiguration?.[
                                            "sshPrivateKey"
                                          ],
                                      },
                                windowsUserConfiguration:
                                  !p.windowsUserConfiguration
                                    ? undefined
                                    : {
                                        loginMode:
                                          p.windowsUserConfiguration?.[
                                            "loginMode"
                                          ],
                                      },
                              })),
                          metadata: !p.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.["metadata"]
                            ? p.jobSpecification.poolInfo.autoPoolSpecification
                                ?.pool?.["metadata"]
                            : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                "metadata"
                              ].map((p) => ({
                                name: p["name"],
                                value: p["value"],
                              })),
                          mountConfiguration: !p.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.["mountConfiguration"]
                            ? p.jobSpecification.poolInfo.autoPoolSpecification
                                ?.pool?.["mountConfiguration"]
                            : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                "mountConfiguration"
                              ].map((p) => ({
                                azureBlobFileSystemConfiguration:
                                  !p.azureBlobFileSystemConfiguration
                                    ? undefined
                                    : {
                                        accountName:
                                          p.azureBlobFileSystemConfiguration?.[
                                            "accountName"
                                          ],
                                        containerName:
                                          p.azureBlobFileSystemConfiguration?.[
                                            "containerName"
                                          ],
                                        accountKey:
                                          p.azureBlobFileSystemConfiguration?.[
                                            "accountKey"
                                          ],
                                        sasKey:
                                          p.azureBlobFileSystemConfiguration?.[
                                            "sasKey"
                                          ],
                                        blobfuseOptions:
                                          p.azureBlobFileSystemConfiguration?.[
                                            "blobfuseOptions"
                                          ],
                                        relativeMountPath:
                                          p.azureBlobFileSystemConfiguration?.[
                                            "relativeMountPath"
                                          ],
                                        identityReference: !p
                                          .azureBlobFileSystemConfiguration
                                          ?.identityReference
                                          ? undefined
                                          : {
                                              resourceId:
                                                p
                                                  .azureBlobFileSystemConfiguration
                                                  ?.identityReference?.[
                                                  "resourceId"
                                                ],
                                            },
                                      },
                                nfsMountConfiguration: !p.nfsMountConfiguration
                                  ? undefined
                                  : {
                                      source:
                                        p.nfsMountConfiguration?.["source"],
                                      relativeMountPath:
                                        p.nfsMountConfiguration?.[
                                          "relativeMountPath"
                                        ],
                                      mountOptions:
                                        p.nfsMountConfiguration?.[
                                          "mountOptions"
                                        ],
                                    },
                                cifsMountConfiguration:
                                  !p.cifsMountConfiguration
                                    ? undefined
                                    : {
                                        username:
                                          p.cifsMountConfiguration?.[
                                            "username"
                                          ],
                                        source:
                                          p.cifsMountConfiguration?.["source"],
                                        relativeMountPath:
                                          p.cifsMountConfiguration?.[
                                            "relativeMountPath"
                                          ],
                                        mountOptions:
                                          p.cifsMountConfiguration?.[
                                            "mountOptions"
                                          ],
                                        password:
                                          p.cifsMountConfiguration?.[
                                            "password"
                                          ],
                                      },
                                azureFileShareConfiguration:
                                  !p.azureFileShareConfiguration
                                    ? undefined
                                    : {
                                        accountName:
                                          p.azureFileShareConfiguration?.[
                                            "accountName"
                                          ],
                                        azureFileUrl:
                                          p.azureFileShareConfiguration?.[
                                            "azureFileUrl"
                                          ],
                                        accountKey:
                                          p.azureFileShareConfiguration?.[
                                            "accountKey"
                                          ],
                                        relativeMountPath:
                                          p.azureFileShareConfiguration?.[
                                            "relativeMountPath"
                                          ],
                                        mountOptions:
                                          p.azureFileShareConfiguration?.[
                                            "mountOptions"
                                          ],
                                      },
                              })),
                          targetNodeCommunicationMode:
                            p.jobSpecification.poolInfo.autoPoolSpecification
                              ?.pool?.["targetNodeCommunicationMode"],
                        },
                  },
            },
            metadata: !p.jobSpecification["metadata"]
              ? p.jobSpecification["metadata"]
              : p.jobSpecification["metadata"].map((p) => ({
                  name: p["name"],
                  value: p["value"],
                })),
          },
          executionInfo: !p.executionInfo
            ? undefined
            : {
                nextRunTime:
                  p.executionInfo?.["nextRunTime"] !== undefined
                    ? new Date(p.executionInfo?.["nextRunTime"])
                    : undefined,
                recentJob: !p.executionInfo?.recentJob
                  ? undefined
                  : {
                      id: p.executionInfo?.recentJob?.["id"],
                      url: p.executionInfo?.recentJob?.["url"],
                    },
                endTime:
                  p.executionInfo?.["endTime"] !== undefined
                    ? new Date(p.executionInfo?.["endTime"])
                    : undefined,
              },
          metadata: !p["metadata"]
            ? p["metadata"]
            : p["metadata"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          stats: !p.stats
            ? undefined
            : {
                url: p.stats?.["url"],
                startTime: new Date(p.stats?.["startTime"]),
                lastUpdateTime: new Date(p.stats?.["lastUpdateTime"]),
                userCPUTime: p.stats?.["userCPUTime"],
                kernelCPUTime: p.stats?.["kernelCPUTime"],
                wallClockTime: p.stats?.["wallClockTime"],
                readIOps: p.stats?.["readIOps"],
                writeIOps: p.stats?.["writeIOps"],
                readIOGiB: p.stats?.["readIOGiB"],
                writeIOGiB: p.stats?.["writeIOGiB"],
                numSucceededTasks: p.stats?.["numSucceededTasks"],
                numFailedTasks: p.stats?.["numFailedTasks"],
                numTaskRetries: p.stats?.["numTaskRetries"],
                waitTime: p.stats?.["waitTime"],
              },
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the Job Schedules in the specified Account. */
export function listJobSchedules(
  context: Client,
  options: JobSchedulesListJobSchedulesOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJobSchedule> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobSchedulesSend(context, options),
    _listJobSchedulesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}
