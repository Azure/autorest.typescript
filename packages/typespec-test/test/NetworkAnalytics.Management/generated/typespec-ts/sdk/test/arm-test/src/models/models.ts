// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { areAllPropsUndefined } from "../static-helpers/serialization/check-prop-undefined.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _operationListResultDeserializer(item: any): _OperationListResult {
  return {
    value: operationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function operationArrayDeserializer(result: Array<Operation>): any[] {
  return result.map((item) => {
    return operationDeserializer(item);
  });
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  readonly actionType?: ActionType;
}

export function operationDeserializer(item: any): Operation {
  return {
    name: item["name"],
    isDataAction: item["isDataAction"],
    display: !item["display"] ? item["display"] : operationDisplayDeserializer(item["display"]),
    origin: item["origin"],
    actionType: item["actionType"],
  };
}

/** Localized display information for and operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  readonly provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  readonly resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  readonly operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  readonly description?: string;
}

export function operationDisplayDeserializer(item: any): OperationDisplay {
  return {
    provider: item["provider"],
    resource: item["resource"],
    operation: item["operation"],
    description: item["description"],
  };
}

/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
export enum KnownOrigin {
  /** Indicates the operation is initiated by a user. */
  User = "user",
  /** Indicates the operation is initiated by a system. */
  System = "system",
  /** Indicates the operation is initiated by a user or system. */
  UserSystem = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user**: Indicates the operation is initiated by a user. \
 * **system**: Indicates the operation is initiated by a system. \
 * **user,system**: Indicates the operation is initiated by a user or system.
 */
export type Origin = string;

/** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
export enum KnownActionType {
  /** Actions are for internal-only APIs. */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**: Actions are for internal-only APIs.
 */
export type ActionType = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: !item["error"] ? item["error"] : errorDetailDeserializer(item["error"]),
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
    details: !item["details"] ? item["details"] : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(result: Array<ErrorDetail>): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(result: Array<ErrorAdditionalInfo>): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: any;
}

export function errorAdditionalInfoDeserializer(item: any): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: item["info"],
  };
}

/** The data catalog resource. */
export interface DataProductsCatalog extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DataProductsCatalogProperties;
}

export function dataProductsCatalogDeserializer(item: any): DataProductsCatalog {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : dataProductsCatalogPropertiesDeserializer(item["properties"]),
  };
}

/** Details for data catalog properties. */
export interface DataProductsCatalogProperties {
  /** The data catalog provisioning state. */
  readonly provisioningState?: ProvisioningState;
  /** The data product publisher information. */
  publishers: PublisherInformation[];
}

export function dataProductsCatalogPropertiesDeserializer(
  item: any,
): DataProductsCatalogProperties {
  return {
    provisioningState: item["provisioningState"],
    publishers: publisherInformationArrayDeserializer(item["publishers"]),
  };
}

/** The status of the current operation. */
export enum KnownProvisioningState {
  /** Represents a succeeded operation. */
  Succeeded = "Succeeded",
  /** Represents a failed operation. */
  Failed = "Failed",
  /** Represents a canceled operation. */
  Canceled = "Canceled",
  /** Represents a pending operation. */
  Provisioning = "Provisioning",
  /** Represents a pending operation. */
  Updating = "Updating",
  /** Represents an operation under deletion. */
  Deleting = "Deleting",
  /** Represents an accepted operation. */
  Accepted = "Accepted",
}

/**
 * The status of the current operation. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Represents a succeeded operation. \
 * **Failed**: Represents a failed operation. \
 * **Canceled**: Represents a canceled operation. \
 * **Provisioning**: Represents a pending operation. \
 * **Updating**: Represents a pending operation. \
 * **Deleting**: Represents an operation under deletion. \
 * **Accepted**: Represents an accepted operation.
 */
export type ProvisioningState = string;

export function publisherInformationArrayDeserializer(result: Array<PublisherInformation>): any[] {
  return result.map((item) => {
    return publisherInformationDeserializer(item);
  });
}

/** Details for Publisher Information. */
export interface PublisherInformation {
  /** Name of the publisher. */
  publisherName: string;
  /** Data product information. */
  dataProducts: DataProductInformation[];
}

export function publisherInformationDeserializer(item: any): PublisherInformation {
  return {
    publisherName: item["publisherName"],
    dataProducts: dataProductInformationArrayDeserializer(item["dataProducts"]),
  };
}

export function dataProductInformationArrayDeserializer(
  result: Array<DataProductInformation>,
): any[] {
  return result.map((item) => {
    return dataProductInformationDeserializer(item);
  });
}

/** Data Product Information */
export interface DataProductInformation {
  /** Name of data product. */
  dataProductName: string;
  /** Description about data product. */
  description: string;
  /** Version information of data product. */
  dataProductVersions: DataProductVersion[];
}

export function dataProductInformationDeserializer(item: any): DataProductInformation {
  return {
    dataProductName: item["dataProductName"],
    description: item["description"],
    dataProductVersions: dataProductVersionArrayDeserializer(item["dataProductVersions"]),
  };
}

export function dataProductVersionArrayDeserializer(result: Array<DataProductVersion>): any[] {
  return result.map((item) => {
    return dataProductVersionDeserializer(item);
  });
}

/** Data Product Version. */
export interface DataProductVersion {
  /** Version of data product */
  version: string;
}

export function dataProductVersionDeserializer(item: any): DataProductVersion {
  return {
    version: item["version"],
  };
}

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
    createdAt: !item["createdAt"] ? item["createdAt"] : new Date(item["createdAt"]),
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
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User**: The entity was created by a user. \
 * **Application**: The entity was created by an application. \
 * **ManagedIdentity**: The entity was created by a managed identity. \
 * **Key**: The entity was created by a key.
 */
export type CreatedByType = string;

/** The response of a DataProductsCatalog list operation. */
export interface _DataProductsCatalogListResult {
  /** The DataProductsCatalog items on this page */
  value: DataProductsCatalog[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _dataProductsCatalogListResultDeserializer(
  item: any,
): _DataProductsCatalogListResult {
  return {
    value: dataProductsCatalogArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function dataProductsCatalogArrayDeserializer(result: Array<DataProductsCatalog>): any[] {
  return result.map((item) => {
    return dataProductsCatalogDeserializer(item);
  });
}

/** The data type resource. */
export interface DataType extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DataTypeProperties;
  foo: DataProductNetworkAclsRequired;
}

export function dataTypeSerializer(item: DataType): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : dataTypePropertiesSerializer(item["properties"]),
    foo: dataProductNetworkAclsRequiredSerializer(item["foo"]),
  };
}

export function dataTypeDeserializer(item: any): DataType {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : dataTypePropertiesDeserializer(item["properties"]),
    foo: dataProductNetworkAclsRequiredDeserializer(item["foo"]),
  };
}

/** The data type properties */
export interface DataTypeProperties {
  /** Latest provisioning state  of data product. */
  readonly provisioningState?: ProvisioningState;
  /** State of data type. */
  state?: DataTypeState;
  /** Reason for the state of data type. */
  readonly stateReason?: string;
  /** Field for storage output retention in days. */
  storageOutputRetention?: number;
  /** Field for database cache retention in days. */
  databaseCacheRetention?: number;
  /** Field for database data retention in days. */
  databaseRetention?: number;
  /** Url for data visualization. */
  readonly visualizationUrl?: string;
}

export function dataTypePropertiesSerializer(item: DataTypeProperties): any {
  return {
    state: item["state"],
    storageOutputRetention: item["storageOutputRetention"],
    databaseCacheRetention: item["databaseCacheRetention"],
    databaseRetention: item["databaseRetention"],
  };
}

export function dataTypePropertiesDeserializer(item: any): DataTypeProperties {
  return {
    provisioningState: item["provisioningState"],
    state: item["state"],
    stateReason: item["stateReason"],
    storageOutputRetention: item["storageOutputRetention"],
    databaseCacheRetention: item["databaseCacheRetention"],
    databaseRetention: item["databaseRetention"],
    visualizationUrl: item["visualizationUrl"],
  };
}

/** The data type state */
export enum KnownDataTypeState {
  /** Field to specify stopped state. */
  Stopped = "Stopped",
  /** Field to specify running state. */
  Running = "Running",
}

/**
 * The data type state \
 * {@link KnownDataTypeState} can be used interchangeably with DataTypeState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Stopped**: Field to specify stopped state. \
 * **Running**: Field to specify running state.
 */
export type DataTypeState = string;

/** Data Product Network rule set */
export interface DataProductNetworkAclsRequired {
  /** Virtual Network Rule */
  virtualNetworkRule: VirtualNetworkRule[];
  /** IP rule with specific IP or IP range in CIDR format. */
  ipRules: IPRules[];
  /** The list of query ips in the format of CIDR allowed to connect to query/visualization endpoint. */
  allowedQueryIpRangeList: string[];
  /** Default Action */
  defaultAction: DefaultAction;
  baseRequired: string;
  requiredProp: EncryptionKeyDetails[];
  optionalProp?: EncryptionKeyDetails[];
}

export function dataProductNetworkAclsRequiredSerializer(
  item: DataProductNetworkAclsRequired,
): any {
  return {
    virtualNetworkRule: virtualNetworkRuleArraySerializer(item["virtualNetworkRule"]),
    ipRules: ipRulesArraySerializer(item["ipRules"]),
    allowedQueryIpRangeList: item["allowedQueryIpRangeList"].map((p: any) => {
      return p;
    }),
    defaultAction: item["defaultAction"],
    baseRequired: item["baseRequired"],
    properties: _dataProductNetworkAclsRequiredPropertiesSerializer(item),
  };
}

export function dataProductNetworkAclsRequiredDeserializer(
  item: any,
): DataProductNetworkAclsRequired {
  return {
    virtualNetworkRule: virtualNetworkRuleArrayDeserializer(item["virtualNetworkRule"]),
    ipRules: ipRulesArrayDeserializer(item["ipRules"]),
    allowedQueryIpRangeList: item["allowedQueryIpRangeList"].map((p: any) => {
      return p;
    }),
    defaultAction: item["defaultAction"],
    baseRequired: item["baseRequired"],
    ..._dataProductNetworkAclsRequiredPropertiesDeserializer(item["properties"]),
  };
}

export function virtualNetworkRuleArraySerializer(result: Array<VirtualNetworkRule>): any[] {
  return result.map((item) => {
    return virtualNetworkRuleSerializer(item);
  });
}

export function virtualNetworkRuleArrayDeserializer(result: Array<VirtualNetworkRule>): any[] {
  return result.map((item) => {
    return virtualNetworkRuleDeserializer(item);
  });
}

/** Virtual Network Rule */
export interface VirtualNetworkRule {
  /** Resource ID of a subnet */
  id: string;
  /** The action of virtual network rule. */
  action?: string;
  /** Gets the state of virtual network rule. */
  state?: string;
}

export function virtualNetworkRuleSerializer(item: VirtualNetworkRule): any {
  return { id: item["id"], action: item["action"], state: item["state"] };
}

export function virtualNetworkRuleDeserializer(item: any): VirtualNetworkRule {
  return {
    id: item["id"],
    action: item["action"],
    state: item["state"],
  };
}

export function ipRulesArraySerializer(result: Array<IPRules>): any[] {
  return result.map((item) => {
    return ipRulesSerializer(item);
  });
}

export function ipRulesArrayDeserializer(result: Array<IPRules>): any[] {
  return result.map((item) => {
    return ipRulesDeserializer(item);
  });
}

/** IP rule with specific IP or IP range in CIDR format. */
export interface IPRules {
  /** IP Rules Value */
  value?: string;
  /** The action of virtual network rule. */
  action: string;
}

export function ipRulesSerializer(item: IPRules): any {
  return { value: item["value"], action: item["action"] };
}

export function ipRulesDeserializer(item: any): IPRules {
  return {
    value: item["value"],
    action: item["action"],
  };
}

/** Specifies the default action of allow or deny when no other rules match. */
export enum KnownDefaultAction {
  /** Represents allow action. */
  Allow = "Allow",
  /** Represents deny action. */
  Deny = "Deny",
}

/**
 * Specifies the default action of allow or deny when no other rules match. \
 * {@link KnownDefaultAction} can be used interchangeably with DefaultAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow**: Represents allow action. \
 * **Deny**: Represents deny action.
 */
export type DefaultAction = string;

/** The data product properties. */
export interface DataProductProperties {
  requiredProp: EncryptionKeyDetails[];
  optionalProp?: EncryptionKeyDetails[];
}

export function dataProductPropertiesSerializer(item: DataProductProperties): any {
  return {
    requiredProp: encryptionKeyDetailsArraySerializer(item["requiredProp"]),
    optionalProp: !item["optionalProp"]
      ? item["optionalProp"]
      : encryptionKeyDetailsArraySerializer(item["optionalProp"]),
  };
}

export function dataProductPropertiesDeserializer(item: any): DataProductProperties {
  return {
    requiredProp: encryptionKeyDetailsArrayDeserializer(item["requiredProp"]),
    optionalProp: !item["optionalProp"]
      ? item["optionalProp"]
      : encryptionKeyDetailsArrayDeserializer(item["optionalProp"]),
  };
}

export function encryptionKeyDetailsArraySerializer(result: Array<EncryptionKeyDetails>): any[] {
  return result.map((item) => {
    return encryptionKeyDetailsSerializer(item);
  });
}

export function encryptionKeyDetailsArrayDeserializer(result: Array<EncryptionKeyDetails>): any[] {
  return result.map((item) => {
    return encryptionKeyDetailsDeserializer(item);
  });
}

/** Encryption key details. */
export interface EncryptionKeyDetails {
  /** The Uri of the key vault. */
  keyVaultUri: string;
  /** The name of the key vault key. */
  keyName: string;
  /** The version of the key vault key. */
  keyVersion: string;
}

export function encryptionKeyDetailsSerializer(item: EncryptionKeyDetails): any {
  return {
    keyVaultUri: item["keyVaultUri"],
    keyName: item["keyName"],
    keyVersion: item["keyVersion"],
  };
}

export function encryptionKeyDetailsDeserializer(item: any): EncryptionKeyDetails {
  return {
    keyVaultUri: item["keyVaultUri"],
    keyName: item["keyName"],
    keyVersion: item["keyVersion"],
  };
}

/** The type used for update operations of the DataType. */
export interface DataTypeUpdate {
  foo?: DataProductNetworkAclsRequired;
  /** The resource-specific properties for this resource. */
  properties?: DataTypeUpdateProperties;
}

export function dataTypeUpdateSerializer(item: DataTypeUpdate): any {
  return {
    foo: !item["foo"] ? item["foo"] : dataProductNetworkAclsRequiredSerializer(item["foo"]),
    properties: !item["properties"]
      ? item["properties"]
      : dataTypeUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the DataType. */
export interface DataTypeUpdateProperties {
  /** State of data type. */
  state?: DataTypeState;
  /** Field for storage output retention in days. */
  storageOutputRetention?: number;
  /** Field for database cache retention in days. */
  databaseCacheRetention?: number;
  /** Field for database data retention in days. */
  databaseRetention?: number;
}

export function dataTypeUpdatePropertiesSerializer(item: DataTypeUpdateProperties): any {
  return {
    state: item["state"],
    storageOutputRetention: item["storageOutputRetention"],
    databaseCacheRetention: item["databaseCacheRetention"],
    databaseRetention: item["databaseRetention"],
  };
}

/** model interface _DeleteDataRequest */
export interface _DeleteDataRequest {}

export function _deleteDataRequestSerializer(item: _DeleteDataRequest): any {
  return item;
}

/** The details for container sas creation. */
export interface ContainerSaS {
  /** Sas token start timestamp. */
  startTimeStamp: Date;
  /** Sas token expiry timestamp. */
  expiryTimeStamp: Date;
  /** Ip Address */
  ipAddress: string;
}

export function containerSaSSerializer(item: ContainerSaS): any {
  return {
    startTimeStamp: item["startTimeStamp"].toISOString(),
    expiryTimeStamp: item["expiryTimeStamp"].toISOString(),
    ipAddress: item["ipAddress"],
  };
}

/** Details of storage container account sas token . */
export interface ContainerSasToken {
  /** Field to specify storage container sas token. */
  storageContainerSasToken: string;
}

export function containerSasTokenDeserializer(item: any): ContainerSasToken {
  return {
    storageContainerSasToken: item["storageContainerSasToken"],
  };
}

/** The response of a DataType list operation. */
export interface _DataTypeListResult {
  /** The DataType items on this page */
  value: DataType[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _dataTypeListResultDeserializer(item: any): _DataTypeListResult {
  return {
    value: dataTypeArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function dataTypeArraySerializer(result: Array<DataType>): any[] {
  return result.map((item) => {
    return dataTypeSerializer(item);
  });
}

export function dataTypeArrayDeserializer(result: Array<DataType>): any[] {
  return result.map((item) => {
    return dataTypeDeserializer(item);
  });
}

/** The data product resource. */
export interface DataProductOptional extends TrackedResource {
  baseRequired: string;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityV4;
  requiredProp?: EncryptionKeyDetails[];
  optionalProp?: EncryptionKeyDetails[];
}

export function dataProductOptionalSerializer(item: DataProductOptional): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, ["requiredProp", "optionalProp"])
      ? undefined
      : _dataProductOptionalPropertiesSerializer(item),
    baseRequired: item["baseRequired"],
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityV4Serializer(item["identity"]),
  };
}

export function dataProductOptionalDeserializer(item: any): DataProductOptional {
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
    ...(!item["properties"]
      ? item["properties"]
      : _dataProductOptionalPropertiesDeserializer(item["properties"])),
    baseRequired: item["baseRequired"],
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityV4Deserializer(item["identity"]),
  };
}

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentityV4 {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

export function managedServiceIdentityV4Serializer(item: ManagedServiceIdentityV4): any {
  return {
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityRecordSerializer(item["userAssignedIdentities"]),
  };
}

export function managedServiceIdentityV4Deserializer(item: any): ManagedServiceIdentityV4 {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityRecordDeserializer(item["userAssignedIdentities"]),
  };
}

/** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
export enum KnownManagedServiceIdentityType {
  /** No managed identity. */
  None = "None",
  /** System assigned managed identity. */
  SystemAssigned = "SystemAssigned",
  /** User assigned managed identity. */
  UserAssigned = "UserAssigned",
  /** System and user assigned managed identity. */
  SystemAndUserAssigned = "SystemAssigned, UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No managed identity. \
 * **SystemAssigned**: System assigned managed identity. \
 * **UserAssigned**: User assigned managed identity. \
 * **SystemAssigned, UserAssigned**: System and user assigned managed identity.
 */
export type ManagedServiceIdentityType = string;

export function userAssignedIdentityRecordSerializer(
  item: Record<string, UserAssignedIdentity>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : userAssignedIdentitySerializer(item[key]);
  });
  return result;
}

export function userAssignedIdentityRecordDeserializer(
  item: Record<string, any>,
): Record<string, UserAssignedIdentity> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : userAssignedIdentityDeserializer(item[key]);
  });
  return result;
}

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The principal ID of the assigned identity. */
  readonly principalId?: string;
  /** The client ID of the assigned identity. */
  readonly clientId?: string;
}

export function userAssignedIdentitySerializer(item: UserAssignedIdentity): any {
  return item;
}

export function userAssignedIdentityDeserializer(item: any): UserAssignedIdentity {
  return {
    principalId: item["principalId"],
    clientId: item["clientId"],
  };
}

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
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
  };
}

/** The type used for update operations of the DataProductOptional. */
export interface DataProductOptionalUpdate {
  baseRequired?: string;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityV4;
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: DataProductOptionalUpdateProperties;
}

export function dataProductOptionalUpdateSerializer(item: DataProductOptionalUpdate): any {
  return {
    baseRequired: item["baseRequired"],
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityV4Serializer(item["identity"]),
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : dataProductOptionalUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the DataProductOptional. */
export interface DataProductOptionalUpdateProperties {
  requiredProp?: EncryptionKeyDetails[];
  optionalProp?: EncryptionKeyDetails[];
}

export function dataProductOptionalUpdatePropertiesSerializer(
  item: DataProductOptionalUpdateProperties,
): any {
  return {
    requiredProp: !item["requiredProp"]
      ? item["requiredProp"]
      : encryptionKeyDetailsArraySerializer(item["requiredProp"]),
    optionalProp: !item["optionalProp"]
      ? item["optionalProp"]
      : encryptionKeyDetailsArraySerializer(item["optionalProp"]),
  };
}

/** The details for storage account sas creation. */
export interface AccountSas {
  /** Sas token start timestamp. */
  startTimeStamp: Date;
  /** Sas token expiry timestamp. */
  expiryTimeStamp: Date;
  /** Ip Address */
  ipAddress: string;
}

export function accountSasSerializer(item: AccountSas): any {
  return {
    startTimeStamp: item["startTimeStamp"].toISOString(),
    expiryTimeStamp: item["expiryTimeStamp"].toISOString(),
    ipAddress: item["ipAddress"],
  };
}

/** Details of storage account sas token . */
export interface AccountSasToken {
  /** Field to specify storage account sas token. */
  storageAccountSasToken: string;
}

export function accountSasTokenDeserializer(item: any): AccountSasToken {
  return {
    storageAccountSasToken: item["storageAccountSasToken"],
  };
}

/** Details for KeyVault. */
export interface KeyVaultInfo {
  /** key vault url. */
  keyVaultUrl: string;
}

export function keyVaultInfoSerializer(item: KeyVaultInfo): any {
  return { keyVaultUrl: item["keyVaultUrl"] };
}

/** The details for role assignment common properties. */
export interface RoleAssignmentCommonProperties {
  /** Role Id of the Built-In Role */
  roleId: string;
  /** Object ID of the AAD principal or security-group. */
  principalId: string;
  /** User name. */
  userName: string;
  /** Data Type Scope at which the role assignment is created. */
  dataTypeScope: string[];
  /** Type of the principal Id: User, Group or ServicePrincipal */
  principalType: string;
  /** Data Product role to be assigned to a user. */
  role: DataProductUserRole;
}

export function roleAssignmentCommonPropertiesSerializer(
  item: RoleAssignmentCommonProperties,
): any {
  return {
    roleId: item["roleId"],
    principalId: item["principalId"],
    userName: item["userName"],
    dataTypeScope: item["dataTypeScope"].map((p: any) => {
      return p;
    }),
    principalType: item["principalType"],
    role: item["role"],
  };
}

/** The data type state */
export enum KnownDataProductUserRole {
  /** Field to specify user of type Reader. */
  Reader = "Reader",
  /**
   * Field to specify user of type SensitiveReader.
   * This user has privileged access to read sensitive data of a data product.
   */
  SensitiveReader = "SensitiveReader",
}

/**
 * The data type state \
 * {@link KnownDataProductUserRole} can be used interchangeably with DataProductUserRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Reader**: Field to specify user of type Reader. \
 * **SensitiveReader**: Field to specify user of type SensitiveReader.
 * This user has privileged access to read sensitive data of a data product.
 */
export type DataProductUserRole = string;

/** The details for role assignment response. */
export interface RoleAssignmentDetail {
  /** Role Id of the Built-In Role */
  roleId: string;
  /** Object ID of the AAD principal or security-group. */
  principalId: string;
  /** User name. */
  userName: string;
  /** Data Type Scope at which the role assignment is created. */
  dataTypeScope: string[];
  /** Type of the principal Id: User, Group or ServicePrincipal */
  principalType: string;
  /** Data Product role to be assigned to a user. */
  role: DataProductUserRole;
  /** Id of role assignment request */
  roleAssignmentId: string;
}

export function roleAssignmentDetailSerializer(item: RoleAssignmentDetail): any {
  return {
    roleId: item["roleId"],
    principalId: item["principalId"],
    userName: item["userName"],
    dataTypeScope: item["dataTypeScope"].map((p: any) => {
      return p;
    }),
    principalType: item["principalType"],
    role: item["role"],
    roleAssignmentId: item["roleAssignmentId"],
  };
}

export function roleAssignmentDetailDeserializer(item: any): RoleAssignmentDetail {
  return {
    roleId: item["roleId"],
    principalId: item["principalId"],
    userName: item["userName"],
    dataTypeScope: item["dataTypeScope"].map((p: any) => {
      return p;
    }),
    principalType: item["principalType"],
    role: item["role"],
    roleAssignmentId: item["roleAssignmentId"],
  };
}

/** model interface _ListRolesAssignmentsRequest */
export interface _ListRolesAssignmentsRequest {}

export function _listRolesAssignmentsRequestSerializer(item: _ListRolesAssignmentsRequest): any {
  return item;
}

/** list role assignments. */
export interface ListRoleAssignments {
  /** Count of role assignments. */
  count: number;
  /** list of role assignments */
  roleAssignmentResponse: RoleAssignmentDetail[];
}

export function listRoleAssignmentsDeserializer(item: any): ListRoleAssignments {
  return {
    count: item["count"],
    roleAssignmentResponse: roleAssignmentDetailArrayDeserializer(item["roleAssignmentResponse"]),
  };
}

export function roleAssignmentDetailArraySerializer(result: Array<RoleAssignmentDetail>): any[] {
  return result.map((item) => {
    return roleAssignmentDetailSerializer(item);
  });
}

export function roleAssignmentDetailArrayDeserializer(result: Array<RoleAssignmentDetail>): any[] {
  return result.map((item) => {
    return roleAssignmentDetailDeserializer(item);
  });
}

/** The response of a DataProductOptional list operation. */
export interface _DataProductOptionalListResult {
  /** The DataProductOptional items on this page */
  value: DataProductOptional[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _dataProductOptionalListResultDeserializer(
  item: any,
): _DataProductOptionalListResult {
  return {
    value: dataProductOptionalArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function dataProductOptionalArraySerializer(result: Array<DataProductOptional>): any[] {
  return result.map((item) => {
    return dataProductOptionalSerializer(item);
  });
}

export function dataProductOptionalArrayDeserializer(result: Array<DataProductOptional>): any[] {
  return result.map((item) => {
    return dataProductOptionalDeserializer(item);
  });
}

/** The available API versions for the Microsoft.NetworkAnalytics RP. */
export enum KnownVersions {
  /** The 2023-11-15 stable version. */
  V20231115 = "2023-11-15",
}

export function _dataProductNetworkAclsRequiredPropertiesSerializer(
  item: DataProductNetworkAclsRequired,
): any {
  return {
    requiredProp: encryptionKeyDetailsArraySerializer(item["requiredProp"]),
    optionalProp: !item["optionalProp"]
      ? item["optionalProp"]
      : encryptionKeyDetailsArraySerializer(item["optionalProp"]),
  };
}

export function _dataProductNetworkAclsRequiredPropertiesDeserializer(item: any) {
  return {
    requiredProp: encryptionKeyDetailsArrayDeserializer(item["requiredProp"]),
    optionalProp: !item["optionalProp"]
      ? item["optionalProp"]
      : encryptionKeyDetailsArrayDeserializer(item["optionalProp"]),
  };
}

export function _dataProductOptionalPropertiesSerializer(item: DataProductOptional): any {
  return {
    requiredProp: !item["requiredProp"]
      ? item["requiredProp"]
      : encryptionKeyDetailsArraySerializer(item["requiredProp"]),
    optionalProp: !item["optionalProp"]
      ? item["optionalProp"]
      : encryptionKeyDetailsArraySerializer(item["optionalProp"]),
  };
}

export function _dataProductOptionalPropertiesDeserializer(item: any) {
  return {
    requiredProp: !item["requiredProp"]
      ? item["requiredProp"]
      : encryptionKeyDetailsArrayDeserializer(item["requiredProp"]),
    optionalProp: !item["optionalProp"]
      ? item["optionalProp"]
      : encryptionKeyDetailsArrayDeserializer(item["optionalProp"]),
  };
}
