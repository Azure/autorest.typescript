// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface SingletonTrackedResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SingletonTrackedResourceProperties;
}

export function singletonTrackedResourceSerializer(
  item: SingletonTrackedResource,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : singletonTrackedResourcePropertiesSerializer(item["properties"]),
  };
}

export function singletonTrackedResourceDeserializer(
  item: any,
): SingletonTrackedResource {
  return {
    tags: item["tags"],
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : singletonTrackedResourcePropertiesDeserializer(item["properties"]),
  };
}

/** Singleton Arm Resource Properties. */
export interface SingletonTrackedResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** The description of the resource. */
  description?: string;
}

export function singletonTrackedResourcePropertiesSerializer(
  item: SingletonTrackedResourceProperties,
): any {
  return { description: item["description"] };
}

export function singletonTrackedResourcePropertiesDeserializer(
  item: any,
): SingletonTrackedResourceProperties {
  return {
    provisioningState: !item["provisioningState"]
      ? item["provisioningState"]
      : provisioningStateDeserializer(item["provisioningState"]),
    description: item["description"],
  };
}

/** Alias for ProvisioningState */
export type ProvisioningState =
  | ResourceProvisioningState
  | "Provisioning"
  | "Updating"
  | "Deleting"
  | "Accepted";

export function provisioningStateSerializer(item: ProvisioningState): any {
  return item;
}

export function provisioningStateDeserializer(item: any): ProvisioningState {
  return item;
}

/** The provisioning state of a resource type. */
export enum KnownResourceProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
}

/**
 * The provisioning state of a resource type. \
 * {@link KnownResourceProvisioningState} can be used interchangeably with ResourceProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled.
 */
export type ResourceProvisioningState = string;

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(item: TrackedResource): any {
  return { tags: item["tags"], location: item["location"] };
}

export function trackedResourceDeserializer(item: any): TrackedResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    tags: item["tags"],
    location: item["location"],
  };
}

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

export function resourceSerializer(item: Resource): any {
  return item;
}

export function resourceDeserializer(item: any): Resource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
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

export function systemDataDeserializer(item: any): SystemData {
  return {
    createdBy: item["createdBy"],
    createdByType: item["createdByType"],
    createdAt: !item["createdAt"]
      ? item["createdAt"]
      : new Date(item["createdAt"]),
    lastModifiedBy: item["lastModifiedBy"],
    lastModifiedByType: item["lastModifiedByType"],
    lastModifiedAt: !item["lastModifiedAt"]
      ? item["lastModifiedAt"]
      : new Date(item["lastModifiedAt"]),
  };
}

/** The kind of entity that created the resource. */
export enum KnownCreatedByType {
  /** The entity was created by a user. */
  User = "User",
  /** The entity was created by an application. */
  Application = "Application",
  /** The entity was created by a managed identity. */
  ManagedIdentity = "ManagedIdentity",
  /** The entity was created by a key. */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnowncreatedByType} can be used interchangeably with createdByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User**: The entity was created by a user. \
 * **Application**: The entity was created by an application. \
 * **ManagedIdentity**: The entity was created by a managed identity. \
 * **Key**: The entity was created by a key.
 */
export type CreatedByType = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
  };
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

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"]
      ? item["details"]
      : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(
  result: Array<ErrorDetail>,
): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

export function errorAdditionalInfoDeserializer(
  item: any,
): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: !item["info"]
      ? item["info"]
      : _errorAdditionalInfoInfoDeserializer(item["info"]),
  };
}

/** model interface _ErrorAdditionalInfoInfo */
export interface _ErrorAdditionalInfoInfo {}

export function _errorAdditionalInfoInfoDeserializer(
  item: any,
): _ErrorAdditionalInfoInfo {
  return item;
}

export function errorAdditionalInfoArrayDeserializer(
  result: Array<ErrorAdditionalInfo>,
): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** The response of a SingletonTrackedResource list operation. */
export interface _SingletonTrackedResourceListResult {
  /** The SingletonTrackedResource items on this page */
  value: SingletonTrackedResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _singletonTrackedResourceListResultDeserializer(
  item: any,
): _SingletonTrackedResourceListResult {
  return {
    value: singletonTrackedResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function singletonTrackedResourceArraySerializer(
  result: Array<SingletonTrackedResource>,
): any[] {
  return result.map((item) => {
    return singletonTrackedResourceSerializer(item);
  });
}

export function singletonTrackedResourceArrayDeserializer(
  result: Array<SingletonTrackedResource>,
): any[] {
  return result.map((item) => {
    return singletonTrackedResourceDeserializer(item);
  });
}

/** Nested child of Top Level Tracked Resource. */
export interface NestedProxyResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: NestedProxyResourceProperties;
}

export function nestedProxyResourceSerializer(item: NestedProxyResource): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : nestedProxyResourcePropertiesSerializer(item["properties"]),
  };
}

export function nestedProxyResourceDeserializer(
  item: any,
): NestedProxyResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : nestedProxyResourcePropertiesDeserializer(item["properties"]),
  };
}

/** Nested Proxy Resource Properties. */
export interface NestedProxyResourceProperties {
  /** Provisioning State of the nested child Resource */
  readonly provisioningState?: ProvisioningState_1;
  /** Nested resource description. */
  description?: string;
}

export function nestedProxyResourcePropertiesSerializer(
  item: NestedProxyResourceProperties,
): any {
  return { description: item["description"] };
}

export function nestedProxyResourcePropertiesDeserializer(
  item: any,
): NestedProxyResourceProperties {
  return {
    provisioningState: !item["provisioningState"]
      ? item["provisioningState"]
      : provisioningStateDeserializer(item["provisioningState"]),
    description: item["description"],
  };
}

/** Alias for ProvisioningState */
export type ProvisioningState_1 =
  | ResourceProvisioningState
  | "Provisioning"
  | "Updating"
  | "Deleting"
  | "Accepted";

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(item: ProxyResource): any {
  return item;
}

export function proxyResourceDeserializer(item: any): ProxyResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** The response of a NestedProxyResource list operation. */
export interface _NestedProxyResourceListResult {
  /** The NestedProxyResource items on this page */
  value: NestedProxyResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _nestedProxyResourceListResultDeserializer(
  item: any,
): _NestedProxyResourceListResult {
  return {
    value: nestedProxyResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function nestedProxyResourceArraySerializer(
  result: Array<NestedProxyResource>,
): any[] {
  return result.map((item) => {
    return nestedProxyResourceSerializer(item);
  });
}

export function nestedProxyResourceArrayDeserializer(
  result: Array<NestedProxyResource>,
): any[] {
  return result.map((item) => {
    return nestedProxyResourceDeserializer(item);
  });
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface TopLevelTrackedResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: TopLevelTrackedResourceProperties;
}

export function topLevelTrackedResourceSerializer(
  item: TopLevelTrackedResource,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : topLevelTrackedResourcePropertiesSerializer(item["properties"]),
  };
}

export function topLevelTrackedResourceDeserializer(
  item: any,
): TopLevelTrackedResource {
  return {
    tags: item["tags"],
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : topLevelTrackedResourcePropertiesDeserializer(item["properties"]),
  };
}

/** Top Level Arm Resource Properties. */
export interface TopLevelTrackedResourceProperties {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState_2;
  /** The description of the resource. */
  description?: string;
}

export function topLevelTrackedResourcePropertiesSerializer(
  item: TopLevelTrackedResourceProperties,
): any {
  return { description: item["description"] };
}

export function topLevelTrackedResourcePropertiesDeserializer(
  item: any,
): TopLevelTrackedResourceProperties {
  return {
    provisioningState: !item["provisioningState"]
      ? item["provisioningState"]
      : provisioningStateDeserializer(item["provisioningState"]),
    description: item["description"],
  };
}

/** Alias for ProvisioningState */
export type ProvisioningState_2 =
  | ResourceProvisioningState
  | "Provisioning"
  | "Updating"
  | "Deleting"
  | "Accepted";

/** The response of a TopLevelTrackedResource list operation. */
export interface _TopLevelTrackedResourceListResult {
  /** The TopLevelTrackedResource items on this page */
  value: TopLevelTrackedResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _topLevelTrackedResourceListResultDeserializer(
  item: any,
): _TopLevelTrackedResourceListResult {
  return {
    value: topLevelTrackedResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function topLevelTrackedResourceArraySerializer(
  result: Array<TopLevelTrackedResource>,
): any[] {
  return result.map((item) => {
    return topLevelTrackedResourceSerializer(item);
  });
}

export function topLevelTrackedResourceArrayDeserializer(
  result: Array<TopLevelTrackedResource>,
): any[] {
  return result.map((item) => {
    return topLevelTrackedResourceDeserializer(item);
  });
}

/** The details of a user notification. */
export interface NotificationDetails {
  /** The notification message. */
  message: string;
  /** If true, the notification is urgent. */
  urgent: boolean;
}

export function notificationDetailsSerializer(item: NotificationDetails): any {
  return { message: item["message"], urgent: item["urgent"] };
}
