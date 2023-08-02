// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import {
  PassFailCriteria,
  Secret,
  CertificateMetadata,
  ErrorDetails,
  TestRunStatistics,
  LoadTestConfiguration,
  TestRunArtifacts,
  PFTestResult,
  Status,
  ResourceMetric,
  Interval,
  DimensionFilter,
} from "./models.js";

export interface TestRunOptions extends OperationOptions {
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteria;
  /**
   * Secrets can be stored in an Azure Key Vault or any other secret store. If the
   * secret is stored in an Azure Key Vault, the value should be the secret
   * identifier and the type should be AKV_SECRET_URI. If the secret is stored
   * elsewhere, the secret value should be provided directly and the type should be
   * SECRET_VALUE.
   */
  secrets?: Record<string, Secret>;
  /** Certificates metadata */
  certificate?: CertificateMetadata;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** Error details if there is any failure in load test run */
  errorDetails?: ErrorDetails[];
  /** Test run statistics. */
  testRunStatistics?: Record<string, TestRunStatistics>;
  /** The load test configuration. */
  loadTestConfiguration?: LoadTestConfiguration;
  /** Collection of test run artifacts */
  testArtifacts?: TestRunArtifacts;
  /** Test result for pass/Fail criteria used during the test run. */
  testResult?: PFTestResult;
  /** Number of virtual users, for which test has been run. */
  virtualUsers?: number;
  /** Display name of a testRun. */
  displayName?: string;
  /** Associated test Id. */
  testId?: string;
  /** The test run description. */
  description?: string;
  /** The test run status. */
  status?: Status;
  /** The test run start DateTime(ISO 8601 literal format). */
  startDateTime?: any;
  /** The test run end DateTime(ISO 8601 literal format). */
  endDateTime?: any;
  /** Test run initiated time. */
  executedDateTime?: any;
  /** Portal url. */
  portalUrl?: string;
  /** Test run duration in milliseconds. */
  duration?: number;
  /** Subnet ID on which the load test instances should run. */
  subnetId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: any;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: any;
  /** The user that last modified. */
  lastModifiedBy?: string;
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

export interface CreateOrUpdateAppComponentsOptions extends OperationOptions {
  /** Test run identifier */
  testRunId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: any;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: any;
  /** The user that last modified. */
  lastModifiedBy?: string;
  contentType?: string;
}

export interface CreateOrUpdateServerMetricsConfigOptions
  extends OperationOptions {
  /** Test run identifier */
  testRunId?: string;
  /**
   * Azure resource metrics collection {metric id : metrics object} (Refer :
   * https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition
   * for metric id).
   */
  metrics?: Record<string, ResourceMetric>;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: any;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: any;
  /** The user that last modified. */
  lastModifiedBy?: string;
  contentType?: string;
}

export interface DeleteTestRunOptions extends OperationOptions {}

export interface GetAppComponentsOptions extends OperationOptions {}

export interface GetServerMetricsConfigOptions extends OperationOptions {}

export interface GetTestRunOptions extends OperationOptions {}

export interface GetTestRunFileOptions extends OperationOptions {}

export interface ListMetricDimensionValuesOptions extends OperationOptions {
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

export interface ListMetricDefinitionsOptions extends OperationOptions {
  /** Metric namespace to query metric definitions for. */
  metricNamespace?: string;
}

export interface ListMetricNamespacesOptions extends OperationOptions {}

export interface ListMetricsOptions extends OperationOptions {
  /**
   * Get metrics for specific dimension values. Example: Metric contains dimension
   * like SamplerName, Error. To retrieve all the time series data where SamplerName
   * is equals to HTTPRequest1 or HTTPRequest2, the DimensionFilter value will be
   * {"SamplerName", ["HTTPRequest1", "HTTPRequest2"}
   */
  filters?: DimensionFilter[];
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

export interface ListTestRunsOptions extends OperationOptions {
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
  executionFrom?: any;
  /** End DateTime(ISO 8601 literal format) of test-run execution time filter range. */
  executionTo?: any;
  /** Comma separated list of test run status. */
  status?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface StopTestRunOptions extends OperationOptions {}
