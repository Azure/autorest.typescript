// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  Test as TestRest,
  PassFailCriteria as PassFailCriteriaRest,
  PassFailMetric as PassFailMetricRest,
  AutoStopCriteria as AutoStopCriteriaRest,
  Secret as SecretRest,
  CertificateMetadata as CertificateMetadataRest,
  LoadTestConfiguration as LoadTestConfigurationRest,
  OptionalLoadTestConfig as OptionalLoadTestConfigRest,
  RegionalConfiguration as RegionalConfigurationRest,
  TestAppComponents as TestAppComponentsRest,
  AppComponent as AppComponentRest,
  TestServerMetricConfig as TestServerMetricConfigRest,
  ResourceMetric as ResourceMetricRest,
  TestRun as TestRunRest,
  TestRunAppComponents as TestRunAppComponentsRest,
  TestRunServerMetricConfig as TestRunServerMetricConfigRest,
  MetricRequestPayload as MetricRequestPayloadRest,
  DimensionFilter as DimensionFilterRest,
  TestProfile as TestProfileRest,
  TargetResourceConfigurations as TargetResourceConfigurationsRest,
  FunctionFlexConsumptionTargetResourceConfigurations as FunctionFlexConsumptionTargetResourceConfigurationsRest,
  FunctionFlexConsumptionResourceConfiguration as FunctionFlexConsumptionResourceConfigurationRest,
  TestProfileRun as TestProfileRunRest,
} from "../rest/index.js";

/** Load test model. */
export interface Test {
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteria;
  /** Auto stop criteria for a test. This will automatically stop a load test if the error percentage is high for a certain time window. */
  autoStopCriteria?: AutoStopCriteria;
  /**
   * Secrets can be stored in an Azure Key Vault or any other secret store. If the
   * secret is stored in an Azure Key Vault, the value should be the secret
   * identifier and the type should be AKV_SECRET_URI. If the secret is stored
   * elsewhere, the secret value should be provided directly and the type should be
   * SECRET_VALUE.
   */
  secrets?: Record<string, Secret>;
  /** Certificates metadata. */
  certificate?: CertificateMetadata;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** The load test configuration. */
  loadTestConfiguration?: LoadTestConfiguration;
  /** Id of the test run to be marked as baseline to view trends of client-side metrics from recent test runs */
  baselineTestRunId?: string;
  /** The input artifacts for the test. */
  readonly inputArtifacts?: TestInputArtifacts;
  /** Unique test identifier for the load test, must contain only lower-case alphabetic, numeric, underscore or hyphen characters. */
  readonly testId: string;
  /** The test description. */
  description?: string;
  /** Display name of a test. */
  displayName?: string;
  /** Subnet ID on which the load test instances should run. */
  subnetId?: string;
  /** Kind of test. */
  kind?: TestKind;
  /** Inject load test engines without deploying public IP for outbound access */
  publicIPDisabled?: boolean;
  /** Type of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityType?: string;
  /** Resource Id of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityId?: string;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: Date;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: Date;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

export function testSerializer(item: Test): TestRest {
  return {
    passFailCriteria: !item.passFailCriteria
      ? item.passFailCriteria
      : passFailCriteriaSerializer(item.passFailCriteria),
    autoStopCriteria: !item.autoStopCriteria
      ? item.autoStopCriteria
      : autoStopCriteriaSerializer(item.autoStopCriteria),
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
    baselineTestRunId: item["baselineTestRunId"],
    description: item["description"],
    displayName: item["displayName"],
    subnetId: item["subnetId"],
    kind: item["kind"],
    publicIPDisabled: item["publicIPDisabled"],
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
   * - ‘percentage’ - for error metric , ‘avg’, percentiles like ‘p50’, ‘p90’, & so on, ‘min’,
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

/** Known values of {@link PFMetrics} that the service accepts. */
export enum KnownPFMetrics {
  /** response_time_ms */
  response_time_ms = "response_time_ms",
  /** latency */
  latency = "latency",
  /** error */
  error = "error",
  /** requests */
  requests = "requests",
  /** requests_per_sec */
  requests_per_sec = "requests_per_sec",
}

/**
 * Metrics for pass/fail criteria. \
 * {@link KnownPFMetrics} can be used interchangeably with PFMetrics,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **response_time_ms** \
 * **latency** \
 * **error** \
 * **requests** \
 * **requests_per_sec**
 */
export type PFMetrics = string;

/** Known values of {@link PFAgFunc} that the service accepts. */
export enum KnownPFAgFunc {
  /** count */
  count = "count",
  /** percentage */
  percentage = "percentage",
  /** avg */
  avg = "avg",
  /** p50 */
  p50 = "p50",
  /** p75 */
  p75 = "p75",
  /** p90 */
  p90 = "p90",
  /** p95 */
  p95 = "p95",
  /** p96 */
  p96 = "p96",
  /** p97 */
  p97 = "p97",
  /** p98 */
  p98 = "p98",
  /** p99 */
  p99 = "p99",
  /** p99.9 */
  "p99.9" = "p99.9",
  /** p99.99 */
  "p99.99" = "p99.99",
  /** min */
  min = "min",
  /** max */
  max = "max",
}

/**
 * Aggregation functions for pass/fail criteria. \
 * {@link KnownPFAgFunc} can be used interchangeably with PFAgFunc,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **count** \
 * **percentage** \
 * **avg** \
 * **p50** \
 * **p75** \
 * **p90** \
 * **p95** \
 * **p96** \
 * **p97** \
 * **p98** \
 * **p99** \
 * **p99.9** \
 * **p99.99** \
 * **min** \
 * **max**
 */
export type PFAgFunc = string;

/** Known values of {@link PFAction} that the service accepts. */
export enum KnownPFAction {
  /** continue */
  "continue" = "continue",
  /** stop */
  stop = "stop",
}

/**
 * Action to take on failure of pass/fail criteria. \
 * {@link KnownPFAction} can be used interchangeably with PFAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **continue** \
 * **stop**
 */
export type PFAction = string;

/** Known values of {@link PFResult} that the service accepts. */
export enum KnownPFResult {
  /** passed */
  passed = "passed",
  /** undetermined */
  undetermined = "undetermined",
  /** failed */
  failed = "failed",
}

/**
 * Pass/fail criteria result. \
 * {@link KnownPFResult} can be used interchangeably with PFResult,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **passed** \
 * **undetermined** \
 * **failed**
 */
export type PFResult = string;

/** Auto stop criteria for a test. This will automatically stop a load test if the error percentage is high for a certain time window. */
export interface AutoStopCriteria {
  /** Whether auto-stop should be disabled. The default value is false. */
  autoStopDisabled?: boolean;
  /** Threshold percentage of errors on which test run should be automatically stopped. Allowed values are in range of 0.0-100.0 */
  errorRate?: number;
  /** Time window during which the error percentage should be evaluated in seconds. */
  errorRateTimeWindowInSeconds?: number;
}

export function autoStopCriteriaSerializer(
  item: AutoStopCriteria,
): AutoStopCriteriaRest {
  return {
    autoStopDisabled: item["autoStopDisabled"],
    errorRate: item["errorRate"],
    errorRateTimeWindowInSeconds: item["errorRateTimeWindowInSeconds"],
  };
}

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

/** Known values of {@link SecretType} that the service accepts. */
export enum KnownSecretType {
  /** AKV_SECRET_URI */
  AKV_SECRET_URI = "AKV_SECRET_URI",
  /** SECRET_VALUE */
  SECRET_VALUE = "SECRET_VALUE",
}

/**
 * Types of secrets supported. \
 * {@link KnownSecretType} can be used interchangeably with SecretType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AKV_SECRET_URI** \
 * **SECRET_VALUE**
 */
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

export function certificateMetadataSerializer(
  item: CertificateMetadata,
): CertificateMetadataRest {
  return {
    value: item["value"],
    type: item["type"],
    name: item["name"],
  };
}

/** Known values of {@link CertificateType} that the service accepts. */
export enum KnownCertificateType {
  /** AKV_CERT_URI */
  AKV_CERT_URI = "AKV_CERT_URI",
}

/**
 * Types of certificates supported. \
 * {@link KnownCertificateType} can be used interchangeably with CertificateType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AKV_CERT_URI**
 */
export type CertificateType = string;

/** Configurations for the load test. */
export interface LoadTestConfiguration {
  /** The number of engine instances to execute load test. Supported values are in range of 1-400. Required for creating a new test. */
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
  /** Configuration for quick load test */
  optionalLoadTestConfig?: OptionalLoadTestConfig;
  /** Region distribution configuration for the load test. */
  regionalLoadTestConfig?: RegionalConfiguration[];
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
    regionalLoadTestConfig:
      item["regionalLoadTestConfig"] === undefined
        ? item["regionalLoadTestConfig"]
        : item["regionalLoadTestConfig"].map(regionalConfigurationSerializer),
  };
}

/** Configuration for quick load test */
export interface OptionalLoadTestConfig {
  /** Test URL. Provide the complete HTTP URL. For example, https://contoso-app.azurewebsites.net/login */
  endpointUrl?: string;
  /** Target throughput (requests per second). This may not be necessarily achieved. The actual throughput will be lower if the application is not capable of handling it. */
  requestsPerSecond?: number;
  /** Maximum response time in milliseconds of the API/endpoint. */
  maxResponseTimeInMs?: number;
  /** No of concurrent virtual users. */
  virtualUsers?: number;
  /** Ramp up time in seconds. */
  rampUpTime?: number;
  /** Test run duration in seconds. */
  duration?: number;
}

export function optionalLoadTestConfigSerializer(
  item: OptionalLoadTestConfig,
): OptionalLoadTestConfigRest {
  return {
    endpointUrl: item["endpointUrl"],
    requestsPerSecond: item["requestsPerSecond"],
    maxResponseTimeInMs: item["maxResponseTimeInMs"],
    virtualUsers: item["virtualUsers"],
    rampUpTime: item["rampUpTime"],
    duration: item["duration"],
  };
}

/** Region distribution configuration for the load test. */
export interface RegionalConfiguration {
  /**   The number of engine instances to execute load test in specified region. Supported values are in range of 1-400. */
  engineInstances: number;
  /**
   * Azure region name.
   * The region name should of format accepted by ARM, and should be a region supported by Azure Load Testing. For example, East US should be passed as "eastus".
   * The region name must match one of the strings in the "Name" column returned from running the "az account list-locations -o table" Azure CLI command.
   */
  region: string;
}

export function regionalConfigurationSerializer(
  item: RegionalConfiguration,
): RegionalConfigurationRest {
  return {
    engineInstances: item["engineInstances"],
    region: item["region"],
  };
}

/** The input artifacts for the test. */
export interface TestInputArtifacts {
  /** File info */
  configFileInfo?: TestFileInfo;
  /** File info */
  testScriptFileInfo?: TestFileInfo;
  /** File info */
  userPropFileInfo?: TestFileInfo;
  /** File info */
  inputArtifactsZipFileInfo?: TestFileInfo;
  /** The config json file for url based test */
  urlTestConfigFileInfo?: TestFileInfo;
  /** Additional supported files for the test run */
  readonly additionalFileInfo?: TestFileInfo[];
}

/** Test file info. */
export interface TestFileInfo {
  /** Name of the file. */
  fileName: string;
  /** File URL. */
  readonly url?: string;
  /** File type */
  readonly fileType?: FileType;
  /** Expiry time of the file (RFC 3339 literal format) */
  readonly expireDateTime?: Date;
  /** Validation status of the file */
  readonly validationStatus?: FileStatus;
  /** Validation failure error details */
  readonly validationFailureDetails?: string;
}

/** Known values of {@link FileType} that the service accepts. */
export enum KnownFileType {
  /** JMX_FILE */
  JMX_FILE = "JMX_FILE",
  /** USER_PROPERTIES */
  USER_PROPERTIES = "USER_PROPERTIES",
  /** ADDITIONAL_ARTIFACTS */
  ADDITIONAL_ARTIFACTS = "ADDITIONAL_ARTIFACTS",
  /** ZIPPED_ARTIFACTS */
  ZIPPED_ARTIFACTS = "ZIPPED_ARTIFACTS",
  /** URL_TEST_CONFIG */
  URL_TEST_CONFIG = "URL_TEST_CONFIG",
  /** TEST_SCRIPT */
  TEST_SCRIPT = "TEST_SCRIPT",
}

/**
 * Types of file supported. \
 * {@link KnownFileType} can be used interchangeably with FileType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **JMX_FILE** \
 * **USER_PROPERTIES** \
 * **ADDITIONAL_ARTIFACTS** \
 * **ZIPPED_ARTIFACTS** \
 * **URL_TEST_CONFIG** \
 * **TEST_SCRIPT**
 */
export type FileType = string;

/** Known values of {@link FileStatus} that the service accepts. */
export enum KnownFileStatus {
  /** NOT_VALIDATED */
  NOT_VALIDATED = "NOT_VALIDATED",
  /** VALIDATION_SUCCESS */
  VALIDATION_SUCCESS = "VALIDATION_SUCCESS",
  /** VALIDATION_FAILURE */
  VALIDATION_FAILURE = "VALIDATION_FAILURE",
  /** VALIDATION_INITIATED */
  VALIDATION_INITIATED = "VALIDATION_INITIATED",
  /** VALIDATION_NOT_REQUIRED */
  VALIDATION_NOT_REQUIRED = "VALIDATION_NOT_REQUIRED",
}

/**
 * File status. \
 * {@link KnownFileStatus} can be used interchangeably with FileStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NOT_VALIDATED** \
 * **VALIDATION_SUCCESS** \
 * **VALIDATION_FAILURE** \
 * **VALIDATION_INITIATED** \
 * **VALIDATION_NOT_REQUIRED**
 */
export type FileStatus = string;

/** Known values of {@link TestKind} that the service accepts. */
export enum KnownTestKind {
  /** URL */
  URL = "URL",
  /** JMX */
  JMX = "JMX",
  /** Locust */
  Locust = "Locust",
}

/**
 * Test kind \
 * {@link KnownTestKind} can be used interchangeably with TestKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **URL** \
 * **JMX** \
 * **Locust**
 */
export type TestKind = string;

/** Test app components */
export interface TestAppComponents {
  /**
   * Azure resource collection { resource id (fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName})
   * : resource object }
   */
  components: Record<string, AppComponent>;
  /** Test identifier */
  readonly testId?: string;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: Date;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: Date;
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

/** An Azure resource object (Refer azure generic resource model :https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id#genericresource) */
export interface AppComponent {
  /** fully qualified resource Id e.g subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName} */
  readonly resourceId: string;
  /** Azure resource name, required while creating the app component. */
  resourceName: string;
  /** Azure resource type, required while creating the app component. */
  resourceType: string;
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
  metrics: Record<string, ResourceMetric>;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: Date;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: Date;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

export function testServerMetricConfigSerializer(
  item: TestServerMetricConfig,
): TestServerMetricConfigRest {
  return {
    metrics: serializeRecord(
      item.metrics as any,
      resourceMetricSerializer,
    ) as any,
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

/** Azure Load Testing API versions. */
export type APIVersions =
  | "2022-11-01"
  | "2023-04-01-preview"
  | "2024-03-01-preview"
  | "2024-05-01-preview";

/** Load test run model */
export interface TestRun {
  /** Unique test run identifier for the load test run, must contain only lower-case alphabetic, numeric, underscore or hyphen characters. */
  readonly testRunId: string;
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteria;
  /** Auto stop criteria for a test. This will automatically stop a load test if the error percentage is high for a certain time window. */
  autoStopCriteria?: AutoStopCriteria;
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
  /**
   * Test run statistics. Key is the sampler name and value is the set of statistics for performance metrics like response time, throughput, etc. from the load test run.
   * The sampler name is the same as the name mentioned in the test script.
   * Sampler name "Total" represents the aggregated statistics of all the samplers.
   */
  readonly testRunStatistics?: Record<string, TestRunStatistics>;
  /**
   * Regional statistics. Key is the Azure region name and value is the test run statistics.
   * The region name should of format accepted by ARM, and should be a region supported by Azure Load Testing. For example, East US should be passed as "eastus".
   * The region name must match one of the strings in the "Name" column returned from running the "az account list-locations -o table" Azure CLI command.
   */
  readonly regionalStatistics?: Record<string, TestRunStatistics>;
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
  /** The test run start DateTime(RFC 3339 literal format). */
  readonly startDateTime?: Date;
  /** The test run end DateTime(RFC 3339 literal format). */
  readonly endDateTime?: Date;
  /** Test run initiated time. */
  readonly executedDateTime?: Date;
  /** Portal url. */
  readonly portalUrl?: string;
  /** Test run duration in milliseconds. */
  readonly duration?: number;
  /** Subnet ID on which the load test instances should run. */
  readonly subnetId?: string;
  /** Type of test. */
  readonly kind?: TestKind;
  /** Request data collection level for test run */
  requestDataLevel?: RequestDataLevel;
  /** Enable or disable debug level logging. True if debug logs are enabled for the test run. False otherwise */
  debugLogsEnabled?: boolean;
  /** Inject load test engines without deploying public IP for outbound access */
  readonly publicIPDisabled?: boolean;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: Date;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: Date;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

export function testRunSerializer(item: TestRun): TestRunRest {
  return {
    passFailCriteria: !item.passFailCriteria
      ? item.passFailCriteria
      : passFailCriteriaSerializer(item.passFailCriteria),
    autoStopCriteria: !item.autoStopCriteria
      ? item.autoStopCriteria
      : autoStopCriteriaSerializer(item.autoStopCriteria),
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
    requestDataLevel: item["requestDataLevel"],
    debugLogsEnabled: item["debugLogsEnabled"],
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
  /** 75 percentile response time. */
  readonly pct75ResTime?: number;
  /** 96 percentile response time. */
  readonly pct96ResTime?: number;
  /** 97 percentile response time. */
  readonly pct97ResTime?: number;
  /** 98 percentile response time. */
  readonly pct98ResTime?: number;
  /** 99.9 percentile response time. */
  readonly pct999ResTime?: number;
  /** 99.99 percentile response time. */
  readonly pct9999ResTime?: number;
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
  configFileInfo?: TestRunFileInfo;
  /** File info */
  testScriptFileInfo?: TestRunFileInfo;
  /** File info */
  userPropFileInfo?: TestRunFileInfo;
  /** File info */
  inputArtifactsZipFileInfo?: TestRunFileInfo;
  /** The config json file for url based test */
  urlTestConfigFileInfo?: TestRunFileInfo;
  /** Additional supported files for the test run */
  readonly additionalFileInfo?: TestRunFileInfo[];
}

/** Test run file info. */
export interface TestRunFileInfo {
  /** Name of the file. */
  fileName: string;
  /** File URL. */
  readonly url?: string;
  /** File type */
  readonly fileType?: FileType;
  /** Expiry time of the file (RFC 3339 literal format) */
  readonly expireDateTime?: Date;
  /** Validation status of the file */
  readonly validationStatus?: FileStatus;
  /** Validation failure error details */
  readonly validationFailureDetails?: string;
}

/** The output artifacts for the test run. */
export interface TestRunOutputArtifacts {
  /** File info */
  resultFileInfo?: TestRunFileInfo;
  /** File info */
  logsFileInfo?: TestRunFileInfo;
  /** The container for test run artifacts. */
  artifactsContainerInfo?: ArtifactsContainerInfo;
  /** The report file for the test run. */
  reportFileInfo?: TestRunFileInfo;
}

/** Artifacts container info. */
export interface ArtifactsContainerInfo {
  /** This is a SAS URI to an Azure Storage Container that contains the test run artifacts. */
  url?: string;
  /** Expiry time of the container (RFC 3339 literal format) */
  expireDateTime?: Date;
}

/** Known values of {@link PFTestResult} that the service accepts. */
export enum KnownPFTestResult {
  /** PASSED */
  PASSED = "PASSED",
  /** NOT_APPLICABLE */
  NOT_APPLICABLE = "NOT_APPLICABLE",
  /** FAILED */
  FAILED = "FAILED",
}

/**
 * Test result based on pass/fail criteria. \
 * {@link KnownPFTestResult} can be used interchangeably with PFTestResult,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PASSED** \
 * **NOT_APPLICABLE** \
 * **FAILED**
 */
export type PFTestResult = string;

/** Known values of {@link Status} that the service accepts. */
export enum KnownStatus {
  /** ACCEPTED */
  ACCEPTED = "ACCEPTED",
  /** NOTSTARTED */
  NOTSTARTED = "NOTSTARTED",
  /** PROVISIONING */
  PROVISIONING = "PROVISIONING",
  /** PROVISIONED */
  PROVISIONED = "PROVISIONED",
  /** CONFIGURING */
  CONFIGURING = "CONFIGURING",
  /** CONFIGURED */
  CONFIGURED = "CONFIGURED",
  /** EXECUTING */
  EXECUTING = "EXECUTING",
  /** EXECUTED */
  EXECUTED = "EXECUTED",
  /** DEPROVISIONING */
  DEPROVISIONING = "DEPROVISIONING",
  /** DEPROVISIONED */
  DEPROVISIONED = "DEPROVISIONED",
  /** DONE */
  DONE = "DONE",
  /** CANCELLING */
  CANCELLING = "CANCELLING",
  /** CANCELLED */
  CANCELLED = "CANCELLED",
  /** FAILED */
  FAILED = "FAILED",
  /** VALIDATION_SUCCESS */
  VALIDATION_SUCCESS = "VALIDATION_SUCCESS",
  /** VALIDATION_FAILURE */
  VALIDATION_FAILURE = "VALIDATION_FAILURE",
}

/**
 * Test run status. \
 * {@link KnownStatus} can be used interchangeably with Status,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ACCEPTED** \
 * **NOTSTARTED** \
 * **PROVISIONING** \
 * **PROVISIONED** \
 * **CONFIGURING** \
 * **CONFIGURED** \
 * **EXECUTING** \
 * **EXECUTED** \
 * **DEPROVISIONING** \
 * **DEPROVISIONED** \
 * **DONE** \
 * **CANCELLING** \
 * **CANCELLED** \
 * **FAILED** \
 * **VALIDATION_SUCCESS** \
 * **VALIDATION_FAILURE**
 */
export type Status = string;

/** Known values of {@link RequestDataLevel} that the service accepts. */
export enum KnownRequestDataLevel {
  /** NONE */
  NONE = "NONE",
  /** ERRORS */
  ERRORS = "ERRORS",
}

/**
 * Request data collection level for test run \
 * {@link KnownRequestDataLevel} can be used interchangeably with RequestDataLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NONE** \
 * **ERRORS**
 */
export type RequestDataLevel = string;

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
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: Date;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: Date;
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
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: Date;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: Date;
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

/** Known values of {@link TimeGrain} that the service accepts. */
export enum KnownTimeGrain {
  /** PT5S */
  PT5S = "PT5S",
  /** PT10S */
  PT10S = "PT10S",
  /** PT1M */
  PT1M = "PT1M",
  /** PT5M */
  PT5M = "PT5M",
  /** PT1H */
  PT1H = "PT1H",
}

/**
 * Time Grain \
 * {@link KnownTimeGrain} can be used interchangeably with TimeGrain,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PT5S** \
 * **PT10S** \
 * **PT1M** \
 * **PT5M** \
 * **PT1H**
 */
export type TimeGrain = string;

/** Metrics dimension values. */
export interface DimensionValueList {
  /** The dimension name */
  readonly name?: string;
  /** The dimension value */
  value?: string[];
  /** Link for the next set of values in case of paginated results, if applicable. */
  nextLink?: string;
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

/** Known values of {@link AggregationType} that the service accepts. */
export enum KnownAggregationType {
  /** Average */
  Average = "Average",
  /** Count */
  Count = "Count",
  /** None */
  None = "None",
  /** Total */
  Total = "Total",
  /** Percentile75 */
  Percentile75 = "Percentile75",
  /** Percentile90 */
  Percentile90 = "Percentile90",
  /** Percentile95 */
  Percentile95 = "Percentile95",
  /** Percentile96 */
  Percentile96 = "Percentile96",
  /** Percentile97 */
  Percentile97 = "Percentile97",
  /** Percentile98 */
  Percentile98 = "Percentile98",
  /** Percentile99 */
  Percentile99 = "Percentile99",
  /** Percentile999 */
  Percentile999 = "Percentile999",
  /** Percentile9999 */
  Percentile9999 = "Percentile9999",
}

/**
 * Aggregation type. \
 * {@link KnownAggregationType} can be used interchangeably with AggregationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Average** \
 * **Count** \
 * **None** \
 * **Total** \
 * **Percentile75** \
 * **Percentile90** \
 * **Percentile95** \
 * **Percentile96** \
 * **Percentile97** \
 * **Percentile98** \
 * **Percentile99** \
 * **Percentile999** \
 * **Percentile9999**
 */
export type AggregationType = string;

/** Known values of {@link MetricUnit} that the service accepts. */
export enum KnownMetricUnit {
  /** NotSpecified */
  NotSpecified = "NotSpecified",
  /** Percent */
  Percent = "Percent",
  /** Count */
  Count = "Count",
  /** Seconds */
  Seconds = "Seconds",
  /** Milliseconds */
  Milliseconds = "Milliseconds",
  /** Bytes */
  Bytes = "Bytes",
  /** BytesPerSecond */
  BytesPerSecond = "BytesPerSecond",
  /** CountPerSecond */
  CountPerSecond = "CountPerSecond",
}

/**
 * Metric unit. \
 * {@link KnownMetricUnit} can be used interchangeably with MetricUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Percent** \
 * **Count** \
 * **Seconds** \
 * **Milliseconds** \
 * **Bytes** \
 * **BytesPerSecond** \
 * **CountPerSecond**
 */
export type MetricUnit = string;

/** Metric availability specifies the time grain (aggregation interval or frequency) */
export interface MetricAvailability {
  /**
   * The time grain specifies the aggregation interval for the metric. Expressed as
   * a duration 'PT1M', 'PT1H', etc.
   */
  timeGrain?: TimeGrain;
}

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

/** Filters to fetch the set of metric. */
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
export interface _Metrics {
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
  /** The timestamp for the metric value in RFC 3339 format. */
  timestamp?: Date;
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

/** The Test Profile Model. A Test Profile resource enables you to set up a test profile which contains various configurations for a supported resource type and a load test to execute on that resource. */
export interface TestProfile {
  /** Unique identifier for the test profile, must contain only lower-case alphabetic, numeric, underscore or hyphen characters. */
  readonly testProfileId: string;
  /** Display name of the test profile. */
  displayName?: string;
  /** Description for the test profile. */
  description?: string;
  /** Associated test ID for the test profile. This property is required for creating a Test Profile and it's not allowed to be updated. */
  testId?: string;
  /** Target resource ID on which the test profile is created. This property is required for creating a Test Profile and it's not allowed to be updated. */
  targetResourceId?: string;
  /** Configurations of the target resource on which testing would be done. */
  targetResourceConfigurations?: TargetResourceConfigurationsUnion;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: Date;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: Date;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

export function testProfileSerializer(item: TestProfile): TestProfileRest {
  return {
    displayName: item["displayName"],
    description: item["description"],
    testId: item["testId"],
    targetResourceId: item["targetResourceId"],
    targetResourceConfigurations: !item.targetResourceConfigurations
      ? item.targetResourceConfigurations
      : targetResourceConfigurationsUnionSerializer(
          item.targetResourceConfigurations,
        ),
  };
}

/** Configurations of a target resource. This varies with the kind of resource. */
export interface TargetResourceConfigurations {
  /** the discriminator possible values: FunctionsFlexConsumption */
  kind: ResourceKind;
}

export function targetResourceConfigurationsUnionSerializer(
  item: TargetResourceConfigurationsUnion,
) {
  switch (item.kind) {
    case "FunctionsFlexConsumption":
      return functionFlexConsumptionTargetResourceConfigurationsSerializer(
        item as FunctionFlexConsumptionTargetResourceConfigurations,
      );

    default:
      return targetResourceConfigurationsSerializer(item);
  }
}

export function targetResourceConfigurationsSerializer(
  item: TargetResourceConfigurationsUnion,
): TargetResourceConfigurationsRest {
  return {
    kind: item["kind"],
  };
}

/** Configurations for a Function App using Flex Consumption Plan. */
export interface FunctionFlexConsumptionTargetResourceConfigurations
  extends TargetResourceConfigurations {
  /**
   * The kind value to use when providing configuration.
   * This should typically be not changed from its value.
   */
  kind: "FunctionsFlexConsumption";
  /** A map of configurations for a Function app using Flex Consumption Plan. */
  configurations?: Record<string, FunctionFlexConsumptionResourceConfiguration>;
}

export function functionFlexConsumptionTargetResourceConfigurationsSerializer(
  item: FunctionFlexConsumptionTargetResourceConfigurations,
): FunctionFlexConsumptionTargetResourceConfigurationsRest {
  return {
    kind: item["kind"],
    configurations: !item.configurations
      ? item.configurations
      : (serializeRecord(
          item.configurations as any,
          functionFlexConsumptionResourceConfigurationSerializer,
        ) as any),
  };
}

/** Resource configuration instance for a Flex Consumption based Azure Function App. */
export interface FunctionFlexConsumptionResourceConfiguration {
  /** Memory size of the instance. Supported values are 2048, 4096. */
  instanceMemoryMB: number;
  /** HTTP Concurrency for the function app. */
  httpConcurrency: number;
}

export function functionFlexConsumptionResourceConfigurationSerializer(
  item: FunctionFlexConsumptionResourceConfiguration,
): FunctionFlexConsumptionResourceConfigurationRest {
  return {
    instanceMemoryMB: item["instanceMemoryMB"],
    httpConcurrency: item["httpConcurrency"],
  };
}

/** Known values of {@link ResourceKind} that the service accepts. */
export enum KnownResourceKind {
  /** FunctionsFlexConsumption */
  FunctionsFlexConsumption = "FunctionsFlexConsumption",
}

/**
 * Kind of the resource on which test profile is created. \
 * {@link KnownResourceKind} can be used interchangeably with ResourceKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FunctionsFlexConsumption**
 */
export type ResourceKind = string;

/** The Test Profile Run Model. Test Profile Run resource enables you to instantiate an already created test profile and run load tests to get recommendations on the optimal configuration for the target resource. */
export interface TestProfileRun {
  /** Unique identifier for the test profile run, must contain only lower-case alphabetic, numeric, underscore or hyphen characters. */
  readonly testProfileRunId: string;
  /** Display name for the test profile run. */
  displayName?: string;
  /** The test profile run description */
  description?: string;
  /** Associated test profile ID for the test profile run. This is required to create a test profile run and can't be updated. */
  testProfileId?: string;
  /** Target resource ID on which the test profile run is created */
  readonly targetResourceId?: string;
  /** Configurations of the target resource on which the test profile ran. */
  readonly targetResourceConfigurations?: TargetResourceConfigurationsUnion;
  /** The test profile run status. */
  readonly status?: TestProfileRunStatus;
  /** Error details if there is any failure in test profile run. These errors are specific to the Test Profile Run. */
  readonly errorDetails?: ErrorDetails[];
  /** The test profile run start DateTime(RFC 3339 literal format). */
  readonly startDateTime?: Date;
  /** The test profile run end DateTime(RFC 3339 literal format). */
  readonly endDateTime?: Date;
  /** Test profile run duration in seconds. */
  readonly durationInSeconds?: number;
  /**
   * Details of the test runs ran as part of the test profile run.
   * Key is the testRunId of the corresponding testRun.
   */
  readonly testRunDetails?: Record<string, TestRunDetail>;
  /** Recommendations provided based on a successful test profile run. */
  readonly recommendations?: TestProfileRunRecommendation[];
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: Date;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: Date;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

export function testProfileRunSerializer(
  item: TestProfileRun,
): TestProfileRunRest {
  return {
    displayName: item["displayName"],
    description: item["description"],
    testProfileId: item["testProfileId"],
  };
}

/** Known values of {@link TestProfileRunStatus} that the service accepts. */
export enum KnownTestProfileRunStatus {
  /** ACCEPTED */
  ACCEPTED = "ACCEPTED",
  /** NOTSTARTED */
  NOTSTARTED = "NOTSTARTED",
  /** EXECUTING */
  EXECUTING = "EXECUTING",
  /** DONE */
  DONE = "DONE",
  /** CANCELLING */
  CANCELLING = "CANCELLING",
  /** CANCELLED */
  CANCELLED = "CANCELLED",
  /** FAILED */
  FAILED = "FAILED",
}

/**
 * Test profile run status. \
 * {@link KnownTestProfileRunStatus} can be used interchangeably with TestProfileRunStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ACCEPTED** \
 * **NOTSTARTED** \
 * **EXECUTING** \
 * **DONE** \
 * **CANCELLING** \
 * **CANCELLED** \
 * **FAILED**
 */
export type TestProfileRunStatus = string;

/** Details of a particular test run for a test profile run. */
export interface TestRunDetail {
  /** Status of the test run. */
  status: Status;
  /** ID of the configuration on which the test ran. */
  configurationId: string;
  /** Key value pair of extra properties associated with the test run. */
  properties: Record<string, string>;
}

/** A recommendation object that provides a list of configuration that optimizes its category. */
export interface TestProfileRunRecommendation {
  /** Category of the recommendation. */
  category: RecommendationCategory;
  /** List of configurations IDs for which the recommendation is applicable. These are a subset of the provided target resource configurations. */
  configurations?: string[];
}

/** Known values of {@link RecommendationCategory} that the service accepts. */
export enum KnownRecommendationCategory {
  /** ThroughputOptimized */
  ThroughputOptimized = "ThroughputOptimized",
  /** CostOptimized */
  CostOptimized = "CostOptimized",
}

/**
 * Category of Recommendation. \
 * {@link KnownRecommendationCategory} can be used interchangeably with RecommendationCategory,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ThroughputOptimized** \
 * **CostOptimized**
 */
export type RecommendationCategory = string;

/** Paged collection of TestFileInfo items */
export interface _PagedTestFileInfo {
  /** The TestFileInfo items on this page */
  value: TestFileInfo[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of Test items */
export interface _PagedTest {
  /** The Test items on this page */
  value: Test[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of TestRun items */
export interface _PagedTestRun {
  /** The TestRun items on this page */
  value: TestRun[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of TestProfile items */
export interface _PagedTestProfile {
  /** The TestProfile items on this page */
  value: TestProfile[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of TestProfileRun items */
export interface _PagedTestProfileRun {
  /** The TestProfileRun items on this page */
  value: TestProfileRun[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Alias for TargetResourceConfigurationsUnion */
export type TargetResourceConfigurationsUnion =
  | FunctionFlexConsumptionTargetResourceConfigurations
  | TargetResourceConfigurations;
