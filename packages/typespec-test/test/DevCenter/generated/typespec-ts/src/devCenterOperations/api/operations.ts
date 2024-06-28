// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Project, OperationState, _PagedProject } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import {
  isUnexpected,
  DevCenterServiceContext as Client,
  DevCenterGetProject200Response,
  DevCenterGetProjectDefaultResponse,
  DevCenterListProjects200Response,
  DevCenterListProjectsDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ListProjectsOptionalParams,
  GetProjectOptionalParams,
} from "../models/options.js";

export function _listProjectsSend(
  context: Client,
  options: ListProjectsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevCenterListProjects200Response | DevCenterListProjectsDefaultResponse
> {
  return context
    .path("/projects")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listProjectsDeserialize(
  result:
    | DevCenterListProjects200Response
    | DevCenterListProjectsDefaultResponse,
): Promise<_PagedProject> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      uri: p["uri"],
      name: p["name"],
      description: p["description"],
      maxDevBoxesPerUser: p["maxDevBoxesPerUser"],
      displayName: p["displayName"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all projects. */
export function listProjects(
  context: Client,
  options: ListProjectsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Project> {
  return buildPagedAsyncIterator(
    context,
    () => _listProjectsSend(context, options),
    _listProjectsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getProjectSend(
  context: Client,
  projectName: string,
  options: GetProjectOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevCenterGetProject200Response | DevCenterGetProjectDefaultResponse
> {
  return context
    .path("/projects/{projectName}", projectName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getProjectDeserialize(
  result: DevCenterGetProject200Response | DevCenterGetProjectDefaultResponse,
): Promise<Project> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    uri: result.body["uri"],
    name: result.body["name"],
    description: result.body["description"],
    maxDevBoxesPerUser: result.body["maxDevBoxesPerUser"],
    displayName: result.body["displayName"],
  };
}

/** Gets a project. */
export async function getProject(
  context: Client,
  projectName: string,
  options: GetProjectOptionalParams = { requestOptions: {} },
): Promise<Project> {
  const result = await _getProjectSend(context, projectName, options);
  return _getProjectDeserialize(result);
}
