// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TestProfileRunContext as Client,
  CreateOrUpdateTestProfileRunOptionalParams,
  DeleteTestProfileRunOptionalParams,
  GetTestProfileRunOptionalParams,
  ListTestProfileRunsOptionalParams,
  StopTestProfileRunOptionalParams,
} from "./index.js";
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
import { parseTemplate } from "../../static-helpers/uriTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createOrUpdateTestProfileRunSend(
  context: Client,
  testProfileRunId: string,
  body: TestProfileRun,
  options: CreateOrUpdateTestProfileRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const pathParser = parseTemplate(
    "/test-profile-runs/{testProfileRunId}{?api-version}",
  );
  const path = pathParser.expand({
    testProfileRunId: testProfileRunId,
  });
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: testProfileRunSerializer(body),
    });
}

export async function _createOrUpdateTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfileRun> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileRunDeserializer(result.body);
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
  const pathParser = parseTemplate(
    "/test-profile-runs/{testProfileRunId}{?api-version}",
  );
  const path = pathParser.expand({
    testProfileRunId: testProfileRunId,
  });
  return context
    .path(path)
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
  const pathParser = parseTemplate(
    "/test-profile-runs/{testProfileRunId}{?api-version}",
  );
  const path = pathParser.expand({
    testProfileRunId: testProfileRunId,
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfileRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileRunDeserializer(result.body);
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
  const pathParser = parseTemplate(
    "/test-profile-runs{?api-version,maxpagesize,minStartDateTime,maxStartDateTime,minEndDateTime,maxEndDateTime,createdDateStartTime,createdDateEndTime,testProfileRunIds,testProfileIds,statuses}",
  );
  const path = pathParser.expand({
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
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listTestProfileRunsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestProfileRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTestProfileRunDeserializer(result.body);
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
  const pathParser = parseTemplate(
    "/test-profile-runs/{testProfileRunId}:stop{?api-version}",
  );
  const path = pathParser.expand({
    testProfileRunId: testProfileRunId,
  });
  return context
    .path(path)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _stopTestProfileRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfileRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileRunDeserializer(result.body);
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
