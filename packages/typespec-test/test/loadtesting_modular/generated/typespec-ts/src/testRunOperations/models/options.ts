// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { TimeGrain } from "./models.js";

export interface CreateOrUpdateTestRunOptionalParams extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
  /**
   * Existing test run identifier that should be rerun, if this is provided, the
   * test will run with the JMX file, configuration and app components from the
   * existing test run. You can override the configuration values for new test run
   * in the request body.
   */
  oldTestRunId?: string;
}

export interface CreateOrUpdateAppComponentsOptionalParams
  extends OperationOptions {
  /** Content type. */
  contentType?: string;
}

export interface CreateOrUpdateServerMetricsConfigOptionalParams
  extends OperationOptions {
  /** Content type. */
  contentType?: string;
}

export interface DeleteTestRunOptionalParams extends OperationOptions {}

export interface GetAppComponentsOptionalParams extends OperationOptions {}

export interface GetServerMetricsConfigOptionalParams
  extends OperationOptions {}

export interface GetTestRunOptionalParams extends OperationOptions {}

export interface GetTestRunFileOptionalParams extends OperationOptions {}

export interface ListMetricDimensionValuesOptionalParams
  extends OperationOptions {
  /** The interval (i.e. timegrain) of the query. */
  interval?: TimeGrain;
}

export interface ListMetricDefinitionsOptionalParams extends OperationOptions {}

export interface ListMetricNamespacesOptionalParams extends OperationOptions {}

export interface ListMetricsOptionalParams extends OperationOptions {
  /** The aggregation */
  aggregation?: string;
  /** The interval (i.e. timegrain) of the query. */
  interval?: TimeGrain;
}

export interface ListTestRunsOptionalParams extends OperationOptions {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg: executedDateTime
   * asc. Supported fields - executedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - description,
   * executedUser. For example, to search for a test run, with description 500 VUs,
   * the search parameter can be 500.
   */
  search?: string;
  /** Unique name of an existing load test. */
  testId?: string;
  /** Start DateTime(RFC 3339 literal format) of test-run execution time filter range. */
  executionFrom?: Date;
  /** End DateTime(RFC 3339 literal format) of test-run execution time filter range. */
  executionTo?: Date;
  /** Comma separated list of test run status. */
  status?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface StopTestRunOptionalParams extends OperationOptions {}
