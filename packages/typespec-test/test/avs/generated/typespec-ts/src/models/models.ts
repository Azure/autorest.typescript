// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Workload Network */
export interface WorkloadNetwork extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkProperties;
}

export function workloadNetworkDeserializer(item: any): WorkloadNetwork {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkPropertiesDeserializer(item["properties"]),
  };
}

/** The properties of a workload network */
export interface WorkloadNetworkProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: WorkloadNetworkProvisioningState;
}

export function workloadNetworkPropertiesDeserializer(
  item: any,
): WorkloadNetworkProperties {
  return {
    provisioningState: item["provisioningState"],
  };
}

/** base Workload Network provisioning state */
export enum KnownWorkloadNetworkProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * base Workload Network provisioning state \
 * {@link KnownWorkloadNetworkProvisioningState} can be used interchangeably with WorkloadNetworkProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkProvisioningState = string;

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

/** The response of a WorkloadNetwork list operation. */
export interface _WorkloadNetworkList {
  /** The WorkloadNetwork items on this page */
  value: WorkloadNetwork[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkListDeserializer(
  item: any,
): _WorkloadNetworkList {
  return {
    value: workloadNetworkArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkArrayDeserializer(
  result: Array<WorkloadNetwork>,
): any[] {
  return result.map((item) => {
    return workloadNetworkDeserializer(item);
  });
}

/** The response of a WorkloadNetworkDnsZone list operation. */
export interface _WorkloadNetworkDnsZonesList {
  /** The WorkloadNetworkDnsZone items on this page */
  value: WorkloadNetworkDnsZone[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _workloadNetworkDnsZonesListDeserializer(
  item: any,
): _WorkloadNetworkDnsZonesList {
  return {
    value: workloadNetworkDnsZoneArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function workloadNetworkDnsZoneArraySerializer(
  result: Array<WorkloadNetworkDnsZone>,
): any[] {
  return result.map((item) => {
    return workloadNetworkDnsZoneSerializer(item);
  });
}

export function workloadNetworkDnsZoneArrayDeserializer(
  result: Array<WorkloadNetworkDnsZone>,
): any[] {
  return result.map((item) => {
    return workloadNetworkDnsZoneDeserializer(item);
  });
}

/** NSX DNS Zone */
export interface WorkloadNetworkDnsZone extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsZoneProperties;
}

export function workloadNetworkDnsZoneSerializer(
  item: WorkloadNetworkDnsZone,
): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkDnsZonePropertiesSerializer(item["properties"]),
  };
}

export function workloadNetworkDnsZoneDeserializer(
  item: any,
): WorkloadNetworkDnsZone {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : workloadNetworkDnsZonePropertiesDeserializer(item["properties"]),
  };
}

/** NSX DNS Zone Properties */
export interface WorkloadNetworkDnsZoneProperties {
  /** Display name of the DNS Zone. */
  displayName?: string;
  /** Domain names of the DNS Zone. */
  domain?: string[];
  /** DNS Server IP array of the DNS Zone. */
  dnsServerIps?: string[];
  /** Source IP of the DNS Zone. */
  sourceIp?: string;
  /** Number of DNS Services using the DNS zone. */
  dnsServices?: number;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkDnsZoneProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

export function workloadNetworkDnsZonePropertiesSerializer(
  item: WorkloadNetworkDnsZoneProperties,
): any {
  return {
    displayName: item["displayName"],
    domain: !item["domain"]
      ? item["domain"]
      : item["domain"].map((p: any) => {
          return p;
        }),
    dnsServerIps: !item["dnsServerIps"]
      ? item["dnsServerIps"]
      : item["dnsServerIps"].map((p: any) => {
          return p;
        }),
    sourceIp: item["sourceIp"],
    dnsServices: item["dnsServices"],
    revision: item["revision"],
  };
}

export function workloadNetworkDnsZonePropertiesDeserializer(
  item: any,
): WorkloadNetworkDnsZoneProperties {
  return {
    displayName: item["displayName"],
    domain: !item["domain"]
      ? item["domain"]
      : item["domain"].map((p: any) => {
          return p;
        }),
    dnsServerIps: !item["dnsServerIps"]
      ? item["dnsServerIps"]
      : item["dnsServerIps"].map((p: any) => {
          return p;
        }),
    sourceIp: item["sourceIp"],
    dnsServices: item["dnsServices"],
    provisioningState: item["provisioningState"],
    revision: item["revision"],
  };
}

/** Workload Network DNS Zone provisioning state */
export enum KnownWorkloadNetworkDnsZoneProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * Workload Network DNS Zone provisioning state \
 * {@link KnownWorkloadNetworkDnsZoneProvisioningState} can be used interchangeably with WorkloadNetworkDnsZoneProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type WorkloadNetworkDnsZoneProvisioningState = string;

/** The response of a ScriptExecution list operation. */
export interface _ScriptExecutionsList {
  /** The ScriptExecution items on this page */
  value: ScriptExecution[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _scriptExecutionsListDeserializer(
  item: any,
): _ScriptExecutionsList {
  return {
    value: scriptExecutionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function scriptExecutionArraySerializer(
  result: Array<ScriptExecution>,
): any[] {
  return result.map((item) => {
    return scriptExecutionSerializer(item);
  });
}

export function scriptExecutionArrayDeserializer(
  result: Array<ScriptExecution>,
): any[] {
  return result.map((item) => {
    return scriptExecutionDeserializer(item);
  });
}

/** An instance of a script executed by a user - custom or AVS */
export interface ScriptExecution extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptExecutionProperties;
}

export function scriptExecutionSerializer(item: ScriptExecution): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : scriptExecutionPropertiesSerializer(item["properties"]),
  };
}

export function scriptExecutionDeserializer(item: any): ScriptExecution {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : scriptExecutionPropertiesDeserializer(item["properties"]),
  };
}

/** Properties of a user-invoked script */
export interface ScriptExecutionProperties {
  /** A reference to the script cmdlet resource if user is running a AVS script */
  scriptCmdletId?: string;
  /** Parameters the script will accept */
  parameters?: ScriptExecutionParameterUnion[];
  /**
   * Parameters that will be hidden/not visible to ARM, such as passwords and
   * credentials
   */
  hiddenParameters?: ScriptExecutionParameterUnion[];
  /**
   * Error message if the script was able to run, but if the script itself had
   * errors or powershell threw an exception
   */
  failureReason?: string;
  /** Time limit for execution */
  timeout: string;
  /** Time to live for the resource. If not provided, will be available for 60 days */
  retention?: string;
  /** Time the script execution was submitted */
  readonly submittedAt?: Date;
  /** Time the script execution was started */
  readonly startedAt?: Date;
  /** Time the script execution was finished */
  readonly finishedAt?: Date;
  /** The state of the script execution resource */
  readonly provisioningState?: ScriptExecutionProvisioningState;
  /** Standard output stream from the powershell execution */
  output?: string[];
  /** User-defined dictionary. */
  namedOutputs?: Record<string, Record<string, any>>;
  /** Standard information out stream from the powershell execution */
  readonly information?: string[];
  /** Standard warning out stream from the powershell execution */
  readonly warnings?: string[];
  /** Standard error output stream from the powershell execution */
  readonly errors?: string[];
}

export function scriptExecutionPropertiesSerializer(
  item: ScriptExecutionProperties,
): any {
  return {
    scriptCmdletId: item["scriptCmdletId"],
    parameters: !item["parameters"]
      ? item["parameters"]
      : scriptExecutionParameterUnionArraySerializer(item["parameters"]),
    hiddenParameters: !item["hiddenParameters"]
      ? item["hiddenParameters"]
      : scriptExecutionParameterUnionArraySerializer(item["hiddenParameters"]),
    failureReason: item["failureReason"],
    timeout: item["timeout"],
    retention: item["retention"],
    output: !item["output"]
      ? item["output"]
      : item["output"].map((p: any) => {
          return p;
        }),
    namedOutputs: !item["namedOutputs"]
      ? item["namedOutputs"]
      : scriptExecutionPropertiesNamedOutputRecordSerializer(
          item["namedOutputs"],
        ),
  };
}

export function scriptExecutionPropertiesDeserializer(
  item: any,
): ScriptExecutionProperties {
  return {
    scriptCmdletId: item["scriptCmdletId"],
    parameters: !item["parameters"]
      ? item["parameters"]
      : scriptExecutionParameterUnionArrayDeserializer(item["parameters"]),
    hiddenParameters: !item["hiddenParameters"]
      ? item["hiddenParameters"]
      : scriptExecutionParameterUnionArrayDeserializer(
          item["hiddenParameters"],
        ),
    failureReason: item["failureReason"],
    timeout: item["timeout"],
    retention: item["retention"],
    submittedAt: !item["submittedAt"]
      ? item["submittedAt"]
      : new Date(item["submittedAt"]),
    startedAt: !item["startedAt"]
      ? item["startedAt"]
      : new Date(item["startedAt"]),
    finishedAt: !item["finishedAt"]
      ? item["finishedAt"]
      : new Date(item["finishedAt"]),
    provisioningState: item["provisioningState"],
    output: !item["output"]
      ? item["output"]
      : item["output"].map((p: any) => {
          return p;
        }),
    namedOutputs: !item["namedOutputs"]
      ? item["namedOutputs"]
      : scriptExecutionPropertiesNamedOutputRecordDeserializer(
          item["namedOutputs"],
        ),
    information: !item["information"]
      ? item["information"]
      : item["information"].map((p: any) => {
          return p;
        }),
    warnings: !item["warnings"]
      ? item["warnings"]
      : item["warnings"].map((p: any) => {
          return p;
        }),
    errors: !item["errors"]
      ? item["errors"]
      : item["errors"].map((p: any) => {
          return p;
        }),
  };
}

export function scriptExecutionParameterUnionArraySerializer(
  result: Array<ScriptExecutionParameterUnion>,
): any[] {
  return result.map((item) => {
    return scriptExecutionParameterUnionSerializer(item);
  });
}

export function scriptExecutionParameterUnionArrayDeserializer(
  result: Array<ScriptExecutionParameterUnion>,
): any[] {
  return result.map((item) => {
    return scriptExecutionParameterUnionDeserializer(item);
  });
}

/** The arguments passed in to the execution */
export interface ScriptExecutionParameter {
  /** script execution parameter type */
  /** The discriminator possible values: SecureValue, Value, Credential */
  type: ScriptExecutionParameterType;
  /** The parameter name */
  name: string;
}

export function scriptExecutionParameterSerializer(
  item: ScriptExecutionParameter,
): any {
  return { type: item["type"], name: item["name"] };
}

export function scriptExecutionParameterDeserializer(
  item: any,
): ScriptExecutionParameter {
  return {
    type: item["type"],
    name: item["name"],
  };
}

/** Alias for ScriptExecutionParameterUnion */
export type ScriptExecutionParameterUnion =
  | ScriptSecureStringExecutionParameter
  | ScriptStringExecutionParameter
  | PSCredentialExecutionParameter
  | ScriptExecutionParameter;

export function scriptExecutionParameterUnionSerializer(
  item: ScriptExecutionParameterUnion,
): any {
  switch (item.type) {
    case "SecureValue":
      return scriptSecureStringExecutionParameterSerializer(
        item as ScriptSecureStringExecutionParameter,
      );

    case "Value":
      return scriptStringExecutionParameterSerializer(
        item as ScriptStringExecutionParameter,
      );

    case "Credential":
      return psCredentialExecutionParameterSerializer(
        item as PSCredentialExecutionParameter,
      );

    default:
      return scriptExecutionParameterSerializer(item);
  }
}

export function scriptExecutionParameterUnionDeserializer(
  item: any,
): ScriptExecutionParameterUnion {
  switch (item.type) {
    case "SecureValue":
      return scriptSecureStringExecutionParameterDeserializer(
        item as ScriptSecureStringExecutionParameter,
      );

    case "Value":
      return scriptStringExecutionParameterDeserializer(
        item as ScriptStringExecutionParameter,
      );

    case "Credential":
      return psCredentialExecutionParameterDeserializer(
        item as PSCredentialExecutionParameter,
      );

    default:
      return scriptExecutionParameterDeserializer(item);
  }
}

/** script execution parameter type */
export enum KnownScriptExecutionParameterType {
  Value = "Value",
  SecureValue = "SecureValue",
  Credential = "Credential",
}

/**
 * script execution parameter type \
 * {@link KnownScriptExecutionParameterType} can be used interchangeably with ScriptExecutionParameterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Value** \
 * **SecureValue** \
 * **Credential**
 */
export type ScriptExecutionParameterType = string;

/** a plain text value execution parameter */
export interface ScriptSecureStringExecutionParameter
  extends ScriptExecutionParameter {
  /** A secure value for the passed parameter, not to be stored in logs */
  secureValue?: string;
  /** The type of execution parameter */
  type: "SecureValue";
}

export function scriptSecureStringExecutionParameterSerializer(
  item: ScriptSecureStringExecutionParameter,
): any {
  return {
    type: item["type"],
    name: item["name"],
    secureValue: item["secureValue"],
  };
}

export function scriptSecureStringExecutionParameterDeserializer(
  item: any,
): ScriptSecureStringExecutionParameter {
  return {
    type: item["type"],
    name: item["name"],
    secureValue: item["secureValue"],
  };
}

/** a plain text value execution parameter */
export interface ScriptStringExecutionParameter
  extends ScriptExecutionParameter {
  /** The value for the passed parameter */
  value?: string;
  /** The type of execution parameter */
  type: "Value";
}

export function scriptStringExecutionParameterSerializer(
  item: ScriptStringExecutionParameter,
): any {
  return { type: item["type"], name: item["name"], value: item["value"] };
}

export function scriptStringExecutionParameterDeserializer(
  item: any,
): ScriptStringExecutionParameter {
  return {
    type: item["type"],
    name: item["name"],
    value: item["value"],
  };
}

/** a powershell credential object */
export interface PSCredentialExecutionParameter
  extends ScriptExecutionParameter {
  /** username for login */
  username?: string;
  /** password for login */
  password?: string;
  /** The type of execution parameter */
  type: "Credential";
}

export function psCredentialExecutionParameterSerializer(
  item: PSCredentialExecutionParameter,
): any {
  return {
    type: item["type"],
    name: item["name"],
    username: item["username"],
    password: item["password"],
  };
}

export function psCredentialExecutionParameterDeserializer(
  item: any,
): PSCredentialExecutionParameter {
  return {
    type: item["type"],
    name: item["name"],
    username: item["username"],
    password: item["password"],
  };
}

/** Script Execution provisioning state */
export enum KnownScriptExecutionProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is pending */
  Pending = "Pending",
  /** is running */
  Running = "Running",
  /** is cancelling */
  Cancelling = "Cancelling",
  /** is cancelled */
  Cancelled = "Cancelled",
  /** is deleting */
  Deleting = "Deleting",
}

/**
 * Script Execution provisioning state \
 * {@link KnownScriptExecutionProvisioningState} can be used interchangeably with ScriptExecutionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Pending**: is pending \
 * **Running**: is running \
 * **Cancelling**: is cancelling \
 * **Cancelled**: is cancelled \
 * **Deleting**: is deleting
 */
export type ScriptExecutionProvisioningState = string;

export function scriptExecutionPropertiesNamedOutputRecordSerializer(
  item: Record<string, _ScriptExecutionPropertiesNamedOutput>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _scriptExecutionPropertiesNamedOutputSerializer(item[key]);
  });
  return result;
}

export function scriptExecutionPropertiesNamedOutputRecordDeserializer(
  item: Record<string, any>,
): Record<string, _ScriptExecutionPropertiesNamedOutput> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _scriptExecutionPropertiesNamedOutputDeserializer(item[key]);
  });
  return result;
}

/** model interface _ScriptExecutionPropertiesNamedOutput */
export interface _ScriptExecutionPropertiesNamedOutput {}

export function _scriptExecutionPropertiesNamedOutputSerializer(
  item: _ScriptExecutionPropertiesNamedOutput,
): any {
  return item;
}

export function _scriptExecutionPropertiesNamedOutputDeserializer(
  item: any,
): _ScriptExecutionPropertiesNamedOutput {
  return item;
}

/** The response of a PrivateCloud list operation. */
export interface _PrivateCloudList {
  /** The PrivateCloud items on this page */
  value: PrivateCloud[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _privateCloudListDeserializer(item: any): _PrivateCloudList {
  return {
    value: privateCloudArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function privateCloudArraySerializer(
  result: Array<PrivateCloud>,
): any[] {
  return result.map((item) => {
    return privateCloudSerializer(item);
  });
}

export function privateCloudArrayDeserializer(
  result: Array<PrivateCloud>,
): any[] {
  return result.map((item) => {
    return privateCloudDeserializer(item);
  });
}

/** A private cloud resource */
export interface PrivateCloud extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PrivateCloudProperties;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: Sku;
  /** The managed service identities assigned to this resource. */
  identity?: SystemAssignedServiceIdentity;
  /** The availability zones. */
  zones?: string[];
}

export function privateCloudSerializer(item: PrivateCloud): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : privateCloudPropertiesSerializer(item["properties"]),
    sku: skuSerializer(item["sku"]),
    identity: !item["identity"]
      ? item["identity"]
      : systemAssignedServiceIdentitySerializer(item["identity"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

export function privateCloudDeserializer(item: any): PrivateCloud {
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
      : privateCloudPropertiesDeserializer(item["properties"]),
    sku: skuDeserializer(item["sku"]),
    identity: !item["identity"]
      ? item["identity"]
      : systemAssignedServiceIdentityDeserializer(item["identity"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** The properties of a private cloud resource */
export interface PrivateCloudProperties {
  /** The default cluster used for management */
  managementCluster: ManagementCluster;
  /** Connectivity to internet is enabled or disabled */
  internet?: InternetEnum;
  /** vCenter Single Sign On Identity Sources */
  identitySources?: IdentitySource[];
  /** Properties describing how the cloud is distributed across availability zones */
  availability?: AvailabilityProperties;
  /** Customer managed key encryption, can be enabled or disabled */
  encryption?: Encryption;
  /**
   * Array of additional networks noncontiguous with networkBlock. Networks must be
   * unique and non-overlapping across VNet in your subscription, on-premise, and
   * this privateCloud networkBlock attribute. Make sure the CIDR format conforms to
   * (A.B.C.D/X).
   */
  extendedNetworkBlocks?: string[];
  /** The provisioning state */
  readonly provisioningState?: PrivateCloudProvisioningState;
  /** An ExpressRoute Circuit */
  circuit?: Circuit;
  /** The endpoints */
  readonly endpoints?: Endpoints;
  /**
   * The block of addresses should be unique across VNet in your subscription as
   * well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where
   * A,B,C,D are between 0 and 255, and X is between 0 and 22
   */
  networkBlock: string;
  /** Network used to access vCenter Server and NSX-T Manager */
  readonly managementNetwork?: string;
  /** Used for virtual machine cold migration, cloning, and snapshot migration */
  readonly provisioningNetwork?: string;
  /** Used for live migration of virtual machines */
  readonly vmotionNetwork?: string;
  /** Optionally, set the vCenter admin password when the private cloud is created */
  vcenterPassword?: string;
  /** Optionally, set the NSX-T Manager password when the private cloud is created */
  nsxtPassword?: string;
  /** Thumbprint of the vCenter Server SSL certificate */
  readonly vcenterCertificateThumbprint?: string;
  /** Thumbprint of the NSX-T Manager SSL certificate */
  readonly nsxtCertificateThumbprint?: string;
  /** Array of cloud link IDs from other clouds that connect to this one */
  readonly externalCloudLinks?: string[];
  /**
   * A secondary expressRoute circuit from a separate AZ. Only present in a
   * stretched private cloud
   */
  secondaryCircuit?: Circuit;
  /**
   * Flag to indicate whether the private cloud has the quota for provisioned NSX
   * Public IP count raised from 64 to 1024
   */
  readonly nsxPublicIpQuotaRaised?: NsxPublicIpQuotaRaisedEnum;
  /** Azure resource ID of the virtual network */
  virtualNetworkId?: string;
  /** The type of DNS zone to use. */
  dnsZoneType?: DnsZoneType;
}

export function privateCloudPropertiesSerializer(
  item: PrivateCloudProperties,
): any {
  return {
    managementCluster: managementClusterSerializer(item["managementCluster"]),
    internet: item["internet"],
    identitySources: !item["identitySources"]
      ? item["identitySources"]
      : identitySourceArraySerializer(item["identitySources"]),
    availability: !item["availability"]
      ? item["availability"]
      : availabilityPropertiesSerializer(item["availability"]),
    encryption: !item["encryption"]
      ? item["encryption"]
      : encryptionSerializer(item["encryption"]),
    extendedNetworkBlocks: !item["extendedNetworkBlocks"]
      ? item["extendedNetworkBlocks"]
      : item["extendedNetworkBlocks"].map((p: any) => {
          return p;
        }),
    circuit: !item["circuit"]
      ? item["circuit"]
      : circuitSerializer(item["circuit"]),
    networkBlock: item["networkBlock"],
    vcenterPassword: item["vcenterPassword"],
    nsxtPassword: item["nsxtPassword"],
    secondaryCircuit: !item["secondaryCircuit"]
      ? item["secondaryCircuit"]
      : circuitSerializer(item["secondaryCircuit"]),
    virtualNetworkId: item["virtualNetworkId"],
    dnsZoneType: item["dnsZoneType"],
  };
}

export function privateCloudPropertiesDeserializer(
  item: any,
): PrivateCloudProperties {
  return {
    managementCluster: managementClusterDeserializer(item["managementCluster"]),
    internet: item["internet"],
    identitySources: !item["identitySources"]
      ? item["identitySources"]
      : identitySourceArrayDeserializer(item["identitySources"]),
    availability: !item["availability"]
      ? item["availability"]
      : availabilityPropertiesDeserializer(item["availability"]),
    encryption: !item["encryption"]
      ? item["encryption"]
      : encryptionDeserializer(item["encryption"]),
    extendedNetworkBlocks: !item["extendedNetworkBlocks"]
      ? item["extendedNetworkBlocks"]
      : item["extendedNetworkBlocks"].map((p: any) => {
          return p;
        }),
    provisioningState: item["provisioningState"],
    circuit: !item["circuit"]
      ? item["circuit"]
      : circuitDeserializer(item["circuit"]),
    endpoints: !item["endpoints"]
      ? item["endpoints"]
      : endpointsDeserializer(item["endpoints"]),
    networkBlock: item["networkBlock"],
    managementNetwork: item["managementNetwork"],
    provisioningNetwork: item["provisioningNetwork"],
    vmotionNetwork: item["vmotionNetwork"],
    vcenterPassword: item["vcenterPassword"],
    nsxtPassword: item["nsxtPassword"],
    vcenterCertificateThumbprint: item["vcenterCertificateThumbprint"],
    nsxtCertificateThumbprint: item["nsxtCertificateThumbprint"],
    externalCloudLinks: !item["externalCloudLinks"]
      ? item["externalCloudLinks"]
      : item["externalCloudLinks"].map((p: any) => {
          return p;
        }),
    secondaryCircuit: !item["secondaryCircuit"]
      ? item["secondaryCircuit"]
      : circuitDeserializer(item["secondaryCircuit"]),
    nsxPublicIpQuotaRaised: item["nsxPublicIpQuotaRaised"],
    virtualNetworkId: item["virtualNetworkId"],
    dnsZoneType: item["dnsZoneType"],
  };
}

/** The properties of a management cluster */
export interface ManagementCluster {
  /** The cluster size */
  clusterSize?: number;
  /** The state of the cluster provisioning */
  readonly provisioningState?: ClusterProvisioningState;
  /** The identity */
  readonly clusterId?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

export function managementClusterSerializer(item: ManagementCluster): any {
  return {
    clusterSize: item["clusterSize"],
    hosts: !item["hosts"]
      ? item["hosts"]
      : item["hosts"].map((p: any) => {
          return p;
        }),
    vsanDatastoreName: item["vsanDatastoreName"],
  };
}

export function managementClusterDeserializer(item: any): ManagementCluster {
  return {
    clusterSize: item["clusterSize"],
    provisioningState: item["provisioningState"],
    clusterId: item["clusterId"],
    hosts: !item["hosts"]
      ? item["hosts"]
      : item["hosts"].map((p: any) => {
          return p;
        }),
    vsanDatastoreName: item["vsanDatastoreName"],
  };
}

/** Cluster provisioning state */
export enum KnownClusterProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is cancelled */
  Cancelled = "Cancelled",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * Cluster provisioning state \
 * {@link KnownClusterProvisioningState} can be used interchangeably with ClusterProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Cancelled**: is cancelled \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type ClusterProvisioningState = string;

/** Whether internet is enabled or disabled */
export enum KnownInternetEnum {
  /** is enabled */
  Enabled = "Enabled",
  /** is disabled */
  Disabled = "Disabled",
}

/**
 * Whether internet is enabled or disabled \
 * {@link KnownInternetEnum} can be used interchangeably with InternetEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: is enabled \
 * **Disabled**: is disabled
 */
export type InternetEnum = string;

export function identitySourceArraySerializer(
  result: Array<IdentitySource>,
): any[] {
  return result.map((item) => {
    return identitySourceSerializer(item);
  });
}

export function identitySourceArrayDeserializer(
  result: Array<IdentitySource>,
): any[] {
  return result.map((item) => {
    return identitySourceDeserializer(item);
  });
}

/** vCenter Single Sign On Identity Source */
export interface IdentitySource {
  /** The name of the identity source */
  name?: string;
  /** The domain's NetBIOS name */
  alias?: string;
  /** The domain's DNS name */
  domain?: string;
  /** The base distinguished name for users */
  baseUserDN?: string;
  /** The base distinguished name for groups */
  baseGroupDN?: string;
  /** Primary server URL */
  primaryServer?: string;
  /** Secondary server URL */
  secondaryServer?: string;
  /** Protect LDAP communication using SSL certificate (LDAPS) */
  ssl?: SslEnum;
  /**
   * The ID of an Active Directory user with a minimum of read-only access to Base
   * DN for users and group
   */
  username?: string;
  /**
   * The password of the Active Directory user with a minimum of read-only access to
   * Base DN for users and groups.
   */
  password?: string;
}

export function identitySourceSerializer(item: IdentitySource): any {
  return {
    name: item["name"],
    alias: item["alias"],
    domain: item["domain"],
    baseUserDN: item["baseUserDN"],
    baseGroupDN: item["baseGroupDN"],
    primaryServer: item["primaryServer"],
    secondaryServer: item["secondaryServer"],
    ssl: item["ssl"],
    username: item["username"],
    password: item["password"],
  };
}

export function identitySourceDeserializer(item: any): IdentitySource {
  return {
    name: item["name"],
    alias: item["alias"],
    domain: item["domain"],
    baseUserDN: item["baseUserDN"],
    baseGroupDN: item["baseGroupDN"],
    primaryServer: item["primaryServer"],
    secondaryServer: item["secondaryServer"],
    ssl: item["ssl"],
    username: item["username"],
    password: item["password"],
  };
}

/** Whether SSL is enabled or disabled */
export enum KnownSslEnum {
  /** is enabled */
  Enabled = "Enabled",
  /** is disabled */
  Disabled = "Disabled",
}

/**
 * Whether SSL is enabled or disabled \
 * {@link KnownSslEnum} can be used interchangeably with SslEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: is enabled \
 * **Disabled**: is disabled
 */
export type SslEnum = string;

/** The properties describing private cloud availability zone distribution */
export interface AvailabilityProperties {
  /** The availability strategy for the private cloud */
  strategy?: AvailabilityStrategy;
  /** The primary availability zone for the private cloud */
  zone?: number;
  /** The secondary availability zone for the private cloud */
  secondaryZone?: number;
}

export function availabilityPropertiesSerializer(
  item: AvailabilityProperties,
): any {
  return {
    strategy: item["strategy"],
    zone: item["zone"],
    secondaryZone: item["secondaryZone"],
  };
}

export function availabilityPropertiesDeserializer(
  item: any,
): AvailabilityProperties {
  return {
    strategy: item["strategy"],
    zone: item["zone"],
    secondaryZone: item["secondaryZone"],
  };
}

/** Whether the private clouds is available in a single zone or two zones */
export enum KnownAvailabilityStrategy {
  /** in single zone */
  SingleZone = "SingleZone",
  /** in two zones */
  DualZone = "DualZone",
}

/**
 * Whether the private clouds is available in a single zone or two zones \
 * {@link KnownAvailabilityStrategy} can be used interchangeably with AvailabilityStrategy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SingleZone**: in single zone \
 * **DualZone**: in two zones
 */
export type AvailabilityStrategy = string;

/** The properties of customer managed encryption key */
export interface Encryption {
  /** Status of customer managed encryption key */
  status?: EncryptionState;
  /** The key vault where the encryption key is stored */
  keyVaultProperties?: EncryptionKeyVaultProperties;
}

export function encryptionSerializer(item: Encryption): any {
  return {
    status: item["status"],
    keyVaultProperties: !item["keyVaultProperties"]
      ? item["keyVaultProperties"]
      : encryptionKeyVaultPropertiesSerializer(item["keyVaultProperties"]),
  };
}

export function encryptionDeserializer(item: any): Encryption {
  return {
    status: item["status"],
    keyVaultProperties: !item["keyVaultProperties"]
      ? item["keyVaultProperties"]
      : encryptionKeyVaultPropertiesDeserializer(item["keyVaultProperties"]),
  };
}

/** Whether encryption is enabled or disabled */
export enum KnownEncryptionState {
  /** is enabled */
  Enabled = "Enabled",
  /** is disabled */
  Disabled = "Disabled",
}

/**
 * Whether encryption is enabled or disabled \
 * {@link KnownEncryptionState} can be used interchangeably with EncryptionState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: is enabled \
 * **Disabled**: is disabled
 */
export type EncryptionState = string;

/** An Encryption Key */
export interface EncryptionKeyVaultProperties {
  /** The name of the key. */
  keyName?: string;
  /** The version of the key. */
  keyVersion?: string;
  /** The auto-detected version of the key if versionType is auto-detected. */
  readonly autoDetectedKeyVersion?: string;
  /** The URL of the vault. */
  keyVaultUrl?: string;
  /** The state of key provided */
  readonly keyState?: EncryptionKeyStatus;
  /** Property of the key if user provided or auto detected */
  readonly versionType?: EncryptionVersionType;
}

export function encryptionKeyVaultPropertiesSerializer(
  item: EncryptionKeyVaultProperties,
): any {
  return {
    keyName: item["keyName"],
    keyVersion: item["keyVersion"],
    keyVaultUrl: item["keyVaultUrl"],
  };
}

export function encryptionKeyVaultPropertiesDeserializer(
  item: any,
): EncryptionKeyVaultProperties {
  return {
    keyName: item["keyName"],
    keyVersion: item["keyVersion"],
    autoDetectedKeyVersion: item["autoDetectedKeyVersion"],
    keyVaultUrl: item["keyVaultUrl"],
    keyState: item["keyState"],
    versionType: item["versionType"],
  };
}

/** Whether the the encryption key is connected or access denied */
export enum KnownEncryptionKeyStatus {
  /** is connected */
  Connected = "Connected",
  /** is access denied */
  AccessDenied = "AccessDenied",
}

/**
 * Whether the the encryption key is connected or access denied \
 * {@link KnownEncryptionKeyStatus} can be used interchangeably with EncryptionKeyStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Connected**: is connected \
 * **AccessDenied**: is access denied
 */
export type EncryptionKeyStatus = string;

/** Whether the encryption version is fixed or auto-detected */
export enum KnownEncryptionVersionType {
  /** is fixed */
  Fixed = "Fixed",
  /** is auto-detected */
  AutoDetected = "AutoDetected",
}

/**
 * Whether the encryption version is fixed or auto-detected \
 * {@link KnownEncryptionVersionType} can be used interchangeably with EncryptionVersionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Fixed**: is fixed \
 * **AutoDetected**: is auto-detected
 */
export type EncryptionVersionType = string;

/** private cloud provisioning state */
export enum KnownPrivateCloudProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** is cancelled */
  Cancelled = "Cancelled",
  /** is pending */
  Pending = "Pending",
  /** is building */
  Building = "Building",
  /** is deleting */
  Deleting = "Deleting",
  /** is updating */
  Updating = "Updating",
}

/**
 * private cloud provisioning state \
 * {@link KnownPrivateCloudProvisioningState} can be used interchangeably with PrivateCloudProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Cancelled**: is cancelled \
 * **Pending**: is pending \
 * **Building**: is building \
 * **Deleting**: is deleting \
 * **Updating**: is updating
 */
export type PrivateCloudProvisioningState = string;

/** An ExpressRoute Circuit */
export interface Circuit {
  /** CIDR of primary subnet */
  readonly primarySubnet?: string;
  /** CIDR of secondary subnet */
  readonly secondarySubnet?: string;
  /** Identifier of the ExpressRoute Circuit (Microsoft Colo only) */
  readonly expressRouteID?: string;
  /** ExpressRoute Circuit private peering identifier */
  readonly expressRoutePrivatePeeringID?: string;
}

export function circuitSerializer(item: Circuit): any {
  return item;
}

export function circuitDeserializer(item: any): Circuit {
  return {
    primarySubnet: item["primarySubnet"],
    secondarySubnet: item["secondarySubnet"],
    expressRouteID: item["expressRouteID"],
    expressRoutePrivatePeeringID: item["expressRoutePrivatePeeringID"],
  };
}

/** Endpoint addresses */
export interface Endpoints {
  /** Endpoint FQDN for the NSX-T Data Center manager */
  readonly nsxtManager?: string;
  /** Endpoint FQDN for Virtual Center Server Appliance */
  readonly vcsa?: string;
  /** Endpoint FQDN for the HCX Cloud Manager */
  readonly hcxCloudManager?: string;
  /** Endpoint IP for the NSX-T Data Center manager */
  readonly nsxtManagerIp?: string;
  /** Endpoint IP for Virtual Center Server Appliance */
  readonly vcenterIp?: string;
  /** Endpoint IP for the HCX Cloud Manager */
  readonly hcxCloudManagerIp?: string;
}

export function endpointsDeserializer(item: any): Endpoints {
  return {
    nsxtManager: item["nsxtManager"],
    vcsa: item["vcsa"],
    hcxCloudManager: item["hcxCloudManager"],
    nsxtManagerIp: item["nsxtManagerIp"],
    vcenterIp: item["vcenterIp"],
    hcxCloudManagerIp: item["hcxCloudManagerIp"],
  };
}

/** NSX public IP quota raised */
export enum KnownNsxPublicIpQuotaRaisedEnum {
  /** is enabled */
  Enabled = "Enabled",
  /** is disabled */
  Disabled = "Disabled",
}

/**
 * NSX public IP quota raised \
 * {@link KnownNsxPublicIpQuotaRaisedEnum} can be used interchangeably with NsxPublicIpQuotaRaisedEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: is enabled \
 * **Disabled**: is disabled
 */
export type NsxPublicIpQuotaRaisedEnum = string;

/** The type of DNS zone. */
export enum KnownDnsZoneType {
  /** Primary DNS zone. */
  Public = "Public",
  /** Private DNS zone. */
  Private = "Private",
}

/**
 * The type of DNS zone. \
 * {@link KnownDnsZoneType} can be used interchangeably with DnsZoneType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Public**: Primary DNS zone. \
 * **Private**: Private DNS zone.
 */
export type DnsZoneType = string;

/** The resource model definition representing SKU */
export interface Sku {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTier;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

export function skuSerializer(item: Sku): any {
  return {
    name: item["name"],
    tier: item["tier"],
    size: item["size"],
    family: item["family"],
    capacity: item["capacity"],
  };
}

export function skuDeserializer(item: any): Sku {
  return {
    name: item["name"],
    tier: item["tier"],
    size: item["size"],
    family: item["family"],
    capacity: item["capacity"],
  };
}

/** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";

/** Managed service identity (either system assigned, or none) */
export interface SystemAssignedServiceIdentity {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: SystemAssignedServiceIdentityType;
}

export function systemAssignedServiceIdentitySerializer(
  item: SystemAssignedServiceIdentity,
): any {
  return { type: item["type"] };
}

export function systemAssignedServiceIdentityDeserializer(
  item: any,
): SystemAssignedServiceIdentity {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
  };
}

/** Type of managed service identity (either system assigned, or none). */
export enum KnownSystemAssignedServiceIdentityType {
  /** No managed system identity. */
  None = "None",
  /** System assigned managed system identity. */
  SystemAssigned = "SystemAssigned",
}

/**
 * Type of managed service identity (either system assigned, or none). \
 * {@link KnownSystemAssignedServiceIdentityType} can be used interchangeably with SystemAssignedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No managed system identity. \
 * **SystemAssigned**: System assigned managed system identity.
 */
export type SystemAssignedServiceIdentityType = string;

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

/** An update to a private cloud resource */
export interface PrivateCloudUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku?: Sku;
  /** The managed service identities assigned to this resource. */
  identity?: SystemAssignedServiceIdentity;
  /** The updatable properties of a private cloud resource */
  properties?: PrivateCloudUpdateProperties;
}

export function privateCloudUpdateSerializer(item: PrivateCloudUpdate): any {
  return {
    tags: item["tags"],
    sku: !item["sku"] ? item["sku"] : skuSerializer(item["sku"]),
    identity: !item["identity"]
      ? item["identity"]
      : systemAssignedServiceIdentitySerializer(item["identity"]),
    properties: !item["properties"]
      ? item["properties"]
      : privateCloudUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The properties of a private cloud resource that may be updated */
export interface PrivateCloudUpdateProperties {
  /** The default cluster used for management */
  managementCluster?: ManagementCluster;
  /** Connectivity to internet is enabled or disabled */
  internet?: InternetEnum;
  /** vCenter Single Sign On Identity Sources */
  identitySources?: IdentitySource[];
  /** Properties describing how the cloud is distributed across availability zones */
  availability?: AvailabilityProperties;
  /** Customer managed key encryption, can be enabled or disabled */
  encryption?: Encryption;
  /**
   * Array of additional networks noncontiguous with networkBlock. Networks must be
   * unique and non-overlapping across VNet in your subscription, on-premise, and
   * this privateCloud networkBlock attribute. Make sure the CIDR format conforms to
   * (A.B.C.D/X).
   */
  extendedNetworkBlocks?: string[];
  /** The type of DNS zone to use. */
  dnsZoneType?: DnsZoneType;
}

export function privateCloudUpdatePropertiesSerializer(
  item: PrivateCloudUpdateProperties,
): any {
  return {
    managementCluster: !item["managementCluster"]
      ? item["managementCluster"]
      : managementClusterSerializer(item["managementCluster"]),
    internet: item["internet"],
    identitySources: !item["identitySources"]
      ? item["identitySources"]
      : identitySourceArraySerializer(item["identitySources"]),
    availability: !item["availability"]
      ? item["availability"]
      : availabilityPropertiesSerializer(item["availability"]),
    encryption: !item["encryption"]
      ? item["encryption"]
      : encryptionSerializer(item["encryption"]),
    extendedNetworkBlocks: !item["extendedNetworkBlocks"]
      ? item["extendedNetworkBlocks"]
      : item["extendedNetworkBlocks"].map((p: any) => {
          return p;
        }),
    dnsZoneType: item["dnsZoneType"],
  };
}

/** Administrative credentials for accessing vCenter and NSX-T */
export interface AdminCredentials {
  /** NSX-T Manager username */
  readonly nsxtUsername?: string;
  /** NSX-T Manager password */
  readonly nsxtPassword?: string;
  /** vCenter admin username */
  readonly vcenterUsername?: string;
  /** vCenter admin password */
  readonly vcenterPassword?: string;
}

export function adminCredentialsDeserializer(item: any): AdminCredentials {
  return {
    nsxtUsername: item["nsxtUsername"],
    nsxtPassword: item["nsxtPassword"],
    vcenterUsername: item["vcenterUsername"],
    vcenterPassword: item["vcenterPassword"],
  };
}

/** The response of a Cluster list operation. */
export interface _ClusterList {
  /** The Cluster items on this page */
  value: Cluster[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _clusterListDeserializer(item: any): _ClusterList {
  return {
    value: clusterArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function clusterArraySerializer(result: Array<Cluster>): any[] {
  return result.map((item) => {
    return clusterSerializer(item);
  });
}

export function clusterArrayDeserializer(result: Array<Cluster>): any[] {
  return result.map((item) => {
    return clusterDeserializer(item);
  });
}

/** A cluster resource */
export interface Cluster extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ClusterProperties;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: Sku;
}

export function clusterSerializer(item: Cluster): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : clusterPropertiesSerializer(item["properties"]),
    sku: skuSerializer(item["sku"]),
  };
}

export function clusterDeserializer(item: any): Cluster {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : clusterPropertiesDeserializer(item["properties"]),
    sku: skuDeserializer(item["sku"]),
  };
}

/** The properties of a cluster */
export interface ClusterProperties {
  /** The cluster size */
  clusterSize?: number;
  /** The state of the cluster provisioning */
  readonly provisioningState?: ClusterProvisioningState;
  /** The identity */
  readonly clusterId?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

export function clusterPropertiesSerializer(item: ClusterProperties): any {
  return {
    clusterSize: item["clusterSize"],
    hosts: !item["hosts"]
      ? item["hosts"]
      : item["hosts"].map((p: any) => {
          return p;
        }),
    vsanDatastoreName: item["vsanDatastoreName"],
  };
}

export function clusterPropertiesDeserializer(item: any): ClusterProperties {
  return {
    clusterSize: item["clusterSize"],
    provisioningState: item["provisioningState"],
    clusterId: item["clusterId"],
    hosts: !item["hosts"]
      ? item["hosts"]
      : item["hosts"].map((p: any) => {
          return p;
        }),
    vsanDatastoreName: item["vsanDatastoreName"],
  };
}

/** An update of a cluster resource */
export interface ClusterUpdate {
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku?: Sku;
  /** The properties of a cluster resource that may be updated */
  properties?: ClusterUpdateProperties;
}

export function clusterUpdateSerializer(item: ClusterUpdate): any {
  return {
    sku: !item["sku"] ? item["sku"] : skuSerializer(item["sku"]),
    properties: !item["properties"]
      ? item["properties"]
      : clusterUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The properties of a cluster that may be updated */
export interface ClusterUpdateProperties {
  /** The cluster size */
  clusterSize?: number;
  /** The hosts */
  hosts?: string[];
}

export function clusterUpdatePropertiesSerializer(
  item: ClusterUpdateProperties,
): any {
  return {
    clusterSize: item["clusterSize"],
    hosts: !item["hosts"]
      ? item["hosts"]
      : item["hosts"].map((p: any) => {
          return p;
        }),
  };
}

/** List of all zones and associated hosts for a cluster */
export interface ClusterZoneList {
  /** Zone and associated hosts info */
  zones?: ClusterZone[];
}

export function clusterZoneListDeserializer(item: any): ClusterZoneList {
  return {
    zones: !item["zones"]
      ? item["zones"]
      : clusterZoneArrayDeserializer(item["zones"]),
  };
}

export function clusterZoneArrayDeserializer(
  result: Array<ClusterZone>,
): any[] {
  return result.map((item) => {
    return clusterZoneDeserializer(item);
  });
}

/** Zone and associated hosts info */
export interface ClusterZone {
  /** List of hosts belonging to the availability zone in a cluster */
  readonly hosts?: string[];
  /** Availability zone identifier */
  readonly zone?: string;
}

export function clusterZoneDeserializer(item: any): ClusterZone {
  return {
    hosts: !item["hosts"]
      ? item["hosts"]
      : item["hosts"].map((p: any) => {
          return p;
        }),
    zone: item["zone"],
  };
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _operationListResultDeserializer(
  item: any,
): _OperationListResult {
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
    display: !item["display"]
      ? item["display"]
      : operationDisplayDeserializer(item["display"]),
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

/** Script Output Stream type */
export enum KnownScriptOutputStreamType {
  /** is information */
  Information = "Information",
  /** is warning */
  Warning = "Warning",
  /** is output */
  Output = "Output",
  /** is error */
  Error = "Error",
}

/**
 * Script Output Stream type \
 * {@link KnownScriptOutputStreamType} can be used interchangeably with ScriptOutputStreamType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Information**: is information \
 * **Warning**: is warning \
 * **Output**: is output \
 * **Error**: is error
 */
export type ScriptOutputStreamType = string;

/** Azure VMware Solution API versions. */
export enum KnownVersions {
  /** Azure VMware Solution API version 2023-09-01. */
  V20230901 = "2023-09-01",
  /** Azure VMware Solution API version 2024-09-01. */
  V20240901 = "2024-09-01",
}
