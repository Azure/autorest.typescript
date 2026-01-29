// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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

/** Localized display information for an operation. */
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

/** Configuration group schema resource. */
export interface ConfigurationGroupSchema extends TrackedResource {
  /** Configuration group schema properties. */
  properties?: ConfigurationGroupSchemaPropertiesFormat;
}

export function configurationGroupSchemaSerializer(item: ConfigurationGroupSchema): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : configurationGroupSchemaPropertiesFormatSerializer(item["properties"]),
  };
}

export function configurationGroupSchemaDeserializer(item: any): ConfigurationGroupSchema {
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
      : configurationGroupSchemaPropertiesFormatDeserializer(item["properties"]),
  };
}

/** Configuration group schema properties. */
export interface ConfigurationGroupSchemaPropertiesFormat {
  /** The provisioning state of the Configuration group schema resource. */
  readonly provisioningState?: ProvisioningState;
  /** The configuration group schema version state. */
  readonly versionState?: VersionState;
  /** Description of what schema can contain. */
  description?: string;
  /** Name and value pairs that define the configuration value. It can be a well formed escaped JSON string. */
  schemaDefinition?: string;
}

export function configurationGroupSchemaPropertiesFormatSerializer(
  item: ConfigurationGroupSchemaPropertiesFormat,
): any {
  return { description: item["description"], schemaDefinition: item["schemaDefinition"] };
}

export function configurationGroupSchemaPropertiesFormatDeserializer(
  item: any,
): ConfigurationGroupSchemaPropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    versionState: item["versionState"],
    description: item["description"],
    schemaDefinition: item["schemaDefinition"],
  };
}

/** The current provisioning state. */
export enum KnownProvisioningState {
  /** Unknown */
  Unknown = "Unknown",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Accepted */
  Accepted = "Accepted",
  /** Deleting */
  Deleting = "Deleting",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Deleted */
  Deleted = "Deleted",
  /** Converging */
  Converging = "Converging",
  /** Cancelling */
  Cancelling = "Cancelling",
}

/**
 * The current provisioning state. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Succeeded** \
 * **Accepted** \
 * **Deleting** \
 * **Failed** \
 * **Canceled** \
 * **Deleted** \
 * **Converging** \
 * **Cancelling**
 */
export type ProvisioningState = string;

/** The configuration group schema state. */
export enum KnownVersionState {
  /** Unknown */
  Unknown = "Unknown",
  /** Preview */
  Preview = "Preview",
  /** Active */
  Active = "Active",
  /** Deprecated */
  Deprecated = "Deprecated",
  /** Validating */
  Validating = "Validating",
  /** ValidationFailed */
  ValidationFailed = "ValidationFailed",
}

/**
 * The configuration group schema state. \
 * {@link KnownVersionState} can be used interchangeably with VersionState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Preview** \
 * **Active** \
 * **Deprecated** \
 * **Validating** \
 * **ValidationFailed**
 */
export type VersionState = string;

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

/** Tags object for patch operations. */
export interface TagsObject {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function tagsObjectSerializer(item: TagsObject): any {
  return { tags: item["tags"] };
}

/** The response of a ConfigurationGroupSchema list operation. */
export interface _ConfigurationGroupSchemaListResult {
  /** The ConfigurationGroupSchema items on this page */
  value: ConfigurationGroupSchema[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _configurationGroupSchemaListResultDeserializer(
  item: any,
): _ConfigurationGroupSchemaListResult {
  return {
    value: configurationGroupSchemaArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function configurationGroupSchemaArraySerializer(
  result: Array<ConfigurationGroupSchema>,
): any[] {
  return result.map((item) => {
    return configurationGroupSchemaSerializer(item);
  });
}

export function configurationGroupSchemaArrayDeserializer(
  result: Array<ConfigurationGroupSchema>,
): any[] {
  return result.map((item) => {
    return configurationGroupSchemaDeserializer(item);
  });
}

/** Publisher configuration group schema update request definition. */
export interface ConfigurationGroupSchemaVersionUpdateState {
  /** The configuration group schema state. */
  versionState?: VersionState;
}

export function configurationGroupSchemaVersionUpdateStateSerializer(
  item: ConfigurationGroupSchemaVersionUpdateState,
): any {
  return { versionState: item["versionState"] };
}

export function configurationGroupSchemaVersionUpdateStateDeserializer(
  item: any,
): ConfigurationGroupSchemaVersionUpdateState {
  return {
    versionState: item["versionState"],
  };
}

/** publisher resource. */
export interface Publisher extends TrackedResource {
  /** Publisher properties. */
  properties?: PublisherPropertiesFormat;
  /** The managed identity of the publisher, if configured. */
  identity?: ManagedServiceIdentity;
}

export function publisherSerializer(item: Publisher): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : publisherPropertiesFormatSerializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
  };
}

export function publisherDeserializer(item: any): Publisher {
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
      : publisherPropertiesFormatDeserializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityDeserializer(item["identity"]),
  };
}

/** publisher properties. */
export interface PublisherPropertiesFormat {
  /** The provisioning state of the publisher resource. */
  readonly provisioningState?: ProvisioningState;
  /** The publisher scope. */
  scope?: PublisherScope;
}

export function publisherPropertiesFormatSerializer(item: PublisherPropertiesFormat): any {
  return { scope: item["scope"] };
}

export function publisherPropertiesFormatDeserializer(item: any): PublisherPropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    scope: item["scope"],
  };
}

/** Publisher Scope. */
export enum KnownPublisherScope {
  /** Unknown */
  Unknown = "Unknown",
  /** Private */
  Private = "Private",
}

/**
 * Publisher Scope. \
 * {@link KnownPublisherScope} can be used interchangeably with PublisherScope,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Private**
 */
export type PublisherScope = string;

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

export function managedServiceIdentitySerializer(item: ManagedServiceIdentity): any {
  return {
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityRecordSerializer(item["userAssignedIdentities"]),
  };
}

export function managedServiceIdentityDeserializer(item: any): ManagedServiceIdentity {
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
  SystemAssignedUserAssigned = "SystemAssigned,UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No managed identity. \
 * **SystemAssigned**: System assigned managed identity. \
 * **UserAssigned**: User assigned managed identity. \
 * **SystemAssigned,UserAssigned**: System and user assigned managed identity.
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

/** The response of a Publisher list operation. */
export interface _PublisherListResult {
  /** The Publisher items on this page */
  value: Publisher[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _publisherListResultDeserializer(item: any): _PublisherListResult {
  return {
    value: publisherArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function publisherArraySerializer(result: Array<Publisher>): any[] {
  return result.map((item) => {
    return publisherSerializer(item);
  });
}

export function publisherArrayDeserializer(result: Array<Publisher>): any[] {
  return result.map((item) => {
    return publisherDeserializer(item);
  });
}

/** Hybrid configuration group value resource. */
export interface ConfigurationGroupValue extends TrackedResource {
  /** Hybrid configuration group value properties. */
  properties?: ConfigurationGroupValuePropertiesFormatUnion;
}

export function configurationGroupValueSerializer(item: ConfigurationGroupValue): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : configurationGroupValuePropertiesFormatUnionSerializer(item["properties"]),
  };
}

export function configurationGroupValueDeserializer(item: any): ConfigurationGroupValue {
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
      : configurationGroupValuePropertiesFormatUnionDeserializer(item["properties"]),
  };
}

/** Hybrid configuration group value properties. */
export interface ConfigurationGroupValuePropertiesFormat {
  /** The provisioning state of the site resource. */
  readonly provisioningState?: ProvisioningState;
  /** The publisher name for the configuration group schema. */
  readonly publisherName?: string;
  /** The scope of the publisher. */
  readonly publisherScope?: PublisherScope;
  /** The configuration group schema name. */
  readonly configurationGroupSchemaName?: string;
  /** The location of the configuration group schema offering. */
  readonly configurationGroupSchemaOfferingLocation?: string;
  /** The configuration group schema resource reference. */
  configurationGroupSchemaResourceReference?: DeploymentResourceIdReferenceUnion;
  /** The value which indicates if configuration values are secrets */
  /** The discriminator possible values: Secret, Open */
  configurationType: ConfigurationGroupValueConfigurationType;
}

export function configurationGroupValuePropertiesFormatSerializer(
  item: ConfigurationGroupValuePropertiesFormat,
): any {
  return {
    configurationGroupSchemaResourceReference: !item["configurationGroupSchemaResourceReference"]
      ? item["configurationGroupSchemaResourceReference"]
      : deploymentResourceIdReferenceUnionSerializer(
          item["configurationGroupSchemaResourceReference"],
        ),
    configurationType: item["configurationType"],
  };
}

export function configurationGroupValuePropertiesFormatDeserializer(
  item: any,
): ConfigurationGroupValuePropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    configurationGroupSchemaName: item["configurationGroupSchemaName"],
    configurationGroupSchemaOfferingLocation: item["configurationGroupSchemaOfferingLocation"],
    configurationGroupSchemaResourceReference: !item["configurationGroupSchemaResourceReference"]
      ? item["configurationGroupSchemaResourceReference"]
      : deploymentResourceIdReferenceUnionDeserializer(
          item["configurationGroupSchemaResourceReference"],
        ),
    configurationType: item["configurationType"],
  };
}

/** Alias for ConfigurationGroupValuePropertiesFormatUnion */
export type ConfigurationGroupValuePropertiesFormatUnion =
  | ConfigurationValueWithSecrets
  | ConfigurationValueWithoutSecrets
  | ConfigurationGroupValuePropertiesFormat;

export function configurationGroupValuePropertiesFormatUnionSerializer(
  item: ConfigurationGroupValuePropertiesFormatUnion,
): any {
  switch (item.configurationType) {
    case "Secret":
      return configurationValueWithSecretsSerializer(item as ConfigurationValueWithSecrets);

    case "Open":
      return configurationValueWithoutSecretsSerializer(item as ConfigurationValueWithoutSecrets);

    default:
      return configurationGroupValuePropertiesFormatSerializer(item);
  }
}

export function configurationGroupValuePropertiesFormatUnionDeserializer(
  item: any,
): ConfigurationGroupValuePropertiesFormatUnion {
  switch (item.configurationType) {
    case "Secret":
      return configurationValueWithSecretsDeserializer(item as ConfigurationValueWithSecrets);

    case "Open":
      return configurationValueWithoutSecretsDeserializer(item as ConfigurationValueWithoutSecrets);

    default:
      return configurationGroupValuePropertiesFormatDeserializer(item);
  }
}

/** The azure resource reference which is used for deployment. */
export interface DeploymentResourceIdReference {
  /** The resource reference arm id type. */
  /** The discriminator possible values: Secret, Open */
  idType: IdType;
}

export function deploymentResourceIdReferenceSerializer(item: DeploymentResourceIdReference): any {
  return { idType: item["idType"] };
}

export function deploymentResourceIdReferenceDeserializer(
  item: any,
): DeploymentResourceIdReference {
  return {
    idType: item["idType"],
  };
}

/** Alias for DeploymentResourceIdReferenceUnion */
export type DeploymentResourceIdReferenceUnion =
  | SecretDeploymentResourceReference
  | OpenDeploymentResourceReference
  | DeploymentResourceIdReference;

export function deploymentResourceIdReferenceUnionSerializer(
  item: DeploymentResourceIdReferenceUnion,
): any {
  switch (item.idType) {
    case "Secret":
      return secretDeploymentResourceReferenceSerializer(item as SecretDeploymentResourceReference);

    case "Open":
      return openDeploymentResourceReferenceSerializer(item as OpenDeploymentResourceReference);

    default:
      return deploymentResourceIdReferenceSerializer(item);
  }
}

export function deploymentResourceIdReferenceUnionDeserializer(
  item: any,
): DeploymentResourceIdReferenceUnion {
  switch (item.idType) {
    case "Secret":
      return secretDeploymentResourceReferenceDeserializer(
        item as SecretDeploymentResourceReference,
      );

    case "Open":
      return openDeploymentResourceReferenceDeserializer(item as OpenDeploymentResourceReference);

    default:
      return deploymentResourceIdReferenceDeserializer(item);
  }
}

/** The resource reference arm id type. */
export enum KnownIdType {
  /** Unknown */
  Unknown = "Unknown",
  /** Open */
  Open = "Open",
  /** Secret */
  Secret = "Secret",
}

/**
 * The resource reference arm id type. \
 * {@link KnownIdType} can be used interchangeably with IdType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Open** \
 * **Secret**
 */
export type IdType = string;

/** Secret deployment resource id reference. */
export interface SecretDeploymentResourceReference extends DeploymentResourceIdReference {
  /** Resource ID. */
  id?: string;
  /** The resource reference arm id type. */
  idType: "Secret";
}

export function secretDeploymentResourceReferenceSerializer(
  item: SecretDeploymentResourceReference,
): any {
  return { idType: item["idType"], id: item["id"] };
}

export function secretDeploymentResourceReferenceDeserializer(
  item: any,
): SecretDeploymentResourceReference {
  return {
    idType: item["idType"],
    id: item["id"],
  };
}

/** Non secret deployment resource id reference. */
export interface OpenDeploymentResourceReference extends DeploymentResourceIdReference {
  /** Resource ID. */
  id?: string;
  /** The resource reference arm id type. */
  idType: "Open";
}

export function openDeploymentResourceReferenceSerializer(
  item: OpenDeploymentResourceReference,
): any {
  return { idType: item["idType"], id: item["id"] };
}

export function openDeploymentResourceReferenceDeserializer(
  item: any,
): OpenDeploymentResourceReference {
  return {
    idType: item["idType"],
    id: item["id"],
  };
}

/** The secret type which indicates if secret or not. */
export enum KnownConfigurationGroupValueConfigurationType {
  /** Unknown */
  Unknown = "Unknown",
  /** Secret */
  Secret = "Secret",
  /** Open */
  Open = "Open",
}

/**
 * The secret type which indicates if secret or not. \
 * {@link KnownConfigurationGroupValueConfigurationType} can be used interchangeably with ConfigurationGroupValueConfigurationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Secret** \
 * **Open**
 */
export type ConfigurationGroupValueConfigurationType = string;

/** The ConfigurationValue with secrets. */
export interface ConfigurationValueWithSecrets extends ConfigurationGroupValuePropertiesFormat {
  /** Name and value pairs that define the configuration value secrets. It can be a well formed escaped JSON string. */
  secretConfigurationValue?: string;
  /** The value which indicates if configuration values are secrets */
  configurationType: "Secret";
}

export function configurationValueWithSecretsSerializer(item: ConfigurationValueWithSecrets): any {
  return {
    configurationGroupSchemaResourceReference: !item["configurationGroupSchemaResourceReference"]
      ? item["configurationGroupSchemaResourceReference"]
      : deploymentResourceIdReferenceUnionSerializer(
          item["configurationGroupSchemaResourceReference"],
        ),
    configurationType: item["configurationType"],
    secretConfigurationValue: item["secretConfigurationValue"],
  };
}

export function configurationValueWithSecretsDeserializer(
  item: any,
): ConfigurationValueWithSecrets {
  return {
    provisioningState: item["provisioningState"],
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    configurationGroupSchemaName: item["configurationGroupSchemaName"],
    configurationGroupSchemaOfferingLocation: item["configurationGroupSchemaOfferingLocation"],
    configurationGroupSchemaResourceReference: !item["configurationGroupSchemaResourceReference"]
      ? item["configurationGroupSchemaResourceReference"]
      : deploymentResourceIdReferenceUnionDeserializer(
          item["configurationGroupSchemaResourceReference"],
        ),
    configurationType: item["configurationType"],
    secretConfigurationValue: item["secretConfigurationValue"],
  };
}

/** The ConfigurationValue with no secrets. */
export interface ConfigurationValueWithoutSecrets extends ConfigurationGroupValuePropertiesFormat {
  /** Name and value pairs that define the configuration value. It can be a well formed escaped JSON string. */
  configurationValue?: string;
  /** The value which indicates if configuration values are secrets */
  configurationType: "Open";
}

export function configurationValueWithoutSecretsSerializer(
  item: ConfigurationValueWithoutSecrets,
): any {
  return {
    configurationGroupSchemaResourceReference: !item["configurationGroupSchemaResourceReference"]
      ? item["configurationGroupSchemaResourceReference"]
      : deploymentResourceIdReferenceUnionSerializer(
          item["configurationGroupSchemaResourceReference"],
        ),
    configurationType: item["configurationType"],
    configurationValue: item["configurationValue"],
  };
}

export function configurationValueWithoutSecretsDeserializer(
  item: any,
): ConfigurationValueWithoutSecrets {
  return {
    provisioningState: item["provisioningState"],
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    configurationGroupSchemaName: item["configurationGroupSchemaName"],
    configurationGroupSchemaOfferingLocation: item["configurationGroupSchemaOfferingLocation"],
    configurationGroupSchemaResourceReference: !item["configurationGroupSchemaResourceReference"]
      ? item["configurationGroupSchemaResourceReference"]
      : deploymentResourceIdReferenceUnionDeserializer(
          item["configurationGroupSchemaResourceReference"],
        ),
    configurationType: item["configurationType"],
    configurationValue: item["configurationValue"],
  };
}

/** The response of a configurationGroupValue list operation. */
export interface _ConfigurationGroupValueListResult {
  /** The configurationGroupValue items on this page */
  value: ConfigurationGroupValue[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _configurationGroupValueListResultDeserializer(
  item: any,
): _ConfigurationGroupValueListResult {
  return {
    value: configurationGroupValueArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function configurationGroupValueArraySerializer(
  result: Array<ConfigurationGroupValue>,
): any[] {
  return result.map((item) => {
    return configurationGroupValueSerializer(item);
  });
}

export function configurationGroupValueArrayDeserializer(
  result: Array<ConfigurationGroupValue>,
): any[] {
  return result.map((item) => {
    return configurationGroupValueDeserializer(item);
  });
}

/** Network function resource response. */
export interface NetworkFunction extends TrackedResource {
  /** Network function properties. */
  properties?: NetworkFunctionPropertiesFormatUnion;
  /** A unique read-only string that changes whenever the resource is updated. */
  etag?: string;
  /** The managed identity of the network function. */
  identity?: ManagedServiceIdentity;
}

export function networkFunctionSerializer(item: NetworkFunction): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : networkFunctionPropertiesFormatUnionSerializer(item["properties"]),
    etag: item["etag"],
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
  };
}

export function networkFunctionDeserializer(item: any): NetworkFunction {
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
      : networkFunctionPropertiesFormatUnionDeserializer(item["properties"]),
    etag: item["etag"],
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityDeserializer(item["identity"]),
  };
}

/** Network function properties. */
export interface NetworkFunctionPropertiesFormat {
  /** The provisioning state of the network function resource. */
  readonly provisioningState?: ProvisioningState;
  /** The publisher name for the network function. */
  publisherName?: string;
  /** The scope of the publisher. */
  publisherScope?: PublisherScope;
  /** The network function definition group name for the network function. */
  networkFunctionDefinitionGroupName?: string;
  /** The network function definition version for the network function. */
  networkFunctionDefinitionVersion?: string;
  /** The location of the network function definition offering. */
  networkFunctionDefinitionOfferingLocation?: string;
  /** The network function definition version resource reference. */
  networkFunctionDefinitionVersionResourceReference?: DeploymentResourceIdReferenceUnion;
  /** The nfvi type for the network function. */
  nfviType?: NfviType;
  /** The nfviId for the network function. */
  nfviId?: string;
  /** Indicates if software updates are allowed during deployment. */
  allowSoftwareUpdate?: boolean;
  /** The value which indicates if NF  values are secrets */
  /** The discriminator possible values: Secret, Open */
  configurationType: NetworkFunctionConfigurationType;
  /** The role configuration override values from the user. */
  roleOverrideValues?: string[];
}

export function networkFunctionPropertiesFormatSerializer(
  item: NetworkFunctionPropertiesFormat,
): any {
  return {
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    networkFunctionDefinitionGroupName: item["networkFunctionDefinitionGroupName"],
    networkFunctionDefinitionVersion: item["networkFunctionDefinitionVersion"],
    networkFunctionDefinitionOfferingLocation: item["networkFunctionDefinitionOfferingLocation"],
    networkFunctionDefinitionVersionResourceReference: !item[
      "networkFunctionDefinitionVersionResourceReference"
    ]
      ? item["networkFunctionDefinitionVersionResourceReference"]
      : deploymentResourceIdReferenceUnionSerializer(
          item["networkFunctionDefinitionVersionResourceReference"],
        ),
    nfviType: item["nfviType"],
    nfviId: item["nfviId"],
    allowSoftwareUpdate: item["allowSoftwareUpdate"],
    configurationType: item["configurationType"],
    roleOverrideValues: !item["roleOverrideValues"]
      ? item["roleOverrideValues"]
      : item["roleOverrideValues"].map((p: any) => {
          return p;
        }),
  };
}

export function networkFunctionPropertiesFormatDeserializer(
  item: any,
): NetworkFunctionPropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    networkFunctionDefinitionGroupName: item["networkFunctionDefinitionGroupName"],
    networkFunctionDefinitionVersion: item["networkFunctionDefinitionVersion"],
    networkFunctionDefinitionOfferingLocation: item["networkFunctionDefinitionOfferingLocation"],
    networkFunctionDefinitionVersionResourceReference: !item[
      "networkFunctionDefinitionVersionResourceReference"
    ]
      ? item["networkFunctionDefinitionVersionResourceReference"]
      : deploymentResourceIdReferenceUnionDeserializer(
          item["networkFunctionDefinitionVersionResourceReference"],
        ),
    nfviType: item["nfviType"],
    nfviId: item["nfviId"],
    allowSoftwareUpdate: item["allowSoftwareUpdate"],
    configurationType: item["configurationType"],
    roleOverrideValues: !item["roleOverrideValues"]
      ? item["roleOverrideValues"]
      : item["roleOverrideValues"].map((p: any) => {
          return p;
        }),
  };
}

/** Alias for NetworkFunctionPropertiesFormatUnion */
export type NetworkFunctionPropertiesFormatUnion =
  | NetworkFunctionValueWithSecrets
  | NetworkFunctionValueWithoutSecrets
  | NetworkFunctionPropertiesFormat;

export function networkFunctionPropertiesFormatUnionSerializer(
  item: NetworkFunctionPropertiesFormatUnion,
): any {
  switch (item.configurationType) {
    case "Secret":
      return networkFunctionValueWithSecretsSerializer(item as NetworkFunctionValueWithSecrets);

    case "Open":
      return networkFunctionValueWithoutSecretsSerializer(
        item as NetworkFunctionValueWithoutSecrets,
      );

    default:
      return networkFunctionPropertiesFormatSerializer(item);
  }
}

export function networkFunctionPropertiesFormatUnionDeserializer(
  item: any,
): NetworkFunctionPropertiesFormatUnion {
  switch (item.configurationType) {
    case "Secret":
      return networkFunctionValueWithSecretsDeserializer(item as NetworkFunctionValueWithSecrets);

    case "Open":
      return networkFunctionValueWithoutSecretsDeserializer(
        item as NetworkFunctionValueWithoutSecrets,
      );

    default:
      return networkFunctionPropertiesFormatDeserializer(item);
  }
}

/** The NFVI type. */
export enum KnownNfviType {
  /** Unknown */
  Unknown = "Unknown",
  /** AzureArcKubernetes */
  AzureArcKubernetes = "AzureArcKubernetes",
  /** AzureCore */
  AzureCore = "AzureCore",
  /** AzureOperatorNexus */
  AzureOperatorNexus = "AzureOperatorNexus",
}

/**
 * The NFVI type. \
 * {@link KnownNfviType} can be used interchangeably with NfviType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **AzureArcKubernetes** \
 * **AzureCore** \
 * **AzureOperatorNexus**
 */
export type NfviType = string;

/** The secret type which indicates if secret or not. */
export enum KnownNetworkFunctionConfigurationType {
  /** Unknown */
  Unknown = "Unknown",
  /** Secret */
  Secret = "Secret",
  /** Open */
  Open = "Open",
}

/**
 * The secret type which indicates if secret or not. \
 * {@link KnownNetworkFunctionConfigurationType} can be used interchangeably with NetworkFunctionConfigurationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Secret** \
 * **Open**
 */
export type NetworkFunctionConfigurationType = string;

/** NetworkFunction with secrets. */
export interface NetworkFunctionValueWithSecrets extends NetworkFunctionPropertiesFormat {
  /** The JSON-serialized secret deployment values from the user. This contains secrets like passwords,keys etc */
  secretDeploymentValues?: string;
  /** The value which indicates if NF  values are secrets */
  configurationType: "Secret";
}

export function networkFunctionValueWithSecretsSerializer(
  item: NetworkFunctionValueWithSecrets,
): any {
  return {
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    networkFunctionDefinitionGroupName: item["networkFunctionDefinitionGroupName"],
    networkFunctionDefinitionVersion: item["networkFunctionDefinitionVersion"],
    networkFunctionDefinitionOfferingLocation: item["networkFunctionDefinitionOfferingLocation"],
    networkFunctionDefinitionVersionResourceReference: !item[
      "networkFunctionDefinitionVersionResourceReference"
    ]
      ? item["networkFunctionDefinitionVersionResourceReference"]
      : deploymentResourceIdReferenceUnionSerializer(
          item["networkFunctionDefinitionVersionResourceReference"],
        ),
    nfviType: item["nfviType"],
    nfviId: item["nfviId"],
    allowSoftwareUpdate: item["allowSoftwareUpdate"],
    configurationType: item["configurationType"],
    roleOverrideValues: !item["roleOverrideValues"]
      ? item["roleOverrideValues"]
      : item["roleOverrideValues"].map((p: any) => {
          return p;
        }),
    secretDeploymentValues: item["secretDeploymentValues"],
  };
}

export function networkFunctionValueWithSecretsDeserializer(
  item: any,
): NetworkFunctionValueWithSecrets {
  return {
    provisioningState: item["provisioningState"],
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    networkFunctionDefinitionGroupName: item["networkFunctionDefinitionGroupName"],
    networkFunctionDefinitionVersion: item["networkFunctionDefinitionVersion"],
    networkFunctionDefinitionOfferingLocation: item["networkFunctionDefinitionOfferingLocation"],
    networkFunctionDefinitionVersionResourceReference: !item[
      "networkFunctionDefinitionVersionResourceReference"
    ]
      ? item["networkFunctionDefinitionVersionResourceReference"]
      : deploymentResourceIdReferenceUnionDeserializer(
          item["networkFunctionDefinitionVersionResourceReference"],
        ),
    nfviType: item["nfviType"],
    nfviId: item["nfviId"],
    allowSoftwareUpdate: item["allowSoftwareUpdate"],
    configurationType: item["configurationType"],
    roleOverrideValues: !item["roleOverrideValues"]
      ? item["roleOverrideValues"]
      : item["roleOverrideValues"].map((p: any) => {
          return p;
        }),
    secretDeploymentValues: item["secretDeploymentValues"],
  };
}

/** NetworkFunction with no secrets. */
export interface NetworkFunctionValueWithoutSecrets extends NetworkFunctionPropertiesFormat {
  /** The JSON-serialized deployment values from the user. */
  deploymentValues?: string;
  /** The value which indicates if NF  values are secrets */
  configurationType: "Open";
}

export function networkFunctionValueWithoutSecretsSerializer(
  item: NetworkFunctionValueWithoutSecrets,
): any {
  return {
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    networkFunctionDefinitionGroupName: item["networkFunctionDefinitionGroupName"],
    networkFunctionDefinitionVersion: item["networkFunctionDefinitionVersion"],
    networkFunctionDefinitionOfferingLocation: item["networkFunctionDefinitionOfferingLocation"],
    networkFunctionDefinitionVersionResourceReference: !item[
      "networkFunctionDefinitionVersionResourceReference"
    ]
      ? item["networkFunctionDefinitionVersionResourceReference"]
      : deploymentResourceIdReferenceUnionSerializer(
          item["networkFunctionDefinitionVersionResourceReference"],
        ),
    nfviType: item["nfviType"],
    nfviId: item["nfviId"],
    allowSoftwareUpdate: item["allowSoftwareUpdate"],
    configurationType: item["configurationType"],
    roleOverrideValues: !item["roleOverrideValues"]
      ? item["roleOverrideValues"]
      : item["roleOverrideValues"].map((p: any) => {
          return p;
        }),
    deploymentValues: item["deploymentValues"],
  };
}

export function networkFunctionValueWithoutSecretsDeserializer(
  item: any,
): NetworkFunctionValueWithoutSecrets {
  return {
    provisioningState: item["provisioningState"],
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    networkFunctionDefinitionGroupName: item["networkFunctionDefinitionGroupName"],
    networkFunctionDefinitionVersion: item["networkFunctionDefinitionVersion"],
    networkFunctionDefinitionOfferingLocation: item["networkFunctionDefinitionOfferingLocation"],
    networkFunctionDefinitionVersionResourceReference: !item[
      "networkFunctionDefinitionVersionResourceReference"
    ]
      ? item["networkFunctionDefinitionVersionResourceReference"]
      : deploymentResourceIdReferenceUnionDeserializer(
          item["networkFunctionDefinitionVersionResourceReference"],
        ),
    nfviType: item["nfviType"],
    nfviId: item["nfviId"],
    allowSoftwareUpdate: item["allowSoftwareUpdate"],
    configurationType: item["configurationType"],
    roleOverrideValues: !item["roleOverrideValues"]
      ? item["roleOverrideValues"]
      : item["roleOverrideValues"].map((p: any) => {
          return p;
        }),
    deploymentValues: item["deploymentValues"],
  };
}

/** The response of a NetworkFunction list operation. */
export interface _NetworkFunctionListResult {
  /** The NetworkFunction items on this page */
  value: NetworkFunction[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _networkFunctionListResultDeserializer(item: any): _NetworkFunctionListResult {
  return {
    value: networkFunctionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function networkFunctionArraySerializer(result: Array<NetworkFunction>): any[] {
  return result.map((item) => {
    return networkFunctionSerializer(item);
  });
}

export function networkFunctionArrayDeserializer(result: Array<NetworkFunction>): any[] {
  return result.map((item) => {
    return networkFunctionDeserializer(item);
  });
}

/** Payload for execute request post call. */
export interface ExecuteRequestParameters {
  /** The endpoint of service to call. */
  serviceEndpoint: string;
  /** The request metadata. */
  requestMetadata: RequestMetadata;
}

export function executeRequestParametersSerializer(item: ExecuteRequestParameters): any {
  return {
    serviceEndpoint: item["serviceEndpoint"],
    requestMetadata: requestMetadataSerializer(item["requestMetadata"]),
  };
}

/** Request metadata of execute request post call payload. */
export interface RequestMetadata {
  /** The relative path of the request. */
  relativePath: string;
  /** The http method of the request. */
  httpMethod: HttpMethod;
  /** The serialized body of the request. */
  serializedBody: string;
  /** The api version of the request. */
  apiVersion?: string;
}

export function requestMetadataSerializer(item: RequestMetadata): any {
  return {
    relativePath: item["relativePath"],
    httpMethod: item["httpMethod"],
    serializedBody: item["serializedBody"],
    apiVersion: item["apiVersion"],
  };
}

/** The http method of the request. */
export enum KnownHttpMethod {
  /** Unknown */
  Unknown = "Unknown",
  /** Post */
  Post = "Post",
  /** Put */
  Put = "Put",
  /** Get */
  Get = "Get",
  /** Patch */
  Patch = "Patch",
  /** Delete */
  Delete = "Delete",
}

/**
 * The http method of the request. \
 * {@link KnownHttpMethod} can be used interchangeably with HttpMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Post** \
 * **Put** \
 * **Get** \
 * **Patch** \
 * **Delete**
 */
export type HttpMethod = string;

/** The component sub resource. */
export interface Component extends ProxyResource {
  /** The component properties. */
  properties?: ComponentProperties;
}

export function componentDeserializer(item: any): Component {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : componentPropertiesDeserializer(item["properties"]),
  };
}

/** The component properties of the network function. */
export interface ComponentProperties {
  /** The provisioning state of the component resource. */
  readonly provisioningState?: ProvisioningState;
  /** The JSON-serialized deployment profile of the component resource. */
  readonly deploymentProfile?: string;
  /** The deployment status of the component resource. */
  readonly deploymentStatus?: DeploymentStatusProperties;
}

export function componentPropertiesDeserializer(item: any): ComponentProperties {
  return {
    provisioningState: item["provisioningState"],
    deploymentProfile: item["deploymentProfile"],
    deploymentStatus: !item["deploymentStatus"]
      ? item["deploymentStatus"]
      : deploymentStatusPropertiesDeserializer(item["deploymentStatus"]),
  };
}

/** The deployment status properties of the network function component. */
export interface DeploymentStatusProperties {
  /** The status of the component resource. */
  status?: Status;
  /** The resource related to the component resource. */
  resources?: Resources;
  /** The next expected update of deployment status. */
  nextExpectedUpdateAt?: Date;
}

export function deploymentStatusPropertiesDeserializer(item: any): DeploymentStatusProperties {
  return {
    status: item["status"],
    resources: !item["resources"] ? item["resources"] : resourcesDeserializer(item["resources"]),
    nextExpectedUpdateAt: !item["nextExpectedUpdateAt"]
      ? item["nextExpectedUpdateAt"]
      : new Date(item["nextExpectedUpdateAt"]),
  };
}

/** The component resource deployment status. */
export enum KnownStatus {
  /** Unknown */
  Unknown = "Unknown",
  /** Deployed */
  Deployed = "Deployed",
  /** Uninstalled */
  Uninstalled = "Uninstalled",
  /** Superseded */
  Superseded = "Superseded",
  /** Failed */
  Failed = "Failed",
  /** Uninstalling */
  Uninstalling = "Uninstalling",
  /** Pending-Install */
  PendingInstall = "Pending-Install",
  /** Pending-Upgrade */
  PendingUpgrade = "Pending-Upgrade",
  /** Pending-Rollback */
  PendingRollback = "Pending-Rollback",
  /** Downloading */
  Downloading = "Downloading",
  /** Installing */
  Installing = "Installing",
  /** Reinstalling */
  Reinstalling = "Reinstalling",
  /** Rollingback */
  Rollingback = "Rollingback",
  /** Upgrading */
  Upgrading = "Upgrading",
}

/**
 * The component resource deployment status. \
 * {@link KnownStatus} can be used interchangeably with Status,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Deployed** \
 * **Uninstalled** \
 * **Superseded** \
 * **Failed** \
 * **Uninstalling** \
 * **Pending-Install** \
 * **Pending-Upgrade** \
 * **Pending-Rollback** \
 * **Downloading** \
 * **Installing** \
 * **Reinstalling** \
 * **Rollingback** \
 * **Upgrading**
 */
export type Status = string;

/** The resources of the network function component. */
export interface Resources {
  /** Deployments that are related to component resource. */
  deployments?: Deployment[];
  /** Pods related to component resource. */
  pods?: Pod[];
  /** Replica sets related to component resource. */
  replicaSets?: ReplicaSet[];
  /** Stateful sets related to component resource. */
  statefulSets?: StatefulSet[];
  /** Daemonsets related to component resource. */
  daemonSets?: DaemonSet[];
}

export function resourcesDeserializer(item: any): Resources {
  return {
    deployments: !item["deployments"]
      ? item["deployments"]
      : deploymentArrayDeserializer(item["deployments"]),
    pods: !item["pods"] ? item["pods"] : podArrayDeserializer(item["pods"]),
    replicaSets: !item["replicaSets"]
      ? item["replicaSets"]
      : replicaSetArrayDeserializer(item["replicaSets"]),
    statefulSets: !item["statefulSets"]
      ? item["statefulSets"]
      : statefulSetArrayDeserializer(item["statefulSets"]),
    daemonSets: !item["daemonSets"]
      ? item["daemonSets"]
      : daemonSetArrayDeserializer(item["daemonSets"]),
  };
}

export function deploymentArrayDeserializer(result: Array<Deployment>): any[] {
  return result.map((item) => {
    return deploymentDeserializer(item);
  });
}

/** Helm Deployment status properties. */
export interface Deployment {
  /** The name of the deployment. */
  name?: string;
  /** The namespace of the deployment. */
  namespace?: string;
  /** Desired number of pods */
  desired?: number;
  /** Number of ready pods. */
  ready?: number;
  /** Number of upto date pods. */
  upToDate?: number;
  /** Number of available pods. */
  available?: number;
  /** Creation Time of deployment. */
  creationTime?: Date;
}

export function deploymentDeserializer(item: any): Deployment {
  return {
    name: item["name"],
    namespace: item["namespace"],
    desired: item["desired"],
    ready: item["ready"],
    upToDate: item["upToDate"],
    available: item["available"],
    creationTime: !item["creationTime"] ? item["creationTime"] : new Date(item["creationTime"]),
  };
}

export function podArrayDeserializer(result: Array<Pod>): any[] {
  return result.map((item) => {
    return podDeserializer(item);
  });
}

/** Helm Pod status properties. */
export interface Pod {
  /** The name of the Pod. */
  name?: string;
  /** The namespace of the Pod. */
  namespace?: string;
  /** Desired number of containers */
  desired?: number;
  /** Number of ready containers. */
  ready?: number;
  /** The status of a pod. */
  status?: PodStatus;
  /** Creation Time of Pod. */
  creationTime?: Date;
  /** Last 5 Pod events. */
  events?: PodEvent[];
}

export function podDeserializer(item: any): Pod {
  return {
    name: item["name"],
    namespace: item["namespace"],
    desired: item["desired"],
    ready: item["ready"],
    status: item["status"],
    creationTime: !item["creationTime"] ? item["creationTime"] : new Date(item["creationTime"]),
    events: !item["events"] ? item["events"] : podEventArrayDeserializer(item["events"]),
  };
}

/** The status of a Pod. */
export enum KnownPodStatus {
  /** Unknown */
  Unknown = "Unknown",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Running */
  Running = "Running",
  /** Pending */
  Pending = "Pending",
  /** Terminating */
  Terminating = "Terminating",
  /** NotReady */
  NotReady = "NotReady",
}

/**
 * The status of a Pod. \
 * {@link KnownPodStatus} can be used interchangeably with PodStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Succeeded** \
 * **Failed** \
 * **Running** \
 * **Pending** \
 * **Terminating** \
 * **NotReady**
 */
export type PodStatus = string;

export function podEventArrayDeserializer(result: Array<PodEvent>): any[] {
  return result.map((item) => {
    return podEventDeserializer(item);
  });
}

/** Pod Event  properties. */
export interface PodEvent {
  /** The type of pod event. */
  type?: PodEventType;
  /** Event reason. */
  reason?: string;
  /** Event message. */
  message?: string;
  /** Event Last seen. */
  lastSeenTime?: Date;
}

export function podEventDeserializer(item: any): PodEvent {
  return {
    type: item["type"],
    reason: item["reason"],
    message: item["message"],
    lastSeenTime: !item["lastSeenTime"] ? item["lastSeenTime"] : new Date(item["lastSeenTime"]),
  };
}

/** The type of pod event. */
export enum KnownPodEventType {
  /** Normal */
  Normal = "Normal",
  /** Warning */
  Warning = "Warning",
}

/**
 * The type of pod event. \
 * {@link KnownPodEventType} can be used interchangeably with PodEventType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Normal** \
 * **Warning**
 */
export type PodEventType = string;

export function replicaSetArrayDeserializer(result: Array<ReplicaSet>): any[] {
  return result.map((item) => {
    return replicaSetDeserializer(item);
  });
}

/** Helm ReplicaSet status properties. */
export interface ReplicaSet {
  /** The name of the replicaSet. */
  name?: string;
  /** The namespace of the replicaSet. */
  namespace?: string;
  /** Desired number of pods */
  desired?: number;
  /** Number of ready pods. */
  ready?: number;
  /** Number of current pods. */
  current?: number;
  /** Creation Time of replicaSet. */
  creationTime?: Date;
}

export function replicaSetDeserializer(item: any): ReplicaSet {
  return {
    name: item["name"],
    namespace: item["namespace"],
    desired: item["desired"],
    ready: item["ready"],
    current: item["current"],
    creationTime: !item["creationTime"] ? item["creationTime"] : new Date(item["creationTime"]),
  };
}

export function statefulSetArrayDeserializer(result: Array<StatefulSet>): any[] {
  return result.map((item) => {
    return statefulSetDeserializer(item);
  });
}

/** Helm StatefulSet status properties. */
export interface StatefulSet {
  /** The name of the statefulset. */
  name?: string;
  /** The namespace of the statefulset. */
  namespace?: string;
  /** Desired number of pods */
  desired?: number;
  /** Number of ready pods. */
  ready?: number;
  /** Creation Time of statefulset. */
  creationTime?: Date;
}

export function statefulSetDeserializer(item: any): StatefulSet {
  return {
    name: item["name"],
    namespace: item["namespace"],
    desired: item["desired"],
    ready: item["ready"],
    creationTime: !item["creationTime"] ? item["creationTime"] : new Date(item["creationTime"]),
  };
}

export function daemonSetArrayDeserializer(result: Array<DaemonSet>): any[] {
  return result.map((item) => {
    return daemonSetDeserializer(item);
  });
}

/** Helm DaemonSet status properties. */
export interface DaemonSet {
  /** The name of the daemonSet. */
  name?: string;
  /** The namespace of the daemonSet. */
  namespace?: string;
  /** Desired number of pods */
  desired?: number;
  /** Current number of pods */
  current?: number;
  /** Number of Ready pods */
  ready?: number;
  /** Number of  upto date pods */
  upToDate?: number;
  /** Number of available pods. */
  available?: number;
  /** Creation Time of daemonSet. */
  creationTime?: Date;
}

export function daemonSetDeserializer(item: any): DaemonSet {
  return {
    name: item["name"],
    namespace: item["namespace"],
    desired: item["desired"],
    current: item["current"],
    ready: item["ready"],
    upToDate: item["upToDate"],
    available: item["available"],
    creationTime: !item["creationTime"] ? item["creationTime"] : new Date(item["creationTime"]),
  };
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

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

/** The response of a Component list operation. */
export interface _ComponentListResult {
  /** The Component items on this page */
  value: Component[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _componentListResultDeserializer(item: any): _ComponentListResult {
  return {
    value: componentArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function componentArrayDeserializer(result: Array<Component>): any[] {
  return result.map((item) => {
    return componentDeserializer(item);
  });
}

/** Network function definition group resource. */
export interface NetworkFunctionDefinitionGroup extends TrackedResource {
  /** Network function definition group properties. */
  properties?: NetworkFunctionDefinitionGroupPropertiesFormat;
}

export function networkFunctionDefinitionGroupSerializer(
  item: NetworkFunctionDefinitionGroup,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : networkFunctionDefinitionGroupPropertiesFormatSerializer(item["properties"]),
  };
}

export function networkFunctionDefinitionGroupDeserializer(
  item: any,
): NetworkFunctionDefinitionGroup {
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
      : networkFunctionDefinitionGroupPropertiesFormatDeserializer(item["properties"]),
  };
}

/** Network function definition group properties. */
export interface NetworkFunctionDefinitionGroupPropertiesFormat {
  /** The provisioning state of the network function definition groups resource. */
  readonly provisioningState?: ProvisioningState;
  /** The network function definition group description. */
  description?: string;
}

export function networkFunctionDefinitionGroupPropertiesFormatSerializer(
  item: NetworkFunctionDefinitionGroupPropertiesFormat,
): any {
  return { description: item["description"] };
}

export function networkFunctionDefinitionGroupPropertiesFormatDeserializer(
  item: any,
): NetworkFunctionDefinitionGroupPropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    description: item["description"],
  };
}

/** The response of a NetworkFunctionDefinitionGroup list operation. */
export interface _NetworkFunctionDefinitionGroupListResult {
  /** The NetworkFunctionDefinitionGroup items on this page */
  value: NetworkFunctionDefinitionGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _networkFunctionDefinitionGroupListResultDeserializer(
  item: any,
): _NetworkFunctionDefinitionGroupListResult {
  return {
    value: networkFunctionDefinitionGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function networkFunctionDefinitionGroupArraySerializer(
  result: Array<NetworkFunctionDefinitionGroup>,
): any[] {
  return result.map((item) => {
    return networkFunctionDefinitionGroupSerializer(item);
  });
}

export function networkFunctionDefinitionGroupArrayDeserializer(
  result: Array<NetworkFunctionDefinitionGroup>,
): any[] {
  return result.map((item) => {
    return networkFunctionDefinitionGroupDeserializer(item);
  });
}

/** Network function definition version. */
export interface NetworkFunctionDefinitionVersion extends TrackedResource {
  /** Network function definition version properties. */
  properties?: NetworkFunctionDefinitionVersionPropertiesFormatUnion;
}

export function networkFunctionDefinitionVersionSerializer(
  item: NetworkFunctionDefinitionVersion,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : networkFunctionDefinitionVersionPropertiesFormatUnionSerializer(item["properties"]),
  };
}

export function networkFunctionDefinitionVersionDeserializer(
  item: any,
): NetworkFunctionDefinitionVersion {
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
      : networkFunctionDefinitionVersionPropertiesFormatUnionDeserializer(item["properties"]),
  };
}

/** Network function definition version properties. */
export interface NetworkFunctionDefinitionVersionPropertiesFormat {
  /** The provisioning state of the network function definition version resource. */
  readonly provisioningState?: ProvisioningState;
  /** The network function definition version state. */
  readonly versionState?: VersionState;
  /** The network function definition version description. */
  description?: string;
  /** The deployment parameters of the network function definition version. */
  deployParameters?: string;
  /** The network function type. */
  /** The discriminator possible values: ContainerizedNetworkFunction, VirtualNetworkFunction */
  networkFunctionType: NetworkFunctionType;
}

export function networkFunctionDefinitionVersionPropertiesFormatSerializer(
  item: NetworkFunctionDefinitionVersionPropertiesFormat,
): any {
  return {
    description: item["description"],
    deployParameters: item["deployParameters"],
    networkFunctionType: item["networkFunctionType"],
  };
}

export function networkFunctionDefinitionVersionPropertiesFormatDeserializer(
  item: any,
): NetworkFunctionDefinitionVersionPropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    versionState: item["versionState"],
    description: item["description"],
    deployParameters: item["deployParameters"],
    networkFunctionType: item["networkFunctionType"],
  };
}

/** Alias for NetworkFunctionDefinitionVersionPropertiesFormatUnion */
export type NetworkFunctionDefinitionVersionPropertiesFormatUnion =
  | ContainerizedNetworkFunctionDefinitionVersion
  | VirtualNetworkFunctionNetworkFunctionDefinitionVersion
  | NetworkFunctionDefinitionVersionPropertiesFormat;

export function networkFunctionDefinitionVersionPropertiesFormatUnionSerializer(
  item: NetworkFunctionDefinitionVersionPropertiesFormatUnion,
): any {
  switch (item.networkFunctionType) {
    case "ContainerizedNetworkFunction":
      return containerizedNetworkFunctionDefinitionVersionSerializer(
        item as ContainerizedNetworkFunctionDefinitionVersion,
      );

    case "VirtualNetworkFunction":
      return virtualNetworkFunctionNetworkFunctionDefinitionVersionSerializer(
        item as VirtualNetworkFunctionNetworkFunctionDefinitionVersion,
      );

    default:
      return networkFunctionDefinitionVersionPropertiesFormatSerializer(item);
  }
}

export function networkFunctionDefinitionVersionPropertiesFormatUnionDeserializer(
  item: any,
): NetworkFunctionDefinitionVersionPropertiesFormatUnion {
  switch (item.networkFunctionType) {
    case "ContainerizedNetworkFunction":
      return containerizedNetworkFunctionDefinitionVersionDeserializer(
        item as ContainerizedNetworkFunctionDefinitionVersion,
      );

    case "VirtualNetworkFunction":
      return virtualNetworkFunctionNetworkFunctionDefinitionVersionDeserializer(
        item as VirtualNetworkFunctionNetworkFunctionDefinitionVersion,
      );

    default:
      return networkFunctionDefinitionVersionPropertiesFormatDeserializer(item);
  }
}

/** The network function type. */
export enum KnownNetworkFunctionType {
  /** Unknown */
  Unknown = "Unknown",
  /** VirtualNetworkFunction */
  VirtualNetworkFunction = "VirtualNetworkFunction",
  /** ContainerizedNetworkFunction */
  ContainerizedNetworkFunction = "ContainerizedNetworkFunction",
}

/**
 * The network function type. \
 * {@link KnownNetworkFunctionType} can be used interchangeably with NetworkFunctionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **VirtualNetworkFunction** \
 * **ContainerizedNetworkFunction**
 */
export type NetworkFunctionType = string;

/** Containerized network function network function definition version properties. */
export interface ContainerizedNetworkFunctionDefinitionVersion extends NetworkFunctionDefinitionVersionPropertiesFormat {
  /** Containerized network function template. */
  networkFunctionTemplate?: ContainerizedNetworkFunctionTemplateUnion;
  /** The network function type. */
  networkFunctionType: "ContainerizedNetworkFunction";
}

export function containerizedNetworkFunctionDefinitionVersionSerializer(
  item: ContainerizedNetworkFunctionDefinitionVersion,
): any {
  return {
    description: item["description"],
    deployParameters: item["deployParameters"],
    networkFunctionType: item["networkFunctionType"],
    networkFunctionTemplate: !item["networkFunctionTemplate"]
      ? item["networkFunctionTemplate"]
      : containerizedNetworkFunctionTemplateUnionSerializer(item["networkFunctionTemplate"]),
  };
}

export function containerizedNetworkFunctionDefinitionVersionDeserializer(
  item: any,
): ContainerizedNetworkFunctionDefinitionVersion {
  return {
    provisioningState: item["provisioningState"],
    versionState: item["versionState"],
    description: item["description"],
    deployParameters: item["deployParameters"],
    networkFunctionType: item["networkFunctionType"],
    networkFunctionTemplate: !item["networkFunctionTemplate"]
      ? item["networkFunctionTemplate"]
      : containerizedNetworkFunctionTemplateUnionDeserializer(item["networkFunctionTemplate"]),
  };
}

/** Containerized network function template. */
export interface ContainerizedNetworkFunctionTemplate {
  /** The network function type. */
  /** The discriminator possible values: AzureArcKubernetes */
  nfviType: ContainerizedNetworkFunctionNfviType;
}

export function containerizedNetworkFunctionTemplateSerializer(
  item: ContainerizedNetworkFunctionTemplate,
): any {
  return { nfviType: item["nfviType"] };
}

export function containerizedNetworkFunctionTemplateDeserializer(
  item: any,
): ContainerizedNetworkFunctionTemplate {
  return {
    nfviType: item["nfviType"],
  };
}

/** Alias for ContainerizedNetworkFunctionTemplateUnion */
export type ContainerizedNetworkFunctionTemplateUnion =
  | AzureArcKubernetesNetworkFunctionTemplate
  | ContainerizedNetworkFunctionTemplate;

export function containerizedNetworkFunctionTemplateUnionSerializer(
  item: ContainerizedNetworkFunctionTemplateUnion,
): any {
  switch (item.nfviType) {
    case "AzureArcKubernetes":
      return azureArcKubernetesNetworkFunctionTemplateSerializer(
        item as AzureArcKubernetesNetworkFunctionTemplate,
      );

    default:
      return containerizedNetworkFunctionTemplateSerializer(item);
  }
}

export function containerizedNetworkFunctionTemplateUnionDeserializer(
  item: any,
): ContainerizedNetworkFunctionTemplateUnion {
  switch (item.nfviType) {
    case "AzureArcKubernetes":
      return azureArcKubernetesNetworkFunctionTemplateDeserializer(
        item as AzureArcKubernetesNetworkFunctionTemplate,
      );

    default:
      return containerizedNetworkFunctionTemplateDeserializer(item);
  }
}

/** The network function type. */
export enum KnownContainerizedNetworkFunctionNfviType {
  /** Unknown */
  Unknown = "Unknown",
  /** AzureArcKubernetes */
  AzureArcKubernetes = "AzureArcKubernetes",
}

/**
 * The network function type. \
 * {@link KnownContainerizedNetworkFunctionNfviType} can be used interchangeably with ContainerizedNetworkFunctionNfviType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **AzureArcKubernetes**
 */
export type ContainerizedNetworkFunctionNfviType = string;

/** Azure Arc kubernetes network function template. */
export interface AzureArcKubernetesNetworkFunctionTemplate extends ContainerizedNetworkFunctionTemplate {
  /** Network function applications. */
  networkFunctionApplications?: AzureArcKubernetesNetworkFunctionApplicationUnion[];
  /** The network function type. */
  nfviType: "AzureArcKubernetes";
}

export function azureArcKubernetesNetworkFunctionTemplateSerializer(
  item: AzureArcKubernetesNetworkFunctionTemplate,
): any {
  return {
    nfviType: item["nfviType"],
    networkFunctionApplications: !item["networkFunctionApplications"]
      ? item["networkFunctionApplications"]
      : azureArcKubernetesNetworkFunctionApplicationUnionArraySerializer(
          item["networkFunctionApplications"],
        ),
  };
}

export function azureArcKubernetesNetworkFunctionTemplateDeserializer(
  item: any,
): AzureArcKubernetesNetworkFunctionTemplate {
  return {
    nfviType: item["nfviType"],
    networkFunctionApplications: !item["networkFunctionApplications"]
      ? item["networkFunctionApplications"]
      : azureArcKubernetesNetworkFunctionApplicationUnionArrayDeserializer(
          item["networkFunctionApplications"],
        ),
  };
}

export function azureArcKubernetesNetworkFunctionApplicationUnionArraySerializer(
  result: Array<AzureArcKubernetesNetworkFunctionApplicationUnion>,
): any[] {
  return result.map((item) => {
    return azureArcKubernetesNetworkFunctionApplicationUnionSerializer(item);
  });
}

export function azureArcKubernetesNetworkFunctionApplicationUnionArrayDeserializer(
  result: Array<AzureArcKubernetesNetworkFunctionApplicationUnion>,
): any[] {
  return result.map((item) => {
    return azureArcKubernetesNetworkFunctionApplicationUnionDeserializer(item);
  });
}

/** Azure arc kubernetes network function application definition. */
export interface AzureArcKubernetesNetworkFunctionApplication extends NetworkFunctionApplication {
  /** The artifact type. */
  /** The discriminator possible values: HelmPackage */
  artifactType: AzureArcKubernetesArtifactType;
}

export function azureArcKubernetesNetworkFunctionApplicationSerializer(
  item: AzureArcKubernetesNetworkFunctionApplication,
): any {
  return {
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    artifactType: item["artifactType"],
  };
}

export function azureArcKubernetesNetworkFunctionApplicationDeserializer(
  item: any,
): AzureArcKubernetesNetworkFunctionApplication {
  return {
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    artifactType: item["artifactType"],
  };
}

/** Alias for AzureArcKubernetesNetworkFunctionApplicationUnion */
export type AzureArcKubernetesNetworkFunctionApplicationUnion =
  | AzureArcKubernetesHelmApplication
  | AzureArcKubernetesNetworkFunctionApplication;

export function azureArcKubernetesNetworkFunctionApplicationUnionSerializer(
  item: AzureArcKubernetesNetworkFunctionApplicationUnion,
): any {
  switch (item.artifactType) {
    case "HelmPackage":
      return azureArcKubernetesHelmApplicationSerializer(item as AzureArcKubernetesHelmApplication);

    default:
      return azureArcKubernetesNetworkFunctionApplicationSerializer(item);
  }
}

export function azureArcKubernetesNetworkFunctionApplicationUnionDeserializer(
  item: any,
): AzureArcKubernetesNetworkFunctionApplicationUnion {
  switch (item.artifactType) {
    case "HelmPackage":
      return azureArcKubernetesHelmApplicationDeserializer(
        item as AzureArcKubernetesHelmApplication,
      );

    default:
      return azureArcKubernetesNetworkFunctionApplicationDeserializer(item);
  }
}

/** The artifact type. */
export enum KnownAzureArcKubernetesArtifactType {
  /** Unknown */
  Unknown = "Unknown",
  /** HelmPackage */
  HelmPackage = "HelmPackage",
}

/**
 * The artifact type. \
 * {@link KnownAzureArcKubernetesArtifactType} can be used interchangeably with AzureArcKubernetesArtifactType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **HelmPackage**
 */
export type AzureArcKubernetesArtifactType = string;

/** Azure arc kubernetes helm application configurations. */
export interface AzureArcKubernetesHelmApplication extends AzureArcKubernetesNetworkFunctionApplication {
  /** Azure arc kubernetes artifact profile. */
  artifactProfile?: AzureArcKubernetesArtifactProfile;
  /** Deploy mapping rule profile. */
  deployParametersMappingRuleProfile?: AzureArcKubernetesDeployMappingRuleProfile;
  /** The artifact type. */
  artifactType: "HelmPackage";
}

export function azureArcKubernetesHelmApplicationSerializer(
  item: AzureArcKubernetesHelmApplication,
): any {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureArcKubernetesArtifactProfileSerializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureArcKubernetesDeployMappingRuleProfileSerializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

export function azureArcKubernetesHelmApplicationDeserializer(
  item: any,
): AzureArcKubernetesHelmApplication {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureArcKubernetesArtifactProfileDeserializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureArcKubernetesDeployMappingRuleProfileDeserializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

/** Azure arc kubernetes artifact profile properties. */
export interface AzureArcKubernetesArtifactProfile extends ArtifactProfile {
  /** Helm artifact profile. */
  helmArtifactProfile?: HelmArtifactProfile;
}

export function azureArcKubernetesArtifactProfileSerializer(
  item: AzureArcKubernetesArtifactProfile,
): any {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceSerializer(item["artifactStore"]),
    helmArtifactProfile: !item["helmArtifactProfile"]
      ? item["helmArtifactProfile"]
      : helmArtifactProfileSerializer(item["helmArtifactProfile"]),
  };
}

export function azureArcKubernetesArtifactProfileDeserializer(
  item: any,
): AzureArcKubernetesArtifactProfile {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceDeserializer(item["artifactStore"]),
    helmArtifactProfile: !item["helmArtifactProfile"]
      ? item["helmArtifactProfile"]
      : helmArtifactProfileDeserializer(item["helmArtifactProfile"]),
  };
}

/** Helm artifact profile. */
export interface HelmArtifactProfile {
  /** Helm package name. */
  helmPackageName?: string;
  /** Helm package version range. */
  helmPackageVersionRange?: string;
  /** The registry values path list. */
  registryValuesPaths?: string[];
  /** The image pull secrets values path list. */
  imagePullSecretsValuesPaths?: string[];
}

export function helmArtifactProfileSerializer(item: HelmArtifactProfile): any {
  return {
    helmPackageName: item["helmPackageName"],
    helmPackageVersionRange: item["helmPackageVersionRange"],
    registryValuesPaths: !item["registryValuesPaths"]
      ? item["registryValuesPaths"]
      : item["registryValuesPaths"].map((p: any) => {
          return p;
        }),
    imagePullSecretsValuesPaths: !item["imagePullSecretsValuesPaths"]
      ? item["imagePullSecretsValuesPaths"]
      : item["imagePullSecretsValuesPaths"].map((p: any) => {
          return p;
        }),
  };
}

export function helmArtifactProfileDeserializer(item: any): HelmArtifactProfile {
  return {
    helmPackageName: item["helmPackageName"],
    helmPackageVersionRange: item["helmPackageVersionRange"],
    registryValuesPaths: !item["registryValuesPaths"]
      ? item["registryValuesPaths"]
      : item["registryValuesPaths"].map((p: any) => {
          return p;
        }),
    imagePullSecretsValuesPaths: !item["imagePullSecretsValuesPaths"]
      ? item["imagePullSecretsValuesPaths"]
      : item["imagePullSecretsValuesPaths"].map((p: any) => {
          return p;
        }),
  };
}

/** Azure arc kubernetes deploy mapping rule profile. */
export interface AzureArcKubernetesDeployMappingRuleProfile extends MappingRuleProfile {
  /** The helm mapping rule profile. */
  helmMappingRuleProfile?: HelmMappingRuleProfile;
}

export function azureArcKubernetesDeployMappingRuleProfileSerializer(
  item: AzureArcKubernetesDeployMappingRuleProfile,
): any {
  return {
    applicationEnablement: item["applicationEnablement"],
    helmMappingRuleProfile: !item["helmMappingRuleProfile"]
      ? item["helmMappingRuleProfile"]
      : helmMappingRuleProfileSerializer(item["helmMappingRuleProfile"]),
  };
}

export function azureArcKubernetesDeployMappingRuleProfileDeserializer(
  item: any,
): AzureArcKubernetesDeployMappingRuleProfile {
  return {
    applicationEnablement: item["applicationEnablement"],
    helmMappingRuleProfile: !item["helmMappingRuleProfile"]
      ? item["helmMappingRuleProfile"]
      : helmMappingRuleProfileDeserializer(item["helmMappingRuleProfile"]),
  };
}

/** Helm mapping rule profile */
export interface HelmMappingRuleProfile {
  /** Helm release namespace. */
  releaseNamespace?: string;
  /** Helm release name. */
  releaseName?: string;
  /** Helm package version. */
  helmPackageVersion?: string;
  /** Helm release values. */
  values?: string;
  /** The helm deployment options */
  options?: HelmMappingRuleProfileOptions;
}

export function helmMappingRuleProfileSerializer(item: HelmMappingRuleProfile): any {
  return {
    releaseNamespace: item["releaseNamespace"],
    releaseName: item["releaseName"],
    helmPackageVersion: item["helmPackageVersion"],
    values: item["values"],
    options: !item["options"]
      ? item["options"]
      : helmMappingRuleProfileOptionsSerializer(item["options"]),
  };
}

export function helmMappingRuleProfileDeserializer(item: any): HelmMappingRuleProfile {
  return {
    releaseNamespace: item["releaseNamespace"],
    releaseName: item["releaseName"],
    helmPackageVersion: item["helmPackageVersion"],
    values: item["values"],
    options: !item["options"]
      ? item["options"]
      : helmMappingRuleProfileOptionsDeserializer(item["options"]),
  };
}

/** The helm deployment options */
export interface HelmMappingRuleProfileOptions {
  /** The helm deployment install options */
  installOptions?: HelmInstallOptions;
  /** The helm deployment upgrade options */
  upgradeOptions?: HelmUpgradeOptions;
}

export function helmMappingRuleProfileOptionsSerializer(item: HelmMappingRuleProfileOptions): any {
  return {
    installOptions: !item["installOptions"]
      ? item["installOptions"]
      : helmInstallOptionsSerializer(item["installOptions"]),
    upgradeOptions: !item["upgradeOptions"]
      ? item["upgradeOptions"]
      : helmUpgradeOptionsSerializer(item["upgradeOptions"]),
  };
}

export function helmMappingRuleProfileOptionsDeserializer(
  item: any,
): HelmMappingRuleProfileOptions {
  return {
    installOptions: !item["installOptions"]
      ? item["installOptions"]
      : helmInstallOptionsDeserializer(item["installOptions"]),
    upgradeOptions: !item["upgradeOptions"]
      ? item["upgradeOptions"]
      : helmUpgradeOptionsDeserializer(item["upgradeOptions"]),
  };
}

/** The helm deployment install options */
export interface HelmInstallOptions {
  /** The helm deployment atomic options */
  atomic?: string;
  /** The helm deployment wait options */
  wait?: string;
  /** The helm deployment timeout options */
  timeout?: string;
}

export function helmInstallOptionsSerializer(item: HelmInstallOptions): any {
  return { atomic: item["atomic"], wait: item["wait"], timeout: item["timeout"] };
}

export function helmInstallOptionsDeserializer(item: any): HelmInstallOptions {
  return {
    atomic: item["atomic"],
    wait: item["wait"],
    timeout: item["timeout"],
  };
}

/** The helm deployment install options */
export interface HelmUpgradeOptions {
  /** The helm deployment atomic options */
  atomic?: string;
  /** The helm deployment wait options */
  wait?: string;
  /** The helm deployment timeout options */
  timeout?: string;
}

export function helmUpgradeOptionsSerializer(item: HelmUpgradeOptions): any {
  return { atomic: item["atomic"], wait: item["wait"], timeout: item["timeout"] };
}

export function helmUpgradeOptionsDeserializer(item: any): HelmUpgradeOptions {
  return {
    atomic: item["atomic"],
    wait: item["wait"],
    timeout: item["timeout"],
  };
}

/** Virtual network function network function definition version properties. */
export interface VirtualNetworkFunctionNetworkFunctionDefinitionVersion extends NetworkFunctionDefinitionVersionPropertiesFormat {
  /** Virtual network function template. */
  networkFunctionTemplate?: VirtualNetworkFunctionTemplateUnion;
  /** The network function type. */
  networkFunctionType: "VirtualNetworkFunction";
}

export function virtualNetworkFunctionNetworkFunctionDefinitionVersionSerializer(
  item: VirtualNetworkFunctionNetworkFunctionDefinitionVersion,
): any {
  return {
    description: item["description"],
    deployParameters: item["deployParameters"],
    networkFunctionType: item["networkFunctionType"],
    networkFunctionTemplate: !item["networkFunctionTemplate"]
      ? item["networkFunctionTemplate"]
      : virtualNetworkFunctionTemplateUnionSerializer(item["networkFunctionTemplate"]),
  };
}

export function virtualNetworkFunctionNetworkFunctionDefinitionVersionDeserializer(
  item: any,
): VirtualNetworkFunctionNetworkFunctionDefinitionVersion {
  return {
    provisioningState: item["provisioningState"],
    versionState: item["versionState"],
    description: item["description"],
    deployParameters: item["deployParameters"],
    networkFunctionType: item["networkFunctionType"],
    networkFunctionTemplate: !item["networkFunctionTemplate"]
      ? item["networkFunctionTemplate"]
      : virtualNetworkFunctionTemplateUnionDeserializer(item["networkFunctionTemplate"]),
  };
}

/** Virtual network function template. */
export interface VirtualNetworkFunctionTemplate {
  /** The network function type. */
  /** The discriminator possible values: AzureCore, AzureOperatorNexus */
  nfviType: VirtualNetworkFunctionNfviType;
}

export function virtualNetworkFunctionTemplateSerializer(
  item: VirtualNetworkFunctionTemplate,
): any {
  return { nfviType: item["nfviType"] };
}

export function virtualNetworkFunctionTemplateDeserializer(
  item: any,
): VirtualNetworkFunctionTemplate {
  return {
    nfviType: item["nfviType"],
  };
}

/** Alias for VirtualNetworkFunctionTemplateUnion */
export type VirtualNetworkFunctionTemplateUnion =
  | AzureCoreNetworkFunctionTemplate
  | AzureOperatorNexusNetworkFunctionTemplate
  | VirtualNetworkFunctionTemplate;

export function virtualNetworkFunctionTemplateUnionSerializer(
  item: VirtualNetworkFunctionTemplateUnion,
): any {
  switch (item.nfviType) {
    case "AzureCore":
      return azureCoreNetworkFunctionTemplateSerializer(item as AzureCoreNetworkFunctionTemplate);

    case "AzureOperatorNexus":
      return azureOperatorNexusNetworkFunctionTemplateSerializer(
        item as AzureOperatorNexusNetworkFunctionTemplate,
      );

    default:
      return virtualNetworkFunctionTemplateSerializer(item);
  }
}

export function virtualNetworkFunctionTemplateUnionDeserializer(
  item: any,
): VirtualNetworkFunctionTemplateUnion {
  switch (item.nfviType) {
    case "AzureCore":
      return azureCoreNetworkFunctionTemplateDeserializer(item as AzureCoreNetworkFunctionTemplate);

    case "AzureOperatorNexus":
      return azureOperatorNexusNetworkFunctionTemplateDeserializer(
        item as AzureOperatorNexusNetworkFunctionTemplate,
      );

    default:
      return virtualNetworkFunctionTemplateDeserializer(item);
  }
}

/** The network function type. */
export enum KnownVirtualNetworkFunctionNfviType {
  /** Unknown */
  Unknown = "Unknown",
  /** AzureCore */
  AzureCore = "AzureCore",
  /** AzureOperatorNexus */
  AzureOperatorNexus = "AzureOperatorNexus",
}

/**
 * The network function type. \
 * {@link KnownVirtualNetworkFunctionNfviType} can be used interchangeably with VirtualNetworkFunctionNfviType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **AzureCore** \
 * **AzureOperatorNexus**
 */
export type VirtualNetworkFunctionNfviType = string;

/** Azure virtual network function template. */
export interface AzureCoreNetworkFunctionTemplate extends VirtualNetworkFunctionTemplate {
  /** Network function applications. */
  networkFunctionApplications?: AzureCoreNetworkFunctionApplicationUnion[];
  /** The network function type. */
  nfviType: "AzureCore";
}

export function azureCoreNetworkFunctionTemplateSerializer(
  item: AzureCoreNetworkFunctionTemplate,
): any {
  return {
    nfviType: item["nfviType"],
    networkFunctionApplications: !item["networkFunctionApplications"]
      ? item["networkFunctionApplications"]
      : azureCoreNetworkFunctionApplicationUnionArraySerializer(
          item["networkFunctionApplications"],
        ),
  };
}

export function azureCoreNetworkFunctionTemplateDeserializer(
  item: any,
): AzureCoreNetworkFunctionTemplate {
  return {
    nfviType: item["nfviType"],
    networkFunctionApplications: !item["networkFunctionApplications"]
      ? item["networkFunctionApplications"]
      : azureCoreNetworkFunctionApplicationUnionArrayDeserializer(
          item["networkFunctionApplications"],
        ),
  };
}

export function azureCoreNetworkFunctionApplicationUnionArraySerializer(
  result: Array<AzureCoreNetworkFunctionApplicationUnion>,
): any[] {
  return result.map((item) => {
    return azureCoreNetworkFunctionApplicationUnionSerializer(item);
  });
}

export function azureCoreNetworkFunctionApplicationUnionArrayDeserializer(
  result: Array<AzureCoreNetworkFunctionApplicationUnion>,
): any[] {
  return result.map((item) => {
    return azureCoreNetworkFunctionApplicationUnionDeserializer(item);
  });
}

/** Azure virtual network function application definition. */
export interface AzureCoreNetworkFunctionApplication extends NetworkFunctionApplication {
  /** The artifact type. */
  /** The discriminator possible values: VhdImageFile, ArmTemplate */
  artifactType: AzureCoreArtifactType;
}

export function azureCoreNetworkFunctionApplicationSerializer(
  item: AzureCoreNetworkFunctionApplication,
): any {
  return {
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    artifactType: item["artifactType"],
  };
}

export function azureCoreNetworkFunctionApplicationDeserializer(
  item: any,
): AzureCoreNetworkFunctionApplication {
  return {
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    artifactType: item["artifactType"],
  };
}

/** Alias for AzureCoreNetworkFunctionApplicationUnion */
export type AzureCoreNetworkFunctionApplicationUnion =
  | AzureCoreNetworkFunctionVhdApplication
  | AzureCoreNetworkFunctionArmTemplateApplication
  | AzureCoreNetworkFunctionApplication;

export function azureCoreNetworkFunctionApplicationUnionSerializer(
  item: AzureCoreNetworkFunctionApplicationUnion,
): any {
  switch (item.artifactType) {
    case "VhdImageFile":
      return azureCoreNetworkFunctionVhdApplicationSerializer(
        item as AzureCoreNetworkFunctionVhdApplication,
      );

    case "ArmTemplate":
      return azureCoreNetworkFunctionArmTemplateApplicationSerializer(
        item as AzureCoreNetworkFunctionArmTemplateApplication,
      );

    default:
      return azureCoreNetworkFunctionApplicationSerializer(item);
  }
}

export function azureCoreNetworkFunctionApplicationUnionDeserializer(
  item: any,
): AzureCoreNetworkFunctionApplicationUnion {
  switch (item.artifactType) {
    case "VhdImageFile":
      return azureCoreNetworkFunctionVhdApplicationDeserializer(
        item as AzureCoreNetworkFunctionVhdApplication,
      );

    case "ArmTemplate":
      return azureCoreNetworkFunctionArmTemplateApplicationDeserializer(
        item as AzureCoreNetworkFunctionArmTemplateApplication,
      );

    default:
      return azureCoreNetworkFunctionApplicationDeserializer(item);
  }
}

/** The artifact type. */
export enum KnownAzureCoreArtifactType {
  /** Unknown */
  Unknown = "Unknown",
  /** VhdImageFile */
  VhdImageFile = "VhdImageFile",
  /** ArmTemplate */
  ArmTemplate = "ArmTemplate",
}

/**
 * The artifact type. \
 * {@link KnownAzureCoreArtifactType} can be used interchangeably with AzureCoreArtifactType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **VhdImageFile** \
 * **ArmTemplate**
 */
export type AzureCoreArtifactType = string;

/** Azure core network function vhd application definition. */
export interface AzureCoreNetworkFunctionVhdApplication extends AzureCoreNetworkFunctionApplication {
  /** Azure vhd image artifact profile. */
  artifactProfile?: AzureCoreVhdImageArtifactProfile;
  /** Deploy mapping rule profile. */
  deployParametersMappingRuleProfile?: AzureCoreVhdImageDeployMappingRuleProfile;
  /** The artifact type. */
  artifactType: "VhdImageFile";
}

export function azureCoreNetworkFunctionVhdApplicationSerializer(
  item: AzureCoreNetworkFunctionVhdApplication,
): any {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureCoreVhdImageArtifactProfileSerializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureCoreVhdImageDeployMappingRuleProfileSerializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

export function azureCoreNetworkFunctionVhdApplicationDeserializer(
  item: any,
): AzureCoreNetworkFunctionVhdApplication {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureCoreVhdImageArtifactProfileDeserializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureCoreVhdImageDeployMappingRuleProfileDeserializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

/** Azure vhd artifact profile properties. */
export interface AzureCoreVhdImageArtifactProfile extends ArtifactProfile {
  /** Vhd artifact profile. */
  vhdArtifactProfile?: VhdImageArtifactProfile;
}

export function azureCoreVhdImageArtifactProfileSerializer(
  item: AzureCoreVhdImageArtifactProfile,
): any {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceSerializer(item["artifactStore"]),
    vhdArtifactProfile: !item["vhdArtifactProfile"]
      ? item["vhdArtifactProfile"]
      : vhdImageArtifactProfileSerializer(item["vhdArtifactProfile"]),
  };
}

export function azureCoreVhdImageArtifactProfileDeserializer(
  item: any,
): AzureCoreVhdImageArtifactProfile {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceDeserializer(item["artifactStore"]),
    vhdArtifactProfile: !item["vhdArtifactProfile"]
      ? item["vhdArtifactProfile"]
      : vhdImageArtifactProfileDeserializer(item["vhdArtifactProfile"]),
  };
}

/** Vhd artifact profile. */
export interface VhdImageArtifactProfile {
  /** Vhd name. */
  vhdName?: string;
  /** Vhd version. */
  vhdVersion?: string;
}

export function vhdImageArtifactProfileSerializer(item: VhdImageArtifactProfile): any {
  return { vhdName: item["vhdName"], vhdVersion: item["vhdVersion"] };
}

export function vhdImageArtifactProfileDeserializer(item: any): VhdImageArtifactProfile {
  return {
    vhdName: item["vhdName"],
    vhdVersion: item["vhdVersion"],
  };
}

/** Azure vhd deploy mapping rule profile. */
export interface AzureCoreVhdImageDeployMappingRuleProfile extends MappingRuleProfile {
  /** The vhd mapping rule profile. */
  vhdImageMappingRuleProfile?: VhdImageMappingRuleProfile;
}

export function azureCoreVhdImageDeployMappingRuleProfileSerializer(
  item: AzureCoreVhdImageDeployMappingRuleProfile,
): any {
  return {
    applicationEnablement: item["applicationEnablement"],
    vhdImageMappingRuleProfile: !item["vhdImageMappingRuleProfile"]
      ? item["vhdImageMappingRuleProfile"]
      : vhdImageMappingRuleProfileSerializer(item["vhdImageMappingRuleProfile"]),
  };
}

export function azureCoreVhdImageDeployMappingRuleProfileDeserializer(
  item: any,
): AzureCoreVhdImageDeployMappingRuleProfile {
  return {
    applicationEnablement: item["applicationEnablement"],
    vhdImageMappingRuleProfile: !item["vhdImageMappingRuleProfile"]
      ? item["vhdImageMappingRuleProfile"]
      : vhdImageMappingRuleProfileDeserializer(item["vhdImageMappingRuleProfile"]),
  };
}

/** Vhd mapping rule profile */
export interface VhdImageMappingRuleProfile {
  /** List of values. */
  userConfiguration?: string;
}

export function vhdImageMappingRuleProfileSerializer(item: VhdImageMappingRuleProfile): any {
  return { userConfiguration: item["userConfiguration"] };
}

export function vhdImageMappingRuleProfileDeserializer(item: any): VhdImageMappingRuleProfile {
  return {
    userConfiguration: item["userConfiguration"],
  };
}

/** Azure core network function Template application definition. */
export interface AzureCoreNetworkFunctionArmTemplateApplication extends AzureCoreNetworkFunctionApplication {
  /** Azure template artifact profile. */
  artifactProfile?: AzureCoreArmTemplateArtifactProfile;
  /** Deploy mapping rule profile. */
  deployParametersMappingRuleProfile?: AzureCoreArmTemplateDeployMappingRuleProfile;
  /** The artifact type. */
  artifactType: "ArmTemplate";
}

export function azureCoreNetworkFunctionArmTemplateApplicationSerializer(
  item: AzureCoreNetworkFunctionArmTemplateApplication,
): any {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureCoreArmTemplateArtifactProfileSerializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureCoreArmTemplateDeployMappingRuleProfileSerializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

export function azureCoreNetworkFunctionArmTemplateApplicationDeserializer(
  item: any,
): AzureCoreNetworkFunctionArmTemplateApplication {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureCoreArmTemplateArtifactProfileDeserializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureCoreArmTemplateDeployMappingRuleProfileDeserializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

/** Azure template artifact profile properties. */
export interface AzureCoreArmTemplateArtifactProfile extends ArtifactProfile {
  /** Template artifact profile. */
  templateArtifactProfile?: ArmTemplateArtifactProfile;
}

export function azureCoreArmTemplateArtifactProfileSerializer(
  item: AzureCoreArmTemplateArtifactProfile,
): any {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceSerializer(item["artifactStore"]),
    templateArtifactProfile: !item["templateArtifactProfile"]
      ? item["templateArtifactProfile"]
      : armTemplateArtifactProfileSerializer(item["templateArtifactProfile"]),
  };
}

export function azureCoreArmTemplateArtifactProfileDeserializer(
  item: any,
): AzureCoreArmTemplateArtifactProfile {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceDeserializer(item["artifactStore"]),
    templateArtifactProfile: !item["templateArtifactProfile"]
      ? item["templateArtifactProfile"]
      : armTemplateArtifactProfileDeserializer(item["templateArtifactProfile"]),
  };
}

/** Template artifact profile. */
export interface ArmTemplateArtifactProfile {
  /** Template name. */
  templateName?: string;
  /** Template version. */
  templateVersion?: string;
}

export function armTemplateArtifactProfileSerializer(item: ArmTemplateArtifactProfile): any {
  return { templateName: item["templateName"], templateVersion: item["templateVersion"] };
}

export function armTemplateArtifactProfileDeserializer(item: any): ArmTemplateArtifactProfile {
  return {
    templateName: item["templateName"],
    templateVersion: item["templateVersion"],
  };
}

/** Azure template deploy mapping rule profile. */
export interface AzureCoreArmTemplateDeployMappingRuleProfile extends MappingRuleProfile {
  /** The template mapping rule profile. */
  templateMappingRuleProfile?: ArmTemplateMappingRuleProfile;
}

export function azureCoreArmTemplateDeployMappingRuleProfileSerializer(
  item: AzureCoreArmTemplateDeployMappingRuleProfile,
): any {
  return {
    applicationEnablement: item["applicationEnablement"],
    templateMappingRuleProfile: !item["templateMappingRuleProfile"]
      ? item["templateMappingRuleProfile"]
      : armTemplateMappingRuleProfileSerializer(item["templateMappingRuleProfile"]),
  };
}

export function azureCoreArmTemplateDeployMappingRuleProfileDeserializer(
  item: any,
): AzureCoreArmTemplateDeployMappingRuleProfile {
  return {
    applicationEnablement: item["applicationEnablement"],
    templateMappingRuleProfile: !item["templateMappingRuleProfile"]
      ? item["templateMappingRuleProfile"]
      : armTemplateMappingRuleProfileDeserializer(item["templateMappingRuleProfile"]),
  };
}

/** Template mapping rule profile */
export interface ArmTemplateMappingRuleProfile {
  /** List of template parameters. */
  templateParameters?: string;
}

export function armTemplateMappingRuleProfileSerializer(item: ArmTemplateMappingRuleProfile): any {
  return { templateParameters: item["templateParameters"] };
}

export function armTemplateMappingRuleProfileDeserializer(
  item: any,
): ArmTemplateMappingRuleProfile {
  return {
    templateParameters: item["templateParameters"],
  };
}

/** Azure Operator Distributed Services network function template. */
export interface AzureOperatorNexusNetworkFunctionTemplate extends VirtualNetworkFunctionTemplate {
  /** Network function applications. */
  networkFunctionApplications?: AzureOperatorNexusNetworkFunctionApplicationUnion[];
  /** The network function type. */
  nfviType: "AzureOperatorNexus";
}

export function azureOperatorNexusNetworkFunctionTemplateSerializer(
  item: AzureOperatorNexusNetworkFunctionTemplate,
): any {
  return {
    nfviType: item["nfviType"],
    networkFunctionApplications: !item["networkFunctionApplications"]
      ? item["networkFunctionApplications"]
      : azureOperatorNexusNetworkFunctionApplicationUnionArraySerializer(
          item["networkFunctionApplications"],
        ),
  };
}

export function azureOperatorNexusNetworkFunctionTemplateDeserializer(
  item: any,
): AzureOperatorNexusNetworkFunctionTemplate {
  return {
    nfviType: item["nfviType"],
    networkFunctionApplications: !item["networkFunctionApplications"]
      ? item["networkFunctionApplications"]
      : azureOperatorNexusNetworkFunctionApplicationUnionArrayDeserializer(
          item["networkFunctionApplications"],
        ),
  };
}

export function azureOperatorNexusNetworkFunctionApplicationUnionArraySerializer(
  result: Array<AzureOperatorNexusNetworkFunctionApplicationUnion>,
): any[] {
  return result.map((item) => {
    return azureOperatorNexusNetworkFunctionApplicationUnionSerializer(item);
  });
}

export function azureOperatorNexusNetworkFunctionApplicationUnionArrayDeserializer(
  result: Array<AzureOperatorNexusNetworkFunctionApplicationUnion>,
): any[] {
  return result.map((item) => {
    return azureOperatorNexusNetworkFunctionApplicationUnionDeserializer(item);
  });
}

/** Azure Operator Distributed Services network function application definition. */
export interface AzureOperatorNexusNetworkFunctionApplication extends NetworkFunctionApplication {
  /** The artifact type. */
  /** The discriminator possible values: ImageFile, ArmTemplate */
  artifactType: AzureOperatorNexusArtifactType;
}

export function azureOperatorNexusNetworkFunctionApplicationSerializer(
  item: AzureOperatorNexusNetworkFunctionApplication,
): any {
  return {
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    artifactType: item["artifactType"],
  };
}

export function azureOperatorNexusNetworkFunctionApplicationDeserializer(
  item: any,
): AzureOperatorNexusNetworkFunctionApplication {
  return {
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    artifactType: item["artifactType"],
  };
}

/** Alias for AzureOperatorNexusNetworkFunctionApplicationUnion */
export type AzureOperatorNexusNetworkFunctionApplicationUnion =
  | AzureOperatorNexusNetworkFunctionImageApplication
  | AzureOperatorNexusNetworkFunctionArmTemplateApplication
  | AzureOperatorNexusNetworkFunctionApplication;

export function azureOperatorNexusNetworkFunctionApplicationUnionSerializer(
  item: AzureOperatorNexusNetworkFunctionApplicationUnion,
): any {
  switch (item.artifactType) {
    case "ImageFile":
      return azureOperatorNexusNetworkFunctionImageApplicationSerializer(
        item as AzureOperatorNexusNetworkFunctionImageApplication,
      );

    case "ArmTemplate":
      return azureOperatorNexusNetworkFunctionArmTemplateApplicationSerializer(
        item as AzureOperatorNexusNetworkFunctionArmTemplateApplication,
      );

    default:
      return azureOperatorNexusNetworkFunctionApplicationSerializer(item);
  }
}

export function azureOperatorNexusNetworkFunctionApplicationUnionDeserializer(
  item: any,
): AzureOperatorNexusNetworkFunctionApplicationUnion {
  switch (item.artifactType) {
    case "ImageFile":
      return azureOperatorNexusNetworkFunctionImageApplicationDeserializer(
        item as AzureOperatorNexusNetworkFunctionImageApplication,
      );

    case "ArmTemplate":
      return azureOperatorNexusNetworkFunctionArmTemplateApplicationDeserializer(
        item as AzureOperatorNexusNetworkFunctionArmTemplateApplication,
      );

    default:
      return azureOperatorNexusNetworkFunctionApplicationDeserializer(item);
  }
}

/** The artifact type. */
export enum KnownAzureOperatorNexusArtifactType {
  /** Unknown */
  Unknown = "Unknown",
  /** ImageFile */
  ImageFile = "ImageFile",
  /** ArmTemplate */
  ArmTemplate = "ArmTemplate",
}

/**
 * The artifact type. \
 * {@link KnownAzureOperatorNexusArtifactType} can be used interchangeably with AzureOperatorNexusArtifactType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **ImageFile** \
 * **ArmTemplate**
 */
export type AzureOperatorNexusArtifactType = string;

/** Azure Operator Distributed Services network function image application definition. */
export interface AzureOperatorNexusNetworkFunctionImageApplication extends AzureOperatorNexusNetworkFunctionApplication {
  /** Azure Operator Distributed Services image artifact profile. */
  artifactProfile?: AzureOperatorNexusImageArtifactProfile;
  /** Deploy mapping rule profile. */
  deployParametersMappingRuleProfile?: AzureOperatorNexusImageDeployMappingRuleProfile;
  /** The artifact type. */
  artifactType: "ImageFile";
}

export function azureOperatorNexusNetworkFunctionImageApplicationSerializer(
  item: AzureOperatorNexusNetworkFunctionImageApplication,
): any {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureOperatorNexusImageArtifactProfileSerializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureOperatorNexusImageDeployMappingRuleProfileSerializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

export function azureOperatorNexusNetworkFunctionImageApplicationDeserializer(
  item: any,
): AzureOperatorNexusNetworkFunctionImageApplication {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureOperatorNexusImageArtifactProfileDeserializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureOperatorNexusImageDeployMappingRuleProfileDeserializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

/** Azure Operator Distributed Services image artifact profile properties. */
export interface AzureOperatorNexusImageArtifactProfile extends ArtifactProfile {
  /** Image artifact profile. */
  imageArtifactProfile?: ImageArtifactProfile;
}

export function azureOperatorNexusImageArtifactProfileSerializer(
  item: AzureOperatorNexusImageArtifactProfile,
): any {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceSerializer(item["artifactStore"]),
    imageArtifactProfile: !item["imageArtifactProfile"]
      ? item["imageArtifactProfile"]
      : imageArtifactProfileSerializer(item["imageArtifactProfile"]),
  };
}

export function azureOperatorNexusImageArtifactProfileDeserializer(
  item: any,
): AzureOperatorNexusImageArtifactProfile {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceDeserializer(item["artifactStore"]),
    imageArtifactProfile: !item["imageArtifactProfile"]
      ? item["imageArtifactProfile"]
      : imageArtifactProfileDeserializer(item["imageArtifactProfile"]),
  };
}

/** Image artifact profile. */
export interface ImageArtifactProfile {
  /** Image name. */
  imageName?: string;
  /** Image version. */
  imageVersion?: string;
}

export function imageArtifactProfileSerializer(item: ImageArtifactProfile): any {
  return { imageName: item["imageName"], imageVersion: item["imageVersion"] };
}

export function imageArtifactProfileDeserializer(item: any): ImageArtifactProfile {
  return {
    imageName: item["imageName"],
    imageVersion: item["imageVersion"],
  };
}

/** Azure Operator Distributed Services image deploy mapping rule profile. */
export interface AzureOperatorNexusImageDeployMappingRuleProfile extends MappingRuleProfile {
  /** The vhd mapping rule profile. */
  imageMappingRuleProfile?: ImageMappingRuleProfile;
}

export function azureOperatorNexusImageDeployMappingRuleProfileSerializer(
  item: AzureOperatorNexusImageDeployMappingRuleProfile,
): any {
  return {
    applicationEnablement: item["applicationEnablement"],
    imageMappingRuleProfile: !item["imageMappingRuleProfile"]
      ? item["imageMappingRuleProfile"]
      : imageMappingRuleProfileSerializer(item["imageMappingRuleProfile"]),
  };
}

export function azureOperatorNexusImageDeployMappingRuleProfileDeserializer(
  item: any,
): AzureOperatorNexusImageDeployMappingRuleProfile {
  return {
    applicationEnablement: item["applicationEnablement"],
    imageMappingRuleProfile: !item["imageMappingRuleProfile"]
      ? item["imageMappingRuleProfile"]
      : imageMappingRuleProfileDeserializer(item["imageMappingRuleProfile"]),
  };
}

/** Image mapping rule profile */
export interface ImageMappingRuleProfile {
  /** List of values. */
  userConfiguration?: string;
}

export function imageMappingRuleProfileSerializer(item: ImageMappingRuleProfile): any {
  return { userConfiguration: item["userConfiguration"] };
}

export function imageMappingRuleProfileDeserializer(item: any): ImageMappingRuleProfile {
  return {
    userConfiguration: item["userConfiguration"],
  };
}

/** Azure Operator Distributed Services network function Template application definition. */
export interface AzureOperatorNexusNetworkFunctionArmTemplateApplication extends AzureOperatorNexusNetworkFunctionApplication {
  /** Azure Operator Distributed Services Template artifact profile. */
  artifactProfile?: AzureOperatorNexusArmTemplateArtifactProfile;
  /** Deploy mapping rule profile. */
  deployParametersMappingRuleProfile?: AzureOperatorNexusArmTemplateDeployMappingRuleProfile;
  /** The artifact type. */
  artifactType: "ArmTemplate";
}

export function azureOperatorNexusNetworkFunctionArmTemplateApplicationSerializer(
  item: AzureOperatorNexusNetworkFunctionArmTemplateApplication,
): any {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureOperatorNexusArmTemplateArtifactProfileSerializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureOperatorNexusArmTemplateDeployMappingRuleProfileSerializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

export function azureOperatorNexusNetworkFunctionArmTemplateApplicationDeserializer(
  item: any,
): AzureOperatorNexusNetworkFunctionArmTemplateApplication {
  return {
    artifactType: item["artifactType"],
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : azureOperatorNexusArmTemplateArtifactProfileDeserializer(item["artifactProfile"]),
    deployParametersMappingRuleProfile: !item["deployParametersMappingRuleProfile"]
      ? item["deployParametersMappingRuleProfile"]
      : azureOperatorNexusArmTemplateDeployMappingRuleProfileDeserializer(
          item["deployParametersMappingRuleProfile"],
        ),
  };
}

/** Azure Operator Distributed Services vhd artifact profile properties. */
export interface AzureOperatorNexusArmTemplateArtifactProfile extends ArtifactProfile {
  /** Template artifact profile. */
  templateArtifactProfile?: ArmTemplateArtifactProfile;
}

export function azureOperatorNexusArmTemplateArtifactProfileSerializer(
  item: AzureOperatorNexusArmTemplateArtifactProfile,
): any {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceSerializer(item["artifactStore"]),
    templateArtifactProfile: !item["templateArtifactProfile"]
      ? item["templateArtifactProfile"]
      : armTemplateArtifactProfileSerializer(item["templateArtifactProfile"]),
  };
}

export function azureOperatorNexusArmTemplateArtifactProfileDeserializer(
  item: any,
): AzureOperatorNexusArmTemplateArtifactProfile {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceDeserializer(item["artifactStore"]),
    templateArtifactProfile: !item["templateArtifactProfile"]
      ? item["templateArtifactProfile"]
      : armTemplateArtifactProfileDeserializer(item["templateArtifactProfile"]),
  };
}

/** Azure Operator Distributed Services template deploy mapping rule profile. */
export interface AzureOperatorNexusArmTemplateDeployMappingRuleProfile extends MappingRuleProfile {
  /** The template mapping rule profile. */
  templateMappingRuleProfile?: ArmTemplateMappingRuleProfile;
}

export function azureOperatorNexusArmTemplateDeployMappingRuleProfileSerializer(
  item: AzureOperatorNexusArmTemplateDeployMappingRuleProfile,
): any {
  return {
    applicationEnablement: item["applicationEnablement"],
    templateMappingRuleProfile: !item["templateMappingRuleProfile"]
      ? item["templateMappingRuleProfile"]
      : armTemplateMappingRuleProfileSerializer(item["templateMappingRuleProfile"]),
  };
}

export function azureOperatorNexusArmTemplateDeployMappingRuleProfileDeserializer(
  item: any,
): AzureOperatorNexusArmTemplateDeployMappingRuleProfile {
  return {
    applicationEnablement: item["applicationEnablement"],
    templateMappingRuleProfile: !item["templateMappingRuleProfile"]
      ? item["templateMappingRuleProfile"]
      : armTemplateMappingRuleProfileDeserializer(item["templateMappingRuleProfile"]),
  };
}

/** Network function application definition. */
export interface NetworkFunctionApplication {
  /** The name of the network function application. */
  name?: string;
  /** Depends on profile definition. */
  dependsOnProfile?: DependsOnProfile;
}

export function networkFunctionApplicationSerializer(item: NetworkFunctionApplication): any {
  return {
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
  };
}

export function networkFunctionApplicationDeserializer(item: any): NetworkFunctionApplication {
  return {
    name: item["name"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
  };
}

/** Depends on profile definition. */
export interface DependsOnProfile {
  /** Application installation operation dependency. */
  installDependsOn?: string[];
  /** Application deletion operation dependency. */
  uninstallDependsOn?: string[];
  /** Application update operation dependency. */
  updateDependsOn?: string[];
}

export function dependsOnProfileSerializer(item: DependsOnProfile): any {
  return {
    installDependsOn: !item["installDependsOn"]
      ? item["installDependsOn"]
      : item["installDependsOn"].map((p: any) => {
          return p;
        }),
    uninstallDependsOn: !item["uninstallDependsOn"]
      ? item["uninstallDependsOn"]
      : item["uninstallDependsOn"].map((p: any) => {
          return p;
        }),
    updateDependsOn: !item["updateDependsOn"]
      ? item["updateDependsOn"]
      : item["updateDependsOn"].map((p: any) => {
          return p;
        }),
  };
}

export function dependsOnProfileDeserializer(item: any): DependsOnProfile {
  return {
    installDependsOn: !item["installDependsOn"]
      ? item["installDependsOn"]
      : item["installDependsOn"].map((p: any) => {
          return p;
        }),
    uninstallDependsOn: !item["uninstallDependsOn"]
      ? item["uninstallDependsOn"]
      : item["uninstallDependsOn"].map((p: any) => {
          return p;
        }),
    updateDependsOn: !item["updateDependsOn"]
      ? item["updateDependsOn"]
      : item["updateDependsOn"].map((p: any) => {
          return p;
        }),
  };
}

/** Artifact profile properties. */
export interface ArtifactProfile {
  /** The reference to artifact store. */
  artifactStore?: ReferencedResource;
}

export function artifactProfileSerializer(item: ArtifactProfile): any {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceSerializer(item["artifactStore"]),
  };
}

export function artifactProfileDeserializer(item: any): ArtifactProfile {
  return {
    artifactStore: !item["artifactStore"]
      ? item["artifactStore"]
      : referencedResourceDeserializer(item["artifactStore"]),
  };
}

/** Reference to another resource. */
export interface ReferencedResource {
  /** Resource ID. */
  id?: string;
}

export function referencedResourceSerializer(item: ReferencedResource): any {
  return { id: item["id"] };
}

export function referencedResourceDeserializer(item: any): ReferencedResource {
  return {
    id: item["id"],
  };
}

/** Mapping rule profile properties. */
export interface MappingRuleProfile {
  /** The application enablement. */
  applicationEnablement?: ApplicationEnablement;
}

export function mappingRuleProfileSerializer(item: MappingRuleProfile): any {
  return { applicationEnablement: item["applicationEnablement"] };
}

export function mappingRuleProfileDeserializer(item: any): MappingRuleProfile {
  return {
    applicationEnablement: item["applicationEnablement"],
  };
}

/** The application enablement. */
export enum KnownApplicationEnablement {
  /** Unknown */
  Unknown = "Unknown",
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * The application enablement. \
 * {@link KnownApplicationEnablement} can be used interchangeably with ApplicationEnablement,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Enabled** \
 * **Disabled**
 */
export type ApplicationEnablement = string;

/** The response of a NetworkFunctionDefinitionVersion list operation. */
export interface _NetworkFunctionDefinitionVersionListResult {
  /** The NetworkFunctionDefinitionVersion items on this page */
  value: NetworkFunctionDefinitionVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _networkFunctionDefinitionVersionListResultDeserializer(
  item: any,
): _NetworkFunctionDefinitionVersionListResult {
  return {
    value: networkFunctionDefinitionVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function networkFunctionDefinitionVersionArraySerializer(
  result: Array<NetworkFunctionDefinitionVersion>,
): any[] {
  return result.map((item) => {
    return networkFunctionDefinitionVersionSerializer(item);
  });
}

export function networkFunctionDefinitionVersionArrayDeserializer(
  result: Array<NetworkFunctionDefinitionVersion>,
): any[] {
  return result.map((item) => {
    return networkFunctionDefinitionVersionDeserializer(item);
  });
}

/** Publisher network function definition version update request definition. */
export interface NetworkFunctionDefinitionVersionUpdateState {
  /** The network function definition version state. */
  versionState?: VersionState;
}

export function networkFunctionDefinitionVersionUpdateStateSerializer(
  item: NetworkFunctionDefinitionVersionUpdateState,
): any {
  return { versionState: item["versionState"] };
}

export function networkFunctionDefinitionVersionUpdateStateDeserializer(
  item: any,
): NetworkFunctionDefinitionVersionUpdateState {
  return {
    versionState: item["versionState"],
  };
}

/** network service design group resource. */
export interface NetworkServiceDesignGroup extends TrackedResource {
  /** network service design group properties. */
  properties?: NetworkServiceDesignGroupPropertiesFormat;
}

export function networkServiceDesignGroupSerializer(item: NetworkServiceDesignGroup): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : networkServiceDesignGroupPropertiesFormatSerializer(item["properties"]),
  };
}

export function networkServiceDesignGroupDeserializer(item: any): NetworkServiceDesignGroup {
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
      : networkServiceDesignGroupPropertiesFormatDeserializer(item["properties"]),
  };
}

/** network service design group properties. */
export interface NetworkServiceDesignGroupPropertiesFormat {
  /** The provisioning state of the network service design groups resource. */
  readonly provisioningState?: ProvisioningState;
  /** The network service design group description. */
  description?: string;
}

export function networkServiceDesignGroupPropertiesFormatSerializer(
  item: NetworkServiceDesignGroupPropertiesFormat,
): any {
  return { description: item["description"] };
}

export function networkServiceDesignGroupPropertiesFormatDeserializer(
  item: any,
): NetworkServiceDesignGroupPropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    description: item["description"],
  };
}

/** The response of a NetworkServiceDesignGroup list operation. */
export interface _NetworkServiceDesignGroupListResult {
  /** The NetworkServiceDesignGroup items on this page */
  value: NetworkServiceDesignGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _networkServiceDesignGroupListResultDeserializer(
  item: any,
): _NetworkServiceDesignGroupListResult {
  return {
    value: networkServiceDesignGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function networkServiceDesignGroupArraySerializer(
  result: Array<NetworkServiceDesignGroup>,
): any[] {
  return result.map((item) => {
    return networkServiceDesignGroupSerializer(item);
  });
}

export function networkServiceDesignGroupArrayDeserializer(
  result: Array<NetworkServiceDesignGroup>,
): any[] {
  return result.map((item) => {
    return networkServiceDesignGroupDeserializer(item);
  });
}

/** network service design version. */
export interface NetworkServiceDesignVersion extends TrackedResource {
  /** network service design version properties. */
  properties?: NetworkServiceDesignVersionPropertiesFormat;
}

export function networkServiceDesignVersionSerializer(item: NetworkServiceDesignVersion): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : networkServiceDesignVersionPropertiesFormatSerializer(item["properties"]),
  };
}

export function networkServiceDesignVersionDeserializer(item: any): NetworkServiceDesignVersion {
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
      : networkServiceDesignVersionPropertiesFormatDeserializer(item["properties"]),
  };
}

/** network service design version properties. */
export interface NetworkServiceDesignVersionPropertiesFormat {
  /** The provisioning state of the network service design version resource. */
  readonly provisioningState?: ProvisioningState;
  /** The network service design version state. */
  readonly versionState?: VersionState;
  /** The network service design version description. */
  description?: string;
  /** The configuration schemas to used to define the values. */
  configurationGroupSchemaReferences?: Record<string, ReferencedResource>;
  /** The nfvis from the site. */
  nfvisFromSite?: Record<string, NfviDetails>;
  /** List of resource element template */
  resourceElementTemplates?: ResourceElementTemplateUnion[];
}

export function networkServiceDesignVersionPropertiesFormatSerializer(
  item: NetworkServiceDesignVersionPropertiesFormat,
): any {
  return {
    description: item["description"],
    configurationGroupSchemaReferences: !item["configurationGroupSchemaReferences"]
      ? item["configurationGroupSchemaReferences"]
      : referencedResourceRecordSerializer(item["configurationGroupSchemaReferences"]),
    nfvisFromSite: !item["nfvisFromSite"]
      ? item["nfvisFromSite"]
      : nfviDetailsRecordSerializer(item["nfvisFromSite"]),
    resourceElementTemplates: !item["resourceElementTemplates"]
      ? item["resourceElementTemplates"]
      : resourceElementTemplateUnionArraySerializer(item["resourceElementTemplates"]),
  };
}

export function networkServiceDesignVersionPropertiesFormatDeserializer(
  item: any,
): NetworkServiceDesignVersionPropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    versionState: item["versionState"],
    description: item["description"],
    configurationGroupSchemaReferences: !item["configurationGroupSchemaReferences"]
      ? item["configurationGroupSchemaReferences"]
      : referencedResourceRecordDeserializer(item["configurationGroupSchemaReferences"]),
    nfvisFromSite: !item["nfvisFromSite"]
      ? item["nfvisFromSite"]
      : nfviDetailsRecordDeserializer(item["nfvisFromSite"]),
    resourceElementTemplates: !item["resourceElementTemplates"]
      ? item["resourceElementTemplates"]
      : resourceElementTemplateUnionArrayDeserializer(item["resourceElementTemplates"]),
  };
}

export function referencedResourceRecordSerializer(
  item: Record<string, ReferencedResource>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : referencedResourceSerializer(item[key]);
  });
  return result;
}

export function referencedResourceRecordDeserializer(
  item: Record<string, any>,
): Record<string, ReferencedResource> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : referencedResourceDeserializer(item[key]);
  });
  return result;
}

export function nfviDetailsRecordSerializer(
  item: Record<string, NfviDetails>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : nfviDetailsSerializer(item[key]);
  });
  return result;
}

export function nfviDetailsRecordDeserializer(
  item: Record<string, any>,
): Record<string, NfviDetails> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : nfviDetailsDeserializer(item[key]);
  });
  return result;
}

/** The nfvi details. */
export interface NfviDetails {
  /** The nfvi name. */
  name?: string;
  /** The nfvi type. */
  type?: string;
}

export function nfviDetailsSerializer(item: NfviDetails): any {
  return { name: item["name"], type: item["type"] };
}

export function nfviDetailsDeserializer(item: any): NfviDetails {
  return {
    name: item["name"],
    type: item["type"],
  };
}

export function resourceElementTemplateUnionArraySerializer(
  result: Array<ResourceElementTemplateUnion>,
): any[] {
  return result.map((item) => {
    return resourceElementTemplateUnionSerializer(item);
  });
}

export function resourceElementTemplateUnionArrayDeserializer(
  result: Array<ResourceElementTemplateUnion>,
): any[] {
  return result.map((item) => {
    return resourceElementTemplateUnionDeserializer(item);
  });
}

/** The resource element template object. */
export interface ResourceElementTemplate {
  /** Name of the resource element template. */
  name?: string;
  /** The resource element template type. */
  /** The discriminator possible values: ArmResourceDefinition, NetworkFunctionDefinition */
  resourceElementType: Type;
  /** The depends on profile. */
  dependsOnProfile?: DependsOnProfile;
}

export function resourceElementTemplateSerializer(item: ResourceElementTemplate): any {
  return {
    name: item["name"],
    type: item["resourceElementType"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
  };
}

export function resourceElementTemplateDeserializer(item: any): ResourceElementTemplate {
  return {
    name: item["name"],
    resourceElementType: item["type"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
  };
}

/** Alias for ResourceElementTemplateUnion */
export type ResourceElementTemplateUnion =
  | ArmResourceDefinitionResourceElementTemplateDetails
  | NetworkFunctionDefinitionResourceElementTemplateDetails
  | ResourceElementTemplate;

export function resourceElementTemplateUnionSerializer(item: ResourceElementTemplateUnion): any {
  switch (item.resourceElementType) {
    case "ArmResourceDefinition":
      return armResourceDefinitionResourceElementTemplateDetailsSerializer(
        item as ArmResourceDefinitionResourceElementTemplateDetails,
      );

    case "NetworkFunctionDefinition":
      return networkFunctionDefinitionResourceElementTemplateDetailsSerializer(
        item as NetworkFunctionDefinitionResourceElementTemplateDetails,
      );

    default:
      return resourceElementTemplateSerializer(item);
  }
}

export function resourceElementTemplateUnionDeserializer(item: any): ResourceElementTemplateUnion {
  switch (item.resourceElementType) {
    case "ArmResourceDefinition":
      return armResourceDefinitionResourceElementTemplateDetailsDeserializer(
        item as ArmResourceDefinitionResourceElementTemplateDetails,
      );

    case "NetworkFunctionDefinition":
      return networkFunctionDefinitionResourceElementTemplateDetailsDeserializer(
        item as NetworkFunctionDefinitionResourceElementTemplateDetails,
      );

    default:
      return resourceElementTemplateDeserializer(item);
  }
}

/** The resource element template type. */
export enum KnownType {
  /** Unknown */
  Unknown = "Unknown",
  /** ArmResourceDefinition */
  ArmResourceDefinition = "ArmResourceDefinition",
  /** NetworkFunctionDefinition */
  NetworkFunctionDefinition = "NetworkFunctionDefinition",
}

/**
 * The resource element template type. \
 * {@link KnownType} can be used interchangeably with Type,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **ArmResourceDefinition** \
 * **NetworkFunctionDefinition**
 */
export type Type = string;

/** The arm resource definition resource element template details. */
export interface ArmResourceDefinitionResourceElementTemplateDetails extends ResourceElementTemplate {
  /** The resource element template type. */
  configuration?: ArmResourceDefinitionResourceElementTemplate;
  /** The resource element template type. */
  resourceElementType: "ArmResourceDefinition";
}

export function armResourceDefinitionResourceElementTemplateDetailsSerializer(
  item: ArmResourceDefinitionResourceElementTemplateDetails,
): any {
  return {
    name: item["name"],
    type: item["resourceElementType"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    configuration: !item["configuration"]
      ? item["configuration"]
      : armResourceDefinitionResourceElementTemplateSerializer(item["configuration"]),
  };
}

export function armResourceDefinitionResourceElementTemplateDetailsDeserializer(
  item: any,
): ArmResourceDefinitionResourceElementTemplateDetails {
  return {
    name: item["name"],
    resourceElementType: item["type"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    configuration: !item["configuration"]
      ? item["configuration"]
      : armResourceDefinitionResourceElementTemplateDeserializer(item["configuration"]),
  };
}

/** The arm template RE. */
export interface ArmResourceDefinitionResourceElementTemplate {
  /** The template type. */
  templateType?: TemplateType;
  /** Name and value pairs that define the parameter values. It can be  a well formed escaped JSON string. */
  parameterValues?: string;
  /** Artifact profile properties. */
  artifactProfile?: NSDArtifactProfile;
}

export function armResourceDefinitionResourceElementTemplateSerializer(
  item: ArmResourceDefinitionResourceElementTemplate,
): any {
  return {
    templateType: item["templateType"],
    parameterValues: item["parameterValues"],
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : nsdArtifactProfileSerializer(item["artifactProfile"]),
  };
}

export function armResourceDefinitionResourceElementTemplateDeserializer(
  item: any,
): ArmResourceDefinitionResourceElementTemplate {
  return {
    templateType: item["templateType"],
    parameterValues: item["parameterValues"],
    artifactProfile: !item["artifactProfile"]
      ? item["artifactProfile"]
      : nsdArtifactProfileDeserializer(item["artifactProfile"]),
  };
}

/** The template type. */
export enum KnownTemplateType {
  /** Unknown */
  Unknown = "Unknown",
  /** ArmTemplate */
  ArmTemplate = "ArmTemplate",
}

/**
 * The template type. \
 * {@link KnownTemplateType} can be used interchangeably with TemplateType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **ArmTemplate**
 */
export type TemplateType = string;

/** Artifact profile properties. */
export interface NSDArtifactProfile {
  /** The artifact store resource id */
  artifactStoreReference?: ReferencedResource;
  /** Artifact name. */
  artifactName?: string;
  /** Artifact version. */
  artifactVersion?: string;
}

export function nsdArtifactProfileSerializer(item: NSDArtifactProfile): any {
  return {
    artifactStoreReference: !item["artifactStoreReference"]
      ? item["artifactStoreReference"]
      : referencedResourceSerializer(item["artifactStoreReference"]),
    artifactName: item["artifactName"],
    artifactVersion: item["artifactVersion"],
  };
}

export function nsdArtifactProfileDeserializer(item: any): NSDArtifactProfile {
  return {
    artifactStoreReference: !item["artifactStoreReference"]
      ? item["artifactStoreReference"]
      : referencedResourceDeserializer(item["artifactStoreReference"]),
    artifactName: item["artifactName"],
    artifactVersion: item["artifactVersion"],
  };
}

/** The network function definition resource element template details. */
export interface NetworkFunctionDefinitionResourceElementTemplateDetails extends ResourceElementTemplate {
  /** The resource element template type. */
  configuration?: ArmResourceDefinitionResourceElementTemplate;
  /** The resource element template type. */
  resourceElementType: "NetworkFunctionDefinition";
}

export function networkFunctionDefinitionResourceElementTemplateDetailsSerializer(
  item: NetworkFunctionDefinitionResourceElementTemplateDetails,
): any {
  return {
    name: item["name"],
    type: item["resourceElementType"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileSerializer(item["dependsOnProfile"]),
    configuration: !item["configuration"]
      ? item["configuration"]
      : armResourceDefinitionResourceElementTemplateSerializer(item["configuration"]),
  };
}

export function networkFunctionDefinitionResourceElementTemplateDetailsDeserializer(
  item: any,
): NetworkFunctionDefinitionResourceElementTemplateDetails {
  return {
    name: item["name"],
    resourceElementType: item["type"],
    dependsOnProfile: !item["dependsOnProfile"]
      ? item["dependsOnProfile"]
      : dependsOnProfileDeserializer(item["dependsOnProfile"]),
    configuration: !item["configuration"]
      ? item["configuration"]
      : armResourceDefinitionResourceElementTemplateDeserializer(item["configuration"]),
  };
}

/** The response of a networkServiceDesignVersion list operation. */
export interface _NetworkServiceDesignVersionListResult {
  /** The networkServiceDesignVersion items on this page */
  value: NetworkServiceDesignVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _networkServiceDesignVersionListResultDeserializer(
  item: any,
): _NetworkServiceDesignVersionListResult {
  return {
    value: networkServiceDesignVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function networkServiceDesignVersionArraySerializer(
  result: Array<NetworkServiceDesignVersion>,
): any[] {
  return result.map((item) => {
    return networkServiceDesignVersionSerializer(item);
  });
}

export function networkServiceDesignVersionArrayDeserializer(
  result: Array<NetworkServiceDesignVersion>,
): any[] {
  return result.map((item) => {
    return networkServiceDesignVersionDeserializer(item);
  });
}

/** Publisher network service design version update request definition. */
export interface NetworkServiceDesignVersionUpdateState {
  /** The network service design version state. */
  versionState?: VersionState;
}

export function networkServiceDesignVersionUpdateStateSerializer(
  item: NetworkServiceDesignVersionUpdateState,
): any {
  return { versionState: item["versionState"] };
}

export function networkServiceDesignVersionUpdateStateDeserializer(
  item: any,
): NetworkServiceDesignVersionUpdateState {
  return {
    versionState: item["versionState"],
  };
}

/** Artifact store properties. */
export interface ArtifactStore extends TrackedResource {
  /** ArtifactStores properties. */
  properties?: ArtifactStorePropertiesFormat;
}

export function artifactStoreSerializer(item: ArtifactStore): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : artifactStorePropertiesFormatSerializer(item["properties"]),
  };
}

export function artifactStoreDeserializer(item: any): ArtifactStore {
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
      : artifactStorePropertiesFormatDeserializer(item["properties"]),
  };
}

/** Artifact store properties. */
export interface ArtifactStorePropertiesFormat {
  /** The provisioning state of the application groups resource. */
  readonly provisioningState?: ProvisioningState;
  /** The artifact store type. */
  storeType?: ArtifactStoreType;
  /** The artifact store backing resource network access type */
  backingResourcePublicNetworkAccess?: BackingResourcePublicNetworkAccess;
  /** The replication strategy. */
  replicationStrategy?: ArtifactReplicationStrategy;
  managedResourceGroupConfiguration?: ArtifactStorePropertiesFormatManagedResourceGroupConfiguration;
  /** The created storage resource id */
  readonly storageResourceId?: string;
}

export function artifactStorePropertiesFormatSerializer(item: ArtifactStorePropertiesFormat): any {
  return {
    storeType: item["storeType"],
    backingResourcePublicNetworkAccess: item["backingResourcePublicNetworkAccess"],
    replicationStrategy: item["replicationStrategy"],
    managedResourceGroupConfiguration: !item["managedResourceGroupConfiguration"]
      ? item["managedResourceGroupConfiguration"]
      : artifactStorePropertiesFormatManagedResourceGroupConfigurationSerializer(
          item["managedResourceGroupConfiguration"],
        ),
  };
}

export function artifactStorePropertiesFormatDeserializer(
  item: any,
): ArtifactStorePropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    storeType: item["storeType"],
    backingResourcePublicNetworkAccess: item["backingResourcePublicNetworkAccess"],
    replicationStrategy: item["replicationStrategy"],
    managedResourceGroupConfiguration: !item["managedResourceGroupConfiguration"]
      ? item["managedResourceGroupConfiguration"]
      : artifactStorePropertiesFormatManagedResourceGroupConfigurationDeserializer(
          item["managedResourceGroupConfiguration"],
        ),
    storageResourceId: item["storageResourceId"],
  };
}

/** The artifact store type. */
export enum KnownArtifactStoreType {
  /** Unknown */
  Unknown = "Unknown",
  /** AzureContainerRegistry */
  AzureContainerRegistry = "AzureContainerRegistry",
  /** AzureStorageAccount */
  AzureStorageAccount = "AzureStorageAccount",
}

/**
 * The artifact store type. \
 * {@link KnownArtifactStoreType} can be used interchangeably with ArtifactStoreType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **AzureContainerRegistry** \
 * **AzureStorageAccount**
 */
export type ArtifactStoreType = string;

/** The backing resource network access type. */
export enum KnownBackingResourcePublicNetworkAccess {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * The backing resource network access type. \
 * {@link KnownBackingResourcePublicNetworkAccess} can be used interchangeably with BackingResourcePublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type BackingResourcePublicNetworkAccess = string;

/** The replication strategy. */
export enum KnownArtifactReplicationStrategy {
  /** Unknown */
  Unknown = "Unknown",
  /** SingleReplication */
  SingleReplication = "SingleReplication",
}

/**
 * The replication strategy. \
 * {@link KnownArtifactReplicationStrategy} can be used interchangeably with ArtifactReplicationStrategy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **SingleReplication**
 */
export type ArtifactReplicationStrategy = string;

/** model interface ArtifactStorePropertiesFormatManagedResourceGroupConfiguration */
export interface ArtifactStorePropertiesFormatManagedResourceGroupConfiguration {
  /** The managed resource group name. */
  name?: string;
  /** The managed resource group location. */
  location?: string;
}

export function artifactStorePropertiesFormatManagedResourceGroupConfigurationSerializer(
  item: ArtifactStorePropertiesFormatManagedResourceGroupConfiguration,
): any {
  return { name: item["name"], location: item["location"] };
}

export function artifactStorePropertiesFormatManagedResourceGroupConfigurationDeserializer(
  item: any,
): ArtifactStorePropertiesFormatManagedResourceGroupConfiguration {
  return {
    name: item["name"],
    location: item["location"],
  };
}

/** The response of a ArtifactStore list operation. */
export interface _ArtifactStoreListResult {
  /** The ArtifactStore items on this page */
  value: ArtifactStore[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _artifactStoreListResultDeserializer(item: any): _ArtifactStoreListResult {
  return {
    value: artifactStoreArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function artifactStoreArraySerializer(result: Array<ArtifactStore>): any[] {
  return result.map((item) => {
    return artifactStoreSerializer(item);
  });
}

export function artifactStoreArrayDeserializer(result: Array<ArtifactStore>): any[] {
  return result.map((item) => {
    return artifactStoreDeserializer(item);
  });
}

/** List of network fabric controller ids. */
export interface ArtifactStoreNetworkFabricControllerEndPoints {
  /** list of network fabric controllers. */
  networkFabricControllerIds?: ReferencedResource[];
}

export function artifactStoreNetworkFabricControllerEndPointsSerializer(
  item: ArtifactStoreNetworkFabricControllerEndPoints,
): any {
  return {
    networkFabricControllerIds: !item["networkFabricControllerIds"]
      ? item["networkFabricControllerIds"]
      : referencedResourceArraySerializer(item["networkFabricControllerIds"]),
  };
}

export function artifactStoreNetworkFabricControllerEndPointsDeserializer(
  item: any,
): ArtifactStoreNetworkFabricControllerEndPoints {
  return {
    networkFabricControllerIds: !item["networkFabricControllerIds"]
      ? item["networkFabricControllerIds"]
      : referencedResourceArrayDeserializer(item["networkFabricControllerIds"]),
  };
}

export function referencedResourceArraySerializer(result: Array<ReferencedResource>): any[] {
  return result.map((item) => {
    return referencedResourceSerializer(item);
  });
}

export function referencedResourceArrayDeserializer(result: Array<ReferencedResource>): any[] {
  return result.map((item) => {
    return referencedResourceDeserializer(item);
  });
}

/** List of manual private endpoints. */
export interface _ArtifactStoreNetworkFabricControllerEndPointsList {
  /** The ArtifactStoreNetworkFabricControllerEndPoints items on this page */
  value: ArtifactStoreNetworkFabricControllerEndPoints[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _artifactStoreNetworkFabricControllerEndPointsListDeserializer(
  item: any,
): _ArtifactStoreNetworkFabricControllerEndPointsList {
  return {
    value: artifactStoreNetworkFabricControllerEndPointsArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function artifactStoreNetworkFabricControllerEndPointsArraySerializer(
  result: Array<ArtifactStoreNetworkFabricControllerEndPoints>,
): any[] {
  return result.map((item) => {
    return artifactStoreNetworkFabricControllerEndPointsSerializer(item);
  });
}

export function artifactStoreNetworkFabricControllerEndPointsArrayDeserializer(
  result: Array<ArtifactStoreNetworkFabricControllerEndPoints>,
): any[] {
  return result.map((item) => {
    return artifactStoreNetworkFabricControllerEndPointsDeserializer(item);
  });
}

/** List of manual private endpoints. */
export interface ArtifactStorePrivateEndPointsFormat {
  /** list of private endpoints. */
  manualPrivateEndPointConnections?: ReferencedResource[];
}

export function artifactStorePrivateEndPointsFormatSerializer(
  item: ArtifactStorePrivateEndPointsFormat,
): any {
  return {
    manualPrivateEndPointConnections: !item["manualPrivateEndPointConnections"]
      ? item["manualPrivateEndPointConnections"]
      : referencedResourceArraySerializer(item["manualPrivateEndPointConnections"]),
  };
}

export function artifactStorePrivateEndPointsFormatDeserializer(
  item: any,
): ArtifactStorePrivateEndPointsFormat {
  return {
    manualPrivateEndPointConnections: !item["manualPrivateEndPointConnections"]
      ? item["manualPrivateEndPointConnections"]
      : referencedResourceArrayDeserializer(item["manualPrivateEndPointConnections"]),
  };
}

/** List of manual private endpoints. */
export interface _ArtifactStorePrivateEndPointsListResult {
  /** The ArtifactStorePrivateEndPointsFormat items on this page */
  value: ArtifactStorePrivateEndPointsFormat[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _artifactStorePrivateEndPointsListResultDeserializer(
  item: any,
): _ArtifactStorePrivateEndPointsListResult {
  return {
    value: artifactStorePrivateEndPointsFormatArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function artifactStorePrivateEndPointsFormatArraySerializer(
  result: Array<ArtifactStorePrivateEndPointsFormat>,
): any[] {
  return result.map((item) => {
    return artifactStorePrivateEndPointsFormatSerializer(item);
  });
}

export function artifactStorePrivateEndPointsFormatArrayDeserializer(
  result: Array<ArtifactStorePrivateEndPointsFormat>,
): any[] {
  return result.map((item) => {
    return artifactStorePrivateEndPointsFormatDeserializer(item);
  });
}

/** The description for page model */
export interface _ProxyArtifactOverviewListResult {
  /** The description for value property */
  value: ProxyArtifactListOverview[];
  /** The description for nextLink property */
  nextLink?: string;
}

export function _proxyArtifactOverviewListResultDeserializer(
  item: any,
): _ProxyArtifactOverviewListResult {
  return {
    value: proxyArtifactListOverviewArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function proxyArtifactListOverviewArrayDeserializer(
  result: Array<ProxyArtifactListOverview>,
): any[] {
  return result.map((item) => {
    return proxyArtifactListOverviewDeserializer(item);
  });
}

/** The proxy artifact overview. */
export interface ProxyArtifactListOverview extends ProxyResource {}

export function proxyArtifactListOverviewDeserializer(item: any): ProxyArtifactListOverview {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** The description for page model */
export interface _ProxyArtifactVersionsOverviewListResult {
  /** The description for value property */
  value: ProxyArtifactVersionsListOverview[];
  /** The description for nextLink property */
  nextLink?: string;
}

export function _proxyArtifactVersionsOverviewListResultDeserializer(
  item: any,
): _ProxyArtifactVersionsOverviewListResult {
  return {
    value: proxyArtifactVersionsListOverviewArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function proxyArtifactVersionsListOverviewArrayDeserializer(
  result: Array<ProxyArtifactVersionsListOverview>,
): any[] {
  return result.map((item) => {
    return proxyArtifactVersionsListOverviewDeserializer(item);
  });
}

/** The proxy artifact overview. */
export interface ProxyArtifactVersionsListOverview extends ProxyResource {
  /** Proxy Artifact overview properties. */
  readonly properties?: ProxyArtifactOverviewPropertiesValue;
}

export function proxyArtifactVersionsListOverviewDeserializer(
  item: any,
): ProxyArtifactVersionsListOverview {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : proxyArtifactOverviewPropertiesValueDeserializer(item["properties"]),
  };
}

/** model interface ProxyArtifactOverviewPropertiesValue */
export interface ProxyArtifactOverviewPropertiesValue {
  /** The artifact type. */
  artifactType?: ArtifactType;
  /** The artifact version. */
  artifactVersion?: string;
  /** The artifact state */
  artifactState?: ArtifactState;
}

export function proxyArtifactOverviewPropertiesValueDeserializer(
  item: any,
): ProxyArtifactOverviewPropertiesValue {
  return {
    artifactType: item["artifactType"],
    artifactVersion: item["artifactVersion"],
    artifactState: item["artifactState"],
  };
}

/** The artifact type. */
export enum KnownArtifactType {
  /** Unknown */
  Unknown = "Unknown",
  /** OCIArtifact */
  OCIArtifact = "OCIArtifact",
  /** VhdImageFile */
  VhdImageFile = "VhdImageFile",
  /** ArmTemplate */
  ArmTemplate = "ArmTemplate",
  /** ImageFile */
  ImageFile = "ImageFile",
}

/**
 * The artifact type. \
 * {@link KnownArtifactType} can be used interchangeably with ArtifactType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **OCIArtifact** \
 * **VhdImageFile** \
 * **ArmTemplate** \
 * **ImageFile**
 */
export type ArtifactType = string;

/** The artifact state. */
export enum KnownArtifactState {
  /** Unknown */
  Unknown = "Unknown",
  /** Preview */
  Preview = "Preview",
  /** Active */
  Active = "Active",
  /** Deprecated */
  Deprecated = "Deprecated",
}

/**
 * The artifact state. \
 * {@link KnownArtifactState} can be used interchangeably with ArtifactState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Preview** \
 * **Active** \
 * **Deprecated**
 */
export type ArtifactState = string;

/** The artifact updating request payload. */
export interface ArtifactChangeState {
  /** Artifact update state properties. */
  properties?: ArtifactChangeStateProperties;
}

export function artifactChangeStateSerializer(item: ArtifactChangeState): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : artifactChangeStatePropertiesSerializer(item["properties"]),
  };
}

/** The artifact update state properties. */
export interface ArtifactChangeStateProperties {
  /** The artifact state */
  artifactState?: ArtifactState;
}

export function artifactChangeStatePropertiesSerializer(item: ArtifactChangeStateProperties): any {
  return { artifactState: item["artifactState"] };
}

/** Artifact manifest properties. */
export interface ArtifactManifest extends TrackedResource {
  /** Artifact manifest properties. */
  properties?: ArtifactManifestPropertiesFormat;
}

export function artifactManifestSerializer(item: ArtifactManifest): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : artifactManifestPropertiesFormatSerializer(item["properties"]),
  };
}

export function artifactManifestDeserializer(item: any): ArtifactManifest {
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
      : artifactManifestPropertiesFormatDeserializer(item["properties"]),
  };
}

/** Artifact manifest properties. */
export interface ArtifactManifestPropertiesFormat {
  /** The provisioning state of the ArtifactManifest resource. */
  readonly provisioningState?: ProvisioningState;
  /** The artifact manifest state. */
  readonly artifactManifestState?: ArtifactManifestState;
  /** The artifacts list. */
  artifacts?: ManifestArtifactFormat[];
}

export function artifactManifestPropertiesFormatSerializer(
  item: ArtifactManifestPropertiesFormat,
): any {
  return {
    artifacts: !item["artifacts"]
      ? item["artifacts"]
      : manifestArtifactFormatArraySerializer(item["artifacts"]),
  };
}

export function artifactManifestPropertiesFormatDeserializer(
  item: any,
): ArtifactManifestPropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    artifactManifestState: item["artifactManifestState"],
    artifacts: !item["artifacts"]
      ? item["artifacts"]
      : manifestArtifactFormatArrayDeserializer(item["artifacts"]),
  };
}

/** The artifact manifest state. */
export enum KnownArtifactManifestState {
  /** Unknown */
  Unknown = "Unknown",
  /** Uploading */
  Uploading = "Uploading",
  /** Uploaded */
  Uploaded = "Uploaded",
  /** Validating */
  Validating = "Validating",
  /** ValidationFailed */
  ValidationFailed = "ValidationFailed",
  /** Succeeded */
  Succeeded = "Succeeded",
}

/**
 * The artifact manifest state. \
 * {@link KnownArtifactManifestState} can be used interchangeably with ArtifactManifestState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Uploading** \
 * **Uploaded** \
 * **Validating** \
 * **ValidationFailed** \
 * **Succeeded**
 */
export type ArtifactManifestState = string;

export function manifestArtifactFormatArraySerializer(
  result: Array<ManifestArtifactFormat>,
): any[] {
  return result.map((item) => {
    return manifestArtifactFormatSerializer(item);
  });
}

export function manifestArtifactFormatArrayDeserializer(
  result: Array<ManifestArtifactFormat>,
): any[] {
  return result.map((item) => {
    return manifestArtifactFormatDeserializer(item);
  });
}

/** Manifest artifact properties. */
export interface ManifestArtifactFormat {
  /** The artifact name */
  artifactName?: string;
  /** The artifact type. */
  artifactType?: ArtifactType;
  /** The artifact version. */
  artifactVersion?: string;
}

export function manifestArtifactFormatSerializer(item: ManifestArtifactFormat): any {
  return {
    artifactName: item["artifactName"],
    artifactType: item["artifactType"],
    artifactVersion: item["artifactVersion"],
  };
}

export function manifestArtifactFormatDeserializer(item: any): ManifestArtifactFormat {
  return {
    artifactName: item["artifactName"],
    artifactType: item["artifactType"],
    artifactVersion: item["artifactVersion"],
  };
}

/** The response of a ArtifactManifest list operation. */
export interface _ArtifactManifestListResult {
  /** The ArtifactManifest items on this page */
  value: ArtifactManifest[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _artifactManifestListResultDeserializer(item: any): _ArtifactManifestListResult {
  return {
    value: artifactManifestArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function artifactManifestArraySerializer(result: Array<ArtifactManifest>): any[] {
  return result.map((item) => {
    return artifactManifestSerializer(item);
  });
}

export function artifactManifestArrayDeserializer(result: Array<ArtifactManifest>): any[] {
  return result.map((item) => {
    return artifactManifestDeserializer(item);
  });
}

/** The artifact manifest credential definition. */
export interface ArtifactAccessCredential {
  /** The credential type. */
  /** The discriminator possible values: AzureContainerRegistryScopedToken, AzureStorageAccountToken */
  credentialType: CredentialType;
}

export function artifactAccessCredentialDeserializer(item: any): ArtifactAccessCredential {
  return {
    credentialType: item["credentialType"],
  };
}

/** Alias for ArtifactAccessCredentialUnion */
export type ArtifactAccessCredentialUnion =
  | AzureContainerRegistryScopedTokenCredential
  | AzureStorageAccountCredential
  | ArtifactAccessCredential;

export function artifactAccessCredentialUnionDeserializer(
  item: any,
): ArtifactAccessCredentialUnion {
  switch (item.credentialType) {
    case "AzureContainerRegistryScopedToken":
      return azureContainerRegistryScopedTokenCredentialDeserializer(
        item as AzureContainerRegistryScopedTokenCredential,
      );

    case "AzureStorageAccountToken":
      return azureStorageAccountCredentialDeserializer(item as AzureStorageAccountCredential);

    default:
      return artifactAccessCredentialDeserializer(item);
  }
}

/** The credential type. */
export enum KnownCredentialType {
  /** Unknown */
  Unknown = "Unknown",
  /** AzureContainerRegistryScopedToken */
  AzureContainerRegistryScopedToken = "AzureContainerRegistryScopedToken",
  /** AzureStorageAccountToken */
  AzureStorageAccountToken = "AzureStorageAccountToken",
}

/**
 * The credential type. \
 * {@link KnownCredentialType} can be used interchangeably with CredentialType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **AzureContainerRegistryScopedToken** \
 * **AzureStorageAccountToken**
 */
export type CredentialType = string;

/** The azure container registry scoped token credential definition. */
export interface AzureContainerRegistryScopedTokenCredential extends ArtifactAccessCredential {
  /** The username of the credential. */
  username?: string;
  /** The credential value. */
  acrToken?: string;
  /** The Acr server url */
  acrServerUrl?: string;
  /** The repositories that could be accessed using the current credential. */
  repositories?: string[];
  /** The UTC time when credential will expire. */
  expiry?: Date;
  /** The credential type. */
  credentialType: "AzureContainerRegistryScopedToken";
}

export function azureContainerRegistryScopedTokenCredentialDeserializer(
  item: any,
): AzureContainerRegistryScopedTokenCredential {
  return {
    credentialType: item["credentialType"],
    username: item["username"],
    acrToken: item["acrToken"],
    acrServerUrl: item["acrServerUrl"],
    repositories: !item["repositories"]
      ? item["repositories"]
      : item["repositories"].map((p: any) => {
          return p;
        }),
    expiry: !item["expiry"] ? item["expiry"] : new Date(item["expiry"]),
  };
}

/** The azure storage account credential definition. */
export interface AzureStorageAccountCredential extends ArtifactAccessCredential {
  /** The storage account Id */
  storageAccountId?: string;
  /** The containers that could be accessed using the current credential. */
  containerCredentials?: AzureStorageAccountContainerCredential[];
  /** The UTC time when credential will expire. */
  expiry?: Date;
  /** The credential type. */
  credentialType: "AzureStorageAccountToken";
}

export function azureStorageAccountCredentialDeserializer(
  item: any,
): AzureStorageAccountCredential {
  return {
    credentialType: item["credentialType"],
    storageAccountId: item["storageAccountId"],
    containerCredentials: !item["containerCredentials"]
      ? item["containerCredentials"]
      : azureStorageAccountContainerCredentialArrayDeserializer(item["containerCredentials"]),
    expiry: !item["expiry"] ? item["expiry"] : new Date(item["expiry"]),
  };
}

export function azureStorageAccountContainerCredentialArrayDeserializer(
  result: Array<AzureStorageAccountContainerCredential>,
): any[] {
  return result.map((item) => {
    return azureStorageAccountContainerCredentialDeserializer(item);
  });
}

/** The azure storage account container credential definition. */
export interface AzureStorageAccountContainerCredential {
  /** The storage account container name */
  containerName?: string;
  /** The storage account container sas uri */
  containerSasUri?: string;
}

export function azureStorageAccountContainerCredentialDeserializer(
  item: any,
): AzureStorageAccountContainerCredential {
  return {
    containerName: item["containerName"],
    containerSasUri: item["containerSasUri"],
  };
}

/** The artifact manifest updating request payload. Only the 'Uploaded' state is allowed for updates. Other states are used for internal state transitioning. */
export interface ArtifactManifestUpdateState {
  /** The artifact manifest state. */
  artifactManifestState?: ArtifactManifestState;
}

export function artifactManifestUpdateStateSerializer(item: ArtifactManifestUpdateState): any {
  return { artifactManifestState: item["artifactManifestState"] };
}

export function artifactManifestUpdateStateDeserializer(item: any): ArtifactManifestUpdateState {
  return {
    artifactManifestState: item["artifactManifestState"],
  };
}

/** Site resource. */
export interface Site extends TrackedResource {
  /** Site properties. */
  properties?: SitePropertiesFormat;
}

export function siteSerializer(item: Site): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : sitePropertiesFormatSerializer(item["properties"]),
  };
}

export function siteDeserializer(item: any): Site {
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
      : sitePropertiesFormatDeserializer(item["properties"]),
  };
}

/** Site properties. */
export interface SitePropertiesFormat {
  /** The provisioning state of the site resource. **TODO**: Confirm if this is needed. */
  readonly provisioningState?: ProvisioningState;
  /** List of NFVIs */
  nfvis?: NFVIsUnion[];
  /** The list of site network services on the site. */
  readonly siteNetworkServiceReferences?: ReferencedResource[];
}

export function sitePropertiesFormatSerializer(item: SitePropertiesFormat): any {
  return { nfvis: !item["nfvis"] ? item["nfvis"] : nfvIsUnionArraySerializer(item["nfvis"]) };
}

export function sitePropertiesFormatDeserializer(item: any): SitePropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    nfvis: !item["nfvis"] ? item["nfvis"] : nfvIsUnionArrayDeserializer(item["nfvis"]),
    siteNetworkServiceReferences: !item["siteNetworkServiceReferences"]
      ? item["siteNetworkServiceReferences"]
      : referencedResourceArrayDeserializer(item["siteNetworkServiceReferences"]),
  };
}

export function nfvIsUnionArraySerializer(result: Array<NFVIsUnion>): any[] {
  return result.map((item) => {
    return nfvIsUnionSerializer(item);
  });
}

export function nfvIsUnionArrayDeserializer(result: Array<NFVIsUnion>): any[] {
  return result.map((item) => {
    return nfvIsUnionDeserializer(item);
  });
}

/** The NFVI object. */
export interface NFVIs {
  /** Name of the nfvi. */
  name?: string;
  /** The NFVI type. */
  /** The discriminator possible values: AzureCore, AzureArcKubernetes, AzureOperatorNexus */
  nfviType: NfviType;
}

export function nfvIsSerializer(item: NFVIs): any {
  return { name: item["name"], nfviType: item["nfviType"] };
}

export function nfvIsDeserializer(item: any): NFVIs {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
  };
}

/** Alias for NFVIsUnion */
export type NFVIsUnion =
  | AzureCoreNfviDetails
  | AzureArcK8SClusterNfviDetails
  | AzureOperatorNexusClusterNfviDetails
  | NFVIs;

export function nfvIsUnionSerializer(item: NFVIsUnion): any {
  switch (item.nfviType) {
    case "AzureCore":
      return azureCoreNfviDetailsSerializer(item as AzureCoreNfviDetails);

    case "AzureArcKubernetes":
      return azureArcK8SClusterNfviDetailsSerializer(item as AzureArcK8SClusterNfviDetails);

    case "AzureOperatorNexus":
      return azureOperatorNexusClusterNfviDetailsSerializer(
        item as AzureOperatorNexusClusterNfviDetails,
      );

    default:
      return nfvIsSerializer(item);
  }
}

export function nfvIsUnionDeserializer(item: any): NFVIsUnion {
  switch (item.nfviType) {
    case "AzureCore":
      return azureCoreNfviDetailsDeserializer(item as AzureCoreNfviDetails);

    case "AzureArcKubernetes":
      return azureArcK8SClusterNfviDetailsDeserializer(item as AzureArcK8SClusterNfviDetails);

    case "AzureOperatorNexus":
      return azureOperatorNexusClusterNfviDetailsDeserializer(
        item as AzureOperatorNexusClusterNfviDetails,
      );

    default:
      return nfvIsDeserializer(item);
  }
}

/** The Azure Core NFVI detail. */
export interface AzureCoreNfviDetails extends NFVIs {
  /** Location of the Azure core. */
  location?: string;
  /** The NFVI type. */
  nfviType: "AzureCore";
}

export function azureCoreNfviDetailsSerializer(item: AzureCoreNfviDetails): any {
  return { name: item["name"], nfviType: item["nfviType"], location: item["location"] };
}

export function azureCoreNfviDetailsDeserializer(item: any): AzureCoreNfviDetails {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
    location: item["location"],
  };
}

/** The AzureArcK8sCluster NFVI detail. */
export interface AzureArcK8SClusterNfviDetails extends NFVIs {
  /** The reference to the custom location. */
  customLocationReference?: ReferencedResource;
  /** The NFVI type. */
  nfviType: "AzureArcKubernetes";
}

export function azureArcK8SClusterNfviDetailsSerializer(item: AzureArcK8SClusterNfviDetails): any {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
    customLocationReference: !item["customLocationReference"]
      ? item["customLocationReference"]
      : referencedResourceSerializer(item["customLocationReference"]),
  };
}

export function azureArcK8SClusterNfviDetailsDeserializer(
  item: any,
): AzureArcK8SClusterNfviDetails {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
    customLocationReference: !item["customLocationReference"]
      ? item["customLocationReference"]
      : referencedResourceDeserializer(item["customLocationReference"]),
  };
}

/** The AzureOperatorNexusCluster NFVI detail. */
export interface AzureOperatorNexusClusterNfviDetails extends NFVIs {
  /** The reference to the custom location. */
  customLocationReference?: ReferencedResource;
  /** The NFVI type. */
  nfviType: "AzureOperatorNexus";
}

export function azureOperatorNexusClusterNfviDetailsSerializer(
  item: AzureOperatorNexusClusterNfviDetails,
): any {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
    customLocationReference: !item["customLocationReference"]
      ? item["customLocationReference"]
      : referencedResourceSerializer(item["customLocationReference"]),
  };
}

export function azureOperatorNexusClusterNfviDetailsDeserializer(
  item: any,
): AzureOperatorNexusClusterNfviDetails {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
    customLocationReference: !item["customLocationReference"]
      ? item["customLocationReference"]
      : referencedResourceDeserializer(item["customLocationReference"]),
  };
}

/** The response of a Site list operation. */
export interface _SiteListResult {
  /** The Site items on this page */
  value: Site[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _siteListResultDeserializer(item: any): _SiteListResult {
  return {
    value: siteArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function siteArraySerializer(result: Array<Site>): any[] {
  return result.map((item) => {
    return siteSerializer(item);
  });
}

export function siteArrayDeserializer(result: Array<Site>): any[] {
  return result.map((item) => {
    return siteDeserializer(item);
  });
}

/** Site network service resource. */
export interface SiteNetworkService extends TrackedResource {
  /** Site network service properties. */
  properties?: SiteNetworkServicePropertiesFormat;
  /** The managed identity of the Site network service, if configured. */
  identity?: ManagedServiceIdentity;
  /** Sku of the site network service. */
  sku?: Sku;
}

export function siteNetworkServiceSerializer(item: SiteNetworkService): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : siteNetworkServicePropertiesFormatSerializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
    sku: !item["sku"] ? item["sku"] : skuSerializer(item["sku"]),
  };
}

export function siteNetworkServiceDeserializer(item: any): SiteNetworkService {
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
      : siteNetworkServicePropertiesFormatDeserializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityDeserializer(item["identity"]),
    sku: !item["sku"] ? item["sku"] : skuDeserializer(item["sku"]),
  };
}

/** Site network service properties. */
export interface SiteNetworkServicePropertiesFormat {
  /** The provisioning state of the site network service resource. */
  readonly provisioningState?: ProvisioningState;
  /** Managed resource group configuration. */
  managedResourceGroupConfiguration?: ManagedResourceGroupConfiguration;
  /** The site details */
  siteReference?: ReferencedResource;
  /** The publisher name for the site network service. */
  readonly publisherName?: string;
  /** The scope of the publisher. */
  readonly publisherScope?: PublisherScope;
  /** The network service design group name for the site network service. */
  readonly networkServiceDesignGroupName?: string;
  /** The network service design version for the site network service. */
  readonly networkServiceDesignVersionName?: string;
  /** The location of the network service design offering. */
  readonly networkServiceDesignVersionOfferingLocation?: string;
  /** The network service design version resource reference. */
  networkServiceDesignVersionResourceReference?: DeploymentResourceIdReferenceUnion;
  /** The goal state of the site network service resource. This has references to the configuration group value objects that describe the desired state of the site network service. */
  desiredStateConfigurationGroupValueReferences?: Record<string, ReferencedResource>;
  /** The network service design version for the site network service. */
  readonly lastStateNetworkServiceDesignVersionName?: string;
  /** The last state of the site network service resource. */
  readonly lastStateConfigurationGroupValueReferences?: Record<string, ReferencedResource>;
}

export function siteNetworkServicePropertiesFormatSerializer(
  item: SiteNetworkServicePropertiesFormat,
): any {
  return {
    managedResourceGroupConfiguration: !item["managedResourceGroupConfiguration"]
      ? item["managedResourceGroupConfiguration"]
      : managedResourceGroupConfigurationSerializer(item["managedResourceGroupConfiguration"]),
    siteReference: !item["siteReference"]
      ? item["siteReference"]
      : referencedResourceSerializer(item["siteReference"]),
    networkServiceDesignVersionResourceReference: !item[
      "networkServiceDesignVersionResourceReference"
    ]
      ? item["networkServiceDesignVersionResourceReference"]
      : deploymentResourceIdReferenceUnionSerializer(
          item["networkServiceDesignVersionResourceReference"],
        ),
    desiredStateConfigurationGroupValueReferences: !item[
      "desiredStateConfigurationGroupValueReferences"
    ]
      ? item["desiredStateConfigurationGroupValueReferences"]
      : referencedResourceRecordSerializer(item["desiredStateConfigurationGroupValueReferences"]),
  };
}

export function siteNetworkServicePropertiesFormatDeserializer(
  item: any,
): SiteNetworkServicePropertiesFormat {
  return {
    provisioningState: item["provisioningState"],
    managedResourceGroupConfiguration: !item["managedResourceGroupConfiguration"]
      ? item["managedResourceGroupConfiguration"]
      : managedResourceGroupConfigurationDeserializer(item["managedResourceGroupConfiguration"]),
    siteReference: !item["siteReference"]
      ? item["siteReference"]
      : referencedResourceDeserializer(item["siteReference"]),
    publisherName: item["publisherName"],
    publisherScope: item["publisherScope"],
    networkServiceDesignGroupName: item["networkServiceDesignGroupName"],
    networkServiceDesignVersionName: item["networkServiceDesignVersionName"],
    networkServiceDesignVersionOfferingLocation:
      item["networkServiceDesignVersionOfferingLocation"],
    networkServiceDesignVersionResourceReference: !item[
      "networkServiceDesignVersionResourceReference"
    ]
      ? item["networkServiceDesignVersionResourceReference"]
      : deploymentResourceIdReferenceUnionDeserializer(
          item["networkServiceDesignVersionResourceReference"],
        ),
    desiredStateConfigurationGroupValueReferences: !item[
      "desiredStateConfigurationGroupValueReferences"
    ]
      ? item["desiredStateConfigurationGroupValueReferences"]
      : referencedResourceRecordDeserializer(item["desiredStateConfigurationGroupValueReferences"]),
    lastStateNetworkServiceDesignVersionName: item["lastStateNetworkServiceDesignVersionName"],
    lastStateConfigurationGroupValueReferences: !item["lastStateConfigurationGroupValueReferences"]
      ? item["lastStateConfigurationGroupValueReferences"]
      : referencedResourceRecordDeserializer(item["lastStateConfigurationGroupValueReferences"]),
  };
}

/** Managed resource group configuration. */
export interface ManagedResourceGroupConfiguration {
  /** Managed resource group name. */
  name?: string;
  /** Managed resource group location. */
  location?: string;
}

export function managedResourceGroupConfigurationSerializer(
  item: ManagedResourceGroupConfiguration,
): any {
  return { name: item["name"], location: item["location"] };
}

export function managedResourceGroupConfigurationDeserializer(
  item: any,
): ManagedResourceGroupConfiguration {
  return {
    name: item["name"],
    location: item["location"],
  };
}

/** Sku, to be associated with a SiteNetworkService. */
export interface Sku {
  /** Name of this Sku */
  name: SkuName;
  /** The SKU tier based on the SKU name. */
  readonly tier?: SkuTier;
}

export function skuSerializer(item: Sku): any {
  return { name: item["name"] };
}

export function skuDeserializer(item: any): Sku {
  return {
    name: item["name"],
    tier: item["tier"],
  };
}

/** Name of this Sku */
export enum KnownSkuName {
  /** Basic */
  Basic = "Basic",
  /** Standard */
  Standard = "Standard",
}

/**
 * Name of this Sku \
 * {@link KnownSkuName} can be used interchangeably with SkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Standard**
 */
export type SkuName = string;

/** The SKU tier based on the SKU name. */
export enum KnownSkuTier {
  /** Basic */
  Basic = "Basic",
  /** Standard */
  Standard = "Standard",
}

/**
 * The SKU tier based on the SKU name. \
 * {@link KnownSkuTier} can be used interchangeably with SkuTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Standard**
 */
export type SkuTier = string;

/** The response of a SiteNetworkService list operation. */
export interface _SiteNetworkServiceListResult {
  /** The SiteNetworkService items on this page */
  value: SiteNetworkService[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _siteNetworkServiceListResultDeserializer(
  item: any,
): _SiteNetworkServiceListResult {
  return {
    value: siteNetworkServiceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function siteNetworkServiceArraySerializer(result: Array<SiteNetworkService>): any[] {
  return result.map((item) => {
    return siteNetworkServiceSerializer(item);
  });
}

export function siteNetworkServiceArrayDeserializer(result: Array<SiteNetworkService>): any[] {
  return result.map((item) => {
    return siteNetworkServiceDeserializer(item);
  });
}

/** Cancels an ongoing long-running operation, only Put is supported now */
export interface CancelInformation {
  /** The ARM id of the siteNetworkService resource. */
  siteNetworkServiceReference: ReferencedResource;
  /** The type of long-running operation the user wants to cancel, such as 'Put'. */
  longRunningOperation?: LongRunningOperation;
}

export function cancelInformationSerializer(item: CancelInformation): any {
  return {
    siteNetworkServiceReference: referencedResourceSerializer(item["siteNetworkServiceReference"]),
    longRunningOperation: item["longRunningOperation"],
  };
}

/** The type of long-running operation the user wants to cancel, such as 'Put'. */
export enum KnownLongRunningOperation {
  /** Unknown */
  Unknown = "Unknown",
  /** Put */
  Put = "Put",
}

/**
 * The type of long-running operation the user wants to cancel, such as 'Put'. \
 * {@link KnownLongRunningOperation} can be used interchangeably with LongRunningOperation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Put**
 */
export type LongRunningOperation = string;

/** The available API versions. */
export enum KnownVersions {
  /** The 2025-03-30 API version. */
  V20250330 = "2025-03-30",
}
