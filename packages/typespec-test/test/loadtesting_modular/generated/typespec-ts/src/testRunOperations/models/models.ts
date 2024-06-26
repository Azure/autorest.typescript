// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  Test as TestRest,
  PassFailCriteria as PassFailCriteriaRest,
  PassFailMetric as PassFailMetricRest,
  Secret as SecretRest,
  CertificateMetadata as CertificateMetadataRest,
  LoadTestConfiguration as LoadTestConfigurationRest,
  OptionalLoadTestConfig as OptionalLoadTestConfigRest,
  TestAppComponents as TestAppComponentsRest,
  AppComponent as AppComponentRest,
  TestServerMetricConfig as TestServerMetricConfigRest,
  ResourceMetric as ResourceMetricRest,
  TestRun as TestRunRest,
  TestRunAppComponents as TestRunAppComponentsRest,
  TestRunServerMetricConfig as TestRunServerMetricConfigRest,
  MetricRequestPayload as MetricRequestPayloadRest,
  DimensionFilter as DimensionFilterRest,
} from "../../rest/index.js";

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

export function testSerializer(item: Test): TestRest {
  return {
    passFailCriteria: !item.passFailCriteria
      ? item.passFailCriteria
      : passFailCriteriaSerializer(item.passFailCriteria),
    secrets: !item.secrets
      ? item.secrets
      : (serializeRecord(item.secrets as any, secretSerializer) as any),
    certificate: !item.certificate
      ? item.certificate
      : certificateMetadataSerializer(item.certificate),
    environmentVariables: !item.environmentVariables
      ? item.environmentVariables
      : (serializeRecord(item.environmentVariables as any) as any),
    loadTestConfiguration: !item.loadTestConfiguration
      ? item.loadTestConfiguration
      : loadTestConfigurationSerializer(item.loadTestConfiguration),
    description: item["description"],
    displayName: item["displayName"],
    subnetId: item["subnetId"],
    keyvaultReferenceIdentityType: item["keyvaultReferenceIdentityType"],
    keyvaultReferenceIdentityId: item["keyvaultReferenceIdentityId"],
  };
}

/** Pass fail criteria for a test. */
export interface PassFailCriteria {
  /** Map of id and pass fail metrics { id  : pass fail metrics }. */
  passFailMetrics?: Record<string, PassFailMetric>;
}

export function passFailCriteriaSerializer(
  item: PassFailCriteria,
): PassFailCriteriaRest {
  return {
    passFailMetrics: !item.passFailMetrics
      ? item.passFailMetrics
      : (serializeRecord(
          item.passFailMetrics as any,
          passFailMetricSerializer,
        ) as any),
  };
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

export function passFailMetricSerializer(
  item: PassFailMetric,
): PassFailMetricRest {
  return {
    clientMetric: item["clientMetric"],
    aggregate: item["aggregate"],
    condition: item["condition"],
    requestName: item["requestName"],
    value: item["value"],
    action: item["action"],
  };
}

/** Type of PFMetrics */
export type PFMetrics =
  | "response_time_ms"
  | "latency"
  | "error"
  | "requests"
  | "requests_per_sec";
/** Type of PFAgFunc */
export type PFAgFunc =
  | "count"
  | "percentage"
  | "avg"
  | "p50"
  | "p90"
  | "p95"
  | "p99"
  | "min"
  | "max";
/** Type of PFAction */
export type PFAction = "continue" | "stop";
/** Type of PFResult */
export type PFResult = "passed" | "undetermined" | "failed";

/** Secret */
export interface Secret {
  /** The value of the secret for the respective type */
  value?: string;
  /** Type of secret */
  type?: SecretType;
}

export function secretSerializer(item: Secret): SecretRest {
  return {
    value: item["value"],
    type: item["type"],
  };
}

/** Type of SecretType */
export type SecretType = "AKV_SECRET_URI" | "SECRET_VALUE";

/** Certificates metadata */
export interface CertificateMetadata {
  /** The value of the certificate for respective type */
  value?: string;
  /** Type of certificate */
  type?: CertificateType;
  /** Name of the certificate. */
  name?: string;
}

export function certificateMetadataSerializer(
  item: CertificateMetadata,
): CertificateMetadataRest {
  return {
    value: item["value"],
    type: item["type"],
    name: item["name"],
  };
}

/** Type of CertificateType */
export type CertificateType = "AKV_CERT_URI";

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

export function loadTestConfigurationSerializer(
  item: LoadTestConfiguration,
): LoadTestConfigurationRest {
  return {
    engineInstances: item["engineInstances"],
    splitAllCSVs: item["splitAllCSVs"],
    quickStartTest: item["quickStartTest"],
    optionalLoadTestConfig: !item.optionalLoadTestConfig
      ? item.optionalLoadTestConfig
      : optionalLoadTestConfigSerializer(item.optionalLoadTestConfig),
  };
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

export function optionalLoadTestConfigSerializer(
  item: OptionalLoadTestConfig,
): OptionalLoadTestConfigRest {
  return {
    endpointUrl: item["endpointUrl"],
    virtualUsers: item["virtualUsers"],
    rampUpTime: item["rampUpTime"],
    duration: item["duration"],
  };
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

/** Type of FileType */
export type FileType = "JMX_FILE" | "USER_PROPERTIES" | "ADDITIONAL_ARTIFACTS";
/** Type of FileStatus */
export type FileStatus =
  | "NOT_VALIDATED"
  | "VALIDATION_SUCCESS"
  | "VALIDATION_FAILURE"
  | "VALIDATION_INITIATED"
  | "VALIDATION_NOT_REQUIRED";

/** Test app component */
export interface TestAppComponents {
  /**
   * Azure resource collection { resource id (fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName})
   * : resource object }
   */
  components: Record<string, AppComponent>;
  /** Test identifier */
  readonly testId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

export function testAppComponentsSerializer(
  item: TestAppComponents,
): TestAppComponentsRest {
  return {
    components: serializeRecord(
      item.components as any,
      appComponentSerializer,
    ) as any,
  };
}

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

export function appComponentSerializer(item: AppComponent): AppComponentRest {
  return {
    resourceName: item["resourceName"],
    resourceType: item["resourceType"],
    displayName: item["displayName"],
    kind: item["kind"],
  };
}

/** Test server metrics configuration */
export interface TestServerMetricConfig {
  /** Test identifier */
  readonly testId?: string;
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

export function testServerMetricConfigSerializer(
  item: TestServerMetricConfig,
): TestServerMetricConfigRest {
  return {
    metrics: !item.metrics
      ? item.metrics
      : (serializeRecord(item.metrics as any, resourceMetricSerializer) as any),
  };
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

export function resourceMetricSerializer(
  item: ResourceMetric,
): ResourceMetricRest {
  return {
    resourceId: item["resourceId"],
    metricNamespace: item["metricNamespace"],
    displayDescription: item["displayDescription"],
    name: item["name"],
    aggregation: item["aggregation"],
    unit: item["unit"],
    resourceType: item["resourceType"],
  };
}

/** Collection of files. */
export interface PagedFileInfo {
  /** The FileInfo items on this page */
  value: FileInfo[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Collection of tests */
export interface PagedTest {
  /** The Test items on this page */
  value: Test[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Type of APIVersions */
export type APIVersions = "2022-11-01";

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

export function testRunSerializer(item: TestRun): TestRunRest {
  return {
    passFailCriteria: !item.passFailCriteria
      ? item.passFailCriteria
      : passFailCriteriaSerializer(item.passFailCriteria),
    secrets: !item.secrets
      ? item.secrets
      : (serializeRecord(item.secrets as any, secretSerializer) as any),
    certificate: !item.certificate
      ? item.certificate
      : certificateMetadataSerializer(item.certificate),
    environmentVariables: !item.environmentVariables
      ? item.environmentVariables
      : (serializeRecord(item.environmentVariables as any) as any),
    loadTestConfiguration: !item.loadTestConfiguration
      ? item.loadTestConfiguration
      : loadTestConfigurationSerializer(item.loadTestConfiguration),
    displayName: item["displayName"],
    testId: item["testId"],
    description: item["description"],
  };
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

/** Type of PFTestResult */
export type PFTestResult = "PASSED" | "NOT_APPLICABLE" | "FAILED";
/** Type of Status */
export type Status =
  | "ACCEPTED"
  | "NOTSTARTED"
  | "PROVISIONING"
  | "PROVISIONED"
  | "CONFIGURING"
  | "CONFIGURED"
  | "EXECUTING"
  | "EXECUTED"
  | "DEPROVISIONING"
  | "DEPROVISIONED"
  | "DONE"
  | "CANCELLING"
  | "CANCELLED"
  | "FAILED"
  | "VALIDATION_SUCCESS"
  | "VALIDATION_FAILURE";

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

export function testRunAppComponentsSerializer(
  item: TestRunAppComponents,
): TestRunAppComponentsRest {
  return {
    components: serializeRecord(
      item.components as any,
      appComponentSerializer,
    ) as any,
  };
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

export function testRunServerMetricConfigSerializer(
  item: TestRunServerMetricConfig,
): TestRunServerMetricConfigRest {
  return {
    metrics: !item.metrics
      ? item.metrics
      : (serializeRecord(item.metrics as any, resourceMetricSerializer) as any),
  };
}

/** Type of Interval */
export type Interval = "PT5S" | "PT10S" | "PT1M" | "PT5M" | "PT1H";

export interface DimensionValueList {
  value: string[];
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

/** Type of AggregationType */
export type AggregationType =
  | "Average"
  | "Count"
  | "None"
  | "Total"
  | "Percentile90"
  | "Percentile95"
  | "Percentile99";
/** Type of MetricUnit */
export type MetricUnit =
  | "NotSpecified"
  | "Percent"
  | "Count"
  | "Seconds"
  | "Milliseconds"
  | "Bytes"
  | "BytesPerSecond"
  | "CountPerSecond";

/** Metric availability specifies the time grain (aggregation interval or frequency) */
export interface MetricAvailability {
  /**
   * The time grain specifies the aggregation interval for the metric. Expressed as
   * a duration 'PT1M', 'PT1H', etc.
   */
  timeGrain?: TimeGrain;
}

/** Type of TimeGrain */
export type TimeGrain = "PT5S" | "PT10S" | "PT1M" | "PT5M" | "PT1H";

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

export function metricRequestPayloadSerializer(
  item: MetricRequestPayload,
): MetricRequestPayloadRest {
  return {
    filters:
      item["filters"] === undefined
        ? item["filters"]
        : item["filters"].map(dimensionFilterSerializer),
  };
}

/** Dimension name and values to filter */
export interface DimensionFilter {
  /** The dimension name */
  name?: string;
  /** The dimension values. Maximum values can be 20. */
  values?: string[];
}

export function dimensionFilterSerializer(
  item: DimensionFilter,
): DimensionFilterRest {
  return {
    name: item["name"],
    values: item["values"],
  };
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

/** Paged collection of DimensionValueList items */
export interface PagedDimensionValueList {
  /** The DimensionValueList items on this page */
  value: DimensionValueList[];
  /** The link to the next page of items */
  nextLink?: string;
}
