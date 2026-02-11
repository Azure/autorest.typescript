// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createTasks, TasksContext, TasksOptionalParams } from "./api/index.js";
import {
  BatchTaskCreateOptions,
  BatchTask,
  BatchTaskCollection,
  TaskAddCollectionResult,
  BatchTaskListSubtasksResult,
  NodeFile,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  listTaskFiles,
  getTaskFileProperties,
  getTaskFile,
  deleteTaskFile,
  reactivateTask,
  terminateTask,
  listSubTasks,
  replaceTask,
  getTask,
  deleteTask,
  createTaskCollection,
  listTasks,
  createTask,
} from "./api/operations.js";
import {
  ListTaskFilesOptionalParams,
  GetTaskFilePropertiesOptionalParams,
  GetTaskFileOptionalParams,
  DeleteTaskFileOptionalParams,
  ReactivateTaskOptionalParams,
  TerminateTaskOptionalParams,
  ListSubTasksOptionalParams,
  ReplaceTaskOptionalParams,
  GetTaskOptionalParams,
  DeleteTaskOptionalParams,
  CreateTaskCollectionOptionalParams,
  ListTasksOptionalParams,
  CreateTaskOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TasksOptionalParams } from "./api/tasksContext.js";

export class Tasks {
  private _client: TasksContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: TasksOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTasks(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Lists the files in a Task's directory on its Compute Node. */
  listTaskFiles(
    jobId: string,
    taskId: string,
    options: ListTaskFilesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<NodeFile> {
    return listTaskFiles(this._client, jobId, taskId, options);
  }

  /** Gets the properties of the specified Task file. */
  getTaskFileProperties(
    jobId: string,
    taskId: string,
    filePath: string,
    options: GetTaskFilePropertiesOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return getTaskFileProperties(this._client, jobId, taskId, filePath, options);
  }

  /** Returns the content of the specified Task file. */
  getTaskFile(
    jobId: string,
    taskId: string,
    filePath: string,
    options: GetTaskFileOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getTaskFile(this._client, jobId, taskId, filePath, options);
  }

  /** Deletes the specified Task file from the Compute Node where the Task ran. */
  deleteTaskFile(
    jobId: string,
    taskId: string,
    filePath: string,
    options: DeleteTaskFileOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTaskFile(this._client, jobId, taskId, filePath, options);
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
  reactivateTask(
    jobId: string,
    taskId: string,
    options: ReactivateTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return reactivateTask(this._client, jobId, taskId, options);
  }

  /**
   * When the Task has been terminated, it moves to the completed state. For
   * multi-instance Tasks, the terminate Task operation applies synchronously to the
   * primary task; subtasks are then terminated asynchronously in the background.
   */
  terminateTask(
    jobId: string,
    taskId: string,
    options: TerminateTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return terminateTask(this._client, jobId, taskId, options);
  }

  /** If the Task is not a multi-instance Task then this returns an empty collection. */
  listSubTasks(
    jobId: string,
    taskId: string,
    options: ListSubTasksOptionalParams = { requestOptions: {} },
  ): Promise<BatchTaskListSubtasksResult> {
    return listSubTasks(this._client, jobId, taskId, options);
  }

  /** Updates the properties of the specified Task. */
  replaceTask(
    jobId: string,
    taskId: string,
    body: BatchTask,
    options: ReplaceTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replaceTask(this._client, jobId, taskId, body, options);
  }

  /**
   * For multi-instance Tasks, information such as affinityId, executionInfo and
   * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
   * information about subtasks.
   */
  getTask(
    jobId: string,
    taskId: string,
    options: GetTaskOptionalParams = { requestOptions: {} },
  ): Promise<BatchTask> {
    return getTask(this._client, jobId, taskId, options);
  }

  /**
   * When a Task is deleted, all of the files in its directory on the Compute Node
   * where it ran are also deleted (regardless of the retention time). For
   * multi-instance Tasks, the delete Task operation applies synchronously to the
   * primary task; subtasks and their files are then deleted asynchronously in the
   * background.
   */
  deleteTask(
    jobId: string,
    taskId: string,
    options: DeleteTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTask(this._client, jobId, taskId, options);
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
  createTaskCollection(
    jobId: string,
    collection: BatchTaskCollection,
    options: CreateTaskCollectionOptionalParams = { requestOptions: {} },
  ): Promise<TaskAddCollectionResult> {
    return createTaskCollection(this._client, jobId, collection, options);
  }

  /**
   * For multi-instance Tasks, information such as affinityId, executionInfo and
   * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
   * information about subtasks.
   */
  listTasks(
    jobId: string,
    options: ListTasksOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchTask> {
    return listTasks(this._client, jobId, options);
  }

  /**
   * The maximum lifetime of a Task from addition to completion is 180 days. If a
   * Task has not completed within 180 days of being added it will be terminated by
   * the Batch service and left in whatever state it was in at that time.
   */
  createTask(
    jobId: string,
    body: BatchTaskCreateOptions,
    options: CreateTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createTask(this._client, jobId, body, options);
  }
}
