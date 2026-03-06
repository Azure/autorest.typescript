// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { errorDetailsArrayDeserializer, ErrorDetails, Status } from "../../models/models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
      : targetResourceConfigurationsUnionSerializer(item["targetResourceConfigurations"]),
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
      : targetResourceConfigurationsUnionDeserializer(item["targetResourceConfigurations"]),
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

export function targetResourceConfigurationsSerializer(item: TargetResourceConfigurations): any {
  return { kind: item["kind"] };
}

export function targetResourceConfigurationsDeserializer(item: any): TargetResourceConfigurations {
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
  switch (item["kind"]) {
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
export interface FunctionFlexConsumptionTargetResourceConfigurations extends TargetResourceConfigurations {
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
      : functionFlexConsumptionResourceConfigurationRecordSerializer(item["configurations"]),
  };
}

export function functionFlexConsumptionTargetResourceConfigurationsDeserializer(
  item: any,
): FunctionFlexConsumptionTargetResourceConfigurations {
  return {
    kind: item["kind"],
    configurations: !item["configurations"]
      ? item["configurations"]
      : functionFlexConsumptionResourceConfigurationRecordDeserializer(item["configurations"]),
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
  return { instanceMemoryMB: item["instanceMemoryMB"], httpConcurrency: item["httpConcurrency"] };
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

export function testProfileArrayDeserializer(result: Array<TestProfile>): any[] {
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
      : targetResourceConfigurationsUnionDeserializer(item["targetResourceConfigurations"]),
    status: item["status"],
    errorDetails: !item["errorDetails"]
      ? item["errorDetails"]
      : errorDetailsArrayDeserializer(item["errorDetails"]),
    startDateTime: !item["startDateTime"] ? item["startDateTime"] : new Date(item["startDateTime"]),
    endDateTime: !item["endDateTime"] ? item["endDateTime"] : new Date(item["endDateTime"]),
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
  Accepted = "ACCEPTED",
  /** Test profile run is not yet started. */
  Notstarted = "NOTSTARTED",
  /** Test profile run has started executing. */
  Executing = "EXECUTING",
  /** Test profile run has completed successfully. */
  Done = "DONE",
  /** Test profile run is being cancelled. */
  Cancelling = "CANCELLING",
  /** Test profile run is cancelled. */
  Cancelled = "CANCELLED",
  /** Test profile run has failed. */
  Failed = "FAILED",
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
    properties: Object.fromEntries(
      Object.entries(item["properties"]).map(([k, p]: [string, any]) => [k, p]),
    ),
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

export function testProfileRunRecommendationDeserializer(item: any): TestProfileRunRecommendation {
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

export function _pagedTestProfileRunDeserializer(item: any): _PagedTestProfileRun {
  return {
    value: testProfileRunArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function testProfileRunArraySerializer(result: Array<TestProfileRun>): any[] {
  return result.map((item) => {
    return testProfileRunSerializer(item);
  });
}

export function testProfileRunArrayDeserializer(result: Array<TestProfileRun>): any[] {
  return result.map((item) => {
    return testProfileRunDeserializer(item);
  });
}
