// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface OperationOutput {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplayOutput;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   *
   * Possible values: "user", "system", "user,system"
   */
  readonly origin?: string;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   *
   * Possible values: "Internal"
   */
  actionType?: string;
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

/** Trusted signing account resource. */
export interface CodeSigningAccountOutput extends TrackedResourceBaseOutput {
  /** The resource-specific properties for this resource. */
  properties?: CodeSigningAccountPropertiesOutput;
}

/** Properties of the trusted signing account. */
export interface CodeSigningAccountPropertiesOutput {
  /** The URI of the trusted signing account which is used during signing files. */
  readonly accountUri?: string;
  /** SKU of the trusted signing account. */
  sku?: AccountSkuOutput;
  /**
   * Status of the current operation on trusted signing account.
   *
   * Possible values: "Succeeded", "Failed", "Canceled", "Updating", "Deleting", "Accepted"
   */
  readonly provisioningState?: string;
}

/** SKU of the trusted signing account. */
export interface AccountSkuOutput {
  /**
   * Name of the SKU.
   *
   * Possible values: "Basic", "Premium"
   */
  name: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource */
export interface TrackedResourceBaseOutput extends ArmResourceOutput {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** Common properties for all Azure Resource Manager resources. */
export interface ArmResourceOutput extends ArmResourceBaseOutput {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemDataOutput {
  /** The identity that created the resource. */
  readonly createdBy?: string;
  /**
   * The type of identity that created the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  readonly createdByType?: string;
  /** The type of identity that created the resource. */
  readonly createdAt?: string;
  /** The identity that last modified the resource. */
  readonly lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  readonly lastModifiedByType?: string;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: string;
}

/** Base class used for type definitions */
export interface ArmResourceBaseOutput {}

/** The base proxy resource. */
export interface ProxyResourceBaseOutput extends ArmResourceOutput {}

/** The private endpoint connection resource */
export interface PrivateEndpointConnectionOutput
  extends ProxyResourceBaseOutput {
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
  /**
   * The provisioning state of the private endpoint connection resource.
   *
   * Possible values: "Succeeded", "Failed", "Canceled", "Creating", "Deleting"
   */
  provisioningState?: string;
}

/** The private endpoint resource */
export interface PrivateEndpointOutput {
  /** The resource identifier for private endpoint */
  id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionStateOutput {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   *
   * Possible values: "Pending", "Approved", "Rejected"
   */
  status?: string;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

export interface PrivateLinkResourceOutput extends ProxyResourceBaseOutput {
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

/** Certificate profile resource. */
export interface CertificateProfileOutput extends ProxyResourceBaseOutput {
  /** The resource-specific properties for this resource. */
  properties?: CertificateProfilePropertiesOutput;
}

/** Properties of the certificate profile. */
export interface CertificateProfilePropertiesOutput {
  /**
   * Profile type of the certificate.
   *
   * Possible values: "PublicTrust", "PrivateTrust", "PrivateTrustCIPolicy", "VBSEnclave", "PublicTrustTest"
   */
  profileType: string;
  /** Used as CN in the certificate subject name. */
  readonly commonName?: string;
  /** Used as O in the certificate subject name. */
  readonly organization?: string;
  /** Used as OU in the private trust certificate subject name. */
  readonly organizationUnit?: string;
  /** Used as STREET in the certificate subject name. */
  readonly streetAddress?: string;
  /** Whether to include STREET in the certificate subject name. */
  includeStreetAddress?: boolean;
  /** Used as L in the certificate subject name. */
  readonly city?: string;
  /** Whether to include L in the certificate subject name. Applicable only for private trust, private trust ci profile types */
  includeCity?: boolean;
  /** Used as S in the certificate subject name. */
  readonly state?: string;
  /** Whether to include S in the certificate subject name. Applicable only for private trust, private trust ci profile types */
  includeState?: boolean;
  /** Used as C in the certificate subject name. */
  readonly country?: string;
  /** Whether to include C in the certificate subject name. Applicable only for private trust, private trust ci profile types */
  includeCountry?: boolean;
  /** Used as PC in the certificate subject name. */
  readonly postalCode?: string;
  /** Whether to include PC in the certificate subject name. */
  includePostalCode?: boolean;
  /** Enhanced key usage of the certificate. */
  readonly enhancedKeyUsage?: string;
  /** Identity validation id used for the certificate subject name. */
  identityValidationId?: string;
  /**
   * Status of the current operation on certificate profile.
   *
   * Possible values: "Succeeded", "Failed", "Canceled", "Updating", "Deleting", "Accepted"
   */
  readonly provisioningState?: string;
  /**
   * Status of the certificate profile.
   *
   * Possible values: "Active", "Disabled", "Suspended"
   */
  readonly status?: string;
  /** List of renewed certificates. */
  readonly certificates?: Array<CertificateOutput>;
}

/** Properties of the certificate. */
export interface CertificateOutput {
  /** Serial number of the certificate. */
  serialNumber?: string;
  /** Subject name of the certificate. */
  subjectName?: string;
  /** Thumbprint of the certificate. */
  thumbprint?: string;
  /** Certificate created date. */
  createdDate?: string;
  /** Certificate expiry date. */
  expiryDate?: string;
  /**
   * Status of the certificate.
   *
   * Possible values: "Active", "Expired", "Revoked"
   */
  status?: string;
  /** Revocations history of a certificate. */
  revocation?: RevocationOutput;
}

/** Revocation details of the certificate. */
export interface RevocationOutput {
  /** The timestamp when the revocation is requested. */
  requestedAt?: string;
  /** The timestamp when the revocation is effective. */
  effectiveAt?: string;
  /** Reason for revocation. */
  reason?: string;
  /** Remarks for the revocation. */
  remarks?: string;
  /**
   * Status of the revocation.
   *
   * Possible values: "Succeeded", "InProgress", "Failed"
   */
  status?: string;
  /** Reason for the revocation failure. */
  failureReason?: string;
}

/** The base extension resource. */
export interface ExtensionResourceBaseOutput extends ArmResourceOutput {}

/** The CheckNameAvailability operation response. */
export interface CheckNameAvailabilityResultOutput {
  /** A boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used. */
  readonly nameAvailable?: boolean;
  /**
   * The reason that a trusted signing account name could not be used. The Reason element is only returned if nameAvailable is false.
   *
   * Possible values: "AccountNameInvalid", "AlreadyExists"
   */
  readonly reason?: string;
  /** An error message explaining the Reason value in more detail. */
  readonly message?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export type PagedOperationOutput = Paged<OperationOutput>;
/** The response of a CodeSigningAccount list operation. */
export type CodeSigningAccountListResultOutput =
  Paged<CodeSigningAccountOutput>;
/** The response of a CertificateProfile list operation. */
export type CertificateProfileListResultOutput =
  Paged<CertificateProfileOutput>;
