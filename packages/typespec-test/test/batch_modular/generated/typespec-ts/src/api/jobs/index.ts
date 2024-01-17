// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BatchJob,
  BatchJobUpdateOptions,
  BatchJobDisableOptions,
  BatchJobTerminateOptions,
  BatchJobCreateOptions,
  BatchJobListResult,
  BatchJobListPreparationAndReleaseTaskStatusResult,
  JobPreparationAndReleaseTaskExecutionInformation,
  TaskCountsResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  BatchContext as Client,
  CreateJob201Response,
  CreateJobDefaultResponse,
  DeleteJob202Response,
  DeleteJobDefaultResponse,
  DisableJob202Response,
  DisableJobDefaultResponse,
  EnableJob202Response,
  EnableJobDefaultResponse,
  GetJob200Response,
  GetJobDefaultResponse,
  GetJobTaskCounts200Response,
  GetJobTaskCountsDefaultResponse,
  ListJobPreparationAndReleaseTaskStatus200Response,
  ListJobPreparationAndReleaseTaskStatusDefaultResponse,
  ListJobs200Response,
  ListJobsDefaultResponse,
  ListJobsFromSchedule200Response,
  ListJobsFromScheduleDefaultResponse,
  ReplaceJob200Response,
  ReplaceJobDefaultResponse,
  TerminateJob202Response,
  TerminateJobDefaultResponse,
  UpdateJob200Response,
  UpdateJobDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  JobsDeleteJobOptions,
  JobsGetJobOptions,
  JobsUpdateJobOptions,
  JobsReplaceJobOptions,
  JobsDisableJobOptions,
  JobsEnableJobOptions,
  JobsTerminateJobOptions,
  JobsCreateJobOptions,
  JobsListJobsOptions,
  JobsListJobsFromScheduleOptions,
  JobsListJobPreparationAndReleaseTaskStatusOptions,
  JobsGetJobTaskCountsOptions,
} from "../../models/options.js";

export function _deleteJobSend(
  context: Client,
  jobId: string,
  options: JobsDeleteJobOptions = { requestOptions: {} },
): StreamableMethod<DeleteJob202Response | DeleteJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}", jobId)
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

export async function _deleteJobDeserialize(
  result: DeleteJob202Response | DeleteJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * Deleting a Job also deletes all Tasks that are part of that Job, and all Job
 * statistics. This also overrides the retention period for Task data; that is, if
 * the Job contains Tasks which are still retained on Compute Nodes, the Batch
 * services deletes those Tasks' working directories and all their contents.  When
 * a Delete Job request is received, the Batch service sets the Job to the
 * deleting state. All update operations on a Job that is in deleting state will
 * fail with status code 409 (Conflict), with additional information indicating
 * that the Job is being deleted.
 */
export async function deleteJob(
  context: Client,
  jobId: string,
  options: JobsDeleteJobOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteJobSend(context, jobId, options);
  return _deleteJobDeserialize(result);
}

export function _getJobSend(
  context: Client,
  jobId: string,
  options: JobsGetJobOptions = { requestOptions: {} },
): StreamableMethod<GetJob200Response | GetJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}", jobId)
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

export async function _getJobDeserialize(
  result: GetJob200Response | GetJobDefaultResponse,
): Promise<BatchJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    usesTaskDependencies: result.body["usesTaskDependencies"],
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
    priority: result.body["priority"],
    allowTaskPreemption: result.body["allowTaskPreemption"],
    maxParallelTasks: result.body["maxParallelTasks"],
    constraints: !result.body.constraints
      ? undefined
      : {
          maxWallClockTime: result.body.constraints?.["maxWallClockTime"],
          maxTaskRetryCount: result.body.constraints?.["maxTaskRetryCount"],
        },
    jobManagerTask: !result.body.jobManagerTask
      ? undefined
      : {
          id: result.body.jobManagerTask?.["id"],
          displayName: result.body.jobManagerTask?.["displayName"],
          commandLine: result.body.jobManagerTask?.["commandLine"],
          containerSettings: !result.body.jobManagerTask?.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  result.body.jobManagerTask?.containerSettings?.[
                    "containerRunOptions"
                  ],
                imageName:
                  result.body.jobManagerTask?.containerSettings?.["imageName"],
                registry: !result.body.jobManagerTask?.containerSettings
                  ?.registry
                  ? undefined
                  : {
                      username:
                        result.body.jobManagerTask?.containerSettings
                          ?.registry?.["username"],
                      password:
                        result.body.jobManagerTask?.containerSettings
                          ?.registry?.["password"],
                      registryServer:
                        result.body.jobManagerTask?.containerSettings
                          ?.registry?.["registryServer"],
                      identityReference: !result.body.jobManagerTask
                        ?.containerSettings?.registry?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              result.body.jobManagerTask?.containerSettings
                                ?.registry?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory:
                  result.body.jobManagerTask?.containerSettings?.[
                    "workingDirectory"
                  ],
              },
          resourceFiles: !result.body.jobManagerTask?.["resourceFiles"]
            ? result.body.jobManagerTask?.["resourceFiles"]
            : result.body.jobManagerTask?.["resourceFiles"].map((p) => ({
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
          outputFiles: !result.body.jobManagerTask?.["outputFiles"]
            ? result.body.jobManagerTask?.["outputFiles"]
            : result.body.jobManagerTask?.["outputFiles"].map((p) => ({
                filePattern: p["filePattern"],
                destination: {
                  container: !p.destination.container
                    ? undefined
                    : {
                        path: p.destination.container?.["path"],
                        containerUrl: p.destination.container?.["containerUrl"],
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
          environmentSettings: !result.body.jobManagerTask?.[
            "environmentSettings"
          ]
            ? result.body.jobManagerTask?.["environmentSettings"]
            : result.body.jobManagerTask?.["environmentSettings"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          constraints: !result.body.jobManagerTask?.constraints
            ? undefined
            : {
                maxWallClockTime:
                  result.body.jobManagerTask?.constraints?.["maxWallClockTime"],
                retentionTime:
                  result.body.jobManagerTask?.constraints?.["retentionTime"],
                maxTaskRetryCount:
                  result.body.jobManagerTask?.constraints?.[
                    "maxTaskRetryCount"
                  ],
              },
          requiredSlots: result.body.jobManagerTask?.["requiredSlots"],
          killJobOnCompletion:
            result.body.jobManagerTask?.["killJobOnCompletion"],
          userIdentity: !result.body.jobManagerTask?.userIdentity
            ? undefined
            : {
                username:
                  result.body.jobManagerTask?.userIdentity?.["username"],
                autoUser: !result.body.jobManagerTask?.userIdentity?.autoUser
                  ? undefined
                  : {
                      scope:
                        result.body.jobManagerTask?.userIdentity?.autoUser?.[
                          "scope"
                        ],
                      elevationLevel:
                        result.body.jobManagerTask?.userIdentity?.autoUser?.[
                          "elevationLevel"
                        ],
                    },
              },
          runExclusive: result.body.jobManagerTask?.["runExclusive"],
          applicationPackageReferences: !result.body.jobManagerTask?.[
            "applicationPackageReferences"
          ]
            ? result.body.jobManagerTask?.["applicationPackageReferences"]
            : result.body.jobManagerTask?.["applicationPackageReferences"].map(
                (p) => ({
                  applicationId: p["applicationId"],
                  version: p["version"],
                }),
              ),
          authenticationTokenSettings: !result.body.jobManagerTask
            ?.authenticationTokenSettings
            ? undefined
            : {
                access:
                  result.body.jobManagerTask?.authenticationTokenSettings?.[
                    "access"
                  ],
              },
          allowLowPriorityNode:
            result.body.jobManagerTask?.["allowLowPriorityNode"],
        },
    jobPreparationTask: !result.body.jobPreparationTask
      ? undefined
      : {
          id: result.body.jobPreparationTask?.["id"],
          commandLine: result.body.jobPreparationTask?.["commandLine"],
          containerSettings: !result.body.jobPreparationTask?.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  result.body.jobPreparationTask?.containerSettings?.[
                    "containerRunOptions"
                  ],
                imageName:
                  result.body.jobPreparationTask?.containerSettings?.[
                    "imageName"
                  ],
                registry: !result.body.jobPreparationTask?.containerSettings
                  ?.registry
                  ? undefined
                  : {
                      username:
                        result.body.jobPreparationTask?.containerSettings
                          ?.registry?.["username"],
                      password:
                        result.body.jobPreparationTask?.containerSettings
                          ?.registry?.["password"],
                      registryServer:
                        result.body.jobPreparationTask?.containerSettings
                          ?.registry?.["registryServer"],
                      identityReference: !result.body.jobPreparationTask
                        ?.containerSettings?.registry?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              result.body.jobPreparationTask?.containerSettings
                                ?.registry?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory:
                  result.body.jobPreparationTask?.containerSettings?.[
                    "workingDirectory"
                  ],
              },
          resourceFiles: !result.body.jobPreparationTask?.["resourceFiles"]
            ? result.body.jobPreparationTask?.["resourceFiles"]
            : result.body.jobPreparationTask?.["resourceFiles"].map((p) => ({
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
          environmentSettings: !result.body.jobPreparationTask?.[
            "environmentSettings"
          ]
            ? result.body.jobPreparationTask?.["environmentSettings"]
            : result.body.jobPreparationTask?.["environmentSettings"].map(
                (p) => ({ name: p["name"], value: p["value"] }),
              ),
          constraints: !result.body.jobPreparationTask?.constraints
            ? undefined
            : {
                maxWallClockTime:
                  result.body.jobPreparationTask?.constraints?.[
                    "maxWallClockTime"
                  ],
                retentionTime:
                  result.body.jobPreparationTask?.constraints?.[
                    "retentionTime"
                  ],
                maxTaskRetryCount:
                  result.body.jobPreparationTask?.constraints?.[
                    "maxTaskRetryCount"
                  ],
              },
          waitForSuccess: result.body.jobPreparationTask?.["waitForSuccess"],
          userIdentity: !result.body.jobPreparationTask?.userIdentity
            ? undefined
            : {
                username:
                  result.body.jobPreparationTask?.userIdentity?.["username"],
                autoUser: !result.body.jobPreparationTask?.userIdentity
                  ?.autoUser
                  ? undefined
                  : {
                      scope:
                        result.body.jobPreparationTask?.userIdentity
                          ?.autoUser?.["scope"],
                      elevationLevel:
                        result.body.jobPreparationTask?.userIdentity
                          ?.autoUser?.["elevationLevel"],
                    },
              },
          rerunOnNodeRebootAfterSuccess:
            result.body.jobPreparationTask?.["rerunOnNodeRebootAfterSuccess"],
        },
    jobReleaseTask: !result.body.jobReleaseTask
      ? undefined
      : {
          id: result.body.jobReleaseTask?.["id"],
          commandLine: result.body.jobReleaseTask?.["commandLine"],
          containerSettings: !result.body.jobReleaseTask?.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  result.body.jobReleaseTask?.containerSettings?.[
                    "containerRunOptions"
                  ],
                imageName:
                  result.body.jobReleaseTask?.containerSettings?.["imageName"],
                registry: !result.body.jobReleaseTask?.containerSettings
                  ?.registry
                  ? undefined
                  : {
                      username:
                        result.body.jobReleaseTask?.containerSettings
                          ?.registry?.["username"],
                      password:
                        result.body.jobReleaseTask?.containerSettings
                          ?.registry?.["password"],
                      registryServer:
                        result.body.jobReleaseTask?.containerSettings
                          ?.registry?.["registryServer"],
                      identityReference: !result.body.jobReleaseTask
                        ?.containerSettings?.registry?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              result.body.jobReleaseTask?.containerSettings
                                ?.registry?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory:
                  result.body.jobReleaseTask?.containerSettings?.[
                    "workingDirectory"
                  ],
              },
          resourceFiles: !result.body.jobReleaseTask?.["resourceFiles"]
            ? result.body.jobReleaseTask?.["resourceFiles"]
            : result.body.jobReleaseTask?.["resourceFiles"].map((p) => ({
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
          environmentSettings: !result.body.jobReleaseTask?.[
            "environmentSettings"
          ]
            ? result.body.jobReleaseTask?.["environmentSettings"]
            : result.body.jobReleaseTask?.["environmentSettings"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          maxWallClockTime: result.body.jobReleaseTask?.["maxWallClockTime"],
          retentionTime: result.body.jobReleaseTask?.["retentionTime"],
          userIdentity: !result.body.jobReleaseTask?.userIdentity
            ? undefined
            : {
                username:
                  result.body.jobReleaseTask?.userIdentity?.["username"],
                autoUser: !result.body.jobReleaseTask?.userIdentity?.autoUser
                  ? undefined
                  : {
                      scope:
                        result.body.jobReleaseTask?.userIdentity?.autoUser?.[
                          "scope"
                        ],
                      elevationLevel:
                        result.body.jobReleaseTask?.userIdentity?.autoUser?.[
                          "elevationLevel"
                        ],
                    },
              },
        },
    commonEnvironmentSettings: !result.body["commonEnvironmentSettings"]
      ? result.body["commonEnvironmentSettings"]
      : result.body["commonEnvironmentSettings"].map((p) => ({
          name: p["name"],
          value: p["value"],
        })),
    poolInfo: {
      poolId: result.body.poolInfo["poolId"],
      autoPoolSpecification: !result.body.poolInfo.autoPoolSpecification
        ? undefined
        : {
            autoPoolIdPrefix:
              result.body.poolInfo.autoPoolSpecification?.["autoPoolIdPrefix"],
            poolLifetimeOption:
              result.body.poolInfo.autoPoolSpecification?.[
                "poolLifetimeOption"
              ],
            keepAlive:
              result.body.poolInfo.autoPoolSpecification?.["keepAlive"],
            pool: !result.body.poolInfo.autoPoolSpecification?.pool
              ? undefined
              : {
                  displayName:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "displayName"
                    ],
                  vmSize:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "vmSize"
                    ],
                  cloudServiceConfiguration: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.cloudServiceConfiguration
                    ? undefined
                    : {
                        osFamily:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.cloudServiceConfiguration?.["osFamily"],
                        osVersion:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.cloudServiceConfiguration?.["osVersion"],
                      },
                  virtualMachineConfiguration: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.virtualMachineConfiguration
                    ? undefined
                    : {
                        imageReference: {
                          publisher:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "publisher"
                            ],
                          offer:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "offer"
                            ],
                          sku: result.body.poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.imageReference[
                            "sku"
                          ],
                          version:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "version"
                            ],
                          virtualMachineImageId:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "virtualMachineImageId"
                            ],
                          exactVersion:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "exactVersion"
                            ],
                        },
                        nodeAgentSKUId:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.["nodeAgentSKUId"],
                        windowsConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration?.windowsConfiguration
                          ? undefined
                          : {
                              enableAutomaticUpdates:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.windowsConfiguration?.[
                                  "enableAutomaticUpdates"
                                ],
                            },
                        dataDisks: !result.body.poolInfo.autoPoolSpecification
                          ?.pool?.virtualMachineConfiguration?.["dataDisks"]
                          ? result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.["dataDisks"]
                          : result.body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                              "dataDisks"
                            ].map((p) => ({
                              lun: p["lun"],
                              caching: p["caching"],
                              diskSizeGB: p["diskSizeGB"],
                              storageAccountType: p["storageAccountType"],
                            })),
                        licenseType:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.["licenseType"],
                        containerConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration?.containerConfiguration
                          ? undefined
                          : {
                              type: result.body.poolInfo.autoPoolSpecification
                                ?.pool?.virtualMachineConfiguration
                                ?.containerConfiguration?.["type"],
                              containerImageNames:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.containerConfiguration?.[
                                  "containerImageNames"
                                ],
                              containerRegistries: !result.body.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.containerConfiguration?.[
                                "containerRegistries"
                              ]
                                ? result.body.poolInfo.autoPoolSpecification
                                    ?.pool?.virtualMachineConfiguration
                                    ?.containerConfiguration?.[
                                    "containerRegistries"
                                  ]
                                : result.body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                    "containerRegistries"
                                  ].map((p) => ({
                                    username: p["username"],
                                    password: p["password"],
                                    registryServer: p["registryServer"],
                                    identityReference: !p.identityReference
                                      ? undefined
                                      : {
                                          resourceId:
                                            p.identityReference?.["resourceId"],
                                        },
                                  })),
                            },
                        diskEncryptionConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration
                          ?.diskEncryptionConfiguration
                          ? undefined
                          : {
                              targets:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.diskEncryptionConfiguration?.["targets"],
                            },
                        nodePlacementConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration
                          ?.nodePlacementConfiguration
                          ? undefined
                          : {
                              policy:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.nodePlacementConfiguration?.["policy"],
                            },
                        extensions: !result.body.poolInfo.autoPoolSpecification
                          ?.pool?.virtualMachineConfiguration?.["extensions"]
                          ? result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.["extensions"]
                          : result.body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
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
                        osDisk: !result.body.poolInfo.autoPoolSpecification
                          ?.pool?.virtualMachineConfiguration?.osDisk
                          ? undefined
                          : {
                              ephemeralOSDiskSettings: !result.body.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.osDisk
                                ?.ephemeralOSDiskSettings
                                ? undefined
                                : {
                                    placement:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.virtualMachineConfiguration
                                        ?.osDisk?.ephemeralOSDiskSettings?.[
                                        "placement"
                                      ],
                                  },
                            },
                      },
                  taskSlotsPerNode:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "taskSlotsPerNode"
                    ],
                  taskSchedulingPolicy: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.taskSchedulingPolicy
                    ? undefined
                    : {
                        nodeFillType:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.taskSchedulingPolicy?.["nodeFillType"],
                      },
                  resizeTimeout:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "resizeTimeout"
                    ],
                  targetDedicatedNodes:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "targetDedicatedNodes"
                    ],
                  targetLowPriorityNodes:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "targetLowPriorityNodes"
                    ],
                  enableAutoScale:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "enableAutoScale"
                    ],
                  autoScaleFormula:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "autoScaleFormula"
                    ],
                  autoScaleEvaluationInterval:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "autoScaleEvaluationInterval"
                    ],
                  enableInterNodeCommunication:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "enableInterNodeCommunication"
                    ],
                  networkConfiguration: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.networkConfiguration
                    ? undefined
                    : {
                        subnetId:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.networkConfiguration?.["subnetId"],
                        dynamicVNetAssignmentScope:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.networkConfiguration?.[
                            "dynamicVNetAssignmentScope"
                          ],
                        endpointConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.networkConfiguration
                          ?.endpointConfiguration
                          ? undefined
                          : {
                              inboundNATPools:
                                result.body.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
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
                        publicIPAddressConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.networkConfiguration
                          ?.publicIPAddressConfiguration
                          ? undefined
                          : {
                              provision:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration
                                  ?.publicIPAddressConfiguration?.["provision"],
                              ipAddressIds:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration
                                  ?.publicIPAddressConfiguration?.[
                                  "ipAddressIds"
                                ],
                            },
                        enableAcceleratedNetworking:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.networkConfiguration?.[
                            "enableAcceleratedNetworking"
                          ],
                      },
                  startTask: !result.body.poolInfo.autoPoolSpecification?.pool
                    ?.startTask
                    ? undefined
                    : {
                        commandLine:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.startTask?.["commandLine"],
                        containerSettings: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.startTask
                          ?.containerSettings
                          ? undefined
                          : {
                              containerRunOptions:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.containerSettings?.[
                                  "containerRunOptions"
                                ],
                              imageName:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.containerSettings?.["imageName"],
                              registry: !result.body.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.containerSettings?.registry
                                ? undefined
                                : {
                                    username:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.containerSettings
                                        ?.registry?.["username"],
                                    password:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.containerSettings
                                        ?.registry?.["password"],
                                    registryServer:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.containerSettings
                                        ?.registry?.["registryServer"],
                                    identityReference: !result.body.poolInfo
                                      .autoPoolSpecification?.pool?.startTask
                                      ?.containerSettings?.registry
                                      ?.identityReference
                                      ? undefined
                                      : {
                                          resourceId:
                                            result.body.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.identityReference?.[
                                              "resourceId"
                                            ],
                                        },
                                  },
                              workingDirectory:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.containerSettings?.[
                                  "workingDirectory"
                                ],
                            },
                        resourceFiles: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.startTask?.[
                          "resourceFiles"
                        ]
                          ? result.body.poolInfo.autoPoolSpecification?.pool
                              ?.startTask?.["resourceFiles"]
                          : result.body.poolInfo.autoPoolSpecification?.pool?.startTask?.[
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
                        environmentSettings: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.startTask?.[
                          "environmentSettings"
                        ]
                          ? result.body.poolInfo.autoPoolSpecification?.pool
                              ?.startTask?.["environmentSettings"]
                          : result.body.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                              "environmentSettings"
                            ].map((p) => ({
                              name: p["name"],
                              value: p["value"],
                            })),
                        userIdentity: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.startTask?.userIdentity
                          ? undefined
                          : {
                              username:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.userIdentity?.["username"],
                              autoUser: !result.body.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.userIdentity?.autoUser
                                ? undefined
                                : {
                                    scope:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.userIdentity
                                        ?.autoUser?.["scope"],
                                    elevationLevel:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.userIdentity
                                        ?.autoUser?.["elevationLevel"],
                                  },
                            },
                        maxTaskRetryCount:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.startTask?.["maxTaskRetryCount"],
                        waitForSuccess:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.startTask?.["waitForSuccess"],
                      },
                  certificateReferences: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.["certificateReferences"]
                    ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                        "certificateReferences"
                      ]
                    : result.body.poolInfo.autoPoolSpecification?.pool?.[
                        "certificateReferences"
                      ].map((p) => ({
                        thumbprint: p["thumbprint"],
                        thumbprintAlgorithm: p["thumbprintAlgorithm"],
                        storeLocation: p["storeLocation"],
                        storeName: p["storeName"],
                        visibility: p["visibility"],
                      })),
                  applicationPackageReferences: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.[
                    "applicationPackageReferences"
                  ]
                    ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                        "applicationPackageReferences"
                      ]
                    : result.body.poolInfo.autoPoolSpecification?.pool?.[
                        "applicationPackageReferences"
                      ].map((p) => ({
                        applicationId: p["applicationId"],
                        version: p["version"],
                      })),
                  applicationLicenses:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "applicationLicenses"
                    ],
                  userAccounts: !result.body.poolInfo.autoPoolSpecification
                    ?.pool?.["userAccounts"]
                    ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                        "userAccounts"
                      ]
                    : result.body.poolInfo.autoPoolSpecification?.pool?.[
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
                  metadata: !result.body.poolInfo.autoPoolSpecification?.pool?.[
                    "metadata"
                  ]
                    ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                        "metadata"
                      ]
                    : result.body.poolInfo.autoPoolSpecification?.pool?.[
                        "metadata"
                      ].map((p) => ({ name: p["name"], value: p["value"] })),
                  mountConfiguration: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.["mountConfiguration"]
                    ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                        "mountConfiguration"
                      ]
                    : result.body.poolInfo.autoPoolSpecification?.pool?.[
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
                                p.nfsMountConfiguration?.["relativeMountPath"],
                              mountOptions:
                                p.nfsMountConfiguration?.["mountOptions"],
                            },
                        cifsMountConfiguration: !p.cifsMountConfiguration
                          ? undefined
                          : {
                              username: p.cifsMountConfiguration?.["username"],
                              source: p.cifsMountConfiguration?.["source"],
                              relativeMountPath:
                                p.cifsMountConfiguration?.["relativeMountPath"],
                              mountOptions:
                                p.cifsMountConfiguration?.["mountOptions"],
                              password: p.cifsMountConfiguration?.["password"],
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
                                  p.azureFileShareConfiguration?.["accountKey"],
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
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "targetNodeCommunicationMode"
                    ],
                },
          },
    },
    onAllTasksComplete: result.body["onAllTasksComplete"],
    onTaskFailure: result.body["onTaskFailure"],
    networkConfiguration: !result.body.networkConfiguration
      ? undefined
      : { subnetId: result.body.networkConfiguration?.["subnetId"] },
    metadata: !result.body["metadata"]
      ? result.body["metadata"]
      : result.body["metadata"].map((p) => ({
          name: p["name"],
          value: p["value"],
        })),
    executionInfo: !result.body.executionInfo
      ? undefined
      : {
          startTime: new Date(result.body.executionInfo?.["startTime"]),
          endTime:
            result.body.executionInfo?.["endTime"] !== undefined
              ? new Date(result.body.executionInfo?.["endTime"])
              : undefined,
          poolId: result.body.executionInfo?.["poolId"],
          schedulingError: !result.body.executionInfo?.schedulingError
            ? undefined
            : {
                category:
                  result.body.executionInfo?.schedulingError?.["category"],
                code: result.body.executionInfo?.schedulingError?.["code"],
                message:
                  result.body.executionInfo?.schedulingError?.["message"],
                details: !result.body.executionInfo?.schedulingError?.[
                  "details"
                ]
                  ? result.body.executionInfo?.schedulingError?.["details"]
                  : result.body.executionInfo?.schedulingError?.["details"].map(
                      (p) => ({ name: p["name"], value: p["value"] }),
                    ),
              },
          terminateReason: result.body.executionInfo?.["terminateReason"],
        },
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

/** Gets information about the specified Job. */
export async function getJob(
  context: Client,
  jobId: string,
  options: JobsGetJobOptions = { requestOptions: {} },
): Promise<BatchJob> {
  const result = await _getJobSend(context, jobId, options);
  return _getJobDeserialize(result);
}

export function _updateJobSend(
  context: Client,
  jobId: string,
  body: BatchJobUpdateOptions,
  options: JobsUpdateJobOptions = { requestOptions: {} },
): StreamableMethod<UpdateJob200Response | UpdateJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}", jobId)
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
        priority: body["priority"],
        allowTaskPreemption: body["allowTaskPreemption"],
        maxParallelTasks: body["maxParallelTasks"],
        constraints: !body.constraints
          ? undefined
          : {
              maxWallClockTime: body.constraints?.["maxWallClockTime"],
              maxTaskRetryCount: body.constraints?.["maxTaskRetryCount"],
            },
        poolInfo: !body.poolInfo
          ? undefined
          : {
              poolId: body.poolInfo?.["poolId"],
              autoPoolSpecification: !body.poolInfo?.autoPoolSpecification
                ? undefined
                : {
                    autoPoolIdPrefix:
                      body.poolInfo?.autoPoolSpecification?.[
                        "autoPoolIdPrefix"
                      ],
                    poolLifetimeOption:
                      body.poolInfo?.autoPoolSpecification?.[
                        "poolLifetimeOption"
                      ],
                    keepAlive:
                      body.poolInfo?.autoPoolSpecification?.["keepAlive"],
                    pool: !body.poolInfo?.autoPoolSpecification?.pool
                      ? undefined
                      : {
                          displayName:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "displayName"
                            ],
                          vmSize:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "vmSize"
                            ],
                          cloudServiceConfiguration: !body.poolInfo
                            ?.autoPoolSpecification?.pool
                            ?.cloudServiceConfiguration
                            ? undefined
                            : {
                                osFamily:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.cloudServiceConfiguration?.["osFamily"],
                                osVersion:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.cloudServiceConfiguration?.["osVersion"],
                              },
                          virtualMachineConfiguration: !body.poolInfo
                            ?.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration
                            ? undefined
                            : {
                                imageReference: {
                                  publisher:
                                    body.poolInfo?.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["publisher"],
                                  offer:
                                    body.poolInfo?.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["offer"],
                                  sku: body.poolInfo?.autoPoolSpecification
                                    ?.pool?.virtualMachineConfiguration
                                    ?.imageReference["sku"],
                                  version:
                                    body.poolInfo?.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["version"],
                                  virtualMachineImageId:
                                    body.poolInfo?.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["virtualMachineImageId"],
                                },
                                nodeAgentSKUId:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.[
                                    "nodeAgentSKUId"
                                  ],
                                windowsConfiguration: !body.poolInfo
                                  ?.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.windowsConfiguration
                                  ? undefined
                                  : {
                                      enableAutomaticUpdates:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.virtualMachineConfiguration
                                          ?.windowsConfiguration?.[
                                          "enableAutomaticUpdates"
                                        ],
                                    },
                                dataDisks: !body.poolInfo?.autoPoolSpecification
                                  ?.pool?.virtualMachineConfiguration?.[
                                  "dataDisks"
                                ]
                                  ? body.poolInfo?.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "dataDisks"
                                    ]
                                  : body.poolInfo?.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                      "dataDisks"
                                    ].map((p) => ({
                                      lun: p["lun"],
                                      caching: p["caching"],
                                      diskSizeGB: p["diskSizeGB"],
                                      storageAccountType:
                                        p["storageAccountType"],
                                    })),
                                licenseType:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.[
                                    "licenseType"
                                  ],
                                containerConfiguration: !body.poolInfo
                                  ?.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.containerConfiguration
                                  ? undefined
                                  : {
                                      type: body.poolInfo?.autoPoolSpecification
                                        ?.pool?.virtualMachineConfiguration
                                        ?.containerConfiguration?.["type"],
                                      containerImageNames:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.virtualMachineConfiguration
                                          ?.containerConfiguration?.[
                                          "containerImageNames"
                                        ],
                                      containerRegistries: !body.poolInfo
                                        ?.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.[
                                        "containerRegistries"
                                      ]
                                        ? body.poolInfo?.autoPoolSpecification
                                            ?.pool?.virtualMachineConfiguration
                                            ?.containerConfiguration?.[
                                            "containerRegistries"
                                          ]
                                        : body.poolInfo?.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
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
                                diskEncryptionConfiguration: !body.poolInfo
                                  ?.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.diskEncryptionConfiguration
                                  ? undefined
                                  : {
                                      targets:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.virtualMachineConfiguration
                                          ?.diskEncryptionConfiguration?.[
                                          "targets"
                                        ],
                                    },
                                nodePlacementConfiguration: !body.poolInfo
                                  ?.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.nodePlacementConfiguration
                                  ? undefined
                                  : {
                                      policy:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.virtualMachineConfiguration
                                          ?.nodePlacementConfiguration?.[
                                          "policy"
                                        ],
                                    },
                                extensions: !body.poolInfo
                                  ?.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.["extensions"]
                                  ? body.poolInfo?.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "extensions"
                                    ]
                                  : body.poolInfo?.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
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
                                osDisk: !body.poolInfo?.autoPoolSpecification
                                  ?.pool?.virtualMachineConfiguration?.osDisk
                                  ? undefined
                                  : {
                                      ephemeralOSDiskSettings: !body.poolInfo
                                        ?.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration?.osDisk
                                        ?.ephemeralOSDiskSettings
                                        ? undefined
                                        : {
                                            placement:
                                              body.poolInfo
                                                ?.autoPoolSpecification?.pool
                                                ?.virtualMachineConfiguration
                                                ?.osDisk
                                                ?.ephemeralOSDiskSettings?.[
                                                "placement"
                                              ],
                                          },
                                    },
                              },
                          taskSlotsPerNode:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "taskSlotsPerNode"
                            ],
                          taskSchedulingPolicy: !body.poolInfo
                            ?.autoPoolSpecification?.pool?.taskSchedulingPolicy
                            ? undefined
                            : {
                                nodeFillType:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.taskSchedulingPolicy?.["nodeFillType"],
                              },
                          resizeTimeout:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "resizeTimeout"
                            ],
                          targetDedicatedNodes:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "targetDedicatedNodes"
                            ],
                          targetLowPriorityNodes:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "targetLowPriorityNodes"
                            ],
                          enableAutoScale:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "enableAutoScale"
                            ],
                          autoScaleFormula:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "autoScaleFormula"
                            ],
                          autoScaleEvaluationInterval:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "autoScaleEvaluationInterval"
                            ],
                          enableInterNodeCommunication:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "enableInterNodeCommunication"
                            ],
                          networkConfiguration: !body.poolInfo
                            ?.autoPoolSpecification?.pool?.networkConfiguration
                            ? undefined
                            : {
                                subnetId:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.networkConfiguration?.["subnetId"],
                                dynamicVNetAssignmentScope:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.networkConfiguration?.[
                                    "dynamicVNetAssignmentScope"
                                  ],
                                endpointConfiguration: !body.poolInfo
                                  ?.autoPoolSpecification?.pool
                                  ?.networkConfiguration?.endpointConfiguration
                                  ? undefined
                                  : {
                                      inboundNATPools:
                                        body.poolInfo?.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
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
                                publicIPAddressConfiguration: !body.poolInfo
                                  ?.autoPoolSpecification?.pool
                                  ?.networkConfiguration
                                  ?.publicIPAddressConfiguration
                                  ? undefined
                                  : {
                                      provision:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.networkConfiguration
                                          ?.publicIPAddressConfiguration?.[
                                          "provision"
                                        ],
                                      ipAddressIds:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.networkConfiguration
                                          ?.publicIPAddressConfiguration?.[
                                          "ipAddressIds"
                                        ],
                                    },
                                enableAcceleratedNetworking:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.networkConfiguration?.[
                                    "enableAcceleratedNetworking"
                                  ],
                              },
                          startTask: !body.poolInfo?.autoPoolSpecification?.pool
                            ?.startTask
                            ? undefined
                            : {
                                commandLine:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.startTask?.["commandLine"],
                                containerSettings: !body.poolInfo
                                  ?.autoPoolSpecification?.pool?.startTask
                                  ?.containerSettings
                                  ? undefined
                                  : {
                                      containerRunOptions:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.startTask
                                          ?.containerSettings?.[
                                          "containerRunOptions"
                                        ],
                                      imageName:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.startTask
                                          ?.containerSettings?.["imageName"],
                                      registry: !body.poolInfo
                                        ?.autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.registry
                                        ? undefined
                                        : {
                                            username:
                                              body.poolInfo
                                                ?.autoPoolSpecification?.pool
                                                ?.startTask?.containerSettings
                                                ?.registry?.["username"],
                                            password:
                                              body.poolInfo
                                                ?.autoPoolSpecification?.pool
                                                ?.startTask?.containerSettings
                                                ?.registry?.["password"],
                                            registryServer:
                                              body.poolInfo
                                                ?.autoPoolSpecification?.pool
                                                ?.startTask?.containerSettings
                                                ?.registry?.["registryServer"],
                                            identityReference: !body.poolInfo
                                              ?.autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.identityReference
                                              ? undefined
                                              : {
                                                  resourceId:
                                                    body.poolInfo
                                                      ?.autoPoolSpecification
                                                      ?.pool?.startTask
                                                      ?.containerSettings
                                                      ?.registry
                                                      ?.identityReference?.[
                                                      "resourceId"
                                                    ],
                                                },
                                          },
                                      workingDirectory:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.startTask
                                          ?.containerSettings?.[
                                          "workingDirectory"
                                        ],
                                    },
                                resourceFiles: !body.poolInfo
                                  ?.autoPoolSpecification?.pool?.startTask?.[
                                  "resourceFiles"
                                ]
                                  ? body.poolInfo?.autoPoolSpecification?.pool
                                      ?.startTask?.["resourceFiles"]
                                  : body.poolInfo?.autoPoolSpecification?.pool?.startTask?.[
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
                                environmentSettings: !body.poolInfo
                                  ?.autoPoolSpecification?.pool?.startTask?.[
                                  "environmentSettings"
                                ]
                                  ? body.poolInfo?.autoPoolSpecification?.pool
                                      ?.startTask?.["environmentSettings"]
                                  : body.poolInfo?.autoPoolSpecification?.pool?.startTask?.[
                                      "environmentSettings"
                                    ].map((p) => ({
                                      name: p["name"],
                                      value: p["value"],
                                    })),
                                userIdentity: !body.poolInfo
                                  ?.autoPoolSpecification?.pool?.startTask
                                  ?.userIdentity
                                  ? undefined
                                  : {
                                      username:
                                        body.poolInfo?.autoPoolSpecification
                                          ?.pool?.startTask?.userIdentity?.[
                                          "username"
                                        ],
                                      autoUser: !body.poolInfo
                                        ?.autoPoolSpecification?.pool?.startTask
                                        ?.userIdentity?.autoUser
                                        ? undefined
                                        : {
                                            scope:
                                              body.poolInfo
                                                ?.autoPoolSpecification?.pool
                                                ?.startTask?.userIdentity
                                                ?.autoUser?.["scope"],
                                            elevationLevel:
                                              body.poolInfo
                                                ?.autoPoolSpecification?.pool
                                                ?.startTask?.userIdentity
                                                ?.autoUser?.["elevationLevel"],
                                          },
                                    },
                                maxTaskRetryCount:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.startTask?.["maxTaskRetryCount"],
                                waitForSuccess:
                                  body.poolInfo?.autoPoolSpecification?.pool
                                    ?.startTask?.["waitForSuccess"],
                              },
                          certificateReferences: !body.poolInfo
                            ?.autoPoolSpecification?.pool?.[
                            "certificateReferences"
                          ]
                            ? body.poolInfo?.autoPoolSpecification?.pool?.[
                                "certificateReferences"
                              ]
                            : body.poolInfo?.autoPoolSpecification?.pool?.[
                                "certificateReferences"
                              ].map((p) => ({
                                thumbprint: p["thumbprint"],
                                thumbprintAlgorithm: p["thumbprintAlgorithm"],
                                storeLocation: p["storeLocation"],
                                storeName: p["storeName"],
                                visibility: p["visibility"],
                              })),
                          applicationPackageReferences: !body.poolInfo
                            ?.autoPoolSpecification?.pool?.[
                            "applicationPackageReferences"
                          ]
                            ? body.poolInfo?.autoPoolSpecification?.pool?.[
                                "applicationPackageReferences"
                              ]
                            : body.poolInfo?.autoPoolSpecification?.pool?.[
                                "applicationPackageReferences"
                              ].map((p) => ({
                                applicationId: p["applicationId"],
                                version: p["version"],
                              })),
                          applicationLicenses:
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "applicationLicenses"
                            ],
                          userAccounts: !body.poolInfo?.autoPoolSpecification
                            ?.pool?.["userAccounts"]
                            ? body.poolInfo?.autoPoolSpecification?.pool?.[
                                "userAccounts"
                              ]
                            : body.poolInfo?.autoPoolSpecification?.pool?.[
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
                          metadata: !body.poolInfo?.autoPoolSpecification
                            ?.pool?.["metadata"]
                            ? body.poolInfo?.autoPoolSpecification?.pool?.[
                                "metadata"
                              ]
                            : body.poolInfo?.autoPoolSpecification?.pool?.[
                                "metadata"
                              ].map((p) => ({
                                name: p["name"],
                                value: p["value"],
                              })),
                          mountConfiguration: !body.poolInfo
                            ?.autoPoolSpecification?.pool?.[
                            "mountConfiguration"
                          ]
                            ? body.poolInfo?.autoPoolSpecification?.pool?.[
                                "mountConfiguration"
                              ]
                            : body.poolInfo?.autoPoolSpecification?.pool?.[
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
                            body.poolInfo?.autoPoolSpecification?.pool?.[
                              "targetNodeCommunicationMode"
                            ],
                        },
                  },
            },
        onAllTasksComplete: body["onAllTasksComplete"],
        metadata: !body["metadata"]
          ? body["metadata"]
          : body["metadata"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
      },
    });
}

export async function _updateJobDeserialize(
  result: UpdateJob200Response | UpdateJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This replaces only the Job properties specified in the request. For example, if
 * the Job has constraints, and a request does not specify the constraints
 * element, then the Job keeps the existing constraints.
 */
export async function updateJob(
  context: Client,
  jobId: string,
  body: BatchJobUpdateOptions,
  options: JobsUpdateJobOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _updateJobSend(context, jobId, body, options);
  return _updateJobDeserialize(result);
}

export function _replaceJobSend(
  context: Client,
  jobId: string,
  body: BatchJob,
  options: JobsReplaceJobOptions = { requestOptions: {} },
): StreamableMethod<ReplaceJob200Response | ReplaceJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}", jobId)
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
        priority: body["priority"],
        allowTaskPreemption: body["allowTaskPreemption"],
        maxParallelTasks: body["maxParallelTasks"],
        constraints: !body.constraints
          ? undefined
          : {
              maxWallClockTime: body.constraints?.["maxWallClockTime"],
              maxTaskRetryCount: body.constraints?.["maxTaskRetryCount"],
            },
        poolInfo: {
          poolId: body.poolInfo["poolId"],
          autoPoolSpecification: !body.poolInfo.autoPoolSpecification
            ? undefined
            : {
                autoPoolIdPrefix:
                  body.poolInfo.autoPoolSpecification?.["autoPoolIdPrefix"],
                poolLifetimeOption:
                  body.poolInfo.autoPoolSpecification?.["poolLifetimeOption"],
                keepAlive: body.poolInfo.autoPoolSpecification?.["keepAlive"],
                pool: !body.poolInfo.autoPoolSpecification?.pool
                  ? undefined
                  : {
                      displayName:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "displayName"
                        ],
                      vmSize:
                        body.poolInfo.autoPoolSpecification?.pool?.["vmSize"],
                      cloudServiceConfiguration: !body.poolInfo
                        .autoPoolSpecification?.pool?.cloudServiceConfiguration
                        ? undefined
                        : {
                            osFamily:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.cloudServiceConfiguration?.["osFamily"],
                            osVersion:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.cloudServiceConfiguration?.["osVersion"],
                          },
                      virtualMachineConfiguration: !body.poolInfo
                        .autoPoolSpecification?.pool
                        ?.virtualMachineConfiguration
                        ? undefined
                        : {
                            imageReference: {
                              publisher:
                                body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "publisher"
                                ],
                              offer:
                                body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "offer"
                                ],
                              sku: body.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "sku"
                              ],
                              version:
                                body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "version"
                                ],
                              virtualMachineImageId:
                                body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "virtualMachineImageId"
                                ],
                            },
                            nodeAgentSKUId:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.[
                                "nodeAgentSKUId"
                              ],
                            windowsConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ?.windowsConfiguration
                              ? undefined
                              : {
                                  enableAutomaticUpdates:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.windowsConfiguration?.[
                                      "enableAutomaticUpdates"
                                    ],
                                },
                            dataDisks: !body.poolInfo.autoPoolSpecification
                              ?.pool?.virtualMachineConfiguration?.["dataDisks"]
                              ? body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.["dataDisks"]
                              : body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                  "dataDisks"
                                ].map((p) => ({
                                  lun: p["lun"],
                                  caching: p["caching"],
                                  diskSizeGB: p["diskSizeGB"],
                                  storageAccountType: p["storageAccountType"],
                                })),
                            licenseType:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["licenseType"],
                            containerConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ?.containerConfiguration
                              ? undefined
                              : {
                                  type: body.poolInfo.autoPoolSpecification
                                    ?.pool?.virtualMachineConfiguration
                                    ?.containerConfiguration?.["type"],
                                  containerImageNames:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.[
                                      "containerImageNames"
                                    ],
                                  containerRegistries: !body.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.containerConfiguration?.[
                                    "containerRegistries"
                                  ]
                                    ? body.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.[
                                        "containerRegistries"
                                      ]
                                    : body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
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
                            diskEncryptionConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ?.diskEncryptionConfiguration
                              ? undefined
                              : {
                                  targets:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.diskEncryptionConfiguration?.[
                                      "targets"
                                    ],
                                },
                            nodePlacementConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ?.nodePlacementConfiguration
                              ? undefined
                              : {
                                  policy:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.nodePlacementConfiguration?.["policy"],
                                },
                            extensions: !body.poolInfo.autoPoolSpecification
                              ?.pool?.virtualMachineConfiguration?.[
                              "extensions"
                            ]
                              ? body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.["extensions"]
                              : body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
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
                            osDisk: !body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.osDisk
                              ? undefined
                              : {
                                  ephemeralOSDiskSettings: !body.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.osDisk
                                    ?.ephemeralOSDiskSettings
                                    ? undefined
                                    : {
                                        placement:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.virtualMachineConfiguration
                                            ?.osDisk?.ephemeralOSDiskSettings?.[
                                            "placement"
                                          ],
                                      },
                                },
                          },
                      taskSlotsPerNode:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "taskSlotsPerNode"
                        ],
                      taskSchedulingPolicy: !body.poolInfo.autoPoolSpecification
                        ?.pool?.taskSchedulingPolicy
                        ? undefined
                        : {
                            nodeFillType:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.taskSchedulingPolicy?.["nodeFillType"],
                          },
                      resizeTimeout:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "resizeTimeout"
                        ],
                      targetDedicatedNodes:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "targetDedicatedNodes"
                        ],
                      targetLowPriorityNodes:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "targetLowPriorityNodes"
                        ],
                      enableAutoScale:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "enableAutoScale"
                        ],
                      autoScaleFormula:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "autoScaleFormula"
                        ],
                      autoScaleEvaluationInterval:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "autoScaleEvaluationInterval"
                        ],
                      enableInterNodeCommunication:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "enableInterNodeCommunication"
                        ],
                      networkConfiguration: !body.poolInfo.autoPoolSpecification
                        ?.pool?.networkConfiguration
                        ? undefined
                        : {
                            subnetId:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.networkConfiguration?.["subnetId"],
                            dynamicVNetAssignmentScope:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.networkConfiguration?.[
                                "dynamicVNetAssignmentScope"
                              ],
                            endpointConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool?.networkConfiguration
                              ?.endpointConfiguration
                              ? undefined
                              : {
                                  inboundNATPools:
                                    body.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
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
                            publicIPAddressConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool?.networkConfiguration
                              ?.publicIPAddressConfiguration
                              ? undefined
                              : {
                                  provision:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration
                                      ?.publicIPAddressConfiguration?.[
                                      "provision"
                                    ],
                                  ipAddressIds:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration
                                      ?.publicIPAddressConfiguration?.[
                                      "ipAddressIds"
                                    ],
                                },
                            enableAcceleratedNetworking:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.networkConfiguration?.[
                                "enableAcceleratedNetworking"
                              ],
                          },
                      startTask: !body.poolInfo.autoPoolSpecification?.pool
                        ?.startTask
                        ? undefined
                        : {
                            commandLine:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["commandLine"],
                            containerSettings: !body.poolInfo
                              .autoPoolSpecification?.pool?.startTask
                              ?.containerSettings
                              ? undefined
                              : {
                                  containerRunOptions:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.containerSettings?.[
                                      "containerRunOptions"
                                    ],
                                  imageName:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.containerSettings?.[
                                      "imageName"
                                    ],
                                  registry: !body.poolInfo.autoPoolSpecification
                                    ?.pool?.startTask?.containerSettings
                                    ?.registry
                                    ? undefined
                                    : {
                                        username:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.containerSettings
                                            ?.registry?.["username"],
                                        password:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.containerSettings
                                            ?.registry?.["password"],
                                        registryServer:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.containerSettings
                                            ?.registry?.["registryServer"],
                                        identityReference: !body.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry?.identityReference
                                          ? undefined
                                          : {
                                              resourceId:
                                                body.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.startTask?.containerSettings
                                                  ?.registry
                                                  ?.identityReference?.[
                                                  "resourceId"
                                                ],
                                            },
                                      },
                                  workingDirectory:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.containerSettings?.[
                                      "workingDirectory"
                                    ],
                                },
                            resourceFiles: !body.poolInfo.autoPoolSpecification
                              ?.pool?.startTask?.["resourceFiles"]
                              ? body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["resourceFiles"]
                              : body.poolInfo.autoPoolSpecification?.pool?.startTask?.[
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
                            environmentSettings: !body.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "environmentSettings"
                            ]
                              ? body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["environmentSettings"]
                              : body.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                  "environmentSettings"
                                ].map((p) => ({
                                  name: p["name"],
                                  value: p["value"],
                                })),
                            userIdentity: !body.poolInfo.autoPoolSpecification
                              ?.pool?.startTask?.userIdentity
                              ? undefined
                              : {
                                  username:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.userIdentity?.["username"],
                                  autoUser: !body.poolInfo.autoPoolSpecification
                                    ?.pool?.startTask?.userIdentity?.autoUser
                                    ? undefined
                                    : {
                                        scope:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.userIdentity
                                            ?.autoUser?.["scope"],
                                        elevationLevel:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.userIdentity
                                            ?.autoUser?.["elevationLevel"],
                                      },
                                },
                            maxTaskRetryCount:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["maxTaskRetryCount"],
                            waitForSuccess:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["waitForSuccess"],
                          },
                      certificateReferences: !body.poolInfo
                        .autoPoolSpecification?.pool?.["certificateReferences"]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "certificateReferences"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
                            "certificateReferences"
                          ].map((p) => ({
                            thumbprint: p["thumbprint"],
                            thumbprintAlgorithm: p["thumbprintAlgorithm"],
                            storeLocation: p["storeLocation"],
                            storeName: p["storeName"],
                            visibility: p["visibility"],
                          })),
                      applicationPackageReferences: !body.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "applicationPackageReferences"
                      ]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "applicationPackageReferences"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
                            "applicationPackageReferences"
                          ].map((p) => ({
                            applicationId: p["applicationId"],
                            version: p["version"],
                          })),
                      applicationLicenses:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "applicationLicenses"
                        ],
                      userAccounts: !body.poolInfo.autoPoolSpecification
                        ?.pool?.["userAccounts"]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "userAccounts"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
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
                            windowsUserConfiguration:
                              !p.windowsUserConfiguration
                                ? undefined
                                : {
                                    loginMode:
                                      p.windowsUserConfiguration?.["loginMode"],
                                  },
                          })),
                      metadata: !body.poolInfo.autoPoolSpecification?.pool?.[
                        "metadata"
                      ]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "metadata"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
                            "metadata"
                          ].map((p) => ({
                            name: p["name"],
                            value: p["value"],
                          })),
                      mountConfiguration: !body.poolInfo.autoPoolSpecification
                        ?.pool?.["mountConfiguration"]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "mountConfiguration"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
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
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "targetNodeCommunicationMode"
                        ],
                    },
              },
        },
        onAllTasksComplete: body["onAllTasksComplete"],
        metadata: !body["metadata"]
          ? body["metadata"]
          : body["metadata"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
      },
    });
}

export async function _replaceJobDeserialize(
  result: ReplaceJob200Response | ReplaceJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This fully replaces all the updatable properties of the Job. For example, if
 * the Job has constraints associated with it and if constraints is not specified
 * with this request, then the Batch service will remove the existing constraints.
 */
export async function replaceJob(
  context: Client,
  jobId: string,
  body: BatchJob,
  options: JobsReplaceJobOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceJobSend(context, jobId, body, options);
  return _replaceJobDeserialize(result);
}

export function _disableJobSend(
  context: Client,
  jobId: string,
  body: BatchJobDisableOptions,
  options: JobsDisableJobOptions = { requestOptions: {} },
): StreamableMethod<DisableJob202Response | DisableJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}/disable", jobId)
    .post({
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
      body: { disableTasks: body["disableTasks"] },
    });
}

export async function _disableJobDeserialize(
  result: DisableJob202Response | DisableJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * The Batch Service immediately moves the Job to the disabling state. Batch then
 * uses the disableTasks parameter to determine what to do with the currently
 * running Tasks of the Job. The Job remains in the disabling state until the
 * disable operation is completed and all Tasks have been dealt with according to
 * the disableTasks option; the Job then moves to the disabled state. No new Tasks
 * are started under the Job until it moves back to active state. If you try to
 * disable a Job that is in any state other than active, disabling, or disabled,
 * the request fails with status code 409.
 */
export async function disableJob(
  context: Client,
  jobId: string,
  body: BatchJobDisableOptions,
  options: JobsDisableJobOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _disableJobSend(context, jobId, body, options);
  return _disableJobDeserialize(result);
}

export function _enableJobSend(
  context: Client,
  jobId: string,
  options: JobsEnableJobOptions = { requestOptions: {} },
): StreamableMethod<EnableJob202Response | EnableJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}/enable", jobId)
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

export async function _enableJobDeserialize(
  result: EnableJob202Response | EnableJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When you call this API, the Batch service sets a disabled Job to the enabling
 * state. After the this operation is completed, the Job moves to the active
 * state, and scheduling of new Tasks under the Job resumes. The Batch service
 * does not allow a Task to remain in the active state for more than 180 days.
 * Therefore, if you enable a Job containing active Tasks which were added more
 * than 180 days ago, those Tasks will not run.
 */
export async function enableJob(
  context: Client,
  jobId: string,
  options: JobsEnableJobOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _enableJobSend(context, jobId, options);
  return _enableJobDeserialize(result);
}

export function _terminateJobSend(
  context: Client,
  jobId: string,
  body: BatchJobTerminateOptions,
  options: JobsTerminateJobOptions = { requestOptions: {} },
): StreamableMethod<TerminateJob202Response | TerminateJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}/terminate", jobId)
    .post({
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
      body: { terminateReason: body["terminateReason"] },
    });
}

export async function _terminateJobDeserialize(
  result: TerminateJob202Response | TerminateJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When a Terminate Job request is received, the Batch service sets the Job to the
 * terminating state. The Batch service then terminates any running Tasks
 * associated with the Job and runs any required Job release Tasks. Then the Job
 * moves into the completed state. If there are any Tasks in the Job in the active
 * state, they will remain in the active state. Once a Job is terminated, new
 * Tasks cannot be added and any remaining active Tasks will not be scheduled.
 */
export async function terminateJob(
  context: Client,
  jobId: string,
  body: BatchJobTerminateOptions,
  options: JobsTerminateJobOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateJobSend(context, jobId, body, options);
  return _terminateJobDeserialize(result);
}

export function _createJobSend(
  context: Client,
  body: BatchJobCreateOptions,
  options: JobsCreateJobOptions = { requestOptions: {} },
): StreamableMethod<CreateJob201Response | CreateJobDefaultResponse> {
  return context
    .path("/jobs")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: {
        id: body["id"],
        displayName: body["displayName"],
        usesTaskDependencies: body["usesTaskDependencies"],
        priority: body["priority"],
        allowTaskPreemption: body["allowTaskPreemption"],
        maxParallelTasks: body["maxParallelTasks"],
        constraints: !body.constraints
          ? undefined
          : {
              maxWallClockTime: body.constraints?.["maxWallClockTime"],
              maxTaskRetryCount: body.constraints?.["maxTaskRetryCount"],
            },
        jobManagerTask: !body.jobManagerTask
          ? undefined
          : {
              id: body.jobManagerTask?.["id"],
              displayName: body.jobManagerTask?.["displayName"],
              commandLine: body.jobManagerTask?.["commandLine"],
              containerSettings: !body.jobManagerTask?.containerSettings
                ? undefined
                : {
                    containerRunOptions:
                      body.jobManagerTask?.containerSettings?.[
                        "containerRunOptions"
                      ],
                    imageName:
                      body.jobManagerTask?.containerSettings?.["imageName"],
                    registry: !body.jobManagerTask?.containerSettings?.registry
                      ? undefined
                      : {
                          username:
                            body.jobManagerTask?.containerSettings?.registry?.[
                              "username"
                            ],
                          password:
                            body.jobManagerTask?.containerSettings?.registry?.[
                              "password"
                            ],
                          registryServer:
                            body.jobManagerTask?.containerSettings?.registry?.[
                              "registryServer"
                            ],
                          identityReference: !body.jobManagerTask
                            ?.containerSettings?.registry?.identityReference
                            ? undefined
                            : {
                                resourceId:
                                  body.jobManagerTask?.containerSettings
                                    ?.registry?.identityReference?.[
                                    "resourceId"
                                  ],
                              },
                        },
                    workingDirectory:
                      body.jobManagerTask?.containerSettings?.[
                        "workingDirectory"
                      ],
                  },
              resourceFiles: !body.jobManagerTask?.["resourceFiles"]
                ? body.jobManagerTask?.["resourceFiles"]
                : body.jobManagerTask?.["resourceFiles"].map((p) => ({
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
              outputFiles: !body.jobManagerTask?.["outputFiles"]
                ? body.jobManagerTask?.["outputFiles"]
                : body.jobManagerTask?.["outputFiles"].map((p) => ({
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
                              : p.destination.container?.["uploadHeaders"].map(
                                  (p) => ({
                                    name: p["name"],
                                    value: p["value"],
                                  }),
                                ),
                          },
                    },
                    uploadOptions: {
                      uploadCondition: p.uploadOptions["uploadCondition"],
                    },
                  })),
              environmentSettings: !body.jobManagerTask?.["environmentSettings"]
                ? body.jobManagerTask?.["environmentSettings"]
                : body.jobManagerTask?.["environmentSettings"].map((p) => ({
                    name: p["name"],
                    value: p["value"],
                  })),
              constraints: !body.jobManagerTask?.constraints
                ? undefined
                : {
                    maxWallClockTime:
                      body.jobManagerTask?.constraints?.["maxWallClockTime"],
                    retentionTime:
                      body.jobManagerTask?.constraints?.["retentionTime"],
                    maxTaskRetryCount:
                      body.jobManagerTask?.constraints?.["maxTaskRetryCount"],
                  },
              requiredSlots: body.jobManagerTask?.["requiredSlots"],
              killJobOnCompletion: body.jobManagerTask?.["killJobOnCompletion"],
              userIdentity: !body.jobManagerTask?.userIdentity
                ? undefined
                : {
                    username: body.jobManagerTask?.userIdentity?.["username"],
                    autoUser: !body.jobManagerTask?.userIdentity?.autoUser
                      ? undefined
                      : {
                          scope:
                            body.jobManagerTask?.userIdentity?.autoUser?.[
                              "scope"
                            ],
                          elevationLevel:
                            body.jobManagerTask?.userIdentity?.autoUser?.[
                              "elevationLevel"
                            ],
                        },
                  },
              runExclusive: body.jobManagerTask?.["runExclusive"],
              applicationPackageReferences: !body.jobManagerTask?.[
                "applicationPackageReferences"
              ]
                ? body.jobManagerTask?.["applicationPackageReferences"]
                : body.jobManagerTask?.["applicationPackageReferences"].map(
                    (p) => ({
                      applicationId: p["applicationId"],
                      version: p["version"],
                    }),
                  ),
              authenticationTokenSettings: !body.jobManagerTask
                ?.authenticationTokenSettings
                ? undefined
                : {
                    access:
                      body.jobManagerTask?.authenticationTokenSettings?.[
                        "access"
                      ],
                  },
              allowLowPriorityNode:
                body.jobManagerTask?.["allowLowPriorityNode"],
            },
        jobPreparationTask: !body.jobPreparationTask
          ? undefined
          : {
              id: body.jobPreparationTask?.["id"],
              commandLine: body.jobPreparationTask?.["commandLine"],
              containerSettings: !body.jobPreparationTask?.containerSettings
                ? undefined
                : {
                    containerRunOptions:
                      body.jobPreparationTask?.containerSettings?.[
                        "containerRunOptions"
                      ],
                    imageName:
                      body.jobPreparationTask?.containerSettings?.["imageName"],
                    registry: !body.jobPreparationTask?.containerSettings
                      ?.registry
                      ? undefined
                      : {
                          username:
                            body.jobPreparationTask?.containerSettings
                              ?.registry?.["username"],
                          password:
                            body.jobPreparationTask?.containerSettings
                              ?.registry?.["password"],
                          registryServer:
                            body.jobPreparationTask?.containerSettings
                              ?.registry?.["registryServer"],
                          identityReference: !body.jobPreparationTask
                            ?.containerSettings?.registry?.identityReference
                            ? undefined
                            : {
                                resourceId:
                                  body.jobPreparationTask?.containerSettings
                                    ?.registry?.identityReference?.[
                                    "resourceId"
                                  ],
                              },
                        },
                    workingDirectory:
                      body.jobPreparationTask?.containerSettings?.[
                        "workingDirectory"
                      ],
                  },
              resourceFiles: !body.jobPreparationTask?.["resourceFiles"]
                ? body.jobPreparationTask?.["resourceFiles"]
                : body.jobPreparationTask?.["resourceFiles"].map((p) => ({
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
              environmentSettings: !body.jobPreparationTask?.[
                "environmentSettings"
              ]
                ? body.jobPreparationTask?.["environmentSettings"]
                : body.jobPreparationTask?.["environmentSettings"].map((p) => ({
                    name: p["name"],
                    value: p["value"],
                  })),
              constraints: !body.jobPreparationTask?.constraints
                ? undefined
                : {
                    maxWallClockTime:
                      body.jobPreparationTask?.constraints?.[
                        "maxWallClockTime"
                      ],
                    retentionTime:
                      body.jobPreparationTask?.constraints?.["retentionTime"],
                    maxTaskRetryCount:
                      body.jobPreparationTask?.constraints?.[
                        "maxTaskRetryCount"
                      ],
                  },
              waitForSuccess: body.jobPreparationTask?.["waitForSuccess"],
              userIdentity: !body.jobPreparationTask?.userIdentity
                ? undefined
                : {
                    username:
                      body.jobPreparationTask?.userIdentity?.["username"],
                    autoUser: !body.jobPreparationTask?.userIdentity?.autoUser
                      ? undefined
                      : {
                          scope:
                            body.jobPreparationTask?.userIdentity?.autoUser?.[
                              "scope"
                            ],
                          elevationLevel:
                            body.jobPreparationTask?.userIdentity?.autoUser?.[
                              "elevationLevel"
                            ],
                        },
                  },
              rerunOnNodeRebootAfterSuccess:
                body.jobPreparationTask?.["rerunOnNodeRebootAfterSuccess"],
            },
        jobReleaseTask: !body.jobReleaseTask
          ? undefined
          : {
              id: body.jobReleaseTask?.["id"],
              commandLine: body.jobReleaseTask?.["commandLine"],
              containerSettings: !body.jobReleaseTask?.containerSettings
                ? undefined
                : {
                    containerRunOptions:
                      body.jobReleaseTask?.containerSettings?.[
                        "containerRunOptions"
                      ],
                    imageName:
                      body.jobReleaseTask?.containerSettings?.["imageName"],
                    registry: !body.jobReleaseTask?.containerSettings?.registry
                      ? undefined
                      : {
                          username:
                            body.jobReleaseTask?.containerSettings?.registry?.[
                              "username"
                            ],
                          password:
                            body.jobReleaseTask?.containerSettings?.registry?.[
                              "password"
                            ],
                          registryServer:
                            body.jobReleaseTask?.containerSettings?.registry?.[
                              "registryServer"
                            ],
                          identityReference: !body.jobReleaseTask
                            ?.containerSettings?.registry?.identityReference
                            ? undefined
                            : {
                                resourceId:
                                  body.jobReleaseTask?.containerSettings
                                    ?.registry?.identityReference?.[
                                    "resourceId"
                                  ],
                              },
                        },
                    workingDirectory:
                      body.jobReleaseTask?.containerSettings?.[
                        "workingDirectory"
                      ],
                  },
              resourceFiles: !body.jobReleaseTask?.["resourceFiles"]
                ? body.jobReleaseTask?.["resourceFiles"]
                : body.jobReleaseTask?.["resourceFiles"].map((p) => ({
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
              environmentSettings: !body.jobReleaseTask?.["environmentSettings"]
                ? body.jobReleaseTask?.["environmentSettings"]
                : body.jobReleaseTask?.["environmentSettings"].map((p) => ({
                    name: p["name"],
                    value: p["value"],
                  })),
              maxWallClockTime: body.jobReleaseTask?.["maxWallClockTime"],
              retentionTime: body.jobReleaseTask?.["retentionTime"],
              userIdentity: !body.jobReleaseTask?.userIdentity
                ? undefined
                : {
                    username: body.jobReleaseTask?.userIdentity?.["username"],
                    autoUser: !body.jobReleaseTask?.userIdentity?.autoUser
                      ? undefined
                      : {
                          scope:
                            body.jobReleaseTask?.userIdentity?.autoUser?.[
                              "scope"
                            ],
                          elevationLevel:
                            body.jobReleaseTask?.userIdentity?.autoUser?.[
                              "elevationLevel"
                            ],
                        },
                  },
            },
        commonEnvironmentSettings: !body["commonEnvironmentSettings"]
          ? body["commonEnvironmentSettings"]
          : body["commonEnvironmentSettings"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
        poolInfo: {
          poolId: body.poolInfo["poolId"],
          autoPoolSpecification: !body.poolInfo.autoPoolSpecification
            ? undefined
            : {
                autoPoolIdPrefix:
                  body.poolInfo.autoPoolSpecification?.["autoPoolIdPrefix"],
                poolLifetimeOption:
                  body.poolInfo.autoPoolSpecification?.["poolLifetimeOption"],
                keepAlive: body.poolInfo.autoPoolSpecification?.["keepAlive"],
                pool: !body.poolInfo.autoPoolSpecification?.pool
                  ? undefined
                  : {
                      displayName:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "displayName"
                        ],
                      vmSize:
                        body.poolInfo.autoPoolSpecification?.pool?.["vmSize"],
                      cloudServiceConfiguration: !body.poolInfo
                        .autoPoolSpecification?.pool?.cloudServiceConfiguration
                        ? undefined
                        : {
                            osFamily:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.cloudServiceConfiguration?.["osFamily"],
                            osVersion:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.cloudServiceConfiguration?.["osVersion"],
                          },
                      virtualMachineConfiguration: !body.poolInfo
                        .autoPoolSpecification?.pool
                        ?.virtualMachineConfiguration
                        ? undefined
                        : {
                            imageReference: {
                              publisher:
                                body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "publisher"
                                ],
                              offer:
                                body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "offer"
                                ],
                              sku: body.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "sku"
                              ],
                              version:
                                body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "version"
                                ],
                              virtualMachineImageId:
                                body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "virtualMachineImageId"
                                ],
                            },
                            nodeAgentSKUId:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.[
                                "nodeAgentSKUId"
                              ],
                            windowsConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ?.windowsConfiguration
                              ? undefined
                              : {
                                  enableAutomaticUpdates:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.windowsConfiguration?.[
                                      "enableAutomaticUpdates"
                                    ],
                                },
                            dataDisks: !body.poolInfo.autoPoolSpecification
                              ?.pool?.virtualMachineConfiguration?.["dataDisks"]
                              ? body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.["dataDisks"]
                              : body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                  "dataDisks"
                                ].map((p) => ({
                                  lun: p["lun"],
                                  caching: p["caching"],
                                  diskSizeGB: p["diskSizeGB"],
                                  storageAccountType: p["storageAccountType"],
                                })),
                            licenseType:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["licenseType"],
                            containerConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ?.containerConfiguration
                              ? undefined
                              : {
                                  type: body.poolInfo.autoPoolSpecification
                                    ?.pool?.virtualMachineConfiguration
                                    ?.containerConfiguration?.["type"],
                                  containerImageNames:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.[
                                      "containerImageNames"
                                    ],
                                  containerRegistries: !body.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.containerConfiguration?.[
                                    "containerRegistries"
                                  ]
                                    ? body.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.[
                                        "containerRegistries"
                                      ]
                                    : body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
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
                            diskEncryptionConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ?.diskEncryptionConfiguration
                              ? undefined
                              : {
                                  targets:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.diskEncryptionConfiguration?.[
                                      "targets"
                                    ],
                                },
                            nodePlacementConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ?.nodePlacementConfiguration
                              ? undefined
                              : {
                                  policy:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.nodePlacementConfiguration?.["policy"],
                                },
                            extensions: !body.poolInfo.autoPoolSpecification
                              ?.pool?.virtualMachineConfiguration?.[
                              "extensions"
                            ]
                              ? body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.["extensions"]
                              : body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
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
                            osDisk: !body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.osDisk
                              ? undefined
                              : {
                                  ephemeralOSDiskSettings: !body.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.osDisk
                                    ?.ephemeralOSDiskSettings
                                    ? undefined
                                    : {
                                        placement:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.virtualMachineConfiguration
                                            ?.osDisk?.ephemeralOSDiskSettings?.[
                                            "placement"
                                          ],
                                      },
                                },
                          },
                      taskSlotsPerNode:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "taskSlotsPerNode"
                        ],
                      taskSchedulingPolicy: !body.poolInfo.autoPoolSpecification
                        ?.pool?.taskSchedulingPolicy
                        ? undefined
                        : {
                            nodeFillType:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.taskSchedulingPolicy?.["nodeFillType"],
                          },
                      resizeTimeout:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "resizeTimeout"
                        ],
                      targetDedicatedNodes:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "targetDedicatedNodes"
                        ],
                      targetLowPriorityNodes:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "targetLowPriorityNodes"
                        ],
                      enableAutoScale:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "enableAutoScale"
                        ],
                      autoScaleFormula:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "autoScaleFormula"
                        ],
                      autoScaleEvaluationInterval:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "autoScaleEvaluationInterval"
                        ],
                      enableInterNodeCommunication:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "enableInterNodeCommunication"
                        ],
                      networkConfiguration: !body.poolInfo.autoPoolSpecification
                        ?.pool?.networkConfiguration
                        ? undefined
                        : {
                            subnetId:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.networkConfiguration?.["subnetId"],
                            dynamicVNetAssignmentScope:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.networkConfiguration?.[
                                "dynamicVNetAssignmentScope"
                              ],
                            endpointConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool?.networkConfiguration
                              ?.endpointConfiguration
                              ? undefined
                              : {
                                  inboundNATPools:
                                    body.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
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
                            publicIPAddressConfiguration: !body.poolInfo
                              .autoPoolSpecification?.pool?.networkConfiguration
                              ?.publicIPAddressConfiguration
                              ? undefined
                              : {
                                  provision:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration
                                      ?.publicIPAddressConfiguration?.[
                                      "provision"
                                    ],
                                  ipAddressIds:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration
                                      ?.publicIPAddressConfiguration?.[
                                      "ipAddressIds"
                                    ],
                                },
                            enableAcceleratedNetworking:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.networkConfiguration?.[
                                "enableAcceleratedNetworking"
                              ],
                          },
                      startTask: !body.poolInfo.autoPoolSpecification?.pool
                        ?.startTask
                        ? undefined
                        : {
                            commandLine:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["commandLine"],
                            containerSettings: !body.poolInfo
                              .autoPoolSpecification?.pool?.startTask
                              ?.containerSettings
                              ? undefined
                              : {
                                  containerRunOptions:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.containerSettings?.[
                                      "containerRunOptions"
                                    ],
                                  imageName:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.containerSettings?.[
                                      "imageName"
                                    ],
                                  registry: !body.poolInfo.autoPoolSpecification
                                    ?.pool?.startTask?.containerSettings
                                    ?.registry
                                    ? undefined
                                    : {
                                        username:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.containerSettings
                                            ?.registry?.["username"],
                                        password:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.containerSettings
                                            ?.registry?.["password"],
                                        registryServer:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.containerSettings
                                            ?.registry?.["registryServer"],
                                        identityReference: !body.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry?.identityReference
                                          ? undefined
                                          : {
                                              resourceId:
                                                body.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.startTask?.containerSettings
                                                  ?.registry
                                                  ?.identityReference?.[
                                                  "resourceId"
                                                ],
                                            },
                                      },
                                  workingDirectory:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.containerSettings?.[
                                      "workingDirectory"
                                    ],
                                },
                            resourceFiles: !body.poolInfo.autoPoolSpecification
                              ?.pool?.startTask?.["resourceFiles"]
                              ? body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["resourceFiles"]
                              : body.poolInfo.autoPoolSpecification?.pool?.startTask?.[
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
                            environmentSettings: !body.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "environmentSettings"
                            ]
                              ? body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["environmentSettings"]
                              : body.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                  "environmentSettings"
                                ].map((p) => ({
                                  name: p["name"],
                                  value: p["value"],
                                })),
                            userIdentity: !body.poolInfo.autoPoolSpecification
                              ?.pool?.startTask?.userIdentity
                              ? undefined
                              : {
                                  username:
                                    body.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.userIdentity?.["username"],
                                  autoUser: !body.poolInfo.autoPoolSpecification
                                    ?.pool?.startTask?.userIdentity?.autoUser
                                    ? undefined
                                    : {
                                        scope:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.userIdentity
                                            ?.autoUser?.["scope"],
                                        elevationLevel:
                                          body.poolInfo.autoPoolSpecification
                                            ?.pool?.startTask?.userIdentity
                                            ?.autoUser?.["elevationLevel"],
                                      },
                                },
                            maxTaskRetryCount:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["maxTaskRetryCount"],
                            waitForSuccess:
                              body.poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["waitForSuccess"],
                          },
                      certificateReferences: !body.poolInfo
                        .autoPoolSpecification?.pool?.["certificateReferences"]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "certificateReferences"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
                            "certificateReferences"
                          ].map((p) => ({
                            thumbprint: p["thumbprint"],
                            thumbprintAlgorithm: p["thumbprintAlgorithm"],
                            storeLocation: p["storeLocation"],
                            storeName: p["storeName"],
                            visibility: p["visibility"],
                          })),
                      applicationPackageReferences: !body.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "applicationPackageReferences"
                      ]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "applicationPackageReferences"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
                            "applicationPackageReferences"
                          ].map((p) => ({
                            applicationId: p["applicationId"],
                            version: p["version"],
                          })),
                      applicationLicenses:
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "applicationLicenses"
                        ],
                      userAccounts: !body.poolInfo.autoPoolSpecification
                        ?.pool?.["userAccounts"]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "userAccounts"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
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
                            windowsUserConfiguration:
                              !p.windowsUserConfiguration
                                ? undefined
                                : {
                                    loginMode:
                                      p.windowsUserConfiguration?.["loginMode"],
                                  },
                          })),
                      metadata: !body.poolInfo.autoPoolSpecification?.pool?.[
                        "metadata"
                      ]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "metadata"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
                            "metadata"
                          ].map((p) => ({
                            name: p["name"],
                            value: p["value"],
                          })),
                      mountConfiguration: !body.poolInfo.autoPoolSpecification
                        ?.pool?.["mountConfiguration"]
                        ? body.poolInfo.autoPoolSpecification?.pool?.[
                            "mountConfiguration"
                          ]
                        : body.poolInfo.autoPoolSpecification?.pool?.[
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
                        body.poolInfo.autoPoolSpecification?.pool?.[
                          "targetNodeCommunicationMode"
                        ],
                    },
              },
        },
        onAllTasksComplete: body["onAllTasksComplete"],
        onTaskFailure: body["onTaskFailure"],
        networkConfiguration: !body.networkConfiguration
          ? undefined
          : { subnetId: body.networkConfiguration?.["subnetId"] },
        metadata: !body["metadata"]
          ? body["metadata"]
          : body["metadata"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
      },
    });
}

export async function _createJobDeserialize(
  result: CreateJob201Response | CreateJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * The Batch service supports two ways to control the work done as part of a Job.
 * In the first approach, the user specifies a Job Manager Task. The Batch service
 * launches this Task when it is ready to start the Job. The Job Manager Task
 * controls all other Tasks that run under this Job, by using the Task APIs. In
 * the second approach, the user directly controls the execution of Tasks under an
 * active Job, by using the Task APIs. Also note: when naming Jobs, avoid
 * including sensitive information such as user names or secret project names.
 * This information may appear in telemetry logs accessible to Microsoft Support
 * engineers.
 */
export async function createJob(
  context: Client,
  body: BatchJobCreateOptions,
  options: JobsCreateJobOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _createJobSend(context, body, options);
  return _createJobDeserialize(result);
}

export function _listJobsSend(
  context: Client,
  options: JobsListJobsOptions = { requestOptions: {} },
): StreamableMethod<ListJobs200Response | ListJobsDefaultResponse> {
  return context
    .path("/jobs")
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

export async function _listJobsDeserialize(
  result: ListJobs200Response | ListJobsDefaultResponse,
): Promise<BatchJobListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          id: p["id"],
          displayName: p["displayName"],
          usesTaskDependencies: p["usesTaskDependencies"],
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
          priority: p["priority"],
          allowTaskPreemption: p["allowTaskPreemption"],
          maxParallelTasks: p["maxParallelTasks"],
          constraints: !p.constraints
            ? undefined
            : {
                maxWallClockTime: p.constraints?.["maxWallClockTime"],
                maxTaskRetryCount: p.constraints?.["maxTaskRetryCount"],
              },
          jobManagerTask: !p.jobManagerTask
            ? undefined
            : {
                id: p.jobManagerTask?.["id"],
                displayName: p.jobManagerTask?.["displayName"],
                commandLine: p.jobManagerTask?.["commandLine"],
                containerSettings: !p.jobManagerTask?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        p.jobManagerTask?.containerSettings?.[
                          "containerRunOptions"
                        ],
                      imageName:
                        p.jobManagerTask?.containerSettings?.["imageName"],
                      registry: !p.jobManagerTask?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              p.jobManagerTask?.containerSettings?.registry?.[
                                "username"
                              ],
                            password:
                              p.jobManagerTask?.containerSettings?.registry?.[
                                "password"
                              ],
                            registryServer:
                              p.jobManagerTask?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !p.jobManagerTask
                              ?.containerSettings?.registry?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    p.jobManagerTask?.containerSettings
                                      ?.registry?.identityReference?.[
                                      "resourceId"
                                    ],
                                },
                          },
                      workingDirectory:
                        p.jobManagerTask?.containerSettings?.[
                          "workingDirectory"
                        ],
                    },
                resourceFiles: !p.jobManagerTask?.["resourceFiles"]
                  ? p.jobManagerTask?.["resourceFiles"]
                  : p.jobManagerTask?.["resourceFiles"].map((p) => ({
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
                outputFiles: !p.jobManagerTask?.["outputFiles"]
                  ? p.jobManagerTask?.["outputFiles"]
                  : p.jobManagerTask?.["outputFiles"].map((p) => ({
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
                environmentSettings: !p.jobManagerTask?.["environmentSettings"]
                  ? p.jobManagerTask?.["environmentSettings"]
                  : p.jobManagerTask?.["environmentSettings"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
                constraints: !p.jobManagerTask?.constraints
                  ? undefined
                  : {
                      maxWallClockTime:
                        p.jobManagerTask?.constraints?.["maxWallClockTime"],
                      retentionTime:
                        p.jobManagerTask?.constraints?.["retentionTime"],
                      maxTaskRetryCount:
                        p.jobManagerTask?.constraints?.["maxTaskRetryCount"],
                    },
                requiredSlots: p.jobManagerTask?.["requiredSlots"],
                killJobOnCompletion: p.jobManagerTask?.["killJobOnCompletion"],
                userIdentity: !p.jobManagerTask?.userIdentity
                  ? undefined
                  : {
                      username: p.jobManagerTask?.userIdentity?.["username"],
                      autoUser: !p.jobManagerTask?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              p.jobManagerTask?.userIdentity?.autoUser?.[
                                "scope"
                              ],
                            elevationLevel:
                              p.jobManagerTask?.userIdentity?.autoUser?.[
                                "elevationLevel"
                              ],
                          },
                    },
                runExclusive: p.jobManagerTask?.["runExclusive"],
                applicationPackageReferences: !p.jobManagerTask?.[
                  "applicationPackageReferences"
                ]
                  ? p.jobManagerTask?.["applicationPackageReferences"]
                  : p.jobManagerTask?.["applicationPackageReferences"].map(
                      (p) => ({
                        applicationId: p["applicationId"],
                        version: p["version"],
                      }),
                    ),
                authenticationTokenSettings: !p.jobManagerTask
                  ?.authenticationTokenSettings
                  ? undefined
                  : {
                      access:
                        p.jobManagerTask?.authenticationTokenSettings?.[
                          "access"
                        ],
                    },
                allowLowPriorityNode:
                  p.jobManagerTask?.["allowLowPriorityNode"],
              },
          jobPreparationTask: !p.jobPreparationTask
            ? undefined
            : {
                id: p.jobPreparationTask?.["id"],
                commandLine: p.jobPreparationTask?.["commandLine"],
                containerSettings: !p.jobPreparationTask?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        p.jobPreparationTask?.containerSettings?.[
                          "containerRunOptions"
                        ],
                      imageName:
                        p.jobPreparationTask?.containerSettings?.["imageName"],
                      registry: !p.jobPreparationTask?.containerSettings
                        ?.registry
                        ? undefined
                        : {
                            username:
                              p.jobPreparationTask?.containerSettings
                                ?.registry?.["username"],
                            password:
                              p.jobPreparationTask?.containerSettings
                                ?.registry?.["password"],
                            registryServer:
                              p.jobPreparationTask?.containerSettings
                                ?.registry?.["registryServer"],
                            identityReference: !p.jobPreparationTask
                              ?.containerSettings?.registry?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    p.jobPreparationTask?.containerSettings
                                      ?.registry?.identityReference?.[
                                      "resourceId"
                                    ],
                                },
                          },
                      workingDirectory:
                        p.jobPreparationTask?.containerSettings?.[
                          "workingDirectory"
                        ],
                    },
                resourceFiles: !p.jobPreparationTask?.["resourceFiles"]
                  ? p.jobPreparationTask?.["resourceFiles"]
                  : p.jobPreparationTask?.["resourceFiles"].map((p) => ({
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
                environmentSettings: !p.jobPreparationTask?.[
                  "environmentSettings"
                ]
                  ? p.jobPreparationTask?.["environmentSettings"]
                  : p.jobPreparationTask?.["environmentSettings"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
                constraints: !p.jobPreparationTask?.constraints
                  ? undefined
                  : {
                      maxWallClockTime:
                        p.jobPreparationTask?.constraints?.["maxWallClockTime"],
                      retentionTime:
                        p.jobPreparationTask?.constraints?.["retentionTime"],
                      maxTaskRetryCount:
                        p.jobPreparationTask?.constraints?.[
                          "maxTaskRetryCount"
                        ],
                    },
                waitForSuccess: p.jobPreparationTask?.["waitForSuccess"],
                userIdentity: !p.jobPreparationTask?.userIdentity
                  ? undefined
                  : {
                      username:
                        p.jobPreparationTask?.userIdentity?.["username"],
                      autoUser: !p.jobPreparationTask?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              p.jobPreparationTask?.userIdentity?.autoUser?.[
                                "scope"
                              ],
                            elevationLevel:
                              p.jobPreparationTask?.userIdentity?.autoUser?.[
                                "elevationLevel"
                              ],
                          },
                    },
                rerunOnNodeRebootAfterSuccess:
                  p.jobPreparationTask?.["rerunOnNodeRebootAfterSuccess"],
              },
          jobReleaseTask: !p.jobReleaseTask
            ? undefined
            : {
                id: p.jobReleaseTask?.["id"],
                commandLine: p.jobReleaseTask?.["commandLine"],
                containerSettings: !p.jobReleaseTask?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        p.jobReleaseTask?.containerSettings?.[
                          "containerRunOptions"
                        ],
                      imageName:
                        p.jobReleaseTask?.containerSettings?.["imageName"],
                      registry: !p.jobReleaseTask?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              p.jobReleaseTask?.containerSettings?.registry?.[
                                "username"
                              ],
                            password:
                              p.jobReleaseTask?.containerSettings?.registry?.[
                                "password"
                              ],
                            registryServer:
                              p.jobReleaseTask?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !p.jobReleaseTask
                              ?.containerSettings?.registry?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    p.jobReleaseTask?.containerSettings
                                      ?.registry?.identityReference?.[
                                      "resourceId"
                                    ],
                                },
                          },
                      workingDirectory:
                        p.jobReleaseTask?.containerSettings?.[
                          "workingDirectory"
                        ],
                    },
                resourceFiles: !p.jobReleaseTask?.["resourceFiles"]
                  ? p.jobReleaseTask?.["resourceFiles"]
                  : p.jobReleaseTask?.["resourceFiles"].map((p) => ({
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
                environmentSettings: !p.jobReleaseTask?.["environmentSettings"]
                  ? p.jobReleaseTask?.["environmentSettings"]
                  : p.jobReleaseTask?.["environmentSettings"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
                maxWallClockTime: p.jobReleaseTask?.["maxWallClockTime"],
                retentionTime: p.jobReleaseTask?.["retentionTime"],
                userIdentity: !p.jobReleaseTask?.userIdentity
                  ? undefined
                  : {
                      username: p.jobReleaseTask?.userIdentity?.["username"],
                      autoUser: !p.jobReleaseTask?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              p.jobReleaseTask?.userIdentity?.autoUser?.[
                                "scope"
                              ],
                            elevationLevel:
                              p.jobReleaseTask?.userIdentity?.autoUser?.[
                                "elevationLevel"
                              ],
                          },
                    },
              },
          commonEnvironmentSettings: !p["commonEnvironmentSettings"]
            ? p["commonEnvironmentSettings"]
            : p["commonEnvironmentSettings"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          poolInfo: {
            poolId: p.poolInfo["poolId"],
            autoPoolSpecification: !p.poolInfo.autoPoolSpecification
              ? undefined
              : {
                  autoPoolIdPrefix:
                    p.poolInfo.autoPoolSpecification?.["autoPoolIdPrefix"],
                  poolLifetimeOption:
                    p.poolInfo.autoPoolSpecification?.["poolLifetimeOption"],
                  keepAlive: p.poolInfo.autoPoolSpecification?.["keepAlive"],
                  pool: !p.poolInfo.autoPoolSpecification?.pool
                    ? undefined
                    : {
                        displayName:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "displayName"
                          ],
                        vmSize:
                          p.poolInfo.autoPoolSpecification?.pool?.["vmSize"],
                        cloudServiceConfiguration: !p.poolInfo
                          .autoPoolSpecification?.pool
                          ?.cloudServiceConfiguration
                          ? undefined
                          : {
                              osFamily:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.cloudServiceConfiguration?.["osFamily"],
                              osVersion:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.cloudServiceConfiguration?.["osVersion"],
                            },
                        virtualMachineConfiguration: !p.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration
                          ? undefined
                          : {
                              imageReference: {
                                publisher:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["publisher"],
                                offer:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["offer"],
                                sku: p.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "sku"
                                ],
                                version:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["version"],
                                virtualMachineImageId:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["virtualMachineImageId"],
                                exactVersion:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["exactVersion"],
                              },
                              nodeAgentSKUId:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.[
                                  "nodeAgentSKUId"
                                ],
                              windowsConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.windowsConfiguration
                                ? undefined
                                : {
                                    enableAutomaticUpdates:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.windowsConfiguration?.[
                                        "enableAutomaticUpdates"
                                      ],
                                  },
                              dataDisks: !p.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["dataDisks"]
                                ? p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.["dataDisks"]
                                : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                    "dataDisks"
                                  ].map((p) => ({
                                    lun: p["lun"],
                                    caching: p["caching"],
                                    diskSizeGB: p["diskSizeGB"],
                                    storageAccountType: p["storageAccountType"],
                                  })),
                              licenseType:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.[
                                  "licenseType"
                                ],
                              containerConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.containerConfiguration
                                ? undefined
                                : {
                                    type: p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.["type"],
                                    containerImageNames:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.[
                                        "containerImageNames"
                                      ],
                                    containerRegistries: !p.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.[
                                      "containerRegistries"
                                    ]
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.containerConfiguration?.[
                                          "containerRegistries"
                                        ]
                                      : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
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
                              diskEncryptionConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.diskEncryptionConfiguration
                                ? undefined
                                : {
                                    targets:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.diskEncryptionConfiguration?.[
                                        "targets"
                                      ],
                                  },
                              nodePlacementConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.nodePlacementConfiguration
                                ? undefined
                                : {
                                    policy:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.nodePlacementConfiguration?.[
                                        "policy"
                                      ],
                                  },
                              extensions: !p.poolInfo.autoPoolSpecification
                                ?.pool?.virtualMachineConfiguration?.[
                                "extensions"
                              ]
                                ? p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.[
                                    "extensions"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
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
                              osDisk: !p.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.osDisk
                                ? undefined
                                : {
                                    ephemeralOSDiskSettings: !p.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.osDisk
                                      ?.ephemeralOSDiskSettings
                                      ? undefined
                                      : {
                                          placement:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool
                                              ?.virtualMachineConfiguration
                                              ?.osDisk
                                              ?.ephemeralOSDiskSettings?.[
                                              "placement"
                                            ],
                                        },
                                  },
                            },
                        taskSlotsPerNode:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "taskSlotsPerNode"
                          ],
                        taskSchedulingPolicy: !p.poolInfo.autoPoolSpecification
                          ?.pool?.taskSchedulingPolicy
                          ? undefined
                          : {
                              nodeFillType:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.taskSchedulingPolicy?.["nodeFillType"],
                            },
                        resizeTimeout:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "resizeTimeout"
                          ],
                        targetDedicatedNodes:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "targetDedicatedNodes"
                          ],
                        targetLowPriorityNodes:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "targetLowPriorityNodes"
                          ],
                        enableAutoScale:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "enableAutoScale"
                          ],
                        autoScaleFormula:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "autoScaleFormula"
                          ],
                        autoScaleEvaluationInterval:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "autoScaleEvaluationInterval"
                          ],
                        enableInterNodeCommunication:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "enableInterNodeCommunication"
                          ],
                        networkConfiguration: !p.poolInfo.autoPoolSpecification
                          ?.pool?.networkConfiguration
                          ? undefined
                          : {
                              subnetId:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration?.["subnetId"],
                              dynamicVNetAssignmentScope:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration?.[
                                  "dynamicVNetAssignmentScope"
                                ],
                              endpointConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.networkConfiguration?.endpointConfiguration
                                ? undefined
                                : {
                                    inboundNATPools:
                                      p.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
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
                              publicIPAddressConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.networkConfiguration
                                ?.publicIPAddressConfiguration
                                ? undefined
                                : {
                                    provision:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.networkConfiguration
                                        ?.publicIPAddressConfiguration?.[
                                        "provision"
                                      ],
                                    ipAddressIds:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.networkConfiguration
                                        ?.publicIPAddressConfiguration?.[
                                        "ipAddressIds"
                                      ],
                                  },
                              enableAcceleratedNetworking:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration?.[
                                  "enableAcceleratedNetworking"
                                ],
                            },
                        startTask: !p.poolInfo.autoPoolSpecification?.pool
                          ?.startTask
                          ? undefined
                          : {
                              commandLine:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["commandLine"],
                              containerSettings: !p.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.containerSettings
                                ? undefined
                                : {
                                    containerRunOptions:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.startTask?.containerSettings?.[
                                        "containerRunOptions"
                                      ],
                                    imageName:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.startTask?.containerSettings?.[
                                        "imageName"
                                      ],
                                    registry: !p.poolInfo.autoPoolSpecification
                                      ?.pool?.startTask?.containerSettings
                                      ?.registry
                                      ? undefined
                                      : {
                                          username:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask
                                              ?.containerSettings?.registry?.[
                                              "username"
                                            ],
                                          password:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask
                                              ?.containerSettings?.registry?.[
                                              "password"
                                            ],
                                          registryServer:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask
                                              ?.containerSettings?.registry?.[
                                              "registryServer"
                                            ],
                                          identityReference: !p.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings
                                            ?.registry?.identityReference
                                            ? undefined
                                            : {
                                                resourceId:
                                                  p.poolInfo
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
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.startTask?.containerSettings?.[
                                        "workingDirectory"
                                      ],
                                  },
                              resourceFiles: !p.poolInfo.autoPoolSpecification
                                ?.pool?.startTask?.["resourceFiles"]
                                ? p.poolInfo.autoPoolSpecification?.pool
                                    ?.startTask?.["resourceFiles"]
                                : p.poolInfo.autoPoolSpecification?.pool?.startTask?.[
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
                              environmentSettings: !p.poolInfo
                                .autoPoolSpecification?.pool?.startTask?.[
                                "environmentSettings"
                              ]
                                ? p.poolInfo.autoPoolSpecification?.pool
                                    ?.startTask?.["environmentSettings"]
                                : p.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                    "environmentSettings"
                                  ].map((p) => ({
                                    name: p["name"],
                                    value: p["value"],
                                  })),
                              userIdentity: !p.poolInfo.autoPoolSpecification
                                ?.pool?.startTask?.userIdentity
                                ? undefined
                                : {
                                    username:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.startTask?.userIdentity?.["username"],
                                    autoUser: !p.poolInfo.autoPoolSpecification
                                      ?.pool?.startTask?.userIdentity?.autoUser
                                      ? undefined
                                      : {
                                          scope:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask?.userIdentity
                                              ?.autoUser?.["scope"],
                                          elevationLevel:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask?.userIdentity
                                              ?.autoUser?.["elevationLevel"],
                                        },
                                  },
                              maxTaskRetryCount:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["maxTaskRetryCount"],
                              waitForSuccess:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["waitForSuccess"],
                            },
                        certificateReferences: !p.poolInfo.autoPoolSpecification
                          ?.pool?.["certificateReferences"]
                          ? p.poolInfo.autoPoolSpecification?.pool?.[
                              "certificateReferences"
                            ]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
                              "certificateReferences"
                            ].map((p) => ({
                              thumbprint: p["thumbprint"],
                              thumbprintAlgorithm: p["thumbprintAlgorithm"],
                              storeLocation: p["storeLocation"],
                              storeName: p["storeName"],
                              visibility: p["visibility"],
                            })),
                        applicationPackageReferences: !p.poolInfo
                          .autoPoolSpecification?.pool?.[
                          "applicationPackageReferences"
                        ]
                          ? p.poolInfo.autoPoolSpecification?.pool?.[
                              "applicationPackageReferences"
                            ]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
                              "applicationPackageReferences"
                            ].map((p) => ({
                              applicationId: p["applicationId"],
                              version: p["version"],
                            })),
                        applicationLicenses:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "applicationLicenses"
                          ],
                        userAccounts: !p.poolInfo.autoPoolSpecification?.pool?.[
                          "userAccounts"
                        ]
                          ? p.poolInfo.autoPoolSpecification?.pool?.[
                              "userAccounts"
                            ]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
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
                        metadata: !p.poolInfo.autoPoolSpecification?.pool?.[
                          "metadata"
                        ]
                          ? p.poolInfo.autoPoolSpecification?.pool?.["metadata"]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
                              "metadata"
                            ].map((p) => ({
                              name: p["name"],
                              value: p["value"],
                            })),
                        mountConfiguration: !p.poolInfo.autoPoolSpecification
                          ?.pool?.["mountConfiguration"]
                          ? p.poolInfo.autoPoolSpecification?.pool?.[
                              "mountConfiguration"
                            ]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
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
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "targetNodeCommunicationMode"
                          ],
                      },
                },
          },
          onAllTasksComplete: p["onAllTasksComplete"],
          onTaskFailure: p["onTaskFailure"],
          networkConfiguration: !p.networkConfiguration
            ? undefined
            : { subnetId: p.networkConfiguration?.["subnetId"] },
          metadata: !p["metadata"]
            ? p["metadata"]
            : p["metadata"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          executionInfo: !p.executionInfo
            ? undefined
            : {
                startTime: new Date(p.executionInfo?.["startTime"]),
                endTime:
                  p.executionInfo?.["endTime"] !== undefined
                    ? new Date(p.executionInfo?.["endTime"])
                    : undefined,
                poolId: p.executionInfo?.["poolId"],
                schedulingError: !p.executionInfo?.schedulingError
                  ? undefined
                  : {
                      category: p.executionInfo?.schedulingError?.["category"],
                      code: p.executionInfo?.schedulingError?.["code"],
                      message: p.executionInfo?.schedulingError?.["message"],
                      details: !p.executionInfo?.schedulingError?.["details"]
                        ? p.executionInfo?.schedulingError?.["details"]
                        : p.executionInfo?.schedulingError?.["details"].map(
                            (p) => ({ name: p["name"], value: p["value"] }),
                          ),
                    },
                terminateReason: p.executionInfo?.["terminateReason"],
              },
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

/** Lists all of the Jobs in the specified Account. */
export function listJobs(
  context: Client,
  options: JobsListJobsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJob> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobsSend(context, options),
    _listJobsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listJobsFromScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: JobsListJobsFromScheduleOptions = { requestOptions: {} },
): StreamableMethod<
  ListJobsFromSchedule200Response | ListJobsFromScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}/jobs", jobScheduleId)
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

export async function _listJobsFromScheduleDeserialize(
  result: ListJobsFromSchedule200Response | ListJobsFromScheduleDefaultResponse,
): Promise<BatchJobListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          id: p["id"],
          displayName: p["displayName"],
          usesTaskDependencies: p["usesTaskDependencies"],
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
          priority: p["priority"],
          allowTaskPreemption: p["allowTaskPreemption"],
          maxParallelTasks: p["maxParallelTasks"],
          constraints: !p.constraints
            ? undefined
            : {
                maxWallClockTime: p.constraints?.["maxWallClockTime"],
                maxTaskRetryCount: p.constraints?.["maxTaskRetryCount"],
              },
          jobManagerTask: !p.jobManagerTask
            ? undefined
            : {
                id: p.jobManagerTask?.["id"],
                displayName: p.jobManagerTask?.["displayName"],
                commandLine: p.jobManagerTask?.["commandLine"],
                containerSettings: !p.jobManagerTask?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        p.jobManagerTask?.containerSettings?.[
                          "containerRunOptions"
                        ],
                      imageName:
                        p.jobManagerTask?.containerSettings?.["imageName"],
                      registry: !p.jobManagerTask?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              p.jobManagerTask?.containerSettings?.registry?.[
                                "username"
                              ],
                            password:
                              p.jobManagerTask?.containerSettings?.registry?.[
                                "password"
                              ],
                            registryServer:
                              p.jobManagerTask?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !p.jobManagerTask
                              ?.containerSettings?.registry?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    p.jobManagerTask?.containerSettings
                                      ?.registry?.identityReference?.[
                                      "resourceId"
                                    ],
                                },
                          },
                      workingDirectory:
                        p.jobManagerTask?.containerSettings?.[
                          "workingDirectory"
                        ],
                    },
                resourceFiles: !p.jobManagerTask?.["resourceFiles"]
                  ? p.jobManagerTask?.["resourceFiles"]
                  : p.jobManagerTask?.["resourceFiles"].map((p) => ({
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
                outputFiles: !p.jobManagerTask?.["outputFiles"]
                  ? p.jobManagerTask?.["outputFiles"]
                  : p.jobManagerTask?.["outputFiles"].map((p) => ({
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
                environmentSettings: !p.jobManagerTask?.["environmentSettings"]
                  ? p.jobManagerTask?.["environmentSettings"]
                  : p.jobManagerTask?.["environmentSettings"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
                constraints: !p.jobManagerTask?.constraints
                  ? undefined
                  : {
                      maxWallClockTime:
                        p.jobManagerTask?.constraints?.["maxWallClockTime"],
                      retentionTime:
                        p.jobManagerTask?.constraints?.["retentionTime"],
                      maxTaskRetryCount:
                        p.jobManagerTask?.constraints?.["maxTaskRetryCount"],
                    },
                requiredSlots: p.jobManagerTask?.["requiredSlots"],
                killJobOnCompletion: p.jobManagerTask?.["killJobOnCompletion"],
                userIdentity: !p.jobManagerTask?.userIdentity
                  ? undefined
                  : {
                      username: p.jobManagerTask?.userIdentity?.["username"],
                      autoUser: !p.jobManagerTask?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              p.jobManagerTask?.userIdentity?.autoUser?.[
                                "scope"
                              ],
                            elevationLevel:
                              p.jobManagerTask?.userIdentity?.autoUser?.[
                                "elevationLevel"
                              ],
                          },
                    },
                runExclusive: p.jobManagerTask?.["runExclusive"],
                applicationPackageReferences: !p.jobManagerTask?.[
                  "applicationPackageReferences"
                ]
                  ? p.jobManagerTask?.["applicationPackageReferences"]
                  : p.jobManagerTask?.["applicationPackageReferences"].map(
                      (p) => ({
                        applicationId: p["applicationId"],
                        version: p["version"],
                      }),
                    ),
                authenticationTokenSettings: !p.jobManagerTask
                  ?.authenticationTokenSettings
                  ? undefined
                  : {
                      access:
                        p.jobManagerTask?.authenticationTokenSettings?.[
                          "access"
                        ],
                    },
                allowLowPriorityNode:
                  p.jobManagerTask?.["allowLowPriorityNode"],
              },
          jobPreparationTask: !p.jobPreparationTask
            ? undefined
            : {
                id: p.jobPreparationTask?.["id"],
                commandLine: p.jobPreparationTask?.["commandLine"],
                containerSettings: !p.jobPreparationTask?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        p.jobPreparationTask?.containerSettings?.[
                          "containerRunOptions"
                        ],
                      imageName:
                        p.jobPreparationTask?.containerSettings?.["imageName"],
                      registry: !p.jobPreparationTask?.containerSettings
                        ?.registry
                        ? undefined
                        : {
                            username:
                              p.jobPreparationTask?.containerSettings
                                ?.registry?.["username"],
                            password:
                              p.jobPreparationTask?.containerSettings
                                ?.registry?.["password"],
                            registryServer:
                              p.jobPreparationTask?.containerSettings
                                ?.registry?.["registryServer"],
                            identityReference: !p.jobPreparationTask
                              ?.containerSettings?.registry?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    p.jobPreparationTask?.containerSettings
                                      ?.registry?.identityReference?.[
                                      "resourceId"
                                    ],
                                },
                          },
                      workingDirectory:
                        p.jobPreparationTask?.containerSettings?.[
                          "workingDirectory"
                        ],
                    },
                resourceFiles: !p.jobPreparationTask?.["resourceFiles"]
                  ? p.jobPreparationTask?.["resourceFiles"]
                  : p.jobPreparationTask?.["resourceFiles"].map((p) => ({
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
                environmentSettings: !p.jobPreparationTask?.[
                  "environmentSettings"
                ]
                  ? p.jobPreparationTask?.["environmentSettings"]
                  : p.jobPreparationTask?.["environmentSettings"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
                constraints: !p.jobPreparationTask?.constraints
                  ? undefined
                  : {
                      maxWallClockTime:
                        p.jobPreparationTask?.constraints?.["maxWallClockTime"],
                      retentionTime:
                        p.jobPreparationTask?.constraints?.["retentionTime"],
                      maxTaskRetryCount:
                        p.jobPreparationTask?.constraints?.[
                          "maxTaskRetryCount"
                        ],
                    },
                waitForSuccess: p.jobPreparationTask?.["waitForSuccess"],
                userIdentity: !p.jobPreparationTask?.userIdentity
                  ? undefined
                  : {
                      username:
                        p.jobPreparationTask?.userIdentity?.["username"],
                      autoUser: !p.jobPreparationTask?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              p.jobPreparationTask?.userIdentity?.autoUser?.[
                                "scope"
                              ],
                            elevationLevel:
                              p.jobPreparationTask?.userIdentity?.autoUser?.[
                                "elevationLevel"
                              ],
                          },
                    },
                rerunOnNodeRebootAfterSuccess:
                  p.jobPreparationTask?.["rerunOnNodeRebootAfterSuccess"],
              },
          jobReleaseTask: !p.jobReleaseTask
            ? undefined
            : {
                id: p.jobReleaseTask?.["id"],
                commandLine: p.jobReleaseTask?.["commandLine"],
                containerSettings: !p.jobReleaseTask?.containerSettings
                  ? undefined
                  : {
                      containerRunOptions:
                        p.jobReleaseTask?.containerSettings?.[
                          "containerRunOptions"
                        ],
                      imageName:
                        p.jobReleaseTask?.containerSettings?.["imageName"],
                      registry: !p.jobReleaseTask?.containerSettings?.registry
                        ? undefined
                        : {
                            username:
                              p.jobReleaseTask?.containerSettings?.registry?.[
                                "username"
                              ],
                            password:
                              p.jobReleaseTask?.containerSettings?.registry?.[
                                "password"
                              ],
                            registryServer:
                              p.jobReleaseTask?.containerSettings?.registry?.[
                                "registryServer"
                              ],
                            identityReference: !p.jobReleaseTask
                              ?.containerSettings?.registry?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    p.jobReleaseTask?.containerSettings
                                      ?.registry?.identityReference?.[
                                      "resourceId"
                                    ],
                                },
                          },
                      workingDirectory:
                        p.jobReleaseTask?.containerSettings?.[
                          "workingDirectory"
                        ],
                    },
                resourceFiles: !p.jobReleaseTask?.["resourceFiles"]
                  ? p.jobReleaseTask?.["resourceFiles"]
                  : p.jobReleaseTask?.["resourceFiles"].map((p) => ({
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
                environmentSettings: !p.jobReleaseTask?.["environmentSettings"]
                  ? p.jobReleaseTask?.["environmentSettings"]
                  : p.jobReleaseTask?.["environmentSettings"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
                maxWallClockTime: p.jobReleaseTask?.["maxWallClockTime"],
                retentionTime: p.jobReleaseTask?.["retentionTime"],
                userIdentity: !p.jobReleaseTask?.userIdentity
                  ? undefined
                  : {
                      username: p.jobReleaseTask?.userIdentity?.["username"],
                      autoUser: !p.jobReleaseTask?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              p.jobReleaseTask?.userIdentity?.autoUser?.[
                                "scope"
                              ],
                            elevationLevel:
                              p.jobReleaseTask?.userIdentity?.autoUser?.[
                                "elevationLevel"
                              ],
                          },
                    },
              },
          commonEnvironmentSettings: !p["commonEnvironmentSettings"]
            ? p["commonEnvironmentSettings"]
            : p["commonEnvironmentSettings"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          poolInfo: {
            poolId: p.poolInfo["poolId"],
            autoPoolSpecification: !p.poolInfo.autoPoolSpecification
              ? undefined
              : {
                  autoPoolIdPrefix:
                    p.poolInfo.autoPoolSpecification?.["autoPoolIdPrefix"],
                  poolLifetimeOption:
                    p.poolInfo.autoPoolSpecification?.["poolLifetimeOption"],
                  keepAlive: p.poolInfo.autoPoolSpecification?.["keepAlive"],
                  pool: !p.poolInfo.autoPoolSpecification?.pool
                    ? undefined
                    : {
                        displayName:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "displayName"
                          ],
                        vmSize:
                          p.poolInfo.autoPoolSpecification?.pool?.["vmSize"],
                        cloudServiceConfiguration: !p.poolInfo
                          .autoPoolSpecification?.pool
                          ?.cloudServiceConfiguration
                          ? undefined
                          : {
                              osFamily:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.cloudServiceConfiguration?.["osFamily"],
                              osVersion:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.cloudServiceConfiguration?.["osVersion"],
                            },
                        virtualMachineConfiguration: !p.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration
                          ? undefined
                          : {
                              imageReference: {
                                publisher:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["publisher"],
                                offer:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["offer"],
                                sku: p.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.imageReference[
                                  "sku"
                                ],
                                version:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["version"],
                                virtualMachineImageId:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["virtualMachineImageId"],
                                exactVersion:
                                  p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.imageReference["exactVersion"],
                              },
                              nodeAgentSKUId:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.[
                                  "nodeAgentSKUId"
                                ],
                              windowsConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.windowsConfiguration
                                ? undefined
                                : {
                                    enableAutomaticUpdates:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.windowsConfiguration?.[
                                        "enableAutomaticUpdates"
                                      ],
                                  },
                              dataDisks: !p.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["dataDisks"]
                                ? p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.["dataDisks"]
                                : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                    "dataDisks"
                                  ].map((p) => ({
                                    lun: p["lun"],
                                    caching: p["caching"],
                                    diskSizeGB: p["diskSizeGB"],
                                    storageAccountType: p["storageAccountType"],
                                  })),
                              licenseType:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.[
                                  "licenseType"
                                ],
                              containerConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.containerConfiguration
                                ? undefined
                                : {
                                    type: p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.["type"],
                                    containerImageNames:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.[
                                        "containerImageNames"
                                      ],
                                    containerRegistries: !p.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration?.[
                                      "containerRegistries"
                                    ]
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.containerConfiguration?.[
                                          "containerRegistries"
                                        ]
                                      : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
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
                              diskEncryptionConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.diskEncryptionConfiguration
                                ? undefined
                                : {
                                    targets:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.diskEncryptionConfiguration?.[
                                        "targets"
                                      ],
                                  },
                              nodePlacementConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ?.nodePlacementConfiguration
                                ? undefined
                                : {
                                    policy:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.nodePlacementConfiguration?.[
                                        "policy"
                                      ],
                                  },
                              extensions: !p.poolInfo.autoPoolSpecification
                                ?.pool?.virtualMachineConfiguration?.[
                                "extensions"
                              ]
                                ? p.poolInfo.autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration?.[
                                    "extensions"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
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
                              osDisk: !p.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.osDisk
                                ? undefined
                                : {
                                    ephemeralOSDiskSettings: !p.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.osDisk
                                      ?.ephemeralOSDiskSettings
                                      ? undefined
                                      : {
                                          placement:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool
                                              ?.virtualMachineConfiguration
                                              ?.osDisk
                                              ?.ephemeralOSDiskSettings?.[
                                              "placement"
                                            ],
                                        },
                                  },
                            },
                        taskSlotsPerNode:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "taskSlotsPerNode"
                          ],
                        taskSchedulingPolicy: !p.poolInfo.autoPoolSpecification
                          ?.pool?.taskSchedulingPolicy
                          ? undefined
                          : {
                              nodeFillType:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.taskSchedulingPolicy?.["nodeFillType"],
                            },
                        resizeTimeout:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "resizeTimeout"
                          ],
                        targetDedicatedNodes:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "targetDedicatedNodes"
                          ],
                        targetLowPriorityNodes:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "targetLowPriorityNodes"
                          ],
                        enableAutoScale:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "enableAutoScale"
                          ],
                        autoScaleFormula:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "autoScaleFormula"
                          ],
                        autoScaleEvaluationInterval:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "autoScaleEvaluationInterval"
                          ],
                        enableInterNodeCommunication:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "enableInterNodeCommunication"
                          ],
                        networkConfiguration: !p.poolInfo.autoPoolSpecification
                          ?.pool?.networkConfiguration
                          ? undefined
                          : {
                              subnetId:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration?.["subnetId"],
                              dynamicVNetAssignmentScope:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration?.[
                                  "dynamicVNetAssignmentScope"
                                ],
                              endpointConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.networkConfiguration?.endpointConfiguration
                                ? undefined
                                : {
                                    inboundNATPools:
                                      p.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
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
                              publicIPAddressConfiguration: !p.poolInfo
                                .autoPoolSpecification?.pool
                                ?.networkConfiguration
                                ?.publicIPAddressConfiguration
                                ? undefined
                                : {
                                    provision:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.networkConfiguration
                                        ?.publicIPAddressConfiguration?.[
                                        "provision"
                                      ],
                                    ipAddressIds:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.networkConfiguration
                                        ?.publicIPAddressConfiguration?.[
                                        "ipAddressIds"
                                      ],
                                  },
                              enableAcceleratedNetworking:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration?.[
                                  "enableAcceleratedNetworking"
                                ],
                            },
                        startTask: !p.poolInfo.autoPoolSpecification?.pool
                          ?.startTask
                          ? undefined
                          : {
                              commandLine:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["commandLine"],
                              containerSettings: !p.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.containerSettings
                                ? undefined
                                : {
                                    containerRunOptions:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.startTask?.containerSettings?.[
                                        "containerRunOptions"
                                      ],
                                    imageName:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.startTask?.containerSettings?.[
                                        "imageName"
                                      ],
                                    registry: !p.poolInfo.autoPoolSpecification
                                      ?.pool?.startTask?.containerSettings
                                      ?.registry
                                      ? undefined
                                      : {
                                          username:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask
                                              ?.containerSettings?.registry?.[
                                              "username"
                                            ],
                                          password:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask
                                              ?.containerSettings?.registry?.[
                                              "password"
                                            ],
                                          registryServer:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask
                                              ?.containerSettings?.registry?.[
                                              "registryServer"
                                            ],
                                          identityReference: !p.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings
                                            ?.registry?.identityReference
                                            ? undefined
                                            : {
                                                resourceId:
                                                  p.poolInfo
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
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.startTask?.containerSettings?.[
                                        "workingDirectory"
                                      ],
                                  },
                              resourceFiles: !p.poolInfo.autoPoolSpecification
                                ?.pool?.startTask?.["resourceFiles"]
                                ? p.poolInfo.autoPoolSpecification?.pool
                                    ?.startTask?.["resourceFiles"]
                                : p.poolInfo.autoPoolSpecification?.pool?.startTask?.[
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
                              environmentSettings: !p.poolInfo
                                .autoPoolSpecification?.pool?.startTask?.[
                                "environmentSettings"
                              ]
                                ? p.poolInfo.autoPoolSpecification?.pool
                                    ?.startTask?.["environmentSettings"]
                                : p.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                    "environmentSettings"
                                  ].map((p) => ({
                                    name: p["name"],
                                    value: p["value"],
                                  })),
                              userIdentity: !p.poolInfo.autoPoolSpecification
                                ?.pool?.startTask?.userIdentity
                                ? undefined
                                : {
                                    username:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.startTask?.userIdentity?.["username"],
                                    autoUser: !p.poolInfo.autoPoolSpecification
                                      ?.pool?.startTask?.userIdentity?.autoUser
                                      ? undefined
                                      : {
                                          scope:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask?.userIdentity
                                              ?.autoUser?.["scope"],
                                          elevationLevel:
                                            p.poolInfo.autoPoolSpecification
                                              ?.pool?.startTask?.userIdentity
                                              ?.autoUser?.["elevationLevel"],
                                        },
                                  },
                              maxTaskRetryCount:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["maxTaskRetryCount"],
                              waitForSuccess:
                                p.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.["waitForSuccess"],
                            },
                        certificateReferences: !p.poolInfo.autoPoolSpecification
                          ?.pool?.["certificateReferences"]
                          ? p.poolInfo.autoPoolSpecification?.pool?.[
                              "certificateReferences"
                            ]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
                              "certificateReferences"
                            ].map((p) => ({
                              thumbprint: p["thumbprint"],
                              thumbprintAlgorithm: p["thumbprintAlgorithm"],
                              storeLocation: p["storeLocation"],
                              storeName: p["storeName"],
                              visibility: p["visibility"],
                            })),
                        applicationPackageReferences: !p.poolInfo
                          .autoPoolSpecification?.pool?.[
                          "applicationPackageReferences"
                        ]
                          ? p.poolInfo.autoPoolSpecification?.pool?.[
                              "applicationPackageReferences"
                            ]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
                              "applicationPackageReferences"
                            ].map((p) => ({
                              applicationId: p["applicationId"],
                              version: p["version"],
                            })),
                        applicationLicenses:
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "applicationLicenses"
                          ],
                        userAccounts: !p.poolInfo.autoPoolSpecification?.pool?.[
                          "userAccounts"
                        ]
                          ? p.poolInfo.autoPoolSpecification?.pool?.[
                              "userAccounts"
                            ]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
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
                        metadata: !p.poolInfo.autoPoolSpecification?.pool?.[
                          "metadata"
                        ]
                          ? p.poolInfo.autoPoolSpecification?.pool?.["metadata"]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
                              "metadata"
                            ].map((p) => ({
                              name: p["name"],
                              value: p["value"],
                            })),
                        mountConfiguration: !p.poolInfo.autoPoolSpecification
                          ?.pool?.["mountConfiguration"]
                          ? p.poolInfo.autoPoolSpecification?.pool?.[
                              "mountConfiguration"
                            ]
                          : p.poolInfo.autoPoolSpecification?.pool?.[
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
                          p.poolInfo.autoPoolSpecification?.pool?.[
                            "targetNodeCommunicationMode"
                          ],
                      },
                },
          },
          onAllTasksComplete: p["onAllTasksComplete"],
          onTaskFailure: p["onTaskFailure"],
          networkConfiguration: !p.networkConfiguration
            ? undefined
            : { subnetId: p.networkConfiguration?.["subnetId"] },
          metadata: !p["metadata"]
            ? p["metadata"]
            : p["metadata"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          executionInfo: !p.executionInfo
            ? undefined
            : {
                startTime: new Date(p.executionInfo?.["startTime"]),
                endTime:
                  p.executionInfo?.["endTime"] !== undefined
                    ? new Date(p.executionInfo?.["endTime"])
                    : undefined,
                poolId: p.executionInfo?.["poolId"],
                schedulingError: !p.executionInfo?.schedulingError
                  ? undefined
                  : {
                      category: p.executionInfo?.schedulingError?.["category"],
                      code: p.executionInfo?.schedulingError?.["code"],
                      message: p.executionInfo?.schedulingError?.["message"],
                      details: !p.executionInfo?.schedulingError?.["details"]
                        ? p.executionInfo?.schedulingError?.["details"]
                        : p.executionInfo?.schedulingError?.["details"].map(
                            (p) => ({ name: p["name"], value: p["value"] }),
                          ),
                    },
                terminateReason: p.executionInfo?.["terminateReason"],
              },
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

/** Lists the Jobs that have been created under the specified Job Schedule. */
export function listJobsFromSchedule(
  context: Client,
  jobScheduleId: string,
  options: JobsListJobsFromScheduleOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJob> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobsFromScheduleSend(context, jobScheduleId, options),
    _listJobsFromScheduleDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listJobPreparationAndReleaseTaskStatusSend(
  context: Client,
  jobId: string,
  options: JobsListJobPreparationAndReleaseTaskStatusOptions = {
    requestOptions: {},
  },
): StreamableMethod<
  | ListJobPreparationAndReleaseTaskStatus200Response
  | ListJobPreparationAndReleaseTaskStatusDefaultResponse
> {
  return context
    .path("/jobs/{jobId}/jobpreparationandreleasetaskstatus", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $filter: options?.$filter,
        $select: options?.$select,
      },
    });
}

export async function _listJobPreparationAndReleaseTaskStatusDeserialize(
  result:
    | ListJobPreparationAndReleaseTaskStatus200Response
    | ListJobPreparationAndReleaseTaskStatusDefaultResponse,
): Promise<BatchJobListPreparationAndReleaseTaskStatusResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          poolId: p["poolId"],
          nodeId: p["nodeId"],
          nodeUrl: p["nodeUrl"],
          jobPreparationTaskExecutionInfo: !p.jobPreparationTaskExecutionInfo
            ? undefined
            : {
                startTime: new Date(
                  p.jobPreparationTaskExecutionInfo?.["startTime"],
                ),
                endTime:
                  p.jobPreparationTaskExecutionInfo?.["endTime"] !== undefined
                    ? new Date(p.jobPreparationTaskExecutionInfo?.["endTime"])
                    : undefined,
                state: p.jobPreparationTaskExecutionInfo?.["state"],
                taskRootDirectory:
                  p.jobPreparationTaskExecutionInfo?.["taskRootDirectory"],
                taskRootDirectoryUrl:
                  p.jobPreparationTaskExecutionInfo?.["taskRootDirectoryUrl"],
                exitCode: p.jobPreparationTaskExecutionInfo?.["exitCode"],
                containerInfo: !p.jobPreparationTaskExecutionInfo?.containerInfo
                  ? undefined
                  : {
                      containerId:
                        p.jobPreparationTaskExecutionInfo?.containerInfo?.[
                          "containerId"
                        ],
                      state:
                        p.jobPreparationTaskExecutionInfo?.containerInfo?.[
                          "state"
                        ],
                      error:
                        p.jobPreparationTaskExecutionInfo?.containerInfo?.[
                          "error"
                        ],
                    },
                failureInfo: !p.jobPreparationTaskExecutionInfo?.failureInfo
                  ? undefined
                  : {
                      category:
                        p.jobPreparationTaskExecutionInfo?.failureInfo?.[
                          "category"
                        ],
                      code: p.jobPreparationTaskExecutionInfo?.failureInfo?.[
                        "code"
                      ],
                      message:
                        p.jobPreparationTaskExecutionInfo?.failureInfo?.[
                          "message"
                        ],
                      details: !p.jobPreparationTaskExecutionInfo
                        ?.failureInfo?.["details"]
                        ? p.jobPreparationTaskExecutionInfo?.failureInfo?.[
                            "details"
                          ]
                        : p.jobPreparationTaskExecutionInfo?.failureInfo?.[
                            "details"
                          ].map((p) => ({
                            name: p["name"],
                            value: p["value"],
                          })),
                    },
                retryCount: p.jobPreparationTaskExecutionInfo?.["retryCount"],
                lastRetryTime:
                  p.jobPreparationTaskExecutionInfo?.["lastRetryTime"] !==
                  undefined
                    ? new Date(
                        p.jobPreparationTaskExecutionInfo?.["lastRetryTime"],
                      )
                    : undefined,
                result: p.jobPreparationTaskExecutionInfo?.["result"],
              },
          jobReleaseTaskExecutionInfo: !p.jobReleaseTaskExecutionInfo
            ? undefined
            : {
                startTime: new Date(
                  p.jobReleaseTaskExecutionInfo?.["startTime"],
                ),
                endTime:
                  p.jobReleaseTaskExecutionInfo?.["endTime"] !== undefined
                    ? new Date(p.jobReleaseTaskExecutionInfo?.["endTime"])
                    : undefined,
                state: p.jobReleaseTaskExecutionInfo?.["state"],
                taskRootDirectory:
                  p.jobReleaseTaskExecutionInfo?.["taskRootDirectory"],
                taskRootDirectoryUrl:
                  p.jobReleaseTaskExecutionInfo?.["taskRootDirectoryUrl"],
                exitCode: p.jobReleaseTaskExecutionInfo?.["exitCode"],
                containerInfo: !p.jobReleaseTaskExecutionInfo?.containerInfo
                  ? undefined
                  : {
                      containerId:
                        p.jobReleaseTaskExecutionInfo?.containerInfo?.[
                          "containerId"
                        ],
                      state:
                        p.jobReleaseTaskExecutionInfo?.containerInfo?.["state"],
                      error:
                        p.jobReleaseTaskExecutionInfo?.containerInfo?.["error"],
                    },
                failureInfo: !p.jobReleaseTaskExecutionInfo?.failureInfo
                  ? undefined
                  : {
                      category:
                        p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                          "category"
                        ],
                      code: p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                        "code"
                      ],
                      message:
                        p.jobReleaseTaskExecutionInfo?.failureInfo?.["message"],
                      details: !p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                        "details"
                      ]
                        ? p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                            "details"
                          ]
                        : p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                            "details"
                          ].map((p) => ({
                            name: p["name"],
                            value: p["value"],
                          })),
                    },
                result: p.jobReleaseTaskExecutionInfo?.["result"],
              },
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/**
 * This API returns the Job Preparation and Job Release Task status on all Compute
 * Nodes that have run the Job Preparation or Job Release Task. This includes
 * Compute Nodes which have since been removed from the Pool. If this API is
 * invoked on a Job which has no Job Preparation or Job Release Task, the Batch
 * service returns HTTP status code 409 (Conflict) with an error code of
 * JobPreparationTaskNotSpecified.
 */
export function listJobPreparationAndReleaseTaskStatus(
  context: Client,
  jobId: string,
  options: JobsListJobPreparationAndReleaseTaskStatusOptions = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobPreparationAndReleaseTaskStatusSend(context, jobId, options),
    _listJobPreparationAndReleaseTaskStatusDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _getJobTaskCountsSend(
  context: Client,
  jobId: string,
  options: JobsGetJobTaskCountsOptions = { requestOptions: {} },
): StreamableMethod<
  GetJobTaskCounts200Response | GetJobTaskCountsDefaultResponse
> {
  return context
    .path("/jobs/{jobId}/taskcounts", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _getJobTaskCountsDeserialize(
  result: GetJobTaskCounts200Response | GetJobTaskCountsDefaultResponse,
): Promise<TaskCountsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    taskCounts: {
      active: result.body.taskCounts["active"],
      running: result.body.taskCounts["running"],
      completed: result.body.taskCounts["completed"],
      succeeded: result.body.taskCounts["succeeded"],
      failed: result.body.taskCounts["failed"],
    },
    taskSlotCounts: {
      active: result.body.taskSlotCounts["active"],
      running: result.body.taskSlotCounts["running"],
      completed: result.body.taskSlotCounts["completed"],
      succeeded: result.body.taskSlotCounts["succeeded"],
      failed: result.body.taskSlotCounts["failed"],
    },
  };
}

/**
 * Task counts provide a count of the Tasks by active, running or completed Task
 * state, and a count of Tasks which succeeded or failed. Tasks in the preparing
 * state are counted as running. Note that the numbers returned may not always be
 * up to date. If you need exact task counts, use a list query.
 */
export async function getJobTaskCounts(
  context: Client,
  jobId: string,
  options: JobsGetJobTaskCountsOptions = { requestOptions: {} },
): Promise<TaskCountsResult> {
  const result = await _getJobTaskCountsSend(context, jobId, options);
  return _getJobTaskCountsDeserialize(result);
}
