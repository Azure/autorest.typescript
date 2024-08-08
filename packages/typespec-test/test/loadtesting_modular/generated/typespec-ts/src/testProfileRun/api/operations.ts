// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TestProfileRun, _PagedTestProfileRun } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import { LoadTestServiceContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  CreateOrUpdateTestProfileRunOptionalParams,
  DeleteTestProfileRunOptionalParams,
  GetTestProfileRunOptionalParams,
  ListTestProfileRunsOptionalParams,
  StopTestProfileRunOptionalParams,
} from "../models/options.js";

export function _createOrUpdateTestProfileRunSend(
  context: Client,
  testProfileRunId: string,
  body: TestProfileRun,
  options: CreateOrUpdateTestProfileRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profile-runs/{testProfileRunId}", testProfileRunId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        displayName: body["displayName"],
        description: body["description"],
        testProfileId: body["testProfileId"],
      },
    });
}

export async function _createOrUpdateTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfileRun> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    testProfileRunId: result.body["testProfileRunId"],
    displayName: result.body["displayName"],
    description: result.body["description"],
    testProfileId: result.body["testProfileId"],
    targetResourceId: result.body["targetResourceId"],
    targetResourceConfigurations: !result.body.targetResourceConfigurations
      ? undefined
      : { kind: result.body.targetResourceConfigurations?.["kind"] },
    status: result.body["status"],
    errorDetails:
      result.body["errorDetails"] === undefined
        ? result.body["errorDetails"]
        : result.body["errorDetails"].map((p: any) => {
            return { message: p["message"] };
          }),
    startDateTime:
      result.body["startDateTime"] !== undefined
        ? new Date(result.body["startDateTime"])
        : undefined,
    endDateTime:
      result.body["endDateTime"] !== undefined
        ? new Date(result.body["endDateTime"])
        : undefined,
    durationInSeconds: result.body["durationInSeconds"],
    testRunDetails: result.body["testRunDetails"],
    recommendations:
      result.body["recommendations"] === undefined
        ? result.body["recommendations"]
        : result.body["recommendations"].map((p: any) => {
            return {
              category: p["category"],
              configurations: p["configurations"],
            };
          }),
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Create and start a new test profile run with the given test profile run Id. */
export async function createOrUpdateTestProfileRun(
  context: Client,
  testProfileRunId: string,
  body: TestProfileRun,
  options: CreateOrUpdateTestProfileRunOptionalParams = { requestOptions: {} },
): Promise<TestProfileRun> {
  const result = await _createOrUpdateTestProfileRunSend(
    context,
    testProfileRunId,
    body,
    options,
  );
  return _createOrUpdateTestProfileRunDeserialize(result);
}

export function _deleteTestProfileRunSend(
  context: Client,
  testProfileRunId: string,
  options: DeleteTestProfileRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profile-runs/{testProfileRunId}", testProfileRunId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an existing load test profile run by providing the test profile run Id. */
export async function deleteTestProfileRun(
  context: Client,
  testProfileRunId: string,
  options: DeleteTestProfileRunOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestProfileRunSend(
    context,
    testProfileRunId,
    options,
  );
  return _deleteTestProfileRunDeserialize(result);
}

export function _getTestProfileRunSend(
  context: Client,
  testProfileRunId: string,
  options: GetTestProfileRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profile-runs/{testProfileRunId}", testProfileRunId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfileRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    testProfileRunId: result.body["testProfileRunId"],
    displayName: result.body["displayName"],
    description: result.body["description"],
    testProfileId: result.body["testProfileId"],
    targetResourceId: result.body["targetResourceId"],
    targetResourceConfigurations: !result.body.targetResourceConfigurations
      ? undefined
      : { kind: result.body.targetResourceConfigurations?.["kind"] },
    status: result.body["status"],
    errorDetails:
      result.body["errorDetails"] === undefined
        ? result.body["errorDetails"]
        : result.body["errorDetails"].map((p: any) => {
            return { message: p["message"] };
          }),
    startDateTime:
      result.body["startDateTime"] !== undefined
        ? new Date(result.body["startDateTime"])
        : undefined,
    endDateTime:
      result.body["endDateTime"] !== undefined
        ? new Date(result.body["endDateTime"])
        : undefined,
    durationInSeconds: result.body["durationInSeconds"],
    testRunDetails: result.body["testRunDetails"],
    recommendations:
      result.body["recommendations"] === undefined
        ? result.body["recommendations"]
        : result.body["recommendations"].map((p: any) => {
            return {
              category: p["category"],
              configurations: p["configurations"],
            };
          }),
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Get test profile run details by test profile run Id. */
export async function getTestProfileRun(
  context: Client,
  testProfileRunId: string,
  options: GetTestProfileRunOptionalParams = { requestOptions: {} },
): Promise<TestProfileRun> {
  const result = await _getTestProfileRunSend(
    context,
    testProfileRunId,
    options,
  );
  return _getTestProfileRunDeserialize(result);
}

export function _listTestProfileRunsSend(
  context: Client,
  options: ListTestProfileRunsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profile-runs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxpagesize: options?.maxpagesize,
        minStartDateTime: options?.minStartDateTime?.toISOString(),
        maxStartDateTime: options?.maxStartDateTime?.toISOString(),
        minEndDateTime: options?.minEndDateTime?.toISOString(),
        maxEndDateTime: options?.maxEndDateTime?.toISOString(),
        createdDateStartTime: options?.createdDateStartTime?.toISOString(),
        createdDateEndTime: options?.createdDateEndTime?.toISOString(),
        testProfileRunIds: options?.testProfileRunIds,
        testProfileIds: options?.testProfileIds,
        statuses: options?.statuses,
      },
    });
}

export async function _listTestProfileRunsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestProfileRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        testProfileRunId: p["testProfileRunId"],
        displayName: p["displayName"],
        description: p["description"],
        testProfileId: p["testProfileId"],
        targetResourceId: p["targetResourceId"],
        targetResourceConfigurations: !p.targetResourceConfigurations
          ? undefined
          : { kind: p.targetResourceConfigurations?.["kind"] },
        status: p["status"],
        errorDetails:
          p["errorDetails"] === undefined
            ? p["errorDetails"]
            : p["errorDetails"].map((p: any) => {
                return { message: p["message"] };
              }),
        startDateTime:
          p["startDateTime"] !== undefined
            ? new Date(p["startDateTime"])
            : undefined,
        endDateTime:
          p["endDateTime"] !== undefined
            ? new Date(p["endDateTime"])
            : undefined,
        durationInSeconds: p["durationInSeconds"],
        testRunDetails: p["testRunDetails"],
        recommendations:
          p["recommendations"] === undefined
            ? p["recommendations"]
            : p["recommendations"].map((p: any) => {
                return {
                  category: p["category"],
                  configurations: p["configurations"],
                };
              }),
        createdDateTime:
          p["createdDateTime"] !== undefined
            ? new Date(p["createdDateTime"])
            : undefined,
        createdBy: p["createdBy"],
        lastModifiedDateTime:
          p["lastModifiedDateTime"] !== undefined
            ? new Date(p["lastModifiedDateTime"])
            : undefined,
        lastModifiedBy: p["lastModifiedBy"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Get all test profile runs for the given filters. */
export function listTestProfileRuns(
  context: Client,
  options: ListTestProfileRunsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestProfileRun> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestProfileRunsSend(context, options),
    _listTestProfileRunsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _stopTestProfileRunSend(
  context: Client,
  testProfileRunId: string,
  options: StopTestProfileRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profile-runs/{testProfileRunId}:stop", testProfileRunId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _stopTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfileRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    testProfileRunId: result.body["testProfileRunId"],
    displayName: result.body["displayName"],
    description: result.body["description"],
    testProfileId: result.body["testProfileId"],
    targetResourceId: result.body["targetResourceId"],
    targetResourceConfigurations: !result.body.targetResourceConfigurations
      ? undefined
      : { kind: result.body.targetResourceConfigurations?.["kind"] },
    status: result.body["status"],
    errorDetails:
      result.body["errorDetails"] === undefined
        ? result.body["errorDetails"]
        : result.body["errorDetails"].map((p: any) => {
            return { message: p["message"] };
          }),
    startDateTime:
      result.body["startDateTime"] !== undefined
        ? new Date(result.body["startDateTime"])
        : undefined,
    endDateTime:
      result.body["endDateTime"] !== undefined
        ? new Date(result.body["endDateTime"])
        : undefined,
    durationInSeconds: result.body["durationInSeconds"],
    testRunDetails: result.body["testRunDetails"],
    recommendations:
      result.body["recommendations"] === undefined
        ? result.body["recommendations"]
        : result.body["recommendations"].map((p: any) => {
            return {
              category: p["category"],
              configurations: p["configurations"],
            };
          }),
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Stop test profile run for the given test profile run Id. */
export async function stopTestProfileRun(
  context: Client,
  testProfileRunId: string,
  options: StopTestProfileRunOptionalParams = { requestOptions: {} },
): Promise<TestProfileRun> {
  const result = await _stopTestProfileRunSend(
    context,
    testProfileRunId,
    options,
  );
  return _stopTestProfileRunDeserialize(result);
}
