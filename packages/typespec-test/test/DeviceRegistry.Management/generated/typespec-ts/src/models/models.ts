// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  TrackedResource as TrackedResourceRest,
  AssetEndpointProfile as AssetEndpointProfileRest,
  AssetEndpointProfileProperties as AssetEndpointProfilePropertiesRest,
  UserAuthentication as UserAuthenticationRest,
  UsernamePasswordCredentials as UsernamePasswordCredentialsRest,
  X509Credentials as X509CredentialsRest,
  TransportAuthentication as TransportAuthenticationRest,
  OwnCertificate as OwnCertificateRest,
  ExtendedLocation as ExtendedLocationRest,
  AssetEndpointProfileUpdate as AssetEndpointProfileUpdateRest,
  AssetEndpointProfileUpdateProperties as AssetEndpointProfileUpdatePropertiesRest,
  Asset as AssetRest,
  AssetProperties as AssetPropertiesRest,
  DataPoint as DataPointRest,
  Event as EventRest,
  AssetUpdate as AssetUpdateRest,
  AssetUpdateProperties as AssetUpdatePropertiesRest,
} from "../rest/index.js";

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

/** The kind of entity that created the resource. */
export type CreatedByType = "User" | "Application" | "ManagedIdentity" | "Key";

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(
  item: TrackedResource,
): TrackedResourceRest {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
  };
}

/** Asset Endpoint Profile definition. */
export interface AssetEndpointProfile extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AssetEndpointProfileProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

export function assetEndpointProfileSerializer(
  item: AssetEndpointProfile,
): AssetEndpointProfileRest {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : assetEndpointProfilePropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** Defines the Asset Endpoint Profile properties. */
export interface AssetEndpointProfileProperties {
  /** Globally unique, immutable, non-reusable id. */
  readonly uuid?: string;
  /** The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration. */
  targetAddress: string;
  /** Defines the client authentication mechanism to the server. */
  userAuthentication?: UserAuthentication;
  /** Defines the authentication mechanism for the southbound connector connecting to the shop floor/OT device. */
  transportAuthentication?: TransportAuthentication;
  /** Contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF). */
  additionalConfiguration?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function assetEndpointProfilePropertiesSerializer(
  item: AssetEndpointProfileProperties,
): AssetEndpointProfilePropertiesRest {
  return {
    targetAddress: item["targetAddress"],
    userAuthentication: !item.userAuthentication
      ? item.userAuthentication
      : userAuthenticationSerializer(item.userAuthentication),
    transportAuthentication: !item.transportAuthentication
      ? item.transportAuthentication
      : transportAuthenticationSerializer(item.transportAuthentication),
    additionalConfiguration: item["additionalConfiguration"],
  };
}

/** Definition of the client authentication mechanism to the server. */
export interface UserAuthentication {
  /** Defines the mode to authenticate the user of the client at the server. */
  mode: UserAuthenticationMode;
  /** Defines the username and password references when UsernamePassword user authentication mode is selected. */
  usernamePasswordCredentials?: UsernamePasswordCredentials;
  /** Defines the certificate reference when Certificate user authentication mode is selected. */
  x509Credentials?: X509Credentials;
}

export function userAuthenticationSerializer(
  item: UserAuthentication,
): UserAuthenticationRest {
  return {
    mode: item["mode"],
    usernamePasswordCredentials: !item.usernamePasswordCredentials
      ? item.usernamePasswordCredentials
      : usernamePasswordCredentialsSerializer(item.usernamePasswordCredentials),
    x509Credentials: !item.x509Credentials
      ? item.x509Credentials
      : x509CredentialsSerializer(item.x509Credentials),
  };
}

/** The mode to authenticate the user of the client at the server. */
export type UserAuthenticationMode =
  | "Anonymous"
  | "Certificate"
  | "UsernamePassword";

/** The credentials for authentication mode UsernamePassword. */
export interface UsernamePasswordCredentials {
  /** A reference to secret containing the username. */
  usernameReference: string;
  /** A reference to secret containing the password. */
  passwordReference: string;
}

export function usernamePasswordCredentialsSerializer(
  item: UsernamePasswordCredentials,
): UsernamePasswordCredentialsRest {
  return {
    usernameReference: item["usernameReference"],
    passwordReference: item["passwordReference"],
  };
}

/** The x509 certificate for authentication mode Certificate. */
export interface X509Credentials {
  /** A reference to secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx). */
  certificateReference: string;
}

export function x509CredentialsSerializer(
  item: X509Credentials,
): X509CredentialsRest {
  return {
    certificateReference: item["certificateReference"],
  };
}

/** Definition of the authentication mechanism for the southbound connector. */
export interface TransportAuthentication {
  /** Defines a reference to a secret which contains all certificates and private keys that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys. */
  ownCertificates: OwnCertificate[];
}

export function transportAuthenticationSerializer(
  item: TransportAuthentication,
): TransportAuthenticationRest {
  return {
    ownCertificates: item["ownCertificates"].map(ownCertificateSerializer),
  };
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

export function ownCertificateSerializer(
  item: OwnCertificate,
): OwnCertificateRest {
  return {
    certThumbprint: item["certThumbprint"],
    certSecretReference: item["certSecretReference"],
    certPasswordReference: item["certPasswordReference"],
  };
}

/** The provisioning state of a resource type. */
export type ResourceProvisioningState = "Succeeded" | "Failed" | "Canceled";

/** The extended location. */
export interface ExtendedLocation {
  /** The extended location type. */
  type: string;
  /** The extended location name. */
  name: string;
}

export function extendedLocationSerializer(
  item: ExtendedLocation,
): ExtendedLocationRest {
  return {
    type: item["type"],
    name: item["name"],
  };
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

/** The type used for update operations of the AssetEndpointProfile. */
export interface AssetEndpointProfileUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  properties?: AssetEndpointProfileUpdateProperties;
}

export function assetEndpointProfileUpdateSerializer(
  item: AssetEndpointProfileUpdate,
): AssetEndpointProfileUpdateRest {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : assetEndpointProfileUpdatePropertiesSerializer(item.properties),
  };
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

export function assetEndpointProfileUpdatePropertiesSerializer(
  item: AssetEndpointProfileUpdateProperties,
): AssetEndpointProfileUpdatePropertiesRest {
  return {
    targetAddress: item["targetAddress"],
    userAuthentication: !item.userAuthentication
      ? item.userAuthentication
      : userAuthenticationSerializer(item.userAuthentication),
    transportAuthentication: !item.transportAuthentication
      ? item.transportAuthentication
      : transportAuthenticationSerializer(item.transportAuthentication),
    additionalConfiguration: item["additionalConfiguration"],
  };
}

/** The response of a AssetEndpointProfile list operation. */
export interface _AssetEndpointProfileListResult {
  /** The AssetEndpointProfile items on this page */
  value: AssetEndpointProfile[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Asset definition. */
export interface Asset extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AssetProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

export function assetSerializer(item: Asset): AssetRest {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : assetPropertiesSerializer(item.properties),
    extendedLocation: extendedLocationSerializer(item.extendedLocation),
  };
}

/** Defines the asset properties. */
export interface AssetProperties {
  /** Globally unique, immutable, non-reusable id. */
  readonly uuid?: string;
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
  /** An integer that is incremented each time the resource is modified. */
  readonly version?: number;
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
  attributes?: Record<string, any>;
  /** Protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol. */
  defaultDataPointsConfiguration?: string;
  /** Protocol-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol. */
  defaultEventsConfiguration?: string;
  /** Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration. See below for more details for the definition of the dataPoints element. */
  dataPoints?: DataPoint[];
  /** Array of events that are part of the asset. Each event can reference an asset type capability and have per-event configuration. See below for more details about the definition of the events element. */
  events?: Event[];
  /** Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources. */
  readonly status?: AssetStatus;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningState;
}

export function assetPropertiesSerializer(
  item: AssetProperties,
): AssetPropertiesRest {
  return {
    assetType: item["assetType"],
    enabled: item["enabled"],
    externalAssetId: item["externalAssetId"],
    displayName: item["displayName"],
    description: item["description"],
    assetEndpointProfileUri: item["assetEndpointProfileUri"],
    manufacturer: item["manufacturer"],
    manufacturerUri: item["manufacturerUri"],
    model: item["model"],
    productCode: item["productCode"],
    hardwareRevision: item["hardwareRevision"],
    softwareRevision: item["softwareRevision"],
    documentationUri: item["documentationUri"],
    serialNumber: item["serialNumber"],
    attributes: !item.attributes
      ? item.attributes
      : (serializeRecord(item.attributes as any) as any),
    defaultDataPointsConfiguration: item["defaultDataPointsConfiguration"],
    defaultEventsConfiguration: item["defaultEventsConfiguration"],
    dataPoints:
      item["dataPoints"] === undefined
        ? item["dataPoints"]
        : item["dataPoints"].map(dataPointSerializer),
    events:
      item["events"] === undefined
        ? item["events"]
        : item["events"].map(eventSerializer),
  };
}

/** Defines the data point properties. */
export interface DataPoint {
  /** The name of the data point. */
  name?: string;
  /** The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset. */
  dataSource: string;
  /** The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1. */
  capabilityId?: string;
  /** An indication of how the data point should be mapped to OpenTelemetry. */
  observabilityMode?: DataPointsObservabilityMode;
  /** Protocol-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize. */
  dataPointConfiguration?: string;
}

export function dataPointSerializer(item: DataPoint): DataPointRest {
  return {
    name: item["name"],
    dataSource: item["dataSource"],
    capabilityId: item["capabilityId"],
    observabilityMode: item["observabilityMode"],
    dataPointConfiguration: item["dataPointConfiguration"],
  };
}

/** Defines the data point observability mode. */
export type DataPointsObservabilityMode =
  | "none"
  | "counter"
  | "gauge"
  | "histogram"
  | "log";

/** Defines the event properties. */
export interface Event {
  /** The name of the event. */
  name?: string;
  /** The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset. */
  eventNotifier: string;
  /** The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1. */
  capabilityId?: string;
  /** An indication of how the event should be mapped to OpenTelemetry. */
  observabilityMode?: EventsObservabilityMode;
  /** Protocol-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize. */
  eventConfiguration?: string;
}

export function eventSerializer(item: Event): EventRest {
  return {
    name: item["name"],
    eventNotifier: item["eventNotifier"],
    capabilityId: item["capabilityId"],
    observabilityMode: item["observabilityMode"],
    eventConfiguration: item["eventConfiguration"],
  };
}

/** Defines the event observability mode. */
export type EventsObservabilityMode = "none" | "log";

/** Defines the asset status properties. */
export interface AssetStatus {
  /** Array object to transfer and persist errors that originate from the Edge. */
  errors?: AssetStatusError[];
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

/** The type used for update operations of the Asset. */
export interface AssetUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  properties?: AssetUpdateProperties;
}

export function assetUpdateSerializer(item: AssetUpdate): AssetUpdateRest {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : assetUpdatePropertiesSerializer(item.properties),
  };
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
  attributes?: Record<string, any>;
  /** Protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol. */
  defaultDataPointsConfiguration?: string;
  /** Protocol-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol. */
  defaultEventsConfiguration?: string;
  /** Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration. See below for more details for the definition of the dataPoints element. */
  dataPoints?: DataPoint[];
  /** Array of events that are part of the asset. Each event can reference an asset type capability and have per-event configuration. See below for more details about the definition of the events element. */
  events?: Event[];
}

export function assetUpdatePropertiesSerializer(
  item: AssetUpdateProperties,
): AssetUpdatePropertiesRest {
  return {
    assetType: item["assetType"],
    enabled: item["enabled"],
    displayName: item["displayName"],
    description: item["description"],
    manufacturer: item["manufacturer"],
    manufacturerUri: item["manufacturerUri"],
    model: item["model"],
    productCode: item["productCode"],
    hardwareRevision: item["hardwareRevision"],
    softwareRevision: item["softwareRevision"],
    documentationUri: item["documentationUri"],
    serialNumber: item["serialNumber"],
    attributes: !item.attributes
      ? item.attributes
      : (serializeRecord(item.attributes as any) as any),
    defaultDataPointsConfiguration: item["defaultDataPointsConfiguration"],
    defaultEventsConfiguration: item["defaultEventsConfiguration"],
    dataPoints:
      item["dataPoints"] === undefined
        ? item["dataPoints"]
        : item["dataPoints"].map(dataPointSerializer),
    events:
      item["events"] === undefined
        ? item["events"]
        : item["events"].map(eventSerializer),
  };
}

/** The response of a Asset list operation. */
export interface _AssetListResult {
  /** The Asset items on this page */
  value: Asset[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The current status of an async operation. */
export interface OperationStatusResult {
  /** Fully qualified ID for the async operation. */
  id?: string;
  /** Name of the async operation. */
  name?: string;
  /** Operation status. */
  status: string;
  /** Percent of the operation that is complete. */
  percentComplete?: number;
  /** The start time of the operation. */
  startTime?: Date;
  /** The end time of the operation. */
  endTime?: Date;
  /** The operations list. */
  operations?: OperationStatusResult[];
  /** If present, details of the operation error. */
  error?: ErrorDetail;
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
  display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionType;
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

/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
export type Origin = "user" | "system" | "user,system";
/** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
export type ActionType = "Internal";
/** Microsoft.DeviceRegistry Resource Provider supported API versions. */
export type Versions = "2023-11-01-preview";
/** Alias for ProvisioningState */
export type ProvisioningState = string | ResourceProvisioningState | "Accepted";
