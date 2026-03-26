// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestServiceContext as Client } from "../index.js";
import {
  TestProfileRun,
  testProfileRunSerializer,
  testProfileRunDeserializer,
  _PagedTestProfileRun,
  _pagedTestProfileRunDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  TestProfileRunAdministrationListTestProfileRunsOptionalParams,
  TestProfileRunAdministrationStopOptionalParams,
  TestProfileRunAdministrationDeleteTestProfileRunOptionalParams,
  TestProfileRunAdministrationCreateOrUpdateTestProfileRunOptionalParams,
  TestProfileRunAdministrationGetTestProfileRunOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _testProfileRunAdministrationListTestProfileRunsSend(
  context: Client,
  options: TestProfileRunAdministrationListTestProfileRunsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-profile-runs{?api%2Dversion,maxpagesize,minStartDateTime,maxStartDateTime,minEndDateTime,maxEndDateTime,createdDateStartTime,createdDateEndTime,testProfileRunIds,testProfileIds,statuses}",
    {
      "api%2Dversion": context.apiVersion ?? "2024-05-01-preview",
      maxpagesize: options?.maxpagesize,
      minStartDateTime: !options?.minStartDateTime
        ? options?.minStartDateTime
        : options?.minStartDateTime.toISOString(),
      maxStartDateTime: !options?.maxStartDateTime
        ? options?.maxStartDateTime
        : options?.maxStartDateTime.toISOString(),
      minEndDateTime: !options?.minEndDateTime
        ? options?.minEndDateTime
        : options?.minEndDateTime.toISOString(),
      maxEndDateTime: !options?.maxEndDateTime
        ? options?.maxEndDateTime
        : options?.maxEndDateTime.toISOString(),
      createdDateStartTime: !options?.createdDateStartTime
        ? options?.createdDateStartTime
        : options?.createdDateStartTime.toISOString(),
      createdDateEndTime: !options?.createdDateEndTime
        ? options?.createdDateEndTime
        : options?.createdDateEndTime.toISOString(),
      testProfileRunIds: options?.testProfileRunIds,
      testProfileIds: options?.testProfileIds,
      statuses: options?.statuses,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _testProfileRunAdministrationListTestProfileRunsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestProfileRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTestProfileRunDeserializer(result.body);
}

/** Get all test profile runs for the given filters. */
export function testProfileRunAdministrationListTestProfileRuns(
  context: Client,
  options: TestProfileRunAdministrationListTestProfileRunsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestProfileRun> {
  return buildPagedAsyncIterator(
    context,
    () => _testProfileRunAdministrationListTestProfileRunsSend(context, options),
    _testProfileRunAdministrationListTestProfileRunsDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "nextLink",
      apiVersion: context.apiVersion ?? "2024-05-01-preview",
    },
  );
}

export function _testProfileRunAdministrationStopSend(
  context: Client,
  testProfileRunId: string,
  options: TestProfileRunAdministrationStopOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-profile-runs/{testProfileRunId}:stop{?api%2Dversion}",
    {
      testProfileRunId: testProfileRunId,
      "api%2Dversion": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _testProfileRunAdministrationStopDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfileRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileRunDeserializer(result.body);
}

/** Stop test profile run for the given test profile run Id. */
export async function testProfileRunAdministrationStop(
  context: Client,
  testProfileRunId: string,
  options: TestProfileRunAdministrationStopOptionalParams = { requestOptions: {} },
): Promise<TestProfileRun> {
  const result = await _testProfileRunAdministrationStopSend(context, testProfileRunId, options);
  return _testProfileRunAdministrationStopDeserialize(result);
}

export function _testProfileRunAdministrationDeleteTestProfileRunSend(
  context: Client,
  testProfileRunId: string,
  options: TestProfileRunAdministrationDeleteTestProfileRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-profile-runs/{testProfileRunId}{?api%2Dversion}",
    {
      testProfileRunId: testProfileRunId,
      "api%2Dversion": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _testProfileRunAdministrationDeleteTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an existing load test profile run by providing the test profile run Id. */
export async function testProfileRunAdministrationDeleteTestProfileRun(
  context: Client,
  testProfileRunId: string,
  options: TestProfileRunAdministrationDeleteTestProfileRunOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _testProfileRunAdministrationDeleteTestProfileRunSend(
    context,
    testProfileRunId,
    options,
  );
  return _testProfileRunAdministrationDeleteTestProfileRunDeserialize(result);
}

export function _testProfileRunAdministrationCreateOrUpdateTestProfileRunSend(
  context: Client,
  testProfileRunId: string,
  body: TestProfileRun,
  options: TestProfileRunAdministrationCreateOrUpdateTestProfileRunOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-profile-runs/{testProfileRunId}{?api%2Dversion}",
    {
      testProfileRunId: testProfileRunId,
      "api%2Dversion": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/merge-patch+json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: testProfileRunSerializer(body),
    });
}

export async function _testProfileRunAdministrationCreateOrUpdateTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfileRun> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileRunDeserializer(result.body);
}

/** Create and start a new test profile run with the given test profile run Id. */
export async function testProfileRunAdministrationCreateOrUpdateTestProfileRun(
  context: Client,
  testProfileRunId: string,
  body: TestProfileRun,
  options: TestProfileRunAdministrationCreateOrUpdateTestProfileRunOptionalParams = {
    requestOptions: {},
  },
): Promise<TestProfileRun> {
  const result = await _testProfileRunAdministrationCreateOrUpdateTestProfileRunSend(
    context,
    testProfileRunId,
    body,
    options,
  );
  return _testProfileRunAdministrationCreateOrUpdateTestProfileRunDeserialize(result);
}

export function _testProfileRunAdministrationGetTestProfileRunSend(
  context: Client,
  testProfileRunId: string,
  options: TestProfileRunAdministrationGetTestProfileRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-profile-runs/{testProfileRunId}{?api%2Dversion}",
    {
      testProfileRunId: testProfileRunId,
      "api%2Dversion": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _testProfileRunAdministrationGetTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfileRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileRunDeserializer(result.body);
}

/** Get test profile run details by test profile run Id. */
export async function testProfileRunAdministrationGetTestProfileRun(
  context: Client,
  testProfileRunId: string,
  options: TestProfileRunAdministrationGetTestProfileRunOptionalParams = { requestOptions: {} },
): Promise<TestProfileRun> {
  const result = await _testProfileRunAdministrationGetTestProfileRunSend(
    context,
    testProfileRunId,
    options,
  );
  return _testProfileRunAdministrationGetTestProfileRunDeserialize(result);
}
