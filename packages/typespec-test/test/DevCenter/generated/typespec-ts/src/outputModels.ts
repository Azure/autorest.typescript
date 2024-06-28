// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";
import { ErrorModel } from "@azure-rest/core-client";

/** Project details. */
export interface ProjectOutput {
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

/** Abilities a user has on a project. */
export interface ProjectAbilitiesOutput {
  /** The abilities the user has to perform actions on the project as an admin. */
  abilitiesAsAdmin: ProjectAbilityAsAdminOutput[];
  /** The abilities the user has to perform actions on the project as a developer. */
  abilitiesAsDeveloper: ProjectAbilityAsDeveloperOutput[];
}

/** The current status of an async operation. */
export interface OperationStatusOutput {
  /** Fully qualified ID for the operation status. */
  readonly id: string;
  /** The operation id name. */
  readonly name: string;
  /** Provisioning state of the resource. */
  status: OperationStateOutput;
  /** The id of the resource. */
  resourceId?: string;
  /** The start time of the operation. */
  startTime?: string;
  /** The end time of the operation. */
  endTime?: string;
  /** Percent of the operation that is complete. */
  percentComplete?: number;
  /** Custom operation properties, populated only for a successful operation. */
  properties?: any;
  /** Operation Error message. */
  error?: ErrorModel;
}

/** A pool of Dev Boxes. */
export interface PoolOutput {
  /** The unique URI of the pool. */
  uri: string;
  /** Pool name. */
  readonly name: string;
  /** Azure region where Dev Boxes in the pool are located. */
  location: string;
  /** The operating system type of Dev Boxes in this pool. */
  osType?: OsTypeOutput;
  /** Hardware settings for the Dev Boxes created in this pool. */
  hardwareProfile?: HardwareProfileOutput;
  /** Indicates whether hibernate is enabled/disabled or unknown. */
  hibernateSupport?: HibernateSupportOutput;
  /** Storage settings for Dev Box created in this pool. */
  storageProfile?: StorageProfileOutput;
  /** Image settings for Dev Boxes create in this pool. */
  imageReference?: ImageReferenceOutput;
  /**
   * Indicates whether owners of Dev Boxes in this pool are local administrators on
   * the Dev Boxes.
   */
  localAdministrator?: LocalAdminStatusOutput;
  /** Stop on disconnect configuration settings for Dev Boxes created in this pool. */
  stopOnDisconnect?: StopOnDisconnectConfigurationOutput;
  /**
   * Overall health status of the Pool. Indicates whether or not the Pool is
   * available to create Dev Boxes.
   */
  healthStatus: PoolHealthStatusOutput;
  /** Display name of the pool. */
  displayName?: string;
}

/** Hardware specifications for the Dev Box. */
export interface HardwareProfileOutput {
  /** The name of the SKU. */
  readonly skuName?: SkuNameOutput;
  /** The number of vCPUs available for the Dev Box. */
  readonly vCPUs?: number;
  /** The amount of memory available for the Dev Box. */
  readonly memoryGB?: number;
}

/** Storage settings for the Dev Box's disks. */
export interface StorageProfileOutput {
  /** Settings for the operating system disk. */
  osDisk?: OsDiskOutput;
}

/** Settings for the operating system disk. */
export interface OsDiskOutput {
  /** The size of the OS Disk in gigabytes. */
  readonly diskSizeGB?: number;
}

/** Specifies information about the image used. */
export interface ImageReferenceOutput {
  /** The name of the image used. */
  readonly name?: string;
  /** The version of the image. */
  readonly version?: string;
  /** The operating system of the image. */
  readonly operatingSystem?: string;
  /** The operating system build number of the image. */
  readonly osBuildNumber?: string;
  /** The datetime that the backing image version was published. */
  readonly publishedDate?: string;
}

/** Stop on disconnect configuration settings for Dev Boxes created in this pool. */
export interface StopOnDisconnectConfigurationOutput {
  /**
   * Indicates whether the feature to stop the devbox on disconnect once the grace
   * period has lapsed is enabled.
   */
  status: StopOnDisconnectEnableStatusOutput;
  /**
   * The specified time in minutes to wait before stopping a Dev Box once disconnect
   * is detected.
   */
  gracePeriodMinutes?: number;
}

/** A Dev Box. */
export interface DevBoxOutput {
  /** The unique URI of the dev box. */
  readonly uri: string;
  /** Display name for the Dev Box. */
  readonly name: string;
  /** Name of the project this Dev Box belongs to. */
  readonly projectName?: string;
  /** The name of the Dev Box pool this machine belongs to. */
  poolName: string;
  /** Indicates whether hibernate is enabled/disabled or unknown. */
  readonly hibernateSupport?: HibernateSupportOutput;
  /** The current provisioning state of the Dev Box. */
  readonly provisioningState?: DevBoxProvisioningStateOutput;
  /**
   * The current action state of the Dev Box. This is state is based on previous
   * action performed by user.
   */
  readonly actionState?: string;
  /** The current power state of the Dev Box. */
  readonly powerState?: PowerStateOutput;
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
  readonly osType?: OsTypeOutput;
  /** The AAD object id of the user this Dev Box is assigned to. */
  readonly user?: string;
  /** Information about the Dev Box's hardware resources. */
  readonly hardwareProfile?: HardwareProfileOutput;
  /** Storage settings for this Dev Box. */
  readonly storageProfile?: StorageProfileOutput;
  /** Information about the image used for this Dev Box. */
  readonly imageReference?: ImageReferenceOutput;
  /** Creation time of this Dev Box. */
  readonly createdTime?: string;
  /** Indicates whether the owner of the Dev Box is a local administrator. */
  localAdministrator?: LocalAdminStatusOutput;
}

/** A Schedule to execute action. */
export interface ScheduleOutput {
  /** The unique URI of the schedule. */
  uri: string;
  /** Display name for the Schedule. */
  readonly name: string;
  /** The URI of the resource that this schedule belongs to. */
  sourceUri: string;
  /** The type of the resource that this schedule belongs to. */
  sourceType: ScheduleSourceTypeOutput;
  /** Supported type this scheduled task represents. */
  type: ScheduledTypeOutput;
  /** The frequency of this scheduled task. */
  frequency: ScheduledFrequencyOutput;
  /** The target time to trigger the action. The format is HH:MM. */
  time: string;
  /** The IANA timezone id at which the schedule should execute. */
  timeZone: string;
}

/** Represents a list of tasks to apply to a Dev Box. */
export interface CustomizationGroupOutput {
  /**
   * Tasks to apply. Note by default tasks are excluded from the response when
   * listing customization groups. To include them, use the `include=tasks` query
   * parameter.
   */
  tasks?: Array<CustomizationTaskOutput>;
  /** The unique URI of the customization group. */
  readonly uri?: string;
  /** Name of the customization group. */
  readonly name: string;
  /** Status of the customization group. */
  readonly status?: CustomizationGroupStatusOutput;
  /** Start time of the customization group. */
  readonly startTime?: string;
  /** End time of the customization group. */
  readonly endTime?: string;
}

/** A customization task to run on a Dev Box. */
export interface CustomizationTaskOutput {
  /** Name of the task. */
  name: string;
  /** Parameters for the task. */
  parameters?: Record<string, string>;
  /** Display name to help differentiate multiple instances of the same task. */
  displayName?: string;
  /** Timeout, in seconds. Overrides any timeout provided on the task definition. */
  timeoutInSeconds?: number;
  /** What account to run the task as. */
  runAs?: CustomizationTaskExecutionAccountOutput;
  /** ID of the task instance. */
  readonly id?: string;
  /** The unique URI for retrieving the task logs. */
  readonly logUri?: string;
  /** Status of the task. */
  readonly status?: CustomizationTaskStatusOutput;
  /** Start time of the task. */
  readonly startTime?: string;
  /** End time of the task. */
  readonly endTime?: string;
}

/** Represents a task to be used in customizing a Dev Box. */
export interface CustomizationTaskDefinitionOutput {
  /** Full name of the task: {catalogName}/{taskName}. */
  readonly name: string;
  /** Name of the catalog that the task belongs to. */
  readonly catalogName: string;
  /** The unique URI of the customization task. */
  readonly uri?: string;
  /** Description of the task. */
  description?: string;
  /** Parameters for the task. */
  parameters?: Record<string, CustomizationTaskDefinitionParameterOutput>;
}

/** Parameters for a customization task. */
export interface CustomizationTaskDefinitionParameterOutput {
  /** Description of the parameter. */
  description?: string;
  /** Type of the parameter. */
  type: CustomizationTaskDefinitionParameterTypeOutput;
  /** Whether or not the parameter is required. */
  readonly required?: boolean;
  /** Default value for the parameter. */
  default?: string;
  /** Allowed values for the parameter. */
  allowed?: string[];
}

/** The operation result of validating a list of customization tasks. */
export interface CustomizationTaskListValidationOperationResultOutput {
  /** Fully qualified ID for the operation status. */
  readonly id: string;
  /** The operation id name. */
  readonly name: string;
  /** Provisioning state of the resource. */
  status: OperationStateOutput;
  /** The id of the resource. */
  resourceId?: string;
  /** The start time of the operation. */
  startTime?: string;
  /** The end time of the operation. */
  endTime?: string;
  /** Percent of the operation that is complete. */
  percentComplete?: number;
  /** Custom operation properties, populated only for a successful operation. */
  properties?: any;
  /** Operation Error message. */
  error?: ErrorModel;
  /** Outcome of validation. */
  result?: CustomizationTaskListValidationResultOutput;
}

/** The result of validating a list of customization tasks. */
export interface CustomizationTaskListValidationResultOutput {
  /** Outcome of validation. */
  validationResult: CustomizationTaskListValidationStatusOutput;
  /** List of validation errors. Absent if no errors. */
  errors?: Array<CustomizationTaskListValidationErrorOutput>;
}

/** All of the validation errors for a customization task. */
export interface CustomizationTaskListValidationErrorOutput {
  /** The customization task that the error is about. */
  target: CustomizationTaskOutput;
  /** List of validation errors for the task. */
  details: Array<ErrorModel>;
}

/** Provides remote connection information for a Dev Box. */
export interface RemoteConnectionOutput {
  /** URL to open a browser based RDP session. */
  webUrl?: string;
  /** Link to open a Remote Desktop session. */
  rdpConnectionUrl?: string;
  /** Link to open a remote desktop session via a dev box's underlying Cloud PC (This will default to Windows App). */
  cloudPcConnectionUrl?: string;
}

/** An action which will take place on a Dev Box. */
export interface DevBoxActionOutput {
  /** The unique URI for the Dev Box action. */
  uri: string;
  /** The name of the action. */
  readonly name: string;
  /** The action that will be taken. */
  actionType: DevBoxActionTypeOutput;
  /** The id of the resource which triggered this action. */
  sourceId: string;
  /** The URI of the resource which triggered this action. */
  sourceUri: string;
  /** The type of the resource which triggered this action. */
  sourceType: DevBoxActionSourceTypeOutput;
  /** The earliest time that the action could occur (UTC). */
  suspendedUntil?: string;
  /** Details about the next run of this action. */
  next?: DevBoxNextActionOutput;
}

/** Details about the next run of an action. */
export interface DevBoxNextActionOutput {
  /** The time the action will be triggered (UTC). */
  scheduledTime: string;
}

/** The action delay result. */
export interface DevBoxActionDelayResultOutput {
  /** The unique URI of the action. */
  uri: string;
  /** The name of the action. */
  name: string;
  /** The result of the delay operation on this action. */
  result: DevBoxActionDelayResultStatusOutput;
  /** The delayed action. */
  action?: DevBoxActionOutput;
  /** Information about the error that occurred. Only populated on error. */
  error?: ErrorModel;
}

/** Information about an operation on a Dev Box. */
export interface DevBoxOperationOutputParent {
  /** The unique URI for the Dev Box operation. */
  uri: string;
  /** Unique identifier for the Dev Box operation. */
  readonly operationId: string;
  /** The operation status. */
  status: OperationStateOutput;
  /** The object ID of the actor which initiated the operation. */
  createdByObjectId?: string;
  /** he time the operation started. */
  startTime?: string;
  /** The time the operation finished. */
  endTime?: string;
  /** Provisioning or operation error details. Populated only for error states. */
  error?: ErrorModel;
  kind: DevBoxOperationKindOutput;
}

/** Information about a start operation on a Dev Box. */
export interface DevBoxStartOperationOutput
  extends DevBoxOperationOutputParent {
  /** The kind of operation that occurred. */
  kind: "Start";
}

/** Information about a stop operation on a Dev Box. */
export interface DevBoxStopOperationOutput extends DevBoxOperationOutputParent {
  /** The kind of operation that occurred. */
  kind: "Stop";
}

/** Information about a restart operation on a Dev Box. */
export interface DevBoxRestartOperationOutput
  extends DevBoxOperationOutputParent {
  /** The kind of operation that occurred. */
  kind: "Restart";
}

/** Information about a start operation on a Dev Box. */
export interface DevBoxRepairOperationOutput
  extends DevBoxOperationOutputParent {
  /** The result of the repair operation. */
  result?: DevBoxRepairOperationResultOutput;
  /** The kind of operation that occurred. */
  kind: "Repair";
}

/** Information about the result of a repair operation on a Dev Box. */
export interface DevBoxRepairOperationResultOutput {
  /** The outcome of the repair operation. */
  repairOutcome?: DevBoxRepairOutcomeOutput;
  /** The result code associated with the repair operation. */
  code?: string;
  /** The result message associated with the repair operation. */
  message?: string;
}

/** Properties of an environment. */
export interface EnvironmentOutput {
  /**
   * The time the expiration date will be triggered (UTC), after which the
   * environment and associated resources will be deleted.
   */
  expirationDate?: string;
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
  readonly provisioningState?: EnvironmentProvisioningStateOutput;
  /** The identifier of the resource group containing the environment's resources. */
  readonly resourceGroupId?: string;
  /** Name of the catalog. */
  catalogName: string;
  /** Name of the environment definition. */
  environmentDefinitionName: string;
  /** Provisioning error details. Populated only for error states. */
  readonly error?: ErrorModel;
}

/** Outputs from environment deployment. */
export interface EnvironmentOutputsOutput {
  /** The outputs Names and Values. */
  outputs?: Record<string, EnvironmentOutputOutput>;
}

/** Output from environment deployment. */
export interface EnvironmentOutputOutput {
  /** Type of the output value. */
  type?: EnvironmentOutputTypeOutput;
  /** The output value. */
  value?: any;
  /** Indicates if the value is sensitive. */
  sensitive?: boolean;
}

/** Information about an operation on an environment. */
export interface EnvironmentOperationOutputParent {
  /** The unique URI for the environment operation. */
  uri: string;
  /** Unique identifier for the environment operation. */
  readonly operationId: string;
  /** The operation status. */
  status: OperationStateOutput;
  /** The object ID of the actor which initiated the operation. */
  createdByObjectId?: string;
  /** The time the operation started. */
  startTime?: string;
  /** The time the operation finished. */
  endTime?: string;
  /** Parameters object for the environment at the time of the operation. */
  environmentParameters?: Record<string, any>;
  /** Provisioning or operation error details. Populated only for error states. */
  error?: ErrorModel;
  kind: EnvironmentOperationKindOutput;
}

/** Information about a deploy operation on an environment. */
export interface EnvironmentDeployOperationOutput
  extends EnvironmentOperationOutputParent {
  /** The kind of operation that occurred. */
  kind: "Deploy";
}

/** Information about a delete operation on an environment. */
export interface EnvironmentDeleteOperationOutput
  extends EnvironmentOperationOutputParent {
  /** The kind of operation that occurred. */
  kind: "Delete";
}

/** An upcoming Environment Action. */
export interface EnvironmentActionOutput {
  /** Uniquely identifies the action. */
  readonly name: string;
  /** Uri of the action resource. */
  readonly uri: string;
  /** The action that will be taken. */
  actionType: EnvironmentActionTypeOutput;
  /** Details about the next run of this action. */
  next?: EnvironmentNextActionOutput;
  /** Object Id of the user who last modified the action. */
  readonly lastModifiedBy?: string;
  /** Time the object was last modified. */
  lastModifiedAt?: string;
}

/** Details about the next run of an action. */
export interface EnvironmentNextActionOutput {
  /** The time the action will be triggered (UTC). */
  scheduledTime?: string;
}

/** A catalog. */
export interface CatalogOutput {
  /** The unique URI of the catalog. */
  uri: string;
  /** Name of the catalog. */
  readonly name: string;
}

/** An environment definition. */
export interface EnvironmentDefinitionOutput {
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
  parameters?: Array<EnvironmentDefinitionParameterOutput>;
  /** JSON schema defining the parameters object passed to an environment. */
  parametersSchema?: string;
  /** Path to the Environment Definition entrypoint file. */
  templatePath?: string;
}

/** Properties of an Environment Definition parameter */
export interface EnvironmentDefinitionParameterOutput {
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
  type: ParameterTypeOutput;
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

/** Properties of an environment type. */
export interface EnvironmentTypeOutput {
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
  status: EnvironmentTypeEnableStatusOutput;
  /** Display name of the environment type. */
  displayName?: string;
}

/** Abilities a user has on an environment type. */
export interface EnvironmentTypeAbilitiesOutput {
  /** The abilities the user has to perform actions on the environment type as an admin. */
  abilitiesAsAdmin: EnvironmentTypeAbilityAsAdminOutput[];
  /** The abilities the user has to perform actions on the environment type as a developer. */
  abilitiesAsDeveloper: EnvironmentTypeAbilityAsDeveloperOutput[];
}

/** Information about an operation on a Dev Box. */
export type DevBoxOperationOutput =
  | DevBoxOperationOutputParent
  | DevBoxStartOperationOutput
  | DevBoxStopOperationOutput
  | DevBoxRestartOperationOutput
  | DevBoxRepairOperationOutput;
/** Information about an operation on an environment. */
export type EnvironmentOperationOutput =
  | EnvironmentOperationOutputParent
  | EnvironmentDeployOperationOutput
  | EnvironmentDeleteOperationOutput;
/** Paged collection of Project items */
export type PagedProjectOutput = Paged<ProjectOutput>;
/** Alias for ProjectAbilityAsAdminOutput */
export type ProjectAbilityAsAdminOutput = string;
/** Alias for ProjectAbilityAsDeveloperOutput */
export type ProjectAbilityAsDeveloperOutput = string;
/** Alias for OperationStateOutput */
export type OperationStateOutput = string;
/** Paged collection of Pool items */
export type PagedPoolOutput = Paged<PoolOutput>;
/** Alias for OsTypeOutput */
export type OsTypeOutput = string;
/** Alias for SkuNameOutput */
export type SkuNameOutput = string;
/** Alias for HibernateSupportOutput */
export type HibernateSupportOutput = string;
/** Alias for LocalAdminStatusOutput */
export type LocalAdminStatusOutput = string;
/** Alias for StopOnDisconnectEnableStatusOutput */
export type StopOnDisconnectEnableStatusOutput = string;
/** Alias for PoolHealthStatusOutput */
export type PoolHealthStatusOutput = string;
/** Paged collection of DevBox items */
export type PagedDevBoxOutput = Paged<DevBoxOutput>;
/** Alias for DevBoxProvisioningStateOutput */
export type DevBoxProvisioningStateOutput = string;
/** Alias for PowerStateOutput */
export type PowerStateOutput = string;
/** Paged collection of Schedule items */
export type PagedScheduleOutput = Paged<ScheduleOutput>;
/** Alias for ScheduleSourceTypeOutput */
export type ScheduleSourceTypeOutput = string;
/** Alias for ScheduledTypeOutput */
export type ScheduledTypeOutput = string;
/** Alias for ScheduledFrequencyOutput */
export type ScheduledFrequencyOutput = string;
/** Paged collection of CustomizationGroup items */
export type PagedCustomizationGroupOutput = Paged<CustomizationGroupOutput>;
/** Alias for CustomizationTaskExecutionAccountOutput */
export type CustomizationTaskExecutionAccountOutput = string;
/** Alias for CustomizationTaskStatusOutput */
export type CustomizationTaskStatusOutput = string;
/** Alias for CustomizationGroupStatusOutput */
export type CustomizationGroupStatusOutput = string;
/** The Customization Task list result. */
export type PagedCustomizationTaskDefinitionOutput =
  Paged<CustomizationTaskDefinitionOutput>;
/** Alias for CustomizationTaskDefinitionParameterTypeOutput */
export type CustomizationTaskDefinitionParameterTypeOutput = string;
/** Alias for CustomizationTaskListValidationStatusOutput */
export type CustomizationTaskListValidationStatusOutput = string;
/** Paged collection of DevBoxAction items */
export type PagedDevBoxActionOutput = Paged<DevBoxActionOutput>;
/** Alias for DevBoxActionTypeOutput */
export type DevBoxActionTypeOutput = string;
/** Alias for DevBoxActionSourceTypeOutput */
export type DevBoxActionSourceTypeOutput = string;
/** Paged collection of DevBoxActionDelayResult items */
export type PagedDevBoxActionDelayResultOutput =
  Paged<DevBoxActionDelayResultOutput>;
/** Alias for DevBoxActionDelayResultStatusOutput */
export type DevBoxActionDelayResultStatusOutput = string;
/** Paged collection of DevBoxOperation items */
export type PagedDevBoxOperationOutput = Paged<DevBoxOperationOutput>;
/** Alias for DevBoxOperationKindOutput */
export type DevBoxOperationKindOutput = string;
/** Alias for DevBoxRepairOutcomeOutput */
export type DevBoxRepairOutcomeOutput = string;
/** Paged collection of Environment items */
export type PagedEnvironmentOutput = Paged<EnvironmentOutput>;
/** Alias for EnvironmentProvisioningStateOutput */
export type EnvironmentProvisioningStateOutput = string;
/** Alias for EnvironmentOutputTypeOutput */
export type EnvironmentOutputTypeOutput = string;
/** Paged collection of EnvironmentOperation items */
export type PagedEnvironmentOperationOutput = Paged<EnvironmentOperationOutput>;
/** Alias for EnvironmentOperationKindOutput */
export type EnvironmentOperationKindOutput = string;
/** Paged collection of EnvironmentAction items */
export type PagedEnvironmentActionOutput = Paged<EnvironmentActionOutput>;
/** Alias for EnvironmentActionTypeOutput */
export type EnvironmentActionTypeOutput = string;
/** Paged collection of Catalog items */
export type PagedCatalogOutput = Paged<CatalogOutput>;
/** Paged collection of EnvironmentDefinition items */
export type PagedEnvironmentDefinitionOutput =
  Paged<EnvironmentDefinitionOutput>;
/** Alias for ParameterTypeOutput */
export type ParameterTypeOutput = string;
/** Paged collection of EnvironmentType items */
export type PagedEnvironmentTypeOutput = Paged<EnvironmentTypeOutput>;
/** Alias for EnvironmentTypeEnableStatusOutput */
export type EnvironmentTypeEnableStatusOutput = string;
/** Alias for EnvironmentTypeAbilityAsAdminOutput */
export type EnvironmentTypeAbilityAsAdminOutput = string;
/** Alias for EnvironmentTypeAbilityAsDeveloperOutput */
export type EnvironmentTypeAbilityAsDeveloperOutput = string;
