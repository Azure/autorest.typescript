// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchContext } from "../../api/BatchContext.js";
import {
  BatchTaskCreateOptions,
  BatchTask,
  BatchTaskCollection,
  TaskAddCollectionResult,
  BatchTaskListSubtasksResult,
  NodeFile,
} from "../../models/models.js";
import {
  createTask,
  listTasks,
  createTaskCollection,
  deleteTask,
  getTask,
  replaceTask,
  listSubTasks,
  terminateTask,
  reactivateTask,
  deleteTaskFile,
  getTaskFile,
  getTaskFileProperties,
  listTaskFiles,
} from "../../api/tasks/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
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

export interface TasksOperations {
  createTask: (
    jobId: string,
    body: BatchTaskCreateOptions,
    options?: TasksCreateTaskOptions,
  ) => Promise<void>;
  listTasks: (
    jobId: string,
    options?: TasksListTasksOptions,
  ) => PagedAsyncIterableIterator<BatchTask>;
  createTaskCollection: (
    jobId: string,
    collection: BatchTaskCollection,
    options?: TasksCreateTaskCollectionOptions,
  ) => Promise<TaskAddCollectionResult>;
  deleteTask: (
    jobId: string,
    taskId: string,
    options?: TasksDeleteTaskOptions,
  ) => Promise<void>;
  getTask: (
    jobId: string,
    taskId: string,
    options?: TasksGetTaskOptions,
  ) => Promise<BatchTask>;
  replaceTask: (
    jobId: string,
    taskId: string,
    body: BatchTask,
    options?: TasksReplaceTaskOptions,
  ) => Promise<void>;
  listSubTasks: (
    jobId: string,
    taskId: string,
    options?: TasksListSubTasksOptions,
  ) => Promise<BatchTaskListSubtasksResult>;
  terminateTask: (
    jobId: string,
    taskId: string,
    options?: TasksTerminateTaskOptions,
  ) => Promise<void>;
  reactivateTask: (
    jobId: string,
    taskId: string,
    options?: TasksReactivateTaskOptions,
  ) => Promise<void>;
  deleteTaskFile: (
    jobId: string,
    taskId: string,
    filePath: string,
    options?: TasksDeleteTaskFileOptions,
  ) => Promise<void>;
  getTaskFile: (
    jobId: string,
    taskId: string,
    filePath: string,
    options?: TasksGetTaskFileOptions,
  ) => Promise<Uint8Array>;
  getTaskFileProperties: (
    jobId: string,
    taskId: string,
    filePath: string,
    options?: TasksGetTaskFilePropertiesOptions,
  ) => Promise<void>;
  listTaskFiles: (
    jobId: string,
    taskId: string,
    options?: TasksListTaskFilesOptions,
  ) => PagedAsyncIterableIterator<NodeFile>;
}

export function getTasks(context: BatchContext) {
  return {
    createTask: (
      jobId: string,
      body: BatchTaskCreateOptions,
      options?: TasksCreateTaskOptions,
    ) => createTask(context, jobId, body, options),
    listTasks: (jobId: string, options?: TasksListTasksOptions) =>
      listTasks(context, jobId, options),
    createTaskCollection: (
      jobId: string,
      collection: BatchTaskCollection,
      options?: TasksCreateTaskCollectionOptions,
    ) => createTaskCollection(context, jobId, collection, options),
    deleteTask: (
      jobId: string,
      taskId: string,
      options?: TasksDeleteTaskOptions,
    ) => deleteTask(context, jobId, taskId, options),
    getTask: (jobId: string, taskId: string, options?: TasksGetTaskOptions) =>
      getTask(context, jobId, taskId, options),
    replaceTask: (
      jobId: string,
      taskId: string,
      body: BatchTask,
      options?: TasksReplaceTaskOptions,
    ) => replaceTask(context, jobId, taskId, body, options),
    listSubTasks: (
      jobId: string,
      taskId: string,
      options?: TasksListSubTasksOptions,
    ) => listSubTasks(context, jobId, taskId, options),
    terminateTask: (
      jobId: string,
      taskId: string,
      options?: TasksTerminateTaskOptions,
    ) => terminateTask(context, jobId, taskId, options),
    reactivateTask: (
      jobId: string,
      taskId: string,
      options?: TasksReactivateTaskOptions,
    ) => reactivateTask(context, jobId, taskId, options),
    deleteTaskFile: (
      jobId: string,
      taskId: string,
      filePath: string,
      options?: TasksDeleteTaskFileOptions,
    ) => deleteTaskFile(context, jobId, taskId, filePath, options),
    getTaskFile: (
      jobId: string,
      taskId: string,
      filePath: string,
      options?: TasksGetTaskFileOptions,
    ) => getTaskFile(context, jobId, taskId, filePath, options),
    getTaskFileProperties: (
      jobId: string,
      taskId: string,
      filePath: string,
      options?: TasksGetTaskFilePropertiesOptions,
    ) => getTaskFileProperties(context, jobId, taskId, filePath, options),
    listTaskFiles: (
      jobId: string,
      taskId: string,
      options?: TasksListTaskFilesOptions,
    ) => listTaskFiles(context, jobId, taskId, options),
  };
}

export function getTasksOperations(context: BatchContext): TasksOperations {
  return {
    ...getTasks(context),
  };
}
