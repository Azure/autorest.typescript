// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Load test model */
export interface Test {
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
  /** The load test configuration. */
  loadTestConfiguration?: LoadTestConfiguration;
  /** The input artifacts for the test. */
  readonly inputArtifacts?: TestInputArtifacts;
  /** Unique test name as identifier. */
  readonly testId?: string;
  /** The test description. */
  description?: string;
  /** Display name of a test. */
  displayName?: string;
  /** Subnet ID on which the load test instances should run. */
  subnetId?: string;
  /** Type of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityType?: string;
  /** Resource Id of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** Pass fail criteria for a test. */
export interface PassFailCriteria {
  /** Map of id and pass fail metrics { id  : pass fail metrics }. */
  passFailMetrics?: Record<string, PassFailMetric>;
}

/** Pass fail metric */
export interface PassFailMetric {
  /** The client metric on which the criteria should be applied. */
  clientMetric?: PFMetrics;
  /**
   * The aggregation function to be applied on the client metric. Allowed functions
   * - ‘percentage’ - for error metric , ‘avg’, ‘p50’, ‘p90’, ‘p95’, ‘p99’, ‘min’,
   * ‘max’ - for response_time_ms and latency metric, ‘avg’ - for requests_per_sec,
   * ‘count’ - for requests
   */
  aggregate?: PFAgFunc;
  /** The comparison operator. Supported types ‘>’, ‘<’ */
  condition?: string;
  /** Request name for which the Pass fail criteria has to be applied */
  requestName?: string;
  /**
   * The value to compare with the client metric. Allowed values - ‘error : [0.0 ,
   * 100.0] unit- % ’, response_time_ms and latency : any integer value unit- ms.
   */
  value?: number;
  /** Action taken after the threshold is met. Default is ‘continue’. */
  action?: PFAction;
  /** The actual value of the client metric for the test run. */
  readonly actualValue?: number;
  /** Outcome of the test run. */
  readonly result?: PFResult;
}

/** "response_time_ms", "latency", "error", "requests", "requests_per_sec" */
export type PFMetrics = string;
/** "count", "percentage", "avg", "p50", "p90", "p95", "p99", "min", "max" */
export type PFAgFunc = string;
/** "continue", "stop" */
export type PFAction = string;
/** "passed", "undetermined", "failed" */
export type PFResult = string;

/** Secret */
export interface Secret {
  /** The value of the secret for the respective type */
  value?: string;
  /** Type of secret */
  type?: SecretType;
}

/** "AKV_SECRET_URI", "SECRET_VALUE" */
export type SecretType = string;

/** Certificates metadata */
export interface CertificateMetadata {
  /** The value of the certificate for respective type */
  value?: string;
  /** Type of certificate */
  type?: CertificateType;
  /** Name of the certificate. */
  name?: string;
}

/** "AKV_CERT_URI" */
export type CertificateType = string;

/** The load test configuration. */
export interface LoadTestConfiguration {
  /**
   * The number of engine instances to execute load test. Supported values are in
   * range of 1-45. Required for creating a new test.
   */
  engineInstances?: number;
  /**
   * If false, Azure Load Testing copies and processes your input files unmodified
   * across all test engine instances. If true, Azure Load Testing splits the CSV
   * input data evenly across all engine instances. If you provide multiple CSV
   * files, each file will be split evenly.
   */
  splitAllCSVs?: boolean;
  /**
   * If true, optionalLoadTestConfig is required and JMX script for the load test is
   * not required to upload.
   */
  quickStartTest?: boolean;
  /** Optional load test config */
  optionalLoadTestConfig?: OptionalLoadTestConfig;
}

/** Optional load test config */
export interface OptionalLoadTestConfig {
  /**
   * Test URL. Provide the complete HTTP URL. For example,
   * http://contoso-app.azurewebsites.net/login
   */
  endpointUrl?: string;
  /** No of concurrent virtual users */
  virtualUsers?: number;
  /** Ramp up time */
  rampUpTime?: number;
  /** Test run duration */
  duration?: number;
}

/** The input artifacts for the test. */
export interface TestInputArtifacts {
  /** File info */
  configFileInfo?: FileInfo;
  /** File info */
  testScriptFileInfo?: FileInfo;
  /** File info */
  userPropFileInfo?: FileInfo;
  /** File info */
  inputArtifactsZipFileInfo?: FileInfo;
  /** Additional supported files for the test run */
  readonly additionalFileInfo?: FileInfo[];
}

/** File info */
export interface FileInfo {
  /** File URL. */
  url?: string;
  /** Name of the file. */
  fileName?: string;
  /** File type */
  fileType?: FileType;
  /** Expiry time of the file (ISO 8601 literal format) */
  expireDateTime?: string;
  /** Validation status of the file */
  validationStatus?: FileStatus;
  /** Validation failure error details */
  validationFailureDetails?: string;
}

/** "JMX_FILE", "USER_PROPERTIES", "ADDITIONAL_ARTIFACTS" */
export type FileType = string;
/** "NOT_VALIDATED", "VALIDATION_SUCCESS", "VALIDATION_FAILURE", "VALIDATION_INITIATED", "VALIDATION_NOT_REQUIRED" */
export type FileStatus = string;

/**
 * An Azure resource object (Refer azure generic resource model :
 * https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id#genericresource)
 */
export interface AppComponent {
  /**
   * fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}
   */
  readonly resourceId?: string;
  /** Azure resource name, required while creating the app component. */
  resourceName?: string;
  /** Azure resource type, required while creating the app component. */
  resourceType?: string;
  /** Azure resource display name */
  displayName?: string;
  /** Resource group name of the Azure resource */
  readonly resourceGroup?: string;
  /** Subscription Id of the Azure resource */
  readonly subscriptionId?: string;
  /** Kind of Azure resource type */
  kind?: string;
}

/**
 * Associated metric definition for particular metrics of the azure resource (
 * Refer :
 * https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition).
 */
export interface ResourceMetric {
  /** Unique name for metric. */
  readonly id?: string;
  /** Azure resource id. */
  resourceId: string;
  /** Metric name space. */
  metricNamespace: string;
  /** Metric description. */
  displayDescription?: string;
  /** The invariant value of metric name */
  name: string;
  /** Metric aggregation. */
  aggregation: string;
  /** Metric unit. */
  unit?: string;
  /** Azure resource type. */
  resourceType: string;
}

/** Load test run model */
export interface TestRun {
  /** Unique test run name as identifier */
  readonly testRunId: string;
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
  readonly errorDetails?: ErrorDetails[];
  /** Test run statistics. */
  readonly testRunStatistics?: Record<string, TestRunStatistics>;
  /** The load test configuration. */
  loadTestConfiguration?: LoadTestConfiguration;
  /** Collection of test run artifacts */
  readonly testArtifacts?: TestRunArtifacts;
  /** Test result for pass/Fail criteria used during the test run. */
  readonly testResult?: PFTestResult;
  /** Number of virtual users, for which test has been run. */
  readonly virtualUsers?: number;
  /** Display name of a testRun. */
  displayName?: string;
  /** Associated test Id. */
  testId?: string;
  /** The test run description. */
  description?: string;
  /** The test run status. */
  readonly status?: Status;
  /** The test run start DateTime(ISO 8601 literal format). */
  readonly startDateTime?: string;
  /** The test run end DateTime(ISO 8601 literal format). */
  readonly endDateTime?: string;
  /** Test run initiated time. */
  readonly executedDateTime?: string;
  /** Portal url. */
  readonly portalUrl?: string;
  /** Test run duration in milliseconds. */
  readonly duration?: number;
  /** Subnet ID on which the load test instances should run. */
  readonly subnetId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** Error details if there is any failure in load test run */
export interface ErrorDetails {
  /** Error details in case test run was not successfully run. */
  readonly message?: string;
}

/** Test run statistics. */
export interface TestRunStatistics {
  /** Transaction name. */
  readonly transaction?: string;
  /** Sampler count. */
  readonly sampleCount?: number;
  /** Error count. */
  readonly errorCount?: number;
  /** Error percentage. */
  readonly errorPct?: number;
  /** Mean response time. */
  readonly meanResTime?: number;
  /** Median response time. */
  readonly medianResTime?: number;
  /** Max response time. */
  readonly maxResTime?: number;
  /** Minimum response time. */
  readonly minResTime?: number;
  /** 90 percentile response time. */
  readonly pct1ResTime?: number;
  /** 95 percentile response time. */
  readonly pct2ResTime?: number;
  /** 99 percentile response time. */
  readonly pct3ResTime?: number;
  /** Throughput. */
  readonly throughput?: number;
  /** Received network bytes. */
  readonly receivedKBytesPerSec?: number;
  /** Send network bytes. */
  readonly sentKBytesPerSec?: number;
}

/** Collection of test run artifacts */
export interface TestRunArtifacts {
  /** The input artifacts for the test run. */
  readonly inputArtifacts?: TestRunInputArtifacts;
  /** The output artifacts for the test run. */
  outputArtifacts?: TestRunOutputArtifacts;
}

/** The input artifacts for the test run. */
export interface TestRunInputArtifacts {
  /** File info */
  configFileInfo?: FileInfo;
  /** File info */
  testScriptFileInfo?: FileInfo;
  /** File info */
  userPropFileInfo?: FileInfo;
  /** File info */
  inputArtifactsZipFileInfo?: FileInfo;
  /** Additional supported files for the test run */
  readonly additionalFileInfo?: FileInfo[];
}

/** The output artifacts for the test run. */
export interface TestRunOutputArtifacts {
  /** File info */
  resultFileInfo?: FileInfo;
  /** File info */
  logsFileInfo?: FileInfo;
}

/** "PASSED", "NOT_APPLICABLE", "FAILED" */
export type PFTestResult = string;
/** "ACCEPTED", "NOTSTARTED", "PROVISIONING", "PROVISIONED", "CONFIGURING", "CONFIGURED", "EXECUTING", "EXECUTED", "DEPROVISIONING", "DEPROVISIONED", "DONE", "CANCELLING", "CANCELLED", "FAILED", "VALIDATION_SUCCESS", "VALIDATION_FAILURE" */
export type Status = string;

/** Test run app component */
export interface TestRunAppComponents {
  /**
   * Azure resource collection { resource id (fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName})
   * : resource object }
   */
  components: Record<string, AppComponent>;
  /** Test run identifier */
  readonly testRunId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** Test run server metrics configuration */
export interface TestRunServerMetricConfig {
  /** Test run identifier */
  readonly testRunId?: string;
  /**
   * Azure resource metrics collection {metric id : metrics object} (Refer :
   * https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition
   * for metric id).
   */
  metrics?: Record<string, ResourceMetric>;
  /** The creation datetime(ISO 8601 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** Represents collection of metric definitions. */
export interface MetricDefinitionCollection {
  /** the values for the metric definitions. */
  value: MetricDefinition[];
}

/** Metric definition */
export interface MetricDefinition {
  /** List of dimensions */
  dimensions?: NameAndDesc[];
  /** The metric description */
  description?: string;
  /** The metric name */
  name?: string;
  /** The namespace the metric belongs to. */
  namespace?: string;
  /** The primary aggregation type value defining how to use the values for display. */
  primaryAggregationType?: AggregationType;
  /** The collection of what all aggregation types are supported. */
  supportedAggregationTypes?: string[];
  /** The unit of the metric. */
  unit?: MetricUnit;
  /**
   * Metric availability specifies the time grain (aggregation interval or
   * frequency).
   */
  metricAvailabilities?: MetricAvailability[];
}

/** The name and description */
export interface NameAndDesc {
  /** The description */
  description?: string;
  /** The name */
  name?: string;
}

/** "Average", "Count", "None", "Total", "Percentile90", "Percentile95", "Percentile99" */
export type AggregationType = string;
/** "NotSpecified", "Percent", "Count", "Seconds", "Milliseconds", "Bytes", "BytesPerSecond", "CountPerSecond" */
export type MetricUnit = string;

/** Metric availability specifies the time grain (aggregation interval or frequency) */
export interface MetricAvailability {
  /**
   * The time grain specifies the aggregation interval for the metric. Expressed as
   * a duration 'PT1M', 'PT1H', etc.
   */
  timeGrain?: TimeGrain;
}

/** "PT5S", "PT10S", "PT1M", "PT5M", "PT1H" */
export type TimeGrain = string;

/** Represents collection of metric namespaces. */
export interface MetricNamespaceCollection {
  /** The values for the metric namespaces. */
  value: MetricNamespace[];
}

/** Metric namespace class specifies the metadata for a metric namespace. */
export interface MetricNamespace {
  /** The namespace description. */
  description?: string;
  /** The metric namespace name. */
  name?: string;
}

/** Filters to fetch the set of metric */
export interface MetricRequestPayload {
  /**
   * Get metrics for specific dimension values. Example: Metric contains dimension
   * like SamplerName, Error. To retrieve all the time series data where SamplerName
   * is equals to HTTPRequest1 or HTTPRequest2, the DimensionFilter value will be
   * {"SamplerName", ["HTTPRequest1", "HTTPRequest2"}
   */
  filters?: DimensionFilter[];
}

/** Dimension name and values to filter */
export interface DimensionFilter {
  /** The dimension name */
  name?: string;
  /** The dimension values. Maximum values can be 20. */
  values?: string[];
}

/** The response to a metrics query. */
export interface PagedTimeSeriesElement {
  /** The TimeSeriesElement items on this page */
  value: TimeSeriesElement[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The time series returned when a data query is performed. */
export interface TimeSeriesElement {
  /** An array of data points representing the metric values. */
  data?: MetricValue[];
  /** The dimension values */
  dimensionValues?: DimensionValue[];
}

/** Represents a metric value. */
export interface MetricValue {
  /** The timestamp for the metric value in ISO 8601 format. */
  timestamp?: string;
  /** The metric value. */
  value?: number;
}

/** Represents a metric dimension value. */
export interface DimensionValue {
  /** The name of the dimension. */
  name?: string;
  /** The value of the dimension. */
  value?: string;
}

/** Collection of test runs */
export interface PagedTestRun {
  /** The TestRun items on this page */
  value: TestRun[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** "PT5S", "PT10S", "PT1M", "PT5M", "PT1H" */
export type Interval = string;

/** Paged collection of DimensionValueList items */
export interface PagedDimensionValueList {
  /** The DimensionValueList items on this page */
  value: DimensionValueList[];
  /** The link to the next page of items */
  nextLink?: string;
}

export interface DimensionValueList {
  value: string[];
}
