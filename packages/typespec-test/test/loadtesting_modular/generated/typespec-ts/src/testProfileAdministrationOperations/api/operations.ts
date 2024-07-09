// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  targetResourceConfigurationsUnionSerializer,
  TestProfile,
  _PagedTestProfile,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import {
  isUnexpected,
  LoadTestServiceContext as Client,
  TestProfileAdministrationCreateOrUpdateTestProfile200Response,
  TestProfileAdministrationCreateOrUpdateTestProfile201Response,
  TestProfileAdministrationCreateOrUpdateTestProfileDefaultResponse,
  TestProfileAdministrationDeleteTestProfile204Response,
  TestProfileAdministrationDeleteTestProfileDefaultResponse,
  TestProfileAdministrationGetTestProfile200Response,
  TestProfileAdministrationGetTestProfileDefaultResponse,
  TestProfileAdministrationListTestProfiles200Response,
  TestProfileAdministrationListTestProfilesDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
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
): StreamableMethod<
  | TestProfileAdministrationCreateOrUpdateTestProfile200Response
  | TestProfileAdministrationCreateOrUpdateTestProfile201Response
  | TestProfileAdministrationCreateOrUpdateTestProfileDefaultResponse
> {
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
  result:
    | TestProfileAdministrationCreateOrUpdateTestProfile200Response
    | TestProfileAdministrationCreateOrUpdateTestProfile201Response
    | TestProfileAdministrationCreateOrUpdateTestProfileDefaultResponse,
): Promise<TestProfile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    testProfileId: result.body["testProfileId"],
    displayName: result.body["displayName"],
    description: result.body["description"],
    testId: result.body["testId"],
    targetResourceId: result.body["targetResourceId"],
    targetResourceConfigurations: !result.body.targetResourceConfigurations
      ? undefined
      : { kind: result.body.targetResourceConfigurations?.["kind"] },
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
): StreamableMethod<
  | TestProfileAdministrationDeleteTestProfile204Response
  | TestProfileAdministrationDeleteTestProfileDefaultResponse
> {
  return context
    .path("/test-profiles/{testProfileId}", testProfileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTestProfileDeserialize(
  result:
    | TestProfileAdministrationDeleteTestProfile204Response
    | TestProfileAdministrationDeleteTestProfileDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
): StreamableMethod<
  | TestProfileAdministrationGetTestProfile200Response
  | TestProfileAdministrationGetTestProfileDefaultResponse
> {
  return context
    .path("/test-profiles/{testProfileId}", testProfileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestProfileDeserialize(
  result:
    | TestProfileAdministrationGetTestProfile200Response
    | TestProfileAdministrationGetTestProfileDefaultResponse,
): Promise<TestProfile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    testProfileId: result.body["testProfileId"],
    displayName: result.body["displayName"],
    description: result.body["description"],
    testId: result.body["testId"],
    targetResourceId: result.body["targetResourceId"],
    targetResourceConfigurations: !result.body.targetResourceConfigurations
      ? undefined
      : { kind: result.body.targetResourceConfigurations?.["kind"] },
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
): StreamableMethod<
  | TestProfileAdministrationListTestProfiles200Response
  | TestProfileAdministrationListTestProfilesDefaultResponse
> {
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
  result:
    | TestProfileAdministrationListTestProfiles200Response
    | TestProfileAdministrationListTestProfilesDefaultResponse,
): Promise<_PagedTestProfile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
      return {
        testProfileId: p["testProfileId"],
        displayName: p["displayName"],
        description: p["description"],
        testId: p["testId"],
        targetResourceId: p["targetResourceId"],
        targetResourceConfigurations: !p.targetResourceConfigurations
          ? undefined
          : { kind: p.targetResourceConfigurations?.["kind"] },
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

/** Get all test profiles for the given filters. */
export function listTestProfiles(
  context: Client,
  options: ListTestProfilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestProfile> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestProfilesSend(context, options),
    _listTestProfilesDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
