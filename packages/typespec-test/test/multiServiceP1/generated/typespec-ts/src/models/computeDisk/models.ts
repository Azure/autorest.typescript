// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ResourceProvisioningState,
  TrackedResource,
  systemDataDeserializer,
  privateEndpointConnectionArrayDeserializer,
  PrivateEndpointConnection,
} from "../models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Disk resource. */
export interface ComputeDiskDisk extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: ComputeDiskDiskProperties;
}

export function computeDiskDiskSerializer(item: ComputeDiskDisk): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : computeDiskDiskPropertiesSerializer(item["properties"]),
  };
}

export function computeDiskDiskDeserializer(item: any): ComputeDiskDisk {
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
      : computeDiskDiskPropertiesDeserializer(item["properties"]),
  };
}

/** Disk resource properties. */
export interface ComputeDiskDiskProperties {
  readonly provisioningState?: ResourceProvisioningState;
}

export function computeDiskDiskPropertiesSerializer(item: ComputeDiskDiskProperties): any {
  return item;
}

export function computeDiskDiskPropertiesDeserializer(item: any): ComputeDiskDiskProperties {
  return {
    provisioningState: item["provisioningState"],
  };
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface ComputeDiskDiskAccess extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: ComputeDiskDiskAccessProperties;
}

export function computeDiskDiskAccessSerializer(item: ComputeDiskDiskAccess): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : computeDiskDiskAccessPropertiesSerializer(item["properties"]),
  };
}

export function computeDiskDiskAccessDeserializer(item: any): ComputeDiskDiskAccess {
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
      : computeDiskDiskAccessPropertiesDeserializer(item["properties"]),
  };
}

/** model interface ComputeDiskDiskAccessProperties */
export interface ComputeDiskDiskAccessProperties {
  /** A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported. */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
  /** The disk access resource provisioning state. */
  readonly provisioningState?: string;
  /** The time when the disk access was created. */
  readonly timeCreated?: Date;
}

export function computeDiskDiskAccessPropertiesSerializer(
  item: ComputeDiskDiskAccessProperties,
): any {
  return item;
}

export function computeDiskDiskAccessPropertiesDeserializer(
  item: any,
): ComputeDiskDiskAccessProperties {
  return {
    privateEndpointConnections: !item["privateEndpointConnections"]
      ? item["privateEndpointConnections"]
      : privateEndpointConnectionArrayDeserializer(item["privateEndpointConnections"]),
    provisioningState: item["provisioningState"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

export function computeDiskActionGroupArrayDeserializer(
  result: Array<ComputeDiskActionGroup>,
): any[] {
  return result.map((item) => {
    return computeDiskActionGroupDeserializer(item);
  });
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface ComputeDiskActionGroup extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: ComputeDiskActionGroupsProperties;
}

export function computeDiskActionGroupDeserializer(item: any): ComputeDiskActionGroup {
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
      : computeDiskActionGroupsPropertiesDeserializer(item["properties"]),
  };
}

/** model interface ComputeDiskActionGroupsProperties */
export interface ComputeDiskActionGroupsProperties {
  readonly provisioningState?: string;
}

export function computeDiskActionGroupsPropertiesDeserializer(
  item: any,
): ComputeDiskActionGroupsProperties {
  return {
    provisioningState: item["provisioningState"],
  };
}

/** The available API versions. */
export enum KnownComputeDiskVersions {
  /** The 2024-03-02 API version. */
  V20240302 = "2024-03-02",
  /** The 2025-01-02 API version. */
  V20250102 = "2025-01-02",
}
