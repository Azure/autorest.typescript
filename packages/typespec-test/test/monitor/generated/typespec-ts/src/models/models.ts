// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";

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

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(
  item: TrackedResource,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
  };
}

/** A pipeline group definition. */
export interface PipelineGroup extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PipelineGroupProperties;
  /** The extended location for given pipeline group. */
  extendedLocation?: ExtendedLocation;
}

export function pipelineGroupSerializer(
  item: PipelineGroup,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : pipelineGroupPropertiesSerializer(item.properties),
    extendedLocation: !item.extendedLocation
      ? item.extendedLocation
      : extendedLocationSerializer(item.extendedLocation),
  };
}

/** Properties that need to be specified to create a new pipeline group instance. */
export interface PipelineGroupProperties {
  /** Defines the amount of replicas of the pipeline group instance. */
  replicas?: number;
  /** The receivers specified for a pipeline group instance. */
  receivers: Receiver[];
  /** The processors specified for a pipeline group instance. */
  processors: Processor[];
  /** The exporters specified for a pipeline group instance. */
  exporters: Exporter[];
  /** The service section for a given pipeline group instance. */
  service: Service;
  /** Networking configurations for the pipeline group instance. */
  networkingConfigurations?: NetworkingConfiguration[];
  /** The provisioning state of a pipeline group instance. Set to Succeeded if everything is healthy. */
  readonly provisioningState?: ProvisioningState;
}

export function pipelineGroupPropertiesSerializer(
  item: PipelineGroupProperties,
): Record<string, unknown> {
  return {
    replicas: item["replicas"],
    receivers: item["receivers"].map(receiverSerializer),
    processors: item["processors"].map(processorSerializer),
    exporters: item["exporters"].map(exporterSerializer),
    service: serviceSerializer(item.service),
    networkingConfigurations:
      item["networkingConfigurations"] === undefined
        ? item["networkingConfigurations"]
        : item["networkingConfigurations"].map(
            networkingConfigurationSerializer,
          ),
  };
}

/** Receiver Info. */
export interface Receiver {
  /** The type of receiver. */
  type: ReceiverType;
  /** The name of receiver. */
  name: string;
  /** Syslog configurations. This field is mandatory for syslog type receivers. */
  syslog?: SyslogReceiver;
  /** OTLP receiver configurations. This field is mandatory for OTLP and pipelineGroup receivers. */
  otlp?: OtlpReceiver;
  /** UDP receiver configurations. This field is mandatory for UDP receivers. */
  udp?: UdpReceiver;
}

export function receiverSerializer(item: Receiver): Record<string, unknown> {
  return {
    type: item["type"],
    name: item["name"],
    syslog: !item.syslog ? item.syslog : syslogReceiverSerializer(item.syslog),
    otlp: !item.otlp ? item.otlp : otlpReceiverSerializer(item.otlp),
    udp: !item.udp ? item.udp : udpReceiverSerializer(item.udp),
  };
}

/** Known values of {@link ReceiverType} that the service accepts. */
export enum KnownReceiverType {
  /** Syslog */
  Syslog = "Syslog",
  /** Ama */
  Ama = "Ama",
  /** PipelineGroup */
  PipelineGroup = "PipelineGroup",
  /** OTLP */
  OTLP = "OTLP",
  /** UDP */
  UDP = "UDP",
}

/**
 * The receiver type. \
 * {@link KnownReceiverType} can be used interchangeably with ReceiverType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Syslog** \
 * **Ama** \
 * **PipelineGroup** \
 * **OTLP** \
 * **UDP**
 */
export type ReceiverType = string;

/** Base receiver using TCP as transport protocol. */
export interface SyslogReceiver {
  /** Syslog receiver endpoint definition. Example: 0.0.0.0:<port>. */
  endpoint: string;
  /** Protocol to parse syslog messages. Default rfc3164 */
  protocol?: SyslogProtocol;
}

export function syslogReceiverSerializer(
  item: SyslogReceiver,
): Record<string, unknown> {
  return {
    endpoint: item["endpoint"],
    protocol: item["protocol"],
  };
}

/** Known values of {@link SyslogProtocol} that the service accepts. */
export enum KnownSyslogProtocol {
  /** rfc3164 */
  rfc3164 = "rfc3164",
  /** rfc5424 */
  rfc5424 = "rfc5424",
}

/**
 * The syslog protocol to parse messages. \
 * {@link KnownSyslogProtocol} can be used interchangeably with SyslogProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **rfc3164** \
 * **rfc5424**
 */
export type SyslogProtocol = string;

/** OTLP Receiver. */
export interface OtlpReceiver {
  /** OTLP GRPC endpoint definition. Example: 0.0.0.0:<port>. */
  endpoint: string;
}

export function otlpReceiverSerializer(
  item: OtlpReceiver,
): Record<string, unknown> {
  return {
    endpoint: item["endpoint"],
  };
}

/** Receiver using UDP as transport protocol. */
export interface UdpReceiver {
  /** TCP endpoint definition. Example: 0.0.0.0:<port>. */
  endpoint: string;
  /** The encoding of the stream being received. */
  encoding?: StreamEncodingType;
  /** Max read queue length. */
  readQueueLength?: number;
}

export function udpReceiverSerializer(
  item: UdpReceiver,
): Record<string, unknown> {
  return {
    endpoint: item["endpoint"],
    encoding: item["encoding"],
    readQueueLength: item["readQueueLength"],
  };
}

/** Known values of {@link StreamEncodingType} that the service accepts. */
export enum KnownStreamEncodingType {
  /** nop */
  nop = "nop",
  /** utf_8 */
  utf_8 = "utf-8",
  /** utf_16le */
  utf_16le = "utf-16le",
  /** utf_16be */
  utf_16be = "utf-16be",
  /** ascii */
  ascii = "ascii",
  /** big5 */
  big5 = "big5",
}

/**
 * Encoding types for streams. \
 * {@link KnownStreamEncodingType} can be used interchangeably with StreamEncodingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **nop** \
 * **utf-8** \
 * **utf-16le** \
 * **utf-16be** \
 * **ascii** \
 * **big5**
 */
export type StreamEncodingType = string;

/** Processor Info. */
export interface Processor {
  /** The type of processor. */
  type: ProcessorType;
  /** The name of processor. */
  name: string;
  /** Batch processor configurations. */
  batch?: BatchProcessor;
}

export function processorSerializer(item: Processor): Record<string, unknown> {
  return {
    type: item["type"],
    name: item["name"],
    batch: !item.batch ? item.batch : batchProcessorSerializer(item.batch),
  };
}

/** Known values of {@link ProcessorType} that the service accepts. */
export enum KnownProcessorType {
  /** Batch */
  Batch = "Batch",
}

/**
 * The processor type. \
 * {@link KnownProcessorType} can be used interchangeably with ProcessorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Batch**
 */
export type ProcessorType = string;

/** Batch processor. */
export interface BatchProcessor {
  /** Size of the batch. */
  batchSize?: number;
  /** Timeout in milliseconds. */
  timeout?: number;
}

export function batchProcessorSerializer(
  item: BatchProcessor,
): Record<string, unknown> {
  return {
    batchSize: item["batchSize"],
    timeout: item["timeout"],
  };
}

/** Exporter Info. */
export interface Exporter {
  /** The type of exporter. */
  type: ExporterType;
  /** The name of exporter. */
  name: string;
  /** Azure Monitor Workspace Logs specific configurations. */
  azureMonitorWorkspaceLogs?: AzureMonitorWorkspaceLogsExporter;
  /** TCP based exporter. Used for pipelineGroup exporter. */
  tcp?: TcpExporter;
}

export function exporterSerializer(item: Exporter): Record<string, unknown> {
  return {
    type: item["type"],
    name: item["name"],
    azureMonitorWorkspaceLogs: !item.azureMonitorWorkspaceLogs
      ? item.azureMonitorWorkspaceLogs
      : azureMonitorWorkspaceLogsExporterSerializer(
          item.azureMonitorWorkspaceLogs,
        ),
    tcp: !item.tcp ? item.tcp : tcpExporterSerializer(item.tcp),
  };
}

/** Known values of {@link ExporterType} that the service accepts. */
export enum KnownExporterType {
  /** AzureMonitorWorkspaceLogs */
  AzureMonitorWorkspaceLogs = "AzureMonitorWorkspaceLogs",
  /** PipelineGroup */
  PipelineGroup = "PipelineGroup",
}

/**
 * The exporter type. \
 * {@link KnownExporterType} can be used interchangeably with ExporterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzureMonitorWorkspaceLogs** \
 * **PipelineGroup**
 */
export type ExporterType = string;

/** Azure Monitor Workspace Logs specific configurations. */
export interface AzureMonitorWorkspaceLogsExporter {
  /** API configurations for Azure Monitor workspace exporter. */
  api: AzureMonitorWorkspaceLogsApiConfig;
  /** Concurrency configuration for the exporter. */
  concurrency?: ConcurrencyConfiguration;
  /** Cache configurations. */
  cache?: CacheConfiguration;
}

export function azureMonitorWorkspaceLogsExporterSerializer(
  item: AzureMonitorWorkspaceLogsExporter,
): Record<string, unknown> {
  return {
    api: azureMonitorWorkspaceLogsApiConfigSerializer(item.api),
    concurrency: !item.concurrency
      ? item.concurrency
      : concurrencyConfigurationSerializer(item.concurrency),
    cache: !item.cache ? item.cache : cacheConfigurationSerializer(item.cache),
  };
}

/** Azure Monitor Workspace Logs Api configurations. */
export interface AzureMonitorWorkspaceLogsApiConfig {
  /** Data collection endpoint ingestion url. */
  dataCollectionEndpointUrl: string;
  /** Stream name in destination. Azure Monitor stream is related to the destination table. */
  stream: string;
  /** Data Collection Rule (DCR) immutable id. */
  dataCollectionRule: string;
  /** The schema mapping for incoming data. */
  schema: SchemaMap;
}

export function azureMonitorWorkspaceLogsApiConfigSerializer(
  item: AzureMonitorWorkspaceLogsApiConfig,
): Record<string, unknown> {
  return {
    dataCollectionEndpointUrl: item["dataCollectionEndpointUrl"],
    stream: item["stream"],
    dataCollectionRule: item["dataCollectionRule"],
    schema: schemaMapSerializer(item.schema),
  };
}

/** Schema map for azure monitor for logs. */
export interface SchemaMap {
  /** Record Map. */
  recordMap: RecordMap[];
  /** Resource Map captures information about the entity for which telemetry is recorded. For example, metrics exposed by a Kubernetes container can be linked to a resource that specifies the cluster, namespace, pod, and container name.Resource may capture an entire hierarchy of entity identification. It may describe the host in the cloud and specific container or an application running in the process. */
  resourceMap?: ResourceMap[];
  /** A scope map is a logical unit of the application code with which the emitted telemetry can be associated. */
  scopeMap?: ScopeMap[];
}

export function schemaMapSerializer(item: SchemaMap): Record<string, unknown> {
  return {
    recordMap: item["recordMap"].map(recordMapSerializer),
    resourceMap:
      item["resourceMap"] === undefined
        ? item["resourceMap"]
        : item["resourceMap"].map(resourceMapSerializer),
    scopeMap:
      item["scopeMap"] === undefined
        ? item["scopeMap"]
        : item["scopeMap"].map(scopeMapSerializer),
  };
}

/** Record map for schema in azure monitor. */
export interface RecordMap {
  /** Record Map Key. */
  from: string;
  /** Record Map Value. */
  to: string;
}

export function recordMapSerializer(item: RecordMap): Record<string, unknown> {
  return {
    from: item["from"],
    to: item["to"],
  };
}

/** Resource map for schema in azure monitor. */
export interface ResourceMap {
  /** Resource Map Key. */
  from: string;
  /** Resource Map Value. */
  to: string;
}

export function resourceMapSerializer(
  item: ResourceMap,
): Record<string, unknown> {
  return {
    from: item["from"],
    to: item["to"],
  };
}

/** Scope map for schema in azure monitor. */
export interface ScopeMap {
  /** Scope Map Key. */
  from: string;
  /** Scope Map Value. */
  to: string;
}

export function scopeMapSerializer(item: ScopeMap): Record<string, unknown> {
  return {
    from: item["from"],
    to: item["to"],
  };
}

/** Concurrent publishing configuration. */
export interface ConcurrencyConfiguration {
  /** Number of parallel workers processing the log queues. */
  workerCount?: number;
  /** Size of the queue for log batches. */
  batchQueueSize?: number;
}

export function concurrencyConfigurationSerializer(
  item: ConcurrencyConfiguration,
): Record<string, unknown> {
  return {
    workerCount: item["workerCount"],
    batchQueueSize: item["batchQueueSize"],
  };
}

/** Cache configurations. */
export interface CacheConfiguration {
  /** Max storage usage in megabytes. */
  maxStorageUsage?: number;
  /** Retention period in minutes. */
  retentionPeriod?: number;
}

export function cacheConfigurationSerializer(
  item: CacheConfiguration,
): Record<string, unknown> {
  return {
    maxStorageUsage: item["maxStorageUsage"],
    retentionPeriod: item["retentionPeriod"],
  };
}

/** Base exporter using TCP as transport protocol. */
export interface TcpExporter {
  /** TCP url to export. */
  url: string;
}

export function tcpExporterSerializer(
  item: TcpExporter,
): Record<string, unknown> {
  return {
    url: item["url"],
  };
}

/** Service Info. */
export interface Service {
  /** Pipelines belonging to a given pipeline group. */
  pipelines: Pipeline[];
  /** Persistence options to all pipelines in the instance. */
  persistence?: PersistenceConfigurations;
}

export function serviceSerializer(item: Service): Record<string, unknown> {
  return {
    pipelines: item["pipelines"].map(pipelineSerializer),
    persistence: !item.persistence
      ? item.persistence
      : persistenceConfigurationsSerializer(item.persistence),
  };
}

/** Pipeline Info. */
export interface Pipeline {
  /** Name of the pipeline. */
  name: string;
  /** The type of pipeline */
  type: PipelineType;
  /** Reference to receivers configured for the pipeline. */
  receivers: string[];
  /** Reference to processors configured for the pipeline. */
  processors?: string[];
  /** Reference to exporters configured for the pipeline. */
  exporters: string[];
}

export function pipelineSerializer(item: Pipeline): Record<string, unknown> {
  return {
    name: item["name"],
    type: item["type"],
    receivers: item["receivers"],
    processors: item["processors"],
    exporters: item["exporters"],
  };
}

/** Known values of {@link PipelineType} that the service accepts. */
export enum KnownPipelineType {
  /** Logs */
  Logs = "logs",
}

/**
 * The pipeline type. \
 * {@link KnownPipelineType} can be used interchangeably with PipelineType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **logs**
 */
export type PipelineType = string;

/** Persistence options to all pipelines in the instance. */
export interface PersistenceConfigurations {
  /** The name of the mounted persistent volume. */
  persistentVolumeName: string;
}

export function persistenceConfigurationsSerializer(
  item: PersistenceConfigurations,
): Record<string, unknown> {
  return {
    persistentVolumeName: item["persistentVolumeName"],
  };
}

/** Networking configuration for the pipeline group instance. */
export interface NetworkingConfiguration {
  /** External networking mode. */
  externalNetworkingMode: ExternalNetworkingMode;
  /** The address exposed on the cluster. Example: azuremonitorpipeline.contoso.com. */
  host?: string;
  /** Networking routes configuration. */
  routes: NetworkingRoute[];
}

export function networkingConfigurationSerializer(
  item: NetworkingConfiguration,
): Record<string, unknown> {
  return {
    externalNetworkingMode: item["externalNetworkingMode"],
    host: item["host"],
    routes: item["routes"].map(networkingRouteSerializer),
  };
}

/** Known values of {@link ExternalNetworkingMode} that the service accepts. */
export enum KnownExternalNetworkingMode {
  /** LoadBalancerOnly */
  LoadBalancerOnly = "LoadBalancerOnly",
}

/**
 * The mode of the external networking. \
 * {@link KnownExternalNetworkingMode} can be used interchangeably with ExternalNetworkingMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LoadBalancerOnly**
 */
export type ExternalNetworkingMode = string;

/** Networking route configuration. */
export interface NetworkingRoute {
  /** The name of the previously defined receiver. */
  receiver: string;
  /** The port that will be configured externally. If not specified, it will use the port from the receiver definition. */
  port?: number;
  /** Route path. */
  path?: string;
  /** Route subdomain. */
  subdomain?: string;
}

export function networkingRouteSerializer(
  item: NetworkingRoute,
): Record<string, unknown> {
  return {
    receiver: item["receiver"],
    port: item["port"],
    path: item["path"],
    subdomain: item["subdomain"],
  };
}

/** Known values of {@link ResourceProvisioningState} that the service accepts. */
export enum KnownResourceProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
}

/**
 * The provisioning state of a resource type. \
 * {@link KnownResourceProvisioningState} can be used interchangeably with ResourceProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ResourceProvisioningState = string;

/** The complex type of the extended location. */
export interface ExtendedLocation {
  /** The name of the extended location. */
  name: string;
  /** The type of the extended location. */
  type: ExtendedLocationType;
}

export function extendedLocationSerializer(
  item: ExtendedLocation,
): Record<string, unknown> {
  return {
    name: item["name"],
    type: item["type"],
  };
}

/** Known values of {@link ExtendedLocationType} that the service accepts. */
export enum KnownExtendedLocationType {
  /** EdgeZone */
  EdgeZone = "EdgeZone",
  /** CustomLocation */
  CustomLocation = "CustomLocation",
}

/**
 * The supported ExtendedLocation types. \
 * {@link KnownExtendedLocationType} can be used interchangeably with ExtendedLocationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EdgeZone** \
 * **CustomLocation**
 */
export type ExtendedLocationType = string;

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

/** The type used for update operations of the PipelineGroup. */
export interface PipelineGroupUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: PipelineGroupUpdateProperties;
}

export function pipelineGroupUpdateSerializer(
  item: PipelineGroupUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : pipelineGroupUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the PipelineGroup. */
export interface PipelineGroupUpdateProperties {
  /** Defines the amount of replicas of the pipeline group instance. */
  replicas?: number;
  /** The receivers specified for a pipeline group instance. */
  receivers?: Receiver[];
  /** The processors specified for a pipeline group instance. */
  processors?: Processor[];
  /** The exporters specified for a pipeline group instance. */
  exporters?: Exporter[];
  /** The service section for a given pipeline group instance. */
  service?: Service;
  /** Networking configurations for the pipeline group instance. */
  networkingConfigurations?: NetworkingConfiguration[];
}

export function pipelineGroupUpdatePropertiesSerializer(
  item: PipelineGroupUpdateProperties,
): Record<string, unknown> {
  return {
    replicas: item["replicas"],
    receivers:
      item["receivers"] === undefined
        ? item["receivers"]
        : item["receivers"].map(receiverSerializer),
    processors:
      item["processors"] === undefined
        ? item["processors"]
        : item["processors"].map(processorSerializer),
    exporters:
      item["exporters"] === undefined
        ? item["exporters"]
        : item["exporters"].map(exporterSerializer),
    service: !item.service ? item.service : serviceSerializer(item.service),
    networkingConfigurations:
      item["networkingConfigurations"] === undefined
        ? item["networkingConfigurations"]
        : item["networkingConfigurations"].map(
            networkingConfigurationSerializer,
          ),
  };
}

/** The response of a PipelineGroup list operation. */
export interface _PipelineGroupListResult {
  /** The PipelineGroup items on this page */
  value: PipelineGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An Azure Monitor Workspace definition. */
export interface AzureMonitorWorkspace extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AzureMonitorWorkspaceProperties;
  /** Resource entity tag (ETag) */
  readonly etag?: string;
}

export function azureMonitorWorkspaceSerializer(
  item: AzureMonitorWorkspace,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    location: item["location"],
    properties: !item.properties
      ? item.properties
      : azureMonitorWorkspacePropertiesSerializer(item.properties),
  };
}

/** Properties that need to be specified to create a new workspace. */
export interface AzureMonitorWorkspaceProperties {
  /** The immutable ID of the Azure Monitor workspace. This property is read-only. */
  readonly accountId?: string;
  /** Information about metrics for the Azure Monitor workspace */
  metrics?: Metrics;
  /** The provisioning state of the Azure Monitor workspace. Set to Succeeded if everything is healthy. */
  readonly provisioningState?: ProvisioningState;
  /** The Data Collection Rule and Endpoint used for ingestion by default. */
  readonly defaultIngestionSettings?: IngestionSettings;
  /** List of private endpoint connections. */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
  /** Gets or sets allow or disallow public network access to workspace */
  readonly publicNetworkAccess?: PublicNetworkAccess;
}

export function azureMonitorWorkspacePropertiesSerializer(
  item: AzureMonitorWorkspaceProperties,
): Record<string, unknown> {
  return {
    metrics: !item.metrics ? item.metrics : metricsSerializer(item.metrics),
  };
}

/** Information about metrics for the workspace */
export interface Metrics {
  /** The Prometheus query endpoint for the workspace */
  readonly prometheusQueryEndpoint?: string;
  /** An internal identifier for the metrics container. Only to be used by the system */
  readonly internalId?: string;
}

export function metricsSerializer(item: Metrics) {
  return item as any;
}

/** Settings for data ingestion */
export interface IngestionSettings {
  /** The Azure resource Id of the default data collection rule for this workspace. */
  readonly dataCollectionRuleResourceId?: string;
  /** The Azure resource Id of the default data collection endpoint for this workspace. */
  readonly dataCollectionEndpointResourceId?: string;
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends Resource {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionProperties {
  /** The group ids for the private endpoint resource. */
  readonly groupIds?: string[];
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /** The provisioning state of the private endpoint connection resource. */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {
  /** The resource identifier for private endpoint */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** Known values of {@link PrivateEndpointServiceConnectionStatus} that the service accepts. */
export enum KnownPrivateEndpointServiceConnectionStatus {
  /** Pending */
  Pending = "Pending",
  /** Approved */
  Approved = "Approved",
  /** Rejected */
  Rejected = "Rejected",
}

/**
 * The private endpoint connection status. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected**
 */
export type PrivateEndpointServiceConnectionStatus = string;

/** Known values of {@link PrivateEndpointConnectionProvisioningState} that the service accepts. */
export enum KnownPrivateEndpointConnectionProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Failed */
  Failed = "Failed",
}

/**
 * The current provisioning state. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export type PrivateEndpointConnectionProvisioningState = string;

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export enum KnownPublicNetworkAccess {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * State of the public network access. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type PublicNetworkAccess = string;

/** The type used for update operations of the AzureMonitorWorkspace. */
export interface AzureMonitorWorkspaceUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: AzureMonitorWorkspaceUpdateProperties;
}

export function azureMonitorWorkspaceUpdateSerializer(
  item: AzureMonitorWorkspaceUpdate,
): Record<string, unknown> {
  return {
    tags: !item.tags ? item.tags : (serializeRecord(item.tags as any) as any),
    properties: !item.properties
      ? item.properties
      : azureMonitorWorkspaceUpdatePropertiesSerializer(item.properties),
  };
}

/** The updatable properties of the AzureMonitorWorkspace. */
export interface AzureMonitorWorkspaceUpdateProperties {
  /** Information about metrics for the Azure Monitor workspace */
  metrics?: Metrics;
}

export function azureMonitorWorkspaceUpdatePropertiesSerializer(
  item: AzureMonitorWorkspaceUpdateProperties,
): Record<string, unknown> {
  return {
    metrics: !item.metrics ? item.metrics : metricsSerializer(item.metrics),
  };
}

/** The response of a AzureMonitorWorkspace list operation. */
export interface _AzureMonitorWorkspaceListResult {
  /** The AzureMonitorWorkspace items on this page */
  value: AzureMonitorWorkspace[];
  /** The link to the next page of items */
  nextLink?: string;
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
  readonly display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionType;
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

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** user */
  user = "user",
  /** system */
  system = "system",
  /** user,system */
  "user,system" = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;
/** Microsoft.Monitor Versions */
export type Versions = "2023-10-01-preview";
/** Alias for ProvisioningState */
export type ProvisioningState =
  | string
  | ResourceProvisioningState
  | "Creating"
  | "Deleting";
