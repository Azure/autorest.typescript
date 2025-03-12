// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type {
  Test,
  FileType,
  TestAppComponents,
  TestServerMetricConfig,
  TestRun,
  Interval,
  MetricRequestPayload,
  TestRunAppComponents,
  TestRunServerMetricConfig,
} from "./models.js";

/** Load test model */
export type TestResourceMergeAndPatch = Partial<Test>;

export interface LoadTestAdministrationCreateOrUpdateTestBodyParam {
  /** Load test model */
  body: TestResourceMergeAndPatch;
}

export interface LoadTestAdministrationCreateOrUpdateTestMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type LoadTestAdministrationCreateOrUpdateTestParameters =
  LoadTestAdministrationCreateOrUpdateTestMediaTypesParam &
    LoadTestAdministrationCreateOrUpdateTestBodyParam &
    RequestParameters;
export type LoadTestAdministrationDeleteTestParameters = RequestParameters;
export type LoadTestAdministrationGetTestParameters = RequestParameters;

export interface LoadTestAdministrationListTestsQueryParamProperties {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg:
   * lastModifiedDateTime asc. Supported fields - lastModifiedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - displayName,
   * createdBy. For example, to search for a test, with display name is Login Test,
   * the search parameter can be Login.
   */
  search?: string;
  /**
   * Start DateTime(ISO 8601 literal format) of the last updated time range to
   * filter tests.
   */
  lastModifiedStartTime?: string;
  /**
   * End DateTime(ISO 8601 literal format) of the last updated time range to filter
   * tests.
   */
  lastModifiedEndTime?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface LoadTestAdministrationListTestsQueryParam {
  queryParameters?: LoadTestAdministrationListTestsQueryParamProperties;
}

export type LoadTestAdministrationListTestsParameters =
  LoadTestAdministrationListTestsQueryParam & RequestParameters;

export interface LoadTestAdministrationUploadTestFileBodyParam {
  /**
   * Represent a byte array
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface LoadTestAdministrationUploadTestFileQueryParamProperties {
  /** File type */
  fileType?: FileType;
}

export interface LoadTestAdministrationUploadTestFileQueryParam {
  queryParameters?: LoadTestAdministrationUploadTestFileQueryParamProperties;
}

export interface LoadTestAdministrationUploadTestFileMediaTypesParam {
  contentType: "application/octet-stream";
}

export type LoadTestAdministrationUploadTestFileParameters =
  LoadTestAdministrationUploadTestFileQueryParam &
    LoadTestAdministrationUploadTestFileMediaTypesParam &
    LoadTestAdministrationUploadTestFileBodyParam &
    RequestParameters;
export type LoadTestAdministrationGetTestFileParameters = RequestParameters;
export type LoadTestAdministrationDeleteTestFileParameters = RequestParameters;
export type LoadTestAdministrationListTestFilesParameters = RequestParameters;
/** Test app component */
export type TestAppComponentsResourceMergeAndPatch = Partial<TestAppComponents>;

export interface LoadTestAdministrationCreateOrUpdateAppComponentsBodyParam {
  /** Test app component */
  body: TestAppComponentsResourceMergeAndPatch;
}

export interface LoadTestAdministrationCreateOrUpdateAppComponentsMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type LoadTestAdministrationCreateOrUpdateAppComponentsParameters =
  LoadTestAdministrationCreateOrUpdateAppComponentsMediaTypesParam &
    LoadTestAdministrationCreateOrUpdateAppComponentsBodyParam &
    RequestParameters;
export type LoadTestAdministrationGetAppComponentsParameters =
  RequestParameters;
/** Test server metrics configuration */
export type TestServerMetricConfigResourceMergeAndPatch =
  Partial<TestServerMetricConfig>;

export interface LoadTestAdministrationCreateOrUpdateServerMetricsConfigBodyParam {
  /** Test server metrics configuration */
  body: TestServerMetricConfigResourceMergeAndPatch;
}

export interface LoadTestAdministrationCreateOrUpdateServerMetricsConfigMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type LoadTestAdministrationCreateOrUpdateServerMetricsConfigParameters =
  LoadTestAdministrationCreateOrUpdateServerMetricsConfigMediaTypesParam &
    LoadTestAdministrationCreateOrUpdateServerMetricsConfigBodyParam &
    RequestParameters;
export type LoadTestAdministrationGetServerMetricsConfigParameters =
  RequestParameters;
export type LoadTestRunDeleteTestRunParameters = RequestParameters;
/** Load test run model */
export type TestRunResourceMergeAndPatch = Partial<TestRun>;

export interface LoadTestRunCreateOrUpdateTestRunBodyParam {
  /** Load test run model */
  body: TestRunResourceMergeAndPatch;
}

export interface LoadTestRunCreateOrUpdateTestRunQueryParamProperties {
  /**
   * Existing test run identifier that should be rerun, if this is provided, the
   * test will run with the JMX file, configuration and app components from the
   * existing test run. You can override the configuration values for new test run
   * in the request body.
   */
  oldTestRunId?: string;
}

export interface LoadTestRunCreateOrUpdateTestRunQueryParam {
  queryParameters?: LoadTestRunCreateOrUpdateTestRunQueryParamProperties;
}

export interface LoadTestRunCreateOrUpdateTestRunMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type LoadTestRunCreateOrUpdateTestRunParameters =
  LoadTestRunCreateOrUpdateTestRunQueryParam &
    LoadTestRunCreateOrUpdateTestRunMediaTypesParam &
    LoadTestRunCreateOrUpdateTestRunBodyParam &
    RequestParameters;
export type LoadTestRunGetTestRunParameters = RequestParameters;
export type LoadTestRunGetTestRunFileParameters = RequestParameters;

export interface LoadTestRunListTestRunsQueryParamProperties {
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

export interface LoadTestRunListTestRunsQueryParam {
  queryParameters?: LoadTestRunListTestRunsQueryParamProperties;
}

export type LoadTestRunListTestRunsParameters =
  LoadTestRunListTestRunsQueryParam & RequestParameters;
export type LoadTestRunStopTestRunParameters = RequestParameters;
export type LoadTestRunListMetricNamespacesParameters = RequestParameters;

export interface LoadTestRunListMetricDefinitionsQueryParamProperties {
  /** Metric namespace to query metric definitions for. */
  metricNamespace?: string;
}

export interface LoadTestRunListMetricDefinitionsQueryParam {
  queryParameters?: LoadTestRunListMetricDefinitionsQueryParamProperties;
}

export type LoadTestRunListMetricDefinitionsParameters =
  LoadTestRunListMetricDefinitionsQueryParam & RequestParameters;

export interface LoadTestRunListMetricsBodyParam {
  /** Filters to fetch the set of metric */
  body: MetricRequestPayload;
}

export interface LoadTestRunListMetricsQueryParamProperties {
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

export interface LoadTestRunListMetricsQueryParam {
  queryParameters?: LoadTestRunListMetricsQueryParamProperties;
}

export type LoadTestRunListMetricsParameters =
  LoadTestRunListMetricsQueryParam &
    LoadTestRunListMetricsBodyParam &
    RequestParameters;

export interface LoadTestRunListMetricDimensionValuesQueryParamProperties {
  /** The interval (i.e. timegrain) of the query. */
  interval?: Interval;
  /** Metric name */
  metricName?: string;
  /** Metric namespace to query metric definitions for. */
  metricNamespace: string;
  /**
   * The timespan of the query. It is a string with the following format
   * 'startDateTime_ISO/endDateTime_ISO'.
   */
  timespan?: string;
}

export interface LoadTestRunListMetricDimensionValuesQueryParam {
  queryParameters: LoadTestRunListMetricDimensionValuesQueryParamProperties;
}

export type LoadTestRunListMetricDimensionValuesParameters =
  LoadTestRunListMetricDimensionValuesQueryParam & RequestParameters;
/** Test run app component */
export type TestRunAppComponentsResourceMergeAndPatch =
  Partial<TestRunAppComponents>;

export interface LoadTestRunCreateOrUpdateAppComponentsBodyParam {
  /** Test run app component */
  body: TestRunAppComponentsResourceMergeAndPatch;
}

export interface LoadTestRunCreateOrUpdateAppComponentsMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type LoadTestRunCreateOrUpdateAppComponentsParameters =
  LoadTestRunCreateOrUpdateAppComponentsMediaTypesParam &
    LoadTestRunCreateOrUpdateAppComponentsBodyParam &
    RequestParameters;
export type LoadTestRunGetAppComponentsParameters = RequestParameters;
/** Test run server metrics configuration */
export type TestRunServerMetricConfigResourceMergeAndPatch =
  Partial<TestRunServerMetricConfig>;

export interface LoadTestRunCreateOrUpdateServerMetricsConfigBodyParam {
  /** Test run server metrics configuration */
  body: TestRunServerMetricConfigResourceMergeAndPatch;
}

export interface LoadTestRunCreateOrUpdateServerMetricsConfigMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type LoadTestRunCreateOrUpdateServerMetricsConfigParameters =
  LoadTestRunCreateOrUpdateServerMetricsConfigMediaTypesParam &
    LoadTestRunCreateOrUpdateServerMetricsConfigBodyParam &
    RequestParameters;
export type LoadTestRunTestRunListServerMetricsConfigParameters =
  RequestParameters;
