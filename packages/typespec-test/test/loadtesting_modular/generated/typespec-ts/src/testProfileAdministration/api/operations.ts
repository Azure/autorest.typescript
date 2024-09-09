// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestServiceContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  _Metrics,
  TestProfile,
  testProfileDeserializer,
  targetResourceConfigurationsUnionSerializer,
  _PagedTestFileInfo,
  _PagedTest,
  _PagedTestRun,
  _PagedTestProfile,
  _PagedTestProfileRun,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  CreateOrUpdateTestProfileOptionalParams,
  DeleteTestProfileOptionalParams,
  GetTestProfileOptionalParams,
  ListTestProfilesOptionalParams,
} from "../models/options.js";

export function _createOrUpdateTestProfileSend(
  context: Client,
  testProfileId: string,
  body: TestProfile,
  options: CreateOrUpdateTestProfileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profiles/{testProfileId}", testProfileId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        displayName: body["displayName"],
        description: body["description"],
        testId: body["testId"],
        targetResourceId: body["targetResourceId"],
        targetResourceConfigurations: !body.targetResourceConfigurations
          ? body.targetResourceConfigurations
          : targetResourceConfigurationsUnionSerializer(
              body.targetResourceConfigurations,
            ),
      },
    });
}

export async function _createOrUpdateTestProfileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfile> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileDeserializer(result.body);
}

/** Create a new test profile or update an existing test profile by providing the test profile Id. */
export async function createOrUpdateTestProfile(
  context: Client,
  testProfileId: string,
  body: TestProfile,
  options: CreateOrUpdateTestProfileOptionalParams = { requestOptions: {} },
): Promise<TestProfile> {
  const result = await _createOrUpdateTestProfileSend(
    context,
    testProfileId,
    body,
    options,
  );
  return _createOrUpdateTestProfileDeserialize(result);
}

export function _deleteTestProfileSend(
  context: Client,
  testProfileId: string,
  options: DeleteTestProfileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profiles/{testProfileId}", testProfileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTestProfileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a test profile by its test profile Id. */
export async function deleteTestProfile(
  context: Client,
  testProfileId: string,
  options: DeleteTestProfileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestProfileSend(context, testProfileId, options);
  return _deleteTestProfileDeserialize(result);
}

export function _getTestProfileSend(
  context: Client,
  testProfileId: string,
  options: GetTestProfileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profiles/{testProfileId}", testProfileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestProfileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileDeserializer(result.body);
}

/** Get load test profile details by test profile Id. */
export async function getTestProfile(
  context: Client,
  testProfileId: string,
  options: GetTestProfileOptionalParams = { requestOptions: {} },
): Promise<TestProfile> {
  const result = await _getTestProfileSend(context, testProfileId, options);
  return _getTestProfileDeserialize(result);
}

export function _listTestProfilesSend(
  context: Client,
  options: ListTestProfilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profiles")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxpagesize: options?.maxpagesize,
        lastModifiedStartTime: options?.lastModifiedStartTime?.toISOString(),
        lastModifiedEndTime: options?.lastModifiedEndTime?.toISOString(),
        testProfileIds: options?.testProfileIds,
        testIds: options?.testIds,
      },
    });
}

export async function _listTestProfilesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestProfile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Get all test profiles for the given filters. */
export function listTestProfiles(
  context: Client,
  options: ListTestProfilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestProfile> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestProfilesSend(context, options),
    _listTestProfilesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
