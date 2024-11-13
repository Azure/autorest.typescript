// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureAIContext as Client,
  EvaluationsCreateOptionalParams,
  EvaluationsCreateOrReplaceScheduleOptionalParams,
  EvaluationsDeleteScheduleOptionalParams,
  EvaluationsGetOptionalParams,
  EvaluationsGetScheduleOptionalParams,
  EvaluationsListOptionalParams,
  EvaluationsListScheduleOptionalParams,
  EvaluationsUpdateOptionalParams,
} from "../index.js";
import {
  Evaluation,
  evaluationSerializer,
  evaluationDeserializer,
  _PagedEvaluation,
  _pagedEvaluationDeserializer,
  EvaluationSchedule,
  evaluationScheduleSerializer,
  evaluationScheduleDeserializer,
  _PagedEvaluationSchedule,
  _pagedEvaluationScheduleDeserializer,
} from "../../models/models.js";
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

export function _getSend(
  context: Client,
  id: string,
  options: EvaluationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/runs/{id}", id)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Evaluation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return evaluationDeserializer(result.body);
}

/** Resource read operation template. */
export async function get(
  context: Client,
  id: string,
  options: EvaluationsGetOptionalParams = { requestOptions: {} },
): Promise<Evaluation> {
  const result = await _getSend(context, id, options);
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  evaluation: Evaluation,
  options: EvaluationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/runs:run")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: evaluationSerializer(evaluation),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<Evaluation> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return evaluationDeserializer(result.body);
}

/** Run the evaluation. */
export async function create(
  context: Client,
  evaluation: Evaluation,
  options: EvaluationsCreateOptionalParams = { requestOptions: {} },
): Promise<Evaluation> {
  const result = await _createSend(context, evaluation, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: EvaluationsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/runs")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedEvaluation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedEvaluationDeserializer(result.body);
}

/** Resource list operation template. */
export function list(
  context: Client,
  options: EvaluationsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Evaluation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _updateSend(
  context: Client,
  id: string,
  resource: Evaluation,
  options: EvaluationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/runs/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
      body: evaluationSerializer(resource),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<Evaluation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return evaluationDeserializer(result.body);
}

/** Resource update operation template. */
export async function update(
  context: Client,
  id: string,
  resource: Evaluation,
  options: EvaluationsUpdateOptionalParams = { requestOptions: {} },
): Promise<Evaluation> {
  const result = await _updateSend(context, id, resource, options);
  return _updateDeserialize(result);
}

export function _getScheduleSend(
  context: Client,
  id: string,
  options: EvaluationsGetScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/schedules/{id}", id)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
    });
}

export async function _getScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<EvaluationSchedule> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return evaluationScheduleDeserializer(result.body);
}

/** Resource read operation template. */
export async function getSchedule(
  context: Client,
  id: string,
  options: EvaluationsGetScheduleOptionalParams = { requestOptions: {} },
): Promise<EvaluationSchedule> {
  const result = await _getScheduleSend(context, id, options);
  return _getScheduleDeserialize(result);
}

export function _createOrReplaceScheduleSend(
  context: Client,
  id: string,
  resource: EvaluationSchedule,
  options: EvaluationsCreateOrReplaceScheduleOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/evaluations/schedules/{id}", id)
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
      body: evaluationScheduleSerializer(resource),
    });
}

export async function _createOrReplaceScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<EvaluationSchedule> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return evaluationScheduleDeserializer(result.body);
}

/** Create or replace operation template. */
export async function createOrReplaceSchedule(
  context: Client,
  id: string,
  resource: EvaluationSchedule,
  options: EvaluationsCreateOrReplaceScheduleOptionalParams = {
    requestOptions: {},
  },
): Promise<EvaluationSchedule> {
  const result = await _createOrReplaceScheduleSend(
    context,
    id,
    resource,
    options,
  );
  return _createOrReplaceScheduleDeserialize(result);
}

export function _listScheduleSend(
  context: Client,
  options: EvaluationsListScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/schedules")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedEvaluationSchedule> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedEvaluationScheduleDeserializer(result.body);
}

/** Resource list operation template. */
export function listSchedule(
  context: Client,
  options: EvaluationsListScheduleOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<EvaluationSchedule> {
  return buildPagedAsyncIterator(
    context,
    () => _listScheduleSend(context, options),
    _listScheduleDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteScheduleSend(
  context: Client,
  id: string,
  options: EvaluationsDeleteScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/schedules/{id}", id)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
    });
}

export async function _deleteScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Resource delete operation template. */
export async function deleteSchedule(
  context: Client,
  id: string,
  options: EvaluationsDeleteScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteScheduleSend(context, id, options);
  return _deleteScheduleDeserialize(result);
}
