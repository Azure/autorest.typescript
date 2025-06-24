// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AvsSummary,
  avsSummaryDeserializer,
  _AvsSummaryListResult,
  _avsSummaryListResultDeserializer,
} from "../../models/models.js";
import {
  BusinessCaseAvsSummaryOperationsListByParentOptionalParams,
  BusinessCaseAvsSummaryOperationsGetOptionalParams,
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
  options: BusinessCaseAvsSummaryOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}/avsSummaries{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
      businessCaseName: businessCaseName,
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

export async function _listByParentDeserialize(
  result: PathUncheckedResponse,
): Promise<_AvsSummaryListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _avsSummaryListResultDeserializer(result.body);
}

/** List AvsSummary resources by BusinessCase */
export function listByParent(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  options: BusinessCaseAvsSummaryOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvsSummary> {
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
  avsSummaryName: string,
  options: BusinessCaseAvsSummaryOperationsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}/avsSummaries/{avsSummaryName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
      businessCaseName: businessCaseName,
      avsSummaryName: avsSummaryName,
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
): Promise<AvsSummary> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return avsSummaryDeserializer(result.body);
}

/** Get a AvsSummary */
export async function get(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  avsSummaryName: string,
  options: BusinessCaseAvsSummaryOperationsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AvsSummary> {
  const result = await _getSend(
    context,
    resourceGroupName,
    projectName,
    businessCaseName,
    avsSummaryName,
    options,
  );
  return _getDeserialize(result);
}
