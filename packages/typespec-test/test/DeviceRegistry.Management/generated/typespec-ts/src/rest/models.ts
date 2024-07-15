// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Asset definition. */
export interface Asset extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AssetProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

/** Defines the asset properties. */
export interface AssetProperties {
  /** Resource path to asset type (model) definition. */
  assetType?: string;
  /** Enabled/Disabled status of the asset. */
  enabled?: boolean;
  /** Asset id provided by the customer. */
  externalAssetId?: string;
  /** Human-readable display name. */
  displayName?: string;
  /** Human-readable description of the asset. */
  description?: string;
  /** A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must have the format <ModuleCR.metadata.namespace>/<ModuleCR.metadata.name>. */
  assetEndpointProfileUri: string;
  /** Asset manufacturer name. */
  manufacturer?: string;
  /** Asset manufacturer URI. */
  manufacturerUri?: string;
  /** Asset model name. */
  model?: string;
  /** Asset product code. */
  productCode?: string;
  /** Revision number of the hardware. */
  hardwareRevision?: string;
  /** Revision number of the software. */
  softwareRevision?: string;
  /** Reference to the documentation. */
  documentationUri?: string;
  /** Asset serial number. */
  serialNumber?: string;
  /** A set of key-value pairs that contain custom attributes set by the customer. */
  attributes?: Record<string, unknown>;
  /** Protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol. */
  defaultDataPointsConfiguration?: string;
  /** Protocol-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol. */
  defaultEventsConfiguration?: string;
  /** Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration. See below for more details for the definition of the dataPoints element. */
  dataPoints?: Array<DataPoint>;
  /** Array of events that are part of the asset. Each event can reference an asset type capability and have per-event configuration. See below for more details about the definition of the events element. */
  events?: Array<Event>;
}

/** Defines the data point properties. */
export interface DataPoint {
  /** The name of the data point. */
  name?: string;
  /** The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset. */
  dataSource: string;
  /** The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1. */
  capabilityId?: string;
  /**
   * An indication of how the data point should be mapped to OpenTelemetry.
   *
   * Possible values: "none", "counter", "gauge", "histogram", "log"
   */
  observabilityMode?: DataPointsObservabilityMode;
  /** Protocol-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize. */
  dataPointConfiguration?: string;
}

/** Defines the event properties. */
export interface Event {
  /** The name of the event. */
  name?: string;
  /** The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset. */
  eventNotifier: string;
  /** The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1. */
  capabilityId?: string;
  /**
   * An indication of how the event should be mapped to OpenTelemetry.
   *
   * Possible values: "none", "log"
   */
  observabilityMode?: EventsObservabilityMode;
  /** Protocol-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize. */
  eventConfiguration?: string;
}

/** Defines the asset status properties. */
export interface AssetStatus {
  /** Array object to transfer and persist errors that originate from the Edge. */
  errors?: Array<AssetStatusError>;
  /** A read only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (Edge) state of the Asset. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version. */
  version?: number;
}

/** Defines the asset status error properties. */
export interface AssetStatusError {
  /** Error code for classification of errors (ex: 400, 404, 500, etc.). */
  code?: number;
  /** Human readable helpful error message to provide additional context for error (ex: “capability Id 'foo' does not exist”). */
  message?: string;
}

/** The extended location. */
export interface ExtendedLocation {
  /** The extended location type. */
  type: string;
  /** The extended location name. */
  name: string;
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

/** Asset Endpoint Profile definition. */
export interface AssetEndpointProfile extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AssetEndpointProfileProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

/** Defines the Asset Endpoint Profile properties. */
export interface AssetEndpointProfileProperties {
  /** The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration. */
  targetAddress: string;
  /** Defines the client authentication mechanism to the server. */
  userAuthentication?: UserAuthentication;
  /** Defines the authentication mechanism for the southbound connector connecting to the shop floor/OT device. */
  transportAuthentication?: TransportAuthentication;
  /** Contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF). */
  additionalConfiguration?: string;
}

/** Definition of the client authentication mechanism to the server. */
export interface UserAuthentication {
  /**
   * Defines the mode to authenticate the user of the client at the server.
   *
   * Possible values: "Anonymous", "Certificate", "UsernamePassword"
   */
  mode: UserAuthenticationMode;
  /** Defines the username and password references when UsernamePassword user authentication mode is selected. */
  usernamePasswordCredentials?: UsernamePasswordCredentials;
  /** Defines the certificate reference when Certificate user authentication mode is selected. */
  x509Credentials?: X509Credentials;
}

/** The credentials for authentication mode UsernamePassword. */
export interface UsernamePasswordCredentials {
  /** A reference to secret containing the username. */
  usernameReference: string;
  /** A reference to secret containing the password. */
  passwordReference: string;
}

/** The x509 certificate for authentication mode Certificate. */
export interface X509Credentials {
  /** A reference to secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx). */
  certificateReference: string;
}

/** Definition of the authentication mechanism for the southbound connector. */
export interface TransportAuthentication {
  /** Defines a reference to a secret which contains all certificates and private keys that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys. */
  ownCertificates: Array<OwnCertificate>;
}

/** Certificate or private key that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys. */
export interface OwnCertificate {
  /** Certificate thumbprint. */
  certThumbprint?: string;
  /** Secret Reference name (cert and private key). */
  certSecretReference?: string;
  /** Secret Reference Name (Pfx or Pem password). */
  certPasswordReference?: string;
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

/** The type used for update operations of the Asset. */
export interface AssetUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  properties?: AssetUpdateProperties;
}

/** The updatable properties of the Asset. */
export interface AssetUpdateProperties {
  /** Resource path to asset type (model) definition. */
  assetType?: string;
  /** Enabled/Disabled status of the asset. */
  enabled?: boolean;
  /** Human-readable display name. */
  displayName?: string;
  /** Human-readable description of the asset. */
  description?: string;
  /** Asset manufacturer name. */
  manufacturer?: string;
  /** Asset manufacturer URI. */
  manufacturerUri?: string;
  /** Asset model name. */
  model?: string;
  /** Asset product code. */
  productCode?: string;
  /** Revision number of the hardware. */
  hardwareRevision?: string;
  /** Revision number of the software. */
  softwareRevision?: string;
  /** Reference to the documentation. */
  documentationUri?: string;
  /** Asset serial number. */
  serialNumber?: string;
  /** A set of key-value pairs that contain custom attributes set by the customer. */
  attributes?: Record<string, unknown>;
  /** Protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol. */
  defaultDataPointsConfiguration?: string;
  /** Protocol-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol. */
  defaultEventsConfiguration?: string;
  /** Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration. See below for more details for the definition of the dataPoints element. */
  dataPoints?: Array<DataPoint>;
  /** Array of events that are part of the asset. Each event can reference an asset type capability and have per-event configuration. See below for more details about the definition of the events element. */
  events?: Array<Event>;
}

/** The type used for update operations of the AssetEndpointProfile. */
export interface AssetEndpointProfileUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  properties?: AssetEndpointProfileUpdateProperties;
}

/** The updatable properties of the AssetEndpointProfile. */
export interface AssetEndpointProfileUpdateProperties {
  /** The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration. */
  targetAddress?: string;
  /** Defines the client authentication mechanism to the server. */
  userAuthentication?: UserAuthentication;
  /** Defines the authentication mechanism for the southbound connector connecting to the shop floor/OT device. */
  transportAuthentication?: TransportAuthentication;
  /** Contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF). */
  additionalConfiguration?: string;
}

/** Alias for DataPointsObservabilityMode */
export type DataPointsObservabilityMode = string;
/** Alias for EventsObservabilityMode */
export type EventsObservabilityMode = string;
/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState = string;
/** Alias for ProvisioningState */
export type ProvisioningState = string;
/** Alias for CreatedByType */
export type CreatedByType = string;
/** Alias for PrivateEndpointServiceConnectionStatus */
export type PrivateEndpointServiceConnectionStatus = string;
/** Alias for PrivateEndpointConnectionProvisioningState */
export type PrivateEndpointConnectionProvisioningState = string;
/** Alias for UserAuthenticationMode */
export type UserAuthenticationMode = string;
/** Alias for ResourceIdentityType */
export type ResourceIdentityType = "SystemAssigned";
/** Alias for SkuTier */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";
