// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { Interval } from "./models.js";

export interface TestRunOperationsTestRunOptions extends OperationOptions {
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

export interface TestRunOperationsCreateOrUpdateAppComponentsOptions
  extends OperationOptions {
  contentType?: string;
}

export interface TestRunOperationsCreateOrUpdateServerMetricsConfigOptions
  extends OperationOptions {
  contentType?: string;
}

export interface TestRunOperationsDeleteTestRunOptions
  extends OperationOptions {}

export interface TestRunOperationsGetAppComponentsOptions
  extends OperationOptions {}

export interface TestRunOperationsGetServerMetricsConfigOptions
  extends OperationOptions {}

export interface TestRunOperationsGetTestRunOptions extends OperationOptions {}

export interface TestRunOperationsGetTestRunFileOptions
  extends OperationOptions {}

export interface TestRunOperationsListMetricDimensionValuesOptions
  extends OperationOptions {
  /** The interval (i.e. timegrain) of the query. */
  interval?: Interval;
  /** Metric name */
  metricName?: string;
  /**
   * The timespan of the query. It is a string with the following format
   * 'startDateTime_ISO/endDateTime_ISO'.
   */
  timespan?: string;
}

export interface TestRunOperationsListMetricDefinitionsOptions
  extends OperationOptions {
  /** Metric namespace to query metric definitions for. */
  metricNamespace?: string;
}

export interface TestRunOperationsListMetricNamespacesOptions
  extends OperationOptions {}

export interface TestRunOperationsListMetricsOptions extends OperationOptions {
  /** The aggregation */
  aggregation?: string;
  /** The interval (i.e. timegrain) of the query. */
  interval?: Interval;
  /** Metric name */
  metricName?: string;
  /** Metric namespace to query metric definitions for. */
  metricNamespace?: string;
  /**
   * The timespan of the query. It is a string with the following format
   * 'startDateTime_ISO/endDateTime_ISO'.
   */
  timespan?: string;
}

export interface TestRunOperationsListTestRunsOptions extends OperationOptions {
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
  /** Start DateTime(ISO 8601 literal format) of test-run execution time filter range. */
  executionFrom?: string;
  /** End DateTime(ISO 8601 literal format) of test-run execution time filter range. */
  executionTo?: string;
  /** Comma separated list of test run status. */
  status?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface TestRunOperationsStopTestRunOptions extends OperationOptions {}
