// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

/** A private cloud resource */
export interface PrivateCloud extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PrivateCloudProperties;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: Sku;
  /** The managed service identities assigned to this resource. */
  identity?: SystemAssignedServiceIdentity;
}

/** The properties of a private cloud resource */
export interface PrivateCloudProperties {
  /** The default cluster used for management */
  managementCluster: ManagementCluster;
  /**
   * Connectivity to internet is enabled or disabled
   *
   * Possible values: "Enabled", "Disabled"
   */
  internet?: InternetEnum;
  /** vCenter Single Sign On Identity Sources */
  identitySources?: Array<IdentitySource>;
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
  /** An ExpressRoute Circuit */
  circuit?: Circuit;
  /**
   * The block of addresses should be unique across VNet in your subscription as
   * well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where
   * A,B,C,D are between 0 and 255, and X is between 0 and 22
   */
  networkBlock: string;
  /** Optionally, set the vCenter admin password when the private cloud is created */
  vcenterPassword?: string;
  /** Optionally, set the NSX-T Manager password when the private cloud is created */
  nsxtPassword?: string;
  /**
   * A secondary expressRoute circuit from a separate AZ. Only present in a
   * stretched private cloud
   */
  secondaryCircuit?: Circuit;
  /** Azure resource ID of the virtual network */
  virtualNetworkId?: string;
  /**
   * The type of DNS zone to use.
   *
   * Possible values: "Public", "Private"
   */
  dnsZoneType?: DnsZoneType;
}

/** The properties of a management cluster */
export interface ManagementCluster {
  /** The cluster size */
  clusterSize?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

/** vCenter Single Sign On Identity Source */
export interface IdentitySource {
  /** The name of the identity source */
  name?: string;
  /** The domain's NetBIOS name */
  alias?: string;
  /** The domain's dns name */
  domain?: string;
  /** The base distinguished name for users */
  baseUserDN?: string;
  /** The base distinguished name for groups */
  baseGroupDN?: string;
  /** Primary server URL */
  primaryServer?: string;
  /** Secondary server URL */
  secondaryServer?: string;
  /**
   * Protect LDAP communication using SSL certificate (LDAPS)
   *
   * Possible values: "Enabled", "Disabled"
   */
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

/** The properties describing private cloud availability zone distribution */
export interface AvailabilityProperties {
  /**
   * The availability strategy for the private cloud
   *
   * Possible values: "SingleZone", "DualZone"
   */
  strategy?: AvailabilityStrategy;
  /** The primary availability zone for the private cloud */
  zone?: number;
  /** The secondary availability zone for the private cloud */
  secondaryZone?: number;
}

/** The properties of customer managed encryption key */
export interface Encryption {
  /**
   * Status of customer managed encryption key
   *
   * Possible values: "Enabled", "Disabled"
   */
  status?: EncryptionState;
  /** The key vault where the encryption key is stored */
  keyVaultProperties?: EncryptionKeyVaultProperties;
}

/** An Encryption Key */
export interface EncryptionKeyVaultProperties {
  /** The name of the key. */
  keyName?: string;
  /** The version of the key. */
  keyVersion?: string;
  /** The URL of the vault. */
  keyVaultUrl?: string;
}

/** An ExpressRoute Circuit */
export interface Circuit {}

/** Endpoint addresses */
export interface Endpoints {}

/** Managed service identity (either system assigned, or none) */
export interface SystemAssignedServiceIdentity {
  /**
   * The type of managed identity assigned to this resource.
   *
   * Possible values: "None", "SystemAssigned"
   */
  type: SystemAssignedServiceIdentityType;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /**
   * The type of identity that created the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date | string;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date | string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** A location resource */
export interface Location extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: LocationProperties;
}

/** The properties of a location resource */
export interface LocationProperties {}

/** A cluster resource */
export interface Cluster extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ClusterProperties;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: Sku;
}

/** The properties of a cluster */
export interface ClusterProperties {
  /** The cluster size */
  clusterSize?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

/** A datastore resource */
export interface Datastore extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DatastoreProperties;
}

/** The properties of a datastore */
export interface DatastoreProperties {
  /** An Azure NetApp Files volume */
  netAppVolume?: NetAppVolume;
  /** An iSCSI volume */
  diskPoolVolume?: DiskPoolVolume;
  /** An Elastic SAN volume */
  elasticSanVolume?: ElasticSanVolume;
}

/** An Azure NetApp Files volume from Microsoft.NetApp provider */
export interface NetAppVolume {
  /** Azure resource ID of the NetApp volume */
  id: string;
}

/** An iSCSI volume from Microsoft.StoragePool provider */
export interface DiskPoolVolume {
  /** Azure resource ID of the iSCSI target */
  targetId: string;
  /** Name of the LUN to be used for datastore */
  lunName: string;
  /**
   * Mode that describes whether the LUN has to be mounted as a datastore or
   * attached as a LUN
   *
   * Possible values: "MOUNT", "ATTACH"
   */
  mountOption?: MountOptionEnum;
}

/** An Elastic SAN volume from Microsoft.ElasticSan provider */
export interface ElasticSanVolume {
  /** Azure resource ID of the Elastic SAN Volume */
  targetId: string;
}

/** An HCX Enterprise Site resource */
export interface HcxEnterpriseSite extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: HcxEnterpriseSiteProperties;
}

/** The properties of an HCX Enterprise Site */
export interface HcxEnterpriseSiteProperties {}

/** ExpressRoute Circuit Authorization */
export interface ExpressRouteAuthorization extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ExpressRouteAuthorizationProperties;
}

/** The properties of an ExpressRoute Circuit Authorization resource */
export interface ExpressRouteAuthorizationProperties {
  /** The ID of the ExpressRoute Circuit */
  expressRouteId?: string;
}

/** A global reach connection resource */
export interface GlobalReachConnection extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: GlobalReachConnectionProperties;
}

/** The properties of a global reach connection */
export interface GlobalReachConnectionProperties {
  /**
   * Authorization key from the peer express route used for the global reach
   * connection
   */
  authorizationKey?: string;
  /**
   * Identifier of the ExpressRoute Circuit to peer with in the global reach
   * connection
   */
  peerExpressRouteCircuit?: string;
  /**
   * The ID of the Private Cloud's ExpressRoute Circuit that is participating in the
   * global reach connection
   */
  expressRouteId?: string;
}

/** Workload Network */
export interface WorkloadNetwork extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkProperties;
}

/** The properties of a workload network */
export interface WorkloadNetworkProperties {}

/** NSX Segment */
export interface WorkloadNetworkSegment extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkSegmentProperties;
}

/** NSX Segment Properties */
export interface WorkloadNetworkSegmentProperties {
  /** Display name of the segment. */
  displayName?: string;
  /** Gateway which to connect segment to. */
  connectedGateway?: string;
  /** Subnet which to connect segment to. */
  subnet?: WorkloadNetworkSegmentSubnet;
  /** NSX revision number. */
  revision?: number;
}

/** Subnet configuration for segment */
export interface WorkloadNetworkSegmentSubnet {
  /** DHCP Range assigned for subnet. */
  dhcpRanges?: string[];
  /** Gateway address. */
  gatewayAddress?: string;
}

/** Ports and any VIF attached to segment. */
export interface WorkloadNetworkSegmentPortVif {
  /** Name of port or VIF attached to segment. */
  portName?: string;
}

/** NSX DHCP */
export interface WorkloadNetworkDhcp extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDhcpEntity;
}

/**
 * Base class for WorkloadNetworkDhcpServer and WorkloadNetworkDhcpRelay to
 * inherit from
 */
export interface WorkloadNetworkDhcpEntityParent {
  /** Display name of the DHCP entity. */
  displayName?: string;
  /** NSX revision number. */
  revision?: number;
  dhcpType: DhcpTypeEnum;
}

/** NSX DHCP Server */
export interface WorkloadNetworkDhcpServer
  extends WorkloadNetworkDhcpEntityParent {
  /** DHCP Server Address. */
  serverAddress?: string;
  /** DHCP Server Lease Time. */
  leaseTime?: number;
  /** Type of DHCP: SERVER or RELAY. */
  dhcpType: "SERVER";
}

/** NSX DHCP Relay */
export interface WorkloadNetworkDhcpRelay
  extends WorkloadNetworkDhcpEntityParent {
  /** DHCP Relay Addresses. Max 3. */
  serverAddresses?: string[];
  /** Type of DHCP: SERVER or RELAY. */
  dhcpType: "RELAY";
}

/** NSX Gateway. */
export interface WorkloadNetworkGateway extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkGatewayProperties;
}

/** Properties of a NSX Gateway. */
export interface WorkloadNetworkGatewayProperties {
  /** Display name of the DHCP entity. */
  displayName?: string;
}

/** NSX Port Mirroring */
export interface WorkloadNetworkPortMirroring extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPortMirroringProperties;
}

/** NSX Port Mirroring Properties */
export interface WorkloadNetworkPortMirroringProperties {
  /** Display name of the port mirroring profile. */
  displayName?: string;
  /**
   * Direction of port mirroring profile.
   *
   * Possible values: "INGRESS", "EGRESS", "BIDIRECTIONAL"
   */
  direction?: PortMirroringDirectionEnum;
  /** Source VM Group. */
  source?: string;
  /** Destination VM Group. */
  destination?: string;
  /** NSX revision number. */
  revision?: number;
}

/** NSX VM Group */
export interface WorkloadNetworkVMGroup extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVMGroupProperties;
}

/** NSX VM Group Properties */
export interface WorkloadNetworkVMGroupProperties {
  /** Display name of the VM group. */
  displayName?: string;
  /** Virtual machine members of this group. */
  members?: string[];
  /** NSX revision number. */
  revision?: number;
}

/** NSX Virtual Machine */
export interface WorkloadNetworkVirtualMachine extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVirtualMachineProperties;
}

/** NSX Virtual Machine Properties */
export interface WorkloadNetworkVirtualMachineProperties {
  /** Display name of the VM. */
  displayName?: string;
}

/** NSX DNS Service */
export interface WorkloadNetworkDnsService extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsServiceProperties;
}

/** NSX DNS Service Properties */
export interface WorkloadNetworkDnsServiceProperties {
  /** Display name of the DNS Service. */
  displayName?: string;
  /** DNS service IP of the DNS Service. */
  dnsServiceIp?: string;
  /** Default DNS zone of the DNS Service. */
  defaultDnsZone?: string;
  /** FQDN zones of the DNS Service. */
  fqdnZones?: string[];
  /**
   * DNS Service log level.
   *
   * Possible values: "DEBUG", "INFO", "WARNING", "ERROR", "FATAL"
   */
  logLevel?: DnsServiceLogLevelEnum;
  /** NSX revision number. */
  revision?: number;
}

/** NSX DNS Zone */
export interface WorkloadNetworkDnsZone extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsZoneProperties;
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
  /** NSX revision number. */
  revision?: number;
}

/** NSX Public IP Block */
export interface WorkloadNetworkPublicIP extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPublicIPProperties;
}

/** NSX Public IP Block Properties */
export interface WorkloadNetworkPublicIPProperties {
  /** Display name of the Public IP Block. */
  displayName?: string;
  /** Number of Public IPs requested. */
  numberOfPublicIPs?: number;
}

/** A cloud link resource */
export interface CloudLink extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: CloudLinkProperties;
}

/** The properties of a cloud link. */
export interface CloudLinkProperties {
  /** Identifier of the other private cloud participating in the link. */
  linkedCloud?: string;
}

/** An addon resource */
export interface Addon extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AddonProperties;
}

/** The properties of an addon */
export interface AddonPropertiesParent {
  addonType: AddonType;
}

/** The properties of a Site Recovery Manager (SRM) addon */
export interface AddonSrmProperties extends AddonPropertiesParent {
  /** The Site Recovery Manager (SRM) license */
  licenseKey?: string;
  /** The type of private cloud addon */
  addonType: "SRM";
}

/** The properties of a vSphere Replication (VR) addon */
export interface AddonVrProperties extends AddonPropertiesParent {
  /** The vSphere Replication Server (VRS) count */
  vrsCount: number;
  /** The type of private cloud addon */
  addonType: "VR";
}

/** The properties of an HCX addon */
export interface AddonHcxProperties extends AddonPropertiesParent {
  /** The HCX offer, example VMware MaaS Cloud Provider (Enterprise) */
  offer: string;
  /** The type of private cloud addon */
  addonType: "HCX";
}

/** The properties of an Arc addon */
export interface AddonArcProperties extends AddonPropertiesParent {
  /** The VMware vCenter resource ID */
  vCenter?: string;
  /** The type of private cloud addon */
  addonType: "Arc";
}

/** Virtual Machine */
export interface VirtualMachine extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineProperties;
}

/** Virtual Machine Properties */
export interface VirtualMachineProperties {}

/** A vSphere Distributed Resource Scheduler (DRS) placement policy */
export interface PlacementPolicy extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: PlacementPolicyProperties;
}

/** Abstract placement policy properties */
export interface PlacementPolicyPropertiesParent {
  /**
   * Whether the placement policy is enabled or disabled
   *
   * Possible values: "Enabled", "Disabled"
   */
  state?: PlacementPolicyState;
  /** Display name of the placement policy */
  displayName?: string;
  type: PlacementPolicyType;
}

/** VM-VM placement policy properties */
export interface VmVmPlacementPolicyProperties
  extends PlacementPolicyPropertiesParent {
  /** Virtual machine members list */
  vmMembers: string[];
  /**
   * placement policy affinity type
   *
   * Possible values: "Affinity", "AntiAffinity"
   */
  affinityType: AffinityType;
  /** placement policy type */
  type: "VmVm";
}

/** VM-Host placement policy properties */
export interface VmHostPlacementPolicyProperties
  extends PlacementPolicyPropertiesParent {
  /** Virtual machine members list */
  vmMembers: string[];
  /** Host members list */
  hostMembers: string[];
  /**
   * placement policy affinity type
   *
   * Possible values: "Affinity", "AntiAffinity"
   */
  affinityType: AffinityType;
  /**
   * vm-host placement policy affinity strength (should/must)
   *
   * Possible values: "Should", "Must"
   */
  affinityStrength?: AffinityStrength;
  /**
   * placement policy azure hybrid benefit opt-in type
   *
   * Possible values: "SqlHost", "None"
   */
  azureHybridBenefitType?: AzureHybridBenefitType;
  /** placement policy type */
  type: "VmHost";
}

/** Script Package resources available for execution */
export interface ScriptPackage extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptPackageProperties;
}

/** Properties of a Script Package subresource */
export interface ScriptPackageProperties {}

/** A cmdlet available for script execution */
export interface ScriptCmdlet extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptCmdletProperties;
}

/** Properties of a pre-canned script */
export interface ScriptCmdletProperties {}

/** An parameter that the script will accept */
export interface ScriptParameter {
  /** The parameter name that the script will expect a parameter value for */
  name?: string;
}

/** An instance of a script executed by a user - custom or AVS */
export interface ScriptExecution extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptExecutionProperties;
}

/** Properties of a user-invoked script */
export interface ScriptExecutionProperties {
  /** A reference to the script cmdlet resource if user is running a AVS script */
  scriptCmdletId?: string;
  /** Parameters the script will accept */
  parameters?: Array<ScriptExecutionParameter>;
  /**
   * Parameters that will be hidden/not visible to ARM, such as passwords and
   * credentials
   */
  hiddenParameters?: Array<ScriptExecutionParameter>;
  /**
   * Error message if the script was able to run, but if the script itself had
   * errors or powershell threw an exception
   */
  failureReason?: string;
  /** Time limit for execution */
  timeout: string;
  /** Time to live for the resource. If not provided, will be available for 60 days */
  retention?: string;
  /** Standard output stream from the powershell execution */
  output?: string[];
  /** User-defined dictionary. */
  namedOutputs?: Record<string, Record<string, unknown>>;
}

/** The arguments passed in to the execution */
export interface ScriptExecutionParameterParent {
  /** The parameter name */
  name: string;
  type: ScriptExecutionParameterType;
}

/** a plain text value execution parameter */
export interface ScriptSecureStringExecutionParameter
  extends ScriptExecutionParameterParent {
  /** A secure value for the passed parameter, not to be stored in logs */
  secureValue?: string;
  /** The type of execution parameter */
  type: "SecureValue";
}

/** a plain text value execution parameter */
export interface ScriptStringExecutionParameter
  extends ScriptExecutionParameterParent {
  /** The value for the passed parameter */
  value?: string;
  /** The type of execution parameter */
  type: "Value";
}

/** a powershell credential object */
export interface PSCredentialExecutionParameter
  extends ScriptExecutionParameterParent {
  /** username for login */
  username?: string;
  /** password for login */
  password?: string;
  /** The type of execution parameter */
  type: "Credential";
}

/** An iSCSI path resource */
export interface IscsiPath extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: IscsiPathProperties;
}

/** The properties of an iSCSI path resource */
export interface IscsiPathProperties {
  /** CIDR Block for iSCSI path. */
  networkBlock: string;
}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

/** A private link resource. */
export interface PrivateLinkResource extends Resource {
  /** Resource properties. */
  properties?: PrivateLinkResourceProperties;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends Resource {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   *
   * Possible values: "Pending", "Approved", "Rejected"
   */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
export interface ResourceModelWithAllowedPropertySet extends TrackedResource {
  /**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource.
   * If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
   */
  managedBy?: string;
  /**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.
   * If supported, the resource provider must validate and persist this value.
   */
  kind?: string;
  /**
   * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.
   * Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19),
   * If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
   */
  eTag?: string;
  identity?: Identity;
  sku?: Sku;
  plan?: Plan;
}

/** Identity for the resource. */
export interface Identity {
  /** The identity type. */
  type?: ResourceIdentityType;
}

/** Plan for the resource. */
export interface Plan {
  /** A user defined name of the 3rd Party Artifact that is being procured. */
  name: string;
  /** The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic */
  publisher: string;
  /** The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. */
  product: string;
  /** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
  promotionCode?: string;
  /** The version of the desired product/artifact. */
  version?: string;
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

/** The properties of a private cloud resource that may be updated */
export interface PrivateCloudUpdateProperties {
  /** The default cluster used for management */
  managementCluster?: ManagementCluster;
  /**
   * Connectivity to internet is enabled or disabled
   *
   * Possible values: "Enabled", "Disabled"
   */
  internet?: InternetEnum;
  /** vCenter Single Sign On Identity Sources */
  identitySources?: Array<IdentitySource>;
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
  /**
   * The type of DNS zone to use.
   *
   * Possible values: "Public", "Private"
   */
  dnsZoneType?: DnsZoneType;
}

/** An update of a cluster resource */
export interface ClusterUpdate {
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku?: Sku;
  /** The properties of a cluster resource that may be updated */
  properties?: ClusterUpdateProperties;
}

/** The properties of a cluster that may be updated */
export interface ClusterUpdateProperties {
  /** The cluster size */
  clusterSize?: number;
  /** The hosts */
  hosts?: string[];
}

/** Set VM DRS-driven movement to restricted (enabled) or not (disabled) */
export interface VirtualMachineRestrictMovement {
  /**
   * Whether VM DRS-driven movement is restricted (enabled) or not (disabled)
   *
   * Possible values: "Enabled", "Disabled"
   */
  restrictMovement?: VirtualMachineRestrictMovementState;
}

/** An update of a DRS placement policy resource */
export interface PlacementPolicyUpdate {
  /** The properties of a placement policy resource that may be updated */
  properties?: PlacementPolicyUpdateProperties;
}

/** The properties of a placement policy resource that may be updated */
export interface PlacementPolicyUpdateProperties {
  /**
   * Whether the placement policy is enabled or disabled
   *
   * Possible values: "Enabled", "Disabled"
   */
  state?: PlacementPolicyState;
  /** Virtual machine members list */
  vmMembers?: string[];
  /** Host members list */
  hostMembers?: string[];
  /**
   * vm-host placement policy affinity strength (should/must)
   *
   * Possible values: "Should", "Must"
   */
  affinityStrength?: AffinityStrength;
  /**
   * placement policy azure hybrid benefit opt-in type
   *
   * Possible values: "SqlHost", "None"
   */
  azureHybridBenefitType?: AzureHybridBenefitType;
}

/**
 * Base class for WorkloadNetworkDhcpServer and WorkloadNetworkDhcpRelay to
 * inherit from
 */
export type WorkloadNetworkDhcpEntity =
  | WorkloadNetworkDhcpEntityParent
  | WorkloadNetworkDhcpServer
  | WorkloadNetworkDhcpRelay;
/** The properties of an addon */
export type AddonProperties =
  | AddonPropertiesParent
  | AddonSrmProperties
  | AddonVrProperties
  | AddonHcxProperties
  | AddonArcProperties;
/** Abstract placement policy properties */
export type PlacementPolicyProperties =
  | PlacementPolicyPropertiesParent
  | VmVmPlacementPolicyProperties
  | VmHostPlacementPolicyProperties;
/** The arguments passed in to the execution */
export type ScriptExecutionParameter =
  | ScriptExecutionParameterParent
  | ScriptSecureStringExecutionParameter
  | ScriptStringExecutionParameter
  | PSCredentialExecutionParameter;
/** Alias for SkuTier */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";
/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState = string;
/** Alias for ClusterProvisioningState */
export type ClusterProvisioningState = string;
/** Alias for InternetEnum */
export type InternetEnum = string;
/** Alias for SslEnum */
export type SslEnum = string;
/** Alias for AvailabilityStrategy */
export type AvailabilityStrategy = string;
/** Alias for EncryptionState */
export type EncryptionState = string;
/** Alias for EncryptionKeyStatus */
export type EncryptionKeyStatus = string;
/** Alias for EncryptionVersionType */
export type EncryptionVersionType = string;
/** Alias for PrivateCloudProvisioningState */
export type PrivateCloudProvisioningState = string;
/** Alias for NsxPublicIpQuotaRaisedEnum */
export type NsxPublicIpQuotaRaisedEnum = string;
/** Alias for DnsZoneType */
export type DnsZoneType = string;
/** Alias for SystemAssignedServiceIdentityType */
export type SystemAssignedServiceIdentityType = string;
/** Alias for CreatedByType */
export type CreatedByType = string;
/** Alias for DatastoreProvisioningState */
export type DatastoreProvisioningState = string;
/** Alias for MountOptionEnum */
export type MountOptionEnum = string;
/** Alias for DatastoreStatus */
export type DatastoreStatus = string;
/** Alias for HcxEnterpriseSiteStatus */
export type HcxEnterpriseSiteStatus = string;
/** Alias for ExpressRouteAuthorizationProvisioningState */
export type ExpressRouteAuthorizationProvisioningState = string;
/** Alias for GlobalReachConnectionProvisioningState */
export type GlobalReachConnectionProvisioningState = string;
/** Alias for GlobalReachConnectionStatus */
export type GlobalReachConnectionStatus = string;
/** Alias for WorkloadNetworkProvisioningState */
export type WorkloadNetworkProvisioningState = string;
/** Alias for SegmentStatusEnum */
export type SegmentStatusEnum = string;
/** Alias for DhcpTypeEnum */
export type DhcpTypeEnum = string;
/** Alias for PortMirroringDirectionEnum */
export type PortMirroringDirectionEnum = string;
/** Alias for PortMirroringStatusEnum */
export type PortMirroringStatusEnum = string;
/** Alias for VMGroupStatusEnum */
export type VMGroupStatusEnum = string;
/** Alias for VMTypeEnum */
export type VMTypeEnum = string;
/** Alias for DnsServiceLogLevelEnum */
export type DnsServiceLogLevelEnum = string;
/** Alias for DnsServiceStatusEnum */
export type DnsServiceStatusEnum = string;
/** Alias for CloudLinkStatus */
export type CloudLinkStatus = string;
/** Alias for AddonType */
export type AddonType = string;
/** Alias for AddonProvisioningState */
export type AddonProvisioningState = string;
/** Alias for VirtualMachineRestrictMovementState */
export type VirtualMachineRestrictMovementState = string;
/** Alias for PlacementPolicyType */
export type PlacementPolicyType = string;
/** Alias for PlacementPolicyState */
export type PlacementPolicyState = string;
/** Alias for AffinityType */
export type AffinityType = string;
/** Alias for AffinityStrength */
export type AffinityStrength = string;
/** Alias for AzureHybridBenefitType */
export type AzureHybridBenefitType = string;
/** Alias for ScriptCmdletAudience */
export type ScriptCmdletAudience = string;
/** Alias for ScriptParameterTypes */
export type ScriptParameterTypes = string;
/** Alias for VisibilityParameterEnum */
export type VisibilityParameterEnum = string;
/** Alias for OptionalParamEnum */
export type OptionalParamEnum = string;
/** Alias for ScriptExecutionParameterType */
export type ScriptExecutionParameterType = string;
/** Alias for ScriptExecutionProvisioningState */
export type ScriptExecutionProvisioningState = string;
/** Alias for IscsiPathProvisioningState */
export type IscsiPathProvisioningState = string;
/** Alias for PrivateEndpointServiceConnectionStatus */
export type PrivateEndpointServiceConnectionStatus = string;
/** Alias for PrivateEndpointConnectionProvisioningState */
export type PrivateEndpointConnectionProvisioningState = string;
/** Alias for ResourceIdentityType */
export type ResourceIdentityType = "SystemAssigned";
/** Alias for ScriptOutputStreamType */
export type ScriptOutputStreamType = string;
