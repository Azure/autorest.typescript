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
export interface ComputeVirtualMachine extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: ComputeVirtualMachineProperties;
}

export function computeVirtualMachineSerializer(item: ComputeVirtualMachine): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : computeVirtualMachinePropertiesSerializer(item["properties"]),
  };
}

export function computeVirtualMachineDeserializer(item: any): ComputeVirtualMachine {
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
      : computeVirtualMachinePropertiesDeserializer(item["properties"]),
  };
}

/** model interface ComputeVirtualMachineProperties */
export interface ComputeVirtualMachineProperties {
  readonly provisioningState?: ResourceProvisioningState;
}

export function computeVirtualMachinePropertiesSerializer(
  item: ComputeVirtualMachineProperties,
): any {
  return item;
}

export function computeVirtualMachinePropertiesDeserializer(
  item: any,
): ComputeVirtualMachineProperties {
  return {
    provisioningState: item["provisioningState"],
  };
}

/** Create or update Restore Point collection parameters. */
export interface ComputeRestorePointCollection extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: ComputeRestorePointCollectionProperties;
}

export function computeRestorePointCollectionSerializer(item: ComputeRestorePointCollection): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : computeRestorePointCollectionPropertiesSerializer(item["properties"]),
  };
}

export function computeRestorePointCollectionDeserializer(
  item: any,
): ComputeRestorePointCollection {
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
      : computeRestorePointCollectionPropertiesDeserializer(item["properties"]),
  };
}

/** The restore point collection properties. */
export interface ComputeRestorePointCollectionProperties {
  /** The provisioning state of the restore point collection. */
  readonly provisioningState?: string;
  /** This property determines whether instant access snapshot is enabled for restore points created under this restore point collection for Premium SSD v2 or Ultra disk. Instant access snapshot for Premium SSD v2 or Ultra disk is instantaneously available for restoring disk with fast restore performance. */
  instantAccess?: boolean;
}

export function computeRestorePointCollectionPropertiesSerializer(
  item: ComputeRestorePointCollectionProperties,
): any {
  return { instantAccess: item["instantAccess"] };
}

export function computeRestorePointCollectionPropertiesDeserializer(
  item: any,
): ComputeRestorePointCollectionProperties {
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

/** The available API versions. */
export enum KnownComputeVersions {
  /** The 2024-11-01 API version. */
  V20241101 = "2024-11-01",
  /** The 2025-04-01 API version. */
  V20250401 = "2025-04-01",
}
