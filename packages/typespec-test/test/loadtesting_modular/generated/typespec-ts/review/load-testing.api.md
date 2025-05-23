## API Report File for "@azure/load-testing"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';

// @public
export type AggregationType = string;

// @public
export interface AppComponent {
    displayName?: string;
    kind?: string;
    readonly resourceGroup?: string;
    readonly resourceId: string;
    resourceName: string;
    resourceType: string;
    readonly subscriptionId?: string;
}

// @public
export interface ArtifactsContainerInfo {
    expireDateTime?: Date;
    url?: string;
}

// @public
export interface AutoStopCriteria {
    autoStopDisabled?: boolean;
    errorRate?: number;
    errorRateTimeWindowInSeconds?: number;
}

// @public
export interface CertificateMetadata {
    name?: string;
    type?: CertificateType;
    value?: string;
}

// @public
export type CertificateType = string;

// @public
export type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

// @public
export interface CreateOrUpdateAppComponentsOptionalParams extends OperationOptions {
}

// @public
export interface CreateOrUpdateServerMetricsConfigOptionalParams extends OperationOptions {
}

// @public
export interface CreateOrUpdateTestOptionalParams extends OperationOptions {
}

// @public
export interface CreateOrUpdateTestProfileOptionalParams extends OperationOptions {
}

// @public
export interface CreateOrUpdateTestProfileRunOptionalParams extends OperationOptions {
}

// @public
export interface CreateOrUpdateTestRunOptionalParams extends OperationOptions {
    oldTestRunId?: string;
}

// @public
export interface DeleteTestFileOptionalParams extends OperationOptions {
}

// @public
export interface DeleteTestOptionalParams extends OperationOptions {
}

// @public
export interface DeleteTestProfileOptionalParams extends OperationOptions {
}

// @public
export interface DeleteTestProfileRunOptionalParams extends OperationOptions {
}

// @public
export interface DeleteTestRunOptionalParams extends OperationOptions {
}

// @public
export interface DimensionFilter {
    name?: string;
    values?: string[];
}

// @public
export interface DimensionValue {
    name?: string;
    value?: string;
}

// @public
export interface DimensionValueList {
    readonly name?: string;
    nextLink?: string;
    value?: string[];
}

// @public
export interface ErrorDetails {
    readonly message?: string;
}

// @public
export type FileStatus = string;

// @public
export type FileType = string;

// @public
export interface FunctionFlexConsumptionResourceConfiguration {
    httpConcurrency: number;
    instanceMemoryMB: number;
}

// @public
export interface FunctionFlexConsumptionTargetResourceConfigurations extends TargetResourceConfigurations {
    configurations?: Record<string, FunctionFlexConsumptionResourceConfiguration>;
    kind: "FunctionsFlexConsumption";
}

// @public
export interface GetAppComponentsOptionalParams extends OperationOptions {
}

// @public
export interface GetServerMetricsConfigOptionalParams extends OperationOptions {
}

// @public
export interface GetTestFileOptionalParams extends OperationOptions {
}

// @public
export interface GetTestOptionalParams extends OperationOptions {
}

// @public
export interface GetTestProfileOptionalParams extends OperationOptions {
}

// @public
export interface GetTestProfileRunOptionalParams extends OperationOptions {
}

// @public
export interface GetTestRunFileOptionalParams extends OperationOptions {
}

// @public
export interface GetTestRunOptionalParams extends OperationOptions {
}

// @public
export enum KnownAggregationType {
    Average = "Average",
    Count = "Count",
    None = "None",
    Percentile75 = "Percentile75",
    Percentile90 = "Percentile90",
    Percentile95 = "Percentile95",
    Percentile96 = "Percentile96",
    Percentile97 = "Percentile97",
    Percentile98 = "Percentile98",
    Percentile99 = "Percentile99",
    Percentile999 = "Percentile999",
    Percentile9999 = "Percentile9999",
    Total = "Total"
}

// @public
export enum KnownAPIVersions {
    V20221101 = "2022-11-01",
    V20230401Preview = "2023-04-01-preview",
    V20240301Preview = "2024-03-01-preview",
    V20240501Preview = "2024-05-01-preview"
}

// @public
export enum KnownCertificateType {
    AKVCertURI = "AKV_CERT_URI"
}

// @public
export enum KnownFileStatus {
    NOTValidated = "NOT_VALIDATED",
    ValidationFailure = "VALIDATION_FAILURE",
    ValidationInitiated = "VALIDATION_INITIATED",
    ValidationNOTRequired = "VALIDATION_NOT_REQUIRED",
    ValidationSuccess = "VALIDATION_SUCCESS"
}

// @public
export enum KnownFileType {
    AdditionalArtifacts = "ADDITIONAL_ARTIFACTS",
    JMXFile = "JMX_FILE",
    TestScript = "TEST_SCRIPT",
    URLTestConfig = "URL_TEST_CONFIG",
    UserProperties = "USER_PROPERTIES",
    ZippedArtifacts = "ZIPPED_ARTIFACTS"
}

// @public
export enum KnownMetricUnit {
    Bytes = "Bytes",
    BytesPerSecond = "BytesPerSecond",
    Count = "Count",
    CountPerSecond = "CountPerSecond",
    Milliseconds = "Milliseconds",
    NotSpecified = "NotSpecified",
    Percent = "Percent",
    Seconds = "Seconds"
}

// @public
export enum KnownPFAction {
    Continue = "continue",
    Stop = "stop"
}

// @public
export enum KnownPFAgFunc {
    Avg = "avg",
    Count = "count",
    Max = "max",
    Min = "min",
    P50 = "p50",
    P75 = "p75",
    P90 = "p90",
    P95 = "p95",
    P96 = "p96",
    P97 = "p97",
    P98 = "p98",
    P99 = "p99",
    P999 = "p99.9",
    P9999 = "p99.99",
    Percentage = "percentage"
}

// @public
export enum KnownPFMetrics {
    Error = "error",
    Latency = "latency",
    Requests = "requests",
    RequestsPerSec = "requests_per_sec",
    ResponseTimeMs = "response_time_ms"
}

// @public
export enum KnownPFResult {
    Failed = "failed",
    Passed = "passed",
    Undetermined = "undetermined"
}

// @public
export enum KnownPFTestResult {
    Failed = "FAILED",
    NOTApplicable = "NOT_APPLICABLE",
    Passed = "PASSED"
}

// @public
export enum KnownRecommendationCategory {
    CostOptimized = "CostOptimized",
    ThroughputOptimized = "ThroughputOptimized"
}

// @public
export enum KnownRequestDataLevel {
    Errors = "ERRORS",
    None = "NONE"
}

// @public
export enum KnownResourceKind {
    FunctionsFlexConsumption = "FunctionsFlexConsumption"
}

// @public
export enum KnownSecretType {
    AKVSecretURI = "AKV_SECRET_URI",
    SecretValue = "SECRET_VALUE"
}

// @public
export enum KnownStatus {
    Accepted = "ACCEPTED",
    Cancelled = "CANCELLED",
    Cancelling = "CANCELLING",
    Configured = "CONFIGURED",
    Configuring = "CONFIGURING",
    Deprovisioned = "DEPROVISIONED",
    Deprovisioning = "DEPROVISIONING",
    Done = "DONE",
    Executed = "EXECUTED",
    Executing = "EXECUTING",
    Failed = "FAILED",
    Notstarted = "NOTSTARTED",
    Provisioned = "PROVISIONED",
    Provisioning = "PROVISIONING",
    ValidationFailure = "VALIDATION_FAILURE",
    ValidationSuccess = "VALIDATION_SUCCESS"
}

// @public
export enum KnownTestKind {
    JMX = "JMX",
    Locust = "Locust",
    URL = "URL"
}

// @public
export enum KnownTestProfileRunStatus {
    Accepted = "ACCEPTED",
    Cancelled = "CANCELLED",
    Cancelling = "CANCELLING",
    Done = "DONE",
    Executing = "EXECUTING",
    Failed = "FAILED",
    Notstarted = "NOTSTARTED"
}

// @public
export enum KnownTimeGrain {
    PT10S = "PT10S",
    PT1H = "PT1H",
    PT1M = "PT1M",
    PT5M = "PT5M",
    PT5S = "PT5S"
}

// @public
export interface ListMetricDefinitionsOptionalParams extends OperationOptions {
}

// @public
export interface ListMetricDimensionValuesOptionalParams extends OperationOptions {
    interval?: TimeGrain;
}

// @public
export interface ListMetricNamespacesOptionalParams extends OperationOptions {
}

// @public
export interface ListMetricsOptionalParams extends OperationOptions {
    aggregation?: string;
    body?: MetricRequestPayload;
    interval?: TimeGrain;
}

// @public
export interface ListTestFilesOptionalParams extends OperationOptions {
}

// @public
export interface ListTestProfileRunsOptionalParams extends OperationOptions {
    createdDateEndTime?: Date;
    createdDateStartTime?: Date;
    maxEndDateTime?: Date;
    maxpagesize?: number;
    maxStartDateTime?: Date;
    minEndDateTime?: Date;
    minStartDateTime?: Date;
    statuses?: string;
    testProfileIds?: string;
    testProfileRunIds?: string;
}

// @public
export interface ListTestProfilesOptionalParams extends OperationOptions {
    lastModifiedEndTime?: Date;
    lastModifiedStartTime?: Date;
    maxpagesize?: number;
    testIds?: string;
    testProfileIds?: string;
}

// @public
export interface ListTestRunsOptionalParams extends OperationOptions {
    executionFrom?: Date;
    executionTo?: Date;
    maxpagesize?: number;
    orderby?: string;
    search?: string;
    status?: string;
    testId?: string;
}

// @public
export interface ListTestsOptionalParams extends OperationOptions {
    lastModifiedEndTime?: Date;
    lastModifiedStartTime?: Date;
    maxpagesize?: number;
    orderby?: string;
    search?: string;
}

// @public (undocumented)
export class LoadTestAdministrationClient {
    constructor(endpointParam: string, credential: TokenCredential, options?: LoadTestAdministrationClientOptionalParams);
    createOrUpdateAppComponents(testId: string, body: TestAppComponents, options?: CreateOrUpdateAppComponentsOptionalParams): Promise<TestAppComponents>;
    createOrUpdateServerMetricsConfig(testId: string, body: TestServerMetricConfig, options?: CreateOrUpdateServerMetricsConfigOptionalParams): Promise<TestServerMetricConfig>;
    createOrUpdateTest(testId: string, body: Test, options?: CreateOrUpdateTestOptionalParams): Promise<Test>;
    deleteTest(testId: string, options?: DeleteTestOptionalParams): Promise<void>;
    deleteTestFile(testId: string, fileName: string, options?: DeleteTestFileOptionalParams): Promise<void>;
    getAppComponents(testId: string, options?: GetAppComponentsOptionalParams): Promise<TestAppComponents>;
    getServerMetricsConfig(testId: string, options?: GetServerMetricsConfigOptionalParams): Promise<TestServerMetricConfig>;
    getTest(testId: string, options?: GetTestOptionalParams): Promise<Test>;
    getTestFile(testId: string, fileName: string, options?: GetTestFileOptionalParams): Promise<TestFileInfo>;
    listTestFiles(testId: string, options?: ListTestFilesOptionalParams): PagedAsyncIterableIterator<TestFileInfo>;
    listTests(options?: ListTestsOptionalParams): PagedAsyncIterableIterator<Test>;
    readonly pipeline: Pipeline;
    uploadTestFile(testId: string, fileName: string, body: Uint8Array, options?: UploadTestFileOptionalParams): Promise<TestFileInfo>;
}

// @public
export interface LoadTestAdministrationClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

// @public
export interface LoadTestConfiguration {
    engineInstances?: number;
    optionalLoadTestConfig?: OptionalLoadTestConfig;
    quickStartTest?: boolean;
    regionalLoadTestConfig?: RegionalConfiguration[];
    splitAllCSVs?: boolean;
}

// @public (undocumented)
export class LoadTestRunClient {
    constructor(endpointParam: string, credential: TokenCredential, options?: LoadTestRunClientOptionalParams);
    createOrUpdateAppComponents(testRunId: string, body: TestRunAppComponents, options?: LoadTestRunClientCreateOrUpdateAppComponentsOptionalParams): Promise<TestRunAppComponents>;
    createOrUpdateServerMetricsConfig(testRunId: string, body: TestRunServerMetricConfig, options?: LoadTestRunClientCreateOrUpdateServerMetricsConfigOptionalParams): Promise<TestRunServerMetricConfig>;
    createOrUpdateTestRun(testRunId: string, body: TestRun, options?: CreateOrUpdateTestRunOptionalParams): Promise<TestRun>;
    deleteTestRun(testRunId: string, options?: DeleteTestRunOptionalParams): Promise<void>;
    getAppComponents(testRunId: string, options?: LoadTestRunClientGetAppComponentsOptionalParams): Promise<TestRunAppComponents>;
    getServerMetricsConfig(testRunId: string, options?: LoadTestRunClientGetServerMetricsConfigOptionalParams): Promise<TestRunServerMetricConfig>;
    getTestRun(testRunId: string, options?: GetTestRunOptionalParams): Promise<TestRun>;
    getTestRunFile(testRunId: string, fileName: string, options?: GetTestRunFileOptionalParams): Promise<TestRunFileInfo>;
    listMetricDefinitions(testRunId: string, metricNamespace: string, options?: ListMetricDefinitionsOptionalParams): Promise<MetricDefinitionCollection>;
    listMetricDimensionValues(testRunId: string, name: string, metricname: string, metricNamespace: string, timespan: string, options?: ListMetricDimensionValuesOptionalParams): Promise<DimensionValueList>;
    listMetricNamespaces(testRunId: string, options?: ListMetricNamespacesOptionalParams): Promise<MetricNamespaceCollection>;
    listMetrics(testRunId: string, metricname: string, metricNamespace: string, timespan: string, options?: ListMetricsOptionalParams): PagedAsyncIterableIterator<TimeSeriesElement>;
    listTestRuns(options?: ListTestRunsOptionalParams): PagedAsyncIterableIterator<TestRun>;
    readonly pipeline: Pipeline;
    stopTestRun(testRunId: string, options?: StopTestRunOptionalParams): Promise<TestRun>;
}

// @public
export interface LoadTestRunClientCreateOrUpdateAppComponentsOptionalParams extends OperationOptions {
}

// @public
export interface LoadTestRunClientCreateOrUpdateServerMetricsConfigOptionalParams extends OperationOptions {
}

// @public
export interface LoadTestRunClientGetAppComponentsOptionalParams extends OperationOptions {
}

// @public
export interface LoadTestRunClientGetServerMetricsConfigOptionalParams extends OperationOptions {
}

// @public
export interface LoadTestRunClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

// @public
export interface MetricAvailability {
    timeGrain?: TimeGrain;
}

// @public
export interface MetricDefinition {
    description?: string;
    dimensions?: NameAndDesc[];
    metricAvailabilities?: MetricAvailability[];
    name?: string;
    namespace?: string;
    primaryAggregationType?: AggregationType;
    supportedAggregationTypes?: string[];
    unit?: MetricUnit;
}

// @public
export interface MetricDefinitionCollection {
    value: MetricDefinition[];
}

// @public
export interface MetricNamespace {
    description?: string;
    name?: string;
}

// @public
export interface MetricNamespaceCollection {
    value: MetricNamespace[];
}

// @public
export interface MetricRequestPayload {
    filters?: DimensionFilter[];
}

// @public
export type MetricUnit = string;

// @public
export interface MetricValue {
    timestamp?: Date;
    value?: number;
}

// @public
export interface NameAndDesc {
    description?: string;
    name?: string;
}

// @public
export interface OptionalLoadTestConfig {
    duration?: number;
    endpointUrl?: string;
    maxResponseTimeInMs?: number;
    rampUpTime?: number;
    requestsPerSecond?: number;
    virtualUsers?: number;
}

// @public
export interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
    next(): Promise<IteratorResult<TElement>>;
}

// @public
export interface PageSettings {
    continuationToken?: string;
}

// @public
export interface PassFailCriteria {
    passFailMetrics?: Record<string, PassFailMetric>;
}

// @public
export interface PassFailMetric {
    action?: PFAction;
    readonly actualValue?: number;
    aggregate?: PFAgFunc;
    clientMetric?: PFMetrics;
    condition?: string;
    requestName?: string;
    readonly result?: PFResult;
    value?: number;
}

// @public
export type PFAction = string;

// @public
export type PFAgFunc = string;

// @public
export type PFMetrics = string;

// @public
export type PFResult = string;

// @public
export type PFTestResult = string;

// @public
export type RecommendationCategory = string;

// @public
export interface RegionalConfiguration {
    engineInstances: number;
    region: string;
}

// @public
export type RequestDataLevel = string;

// @public
export type ResourceKind = string;

// @public
export interface ResourceMetric {
    aggregation: string;
    displayDescription?: string;
    readonly id?: string;
    metricNamespace: string;
    name: string;
    resourceId: string;
    resourceType: string;
    unit?: string;
}

// @public
export interface Secret {
    type?: SecretType;
    value?: string;
}

// @public
export type SecretType = string;

// @public
export type Status = string;

// @public
export interface StopTestProfileRunOptionalParams extends OperationOptions {
}

// @public
export interface StopTestRunOptionalParams extends OperationOptions {
}

// @public
export interface TargetResourceConfigurations {
    kind: ResourceKind;
}

// @public
export type TargetResourceConfigurationsUnion = FunctionFlexConsumptionTargetResourceConfigurations | TargetResourceConfigurations;

// @public
export interface Test {
    autoStopCriteria?: AutoStopCriteria;
    baselineTestRunId?: string;
    certificate?: CertificateMetadata;
    readonly createdBy?: string;
    readonly createdDateTime?: Date;
    description?: string;
    displayName?: string;
    environmentVariables?: Record<string, string>;
    readonly inputArtifacts?: TestInputArtifacts;
    keyvaultReferenceIdentityId?: string;
    keyvaultReferenceIdentityType?: string;
    kind?: TestKind;
    readonly lastModifiedBy?: string;
    readonly lastModifiedDateTime?: Date;
    loadTestConfiguration?: LoadTestConfiguration;
    passFailCriteria?: PassFailCriteria;
    publicIPDisabled?: boolean;
    secrets?: Record<string, Secret>;
    subnetId?: string;
    readonly testId: string;
}

// @public
export interface TestAppComponents {
    components: Record<string, AppComponent>;
    readonly createdBy?: string;
    readonly createdDateTime?: Date;
    readonly lastModifiedBy?: string;
    readonly lastModifiedDateTime?: Date;
    readonly testId?: string;
}

// @public
export interface TestFileInfo {
    readonly expireDateTime?: Date;
    fileName: string;
    readonly fileType?: FileType;
    readonly url?: string;
    readonly validationFailureDetails?: string;
    readonly validationStatus?: FileStatus;
}

// @public
export interface TestInputArtifacts {
    readonly additionalFileInfo?: TestFileInfo[];
    configFileInfo?: TestFileInfo;
    inputArtifactsZipFileInfo?: TestFileInfo;
    testScriptFileInfo?: TestFileInfo;
    urlTestConfigFileInfo?: TestFileInfo;
    userPropFileInfo?: TestFileInfo;
}

// @public
export type TestKind = string;

// @public
export interface TestProfile {
    readonly createdBy?: string;
    readonly createdDateTime?: Date;
    description?: string;
    displayName?: string;
    readonly lastModifiedBy?: string;
    readonly lastModifiedDateTime?: Date;
    targetResourceConfigurations?: TargetResourceConfigurationsUnion;
    targetResourceId?: string;
    testId?: string;
    readonly testProfileId: string;
}

// @public (undocumented)
export class TestProfileAdministrationClient {
    constructor(endpointParam: string, credential: TokenCredential, options?: TestProfileAdministrationClientOptionalParams);
    createOrUpdateTestProfile(testProfileId: string, body: TestProfile, options?: CreateOrUpdateTestProfileOptionalParams): Promise<TestProfile>;
    deleteTestProfile(testProfileId: string, options?: DeleteTestProfileOptionalParams): Promise<void>;
    getTestProfile(testProfileId: string, options?: GetTestProfileOptionalParams): Promise<TestProfile>;
    listTestProfiles(options?: ListTestProfilesOptionalParams): PagedAsyncIterableIterator<TestProfile>;
    readonly pipeline: Pipeline;
}

// @public
export interface TestProfileAdministrationClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

// @public
export interface TestProfileRun {
    readonly createdBy?: string;
    readonly createdDateTime?: Date;
    description?: string;
    displayName?: string;
    readonly durationInSeconds?: number;
    readonly endDateTime?: Date;
    readonly errorDetails?: ErrorDetails[];
    readonly lastModifiedBy?: string;
    readonly lastModifiedDateTime?: Date;
    readonly recommendations?: TestProfileRunRecommendation[];
    readonly startDateTime?: Date;
    readonly status?: TestProfileRunStatus;
    readonly targetResourceConfigurations?: TargetResourceConfigurationsUnion;
    readonly targetResourceId?: string;
    testProfileId?: string;
    readonly testProfileRunId: string;
    readonly testRunDetails?: Record<string, TestRunDetail>;
}

// @public (undocumented)
export class TestProfileRunClient {
    constructor(endpointParam: string, credential: TokenCredential, options?: TestProfileRunClientOptionalParams);
    createOrUpdateTestProfileRun(testProfileRunId: string, body: TestProfileRun, options?: CreateOrUpdateTestProfileRunOptionalParams): Promise<TestProfileRun>;
    deleteTestProfileRun(testProfileRunId: string, options?: DeleteTestProfileRunOptionalParams): Promise<void>;
    getTestProfileRun(testProfileRunId: string, options?: GetTestProfileRunOptionalParams): Promise<TestProfileRun>;
    listTestProfileRuns(options?: ListTestProfileRunsOptionalParams): PagedAsyncIterableIterator<TestProfileRun>;
    readonly pipeline: Pipeline;
    stopTestProfileRun(testProfileRunId: string, options?: StopTestProfileRunOptionalParams): Promise<TestProfileRun>;
}

// @public
export interface TestProfileRunClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

// @public
export interface TestProfileRunRecommendation {
    category: RecommendationCategory;
    configurations?: string[];
}

// @public
export type TestProfileRunStatus = string;

// @public
export interface TestRun {
    autoStopCriteria?: AutoStopCriteria;
    certificate?: CertificateMetadata;
    readonly createdBy?: string;
    readonly createdDateTime?: Date;
    debugLogsEnabled?: boolean;
    description?: string;
    displayName?: string;
    readonly duration?: number;
    readonly endDateTime?: Date;
    environmentVariables?: Record<string, string>;
    readonly errorDetails?: ErrorDetails[];
    readonly executedDateTime?: Date;
    readonly kind?: TestKind;
    readonly lastModifiedBy?: string;
    readonly lastModifiedDateTime?: Date;
    loadTestConfiguration?: LoadTestConfiguration;
    passFailCriteria?: PassFailCriteria;
    readonly portalUrl?: string;
    readonly publicIPDisabled?: boolean;
    readonly regionalStatistics?: Record<string, TestRunStatistics>;
    requestDataLevel?: RequestDataLevel;
    secrets?: Record<string, Secret>;
    readonly startDateTime?: Date;
    readonly status?: Status;
    readonly subnetId?: string;
    readonly testArtifacts?: TestRunArtifacts;
    testId?: string;
    readonly testResult?: PFTestResult;
    readonly testRunId: string;
    readonly testRunStatistics?: Record<string, TestRunStatistics>;
    readonly virtualUsers?: number;
}

// @public
export interface TestRunAppComponents {
    components: Record<string, AppComponent>;
    readonly createdBy?: string;
    readonly createdDateTime?: Date;
    readonly lastModifiedBy?: string;
    readonly lastModifiedDateTime?: Date;
    readonly testRunId?: string;
}

// @public
export interface TestRunArtifacts {
    readonly inputArtifacts?: TestRunInputArtifacts;
    outputArtifacts?: TestRunOutputArtifacts;
}

// @public
export interface TestRunDetail {
    configurationId: string;
    properties: Record<string, string>;
    status: Status;
}

// @public
export interface TestRunFileInfo {
    readonly expireDateTime?: Date;
    fileName: string;
    readonly fileType?: FileType;
    readonly url?: string;
    readonly validationFailureDetails?: string;
    readonly validationStatus?: FileStatus;
}

// @public
export interface TestRunInputArtifacts {
    readonly additionalFileInfo?: TestRunFileInfo[];
    configFileInfo?: TestRunFileInfo;
    inputArtifactsZipFileInfo?: TestRunFileInfo;
    testScriptFileInfo?: TestRunFileInfo;
    urlTestConfigFileInfo?: TestRunFileInfo;
    userPropFileInfo?: TestRunFileInfo;
}

// @public
export interface TestRunOutputArtifacts {
    artifactsContainerInfo?: ArtifactsContainerInfo;
    logsFileInfo?: TestRunFileInfo;
    reportFileInfo?: TestRunFileInfo;
    resultFileInfo?: TestRunFileInfo;
}

// @public
export interface TestRunServerMetricConfig {
    readonly createdBy?: string;
    readonly createdDateTime?: Date;
    readonly lastModifiedBy?: string;
    readonly lastModifiedDateTime?: Date;
    metrics?: Record<string, ResourceMetric>;
    readonly testRunId?: string;
}

// @public
export interface TestRunStatistics {
    readonly errorCount?: number;
    readonly errorPct?: number;
    readonly maxResTime?: number;
    readonly meanResTime?: number;
    readonly medianResTime?: number;
    readonly minResTime?: number;
    readonly pct1ResTime?: number;
    readonly pct2ResTime?: number;
    readonly pct3ResTime?: number;
    readonly pct75ResTime?: number;
    readonly pct96ResTime?: number;
    readonly pct97ResTime?: number;
    readonly pct98ResTime?: number;
    readonly pct9999ResTime?: number;
    readonly pct999ResTime?: number;
    readonly receivedKBytesPerSec?: number;
    readonly sampleCount?: number;
    readonly sentKBytesPerSec?: number;
    readonly throughput?: number;
    readonly transaction?: string;
}

// @public
export interface TestServerMetricConfig {
    readonly createdBy?: string;
    readonly createdDateTime?: Date;
    readonly lastModifiedBy?: string;
    readonly lastModifiedDateTime?: Date;
    metrics: Record<string, ResourceMetric>;
    readonly testId?: string;
}

// @public
export type TimeGrain = string;

// @public
export interface TimeSeriesElement {
    data?: MetricValue[];
    dimensionValues?: DimensionValue[];
}

// @public
export interface UploadTestFileOptionalParams extends OperationOptions {
    fileType?: FileType;
}

// (No @packageDocumentation comment for this package)

```
