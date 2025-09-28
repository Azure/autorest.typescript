// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Deployment stack object. */
export interface DeploymentStack extends ProxyResource {
  /** Deployment stack properties. */
  properties?: DeploymentStackProperties;
  /** The geo-location where the resource lives. Required for subscription and management group scoped stacks. The location is inherited from the resource group for resource group scoped stacks. */
  location?: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function deploymentStackSerializer(item: DeploymentStack): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : deploymentStackPropertiesSerializer(item["properties"]),
    location: item["location"],
    tags: item["tags"],
  };
}

export function deploymentStackDeserializer(item: any): DeploymentStack {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : deploymentStackPropertiesDeserializer(item["properties"]),
    location: item["location"],
    tags: item["tags"],
  };
}

/** Deployment stack properties. */
export interface DeploymentStackProperties extends DeploymentStacksError {
  /** The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. */
  template?: Record<string, any>;
  /** The URI of the template. Use either the templateLink property or the template property, but not both. */
  templateLink?: DeploymentStacksTemplateLink;
  /** Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. */
  parameters?: Record<string, DeploymentParameter>;
  /** The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both. */
  parametersLink?: DeploymentStacksParametersLink;
  /** Defines the behavior of resources that are no longer managed after the Deployment stack is updated or deleted. */
  actionOnUnmanage: ActionOnUnmanage;
  /** The debug setting of the deployment. */
  debugSetting?: DeploymentStacksDebugSetting;
  /** Flag to bypass service errors that indicate the stack resource list is not correctly synchronized. */
  bypassStackOutOfSyncError?: boolean;
  /** The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}'). */
  deploymentScope?: string;
  /** Deployment stack description. Max length of 4096 characters. */
  description?: string;
  /** Defines how resources deployed by the stack are locked. */
  denySettings: DenySettings;
  /** State of the deployment stack. */
  readonly provisioningState?: DeploymentStackProvisioningState;
  /** The correlation id of the last Deployment stack upsert or delete operation. It is in GUID format and is used for tracing. */
  readonly correlationId?: string;
  /** An array of resources that were detached during the most recent Deployment stack update. Detached means that the resource was removed from the template, but no relevant deletion operations were specified. So, the resource still exists while no longer being associated with the stack. */
  readonly detachedResources?: ResourceReference[];
  /** An array of resources that were deleted during the most recent Deployment stack update. Deleted means that the resource was removed from the template and relevant deletion operations were specified. */
  readonly deletedResources?: ResourceReference[];
  /** An array of resources that failed to reach goal state during the most recent update. Each resourceId is accompanied by an error message. */
  readonly failedResources?: ResourceReferenceExtended[];
  /** An array of resources currently managed by the deployment stack. */
  readonly resources?: ManagedResourceReference[];
  /** The resourceId of the deployment resource created by the deployment stack. */
  readonly deploymentId?: string;
  /** The outputs of the deployment resource created by the deployment stack. */
  readonly outputs?: Record<string, any>;
  /** The duration of the last successful Deployment stack update. */
  readonly duration?: string;
}

export function deploymentStackPropertiesSerializer(
  item: DeploymentStackProperties,
): any {
  return {
    error: !item["error"]
      ? item["error"]
      : errorDetailSerializer(item["error"]),
    template: item["template"],
    templateLink: !item["templateLink"]
      ? item["templateLink"]
      : deploymentStacksTemplateLinkSerializer(item["templateLink"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : deploymentParameterRecordSerializer(item["parameters"]),
    parametersLink: !item["parametersLink"]
      ? item["parametersLink"]
      : deploymentStacksParametersLinkSerializer(item["parametersLink"]),
    actionOnUnmanage: actionOnUnmanageSerializer(item["actionOnUnmanage"]),
    debugSetting: !item["debugSetting"]
      ? item["debugSetting"]
      : deploymentStacksDebugSettingSerializer(item["debugSetting"]),
    bypassStackOutOfSyncError: item["bypassStackOutOfSyncError"],
    deploymentScope: item["deploymentScope"],
    description: item["description"],
    denySettings: denySettingsSerializer(item["denySettings"]),
  };
}

export function deploymentStackPropertiesDeserializer(
  item: any,
): DeploymentStackProperties {
  return {
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
    template: item["template"],
    templateLink: !item["templateLink"]
      ? item["templateLink"]
      : deploymentStacksTemplateLinkDeserializer(item["templateLink"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : deploymentParameterRecordDeserializer(item["parameters"]),
    parametersLink: !item["parametersLink"]
      ? item["parametersLink"]
      : deploymentStacksParametersLinkDeserializer(item["parametersLink"]),
    actionOnUnmanage: actionOnUnmanageDeserializer(item["actionOnUnmanage"]),
    debugSetting: !item["debugSetting"]
      ? item["debugSetting"]
      : deploymentStacksDebugSettingDeserializer(item["debugSetting"]),
    bypassStackOutOfSyncError: item["bypassStackOutOfSyncError"],
    deploymentScope: item["deploymentScope"],
    description: item["description"],
    denySettings: denySettingsDeserializer(item["denySettings"]),
    provisioningState: item["provisioningState"],
    correlationId: item["correlationId"],
    detachedResources: !item["detachedResources"]
      ? item["detachedResources"]
      : resourceReferenceArrayDeserializer(item["detachedResources"]),
    deletedResources: !item["deletedResources"]
      ? item["deletedResources"]
      : resourceReferenceArrayDeserializer(item["deletedResources"]),
    failedResources: !item["failedResources"]
      ? item["failedResources"]
      : resourceReferenceExtendedArrayDeserializer(item["failedResources"]),
    resources: !item["resources"]
      ? item["resources"]
      : managedResourceReferenceArrayDeserializer(item["resources"]),
    deploymentId: item["deploymentId"],
    outputs: item["outputs"],
    duration: item["duration"],
  };
}

/** Entity representing the reference to the template. */
export interface DeploymentStacksTemplateLink {
  /** The URI of the template to deploy. Use either the uri or id property, but not both. */
  uri?: string;
  /** The resourceId of a Template Spec. Use either the id or uri property, but not both. */
  id?: string;
  /** The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs. */
  relativePath?: string;
  /** The query string (for example, a SAS token) to be used with the templateLink URI. */
  queryString?: string;
  /** If included, must match the ContentVersion in the template. */
  contentVersion?: string;
}

export function deploymentStacksTemplateLinkSerializer(
  item: DeploymentStacksTemplateLink,
): any {
  return {
    uri: item["uri"],
    id: item["id"],
    relativePath: item["relativePath"],
    queryString: item["queryString"],
    contentVersion: item["contentVersion"],
  };
}

export function deploymentStacksTemplateLinkDeserializer(
  item: any,
): DeploymentStacksTemplateLink {
  return {
    uri: item["uri"],
    id: item["id"],
    relativePath: item["relativePath"],
    queryString: item["queryString"],
    contentVersion: item["contentVersion"],
  };
}

export function deploymentParameterRecordSerializer(
  item: Record<string, DeploymentParameter>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : deploymentParameterSerializer(item[key]);
  });
  return result;
}

export function deploymentParameterRecordDeserializer(
  item: Record<string, any>,
): Record<string, DeploymentParameter> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : deploymentParameterDeserializer(item[key]);
  });
  return result;
}

/** Deployment parameter for the template. */
export interface DeploymentParameter {
  /** Input value to the parameter. */
  value?: any;
  /** Type of the value. */
  type?: string;
  /** Azure Key Vault parameter reference. */
  reference?: KeyVaultParameterReference;
}

export function deploymentParameterSerializer(item: DeploymentParameter): any {
  return {
    value: item["value"],
    type: item["type"],
    reference: !item["reference"]
      ? item["reference"]
      : keyVaultParameterReferenceSerializer(item["reference"]),
  };
}

export function deploymentParameterDeserializer(
  item: any,
): DeploymentParameter {
  return {
    value: item["value"],
    type: item["type"],
    reference: !item["reference"]
      ? item["reference"]
      : keyVaultParameterReferenceDeserializer(item["reference"]),
  };
}

/** Azure Key Vault parameter reference. */
export interface KeyVaultParameterReference {
  /** Azure Key Vault reference. */
  keyVault: KeyVaultReference;
  /** Azure Key Vault secret name. */
  secretName: string;
  /** Azure Key Vault secret version. */
  secretVersion?: string;
}

export function keyVaultParameterReferenceSerializer(
  item: KeyVaultParameterReference,
): any {
  return {
    keyVault: keyVaultReferenceSerializer(item["keyVault"]),
    secretName: item["secretName"],
    secretVersion: item["secretVersion"],
  };
}

export function keyVaultParameterReferenceDeserializer(
  item: any,
): KeyVaultParameterReference {
  return {
    keyVault: keyVaultReferenceDeserializer(item["keyVault"]),
    secretName: item["secretName"],
    secretVersion: item["secretVersion"],
  };
}

/** Azure Key Vault reference. */
export interface KeyVaultReference {
  /** Azure Key Vault resourceId. */
  id: string;
}

export function keyVaultReferenceSerializer(item: KeyVaultReference): any {
  return { id: item["id"] };
}

export function keyVaultReferenceDeserializer(item: any): KeyVaultReference {
  return {
    id: item["id"],
  };
}

/** Entity representing the reference to the deployment parameters. */
export interface DeploymentStacksParametersLink {
  /** The URI of the parameters file. */
  uri: string;
  /** If included, must match the ContentVersion in the template. */
  contentVersion?: string;
}

export function deploymentStacksParametersLinkSerializer(
  item: DeploymentStacksParametersLink,
): any {
  return { uri: item["uri"], contentVersion: item["contentVersion"] };
}

export function deploymentStacksParametersLinkDeserializer(
  item: any,
): DeploymentStacksParametersLink {
  return {
    uri: item["uri"],
    contentVersion: item["contentVersion"],
  };
}

/** Defines the behavior of resources that are no longer managed after the stack is updated or deleted. */
export interface ActionOnUnmanage {
  /** Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state. */
  resources: DeploymentStacksDeleteDetachEnum;
  /** Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state. */
  resourceGroups?: DeploymentStacksDeleteDetachEnum;
  /** Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state. */
  managementGroups?: DeploymentStacksDeleteDetachEnum;
}

export function actionOnUnmanageSerializer(item: ActionOnUnmanage): any {
  return {
    resources: item["resources"],
    resourceGroups: item["resourceGroups"],
    managementGroups: item["managementGroups"],
  };
}

export function actionOnUnmanageDeserializer(item: any): ActionOnUnmanage {
  return {
    resources: item["resources"],
    resourceGroups: item["resourceGroups"],
    managementGroups: item["managementGroups"],
  };
}

/** Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state. */
export enum KnownDeploymentStacksDeleteDetachEnum {
  /** Delete the specified resources from Azure */
  Delete = "delete",
  /** Keep the specified resources in Azure */
  Detach = "detach",
}

/**
 * Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state. \
 * {@link KnownDeploymentStacksDeleteDetachEnum} can be used interchangeably with DeploymentStacksDeleteDetachEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **delete**: Delete the specified resources from Azure \
 * **detach**: Keep the specified resources in Azure
 */
export type DeploymentStacksDeleteDetachEnum = string;

/** The debug setting. */
export interface DeploymentStacksDebugSetting {
  /** Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information that is being passed in during deployment. By logging information about the request or response, sensitive data that is retrieved through the deployment operations could potentially be exposed. */
  detailLevel?: string;
}

export function deploymentStacksDebugSettingSerializer(
  item: DeploymentStacksDebugSetting,
): any {
  return { detailLevel: item["detailLevel"] };
}

export function deploymentStacksDebugSettingDeserializer(
  item: any,
): DeploymentStacksDebugSetting {
  return {
    detailLevel: item["detailLevel"],
  };
}

/** Defines how resources deployed by the Deployment stack are locked. */
export interface DenySettings {
  /** denySettings Mode that defines denied actions. */
  mode: DenySettingsMode;
  /** List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted. */
  excludedPrincipals?: string[];
  /** List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*\/read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed. */
  excludedActions?: string[];
  /** DenySettings will be applied to child resource scopes of every managed resource with a deny assignment. */
  applyToChildScopes?: boolean;
}

export function denySettingsSerializer(item: DenySettings): any {
  return {
    mode: item["mode"],
    excludedPrincipals: !item["excludedPrincipals"]
      ? item["excludedPrincipals"]
      : item["excludedPrincipals"].map((p: any) => {
          return p;
        }),
    excludedActions: !item["excludedActions"]
      ? item["excludedActions"]
      : item["excludedActions"].map((p: any) => {
          return p;
        }),
    applyToChildScopes: item["applyToChildScopes"],
  };
}

export function denySettingsDeserializer(item: any): DenySettings {
  return {
    mode: item["mode"],
    excludedPrincipals: !item["excludedPrincipals"]
      ? item["excludedPrincipals"]
      : item["excludedPrincipals"].map((p: any) => {
          return p;
        }),
    excludedActions: !item["excludedActions"]
      ? item["excludedActions"]
      : item["excludedActions"].map((p: any) => {
          return p;
        }),
    applyToChildScopes: item["applyToChildScopes"],
  };
}

/** denySettings Mode that defines denied actions. */
export enum KnownDenySettingsMode {
  /** Authorized users are able to read and modify the resources, but cannot delete. */
  DenyDelete = "denyDelete",
  /** Authorized users can read from a resource, but cannot modify or delete it. */
  DenyWriteAndDelete = "denyWriteAndDelete",
  /** No denyAssignments have been applied. */
  None = "none",
}

/**
 * denySettings Mode that defines denied actions. \
 * {@link KnownDenySettingsMode} can be used interchangeably with DenySettingsMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **denyDelete**: Authorized users are able to read and modify the resources, but cannot delete. \
 * **denyWriteAndDelete**: Authorized users can read from a resource, but cannot modify or delete it. \
 * **none**: No denyAssignments have been applied.
 */
export type DenySettingsMode = string;

/** State of the deployment stack. */
export enum KnownDeploymentStackProvisioningState {
  /** The deployment stack is currently being created */
  Creating = "creating",
  /** The deployment stack is currently being validated */
  Validating = "validating",
  /** The deployment stack is currently waiting */
  Waiting = "waiting",
  /** The deployment stack is currently deploying */
  Deploying = "deploying",
  /** The deployment stack is being cancelled */
  Canceling = "canceling",
  /** The deployment stack is updating deny assignments */
  UpdatingDenyAssignments = "updatingDenyAssignments",
  /** The deployment stack is deleting resources */
  DeletingResources = "deletingResources",
  /** The deployment stack completed successfully */
  Succeeded = "succeeded",
  /** The deployment stack has failed */
  Failed = "failed",
  /** The deployment stack has been cancelled */
  Canceled = "canceled",
  /** The deployment stack is being deleted */
  Deleting = "deleting",
}

/**
 * State of the deployment stack. \
 * {@link KnownDeploymentStackProvisioningState} can be used interchangeably with DeploymentStackProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **creating**: The deployment stack is currently being created \
 * **validating**: The deployment stack is currently being validated \
 * **waiting**: The deployment stack is currently waiting \
 * **deploying**: The deployment stack is currently deploying \
 * **canceling**: The deployment stack is being cancelled \
 * **updatingDenyAssignments**: The deployment stack is updating deny assignments \
 * **deletingResources**: The deployment stack is deleting resources \
 * **succeeded**: The deployment stack completed successfully \
 * **failed**: The deployment stack has failed \
 * **canceled**: The deployment stack has been cancelled \
 * **deleting**: The deployment stack is being deleted
 */
export type DeploymentStackProvisioningState = string;

export function resourceReferenceArrayDeserializer(
  result: Array<ResourceReference>,
): any[] {
  return result.map((item) => {
    return resourceReferenceDeserializer(item);
  });
}

/** The resourceId model. */
export interface ResourceReference {
  /** The ARM Resource ID of a resource managed by the deployment stack. */
  readonly id?: string;
}

export function resourceReferenceDeserializer(item: any): ResourceReference {
  return {
    id: item["id"],
  };
}

export function resourceReferenceExtendedArrayDeserializer(
  result: Array<ResourceReferenceExtended>,
): any[] {
  return result.map((item) => {
    return resourceReferenceExtendedDeserializer(item);
  });
}

/** The resourceId extended model. This is used to document failed resources with a resourceId and a corresponding error. */
export interface ResourceReferenceExtended {
  /** The ARM Resource ID of a resource managed by the deployment stack. */
  readonly id?: string;
  /** The error detail. */
  error?: ErrorDetail;
}

export function resourceReferenceExtendedDeserializer(
  item: any,
): ResourceReferenceExtended {
  return {
    id: item["id"],
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

export function errorDetailSerializer(item: ErrorDetail): any {
  return item;
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

export function errorDetailArraySerializer(result: Array<ErrorDetail>): any[] {
  return result.map((item) => {
    return errorDetailSerializer(item);
  });
}

export function errorDetailArrayDeserializer(
  result: Array<ErrorDetail>,
): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(
  result: Array<ErrorAdditionalInfo>,
): any[] {
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

export function errorAdditionalInfoDeserializer(
  item: any,
): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: item["info"],
  };
}

export function managedResourceReferenceArrayDeserializer(
  result: Array<ManagedResourceReference>,
): any[] {
  return result.map((item) => {
    return managedResourceReferenceDeserializer(item);
  });
}

/** The managed resource model. */
export interface ManagedResourceReference extends ResourceReference {
  /** Current management state of the resource in the deployment stack. */
  status?: ResourceStatusMode;
  /** denyAssignment settings applied to the resource. */
  denyStatus?: DenyStatusMode;
}

export function managedResourceReferenceDeserializer(
  item: any,
): ManagedResourceReference {
  return {
    id: item["id"],
    status: item["status"],
    denyStatus: item["denyStatus"],
  };
}

/** Current management state of the resource in the deployment stack. */
export enum KnownResourceStatusMode {
  /** This resource is managed by the deployment stack. */
  Managed = "managed",
  /** Unable to remove the deny assignment on resource. */
  RemoveDenyFailed = "removeDenyFailed",
  /** Unable to delete the resource from Azure. The delete will be retried on the next stack deployment, or can be deleted manually. */
  DeleteFailed = "deleteFailed",
}

/**
 * Current management state of the resource in the deployment stack. \
 * {@link KnownResourceStatusMode} can be used interchangeably with ResourceStatusMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **managed**: This resource is managed by the deployment stack. \
 * **removeDenyFailed**: Unable to remove the deny assignment on resource. \
 * **deleteFailed**: Unable to delete the resource from Azure. The delete will be retried on the next stack deployment, or can be deleted manually.
 */
export type ResourceStatusMode = string;

/** denyAssignment settings applied to the resource. */
export enum KnownDenyStatusMode {
  /** Authorized users are able to read and modify the resources, but cannot delete. */
  DenyDelete = "denyDelete",
  /** Resource type does not support denyAssignments. */
  NotSupported = "notSupported",
  /** denyAssignments are not supported on resources outside the scope of the deployment stack. */
  Inapplicable = "inapplicable",
  /** Authorized users can only read from a resource, but cannot modify or delete it. */
  DenyWriteAndDelete = "denyWriteAndDelete",
  /** Deny assignment has been removed by Azure due to a resource management change (management group move, etc.) */
  RemovedBySystem = "removedBySystem",
  /** No denyAssignments have been applied. */
  None = "none",
}

/**
 * denyAssignment settings applied to the resource. \
 * {@link KnownDenyStatusMode} can be used interchangeably with DenyStatusMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **denyDelete**: Authorized users are able to read and modify the resources, but cannot delete. \
 * **notSupported**: Resource type does not support denyAssignments. \
 * **inapplicable**: denyAssignments are not supported on resources outside the scope of the deployment stack. \
 * **denyWriteAndDelete**: Authorized users can only read from a resource, but cannot modify or delete it. \
 * **removedBySystem**: Deny assignment has been removed by Azure due to a resource management change (management group move, etc.) \
 * **none**: No denyAssignments have been applied.
 */
export type DenyStatusMode = string;

/** Deployment Stacks error response. */
export interface DeploymentStacksError {
  /** The error detail. */
  error?: ErrorDetail;
}

export function deploymentStacksErrorSerializer(
  item: DeploymentStacksError,
): any {
  return {
    error: !item["error"]
      ? item["error"]
      : errorDetailSerializer(item["error"]),
  };
}

export function deploymentStacksErrorDeserializer(
  item: any,
): DeploymentStacksError {
  return {
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
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
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
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

/** The response of a DeploymentStack list operation. */
export interface _DeploymentStackListResult {
  /** The DeploymentStack items on this page */
  value: DeploymentStack[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _deploymentStackListResultDeserializer(
  item: any,
): _DeploymentStackListResult {
  return {
    value: deploymentStackArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function deploymentStackArraySerializer(
  result: Array<DeploymentStack>,
): any[] {
  return result.map((item) => {
    return deploymentStackSerializer(item);
  });
}

export function deploymentStackArrayDeserializer(
  result: Array<DeploymentStack>,
): any[] {
  return result.map((item) => {
    return deploymentStackDeserializer(item);
  });
}

/** The Deployment stack validation result. */
export interface DeploymentStackValidateResult {
  /** String Id used to locate any resource on Azure. */
  readonly id?: string;
  /** Name of this resource. */
  readonly name?: string;
  /** Type of this resource. */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
  /** The error detail. */
  error?: ErrorDetail;
  /** The validation result details. */
  properties?: DeploymentStackValidateProperties;
}

export function deploymentStackValidateResultDeserializer(
  item: any,
): DeploymentStackValidateResult {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
    properties: !item["properties"]
      ? item["properties"]
      : deploymentStackValidatePropertiesDeserializer(item["properties"]),
  };
}

/** The Deployment stack validation result details. */
export interface DeploymentStackValidateProperties {
  /** Defines the behavior of resources that are no longer managed after the Deployment stack is updated or deleted. */
  actionOnUnmanage?: ActionOnUnmanage;
  /** The correlation id of the Deployment stack validate operation. It is in GUID format and is used for tracing. */
  correlationId?: string;
  /** The Deployment stack deny settings. */
  denySettings?: DenySettings;
  /** The Deployment stack deployment scope. */
  deploymentScope?: string;
  /** The Deployment stack validation description. */
  description?: string;
  /** Deployment parameters. */
  parameters?: Record<string, DeploymentParameter>;
  /** The URI of the template. */
  templateLink?: DeploymentStacksTemplateLink;
  /** The array of resources that were validated. */
  validatedResources?: ResourceReference[];
}

export function deploymentStackValidatePropertiesDeserializer(
  item: any,
): DeploymentStackValidateProperties {
  return {
    actionOnUnmanage: !item["actionOnUnmanage"]
      ? item["actionOnUnmanage"]
      : actionOnUnmanageDeserializer(item["actionOnUnmanage"]),
    correlationId: item["correlationId"],
    denySettings: !item["denySettings"]
      ? item["denySettings"]
      : denySettingsDeserializer(item["denySettings"]),
    deploymentScope: item["deploymentScope"],
    description: item["description"],
    parameters: !item["parameters"]
      ? item["parameters"]
      : deploymentParameterRecordDeserializer(item["parameters"]),
    templateLink: !item["templateLink"]
      ? item["templateLink"]
      : deploymentStacksTemplateLinkDeserializer(item["templateLink"]),
    validatedResources: !item["validatedResources"]
      ? item["validatedResources"]
      : resourceReferenceArrayDeserializer(item["validatedResources"]),
  };
}

/** Export Template specific properties of the Deployment stack. */
export interface DeploymentStackTemplateDefinition {
  /** The template content. Use this element to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. */
  template?: Record<string, any>;
  /** The URI of the template. Use either the templateLink property or the template property, but not both. */
  templateLink?: DeploymentStacksTemplateLink;
}

export function deploymentStackTemplateDefinitionDeserializer(
  item: any,
): DeploymentStackTemplateDefinition {
  return {
    template: item["template"],
    templateLink: !item["templateLink"]
      ? item["templateLink"]
      : deploymentStacksTemplateLinkDeserializer(item["templateLink"]),
  };
}

/** The available API versions. */
export enum KnownVersions {
  /** The 2024-03-01 API version. */
  V20240301 = "2024-03-01",
}
