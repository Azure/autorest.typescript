// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Project,
  TrainingJobOptions,
  OperationStatus,
  PagedProject,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AuthoringContext as Client,
  CreateOrUpdate200Response,
  CreateOrUpdate201Response,
  CreateOrUpdateDefaultResponse,
  CreateOrUpdateLogicalResponse,
  DeleteLogicalResponse,
  DeleteOperation202Response,
  DeleteOperationDefaultResponse,
  ExportLogicalResponse,
  ExportOperation202Response,
  ExportOperationDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  Importx202Response,
  ImportxDefaultResponse,
  ImportxLogicalResponse,
  ListProjects200Response,
  ListProjectsDefaultResponse,
  Train202Response,
  TrainDefaultResponse,
  TrainLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ProjectsCreateOrUpdateOptions,
  ProjectsGetOptions,
  ProjectsDeleteOperationOptions,
  ProjectsListProjectsOptions,
  ProjectsExportOperationOptions,
  ProjectsImportxOptions,
  ProjectsTrainOptions,
} from "../../models/options.js";

export function _createOrUpdateSend(
  context: Client,
  projectName: string,
  resource: Project,
  options: ProjectsCreateOrUpdateOptions = { requestOptions: {} },
): StreamableMethod<
  | CreateOrUpdate200Response
  | CreateOrUpdate201Response
  | CreateOrUpdateDefaultResponse
  | CreateOrUpdateLogicalResponse
> {
  return context
    .path("/authoring/analyze-text/projects/{projectName}", projectName)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        projectKind: resource["projectKind"],
        storageInputContainerName: resource["storageInputContainerName"],
        settings: resource["settings"],
        multilingual: resource["multilingual"],
        description: resource["description"],
        language: resource["language"],
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | CreateOrUpdate200Response
    | CreateOrUpdate201Response
    | CreateOrUpdateDefaultResponse
    | CreateOrUpdateLogicalResponse,
): Promise<Project> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    projectName: result.body["projectName"],
    projectKind: result.body["projectKind"],
    storageInputContainerName: result.body["storageInputContainerName"],
    settings: result.body["settings"],
    multilingual: result.body["multilingual"],
    description: result.body["description"],
    language: result.body["language"],
    createdDateTime: new Date(result.body["createdDateTime"]),
    lastModifiedDateTime: new Date(result.body["lastModifiedDateTime"]),
    lastTrainedDateTime: new Date(result.body["lastTrainedDateTime"]),
    lastDeployedDateTime: new Date(result.body["lastDeployedDateTime"]),
  };
}

/** Creates a new project or updates an existing one. */
export async function createOrUpdate(
  context: Client,
  projectName: string,
  resource: Project,
  options: ProjectsCreateOrUpdateOptions = { requestOptions: {} },
): Promise<Project> {
  const result = await _createOrUpdateSend(
    context,
    projectName,
    resource,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  projectName: string,
  options: ProjectsGetOptions = { requestOptions: {} },
): StreamableMethod<Get200Response | GetDefaultResponse> {
  return context
    .path("/authoring/analyze-text/projects/{projectName}", projectName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: Get200Response | GetDefaultResponse,
): Promise<Project> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    projectName: result.body["projectName"],
    projectKind: result.body["projectKind"],
    storageInputContainerName: result.body["storageInputContainerName"],
    settings: result.body["settings"],
    multilingual: result.body["multilingual"],
    description: result.body["description"],
    language: result.body["language"],
    createdDateTime: new Date(result.body["createdDateTime"]),
    lastModifiedDateTime: new Date(result.body["lastModifiedDateTime"]),
    lastTrainedDateTime: new Date(result.body["lastTrainedDateTime"]),
    lastDeployedDateTime: new Date(result.body["lastDeployedDateTime"]),
  };
}

/** Gets the details of a project. */
export async function get(
  context: Client,
  projectName: string,
  options: ProjectsGetOptions = { requestOptions: {} },
): Promise<Project> {
  const result = await _getSend(context, projectName, options);
  return _getDeserialize(result);
}

export function _deleteOperationSend(
  context: Client,
  projectName: string,
  options: ProjectsDeleteOperationOptions = { requestOptions: {} },
): StreamableMethod<
  | DeleteOperation202Response
  | DeleteOperationDefaultResponse
  | DeleteLogicalResponse
> {
  return context
    .path("/authoring/analyze-text/projects/{projectName}", projectName)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result:
    | DeleteOperation202Response
    | DeleteOperationDefaultResponse
    | DeleteLogicalResponse,
): Promise<OperationStatus> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error,
  };
}

/** Deletes a project. */
export async function deleteOperation(
  context: Client,
  projectName: string,
  options: ProjectsDeleteOperationOptions = { requestOptions: {} },
): Promise<OperationStatus> {
  const result = await _deleteOperationSend(context, projectName, options);
  return _deleteOperationDeserialize(result);
}

export function _listProjectsSend(
  context: Client,
  options: ProjectsListProjectsOptions = { requestOptions: {} },
): StreamableMethod<ListProjects200Response | ListProjectsDefaultResponse> {
  return context
    .path("/authoring/analyze-text/projects")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listProjectsDeserialize(
  result: ListProjects200Response | ListProjectsDefaultResponse,
): Promise<PagedProject> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      projectName: p["projectName"],
      projectKind: p["projectKind"],
      storageInputContainerName: p["storageInputContainerName"],
      settings: p["settings"],
      multilingual: p["multilingual"],
      description: p["description"],
      language: p["language"],
      createdDateTime: new Date(p["createdDateTime"]),
      lastModifiedDateTime: new Date(p["lastModifiedDateTime"]),
      lastTrainedDateTime: new Date(p["lastTrainedDateTime"]),
      lastDeployedDateTime: new Date(p["lastDeployedDateTime"]),
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists the existing projects. */
export function listProjects(
  context: Client,
  options: ProjectsListProjectsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<Project> {
  return buildPagedAsyncIterator(
    context,
    () => _listProjectsSend(context, options),
    _listProjectsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _exportOperationSend(
  context: Client,
  projectName: string,
  projectFileVersion: string,
  options: ProjectsExportOperationOptions = { requestOptions: {} },
): StreamableMethod<
  | ExportOperation202Response
  | ExportOperationDefaultResponse
  | ExportLogicalResponse
> {
  return context
    .path("/authoring/analyze-text/projects/{projectName}:export", projectName)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { projectFileVersion: projectFileVersion },
    });
}

export async function _exportOperationDeserialize(
  result:
    | ExportOperation202Response
    | ExportOperationDefaultResponse
    | ExportLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Triggers a job to export a project's data. */
export async function exportOperation(
  context: Client,
  projectName: string,
  projectFileVersion: string,
  options: ProjectsExportOperationOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _exportOperationSend(
    context,
    projectName,
    projectFileVersion,
    options,
  );
  return _exportOperationDeserialize(result);
}

export function _importxSend(
  context: Client,
  projectName: string,
  options: ProjectsImportxOptions = { requestOptions: {} },
): StreamableMethod<
  Importx202Response | ImportxDefaultResponse | ImportxLogicalResponse
> {
  return context
    .path("/authoring/analyze-text/projects/{projectName}:importx", projectName)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _importxDeserialize(
  result: Importx202Response | ImportxDefaultResponse | ImportxLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Triggers a job to export a project's data. */
export async function importx(
  context: Client,
  projectName: string,
  options: ProjectsImportxOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _importxSend(context, projectName, options);
  return _importxDeserialize(result);
}

export function _trainSend(
  context: Client,
  projectName: string,
  body: TrainingJobOptions,
  options: ProjectsTrainOptions = { requestOptions: {} },
): StreamableMethod<
  Train202Response | TrainDefaultResponse | TrainLogicalResponse
> {
  return context
    .path("/authoring/analyze-text/projects/{projectName}:train", projectName)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { modelLabel: body["modelLabel"] },
    });
}

export async function _trainDeserialize(
  result: Train202Response | TrainDefaultResponse | TrainLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Triggers a training job for a project. */
export async function train(
  context: Client,
  projectName: string,
  body: TrainingJobOptions,
  options: ProjectsTrainOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _trainSend(context, projectName, body, options);
  return _trainDeserialize(result);
}
