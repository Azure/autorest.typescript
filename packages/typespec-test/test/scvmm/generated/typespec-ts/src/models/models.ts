// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Defines the GuestAgent. */
export interface GuestAgent extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: GuestAgentProperties;
}

export function guestAgentSerializer(item: GuestAgent): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : guestAgentPropertiesSerializer(item["properties"]),
  };
}

export function guestAgentDeserializer(item: any): GuestAgent {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : guestAgentPropertiesDeserializer(item["properties"]),
  };
}

/** Defines the resource properties. */
export interface GuestAgentProperties {
  /** Gets a unique identifier for this resource. */
  readonly uuid?: string;
  /** Username / Password Credentials to provision guest agent. */
  credentials?: GuestCredential;
  /** HTTP Proxy configuration for the VM. */
  httpProxyConfig?: HttpProxyConfiguration;
  /** Gets or sets the guest agent provisioning action. */
  provisioningAction?: ProvisioningAction;
  /** Gets the guest agent status. */
  readonly status?: string;
  /** Gets the name of the corresponding resource in Kubernetes. */
  readonly customResourceName?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
  /** The resource id of the private link scope this machine is assigned to, if any. */
  privateLinkScopeResourceId?: string;
}

export function guestAgentPropertiesSerializer(
  item: GuestAgentProperties,
): any {
  return {
    credentials: !item["credentials"]
      ? item["credentials"]
      : guestCredentialSerializer(item["credentials"]),
    httpProxyConfig: !item["httpProxyConfig"]
      ? item["httpProxyConfig"]
      : httpProxyConfigurationSerializer(item["httpProxyConfig"]),
    provisioningAction: item["provisioningAction"],
    privateLinkScopeResourceId: item["privateLinkScopeResourceId"],
  };
}

export function guestAgentPropertiesDeserializer(
  item: any,
): GuestAgentProperties {
  return {
    uuid: item["uuid"],
    credentials: !item["credentials"]
      ? item["credentials"]
      : guestCredentialDeserializer(item["credentials"]),
    httpProxyConfig: !item["httpProxyConfig"]
      ? item["httpProxyConfig"]
      : httpProxyConfigurationDeserializer(item["httpProxyConfig"]),
    provisioningAction: item["provisioningAction"],
    status: item["status"],
    customResourceName: item["customResourceName"],
    provisioningState: item["provisioningState"],
    privateLinkScopeResourceId: item["privateLinkScopeResourceId"],
  };
}

/** Username / Password Credentials to connect to guest. */
export interface GuestCredential {
  /** Gets or sets username to connect with the guest. */
  username: string;
  /** Gets or sets the password to connect with the guest. */
  password: string;
}

export function guestCredentialSerializer(item: GuestCredential): any {
  return { username: item["username"], password: item["password"] };
}

export function guestCredentialDeserializer(item: any): GuestCredential {
  return {
    username: item["username"],
    password: item["password"],
  };
}

/** HTTP Proxy configuration for the VM. */
export interface HttpProxyConfiguration {
  /** Gets or sets httpsProxy url. */
  httpsProxy?: string;
}

export function httpProxyConfigurationSerializer(
  item: HttpProxyConfiguration,
): any {
  return { httpsProxy: item["httpsProxy"] };
}

export function httpProxyConfigurationDeserializer(
  item: any,
): HttpProxyConfiguration {
  return {
    httpsProxy: item["httpsProxy"],
  };
}

/** Guest agent provisioning action. */
export enum KnownProvisioningAction {
  /** Install guest agent. */
  Install = "install",
  /** Uninstall guest agent. */
  Uninstall = "uninstall",
  /** Repair guest agent. */
  Repair = "repair",
}

/**
 * Guest agent provisioning action. \
 * {@link KnownProvisioningAction} can be used interchangeably with ProvisioningAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **install**: Install guest agent. \
 * **uninstall**: Uninstall guest agent. \
 * **repair**: Repair guest agent.
 */
export type ProvisioningAction = string;

/** The provisioning state of the resource. */
export enum KnownProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** The resource is provisioning. */
  Provisioning = "Provisioning",
  /** The resource is updating. */
  Updating = "Updating",
  /** The resource is being deleted. */
  Deleting = "Deleting",
  /** The resource has been accepted. */
  Accepted = "Accepted",
  /** The resource was created. */
  Created = "Created",
}

/**
 * The provisioning state of the resource. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Provisioning**: The resource is provisioning. \
 * **Updating**: The resource is updating. \
 * **Deleting**: The resource is being deleted. \
 * **Accepted**: The resource has been accepted. \
 * **Created**: The resource was created.
 */
export type ProvisioningState = string;

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

/** The response of a GuestAgent list operation. */
export interface _GuestAgentListResult {
  /** The GuestAgent items on this page */
  value: GuestAgent[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _guestAgentListResultDeserializer(
  item: any,
): _GuestAgentListResult {
  return {
    value: guestAgentArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function guestAgentArraySerializer(result: Array<GuestAgent>): any[] {
  return result.map((item) => {
    return guestAgentSerializer(item);
  });
}

export function guestAgentArrayDeserializer(result: Array<GuestAgent>): any[] {
  return result.map((item) => {
    return guestAgentDeserializer(item);
  });
}

/** Defines the HybridIdentityMetadata. */
export interface VmInstanceHybridIdentityMetadata extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: VmInstanceHybridIdentityMetadataProperties;
}

export function vmInstanceHybridIdentityMetadataDeserializer(
  item: any,
): VmInstanceHybridIdentityMetadata {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : vmInstanceHybridIdentityMetadataPropertiesDeserializer(
          item["properties"],
        ),
  };
}

/** Describes the properties of Hybrid Identity Metadata for a Virtual Machine. */
export interface VmInstanceHybridIdentityMetadataProperties {
  /** The unique identifier for the resource. */
  resourceUid?: string;
  /** Gets or sets the Public Key. */
  publicKey?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function vmInstanceHybridIdentityMetadataPropertiesDeserializer(
  item: any,
): VmInstanceHybridIdentityMetadataProperties {
  return {
    resourceUid: item["resourceUid"],
    publicKey: item["publicKey"],
    provisioningState: item["provisioningState"],
  };
}

/** The response of a VmInstanceHybridIdentityMetadata list operation. */
export interface _VmInstanceHybridIdentityMetadataListResult {
  /** The VmInstanceHybridIdentityMetadata items on this page */
  value: VmInstanceHybridIdentityMetadata[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _vmInstanceHybridIdentityMetadataListResultDeserializer(
  item: any,
): _VmInstanceHybridIdentityMetadataListResult {
  return {
    value: vmInstanceHybridIdentityMetadataArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function vmInstanceHybridIdentityMetadataArrayDeserializer(
  result: Array<VmInstanceHybridIdentityMetadata>,
): any[] {
  return result.map((item) => {
    return vmInstanceHybridIdentityMetadataDeserializer(item);
  });
}

/** Define the virtualMachineInstance. */
export interface VirtualMachineInstance extends ExtensionResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineInstanceProperties;
  /** Gets or sets the extended location. */
  extendedLocation: ExtendedLocation;
}

export function virtualMachineInstanceSerializer(
  item: VirtualMachineInstance,
): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : virtualMachineInstancePropertiesSerializer(item["properties"]),
    extendedLocation: extendedLocationSerializer(item["extendedLocation"]),
  };
}

export function virtualMachineInstanceDeserializer(
  item: any,
): VirtualMachineInstance {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : virtualMachineInstancePropertiesDeserializer(item["properties"]),
    extendedLocation: extendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Defines the resource properties. */
export interface VirtualMachineInstanceProperties {
  /** Availability Sets in vm. */
  availabilitySets?: AvailabilitySetListItem[];
  /** OS properties. */
  osProfile?: OsProfileForVmInstance;
  /** Hardware properties. */
  hardwareProfile?: HardwareProfile;
  /** Network properties. */
  networkProfile?: NetworkProfile;
  /** Storage properties. */
  storageProfile?: StorageProfile;
  /** Gets the infrastructure profile. */
  infrastructureProfile?: InfrastructureProfile;
  /** Gets the power state of the virtual machine. */
  readonly powerState?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function virtualMachineInstancePropertiesSerializer(
  item: VirtualMachineInstanceProperties,
): any {
  return {
    availabilitySets: !item["availabilitySets"]
      ? item["availabilitySets"]
      : availabilitySetListItemArraySerializer(item["availabilitySets"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : osProfileForVmInstanceSerializer(item["osProfile"]),
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : hardwareProfileSerializer(item["hardwareProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : networkProfileSerializer(item["networkProfile"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : storageProfileSerializer(item["storageProfile"]),
    infrastructureProfile: !item["infrastructureProfile"]
      ? item["infrastructureProfile"]
      : infrastructureProfileSerializer(item["infrastructureProfile"]),
  };
}

export function virtualMachineInstancePropertiesDeserializer(
  item: any,
): VirtualMachineInstanceProperties {
  return {
    availabilitySets: !item["availabilitySets"]
      ? item["availabilitySets"]
      : availabilitySetListItemArrayDeserializer(item["availabilitySets"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : osProfileForVmInstanceDeserializer(item["osProfile"]),
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : hardwareProfileDeserializer(item["hardwareProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : networkProfileDeserializer(item["networkProfile"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : storageProfileDeserializer(item["storageProfile"]),
    infrastructureProfile: !item["infrastructureProfile"]
      ? item["infrastructureProfile"]
      : infrastructureProfileDeserializer(item["infrastructureProfile"]),
    powerState: item["powerState"],
    provisioningState: item["provisioningState"],
  };
}

export function availabilitySetListItemArraySerializer(
  result: Array<AvailabilitySetListItem>,
): any[] {
  return result.map((item) => {
    return availabilitySetListItemSerializer(item);
  });
}

export function availabilitySetListItemArrayDeserializer(
  result: Array<AvailabilitySetListItem>,
): any[] {
  return result.map((item) => {
    return availabilitySetListItemDeserializer(item);
  });
}

/** Availability Set model */
export interface AvailabilitySetListItem {
  /** Gets the ARM Id of the microsoft.scvmm/availabilitySets resource. */
  id?: string;
  /** Gets or sets the name of the availability set. */
  name?: string;
}

export function availabilitySetListItemSerializer(
  item: AvailabilitySetListItem,
): any {
  return { id: item["id"], name: item["name"] };
}

export function availabilitySetListItemDeserializer(
  item: any,
): AvailabilitySetListItem {
  return {
    id: item["id"],
    name: item["name"],
  };
}

/** Defines the resource properties. */
export interface OsProfileForVmInstance {
  /** Admin password of the virtual machine. */
  adminPassword?: string;
  /** Gets or sets computer name. */
  computerName?: string;
  /** Gets the type of the os. */
  readonly osType?: OsType;
  /** Gets os sku. */
  readonly osSku?: string;
  /** Gets os version. */
  readonly osVersion?: string;
  /** Gets or sets the domain name. */
  domainName?: string;
  /** Gets or sets the domain username. */
  domainUsername?: string;
  /** Password of the domain the VM has to join. */
  domainPassword?: string;
  /** Gets or sets the workgroup. */
  workgroup?: string;
  /** Gets or sets the product key.Input format xxxxx-xxxxx-xxxxx-xxxxx-xxxxx */
  productKey?: string;
  /** Gets or sets the index value of the timezone. */
  timezone?: number;
  /** Get or sets the commands to be run once at the time of creation separated by semicolons. */
  runOnceCommands?: string;
}

export function osProfileForVmInstanceSerializer(
  item: OsProfileForVmInstance,
): any {
  return {
    adminPassword: item["adminPassword"],
    computerName: item["computerName"],
    domainName: item["domainName"],
    domainUsername: item["domainUsername"],
    domainPassword: item["domainPassword"],
    workgroup: item["workgroup"],
    productKey: item["productKey"],
    timezone: item["timezone"],
    runOnceCommands: item["runOnceCommands"],
  };
}

export function osProfileForVmInstanceDeserializer(
  item: any,
): OsProfileForVmInstance {
  return {
    adminPassword: item["adminPassword"],
    computerName: item["computerName"],
    osType: item["osType"],
    osSku: item["osSku"],
    osVersion: item["osVersion"],
    domainName: item["domainName"],
    domainUsername: item["domainUsername"],
    domainPassword: item["domainPassword"],
    workgroup: item["workgroup"],
    productKey: item["productKey"],
    timezone: item["timezone"],
    runOnceCommands: item["runOnceCommands"],
  };
}

/** Virtual machine operating system type. */
export enum KnownOsType {
  /** Windows operating system. */
  Windows = "Windows",
  /** Linux operating system. */
  Linux = "Linux",
  /** Other operating system. */
  Other = "Other",
}

/**
 * Virtual machine operating system type. \
 * {@link KnownOsType} can be used interchangeably with OsType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Windows**: Windows operating system. \
 * **Linux**: Linux operating system. \
 * **Other**: Other operating system.
 */
export type OsType = string;

/** Defines the resource properties. */
export interface HardwareProfile {
  /** MemoryMB is the size of a virtual machine's memory, in MB. */
  memoryMB?: number;
  /** Gets or sets the number of vCPUs for the vm. */
  cpuCount?: number;
  /** Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs. */
  limitCpuForMigration?: LimitCpuForMigration;
  /** Gets or sets a value indicating whether to enable dynamic memory or not. */
  dynamicMemoryEnabled?: DynamicMemoryEnabled;
  /** Gets or sets the max dynamic memory for the vm. */
  dynamicMemoryMaxMB?: number;
  /** Gets or sets the min dynamic memory for the vm. */
  dynamicMemoryMinMB?: number;
  /** Gets highly available property. */
  readonly isHighlyAvailable?: IsHighlyAvailable;
}

export function hardwareProfileSerializer(item: HardwareProfile): any {
  return {
    memoryMB: item["memoryMB"],
    cpuCount: item["cpuCount"],
    limitCpuForMigration: item["limitCpuForMigration"],
    dynamicMemoryEnabled: item["dynamicMemoryEnabled"],
    dynamicMemoryMaxMB: item["dynamicMemoryMaxMB"],
    dynamicMemoryMinMB: item["dynamicMemoryMinMB"],
  };
}

export function hardwareProfileDeserializer(item: any): HardwareProfile {
  return {
    memoryMB: item["memoryMB"],
    cpuCount: item["cpuCount"],
    limitCpuForMigration: item["limitCpuForMigration"],
    dynamicMemoryEnabled: item["dynamicMemoryEnabled"],
    dynamicMemoryMaxMB: item["dynamicMemoryMaxMB"],
    dynamicMemoryMinMB: item["dynamicMemoryMinMB"],
    isHighlyAvailable: item["isHighlyAvailable"],
  };
}

/** Limit CPU for migration. */
export enum KnownLimitCpuForMigration {
  /** Enable limit CPU for migration. */
  True = "true",
  /** Disable limit CPU for migration. */
  False = "false",
}

/**
 * Limit CPU for migration. \
 * {@link KnownLimitCpuForMigration} can be used interchangeably with LimitCpuForMigration,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Enable limit CPU for migration. \
 * **false**: Disable limit CPU for migration.
 */
export type LimitCpuForMigration = string;

/** Dynamic memory enabled. */
export enum KnownDynamicMemoryEnabled {
  /** Enable dynamic memory. */
  True = "true",
  /** Disable dynamic memory. */
  False = "false",
}

/**
 * Dynamic memory enabled. \
 * {@link KnownDynamicMemoryEnabled} can be used interchangeably with DynamicMemoryEnabled,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Enable dynamic memory. \
 * **false**: Disable dynamic memory.
 */
export type DynamicMemoryEnabled = string;

/** Highly available. */
export enum KnownIsHighlyAvailable {
  /** Enable highly available. */
  True = "true",
  /** Disable highly available. */
  False = "false",
}

/**
 * Highly available. \
 * {@link KnownIsHighlyAvailable} can be used interchangeably with IsHighlyAvailable,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Enable highly available. \
 * **false**: Disable highly available.
 */
export type IsHighlyAvailable = string;

/** Defines the resource properties. */
export interface NetworkProfile {
  /** Gets or sets the list of network interfaces associated with the virtual machine. */
  networkInterfaces?: NetworkInterface[];
}

export function networkProfileSerializer(item: NetworkProfile): any {
  return {
    networkInterfaces: !item["networkInterfaces"]
      ? item["networkInterfaces"]
      : networkInterfaceArraySerializer(item["networkInterfaces"]),
  };
}

export function networkProfileDeserializer(item: any): NetworkProfile {
  return {
    networkInterfaces: !item["networkInterfaces"]
      ? item["networkInterfaces"]
      : networkInterfaceArrayDeserializer(item["networkInterfaces"]),
  };
}

export function networkInterfaceArraySerializer(
  result: Array<NetworkInterface>,
): any[] {
  return result.map((item) => {
    return networkInterfaceSerializer(item);
  });
}

export function networkInterfaceArrayDeserializer(
  result: Array<NetworkInterface>,
): any[] {
  return result.map((item) => {
    return networkInterfaceDeserializer(item);
  });
}

/** Network Interface model */
export interface NetworkInterface {
  /** Gets or sets the name of the network interface. */
  name?: string;
  /** Gets the display name of the network interface as shown in the vmmServer. This is the fallback label for a NIC when the name is not set. */
  readonly displayName?: string;
  /** Gets the nic ipv4 addresses. */
  readonly ipv4Addresses?: string[];
  /** Gets the nic ipv6 addresses. */
  readonly ipv6Addresses?: string[];
  /** Gets or sets the nic MAC address. */
  macAddress?: string;
  /** Gets or sets the ARM Id of the Microsoft.ScVmm/virtualNetwork resource to connect the nic. */
  virtualNetworkId?: string;
  /** Gets the name of the virtual network in vmmServer that the nic is connected to. */
  readonly networkName?: string;
  /** Gets or sets the ipv4 address type. */
  ipv4AddressType?: AllocationMethod;
  /** Gets or sets the ipv6 address type. */
  ipv6AddressType?: AllocationMethod;
  /** Gets or sets the mac address type. */
  macAddressType?: AllocationMethod;
  /** Gets or sets the nic id. */
  nicId?: string;
}

export function networkInterfaceSerializer(item: NetworkInterface): any {
  return {
    name: item["name"],
    macAddress: item["macAddress"],
    virtualNetworkId: item["virtualNetworkId"],
    ipv4AddressType: item["ipv4AddressType"],
    ipv6AddressType: item["ipv6AddressType"],
    macAddressType: item["macAddressType"],
    nicId: item["nicId"],
  };
}

export function networkInterfaceDeserializer(item: any): NetworkInterface {
  return {
    name: item["name"],
    displayName: item["displayName"],
    ipv4Addresses: !item["ipv4Addresses"]
      ? item["ipv4Addresses"]
      : item["ipv4Addresses"].map((p: any) => {
          return p;
        }),
    ipv6Addresses: !item["ipv6Addresses"]
      ? item["ipv6Addresses"]
      : item["ipv6Addresses"].map((p: any) => {
          return p;
        }),
    macAddress: item["macAddress"],
    virtualNetworkId: item["virtualNetworkId"],
    networkName: item["networkName"],
    ipv4AddressType: item["ipv4AddressType"],
    ipv6AddressType: item["ipv6AddressType"],
    macAddressType: item["macAddressType"],
    nicId: item["nicId"],
  };
}

/** Network address allocation method. */
export enum KnownAllocationMethod {
  /** Dynamically allocated address. */
  Dynamic = "Dynamic",
  /** Statically allocated address. */
  Static = "Static",
}

/**
 * Network address allocation method. \
 * {@link KnownAllocationMethod} can be used interchangeably with AllocationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Dynamic**: Dynamically allocated address. \
 * **Static**: Statically allocated address.
 */
export type AllocationMethod = string;

/** Defines the resource properties. */
export interface StorageProfile {
  /** Gets or sets the list of virtual disks associated with the virtual machine. */
  disks?: VirtualDisk[];
}

export function storageProfileSerializer(item: StorageProfile): any {
  return {
    disks: !item["disks"]
      ? item["disks"]
      : virtualDiskArraySerializer(item["disks"]),
  };
}

export function storageProfileDeserializer(item: any): StorageProfile {
  return {
    disks: !item["disks"]
      ? item["disks"]
      : virtualDiskArrayDeserializer(item["disks"]),
  };
}

export function virtualDiskArraySerializer(result: Array<VirtualDisk>): any[] {
  return result.map((item) => {
    return virtualDiskSerializer(item);
  });
}

export function virtualDiskArrayDeserializer(
  result: Array<VirtualDisk>,
): any[] {
  return result.map((item) => {
    return virtualDiskDeserializer(item);
  });
}

/** Virtual disk model */
export interface VirtualDisk {
  /** Gets or sets the name of the disk. */
  name?: string;
  /** Gets the display name of the virtual disk as shown in the vmmServer. This is the fallback label for a disk when the name is not set. */
  readonly displayName?: string;
  /** Gets or sets the disk id. */
  diskId?: string;
  /** Gets or sets the disk total size. */
  diskSizeGB?: number;
  /** Gets the max disk size. */
  readonly maxDiskSizeGB?: number;
  /** Gets or sets the disk bus. */
  bus?: number;
  /** Gets or sets the disk lun. */
  lun?: number;
  /** Gets or sets the disk bus type. */
  busType?: string;
  /** Gets or sets the disk vhd type. */
  vhdType?: string;
  /** Gets the disk volume type. */
  readonly volumeType?: string;
  /** Gets the disk vhd format type. */
  readonly vhdFormatType?: string;
  /** Gets or sets the disk id in the template. */
  templateDiskId?: string;
  /** The QoS policy for the disk. */
  storageQosPolicy?: StorageQosPolicyDetails;
  /** Gets or sets a value indicating diff disk. */
  createDiffDisk?: CreateDiffDisk;
}

export function virtualDiskSerializer(item: VirtualDisk): any {
  return {
    name: item["name"],
    diskId: item["diskId"],
    diskSizeGB: item["diskSizeGB"],
    bus: item["bus"],
    lun: item["lun"],
    busType: item["busType"],
    vhdType: item["vhdType"],
    templateDiskId: item["templateDiskId"],
    storageQoSPolicy: !item["storageQosPolicy"]
      ? item["storageQosPolicy"]
      : storageQosPolicyDetailsSerializer(item["storageQosPolicy"]),
    createDiffDisk: item["createDiffDisk"],
  };
}

export function virtualDiskDeserializer(item: any): VirtualDisk {
  return {
    name: item["name"],
    displayName: item["displayName"],
    diskId: item["diskId"],
    diskSizeGB: item["diskSizeGB"],
    maxDiskSizeGB: item["maxDiskSizeGB"],
    bus: item["bus"],
    lun: item["lun"],
    busType: item["busType"],
    vhdType: item["vhdType"],
    volumeType: item["volumeType"],
    vhdFormatType: item["vhdFormatType"],
    templateDiskId: item["templateDiskId"],
    storageQosPolicy: !item["storageQoSPolicy"]
      ? item["storageQoSPolicy"]
      : storageQosPolicyDetailsDeserializer(item["storageQoSPolicy"]),
    createDiffDisk: item["createDiffDisk"],
  };
}

/** The StorageQoSPolicyDetails definition. */
export interface StorageQosPolicyDetails {
  /** The name of the policy. */
  name?: string;
  /** The ID of the QoS policy. */
  id?: string;
}

export function storageQosPolicyDetailsSerializer(
  item: StorageQosPolicyDetails,
): any {
  return { name: item["name"], id: item["id"] };
}

export function storageQosPolicyDetailsDeserializer(
  item: any,
): StorageQosPolicyDetails {
  return {
    name: item["name"],
    id: item["id"],
  };
}

/** Create diff disk. */
export enum KnownCreateDiffDisk {
  /** Enable create diff disk. */
  True = "true",
  /** Disable create diff disk. */
  False = "false",
}

/**
 * Create diff disk. \
 * {@link KnownCreateDiffDisk} can be used interchangeably with CreateDiffDisk,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Enable create diff disk. \
 * **false**: Disable create diff disk.
 */
export type CreateDiffDisk = string;

/** Specifies the vmmServer infrastructure specific settings for the virtual machine instance. */
export interface InfrastructureProfile {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** ARM Id of the cloud resource to use for deploying the vm. */
  cloudId?: string;
  /** ARM Id of the template resource to use for deploying the vm. */
  templateId?: string;
  /** VMName is the name of VM on the SCVmm server. */
  vmName?: string;
  /** Unique ID of the virtual machine. */
  uuid?: string;
  /** Last restored checkpoint in the vm. */
  readonly lastRestoredVmCheckpoint?: Checkpoint;
  /** Checkpoints in the vm. */
  readonly checkpoints?: Checkpoint[];
  /** Type of checkpoint supported for the vm. */
  checkpointType?: string;
  /** Gets or sets the generation for the vm. */
  generation?: number;
  /** Gets or sets the bios guid for the vm. */
  biosGuid?: string;
}

export function infrastructureProfileSerializer(
  item: InfrastructureProfile,
): any {
  return {
    inventoryItemId: item["inventoryItemId"],
    vmmServerId: item["vmmServerId"],
    cloudId: item["cloudId"],
    templateId: item["templateId"],
    vmName: item["vmName"],
    uuid: item["uuid"],
    checkpointType: item["checkpointType"],
    generation: item["generation"],
    biosGuid: item["biosGuid"],
  };
}

export function infrastructureProfileDeserializer(
  item: any,
): InfrastructureProfile {
  return {
    inventoryItemId: item["inventoryItemId"],
    vmmServerId: item["vmmServerId"],
    cloudId: item["cloudId"],
    templateId: item["templateId"],
    vmName: item["vmName"],
    uuid: item["uuid"],
    lastRestoredVmCheckpoint: !item["lastRestoredVMCheckpoint"]
      ? item["lastRestoredVMCheckpoint"]
      : checkpointDeserializer(item["lastRestoredVMCheckpoint"]),
    checkpoints: !item["checkpoints"]
      ? item["checkpoints"]
      : checkpointArrayDeserializer(item["checkpoints"]),
    checkpointType: item["checkpointType"],
    generation: item["generation"],
    biosGuid: item["biosGuid"],
  };
}

/** Defines the resource properties. */
export interface Checkpoint {
  /** Gets ID of parent of the checkpoint. */
  parentCheckpointId?: string;
  /** Gets ID of the checkpoint. */
  checkpointId?: string;
  /** Gets name of the checkpoint. */
  name?: string;
  /** Gets description of the checkpoint. */
  description?: string;
}

export function checkpointDeserializer(item: any): Checkpoint {
  return {
    parentCheckpointId: item["parentCheckpointID"],
    checkpointId: item["checkpointID"],
    name: item["name"],
    description: item["description"],
  };
}

export function checkpointArrayDeserializer(result: Array<Checkpoint>): any[] {
  return result.map((item) => {
    return checkpointDeserializer(item);
  });
}

/** The extended location. */
export interface ExtendedLocation {
  /** The extended location type. */
  type?: string;
  /** The extended location name. */
  name?: string;
}

export function extendedLocationSerializer(item: ExtendedLocation): any {
  return { type: item["type"], name: item["name"] };
}

export function extendedLocationDeserializer(item: any): ExtendedLocation {
  return {
    type: item["type"],
    name: item["name"],
  };
}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

export function extensionResourceSerializer(item: ExtensionResource): any {
  return item;
}

export function extensionResourceDeserializer(item: any): ExtensionResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** The type used for update operations of the VirtualMachineInstance. */
export interface VirtualMachineInstanceUpdate {
  /** The update properties of the VirtualMachineInstance. */
  properties?: VirtualMachineInstanceUpdateProperties;
}

export function virtualMachineInstanceUpdateSerializer(
  item: VirtualMachineInstanceUpdate,
): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : virtualMachineInstanceUpdatePropertiesSerializer(item["properties"]),
  };
}

/** Virtual Machine Instance Properties Update model */
export interface VirtualMachineInstanceUpdateProperties {
  /** Availability Sets in vm. */
  availabilitySets?: AvailabilitySetListItem[];
  /** Hardware properties. */
  hardwareProfile?: HardwareProfileUpdate;
  /** Network properties. */
  networkProfile?: NetworkProfileUpdate;
  /** Storage properties. */
  storageProfile?: StorageProfileUpdate;
  /** Gets the infrastructure profile. */
  infrastructureProfile?: InfrastructureProfileUpdate;
}

export function virtualMachineInstanceUpdatePropertiesSerializer(
  item: VirtualMachineInstanceUpdateProperties,
): any {
  return {
    availabilitySets: !item["availabilitySets"]
      ? item["availabilitySets"]
      : availabilitySetListItemArraySerializer(item["availabilitySets"]),
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : hardwareProfileUpdateSerializer(item["hardwareProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : networkProfileUpdateSerializer(item["networkProfile"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : storageProfileUpdateSerializer(item["storageProfile"]),
    infrastructureProfile: !item["infrastructureProfile"]
      ? item["infrastructureProfile"]
      : infrastructureProfileUpdateSerializer(item["infrastructureProfile"]),
  };
}

/** Defines the resource update properties. */
export interface HardwareProfileUpdate {
  /** MemoryMB is the size of a virtual machine's memory, in MB. */
  memoryMB?: number;
  /** Gets or sets the number of vCPUs for the vm. */
  cpuCount?: number;
  /** Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs. */
  limitCpuForMigration?: LimitCpuForMigration;
  /** Gets or sets a value indicating whether to enable dynamic memory or not. */
  dynamicMemoryEnabled?: DynamicMemoryEnabled;
  /** Gets or sets the max dynamic memory for the vm. */
  dynamicMemoryMaxMB?: number;
  /** Gets or sets the min dynamic memory for the vm. */
  dynamicMemoryMinMB?: number;
}

export function hardwareProfileUpdateSerializer(
  item: HardwareProfileUpdate,
): any {
  return {
    memoryMB: item["memoryMB"],
    cpuCount: item["cpuCount"],
    limitCpuForMigration: item["limitCpuForMigration"],
    dynamicMemoryEnabled: item["dynamicMemoryEnabled"],
    dynamicMemoryMaxMB: item["dynamicMemoryMaxMB"],
    dynamicMemoryMinMB: item["dynamicMemoryMinMB"],
  };
}

/** Defines the resource update properties. */
export interface NetworkProfileUpdate {
  /** Gets or sets the list of network interfaces associated with the virtual machine. */
  networkInterfaces?: NetworkInterfaceUpdate[];
}

export function networkProfileUpdateSerializer(
  item: NetworkProfileUpdate,
): any {
  return {
    networkInterfaces: !item["networkInterfaces"]
      ? item["networkInterfaces"]
      : networkInterfaceUpdateArraySerializer(item["networkInterfaces"]),
  };
}

export function networkInterfaceUpdateArraySerializer(
  result: Array<NetworkInterfaceUpdate>,
): any[] {
  return result.map((item) => {
    return networkInterfaceUpdateSerializer(item);
  });
}

/** Network Interface Update model */
export interface NetworkInterfaceUpdate {
  /** Gets or sets the name of the network interface. */
  name?: string;
  /** Gets or sets the nic MAC address. */
  macAddress?: string;
  /** Gets or sets the ARM Id of the Microsoft.ScVmm/virtualNetwork resource to connect the nic. */
  virtualNetworkId?: string;
  /** Gets or sets the ipv4 address type. */
  ipv4AddressType?: AllocationMethod;
  /** Gets or sets the ipv6 address type. */
  ipv6AddressType?: AllocationMethod;
  /** Gets or sets the mac address type. */
  macAddressType?: AllocationMethod;
  /** Gets or sets the nic id. */
  nicId?: string;
}

export function networkInterfaceUpdateSerializer(
  item: NetworkInterfaceUpdate,
): any {
  return {
    name: item["name"],
    macAddress: item["macAddress"],
    virtualNetworkId: item["virtualNetworkId"],
    ipv4AddressType: item["ipv4AddressType"],
    ipv6AddressType: item["ipv6AddressType"],
    macAddressType: item["macAddressType"],
    nicId: item["nicId"],
  };
}

/** Defines the resource update properties. */
export interface StorageProfileUpdate {
  /** Gets or sets the list of virtual disks associated with the virtual machine. */
  disks?: VirtualDiskUpdate[];
}

export function storageProfileUpdateSerializer(
  item: StorageProfileUpdate,
): any {
  return {
    disks: !item["disks"]
      ? item["disks"]
      : virtualDiskUpdateArraySerializer(item["disks"]),
  };
}

export function virtualDiskUpdateArraySerializer(
  result: Array<VirtualDiskUpdate>,
): any[] {
  return result.map((item) => {
    return virtualDiskUpdateSerializer(item);
  });
}

/** Virtual Disk Update model */
export interface VirtualDiskUpdate {
  /** Gets or sets the name of the disk. */
  name?: string;
  /** Gets or sets the disk id. */
  diskId?: string;
  /** Gets or sets the disk total size. */
  diskSizeGB?: number;
  /** Gets or sets the disk bus. */
  bus?: number;
  /** Gets or sets the disk lun. */
  lun?: number;
  /** Gets or sets the disk bus type. */
  busType?: string;
  /** Gets or sets the disk vhd type. */
  vhdType?: string;
  /** The QoS policy for the disk. */
  storageQosPolicy?: StorageQosPolicyDetails;
}

export function virtualDiskUpdateSerializer(item: VirtualDiskUpdate): any {
  return {
    name: item["name"],
    diskId: item["diskId"],
    diskSizeGB: item["diskSizeGB"],
    bus: item["bus"],
    lun: item["lun"],
    busType: item["busType"],
    vhdType: item["vhdType"],
    storageQoSPolicy: !item["storageQosPolicy"]
      ? item["storageQosPolicy"]
      : storageQosPolicyDetailsSerializer(item["storageQosPolicy"]),
  };
}

/** Specifies the vmmServer infrastructure specific update settings for the virtual machine instance. */
export interface InfrastructureProfileUpdate {
  /** Type of checkpoint supported for the vm. */
  checkpointType?: string;
}

export function infrastructureProfileUpdateSerializer(
  item: InfrastructureProfileUpdate,
): any {
  return { checkpointType: item["checkpointType"] };
}

/** The response of a VirtualMachineInstance list operation. */
export interface _VirtualMachineInstanceListResult {
  /** The VirtualMachineInstance items on this page */
  value: VirtualMachineInstance[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _virtualMachineInstanceListResultDeserializer(
  item: any,
): _VirtualMachineInstanceListResult {
  return {
    value: virtualMachineInstanceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function virtualMachineInstanceArraySerializer(
  result: Array<VirtualMachineInstance>,
): any[] {
  return result.map((item) => {
    return virtualMachineInstanceSerializer(item);
  });
}

export function virtualMachineInstanceArrayDeserializer(
  result: Array<VirtualMachineInstance>,
): any[] {
  return result.map((item) => {
    return virtualMachineInstanceDeserializer(item);
  });
}

/** Defines the stop action properties. */
export interface StopVirtualMachineOptions {
  /** Gets or sets a value indicating whether to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Defaults to false. */
  skipShutdown?: SkipShutdown;
}

export function stopVirtualMachineOptionsSerializer(
  item: StopVirtualMachineOptions,
): any {
  return { skipShutdown: item["skipShutdown"] };
}

/** Skip shutdown. */
export enum KnownSkipShutdown {
  /** Enable skip shutdown. */
  True = "true",
  /** Disable skip shutdown. */
  False = "false",
}

/**
 * Skip shutdown. \
 * {@link KnownSkipShutdown} can be used interchangeably with SkipShutdown,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Enable skip shutdown. \
 * **false**: Disable skip shutdown.
 */
export type SkipShutdown = string;

/** Defines the create checkpoint action properties. */
export interface VirtualMachineCreateCheckpoint {
  /** Name of the checkpoint. */
  name?: string;
  /** Description of the checkpoint. */
  description?: string;
}

export function virtualMachineCreateCheckpointSerializer(
  item: VirtualMachineCreateCheckpoint,
): any {
  return { name: item["name"], description: item["description"] };
}

/** Defines the delete checkpoint action properties. */
export interface VirtualMachineDeleteCheckpoint {
  /** ID of the checkpoint to be deleted. */
  id?: string;
}

export function virtualMachineDeleteCheckpointSerializer(
  item: VirtualMachineDeleteCheckpoint,
): any {
  return { id: item["id"] };
}

/** Defines the restore checkpoint action properties. */
export interface VirtualMachineRestoreCheckpoint {
  /** ID of the checkpoint to be restored to. */
  id?: string;
}

export function virtualMachineRestoreCheckpointSerializer(
  item: VirtualMachineRestoreCheckpoint,
): any {
  return { id: item["id"] };
}

/** Defines the inventory item. */
export interface InventoryItem extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: InventoryItemPropertiesUnion;
  /** Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. */
  kind?: string;
}

export function inventoryItemSerializer(item: InventoryItem): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : inventoryItemPropertiesUnionSerializer(item["properties"]),
    kind: item["kind"],
  };
}

export function inventoryItemDeserializer(item: any): InventoryItem {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : inventoryItemPropertiesUnionDeserializer(item["properties"]),
    kind: item["kind"],
  };
}

/** Defines the resource properties. */
export interface InventoryItemProperties {
  /** They inventory type. */
  /** The discriminator possible values: Cloud, VirtualNetwork, VirtualMachineTemplate, VirtualMachine */
  inventoryType: InventoryType;
  /** Gets the tracked resource id corresponding to the inventory resource. */
  readonly managedResourceId?: string;
  /** Gets the UUID (which is assigned by Vmm) for the inventory item. */
  readonly uuid?: string;
  /** Gets the Managed Object name in Vmm for the inventory item. */
  readonly inventoryItemName?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function inventoryItemPropertiesSerializer(
  item: InventoryItemProperties,
): any {
  return { inventoryType: item["inventoryType"] };
}

export function inventoryItemPropertiesDeserializer(
  item: any,
): InventoryItemProperties {
  return {
    inventoryType: item["inventoryType"],
    managedResourceId: item["managedResourceId"],
    uuid: item["uuid"],
    inventoryItemName: item["inventoryItemName"],
    provisioningState: item["provisioningState"],
  };
}

/** Alias for InventoryItemPropertiesUnion */
export type InventoryItemPropertiesUnion =
  | CloudInventoryItem
  | VirtualNetworkInventoryItem
  | VirtualMachineTemplateInventoryItem
  | VirtualMachineInventoryItem
  | InventoryItemProperties;

export function inventoryItemPropertiesUnionSerializer(
  item: InventoryItemPropertiesUnion,
): any {
  switch (item.inventoryType) {
    case "Cloud":
      return cloudInventoryItemSerializer(item as CloudInventoryItem);

    case "VirtualNetwork":
      return virtualNetworkInventoryItemSerializer(
        item as VirtualNetworkInventoryItem,
      );

    case "VirtualMachineTemplate":
      return virtualMachineTemplateInventoryItemSerializer(
        item as VirtualMachineTemplateInventoryItem,
      );

    case "VirtualMachine":
      return virtualMachineInventoryItemSerializer(
        item as VirtualMachineInventoryItem,
      );

    default:
      return inventoryItemPropertiesSerializer(item);
  }
}

export function inventoryItemPropertiesUnionDeserializer(
  item: any,
): InventoryItemPropertiesUnion {
  switch (item.inventoryType) {
    case "Cloud":
      return cloudInventoryItemDeserializer(item as CloudInventoryItem);

    case "VirtualNetwork":
      return virtualNetworkInventoryItemDeserializer(
        item as VirtualNetworkInventoryItem,
      );

    case "VirtualMachineTemplate":
      return virtualMachineTemplateInventoryItemDeserializer(
        item as VirtualMachineTemplateInventoryItem,
      );

    case "VirtualMachine":
      return virtualMachineInventoryItemDeserializer(
        item as VirtualMachineInventoryItem,
      );

    default:
      return inventoryItemPropertiesDeserializer(item);
  }
}

/** The inventory type */
export enum KnownInventoryType {
  /** Cloud inventory type */
  Cloud = "Cloud",
  /** VirtualNetwork inventory type */
  VirtualNetwork = "VirtualNetwork",
  /** VirtualMachine inventory type */
  VirtualMachine = "VirtualMachine",
  /** VirtualMachineTemplate inventory type */
  VirtualMachineTemplate = "VirtualMachineTemplate",
}

/**
 * The inventory type \
 * {@link KnownInventoryType} can be used interchangeably with InventoryType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Cloud**: Cloud inventory type \
 * **VirtualNetwork**: VirtualNetwork inventory type \
 * **VirtualMachine**: VirtualMachine inventory type \
 * **VirtualMachineTemplate**: VirtualMachineTemplate inventory type
 */
export type InventoryType = string;

/** The Cloud inventory item. */
export interface CloudInventoryItem extends InventoryItemProperties {
  /** They inventory type. */
  inventoryType: "Cloud";
}

export function cloudInventoryItemSerializer(item: CloudInventoryItem): any {
  return { inventoryType: item["inventoryType"] };
}

export function cloudInventoryItemDeserializer(item: any): CloudInventoryItem {
  return {
    inventoryType: item["inventoryType"],
    managedResourceId: item["managedResourceId"],
    uuid: item["uuid"],
    inventoryItemName: item["inventoryItemName"],
    provisioningState: item["provisioningState"],
  };
}

/** The Virtual network inventory item. */
export interface VirtualNetworkInventoryItem extends InventoryItemProperties {
  /** They inventory type. */
  inventoryType: "VirtualNetwork";
}

export function virtualNetworkInventoryItemSerializer(
  item: VirtualNetworkInventoryItem,
): any {
  return { inventoryType: item["inventoryType"] };
}

export function virtualNetworkInventoryItemDeserializer(
  item: any,
): VirtualNetworkInventoryItem {
  return {
    inventoryType: item["inventoryType"],
    managedResourceId: item["managedResourceId"],
    uuid: item["uuid"],
    inventoryItemName: item["inventoryItemName"],
    provisioningState: item["provisioningState"],
  };
}

/** The Virtual machine template inventory item. */
export interface VirtualMachineTemplateInventoryItem
  extends InventoryItemProperties {
  /** Gets the desired number of vCPUs for the vm. */
  readonly cpuCount?: number;
  /** MemoryMB is the desired size of a virtual machine's memory, in MB. */
  readonly memoryMB?: number;
  /** Gets the type of the os. */
  readonly osType?: OsType;
  /** Gets os name. */
  readonly osName?: string;
  /** They inventory type. */
  inventoryType: "VirtualMachineTemplate";
}

export function virtualMachineTemplateInventoryItemSerializer(
  item: VirtualMachineTemplateInventoryItem,
): any {
  return { inventoryType: item["inventoryType"] };
}

export function virtualMachineTemplateInventoryItemDeserializer(
  item: any,
): VirtualMachineTemplateInventoryItem {
  return {
    inventoryType: item["inventoryType"],
    managedResourceId: item["managedResourceId"],
    uuid: item["uuid"],
    inventoryItemName: item["inventoryItemName"],
    provisioningState: item["provisioningState"],
    cpuCount: item["cpuCount"],
    memoryMB: item["memoryMB"],
    osType: item["osType"],
    osName: item["osName"],
  };
}

/** The Virtual machine inventory item. */
export interface VirtualMachineInventoryItem extends InventoryItemProperties {
  /** Gets the type of the os. */
  readonly osType?: OsType;
  /** Gets os name. */
  readonly osName?: string;
  /** Gets os version. */
  readonly osVersion?: string;
  /** Gets the power state of the virtual machine. */
  readonly powerState?: string;
  /** Gets or sets the nic ip addresses. */
  ipAddresses?: string[];
  /** Cloud inventory resource details where the VM is present. */
  cloud?: InventoryItemDetails;
  /** Gets the bios guid. */
  readonly biosGuid?: string;
  /** Gets the tracked resource id corresponding to the inventory resource. */
  readonly managedMachineResourceId?: string;
  /** They inventory type. */
  inventoryType: "VirtualMachine";
}

export function virtualMachineInventoryItemSerializer(
  item: VirtualMachineInventoryItem,
): any {
  return {
    inventoryType: item["inventoryType"],
    ipAddresses: !item["ipAddresses"]
      ? item["ipAddresses"]
      : item["ipAddresses"].map((p: any) => {
          return p;
        }),
    cloud: !item["cloud"]
      ? item["cloud"]
      : inventoryItemDetailsSerializer(item["cloud"]),
  };
}

export function virtualMachineInventoryItemDeserializer(
  item: any,
): VirtualMachineInventoryItem {
  return {
    inventoryType: item["inventoryType"],
    managedResourceId: item["managedResourceId"],
    uuid: item["uuid"],
    inventoryItemName: item["inventoryItemName"],
    provisioningState: item["provisioningState"],
    osType: item["osType"],
    osName: item["osName"],
    osVersion: item["osVersion"],
    powerState: item["powerState"],
    ipAddresses: !item["ipAddresses"]
      ? item["ipAddresses"]
      : item["ipAddresses"].map((p: any) => {
          return p;
        }),
    cloud: !item["cloud"]
      ? item["cloud"]
      : inventoryItemDetailsDeserializer(item["cloud"]),
    biosGuid: item["biosGuid"],
    managedMachineResourceId: item["managedMachineResourceId"],
  };
}

/** Defines the resource properties. */
export interface InventoryItemDetails {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Gets or sets the Managed Object name in Vmm for the resource. */
  inventoryItemName?: string;
}

export function inventoryItemDetailsSerializer(
  item: InventoryItemDetails,
): any {
  return {
    inventoryItemId: item["inventoryItemId"],
    inventoryItemName: item["inventoryItemName"],
  };
}

export function inventoryItemDetailsDeserializer(
  item: any,
): InventoryItemDetails {
  return {
    inventoryItemId: item["inventoryItemId"],
    inventoryItemName: item["inventoryItemName"],
  };
}

/** The response of a InventoryItem list operation. */
export interface _InventoryItemListResult {
  /** The InventoryItem items on this page */
  value: InventoryItem[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _inventoryItemListResultDeserializer(
  item: any,
): _InventoryItemListResult {
  return {
    value: inventoryItemArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function inventoryItemArraySerializer(
  result: Array<InventoryItem>,
): any[] {
  return result.map((item) => {
    return inventoryItemSerializer(item);
  });
}

export function inventoryItemArrayDeserializer(
  result: Array<InventoryItem>,
): any[] {
  return result.map((item) => {
    return inventoryItemDeserializer(item);
  });
}

/** The AvailabilitySets resource definition. */
export interface AvailabilitySet extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AvailabilitySetProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

export function availabilitySetSerializer(item: AvailabilitySet): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : availabilitySetPropertiesSerializer(item["properties"]),
    extendedLocation: extendedLocationSerializer(item["extendedLocation"]),
  };
}

export function availabilitySetDeserializer(item: any): AvailabilitySet {
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
      : availabilitySetPropertiesDeserializer(item["properties"]),
    extendedLocation: extendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Defines the resource properties. */
export interface AvailabilitySetProperties {
  /** Name of the availability set. */
  availabilitySetName?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function availabilitySetPropertiesSerializer(
  item: AvailabilitySetProperties,
): any {
  return {
    availabilitySetName: item["availabilitySetName"],
    vmmServerId: item["vmmServerId"],
  };
}

export function availabilitySetPropertiesDeserializer(
  item: any,
): AvailabilitySetProperties {
  return {
    availabilitySetName: item["availabilitySetName"],
    vmmServerId: item["vmmServerId"],
    provisioningState: item["provisioningState"],
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
    tags: item["tags"],
    location: item["location"],
  };
}

/** The type used for updating tags in AvailabilitySet resources. */
export interface AvailabilitySetTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function availabilitySetTagsUpdateSerializer(
  item: AvailabilitySetTagsUpdate,
): any {
  return { tags: item["tags"] };
}

/** The response of a AvailabilitySet list operation. */
export interface _AvailabilitySetListResult {
  /** The AvailabilitySet items on this page */
  value: AvailabilitySet[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _availabilitySetListResultDeserializer(
  item: any,
): _AvailabilitySetListResult {
  return {
    value: availabilitySetArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function availabilitySetArraySerializer(
  result: Array<AvailabilitySet>,
): any[] {
  return result.map((item) => {
    return availabilitySetSerializer(item);
  });
}

export function availabilitySetArrayDeserializer(
  result: Array<AvailabilitySet>,
): any[] {
  return result.map((item) => {
    return availabilitySetDeserializer(item);
  });
}

/** The VirtualMachineTemplates resource definition. */
export interface VirtualMachineTemplate extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineTemplateProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

export function virtualMachineTemplateSerializer(
  item: VirtualMachineTemplate,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : virtualMachineTemplatePropertiesSerializer(item["properties"]),
    extendedLocation: extendedLocationSerializer(item["extendedLocation"]),
  };
}

export function virtualMachineTemplateDeserializer(
  item: any,
): VirtualMachineTemplate {
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
      : virtualMachineTemplatePropertiesDeserializer(item["properties"]),
    extendedLocation: extendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Defines the resource properties. */
export interface VirtualMachineTemplateProperties {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Unique ID of the virtual machine template. */
  uuid?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Gets the type of the os. */
  readonly osType?: OsType;
  /** Gets os name. */
  readonly osName?: string;
  /** Gets computer name. */
  readonly computerName?: string;
  /** MemoryMB is the desired size of a virtual machine's memory, in MB. */
  readonly memoryMB?: number;
  /** Gets the desired number of vCPUs for the vm. */
  readonly cpuCount?: number;
  /** Gets a value indicating whether to enable processor compatibility mode for live migration of VMs. */
  readonly limitCpuForMigration?: LimitCpuForMigration;
  /** Gets a value indicating whether to enable dynamic memory or not. */
  readonly dynamicMemoryEnabled?: DynamicMemoryEnabled;
  /** Gets a value indicating whether the vm template is customizable or not. */
  readonly isCustomizable?: IsCustomizable;
  /** Gets the max dynamic memory for the vm. */
  readonly dynamicMemoryMaxMB?: number;
  /** Gets the min dynamic memory for the vm. */
  readonly dynamicMemoryMinMB?: number;
  /** Gets highly available property. */
  readonly isHighlyAvailable?: IsHighlyAvailable;
  /** Gets the generation for the vm. */
  readonly generation?: number;
  /** Gets the network interfaces of the template. */
  readonly networkInterfaces?: NetworkInterface[];
  /** Gets the disks of the template. */
  readonly disks?: VirtualDisk[];
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function virtualMachineTemplatePropertiesSerializer(
  item: VirtualMachineTemplateProperties,
): any {
  return {
    inventoryItemId: item["inventoryItemId"],
    uuid: item["uuid"],
    vmmServerId: item["vmmServerId"],
  };
}

export function virtualMachineTemplatePropertiesDeserializer(
  item: any,
): VirtualMachineTemplateProperties {
  return {
    inventoryItemId: item["inventoryItemId"],
    uuid: item["uuid"],
    vmmServerId: item["vmmServerId"],
    osType: item["osType"],
    osName: item["osName"],
    computerName: item["computerName"],
    memoryMB: item["memoryMB"],
    cpuCount: item["cpuCount"],
    limitCpuForMigration: item["limitCpuForMigration"],
    dynamicMemoryEnabled: item["dynamicMemoryEnabled"],
    isCustomizable: item["isCustomizable"],
    dynamicMemoryMaxMB: item["dynamicMemoryMaxMB"],
    dynamicMemoryMinMB: item["dynamicMemoryMinMB"],
    isHighlyAvailable: item["isHighlyAvailable"],
    generation: item["generation"],
    networkInterfaces: !item["networkInterfaces"]
      ? item["networkInterfaces"]
      : networkInterfaceArrayDeserializer(item["networkInterfaces"]),
    disks: !item["disks"]
      ? item["disks"]
      : virtualDiskArrayDeserializer(item["disks"]),
    provisioningState: item["provisioningState"],
  };
}

/** Customizable. */
export enum KnownIsCustomizable {
  /** Enable customizable. */
  True = "true",
  /** Disable customizable. */
  False = "false",
}

/**
 * Customizable. \
 * {@link KnownIsCustomizable} can be used interchangeably with IsCustomizable,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Enable customizable. \
 * **false**: Disable customizable.
 */
export type IsCustomizable = string;

/** The type used for updating tags in VirtualMachineTemplate resources. */
export interface VirtualMachineTemplateTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function virtualMachineTemplateTagsUpdateSerializer(
  item: VirtualMachineTemplateTagsUpdate,
): any {
  return { tags: item["tags"] };
}

/** The response of a VirtualMachineTemplate list operation. */
export interface _VirtualMachineTemplateListResult {
  /** The VirtualMachineTemplate items on this page */
  value: VirtualMachineTemplate[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _virtualMachineTemplateListResultDeserializer(
  item: any,
): _VirtualMachineTemplateListResult {
  return {
    value: virtualMachineTemplateArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function virtualMachineTemplateArraySerializer(
  result: Array<VirtualMachineTemplate>,
): any[] {
  return result.map((item) => {
    return virtualMachineTemplateSerializer(item);
  });
}

export function virtualMachineTemplateArrayDeserializer(
  result: Array<VirtualMachineTemplate>,
): any[] {
  return result.map((item) => {
    return virtualMachineTemplateDeserializer(item);
  });
}

/** The VirtualNetworks resource definition. */
export interface VirtualNetwork extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualNetworkProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

export function virtualNetworkSerializer(item: VirtualNetwork): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : virtualNetworkPropertiesSerializer(item["properties"]),
    extendedLocation: extendedLocationSerializer(item["extendedLocation"]),
  };
}

export function virtualNetworkDeserializer(item: any): VirtualNetwork {
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
      : virtualNetworkPropertiesDeserializer(item["properties"]),
    extendedLocation: extendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Defines the resource properties. */
export interface VirtualNetworkProperties {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Unique ID of the virtual network. */
  uuid?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Name of the virtual network in vmmServer. */
  readonly networkName?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function virtualNetworkPropertiesSerializer(
  item: VirtualNetworkProperties,
): any {
  return {
    inventoryItemId: item["inventoryItemId"],
    uuid: item["uuid"],
    vmmServerId: item["vmmServerId"],
  };
}

export function virtualNetworkPropertiesDeserializer(
  item: any,
): VirtualNetworkProperties {
  return {
    inventoryItemId: item["inventoryItemId"],
    uuid: item["uuid"],
    vmmServerId: item["vmmServerId"],
    networkName: item["networkName"],
    provisioningState: item["provisioningState"],
  };
}

/** The type used for updating tags in VirtualNetwork resources. */
export interface VirtualNetworkTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function virtualNetworkTagsUpdateSerializer(
  item: VirtualNetworkTagsUpdate,
): any {
  return { tags: item["tags"] };
}

/** The response of a VirtualNetwork list operation. */
export interface _VirtualNetworkListResult {
  /** The VirtualNetwork items on this page */
  value: VirtualNetwork[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _virtualNetworkListResultDeserializer(
  item: any,
): _VirtualNetworkListResult {
  return {
    value: virtualNetworkArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function virtualNetworkArraySerializer(
  result: Array<VirtualNetwork>,
): any[] {
  return result.map((item) => {
    return virtualNetworkSerializer(item);
  });
}

export function virtualNetworkArrayDeserializer(
  result: Array<VirtualNetwork>,
): any[] {
  return result.map((item) => {
    return virtualNetworkDeserializer(item);
  });
}

/** The Clouds resource definition. */
export interface Cloud extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CloudProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

export function cloudSerializer(item: Cloud): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : cloudPropertiesSerializer(item["properties"]),
    extendedLocation: extendedLocationSerializer(item["extendedLocation"]),
  };
}

export function cloudDeserializer(item: any): Cloud {
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
      : cloudPropertiesDeserializer(item["properties"]),
    extendedLocation: extendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Defines the resource properties. */
export interface CloudProperties {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Unique ID of the cloud. */
  uuid?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Name of the cloud in VmmServer. */
  readonly cloudName?: string;
  /** Capacity of the cloud. */
  readonly cloudCapacity?: CloudCapacity;
  /** List of QoS policies available for the cloud. */
  readonly storageQosPolicies?: StorageQosPolicy[];
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function cloudPropertiesSerializer(item: CloudProperties): any {
  return {
    inventoryItemId: item["inventoryItemId"],
    uuid: item["uuid"],
    vmmServerId: item["vmmServerId"],
  };
}

export function cloudPropertiesDeserializer(item: any): CloudProperties {
  return {
    inventoryItemId: item["inventoryItemId"],
    uuid: item["uuid"],
    vmmServerId: item["vmmServerId"],
    cloudName: item["cloudName"],
    cloudCapacity: !item["cloudCapacity"]
      ? item["cloudCapacity"]
      : cloudCapacityDeserializer(item["cloudCapacity"]),
    storageQosPolicies: !item["storageQoSPolicies"]
      ? item["storageQoSPolicies"]
      : storageQosPolicyArrayDeserializer(item["storageQoSPolicies"]),
    provisioningState: item["provisioningState"],
  };
}

/** Cloud Capacity model */
export interface CloudCapacity {
  /** CPUCount specifies the maximum number of CPUs that can be allocated in the cloud. */
  readonly cpuCount?: number;
  /** MemoryMB specifies a memory usage limit in megabytes. */
  readonly memoryMB?: number;
  /** VMCount gives the max number of VMs that can be deployed in the cloud. */
  readonly vmCount?: number;
}

export function cloudCapacityDeserializer(item: any): CloudCapacity {
  return {
    cpuCount: item["cpuCount"],
    memoryMB: item["memoryMB"],
    vmCount: item["vmCount"],
  };
}

export function storageQosPolicyArrayDeserializer(
  result: Array<StorageQosPolicy>,
): any[] {
  return result.map((item) => {
    return storageQosPolicyDeserializer(item);
  });
}

/** The StorageQoSPolicy definition. */
export interface StorageQosPolicy {
  /** The name of the policy. */
  name?: string;
  /** The ID of the QoS policy. */
  id?: string;
  /** The maximum IO operations per second. */
  iopsMaximum?: number;
  /** The minimum IO operations per second. */
  iopsMinimum?: number;
  /** The Bandwidth Limit for internet traffic. */
  bandwidthLimit?: number;
  /** The underlying policy. */
  policyId?: string;
}

export function storageQosPolicyDeserializer(item: any): StorageQosPolicy {
  return {
    name: item["name"],
    id: item["id"],
    iopsMaximum: item["iopsMaximum"],
    iopsMinimum: item["iopsMinimum"],
    bandwidthLimit: item["bandwidthLimit"],
    policyId: item["policyId"],
  };
}

/** The type used for updating tags in Cloud resources. */
export interface CloudTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function cloudTagsUpdateSerializer(item: CloudTagsUpdate): any {
  return { tags: item["tags"] };
}

/** The response of a Cloud list operation. */
export interface _CloudListResult {
  /** The Cloud items on this page */
  value: Cloud[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _cloudListResultDeserializer(item: any): _CloudListResult {
  return {
    value: cloudArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function cloudArraySerializer(result: Array<Cloud>): any[] {
  return result.map((item) => {
    return cloudSerializer(item);
  });
}

export function cloudArrayDeserializer(result: Array<Cloud>): any[] {
  return result.map((item) => {
    return cloudDeserializer(item);
  });
}

/** The VmmServers resource definition. */
export interface VmmServer extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: VmmServerProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

export function vmmServerSerializer(item: VmmServer): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : vmmServerPropertiesSerializer(item["properties"]),
    extendedLocation: extendedLocationSerializer(item["extendedLocation"]),
  };
}

export function vmmServerDeserializer(item: any): VmmServer {
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
      : vmmServerPropertiesDeserializer(item["properties"]),
    extendedLocation: extendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Defines the resource properties. */
export interface VmmServerProperties {
  /** Credentials to connect to VmmServer. */
  credentials?: VmmCredential;
  /** Fqdn is the hostname/ip of the vmmServer. */
  fqdn: string;
  /** Port is the port on which the vmmServer is listening. */
  port?: number;
  /** Gets the connection status to the vmmServer. */
  readonly connectionStatus?: string;
  /** Gets any error message if connection to vmmServer is having any issue. */
  readonly errorMessage?: string;
  /** Unique ID of vmmServer. */
  readonly uuid?: string;
  /** Version is the version of the vmmSever. */
  readonly version?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function vmmServerPropertiesSerializer(item: VmmServerProperties): any {
  return {
    credentials: !item["credentials"]
      ? item["credentials"]
      : vmmCredentialSerializer(item["credentials"]),
    fqdn: item["fqdn"],
    port: item["port"],
  };
}

export function vmmServerPropertiesDeserializer(
  item: any,
): VmmServerProperties {
  return {
    credentials: !item["credentials"]
      ? item["credentials"]
      : vmmCredentialDeserializer(item["credentials"]),
    fqdn: item["fqdn"],
    port: item["port"],
    connectionStatus: item["connectionStatus"],
    errorMessage: item["errorMessage"],
    uuid: item["uuid"],
    version: item["version"],
    provisioningState: item["provisioningState"],
  };
}

/** Credentials to connect to VmmServer. */
export interface VmmCredential {
  /** Username to use to connect to VmmServer. */
  username?: string;
  /** Password to use to connect to VmmServer. */
  password?: string;
}

export function vmmCredentialSerializer(item: VmmCredential): any {
  return { username: item["username"], password: item["password"] };
}

export function vmmCredentialDeserializer(item: any): VmmCredential {
  return {
    username: item["username"],
    password: item["password"],
  };
}

/** The type used for updating tags in VmmServer resources. */
export interface VmmServerTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

export function vmmServerTagsUpdateSerializer(item: VmmServerTagsUpdate): any {
  return { tags: item["tags"] };
}

/** The response of a VmmServer list operation. */
export interface _VmmServerListResult {
  /** The VmmServer items on this page */
  value: VmmServer[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _vmmServerListResultDeserializer(
  item: any,
): _VmmServerListResult {
  return {
    value: vmmServerArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function vmmServerArraySerializer(result: Array<VmmServer>): any[] {
  return result.map((item) => {
    return vmmServerSerializer(item);
  });
}

export function vmmServerArrayDeserializer(result: Array<VmmServer>): any[] {
  return result.map((item) => {
    return vmmServerDeserializer(item);
  });
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  readonly nextLink?: string;
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

/** Force Delete */
export enum KnownForceDelete {
  /** Enable force delete. */
  True = "true",
  /** Disable force delete. */
  False = "false",
}

/**
 * Force Delete \
 * {@link KnownForceDelete} can be used interchangeably with ForceDelete,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Enable force delete. \
 * **false**: Disable force delete.
 */
export type ForceDelete = string;

/** Delete From Host */
export enum KnownDeleteFromHost {
  /** Enable delete from host. */
  True = "true",
  /** Disable delete from host. */
  False = "false",
}

/**
 * Delete From Host \
 * {@link KnownDeleteFromHost} can be used interchangeably with DeleteFromHost,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Enable delete from host. \
 * **false**: Disable delete from host.
 */
export type DeleteFromHost = string;

/** The available API versions. */
export enum KnownVersions {
  /** Service version 2023-10-07. */
  V20231007 = "2023-10-07",
  /** Service version 2024-06-01. */
  V20240601 = "2024-06-01",
}
