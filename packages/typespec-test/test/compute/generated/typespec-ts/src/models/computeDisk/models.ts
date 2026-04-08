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

/** Disk resource. */
export interface Disk extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: DiskProperties;
}

export function diskSerializer(item: Disk): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : diskPropertiesSerializer(item["properties"]),
  };
}

export function diskDeserializer(item: any): Disk {
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
      : diskPropertiesDeserializer(item["properties"]),
  };
}

/** Disk resource properties. */
export interface DiskProperties {
  readonly provisioningState?: ResourceProvisioningState;
}

export function diskPropertiesSerializer(_item: DiskProperties): any {
  return {};
}

export function diskPropertiesDeserializer(item: any): DiskProperties {
  return {
    provisioningState: item["provisioningState"],
  };
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface DiskAccess extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: DiskAccessProperties;
}

export function diskAccessSerializer(item: DiskAccess): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : diskAccessPropertiesSerializer(item["properties"]),
  };
}

export function diskAccessDeserializer(item: any): DiskAccess {
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
      : diskAccessPropertiesDeserializer(item["properties"]),
  };
}

/** model interface DiskAccessProperties */
export interface DiskAccessProperties {
  /** A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported. */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
  /** The disk access resource provisioning state. */
  readonly provisioningState?: string;
  /** The time when the disk access was created. */
  readonly timeCreated?: Date;
}

export function diskAccessPropertiesSerializer(_item: DiskAccessProperties): any {
  return {};
}

export function diskAccessPropertiesDeserializer(item: any): DiskAccessProperties {
  return {
    privateEndpointConnections: !item["privateEndpointConnections"]
      ? item["privateEndpointConnections"]
      : privateEndpointConnectionArrayDeserializer(item["privateEndpointConnections"]),
    provisioningState: item["provisioningState"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}
