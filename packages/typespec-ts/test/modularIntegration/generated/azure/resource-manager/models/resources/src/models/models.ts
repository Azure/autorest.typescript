// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  NestedProxyResource as NestedProxyResourceRest,
  NestedProxyResourceProperties as NestedProxyResourcePropertiesRest,
  TrackedResource as TrackedResourceRest,
  TopLevelTrackedResource as TopLevelTrackedResourceRest,
  TopLevelTrackedResourceProperties as TopLevelTrackedResourcePropertiesRest,
} from "../rest/index.js";

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
}

export function resourceSerializer(item: Resource) {
  return item as any;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(item: ProxyResource) {
  return item as any;
}

/** Nested child of Top Level Tracked Resource. */
export interface NestedProxyResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: NestedProxyResourceProperties;
}

export function nestedProxyResourceSerializer(
  item: NestedProxyResource,
): NestedProxyResourceRest {
  return {
    properties: !item.properties
      ? item.properties
      : nestedProxyResourcePropertiesSerializer(item.properties),
  };
}

/** Nested Proxy Resource Properties. */
export interface NestedProxyResourceProperties {
  /** Provisioning State of the nested child Resource */
  readonly provisioningState?: ProvisioningState;
  /** Nested resource description. */
  description?: string;
}

export function nestedProxyResourcePropertiesSerializer(
  item: NestedProxyResourceProperties,
): NestedProxyResourcePropertiesRest {
  return {
    description: item["description"],
  };
}

/** Known values of {@link ResourceProvisioningState} that the service accepts. */
export enum KnownResourceProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
}

/**
 * The provisioning state of a resource type. \
 * {@link KnownResourceProvisioningState} can be used interchangeably with ResourceProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ResourceProvisioningState = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: ErrorDetail[];
  /** The error additional info. */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

/** The response of a NestedProxyResource list operation. */
export interface _NestedProxyResourceListResult {
  /** The NestedProxyResource items on this page */
  value: NestedProxyResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(
  item: TrackedResource,
): TrackedResourceRest {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
  };
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface TopLevelTrackedResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: TopLevelTrackedResourceProperties;
}

export function topLevelTrackedResourceSerializer(
  item: TopLevelTrackedResource,
): TopLevelTrackedResourceRest {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : topLevelTrackedResourcePropertiesSerializer(item.properties),
  };
}

/** Top Level Arm Resource Properties. */
export interface TopLevelTrackedResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** The description of the resource. */
  description?: string;
}

export function topLevelTrackedResourcePropertiesSerializer(
  item: TopLevelTrackedResourceProperties,
): TopLevelTrackedResourcePropertiesRest {
  return {
    description: item["description"],
  };
}

/** The response of a TopLevelTrackedResource list operation. */
export interface _TopLevelTrackedResourceListResult {
  /** The TopLevelTrackedResource items on this page */
  value: TopLevelTrackedResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Azure API versions. */
export type Versions = "2023-12-01-preview";
/** Alias for ProvisioningState */
export type ProvisioningState =
  | ResourceProvisioningState
  | "Provisioning"
  | "Updating"
  | "Deleting"
  | "Accepted";
