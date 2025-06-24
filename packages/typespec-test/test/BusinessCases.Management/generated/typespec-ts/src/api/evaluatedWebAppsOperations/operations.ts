// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  EvaluatedWebApp,
  evaluatedWebAppDeserializer,
  _EvaluatedWebAppListResult,
  _evaluatedWebAppListResultDeserializer,
} from "../../models/models.js";
import {
  EvaluatedWebAppsOperationsListByParentOptionalParams,
  EvaluatedWebAppsOperationsGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listByParentSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  options: EvaluatedWebAppsOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}/evaluatedWebApps{?api%2Dversion,%24filter,pageSize,continuationToken,totalRecordCount}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
      businessCaseName: businessCaseName,
      "api%2Dversion": context.apiVersion,
      "%24filter": options?.filter,
      pageSize: options?.pageSize,
      continuationToken: options?.continuationToken,
      totalRecordCount: options?.totalRecordCount,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listByParentDeserialize(
  result: PathUncheckedResponse,
): Promise<_EvaluatedWebAppListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _evaluatedWebAppListResultDeserializer(result.body);
}

/** List EvaluatedWebApp resources by BusinessCase */
export function listByParent(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  options: EvaluatedWebAppsOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<EvaluatedWebApp> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByParentSend(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        options,
      ),
    _listByParentDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  evaluatedWebAppName: string,
  options: EvaluatedWebAppsOperationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}/evaluatedWebApps/{evaluatedWebAppName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
      businessCaseName: businessCaseName,
      evaluatedWebAppName: evaluatedWebAppName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<EvaluatedWebApp> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return evaluatedWebAppDeserializer(result.body);
}

/** Get a EvaluatedWebApp */
export async function get(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  evaluatedWebAppName: string,
  options: EvaluatedWebAppsOperationsGetOptionalParams = { requestOptions: {} },
): Promise<EvaluatedWebApp> {
  const result = await _getSend(
    context,
    resourceGroupName,
    projectName,
    businessCaseName,
    evaluatedWebAppName,
    options,
  );
  return _getDeserialize(result);
}
