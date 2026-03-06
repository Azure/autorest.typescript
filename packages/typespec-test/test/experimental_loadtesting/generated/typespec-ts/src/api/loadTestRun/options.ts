// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TimeGrain, MetricRequestPayload } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface LoadTestRunGetServerMetricsConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestRunCreateOrUpdateServerMetricsConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestRunGetAppComponentsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestRunCreateOrUpdateAppComponentsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestRunListMetricDimensionValuesOptionalParams extends OperationOptions {
  /** The interval (i.e. timegrain) of the query. */
  interval?: TimeGrain;
}

/** Optional parameters. */
export interface LoadTestRunListMetricsOptionalParams extends OperationOptions {
  /** The aggregation */
  aggregation?: string;
  /** The interval (i.e. timegrain) of the query. */
  interval?: TimeGrain;
  /** Metric dimension filter */
  body?: MetricRequestPayload;
}

/** Optional parameters. */
export interface LoadTestRunListMetricDefinitionsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestRunListMetricNamespacesOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestRunStopOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestRunGetTestRunFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestRunListTestRunsOptionalParams extends OperationOptions {
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

/** Optional parameters. */
export interface LoadTestRunDeleteTestRunOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestRunCreateOrUpdateTestRunOptionalParams extends OperationOptions {
  /**
   * Existing test run identifier that should be rerun, if this is provided, the
   * test will run with the JMX file, configuration and app components from the
   * existing test run. You can override the configuration values for new test run
   * in the request body.
   */
  oldTestRunId?: string;
}

/** Optional parameters. */
export interface LoadTestRunGetTestRunOptionalParams extends OperationOptions {}
