// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BatchTaskCreateOptions,
  BatchTaskListResult,
  BatchTask,
  BatchTaskCollection,
  TaskAddCollectionResult,
  BatchTaskListSubtasksResult,
  NodeFileListResult,
  NodeFile,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  BatchContext as Client,
  CreateTask201Response,
  CreateTaskCollection200Response,
  CreateTaskCollectionDefaultResponse,
  CreateTaskDefaultResponse,
  DeleteTask200Response,
  DeleteTaskDefaultResponse,
  DeleteTaskFile200Response,
  DeleteTaskFileDefaultResponse,
  GetTask200Response,
  GetTaskDefaultResponse,
  GetTaskFile200Response,
  GetTaskFileDefaultResponse,
  GetTaskFileProperties200Response,
  GetTaskFilePropertiesDefaultResponse,
  ListSubTasks200Response,
  ListSubTasksDefaultResponse,
  ListTaskFiles200Response,
  ListTaskFilesDefaultResponse,
  ListTasks200Response,
  ListTasksDefaultResponse,
  ReactivateTask204Response,
  ReactivateTaskDefaultResponse,
  ReplaceTask200Response,
  ReplaceTaskDefaultResponse,
  TerminateTask204Response,
  TerminateTaskDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  TasksCreateTaskOptions,
  TasksListTasksOptions,
  TasksCreateTaskCollectionOptions,
  TasksDeleteTaskOptions,
  TasksGetTaskOptions,
  TasksReplaceTaskOptions,
  TasksListSubTasksOptions,
  TasksTerminateTaskOptions,
  TasksReactivateTaskOptions,
  TasksDeleteTaskFileOptions,
  TasksGetTaskFileOptions,
  TasksGetTaskFilePropertiesOptions,
  TasksListTaskFilesOptions,
} from "../../models/options.js";

export function _createTaskSend(
  context: Client,
  jobId: string,
  body: BatchTaskCreateOptions,
  options: TasksCreateTaskOptions = { requestOptions: {} },
): StreamableMethod<CreateTask201Response | CreateTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: {
        id: body["id"],
        displayName: body["displayName"],
        exitConditions: !body.exitConditions
          ? undefined
          : {
              exitCodes: !body.exitConditions?.["exitCodes"]
                ? body.exitConditions?.["exitCodes"]
                : body.exitConditions?.["exitCodes"].map((p) => ({
                    code: p["code"],
                    exitOptions: {
                      jobAction: p.exitOptions["jobAction"],
                      dependencyAction: p.exitOptions["dependencyAction"],
                    },
                  })),
              exitCodeRanges: !body.exitConditions?.["exitCodeRanges"]
                ? body.exitConditions?.["exitCodeRanges"]
                : body.exitConditions?.["exitCodeRanges"].map((p) => ({
                    start: p["start"],
                    end: p["end"],
                    exitOptions: {
                      jobAction: p.exitOptions["jobAction"],
                      dependencyAction: p.exitOptions["dependencyAction"],
                    },
                  })),
              preProcessingError: !body.exitConditions?.preProcessingError
                ? undefined
                : {
                    jobAction:
                      body.exitConditions?.preProcessingError?.["jobAction"],
                    dependencyAction:
                      body.exitConditions?.preProcessingError?.[
                        "dependencyAction"
                      ],
                  },
              fileUploadError: !body.exitConditions?.fileUploadError
                ? undefined
                : {
                    jobAction:
                      body.exitConditions?.fileUploadError?.["jobAction"],
                    dependencyAction:
                      body.exitConditions?.fileUploadError?.[
                        "dependencyAction"
                      ],
                  },
              default: !body.exitConditions?.default
                ? undefined
                : {
                    jobAction: body.exitConditions?.default?.["jobAction"],
                    dependencyAction:
                      body.exitConditions?.default?.["dependencyAction"],
                  },
            },
        commandLine: body["commandLine"],
        containerSettings: !body.containerSettings
          ? undefined
          : {
              containerRunOptions:
                body.containerSettings?.["containerRunOptions"],
              imageName: body.containerSettings?.["imageName"],
              registry: !body.containerSettings?.registry
                ? undefined
                : {
                    username: body.containerSettings?.registry?.["username"],
                    password: body.containerSettings?.registry?.["password"],
                    registryServer:
                      body.containerSettings?.registry?.["registryServer"],
                    identityReference: !body.containerSettings?.registry
                      ?.identityReference
                      ? undefined
                      : {
                          resourceId:
                            body.containerSettings?.registry
                              ?.identityReference?.["resourceId"],
                        },
                  },
              workingDirectory: body.containerSettings?.["workingDirectory"],
            },
        resourceFiles: !body["resourceFiles"]
          ? body["resourceFiles"]
          : body["resourceFiles"].map((p) => ({
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
        outputFiles: !body["outputFiles"]
          ? body["outputFiles"]
          : body["outputFiles"].map((p) => ({
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
                      uploadHeaders: !p.destination.container?.["uploadHeaders"]
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
        environmentSettings: !body["environmentSettings"]
          ? body["environmentSettings"]
          : body["environmentSettings"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
        affinityInfo: !body.affinityInfo
          ? undefined
          : { affinityId: body.affinityInfo?.["affinityId"] },
        constraints: !body.constraints
          ? undefined
          : {
              maxWallClockTime: body.constraints?.["maxWallClockTime"],
              retentionTime: body.constraints?.["retentionTime"],
              maxTaskRetryCount: body.constraints?.["maxTaskRetryCount"],
            },
        requiredSlots: body["requiredSlots"],
        userIdentity: !body.userIdentity
          ? undefined
          : {
              username: body.userIdentity?.["username"],
              autoUser: !body.userIdentity?.autoUser
                ? undefined
                : {
                    scope: body.userIdentity?.autoUser?.["scope"],
                    elevationLevel:
                      body.userIdentity?.autoUser?.["elevationLevel"],
                  },
            },
        multiInstanceSettings: !body.multiInstanceSettings
          ? undefined
          : {
              numberOfInstances:
                body.multiInstanceSettings?.["numberOfInstances"],
              coordinationCommandLine:
                body.multiInstanceSettings?.["coordinationCommandLine"],
              commonResourceFiles: !body.multiInstanceSettings?.[
                "commonResourceFiles"
              ]
                ? body.multiInstanceSettings?.["commonResourceFiles"]
                : body.multiInstanceSettings?.["commonResourceFiles"].map(
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
            },
        dependsOn: !body.dependsOn
          ? undefined
          : {
              taskIds: body.dependsOn?.["taskIds"],
              taskIdRanges: !body.dependsOn?.["taskIdRanges"]
                ? body.dependsOn?.["taskIdRanges"]
                : body.dependsOn?.["taskIdRanges"].map((p) => ({
                    start: p["start"],
                    end: p["end"],
                  })),
            },
        applicationPackageReferences: !body["applicationPackageReferences"]
          ? body["applicationPackageReferences"]
          : body["applicationPackageReferences"].map((p) => ({
              applicationId: p["applicationId"],
              version: p["version"],
            })),
        authenticationTokenSettings: !body.authenticationTokenSettings
          ? undefined
          : { access: body.authenticationTokenSettings?.["access"] },
      },
    });
}

export async function _createTaskDeserialize(
  result: CreateTask201Response | CreateTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * The maximum lifetime of a Task from addition to completion is 180 days. If a
 * Task has not completed within 180 days of being added it will be terminated by
 * the Batch service and left in whatever state it was in at that time.
 */
export async function createTask(
  context: Client,
  jobId: string,
  body: BatchTaskCreateOptions,
  options: TasksCreateTaskOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _createTaskSend(context, jobId, body, options);
  return _createTaskDeserialize(result);
}

export function _listTasksSend(
  context: Client,
  jobId: string,
  options: TasksListTasksOptions = { requestOptions: {} },
): StreamableMethod<ListTasks200Response | ListTasksDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks", jobId)
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

export async function _listTasksDeserialize(
  result: ListTasks200Response | ListTasksDefaultResponse,
): Promise<BatchTaskListResult> {
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
          exitConditions: !p.exitConditions
            ? undefined
            : {
                exitCodes: !p.exitConditions?.["exitCodes"]
                  ? p.exitConditions?.["exitCodes"]
                  : p.exitConditions?.["exitCodes"].map((p) => ({
                      code: p["code"],
                      exitOptions: {
                        jobAction: p.exitOptions["jobAction"],
                        dependencyAction: p.exitOptions["dependencyAction"],
                      },
                    })),
                exitCodeRanges: !p.exitConditions?.["exitCodeRanges"]
                  ? p.exitConditions?.["exitCodeRanges"]
                  : p.exitConditions?.["exitCodeRanges"].map((p) => ({
                      start: p["start"],
                      end: p["end"],
                      exitOptions: {
                        jobAction: p.exitOptions["jobAction"],
                        dependencyAction: p.exitOptions["dependencyAction"],
                      },
                    })),
                preProcessingError: !p.exitConditions?.preProcessingError
                  ? undefined
                  : {
                      jobAction:
                        p.exitConditions?.preProcessingError?.["jobAction"],
                      dependencyAction:
                        p.exitConditions?.preProcessingError?.[
                          "dependencyAction"
                        ],
                    },
                fileUploadError: !p.exitConditions?.fileUploadError
                  ? undefined
                  : {
                      jobAction:
                        p.exitConditions?.fileUploadError?.["jobAction"],
                      dependencyAction:
                        p.exitConditions?.fileUploadError?.["dependencyAction"],
                    },
                default: !p.exitConditions?.default
                  ? undefined
                  : {
                      jobAction: p.exitConditions?.default?.["jobAction"],
                      dependencyAction:
                        p.exitConditions?.default?.["dependencyAction"],
                    },
              },
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
          commandLine: p["commandLine"],
          containerSettings: !p.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  p.containerSettings?.["containerRunOptions"],
                imageName: p.containerSettings?.["imageName"],
                registry: !p.containerSettings?.registry
                  ? undefined
                  : {
                      username: p.containerSettings?.registry?.["username"],
                      password: p.containerSettings?.registry?.["password"],
                      registryServer:
                        p.containerSettings?.registry?.["registryServer"],
                      identityReference: !p.containerSettings?.registry
                        ?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              p.containerSettings?.registry
                                ?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory: p.containerSettings?.["workingDirectory"],
              },
          resourceFiles: !p["resourceFiles"]
            ? p["resourceFiles"]
            : p["resourceFiles"].map((p) => ({
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
          outputFiles: !p["outputFiles"]
            ? p["outputFiles"]
            : p["outputFiles"].map((p) => ({
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
          environmentSettings: !p["environmentSettings"]
            ? p["environmentSettings"]
            : p["environmentSettings"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          affinityInfo: !p.affinityInfo
            ? undefined
            : { affinityId: p.affinityInfo?.["affinityId"] },
          constraints: !p.constraints
            ? undefined
            : {
                maxWallClockTime: p.constraints?.["maxWallClockTime"],
                retentionTime: p.constraints?.["retentionTime"],
                maxTaskRetryCount: p.constraints?.["maxTaskRetryCount"],
              },
          requiredSlots: p["requiredSlots"],
          userIdentity: !p.userIdentity
            ? undefined
            : {
                username: p.userIdentity?.["username"],
                autoUser: !p.userIdentity?.autoUser
                  ? undefined
                  : {
                      scope: p.userIdentity?.autoUser?.["scope"],
                      elevationLevel:
                        p.userIdentity?.autoUser?.["elevationLevel"],
                    },
              },
          executionInfo: !p.executionInfo
            ? undefined
            : {
                startTime:
                  p.executionInfo?.["startTime"] !== undefined
                    ? new Date(p.executionInfo?.["startTime"])
                    : undefined,
                endTime:
                  p.executionInfo?.["endTime"] !== undefined
                    ? new Date(p.executionInfo?.["endTime"])
                    : undefined,
                exitCode: p.executionInfo?.["exitCode"],
                containerInfo: !p.executionInfo?.containerInfo
                  ? undefined
                  : {
                      containerId:
                        p.executionInfo?.containerInfo?.["containerId"],
                      state: p.executionInfo?.containerInfo?.["state"],
                      error: p.executionInfo?.containerInfo?.["error"],
                    },
                failureInfo: !p.executionInfo?.failureInfo
                  ? undefined
                  : {
                      category: p.executionInfo?.failureInfo?.["category"],
                      code: p.executionInfo?.failureInfo?.["code"],
                      message: p.executionInfo?.failureInfo?.["message"],
                      details: !p.executionInfo?.failureInfo?.["details"]
                        ? p.executionInfo?.failureInfo?.["details"]
                        : p.executionInfo?.failureInfo?.["details"].map(
                            (p) => ({ name: p["name"], value: p["value"] }),
                          ),
                    },
                retryCount: p.executionInfo?.["retryCount"],
                lastRetryTime:
                  p.executionInfo?.["lastRetryTime"] !== undefined
                    ? new Date(p.executionInfo?.["lastRetryTime"])
                    : undefined,
                requeueCount: p.executionInfo?.["requeueCount"],
                lastRequeueTime:
                  p.executionInfo?.["lastRequeueTime"] !== undefined
                    ? new Date(p.executionInfo?.["lastRequeueTime"])
                    : undefined,
                result: p.executionInfo?.["result"],
              },
          nodeInfo: !p.nodeInfo
            ? undefined
            : {
                affinityId: p.nodeInfo?.["affinityId"],
                nodeUrl: p.nodeInfo?.["nodeUrl"],
                poolId: p.nodeInfo?.["poolId"],
                nodeId: p.nodeInfo?.["nodeId"],
                taskRootDirectory: p.nodeInfo?.["taskRootDirectory"],
                taskRootDirectoryUrl: p.nodeInfo?.["taskRootDirectoryUrl"],
              },
          multiInstanceSettings: !p.multiInstanceSettings
            ? undefined
            : {
                numberOfInstances:
                  p.multiInstanceSettings?.["numberOfInstances"],
                coordinationCommandLine:
                  p.multiInstanceSettings?.["coordinationCommandLine"],
                commonResourceFiles: !p.multiInstanceSettings?.[
                  "commonResourceFiles"
                ]
                  ? p.multiInstanceSettings?.["commonResourceFiles"]
                  : p.multiInstanceSettings?.["commonResourceFiles"].map(
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
                waitTime: p.stats?.["waitTime"],
              },
          dependsOn: !p.dependsOn
            ? undefined
            : {
                taskIds: p.dependsOn?.["taskIds"],
                taskIdRanges: !p.dependsOn?.["taskIdRanges"]
                  ? p.dependsOn?.["taskIdRanges"]
                  : p.dependsOn?.["taskIdRanges"].map((p) => ({
                      start: p["start"],
                      end: p["end"],
                    })),
              },
          applicationPackageReferences: !p["applicationPackageReferences"]
            ? p["applicationPackageReferences"]
            : p["applicationPackageReferences"].map((p) => ({
                applicationId: p["applicationId"],
                version: p["version"],
              })),
          authenticationTokenSettings: !p.authenticationTokenSettings
            ? undefined
            : { access: p.authenticationTokenSettings?.["access"] },
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/**
 * For multi-instance Tasks, information such as affinityId, executionInfo and
 * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
 * information about subtasks.
 */
export function listTasks(
  context: Client,
  jobId: string,
  options: TasksListTasksOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchTask> {
  return buildPagedAsyncIterator(
    context,
    () => _listTasksSend(context, jobId, options),
    _listTasksDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createTaskCollectionSend(
  context: Client,
  jobId: string,
  collection: BatchTaskCollection,
  options: TasksCreateTaskCollectionOptions = { requestOptions: {} },
): StreamableMethod<
  CreateTaskCollection200Response | CreateTaskCollectionDefaultResponse
> {
  return context
    .path("/jobs/{jobId}/addtaskcollection", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: {
        value: collection["value"].map((p) => ({
          id: p["id"],
          displayName: p["displayName"],
          exitConditions: !p.exitConditions
            ? undefined
            : {
                exitCodes: !p.exitConditions?.["exitCodes"]
                  ? p.exitConditions?.["exitCodes"]
                  : p.exitConditions?.["exitCodes"].map((p) => ({
                      code: p["code"],
                      exitOptions: {
                        jobAction: p.exitOptions["jobAction"],
                        dependencyAction: p.exitOptions["dependencyAction"],
                      },
                    })),
                exitCodeRanges: !p.exitConditions?.["exitCodeRanges"]
                  ? p.exitConditions?.["exitCodeRanges"]
                  : p.exitConditions?.["exitCodeRanges"].map((p) => ({
                      start: p["start"],
                      end: p["end"],
                      exitOptions: {
                        jobAction: p.exitOptions["jobAction"],
                        dependencyAction: p.exitOptions["dependencyAction"],
                      },
                    })),
                preProcessingError: !p.exitConditions?.preProcessingError
                  ? undefined
                  : {
                      jobAction:
                        p.exitConditions?.preProcessingError?.["jobAction"],
                      dependencyAction:
                        p.exitConditions?.preProcessingError?.[
                          "dependencyAction"
                        ],
                    },
                fileUploadError: !p.exitConditions?.fileUploadError
                  ? undefined
                  : {
                      jobAction:
                        p.exitConditions?.fileUploadError?.["jobAction"],
                      dependencyAction:
                        p.exitConditions?.fileUploadError?.["dependencyAction"],
                    },
                default: !p.exitConditions?.default
                  ? undefined
                  : {
                      jobAction: p.exitConditions?.default?.["jobAction"],
                      dependencyAction:
                        p.exitConditions?.default?.["dependencyAction"],
                    },
              },
          commandLine: p["commandLine"],
          containerSettings: !p.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  p.containerSettings?.["containerRunOptions"],
                imageName: p.containerSettings?.["imageName"],
                registry: !p.containerSettings?.registry
                  ? undefined
                  : {
                      username: p.containerSettings?.registry?.["username"],
                      password: p.containerSettings?.registry?.["password"],
                      registryServer:
                        p.containerSettings?.registry?.["registryServer"],
                      identityReference: !p.containerSettings?.registry
                        ?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              p.containerSettings?.registry
                                ?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory: p.containerSettings?.["workingDirectory"],
              },
          resourceFiles: !p["resourceFiles"]
            ? p["resourceFiles"]
            : p["resourceFiles"].map((p) => ({
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
          outputFiles: !p["outputFiles"]
            ? p["outputFiles"]
            : p["outputFiles"].map((p) => ({
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
          environmentSettings: !p["environmentSettings"]
            ? p["environmentSettings"]
            : p["environmentSettings"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          affinityInfo: !p.affinityInfo
            ? undefined
            : { affinityId: p.affinityInfo?.["affinityId"] },
          constraints: !p.constraints
            ? undefined
            : {
                maxWallClockTime: p.constraints?.["maxWallClockTime"],
                retentionTime: p.constraints?.["retentionTime"],
                maxTaskRetryCount: p.constraints?.["maxTaskRetryCount"],
              },
          requiredSlots: p["requiredSlots"],
          userIdentity: !p.userIdentity
            ? undefined
            : {
                username: p.userIdentity?.["username"],
                autoUser: !p.userIdentity?.autoUser
                  ? undefined
                  : {
                      scope: p.userIdentity?.autoUser?.["scope"],
                      elevationLevel:
                        p.userIdentity?.autoUser?.["elevationLevel"],
                    },
              },
          multiInstanceSettings: !p.multiInstanceSettings
            ? undefined
            : {
                numberOfInstances:
                  p.multiInstanceSettings?.["numberOfInstances"],
                coordinationCommandLine:
                  p.multiInstanceSettings?.["coordinationCommandLine"],
                commonResourceFiles: !p.multiInstanceSettings?.[
                  "commonResourceFiles"
                ]
                  ? p.multiInstanceSettings?.["commonResourceFiles"]
                  : p.multiInstanceSettings?.["commonResourceFiles"].map(
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
              },
          dependsOn: !p.dependsOn
            ? undefined
            : {
                taskIds: p.dependsOn?.["taskIds"],
                taskIdRanges: !p.dependsOn?.["taskIdRanges"]
                  ? p.dependsOn?.["taskIdRanges"]
                  : p.dependsOn?.["taskIdRanges"].map((p) => ({
                      start: p["start"],
                      end: p["end"],
                    })),
              },
          applicationPackageReferences: !p["applicationPackageReferences"]
            ? p["applicationPackageReferences"]
            : p["applicationPackageReferences"].map((p) => ({
                applicationId: p["applicationId"],
                version: p["version"],
              })),
          authenticationTokenSettings: !p.authenticationTokenSettings
            ? undefined
            : { access: p.authenticationTokenSettings?.["access"] },
        })),
      },
    });
}

export async function _createTaskCollectionDeserialize(
  result: CreateTaskCollection200Response | CreateTaskCollectionDefaultResponse,
): Promise<TaskAddCollectionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          status: p["status"],
          taskId: p["taskId"],
          eTag: p["eTag"],
          lastModified:
            p["lastModified"] !== undefined
              ? new Date(p["lastModified"])
              : undefined,
          location: p["location"],
          error: !p.error
            ? undefined
            : {
                code: p.error?.["code"],
                message: !p.error?.message
                  ? undefined
                  : {
                      lang: p.error?.message?.["lang"],
                      value: p.error?.message?.["value"],
                    },
                values: !p.error?.["values"]
                  ? p.error?.["values"]
                  : p.error?.["values"].map((p) => ({
                      key: p["key"],
                      value: p["value"],
                    })),
              },
        })),
  };
}

/**
 * Note that each Task must have a unique ID. The Batch service may not return the
 * results for each Task in the same order the Tasks were submitted in this
 * request. If the server times out or the connection is closed during the
 * request, the request may have been partially or fully processed, or not at all.
 * In such cases, the user should re-issue the request. Note that it is up to the
 * user to correctly handle failures when re-issuing a request. For example, you
 * should use the same Task IDs during a retry so that if the prior operation
 * succeeded, the retry will not create extra Tasks unexpectedly. If the response
 * contains any Tasks which failed to add, a client can retry the request. In a
 * retry, it is most efficient to resubmit only Tasks that failed to add, and to
 * omit Tasks that were successfully added on the first attempt. The maximum
 * lifetime of a Task from addition to completion is 180 days. If a Task has not
 * completed within 180 days of being added it will be terminated by the Batch
 * service and left in whatever state it was in at that time.
 */
export async function createTaskCollection(
  context: Client,
  jobId: string,
  collection: BatchTaskCollection,
  options: TasksCreateTaskCollectionOptions = { requestOptions: {} },
): Promise<TaskAddCollectionResult> {
  const result = await _createTaskCollectionSend(
    context,
    jobId,
    collection,
    options,
  );
  return _createTaskCollectionDeserialize(result);
}

export function _deleteTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksDeleteTaskOptions = { requestOptions: {} },
): StreamableMethod<DeleteTask200Response | DeleteTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
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

export async function _deleteTaskDeserialize(
  result: DeleteTask200Response | DeleteTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When a Task is deleted, all of the files in its directory on the Compute Node
 * where it ran are also deleted (regardless of the retention time). For
 * multi-instance Tasks, the delete Task operation applies synchronously to the
 * primary task; subtasks and their files are then deleted asynchronously in the
 * background.
 */
export async function deleteTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksDeleteTaskOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTaskSend(context, jobId, taskId, options);
  return _deleteTaskDeserialize(result);
}

export function _getTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksGetTaskOptions = { requestOptions: {} },
): StreamableMethod<GetTask200Response | GetTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
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

export async function _getTaskDeserialize(
  result: GetTask200Response | GetTaskDefaultResponse,
): Promise<BatchTask> {
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
    exitConditions: !result.body.exitConditions
      ? undefined
      : {
          exitCodes: !result.body.exitConditions?.["exitCodes"]
            ? result.body.exitConditions?.["exitCodes"]
            : result.body.exitConditions?.["exitCodes"].map((p) => ({
                code: p["code"],
                exitOptions: {
                  jobAction: p.exitOptions["jobAction"],
                  dependencyAction: p.exitOptions["dependencyAction"],
                },
              })),
          exitCodeRanges: !result.body.exitConditions?.["exitCodeRanges"]
            ? result.body.exitConditions?.["exitCodeRanges"]
            : result.body.exitConditions?.["exitCodeRanges"].map((p) => ({
                start: p["start"],
                end: p["end"],
                exitOptions: {
                  jobAction: p.exitOptions["jobAction"],
                  dependencyAction: p.exitOptions["dependencyAction"],
                },
              })),
          preProcessingError: !result.body.exitConditions?.preProcessingError
            ? undefined
            : {
                jobAction:
                  result.body.exitConditions?.preProcessingError?.["jobAction"],
                dependencyAction:
                  result.body.exitConditions?.preProcessingError?.[
                    "dependencyAction"
                  ],
              },
          fileUploadError: !result.body.exitConditions?.fileUploadError
            ? undefined
            : {
                jobAction:
                  result.body.exitConditions?.fileUploadError?.["jobAction"],
                dependencyAction:
                  result.body.exitConditions?.fileUploadError?.[
                    "dependencyAction"
                  ],
              },
          default: !result.body.exitConditions?.default
            ? undefined
            : {
                jobAction: result.body.exitConditions?.default?.["jobAction"],
                dependencyAction:
                  result.body.exitConditions?.default?.["dependencyAction"],
              },
        },
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
    commandLine: result.body["commandLine"],
    containerSettings: !result.body.containerSettings
      ? undefined
      : {
          containerRunOptions:
            result.body.containerSettings?.["containerRunOptions"],
          imageName: result.body.containerSettings?.["imageName"],
          registry: !result.body.containerSettings?.registry
            ? undefined
            : {
                username: result.body.containerSettings?.registry?.["username"],
                password: result.body.containerSettings?.registry?.["password"],
                registryServer:
                  result.body.containerSettings?.registry?.["registryServer"],
                identityReference: !result.body.containerSettings?.registry
                  ?.identityReference
                  ? undefined
                  : {
                      resourceId:
                        result.body.containerSettings?.registry
                          ?.identityReference?.["resourceId"],
                    },
              },
          workingDirectory: result.body.containerSettings?.["workingDirectory"],
        },
    resourceFiles: !result.body["resourceFiles"]
      ? result.body["resourceFiles"]
      : result.body["resourceFiles"].map((p) => ({
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
    outputFiles: !result.body["outputFiles"]
      ? result.body["outputFiles"]
      : result.body["outputFiles"].map((p) => ({
          filePattern: p["filePattern"],
          destination: {
            container: !p.destination.container
              ? undefined
              : {
                  path: p.destination.container?.["path"],
                  containerUrl: p.destination.container?.["containerUrl"],
                  identityReference: !p.destination.container?.identityReference
                    ? undefined
                    : {
                        resourceId:
                          p.destination.container?.identityReference?.[
                            "resourceId"
                          ],
                      },
                  uploadHeaders: !p.destination.container?.["uploadHeaders"]
                    ? p.destination.container?.["uploadHeaders"]
                    : p.destination.container?.["uploadHeaders"].map((p) => ({
                        name: p["name"],
                        value: p["value"],
                      })),
                },
          },
          uploadOptions: {
            uploadCondition: p.uploadOptions["uploadCondition"],
          },
        })),
    environmentSettings: !result.body["environmentSettings"]
      ? result.body["environmentSettings"]
      : result.body["environmentSettings"].map((p) => ({
          name: p["name"],
          value: p["value"],
        })),
    affinityInfo: !result.body.affinityInfo
      ? undefined
      : { affinityId: result.body.affinityInfo?.["affinityId"] },
    constraints: !result.body.constraints
      ? undefined
      : {
          maxWallClockTime: result.body.constraints?.["maxWallClockTime"],
          retentionTime: result.body.constraints?.["retentionTime"],
          maxTaskRetryCount: result.body.constraints?.["maxTaskRetryCount"],
        },
    requiredSlots: result.body["requiredSlots"],
    userIdentity: !result.body.userIdentity
      ? undefined
      : {
          username: result.body.userIdentity?.["username"],
          autoUser: !result.body.userIdentity?.autoUser
            ? undefined
            : {
                scope: result.body.userIdentity?.autoUser?.["scope"],
                elevationLevel:
                  result.body.userIdentity?.autoUser?.["elevationLevel"],
              },
        },
    executionInfo: !result.body.executionInfo
      ? undefined
      : {
          startTime:
            result.body.executionInfo?.["startTime"] !== undefined
              ? new Date(result.body.executionInfo?.["startTime"])
              : undefined,
          endTime:
            result.body.executionInfo?.["endTime"] !== undefined
              ? new Date(result.body.executionInfo?.["endTime"])
              : undefined,
          exitCode: result.body.executionInfo?.["exitCode"],
          containerInfo: !result.body.executionInfo?.containerInfo
            ? undefined
            : {
                containerId:
                  result.body.executionInfo?.containerInfo?.["containerId"],
                state: result.body.executionInfo?.containerInfo?.["state"],
                error: result.body.executionInfo?.containerInfo?.["error"],
              },
          failureInfo: !result.body.executionInfo?.failureInfo
            ? undefined
            : {
                category: result.body.executionInfo?.failureInfo?.["category"],
                code: result.body.executionInfo?.failureInfo?.["code"],
                message: result.body.executionInfo?.failureInfo?.["message"],
                details: !result.body.executionInfo?.failureInfo?.["details"]
                  ? result.body.executionInfo?.failureInfo?.["details"]
                  : result.body.executionInfo?.failureInfo?.["details"].map(
                      (p) => ({ name: p["name"], value: p["value"] }),
                    ),
              },
          retryCount: result.body.executionInfo?.["retryCount"],
          lastRetryTime:
            result.body.executionInfo?.["lastRetryTime"] !== undefined
              ? new Date(result.body.executionInfo?.["lastRetryTime"])
              : undefined,
          requeueCount: result.body.executionInfo?.["requeueCount"],
          lastRequeueTime:
            result.body.executionInfo?.["lastRequeueTime"] !== undefined
              ? new Date(result.body.executionInfo?.["lastRequeueTime"])
              : undefined,
          result: result.body.executionInfo?.["result"],
        },
    nodeInfo: !result.body.nodeInfo
      ? undefined
      : {
          affinityId: result.body.nodeInfo?.["affinityId"],
          nodeUrl: result.body.nodeInfo?.["nodeUrl"],
          poolId: result.body.nodeInfo?.["poolId"],
          nodeId: result.body.nodeInfo?.["nodeId"],
          taskRootDirectory: result.body.nodeInfo?.["taskRootDirectory"],
          taskRootDirectoryUrl: result.body.nodeInfo?.["taskRootDirectoryUrl"],
        },
    multiInstanceSettings: !result.body.multiInstanceSettings
      ? undefined
      : {
          numberOfInstances:
            result.body.multiInstanceSettings?.["numberOfInstances"],
          coordinationCommandLine:
            result.body.multiInstanceSettings?.["coordinationCommandLine"],
          commonResourceFiles: !result.body.multiInstanceSettings?.[
            "commonResourceFiles"
          ]
            ? result.body.multiInstanceSettings?.["commonResourceFiles"]
            : result.body.multiInstanceSettings?.["commonResourceFiles"].map(
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
          waitTime: result.body.stats?.["waitTime"],
        },
    dependsOn: !result.body.dependsOn
      ? undefined
      : {
          taskIds: result.body.dependsOn?.["taskIds"],
          taskIdRanges: !result.body.dependsOn?.["taskIdRanges"]
            ? result.body.dependsOn?.["taskIdRanges"]
            : result.body.dependsOn?.["taskIdRanges"].map((p) => ({
                start: p["start"],
                end: p["end"],
              })),
        },
    applicationPackageReferences: !result.body["applicationPackageReferences"]
      ? result.body["applicationPackageReferences"]
      : result.body["applicationPackageReferences"].map((p) => ({
          applicationId: p["applicationId"],
          version: p["version"],
        })),
    authenticationTokenSettings: !result.body.authenticationTokenSettings
      ? undefined
      : { access: result.body.authenticationTokenSettings?.["access"] },
  };
}

/**
 * For multi-instance Tasks, information such as affinityId, executionInfo and
 * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
 * information about subtasks.
 */
export async function getTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksGetTaskOptions = { requestOptions: {} },
): Promise<BatchTask> {
  const result = await _getTaskSend(context, jobId, taskId, options);
  return _getTaskDeserialize(result);
}

export function _replaceTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  body: BatchTask,
  options: TasksReplaceTaskOptions = { requestOptions: {} },
): StreamableMethod<ReplaceTask200Response | ReplaceTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
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
        constraints: !body.constraints
          ? undefined
          : {
              maxWallClockTime: body.constraints?.["maxWallClockTime"],
              retentionTime: body.constraints?.["retentionTime"],
              maxTaskRetryCount: body.constraints?.["maxTaskRetryCount"],
            },
      },
    });
}

export async function _replaceTaskDeserialize(
  result: ReplaceTask200Response | ReplaceTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Updates the properties of the specified Task. */
export async function replaceTask(
  context: Client,
  jobId: string,
  taskId: string,
  body: BatchTask,
  options: TasksReplaceTaskOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceTaskSend(context, jobId, taskId, body, options);
  return _replaceTaskDeserialize(result);
}

export function _listSubTasksSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksListSubTasksOptions = { requestOptions: {} },
): StreamableMethod<ListSubTasks200Response | ListSubTasksDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/subtasksinfo", jobId, taskId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut, $select: options?.$select },
    });
}

export async function _listSubTasksDeserialize(
  result: ListSubTasks200Response | ListSubTasksDefaultResponse,
): Promise<BatchTaskListSubtasksResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          id: p["id"],
          nodeInfo: !p.nodeInfo
            ? undefined
            : {
                affinityId: p.nodeInfo?.["affinityId"],
                nodeUrl: p.nodeInfo?.["nodeUrl"],
                poolId: p.nodeInfo?.["poolId"],
                nodeId: p.nodeInfo?.["nodeId"],
                taskRootDirectory: p.nodeInfo?.["taskRootDirectory"],
                taskRootDirectoryUrl: p.nodeInfo?.["taskRootDirectoryUrl"],
              },
          startTime:
            p["startTime"] !== undefined ? new Date(p["startTime"]) : undefined,
          endTime:
            p["endTime"] !== undefined ? new Date(p["endTime"]) : undefined,
          exitCode: p["exitCode"],
          containerInfo: !p.containerInfo
            ? undefined
            : {
                containerId: p.containerInfo?.["containerId"],
                state: p.containerInfo?.["state"],
                error: p.containerInfo?.["error"],
              },
          failureInfo: !p.failureInfo
            ? undefined
            : {
                category: p.failureInfo?.["category"],
                code: p.failureInfo?.["code"],
                message: p.failureInfo?.["message"],
                details: !p.failureInfo?.["details"]
                  ? p.failureInfo?.["details"]
                  : p.failureInfo?.["details"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
              },
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
          result: p["result"],
        })),
  };
}

/** If the Task is not a multi-instance Task then this returns an empty collection. */
export async function listSubTasks(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksListSubTasksOptions = { requestOptions: {} },
): Promise<BatchTaskListSubtasksResult> {
  const result = await _listSubTasksSend(context, jobId, taskId, options);
  return _listSubTasksDeserialize(result);
}

export function _terminateTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksTerminateTaskOptions = { requestOptions: {} },
): StreamableMethod<TerminateTask204Response | TerminateTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/terminate", jobId, taskId)
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

export async function _terminateTaskDeserialize(
  result: TerminateTask204Response | TerminateTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When the Task has been terminated, it moves to the completed state. For
 * multi-instance Tasks, the terminate Task operation applies synchronously to the
 * primary task; subtasks are then terminated asynchronously in the background.
 */
export async function terminateTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksTerminateTaskOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateTaskSend(context, jobId, taskId, options);
  return _terminateTaskDeserialize(result);
}

export function _reactivateTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksReactivateTaskOptions = { requestOptions: {} },
): StreamableMethod<ReactivateTask204Response | ReactivateTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/reactivate", jobId, taskId)
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

export async function _reactivateTaskDeserialize(
  result: ReactivateTask204Response | ReactivateTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * Reactivation makes a Task eligible to be retried again up to its maximum retry
 * count. The Task's state is changed to active. As the Task is no longer in the
 * completed state, any previous exit code or failure information is no longer
 * available after reactivation. Each time a Task is reactivated, its retry count
 * is reset to 0. Reactivation will fail for Tasks that are not completed or that
 * previously completed successfully (with an exit code of 0). Additionally, it
 * will fail if the Job has completed (or is terminating or deleting).
 */
export async function reactivateTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksReactivateTaskOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _reactivateTaskSend(context, jobId, taskId, options);
  return _reactivateTaskDeserialize(result);
}

export function _deleteTaskFileSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: TasksDeleteTaskFileOptions = { requestOptions: {} },
): StreamableMethod<DeleteTaskFile200Response | DeleteTaskFileDefaultResponse> {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        timeOut: options?.timeOut,
        recursive: options?.recursive,
      },
    });
}

export async function _deleteTaskFileDeserialize(
  result: DeleteTaskFile200Response | DeleteTaskFileDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes the specified Task file from the Compute Node where the Task ran. */
export async function deleteTaskFile(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: TasksDeleteTaskFileOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTaskFileSend(
    context,
    jobId,
    taskId,
    filePath,
    options,
  );
  return _deleteTaskFileDeserialize(result);
}

export function _getTaskFileSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: TasksGetTaskFileOptions = { requestOptions: {} },
): StreamableMethod<GetTaskFile200Response | GetTaskFileDefaultResponse> {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
        ...(options?.ocpRange !== undefined
          ? { "ocp-range": options?.ocpRange }
          : {}),
      },
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _getTaskFileDeserialize(
  result: GetTaskFile200Response | GetTaskFileDefaultResponse,
): Promise<Uint8Array> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Returns the content of the specified Task file. */
export async function getTaskFile(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: TasksGetTaskFileOptions = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getTaskFileSend(
    context,
    jobId,
    taskId,
    filePath,
    options,
  );
  return _getTaskFileDeserialize(result);
}

export function _getTaskFilePropertiesSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: TasksGetTaskFilePropertiesOptions = { requestOptions: {} },
): StreamableMethod<
  GetTaskFileProperties200Response | GetTaskFilePropertiesDefaultResponse
> {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: {
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

export async function _getTaskFilePropertiesDeserialize(
  result:
    | GetTaskFileProperties200Response
    | GetTaskFilePropertiesDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Gets the properties of the specified Task file. */
export async function getTaskFileProperties(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: TasksGetTaskFilePropertiesOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _getTaskFilePropertiesSend(
    context,
    jobId,
    taskId,
    filePath,
    options,
  );
  return _getTaskFilePropertiesDeserialize(result);
}

export function _listTaskFilesSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksListTaskFilesOptions = { requestOptions: {} },
): StreamableMethod<ListTaskFiles200Response | ListTaskFilesDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/files", jobId, taskId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $filter: options?.$filter,
        recursive: options?.recursive,
      },
    });
}

export async function _listTaskFilesDeserialize(
  result: ListTaskFiles200Response | ListTaskFilesDefaultResponse,
): Promise<NodeFileListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          name: p["name"],
          url: p["url"],
          isDirectory: p["isDirectory"],
          properties: !p.properties
            ? undefined
            : {
                creationTime:
                  p.properties?.["creationTime"] !== undefined
                    ? new Date(p.properties?.["creationTime"])
                    : undefined,
                lastModified: new Date(p.properties?.["lastModified"]),
                contentLength: p.properties?.["contentLength"],
                contentType: p.properties?.["contentType"],
                fileMode: p.properties?.["fileMode"],
              },
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists the files in a Task's directory on its Compute Node. */
export function listTaskFiles(
  context: Client,
  jobId: string,
  taskId: string,
  options: TasksListTaskFilesOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeFile> {
  return buildPagedAsyncIterator(
    context,
    () => _listTaskFilesSend(context, jobId, taskId, options),
    _listTaskFilesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}
