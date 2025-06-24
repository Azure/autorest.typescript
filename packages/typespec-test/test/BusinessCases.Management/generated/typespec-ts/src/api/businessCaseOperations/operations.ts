// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  BusinessCase,
  businessCaseSerializer,
  businessCaseDeserializer,
  _BusinessCaseListResult,
  _businessCaseListResultDeserializer,
  _compareSummaryRequestSerializer,
  CompareSummary,
  compareSummaryDeserializer,
  _getReportDownloadUrlRequestSerializer,
  ReportDownloadUrl,
  reportDownloadUrlDeserializer,
} from "../../models/models.js";
import {
  BusinessCaseOperationsGetReportDownloadUrlOptionalParams,
  BusinessCaseOperationsCompareSummaryOptionalParams,
  BusinessCaseOperationsDeleteOptionalParams,
  BusinessCaseOperationsCreateOptionalParams,
  BusinessCaseOperationsListByParentOptionalParams,
  BusinessCaseOperationsGetOptionalParams,
} from "./options.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
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
import { PollerLike, OperationState } from "@azure/core-lro";

export function _getReportDownloadUrlSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  body: Record<string, any>,
  options: BusinessCaseOperationsGetReportDownloadUrlOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}/getReportDownloadUrl{?api%2Dversion}",
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
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: _getReportDownloadUrlRequestSerializer(body),
    });
}

export async function _getReportDownloadUrlDeserialize(
  result: PathUncheckedResponse,
): Promise<ReportDownloadUrl> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return reportDownloadUrlDeserializer(result.body);
}

/** Get the URL for downloading the business case in a report format. */
export function getReportDownloadUrl(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  body: Record<string, any>,
  options: BusinessCaseOperationsGetReportDownloadUrlOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<ReportDownloadUrl>, ReportDownloadUrl> {
  return getLongRunningPoller(
    context,
    _getReportDownloadUrlDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _getReportDownloadUrlSend(
          context,
          resourceGroupName,
          projectName,
          businessCaseName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<ReportDownloadUrl>, ReportDownloadUrl>;
}

export function _compareSummarySend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  body: Record<string, any>,
  options: BusinessCaseOperationsCompareSummaryOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}/compareSummary{?api%2Dversion}",
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
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: _compareSummaryRequestSerializer(body),
    });
}

export async function _compareSummaryDeserialize(
  result: PathUncheckedResponse,
): Promise<CompareSummary> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return compareSummaryDeserializer(result.body);
}

/** A long-running resource action. */
export function compareSummary(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  body: Record<string, any>,
  options: BusinessCaseOperationsCompareSummaryOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<CompareSummary>, CompareSummary> {
  return getLongRunningPoller(
    context,
    _compareSummaryDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _compareSummarySend(
          context,
          resourceGroupName,
          projectName,
          businessCaseName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<CompareSummary>, CompareSummary>;
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  options: BusinessCaseOperationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}{?api%2Dversion}",
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
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a BusinessCase */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  options: BusinessCaseOperationsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    resourceGroupName,
    projectName,
    businessCaseName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  resource: BusinessCase,
  options: BusinessCaseOperationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}{?api%2Dversion}",
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
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: businessCaseSerializer(resource),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<BusinessCase> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return businessCaseDeserializer(result.body);
}

/** Create a BusinessCase */
export function create(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  resource: BusinessCase,
  options: BusinessCaseOperationsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<BusinessCase>, BusinessCase> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<BusinessCase>, BusinessCase>;
}

export function _listByParentSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  options: BusinessCaseOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
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
): Promise<_BusinessCaseListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _businessCaseListResultDeserializer(result.body);
}

/** List BusinessCase resources by AssessmentProject */
export function listByParent(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  options: BusinessCaseOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<BusinessCase> {
  return buildPagedAsyncIterator(
    context,
    () => _listByParentSend(context, resourceGroupName, projectName, options),
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
  options: BusinessCaseOperationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/businessCases/{businessCaseName}{?api%2Dversion}",
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<BusinessCase> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return businessCaseDeserializer(result.body);
}

/** Get a BusinessCase */
export async function get(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  businessCaseName: string,
  options: BusinessCaseOperationsGetOptionalParams = { requestOptions: {} },
): Promise<BusinessCase> {
  const result = await _getSend(
    context,
    resourceGroupName,
    projectName,
    businessCaseName,
    options,
  );
  return _getDeserialize(result);
}
