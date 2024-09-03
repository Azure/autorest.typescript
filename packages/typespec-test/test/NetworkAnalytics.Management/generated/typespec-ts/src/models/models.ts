// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";

/** The data product resource. */
export interface DataProduct extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: DataProductProperties;
  /** The data product resource name */
  name: string;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityV4;
}

export function dataProductSerializer(input: DataProduct): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The data product properties. */
export interface DataProductProperties {
  /** The resource GUID property of the data product resource. */
  resourceGuid?: string;
  /** Latest provisioning state  of data product. */
  provisioningState?: ProvisioningState;
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
  availableMinorVersions?: string[];
  /** Current configured minor version of the data product resource. */
  currentMinorVersion?: string;
  /** Documentation link for the data product based on definition file. */
  documentation?: string;
  /** Resource links which exposed to the customer to query the data. */
  consumptionEndpoints?: ConsumptionEndpointsProperties;
  /** Key vault url. */
  keyVaultUrl?: string;
}

export function dataProductPropertiesSerializer(
  input: DataProductProperties,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
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

export function encryptionKeyDetailsSerializer(
  input: EncryptionKeyDetails,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
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
  input: DataProductNetworkAcls,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** ManagedResourceGroup related properties */
export interface ManagedResourceGroupConfiguration {
  /** Name of managed resource group */
  name: string;
  /** Managed Resource Group location */
  location: string;
}

export function managedResourceGroupConfigurationSerializer(
  input: ManagedResourceGroupConfiguration,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Details of Consumption Properties */
export interface ConsumptionEndpointsProperties {
  /** Ingestion url to upload the data. */
  ingestionUrl?: string;
  /** Resource Id of ingestion endpoint. */
  ingestionResourceId?: string;
  /** Url to consume file type. */
  fileAccessUrl?: string;
  /** Resource Id of file access endpoint. */
  fileAccessResourceId?: string;
  /** Url to consume the processed data. */
  queryUrl?: string;
  /** Resource Id of query endpoint. */
  queryResourceId?: string;
}

export function consumptionEndpointsPropertiesSerializer(
  input: ConsumptionEndpointsProperties,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentityV4 {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

export function managedServiceIdentityV4Serializer(
  input: ManagedServiceIdentityV4,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
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
  input: VirtualNetworkRule,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** IP rule with specific IP or IP range in CIDR format. */
export interface IPRules {
  /** IP Rules Value */
  value?: string;
  /** The action of virtual network rule. */
  action: string;
}

export function iPRulesSerializer(input: IPRules): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The principal ID of the assigned identity. */
  principalId?: string;
  /** The client ID of the assigned identity. */
  clientId?: string;
}

export function userAssignedIdentitySerializer(
  input: UserAssignedIdentity,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(input: TrackedResource): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  id?: string;
  /** The name of the resource */
  name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  systemData?: SystemData;
}

export function resourceSerializer(input: Resource): unknown {
  console.log(input);
  throw new Error("Not implemented");
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

export function systemDataSerializer(input: SystemData): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseSerializer(input: ErrorResponse): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  code?: string;
  /** The error message. */
  message?: string;
  /** The error target. */
  target?: string;
  /** The error details. */
  details?: ErrorDetail[];
  /** The error additional info. */
  additionalInfo?: ErrorAdditionalInfo[];
}

export function errorDetailSerializer(input: ErrorDetail): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  type?: string;
  /** The additional info. */
  info?: {};
}

export function errorAdditionalInfoSerializer(
  input: ErrorAdditionalInfo,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

export interface ErrorAdditionalInfoInfo {}

export function errorAdditionalInfoInfoSerializer(input: {}): unknown {
  console.log(input);
  throw new Error("Not implemented");
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

export function dataProductUpdateSerializer(input: DataProductUpdate): unknown {
  console.log(input);
  throw new Error("Not implemented");
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
  input: DataProductUpdateProperties,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
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

export function accountSasSerializer(input: AccountSas): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Details of storage account sas token . */
export interface AccountSasToken {
  /** Field to specify storage account sas token. */
  storageAccountSasToken: string;
}

export function accountSasTokenSerializer(input: AccountSasToken): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Details for KeyVault. */
export interface KeyVaultInfo {
  /** key vault url. */
  keyVaultUrl: string;
}

export function keyVaultInfoSerializer(input: KeyVaultInfo): unknown {
  console.log(input);
  throw new Error("Not implemented");
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
  input: RoleAssignmentCommonProperties,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

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
  input: RoleAssignmentDetail,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

export interface ListRolesAssignmentsRequest {}

export function listRolesAssignmentsRequestSerializer(input: {}): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** list role assignments. */
export interface ListRoleAssignments {
  /** Count of role assignments. */
  count: number;
  /** list of role assignments */
  roleAssignmentResponse: RoleAssignmentDetail[];
}

export function listRoleAssignmentsSerializer(
  input: ListRoleAssignments,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The response of a DataProduct list operation. */
export interface _DataProductListResult {
  /** The DataProduct items on this page */
  value: DataProduct[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function dataProductListResultSerializer(
  input: _DataProductListResult,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The data type resource. */
export interface DataType extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DataTypeProperties;
  /** The data type name. */
  name: string;
}

export function dataTypeSerializer(input: DataType): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The data type properties */
export interface DataTypeProperties {
  /** Latest provisioning state  of data product. */
  provisioningState?: ProvisioningState;
  /** State of data type. */
  state?: DataTypeState;
  /** Reason for the state of data type. */
  stateReason?: string;
  /** Field for storage output retention in days. */
  storageOutputRetention?: number;
  /** Field for database cache retention in days. */
  databaseCacheRetention?: number;
  /** Field for database data retention in days. */
  databaseRetention?: number;
  /** Url for data visualization. */
  visualizationUrl?: string;
}

export function dataTypePropertiesSerializer(
  input: DataTypeProperties,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(input: ProxyResource): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The type used for update operations of the DataType. */
export interface DataTypeUpdate {
  /** The resource-specific properties for this resource. */
  properties?: DataTypeUpdateProperties;
}

export function dataTypeUpdateSerializer(input: DataTypeUpdate): unknown {
  console.log(input);
  throw new Error("Not implemented");
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
  input: DataTypeUpdateProperties,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

export interface DeleteDataRequest {}

export function deleteDataRequestSerializer(input: {}): unknown {
  console.log(input);
  throw new Error("Not implemented");
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

export function containerSaSSerializer(input: ContainerSaS): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Details of storage container account sas token . */
export interface ContainerSasToken {
  /** Field to specify storage container sas token. */
  storageContainerSasToken: string;
}

export function containerSasTokenSerializer(input: ContainerSasToken): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The response of a DataType list operation. */
export interface _DataTypeListResult {
  /** The DataType items on this page */
  value: DataType[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function dataTypeListResultSerializer(
  input: _DataTypeListResult,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The data catalog resource. */
export interface DataProductsCatalog extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DataProductsCatalogProperties;
  /** The data catalog name */
  name: string;
}

export function dataProductsCatalogSerializer(
  input: DataProductsCatalog,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Details for data catalog properties. */
export interface DataProductsCatalogProperties {
  /** The data catalog provisioning state. */
  provisioningState?: ProvisioningState;
  /** The data product publisher information. */
  publishers: PublisherInformation[];
}

export function dataProductsCatalogPropertiesSerializer(
  input: DataProductsCatalogProperties,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Details for Publisher Information. */
export interface PublisherInformation {
  /** Name of the publisher. */
  publisherName: string;
  /** Data product information. */
  dataProducts: DataProductInformation[];
}

export function publisherInformationSerializer(
  input: PublisherInformation,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
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

export function dataProductInformationSerializer(
  input: DataProductInformation,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Data Product Version. */
export interface DataProductVersion {
  /** Version of data product */
  version: string;
}

export function dataProductVersionSerializer(
  input: DataProductVersion,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The response of a DataProductsCatalog list operation. */
export interface _DataProductsCatalogListResult {
  /** The DataProductsCatalog items on this page */
  value: DataProductsCatalog[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function dataProductsCatalogListResultSerializer(
  input: _DataProductsCatalogListResult,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function operationListResultSerializer(
  input: _OperationListResult,
): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionType;
}

export function operationSerializer(input: Operation): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Localized display information for and operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  description?: string;
}

export function operationDisplaySerializer(input: OperationDisplay): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** The status of the current operation. */
export enum ProvisioningStateKnownValues {
  /** Represents a succeeded operation. */
  Succeeded = '"Succeeded"',
  /** Represents a failed operation. */
  Failed = '"Failed"',
  /** Represents a canceled operation. */
  Canceled = '"Canceled"',
  /** Represents a pending operation. */
  Provisioning = '"Provisioning"',
  /** Represents a pending operation. */
  Updating = '"Updating"',
  /** Represents an operation under deletion. */
  Deleting = '"Deleting"',
  /** Represents an accepted operation. */
  Accepted = '"Accepted"',
}

export type ProvisioningState =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | "Provisioning"
  | "Updating"
  | "Deleting"
  | "Accepted";

/** The data type state */
export enum ControlStateKnownValues {
  /** Field to enable a setting. */
  Enabled = '"Enabled"',
  /** Field to disable a setting. */
  Disabled = '"Disabled"',
}

export type ControlState = "Enabled" | "Disabled";

/** Specifies the default action of allow or deny when no other rules match. */
export enum DefaultActionKnownValues {
  /** Represents allow action. */
  Allow = '"Allow"',
  /** Represents deny action. */
  Deny = '"Deny"',
}

export type DefaultAction = "Allow" | "Deny";

/** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
export enum ManagedServiceIdentityTypeKnownValues {
  /** No managed identity. */
  None = '"None"',
  /** System assigned managed identity. */
  SystemAssigned = '"SystemAssigned"',
  /** User assigned managed identity. */
  UserAssigned = '"UserAssigned"',
  /** System and user assigned managed identity. */
  SystemAndUserAssigned = '"SystemAssigned, UserAssigned"',
}

export type ManagedServiceIdentityType =
  | "None"
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned";

/** The kind of entity that created the resource. */
export enum CreatedByTypeKnownValues {
  /** The entity was created by a user. */
  User = '"User"',
  /** The entity was created by an application. */
  Application = '"Application"',
  /** The entity was created by a managed identity. */
  ManagedIdentity = '"ManagedIdentity"',
  /** The entity was created by a key. */
  Key = '"Key"',
}

export type CreatedByType = "User" | "Application" | "ManagedIdentity" | "Key";

/** The data type state */
export enum DataProductUserRoleKnownValues {
  /** Field to specify user of type Reader. */
  Reader = '"Reader"',
  /**
   * Field to specify user of type SensitiveReader.
   * This user has privileged access to read sensitive data of a data product.
   */
  SensitiveReader = '"SensitiveReader"',
}

export type DataProductUserRole = "Reader" | "SensitiveReader";

/** The data type state */
export enum DataTypeStateKnownValues {
  /** Field to specify stopped state. */
  Stopped = '"Stopped"',
  /** Field to specify running state. */
  Running = '"Running"',
}

export type DataTypeState = "Stopped" | "Running";

/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
export enum OriginKnownValues {
  /** Indicates the operation is initiated by a user. */
  user = '"user"',
  /** Indicates the operation is initiated by a system. */
  system = '"system"',
  /** Indicates the operation is initiated by a user or system. */
  "user,system" = '"user,system"',
}

export type Origin = "user" | "system" | "user,system";

/** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
export enum ActionTypeKnownValues {
  /** Actions are for internal-only APIs. */
  Internal = '"Internal"',
}

export type ActionType = "Internal";

/** The available API versions for the Microsoft.NetworkAnalytics RP. */
export enum VersionsKnownValues {
  /** The 2023-11-15 stable version. */
  v2023_11_15 = '"2023-11-15"',
}

export type Versions = "2023-11-15";

/** Initialization class for the client */
export interface NetworkAnalyticsClientOptions {
  /** Service host */
  endpoint: string;
  /** Credential used to authenticate requests to the service. */
  credential: TokenCredential;
  /** The API version to use for this operation. */
  apiVersion: string;
  /** The ID of the target subscription. The value must be an UUID. */
  subscriptionId: string;
}

export function networkAnalyticsClientOptionsSerializer(input: {
  endpoint: string;
  credential: TokenCredential;
  apiVersion: string;
  subscriptionId: string;
}): unknown {
  console.log(input);
  throw new Error("Not implemented");
}
