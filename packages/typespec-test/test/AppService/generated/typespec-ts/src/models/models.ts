// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { areAllPropsUndefined } from "../static-helpers/serialization/check-prop-undefined.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Object with a list of the resources that need to be moved and the resource group they should be moved to. */
export interface CsmMoveResourceEnvelope {
  targetResourceGroup?: string;
  resources?: string[];
}

export function csmMoveResourceEnvelopeSerializer(item: CsmMoveResourceEnvelope): any {
  return {
    targetResourceGroup: item["targetResourceGroup"],
    resources: !item["resources"]
      ? item["resources"]
      : item["resources"].map((p: any) => {
          return p;
        }),
  };
}

/** App Service error response. */
export interface DefaultErrorResponse {
  /** Error model. */
  readonly error?: DefaultErrorResponseError;
}

export function defaultErrorResponseDeserializer(item: any): DefaultErrorResponse {
  return {
    error: !item["error"] ? item["error"] : defaultErrorResponseErrorDeserializer(item["error"]),
  };
}

/** Error model. */
export interface DefaultErrorResponseError {
  /** Standardized string to programmatically identify the error. */
  readonly code?: string;
  /** Detailed error description and debugging information. */
  readonly message?: string;
  /** Detailed error description and debugging information. */
  readonly target?: string;
  details?: DefaultErrorResponseErrorDetailsItem[];
  /** More information to debug error. */
  readonly innererror?: string;
}

export function defaultErrorResponseErrorDeserializer(item: any): DefaultErrorResponseError {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"]
      ? item["details"]
      : defaultErrorResponseErrorDetailsItemArrayDeserializer(item["details"]),
    innererror: item["innererror"],
  };
}

export function defaultErrorResponseErrorDetailsItemArrayDeserializer(
  result: Array<DefaultErrorResponseErrorDetailsItem>,
): any[] {
  return result.map((item) => {
    return defaultErrorResponseErrorDetailsItemDeserializer(item);
  });
}

/** Detailed errors. */
export interface DefaultErrorResponseErrorDetailsItem {
  /** Standardized string to programmatically identify the error. */
  readonly code?: string;
  /** Detailed error description and debugging information. */
  readonly message?: string;
  /** Detailed error description and debugging information. */
  readonly target?: string;
}

export function defaultErrorResponseErrorDetailsItemDeserializer(
  item: any,
): DefaultErrorResponseErrorDetailsItem {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
  };
}

/** Resource validation request content. */
export interface ValidateRequest {
  /** Resource name to verify. */
  name: string;
  /** Resource type used for verification. */
  type: ValidateResourceTypes;
  /** Expected location of the resource. */
  location: string;
  /** ARM resource ID of an App Service plan that would host the app. */
  serverFarmId?: string;
  /** Name of the target SKU for the App Service plan. */
  skuName?: string;
  /** <code>true</code> if App Service plan is for Linux workers; otherwise, <code>false</code>. */
  needLinuxWorkers?: boolean;
  /** <code>true</code> if App Service plan is for Spot instances; otherwise, <code>false</code>. */
  isSpot?: boolean;
  /** Target capacity of the App Service plan (number of VMs). */
  capacity?: number;
  /** Name of App Service Environment where app or App Service plan should be created. */
  hostingEnvironment?: string;
  /** <code>true</code> if App Service plan is running as a windows container */
  isXenon?: boolean;
  /** Base URL of the container registry */
  containerRegistryBaseUrl?: string;
  /** Username for to access the container registry */
  containerRegistryUsername?: string;
  /** Password for to access the container registry */
  containerRegistryPassword?: string;
  /** Repository name (image name) */
  containerImageRepository?: string;
  /** Image tag */
  containerImageTag?: string;
  /** Platform (windows or linux) */
  containerImagePlatform?: string;
  /** App Service Environment Properties */
  appServiceEnvironment?: AppServiceEnvironment;
}

export function validateRequestSerializer(item: ValidateRequest): any {
  return {
    name: item["name"],
    type: item["type"],
    location: item["location"],
    properties: _validateRequestPropertiesSerializer(item),
  };
}

/** Resource type used for verification. */
export enum KnownValidateResourceTypes {
  /** ServerFarm */
  ServerFarm = "ServerFarm",
  /** Site */
  Site = "Site",
  /** Microsoft.Web/hostingEnvironments */
  MicrosoftWebHostingEnvironments = "Microsoft.Web/hostingEnvironments",
}

/**
 * Resource type used for verification. \
 * {@link KnownValidateResourceTypes} can be used interchangeably with ValidateResourceTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServerFarm** \
 * **Site** \
 * **Microsoft.Web\/hostingEnvironments**
 */
export type ValidateResourceTypes = string;

/** App properties used for validation. */
export interface ValidateProperties {
  /** ARM resource ID of an App Service plan that would host the app. */
  serverFarmId?: string;
  /** Name of the target SKU for the App Service plan. */
  skuName?: string;
  /** <code>true</code> if App Service plan is for Linux workers; otherwise, <code>false</code>. */
  needLinuxWorkers?: boolean;
  /** <code>true</code> if App Service plan is for Spot instances; otherwise, <code>false</code>. */
  isSpot?: boolean;
  /** Target capacity of the App Service plan (number of VMs). */
  capacity?: number;
  /** Name of App Service Environment where app or App Service plan should be created. */
  hostingEnvironment?: string;
  /** <code>true</code> if App Service plan is running as a windows container */
  isXenon?: boolean;
  /** Base URL of the container registry */
  containerRegistryBaseUrl?: string;
  /** Username for to access the container registry */
  containerRegistryUsername?: string;
  /** Password for to access the container registry */
  containerRegistryPassword?: string;
  /** Repository name (image name) */
  containerImageRepository?: string;
  /** Image tag */
  containerImageTag?: string;
  /** Platform (windows or linux) */
  containerImagePlatform?: string;
  /** App Service Environment Properties */
  appServiceEnvironment?: AppServiceEnvironment;
}

export function validatePropertiesSerializer(item: ValidateProperties): any {
  return {
    serverFarmId: item["serverFarmId"],
    skuName: item["skuName"],
    needLinuxWorkers: item["needLinuxWorkers"],
    isSpot: item["isSpot"],
    capacity: item["capacity"],
    hostingEnvironment: item["hostingEnvironment"],
    isXenon: item["isXenon"],
    containerRegistryBaseUrl: item["containerRegistryBaseUrl"],
    containerRegistryUsername: item["containerRegistryUsername"],
    containerRegistryPassword: item["containerRegistryPassword"],
    containerImageRepository: item["containerImageRepository"],
    containerImageTag: item["containerImageTag"],
    containerImagePlatform: item["containerImagePlatform"],
    appServiceEnvironment: !item["appServiceEnvironment"]
      ? item["appServiceEnvironment"]
      : appServiceEnvironmentSerializer(item["appServiceEnvironment"]),
  };
}

/** Description of an App Service Environment. */
export interface AppServiceEnvironment {
  /** Provisioning state of the App Service Environment. */
  readonly provisioningState?: ProvisioningState;
  /** Current status of the App Service Environment. */
  readonly status?: HostingEnvironmentStatus;
  /** Description of the Virtual Network. */
  virtualNetwork: VirtualNetworkProfile;
  /** Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. */
  internalLoadBalancingMode?: LoadBalancingMode;
  /** Front-end VM size, e.g. "Medium", "Large". */
  multiSize?: string;
  /** Number of front-end instances. */
  readonly multiRoleCount?: number;
  /** Number of IP SSL addresses reserved for the App Service Environment. */
  ipsslAddressCount?: number;
  /** DNS suffix of the App Service Environment. */
  dnsSuffix?: string;
  /** Maximum number of VMs in the App Service Environment. */
  readonly maximumNumberOfMachines?: number;
  /** Scale factor for front-ends. */
  frontEndScaleFactor?: number;
  /**
   * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
   * (most likely because NSG blocked the incoming traffic).
   */
  readonly suspended?: boolean;
  /** Custom settings for changing the behavior of the App Service Environment. */
  clusterSettings?: NameValuePair[];
  /** User added ip ranges to whitelist on ASE db */
  userWhitelistedIpRanges?: string[];
  /** Flag that displays whether an ASE has linux workers or not */
  readonly hasLinuxWorkers?: boolean;
  /** Upgrade Preference */
  upgradePreference?: UpgradePreference;
  /** Dedicated Host Count */
  dedicatedHostCount?: number;
  /** Whether or not this App Service Environment is zone-redundant. */
  zoneRedundant?: boolean;
  /** Whether an upgrade is available for this App Service Environment. */
  readonly upgradeAvailability?: UpgradeAvailability;
}

export function appServiceEnvironmentSerializer(item: AppServiceEnvironment): any {
  return {
    virtualNetwork: virtualNetworkProfileSerializer(item["virtualNetwork"]),
    internalLoadBalancingMode: item["internalLoadBalancingMode"],
    multiSize: item["multiSize"],
    ipsslAddressCount: item["ipsslAddressCount"],
    dnsSuffix: item["dnsSuffix"],
    frontEndScaleFactor: item["frontEndScaleFactor"],
    clusterSettings: !item["clusterSettings"]
      ? item["clusterSettings"]
      : nameValuePairArraySerializer(item["clusterSettings"]),
    userWhitelistedIpRanges: !item["userWhitelistedIpRanges"]
      ? item["userWhitelistedIpRanges"]
      : item["userWhitelistedIpRanges"].map((p: any) => {
          return p;
        }),
    upgradePreference: item["upgradePreference"],
    dedicatedHostCount: item["dedicatedHostCount"],
    zoneRedundant: item["zoneRedundant"],
  };
}

export function appServiceEnvironmentDeserializer(item: any): AppServiceEnvironment {
  return {
    provisioningState: item["provisioningState"],
    status: item["status"],
    virtualNetwork: virtualNetworkProfileDeserializer(item["virtualNetwork"]),
    internalLoadBalancingMode: item["internalLoadBalancingMode"],
    multiSize: item["multiSize"],
    multiRoleCount: item["multiRoleCount"],
    ipsslAddressCount: item["ipsslAddressCount"],
    dnsSuffix: item["dnsSuffix"],
    maximumNumberOfMachines: item["maximumNumberOfMachines"],
    frontEndScaleFactor: item["frontEndScaleFactor"],
    suspended: item["suspended"],
    clusterSettings: !item["clusterSettings"]
      ? item["clusterSettings"]
      : nameValuePairArrayDeserializer(item["clusterSettings"]),
    userWhitelistedIpRanges: !item["userWhitelistedIpRanges"]
      ? item["userWhitelistedIpRanges"]
      : item["userWhitelistedIpRanges"].map((p: any) => {
          return p;
        }),
    hasLinuxWorkers: item["hasLinuxWorkers"],
    upgradePreference: item["upgradePreference"],
    dedicatedHostCount: item["dedicatedHostCount"],
    zoneRedundant: item["zoneRedundant"],
    upgradeAvailability: item["upgradeAvailability"],
  };
}

/** Provisioning state of the App Service Plan. */
export type ProvisioningState = "Succeeded" | "Failed" | "Canceled" | "InProgress" | "Deleting";
/** Current status of the App Service Environment. */
export type HostingEnvironmentStatus = "Preparing" | "Ready" | "Scaling" | "Deleting";

/** Specification for using a Virtual Network. */
export interface VirtualNetworkProfile {
  /** Resource id of the Virtual Network. */
  id: string;
  /** Name of the Virtual Network (read-only). */
  readonly name?: string;
  /** Resource type of the Virtual Network (read-only). */
  readonly type?: string;
  /** Subnet within the Virtual Network. */
  subnet?: string;
}

export function virtualNetworkProfileSerializer(item: VirtualNetworkProfile): any {
  return { id: item["id"], subnet: item["subnet"] };
}

export function virtualNetworkProfileDeserializer(item: any): VirtualNetworkProfile {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    subnet: item["subnet"],
  };
}

/** Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. */
export enum KnownLoadBalancingMode {
  /** None */
  None = "None",
  /** Web */
  Web = "Web",
  /** Publishing */
  Publishing = "Publishing",
  /** Web, Publishing */
  WebPublishing = "Web, Publishing",
}

/**
 * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. \
 * {@link KnownLoadBalancingMode} can be used interchangeably with LoadBalancingMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Web** \
 * **Publishing** \
 * **Web, Publishing**
 */
export type LoadBalancingMode = string;

export function nameValuePairArraySerializer(result: Array<NameValuePair>): any[] {
  return result.map((item) => {
    return nameValuePairSerializer(item);
  });
}

export function nameValuePairArrayDeserializer(result: Array<NameValuePair>): any[] {
  return result.map((item) => {
    return nameValuePairDeserializer(item);
  });
}

/** Name value pair. */
export interface NameValuePair {
  /** Pair name. */
  name?: string;
  /** Pair value. */
  value?: string;
}

export function nameValuePairSerializer(item: NameValuePair): any {
  return { name: item["name"], value: item["value"] };
}

export function nameValuePairDeserializer(item: any): NameValuePair {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** Upgrade Preference */
export enum KnownUpgradePreference {
  /** No preference on when this App Service Environment will be upgraded */
  None = "None",
  /** This App Service Environment will be upgraded before others in the same region that have Upgrade Preference 'Late' */
  Early = "Early",
  /** This App Service Environment will be upgraded after others in the same region that have Upgrade Preference 'Early' */
  Late = "Late",
  /** ASEv3 only. Once an upgrade is available, this App Service Environment will wait 10 days for the upgrade to be manually initiated. After 10 days the upgrade will begin automatically */
  Manual = "Manual",
}

/**
 * Upgrade Preference \
 * {@link KnownUpgradePreference} can be used interchangeably with UpgradePreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No preference on when this App Service Environment will be upgraded \
 * **Early**: This App Service Environment will be upgraded before others in the same region that have Upgrade Preference 'Late' \
 * **Late**: This App Service Environment will be upgraded after others in the same region that have Upgrade Preference 'Early' \
 * **Manual**: ASEv3 only. Once an upgrade is available, this App Service Environment will wait 10 days for the upgrade to be manually initiated. After 10 days the upgrade will begin automatically
 */
export type UpgradePreference = string;

/** Whether an upgrade is available for this App Service Environment. */
export enum KnownUpgradeAvailability {
  /** No upgrade is currently available for this App Service Environment */
  None = "None",
  /** An upgrade is ready to be manually initiated on this App Service Environment */
  Ready = "Ready",
}

/**
 * Whether an upgrade is available for this App Service Environment. \
 * {@link KnownUpgradeAvailability} can be used interchangeably with UpgradeAvailability,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No upgrade is currently available for this App Service Environment \
 * **Ready**: An upgrade is ready to be manually initiated on this App Service Environment
 */
export type UpgradeAvailability = string;

/** Describes the result of resource validation. */
export interface ValidateResponse {
  /** Result of validation. */
  status?: string;
  /** Error details for the case when validation fails. */
  error?: ValidateResponseError;
}

export function validateResponseDeserializer(item: any): ValidateResponse {
  return {
    status: item["status"],
    error: !item["error"] ? item["error"] : validateResponseErrorDeserializer(item["error"]),
  };
}

/** Error details for when validation fails. */
export interface ValidateResponseError {
  /** Validation error code. */
  code?: string;
  /** Validation error message. */
  message?: string;
}

export function validateResponseErrorDeserializer(item: any): ValidateResponseError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/**
 * List of available locations (regions or App Service Environments) for
 * deployment of App Service resources.
 */
export interface DeploymentLocations {
  /** Available regions. */
  locations?: GeoRegion[];
  /** Available App Service Environments with full descriptions of the environments. */
  hostingEnvironments?: AppServiceEnvironment[];
  /** Available App Service Environments with basic information. */
  hostingEnvironmentDeploymentInfos?: HostingEnvironmentDeploymentInfo[];
}

export function deploymentLocationsDeserializer(item: any): DeploymentLocations {
  return {
    locations: !item["locations"]
      ? item["locations"]
      : geoRegionArrayDeserializer(item["locations"]),
    hostingEnvironments: !item["hostingEnvironments"]
      ? item["hostingEnvironments"]
      : appServiceEnvironmentArrayDeserializer(item["hostingEnvironments"]),
    hostingEnvironmentDeploymentInfos: !item["hostingEnvironmentDeploymentInfos"]
      ? item["hostingEnvironmentDeploymentInfos"]
      : hostingEnvironmentDeploymentInfoArrayDeserializer(
          item["hostingEnvironmentDeploymentInfos"],
        ),
  };
}

export function geoRegionArrayDeserializer(result: Array<GeoRegion>): any[] {
  return result.map((item) => {
    return geoRegionDeserializer(item);
  });
}

/** Geographical region. */
export interface GeoRegion extends ProxyOnlyResource {
  /** Region description. */
  readonly description?: string;
  /** Display name for region. */
  readonly displayName?: string;
  /** Display name for region. */
  readonly orgDomain?: string;
}

export function geoRegionDeserializer(item: any): GeoRegion {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _geoRegionPropertiesDeserializer(item["properties"])),
  };
}

/** GeoRegion resource specific properties */
export interface GeoRegionProperties {
  /** Region description. */
  readonly description?: string;
  /** Display name for region. */
  readonly displayName?: string;
  /** Display name for region. */
  readonly orgDomain?: string;
}

export function geoRegionPropertiesDeserializer(item: any): GeoRegionProperties {
  return {
    description: item["description"],
    displayName: item["displayName"],
    orgDomain: item["orgDomain"],
  };
}

export function appServiceEnvironmentArraySerializer(result: Array<AppServiceEnvironment>): any[] {
  return result.map((item) => {
    return appServiceEnvironmentSerializer(item);
  });
}

export function appServiceEnvironmentArrayDeserializer(
  result: Array<AppServiceEnvironment>,
): any[] {
  return result.map((item) => {
    return appServiceEnvironmentDeserializer(item);
  });
}

export function hostingEnvironmentDeploymentInfoArrayDeserializer(
  result: Array<HostingEnvironmentDeploymentInfo>,
): any[] {
  return result.map((item) => {
    return hostingEnvironmentDeploymentInfoDeserializer(item);
  });
}

/** Information needed to create resources on an App Service Environment. */
export interface HostingEnvironmentDeploymentInfo {
  /** Name of the App Service Environment. */
  name?: string;
  /** Location of the App Service Environment. */
  location?: string;
}

export function hostingEnvironmentDeploymentInfoDeserializer(
  item: any,
): HostingEnvironmentDeploymentInfo {
  return {
    name: item["name"],
    location: item["location"],
  };
}

/** Azure proxy only resource. This resource is not tracked by Azure Resource Manager. */
export interface ProxyOnlyResource {
  /** Resource Id. */
  readonly id?: string;
  /** Resource Name. */
  readonly name?: string;
  /** Kind of resource. */
  kind?: string;
  /** Resource type. */
  readonly type?: string;
}

export function proxyOnlyResourceSerializer(item: ProxyOnlyResource): any {
  return { kind: item["kind"] };
}

export function proxyOnlyResourceDeserializer(item: any): ProxyOnlyResource {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
  };
}

/** Collection of ASE regions. */
export interface _AseRegionCollection {
  /** The AseRegion items on this page */
  value: AseRegion[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _aseRegionCollectionDeserializer(item: any): _AseRegionCollection {
  return {
    value: aseRegionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function aseRegionArrayDeserializer(result: Array<AseRegion>): any[] {
  return result.map((item) => {
    return aseRegionDeserializer(item);
  });
}

/** ASE region. */
export interface AseRegion extends ProxyOnlyResource {
  /** Display name for region. */
  readonly displayName?: string;
  /** Is region standard. */
  readonly standard?: boolean;
  /** Dedicated host enabled. */
  readonly dedicatedHost?: boolean;
  /** Zone redundant deployment enabled. */
  readonly zoneRedundant?: boolean;
  /** Available Skus in region. */
  availableSku?: string[];
  /** Available OSs in region. */
  availableOS?: string[];
}

export function aseRegionDeserializer(item: any): AseRegion {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _aseRegionPropertiesDeserializer(item["properties"])),
  };
}

/** ASE region resource specific properties */
export interface AseRegionProperties {
  /** Display name for region. */
  readonly displayName?: string;
  /** Is region standard. */
  readonly standard?: boolean;
  /** Dedicated host enabled. */
  readonly dedicatedHost?: boolean;
  /** Zone redundant deployment enabled. */
  readonly zoneRedundant?: boolean;
  /** Available Skus in region. */
  availableSku?: string[];
  /** Available OSs in region. */
  availableOS?: string[];
}

export function aseRegionPropertiesDeserializer(item: any): AseRegionProperties {
  return {
    displayName: item["displayName"],
    standard: item["standard"],
    dedicatedHost: item["dedicatedHost"],
    zoneRedundant: item["zoneRedundant"],
    availableSku: !item["availableSku"]
      ? item["availableSku"]
      : item["availableSku"].map((p: any) => {
          return p;
        }),
    availableOS: !item["availableOS"]
      ? item["availableOS"]
      : item["availableOS"].map((p: any) => {
          return p;
        }),
  };
}

/** Collection of Billing Meters */
export interface _BillingMeterCollection {
  /** The BillingMeter items on this page */
  value: BillingMeter[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _billingMeterCollectionDeserializer(item: any): _BillingMeterCollection {
  return {
    value: billingMeterArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function billingMeterArrayDeserializer(result: Array<BillingMeter>): any[] {
  return result.map((item) => {
    return billingMeterDeserializer(item);
  });
}

/** App Service billing entity that contains information about meter which the Azure billing system utilizes to charge users for services. */
export interface BillingMeter extends ProxyOnlyResource {
  /** Meter GUID onboarded in Commerce */
  meterId?: string;
  /** Azure Location of billable resource */
  billingLocation?: string;
  /** Short Name from App Service Azure pricing Page */
  shortName?: string;
  /** Friendly name of the meter */
  friendlyName?: string;
  /** App Service ResourceType meter used for */
  resourceType?: string;
  /** App Service OS type meter used for */
  osType?: string;
  /** Meter Multiplier */
  multiplier?: number;
}

export function billingMeterDeserializer(item: any): BillingMeter {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _billingMeterPropertiesDeserializer(item["properties"])),
  };
}

/** BillingMeter resource specific properties */
export interface BillingMeterProperties {
  /** Meter GUID onboarded in Commerce */
  meterId?: string;
  /** Azure Location of billable resource */
  billingLocation?: string;
  /** Short Name from App Service Azure pricing Page */
  shortName?: string;
  /** Friendly name of the meter */
  friendlyName?: string;
  /** App Service ResourceType meter used for */
  resourceType?: string;
  /** App Service OS type meter used for */
  osType?: string;
  /** Meter Multiplier */
  multiplier?: number;
}

export function billingMeterPropertiesDeserializer(item: any): BillingMeterProperties {
  return {
    meterId: item["meterId"],
    billingLocation: item["billingLocation"],
    shortName: item["shortName"],
    friendlyName: item["friendlyName"],
    resourceType: item["resourceType"],
    osType: item["osType"],
    multiplier: item["multiplier"],
  };
}

/** Resource name availability request content. */
export interface ResourceNameAvailabilityRequest {
  /** Resource name to verify. */
  name: string;
  /** Resource type used for verification. */
  type: CheckNameResourceTypes;
  /** Is fully qualified domain name. */
  isFqdn?: boolean;
  /** Azure Resource Manager ID of the customer's selected Container Apps Environment on which to host the Function app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName} */
  environmentId?: string;
}

export function resourceNameAvailabilityRequestSerializer(
  item: ResourceNameAvailabilityRequest,
): any {
  return {
    name: item["name"],
    type: item["type"],
    isFqdn: item["isFqdn"],
    environmentId: item["environmentId"],
  };
}

/** Resource type used for verification. */
export enum KnownCheckNameResourceTypes {
  /** Site */
  Site = "Site",
  /** Slot */
  Slot = "Slot",
  /** HostingEnvironment */
  HostingEnvironment = "HostingEnvironment",
  /** PublishingUser */
  PublishingUser = "PublishingUser",
  /** Microsoft.Web/sites */
  MicrosoftWebSites = "Microsoft.Web/sites",
  /** Microsoft.Web/sites/slots */
  MicrosoftWebSitesSlots = "Microsoft.Web/sites/slots",
  /** Microsoft.Web/hostingEnvironments */
  MicrosoftWebHostingEnvironments = "Microsoft.Web/hostingEnvironments",
  /** Microsoft.Web/publishingUsers */
  MicrosoftWebPublishingUsers = "Microsoft.Web/publishingUsers",
}

/**
 * Resource type used for verification. \
 * {@link KnownCheckNameResourceTypes} can be used interchangeably with CheckNameResourceTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Site** \
 * **Slot** \
 * **HostingEnvironment** \
 * **PublishingUser** \
 * **Microsoft.Web\/sites** \
 * **Microsoft.Web\/sites\/slots** \
 * **Microsoft.Web\/hostingEnvironments** \
 * **Microsoft.Web\/publishingUsers**
 */
export type CheckNameResourceTypes = string;

/** Information regarding availability of a resource name. */
export interface ResourceNameAvailability {
  /** <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both. */
  nameAvailable?: boolean;
  /** <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable. */
  reason?: InAvailabilityReasonType;
  /** If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name. */
  message?: string;
}

export function resourceNameAvailabilityDeserializer(item: any): ResourceNameAvailability {
  return {
    nameAvailable: item["nameAvailable"],
    reason: item["reason"],
    message: item["message"],
  };
}

/** <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable. */
export enum KnownInAvailabilityReasonType {
  /** Invalid */
  Invalid = "Invalid",
  /** AlreadyExists */
  AlreadyExists = "AlreadyExists",
}

/**
 * <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable. \
 * {@link KnownInAvailabilityReasonType} can be used interchangeably with InAvailabilityReasonType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type InAvailabilityReasonType = string;

/** Collection of custom hostname sites */
export interface _CustomHostnameSitesCollection {
  /** The CustomHostnameSites items on this page */
  value: CustomHostnameSites[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _customHostnameSitesCollectionDeserializer(
  item: any,
): _CustomHostnameSitesCollection {
  return {
    value: customHostnameSitesArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function customHostnameSitesArrayDeserializer(result: Array<CustomHostnameSites>): any[] {
  return result.map((item) => {
    return customHostnameSitesDeserializer(item);
  });
}

/** A hostname and its assigned sites */
export interface CustomHostnameSites extends ProxyOnlyResource {
  customHostname?: string;
  region?: string;
}

export function customHostnameSitesDeserializer(item: any): CustomHostnameSites {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _customHostnameSitesPropertiesDeserializer(item["properties"])),
  };
}

/** CustomHostnameSites resource specific properties */
export interface CustomHostnameSitesProperties {
  customHostname?: string;
  region?: string;
}

export function customHostnameSitesPropertiesDeserializer(
  item: any,
): CustomHostnameSitesProperties {
  return {
    customHostname: item["customHostname"],
    region: item["region"],
  };
}

/** Collection of geographical regions. */
export interface _GeoRegionCollection {
  /** The GeoRegion items on this page */
  value: GeoRegion[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _geoRegionCollectionDeserializer(item: any): _GeoRegionCollection {
  return {
    value: geoRegionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** model interface DnlResourceNameAvailabilityRequest */
export interface DnlResourceNameAvailabilityRequest {
  /** Resource group name */
  resourceGroupName?: string;
  /**
   * Indicates the endpoint name reuse scope.The default value is TenantReuse.
   * Supported values are TenantReuse, SubscriptionReuse, ResourceGroupReuse, NoReuse
   */
  autoGeneratedDomainNameLabelScope?: string;
  /** Resource name to verify. */
  name: string;
  /** Resource type used for verification. */
  type: CheckNameResourceTypes;
}

export function dnlResourceNameAvailabilityRequestSerializer(
  item: DnlResourceNameAvailabilityRequest,
): any {
  return {
    resourceGroupName: item["resourceGroupName"],
    autoGeneratedDomainNameLabelScope: item["autoGeneratedDomainNameLabelScope"],
    name: item["name"],
    type: item["type"],
  };
}

/** Information regarding availability of a resource name for DNL apps with regionalized default hostnames. */
export interface DnlResourceNameAvailability {
  hostName?: string;
  /** <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both. */
  nameAvailable?: boolean;
  /** <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable. */
  reason?: InAvailabilityReasonType;
  /** If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name. */
  message?: string;
}

export function dnlResourceNameAvailabilityDeserializer(item: any): DnlResourceNameAvailability {
  return {
    hostName: item["hostName"],
    nameAvailable: item["nameAvailable"],
    reason: item["reason"],
    message: item["message"],
  };
}

/** Collection of premier add-on offers. */
export interface _PremierAddOnOfferCollection {
  /** The PremierAddOnOffer items on this page */
  value: PremierAddOnOffer[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _premierAddOnOfferCollectionDeserializer(item: any): _PremierAddOnOfferCollection {
  return {
    value: premierAddOnOfferArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function premierAddOnOfferArrayDeserializer(result: Array<PremierAddOnOffer>): any[] {
  return result.map((item) => {
    return premierAddOnOfferDeserializer(item);
  });
}

/** Premier add-on offer. */
export interface PremierAddOnOffer extends ProxyOnlyResource {
  /** Premier add on SKU. */
  sku?: string;
  /** Premier add on offer Product. */
  product?: string;
  /** Premier add on offer Vendor. */
  vendor?: string;
  /** <code>true</code> if promotion code is required; otherwise, <code>false</code>. */
  promoCodeRequired?: boolean;
  /** Premier add on offer Quota. */
  quota?: number;
  /** App Service plans this offer is restricted to. */
  webHostingPlanRestrictions?: AppServicePlanRestrictions;
  /** Privacy policy URL. */
  privacyPolicyUrl?: string;
  /** Legal terms URL. */
  legalTermsUrl?: string;
  /** Marketplace publisher. */
  marketplacePublisher?: string;
  /** Marketplace offer. */
  marketplaceOffer?: string;
}

export function premierAddOnOfferDeserializer(item: any): PremierAddOnOffer {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _premierAddOnOfferPropertiesDeserializer(item["properties"])),
  };
}

/** PremierAddOnOffer resource specific properties */
export interface PremierAddOnOfferProperties {
  /** Premier add on SKU. */
  sku?: string;
  /** Premier add on offer Product. */
  product?: string;
  /** Premier add on offer Vendor. */
  vendor?: string;
  /** <code>true</code> if promotion code is required; otherwise, <code>false</code>. */
  promoCodeRequired?: boolean;
  /** Premier add on offer Quota. */
  quota?: number;
  /** App Service plans this offer is restricted to. */
  webHostingPlanRestrictions?: AppServicePlanRestrictions;
  /** Privacy policy URL. */
  privacyPolicyUrl?: string;
  /** Legal terms URL. */
  legalTermsUrl?: string;
  /** Marketplace publisher. */
  marketplacePublisher?: string;
  /** Marketplace offer. */
  marketplaceOffer?: string;
}

export function premierAddOnOfferPropertiesDeserializer(item: any): PremierAddOnOfferProperties {
  return {
    sku: item["sku"],
    product: item["product"],
    vendor: item["vendor"],
    promoCodeRequired: item["promoCodeRequired"],
    quota: item["quota"],
    webHostingPlanRestrictions: item["webHostingPlanRestrictions"],
    privacyPolicyUrl: item["privacyPolicyUrl"],
    legalTermsUrl: item["legalTermsUrl"],
    marketplacePublisher: item["marketplacePublisher"],
    marketplaceOffer: item["marketplaceOffer"],
  };
}

/** App Service plans this offer is restricted to. */
export type AppServicePlanRestrictions =
  | "None"
  | "Free"
  | "Shared"
  | "Basic"
  | "Standard"
  | "Premium";

/** Collection of SKU information. */
export interface SkuInfos {
  /** Resource type that this SKU applies to. */
  resourceType?: string;
  /** List of SKUs the subscription is able to use. */
  skus?: GlobalCsmSkuDescription[];
}

export function skuInfosDeserializer(item: any): SkuInfos {
  return {
    resourceType: item["resourceType"],
    skus: !item["skus"] ? item["skus"] : globalCsmSkuDescriptionArrayDeserializer(item["skus"]),
  };
}

export function globalCsmSkuDescriptionArrayDeserializer(
  result: Array<GlobalCsmSkuDescription>,
): any[] {
  return result.map((item) => {
    return globalCsmSkuDescriptionDeserializer(item);
  });
}

/** A Global SKU Description. */
export interface GlobalCsmSkuDescription {
  /** Name of the resource SKU. */
  name?: string;
  /** Service Tier of the resource SKU. */
  tier?: string;
  /** Size specifier of the resource SKU. */
  size?: string;
  /** Family code of the resource SKU. */
  family?: string;
  /** Min, max, and default scale values of the SKU. */
  capacity?: SkuCapacity;
  /** Locations of the SKU. */
  locations?: string[];
  /** Capabilities of the SKU, e.g., is traffic manager enabled? */
  capabilities?: Capability[];
}

export function globalCsmSkuDescriptionDeserializer(item: any): GlobalCsmSkuDescription {
  return {
    name: item["name"],
    tier: item["tier"],
    size: item["size"],
    family: item["family"],
    capacity: !item["capacity"] ? item["capacity"] : skuCapacityDeserializer(item["capacity"]),
    locations: !item["locations"]
      ? item["locations"]
      : item["locations"].map((p: any) => {
          return p;
        }),
    capabilities: !item["capabilities"]
      ? item["capabilities"]
      : capabilityArrayDeserializer(item["capabilities"]),
  };
}

/** Description of the App Service plan scale options. */
export interface SkuCapacity {
  /** Minimum number of workers for this App Service plan SKU. */
  minimum?: number;
  /** Maximum number of workers for this App Service plan SKU. */
  maximum?: number;
  /** Maximum number of Elastic workers for this App Service plan SKU. */
  elasticMaximum?: number;
  /** Default number of workers for this App Service plan SKU. */
  default?: number;
  /** Available scale configurations for an App Service plan. */
  scaleType?: string;
}

export function skuCapacityDeserializer(item: any): SkuCapacity {
  return {
    minimum: item["minimum"],
    maximum: item["maximum"],
    elasticMaximum: item["elasticMaximum"],
    default: item["default"],
    scaleType: item["scaleType"],
  };
}

export function capabilityArrayDeserializer(result: Array<Capability>): any[] {
  return result.map((item) => {
    return capabilityDeserializer(item);
  });
}

/** Describes the capabilities/features allowed for a specific SKU. */
export interface Capability {
  /** Name of the SKU capability. */
  name?: string;
  /** Value of the SKU capability. */
  value?: string;
  /** Reason of the SKU capability. */
  reason?: string;
}

export function capabilityDeserializer(item: any): Capability {
  return {
    name: item["name"],
    value: item["value"],
    reason: item["reason"],
  };
}

/** The required set of inputs to validate a VNET */
export interface VnetParameters extends ProxyOnlyResource {
  /** The Resource Group of the VNET to be validated */
  vnetResourceGroup?: string;
  /** The name of the VNET to be validated */
  vnetName?: string;
  /** The subnet name to be validated */
  vnetSubnetName?: string;
  /** The ARM Resource ID of the subnet to validate */
  subnetResourceId?: string;
}

export function vnetParametersSerializer(item: VnetParameters): any {
  return {
    kind: item["kind"],
    properties: areAllPropsUndefined(item, [
      "vnetResourceGroup",
      "vnetName",
      "vnetSubnetName",
      "subnetResourceId",
    ])
      ? undefined
      : _vnetParametersPropertiesSerializer(item),
  };
}

/** VnetParameters resource specific properties */
export interface VnetParametersProperties {
  /** The Resource Group of the VNET to be validated */
  vnetResourceGroup?: string;
  /** The name of the VNET to be validated */
  vnetName?: string;
  /** The subnet name to be validated */
  vnetSubnetName?: string;
  /** The ARM Resource ID of the subnet to validate */
  subnetResourceId?: string;
}

export function vnetParametersPropertiesSerializer(item: VnetParametersProperties): any {
  return {
    vnetResourceGroup: item["vnetResourceGroup"],
    vnetName: item["vnetName"],
    vnetSubnetName: item["vnetSubnetName"],
    subnetResourceId: item["subnetResourceId"],
  };
}

/** A class that describes the reason for a validation failure. */
export interface VnetValidationFailureDetails extends ProxyOnlyResource {
  /** Text describing the validation outcome. */
  message?: string;
  /** A flag describing whether or not validation failed. */
  failed?: boolean;
  /** A list of tests that failed in the validation. */
  failedTests?: VnetValidationTestFailure[];
  /** A list of warnings generated during validation. */
  warnings?: VnetValidationTestFailure[];
}

export function vnetValidationFailureDetailsDeserializer(item: any): VnetValidationFailureDetails {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _vnetValidationFailureDetailsPropertiesDeserializer(item["properties"])),
  };
}

/** VnetValidationFailureDetails resource specific properties */
export interface VnetValidationFailureDetailsProperties {
  /** Text describing the validation outcome. */
  message?: string;
  /** A flag describing whether or not validation failed. */
  failed?: boolean;
  /** A list of tests that failed in the validation. */
  failedTests?: VnetValidationTestFailure[];
  /** A list of warnings generated during validation. */
  warnings?: VnetValidationTestFailure[];
}

export function vnetValidationFailureDetailsPropertiesDeserializer(
  item: any,
): VnetValidationFailureDetailsProperties {
  return {
    message: item["message"],
    failed: item["failed"],
    failedTests: !item["failedTests"]
      ? item["failedTests"]
      : vnetValidationTestFailureArrayDeserializer(item["failedTests"]),
    warnings: !item["warnings"]
      ? item["warnings"]
      : vnetValidationTestFailureArrayDeserializer(item["warnings"]),
  };
}

export function vnetValidationTestFailureArrayDeserializer(
  result: Array<VnetValidationTestFailure>,
): any[] {
  return result.map((item) => {
    return vnetValidationTestFailureDeserializer(item);
  });
}

/** A class that describes a test that failed during NSG and UDR validation. */
export interface VnetValidationTestFailure extends ProxyOnlyResource {
  /** The name of the test that failed. */
  testName?: string;
  /** The details of what caused the failure, e.g. the blocking rule name, etc. */
  details?: string;
}

export function vnetValidationTestFailureDeserializer(item: any): VnetValidationTestFailure {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _vnetValidationTestFailurePropertiesDeserializer(item["properties"])),
  };
}

/** VnetValidationTestFailure resource specific properties */
export interface VnetValidationTestFailureProperties {
  /** The name of the test that failed. */
  testName?: string;
  /** The details of what caused the failure, e.g. the blocking rule name, etc. */
  details?: string;
}

export function vnetValidationTestFailurePropertiesDeserializer(
  item: any,
): VnetValidationTestFailureProperties {
  return {
    testName: item["testName"],
    details: item["details"],
  };
}

/** Collection of Azure resource manager operation metadata. */
export interface _CsmOperationCollection {
  /** Collection of resources. */
  value: CsmOperationDescription[];
  /** Link to next page of resources. */
  readonly nextLink?: string;
}

export function _csmOperationCollectionDeserializer(item: any): _CsmOperationCollection {
  return {
    value: csmOperationDescriptionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function csmOperationDescriptionArrayDeserializer(
  result: Array<CsmOperationDescription>,
): any[] {
  return result.map((item) => {
    return csmOperationDescriptionDeserializer(item);
  });
}

/** Description of an operation available for Microsoft.Web resource provider. */
export interface CsmOperationDescription {
  name?: string;
  isDataAction?: boolean;
  /** Meta data about operation used for display in portal. */
  display?: CsmOperationDisplay;
  origin?: string;
  /** Properties available for a Microsoft.Web resource provider operation. */
  properties?: CsmOperationDescriptionProperties;
}

export function csmOperationDescriptionDeserializer(item: any): CsmOperationDescription {
  return {
    name: item["name"],
    isDataAction: item["isDataAction"],
    display: !item["display"] ? item["display"] : csmOperationDisplayDeserializer(item["display"]),
    origin: item["origin"],
    properties: !item["properties"]
      ? item["properties"]
      : csmOperationDescriptionPropertiesDeserializer(item["properties"]),
  };
}

/** Meta data about operation used for display in portal. */
export interface CsmOperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

export function csmOperationDisplayDeserializer(item: any): CsmOperationDisplay {
  return {
    provider: item["provider"],
    resource: item["resource"],
    operation: item["operation"],
    description: item["description"],
  };
}

/** Properties available for a Microsoft.Web resource provider operation. */
export interface CsmOperationDescriptionProperties {
  /** Resource metrics service provided by Microsoft.Insights resource provider. */
  serviceSpecification?: ServiceSpecification;
}

export function csmOperationDescriptionPropertiesDeserializer(
  item: any,
): CsmOperationDescriptionProperties {
  return {
    serviceSpecification: !item["serviceSpecification"]
      ? item["serviceSpecification"]
      : serviceSpecificationDeserializer(item["serviceSpecification"]),
  };
}

/** Resource metrics service provided by Microsoft.Insights resource provider. */
export interface ServiceSpecification {
  metricSpecifications?: MetricSpecification[];
  logSpecifications?: LogSpecification[];
}

export function serviceSpecificationDeserializer(item: any): ServiceSpecification {
  return {
    metricSpecifications: !item["metricSpecifications"]
      ? item["metricSpecifications"]
      : metricSpecificationArrayDeserializer(item["metricSpecifications"]),
    logSpecifications: !item["logSpecifications"]
      ? item["logSpecifications"]
      : logSpecificationArrayDeserializer(item["logSpecifications"]),
  };
}

export function metricSpecificationArrayDeserializer(result: Array<MetricSpecification>): any[] {
  return result.map((item) => {
    return metricSpecificationDeserializer(item);
  });
}

/** Definition of a single resource metric. */
export interface MetricSpecification {
  name?: string;
  displayName?: string;
  displayDescription?: string;
  unit?: string;
  aggregationType?: string;
  supportsInstanceLevelAggregation?: boolean;
  enableRegionalMdmAccount?: boolean;
  sourceMdmAccount?: string;
  sourceMdmNamespace?: string;
  metricFilterPattern?: string;
  fillGapWithZero?: boolean;
  isInternal?: boolean;
  dimensions?: Dimension[];
  category?: string;
  availabilities?: MetricAvailability[];
  supportedTimeGrainTypes?: string[];
  supportedAggregationTypes?: string[];
}

export function metricSpecificationDeserializer(item: any): MetricSpecification {
  return {
    name: item["name"],
    displayName: item["displayName"],
    displayDescription: item["displayDescription"],
    unit: item["unit"],
    aggregationType: item["aggregationType"],
    supportsInstanceLevelAggregation: item["supportsInstanceLevelAggregation"],
    enableRegionalMdmAccount: item["enableRegionalMdmAccount"],
    sourceMdmAccount: item["sourceMdmAccount"],
    sourceMdmNamespace: item["sourceMdmNamespace"],
    metricFilterPattern: item["metricFilterPattern"],
    fillGapWithZero: item["fillGapWithZero"],
    isInternal: item["isInternal"],
    dimensions: !item["dimensions"]
      ? item["dimensions"]
      : dimensionArrayDeserializer(item["dimensions"]),
    category: item["category"],
    availabilities: !item["availabilities"]
      ? item["availabilities"]
      : metricAvailabilityArrayDeserializer(item["availabilities"]),
    supportedTimeGrainTypes: !item["supportedTimeGrainTypes"]
      ? item["supportedTimeGrainTypes"]
      : item["supportedTimeGrainTypes"].map((p: any) => {
          return p;
        }),
    supportedAggregationTypes: !item["supportedAggregationTypes"]
      ? item["supportedAggregationTypes"]
      : item["supportedAggregationTypes"].map((p: any) => {
          return p;
        }),
  };
}

export function dimensionArrayDeserializer(result: Array<Dimension>): any[] {
  return result.map((item) => {
    return dimensionDeserializer(item);
  });
}

/**
 * Dimension of a resource metric. For e.g. instance specific HTTP requests for a web app,
 * where instance name is dimension of the metric HTTP request
 */
export interface Dimension {
  name?: string;
  displayName?: string;
  internalName?: string;
  toBeExportedForShoebox?: boolean;
}

export function dimensionDeserializer(item: any): Dimension {
  return {
    name: item["name"],
    displayName: item["displayName"],
    internalName: item["internalName"],
    toBeExportedForShoebox: item["toBeExportedForShoebox"],
  };
}

export function metricAvailabilityArrayDeserializer(result: Array<MetricAvailability>): any[] {
  return result.map((item) => {
    return metricAvailabilityDeserializer(item);
  });
}

/** Retention policy of a resource metric. */
export interface MetricAvailability {
  timeGrain?: string;
  blobDuration?: string;
}

export function metricAvailabilityDeserializer(item: any): MetricAvailability {
  return {
    timeGrain: item["timeGrain"],
    blobDuration: item["blobDuration"],
  };
}

export function logSpecificationArrayDeserializer(result: Array<LogSpecification>): any[] {
  return result.map((item) => {
    return logSpecificationDeserializer(item);
  });
}

/** Log Definition of a single resource metric. */
export interface LogSpecification {
  name?: string;
  displayName?: string;
  blobDuration?: string;
  logFilterPattern?: string;
}

export function logSpecificationDeserializer(item: any): LogSpecification {
  return {
    name: item["name"],
    displayName: item["displayName"],
    blobDuration: item["blobDuration"],
    logFilterPattern: item["logFilterPattern"],
  };
}

/** Paged collection of Site items */
export interface _WebAppCollection {
  /** The Site items on this page */
  value: Site[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _webAppCollectionDeserializer(item: any): _WebAppCollection {
  return {
    value: siteArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function siteArrayDeserializer(result: Array<Site>): any[] {
  return result.map((item) => {
    return siteDeserializer(item);
  });
}

/** Collection of App Service apps. */
export interface Site {
  properties: SiteProperties;
  name: string;
  identity: ManagedServiceIdentity;
  extendedLocation: ExtendedLocation;
  kind: string;
  tags: Record<string, string>;
  location: string;
  id: string;
  type: string;
  systemData: SystemData;
}

export function siteDeserializer(item: any): Site {
  return {
    properties: sitePropertiesDeserializer(item["properties"]),
    name: item["name"],
    identity: managedServiceIdentityDeserializer(item["identity"]),
    extendedLocation: extendedLocationDeserializer(item["extendedLocation"]),
    kind: item["kind"],
    tags: Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    type: item["type"],
    systemData: systemDataDeserializer(item["systemData"]),
  };
}

/** Site resource specific properties */
export interface SiteProperties {
  /** Current state of the app. */
  readonly state?: string;
  /** Hostnames associated with the app. */
  readonly hostNames?: string[];
  /** Name of the repository site. */
  readonly repositorySiteName?: string;
  /** State indicating whether the app has exceeded its quota usage. Read-only. */
  readonly usageState?: UsageState;
  /** <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline). */
  enabled?: boolean;
  /**
   * Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
   * the app is not served on those hostnames.
   */
  readonly enabledHostNames?: string[];
  /** Management information availability state for the app. */
  readonly availabilityState?: SiteAvailabilityState;
  /** Hostname SSL states are used to manage the SSL bindings for app's hostnames. */
  hostNameSslStates?: HostNameSslState[];
  /** Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}". */
  serverFarmId?: string;
  /** <code>true</code> if reserved; otherwise, <code>false</code>. */
  reserved?: boolean;
  /** Obsolete: Hyper-V sandbox. */
  isXenon?: boolean;
  /** Hyper-V sandbox. */
  hyperV?: boolean;
  /** Last time the app was modified, in UTC. Read-only. */
  readonly lastModifiedTimeUtc?: Date;
  /** Property to configure various DNS related settings for a site. */
  dnsConfiguration?: SiteDnsConfig;
  /** Property to configure various outbound traffic routing options over virtual network for a site */
  outboundVnetRouting?: OutboundVnetRouting;
  /** Configuration of an App Service app. This property is not returned in response to normal create and read requests since it may contain sensitive information. */
  siteConfig?: SiteConfig;
  /** Configuration specific of the Azure Function app. */
  functionAppConfig?: FunctionAppConfig;
  /** Dapr configuration of the app. */
  daprConfig?: DaprConfig;
  /** Workload profile name for function app to execute on. */
  workloadProfileName?: string;
  /** Function app resource requirements. */
  resourceConfig?: ResourceConfig;
  /** Azure Traffic Manager hostnames associated with the app. Read-only. */
  readonly trafficManagerHostNames?: string[];
  /** <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>. */
  scmSiteAlsoStopped?: boolean;
  /** Specifies which deployment slot this app will swap into. Read-only. */
  readonly targetSwapSlot?: string;
  /** App Service Environment to use for the app. */
  hostingEnvironmentProfile?: HostingEnvironmentProfile;
  /** <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>. */
  clientAffinityEnabled?: boolean;
  /** <code>true</code> to enable client affinity partitioning using CHIPS cookies, this will add the <code>partitioned</code> property to the affinity cookies; <code>false</code> to stop sending partitioned affinity cookies. Default is <code>false</code>. */
  clientAffinityPartitioningEnabled?: boolean;
  /** <code>true</code> to override client affinity cookie domain with X-Forwarded-Host request header. <code>false</code> to use default domain. Default is <code>false</code>. */
  clientAffinityProxyEnabled?: boolean;
  /** <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>. */
  clientCertEnabled?: boolean;
  /**
   * This composes with ClientCertEnabled setting.
   * - ClientCertEnabled: false means ClientCert is ignored.
   * - ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.
   * - ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted.
   */
  clientCertMode?: ClientCertMode;
  /** client certificate authentication comma-separated exclusion paths */
  clientCertExclusionPaths?: string;
  /** Specifies the IP mode of the app. */
  ipMode?: IPMode;
  /** Whether to use end to end encryption between the FrontEnd and the Worker */
  endToEndEncryptionEnabled?: boolean;
  /** Whether to enable ssh access. */
  sshEnabled?: boolean;
  /**
   * <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
   * If <code>true</code>, the app is only accessible via API management process.
   */
  hostNamesDisabled?: boolean;
  /** Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification. */
  customDomainVerificationId?: string;
  /** List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only. */
  readonly outboundIpAddresses?: string;
  /** List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants except dataComponent. Read-only. */
  readonly possibleOutboundIpAddresses?: string;
  /** Size of the function container. */
  containerSize?: number;
  /** Maximum allowed daily memory-time quota (applicable on dynamic apps only). */
  dailyMemoryTimeQuota?: number;
  /** App suspended till in case memory-time quota is exceeded. */
  readonly suspendedTill?: Date;
  /**
   * Maximum number of workers.
   * This only applies to Functions container.
   */
  readonly maxNumberOfWorkers?: number;
  /** If specified during app creation, the app is cloned from a source app. */
  cloningInfo?: CloningInfo;
  /** Name of the resource group the app belongs to. Read-only. */
  readonly resourceGroup?: string;
  /** <code>true</code> if the app is a default container; otherwise, <code>false</code>. */
  readonly isDefaultContainer?: boolean;
  /** Default hostname of the app. Read-only. */
  readonly defaultHostName?: string;
  /** Status of the last deployment slot swap operation. */
  readonly slotSwapStatus?: SlotSwapStatus;
  /**
   * HttpsOnly: configures a web site to accept only https requests. Issues redirect for
   * http requests
   */
  httpsOnly?: boolean;
  /** Site redundancy mode */
  redundancyMode?: RedundancyMode;
  /** Specifies an operation id if this site has a pending operation. */
  readonly inProgressOperationId?: string;
  /** Property to allow or block all public traffic. Allowed Values: 'Enabled', 'Disabled' or an empty string. */
  publicNetworkAccess?: string;
  /** Checks if Customer provided storage account is required */
  storageAccountRequired?: boolean;
  /** Identity to use for Key Vault Reference authentication. */
  keyVaultReferenceIdentity?: string;
  /** Specifies the scope of uniqueness for the default hostname during resource creation */
  autoGeneratedDomainNameLabelScope?: AutoGeneratedDomainNameLabelScope;
  /**
   * Azure Resource Manager ID of the Virtual network and subnet to be joined by Regional VNET Integration.
   * This must be of the form /subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}
   */
  virtualNetworkSubnetId?: string;
  /** Azure Resource Manager ID of the customer's selected Managed Environment on which to host this app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName} */
  managedEnvironmentId?: string;
  /** Current SKU of application based on associated App Service Plan. Some valid SKU values are Free, Shared, Basic, Dynamic, FlexConsumption, Standard, Premium, PremiumV2, PremiumV3, Isolated, IsolatedV2 */
  readonly sku?: string;
}

export function sitePropertiesDeserializer(item: any): SiteProperties {
  return {
    state: item["state"],
    hostNames: !item["hostNames"]
      ? item["hostNames"]
      : item["hostNames"].map((p: any) => {
          return p;
        }),
    repositorySiteName: item["repositorySiteName"],
    usageState: item["usageState"],
    enabled: item["enabled"],
    enabledHostNames: !item["enabledHostNames"]
      ? item["enabledHostNames"]
      : item["enabledHostNames"].map((p: any) => {
          return p;
        }),
    availabilityState: item["availabilityState"],
    hostNameSslStates: !item["hostNameSslStates"]
      ? item["hostNameSslStates"]
      : hostNameSslStateArrayDeserializer(item["hostNameSslStates"]),
    serverFarmId: item["serverFarmId"],
    reserved: item["reserved"],
    isXenon: item["isXenon"],
    hyperV: item["hyperV"],
    lastModifiedTimeUtc: !item["lastModifiedTimeUtc"]
      ? item["lastModifiedTimeUtc"]
      : new Date(item["lastModifiedTimeUtc"]),
    dnsConfiguration: !item["dnsConfiguration"]
      ? item["dnsConfiguration"]
      : siteDnsConfigDeserializer(item["dnsConfiguration"]),
    outboundVnetRouting: !item["outboundVnetRouting"]
      ? item["outboundVnetRouting"]
      : outboundVnetRoutingDeserializer(item["outboundVnetRouting"]),
    siteConfig: !item["siteConfig"]
      ? item["siteConfig"]
      : siteConfigDeserializer(item["siteConfig"]),
    functionAppConfig: !item["functionAppConfig"]
      ? item["functionAppConfig"]
      : functionAppConfigDeserializer(item["functionAppConfig"]),
    daprConfig: !item["daprConfig"]
      ? item["daprConfig"]
      : daprConfigDeserializer(item["daprConfig"]),
    workloadProfileName: item["workloadProfileName"],
    resourceConfig: !item["resourceConfig"]
      ? item["resourceConfig"]
      : resourceConfigDeserializer(item["resourceConfig"]),
    trafficManagerHostNames: !item["trafficManagerHostNames"]
      ? item["trafficManagerHostNames"]
      : item["trafficManagerHostNames"].map((p: any) => {
          return p;
        }),
    scmSiteAlsoStopped: item["scmSiteAlsoStopped"],
    targetSwapSlot: item["targetSwapSlot"],
    hostingEnvironmentProfile: !item["hostingEnvironmentProfile"]
      ? item["hostingEnvironmentProfile"]
      : hostingEnvironmentProfileDeserializer(item["hostingEnvironmentProfile"]),
    clientAffinityEnabled: item["clientAffinityEnabled"],
    clientAffinityPartitioningEnabled: item["clientAffinityPartitioningEnabled"],
    clientAffinityProxyEnabled: item["clientAffinityProxyEnabled"],
    clientCertEnabled: item["clientCertEnabled"],
    clientCertMode: item["clientCertMode"],
    clientCertExclusionPaths: item["clientCertExclusionPaths"],
    ipMode: item["ipMode"],
    endToEndEncryptionEnabled: item["endToEndEncryptionEnabled"],
    sshEnabled: item["sshEnabled"],
    hostNamesDisabled: item["hostNamesDisabled"],
    customDomainVerificationId: item["customDomainVerificationId"],
    outboundIpAddresses: item["outboundIpAddresses"],
    possibleOutboundIpAddresses: item["possibleOutboundIpAddresses"],
    containerSize: item["containerSize"],
    dailyMemoryTimeQuota: item["dailyMemoryTimeQuota"],
    suspendedTill: !item["suspendedTill"] ? item["suspendedTill"] : new Date(item["suspendedTill"]),
    maxNumberOfWorkers: item["maxNumberOfWorkers"],
    cloningInfo: !item["cloningInfo"]
      ? item["cloningInfo"]
      : cloningInfoDeserializer(item["cloningInfo"]),
    resourceGroup: item["resourceGroup"],
    isDefaultContainer: item["isDefaultContainer"],
    defaultHostName: item["defaultHostName"],
    slotSwapStatus: !item["slotSwapStatus"]
      ? item["slotSwapStatus"]
      : slotSwapStatusDeserializer(item["slotSwapStatus"]),
    httpsOnly: item["httpsOnly"],
    redundancyMode: item["redundancyMode"],
    inProgressOperationId: item["inProgressOperationId"],
    publicNetworkAccess: item["publicNetworkAccess"],
    storageAccountRequired: item["storageAccountRequired"],
    keyVaultReferenceIdentity: item["keyVaultReferenceIdentity"],
    autoGeneratedDomainNameLabelScope: item["autoGeneratedDomainNameLabelScope"],
    virtualNetworkSubnetId: item["virtualNetworkSubnetId"],
    managedEnvironmentId: item["managedEnvironmentId"],
    sku: item["sku"],
  };
}

/** State indicating whether the app has exceeded its quota usage. Read-only. */
export type UsageState = "Normal" | "Exceeded";
/** Management information availability state for the app. */
export type SiteAvailabilityState = "Normal" | "Limited" | "DisasterRecoveryMode";

export function hostNameSslStateArrayDeserializer(result: Array<HostNameSslState>): any[] {
  return result.map((item) => {
    return hostNameSslStateDeserializer(item);
  });
}

/** SSL-enabled hostname. */
export interface HostNameSslState {
  /** Hostname. */
  name?: string;
  /** SSL type. */
  sslState?: SslState;
  /** Virtual IP address assigned to the hostname if IP based SSL is enabled. */
  virtualIP?: string;
  /** SSL certificate thumbprint. */
  thumbprint?: string;
  /** Set to <code>true</code> to update existing hostname. */
  toUpdate?: boolean;
  /** Indicates whether the hostname is a standard or repository hostname. */
  hostType?: HostType;
}

export function hostNameSslStateDeserializer(item: any): HostNameSslState {
  return {
    name: item["name"],
    sslState: item["sslState"],
    virtualIP: item["virtualIP"],
    thumbprint: item["thumbprint"],
    toUpdate: item["toUpdate"],
    hostType: item["hostType"],
  };
}

/** SSL type */
export type SslState = "Disabled" | "SniEnabled" | "IpBasedEnabled";
/** Indicates whether the hostname is a standard or repository hostname. */
export type HostType = "Standard" | "Repository";

/** model interface SiteDnsConfig */
export interface SiteDnsConfig {
  /** List of custom DNS servers to be used by an app for lookups. Maximum 5 dns servers can be set. */
  dnsServers?: string[];
  /** Alternate DNS server to be used by apps. This property replicates the WEBSITE_DNS_ALT_SERVER app setting. */
  dnsAltServer?: string;
  /** Timeout for a single dns lookup in seconds. Allowed range: 1-30. Default is 3. */
  dnsRetryAttemptTimeout?: number;
  /** Total number of retries for dns lookup. Allowed range: 1-5. Default is 3. */
  dnsRetryAttemptCount?: number;
  /** Custom time for DNS to be cached in seconds. Allowed range: 0-60. Default is 30 seconds. 0 means caching disabled. */
  dnsMaxCacheTimeout?: number;
  /** Indicates that sites using Virtual network custom DNS servers are still sorting the list of DNS servers. Read-Only. */
  readonly dnsLegacySortOrder?: boolean;
}

export function siteDnsConfigDeserializer(item: any): SiteDnsConfig {
  return {
    dnsServers: !item["dnsServers"]
      ? item["dnsServers"]
      : item["dnsServers"].map((p: any) => {
          return p;
        }),
    dnsAltServer: item["dnsAltServer"],
    dnsRetryAttemptTimeout: item["dnsRetryAttemptTimeout"],
    dnsRetryAttemptCount: item["dnsRetryAttemptCount"],
    dnsMaxCacheTimeout: item["dnsMaxCacheTimeout"],
    dnsLegacySortOrder: item["dnsLegacySortOrder"],
  };
}

/** Outbound traffic options over virtual network. */
export interface OutboundVnetRouting {
  /** Enables all other routing options defined in OutboundVnetRouting if this setting is set to true. */
  allTraffic?: boolean;
  /** This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. Previously called VnetRouteAllEnabled. */
  applicationTraffic?: boolean;
  /** Enables accessing content over virtual network. Previously called VnetContentShareEnabled */
  contentShareTraffic?: boolean;
  /** Enables pulling image over Virtual Network. Previously called VnetImagePullEnabled. */
  imagePullTraffic?: boolean;
  /** Enables Backup and Restore operations over virtual network. Previously called VnetBackupRestoreEnabled */
  backupRestoreTraffic?: boolean;
}

export function outboundVnetRoutingDeserializer(item: any): OutboundVnetRouting {
  return {
    allTraffic: item["allTraffic"],
    applicationTraffic: item["applicationTraffic"],
    contentShareTraffic: item["contentShareTraffic"],
    imagePullTraffic: item["imagePullTraffic"],
    backupRestoreTraffic: item["backupRestoreTraffic"],
  };
}

/** Configuration of an App Service app. */
export interface SiteConfig {
  /** Number of workers. */
  numberOfWorkers?: number;
  /** Default documents. */
  defaultDocuments?: string[];
  /** .NET Framework version. */
  netFrameworkVersion?: string;
  /** Version of PHP. */
  phpVersion?: string;
  /** Version of Python. */
  pythonVersion?: string;
  /** Version of Node.js. */
  nodeVersion?: string;
  /** Version of PowerShell. */
  powerShellVersion?: string;
  /** Linux App Framework and version */
  linuxFxVersion?: string;
  /** Xenon App Framework and version */
  windowsFxVersion?: string;
  /** <code>true</code> if request tracing is enabled; otherwise, <code>false</code>. */
  requestTracingEnabled?: boolean;
  /** Request tracing expiration time. */
  requestTracingExpirationTime?: Date;
  /** <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>. */
  remoteDebuggingEnabled?: boolean;
  /** Remote debugging version. */
  remoteDebuggingVersion?: string;
  /** <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>. */
  httpLoggingEnabled?: boolean;
  /** Flag to use Managed Identity Creds for ACR pull */
  acrUseManagedIdentityCreds?: boolean;
  /** If using user managed identity, the user managed identity ClientId */
  acrUserManagedIdentityID?: string;
  /** HTTP logs directory size limit. */
  logsDirectorySizeLimit?: number;
  /** <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>. */
  detailedErrorLoggingEnabled?: boolean;
  /** Publishing user name. */
  publishingUsername?: string;
  /** Application settings. This property is not returned in response to normal create and read requests since it may contain sensitive information. */
  appSettings?: NameValuePair[];
  /** Application metadata. This property cannot be retrieved, since it may contain secrets. */
  metadata?: NameValuePair[];
  /** Connection strings. This property is not returned in response to normal create and read requests since it may contain sensitive information. */
  connectionStrings?: ConnStringInfo[];
  /** Site MachineKey. */
  readonly machineKey?: SiteMachineKey;
  /** Handler mappings. */
  handlerMappings?: HandlerMapping[];
  /** Document root. */
  documentRoot?: string;
  /** SCM type. */
  scmType?: ScmType;
  /** <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>. */
  use32BitWorkerProcess?: boolean;
  /** <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>. */
  webSocketsEnabled?: boolean;
  /** <code>true</code> if Always On is enabled; otherwise, <code>false</code>. */
  alwaysOn?: boolean;
  /** Java version. */
  javaVersion?: string;
  /** Java container. */
  javaContainer?: string;
  /** Java container version. */
  javaContainerVersion?: string;
  /** App command line to launch. */
  appCommandLine?: string;
  /** Managed pipeline mode. */
  managedPipelineMode?: ManagedPipelineMode;
  /** Virtual applications. */
  virtualApplications?: VirtualApplication[];
  /** Site load balancing. */
  loadBalancing?: SiteLoadBalancing;
  /** This is work around for polymorphic types. */
  experiments?: Experiments;
  /** Site limits. */
  limits?: SiteLimits;
  /** <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>. */
  autoHealEnabled?: boolean;
  /** Auto Heal rules. */
  autoHealRules?: AutoHealRules;
  /** Tracing options. */
  tracingOptions?: string;
  /** Virtual Network name. */
  vnetName?: string;
  /** Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. */
  vnetRouteAllEnabled?: boolean;
  /** The number of private ports assigned to this app. These will be assigned dynamically on runtime. */
  vnetPrivatePortsCount?: number;
  /** Cross-Origin Resource Sharing (CORS) settings. */
  cors?: CorsSettings;
  /** Push endpoint settings. */
  push?: PushSettings;
  /** Information about the formal API definition for the app. */
  apiDefinition?: ApiDefinitionInfo;
  /** Azure API management settings linked to the app. */
  apiManagementConfig?: ApiManagementConfig;
  /** Auto-swap slot name. */
  autoSwapSlotName?: string;
  /** <code>true</code> to enable local MySQL; otherwise, <code>false</code>. */
  localMySqlEnabled?: boolean;
  /** Managed Service Identity Id */
  managedServiceIdentityId?: number;
  /** Explicit Managed Service Identity Id */
  xManagedServiceIdentityId?: number;
  /** Identity to use for Key Vault Reference authentication. */
  keyVaultReferenceIdentity?: string;
  /** IP security restrictions for main. */
  ipSecurityRestrictions?: IpSecurityRestriction[];
  /** Default action for main access restriction if no rules are matched. */
  ipSecurityRestrictionsDefaultAction?: DefaultAction;
  /** IP security restrictions for scm. */
  scmIpSecurityRestrictions?: IpSecurityRestriction[];
  /** Default action for scm access restriction if no rules are matched. */
  scmIpSecurityRestrictionsDefaultAction?: DefaultAction;
  /** IP security restrictions for scm to use main. */
  scmIpSecurityRestrictionsUseMain?: boolean;
  /** Http20Enabled: configures a web site to allow clients to connect over http2.0 */
  http20Enabled?: boolean;
  /** Http20ProxyFlag: Configures a website to allow http2.0 to pass be proxied all the way to the app. 0 = disabled, 1 = pass through all http2 traffic, 2 = pass through gRPC only. */
  http20ProxyFlag?: number;
  /** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
  minTlsVersion?: SupportedTlsVersions;
  /** The minimum strength TLS cipher suite allowed for an application */
  minTlsCipherSuite?: TlsCipherSuites;
  /** ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site */
  scmMinTlsVersion?: SupportedTlsVersions;
  /** State of FTP / FTPS service */
  ftpsState?: FtpsState;
  /**
   * Number of preWarmed instances.
   * This setting only applies to the Consumption and Elastic Plans
   */
  preWarmedInstanceCount?: number;
  /**
   * Maximum number of workers that a site can scale out to.
   * This setting only applies to the Consumption and Elastic Premium Plans
   */
  functionAppScaleLimit?: number;
  /**
   * Maximum number of workers that a site can scale out to.
   * This setting only applies to apps in plans where ElasticScaleEnabled is <code>true</code>
   */
  elasticWebAppScaleLimit?: number;
  /** Health check path */
  healthCheckPath?: string;
  /**
   * Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,
   * the ScaleController will not monitor event sources directly, but will instead call to the
   * runtime to get scale status.
   */
  functionsRuntimeScaleMonitoringEnabled?: boolean;
  /** Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database values https://www.iana.org/time-zones (for a quick reference see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones */
  websiteTimeZone?: string;
  /**
   * Number of minimum instance count for a site
   * This setting only applies to the Elastic Plans
   */
  minimumElasticInstanceCount?: number;
  /** List of Azure Storage Accounts. */
  azureStorageAccounts?: Record<string, AzureStorageInfoValue>;
  /** Property to allow or block all public traffic. */
  publicNetworkAccess?: string;
}

export function siteConfigDeserializer(item: any): SiteConfig {
  return {
    numberOfWorkers: item["numberOfWorkers"],
    defaultDocuments: !item["defaultDocuments"]
      ? item["defaultDocuments"]
      : item["defaultDocuments"].map((p: any) => {
          return p;
        }),
    netFrameworkVersion: item["netFrameworkVersion"],
    phpVersion: item["phpVersion"],
    pythonVersion: item["pythonVersion"],
    nodeVersion: item["nodeVersion"],
    powerShellVersion: item["powerShellVersion"],
    linuxFxVersion: item["linuxFxVersion"],
    windowsFxVersion: item["windowsFxVersion"],
    requestTracingEnabled: item["requestTracingEnabled"],
    requestTracingExpirationTime: !item["requestTracingExpirationTime"]
      ? item["requestTracingExpirationTime"]
      : new Date(item["requestTracingExpirationTime"]),
    remoteDebuggingEnabled: item["remoteDebuggingEnabled"],
    remoteDebuggingVersion: item["remoteDebuggingVersion"],
    httpLoggingEnabled: item["httpLoggingEnabled"],
    acrUseManagedIdentityCreds: item["acrUseManagedIdentityCreds"],
    acrUserManagedIdentityID: item["acrUserManagedIdentityID"],
    logsDirectorySizeLimit: item["logsDirectorySizeLimit"],
    detailedErrorLoggingEnabled: item["detailedErrorLoggingEnabled"],
    publishingUsername: item["publishingUsername"],
    appSettings: !item["appSettings"]
      ? item["appSettings"]
      : nameValuePairArrayDeserializer(item["appSettings"]),
    metadata: !item["metadata"]
      ? item["metadata"]
      : nameValuePairArrayDeserializer(item["metadata"]),
    connectionStrings: !item["connectionStrings"]
      ? item["connectionStrings"]
      : connStringInfoArrayDeserializer(item["connectionStrings"]),
    machineKey: !item["machineKey"]
      ? item["machineKey"]
      : siteMachineKeyDeserializer(item["machineKey"]),
    handlerMappings: !item["handlerMappings"]
      ? item["handlerMappings"]
      : handlerMappingArrayDeserializer(item["handlerMappings"]),
    documentRoot: item["documentRoot"],
    scmType: item["scmType"],
    use32BitWorkerProcess: item["use32BitWorkerProcess"],
    webSocketsEnabled: item["webSocketsEnabled"],
    alwaysOn: item["alwaysOn"],
    javaVersion: item["javaVersion"],
    javaContainer: item["javaContainer"],
    javaContainerVersion: item["javaContainerVersion"],
    appCommandLine: item["appCommandLine"],
    managedPipelineMode: item["managedPipelineMode"],
    virtualApplications: !item["virtualApplications"]
      ? item["virtualApplications"]
      : virtualApplicationArrayDeserializer(item["virtualApplications"]),
    loadBalancing: item["loadBalancing"],
    experiments: !item["experiments"]
      ? item["experiments"]
      : experimentsDeserializer(item["experiments"]),
    limits: !item["limits"] ? item["limits"] : siteLimitsDeserializer(item["limits"]),
    autoHealEnabled: item["autoHealEnabled"],
    autoHealRules: !item["autoHealRules"]
      ? item["autoHealRules"]
      : autoHealRulesDeserializer(item["autoHealRules"]),
    tracingOptions: item["tracingOptions"],
    vnetName: item["vnetName"],
    vnetRouteAllEnabled: item["vnetRouteAllEnabled"],
    vnetPrivatePortsCount: item["vnetPrivatePortsCount"],
    cors: !item["cors"] ? item["cors"] : corsSettingsDeserializer(item["cors"]),
    push: !item["push"] ? item["push"] : pushSettingsDeserializer(item["push"]),
    apiDefinition: !item["apiDefinition"]
      ? item["apiDefinition"]
      : apiDefinitionInfoDeserializer(item["apiDefinition"]),
    apiManagementConfig: !item["apiManagementConfig"]
      ? item["apiManagementConfig"]
      : apiManagementConfigDeserializer(item["apiManagementConfig"]),
    autoSwapSlotName: item["autoSwapSlotName"],
    localMySqlEnabled: item["localMySqlEnabled"],
    managedServiceIdentityId: item["managedServiceIdentityId"],
    xManagedServiceIdentityId: item["xManagedServiceIdentityId"],
    keyVaultReferenceIdentity: item["keyVaultReferenceIdentity"],
    ipSecurityRestrictions: !item["ipSecurityRestrictions"]
      ? item["ipSecurityRestrictions"]
      : ipSecurityRestrictionArrayDeserializer(item["ipSecurityRestrictions"]),
    ipSecurityRestrictionsDefaultAction: item["ipSecurityRestrictionsDefaultAction"],
    scmIpSecurityRestrictions: !item["scmIpSecurityRestrictions"]
      ? item["scmIpSecurityRestrictions"]
      : ipSecurityRestrictionArrayDeserializer(item["scmIpSecurityRestrictions"]),
    scmIpSecurityRestrictionsDefaultAction: item["scmIpSecurityRestrictionsDefaultAction"],
    scmIpSecurityRestrictionsUseMain: item["scmIpSecurityRestrictionsUseMain"],
    http20Enabled: item["http20Enabled"],
    http20ProxyFlag: item["http20ProxyFlag"],
    minTlsVersion: item["minTlsVersion"],
    minTlsCipherSuite: item["minTlsCipherSuite"],
    scmMinTlsVersion: item["scmMinTlsVersion"],
    ftpsState: item["ftpsState"],
    preWarmedInstanceCount: item["preWarmedInstanceCount"],
    functionAppScaleLimit: item["functionAppScaleLimit"],
    elasticWebAppScaleLimit: item["elasticWebAppScaleLimit"],
    healthCheckPath: item["healthCheckPath"],
    functionsRuntimeScaleMonitoringEnabled: item["functionsRuntimeScaleMonitoringEnabled"],
    websiteTimeZone: item["websiteTimeZone"],
    minimumElasticInstanceCount: item["minimumElasticInstanceCount"],
    azureStorageAccounts: !item["azureStorageAccounts"]
      ? item["azureStorageAccounts"]
      : azureStorageInfoValueRecordDeserializer(item["azureStorageAccounts"]),
    publicNetworkAccess: item["publicNetworkAccess"],
  };
}

export function connStringInfoArrayDeserializer(result: Array<ConnStringInfo>): any[] {
  return result.map((item) => {
    return connStringInfoDeserializer(item);
  });
}

/** Database connection string information. */
export interface ConnStringInfo {
  /** Name of connection string. */
  name?: string;
  /** Connection string value. */
  connectionString?: string;
  /** Type of database. */
  type?: ConnectionStringType;
}

export function connStringInfoDeserializer(item: any): ConnStringInfo {
  return {
    name: item["name"],
    connectionString: item["connectionString"],
    type: item["type"],
  };
}

/** Type of database. */
export type ConnectionStringType =
  | "MySql"
  | "SQLServer"
  | "SQLAzure"
  | "Custom"
  | "NotificationHub"
  | "ServiceBus"
  | "EventHub"
  | "ApiHub"
  | "DocDb"
  | "RedisCache"
  | "PostgreSQL";

/** MachineKey of an app. */
export interface SiteMachineKey {
  /** MachineKey validation. */
  validation?: string;
  /** Validation key. */
  validationKey?: string;
  /** Algorithm used for decryption. */
  decryption?: string;
  /** Decryption key. */
  decryptionKey?: string;
}

export function siteMachineKeyDeserializer(item: any): SiteMachineKey {
  return {
    validation: item["validation"],
    validationKey: item["validationKey"],
    decryption: item["decryption"],
    decryptionKey: item["decryptionKey"],
  };
}

export function handlerMappingArrayDeserializer(result: Array<HandlerMapping>): any[] {
  return result.map((item) => {
    return handlerMappingDeserializer(item);
  });
}

/**
 * The IIS handler mappings used to define which handler processes HTTP requests with certain extension.
 * For example, it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.
 */
export interface HandlerMapping {
  /** Requests with this extension will be handled using the specified FastCGI application. */
  extension?: string;
  /** The absolute path to the FastCGI application. */
  scriptProcessor?: string;
  /** Command-line arguments to be passed to the script processor. */
  arguments?: string;
}

export function handlerMappingDeserializer(item: any): HandlerMapping {
  return {
    extension: item["extension"],
    scriptProcessor: item["scriptProcessor"],
    arguments: item["arguments"],
  };
}

/** SCM type. */
export enum KnownScmType {
  /** None */
  None = "None",
  /** Dropbox */
  Dropbox = "Dropbox",
  /** Tfs */
  Tfs = "Tfs",
  /** LocalGit */
  LocalGit = "LocalGit",
  /** GitHub */
  GitHub = "GitHub",
  /** CodePlexGit */
  CodePlexGit = "CodePlexGit",
  /** CodePlexHg */
  CodePlexHg = "CodePlexHg",
  /** BitbucketGit */
  BitbucketGit = "BitbucketGit",
  /** BitbucketHg */
  BitbucketHg = "BitbucketHg",
  /** ExternalGit */
  ExternalGit = "ExternalGit",
  /** ExternalHg */
  ExternalHg = "ExternalHg",
  /** OneDrive */
  OneDrive = "OneDrive",
  /** VSO */
  VSO = "VSO",
  /** VSTSRM */
  Vstsrm = "VSTSRM",
}

/**
 * SCM type. \
 * {@link KnownScmType} can be used interchangeably with ScmType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Dropbox** \
 * **Tfs** \
 * **LocalGit** \
 * **GitHub** \
 * **CodePlexGit** \
 * **CodePlexHg** \
 * **BitbucketGit** \
 * **BitbucketHg** \
 * **ExternalGit** \
 * **ExternalHg** \
 * **OneDrive** \
 * **VSO** \
 * **VSTSRM**
 */
export type ScmType = string;
/** Managed pipeline mode. */
export type ManagedPipelineMode = "Integrated" | "Classic";

export function virtualApplicationArrayDeserializer(result: Array<VirtualApplication>): any[] {
  return result.map((item) => {
    return virtualApplicationDeserializer(item);
  });
}

/** Virtual application in an app. */
export interface VirtualApplication {
  /** Virtual path. */
  virtualPath?: string;
  /** Physical path. */
  physicalPath?: string;
  /** <code>true</code> if preloading is enabled; otherwise, <code>false</code>. */
  preloadEnabled?: boolean;
  /** Virtual directories for virtual application. */
  virtualDirectories?: VirtualDirectory[];
}

export function virtualApplicationDeserializer(item: any): VirtualApplication {
  return {
    virtualPath: item["virtualPath"],
    physicalPath: item["physicalPath"],
    preloadEnabled: item["preloadEnabled"],
    virtualDirectories: !item["virtualDirectories"]
      ? item["virtualDirectories"]
      : virtualDirectoryArrayDeserializer(item["virtualDirectories"]),
  };
}

export function virtualDirectoryArrayDeserializer(result: Array<VirtualDirectory>): any[] {
  return result.map((item) => {
    return virtualDirectoryDeserializer(item);
  });
}

/** Directory for virtual application. */
export interface VirtualDirectory {
  /** Path to virtual application. */
  virtualPath?: string;
  /** Physical path. */
  physicalPath?: string;
}

export function virtualDirectoryDeserializer(item: any): VirtualDirectory {
  return {
    virtualPath: item["virtualPath"],
    physicalPath: item["physicalPath"],
  };
}

/** Site load balancing. */
export type SiteLoadBalancing =
  | "WeightedRoundRobin"
  | "LeastRequests"
  | "LeastResponseTime"
  | "WeightedTotalTraffic"
  | "RequestHash"
  | "PerSiteRoundRobin"
  | "LeastRequestsWithTieBreaker";

/** Routing rules in production experiments. */
export interface Experiments {
  /** List of ramp-up rules. */
  rampUpRules?: RampUpRule[];
}

export function experimentsDeserializer(item: any): Experiments {
  return {
    rampUpRules: !item["rampUpRules"]
      ? item["rampUpRules"]
      : rampUpRuleArrayDeserializer(item["rampUpRules"]),
  };
}

export function rampUpRuleArrayDeserializer(result: Array<RampUpRule>): any[] {
  return result.map((item) => {
    return rampUpRuleDeserializer(item);
  });
}

/** Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance. */
export interface RampUpRule {
  /** Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. */
  actionHostName?: string;
  /** Percentage of the traffic which will be redirected to <code>ActionHostName</code>. */
  reroutePercentage?: number;
  /**
   * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or
   * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm
   * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
   */
  changeStep?: number;
  /** Specifies interval in minutes to reevaluate ReroutePercentage. */
  changeIntervalInMinutes?: number;
  /** Specifies lower boundary above which ReroutePercentage will stay. */
  minReroutePercentage?: number;
  /** Specifies upper boundary below which ReroutePercentage will stay. */
  maxReroutePercentage?: number;
  /** Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. */
  changeDecisionCallbackUrl?: string;
  /** Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. */
  name?: string;
}

export function rampUpRuleDeserializer(item: any): RampUpRule {
  return {
    actionHostName: item["actionHostName"],
    reroutePercentage: item["reroutePercentage"],
    changeStep: item["changeStep"],
    changeIntervalInMinutes: item["changeIntervalInMinutes"],
    minReroutePercentage: item["minReroutePercentage"],
    maxReroutePercentage: item["maxReroutePercentage"],
    changeDecisionCallbackUrl: item["changeDecisionCallbackUrl"],
    name: item["name"],
  };
}

/** Metric limits set on an app. */
export interface SiteLimits {
  /** Maximum allowed CPU usage percentage. */
  maxPercentageCpu?: number;
  /** Maximum allowed memory usage in MB. */
  maxMemoryInMb?: number;
  /** Maximum allowed disk size usage in MB. */
  maxDiskSizeInMb?: number;
}

export function siteLimitsDeserializer(item: any): SiteLimits {
  return {
    maxPercentageCpu: item["maxPercentageCpu"],
    maxMemoryInMb: item["maxMemoryInMb"],
    maxDiskSizeInMb: item["maxDiskSizeInMb"],
  };
}

/** Rules that can be defined for auto-heal. */
export interface AutoHealRules {
  /** Conditions that describe when to execute the auto-heal actions. */
  triggers?: AutoHealTriggers;
  /** Actions to be executed when a rule is triggered. */
  actions?: AutoHealActions;
}

export function autoHealRulesDeserializer(item: any): AutoHealRules {
  return {
    triggers: !item["triggers"] ? item["triggers"] : autoHealTriggersDeserializer(item["triggers"]),
    actions: !item["actions"] ? item["actions"] : autoHealActionsDeserializer(item["actions"]),
  };
}

/** Triggers for auto-heal. */
export interface AutoHealTriggers {
  /** A rule based on total requests. */
  requests?: RequestsBasedTrigger;
  /** A rule based on private bytes. */
  privateBytesInKB?: number;
  /** A rule based on status codes. */
  statusCodes?: StatusCodesBasedTrigger[];
  /** A rule based on request execution time. */
  slowRequests?: SlowRequestsBasedTrigger;
  /** A rule based on multiple Slow Requests Rule with path */
  slowRequestsWithPath?: SlowRequestsBasedTrigger[];
  /** A rule based on status codes ranges. */
  statusCodesRange?: StatusCodesRangeBasedTrigger[];
}

export function autoHealTriggersDeserializer(item: any): AutoHealTriggers {
  return {
    requests: !item["requests"]
      ? item["requests"]
      : requestsBasedTriggerDeserializer(item["requests"]),
    privateBytesInKB: item["privateBytesInKB"],
    statusCodes: !item["statusCodes"]
      ? item["statusCodes"]
      : statusCodesBasedTriggerArrayDeserializer(item["statusCodes"]),
    slowRequests: !item["slowRequests"]
      ? item["slowRequests"]
      : slowRequestsBasedTriggerDeserializer(item["slowRequests"]),
    slowRequestsWithPath: !item["slowRequestsWithPath"]
      ? item["slowRequestsWithPath"]
      : slowRequestsBasedTriggerArrayDeserializer(item["slowRequestsWithPath"]),
    statusCodesRange: !item["statusCodesRange"]
      ? item["statusCodesRange"]
      : statusCodesRangeBasedTriggerArrayDeserializer(item["statusCodesRange"]),
  };
}

/** Trigger based on total requests. */
export interface RequestsBasedTrigger {
  /** Request Count. */
  count?: number;
  /** Time interval. */
  timeInterval?: string;
}

export function requestsBasedTriggerDeserializer(item: any): RequestsBasedTrigger {
  return {
    count: item["count"],
    timeInterval: item["timeInterval"],
  };
}

export function statusCodesBasedTriggerArrayDeserializer(
  result: Array<StatusCodesBasedTrigger>,
): any[] {
  return result.map((item) => {
    return statusCodesBasedTriggerDeserializer(item);
  });
}

/** Trigger based on status code. */
export interface StatusCodesBasedTrigger {
  /** HTTP status code. */
  status?: number;
  /** Request Sub Status. */
  subStatus?: number;
  /** Win32 error code. */
  win32Status?: number;
  /** Request Count. */
  count?: number;
  /** Time interval. */
  timeInterval?: string;
  /** Request Path */
  path?: string;
}

export function statusCodesBasedTriggerDeserializer(item: any): StatusCodesBasedTrigger {
  return {
    status: item["status"],
    subStatus: item["subStatus"],
    win32Status: item["win32Status"],
    count: item["count"],
    timeInterval: item["timeInterval"],
    path: item["path"],
  };
}

/** Trigger based on request execution time. */
export interface SlowRequestsBasedTrigger {
  /** Time taken. */
  timeTaken?: string;
  /** Request Path. */
  path?: string;
  /** Request Count. */
  count?: number;
  /** Time interval. */
  timeInterval?: string;
}

export function slowRequestsBasedTriggerDeserializer(item: any): SlowRequestsBasedTrigger {
  return {
    timeTaken: item["timeTaken"],
    path: item["path"],
    count: item["count"],
    timeInterval: item["timeInterval"],
  };
}

export function slowRequestsBasedTriggerArrayDeserializer(
  result: Array<SlowRequestsBasedTrigger>,
): any[] {
  return result.map((item) => {
    return slowRequestsBasedTriggerDeserializer(item);
  });
}

export function statusCodesRangeBasedTriggerArrayDeserializer(
  result: Array<StatusCodesRangeBasedTrigger>,
): any[] {
  return result.map((item) => {
    return statusCodesRangeBasedTriggerDeserializer(item);
  });
}

/** Trigger based on range of status codes. */
export interface StatusCodesRangeBasedTrigger {
  /** HTTP status code. */
  statusCodes?: string;
  path?: string;
  /** Request Count. */
  count?: number;
  /** Time interval. */
  timeInterval?: string;
}

export function statusCodesRangeBasedTriggerDeserializer(item: any): StatusCodesRangeBasedTrigger {
  return {
    statusCodes: item["statusCodes"],
    path: item["path"],
    count: item["count"],
    timeInterval: item["timeInterval"],
  };
}

/** Actions which to take by the auto-heal module when a rule is triggered. */
export interface AutoHealActions {
  /** Predefined action to be taken. */
  actionType?: AutoHealActionType;
  /** Custom action to be taken. */
  customAction?: AutoHealCustomAction;
  /**
   * Minimum time the process must execute
   * before taking the action
   */
  minProcessExecutionTime?: string;
}

export function autoHealActionsDeserializer(item: any): AutoHealActions {
  return {
    actionType: item["actionType"],
    customAction: !item["customAction"]
      ? item["customAction"]
      : autoHealCustomActionDeserializer(item["customAction"]),
    minProcessExecutionTime: item["minProcessExecutionTime"],
  };
}

/** Predefined action to be taken. */
export type AutoHealActionType = "Recycle" | "LogEvent" | "CustomAction";

/**
 * Custom action to be executed
 * when an auto heal rule is triggered.
 */
export interface AutoHealCustomAction {
  /** Executable to be run. */
  exe?: string;
  /** Parameters for the executable. */
  parameters?: string;
}

export function autoHealCustomActionDeserializer(item: any): AutoHealCustomAction {
  return {
    exe: item["exe"],
    parameters: item["parameters"],
  };
}

/** Cross-Origin Resource Sharing (CORS) settings for the app. */
export interface CorsSettings {
  /**
   * Gets or sets the list of origins that should be allowed to make cross-origin
   * calls (for example: http://example.com:12345). Use "*" to allow all.
   */
  allowedOrigins?: string[];
  /**
   * Gets or sets whether CORS requests with credentials are allowed. See
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
   * for more details.
   */
  supportCredentials?: boolean;
}

export function corsSettingsDeserializer(item: any): CorsSettings {
  return {
    allowedOrigins: !item["allowedOrigins"]
      ? item["allowedOrigins"]
      : item["allowedOrigins"].map((p: any) => {
          return p;
        }),
    supportCredentials: item["supportCredentials"],
  };
}

/** Push settings for the App. */
export interface PushSettings extends ProxyOnlyResource {
  /** Gets or sets a flag indicating whether the Push endpoint is enabled. */
  isPushEnabled?: boolean;
  /** Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint. */
  tagWhitelistJson?: string;
  /**
   * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
   * Tags can consist of alphanumeric characters and the following:
   * '_', '@', '#', '.', ':', '-'.
   * Validation should be performed at the PushRequestHandler.
   */
  tagsRequiringAuth?: string;
  /** Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. */
  dynamicTagsJson?: string;
}

export function pushSettingsDeserializer(item: any): PushSettings {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _pushSettingsPropertiesDeserializer(item["properties"])),
  };
}

/** PushSettings resource specific properties */
export interface PushSettingsProperties {
  /** Gets or sets a flag indicating whether the Push endpoint is enabled. */
  isPushEnabled: boolean;
  /** Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint. */
  tagWhitelistJson?: string;
  /**
   * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
   * Tags can consist of alphanumeric characters and the following:
   * '_', '@', '#', '.', ':', '-'.
   * Validation should be performed at the PushRequestHandler.
   */
  tagsRequiringAuth?: string;
  /** Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. */
  dynamicTagsJson?: string;
}

export function pushSettingsPropertiesDeserializer(item: any): PushSettingsProperties {
  return {
    isPushEnabled: item["isPushEnabled"],
    tagWhitelistJson: item["tagWhitelistJson"],
    tagsRequiringAuth: item["tagsRequiringAuth"],
    dynamicTagsJson: item["dynamicTagsJson"],
  };
}

/** Information about the formal API definition for the app. */
export interface ApiDefinitionInfo {
  /** The URL of the API definition. */
  url?: string;
}

export function apiDefinitionInfoDeserializer(item: any): ApiDefinitionInfo {
  return {
    url: item["url"],
  };
}

/** Azure API management (APIM) configuration linked to the app. */
export interface ApiManagementConfig {
  /** APIM-Api Identifier. */
  id?: string;
}

export function apiManagementConfigDeserializer(item: any): ApiManagementConfig {
  return {
    id: item["id"],
  };
}

export function ipSecurityRestrictionArrayDeserializer(
  result: Array<IpSecurityRestriction>,
): any[] {
  return result.map((item) => {
    return ipSecurityRestrictionDeserializer(item);
  });
}

/** IP security restriction on an app. */
export interface IpSecurityRestriction {
  /**
   * IP address the security restriction is valid for.
   * It can be in form of pure ipv4 address (required SubnetMask property) or
   * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
   * SubnetMask property must not be specified.
   */
  ipAddress?: string;
  /** Subnet mask for the range of IP addresses the restriction is valid for. */
  subnetMask?: string;
  /** Virtual network resource id */
  vnetSubnetResourceId?: string;
  /** (internal) Vnet traffic tag */
  vnetTrafficTag?: number;
  /** (internal) Subnet traffic tag */
  subnetTrafficTag?: number;
  /** Allow or Deny access for this IP range. */
  action?: string;
  /** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
  tag?: IpFilterTag;
  /** Priority of IP restriction rule. */
  priority?: number;
  /** IP restriction rule name. */
  name?: string;
  /** IP restriction rule description. */
  description?: string;
  /**
   * IP restriction rule headers.
   * X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).
   * The matching logic is ..
   * - If the property is null or empty (default), all hosts(or lack of) are allowed.
   * - A value is compared using ordinal-ignore-case (excluding port number).
   * - Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.com
   * but not the root domain contoso.com or multi-level foo.bar.contoso.com
   * - Unicode host names are allowed but are converted to Punycode for matching.
   *
   * X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).
   * The matching logic is ..
   * - If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.
   * - If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.
   *
   * X-Azure-FDID and X-FD-HealthProbe.
   * The matching logic is exact match.
   */
  headers?: Record<string, string[]>;
}

export function ipSecurityRestrictionDeserializer(item: any): IpSecurityRestriction {
  return {
    ipAddress: item["ipAddress"],
    subnetMask: item["subnetMask"],
    vnetSubnetResourceId: item["vnetSubnetResourceId"],
    vnetTrafficTag: item["vnetTrafficTag"],
    subnetTrafficTag: item["subnetTrafficTag"],
    action: item["action"],
    tag: item["tag"],
    priority: item["priority"],
    name: item["name"],
    description: item["description"],
    headers: !item["headers"]
      ? item["headers"]
      : Object.fromEntries(
          Object.entries(item["headers"]).map(([k, p]: [string, any]) => [
            k,
            p.map((p1: any) => {
              return p1;
            }),
          ]),
        ),
  };
}

/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
export enum KnownIpFilterTag {
  /** Default */
  Default = "Default",
  /** XffProxy */
  XffProxy = "XffProxy",
  /** ServiceTag */
  ServiceTag = "ServiceTag",
}

/**
 * Defines what this IP filter will be used for. This is to support IP filtering on proxies. \
 * {@link KnownIpFilterTag} can be used interchangeably with IpFilterTag,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default** \
 * **XffProxy** \
 * **ServiceTag**
 */
export type IpFilterTag = string;

/** Default action for main access restriction if no rules are matched. */
export enum KnownDefaultAction {
  /** Allow */
  Allow = "Allow",
  /** Deny */
  Deny = "Deny",
}

/**
 * Default action for main access restriction if no rules are matched. \
 * {@link KnownDefaultAction} can be used interchangeably with DefaultAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export type DefaultAction = string;

/** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
export enum KnownSupportedTlsVersions {
  /** 1.0 */
  One0 = "1.0",
  /** 1.1 */
  One1 = "1.1",
  /** 1.2 */
  One2 = "1.2",
  /** 1.3 */
  One3 = "1.3",
}

/**
 * MinTlsVersion: configures the minimum version of TLS required for SSL requests \
 * {@link KnownSupportedTlsVersions} can be used interchangeably with SupportedTlsVersions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **1.0** \
 * **1.1** \
 * **1.2** \
 * **1.3**
 */
export type SupportedTlsVersions = string;

/** The minimum strength TLS cipher suite allowed for an application */
export enum KnownTlsCipherSuites {
  /** TLS_AES_256_GCM_SHA384 */
  TLSAES256GCMSHA384 = "TLS_AES_256_GCM_SHA384",
  /** TLS_AES_128_GCM_SHA256 */
  TLSAES128GCMSHA256 = "TLS_AES_128_GCM_SHA256",
  /** TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 */
  TLSEcdheEcdsaWithAES256GCMSHA384 = "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384",
  /** TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 */
  TLSEcdheEcdsaWithAES128CBCSHA256 = "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256",
  /** TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 */
  TLSEcdheEcdsaWithAES128GCMSHA256 = "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
  /** TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 */
  TLSEcdheRSAWithAES256GCMSHA384 = "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384",
  /** TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 */
  TLSEcdheRSAWithAES128GCMSHA256 = "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
  /** TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 */
  TLSEcdheRSAWithAES256CBCSHA384 = "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384",
  /** TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 */
  TLSEcdheRSAWithAES128CBCSHA256 = "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256",
  /** TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA */
  TLSEcdheRSAWithAES256CBCSHA = "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA",
  /** TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA */
  TLSEcdheRSAWithAES128CBCSHA = "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA",
  /** TLS_RSA_WITH_AES_256_GCM_SHA384 */
  TLSRSAWithAES256GCMSHA384 = "TLS_RSA_WITH_AES_256_GCM_SHA384",
  /** TLS_RSA_WITH_AES_128_GCM_SHA256 */
  TLSRSAWithAES128GCMSHA256 = "TLS_RSA_WITH_AES_128_GCM_SHA256",
  /** TLS_RSA_WITH_AES_256_CBC_SHA256 */
  TLSRSAWithAES256CBCSHA256 = "TLS_RSA_WITH_AES_256_CBC_SHA256",
  /** TLS_RSA_WITH_AES_128_CBC_SHA256 */
  TLSRSAWithAES128CBCSHA256 = "TLS_RSA_WITH_AES_128_CBC_SHA256",
  /** TLS_RSA_WITH_AES_256_CBC_SHA */
  TLSRSAWithAES256CBCSHA = "TLS_RSA_WITH_AES_256_CBC_SHA",
  /** TLS_RSA_WITH_AES_128_CBC_SHA */
  TLSRSAWithAES128CBCSHA = "TLS_RSA_WITH_AES_128_CBC_SHA",
}

/**
 * The minimum strength TLS cipher suite allowed for an application \
 * {@link KnownTlsCipherSuites} can be used interchangeably with TlsCipherSuites,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TLS_AES_256_GCM_SHA384** \
 * **TLS_AES_128_GCM_SHA256** \
 * **TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384** \
 * **TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256** \
 * **TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256** \
 * **TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384** \
 * **TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256** \
 * **TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384** \
 * **TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256** \
 * **TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA** \
 * **TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA** \
 * **TLS_RSA_WITH_AES_256_GCM_SHA384** \
 * **TLS_RSA_WITH_AES_128_GCM_SHA256** \
 * **TLS_RSA_WITH_AES_256_CBC_SHA256** \
 * **TLS_RSA_WITH_AES_128_CBC_SHA256** \
 * **TLS_RSA_WITH_AES_256_CBC_SHA** \
 * **TLS_RSA_WITH_AES_128_CBC_SHA**
 */
export type TlsCipherSuites = string;

/** State of FTP / FTPS service */
export enum KnownFtpsState {
  /** AllAllowed */
  AllAllowed = "AllAllowed",
  /** FtpsOnly */
  FtpsOnly = "FtpsOnly",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * State of FTP / FTPS service \
 * {@link KnownFtpsState} can be used interchangeably with FtpsState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AllAllowed** \
 * **FtpsOnly** \
 * **Disabled**
 */
export type FtpsState = string;

export function azureStorageInfoValueRecordDeserializer(
  item: Record<string, any>,
): Record<string, AzureStorageInfoValue> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : azureStorageInfoValueDeserializer(item[key]);
  });
  return result;
}

/** Azure Files or Blob Storage access information value for dictionary storage. */
export interface AzureStorageInfoValue {
  /** Type of storage. */
  type?: AzureStorageType;
  /** Name of the storage account. */
  accountName?: string;
  /** Name of the file share (container name, for Blob storage). */
  shareName?: string;
  /** Access key for the storage account. */
  accessKey?: string;
  /** Path to mount the storage within the site's runtime environment. */
  mountPath?: string;
  /** State of the storage account. */
  readonly state?: AzureStorageState;
  /** Mounting protocol to use for the storage account. */
  protocol?: AzureStorageProtocol;
}

export function azureStorageInfoValueDeserializer(item: any): AzureStorageInfoValue {
  return {
    type: item["type"],
    accountName: item["accountName"],
    shareName: item["shareName"],
    accessKey: item["accessKey"],
    mountPath: item["mountPath"],
    state: item["state"],
    protocol: item["protocol"],
  };
}

/** Type of storage. */
export type AzureStorageType = "AzureFiles" | "AzureBlob";
/** State of the storage account. */
export type AzureStorageState = "Ok" | "InvalidCredentials" | "InvalidShare" | "NotValidated";

/** Mounting protocol to use for the storage account. */
export enum KnownAzureStorageProtocol {
  /** Smb */
  Smb = "Smb",
  /** Http */
  Http = "Http",
  /** Nfs */
  Nfs = "Nfs",
}

/**
 * Mounting protocol to use for the storage account. \
 * {@link KnownAzureStorageProtocol} can be used interchangeably with AzureStorageProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Smb** \
 * **Http** \
 * **Nfs**
 */
export type AzureStorageProtocol = string;

/** Function app configuration. */
export interface FunctionAppConfig {
  /** Function app deployment configuration. */
  deployment?: FunctionsDeployment;
  /** Function app runtime settings. */
  runtime?: FunctionsRuntime;
  /** Function app scale and concurrency settings. */
  scaleAndConcurrency?: FunctionsScaleAndConcurrency;
  /** Function app site update strategy configuration. */
  siteUpdateStrategy?: FunctionsSiteUpdateStrategy;
}

export function functionAppConfigDeserializer(item: any): FunctionAppConfig {
  return {
    deployment: !item["deployment"]
      ? item["deployment"]
      : functionsDeploymentDeserializer(item["deployment"]),
    runtime: !item["runtime"] ? item["runtime"] : functionsRuntimeDeserializer(item["runtime"]),
    scaleAndConcurrency: !item["scaleAndConcurrency"]
      ? item["scaleAndConcurrency"]
      : functionsScaleAndConcurrencyDeserializer(item["scaleAndConcurrency"]),
    siteUpdateStrategy: !item["siteUpdateStrategy"]
      ? item["siteUpdateStrategy"]
      : functionsSiteUpdateStrategyDeserializer(item["siteUpdateStrategy"]),
  };
}

/** Configuration section for the function app deployment. */
export interface FunctionsDeployment {
  /** Storage for deployed package used by the function app. */
  storage?: FunctionsDeploymentStorage;
}

export function functionsDeploymentDeserializer(item: any): FunctionsDeployment {
  return {
    storage: !item["storage"]
      ? item["storage"]
      : functionsDeploymentStorageDeserializer(item["storage"]),
  };
}

/** Storage for deployed package used by the function app. */
export interface FunctionsDeploymentStorage {
  /** Property to select Azure Storage type. Available options: blobContainer. */
  type?: FunctionsDeploymentStorageType;
  /** Property to set the URL for the selected Azure Storage type. Example: For blobContainer, the value could be https://<storageAccountName>.blob.core.windows.net/<containerName>. */
  value?: string;
  /** Authentication method to access the storage account for deployment. */
  authentication?: FunctionsDeploymentStorageAuthentication;
}

export function functionsDeploymentStorageDeserializer(item: any): FunctionsDeploymentStorage {
  return {
    type: item["type"],
    value: item["value"],
    authentication: !item["authentication"]
      ? item["authentication"]
      : functionsDeploymentStorageAuthenticationDeserializer(item["authentication"]),
  };
}

/** Property to select Azure Storage type. Available options: blobContainer. */
export enum KnownFunctionsDeploymentStorageType {
  /** blobContainer */
  BlobContainer = "blobContainer",
}

/**
 * Property to select Azure Storage type. Available options: blobContainer. \
 * {@link KnownFunctionsDeploymentStorageType} can be used interchangeably with FunctionsDeploymentStorageType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **blobContainer**
 */
export type FunctionsDeploymentStorageType = string;

/** Authentication method to access the storage account for deployment. */
export interface FunctionsDeploymentStorageAuthentication {
  /** Property to select authentication type to access the selected storage account. Available options: SystemAssignedIdentity, UserAssignedIdentity, StorageAccountConnectionString. */
  type?: AuthenticationType;
  /** Use this property for UserAssignedIdentity. Set the resource ID of the identity. Do not set a value for this property when using other authentication type. */
  userAssignedIdentityResourceId?: string;
  /** Use this property for StorageAccountConnectionString. Set the name of the app setting that has the storage account connection string. Do not set a value for this property when using other authentication type. */
  storageAccountConnectionStringName?: string;
}

export function functionsDeploymentStorageAuthenticationDeserializer(
  item: any,
): FunctionsDeploymentStorageAuthentication {
  return {
    type: item["type"],
    userAssignedIdentityResourceId: item["userAssignedIdentityResourceId"],
    storageAccountConnectionStringName: item["storageAccountConnectionStringName"],
  };
}

/** Property to select authentication type to access the selected storage account. Available options: SystemAssignedIdentity, UserAssignedIdentity, StorageAccountConnectionString. */
export enum KnownAuthenticationType {
  /** SystemAssignedIdentity */
  SystemAssignedIdentity = "SystemAssignedIdentity",
  /** UserAssignedIdentity */
  UserAssignedIdentity = "UserAssignedIdentity",
  /** StorageAccountConnectionString */
  StorageAccountConnectionString = "StorageAccountConnectionString",
}

/**
 * Property to select authentication type to access the selected storage account. Available options: SystemAssignedIdentity, UserAssignedIdentity, StorageAccountConnectionString. \
 * {@link KnownAuthenticationType} can be used interchangeably with AuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssignedIdentity** \
 * **UserAssignedIdentity** \
 * **StorageAccountConnectionString**
 */
export type AuthenticationType = string;

/** Function app runtime name and version. */
export interface FunctionsRuntime {
  /** Function app runtime name. Available options: dotnet-isolated, node, java, powershell, python, custom */
  name?: RuntimeName;
  /** Function app runtime version. Example: 8 (for dotnet-isolated) */
  version?: string | null;
}

export function functionsRuntimeDeserializer(item: any): FunctionsRuntime {
  return {
    name: item["name"],
    version: item["version"],
  };
}

/** Function app runtime name. Available options: dotnet-isolated, node, java, powershell, python, custom */
export enum KnownRuntimeName {
  /** dotnet-isolated */
  DotnetIsolated = "dotnet-isolated",
  /** node */
  Node = "node",
  /** java */
  Java = "java",
  /** powershell */
  Powershell = "powershell",
  /** python */
  Python = "python",
  /** custom */
  Custom = "custom",
}

/**
 * Function app runtime name. Available options: dotnet-isolated, node, java, powershell, python, custom \
 * {@link KnownRuntimeName} can be used interchangeably with RuntimeName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **dotnet-isolated** \
 * **node** \
 * **java** \
 * **powershell** \
 * **python** \
 * **custom**
 */
export type RuntimeName = string;

/** Scale and concurrency settings for the function app. */
export interface FunctionsScaleAndConcurrency {
  /** 'Always Ready' configuration for the function app. */
  alwaysReady?: FunctionsAlwaysReadyConfig[];
  /** The maximum number of instances for the function app. */
  maximumInstanceCount?: number;
  /** Set the amount of memory allocated to each instance of the function app in MB. CPU and network bandwidth are allocated proportionally. */
  instanceMemoryMB?: number;
  /** Scale and concurrency settings for the function app triggers. */
  triggers?: FunctionsScaleAndConcurrencyTriggers;
}

export function functionsScaleAndConcurrencyDeserializer(item: any): FunctionsScaleAndConcurrency {
  return {
    alwaysReady: !item["alwaysReady"]
      ? item["alwaysReady"]
      : functionsAlwaysReadyConfigArrayDeserializer(item["alwaysReady"]),
    maximumInstanceCount: item["maximumInstanceCount"],
    instanceMemoryMB: item["instanceMemoryMB"],
    triggers: !item["triggers"]
      ? item["triggers"]
      : functionsScaleAndConcurrencyTriggersDeserializer(item["triggers"]),
  };
}

export function functionsAlwaysReadyConfigArrayDeserializer(
  result: Array<FunctionsAlwaysReadyConfig>,
): any[] {
  return result.map((item) => {
    return functionsAlwaysReadyConfigDeserializer(item);
  });
}

/** Sets the number of 'Always Ready' instances for a function group or a specific function. */
export interface FunctionsAlwaysReadyConfig {
  /** Either a function group or a function name is required. For additional information see https://aka.ms/flexconsumption/alwaysready. */
  name?: string;
  /** Sets the number of 'Always Ready' instances for a given function group or a specific function. For additional information see https://aka.ms/flexconsumption/alwaysready. */
  instanceCount?: number;
}

export function functionsAlwaysReadyConfigDeserializer(item: any): FunctionsAlwaysReadyConfig {
  return {
    name: item["name"],
    instanceCount: item["instanceCount"],
  };
}

/** Scale and concurrency settings for the function app triggers. */
export interface FunctionsScaleAndConcurrencyTriggers {
  /** Scale and concurrency settings for the HTTP trigger. */
  http?: FunctionsScaleAndConcurrencyTriggersHttp;
}

export function functionsScaleAndConcurrencyTriggersDeserializer(
  item: any,
): FunctionsScaleAndConcurrencyTriggers {
  return {
    http: !item["http"]
      ? item["http"]
      : functionsScaleAndConcurrencyTriggersHttpDeserializer(item["http"]),
  };
}

/** Scale and concurrency settings for the HTTP trigger. */
export interface FunctionsScaleAndConcurrencyTriggersHttp {
  /** The maximum number of concurrent HTTP trigger invocations per instance. */
  perInstanceConcurrency?: number;
}

export function functionsScaleAndConcurrencyTriggersHttpDeserializer(
  item: any,
): FunctionsScaleAndConcurrencyTriggersHttp {
  return {
    perInstanceConcurrency: item["perInstanceConcurrency"],
  };
}

/** Function app site update strategy configuration for deployments and site config updates. */
export interface FunctionsSiteUpdateStrategy {
  /** Function app site update strategy type. Available options: Recreate, RollingUpdate */
  type?: SiteUpdateStrategyType;
}

export function functionsSiteUpdateStrategyDeserializer(item: any): FunctionsSiteUpdateStrategy {
  return {
    type: item["type"],
  };
}

/** Function app site update strategy type. Available options: Recreate, RollingUpdate */
export enum KnownSiteUpdateStrategyType {
  /**
   * If the app is under load and a deployment or site state update occurs, all pods will be removed
   * and will need to be Recreated all at once. This is the default behavior.
   */
  Recreate = "Recreate",
  /**
   * If the app is under load and a deployment or site state update occurs, pods will be drained in
   * batches and gradually replaced, thus minimizing impact to throughput.
   */
  RollingUpdate = "RollingUpdate",
}

/**
 * Function app site update strategy type. Available options: Recreate, RollingUpdate \
 * {@link KnownSiteUpdateStrategyType} can be used interchangeably with SiteUpdateStrategyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Recreate**: If the app is under load and a deployment or site state update occurs, all pods will be removed
 * and will need to be Recreated all at once. This is the default behavior. \
 * **RollingUpdate**: If the app is under load and a deployment or site state update occurs, pods will be drained in
 * batches and gradually replaced, thus minimizing impact to throughput.
 */
export type SiteUpdateStrategyType = string;

/** App Dapr configuration. */
export interface DaprConfig {
  /** Boolean indicating if the Dapr side car is enabled */
  enabled?: boolean;
  /** Dapr application identifier */
  appId?: string;
  /** Tells Dapr which port your application is listening on */
  appPort?: number;
  /** Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB. */
  httpReadBufferSize?: number;
  /** Increasing max size of request body http servers parameter in MB to handle uploading of big files. Default is 4 MB. */
  httpMaxRequestSize?: number;
  /** Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info. */
  logLevel?: DaprLogLevel;
  /** Enables API logging for the Dapr sidecar */
  enableApiLogging?: boolean;
}

export function daprConfigDeserializer(item: any): DaprConfig {
  return {
    enabled: item["enabled"],
    appId: item["appId"],
    appPort: item["appPort"],
    httpReadBufferSize: item["httpReadBufferSize"],
    httpMaxRequestSize: item["httpMaxRequestSize"],
    logLevel: item["logLevel"],
    enableApiLogging: item["enableApiLogging"],
  };
}

/** Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info. */
export enum KnownDaprLogLevel {
  /** info */
  Info = "info",
  /** debug */
  Debug = "debug",
  /** warn */
  Warn = "warn",
  /** error */
  Error = "error",
}

/**
 * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info. \
 * {@link KnownDaprLogLevel} can be used interchangeably with DaprLogLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **info** \
 * **debug** \
 * **warn** \
 * **error**
 */
export type DaprLogLevel = string;

/** Function app resource requirements. */
export interface ResourceConfig {
  /** Required CPU in cores, e.g. 0.5 */
  cpu?: number;
  /** Required memory, e.g. "1Gi" */
  memory?: string;
}

export function resourceConfigDeserializer(item: any): ResourceConfig {
  return {
    cpu: item["cpu"],
    memory: item["memory"],
  };
}

/** Specification for an App Service Environment to use for this resource. */
export interface HostingEnvironmentProfile {
  /** Resource ID of the App Service Environment. */
  id?: string;
  /** Name of the App Service Environment. */
  readonly name?: string;
  /** Resource type of the App Service Environment. */
  readonly type?: string;
}

export function hostingEnvironmentProfileDeserializer(item: any): HostingEnvironmentProfile {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
  };
}

/**
 * This composes with ClientCertEnabled setting.
 * - ClientCertEnabled: false means ClientCert is ignored.
 * - ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.
 * - ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted.
 */
export type ClientCertMode = "Required" | "Optional" | "OptionalInteractiveUser";
/** Specifies the IP mode of the app. */
export type IPMode = "IPv4" | "IPv6" | "IPv4AndIPv6";

/** Information needed for cloning operation. */
export interface CloningInfo {
  /**
   * Correlation ID of cloning operation. This ID ties multiple cloning operations
   * together to use the same snapshot.
   */
  correlationId?: string;
  /** <code>true</code> to overwrite destination app; otherwise, <code>false</code>. */
  overwrite?: boolean;
  /** <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>. */
  cloneCustomHostNames?: boolean;
  /** <code>true</code> to clone source control from source app; otherwise, <code>false</code>. */
  cloneSourceControl?: boolean;
  /**
   * ARM resource ID of the source app. App resource ID is of the form
   * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and
   * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
   */
  sourceWebAppId: string;
  /** Location of source app ex: West US or North Europe */
  sourceWebAppLocation?: string;
  /** App Service Environment. */
  hostingEnvironment?: string;
  /**
   * Application setting overrides for cloned app. If specified, these settings override the settings cloned
   * from source app. Otherwise, application settings from source app are retained.
   */
  appSettingsOverrides?: Record<string, string>;
  /** <code>true</code> to configure load balancing for source and destination app. */
  configureLoadBalancing?: boolean;
  /**
   * ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form
   * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}.
   */
  trafficManagerProfileId?: string;
  /** Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist. */
  trafficManagerProfileName?: string;
}

export function cloningInfoDeserializer(item: any): CloningInfo {
  return {
    correlationId: item["correlationId"],
    overwrite: item["overwrite"],
    cloneCustomHostNames: item["cloneCustomHostNames"],
    cloneSourceControl: item["cloneSourceControl"],
    sourceWebAppId: item["sourceWebAppId"],
    sourceWebAppLocation: item["sourceWebAppLocation"],
    hostingEnvironment: item["hostingEnvironment"],
    appSettingsOverrides: !item["appSettingsOverrides"]
      ? item["appSettingsOverrides"]
      : Object.fromEntries(
          Object.entries(item["appSettingsOverrides"]).map(([k, p]: [string, any]) => [k, p]),
        ),
    configureLoadBalancing: item["configureLoadBalancing"],
    trafficManagerProfileId: item["trafficManagerProfileId"],
    trafficManagerProfileName: item["trafficManagerProfileName"],
  };
}

/** The status of the last successful slot swap operation. */
export interface SlotSwapStatus {
  /** The time the last successful slot swap completed. */
  readonly timestampUtc?: Date;
  /** The source slot of the last swap operation. */
  readonly sourceSlotName?: string;
  /** The destination slot of the last swap operation. */
  readonly destinationSlotName?: string;
}

export function slotSwapStatusDeserializer(item: any): SlotSwapStatus {
  return {
    timestampUtc: !item["timestampUtc"] ? item["timestampUtc"] : new Date(item["timestampUtc"]),
    sourceSlotName: item["sourceSlotName"],
    destinationSlotName: item["destinationSlotName"],
  };
}

/** Site redundancy mode */
export type RedundancyMode = "None" | "Manual" | "Failover" | "ActiveActive" | "GeoRedundant";
/** Specifies the scope of uniqueness for the default hostname during resource creation */
export type AutoGeneratedDomainNameLabelScope =
  | "TenantReuse"
  | "SubscriptionReuse"
  | "ResourceGroupReuse"
  | "NoReuse";

/** Managed service identity. */
export interface ManagedServiceIdentity {
  /** Type of managed service identity. */
  type?: ManagedServiceIdentityType;
  /** Tenant of managed service identity. */
  readonly tenantId?: string;
  /** Principal Id of managed service identity. */
  readonly principalId?: string;
  /** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
  userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

export function managedServiceIdentityDeserializer(item: any): ManagedServiceIdentity {
  return {
    type: item["type"],
    tenantId: item["tenantId"],
    principalId: item["principalId"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : userAssignedIdentityRecordDeserializer(item["userAssignedIdentities"]),
  };
}

/** Type of managed service identity. */
export type ManagedServiceIdentityType =
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned"
  | "None";

export function userAssignedIdentityRecordDeserializer(
  item: Record<string, any>,
): Record<string, UserAssignedIdentity> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : userAssignedIdentityDeserializer(item[key]);
  });
  return result;
}

/** User Assigned identity. */
export interface UserAssignedIdentity {
  /** Principal Id of user assigned identity */
  readonly principalId?: string;
  /** Client Id of user assigned identity */
  readonly clientId?: string;
}

export function userAssignedIdentityDeserializer(item: any): UserAssignedIdentity {
  return {
    principalId: item["principalId"],
    clientId: item["clientId"],
  };
}

/** Extended Location. */
export interface ExtendedLocation {
  /** Name of extended location. */
  name?: string;
  /** Type of extended location. */
  readonly type?: string;
}

export function extendedLocationDeserializer(item: any): ExtendedLocation {
  return {
    name: item["name"],
    type: item["type"],
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

/** Collection of Application Stacks */
export interface _ApplicationStackCollection {
  /** The ApplicationStackResource items on this page */
  value: ApplicationStackResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _applicationStackCollectionDeserializer(item: any): _ApplicationStackCollection {
  return {
    value: applicationStackResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function applicationStackResourceArrayDeserializer(
  result: Array<ApplicationStackResource>,
): any[] {
  return result.map((item) => {
    return applicationStackResourceDeserializer(item);
  });
}

/** ARM resource for a ApplicationStack. */
export interface ApplicationStackResource extends ProxyOnlyResource {
  /** Application stack name. */
  namePropertiesName?: string;
  /** Application stack display name. */
  display?: string;
  /** Application stack dependency. */
  dependency?: string;
  /** List of major versions available. */
  majorVersions?: StackMajorVersion[];
  /** List of frameworks associated with application stack. */
  frameworks?: ApplicationStack[];
  /** <code>true</code> if this is the stack is deprecated; otherwise, <code>false</code>. */
  isDeprecated?: ApplicationStack[];
}

export function applicationStackResourceDeserializer(item: any): ApplicationStackResource {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _applicationStackResourcePropertiesDeserializer(item["properties"])),
  };
}

/** Application stack. */
export interface ApplicationStack {
  /** Application stack name. */
  name?: string;
  /** Application stack display name. */
  display?: string;
  /** Application stack dependency. */
  dependency?: string;
  /** List of major versions available. */
  majorVersions?: StackMajorVersion[];
  /** List of frameworks associated with application stack. */
  frameworks?: ApplicationStack[];
  /** <code>true</code> if this is the stack is deprecated; otherwise, <code>false</code>. */
  isDeprecated?: ApplicationStack[];
}

export function applicationStackDeserializer(item: any): ApplicationStack {
  return {
    name: item["name"],
    display: item["display"],
    dependency: item["dependency"],
    majorVersions: !item["majorVersions"]
      ? item["majorVersions"]
      : stackMajorVersionArrayDeserializer(item["majorVersions"]),
    frameworks: !item["frameworks"]
      ? item["frameworks"]
      : applicationStackArrayDeserializer(item["frameworks"]),
    isDeprecated: !item["isDeprecated"]
      ? item["isDeprecated"]
      : applicationStackArrayDeserializer(item["isDeprecated"]),
  };
}

export function stackMajorVersionArrayDeserializer(result: Array<StackMajorVersion>): any[] {
  return result.map((item) => {
    return stackMajorVersionDeserializer(item);
  });
}

/** Application stack major version. */
export interface StackMajorVersion {
  /** Application stack major version (display only). */
  displayVersion?: string;
  /** Application stack major version (runtime only). */
  runtimeVersion?: string;
  /** <code>true</code> if this is the default major version; otherwise, <code>false</code>. */
  isDefault?: boolean;
  /** Minor versions associated with the major version. */
  minorVersions?: StackMinorVersion[];
  /** <code>true</code> if this supports Application Insights; otherwise, <code>false</code>. */
  applicationInsights?: boolean;
  /** <code>true</code> if this stack is in Preview, otherwise <code>false</code>. */
  isPreview?: boolean;
  /** <code>true</code> if this stack has been deprecated, otherwise <code>false</code>. */
  isDeprecated?: boolean;
  /** <code>true</code> if this stack should be hidden for new customers on portal, otherwise <code>false</code>. */
  isHidden?: boolean;
  /**
   * <appSettings>
   * <appSetting name="FUNCTIONS_WORKER_RUNTIME" value="dotnet" />
   * </appSettings>
   * Example: All the function apps need AppSetting: "FUNCTIONS_WORKER_RUNTIME" to be set stack name
   */
  appSettingsDictionary?: Record<string, any>;
  /**
   * <siteConfigProperties>
   * <siteConfigProperty name="Use32BitWorkerProcess" value="false" />
   * </siteConfigProperties>
   * Example: All Linux Function Apps, need Use32BitWorkerProcess to be set to 0
   */
  siteConfigPropertiesDictionary?: Record<string, any>;
}

export function stackMajorVersionDeserializer(item: any): StackMajorVersion {
  return {
    displayVersion: item["displayVersion"],
    runtimeVersion: item["runtimeVersion"],
    isDefault: item["isDefault"],
    minorVersions: !item["minorVersions"]
      ? item["minorVersions"]
      : stackMinorVersionArrayDeserializer(item["minorVersions"]),
    applicationInsights: item["applicationInsights"],
    isPreview: item["isPreview"],
    isDeprecated: item["isDeprecated"],
    isHidden: item["isHidden"],
    appSettingsDictionary: !item["appSettingsDictionary"]
      ? item["appSettingsDictionary"]
      : Object.fromEntries(
          Object.entries(item["appSettingsDictionary"]).map(([k, p]: [string, any]) => [k, p]),
        ),
    siteConfigPropertiesDictionary: !item["siteConfigPropertiesDictionary"]
      ? item["siteConfigPropertiesDictionary"]
      : Object.fromEntries(
          Object.entries(item["siteConfigPropertiesDictionary"]).map(([k, p]: [string, any]) => [
            k,
            p,
          ]),
        ),
  };
}

export function stackMinorVersionArrayDeserializer(result: Array<StackMinorVersion>): any[] {
  return result.map((item) => {
    return stackMinorVersionDeserializer(item);
  });
}

/** Application stack minor version. */
export interface StackMinorVersion {
  /** Application stack minor version (display only). */
  displayVersion?: string;
  /** Application stack minor version (runtime only). */
  runtimeVersion?: string;
  /** <code>true</code> if this is the default minor version; otherwise, <code>false</code>. */
  isDefault?: boolean;
  /** <code>true</code> if this supports Remote Debugging, otherwise <code>false</code>. */
  isRemoteDebuggingEnabled?: boolean;
}

export function stackMinorVersionDeserializer(item: any): StackMinorVersion {
  return {
    displayVersion: item["displayVersion"],
    runtimeVersion: item["runtimeVersion"],
    isDefault: item["isDefault"],
    isRemoteDebuggingEnabled: item["isRemoteDebuggingEnabled"],
  };
}

export function applicationStackArrayDeserializer(result: Array<ApplicationStack>): any[] {
  return result.map((item) => {
    return applicationStackDeserializer(item);
  });
}

/** Collection of Function app Stacks */
export interface _FunctionAppStackCollection {
  /** The FunctionAppStack items on this page */
  value: FunctionAppStack[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _functionAppStackCollectionDeserializer(item: any): _FunctionAppStackCollection {
  return {
    value: functionAppStackArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function functionAppStackArrayDeserializer(result: Array<FunctionAppStack>): any[] {
  return result.map((item) => {
    return functionAppStackDeserializer(item);
  });
}

/** Function App Stack. */
export interface FunctionAppStack extends ProxyOnlyResource {
  /** Function App stack location. */
  readonly location?: string;
  /** Function App stack (display only). */
  readonly displayText?: string;
  /** Function App stack name. */
  readonly value?: string;
  /** List of major versions available. */
  readonly majorVersions?: FunctionAppMajorVersion[];
  /** Function App stack preferred OS. */
  readonly preferredOs?: StackPreferredOs;
}

export function functionAppStackDeserializer(item: any): FunctionAppStack {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    location: item["location"],
    ...(!item["properties"]
      ? item["properties"]
      : _functionAppStackPropertiesDeserializer(item["properties"])),
  };
}

/** FunctionAppStack resource specific properties */
export interface FunctionAppStackProperties {
  /** Function App stack (display only). */
  readonly displayText?: string;
  /** Function App stack name. */
  readonly value?: string;
  /** List of major versions available. */
  readonly majorVersions?: FunctionAppMajorVersion[];
  /** Function App stack preferred OS. */
  readonly preferredOs?: StackPreferredOs;
}

export function functionAppStackPropertiesDeserializer(item: any): FunctionAppStackProperties {
  return {
    displayText: item["displayText"],
    value: item["value"],
    majorVersions: !item["majorVersions"]
      ? item["majorVersions"]
      : functionAppMajorVersionArrayDeserializer(item["majorVersions"]),
    preferredOs: item["preferredOs"],
  };
}

export function functionAppMajorVersionArrayDeserializer(
  result: Array<FunctionAppMajorVersion>,
): any[] {
  return result.map((item) => {
    return functionAppMajorVersionDeserializer(item);
  });
}

/** Function App stack major version. */
export interface FunctionAppMajorVersion {
  /** Function App stack major version (display only). */
  readonly displayText?: string;
  /** Function App stack major version name. */
  readonly value?: string;
  /** Minor versions associated with the major version. */
  readonly minorVersions?: FunctionAppMinorVersion[];
}

export function functionAppMajorVersionDeserializer(item: any): FunctionAppMajorVersion {
  return {
    displayText: item["displayText"],
    value: item["value"],
    minorVersions: !item["minorVersions"]
      ? item["minorVersions"]
      : functionAppMinorVersionArrayDeserializer(item["minorVersions"]),
  };
}

export function functionAppMinorVersionArrayDeserializer(
  result: Array<FunctionAppMinorVersion>,
): any[] {
  return result.map((item) => {
    return functionAppMinorVersionDeserializer(item);
  });
}

/** Function App stack minor version. */
export interface FunctionAppMinorVersion {
  /** Function App stack (display only). */
  readonly displayText?: string;
  /** Function App stack name. */
  readonly value?: string;
  /** Settings associated with the minor version. */
  readonly stackSettings?: FunctionAppRuntimes;
}

export function functionAppMinorVersionDeserializer(item: any): FunctionAppMinorVersion {
  return {
    displayText: item["displayText"],
    value: item["value"],
    stackSettings: !item["stackSettings"]
      ? item["stackSettings"]
      : functionAppRuntimesDeserializer(item["stackSettings"]),
  };
}

/** Function App stack runtimes. */
export interface FunctionAppRuntimes {
  /** Linux-specific settings associated with the minor version. */
  readonly linuxRuntimeSettings?: FunctionAppRuntimeSettings;
  /** Windows-specific settings associated with the minor version. */
  readonly windowsRuntimeSettings?: FunctionAppRuntimeSettings;
}

export function functionAppRuntimesDeserializer(item: any): FunctionAppRuntimes {
  return {
    linuxRuntimeSettings: !item["linuxRuntimeSettings"]
      ? item["linuxRuntimeSettings"]
      : functionAppRuntimeSettingsDeserializer(item["linuxRuntimeSettings"]),
    windowsRuntimeSettings: !item["windowsRuntimeSettings"]
      ? item["windowsRuntimeSettings"]
      : functionAppRuntimeSettingsDeserializer(item["windowsRuntimeSettings"]),
  };
}

/** Function App runtime settings. */
export interface FunctionAppRuntimeSettings {
  /** Function App stack minor version (runtime only). */
  readonly runtimeVersion?: string;
  /** <code>true</code> if remote debugging is supported for the stack; otherwise, <code>false</code>. */
  readonly remoteDebuggingSupported?: boolean;
  /** Application Insights settings associated with the minor version. */
  readonly appInsightsSettings?: AppInsightsWebAppStackSettings;
  /** GitHub Actions settings associated with the minor version. */
  readonly gitHubActionSettings?: GitHubActionWebAppStackSettings;
  /** Application settings associated with the minor version. */
  readonly appSettingsDictionary?: Record<string, string>;
  /** Configuration settings associated with the minor version. */
  readonly siteConfigPropertiesDictionary?: SiteConfigPropertiesDictionary;
  /** List of supported Functions extension versions. */
  readonly supportedFunctionsExtensionVersions?: string[];
  /** <code>true</code> if the stack is in preview; otherwise, <code>false</code>. */
  readonly isPreview?: boolean;
  /** <code>true</code> if the stack is deprecated; otherwise, <code>false</code>. */
  readonly isDeprecated?: boolean;
  /** <code>true</code> if the stack should be hidden; otherwise, <code>false</code>. */
  readonly isHidden?: boolean;
  /** End-of-life date for the minor version. */
  readonly endOfLifeDate?: Date;
  /** <code>true</code> if the stack version is auto-updated; otherwise, <code>false</code>. */
  readonly isAutoUpdate?: boolean;
  /** <code>true</code> if the minor version is early-access; otherwise, <code>false</code>. */
  readonly isEarlyAccess?: boolean;
  /** <code>true</code> if the minor version the default; otherwise, <code>false</code>. */
  readonly isDefault?: boolean;
}

export function functionAppRuntimeSettingsDeserializer(item: any): FunctionAppRuntimeSettings {
  return {
    runtimeVersion: item["runtimeVersion"],
    remoteDebuggingSupported: item["remoteDebuggingSupported"],
    appInsightsSettings: !item["appInsightsSettings"]
      ? item["appInsightsSettings"]
      : appInsightsWebAppStackSettingsDeserializer(item["appInsightsSettings"]),
    gitHubActionSettings: !item["gitHubActionSettings"]
      ? item["gitHubActionSettings"]
      : gitHubActionWebAppStackSettingsDeserializer(item["gitHubActionSettings"]),
    appSettingsDictionary: !item["appSettingsDictionary"]
      ? item["appSettingsDictionary"]
      : Object.fromEntries(
          Object.entries(item["appSettingsDictionary"]).map(([k, p]: [string, any]) => [k, p]),
        ),
    siteConfigPropertiesDictionary: !item["siteConfigPropertiesDictionary"]
      ? item["siteConfigPropertiesDictionary"]
      : siteConfigPropertiesDictionaryDeserializer(item["siteConfigPropertiesDictionary"]),
    supportedFunctionsExtensionVersions: !item["supportedFunctionsExtensionVersions"]
      ? item["supportedFunctionsExtensionVersions"]
      : item["supportedFunctionsExtensionVersions"].map((p: any) => {
          return p;
        }),
    isPreview: item["isPreview"],
    isDeprecated: item["isDeprecated"],
    isHidden: item["isHidden"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    isAutoUpdate: item["isAutoUpdate"],
    isEarlyAccess: item["isEarlyAccess"],
    isDefault: item["isDefault"],
  };
}

/** App Insights Web App stack settings. */
export interface AppInsightsWebAppStackSettings {
  /** <code>true</code> if remote Application Insights is supported for the stack; otherwise, <code>false</code>. */
  readonly isSupported?: boolean;
  /** <code>true</code> if Application Insights is disabled by default for the stack; otherwise, <code>false</code>. */
  readonly isDefaultOff?: boolean;
}

export function appInsightsWebAppStackSettingsDeserializer(
  item: any,
): AppInsightsWebAppStackSettings {
  return {
    isSupported: item["isSupported"],
    isDefaultOff: item["isDefaultOff"],
  };
}

/** GitHub Actions Web App stack settings. */
export interface GitHubActionWebAppStackSettings {
  /** <code>true</code> if GitHub Actions is supported for the stack; otherwise, <code>false</code>. */
  readonly isSupported?: boolean;
  /** The minor version that is supported for GitHub Actions. */
  readonly supportedVersion?: string;
}

export function gitHubActionWebAppStackSettingsDeserializer(
  item: any,
): GitHubActionWebAppStackSettings {
  return {
    isSupported: item["isSupported"],
    supportedVersion: item["supportedVersion"],
  };
}

/** Site config properties dictionary. */
export interface SiteConfigPropertiesDictionary {
  /** <code>true</code> if use32BitWorkerProcess should be set to true for the stack; otherwise, <code>false</code>. */
  readonly use32BitWorkerProcess?: boolean;
  /** LinuxFxVersion configuration setting. */
  readonly linuxFxVersion?: string;
  /** JavaVersion configuration setting. */
  readonly javaVersion?: string;
  /** PowerShellVersion configuration setting. */
  readonly powerShellVersion?: string;
}

export function siteConfigPropertiesDictionaryDeserializer(
  item: any,
): SiteConfigPropertiesDictionary {
  return {
    use32BitWorkerProcess: item["use32BitWorkerProcess"],
    linuxFxVersion: item["linuxFxVersion"],
    javaVersion: item["javaVersion"],
    powerShellVersion: item["powerShellVersion"],
  };
}

/** Function App stack preferred OS. */
export type StackPreferredOs = "Windows" | "Linux";

/** Collection of Web app Stacks */
export interface _WebAppStackCollection {
  /** The WebAppStack items on this page */
  value: WebAppStack[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _webAppStackCollectionDeserializer(item: any): _WebAppStackCollection {
  return {
    value: webAppStackArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function webAppStackArrayDeserializer(result: Array<WebAppStack>): any[] {
  return result.map((item) => {
    return webAppStackDeserializer(item);
  });
}

/** Web App stack. */
export interface WebAppStack extends ProxyOnlyResource {
  /** Web App stack location. */
  readonly location?: string;
  /** Web App stack (display only). */
  readonly displayText?: string;
  /** Web App stack name. */
  readonly value?: string;
  /** List of major versions available. */
  readonly majorVersions?: WebAppMajorVersion[];
  /** Web App stack preferred OS. */
  readonly preferredOs?: StackPreferredOs;
}

export function webAppStackDeserializer(item: any): WebAppStack {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    location: item["location"],
    ...(!item["properties"]
      ? item["properties"]
      : _webAppStackPropertiesDeserializer(item["properties"])),
  };
}

/** WebAppStack resource specific properties */
export interface WebAppStackProperties {
  /** Web App stack (display only). */
  readonly displayText?: string;
  /** Web App stack name. */
  readonly value?: string;
  /** List of major versions available. */
  readonly majorVersions?: WebAppMajorVersion[];
  /** Web App stack preferred OS. */
  readonly preferredOs?: StackPreferredOs;
}

export function webAppStackPropertiesDeserializer(item: any): WebAppStackProperties {
  return {
    displayText: item["displayText"],
    value: item["value"],
    majorVersions: !item["majorVersions"]
      ? item["majorVersions"]
      : webAppMajorVersionArrayDeserializer(item["majorVersions"]),
    preferredOs: item["preferredOs"],
  };
}

export function webAppMajorVersionArrayDeserializer(result: Array<WebAppMajorVersion>): any[] {
  return result.map((item) => {
    return webAppMajorVersionDeserializer(item);
  });
}

/** Web App stack major version. */
export interface WebAppMajorVersion {
  /** Web App stack major version (display only). */
  readonly displayText?: string;
  /** Web App stack major version name. */
  readonly value?: string;
  /** Minor versions associated with the major version. */
  readonly minorVersions?: WebAppMinorVersion[];
}

export function webAppMajorVersionDeserializer(item: any): WebAppMajorVersion {
  return {
    displayText: item["displayText"],
    value: item["value"],
    minorVersions: !item["minorVersions"]
      ? item["minorVersions"]
      : webAppMinorVersionArrayDeserializer(item["minorVersions"]),
  };
}

export function webAppMinorVersionArrayDeserializer(result: Array<WebAppMinorVersion>): any[] {
  return result.map((item) => {
    return webAppMinorVersionDeserializer(item);
  });
}

/** Web App stack minor version. */
export interface WebAppMinorVersion {
  /** Web App stack minor version (display only). */
  readonly displayText?: string;
  /** Web App stack major version name. */
  readonly value?: string;
  /** Settings associated with the minor version. */
  readonly stackSettings?: WebAppRuntimes;
}

export function webAppMinorVersionDeserializer(item: any): WebAppMinorVersion {
  return {
    displayText: item["displayText"],
    value: item["value"],
    stackSettings: !item["stackSettings"]
      ? item["stackSettings"]
      : webAppRuntimesDeserializer(item["stackSettings"]),
  };
}

/** Web App stack runtimes. */
export interface WebAppRuntimes {
  /** Linux-specific settings associated with the minor version. */
  readonly linuxRuntimeSettings?: WebAppRuntimeSettings;
  /** Windows-specific settings associated with the minor version. */
  readonly windowsRuntimeSettings?: WebAppRuntimeSettings;
  /** Linux-specific settings associated with the Java container minor version. */
  readonly linuxContainerSettings?: LinuxJavaContainerSettings;
  /** Windows-specific settings associated with the Java container minor version. */
  readonly windowsContainerSettings?: WindowsJavaContainerSettings;
}

export function webAppRuntimesDeserializer(item: any): WebAppRuntimes {
  return {
    linuxRuntimeSettings: !item["linuxRuntimeSettings"]
      ? item["linuxRuntimeSettings"]
      : webAppRuntimeSettingsDeserializer(item["linuxRuntimeSettings"]),
    windowsRuntimeSettings: !item["windowsRuntimeSettings"]
      ? item["windowsRuntimeSettings"]
      : webAppRuntimeSettingsDeserializer(item["windowsRuntimeSettings"]),
    linuxContainerSettings: !item["linuxContainerSettings"]
      ? item["linuxContainerSettings"]
      : linuxJavaContainerSettingsDeserializer(item["linuxContainerSettings"]),
    windowsContainerSettings: !item["windowsContainerSettings"]
      ? item["windowsContainerSettings"]
      : windowsJavaContainerSettingsDeserializer(item["windowsContainerSettings"]),
  };
}

/** Web App runtime settings. */
export interface WebAppRuntimeSettings {
  /** Web App stack minor version (runtime only). */
  readonly runtimeVersion?: string;
  /** <code>true</code> if remote debugging is supported for the stack; otherwise, <code>false</code>. */
  readonly remoteDebuggingSupported?: boolean;
  /** Application Insights settings associated with the minor version. */
  readonly appInsightsSettings?: AppInsightsWebAppStackSettings;
  /** GitHub Actions settings associated with the minor version. */
  readonly gitHubActionSettings?: GitHubActionWebAppStackSettings;
  /** <code>true</code> if the stack is in preview; otherwise, <code>false</code>. */
  readonly isPreview?: boolean;
  /** <code>true</code> if the stack is deprecated; otherwise, <code>false</code>. */
  readonly isDeprecated?: boolean;
  /** <code>true</code> if the stack should be hidden; otherwise, <code>false</code>. */
  readonly isHidden?: boolean;
  /** End-of-life date for the minor version. */
  readonly endOfLifeDate?: Date;
  /** <code>true</code> if the stack version is auto-updated; otherwise, <code>false</code>. */
  readonly isAutoUpdate?: boolean;
  /** <code>true</code> if the minor version is early-access; otherwise, <code>false</code>. */
  readonly isEarlyAccess?: boolean;
}

export function webAppRuntimeSettingsDeserializer(item: any): WebAppRuntimeSettings {
  return {
    runtimeVersion: item["runtimeVersion"],
    remoteDebuggingSupported: item["remoteDebuggingSupported"],
    appInsightsSettings: !item["appInsightsSettings"]
      ? item["appInsightsSettings"]
      : appInsightsWebAppStackSettingsDeserializer(item["appInsightsSettings"]),
    gitHubActionSettings: !item["gitHubActionSettings"]
      ? item["gitHubActionSettings"]
      : gitHubActionWebAppStackSettingsDeserializer(item["gitHubActionSettings"]),
    isPreview: item["isPreview"],
    isDeprecated: item["isDeprecated"],
    isHidden: item["isHidden"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    isAutoUpdate: item["isAutoUpdate"],
    isEarlyAccess: item["isEarlyAccess"],
  };
}

/** Linux Java Container settings. */
export interface LinuxJavaContainerSettings {
  /** Java 11 version (runtime only). */
  readonly java11Runtime?: string;
  /** Java 8 version (runtime only). */
  readonly java8Runtime?: string;
  /** <code>true</code> if the stack is in preview; otherwise, <code>false</code>. */
  readonly isPreview?: boolean;
  /** <code>true</code> if the stack is deprecated; otherwise, <code>false</code>. */
  readonly isDeprecated?: boolean;
  /** <code>true</code> if the stack should be hidden; otherwise, <code>false</code>. */
  readonly isHidden?: boolean;
  /** End-of-life date for the minor version. */
  readonly endOfLifeDate?: Date;
  /** <code>true</code> if the stack version is auto-updated; otherwise, <code>false</code>. */
  readonly isAutoUpdate?: boolean;
  /** <code>true</code> if the minor version is early-access; otherwise, <code>false</code>. */
  readonly isEarlyAccess?: boolean;
}

export function linuxJavaContainerSettingsDeserializer(item: any): LinuxJavaContainerSettings {
  return {
    java11Runtime: item["java11Runtime"],
    java8Runtime: item["java8Runtime"],
    isPreview: item["isPreview"],
    isDeprecated: item["isDeprecated"],
    isHidden: item["isHidden"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    isAutoUpdate: item["isAutoUpdate"],
    isEarlyAccess: item["isEarlyAccess"],
  };
}

/** Windows Java Container settings. */
export interface WindowsJavaContainerSettings {
  /** Java container (runtime only). */
  readonly javaContainer?: string;
  /** Java container version (runtime only). */
  readonly javaContainerVersion?: string;
  /** <code>true</code> if the stack is in preview; otherwise, <code>false</code>. */
  readonly isPreview?: boolean;
  /** <code>true</code> if the stack is deprecated; otherwise, <code>false</code>. */
  readonly isDeprecated?: boolean;
  /** <code>true</code> if the stack should be hidden; otherwise, <code>false</code>. */
  readonly isHidden?: boolean;
  /** End-of-life date for the minor version. */
  readonly endOfLifeDate?: Date;
  /** <code>true</code> if the stack version is auto-updated; otherwise, <code>false</code>. */
  readonly isAutoUpdate?: boolean;
  /** <code>true</code> if the minor version is early-access; otherwise, <code>false</code>. */
  readonly isEarlyAccess?: boolean;
}

export function windowsJavaContainerSettingsDeserializer(item: any): WindowsJavaContainerSettings {
  return {
    javaContainer: item["javaContainer"],
    javaContainerVersion: item["javaContainerVersion"],
    isPreview: item["isPreview"],
    isDeprecated: item["isDeprecated"],
    isHidden: item["isHidden"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    isAutoUpdate: item["isAutoUpdate"],
    isEarlyAccess: item["isEarlyAccess"],
  };
}

/** Collection of recommendations. */
export interface _RecommendationCollection {
  /** The Recommendation items on this page */
  value: Recommendation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _recommendationCollectionDeserializer(item: any): _RecommendationCollection {
  return {
    value: recommendationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function recommendationArrayDeserializer(result: Array<Recommendation>): any[] {
  return result.map((item) => {
    return recommendationDeserializer(item);
  });
}

/** Represents a recommendation result generated by the recommendation engine. */
export interface Recommendation extends ProxyOnlyResource {
  /** Timestamp when this instance was created. */
  creationTime?: Date;
  /** A GUID value that each recommendation object is associated with. */
  recommendationId?: string;
  /** Full ARM resource ID string that this recommendation object is associated with. */
  resourceId?: string;
  /** Name of a resource type this recommendation applies, e.g. Subscription, ServerFarm, Site. */
  resourceScope?: ResourceScopeType;
  /** Unique name of the rule. */
  ruleName?: string;
  /** UI friendly name of the rule (may not be unique). */
  displayName?: string;
  /** Recommendation text. */
  message?: string;
  /** Level indicating how critical this recommendation can impact. */
  level?: NotificationLevel;
  /** List of channels that this recommendation can apply. */
  channels?: Channels;
  /** The list of category tags that this recommendation belongs to. */
  readonly categoryTags?: string[];
  /** Name of action recommended by this object. */
  actionName?: string;
  /** True if this recommendation is still valid (i.e. "actionable"). False if it is invalid. */
  enabled?: number;
  /** The list of states of this recommendation. If it's null then it should be considered "Active". */
  states?: string[];
  /** The beginning time in UTC of a range that the recommendation refers to. */
  startTime?: Date;
  /** The end time in UTC of a range that the recommendation refers to. */
  endTime?: Date;
  /** When to notify this recommendation next in UTC. Null means that this will never be notified anymore. */
  nextNotificationTime?: Date;
  /** Date and time in UTC when this notification expires. */
  notificationExpirationTime?: Date;
  /** Last timestamp in UTC this instance was actually notified. Null means that this recommendation hasn't been notified yet. */
  notifiedTime?: Date;
  /** A metric value measured by the rule. */
  score?: number;
  /** True if this is associated with a dynamically added rule */
  isDynamic?: boolean;
  /** Extension name of the portal if exists. */
  extensionName?: string;
  /** Deep link to a blade on the portal. */
  bladeName?: string;
  /** Forward link to an external document associated with the rule. */
  forwardLink?: string;
}

export function recommendationDeserializer(item: any): Recommendation {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _recommendationPropertiesDeserializer(item["properties"])),
  };
}

/** Recommendation resource specific properties */
export interface RecommendationProperties {
  /** Timestamp when this instance was created. */
  creationTime?: Date;
  /** A GUID value that each recommendation object is associated with. */
  recommendationId?: string;
  /** Full ARM resource ID string that this recommendation object is associated with. */
  resourceId?: string;
  /** Name of a resource type this recommendation applies, e.g. Subscription, ServerFarm, Site. */
  resourceScope?: ResourceScopeType;
  /** Unique name of the rule. */
  ruleName?: string;
  /** UI friendly name of the rule (may not be unique). */
  displayName?: string;
  /** Recommendation text. */
  message?: string;
  /** Level indicating how critical this recommendation can impact. */
  level?: NotificationLevel;
  /** List of channels that this recommendation can apply. */
  channels?: Channels;
  /** The list of category tags that this recommendation belongs to. */
  readonly categoryTags?: string[];
  /** Name of action recommended by this object. */
  actionName?: string;
  /** True if this recommendation is still valid (i.e. "actionable"). False if it is invalid. */
  enabled?: number;
  /** The list of states of this recommendation. If it's null then it should be considered "Active". */
  states?: string[];
  /** The beginning time in UTC of a range that the recommendation refers to. */
  startTime?: Date;
  /** The end time in UTC of a range that the recommendation refers to. */
  endTime?: Date;
  /** When to notify this recommendation next in UTC. Null means that this will never be notified anymore. */
  nextNotificationTime?: Date;
  /** Date and time in UTC when this notification expires. */
  notificationExpirationTime?: Date;
  /** Last timestamp in UTC this instance was actually notified. Null means that this recommendation hasn't been notified yet. */
  notifiedTime?: Date;
  /** A metric value measured by the rule. */
  score?: number;
  /** True if this is associated with a dynamically added rule */
  isDynamic?: boolean;
  /** Extension name of the portal if exists. */
  extensionName?: string;
  /** Deep link to a blade on the portal. */
  bladeName?: string;
  /** Forward link to an external document associated with the rule. */
  forwardLink?: string;
}

export function recommendationPropertiesDeserializer(item: any): RecommendationProperties {
  return {
    creationTime: !item["creationTime"] ? item["creationTime"] : new Date(item["creationTime"]),
    recommendationId: item["recommendationId"],
    resourceId: item["resourceId"],
    resourceScope: item["resourceScope"],
    ruleName: item["ruleName"],
    displayName: item["displayName"],
    message: item["message"],
    level: item["level"],
    channels: item["channels"],
    categoryTags: !item["categoryTags"]
      ? item["categoryTags"]
      : item["categoryTags"].map((p: any) => {
          return p;
        }),
    actionName: item["actionName"],
    enabled: item["enabled"],
    states: !item["states"]
      ? item["states"]
      : item["states"].map((p: any) => {
          return p;
        }),
    startTime: !item["startTime"] ? item["startTime"] : new Date(item["startTime"]),
    endTime: !item["endTime"] ? item["endTime"] : new Date(item["endTime"]),
    nextNotificationTime: !item["nextNotificationTime"]
      ? item["nextNotificationTime"]
      : new Date(item["nextNotificationTime"]),
    notificationExpirationTime: !item["notificationExpirationTime"]
      ? item["notificationExpirationTime"]
      : new Date(item["notificationExpirationTime"]),
    notifiedTime: !item["notifiedTime"] ? item["notifiedTime"] : new Date(item["notifiedTime"]),
    score: item["score"],
    isDynamic: item["isDynamic"],
    extensionName: item["extensionName"],
    bladeName: item["bladeName"],
    forwardLink: item["forwardLink"],
  };
}

/** Name of a resource type this recommendation applies, e.g. Subscription, ServerFarm, Site. */
export enum KnownResourceScopeType {
  /** ServerFarm */
  ServerFarm = "ServerFarm",
  /** Subscription */
  Subscription = "Subscription",
  /** WebSite */
  WebSite = "WebSite",
}

/**
 * Name of a resource type this recommendation applies, e.g. Subscription, ServerFarm, Site. \
 * {@link KnownResourceScopeType} can be used interchangeably with ResourceScopeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServerFarm** \
 * **Subscription** \
 * **WebSite**
 */
export type ResourceScopeType = string;
/** Level indicating how critical this recommendation can impact. */
export type NotificationLevel = "Critical" | "Warning" | "Information" | "NonUrgentSuggestion";
/** List of channels that this recommendation can apply. */
export type Channels = "Notification" | "Api" | "Email" | "Webhook" | "All";

/** Paged collection of CsmUsageQuota items */
export interface _CsmUsageQuotaCollection {
  /** The CsmUsageQuota items on this page */
  value: CsmUsageQuota[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _csmUsageQuotaCollectionDeserializer(item: any): _CsmUsageQuotaCollection {
  return {
    value: csmUsageQuotaArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function csmUsageQuotaArrayDeserializer(result: Array<CsmUsageQuota>): any[] {
  return result.map((item) => {
    return csmUsageQuotaDeserializer(item);
  });
}

/** Usage of the quota resource. */
export interface CsmUsageQuota {
  /** Units of measurement for the quota resource. */
  unit?: string;
  /** Next reset time for the resource counter. */
  nextResetTime?: Date;
  /** The current value of the resource counter. */
  currentValue?: number;
  /** The resource limit. */
  limit?: number;
  /** Quota name. */
  name?: LocalizableString;
}

export function csmUsageQuotaDeserializer(item: any): CsmUsageQuota {
  return {
    unit: item["unit"],
    nextResetTime: !item["nextResetTime"] ? item["nextResetTime"] : new Date(item["nextResetTime"]),
    currentValue: item["currentValue"],
    limit: item["limit"],
    name: !item["name"] ? item["name"] : localizableStringDeserializer(item["name"]),
  };
}

/** Localizable string object containing the name and a localized value. */
export interface LocalizableString {
  /** Non-localized name. */
  value?: string;
  /** Localized name. */
  localizedValue?: string;
}

export function localizableStringDeserializer(item: any): LocalizableString {
  return {
    value: item["value"],
    localizedValue: item["localizedValue"],
  };
}

/** Request entity for previewing the Static Site workflow */
export interface StaticSitesWorkflowPreviewRequest extends ProxyOnlyResource {
  /** URL for the repository of the static site. */
  repositoryUrl?: string;
  /** The target branch in the repository. */
  branch?: string;
  /** Build properties to configure on the repository. */
  buildProperties?: StaticSiteBuildProperties;
}

export function staticSitesWorkflowPreviewRequestSerializer(
  item: StaticSitesWorkflowPreviewRequest,
): any {
  return {
    kind: item["kind"],
    properties: areAllPropsUndefined(item, ["repositoryUrl", "branch", "buildProperties"])
      ? undefined
      : _staticSitesWorkflowPreviewRequestPropertiesSerializer(item),
  };
}

/** StaticSitesWorkflowPreviewRequest resource specific properties */
export interface StaticSitesWorkflowPreviewRequestProperties {
  /** URL for the repository of the static site. */
  repositoryUrl?: string;
  /** The target branch in the repository. */
  branch?: string;
  /** Build properties to configure on the repository. */
  buildProperties?: StaticSiteBuildProperties;
}

export function staticSitesWorkflowPreviewRequestPropertiesSerializer(
  item: StaticSitesWorkflowPreviewRequestProperties,
): any {
  return {
    repositoryUrl: item["repositoryUrl"],
    branch: item["branch"],
    buildProperties: !item["buildProperties"]
      ? item["buildProperties"]
      : staticSiteBuildPropertiesSerializer(item["buildProperties"]),
  };
}

/** Build properties for the static site. */
export interface StaticSiteBuildProperties {
  /** The path to the app code within the repository. */
  appLocation?: string;
  /** The path to the api code within the repository. */
  apiLocation?: string;
  /** Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation) */
  appArtifactLocation?: string;
  /** The output path of the app after building. */
  outputLocation?: string;
  /** A custom command to run during deployment of the static content application. */
  appBuildCommand?: string;
  /** A custom command to run during deployment of the Azure Functions API application. */
  apiBuildCommand?: string;
  /** Skip Github Action workflow generation. */
  skipGithubActionWorkflowGeneration?: boolean;
  /** Github Action secret name override. */
  githubActionSecretNameOverride?: string;
}

export function staticSiteBuildPropertiesSerializer(item: StaticSiteBuildProperties): any {
  return {
    appLocation: item["appLocation"],
    apiLocation: item["apiLocation"],
    appArtifactLocation: item["appArtifactLocation"],
    outputLocation: item["outputLocation"],
    appBuildCommand: item["appBuildCommand"],
    apiBuildCommand: item["apiBuildCommand"],
    skipGithubActionWorkflowGeneration: item["skipGithubActionWorkflowGeneration"],
    githubActionSecretNameOverride: item["githubActionSecretNameOverride"],
  };
}

/** Preview for the Static Site Workflow to be generated */
export interface StaticSitesWorkflowPreview extends ProxyOnlyResource {
  /** The path for the workflow file to be generated */
  readonly path?: string;
  /** The contents for the workflow file to be generated */
  readonly contents?: string;
}

export function staticSitesWorkflowPreviewDeserializer(item: any): StaticSitesWorkflowPreview {
  return {
    id: item["id"],
    name: item["name"],
    kind: item["kind"],
    type: item["type"],
    ...(!item["properties"]
      ? item["properties"]
      : _staticSitesWorkflowPreviewPropertiesDeserializer(item["properties"])),
  };
}

/** StaticSitesWorkflowPreview resource specific properties */
export interface StaticSitesWorkflowPreviewProperties {
  /** The path for the workflow file to be generated */
  readonly path?: string;
  /** The contents for the workflow file to be generated */
  readonly contents?: string;
}

export function staticSitesWorkflowPreviewPropertiesDeserializer(
  item: any,
): StaticSitesWorkflowPreviewProperties {
  return {
    path: item["path"],
    contents: item["contents"],
  };
}

/** Known values of {@link SkuName} that the service accepts. */
export enum KnownSkuName {
  /** Free */
  Free = "Free",
  /** Shared */
  Shared = "Shared",
  /** Basic */
  Basic = "Basic",
  /** Standard */
  Standard = "Standard",
  /** Premium */
  Premium = "Premium",
  /** Dynamic */
  Dynamic = "Dynamic",
  /** Isolated */
  Isolated = "Isolated",
  /** IsolatedV2 */
  IsolatedV2 = "IsolatedV2",
  /** PremiumV2 */
  PremiumV2 = "PremiumV2",
  /** PremiumV3 */
  PremiumV3 = "PremiumV3",
  /** PremiumContainer */
  PremiumContainer = "PremiumContainer",
  /** ElasticPremium */
  ElasticPremium = "ElasticPremium",
  /** ElasticIsolated */
  ElasticIsolated = "ElasticIsolated",
  /** FlexConsumption */
  FlexConsumption = "FlexConsumption",
}

/** Type of SkuName */
export type SkuName = string;

/** Known values of {@link ProviderOsTypeSelected} that the service accepts. */
export enum KnownProviderOsTypeSelected {
  /** Windows */
  Windows = "Windows",
  /** Linux */
  Linux = "Linux",
  /** WindowsFunctions */
  WindowsFunctions = "WindowsFunctions",
  /** LinuxFunctions */
  LinuxFunctions = "LinuxFunctions",
  /** All */
  All = "All",
}

/** Type of ProviderOsTypeSelected */
export type ProviderOsTypeSelected = string;

/** Known values of {@link ProviderStackOsType} that the service accepts. */
export enum KnownProviderStackOsType {
  /** Windows */
  Windows = "Windows",
  /** Linux */
  Linux = "Linux",
  /** All */
  All = "All",
}

/** Type of ProviderStackOsType */
export type ProviderStackOsType = string;

/** The available API versions. */
export enum KnownVersions {
  /** The 2025-03-01 API version. */
  V20250301 = "2025-03-01",
  /** The 2025-05-01 API version. */
  V20250501 = "2025-05-01",
}

export function _validateRequestPropertiesSerializer(item: ValidateRequest): any {
  return {
    serverFarmId: item["serverFarmId"],
    skuName: item["skuName"],
    needLinuxWorkers: item["needLinuxWorkers"],
    isSpot: item["isSpot"],
    capacity: item["capacity"],
    hostingEnvironment: item["hostingEnvironment"],
    isXenon: item["isXenon"],
    containerRegistryBaseUrl: item["containerRegistryBaseUrl"],
    containerRegistryUsername: item["containerRegistryUsername"],
    containerRegistryPassword: item["containerRegistryPassword"],
    containerImageRepository: item["containerImageRepository"],
    containerImageTag: item["containerImageTag"],
    containerImagePlatform: item["containerImagePlatform"],
    appServiceEnvironment: !item["appServiceEnvironment"]
      ? item["appServiceEnvironment"]
      : appServiceEnvironmentSerializer(item["appServiceEnvironment"]),
  };
}

export function _geoRegionPropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    displayName: item["displayName"],
    orgDomain: item["orgDomain"],
  };
}

export function _aseRegionPropertiesDeserializer(item: any) {
  return {
    displayName: item["displayName"],
    standard: item["standard"],
    dedicatedHost: item["dedicatedHost"],
    zoneRedundant: item["zoneRedundant"],
    availableSku: !item["availableSku"]
      ? item["availableSku"]
      : item["availableSku"].map((p: any) => {
          return p;
        }),
    availableOS: !item["availableOS"]
      ? item["availableOS"]
      : item["availableOS"].map((p: any) => {
          return p;
        }),
  };
}

export function _billingMeterPropertiesDeserializer(item: any) {
  return {
    meterId: item["meterId"],
    billingLocation: item["billingLocation"],
    shortName: item["shortName"],
    friendlyName: item["friendlyName"],
    resourceType: item["resourceType"],
    osType: item["osType"],
    multiplier: item["multiplier"],
  };
}

export function _customHostnameSitesPropertiesDeserializer(item: any) {
  return {
    customHostname: item["customHostname"],
    region: item["region"],
  };
}

export function _premierAddOnOfferPropertiesDeserializer(item: any) {
  return {
    sku: item["sku"],
    product: item["product"],
    vendor: item["vendor"],
    promoCodeRequired: item["promoCodeRequired"],
    quota: item["quota"],
    webHostingPlanRestrictions: item["webHostingPlanRestrictions"],
    privacyPolicyUrl: item["privacyPolicyUrl"],
    legalTermsUrl: item["legalTermsUrl"],
    marketplacePublisher: item["marketplacePublisher"],
    marketplaceOffer: item["marketplaceOffer"],
  };
}

export function _vnetParametersPropertiesSerializer(item: VnetParameters): any {
  return {
    vnetResourceGroup: item["vnetResourceGroup"],
    vnetName: item["vnetName"],
    vnetSubnetName: item["vnetSubnetName"],
    subnetResourceId: item["subnetResourceId"],
  };
}

export function _vnetValidationTestFailurePropertiesDeserializer(item: any) {
  return {
    testName: item["testName"],
    details: item["details"],
  };
}

export function _vnetValidationFailureDetailsPropertiesDeserializer(item: any) {
  return {
    message: item["message"],
    failed: item["failed"],
    failedTests: !item["failedTests"]
      ? item["failedTests"]
      : vnetValidationTestFailureArrayDeserializer(item["failedTests"]),
    warnings: !item["warnings"]
      ? item["warnings"]
      : vnetValidationTestFailureArrayDeserializer(item["warnings"]),
  };
}

export function _pushSettingsPropertiesDeserializer(item: any) {
  return {
    isPushEnabled: item["isPushEnabled"],
    tagWhitelistJson: item["tagWhitelistJson"],
    tagsRequiringAuth: item["tagsRequiringAuth"],
    dynamicTagsJson: item["dynamicTagsJson"],
  };
}

export function _applicationStackResourcePropertiesDeserializer(item: any) {
  return {
    namePropertiesName: item["name"],
    display: item["display"],
    dependency: item["dependency"],
    majorVersions: !item["majorVersions"]
      ? item["majorVersions"]
      : stackMajorVersionArrayDeserializer(item["majorVersions"]),
    frameworks: !item["frameworks"]
      ? item["frameworks"]
      : applicationStackArrayDeserializer(item["frameworks"]),
    isDeprecated: !item["isDeprecated"]
      ? item["isDeprecated"]
      : applicationStackArrayDeserializer(item["isDeprecated"]),
  };
}

export function _functionAppStackPropertiesDeserializer(item: any) {
  return {
    displayText: item["displayText"],
    value: item["value"],
    majorVersions: !item["majorVersions"]
      ? item["majorVersions"]
      : functionAppMajorVersionArrayDeserializer(item["majorVersions"]),
    preferredOs: item["preferredOs"],
  };
}

export function _webAppStackPropertiesDeserializer(item: any) {
  return {
    displayText: item["displayText"],
    value: item["value"],
    majorVersions: !item["majorVersions"]
      ? item["majorVersions"]
      : webAppMajorVersionArrayDeserializer(item["majorVersions"]),
    preferredOs: item["preferredOs"],
  };
}

export function _recommendationPropertiesDeserializer(item: any) {
  return {
    creationTime: !item["creationTime"] ? item["creationTime"] : new Date(item["creationTime"]),
    recommendationId: item["recommendationId"],
    resourceId: item["resourceId"],
    resourceScope: item["resourceScope"],
    ruleName: item["ruleName"],
    displayName: item["displayName"],
    message: item["message"],
    level: item["level"],
    channels: item["channels"],
    categoryTags: !item["categoryTags"]
      ? item["categoryTags"]
      : item["categoryTags"].map((p: any) => {
          return p;
        }),
    actionName: item["actionName"],
    enabled: item["enabled"],
    states: !item["states"]
      ? item["states"]
      : item["states"].map((p: any) => {
          return p;
        }),
    startTime: !item["startTime"] ? item["startTime"] : new Date(item["startTime"]),
    endTime: !item["endTime"] ? item["endTime"] : new Date(item["endTime"]),
    nextNotificationTime: !item["nextNotificationTime"]
      ? item["nextNotificationTime"]
      : new Date(item["nextNotificationTime"]),
    notificationExpirationTime: !item["notificationExpirationTime"]
      ? item["notificationExpirationTime"]
      : new Date(item["notificationExpirationTime"]),
    notifiedTime: !item["notifiedTime"] ? item["notifiedTime"] : new Date(item["notifiedTime"]),
    score: item["score"],
    isDynamic: item["isDynamic"],
    extensionName: item["extensionName"],
    bladeName: item["bladeName"],
    forwardLink: item["forwardLink"],
  };
}

export function _staticSitesWorkflowPreviewRequestPropertiesSerializer(
  item: StaticSitesWorkflowPreviewRequest,
): any {
  return {
    repositoryUrl: item["repositoryUrl"],
    branch: item["branch"],
    buildProperties: !item["buildProperties"]
      ? item["buildProperties"]
      : staticSiteBuildPropertiesSerializer(item["buildProperties"]),
  };
}

export function _staticSitesWorkflowPreviewPropertiesDeserializer(item: any) {
  return {
    path: item["path"],
    contents: item["contents"],
  };
}
