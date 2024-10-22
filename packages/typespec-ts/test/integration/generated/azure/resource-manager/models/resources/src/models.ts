// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface TopLevelTrackedResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: TopLevelTrackedResourceProperties;
}

/** Top Level Arm Resource Properties. */
export interface TopLevelTrackedResourceProperties {
  /** The description of the resource. */
  description?: string;
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

/** Nested child of Top Level Tracked Resource. */
export interface NestedProxyResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: NestedProxyResourceProperties;
}

/** Nested Proxy Resource Properties. */
export interface NestedProxyResourceProperties {
  /** Nested resource description. */
  description?: string;
}

/** Network security perimeter (NSP) configuration resource */
export interface NetworkSecurityPerimeterConfiguration extends ProxyResource {
  properties?: NetworkSecurityPerimeterConfigurationProperties;
}

/** Network security configuration properties. */
export interface NetworkSecurityPerimeterConfigurationProperties {
  networkSecurityPerimeter?: NetworkSecurityPerimeter;
  resourceAssociation?: ResourceAssociation;
  profile?: NetworkSecurityProfile;
}

/** Describes a provisioning issue for a network security perimeter configuration */
export interface ProvisioningIssue {}

/** Details of a provisioning issue for a network security perimeter (NSP) configuration. Resource providers should generate separate provisioning issue elements for each separate issue detected, and include a meaningful and distinctive description, as well as any appropriate suggestedResourceIds and suggestedAccessRules */
export interface ProvisioningIssueProperties {}

/** Access rule in a network security perimeter configuration profile */
export interface AccessRule {
  /** Name of the access rule */
  name?: string;
  properties?: AccessRuleProperties;
}

/** Properties of Access Rule */
export interface AccessRuleProperties {
  /** Possible values: "Inbound", "Outbound" */
  direction?: AccessRuleDirection;
  /** Address prefixes in the CIDR format for inbound rules */
  addressPrefixes?: string[];
  /** Subscriptions for inbound rules */
  subscriptions?: { id?: string }[];
  /** Network security perimeters for inbound rules */
  networkSecurityPerimeters?: Array<NetworkSecurityPerimeter>;
  /** Fully qualified domain names (FQDN) for outbound rules */
  fullyQualifiedDomainNames?: string[];
  /** Email addresses for outbound rules */
  emailAddresses?: string[];
  /** Phone numbers for outbound rules */
  phoneNumbers?: string[];
}

/** Information about a network security perimeter (NSP) */
export interface NetworkSecurityPerimeter {
  /** Fully qualified Azure resource ID of the NSP resource */
  id?: string;
  /** Universal unique ID (UUID) of the network security perimeter */
  perimeterGuid?: string;
  /** Location of the network security perimeter */
  location?: string;
}

/** Information about resource association */
export interface ResourceAssociation {
  /** Name of the resource association */
  name?: string;
  /** Possible values: "Enforced", "Learning", "Audit" */
  accessMode?: ResourceAssociationAccessMode;
}

/** Network security perimeter configuration profile */
export interface NetworkSecurityProfile {
  /** Name of the profile */
  name?: string;
  /** Current access rules version */
  accessRulesVersion?: number;
  /** List of Access Rules */
  accessRules?: Array<AccessRule>;
  /** Current diagnostic settings version */
  diagnosticSettingsVersion?: number;
  /** List of log categories that are enabled */
  enabledLogCategories?: string[];
}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

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

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface SingletonTrackedResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: SingletonTrackedResourceProperties;
}

/** Singleton Arm Resource Properties. */
export interface SingletonTrackedResourceProperties {
  /** The description of the resource. */
  description?: string;
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

/** The details of a user notification. */
export interface NotificationDetails {
  /** The notification message. */
  message: string;
  /** If true, the notification is urgent. */
  urgent: boolean;
}

/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState = string;
/** Alias for ProvisioningState */
export type ProvisioningState = string;
/** Alias for CreatedByType */
export type CreatedByType = string;
/** Alias for NetworkSecurityPerimeterConfigurationProvisioningState */
export type NetworkSecurityPerimeterConfigurationProvisioningState = string;
/** Alias for IssueType */
export type IssueType = string;
/** Alias for Severity */
export type Severity = string;
/** Alias for AccessRuleDirection */
export type AccessRuleDirection = string;
/** Alias for ResourceAssociationAccessMode */
export type ResourceAssociationAccessMode = string;
/** Alias for PrivateEndpointServiceConnectionStatus */
export type PrivateEndpointServiceConnectionStatus = string;
/** Alias for PrivateEndpointConnectionProvisioningState */
export type PrivateEndpointConnectionProvisioningState = string;
/** Alias for ResourceIdentityType */
export type ResourceIdentityType = "SystemAssigned";
/** Alias for SkuTier */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";
