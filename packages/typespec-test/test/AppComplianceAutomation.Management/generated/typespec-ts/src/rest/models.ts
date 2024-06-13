// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** A class represent an AppComplianceAutomation report resource. */
export interface ReportResource extends ProxyResource {
  /** Report property. */
  properties: ReportProperties;
}

/** Create Report's properties. */
export interface ReportProperties {
  /** Report collection trigger time. */
  triggerTime: Date | string;
  /**
   * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
   * An example of valid timezone id is "Pacific Standard Time".
   */
  timeZone: string;
  /** List of resource data. */
  resources: Array<ResourceMetadata>;
  /** A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003". */
  offerGuid?: string;
  /** The information of 'bring your own storage' binding to the report */
  storageInfo?: StorageInfo;
}

/** Single resource Id's metadata. */
export interface ResourceMetadata {
  /** Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1". */
  resourceId: string;
  /** Resource type. e.g. "Microsoft.Compute/virtualMachines" */
  resourceType?: string;
  /** Resource kind. */
  resourceKind?: string;
  /** Resource Origin. */
  resourceOrigin?: ResourceOrigin;
  /** Account Id. For example - the AWS account id. */
  accountId?: string;
}

/** A list which includes all the compliance result for one report. */
export interface ReportComplianceStatus {}

/** The overview of the compliance result for one report. */
export interface OverviewStatus {}

/** The information of 'bring your own storage' account binding to the report */
export interface StorageInfo {
  /** The subscription id which 'bring your own storage' account belongs to */
  subscriptionId?: string;
  /** The resourceGroup which 'bring your own storage' account belongs to */
  resourceGroup?: string;
  /** 'bring your own storage' account name */
  accountName?: string;
  /** The region of 'bring your own storage' account */
  location?: string;
}

/** A class represent the certification record synchronized from app compliance. */
export interface CertSyncRecord {
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** Indicates the status of certification process. */
  certificationStatus?: string;
  /** Indicates the status of compliance process. */
  ingestionStatus?: string;
  /** The control records list to be synchronized. */
  controls?: Array<ControlSyncRecord>;
}

/** A class represent the control record synchronized from app compliance. */
export interface ControlSyncRecord {
  /** The Id of the control. e.g. "Operational_Security_10" */
  controlId?: string;
  /** Control status synchronized from app compliance. */
  controlStatus?: string;
}

/** The base proxy resource. */
export interface ProxyResource extends Resource {}

/** Common properties for all Azure Resource Manager resources. */
export interface Resource {}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends ProxyResource {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of he private endpoint connection resource */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint resource */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /** The provisioning state of the private endpoint connection resource. */
  provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/** The private endpoint resource */
export interface PrivateEndpoint {
  /** The resource identifier for private endpoint */
  id?: string;
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

export interface PrivateLinkResource extends ProxyResource {
  /** Properties of the private link resource. */
  properties?: PrivateLinkResourceProperties;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** A class represent an AppComplianceAutomation webhook resource. */
export interface WebhookResource extends ProxyResource {
  /** Webhook property. */
  properties: WebhookProperties;
}

/** Webhook properties. */
export interface WebhookProperties {
  /** Webhook status. */
  status?: WebhookStatus;
  /** whether to send notification under any event. */
  sendAllEvents?: SendAllEvents;
  /** under which event notification should be sent. */
  events?: NotificationEvent[];
  /** webhook payload url */
  payloadUrl?: string;
  /** content type */
  contentType?: ContentType;
  /** webhook secret token. If not set, this field value is null; otherwise, please set a string value. */
  webhookKey?: string;
  /** whether to update webhookKey. */
  updateWebhookKey?: UpdateWebhookKey;
  /** whether to enable ssl verification */
  enableSslVerification?: EnableSslVerification;
}

/** A class represent a AppComplianceAutomation snapshot resource. */
export interface SnapshotResource extends ProxyResource {
  /** Snapshot's property. */
  properties?: SnapshotProperties;
}

/** Snapshot's properties. */
export interface SnapshotProperties {}

/** A class represent the compliance result. */
export interface ComplianceResult {}

/** A class represent the compliance category. */
export interface Category {}

/** A class represent the control family. */
export interface ControlFamily {}

/** A class represent the control. */
export interface Control {}

/** A class represent the customer responsibility. */
export interface Responsibility {
  /** The count of all failed resources. */
  failedResourceCount?: number;
  /** The count of all resources. */
  totalResourceCount?: number;
  /** List of evidence file url. */
  evidenceFiles?: string[];
}

/** A class represent the resource. */
export interface ResponsibilityResource {
  /** List of recommendation id. */
  recommendationIds?: string[];
}

/** A class represent the recommendation. */
export interface Recommendation {}

/** A class represent the recommendation solution. */
export interface RecommendationSolution {}

/** A class represent an AppComplianceAutomation scoping configuration resource. */
export interface ScopingConfigurationResource extends ProxyResource {
  /** ScopingConfiguration property. */
  properties: ScopingConfigurationProperties;
}

/** ScopingConfiguration's properties. */
export interface ScopingConfigurationProperties {
  /** List of scoping question answers. */
  answers?: Array<ScopingAnswer>;
}

/** Scoping answer. */
export interface ScopingAnswer {
  /** Question id. */
  questionId: string;
  /** Question answer value list. */
  answers: string[];
}

/** A class represent an AppComplianceAutomation evidence resource. */
export interface EvidenceResource extends ProxyResource {
  /** Evidence property. */
  properties: EvidenceProperties;
}

/** Evidence's properties. */
export interface EvidenceProperties {
  /** Evidence type. */
  evidenceType?: EvidenceType;
  /** The path of the file in storage. */
  filePath: string;
  /** Extra data considered as evidence. */
  extraData?: string;
  /** Control id. */
  controlId?: string;
  /** Responsibility id. */
  responsibilityId?: string;
}

/** A class represent a AppComplianceAutomation report resource update properties. */
export interface ReportResourcePatch {
  /** Report property. */
  properties?: ReportPatchProperties;
}

/** Patch Report's properties. */
export interface ReportPatchProperties {
  /** Report collection trigger time. */
  triggerTime?: Date | string;
  /**
   * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
   * An example of valid timezone id is "Pacific Standard Time".
   */
  timeZone?: string;
  /** List of resource data. */
  resources?: Array<ResourceMetadata>;
  /** A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003". */
  offerGuid?: string;
  /** The information of 'bring your own storage' binding to the report */
  storageInfo?: StorageInfo;
}

/** Synchronize certification record request. */
export interface SyncCertRecordRequest {
  /** certification record to be synchronized. */
  certRecord: CertSyncRecord;
}

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

/** A class represent a AppComplianceAutomation webhook resource update properties. */
export interface WebhookResourcePatch {
  /** Webhook property. */
  properties?: WebhookProperties;
}

/** Snapshot's download request. */
export interface SnapshotDownloadRequest {
  /** Tenant id. */
  reportCreatorTenantId?: string;
  /** Indicates the download type. */
  downloadType: DownloadType;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
}

/** Evidence file's download request. */
export interface EvidenceFileDownloadRequest {
  /** Tenant id. */
  reportCreatorTenantId?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
}

/** Get collection count's request object. */
export interface GetCollectionCountRequest {
  /** The resource type. */
  type?: string;
}

/** Get overview status request object. */
export interface GetOverviewStatusRequest {
  /** The resource type. */
  type?: string;
}

/** Parameters for onboard operation */
export interface OnboardRequest {
  /** List of subscription ids to be onboarded */
  subscriptionIds: string[];
}

/** Trigger evaluation request. */
export interface TriggerEvaluationRequest {
  /** List of resource ids to be evaluated */
  resourceIds: string[];
}

/** Parameters for listing in use storage accounts operation. If subscription list is null, it will check the user's all subscriptions. */
export interface ListInUseStorageAccountsRequest {
  /** List of subscription ids to be query. If the list is null or empty, the API will query all the subscriptions of the user. */
  subscriptionIds?: string[];
}

/** Alias for ResourceOrigin */
export type ResourceOrigin = "Azure" | "AWS" | "GCP" | string;
/** Alias for ReportStatus */
export type ReportStatus =
  | "Active"
  | "Failed"
  | "Reviewing"
  | "Disabled"
  | string;
/** Alias for ProvisioningState */
export type ProvisioningState =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | "Creating"
  | "Deleting"
  | "Fixing"
  | "Verifying"
  | "Updating"
  | string;
/** Alias for CreatedByType */
export type CreatedByType =
  | "User"
  | "Application"
  | "ManagedIdentity"
  | "Key"
  | string;
/** Alias for PrivateEndpointServiceConnectionStatus */
export type PrivateEndpointServiceConnectionStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | string;
/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | string;
/** Alias for PrivateEndpointConnectionProvisioningState */
export type PrivateEndpointConnectionProvisioningState =
  | ResourceProvisioningState
  | "Creating"
  | "Deleting";
/** Alias for WebhookStatus */
export type WebhookStatus = "Enabled" | "Disabled" | string;
/** Alias for SendAllEvents */
export type SendAllEvents = "true" | "false" | string;
/** Alias for NotificationEvent */
export type NotificationEvent =
  | "generate_snapshot_success"
  | "generate_snapshot_failed"
  | "assessment_failure"
  | "report_configuration_changes"
  | "report_deletion"
  | string;
/** Alias for ContentType */
export type ContentType = "application/json" | string;
/** Alias for UpdateWebhookKey */
export type UpdateWebhookKey = "true" | "false" | string;
/** Alias for WebhookKeyEnabled */
export type WebhookKeyEnabled = "true" | "false" | string;
/** Alias for EnableSslVerification */
export type EnableSslVerification = "true" | "false" | string;
/** Alias for DeliveryStatus */
export type DeliveryStatus = "Succeeded" | "Failed" | "NotStarted" | string;
/** Alias for CategoryStatus */
export type CategoryStatus =
  | "Passed"
  | "Failed"
  | "NotApplicable"
  | "PendingApproval"
  | string;
/** Alias for ControlFamilyStatus */
export type ControlFamilyStatus =
  | "Passed"
  | "Failed"
  | "NotApplicable"
  | "PendingApproval"
  | string;
/** Alias for ControlStatus */
export type ControlStatus =
  | "Passed"
  | "Failed"
  | "NotApplicable"
  | "PendingApproval"
  | string;
/** Alias for ResponsibilityType */
export type ResponsibilityType =
  | "Automated"
  | "ScopedManual"
  | "Manual"
  | string;
/** Alias for ResponsibilitySeverity */
export type ResponsibilitySeverity = "High" | "Medium" | "Low" | string;
/** Alias for ResponsibilityStatus */
export type ResponsibilityStatus =
  | "Passed"
  | "Failed"
  | "NotApplicable"
  | "PendingApproval"
  | string;
/** Alias for ResponsibilityEnvironment */
export type ResponsibilityEnvironment =
  | "Azure"
  | "AWS"
  | "GCP"
  | "General"
  | string;
/** Alias for ResourceStatus */
export type ResourceStatus = "Healthy" | "Unhealthy" | string;
/** Alias for IsRecommendSolution */
export type IsRecommendSolution = "true" | "false" | string;
/** Alias for EvidenceType */
export type EvidenceType = "File" | "AutoCollectedEvidence" | "Data" | string;
/** Alias for DownloadType */
export type DownloadType =
  | "ComplianceReport"
  | "CompliancePdfReport"
  | "ComplianceDetailedPdfReport"
  | "ResourceList"
  | string;
