// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  EvaluatedAvsMachine,
  evaluatedAvsMachineDeserializer,
  _EvaluatedAvsMachineListResult,
  _evaluatedAvsMachineListResultDeserializer,
} from "../../models/models.js";
import {
  EvaluatedAvsMachinesOperationsListByParentOptionalParams,
  EvaluatedAvsMachinesOperationsGetOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
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
  options: EvaluatedAvsMachinesOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}/evaluatedAvsMachines{?api%2Dversion,%24filter,pageSize,continuationToken,totalRecordCount}",
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
): Promise<_EvaluatedAvsMachineListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _evaluatedAvsMachineListResultDeserializer(result.body);
}

/** List EvaluatedAvsMachine resources by BusinessCase */
export function listByParent(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  options: EvaluatedAvsMachinesOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<EvaluatedAvsMachine> {
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
  evaluatedAvsMachineName: string,
  options: EvaluatedAvsMachinesOperationsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}/evaluatedAvsMachines/{evaluatedAvsMachineName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
      businessCaseName: businessCaseName,
      evaluatedAvsMachineName: evaluatedAvsMachineName,
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
): Promise<EvaluatedAvsMachine> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return evaluatedAvsMachineDeserializer(result.body);
}

/** Get a EvaluatedAvsMachine */
export async function get(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  evaluatedAvsMachineName: string,
  options: EvaluatedAvsMachinesOperationsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<EvaluatedAvsMachine> {
  const result = await _getSend(
    context,
    resourceGroupName,
    projectName,
    businessCaseName,
    evaluatedAvsMachineName,
    options,
  );
  return _getDeserialize(result);
}
