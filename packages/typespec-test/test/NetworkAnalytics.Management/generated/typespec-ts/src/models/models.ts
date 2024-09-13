// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";

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

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(
  item: TrackedResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
  };
}

/** The data product resource. */
export interface DataProduct extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: DataProductProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityV4;
}

export function dataProductSerializer(
  item: DataProduct,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : dataProductPropertiesSerializer(item.properties),
    identity: !item.identity
      ? item.identity
      : managedServiceIdentityV4Serializer(item.identity),
  };
}

/** The data product properties. */
export interface DataProductProperties {
  /** The resource GUID property of the data product resource. */
  readonly resourceGuid?: string;
  /** Latest provisioning state  of data product. */
  readonly provisioningState?: ProvisioningState;
  /** Data product publisher name. */
  publisher: string;
  /** Product name of data product. */
  product: string;
  /** Major version of data product. */
  majorVersion: string;
  /** List of name or email associated with data product resource deployment. */
  owners?: string[];
  /** Flag to enable or disable redundancy for data product. */
  redundancy?: ControlState;
  /** Purview account url for data product to connect to. */
  purviewAccount?: string;
  /** Purview collection url for data product to connect to. */
  purviewCollection?: string;
  /** Flag to enable or disable private link for data product resource. */
  privateLinksEnabled?: ControlState;
  /** Flag to enable or disable public access of data product resource. */
  publicNetworkAccess?: ControlState;
  /** Flag to enable customer managed key encryption for data product. */
  customerManagedKeyEncryptionEnabled?: ControlState;
  /** Customer managed encryption key details for data product. */
  customerEncryptionKey?: EncryptionKeyDetails;
  /** Network rule set for data product. */
  networkacls?: DataProductNetworkAcls;
  /** Managed resource group configuration. */
  managedResourceGroupConfiguration?: ManagedResourceGroupConfiguration;
  /** List of available minor versions of the data product resource. */
  readonly availableMinorVersions?: string[];
  /** Current configured minor version of the data product resource. */
  currentMinorVersion?: string;
  /** Documentation link for the data product based on definition file. */
  readonly documentation?: string;
  /** Resource links which exposed to the customer to query the data. */
  readonly consumptionEndpoints?: ConsumptionEndpointsProperties;
  /** Key vault url. */
  readonly keyVaultUrl?: string;
}

export function dataProductPropertiesSerializer(
  item: DataProductProperties,
): Record<string, unknown> {
  return {
    publisher: item["publisher"],
    product: item["product"],
    majorVersion: item["majorVersion"],
    owners: item["owners"],
    redundancy: item["redundancy"],
    purviewAccount: item["purviewAccount"],
    purviewCollection: item["purviewCollection"],
    privateLinksEnabled: item["privateLinksEnabled"],
    publicNetworkAccess: item["publicNetworkAccess"],
    customerManagedKeyEncryptionEnabled:
      item["customerManagedKeyEncryptionEnabled"],
    customerEncryptionKey: !item.customerEncryptionKey
      ? item.customerEncryptionKey
      : encryptionKeyDetailsSerializer(item.customerEncryptionKey),
    networkacls: !item.networkacls
      ? item.networkacls
      : dataProductNetworkAclsSerializer(item.networkacls),
    managedResourceGroupConfiguration: !item.managedResourceGroupConfiguration
      ? item.managedResourceGroupConfiguration
      : managedResourceGroupConfigurationSerializer(
          item.managedResourceGroupConfiguration,
        ),
    currentMinorVersion: item["currentMinorVersion"],
  };
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Accepted */
  Accepted = "Accepted",
}

/**
 * The status of the current operation. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Provisioning** \
 * **Updating** \
 * **Deleting** \
 * **Accepted**
 */
export type ProvisioningState = string;

/** Known values of {@link ControlState} that the service accepts. */
export enum KnownControlState {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * The data type state \
 * {@link KnownControlState} can be used interchangeably with ControlState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type ControlState = string;

/** Encryption key details. */
export interface EncryptionKeyDetails {
  /** The Uri of the key vault. */
  keyVaultUri: string;
  /** The name of the key vault key. */
  keyName: string;
  /** The version of the key vault key. */
  keyVersion: string;
}

export function encryptionKeyDetailsSerializer(
  item: EncryptionKeyDetails,
): Record<string, unknown> {
  return {
    keyVaultUri: item["keyVaultUri"],
    keyName: item["keyName"],
    keyVersion: item["keyVersion"],
  };
}

/** Data Product Network rule set */
export interface DataProductNetworkAcls {
  /** Virtual Network Rule */
  virtualNetworkRule: VirtualNetworkRule[];
  /** IP rule with specific IP or IP range in CIDR format. */
  ipRules: IPRules[];
  /** The list of query ips in the format of CIDR allowed to connect to query/visualization endpoint. */
  allowedQueryIpRangeList: string[];
  /** Default Action */
  defaultAction: DefaultAction;
}

export function dataProductNetworkAclsSerializer(
  item: DataProductNetworkAcls,
): Record<string, unknown> {
  return {
    virtualNetworkRule: item["virtualNetworkRule"].map(
      virtualNetworkRuleSerializer,
    ),
    ipRules: item["ipRules"].map(iPRulesSerializer),
    allowedQueryIpRangeList: item["allowedQueryIpRangeList"],
    defaultAction: item["defaultAction"],
  };
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

export function virtualNetworkRuleSerializer(
  item: VirtualNetworkRule,
): Record<string, unknown> {
  return {
    id: item["id"],
    action: item["action"],
    state: item["state"],
  };
}

/** IP rule with specific IP or IP range in CIDR format. */
export interface IPRules {
  /** IP Rules Value */
  value?: string;
  /** The action of virtual network rule. */
  action: string;
}

export function iPRulesSerializer(item: IPRules): Record<string, unknown> {
  return {
    value: item["value"],
    action: item["action"],
  };
}

/** Known values of {@link DefaultAction} that the service accepts. */
export enum KnownDefaultAction {
  /** Allow */
  Allow = "Allow",
  /** Deny */
  Deny = "Deny",
}

/**
 * Specifies the default action of allow or deny when no other rules match. \
 * {@link KnownDefaultAction} can be used interchangeably with DefaultAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export type DefaultAction = string;

/** ManagedResourceGroup related properties */
export interface ManagedResourceGroupConfiguration {
  /** Name of managed resource group */
  name: string;
  /** Managed Resource Group location */
  location: string;
}

export function managedResourceGroupConfigurationSerializer(
  item: ManagedResourceGroupConfiguration,
): Record<string, unknown> {
  return {
    name: item["name"],
    location: item["location"],
  };
}

/** Details of Consumption Properties */
export interface ConsumptionEndpointsProperties {
  /** Ingestion url to upload the data. */
  readonly ingestionUrl?: string;
  /** Resource Id of ingestion endpoint. */
  readonly ingestionResourceId?: string;
  /** Url to consume file type. */
  readonly fileAccessUrl?: string;
  /** Resource Id of file access endpoint. */
  readonly fileAccessResourceId?: string;
  /** Url to consume the processed data. */
  readonly queryUrl?: string;
  /** Resource Id of query endpoint. */
  readonly queryResourceId?: string;
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

export function managedServiceIdentityV4Serializer(
  item: ManagedServiceIdentityV4,
): Record<string, unknown> {
  return {
    type: item["type"],
    userAssignedIdentities: !item.userAssignedIdentities
      ? item.userAssignedIdentities
      : (serializeRecord(
          item.userAssignedIdentities as any,
          userAssignedIdentitySerializer,
        ) as any),
  };
}

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export enum KnownManagedServiceIdentityType {
  /** None */
  None = "None",
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
  /** SystemAndUserAssigned */
  SystemAndUserAssigned = "SystemAssigned, UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned, UserAssigned**
 */
export type ManagedServiceIdentityType = string;

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The principal ID of the assigned identity. */
  readonly principalId?: string;
  /** The client ID of the assigned identity. */
  readonly clientId?: string;
}

export function userAssignedIdentitySerializer(item: UserAssignedIdentity) {
  return item as any;
}

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

/** The type used for update operations of the DataProduct. */
export interface DataProductUpdate {
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityV4;
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: DataProductUpdateProperties;
}

export function dataProductUpdateSerializer(
  item: DataProductUpdate,
): Record<string, unknown> {
  return {
    identity: !item.identity
      ? item.identity
      : managedServiceIdentityV4Serializer(item.identity),
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : dataProductUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the DataProduct. */
export interface DataProductUpdateProperties {
  /** List of name or email associated with data product resource deployment. */
  owners?: string[];
  /** Purview account url for data product to connect to. */
  purviewAccount?: string;
  /** Purview collection url for data product to connect to. */
  purviewCollection?: string;
  /** Flag to enable or disable private link for data product resource. */
  privateLinksEnabled?: ControlState;
  /** Current configured minor version of the data product resource. */
  currentMinorVersion?: string;
}

export function dataProductUpdatePropertiesSerializer(
  item: DataProductUpdateProperties,
): Record<string, unknown> {
  return {
    owners: item["owners"],
    purviewAccount: item["purviewAccount"],
    purviewCollection: item["purviewCollection"],
    privateLinksEnabled: item["privateLinksEnabled"],
    currentMinorVersion: item["currentMinorVersion"],
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

export function accountSasSerializer(
  item: AccountSas,
): Record<string, unknown> {
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

/** Details for KeyVault. */
export interface KeyVaultInfo {
  /** key vault url. */
  keyVaultUrl: string;
}

export function keyVaultInfoSerializer(
  item: KeyVaultInfo,
): Record<string, unknown> {
  return {
    keyVaultUrl: item["keyVaultUrl"],
  };
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
): Record<string, unknown> {
  return {
    roleId: item["roleId"],
    principalId: item["principalId"],
    userName: item["userName"],
    dataTypeScope: item["dataTypeScope"],
    principalType: item["principalType"],
    role: item["role"],
  };
}

/** Known values of {@link DataProductUserRole} that the service accepts. */
export enum KnownDataProductUserRole {
  /** Reader */
  Reader = "Reader",
  /** SensitiveReader */
  SensitiveReader = "SensitiveReader",
}

/**
 * The data type state \
 * {@link KnownDataProductUserRole} can be used interchangeably with DataProductUserRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Reader** \
 * **SensitiveReader**
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

export function roleAssignmentDetailSerializer(
  item: RoleAssignmentDetail,
): Record<string, unknown> {
  return {
    roleId: item["roleId"],
    principalId: item["principalId"],
    userName: item["userName"],
    dataTypeScope: item["dataTypeScope"],
    principalType: item["principalType"],
    role: item["role"],
    roleAssignmentId: item["roleAssignmentId"],
  };
}

/** list role assignments. */
export interface ListRoleAssignments {
  /** Count of role assignments. */
  count: number;
  /** list of role assignments */
  roleAssignmentResponse: RoleAssignmentDetail[];
}

/** The response of a DataProduct list operation. */
export interface _DataProductListResult {
  /** The DataProduct items on this page */
  value: DataProduct[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(item: ProxyResource) {
  return item as any;
}

/** The data type resource. */
export interface DataType extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DataTypeProperties;
}

export function dataTypeSerializer(item: DataType): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : dataTypePropertiesSerializer(item.properties),
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

export function dataTypePropertiesSerializer(
  item: DataTypeProperties,
): Record<string, unknown> {
  return {
    state: item["state"],
    storageOutputRetention: item["storageOutputRetention"],
    databaseCacheRetention: item["databaseCacheRetention"],
    databaseRetention: item["databaseRetention"],
  };
}

/** Known values of {@link DataTypeState} that the service accepts. */
export enum KnownDataTypeState {
  /** Stopped */
  Stopped = "Stopped",
  /** Running */
  Running = "Running",
}

/**
 * The data type state \
 * {@link KnownDataTypeState} can be used interchangeably with DataTypeState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Stopped** \
 * **Running**
 */
export type DataTypeState = string;

/** The type used for update operations of the DataType. */
export interface DataTypeUpdate {
  /** The resource-specific properties for this resource. */
  properties?: DataTypeUpdateProperties;
}

export function dataTypeUpdateSerializer(
  item: DataTypeUpdate,
): Record<string, unknown> {
  return {
    properties: !item.properties
      ? item.properties
      : dataTypeUpdatePropertiesSerializer(item.properties),
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

export function dataTypeUpdatePropertiesSerializer(
  item: DataTypeUpdateProperties,
): Record<string, unknown> {
  return {
    state: item["state"],
    storageOutputRetention: item["storageOutputRetention"],
    databaseCacheRetention: item["databaseCacheRetention"],
    databaseRetention: item["databaseRetention"],
  };
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

export function containerSaSSerializer(
  item: ContainerSaS,
): Record<string, unknown> {
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

/** The response of a DataType list operation. */
export interface _DataTypeListResult {
  /** The DataType items on this page */
  value: DataType[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The data catalog resource. */
export interface DataProductsCatalog extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DataProductsCatalogProperties;
}

/** Details for data catalog properties. */
export interface DataProductsCatalogProperties {
  /** The data catalog provisioning state. */
  readonly provisioningState?: ProvisioningState;
  /** The data product publisher information. */
  publishers: PublisherInformation[];
}

/** Details for Publisher Information. */
export interface PublisherInformation {
  /** Name of the publisher. */
  publisherName: string;
  /** Data product information. */
  dataProducts: DataProductInformation[];
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

/** Data Product Version. */
export interface DataProductVersion {
  /** Version of data product */
  version: string;
}

/** The response of a DataProductsCatalog list operation. */
export interface _DataProductsCatalogListResult {
  /** The DataProductsCatalog items on this page */
  value: DataProductsCatalog[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  readonly display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionType;
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

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** user */
  user = "user",
  /** system */
  system = "system",
  /** user,system */
  "user,system" = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;
/** The available API versions for the Microsoft.NetworkAnalytics RP. */
export type Versions = "2023-11-15";
