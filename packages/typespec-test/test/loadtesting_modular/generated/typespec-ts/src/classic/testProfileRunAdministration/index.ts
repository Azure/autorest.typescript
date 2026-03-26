// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestServiceContext } from "../../api/loadTestServiceContext.js";
import {
  testProfileRunAdministrationListTestProfileRuns,
  testProfileRunAdministrationStop,
  testProfileRunAdministrationDeleteTestProfileRun,
  testProfileRunAdministrationCreateOrUpdateTestProfileRun,
  testProfileRunAdministrationGetTestProfileRun,
} from "../../api/testProfileRunAdministration/operations.js";
import {
  TestProfileRunAdministrationListTestProfileRunsOptionalParams,
  TestProfileRunAdministrationStopOptionalParams,
  TestProfileRunAdministrationDeleteTestProfileRunOptionalParams,
  TestProfileRunAdministrationCreateOrUpdateTestProfileRunOptionalParams,
  TestProfileRunAdministrationGetTestProfileRunOptionalParams,
} from "../../api/testProfileRunAdministration/options.js";
import { TestProfileRun } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a TestProfileRunAdministration operations. */
export interface TestProfileRunAdministrationOperations {
  /** Get all test profile runs for the given filters. */
  listTestProfileRuns: (
    options?: TestProfileRunAdministrationListTestProfileRunsOptionalParams,
  ) => PagedAsyncIterableIterator<TestProfileRun>;
  /** Stop test profile run for the given test profile run Id. */
  stop: (
    testProfileRunId: string,
    options?: TestProfileRunAdministrationStopOptionalParams,
  ) => Promise<TestProfileRun>;
  /** Delete an existing load test profile run by providing the test profile run Id. */
  deleteTestProfileRun: (
    testProfileRunId: string,
    options?: TestProfileRunAdministrationDeleteTestProfileRunOptionalParams,
  ) => Promise<void>;
  /** Create and start a new test profile run with the given test profile run Id. */
  createOrUpdateTestProfileRun: (
    testProfileRunId: string,
    body: TestProfileRun,
    options?: TestProfileRunAdministrationCreateOrUpdateTestProfileRunOptionalParams,
  ) => Promise<TestProfileRun>;
  /** Get test profile run details by test profile run Id. */
  getTestProfileRun: (
    testProfileRunId: string,
    options?: TestProfileRunAdministrationGetTestProfileRunOptionalParams,
  ) => Promise<TestProfileRun>;
}

function _getTestProfileRunAdministration(context: LoadTestServiceContext) {
  return {
    listTestProfileRuns: (
      options?: TestProfileRunAdministrationListTestProfileRunsOptionalParams,
    ) => testProfileRunAdministrationListTestProfileRuns(context, options),
    stop: (testProfileRunId: string, options?: TestProfileRunAdministrationStopOptionalParams) =>
      testProfileRunAdministrationStop(context, testProfileRunId, options),
    deleteTestProfileRun: (
      testProfileRunId: string,
      options?: TestProfileRunAdministrationDeleteTestProfileRunOptionalParams,
    ) => testProfileRunAdministrationDeleteTestProfileRun(context, testProfileRunId, options),
    createOrUpdateTestProfileRun: (
      testProfileRunId: string,
      body: TestProfileRun,
      options?: TestProfileRunAdministrationCreateOrUpdateTestProfileRunOptionalParams,
    ) =>
      testProfileRunAdministrationCreateOrUpdateTestProfileRun(
        context,
        testProfileRunId,
        body,
        options,
      ),
    getTestProfileRun: (
      testProfileRunId: string,
      options?: TestProfileRunAdministrationGetTestProfileRunOptionalParams,
    ) => testProfileRunAdministrationGetTestProfileRun(context, testProfileRunId, options),
  };
}

export function _getTestProfileRunAdministrationOperations(
  context: LoadTestServiceContext,
): TestProfileRunAdministrationOperations {
  return {
    ..._getTestProfileRunAdministration(context),
  };
}
