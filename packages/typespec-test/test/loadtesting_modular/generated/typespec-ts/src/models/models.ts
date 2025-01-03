// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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

export function testSerializer(item: Test): any {
  return {
    passFailCriteria: !item["passFailCriteria"]
      ? item["passFailCriteria"]
      : passFailCriteriaSerializer(item["passFailCriteria"]),
    autoStopCriteria: !item["autoStopCriteria"]
      ? item["autoStopCriteria"]
      : autoStopCriteriaSerializer(item["autoStopCriteria"]),
    secrets: !item["secrets"]
      ? item["secrets"]
      : secretRecordSerializer(item["secrets"]),
    certificate: !item["certificate"]
      ? item["certificate"]
      : certificateMetadataSerializer(item["certificate"]),
    environmentVariables: item["environmentVariables"],
    loadTestConfiguration: !item["loadTestConfiguration"]
      ? item["loadTestConfiguration"]
      : loadTestConfigurationSerializer(item["loadTestConfiguration"]),
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
    passFailCriteria: !item["passFailCriteria"]
      ? item["passFailCriteria"]
      : passFailCriteriaDeserializer(item["passFailCriteria"]),
    autoStopCriteria: !item["autoStopCriteria"]
      ? item["autoStopCriteria"]
      : autoStopCriteriaDeserializer(item["autoStopCriteria"]),
    secrets: !item["secrets"]
      ? item["secrets"]
      : secretRecordDeserializer(item["secrets"]),
    certificate: !item["certificate"]
      ? item["certificate"]
      : certificateMetadataDeserializer(item["certificate"]),
    environmentVariables: item["environmentVariables"],
    loadTestConfiguration: !item["loadTestConfiguration"]
      ? item["loadTestConfiguration"]
      : loadTestConfigurationDeserializer(item["loadTestConfiguration"]),
    baselineTestRunId: item["baselineTestRunId"],
    inputArtifacts: !item["inputArtifacts"]
      ? item["inputArtifacts"]
      : testInputArtifactsDeserializer(item["inputArtifacts"]),
    testId: item["testId"],
    description: item["description"],
    displayName: item["displayName"],
    subnetId: item["subnetId"],
    kind: item["kind"],
    publicIPDisabled: item["publicIPDisabled"],
    keyvaultReferenceIdentityType: item["keyvaultReferenceIdentityType"],
    keyvaultReferenceIdentityId: item["keyvaultReferenceIdentityId"],
    createdDateTime: !item["createdDateTime"]
      ? item["createdDateTime"]
      : new Date(item["createdDateTime"]),
    createdBy: item["createdBy"],
    lastModifiedDateTime: !item["lastModifiedDateTime"]
      ? item["lastModifiedDateTime"]
      : new Date(item["lastModifiedDateTime"]),
    lastModifiedBy: item["lastModifiedBy"],
  };
}

/** Pass fail criteria for a test. */
export interface PassFailCriteria {
  /** Map of id and pass fail metrics { id  : pass fail metrics }. */
  passFailMetrics?: Record<string, PassFailMetric>;
}

export function passFailCriteriaSerializer(item: PassFailCriteria): any {
  return {
    passFailMetrics: !item["passFailMetrics"]
      ? item["passFailMetrics"]
      : passFailMetricRecordSerializer(item["passFailMetrics"]),
  };
}

export function passFailCriteriaDeserializer(item: any): PassFailCriteria {
  return {
    passFailMetrics: !item["passFailMetrics"]
      ? item["passFailMetrics"]
      : passFailMetricRecordDeserializer(item["passFailMetrics"]),
  };
}

export function passFailMetricRecordSerializer(
  item: Record<string, PassFailMetric>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : passFailMetricSerializer(item[key]);
  });
  return result;
}

export function passFailMetricRecordDeserializer(
  item: Record<string, any>,
): Record<string, PassFailMetric> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : passFailMetricDeserializer(item[key]);
  });
  return result;
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

export function passFailMetricSerializer(item: PassFailMetric): any {
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
    clientMetric: item["clientMetric"],
    aggregate: item["aggregate"],
    condition: item["condition"],
    requestName: item["requestName"],
    value: item["value"],
    action: item["action"],
    actualValue: item["actualValue"],
    result: item["result"],
  };
}

/** Metrics for pass/fail criteria. */
export enum KnownPFMetrics {
  /** Pass fail criteria for response time metric in milliseconds. */
  response_time_ms = "response_time_ms",
  /** Pass fail criteria for latency metric in milliseconds. */
  latency = "latency",
  /** Pass fail criteria for error metric. */
  error = "error",
  /** Pass fail criteria for total requests. */
  requests = "requests",
  /** Pass fail criteria for request per second. */
  requests_per_sec = "requests_per_sec",
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

/** Aggregation functions for pass/fail criteria. */
export enum KnownPFAgFunc {
  /** Criteria applies for count value. */
  count = "count",
  /** Criteria applies for given percentage value. */
  percentage = "percentage",
  /** Criteria applies for avg value. */
  avg = "avg",
  /** Criteria applies for 50th percentile value. */
  p50 = "p50",
  /** Criteria applies for 75th percentile value. */
  p75 = "p75",
  /** Criteria applies for 90th percentile value. */
  p90 = "p90",
  /** Criteria applies for 95th percentile value. */
  p95 = "p95",
  /** Criteria applies for 96th percentile value. */
  p96 = "p96",
  /** Criteria applies for 97th percentile value. */
  p97 = "p97",
  /** Criteria applies for 98th percentile value. */
  p98 = "p98",
  /** Criteria applies for 99th percentile value. */
  p99 = "p99",
  /** Criteria applies for 99.9th percentile value. */
  "p99.9" = "p99.9",
  /** Criteria applies for 99.99th percentile value. */
  "p99.99" = "p99.99",
  /** Criteria applies for minimum value. */
  min = "min",
  /** Criteria applies for maximum value. */
  max = "max",
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

/** Action to take on failure of pass/fail criteria. */
export enum KnownPFAction {
  /** Test will continue to run even if pass fail metric criteria metric gets failed. */
  "continue" = "continue",
  /** Test run will stop if pass fail criteria metric is not passed. */
  stop = "stop",
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

/** Pass/fail criteria result. */
export enum KnownPFResult {
  /** Given pass fail criteria metric has passed. */
  passed = "passed",
  /** Given pass fail criteria metric couldn't determine. */
  undetermined = "undetermined",
  /** Given pass fail criteria metric has failed. */
  failed = "failed",
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

/** Auto stop criteria for a test. This will automatically stop a load test if the error percentage is high for a certain time window. */
export interface AutoStopCriteria {
  /** Whether auto-stop should be disabled. The default value is false. */
  autoStopDisabled?: boolean;
  /** Threshold percentage of errors on which test run should be automatically stopped. Allowed values are in range of 0.0-100.0 */
  errorRate?: number;
  /** Time window during which the error percentage should be evaluated in seconds. */
  errorRateTimeWindowInSeconds?: number;
}

export function autoStopCriteriaSerializer(item: AutoStopCriteria): any {
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

export function secretRecordSerializer(
  item: Record<string, Secret>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : secretSerializer(item[key]);
  });
  return result;
}

export function secretRecordDeserializer(
  item: Record<string, any>,
): Record<string, Secret> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : secretDeserializer(item[key]);
  });
  return result;
}

/** Secret */
export interface Secret {
  /** The value of the secret for the respective type */
  value?: string;
  /** Type of secret */
  type?: SecretType;
}

export function secretSerializer(item: Secret): any {
  return { value: item["value"], type: item["type"] };
}

export function secretDeserializer(item: any): Secret {
  return {
    value: item["value"],
    type: item["type"],
  };
}

/** Types of secrets supported. */
export enum KnownSecretType {
  /** If the secret is stored in an Azure Key Vault. */
  AKV_SECRET_URI = "AKV_SECRET_URI",
  /** If the secret value provided as plain text. */
  SECRET_VALUE = "SECRET_VALUE",
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

/** Certificates metadata */
export interface CertificateMetadata {
  /** The value of the certificate for respective type */
  value?: string;
  /** Type of certificate */
  type?: CertificateType;
  /** Name of the certificate. */
  name?: string;
}

export function certificateMetadataSerializer(item: CertificateMetadata): any {
  return { value: item["value"], type: item["type"], name: item["name"] };
}

export function certificateMetadataDeserializer(
  item: any,
): CertificateMetadata {
  return {
    value: item["value"],
    type: item["type"],
    name: item["name"],
  };
}

/** Types of certificates supported. */
export enum KnownCertificateType {
  /** If the certificate is stored in an Azure Key Vault. */
  AKV_CERT_URI = "AKV_CERT_URI",
}

/**
 * Types of certificates supported. \
 * {@link KnownCertificateType} can be used interchangeably with CertificateType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AKV_CERT_URI**: If the certificate is stored in an Azure Key Vault.
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
): any {
  return {
    engineInstances: item["engineInstances"],
    splitAllCSVs: item["splitAllCSVs"],
    quickStartTest: item["quickStartTest"],
    optionalLoadTestConfig: !item["optionalLoadTestConfig"]
      ? item["optionalLoadTestConfig"]
      : optionalLoadTestConfigSerializer(item["optionalLoadTestConfig"]),
    regionalLoadTestConfig: !item["regionalLoadTestConfig"]
      ? item["regionalLoadTestConfig"]
      : regionalConfigurationArraySerializer(item["regionalLoadTestConfig"]),
  };
}

export function loadTestConfigurationDeserializer(
  item: any,
): LoadTestConfiguration {
  return {
    engineInstances: item["engineInstances"],
    splitAllCSVs: item["splitAllCSVs"],
    quickStartTest: item["quickStartTest"],
    optionalLoadTestConfig: !item["optionalLoadTestConfig"]
      ? item["optionalLoadTestConfig"]
      : optionalLoadTestConfigDeserializer(item["optionalLoadTestConfig"]),
    regionalLoadTestConfig: !item["regionalLoadTestConfig"]
      ? item["regionalLoadTestConfig"]
      : regionalConfigurationArrayDeserializer(item["regionalLoadTestConfig"]),
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
): any {
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

export function regionalConfigurationArraySerializer(
  result: Array<RegionalConfiguration>,
): any[] {
  return result.map((item) => {
    return regionalConfigurationSerializer(item);
  });
}

export function regionalConfigurationArrayDeserializer(
  result: Array<RegionalConfiguration>,
): any[] {
  return result.map((item) => {
    return regionalConfigurationDeserializer(item);
  });
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
): any {
  return { engineInstances: item["engineInstances"], region: item["region"] };
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

export function testInputArtifactsDeserializer(item: any): TestInputArtifacts {
  return {
    configFileInfo: !item["configFileInfo"]
      ? item["configFileInfo"]
      : testFileInfoDeserializer(item["configFileInfo"]),
    testScriptFileInfo: !item["testScriptFileInfo"]
      ? item["testScriptFileInfo"]
      : testFileInfoDeserializer(item["testScriptFileInfo"]),
    userPropFileInfo: !item["userPropFileInfo"]
      ? item["userPropFileInfo"]
      : testFileInfoDeserializer(item["userPropFileInfo"]),
    inputArtifactsZipFileInfo: !item["inputArtifactsZipFileInfo"]
      ? item["inputArtifactsZipFileInfo"]
      : testFileInfoDeserializer(item["inputArtifactsZipFileInfo"]),
    urlTestConfigFileInfo: !item["urlTestConfigFileInfo"]
      ? item["urlTestConfigFileInfo"]
      : testFileInfoDeserializer(item["urlTestConfigFileInfo"]),
    additionalFileInfo: !item["additionalFileInfo"]
      ? item["additionalFileInfo"]
      : testFileInfoArrayDeserializer(item["additionalFileInfo"]),
  };
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

export function testFileInfoDeserializer(item: any): TestFileInfo {
  return {
    fileName: item["fileName"],
    url: item["url"],
    fileType: item["fileType"],
    expireDateTime: !item["expireDateTime"]
      ? item["expireDateTime"]
      : new Date(item["expireDateTime"]),
    validationStatus: item["validationStatus"],
    validationFailureDetails: item["validationFailureDetails"],
  };
}

/** Types of file supported. */
export enum KnownFileType {
  /** If the file is a JMX script. */
  JMX_FILE = "JMX_FILE",
  /** If the file is a user properties file. */
  USER_PROPERTIES = "USER_PROPERTIES",
  /** If the file is not among any of the other supported file types. */
  ADDITIONAL_ARTIFACTS = "ADDITIONAL_ARTIFACTS",
  /** If the file is a compressed archive containing a collection of various artifacts or resources. */
  ZIPPED_ARTIFACTS = "ZIPPED_ARTIFACTS",
  /** If the file is a JSON config file to define the requests for a URL test. */
  URL_TEST_CONFIG = "URL_TEST_CONFIG",
  /** If the file is a test script. */
  TEST_SCRIPT = "TEST_SCRIPT",
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

/** File status. */
export enum KnownFileStatus {
  /** File is not validated. */
  NOT_VALIDATED = "NOT_VALIDATED",
  /** File is validated. */
  VALIDATION_SUCCESS = "VALIDATION_SUCCESS",
  /** File validation is failed. */
  VALIDATION_FAILURE = "VALIDATION_FAILURE",
  /** File validation is in progress. */
  VALIDATION_INITIATED = "VALIDATION_INITIATED",
  /** Validation is not required. */
  VALIDATION_NOT_REQUIRED = "VALIDATION_NOT_REQUIRED",
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

export function testFileInfoArrayDeserializer(
  result: Array<TestFileInfo>,
): any[] {
  return result.map((item) => {
    return testFileInfoDeserializer(item);
  });
}

/** Test kind */
export enum KnownTestKind {
  /** URL Test */
  URL = "URL",
  /** JMX Test */
  JMX = "JMX",
  /** Locust Test */
  Locust = "Locust",
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

export function testAppComponentsSerializer(item: TestAppComponents): any {
  return { components: appComponentRecordSerializer(item["components"]) };
}

export function testAppComponentsDeserializer(item: any): TestAppComponents {
  return {
    components: appComponentRecordDeserializer(item["components"]),
    testId: item["testId"],
    createdDateTime: !item["createdDateTime"]
      ? item["createdDateTime"]
      : new Date(item["createdDateTime"]),
    createdBy: item["createdBy"],
    lastModifiedDateTime: !item["lastModifiedDateTime"]
      ? item["lastModifiedDateTime"]
      : new Date(item["lastModifiedDateTime"]),
    lastModifiedBy: item["lastModifiedBy"],
  };
}

export function appComponentRecordSerializer(
  item: Record<string, AppComponent>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : appComponentSerializer(item[key]);
  });
  return result;
}

export function appComponentRecordDeserializer(
  item: Record<string, any>,
): Record<string, AppComponent> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : appComponentDeserializer(item[key]);
  });
  return result;
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

export function appComponentSerializer(item: AppComponent): any {
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
): any {
  return { metrics: resourceMetricRecordSerializer(item["metrics"]) };
}

export function testServerMetricConfigDeserializer(
  item: any,
): TestServerMetricConfig {
  return {
    testId: item["testId"],
    metrics: resourceMetricRecordDeserializer(item["metrics"]),
    createdDateTime: !item["createdDateTime"]
      ? item["createdDateTime"]
      : new Date(item["createdDateTime"]),
    createdBy: item["createdBy"],
    lastModifiedDateTime: !item["lastModifiedDateTime"]
      ? item["lastModifiedDateTime"]
      : new Date(item["lastModifiedDateTime"]),
    lastModifiedBy: item["lastModifiedBy"],
  };
}

export function resourceMetricRecordSerializer(
  item: Record<string, ResourceMetric>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : resourceMetricSerializer(item[key]);
  });
  return result;
}

export function resourceMetricRecordDeserializer(
  item: Record<string, any>,
): Record<string, ResourceMetric> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : resourceMetricDeserializer(item[key]);
  });
  return result;
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

export function resourceMetricSerializer(item: ResourceMetric): any {
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

/** Paged collection of TestFileInfo items */
export interface _PagedTestFileInfo {
  /** The TestFileInfo items on this page */
  value: TestFileInfo[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestFileInfoDeserializer(item: any): _PagedTestFileInfo {
  return {
    value: testFileInfoArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Paged collection of Test items */
export interface _PagedTest {
  /** The Test items on this page */
  value: Test[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestDeserializer(item: any): _PagedTest {
  return {
    value: testArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function testArraySerializer(result: Array<Test>): any[] {
  return result.map((item) => {
    return testSerializer(item);
  });
}

export function testArrayDeserializer(result: Array<Test>): any[] {
  return result.map((item) => {
    return testDeserializer(item);
  });
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

export function testRunSerializer(item: TestRun): any {
  return {
    passFailCriteria: !item["passFailCriteria"]
      ? item["passFailCriteria"]
      : passFailCriteriaSerializer(item["passFailCriteria"]),
    autoStopCriteria: !item["autoStopCriteria"]
      ? item["autoStopCriteria"]
      : autoStopCriteriaSerializer(item["autoStopCriteria"]),
    secrets: !item["secrets"]
      ? item["secrets"]
      : secretRecordSerializer(item["secrets"]),
    certificate: !item["certificate"]
      ? item["certificate"]
      : certificateMetadataSerializer(item["certificate"]),
    environmentVariables: item["environmentVariables"],
    loadTestConfiguration: !item["loadTestConfiguration"]
      ? item["loadTestConfiguration"]
      : loadTestConfigurationSerializer(item["loadTestConfiguration"]),
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
    passFailCriteria: !item["passFailCriteria"]
      ? item["passFailCriteria"]
      : passFailCriteriaDeserializer(item["passFailCriteria"]),
    autoStopCriteria: !item["autoStopCriteria"]
      ? item["autoStopCriteria"]
      : autoStopCriteriaDeserializer(item["autoStopCriteria"]),
    secrets: !item["secrets"]
      ? item["secrets"]
      : secretRecordDeserializer(item["secrets"]),
    certificate: !item["certificate"]
      ? item["certificate"]
      : certificateMetadataDeserializer(item["certificate"]),
    environmentVariables: item["environmentVariables"],
    errorDetails: !item["errorDetails"]
      ? item["errorDetails"]
      : errorDetailsArrayDeserializer(item["errorDetails"]),
    testRunStatistics: !item["testRunStatistics"]
      ? item["testRunStatistics"]
      : testRunStatisticsRecordDeserializer(item["testRunStatistics"]),
    regionalStatistics: !item["regionalStatistics"]
      ? item["regionalStatistics"]
      : testRunStatisticsRecordDeserializer(item["regionalStatistics"]),
    loadTestConfiguration: !item["loadTestConfiguration"]
      ? item["loadTestConfiguration"]
      : loadTestConfigurationDeserializer(item["loadTestConfiguration"]),
    testArtifacts: !item["testArtifacts"]
      ? item["testArtifacts"]
      : testRunArtifactsDeserializer(item["testArtifacts"]),
    testResult: item["testResult"],
    virtualUsers: item["virtualUsers"],
    displayName: item["displayName"],
    testId: item["testId"],
    description: item["description"],
    status: item["status"],
    startDateTime: !item["startDateTime"]
      ? item["startDateTime"]
      : new Date(item["startDateTime"]),
    endDateTime: !item["endDateTime"]
      ? item["endDateTime"]
      : new Date(item["endDateTime"]),
    executedDateTime: !item["executedDateTime"]
      ? item["executedDateTime"]
      : new Date(item["executedDateTime"]),
    portalUrl: item["portalUrl"],
    duration: item["duration"],
    subnetId: item["subnetId"],
    kind: item["kind"],
    requestDataLevel: item["requestDataLevel"],
    debugLogsEnabled: item["debugLogsEnabled"],
    publicIPDisabled: item["publicIPDisabled"],
    createdDateTime: !item["createdDateTime"]
      ? item["createdDateTime"]
      : new Date(item["createdDateTime"]),
    createdBy: item["createdBy"],
    lastModifiedDateTime: !item["lastModifiedDateTime"]
      ? item["lastModifiedDateTime"]
      : new Date(item["lastModifiedDateTime"]),
    lastModifiedBy: item["lastModifiedBy"],
  };
}

export function errorDetailsArrayDeserializer(
  result: Array<ErrorDetails>,
): any[] {
  return result.map((item) => {
    return errorDetailsDeserializer(item);
  });
}

/** Error details if there is any failure in load test run */
export interface ErrorDetails {
  /** Error details in case test run was not successfully run. */
  readonly message?: string;
}

export function errorDetailsDeserializer(item: any): ErrorDetails {
  return {
    message: item["message"],
  };
}

export function testRunStatisticsRecordDeserializer(
  item: Record<string, any>,
): Record<string, TestRunStatistics> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : testRunStatisticsDeserializer(item[key]);
  });
  return result;
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

export function testRunStatisticsDeserializer(item: any): TestRunStatistics {
  return {
    transaction: item["transaction"],
    sampleCount: item["sampleCount"],
    errorCount: item["errorCount"],
    errorPct: item["errorPct"],
    meanResTime: item["meanResTime"],
    medianResTime: item["medianResTime"],
    maxResTime: item["maxResTime"],
    minResTime: item["minResTime"],
    pct1ResTime: item["pct1ResTime"],
    pct2ResTime: item["pct2ResTime"],
    pct3ResTime: item["pct3ResTime"],
    pct75ResTime: item["pct75ResTime"],
    pct96ResTime: item["pct96ResTime"],
    pct97ResTime: item["pct97ResTime"],
    pct98ResTime: item["pct98ResTime"],
    pct999ResTime: item["pct999ResTime"],
    pct9999ResTime: item["pct9999ResTime"],
    throughput: item["throughput"],
    receivedKBytesPerSec: item["receivedKBytesPerSec"],
    sentKBytesPerSec: item["sentKBytesPerSec"],
  };
}

/** Collection of test run artifacts */
export interface TestRunArtifacts {
  /** The input artifacts for the test run. */
  readonly inputArtifacts?: TestRunInputArtifacts;
  /** The output artifacts for the test run. */
  outputArtifacts?: TestRunOutputArtifacts;
}

export function testRunArtifactsDeserializer(item: any): TestRunArtifacts {
  return {
    inputArtifacts: !item["inputArtifacts"]
      ? item["inputArtifacts"]
      : testRunInputArtifactsDeserializer(item["inputArtifacts"]),
    outputArtifacts: !item["outputArtifacts"]
      ? item["outputArtifacts"]
      : testRunOutputArtifactsDeserializer(item["outputArtifacts"]),
  };
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

export function testRunInputArtifactsDeserializer(
  item: any,
): TestRunInputArtifacts {
  return {
    configFileInfo: !item["configFileInfo"]
      ? item["configFileInfo"]
      : testRunFileInfoDeserializer(item["configFileInfo"]),
    testScriptFileInfo: !item["testScriptFileInfo"]
      ? item["testScriptFileInfo"]
      : testRunFileInfoDeserializer(item["testScriptFileInfo"]),
    userPropFileInfo: !item["userPropFileInfo"]
      ? item["userPropFileInfo"]
      : testRunFileInfoDeserializer(item["userPropFileInfo"]),
    inputArtifactsZipFileInfo: !item["inputArtifactsZipFileInfo"]
      ? item["inputArtifactsZipFileInfo"]
      : testRunFileInfoDeserializer(item["inputArtifactsZipFileInfo"]),
    urlTestConfigFileInfo: !item["urlTestConfigFileInfo"]
      ? item["urlTestConfigFileInfo"]
      : testRunFileInfoDeserializer(item["urlTestConfigFileInfo"]),
    additionalFileInfo: !item["additionalFileInfo"]
      ? item["additionalFileInfo"]
      : testRunFileInfoArrayDeserializer(item["additionalFileInfo"]),
  };
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

export function testRunFileInfoDeserializer(item: any): TestRunFileInfo {
  return {
    fileName: item["fileName"],
    url: item["url"],
    fileType: item["fileType"],
    expireDateTime: !item["expireDateTime"]
      ? item["expireDateTime"]
      : new Date(item["expireDateTime"]),
    validationStatus: item["validationStatus"],
    validationFailureDetails: item["validationFailureDetails"],
  };
}

export function testRunFileInfoArrayDeserializer(
  result: Array<TestRunFileInfo>,
): any[] {
  return result.map((item) => {
    return testRunFileInfoDeserializer(item);
  });
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

export function testRunOutputArtifactsDeserializer(
  item: any,
): TestRunOutputArtifacts {
  return {
    resultFileInfo: !item["resultFileInfo"]
      ? item["resultFileInfo"]
      : testRunFileInfoDeserializer(item["resultFileInfo"]),
    logsFileInfo: !item["logsFileInfo"]
      ? item["logsFileInfo"]
      : testRunFileInfoDeserializer(item["logsFileInfo"]),
    artifactsContainerInfo: !item["artifactsContainerInfo"]
      ? item["artifactsContainerInfo"]
      : artifactsContainerInfoDeserializer(item["artifactsContainerInfo"]),
    reportFileInfo: !item["reportFileInfo"]
      ? item["reportFileInfo"]
      : testRunFileInfoDeserializer(item["reportFileInfo"]),
  };
}

/** Artifacts container info. */
export interface ArtifactsContainerInfo {
  /** This is a SAS URI to an Azure Storage Container that contains the test run artifacts. */
  url?: string;
  /** Expiry time of the container (RFC 3339 literal format) */
  expireDateTime?: Date;
}

export function artifactsContainerInfoDeserializer(
  item: any,
): ArtifactsContainerInfo {
  return {
    url: item["url"],
    expireDateTime: !item["expireDateTime"]
      ? item["expireDateTime"]
      : new Date(item["expireDateTime"]),
  };
}

/** Test result based on pass/fail criteria. */
export enum KnownPFTestResult {
  /** Pass/fail criteria has passed. */
  PASSED = "PASSED",
  /** Pass/fail criteria is not applicable. */
  NOT_APPLICABLE = "NOT_APPLICABLE",
  /** Pass/fail criteria has failed. */
  FAILED = "FAILED",
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

/** Test run status. */
export enum KnownStatus {
  /** Test run request is accepted. */
  ACCEPTED = "ACCEPTED",
  /** Test run is not yet started. */
  NOTSTARTED = "NOTSTARTED",
  /** Test run is provisioning. */
  PROVISIONING = "PROVISIONING",
  /** Test run is provisioned. */
  PROVISIONED = "PROVISIONED",
  /** Test run is getting configured. */
  CONFIGURING = "CONFIGURING",
  /** Test run configuration is done. */
  CONFIGURED = "CONFIGURED",
  /** Test run has started executing. */
  EXECUTING = "EXECUTING",
  /** Test run execution is completed. */
  EXECUTED = "EXECUTED",
  /** Test run is getting deprovisioned. */
  DEPROVISIONING = "DEPROVISIONING",
  /** Test run is deprovisioned. */
  DEPROVISIONED = "DEPROVISIONED",
  /** Test run is completed. */
  DONE = "DONE",
  /** Test run is being cancelled. */
  CANCELLING = "CANCELLING",
  /** Test run request is cancelled. */
  CANCELLED = "CANCELLED",
  /** Test run request is failed. */
  FAILED = "FAILED",
  /** Test run JMX file is validated. */
  VALIDATION_SUCCESS = "VALIDATION_SUCCESS",
  /** Test run JMX file validation is failed. */
  VALIDATION_FAILURE = "VALIDATION_FAILURE",
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

/** Request data collection level for test run */
export enum KnownRequestDataLevel {
  /** No request data will be collected */
  NONE = "NONE",
  /** Request data will be collected in case of failed requests */
  ERRORS = "ERRORS",
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
): any {
  return { components: appComponentRecordSerializer(item["components"]) };
}

export function testRunAppComponentsDeserializer(
  item: any,
): TestRunAppComponents {
  return {
    components: appComponentRecordDeserializer(item["components"]),
    testRunId: item["testRunId"],
    createdDateTime: !item["createdDateTime"]
      ? item["createdDateTime"]
      : new Date(item["createdDateTime"]),
    createdBy: item["createdBy"],
    lastModifiedDateTime: !item["lastModifiedDateTime"]
      ? item["lastModifiedDateTime"]
      : new Date(item["lastModifiedDateTime"]),
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
): any {
  return {
    metrics: !item["metrics"]
      ? item["metrics"]
      : resourceMetricRecordSerializer(item["metrics"]),
  };
}

export function testRunServerMetricConfigDeserializer(
  item: any,
): TestRunServerMetricConfig {
  return {
    testRunId: item["testRunId"],
    metrics: !item["metrics"]
      ? item["metrics"]
      : resourceMetricRecordDeserializer(item["metrics"]),
    createdDateTime: !item["createdDateTime"]
      ? item["createdDateTime"]
      : new Date(item["createdDateTime"]),
    createdBy: item["createdBy"],
    lastModifiedDateTime: !item["lastModifiedDateTime"]
      ? item["lastModifiedDateTime"]
      : new Date(item["lastModifiedDateTime"]),
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

export function dimensionValueListDeserializer(item: any): DimensionValueList {
  return {
    name: item["name"],
    value: !item["value"]
      ? item["value"]
      : item["value"].map((p: any) => {
          return p;
        }),
    nextLink: item["nextLink"],
  };
}

/** Represents collection of metric definitions. */
export interface MetricDefinitionCollection {
  /** the values for the metric definitions. */
  value: MetricDefinition[];
}

export function metricDefinitionCollectionDeserializer(
  item: any,
): MetricDefinitionCollection {
  return {
    value: metricDefinitionArrayDeserializer(item["value"]),
  };
}

export function metricDefinitionArrayDeserializer(
  result: Array<MetricDefinition>,
): any[] {
  return result.map((item) => {
    return metricDefinitionDeserializer(item);
  });
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

export function metricDefinitionDeserializer(item: any): MetricDefinition {
  return {
    dimensions: !item["dimensions"]
      ? item["dimensions"]
      : nameAndDescArrayDeserializer(item["dimensions"]),
    description: item["description"],
    name: item["name"],
    namespace: item["namespace"],
    primaryAggregationType: item["primaryAggregationType"],
    supportedAggregationTypes: !item["supportedAggregationTypes"]
      ? item["supportedAggregationTypes"]
      : item["supportedAggregationTypes"].map((p: any) => {
          return p;
        }),
    unit: item["unit"],
    metricAvailabilities: !item["metricAvailabilities"]
      ? item["metricAvailabilities"]
      : metricAvailabilityArrayDeserializer(item["metricAvailabilities"]),
  };
}

export function nameAndDescArrayDeserializer(
  result: Array<NameAndDesc>,
): any[] {
  return result.map((item) => {
    return nameAndDescDeserializer(item);
  });
}

/** The name and description */
export interface NameAndDesc {
  /** The description */
  description?: string;
  /** The name */
  name?: string;
}

export function nameAndDescDeserializer(item: any): NameAndDesc {
  return {
    description: item["description"],
    name: item["name"],
  };
}

/** Aggregation type. */
export enum KnownAggregationType {
  /** Average value. */
  Average = "Average",
  /** Total count. */
  Count = "Count",
  /** Aggregation will be average in this case. */
  None = "None",
  /** Total sum. */
  Total = "Total",
  /** 75th percentile. */
  Percentile75 = "Percentile75",
  /** 90th percentile. */
  Percentile90 = "Percentile90",
  /** 95th percentile. */
  Percentile95 = "Percentile95",
  /** 96th percentile. */
  Percentile96 = "Percentile96",
  /** 97th percentile. */
  Percentile97 = "Percentile97",
  /** 98th percentile. */
  Percentile98 = "Percentile98",
  /** 99th percentile. */
  Percentile99 = "Percentile99",
  /** 99.9th percentile. */
  Percentile999 = "Percentile999",
  /** 99.99th percentile. */
  Percentile9999 = "Percentile9999",
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

/** Metric unit. */
export enum KnownMetricUnit {
  /** No unit specified. */
  NotSpecified = "NotSpecified",
  /** Percentage. */
  Percent = "Percent",
  /** Value count. */
  Count = "Count",
  /** Seconds. */
  Seconds = "Seconds",
  /** Milliseconds */
  Milliseconds = "Milliseconds",
  /** Bytes */
  Bytes = "Bytes",
  /** Bytes per second */
  BytesPerSecond = "BytesPerSecond",
  /** Count per second */
  CountPerSecond = "CountPerSecond",
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

export function metricAvailabilityArrayDeserializer(
  result: Array<MetricAvailability>,
): any[] {
  return result.map((item) => {
    return metricAvailabilityDeserializer(item);
  });
}

/** Metric availability specifies the time grain (aggregation interval or frequency) */
export interface MetricAvailability {
  /**
   * The time grain specifies the aggregation interval for the metric. Expressed as
   * a duration 'PT1M', 'PT1H', etc.
   */
  timeGrain?: TimeGrain;
}

export function metricAvailabilityDeserializer(item: any): MetricAvailability {
  return {
    timeGrain: item["timeGrain"],
  };
}

/** Time Grain */
export enum KnownTimeGrain {
  /** 5 seconds, available only if test run duration is less than 10 minutes. */
  PT5S = "PT5S",
  /** 10 seconds, available only if test run duration is less than 10 minutes. */
  PT10S = "PT10S",
  /** 1 minute */
  PT1M = "PT1M",
  /** 5 minutes, available only if test run duration is greater than 1 minute. */
  PT5M = "PT5M",
  /** 1 hour, available only if test run duration is greater than 1 minute. */
  PT1H = "PT1H",
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

/** Represents collection of metric namespaces. */
export interface MetricNamespaceCollection {
  /** The values for the metric namespaces. */
  value: MetricNamespace[];
}

export function metricNamespaceCollectionDeserializer(
  item: any,
): MetricNamespaceCollection {
  return {
    value: metricNamespaceArrayDeserializer(item["value"]),
  };
}

export function metricNamespaceArrayDeserializer(
  result: Array<MetricNamespace>,
): any[] {
  return result.map((item) => {
    return metricNamespaceDeserializer(item);
  });
}

/** Metric namespace class specifies the metadata for a metric namespace. */
export interface MetricNamespace {
  /** The namespace description. */
  description?: string;
  /** The metric namespace name. */
  name?: string;
}

export function metricNamespaceDeserializer(item: any): MetricNamespace {
  return {
    description: item["description"],
    name: item["name"],
  };
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
): any {
  return {
    filters: !item["filters"]
      ? item["filters"]
      : dimensionFilterArraySerializer(item["filters"]),
  };
}

export function dimensionFilterArraySerializer(
  result: Array<DimensionFilter>,
): any[] {
  return result.map((item) => {
    return dimensionFilterSerializer(item);
  });
}

/** Dimension name and values to filter */
export interface DimensionFilter {
  /** The dimension name */
  name?: string;
  /** The dimension values. Maximum values can be 20. */
  values?: string[];
}

export function dimensionFilterSerializer(item: DimensionFilter): any {
  return {
    name: item["name"],
    values: !item["values"]
      ? item["values"]
      : item["values"].map((p: any) => {
          return p;
        }),
  };
}

/** The response to a metrics query. */
export interface _Metrics {
  /** The TimeSeriesElement items on this page */
  value: TimeSeriesElement[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _metricsDeserializer(item: any): _Metrics {
  return {
    value: timeSeriesElementArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function timeSeriesElementArrayDeserializer(
  result: Array<TimeSeriesElement>,
): any[] {
  return result.map((item) => {
    return timeSeriesElementDeserializer(item);
  });
}

/** The time series returned when a data query is performed. */
export interface TimeSeriesElement {
  /** An array of data points representing the metric values. */
  data?: MetricValue[];
  /** The dimension values */
  dimensionValues?: DimensionValue[];
}

export function timeSeriesElementDeserializer(item: any): TimeSeriesElement {
  return {
    data: !item["data"]
      ? item["data"]
      : metricValueArrayDeserializer(item["data"]),
    dimensionValues: !item["dimensionValues"]
      ? item["dimensionValues"]
      : dimensionValueArrayDeserializer(item["dimensionValues"]),
  };
}

export function metricValueArrayDeserializer(
  result: Array<MetricValue>,
): any[] {
  return result.map((item) => {
    return metricValueDeserializer(item);
  });
}

/** Represents a metric value. */
export interface MetricValue {
  /** The timestamp for the metric value in RFC 3339 format. */
  timestamp?: Date;
  /** The metric value. */
  value?: number;
}

export function metricValueDeserializer(item: any): MetricValue {
  return {
    timestamp: !item["timestamp"]
      ? item["timestamp"]
      : new Date(item["timestamp"]),
    value: item["value"],
  };
}

export function dimensionValueArrayDeserializer(
  result: Array<DimensionValue>,
): any[] {
  return result.map((item) => {
    return dimensionValueDeserializer(item);
  });
}

/** Represents a metric dimension value. */
export interface DimensionValue {
  /** The name of the dimension. */
  name?: string;
  /** The value of the dimension. */
  value?: string;
}

export function dimensionValueDeserializer(item: any): DimensionValue {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** Paged collection of TestRun items */
export interface _PagedTestRun {
  /** The TestRun items on this page */
  value: TestRun[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestRunDeserializer(item: any): _PagedTestRun {
  return {
    value: testRunArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function testRunArraySerializer(result: Array<TestRun>): any[] {
  return result.map((item) => {
    return testRunSerializer(item);
  });
}

export function testRunArrayDeserializer(result: Array<TestRun>): any[] {
  return result.map((item) => {
    return testRunDeserializer(item);
  });
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

export function testProfileSerializer(item: TestProfile): any {
  return {
    displayName: item["displayName"],
    description: item["description"],
    testId: item["testId"],
    targetResourceId: item["targetResourceId"],
    targetResourceConfigurations: !item["targetResourceConfigurations"]
      ? item["targetResourceConfigurations"]
      : targetResourceConfigurationsUnionSerializer(
          item["targetResourceConfigurations"],
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
    targetResourceConfigurations: !item["targetResourceConfigurations"]
      ? item["targetResourceConfigurations"]
      : targetResourceConfigurationsUnionDeserializer(
          item["targetResourceConfigurations"],
        ),
    createdDateTime: !item["createdDateTime"]
      ? item["createdDateTime"]
      : new Date(item["createdDateTime"]),
    createdBy: item["createdBy"],
    lastModifiedDateTime: !item["lastModifiedDateTime"]
      ? item["lastModifiedDateTime"]
      : new Date(item["lastModifiedDateTime"]),
    lastModifiedBy: item["lastModifiedBy"],
  };
}

/** Configurations of a target resource. This varies with the kind of resource. */
export interface TargetResourceConfigurations {
  /** Kind of the resource for which the configurations apply. */
  /** The discriminator possible values: FunctionsFlexConsumption */
  kind: ResourceKind;
}

export function targetResourceConfigurationsSerializer(
  item: TargetResourceConfigurations,
): any {
  return { kind: item["kind"] };
}

export function targetResourceConfigurationsDeserializer(
  item: any,
): TargetResourceConfigurations {
  return {
    kind: item["kind"],
  };
}

/** Alias for TargetResourceConfigurationsUnion */
export type TargetResourceConfigurationsUnion =
  | FunctionFlexConsumptionTargetResourceConfigurations
  | TargetResourceConfigurations;

export function targetResourceConfigurationsUnionSerializer(
  item: TargetResourceConfigurationsUnion,
): any {
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
): TargetResourceConfigurationsUnion {
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
  FunctionsFlexConsumption = "FunctionsFlexConsumption",
}

/**
 * Kind of the resource on which test profile is created. \
 * {@link KnownResourceKind} can be used interchangeably with ResourceKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FunctionsFlexConsumption**: Resource is a Azure FunctionApp on Flex Consumption Plan.
 */
export type ResourceKind = string;

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
): any {
  return {
    kind: item["kind"],
    configurations: !item["configurations"]
      ? item["configurations"]
      : functionFlexConsumptionResourceConfigurationRecordSerializer(
          item["configurations"],
        ),
  };
}

export function functionFlexConsumptionTargetResourceConfigurationsDeserializer(
  item: any,
): FunctionFlexConsumptionTargetResourceConfigurations {
  return {
    kind: item["kind"],
    configurations: !item["configurations"]
      ? item["configurations"]
      : functionFlexConsumptionResourceConfigurationRecordDeserializer(
          item["configurations"],
        ),
  };
}

export function functionFlexConsumptionResourceConfigurationRecordSerializer(
  item: Record<string, FunctionFlexConsumptionResourceConfiguration>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : functionFlexConsumptionResourceConfigurationSerializer(item[key]);
  });
  return result;
}

export function functionFlexConsumptionResourceConfigurationRecordDeserializer(
  item: Record<string, any>,
): Record<string, FunctionFlexConsumptionResourceConfiguration> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : functionFlexConsumptionResourceConfigurationDeserializer(item[key]);
  });
  return result;
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
): any {
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

/** Paged collection of TestProfile items */
export interface _PagedTestProfile {
  /** The TestProfile items on this page */
  value: TestProfile[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestProfileDeserializer(item: any): _PagedTestProfile {
  return {
    value: testProfileArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function testProfileArraySerializer(result: Array<TestProfile>): any[] {
  return result.map((item) => {
    return testProfileSerializer(item);
  });
}

export function testProfileArrayDeserializer(
  result: Array<TestProfile>,
): any[] {
  return result.map((item) => {
    return testProfileDeserializer(item);
  });
}

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

export function testProfileRunSerializer(item: TestProfileRun): any {
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
    targetResourceConfigurations: !item["targetResourceConfigurations"]
      ? item["targetResourceConfigurations"]
      : targetResourceConfigurationsUnionDeserializer(
          item["targetResourceConfigurations"],
        ),
    status: item["status"],
    errorDetails: !item["errorDetails"]
      ? item["errorDetails"]
      : errorDetailsArrayDeserializer(item["errorDetails"]),
    startDateTime: !item["startDateTime"]
      ? item["startDateTime"]
      : new Date(item["startDateTime"]),
    endDateTime: !item["endDateTime"]
      ? item["endDateTime"]
      : new Date(item["endDateTime"]),
    durationInSeconds: item["durationInSeconds"],
    testRunDetails: !item["testRunDetails"]
      ? item["testRunDetails"]
      : testRunDetailRecordDeserializer(item["testRunDetails"]),
    recommendations: !item["recommendations"]
      ? item["recommendations"]
      : testProfileRunRecommendationArrayDeserializer(item["recommendations"]),
    createdDateTime: !item["createdDateTime"]
      ? item["createdDateTime"]
      : new Date(item["createdDateTime"]),
    createdBy: item["createdBy"],
    lastModifiedDateTime: !item["lastModifiedDateTime"]
      ? item["lastModifiedDateTime"]
      : new Date(item["lastModifiedDateTime"]),
    lastModifiedBy: item["lastModifiedBy"],
  };
}

/** Test profile run status. */
export enum KnownTestProfileRunStatus {
  /** Test profile run request is accepted. */
  ACCEPTED = "ACCEPTED",
  /** Test profile run is not yet started. */
  NOTSTARTED = "NOTSTARTED",
  /** Test profile run has started executing. */
  EXECUTING = "EXECUTING",
  /** Test profile run has completed successfully. */
  DONE = "DONE",
  /** Test profile run is being cancelled. */
  CANCELLING = "CANCELLING",
  /** Test profile run is cancelled. */
  CANCELLED = "CANCELLED",
  /** Test profile run has failed. */
  FAILED = "FAILED",
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

export function testRunDetailRecordDeserializer(
  item: Record<string, any>,
): Record<string, TestRunDetail> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : testRunDetailDeserializer(item[key]);
  });
  return result;
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

export function testRunDetailDeserializer(item: any): TestRunDetail {
  return {
    status: item["status"],
    configurationId: item["configurationId"],
    properties: item["properties"],
  };
}

export function testProfileRunRecommendationArrayDeserializer(
  result: Array<TestProfileRunRecommendation>,
): any[] {
  return result.map((item) => {
    return testProfileRunRecommendationDeserializer(item);
  });
}

/** A recommendation object that provides a list of configuration that optimizes its category. */
export interface TestProfileRunRecommendation {
  /** Category of the recommendation. */
  category: RecommendationCategory;
  /** List of configurations IDs for which the recommendation is applicable. These are a subset of the provided target resource configurations. */
  configurations?: string[];
}

export function testProfileRunRecommendationDeserializer(
  item: any,
): TestProfileRunRecommendation {
  return {
    category: item["category"],
    configurations: !item["configurations"]
      ? item["configurations"]
      : item["configurations"].map((p: any) => {
          return p;
        }),
  };
}

/** Category of Recommendation. */
export enum KnownRecommendationCategory {
  /** The recommendation for this category optimizes the throughput/RPS (Requests per Second) of the app. */
  ThroughputOptimized = "ThroughputOptimized",
  /** The recommendation for this category optimizes the cost of the app. */
  CostOptimized = "CostOptimized",
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

/** Paged collection of TestProfileRun items */
export interface _PagedTestProfileRun {
  /** The TestProfileRun items on this page */
  value: TestProfileRun[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestProfileRunDeserializer(
  item: any,
): _PagedTestProfileRun {
  return {
    value: testProfileRunArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function testProfileRunArraySerializer(
  result: Array<TestProfileRun>,
): any[] {
  return result.map((item) => {
    return testProfileRunSerializer(item);
  });
}

export function testProfileRunArrayDeserializer(
  result: Array<TestProfileRun>,
): any[] {
  return result.map((item) => {
    return testProfileRunDeserializer(item);
  });
}

/** Azure Load Testing API versions. */
export enum KnownAPIVersions {
  /** The 2022-11-01 version of the Azure Load Testing API. */
  v2022_11_01 = "2022-11-01",
  /** The 2023-04-01-preview version of the Azure Load Testing API. */
  v2023_04_01_preview = "2023-04-01-preview",
  /** The 2024-03-01-preview version of the Azure Load Testing API. */
  v2024_03_01_preview = "2024-03-01-preview",
  /** The 2024-05-01-preview version of the Azure Load Testing API. */
  v2024_05_01_preview = "2024-05-01-preview",
}
