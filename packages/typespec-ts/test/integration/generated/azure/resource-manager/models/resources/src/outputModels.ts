// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface TopLevelTrackedResourceOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: TopLevelTrackedResourcePropertiesOutput;
}

/** Top Level Arm Resource Properties. */
export interface TopLevelTrackedResourcePropertiesOutput {
  /**
   * The status of the last operation.
   *
   * Possible values: "Provisioning", "Updating", "Deleting", "Accepted"
   */
  readonly provisioningState?: ProvisioningStateOutput;
  /** The description of the resource. */
  description?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResourceOutput extends ResourceOutput {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface ResourceOutput {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemDataOutput {
  /** The identity that created the resource. */
  createdBy?: string;
  /**
   * The type of identity that created the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  createdByType?: CreatedByTypeOutput;
  /** The timestamp of resource creation (UTC). */
  createdAt?: string;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  lastModifiedByType?: CreatedByTypeOutput;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResourceOutput extends ResourceOutput {}

/** Nested child of Top Level Tracked Resource. */
export interface NestedProxyResourceOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: NestedProxyResourcePropertiesOutput;
}

/** Nested Proxy Resource Properties. */
export interface NestedProxyResourcePropertiesOutput {
  /**
   * Provisioning State of the nested child Resource
   *
   * Possible values: "Provisioning", "Updating", "Deleting", "Accepted"
   */
  readonly provisioningState?: ProvisioningStateOutput;
  /** Nested resource description. */
  description?: string;
}

/** Network security perimeter (NSP) configuration resource */
export interface NetworkSecurityPerimeterConfigurationOutput
  extends ProxyResourceOutput {
  properties?: NetworkSecurityPerimeterConfigurationPropertiesOutput;
}

/** Network security configuration properties. */
export interface NetworkSecurityPerimeterConfigurationPropertiesOutput {
  /** Possible values: "Succeeded", "Creating", "Updating", "Deleting", "Accepted", "Failed", "Canceled" */
  readonly provisioningState?: NetworkSecurityPerimeterConfigurationProvisioningStateOutput;
  /** List of provisioning issues, if any */
  readonly provisioningIssues?: Array<ProvisioningIssueOutput>;
  networkSecurityPerimeter?: NetworkSecurityPerimeterOutput;
  resourceAssociation?: ResourceAssociationOutput;
  profile?: NetworkSecurityProfileOutput;
}

/** Describes a provisioning issue for a network security perimeter configuration */
export interface ProvisioningIssueOutput {
  /** Name of the issue */
  readonly name?: string;
  readonly properties?: ProvisioningIssuePropertiesOutput;
}

/** Details of a provisioning issue for a network security perimeter (NSP) configuration. Resource providers should generate separate provisioning issue elements for each separate issue detected, and include a meaningful and distinctive description, as well as any appropriate suggestedResourceIds and suggestedAccessRules */
export interface ProvisioningIssuePropertiesOutput {
  /**
   * Type of issue
   *
   * Possible values: "Unknown", "ConfigurationPropagationFailure", "MissingPerimeterConfiguration", "MissingIdentityConfiguration"
   */
  readonly issueType?: IssueTypeOutput;
  /**
   * Severity of the issue.
   *
   * Possible values: "Warning", "Error"
   */
  readonly severity?: SeverityOutput;
  /** Description of the issue */
  readonly description?: string;
  /** Fully qualified resource IDs of suggested resources that can be associated to the network security perimeter (NSP) to remediate the issue. */
  readonly suggestedResourceIds?: string[];
  /** Access rules that can be added to the network security profile (NSP) to remediate the issue. */
  readonly suggestedAccessRules?: Array<AccessRuleOutput>;
}

/** Access rule in a network security perimeter configuration profile */
export interface AccessRuleOutput {
  /** Name of the access rule */
  name?: string;
  properties?: AccessRulePropertiesOutput;
}

/** Properties of Access Rule */
export interface AccessRulePropertiesOutput {
  /** Possible values: "Inbound", "Outbound" */
  direction?: AccessRuleDirectionOutput;
  /** Address prefixes in the CIDR format for inbound rules */
  addressPrefixes?: string[];
  /** Subscriptions for inbound rules */
  subscriptions?: { id?: string }[];
  /** Network security perimeters for inbound rules */
  networkSecurityPerimeters?: Array<NetworkSecurityPerimeterOutput>;
  /** Fully qualified domain names (FQDN) for outbound rules */
  fullyQualifiedDomainNames?: string[];
  /** Email addresses for outbound rules */
  emailAddresses?: string[];
  /** Phone numbers for outbound rules */
  phoneNumbers?: string[];
}

/** Information about a network security perimeter (NSP) */
export interface NetworkSecurityPerimeterOutput {
  /** Fully qualified Azure resource ID of the NSP resource */
  id?: string;
  /** Universal unique ID (UUID) of the network security perimeter */
  perimeterGuid?: string;
  /** Location of the network security perimeter */
  location?: string;
}

/** Information about resource association */
export interface ResourceAssociationOutput {
  /** Name of the resource association */
  name?: string;
  /** Possible values: "Enforced", "Learning", "Audit" */
  accessMode?: ResourceAssociationAccessModeOutput;
}

/** Network security perimeter configuration profile */
export interface NetworkSecurityProfileOutput {
  /** Name of the profile */
  name?: string;
  /** Current access rules version */
  accessRulesVersion?: number;
  /** List of Access Rules */
  accessRules?: Array<AccessRuleOutput>;
  /** Current diagnostic settings version */
  diagnosticSettingsVersion?: number;
  /** List of log categories that are enabled */
  enabledLogCategories?: string[];
}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResourceOutput extends ResourceOutput {
  /** Resource Etag. */
  readonly etag?: string;
}

/** The base extension resource. */
export interface ExtensionResourceOutput extends ResourceOutput {}

/** A private link resource. */
export interface PrivateLinkResourceOutput extends ResourceOutput {
  /** Resource properties. */
  properties?: PrivateLinkResourcePropertiesOutput;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourcePropertiesOutput {
  /** The private link resource group id. */
  readonly groupId?: string;
  /** The private link resource required member names. */
  readonly requiredMembers?: string[];
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnectionOutput extends ResourceOutput {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionPropertiesOutput;
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionPropertiesOutput {
  /** The group ids for the private endpoint resource. */
  readonly groupIds?: string[];
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpointOutput;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateOutput;
  /**
   * The provisioning state of the private endpoint connection resource.
   *
   * Possible values: "Succeeded", "Creating", "Deleting", "Failed"
   */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningStateOutput;
}

/** The Private Endpoint resource. */
export interface PrivateEndpointOutput {
  /** The resource identifier for private endpoint */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionStateOutput {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   *
   * Possible values: "Pending", "Approved", "Rejected"
   */
  status?: PrivateEndpointServiceConnectionStatusOutput;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface SingletonTrackedResourceOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: SingletonTrackedResourcePropertiesOutput;
}

/** Singleton Arm Resource Properties. */
export interface SingletonTrackedResourcePropertiesOutput {
  /**
   * The status of the last operation.
   *
   * Possible values: "Provisioning", "Updating", "Deleting", "Accepted"
   */
  readonly provisioningState?: ProvisioningStateOutput;
  /** The description of the resource. */
  description?: string;
}

/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
export interface ResourceModelWithAllowedPropertySetOutput
  extends TrackedResourceOutput {
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
  identity?: IdentityOutput;
  sku?: SkuOutput;
  plan?: PlanOutput;
}

/** Identity for the resource. */
export interface IdentityOutput {
  /** The principal ID of resource identity. The value must be an UUID. */
  readonly principalId?: string;
  /** The tenant ID of resource. The value must be an UUID. */
  readonly tenantId?: string;
  /** The identity type. */
  type?: ResourceIdentityTypeOutput;
}

/** The resource model definition representing SKU */
export interface SkuOutput {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTierOutput;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Plan for the resource. */
export interface PlanOutput {
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

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponseOutput {
  /** The error object. */
  error?: ErrorDetailOutput;
}

/** The error detail. */
export interface ErrorDetailOutput {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: Array<ErrorDetailOutput>;
  /** The error additional info. */
  readonly additionalInfo?: Array<ErrorAdditionalInfoOutput>;
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfoOutput {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

/** The response of a TopLevelTrackedResource list operation. */
export interface TopLevelTrackedResourceListResultOutput {
  /** The TopLevelTrackedResource items on this page */
  value: Array<TopLevelTrackedResourceOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a NestedProxyResource list operation. */
export interface NestedProxyResourceListResultOutput {
  /** The NestedProxyResource items on this page */
  value: Array<NestedProxyResourceOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a SingletonTrackedResource list operation. */
export interface SingletonTrackedResourceListResultOutput {
  /** The SingletonTrackedResource items on this page */
  value: Array<SingletonTrackedResourceOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Alias for ResourceProvisioningStateOutput */
export type ResourceProvisioningStateOutput = string;
/** Alias for ProvisioningStateOutput */
export type ProvisioningStateOutput = string;
/** Alias for CreatedByTypeOutput */
export type CreatedByTypeOutput = string;
/** Alias for NetworkSecurityPerimeterConfigurationProvisioningStateOutput */
export type NetworkSecurityPerimeterConfigurationProvisioningStateOutput =
  string;
/** Alias for IssueTypeOutput */
export type IssueTypeOutput = string;
/** Alias for SeverityOutput */
export type SeverityOutput = string;
/** Alias for AccessRuleDirectionOutput */
export type AccessRuleDirectionOutput = string;
/** Alias for ResourceAssociationAccessModeOutput */
export type ResourceAssociationAccessModeOutput = string;
/** Alias for PrivateEndpointServiceConnectionStatusOutput */
export type PrivateEndpointServiceConnectionStatusOutput = string;
/** Alias for PrivateEndpointConnectionProvisioningStateOutput */
export type PrivateEndpointConnectionProvisioningStateOutput = string;
/** Alias for ResourceIdentityTypeOutput */
export type ResourceIdentityTypeOutput = "SystemAssigned";
/** Alias for SkuTierOutput */
export type SkuTierOutput = "Free" | "Basic" | "Standard" | "Premium";
