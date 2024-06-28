// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  DevBox as DevBoxRest,
  Environment as EnvironmentRest,
} from "../../rest/index.js";
import { ErrorModel } from "@azure-rest/core-client";

/** Project details. */
export interface Project {
  /** The unique URI of the project. */
  uri: string;
  /** Name of the project. */
  readonly name: string;
  /** Description of the project. */
  description?: string;
  /**
   * When specified, indicates the maximum number of Dev Boxes a single user can
   * create across all pools in the project.
   */
  maxDevBoxesPerUser?: number;
  /** Display name of the pool. */
  displayName?: string;
}

/** DevCenter API versions */
export type APIVersions = "2023-04-01" | "2024-02-01" | "2024-05-01-preview";

/** A pool of Dev Boxes. */
export interface Pool {
  /** The unique URI of the pool. */
  uri: string;
  /** Pool name. */
  readonly name: string;
  /** Azure region where Dev Boxes in the pool are located. */
  location: string;
  /** The operating system type of Dev Boxes in this pool. */
  osType?: OsType;
  /** Hardware settings for the Dev Boxes created in this pool. */
  hardwareProfile?: HardwareProfile;
  /** Indicates whether hibernate is enabled/disabled or unknown. */
  hibernateSupport?: HibernateSupport;
  /** Storage settings for Dev Box created in this pool. */
  storageProfile?: StorageProfile;
  /** Image settings for Dev Boxes create in this pool. */
  imageReference?: ImageReference;
  /**
   * Indicates whether owners of Dev Boxes in this pool are local administrators on
   * the Dev Boxes.
   */
  localAdministrator?: LocalAdministratorStatus;
  /** Stop on disconnect configuration settings for Dev Boxes created in this pool. */
  stopOnDisconnect?: StopOnDisconnectConfiguration;
  /**
   * Overall health status of the Pool. Indicates whether or not the Pool is
   * available to create Dev Boxes.
   */
  healthStatus: PoolHealthStatus;
  /** Display name of the pool. */
  displayName?: string;
}

/** The operating system type. */
export type OsType = string;

export enum KnownOsType {
  Windows = "Windows",
}

/** Hardware specifications for the Dev Box. */
export interface HardwareProfile {
  /** The name of the SKU. */
  readonly skuName?: SkuName;
  /** The number of vCPUs available for the Dev Box. */
  readonly vCPUs?: number;
  /** The amount of memory available for the Dev Box. */
  readonly memoryGB?: number;
}

/** Indicates the Dev Box compute. */
export type SkuName = string;

export enum KnownSkuName {
  general_i_8c32gb256ssd_v2 = "general_i_8c32gb256ssd_v2",
  general_i_8c32gb512ssd_v2 = "general_i_8c32gb512ssd_v2",
  general_i_8c32gb1024ssd_v2 = "general_i_8c32gb1024ssd_v2",
  general_i_8c32gb2048ssd_v2 = "general_i_8c32gb2048ssd_v2",
  general_i_16c64gb256ssd_v2 = "general_i_16c64gb256ssd_v2",
  general_i_16c64gb512ssd_v2 = "general_i_16c64gb512ssd_v2",
  general_i_16c64gb1024ssd_v2 = "general_i_16c64gb1024ssd_v2",
  general_i_16c64gb2048ssd_v2 = "general_i_16c64gb2048ssd_v2",
  general_i_32c128gb512ssd_v2 = "general_i_32c128gb512ssd_v2",
  general_i_32c128gb1024ssd_v2 = "general_i_32c128gb1024ssd_v2",
  general_i_32c128gb2048ssd_v2 = "general_i_32c128gb2048ssd_v2",
  general_a_8c32gb256ssd_v2 = "general_a_8c32gb256ssd_v2",
  general_a_8c32gb512ssd_v2 = "general_a_8c32gb512ssd_v2",
  general_a_8c32gb1024ssd_v2 = "general_a_8c32gb1024ssd_v2",
  general_a_8c32gb2048ssd_v2 = "general_a_8c32gb2048ssd_v2",
  general_a_16c64gb256ssd_v2 = "general_a_16c64gb256ssd_v2",
  general_a_16c64gb512ssd_v2 = "general_a_16c64gb512ssd_v2",
  general_a_16c64gb1024ssd_v2 = "general_a_16c64gb1024ssd_v2",
  general_a_16c64gb2048ssd_v2 = "general_a_16c64gb2048ssd_v2",
  general_a_32c128gb512ssd_v2 = "general_a_32c128gb512ssd_v2",
  general_a_32c128gb1024ssd_v2 = "general_a_32c128gb1024ssd_v2",
  general_a_32c128gb2048ssd_v2 = "general_a_32c128gb2048ssd_v2",
}

/** Indicates whether hibernate is supported and enabled, disabled, or unsupported by the operating system. Unknown hibernate support is represented as null. */
export type HibernateSupport = string;

export enum KnownHibernateSupport {
  Enabled = "Enabled",
  Disabled = "Disabled",
  OsUnsupported = "OsUnsupported",
}

/** Storage settings for the Dev Box's disks. */
export interface StorageProfile {
  /** Settings for the operating system disk. */
  osDisk?: OsDisk;
}

/** Settings for the operating system disk. */
export interface OsDisk {
  /** The size of the OS Disk in gigabytes. */
  readonly diskSizeGB?: number;
}

/** Specifies information about the image used. */
export interface ImageReference {
  /** The name of the image used. */
  readonly name?: string;
  /** The version of the image. */
  readonly version?: string;
  /** The operating system of the image. */
  readonly operatingSystem?: string;
  /** The operating system build number of the image. */
  readonly osBuildNumber?: string;
  /** The datetime that the backing image version was published. */
  readonly publishedDate?: Date;
}

/** Indicates whether owners of Dev Boxes in a pool are local administrators on the Dev Boxes. */
export type LocalAdministratorStatus = string;

export enum KnownLocalAdministratorStatus {
  Enabled = "Enabled",
  Disabled = "Disabled",
}

/** Stop on disconnect configuration settings for Dev Boxes created in this pool. */
export interface StopOnDisconnectConfiguration {
  /**
   * Indicates whether the feature to stop the devbox on disconnect once the grace
   * period has lapsed is enabled.
   */
  status: StopOnDisconnectStatus;
  /**
   * The specified time in minutes to wait before stopping a Dev Box once disconnect
   * is detected.
   */
  gracePeriodMinutes?: number;
}

/** Indicates whether the feature to stop the devbox on disconnect once the grace period has lapsed is enabled. */
export type StopOnDisconnectStatus = string;

export enum KnownStopOnDisconnectStatus {
  Enabled = "Enabled",
  Disabled = "Disabled",
}

/** Pool status indicating whether a pool is available to create Dev Boxes. */
export type PoolHealthStatus = string;

export enum KnownPoolHealthStatus {
  Unknown = "Unknown",
  Pending = "Pending",
  Healthy = "Healthy",
  Warning = "Warning",
  Unhealthy = "Unhealthy",
}

/** A Schedule to execute action. */
export interface Schedule {
  /** The unique URI of the schedule. */
  uri: string;
  /** Display name for the Schedule. */
  readonly name: string;
  /** The URI of the resource that this schedule belongs to. */
  sourceUri: string;
  /** The type of the resource that this schedule belongs to. */
  sourceType: ScheduleSourceType;
  /** Supported type this scheduled task represents. */
  type: ScheduledType;
  /** The frequency of this scheduled task. */
  frequency: ScheduledFrequency;
  /** The target time to trigger the action. The format is HH:MM. */
  time: string;
  /** The IANA timezone id at which the schedule should execute. */
  timeZone: string;
}

/** The type of the resource that this schedule belongs to. */
export type ScheduleSourceType = string;

export enum KnownScheduleSourceType {
  Pool = "Pool",
}

/** The supported types for a scheduled task. */
export type ScheduledType = string;

export enum KnownScheduledType {
  StopDevBox = "StopDevBox",
}

/** The frequency of task execution. */
export type ScheduledFrequency = string;

export enum KnownScheduledFrequency {
  Daily = "Daily",
}

/** A Dev Box. */
export interface DevBox {
  /** The unique URI of the dev box. */
  readonly uri: string;
  /** Display name for the Dev Box. */
  readonly name: string;
  /** Name of the project this Dev Box belongs to. */
  readonly projectName?: string;
  /** The name of the Dev Box pool this machine belongs to. */
  poolName: string;
  /** Indicates whether hibernate is enabled/disabled or unknown. */
  readonly hibernateSupport?: HibernateSupport;
  /** The current provisioning state of the Dev Box. */
  readonly provisioningState?: DevBoxProvisioningState;
  /**
   * The current action state of the Dev Box. This is state is based on previous
   * action performed by user.
   */
  readonly actionState?: string;
  /** The current power state of the Dev Box. */
  readonly powerState?: PowerState;
  /**
   * A unique identifier for the Dev Box. This is a GUID-formatted string (e.g.
   * 00000000-0000-0000-0000-000000000000).
   */
  readonly uniqueId?: string;
  /** Provisioning or action error details. Populated only for error states. */
  readonly error?: ErrorModel;
  /**
   * Azure region where this Dev Box is located. This will be the same region as the
   * Virtual Network it is attached to.
   */
  readonly location?: string;
  /** The operating system type of this Dev Box. */
  readonly osType?: OsType;
  /** The AAD object id of the user this Dev Box is assigned to. */
  readonly user?: string;
  /** Information about the Dev Box's hardware resources. */
  readonly hardwareProfile?: HardwareProfile;
  /** Storage settings for this Dev Box. */
  readonly storageProfile?: StorageProfile;
  /** Information about the image used for this Dev Box. */
  readonly imageReference?: ImageReference;
  /** Creation time of this Dev Box. */
  readonly createdTime?: Date;
  /** Indicates whether the owner of the Dev Box is a local administrator. */
  localAdministrator?: LocalAdministratorStatus;
}

export function devBoxSerializer(item: DevBox): DevBoxRest {
  return {
    poolName: item["poolName"],
    localAdministrator: item["localAdministrator"],
  };
}

/** Indicates the provisioning state of the Dev Box. */
export type DevBoxProvisioningState = string;

export enum KnownDevBoxProvisioningState {
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "Canceled",
  Creating = "Creating",
  Deleting = "Deleting",
  Updating = "Updating",
  Starting = "Starting",
  Stopping = "Stopping",
  Provisioning = "Provisioning",
  ProvisionedWithWarning = "ProvisionedWithWarning",
  InGracePeriod = "InGracePeriod",
  NotProvisioned = "NotProvisioned",
}

/** The power states of a Dev Box. */
export type PowerState = string;

export enum KnownPowerState {
  Unknown = "Unknown",
  Running = "Running",
  Deallocated = "Deallocated",
  PoweredOff = "PoweredOff",
  Hibernated = "Hibernated",
}

/** The current status of an async operation. */
export interface OperationStatus {
  /** Fully qualified ID for the operation status. */
  readonly id: string;
  /** The operation id name. */
  readonly name: string;
  /** Provisioning state of the resource. */
  status: OperationState;
  /** The id of the resource. */
  resourceId?: string;
  /** The start time of the operation. */
  startTime?: Date;
  /** The end time of the operation. */
  endTime?: Date;
  /** Percent of the operation that is complete. */
  percentComplete?: number;
  /** Custom operation properties, populated only for a successful operation. */
  properties?: any;
  /** Operation Error message. */
  error?: ErrorModel;
}

/** Enum describing allowed operation states. */
export type OperationState = string;

export enum KnownOperationState {
  NotStarted = "NotStarted",
  Running = "Running",
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "Canceled",
}

/** Provides remote connection information for a Dev Box. */
export interface RemoteConnection {
  /** URL to open a browser based RDP session. */
  webUrl?: string;
  /** Link to open a Remote Desktop session. */
  rdpConnectionUrl?: string;
  /** Link to open a remote desktop session via a dev box's underlying Cloud PC (This will default to Windows App). */
  cloudPcConnectionUrl?: string;
}

/** An action which will take place on a Dev Box. */
export interface DevBoxAction {
  /** The unique URI for the Dev Box action. */
  uri: string;
  /** The name of the action. */
  readonly name: string;
  /** The action that will be taken. */
  actionType: DevBoxActionType;
  /** The id of the resource which triggered this action. */
  sourceId: string;
  /** The URI of the resource which triggered this action. */
  sourceUri: string;
  /** The type of the resource which triggered this action. */
  sourceType: DevBoxActionSourceType;
  /** The earliest time that the action could occur (UTC). */
  suspendedUntil?: Date;
  /** Details about the next run of this action. */
  next?: DevBoxNextAction;
}

/** The type of action which will take place on a Dev Box. */
export type DevBoxActionType = string;

export enum KnownDevBoxActionType {
  Stop = "Stop",
}

/** The type of the resource which triggered the action. */
export type DevBoxActionSourceType = string;

export enum KnownDevBoxActionSourceType {
  Pool = "Pool",
  Schedule = "Schedule",
}

/** Details about the next run of an action. */
export interface DevBoxNextAction {
  /** The time the action will be triggered (UTC). */
  scheduledTime: Date;
}

/** The action delay result. */
export interface DevBoxActionDelayResult {
  /** The unique URI of the action. */
  uri: string;
  /** The name of the action. */
  name: string;
  /** The result of the delay operation on this action. */
  delayStatus: DevBoxActionDelayStatus;
  /** The delayed action. */
  action?: DevBoxAction;
  /** Information about the error that occurred. Only populated on error. */
  error?: ErrorModel;
}

/** The result of the delay operation on this action. */
export type DevBoxActionDelayStatus = string;

export enum KnownDevBoxActionDelayStatus {
  Succeeded = "Succeeded",
  Failed = "Failed",
}

/** Properties of an environment. */
export interface Environment {
  /**
   * The time the expiration date will be triggered (UTC), after which the
   * environment and associated resources will be deleted.
   */
  expirationDate?: Date;
  /** Parameters object for the environment. */
  parameters?: Record<string, any>;
  /** The unique URI of the environment. */
  readonly uri: string;
  /** Environment name. */
  readonly name: string;
  /** Environment type. */
  environmentType: string;
  /** The AAD object id of the owner of this Environment. */
  readonly user?: string;
  /** The provisioning state of the environment. */
  readonly provisioningState?: EnvironmentProvisioningState;
  /** The identifier of the resource group containing the environment's resources. */
  readonly resourceGroupId?: string;
  /** Name of the catalog. */
  catalogName: string;
  /** Name of the environment definition. */
  environmentDefinitionName: string;
  /** Provisioning error details. Populated only for error states. */
  readonly error?: ErrorModel;
}

export function environmentSerializer(item: Environment): EnvironmentRest {
  return {
    expirationDate: item["expirationDate"]?.toISOString(),
    parameters: !item.parameters
      ? item.parameters
      : (serializeRecord(item.parameters as any) as any),
    environmentType: item["environmentType"],
    catalogName: item["catalogName"],
    environmentDefinitionName: item["environmentDefinitionName"],
  };
}

/** The provisioning state of the environment. */
export type EnvironmentProvisioningState = string;

export enum KnownEnvironmentProvisioningState {
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "Canceled",
  Creating = "Creating",
  Accepted = "Accepted",
  Deleting = "Deleting",
  Updating = "Updating",
  Preparing = "Preparing",
  Running = "Running",
  Syncing = "Syncing",
  MovingResources = "MovingResources",
  TransientFailure = "TransientFailure",
  StorageProvisioningFailed = "StorageProvisioningFailed",
}

/** A catalog. */
export interface Catalog {
  /** The unique URI of the catalog. */
  uri: string;
  /** Name of the catalog. */
  readonly name: string;
}

/** An environment definition. */
export interface EnvironmentDefinition {
  /** The unique URI of the environment definition. */
  uri: string;
  /** The ID of the environment definition. */
  id: string;
  /** Name of the environment definition. */
  readonly name: string;
  /** Name of the catalog. */
  catalogName: string;
  /** A short description of the environment definition. */
  description?: string;
  /** Input parameters passed to an environment. */
  parameters?: EnvironmentDefinitionParameter[];
  /** JSON schema defining the parameters object passed to an environment. */
  parametersSchema?: string;
  /** Path to the Environment Definition entrypoint file. */
  templatePath?: string;
}

/** Properties of an Environment Definition parameter */
export interface EnvironmentDefinitionParameter {
  /** Unique ID of the parameter. */
  id: string;
  /** Display name of the parameter. */
  name?: string;
  /** Description of the parameter. */
  description?: string;
  /** Default value of the parameter. */
  default?: string;
  /**
   * A string of one of the basic JSON types (number, integer, array, object,
   * boolean, string).
   */
  type: ParameterType;
  /**
   * Whether or not this parameter is read-only.  If true, default should have a
   * value.
   */
  readOnly?: boolean;
  /** Whether or not this parameter is required. */
  required: boolean;
  /** An array of allowed values. */
  allowed?: string[];
}

/** The type of data a parameter accepts. */
export type ParameterType = string;

export enum KnownParameterType {
  array = "array",
  boolean = "boolean",
  integer = "integer",
  number = "number",
  object = "object",
  string = "string",
}

/** Properties of an environment type. */
export interface EnvironmentType {
  /** The unique URI of the environment type. */
  uri: string;
  /** Name of the environment type. */
  readonly name: string;
  /**
   * Id of a subscription or management group that the environment type will be
   * mapped to. The environment's resources will be deployed into this subscription
   * or management group.
   */
  deploymentTargetId: string;
  /** Indicates whether this environment type is enabled for use in this project. */
  status: EnvironmentTypeStatus;
  /** Display name of the environment type. */
  displayName?: string;
}

/** Indicates whether an environment type is enabled for use in a project. */
export type EnvironmentTypeStatus = string;

export enum KnownEnvironmentTypeStatus {
  Enabled = "Enabled",
  Disabled = "Disabled",
}

/** Paged collection of Project items */
export interface _PagedProject {
  /** The Project items on this page */
  value: Project[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of Pool items */
export interface _PagedPool {
  /** The Pool items on this page */
  value: Pool[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of Schedule items */
export interface _PagedSchedule {
  /** The Schedule items on this page */
  value: Schedule[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of DevBox items */
export interface _PagedDevBox {
  /** The DevBox items on this page */
  value: DevBox[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of DevBoxAction items */
export interface _PagedDevBoxAction {
  /** The DevBoxAction items on this page */
  value: DevBoxAction[];
  /** The link to the next page of items */
  nextLink?: string;
}

export interface _ErrorResponseDevBoxActionPage {
  /** The DevBoxActionDelayResult items on this page */
  value: DevBoxActionDelayResult[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of Environment items */
export interface _PagedEnvironment {
  /** The Environment items on this page */
  value: Environment[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of Catalog items */
export interface _PagedCatalog {
  /** The Catalog items on this page */
  value: Catalog[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of EnvironmentDefinition items */
export interface _PagedEnvironmentDefinition {
  /** The EnvironmentDefinition items on this page */
  value: EnvironmentDefinition[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of EnvironmentType items */
export interface _PagedEnvironmentType {
  /** The EnvironmentType items on this page */
  value: EnvironmentType[];
  /** The link to the next page of items */
  nextLink?: string;
}
