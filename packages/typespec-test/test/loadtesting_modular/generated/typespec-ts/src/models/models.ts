// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";
import { ErrorModel } from "@azure-rest/core-client";

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

export function testSerializer(item: Test): Record<string, unknown> {
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

export function testDeserializer(item: any): Test {
  return {
    passFailCriteria: !item.passFailCriteria
      ? undefined
      : passFailCriteriaDeserializer(item.passFailCriteria),
    autoStopCriteria: !item.autoStopCriteria
      ? undefined
      : autoStopCriteriaDeserializer(item.autoStopCriteria),
    secrets: secretRecordDeserializer(item["secrets"]),
    certificate: !item.certificate
      ? undefined
      : certificateMetadataDeserializer(item.certificate),
    environmentVariables: item["environmentVariables"],
    loadTestConfiguration: !item.loadTestConfiguration
      ? undefined
      : loadTestConfigurationDeserializer(item.loadTestConfiguration),
    baselineTestRunId: item["baselineTestRunId"],
    inputArtifacts: !item.inputArtifacts ? undefined : item.inputArtifacts,
    testId: item["testId"],
    description: item["description"],
    displayName: item["displayName"],
    subnetId: item["subnetId"],
    kind: testKindDeserializer(item["kind"]),
    publicIPDisabled: item["publicIPDisabled"],
    keyvaultReferenceIdentityType: item["keyvaultReferenceIdentityType"],
    keyvaultReferenceIdentityId: item["keyvaultReferenceIdentityId"],
    createdDateTime: item["createdDateTime"],
    createdBy: item["createdBy"],
    lastModifiedDateTime: item["lastModifiedDateTime"],
    lastModifiedBy: item["lastModifiedBy"],
  };
}

/** Pass fail criteria for a test. */
export interface PassFailCriteria {
  /** Map of id and pass fail metrics { id  : pass fail metrics }. */
  passFailMetrics?: Record<string, PassFailMetric>;
}

export function passFailCriteriaSerializer(
  item: PassFailCriteria,
): Record<string, unknown> {
  return {
    passFailMetrics: !item.passFailMetrics
      ? item.passFailMetrics
      : (serializeRecord(
          item.passFailMetrics as any,
          passFailMetricSerializer,
        ) as any),
  };
}

export function passFailCriteriaDeserializer(item: any): PassFailCriteria {
  return {
    passFailMetrics: passFailMetricRecordDeserializer(item["passFailMetrics"]),
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
): Record<string, unknown> {
  return {
    clientMetric: item["clientMetric"],
    aggregate: item["aggregate"],
    condition: item["condition"],
    requestName: item["requestName"],
    value: item["value"],
    action: item["action"],
  };
}

export function passFailMetricDeserializer(item: any): PassFailMetric {
  return {
    clientMetric: pFMetricsDeserializer(item["clientMetric"]),
    aggregate: pFAgFuncDeserializer(item["aggregate"]),
    condition: item["condition"],
    requestName: item["requestName"],
    value: item["value"],
    action: pFActionDeserializer(item["action"]),
    actualValue: item["actualValue"],
    result: pFResultDeserializer(item["result"]),
  };
}

/** Metrics for pass/fail criteria. */
export enum KnownPFMetrics {
  /** Pass fail criteria for response time metric in milliseconds. */
  response_time_ms = '"response_time_ms"',
  /** Pass fail criteria for latency metric in milliseconds. */
  latency = '"latency"',
  /** Pass fail criteria for error metric. */
  error = '"error"',
  /** Pass fail criteria for total requests. */
  requests = '"requests"',
  /** Pass fail criteria for request per second. */
  requests_per_sec = '"requests_per_sec"',
}

/**
 * Metrics for pass/fail criteria. \
 * {@link KnownPFMetrics} can be used interchangeably with PFMetrics,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **response_time_ms**: Pass fail criteria for response time metric in milliseconds. \
 * **latency**: Pass fail criteria for latency metric in milliseconds. \
 * **error**: Pass fail criteria for error metric. \
 * **requests**: Pass fail criteria for total requests. \
 * **requests_per_sec**: Pass fail criteria for request per second.
 */
export type PFMetrics = string;

export function pFMetricsSerializer(item: PFMetrics): any {
  return item;
}

export function pFMetricsDeserializer(item: any): PFMetrics {
  return item;
}

/** Aggregation functions for pass/fail criteria. */
export enum KnownPFAgFunc {
  /** Criteria applies for count value. */
  count = '"count"',
  /** Criteria applies for given percentage value. */
  percentage = '"percentage"',
  /** Criteria applies for avg value. */
  avg = '"avg"',
  /** Criteria applies for 50th percentile value. */
  p50 = '"p50"',
  /** Criteria applies for 75th percentile value. */
  p75 = '"p75"',
  /** Criteria applies for 90th percentile value. */
  p90 = '"p90"',
  /** Criteria applies for 95th percentile value. */
  p95 = '"p95"',
  /** Criteria applies for 96th percentile value. */
  p96 = '"p96"',
  /** Criteria applies for 97th percentile value. */
  p97 = '"p97"',
  /** Criteria applies for 98th percentile value. */
  p98 = '"p98"',
  /** Criteria applies for 99th percentile value. */
  p99 = '"p99"',
  /** Criteria applies for 99.9th percentile value. */
  "p99.9" = '"p99.9"',
  /** Criteria applies for 99.99th percentile value. */
  "p99.99" = '"p99.99"',
  /** Criteria applies for minimum value. */
  min = '"min"',
  /** Criteria applies for maximum value. */
  max = '"max"',
}

/**
 * Aggregation functions for pass/fail criteria. \
 * {@link KnownPFAgFunc} can be used interchangeably with PFAgFunc,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **count**: Criteria applies for count value. \
 * **percentage**: Criteria applies for given percentage value. \
 * **avg**: Criteria applies for avg value. \
 * **p50**: Criteria applies for 50th percentile value. \
 * **p75**: Criteria applies for 75th percentile value. \
 * **p90**: Criteria applies for 90th percentile value. \
 * **p95**: Criteria applies for 95th percentile value. \
 * **p96**: Criteria applies for 96th percentile value. \
 * **p97**: Criteria applies for 97th percentile value. \
 * **p98**: Criteria applies for 98th percentile value. \
 * **p99**: Criteria applies for 99th percentile value. \
 * **p99.9**: Criteria applies for 99.9th percentile value. \
 * **p99.99**: Criteria applies for 99.99th percentile value. \
 * **min**: Criteria applies for minimum value. \
 * **max**: Criteria applies for maximum value.
 */
export type PFAgFunc = string;

export function pFAgFuncSerializer(item: PFAgFunc): any {
  return item;
}

export function pFAgFuncDeserializer(item: any): PFAgFunc {
  return item;
}

/** Action to take on failure of pass/fail criteria. */
export enum KnownPFAction {
  /** Test will continue to run even if pass fail metric criteria metric gets failed. */
  "continue" = '"continue"',
  /** Test run will stop if pass fail criteria metric is not passed. */
  stop = '"stop"',
}

/**
 * Action to take on failure of pass/fail criteria. \
 * {@link KnownPFAction} can be used interchangeably with PFAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **continue**: Test will continue to run even if pass fail metric criteria metric gets failed. \
 * **stop**: Test run will stop if pass fail criteria metric is not passed.
 */
export type PFAction = string;

export function pFActionSerializer(item: PFAction): any {
  return item;
}

export function pFActionDeserializer(item: any): PFAction {
  return item;
}

/** Pass/fail criteria result. */
export enum KnownPFResult {
  /** Given pass fail criteria metric has passed. */
  passed = '"passed"',
  /** Given pass fail criteria metric couldn't determine. */
  undetermined = '"undetermined"',
  /** Given pass fail criteria metric has failed. */
  failed = '"failed"',
}

/**
 * Pass/fail criteria result. \
 * {@link KnownPFResult} can be used interchangeably with PFResult,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **passed**: Given pass fail criteria metric has passed. \
 * **undetermined**: Given pass fail criteria metric couldn't determine. \
 * **failed**: Given pass fail criteria metric has failed.
 */
export type PFResult = string;

export function pFResultSerializer(item: PFResult): any {
  return item;
}

export function pFResultDeserializer(item: any): PFResult {
  return item;
}

export function passFailMetricRecordSerializer(
  item: Record<string, PassFailMetric>,
): Record<string, unknown> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = passFailMetricSerializer(item[key]);
  });
  return result;
}

export function passFailMetricRecordDeserializer(
  item: Record<string, any>,
): Record<string, PassFailMetric> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = passFailMetricDeserializer(item[key]);
  });
  return result;
}

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
): Record<string, unknown> {
  return {
    autoStopDisabled: item["autoStopDisabled"],
    errorRate: item["errorRate"],
    errorRateTimeWindowInSeconds: item["errorRateTimeWindowInSeconds"],
  };
}

export function autoStopCriteriaDeserializer(item: any): AutoStopCriteria {
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

export function secretSerializer(item: Secret): Record<string, unknown> {
  return {
    value: item["value"],
    type: item["type"],
  };
}

export function secretDeserializer(item: any): Secret {
  return {
    value: item["value"],
    type: secretTypeDeserializer(item["type"]),
  };
}

/** Types of secrets supported. */
export enum KnownSecretType {
  /** If the secret is stored in an Azure Key Vault. */
  AKV_SECRET_URI = '"AKV_SECRET_URI"',
  /** If the secret value provided as plain text. */
  SECRET_VALUE = '"SECRET_VALUE"',
}

/**
 * Types of secrets supported. \
 * {@link KnownSecretType} can be used interchangeably with SecretType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AKV_SECRET_URI**: If the secret is stored in an Azure Key Vault. \
 * **SECRET_VALUE**: If the secret value provided as plain text.
 */
export type SecretType = string;

export function secretTypeSerializer(item: SecretType): any {
  return item;
}

export function secretTypeDeserializer(item: any): SecretType {
  return item;
}

export function secretRecordSerializer(
  item: Record<string, Secret>,
): Record<string, unknown> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = secretSerializer(item[key]);
  });
  return result;
}

export function secretRecordDeserializer(
  item: Record<string, any>,
): Record<string, Secret> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = secretDeserializer(item[key]);
  });
  return result;
}

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
): Record<string, unknown> {
  return {
    value: item["value"],
    type: item["type"],
    name: item["name"],
  };
}

export function certificateMetadataDeserializer(
  item: any,
): CertificateMetadata {
  return {
    value: item["value"],
    type: certificateTypeDeserializer(item["type"]),
    name: item["name"],
  };
}

/** Types of certificates supported. */
export enum KnownCertificateType {
  /** If the certificate is stored in an Azure Key Vault. */
  AKV_CERT_URI = '"AKV_CERT_URI"',
}

/**
 * Types of certificates supported. \
 * {@link KnownCertificateType} can be used interchangeably with CertificateType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AKV_CERT_URI**: If the certificate is stored in an Azure Key Vault.
 */
export type CertificateType = string;

export function certificateTypeSerializer(item: CertificateType): any {
  return item;
}

export function certificateTypeDeserializer(item: any): CertificateType {
  return item;
}

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
): Record<string, unknown> {
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

export function loadTestConfigurationDeserializer(
  item: any,
): LoadTestConfiguration {
  return {
    engineInstances: item["engineInstances"],
    splitAllCSVs: item["splitAllCSVs"],
    quickStartTest: item["quickStartTest"],
    optionalLoadTestConfig: !item.optionalLoadTestConfig
      ? undefined
      : optionalLoadTestConfigDeserializer(item.optionalLoadTestConfig),
    regionalLoadTestConfig: item["regionalLoadTestConfig"],
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
): Record<string, unknown> {
  return {
    endpointUrl: item["endpointUrl"],
    requestsPerSecond: item["requestsPerSecond"],
    maxResponseTimeInMs: item["maxResponseTimeInMs"],
    virtualUsers: item["virtualUsers"],
    rampUpTime: item["rampUpTime"],
    duration: item["duration"],
  };
}

export function optionalLoadTestConfigDeserializer(
  item: any,
): OptionalLoadTestConfig {
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
): Record<string, unknown> {
  return {
    engineInstances: item["engineInstances"],
    region: item["region"],
  };
}

export function regionalConfigurationDeserializer(
  item: any,
): RegionalConfiguration {
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

/** Types of file supported. */
export enum KnownFileType {
  /** If the file is a JMX script. */
  JMX_FILE = '"JMX_FILE"',
  /** If the file is a user properties file. */
  USER_PROPERTIES = '"USER_PROPERTIES"',
  /** If the file is not among any of the other supported file types. */
  ADDITIONAL_ARTIFACTS = '"ADDITIONAL_ARTIFACTS"',
  /** If the file is a compressed archive containing a collection of various artifacts or resources. */
  ZIPPED_ARTIFACTS = '"ZIPPED_ARTIFACTS"',
  /** If the file is a JSON config file to define the requests for a URL test. */
  URL_TEST_CONFIG = '"URL_TEST_CONFIG"',
  /** If the file is a test script. */
  TEST_SCRIPT = '"TEST_SCRIPT"',
}

/**
 * Types of file supported. \
 * {@link KnownFileType} can be used interchangeably with FileType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **JMX_FILE**: If the file is a JMX script. \
 * **USER_PROPERTIES**: If the file is a user properties file. \
 * **ADDITIONAL_ARTIFACTS**: If the file is not among any of the other supported file types. \
 * **ZIPPED_ARTIFACTS**: If the file is a compressed archive containing a collection of various artifacts or resources. \
 * **URL_TEST_CONFIG**: If the file is a JSON config file to define the requests for a URL test. \
 * **TEST_SCRIPT**: If the file is a test script.
 */
export type FileType = string;

export function fileTypeSerializer(item: FileType): any {
  return item;
}

export function fileTypeDeserializer(item: any): FileType {
  return item;
}

/** File status. */
export enum KnownFileStatus {
  /** File is not validated. */
  NOT_VALIDATED = '"NOT_VALIDATED"',
  /** File is validated. */
  VALIDATION_SUCCESS = '"VALIDATION_SUCCESS"',
  /** File validation is failed. */
  VALIDATION_FAILURE = '"VALIDATION_FAILURE"',
  /** File validation is in progress. */
  VALIDATION_INITIATED = '"VALIDATION_INITIATED"',
  /** Validation is not required. */
  VALIDATION_NOT_REQUIRED = '"VALIDATION_NOT_REQUIRED"',
}

/**
 * File status. \
 * {@link KnownFileStatus} can be used interchangeably with FileStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NOT_VALIDATED**: File is not validated. \
 * **VALIDATION_SUCCESS**: File is validated. \
 * **VALIDATION_FAILURE**: File validation is failed. \
 * **VALIDATION_INITIATED**: File validation is in progress. \
 * **VALIDATION_NOT_REQUIRED**: Validation is not required.
 */
export type FileStatus = string;

export function fileStatusSerializer(item: FileStatus): any {
  return item;
}

export function fileStatusDeserializer(item: any): FileStatus {
  return item;
}

/** Test kind */
export enum KnownTestKind {
  /** URL Test */
  URL = '"URL"',
  /** JMX Test */
  JMX = '"JMX"',
  /** Locust Test */
  Locust = '"Locust"',
}

/**
 * Test kind \
 * {@link KnownTestKind} can be used interchangeably with TestKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **URL**: URL Test \
 * **JMX**: JMX Test \
 * **Locust**: Locust Test
 */
export type TestKind = string;

export function testKindSerializer(item: TestKind): any {
  return item;
}

export function testKindDeserializer(item: any): TestKind {
  return item;
}

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
): Record<string, unknown> {
  return {
    components: serializeRecord(
      item.components as any,
      appComponentSerializer,
    ) as any,
  };
}

export function testAppComponentsDeserializer(item: any): TestAppComponents {
  return {
    components: appComponentRecordDeserializer(item["components"]),
    testId: item["testId"],
    createdDateTime: item["createdDateTime"],
    createdBy: item["createdBy"],
    lastModifiedDateTime: item["lastModifiedDateTime"],
    lastModifiedBy: item["lastModifiedBy"],
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

export function appComponentSerializer(
  item: AppComponent,
): Record<string, unknown> {
  return {
    resourceName: item["resourceName"],
    resourceType: item["resourceType"],
    displayName: item["displayName"],
    kind: item["kind"],
  };
}

export function appComponentDeserializer(item: any): AppComponent {
  return {
    resourceId: item["resourceId"],
    resourceName: item["resourceName"],
    resourceType: item["resourceType"],
    displayName: item["displayName"],
    resourceGroup: item["resourceGroup"],
    subscriptionId: item["subscriptionId"],
    kind: item["kind"],
  };
}

export function appComponentRecordSerializer(
  item: Record<string, AppComponent>,
): Record<string, unknown> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = appComponentSerializer(item[key]);
  });
  return result;
}

export function appComponentRecordDeserializer(
  item: Record<string, any>,
): Record<string, AppComponent> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = appComponentDeserializer(item[key]);
  });
  return result;
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
): Record<string, unknown> {
  return {
    metrics: serializeRecord(
      item.metrics as any,
      resourceMetricSerializer,
    ) as any,
  };
}

export function testServerMetricConfigDeserializer(
  item: any,
): TestServerMetricConfig {
  return {
    testId: item["testId"],
    metrics: resourceMetricRecordDeserializer(item["metrics"]),
    createdDateTime: item["createdDateTime"],
    createdBy: item["createdBy"],
    lastModifiedDateTime: item["lastModifiedDateTime"],
    lastModifiedBy: item["lastModifiedBy"],
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
): Record<string, unknown> {
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

export function resourceMetricDeserializer(item: any): ResourceMetric {
  return {
    id: item["id"],
    resourceId: item["resourceId"],
    metricNamespace: item["metricNamespace"],
    displayDescription: item["displayDescription"],
    name: item["name"],
    aggregation: item["aggregation"],
    unit: item["unit"],
    resourceType: item["resourceType"],
  };
}

export function resourceMetricRecordSerializer(
  item: Record<string, ResourceMetric>,
): Record<string, unknown> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = resourceMetricSerializer(item[key]);
  });
  return result;
}

export function resourceMetricRecordDeserializer(
  item: Record<string, any>,
): Record<string, ResourceMetric> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = resourceMetricDeserializer(item[key]);
  });
  return result;
}

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

export function testRunSerializer(item: TestRun): Record<string, unknown> {
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

export function testRunDeserializer(item: any): TestRun {
  return {
    testRunId: item["testRunId"],
    passFailCriteria: !item.passFailCriteria
      ? undefined
      : passFailCriteriaDeserializer(item.passFailCriteria),
    autoStopCriteria: !item.autoStopCriteria
      ? undefined
      : autoStopCriteriaDeserializer(item.autoStopCriteria),
    secrets: secretRecordDeserializer(item["secrets"]),
    certificate: !item.certificate
      ? undefined
      : certificateMetadataDeserializer(item.certificate),
    environmentVariables: item["environmentVariables"],
    errorDetails: item["errorDetails"],
    testRunStatistics: item["testRunStatistics"],
    regionalStatistics: item["regionalStatistics"],
    loadTestConfiguration: !item.loadTestConfiguration
      ? undefined
      : loadTestConfigurationDeserializer(item.loadTestConfiguration),
    testArtifacts: !item.testArtifacts ? undefined : item.testArtifacts,
    testResult: pFTestResultDeserializer(item["testResult"]),
    virtualUsers: item["virtualUsers"],
    displayName: item["displayName"],
    testId: item["testId"],
    description: item["description"],
    status: statusDeserializer(item["status"]),
    startDateTime: item["startDateTime"],
    endDateTime: item["endDateTime"],
    executedDateTime: item["executedDateTime"],
    portalUrl: item["portalUrl"],
    duration: item["duration"],
    subnetId: item["subnetId"],
    kind: testKindDeserializer(item["kind"]),
    requestDataLevel: requestDataLevelDeserializer(item["requestDataLevel"]),
    debugLogsEnabled: item["debugLogsEnabled"],
    publicIPDisabled: item["publicIPDisabled"],
    createdDateTime: item["createdDateTime"],
    createdBy: item["createdBy"],
    lastModifiedDateTime: item["lastModifiedDateTime"],
    lastModifiedBy: item["lastModifiedBy"],
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

/** Test result based on pass/fail criteria. */
export enum KnownPFTestResult {
  /** Pass/fail criteria has passed. */
  PASSED = '"PASSED"',
  /** Pass/fail criteria is not applicable. */
  NOT_APPLICABLE = '"NOT_APPLICABLE"',
  /** Pass/fail criteria has failed. */
  FAILED = '"FAILED"',
}

/**
 * Test result based on pass/fail criteria. \
 * {@link KnownPFTestResult} can be used interchangeably with PFTestResult,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PASSED**: Pass\/fail criteria has passed. \
 * **NOT_APPLICABLE**: Pass\/fail criteria is not applicable. \
 * **FAILED**: Pass\/fail criteria has failed.
 */
export type PFTestResult = string;

export function pFTestResultSerializer(item: PFTestResult): any {
  return item;
}

export function pFTestResultDeserializer(item: any): PFTestResult {
  return item;
}

/** Test run status. */
export enum KnownStatus {
  /** Test run request is accepted. */
  ACCEPTED = '"ACCEPTED"',
  /** Test run is not yet started. */
  NOTSTARTED = '"NOTSTARTED"',
  /** Test run is provisioning. */
  PROVISIONING = '"PROVISIONING"',
  /** Test run is provisioned. */
  PROVISIONED = '"PROVISIONED"',
  /** Test run is getting configured. */
  CONFIGURING = '"CONFIGURING"',
  /** Test run configuration is done. */
  CONFIGURED = '"CONFIGURED"',
  /** Test run has started executing. */
  EXECUTING = '"EXECUTING"',
  /** Test run execution is completed. */
  EXECUTED = '"EXECUTED"',
  /** Test run is getting deprovisioned. */
  DEPROVISIONING = '"DEPROVISIONING"',
  /** Test run is deprovisioned. */
  DEPROVISIONED = '"DEPROVISIONED"',
  /** Test run is completed. */
  DONE = '"DONE"',
  /** Test run is being cancelled. */
  CANCELLING = '"CANCELLING"',
  /** Test run request is cancelled. */
  CANCELLED = '"CANCELLED"',
  /** Test run request is failed. */
  FAILED = '"FAILED"',
  /** Test run JMX file is validated. */
  VALIDATION_SUCCESS = '"VALIDATION_SUCCESS"',
  /** Test run JMX file validation is failed. */
  VALIDATION_FAILURE = '"VALIDATION_FAILURE"',
}

/**
 * Test run status. \
 * {@link KnownStatus} can be used interchangeably with Status,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ACCEPTED**: Test run request is accepted. \
 * **NOTSTARTED**: Test run is not yet started. \
 * **PROVISIONING**: Test run is provisioning. \
 * **PROVISIONED**: Test run is provisioned. \
 * **CONFIGURING**: Test run is getting configured. \
 * **CONFIGURED**: Test run configuration is done. \
 * **EXECUTING**: Test run has started executing. \
 * **EXECUTED**: Test run execution is completed. \
 * **DEPROVISIONING**: Test run is getting deprovisioned. \
 * **DEPROVISIONED**: Test run is deprovisioned. \
 * **DONE**: Test run is completed. \
 * **CANCELLING**: Test run is being cancelled. \
 * **CANCELLED**: Test run request is cancelled. \
 * **FAILED**: Test run request is failed. \
 * **VALIDATION_SUCCESS**: Test run JMX file is validated. \
 * **VALIDATION_FAILURE**: Test run JMX file validation is failed.
 */
export type Status = string;

export function statusSerializer(item: Status): any {
  return item;
}

export function statusDeserializer(item: any): Status {
  return item;
}

/** Request data collection level for test run */
export enum KnownRequestDataLevel {
  /** No request data will be collected */
  NONE = '"NONE"',
  /** Request data will be collected in case of failed requests */
  ERRORS = '"ERRORS"',
}

/**
 * Request data collection level for test run \
 * {@link KnownRequestDataLevel} can be used interchangeably with RequestDataLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NONE**: No request data will be collected \
 * **ERRORS**: Request data will be collected in case of failed requests
 */
export type RequestDataLevel = string;

export function requestDataLevelSerializer(item: RequestDataLevel): any {
  return item;
}

export function requestDataLevelDeserializer(item: any): RequestDataLevel {
  return item;
}

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
): Record<string, unknown> {
  return {
    components: serializeRecord(
      item.components as any,
      appComponentSerializer,
    ) as any,
  };
}

export function testRunAppComponentsDeserializer(
  item: any,
): TestRunAppComponents {
  return {
    components: appComponentRecordDeserializer(item["components"]),
    testRunId: item["testRunId"],
    createdDateTime: item["createdDateTime"],
    createdBy: item["createdBy"],
    lastModifiedDateTime: item["lastModifiedDateTime"],
    lastModifiedBy: item["lastModifiedBy"],
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
): Record<string, unknown> {
  return {
    metrics: !item.metrics
      ? item.metrics
      : (serializeRecord(item.metrics as any, resourceMetricSerializer) as any),
  };
}

export function testRunServerMetricConfigDeserializer(
  item: any,
): TestRunServerMetricConfig {
  return {
    testRunId: item["testRunId"],
    metrics: resourceMetricRecordDeserializer(item["metrics"]),
    createdDateTime: item["createdDateTime"],
    createdBy: item["createdBy"],
    lastModifiedDateTime: item["lastModifiedDateTime"],
    lastModifiedBy: item["lastModifiedBy"],
  };
}

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

/** Aggregation type. */
export enum KnownAggregationType {
  /** Average value. */
  Average = '"Average"',
  /** Total count. */
  Count = '"Count"',
  /** Aggregation will be average in this case. */
  None = '"None"',
  /** Total sum. */
  Total = '"Total"',
  /** 75th percentile. */
  Percentile75 = '"Percentile75"',
  /** 90th percentile. */
  Percentile90 = '"Percentile90"',
  /** 95th percentile. */
  Percentile95 = '"Percentile95"',
  /** 96th percentile. */
  Percentile96 = '"Percentile96"',
  /** 97th percentile. */
  Percentile97 = '"Percentile97"',
  /** 98th percentile. */
  Percentile98 = '"Percentile98"',
  /** 99th percentile. */
  Percentile99 = '"Percentile99"',
  /** 99.9th percentile. */
  Percentile999 = '"Percentile999"',
  /** 99.99th percentile. */
  Percentile9999 = '"Percentile9999"',
}

/**
 * Aggregation type. \
 * {@link KnownAggregationType} can be used interchangeably with AggregationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Average**: Average value. \
 * **Count**: Total count. \
 * **None**: Aggregation will be average in this case. \
 * **Total**: Total sum. \
 * **Percentile75**: 75th percentile. \
 * **Percentile90**: 90th percentile. \
 * **Percentile95**: 95th percentile. \
 * **Percentile96**: 96th percentile. \
 * **Percentile97**: 97th percentile. \
 * **Percentile98**: 98th percentile. \
 * **Percentile99**: 99th percentile. \
 * **Percentile999**: 99.9th percentile. \
 * **Percentile9999**: 99.99th percentile.
 */
export type AggregationType = string;

export function aggregationTypeSerializer(item: AggregationType): any {
  return item;
}

export function aggregationTypeDeserializer(item: any): AggregationType {
  return item;
}

/** Metric unit. */
export enum KnownMetricUnit {
  /** No unit specified. */
  NotSpecified = '"NotSpecified"',
  /** Percentage. */
  Percent = '"Percent"',
  /** Value count. */
  Count = '"Count"',
  /** Seconds. */
  Seconds = '"Seconds"',
  /** Milliseconds */
  Milliseconds = '"Milliseconds"',
  /** Bytes */
  Bytes = '"Bytes"',
  /** Bytes per second */
  BytesPerSecond = '"BytesPerSecond"',
  /** Count per second */
  CountPerSecond = '"CountPerSecond"',
}

/**
 * Metric unit. \
 * {@link KnownMetricUnit} can be used interchangeably with MetricUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified**: No unit specified. \
 * **Percent**: Percentage. \
 * **Count**: Value count. \
 * **Seconds**: Seconds. \
 * **Milliseconds**: Milliseconds \
 * **Bytes**: Bytes \
 * **BytesPerSecond**: Bytes per second \
 * **CountPerSecond**: Count per second
 */
export type MetricUnit = string;

export function metricUnitSerializer(item: MetricUnit): any {
  return item;
}

export function metricUnitDeserializer(item: any): MetricUnit {
  return item;
}

/** Metric availability specifies the time grain (aggregation interval or frequency) */
export interface MetricAvailability {
  /**
   * The time grain specifies the aggregation interval for the metric. Expressed as
   * a duration 'PT1M', 'PT1H', etc.
   */
  timeGrain?: TimeGrain;
}

/** Time Grain */
export enum KnownTimeGrain {
  /** 5 seconds, available only if test run duration is less than 10 minutes. */
  PT5S = '"PT5S"',
  /** 10 seconds, available only if test run duration is less than 10 minutes. */
  PT10S = '"PT10S"',
  /** 1 minute */
  PT1M = '"PT1M"',
  /** 5 minutes, available only if test run duration is greater than 1 minute. */
  PT5M = '"PT5M"',
  /** 1 hour, available only if test run duration is greater than 1 minute. */
  PT1H = '"PT1H"',
}

/**
 * Time Grain \
 * {@link KnownTimeGrain} can be used interchangeably with TimeGrain,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PT5S**: 5 seconds, available only if test run duration is less than 10 minutes. \
 * **PT10S**: 10 seconds, available only if test run duration is less than 10 minutes. \
 * **PT1M**: 1 minute \
 * **PT5M**: 5 minutes, available only if test run duration is greater than 1 minute. \
 * **PT1H**: 1 hour, available only if test run duration is greater than 1 minute.
 */
export type TimeGrain = string;

export function timeGrainSerializer(item: TimeGrain): any {
  return item;
}

export function timeGrainDeserializer(item: any): TimeGrain {
  return item;
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
): Record<string, unknown> {
  return {
    filters:
      item["filters"] === undefined
        ? item["filters"]
        : item["filters"].map(dimensionFilterSerializer),
  };
}

export function metricRequestPayloadDeserializer(
  item: any,
): MetricRequestPayload {
  return {
    filters: item["filters"],
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
): Record<string, unknown> {
  return {
    name: item["name"],
    values: item["values"],
  };
}

export function dimensionFilterDeserializer(item: any): DimensionFilter {
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

/** Test Profile Model. */
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

export function testProfileSerializer(
  item: TestProfile,
): Record<string, unknown> {
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

export function testProfileDeserializer(item: any): TestProfile {
  return {
    testProfileId: item["testProfileId"],
    displayName: item["displayName"],
    description: item["description"],
    testId: item["testId"],
    targetResourceId: item["targetResourceId"],
    targetResourceConfigurations: !item.targetResourceConfigurations
      ? undefined
      : targetResourceConfigurationsUnionDeserializer(
          item.targetResourceConfigurations,
        ),
    createdDateTime: item["createdDateTime"],
    createdBy: item["createdBy"],
    lastModifiedDateTime: item["lastModifiedDateTime"],
    lastModifiedBy: item["lastModifiedBy"],
  };
}

/** Configurations of a target resource. This varies with the kind of resource. */
export interface TargetResourceConfigurations {
  /** Kind of the resource for which the configurations apply. */
  kind: ResourceKind;
}

export function targetResourceConfigurationsSerializer(
  item: TargetResourceConfigurations,
): Record<string, unknown> {
  return {
    kind: item["kind"],
  };
}

export function targetResourceConfigurationsDeserializer(
  item: any,
): TargetResourceConfigurations {
  return {
    kind: resourceKindDeserializer(item["kind"]),
  };
}

export type TargetResourceConfigurationsUnion =
  | FunctionFlexConsumptionTargetResourceConfigurations
  | TargetResourceConfigurations;

export function targetResourceConfigurationsUnionSerializer(
  item: TargetResourceConfigurations,
): Record<string, unknown> {
  switch (item.kind) {
    case "FunctionsFlexConsumption":
      return functionFlexConsumptionTargetResourceConfigurationsSerializer(
        item as FunctionFlexConsumptionTargetResourceConfigurations,
      );

    default:
      return targetResourceConfigurationsSerializer(item);
  }
}

export function targetResourceConfigurationsUnionDeserializer(
  item: any,
): TargetResourceConfigurations {
  switch (item.kind) {
    case "FunctionsFlexConsumption":
      return functionFlexConsumptionTargetResourceConfigurationsDeserializer(
        item as FunctionFlexConsumptionTargetResourceConfigurations,
      );

    default:
      return targetResourceConfigurationsDeserializer(item);
  }
}

/** Kind of the resource on which test profile is created. */
export enum KnownResourceKind {
  /** Resource is a Azure FunctionApp on Flex Consumption Plan. */
  FunctionsFlexConsumption = '"FunctionsFlexConsumption"',
}

/**
 * Kind of the resource on which test profile is created. \
 * {@link KnownResourceKind} can be used interchangeably with ResourceKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FunctionsFlexConsumption**: Resource is a Azure FunctionApp on Flex Consumption Plan.
 */
export type ResourceKind = string;

export function resourceKindSerializer(item: ResourceKind): any {
  return item;
}

export function resourceKindDeserializer(item: any): ResourceKind {
  return item;
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
): Record<string, unknown> {
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

export function functionFlexConsumptionTargetResourceConfigurationsDeserializer(
  item: any,
): FunctionFlexConsumptionTargetResourceConfigurations {
  return {
    kind: item["kind"],
    configurations:
      functionFlexConsumptionResourceConfigurationRecordDeserializer(
        item["configurations"],
      ),
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
): Record<string, unknown> {
  return {
    instanceMemoryMB: item["instanceMemoryMB"],
    httpConcurrency: item["httpConcurrency"],
  };
}

export function functionFlexConsumptionResourceConfigurationDeserializer(
  item: any,
): FunctionFlexConsumptionResourceConfiguration {
  return {
    instanceMemoryMB: item["instanceMemoryMB"],
    httpConcurrency: item["httpConcurrency"],
  };
}

export function functionFlexConsumptionResourceConfigurationRecordSerializer(
  item: Record<string, FunctionFlexConsumptionResourceConfiguration>,
): Record<string, unknown> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = functionFlexConsumptionResourceConfigurationSerializer(
      item[key],
    );
  });
  return result;
}

export function functionFlexConsumptionResourceConfigurationRecordDeserializer(
  item: Record<string, any>,
): Record<string, FunctionFlexConsumptionResourceConfiguration> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = functionFlexConsumptionResourceConfigurationDeserializer(
      item[key],
    );
  });
  return result;
}

/** Test Profile Run model. */
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
): Record<string, unknown> {
  return {
    displayName: item["displayName"],
    description: item["description"],
    testProfileId: item["testProfileId"],
  };
}

export function testProfileRunDeserializer(item: any): TestProfileRun {
  return {
    testProfileRunId: item["testProfileRunId"],
    displayName: item["displayName"],
    description: item["description"],
    testProfileId: item["testProfileId"],
    targetResourceId: item["targetResourceId"],
    targetResourceConfigurations: !item.targetResourceConfigurations
      ? undefined
      : targetResourceConfigurationsUnionDeserializer(
          item.targetResourceConfigurations,
        ),
    status: testProfileRunStatusDeserializer(item["status"]),
    errorDetails: item["errorDetails"],
    startDateTime: item["startDateTime"],
    endDateTime: item["endDateTime"],
    durationInSeconds: item["durationInSeconds"],
    testRunDetails: item["testRunDetails"],
    recommendations: item["recommendations"],
    createdDateTime: item["createdDateTime"],
    createdBy: item["createdBy"],
    lastModifiedDateTime: item["lastModifiedDateTime"],
    lastModifiedBy: item["lastModifiedBy"],
  };
}

/** Test profile run status. */
export enum KnownTestProfileRunStatus {
  /** Test profile run request is accepted. */
  ACCEPTED = '"ACCEPTED"',
  /** Test profile run is not yet started. */
  NOTSTARTED = '"NOTSTARTED"',
  /** Test profile run has started executing. */
  EXECUTING = '"EXECUTING"',
  /** Test profile run has completed successfully. */
  DONE = '"DONE"',
  /** Test profile run is being cancelled. */
  CANCELLING = '"CANCELLING"',
  /** Test profile run is cancelled. */
  CANCELLED = '"CANCELLED"',
  /** Test profile run has failed. */
  FAILED = '"FAILED"',
}

/**
 * Test profile run status. \
 * {@link KnownTestProfileRunStatus} can be used interchangeably with TestProfileRunStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ACCEPTED**: Test profile run request is accepted. \
 * **NOTSTARTED**: Test profile run is not yet started. \
 * **EXECUTING**: Test profile run has started executing. \
 * **DONE**: Test profile run has completed successfully. \
 * **CANCELLING**: Test profile run is being cancelled. \
 * **CANCELLED**: Test profile run is cancelled. \
 * **FAILED**: Test profile run has failed.
 */
export type TestProfileRunStatus = string;

export function testProfileRunStatusSerializer(
  item: TestProfileRunStatus,
): any {
  return item;
}

export function testProfileRunStatusDeserializer(
  item: any,
): TestProfileRunStatus {
  return item;
}

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

/** Category of Recommendation. */
export enum KnownRecommendationCategory {
  /** The recommendation for this category optimizes the throughput/RPS (Requests per Second) of the app. */
  ThroughputOptimized = '"ThroughputOptimized"',
  /** The recommendation for this category optimizes the cost of the app. */
  CostOptimized = '"CostOptimized"',
}

/**
 * Category of Recommendation. \
 * {@link KnownRecommendationCategory} can be used interchangeably with RecommendationCategory,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ThroughputOptimized**: The recommendation for this category optimizes the throughput\/RPS (Requests per Second) of the app. \
 * **CostOptimized**: The recommendation for this category optimizes the cost of the app.
 */
export type RecommendationCategory = string;

export function recommendationCategorySerializer(
  item: RecommendationCategory,
): any {
  return item;
}

export function recommendationCategoryDeserializer(
  item: any,
): RecommendationCategory {
  return item;
}

/** Azure Load Testing API versions. */
export type APIVersions =
  | "2022-11-01"
  | "2023-04-01-preview"
  | "2024-03-01-preview"
  | "2024-05-01-preview";

export function aPIVersionsSerializer(item: APIVersions): any {
  return item;
}

export function aPIVersionsDeserializer(item: any): APIVersions {
  return item;
}

/** A response containing error details. */
export interface ErrorResponse {
  /** The error object. */
  error: ErrorModel;
  /** String error code indicating what went wrong. */
  errorCode?: string;
}

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
