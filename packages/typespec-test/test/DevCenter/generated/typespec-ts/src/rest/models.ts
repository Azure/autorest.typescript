// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Hardware specifications for the Dev Box. */
export interface HardwareProfile {}

/** Storage settings for the Dev Box's disks. */
export interface StorageProfile {
  /** Settings for the operating system disk. */
  osDisk?: OsDisk;
}

/** Settings for the operating system disk. */
export interface OsDisk {}

/** Specifies information about the image used. */
export interface ImageReference {}

/** A Dev Box. */
export interface DevBox {
  /** The name of the Dev Box pool this machine belongs to. */
  poolName: string;
  /** Indicates whether the owner of the Dev Box is a local administrator. */
  localAdministrator?: LocalAdminStatus;
}

/** Represents a list of tasks to apply to a Dev Box. */
export interface CustomizationGroup {
  /**
   * Tasks to apply. Note by default tasks are excluded from the response when
   * listing customization groups. To include them, use the `include=tasks` query
   * parameter.
   */
  tasks?: Array<CustomizationTask>;
}

/** A customization task to run on a Dev Box. */
export interface CustomizationTask {
  /** Name of the task. */
  name: string;
  /** Parameters for the task. */
  parameters?: Record<string, string>;
  /** Display name to help differentiate multiple instances of the same task. */
  displayName?: string;
  /** Timeout, in seconds. Overrides any timeout provided on the task definition. */
  timeoutInSeconds?: number;
  /** What account to run the task as. */
  runAs?: CustomizationTaskExecutionAccount;
}

/** Represents a list of tasks to apply to a Dev Box */
export interface CustomizationTaskList {
  /** Tasks to apply. */
  tasks?: Array<CustomizationTask>;
}

/** Properties of an environment. */
export interface Environment {
  /**
   * The time the expiration date will be triggered (UTC), after which the
   * environment and associated resources will be deleted.
   */
  expirationDate?: Date | string;
  /** Parameters object for the environment. */
  parameters?: Record<string, unknown>;
  /** Environment type. */
  environmentType: string;
  /** Name of the catalog. */
  catalogName: string;
  /** Name of the environment definition. */
  environmentDefinitionName: string;
}

/** Alias for OsType */
export type OsType = string;
/** Alias for SkuName */
export type SkuName = string;
/** Alias for HibernateSupport */
export type HibernateSupport = string;
/** Alias for LocalAdminStatus */
export type LocalAdminStatus = string;
/** Alias for DevBoxProvisioningState */
export type DevBoxProvisioningState = string;
/** Alias for PowerState */
export type PowerState = string;
/** Alias for ListCustomizationGroupsIncludeProperty */
export type ListCustomizationGroupsIncludeProperty = string;
/** Alias for CustomizationTaskExecutionAccount */
export type CustomizationTaskExecutionAccount = string;
/** Alias for CustomizationTaskStatus */
export type CustomizationTaskStatus = string;
/** Alias for CustomizationGroupStatus */
export type CustomizationGroupStatus = string;
/** Alias for EnvironmentProvisioningState */
export type EnvironmentProvisioningState = string;
