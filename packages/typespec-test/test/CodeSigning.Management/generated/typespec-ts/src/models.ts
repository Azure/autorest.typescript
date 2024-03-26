// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Trusted signing account resource. */
export interface CodeSigningAccount extends TrackedResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: CodeSigningAccountProperties;
}

/** Properties of the trusted signing account. */
export interface CodeSigningAccountProperties {
  /** SKU of the trusted signing account. */
  sku?: AccountSku;
}

/** SKU of the trusted signing account. */
export interface AccountSku {
  /**
   * Name of the SKU.
   *
   * Possible values: "Basic", "Premium"
   */
  name: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource */
export interface TrackedResourceBase extends ArmResource {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** Common properties for all Azure Resource Manager resources. */
export interface ArmResource extends ArmResourceBase {}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {}

/** Base class used for type definitions */
export interface ArmResourceBase {}

/** The base proxy resource. */
export interface ProxyResourceBase extends ArmResource {}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends ProxyResourceBase {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of he private endpoint connection resource */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint resource */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /**
   * The provisioning state of the private endpoint connection resource.
   *
   * Possible values: "Succeeded", "Failed", "Canceled", "Creating", "Deleting"
   */
  provisioningState?: string;
}

/** The private endpoint resource */
export interface PrivateEndpoint {
  /** The resource identifier for private endpoint */
  id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
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

export interface PrivateLinkResource extends ProxyResourceBase {
  /** Properties of the private link resource. */
  properties?: PrivateLinkResourceProperties;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** Certificate profile resource. */
export interface CertificateProfile extends ProxyResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: CertificateProfileProperties;
}

/** Properties of the certificate profile. */
export interface CertificateProfileProperties {
  /**
   * Profile type of the certificate.
   *
   * Possible values: "PublicTrust", "PrivateTrust", "PrivateTrustCIPolicy", "VBSEnclave", "PublicTrustTest"
   */
  profileType: string;
  /** Whether to include STREET in the certificate subject name. */
  includeStreetAddress?: boolean;
  /** Whether to include L in the certificate subject name. Applicable only for private trust, private trust ci profile types */
  includeCity?: boolean;
  /** Whether to include S in the certificate subject name. Applicable only for private trust, private trust ci profile types */
  includeState?: boolean;
  /** Whether to include C in the certificate subject name. Applicable only for private trust, private trust ci profile types */
  includeCountry?: boolean;
  /** Whether to include PC in the certificate subject name. */
  includePostalCode?: boolean;
  /** Identity validation id used for the certificate subject name. */
  identityValidationId?: string;
}

/** Properties of the certificate. */
export interface Certificate {
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
  revocation?: Revocation;
}

/** Revocation details of the certificate. */
export interface Revocation {
  /** The timestamp when the revocation is requested. */
  requestedAt?: Date | string;
  /** The timestamp when the revocation is effective. */
  effectiveAt?: Date | string;
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
export interface ExtensionResourceBase extends ArmResource {}

/** Parameters for creating or updating a trusted signing account. */
export interface CodeSigningAccountPatch {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** Properties of the trusted signing account. */
  properties?: CodeSigningAccountPatchProperties;
}

/** Properties of the trusted signing account. */
export interface CodeSigningAccountPatchProperties {
  /** SKU of the trusted signing account. */
  sku?: AccountSku;
}

/** The parameters used to check the availability of the trusted signing account name. */
export interface CheckNameAvailability {
  /** Trusted signing account name. */
  name: string;
}

/** Defines the certificate revocation properties. */
export interface RevokeCertificate {
  /** Serial number of the certificate. */
  serialNumber: string;
  /** Thumbprint of the certificate. */
  thumbprint: string;
  /** The timestamp when the revocation is effective. */
  effectiveAt: Date | string;
  /** Reason for the revocation. */
  reason: string;
  /** Remarks for the revocation. */
  remarks?: string;
}
