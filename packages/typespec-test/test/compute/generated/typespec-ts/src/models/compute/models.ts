// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ResourceProvisioningState, TrackedResource, systemDataDeserializer } from "../models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Describes a Virtual Machine. */
export interface VirtualMachine extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineProperties;
}

export function virtualMachineSerializer(item: VirtualMachine): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : virtualMachinePropertiesSerializer(item["properties"]),
  };
}

export function virtualMachineDeserializer(item: any): VirtualMachine {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : virtualMachinePropertiesDeserializer(item["properties"]),
  };
}

/** model interface VirtualMachineProperties */
export interface VirtualMachineProperties {
  readonly provisioningState?: ResourceProvisioningState;
}

export function virtualMachinePropertiesSerializer(_item: VirtualMachineProperties): any {
  return {};
}

export function virtualMachinePropertiesDeserializer(item: any): VirtualMachineProperties {
  return {
    provisioningState: item["provisioningState"],
  };
}

/** Create or update Restore Point collection parameters. */
export interface RestorePointCollection extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: RestorePointCollectionProperties;
}

export function restorePointCollectionSerializer(item: RestorePointCollection): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : restorePointCollectionPropertiesSerializer(item["properties"]),
  };
}

export function restorePointCollectionDeserializer(item: any): RestorePointCollection {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : restorePointCollectionPropertiesDeserializer(item["properties"]),
  };
}

/** The restore point collection properties. */
export interface RestorePointCollectionProperties {
  /** The provisioning state of the restore point collection. */
  readonly provisioningState?: string;
  /** This property determines whether instant access snapshot is enabled for restore points created under this restore point collection for Premium SSD v2 or Ultra disk. Instant access snapshot for Premium SSD v2 or Ultra disk is instantaneously available for restoring disk with fast restore performance. */
  instantAccess?: boolean;
}

export function restorePointCollectionPropertiesSerializer(
  item: RestorePointCollectionProperties,
): any {
  return { instantAccess: item["instantAccess"] };
}

export function restorePointCollectionPropertiesDeserializer(
  item: any,
): RestorePointCollectionProperties {
  return {
    provisioningState: item["provisioningState"],
    instantAccess: item["instantAccess"],
  };
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface ComputeActionGroup extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: ComputeActionGroupsProperties;
}

export function computeActionGroupDeserializer(item: any): ComputeActionGroup {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : computeActionGroupsPropertiesDeserializer(item["properties"]),
  };
}

/** model interface ComputeActionGroupsProperties */
export interface ComputeActionGroupsProperties {
  readonly provisioningState?: string;
}

export function computeActionGroupsPropertiesDeserializer(
  item: any,
): ComputeActionGroupsProperties {
  return {
    provisioningState: item["provisioningState"],
  };
}

/** Describes a Virtual Machine Scale Set Extension. */
export interface VirtualMachineScaleSetExtension extends SubResourceReadOnly {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineScaleSetExtensionProperties;
  /** Resource type */
  readonly vmType?: string;
  /** Resource name */
  name?: string;
}

export function virtualMachineScaleSetExtensionSerializer(
  item: VirtualMachineScaleSetExtension,
): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : virtualMachineScaleSetExtensionPropertiesSerializer(item["properties"]),
    name: item["name"],
  };
}

export function virtualMachineScaleSetExtensionDeserializer(
  item: any,
): VirtualMachineScaleSetExtension {
  return {
    id: item["id"],
    properties: !item["properties"]
      ? item["properties"]
      : virtualMachineScaleSetExtensionPropertiesDeserializer(item["properties"]),
    vmType: item["type"],
    name: item["name"],
  };
}

/** Describes the properties of a Virtual Machine Scale Set Extension. */
export interface VirtualMachineScaleSetExtensionProperties {
  /** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
}

export function virtualMachineScaleSetExtensionPropertiesSerializer(
  item: VirtualMachineScaleSetExtensionProperties,
): any {
  return { forceUpdateTag: item["forceUpdateTag"] };
}

export function virtualMachineScaleSetExtensionPropertiesDeserializer(
  item: any,
): VirtualMachineScaleSetExtensionProperties {
  return {
    forceUpdateTag: item["forceUpdateTag"],
  };
}

/** model interface SubResourceReadOnly */
export interface SubResourceReadOnly {
  /** Resource Id */
  readonly id?: string;
}

export function subResourceReadOnlySerializer(_item: SubResourceReadOnly): any {
  return {};
}

export function subResourceReadOnlyDeserializer(item: any): SubResourceReadOnly {
  return {
    id: item["id"],
  };
}
