// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestServiceContext as Client } from "../index.js";
import {
  TestProfile,
  testProfileSerializer,
  testProfileDeserializer,
  _PagedTestProfile,
  _pagedTestProfileDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  TestProfileAdministrationListTestProfilesOptionalParams,
  TestProfileAdministrationGetTestProfileOptionalParams,
  TestProfileAdministrationDeleteTestProfileOptionalParams,
  TestProfileAdministrationCreateOrUpdateTestProfileOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _testProfileAdministrationListTestProfilesSend(
  context: Client,
  options: TestProfileAdministrationListTestProfilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-profiles{?api%2Dversion,maxpagesize,lastModifiedStartTime,lastModifiedEndTime,testProfileIds,testIds}",
    {
      "api%2Dversion": context.apiVersion ?? "2024-05-01-preview",
      maxpagesize: options?.maxpagesize,
      lastModifiedStartTime: !options?.lastModifiedStartTime
        ? options?.lastModifiedStartTime
        : options?.lastModifiedStartTime.toISOString(),
      lastModifiedEndTime: !options?.lastModifiedEndTime
        ? options?.lastModifiedEndTime
        : options?.lastModifiedEndTime.toISOString(),
      testProfileIds: options?.testProfileIds,
      testIds: options?.testIds,
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

export async function _testProfileAdministrationListTestProfilesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestProfile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTestProfileDeserializer(result.body);
}

/** Get all test profiles for the given filters. */
export function testProfileAdministrationListTestProfiles(
  context: Client,
  options: TestProfileAdministrationListTestProfilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestProfile> {
  return buildPagedAsyncIterator(
    context,
    () => _testProfileAdministrationListTestProfilesSend(context, options),
    _testProfileAdministrationListTestProfilesDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "nextLink",
      apiVersion: context.apiVersion ?? "2024-05-01-preview",
    },
  );
}

export function _testProfileAdministrationGetTestProfileSend(
  context: Client,
  testProfileId: string,
  options: TestProfileAdministrationGetTestProfileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-profiles/{testProfileId}{?api%2Dversion}",
    {
      testProfileId: testProfileId,
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

export async function _testProfileAdministrationGetTestProfileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileDeserializer(result.body);
}

/** Get load test profile details by test profile Id. */
export async function testProfileAdministrationGetTestProfile(
  context: Client,
  testProfileId: string,
  options: TestProfileAdministrationGetTestProfileOptionalParams = { requestOptions: {} },
): Promise<TestProfile> {
  const result = await _testProfileAdministrationGetTestProfileSend(
    context,
    testProfileId,
    options,
  );
  return _testProfileAdministrationGetTestProfileDeserialize(result);
}

export function _testProfileAdministrationDeleteTestProfileSend(
  context: Client,
  testProfileId: string,
  options: TestProfileAdministrationDeleteTestProfileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-profiles/{testProfileId}{?api%2Dversion}",
    {
      testProfileId: testProfileId,
      "api%2Dversion": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _testProfileAdministrationDeleteTestProfileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a test profile by its test profile Id. */
export async function testProfileAdministrationDeleteTestProfile(
  context: Client,
  testProfileId: string,
  options: TestProfileAdministrationDeleteTestProfileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _testProfileAdministrationDeleteTestProfileSend(
    context,
    testProfileId,
    options,
  );
  return _testProfileAdministrationDeleteTestProfileDeserialize(result);
}

export function _testProfileAdministrationCreateOrUpdateTestProfileSend(
  context: Client,
  testProfileId: string,
  body: TestProfile,
  options: TestProfileAdministrationCreateOrUpdateTestProfileOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-profiles/{testProfileId}{?api%2Dversion}",
    {
      testProfileId: testProfileId,
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
      body: testProfileSerializer(body),
    });
}

export async function _testProfileAdministrationCreateOrUpdateTestProfileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfile> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileDeserializer(result.body);
}

/** Create a new test profile or update an existing test profile by providing the test profile Id. */
export async function testProfileAdministrationCreateOrUpdateTestProfile(
  context: Client,
  testProfileId: string,
  body: TestProfile,
  options: TestProfileAdministrationCreateOrUpdateTestProfileOptionalParams = {
    requestOptions: {},
  },
): Promise<TestProfile> {
  const result = await _testProfileAdministrationCreateOrUpdateTestProfileSend(
    context,
    testProfileId,
    body,
    options,
  );
  return _testProfileAdministrationCreateOrUpdateTestProfileDeserialize(result);
}
