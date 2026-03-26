// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestServiceContext } from "../../api/loadTestServiceContext.js";
import {
  testProfileAdministrationListTestProfiles,
  testProfileAdministrationGetTestProfile,
  testProfileAdministrationDeleteTestProfile,
  testProfileAdministrationCreateOrUpdateTestProfile,
} from "../../api/testProfileAdministration/operations.js";
import {
  TestProfileAdministrationListTestProfilesOptionalParams,
  TestProfileAdministrationGetTestProfileOptionalParams,
  TestProfileAdministrationDeleteTestProfileOptionalParams,
  TestProfileAdministrationCreateOrUpdateTestProfileOptionalParams,
} from "../../api/testProfileAdministration/options.js";
import { TestProfile } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a TestProfileAdministration operations. */
export interface TestProfileAdministrationOperations {
  /** Get all test profiles for the given filters. */
  listTestProfiles: (
    options?: TestProfileAdministrationListTestProfilesOptionalParams,
  ) => PagedAsyncIterableIterator<TestProfile>;
  /** Get load test profile details by test profile Id. */
  getTestProfile: (
    testProfileId: string,
    options?: TestProfileAdministrationGetTestProfileOptionalParams,
  ) => Promise<TestProfile>;
  /** Delete a test profile by its test profile Id. */
  deleteTestProfile: (
    testProfileId: string,
    options?: TestProfileAdministrationDeleteTestProfileOptionalParams,
  ) => Promise<void>;
  /** Create a new test profile or update an existing test profile by providing the test profile Id. */
  createOrUpdateTestProfile: (
    testProfileId: string,
    body: TestProfile,
    options?: TestProfileAdministrationCreateOrUpdateTestProfileOptionalParams,
  ) => Promise<TestProfile>;
}

function _getTestProfileAdministration(context: LoadTestServiceContext) {
  return {
    listTestProfiles: (options?: TestProfileAdministrationListTestProfilesOptionalParams) =>
      testProfileAdministrationListTestProfiles(context, options),
    getTestProfile: (
      testProfileId: string,
      options?: TestProfileAdministrationGetTestProfileOptionalParams,
    ) => testProfileAdministrationGetTestProfile(context, testProfileId, options),
    deleteTestProfile: (
      testProfileId: string,
      options?: TestProfileAdministrationDeleteTestProfileOptionalParams,
    ) => testProfileAdministrationDeleteTestProfile(context, testProfileId, options),
    createOrUpdateTestProfile: (
      testProfileId: string,
      body: TestProfile,
      options?: TestProfileAdministrationCreateOrUpdateTestProfileOptionalParams,
    ) => testProfileAdministrationCreateOrUpdateTestProfile(context, testProfileId, body, options),
  };
}

export function _getTestProfileAdministrationOperations(
  context: LoadTestServiceContext,
): TestProfileAdministrationOperations {
  return {
    ..._getTestProfileAdministration(context),
  };
}
