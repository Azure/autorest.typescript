// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** A class represent an AppComplianceAutomation report resource. */
export interface ReportResourceOutput extends ProxyResourceOutput {
  /** Report property. */
  properties: ReportPropertiesOutput;
}

/** Create Report's properties. */
export interface ReportPropertiesOutput {
  /** Report collection trigger time. */
  triggerTime: string;
  /**
   * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
   * An example of valid timezone id is "Pacific Standard Time".
   */
  timeZone: string;
  /** List of resource data. */
  resources: Array<ResourceMetadataOutput>;
  /** Report status. */
  readonly status?: ReportStatusOutput;
  /** List of report error codes. */
  readonly errors?: string[];
  /** Report's tenant id. */
  readonly tenantId?: string;
  /** A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003". */
  offerGuid?: string;
  /** Report next collection trigger time. */
  readonly nextTriggerTime?: string;
  /** Report last collection trigger time. */
  readonly lastTriggerTime?: string;
  /** List of subscription Ids. */
  readonly subscriptions?: string[];
  /** Report compliance status. */
  readonly complianceStatus?: ReportComplianceStatusOutput;
  /** The information of 'bring your own storage' binding to the report */
  storageInfo?: StorageInfoOutput;
  /** List of synchronized certification records. */
  readonly certRecords?: Array<CertSyncRecordOutput>;
  /** Azure lifecycle management */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Single resource Id's metadata. */
export interface ResourceMetadataOutput {
  /** Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1". */
  resourceId: string;
  /** Resource type. e.g. "Microsoft.Compute/virtualMachines" */
  resourceType?: string;
  /** Resource kind. */
  resourceKind?: string;
  /** Resource Origin. */
  resourceOrigin?: ResourceOriginOutput;
  /** Account Id. For example - the AWS account id. */
  accountId?: string;
}

/** A list which includes all the compliance result for one report. */
export interface ReportComplianceStatusOutput {
  /** The Microsoft 365 certification name. */
  readonly m365?: OverviewStatusOutput;
}

/** The overview of the compliance result for one report. */
export interface OverviewStatusOutput {
  /** The count of all passed control. */
  readonly passedCount?: number;
  /** The count of all failed control. */
  readonly failedCount?: number;
  /** The count of all manual control. */
  readonly manualCount?: number;
  /** The count of all not applicable control. */
  readonly notApplicableCount?: number;
  /** The count of all pending for approval control. */
  readonly pendingCount?: number;
}

/** The information of 'bring your own storage' account binding to the report */
export interface StorageInfoOutput {
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
export interface CertSyncRecordOutput {
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** Indicates the status of certification process. */
  certificationStatus?: string;
  /** Indicates the status of compliance process. */
  ingestionStatus?: string;
  /** The control records list to be synchronized. */
  controls?: Array<ControlSyncRecordOutput>;
}

/** A class represent the control record synchronized from app compliance. */
export interface ControlSyncRecordOutput {
  /** The Id of the control. e.g. "Operational_Security_10" */
  controlId?: string;
  /** Control status synchronized from app compliance. */
  controlStatus?: string;
}

/** The base proxy resource. */
export interface ProxyResourceOutput extends ResourceOutput {}

/** Common properties for all Azure Resource Manager resources. */
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
  readonly createdBy?: string;
  /** The type of identity that created the resource. */
  readonly createdByType?: CreatedByTypeOutput;
  /** The type of identity that created the resource. */
  readonly createdAt?: string;
  /** The identity that last modified the resource. */
  readonly lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  readonly lastModifiedByType?: CreatedByTypeOutput;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResourceOutput extends ResourceOutput {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The base extension resource. */
export interface ExtensionResourceOutput extends ResourceOutput {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResourceOutput extends ResourceOutput {
  /** Resource Etag. */
  readonly etag: string;
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnectionOutput extends ProxyResourceOutput {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionPropertiesOutput;
}

/** Properties of he private endpoint connection resource */
export interface PrivateEndpointConnectionPropertiesOutput {
  /** The group identifiers for the private endpoint resource */
  readonly groupIds?: string[];
  /** The private endpoint resource */
  privateEndpoint?: PrivateEndpointOutput;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateOutput;
  /** The provisioning state of the private endpoint connection resource. */
  provisioningState?: PrivateEndpointConnectionProvisioningStateOutput;
}

/** The private endpoint resource */
export interface PrivateEndpointOutput {
  /** The resource identifier for private endpoint */
  id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionStateOutput {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatusOutput;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

export interface PrivateLinkResourceOutput extends ProxyResourceOutput {
  /** Properties of the private link resource. */
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

/** A class represent an AppComplianceAutomation webhook resource. */
export interface WebhookResourceOutput extends ProxyResourceOutput {
  /** Webhook property. */
  properties: WebhookPropertiesOutput;
}

/** Webhook properties. */
export interface WebhookPropertiesOutput {
  /** Webhook id in database. */
  readonly webhookId?: string;
  /** Webhook status. */
  status?: WebhookStatusOutput;
  /** Tenant id. */
  readonly tenantId?: string;
  /** whether to send notification under any event. */
  sendAllEvents?: SendAllEventsOutput;
  /** under which event notification should be sent. */
  events?: NotificationEventOutput[];
  /** webhook payload url */
  payloadUrl?: string;
  /** content type */
  contentType?: ContentTypeOutput;
  /** webhook secret token. If not set, this field value is null; otherwise, please set a string value. */
  webhookKey?: string;
  /** whether to update webhookKey. */
  updateWebhookKey?: UpdateWebhookKeyOutput;
  /** whether webhookKey is enabled. */
  readonly webhookKeyEnabled?: WebhookKeyEnabledOutput;
  /** whether to enable ssl verification */
  enableSslVerification?: EnableSslVerificationOutput;
  /** webhook deliveryStatus */
  readonly deliveryStatus?: DeliveryStatusOutput;
  /** Azure Resource Provisioning State */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** A class represent a AppComplianceAutomation snapshot resource. */
export interface SnapshotResourceOutput extends ProxyResourceOutput {
  /** Snapshot's property. */
  properties?: SnapshotPropertiesOutput;
}

/** Snapshot's properties. */
export interface SnapshotPropertiesOutput {
  /** Snapshot name. */
  readonly snapshotName?: string;
  /** The timestamp of resource creation (UTC). */
  readonly createdAt?: string;
  /** Azure lifecycle management */
  readonly provisioningState?: ProvisioningStateOutput;
  /** The report essential info. */
  readonly reportProperties?: ReportPropertiesOutput;
  /** Metadata pertaining to creation and last modification of the resource. */
  readonly reportSystemData?: SystemDataOutput;
  /** List of compliance results. */
  readonly complianceResults?: Array<ComplianceResultOutput>;
}

/** A class represent the compliance result. */
export interface ComplianceResultOutput {
  /** The name of the compliance. e.g. "M365" */
  readonly complianceName?: string;
  /** List of categories. */
  readonly categories?: Array<CategoryOutput>;
}

/** A class represent the compliance category. */
export interface CategoryOutput {
  /** The name of the compliance category. e.g. "Operational Security" */
  readonly categoryName?: string;
  /** Category status. */
  readonly categoryStatus?: CategoryStatusOutput;
  /** List of control families. */
  readonly controlFamilies?: Array<ControlFamilyOutput>;
}

/** A class represent the control family. */
export interface ControlFamilyOutput {
  /** The name of the control family. e.g. "Malware Protection - Anti-Virus" */
  readonly controlFamilyName?: string;
  /** The control family status */
  readonly controlFamilyStatus?: ControlFamilyStatusOutput;
  /** List of controls. */
  readonly controls?: Array<ControlOutput>;
}

/** A class represent the control. */
export interface ControlOutput {
  /** The Id of the control. e.g. "Operational_Security_10" */
  readonly controlId?: string;
  /** The name of the control. e.g. "Unsupported OS and Software." */
  readonly controlName?: string;
  /** The full name of the control. e.g. "Validate that unsupported operating systems and software components are not in use." */
  readonly controlFullName?: string;
  /** The control's description */
  readonly controlDescription?: string;
  /** The hyper link to the control's description'. */
  readonly controlDescriptionHyperLink?: string;
  /** Control status. */
  readonly controlStatus?: ControlStatusOutput;
  /** List of customer responsibility. */
  readonly responsibilities?: Array<ResponsibilityOutput>;
}

/** A class represent the customer responsibility. */
export interface ResponsibilityOutput {
  /** The id of the customer responsibility. */
  readonly responsibilityId?: string;
  /** The title of the customer responsibility. */
  readonly responsibilityTitle?: string;
  /** The description of the customer responsibility. */
  readonly responsibilityDescription?: string;
  /** The type of customer responsibility. */
  readonly responsibilityType?: ResponsibilityTypeOutput;
  /** The severity level of this customer responsibility. */
  readonly responsibilitySeverity?: ResponsibilitySeverityOutput;
  /** The status of this customer responsibility. */
  readonly responsibilityStatus?: ResponsibilityStatusOutput;
  /** The supported cloud environment of this customer responsibility. */
  readonly responsibilityEnvironment?: ResponsibilityEnvironmentOutput;
  /** The count of all failed resources. */
  failedResourceCount?: number;
  /** The count of all resources. */
  totalResourceCount?: number;
  /** List of resource. */
  readonly resourceList?: Array<ResponsibilityResourceOutput>;
  /** List of recommendation. */
  readonly recommendationList?: Array<RecommendationOutput>;
  /** The evidence upload guidance description. */
  readonly guidance?: string;
  /** The justification given by the user to clarify the reason. */
  readonly justification?: string;
  /** List of evidence file url. */
  evidenceFiles?: string[];
}

/** A class represent the resource. */
export interface ResponsibilityResourceOutput {
  /** The Id of the resource. */
  readonly resourceId?: string;
  /** Account Id. For example - AWS account Id. */
  readonly accountId?: string;
  /** The type of the resource. e.g. "Microsoft.SignalRService/SignalR" */
  readonly resourceType?: string;
  /** Resource origin. */
  readonly resourceOrigin?: ResourceOriginOutput;
  /** Resource status. */
  readonly resourceStatus?: ResourceStatusOutput;
  /** The status change date for the resource. */
  readonly resourceStatusChangeDate?: string;
  /** List of recommendation id. */
  recommendationIds?: string[];
}

/** A class represent the recommendation. */
export interface RecommendationOutput {
  /** The Id of the recommendation. */
  readonly recommendationId?: string;
  /** The short name of the recommendation. e.g. "Invalid TLS config" */
  readonly recommendationShortName?: string;
  /** List of recommendation solutions. */
  readonly recommendationSolutions?: Array<RecommendationSolutionOutput>;
}

/** A class represent the recommendation solution. */
export interface RecommendationSolutionOutput {
  /** The index of the recommendation solution. */
  readonly recommendationSolutionIndex?: string;
  /** The detail steps of the recommendation solution. */
  readonly recommendationSolutionContent?: string;
  /** Indicates whether this solution is the recommended. */
  readonly isRecommendSolution?: IsRecommendSolutionOutput;
}

/** A class represent an AppComplianceAutomation scoping configuration resource. */
export interface ScopingConfigurationResourceOutput
  extends ProxyResourceOutput {
  /** ScopingConfiguration property. */
  properties: ScopingConfigurationPropertiesOutput;
}

/** ScopingConfiguration's properties. */
export interface ScopingConfigurationPropertiesOutput {
  /** List of scoping question answers. */
  answers?: Array<ScopingAnswerOutput>;
  /** Azure lifecycle management */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Scoping answer. */
export interface ScopingAnswerOutput {
  /** Question id. */
  questionId: string;
  /** Question answer value list. */
  answers: string[];
}

/** A class represent an AppComplianceAutomation evidence resource. */
export interface EvidenceResourceOutput extends ProxyResourceOutput {
  /** Evidence property. */
  properties: EvidencePropertiesOutput;
}

/** Evidence's properties. */
export interface EvidencePropertiesOutput {
  /** Evidence type. */
  evidenceType?: EvidenceTypeOutput;
  /** The path of the file in storage. */
  filePath: string;
  /** Extra data considered as evidence. */
  extraData?: string;
  /** Control id. */
  controlId?: string;
  /** Responsibility id. */
  responsibilityId?: string;
  /** Azure lifecycle management */
  readonly provisioningState?: ProvisioningStateOutput;
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

/** Synchronize certification record response. */
export interface SyncCertRecordResponseOutput {
  /** certification record synchronized. */
  certRecord?: CertSyncRecordOutput;
}

/** The check availability result. */
export interface CheckNameAvailabilityResponseOutput {
  /** Indicates if the resource name is available. */
  nameAvailable?: boolean;
  /** The reason why the given name is not available. */
  reason?: CheckNameAvailabilityReasonOutput;
  /** Detailed reason why the given name is not available. */
  message?: string;
}

/** Report fix result. */
export interface ReportFixResultOutput {
  /** Indicates whether the fix action is Succeeded or Failed. */
  readonly result?: ResultOutput;
  /** If the report fix action failed, to indicate the detailed failed reason. */
  readonly reason?: string;
}

/** Scoping question list. */
export interface ScopingQuestionsOutput {
  /** List of scoping questions. */
  questions?: Array<ScopingQuestionOutput>;
}

/** The definition of a scoping question. */
export interface ScopingQuestionOutput {
  /** Question id. */
  readonly questionId: string;
  /** Superior question id. */
  readonly superiorQuestionId?: string;
  /** Input type of the question answer. */
  readonly inputType: InputTypeOutput;
  /** Option id list. */
  readonly optionIds: string[];
  /** The rule of the question. */
  readonly rules: RuleOutput[];
  /** The answer value to show the sub questions. */
  readonly showSubQuestionsValue?: string;
}

/** Report health status verification result. */
export interface ReportVerificationResultOutput {
  /** Indicates whether the report verification action is Succeeded or Failed. */
  readonly result?: ResultOutput;
  /** If the report verification action failed, to indicate the detailed failed reason. */
  readonly reason?: string;
}

/** Object that includes all the possible response for the download operation. */
export interface DownloadResponseOutput {
  /** Resource list of the report */
  readonly resourceList?: Array<ResourceItemOutput>;
  /** List of the compliance result */
  readonly complianceReport?: Array<ComplianceReportItemOutput>;
  /** Compliance pdf report */
  readonly compliancePdfReport?: DownloadResponseCompliancePdfReportOutput;
  /** The detailed compliance pdf report */
  readonly complianceDetailedPdfReport?: DownloadResponseComplianceDetailedPdfReportOutput;
}

/** Resource Id. */
export interface ResourceItemOutput {
  /** The subscription Id of this resource. */
  readonly subscriptionId?: string;
  /** The resource group name of this resource. */
  readonly resourceGroup?: string;
  /** The resource type of this resource. e.g. "Microsoft.SignalRService/SignalR" */
  readonly resourceType?: string;
  /** The resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1". */
  readonly resourceId?: string;
}

/** Object that includes all the content for single compliance result. */
export interface ComplianceReportItemOutput {
  /** The category name. */
  readonly categoryName?: string;
  /** The control family name. */
  readonly controlFamilyName?: string;
  /** The control Id - e.g. "1". */
  readonly controlId?: string;
  /** The control name. */
  readonly controlName?: string;
  /** Control status. */
  readonly controlStatus?: ControlStatusOutput;
  /** The title of the customer responsibility. */
  readonly responsibilityTitle?: string;
  /** The description of the customer responsibility. */
  readonly responsibilityDescription?: string;
  /** The Id of the resource. */
  readonly resourceId?: string;
  /** The type of the resource.  e.g. "Microsoft.SignalRService/SignalR" */
  readonly resourceType?: string;
  /** Resource origin. */
  readonly resourceOrigin?: ResourceOriginOutput;
  /** Resource status. */
  readonly resourceStatus?: ResourceStatusOutput;
  /** The status change date for the resource. */
  readonly resourceStatusChangeDate?: string;
}

/** Compliance pdf report */
export interface DownloadResponseCompliancePdfReportOutput {
  /** The uri of compliance pdf report */
  readonly sasUri?: string;
}

/** The detailed compliance pdf report */
export interface DownloadResponseComplianceDetailedPdfReportOutput {
  /** The uri of detailed compliance pdf report */
  readonly sasUri?: string;
}

/** Object that includes all the possible response for the evidence file download operation. */
export interface EvidenceFileDownloadResponseOutput {
  /** The uri of evidence file */
  readonly evidenceFile?: EvidenceFileDownloadResponseEvidenceFileOutput;
}

/** The uri of evidence file */
export interface EvidenceFileDownloadResponseEvidenceFileOutput {
  /** The url of evidence file */
  readonly url?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface OperationOutput {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplayOutput;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: OriginOutput;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionTypeOutput;
}

/** Localized display information for and operation. */
export interface OperationDisplayOutput {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  description?: string;
}

/** The get collection count response. */
export interface GetCollectionCountResponseOutput {
  /** The count of the specified resource. */
  count?: number;
}

/** The get overview status response. */
export interface GetOverviewStatusResponseOutput {
  /** List of different status items. */
  statusList?: Array<StatusItemOutput>;
}

/** Single status. */
export interface StatusItemOutput {
  /** Status name - e.g. "Active", "Failed". */
  statusName?: string;
  /** Status value. e.g. "100", or "100%". */
  statusValue?: string;
}

/** Success. The response indicates given subscriptions has been onboarded. */
export interface OnboardResponseOutput {
  /** List of subscription ids that are onboarded */
  subscriptionIds?: string[];
}

/** Trigger evaluation response. */
export interface TriggerEvaluationResponseOutput {
  /** trigger evaluation property. */
  properties?: TriggerEvaluationPropertyOutput;
}

/** Trigger evaluation response. */
export interface TriggerEvaluationPropertyOutput {
  /** The time when the evaluation is triggered. */
  readonly triggerTime?: string;
  /** The time when the evaluation is end. */
  readonly evaluationEndTime?: string;
  /** List of resource ids to be evaluated */
  resourceIds?: string[];
  /** List of quick assessments */
  quickAssessments?: Array<QuickAssessmentOutput>;
}

/** A class represent the quick assessment. */
export interface QuickAssessmentOutput {
  /** Resource id. */
  readonly resourceId?: string;
  /** Responsibility id. */
  readonly responsibilityId?: string;
  /** The timestamp of resource creation (UTC). */
  readonly timestamp?: string;
  /** Quick assessment status. */
  readonly resourceStatus?: ResourceStatusOutput;
  /** Quick assessment display name. */
  readonly displayName?: string;
  /** Quick assessment display name. */
  readonly description?: string;
  /** Link to remediation steps for this quick assessment. */
  readonly remediationLink?: string;
}

/** Parameters for listing in use storage accounts operation. If subscription list is null, it will check the user's all subscriptions. */
export interface ListInUseStorageAccountsResponseOutput {
  /** The storage account list which in use in related reports. */
  storageAccountList?: Array<StorageInfoOutput>;
}

/** Alias for ResourceOriginOutput */
export type ResourceOriginOutput = "Azure" | "AWS" | "GCP" | string;
/** Alias for ReportStatusOutput */
export type ReportStatusOutput =
  | "Active"
  | "Failed"
  | "Reviewing"
  | "Disabled"
  | string;
/** Alias for ProvisioningStateOutput */
export type ProvisioningStateOutput =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | "Creating"
  | "Deleting"
  | "Fixing"
  | "Verifying"
  | "Updating"
  | string;
/** Alias for CreatedByTypeOutput */
export type CreatedByTypeOutput =
  | "User"
  | "Application"
  | "ManagedIdentity"
  | "Key"
  | string;
/** Alias for PrivateEndpointServiceConnectionStatusOutput */
export type PrivateEndpointServiceConnectionStatusOutput =
  | "Pending"
  | "Approved"
  | "Rejected"
  | string;
/** Alias for ResourceProvisioningStateOutput */
export type ResourceProvisioningStateOutput =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | string;
/** Alias for PrivateEndpointConnectionProvisioningStateOutput */
export type PrivateEndpointConnectionProvisioningStateOutput =
  | ResourceProvisioningStateOutput
  | "Creating"
  | "Deleting";
/** Alias for WebhookStatusOutput */
export type WebhookStatusOutput = "Enabled" | "Disabled" | string;
/** Alias for SendAllEventsOutput */
export type SendAllEventsOutput = "true" | "false" | string;
/** Alias for NotificationEventOutput */
export type NotificationEventOutput =
  | "generate_snapshot_success"
  | "generate_snapshot_failed"
  | "assessment_failure"
  | "report_configuration_changes"
  | "report_deletion"
  | string;
/** Alias for ContentTypeOutput */
export type ContentTypeOutput = "application/json" | string;
/** Alias for UpdateWebhookKeyOutput */
export type UpdateWebhookKeyOutput = "true" | "false" | string;
/** Alias for WebhookKeyEnabledOutput */
export type WebhookKeyEnabledOutput = "true" | "false" | string;
/** Alias for EnableSslVerificationOutput */
export type EnableSslVerificationOutput = "true" | "false" | string;
/** Alias for DeliveryStatusOutput */
export type DeliveryStatusOutput =
  | "Succeeded"
  | "Failed"
  | "NotStarted"
  | string;
/** Alias for CategoryStatusOutput */
export type CategoryStatusOutput =
  | "Passed"
  | "Failed"
  | "NotApplicable"
  | "PendingApproval"
  | string;
/** Alias for ControlFamilyStatusOutput */
export type ControlFamilyStatusOutput =
  | "Passed"
  | "Failed"
  | "NotApplicable"
  | "PendingApproval"
  | string;
/** Alias for ControlStatusOutput */
export type ControlStatusOutput =
  | "Passed"
  | "Failed"
  | "NotApplicable"
  | "PendingApproval"
  | string;
/** Alias for ResponsibilityTypeOutput */
export type ResponsibilityTypeOutput =
  | "Automated"
  | "ScopedManual"
  | "Manual"
  | string;
/** Alias for ResponsibilitySeverityOutput */
export type ResponsibilitySeverityOutput = "High" | "Medium" | "Low" | string;
/** Alias for ResponsibilityStatusOutput */
export type ResponsibilityStatusOutput =
  | "Passed"
  | "Failed"
  | "NotApplicable"
  | "PendingApproval"
  | string;
/** Alias for ResponsibilityEnvironmentOutput */
export type ResponsibilityEnvironmentOutput =
  | "Azure"
  | "AWS"
  | "GCP"
  | "General"
  | string;
/** Alias for ResourceStatusOutput */
export type ResourceStatusOutput = "Healthy" | "Unhealthy" | string;
/** Alias for IsRecommendSolutionOutput */
export type IsRecommendSolutionOutput = "true" | "false" | string;
/** Alias for EvidenceTypeOutput */
export type EvidenceTypeOutput =
  | "File"
  | "AutoCollectedEvidence"
  | "Data"
  | string;
/** The response of a ReportResource list operation. */
export type ReportResourceListResultOutput = Paged<ReportResourceOutput>;
/** Alias for CheckNameAvailabilityReasonOutput */
export type CheckNameAvailabilityReasonOutput =
  | "Invalid"
  | "AlreadyExists"
  | string;
/** Alias for ResultOutput */
export type ResultOutput = "Succeeded" | "Failed" | string;
/** Alias for InputTypeOutput */
export type InputTypeOutput =
  | "None"
  | "Text"
  | "Email"
  | "MultilineText"
  | "Url"
  | "Number"
  | "Boolean"
  | "Telephone"
  | "YesNoNa"
  | "Date"
  | "YearPicker"
  | "SingleSelection"
  | "SingleSelectDropdown"
  | "MultiSelectCheckbox"
  | "MultiSelectDropdown"
  | "MultiSelectDropdownCustom"
  | "Group"
  | "Upload"
  | string;
/** Alias for RuleOutput */
export type RuleOutput =
  | "Required"
  | "CharLength"
  | "Url"
  | "Urls"
  | "Domains"
  | "USPrivacyShield"
  | "PublicSOX"
  | "CreditCardPCI"
  | "AzureApplication"
  | "ValidGuid"
  | "PublisherVerification"
  | "DynamicDropdown"
  | "PreventNonEnglishChar"
  | "ValidEmail"
  | string;
/** The response of a WebhookResource list operation. */
export type WebhookResourceListResultOutput = Paged<WebhookResourceOutput>;
/** The response of a SnapshotResource list operation. */
export type SnapshotResourceListResultOutput = Paged<SnapshotResourceOutput>;
/** The response of a ScopingConfigurationResource list operation. */
export type ScopingConfigurationResourceListResultOutput =
  Paged<ScopingConfigurationResourceOutput>;
/** The response of a EvidenceResource list operation. */
export type EvidenceResourceListResultOutput = Paged<EvidenceResourceOutput>;
/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export type PagedOperationOutput = Paged<OperationOutput>;
/** Alias for OriginOutput */
export type OriginOutput = "user" | "system" | "user,system" | string;
/** Alias for ActionTypeOutput */
export type ActionTypeOutput = "Internal" | string;
