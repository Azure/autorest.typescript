// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AuthoringContext } from "../../api/AuthoringContext.js";
import {
  Project,
  TrainingJobOptions,
  OperationStatus,
} from "../../models/models.js";
import {
  createOrUpdate,
  get,
  deleteOperation,
  listProjects,
  exportOperation,
  importx,
  train,
} from "../../api/projects/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  ProjectsCreateOrUpdateOptions,
  ProjectsGetOptions,
  ProjectsDeleteOperationOptions,
  ProjectsListProjectsOptions,
  ProjectsExportOperationOptions,
  ProjectsImportxOptions,
  ProjectsTrainOptions,
} from "../../models/options.js";

export interface ProjectsOperations {
  createOrUpdate: (
    projectName: string,
    resource: Project,
    options?: ProjectsCreateOrUpdateOptions,
  ) => Promise<Project>;
  get: (projectName: string, options?: ProjectsGetOptions) => Promise<Project>;
  deleteOperation: (
    projectName: string,
    options?: ProjectsDeleteOperationOptions,
  ) => Promise<OperationStatus>;
  listProjects: (
    options?: ProjectsListProjectsOptions,
  ) => PagedAsyncIterableIterator<Project>;
  exportOperation: (
    projectName: string,
    projectFileVersion: string,
    options?: ProjectsExportOperationOptions,
  ) => Promise<void>;
  importx: (
    projectName: string,
    options?: ProjectsImportxOptions,
  ) => Promise<void>;
  train: (
    projectName: string,
    body: TrainingJobOptions,
    options?: ProjectsTrainOptions,
  ) => Promise<void>;
}

export function getProjects(context: AuthoringContext) {
  return {
    createOrUpdate: (
      projectName: string,
      resource: Project,
      options?: ProjectsCreateOrUpdateOptions,
    ) => createOrUpdate(context, projectName, resource, options),
    get: (projectName: string, options?: ProjectsGetOptions) =>
      get(context, projectName, options),
    deleteOperation: (
      projectName: string,
      options?: ProjectsDeleteOperationOptions,
    ) => deleteOperation(context, projectName, options),
    listProjects: (options?: ProjectsListProjectsOptions) =>
      listProjects(context, options),
    exportOperation: (
      projectName: string,
      projectFileVersion: string,
      options?: ProjectsExportOperationOptions,
    ) => exportOperation(context, projectName, projectFileVersion, options),
    importx: (projectName: string, options?: ProjectsImportxOptions) =>
      importx(context, projectName, options),
    train: (
      projectName: string,
      body: TrainingJobOptions,
      options?: ProjectsTrainOptions,
    ) => train(context, projectName, body, options),
  };
}

export function getProjectsOperations(
  context: AuthoringContext,
): ProjectsOperations {
  return {
    ...getProjects(context),
  };
}
