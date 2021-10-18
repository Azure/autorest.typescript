/// <reference types="node" />

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

/** Class representing Abnormal Time Period identified in diagnosis */
export declare interface AbnormalTimePeriod {
    /** Start time of the downtime */
    startTime?: Date;
    /** End time of the downtime */
    endTime?: Date;
    /** List of Possible Cause of downtime */
    events?: DetectorAbnormalTimePeriod[];
    /** List of proposed solutions */
    solutions?: Solution[];
}

/** Defines values for AccessControlEntryAction. */
export declare type AccessControlEntryAction = "Permit" | "Deny";

/** Address information for domain registration. */
export declare interface Address {
    /** First line of an Address. */
    address1: string;
    /** The second line of the Address. Optional. */
    address2?: string;
    /** The city for the address. */
    city: string;
    /** The country for the address. */
    country: string;
    /** The postal code for the address. */
    postalCode: string;
    /** The state or province for the address. */
    state: string;
}

/** Describes main public IP address and any extra virtual IPs. */
export declare type AddressResponse = ProxyOnlyResource & {
    /** Main public virtual IP. */
    serviceIpAddress?: string;
    /** Virtual Network internal IP address of the App Service Environment if it is in internal load-balancing mode. */
    internalIpAddress?: string;
    /** IP addresses appearing on outbound connections. */
    outboundIpAddresses?: string[];
    /** Additional virtual IPs. */
    vipMappings?: VirtualIPMapping[];
};

/** Class Representing Detector Evidence used for analysis */
export declare interface AnalysisData {
    /** Name of the Detector */
    source?: string;
    /** Detector Definition */
    detectorDefinition?: DetectorDefinition;
    /** Source Metrics */
    metrics?: DiagnosticMetricSet[];
    /** Additional Source Data */
    data?: NameValuePair[][];
    /** Detector Meta Data */
    detectorMetaData?: ResponseMetaData;
}

/** Definition of Analysis */
export declare type AnalysisDefinition = ProxyOnlyResource & {
    /**
     * Description of the Analysis
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
};

/** Information about the formal API definition for the app. */
export declare interface ApiDefinitionInfo {
    /** The URL of the API definition. */
    url?: string;
}

/** Description of site key vault references. */
export declare interface ApiKVReference {
    reference?: string;
    status?: ResolveStatus;
    vaultName?: string;
    secretName?: string;
    secretVersion?: string;
    /** Type of managed service identity. */
    identityType?: ManagedServiceIdentityType;
    details?: string;
    source?: "KeyVault";
    location?: "ApplicationSetting";
}

/** Azure API management (APIM) configuration linked to the app. */
export declare interface ApiManagementConfig {
    /** APIM-Api Identifier. */
    id?: string;
}

/** Application logs configuration. */
export declare interface ApplicationLogsConfig {
    /** Application logs to file system configuration. */
    fileSystem?: FileSystemApplicationLogsConfig;
    /** Application logs to azure table storage configuration. */
    azureTableStorage?: AzureTableStorageApplicationLogsConfig;
    /** Application logs to blob storage configuration. */
    azureBlobStorage?: AzureBlobStorageApplicationLogsConfig;
}

/** Application stack. */
export declare interface ApplicationStack {
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
}

/** Collection of Application Stacks */
export declare interface ApplicationStackCollection {
    /** Collection of resources. */
    value: ApplicationStackResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** ARM resource for a ApplicationStack. */
export declare type ApplicationStackResource = ProxyOnlyResource & {
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
};

/** Key Vault container for a certificate that is purchased through Azure. */
export declare interface AppServiceCertificate {
    /** Key Vault resource Id. */
    keyVaultId?: string;
    /** Key Vault secret name. */
    keyVaultSecretName?: string;
    /**
     * Status of the Key Vault secret.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: KeyVaultSecretStatus;
}

/** Collection of certificate order certificates. */
export declare interface AppServiceCertificateCollection {
    /** Collection of resources. */
    value: AppServiceCertificateResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** SSL certificate purchase order. */
export declare type AppServiceCertificateOrder = Resource & {
    /** State of the Key Vault secret. */
    certificates?: {
        [propertyName: string]: AppServiceCertificate;
    };
    /** Certificate distinguished name. */
    distinguishedName?: string;
    /**
     * Domain verification token.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly domainVerificationToken?: string;
    /** Duration in years (must be between 1 and 3). */
    validityInYears?: number;
    /** Certificate key size. */
    keySize?: number;
    /** Certificate product type. */
    productType?: CertificateProductType;
    /** <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>. */
    autoRenew?: boolean;
    /**
     * Status of certificate order.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * Current order status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CertificateOrderStatus;
    /**
     * Signed certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly signedCertificate?: CertificateDetails;
    /** Last CSR that was created for this order. */
    csr?: string;
    /**
     * Intermediate certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly intermediate?: CertificateDetails;
    /**
     * Root certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly root?: CertificateDetails;
    /**
     * Current serial number of the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serialNumber?: string;
    /**
     * Certificate last issuance time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastCertificateIssuanceTime?: Date;
    /**
     * Certificate expiration time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expirationTime?: Date;
    /**
     * <code>true</code> if private key is external; otherwise, <code>false</code>.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isPrivateKeyExternal?: boolean;
    /**
     * Reasons why App Service Certificate is not renewable at the current moment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly appServiceCertificateNotRenewableReasons?: AppServiceCertificateOrderPropertiesAppServiceCertificateNotRenewableReasonsItem[];
    /**
     * Time stamp when the certificate would be auto renewed next
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextAutoRenewalTimeStamp?: Date;
};

/** Collection of certificate orders. */
export declare interface AppServiceCertificateOrderCollection {
    /** Collection of resources. */
    value: AppServiceCertificateOrder[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** ARM resource for a certificate order that is purchased through Azure. */
export declare type AppServiceCertificateOrderPatchResource = ProxyOnlyResource & {
    /** State of the Key Vault secret. */
    certificates?: {
        [propertyName: string]: AppServiceCertificate;
    };
    /** Certificate distinguished name. */
    distinguishedName?: string;
    /**
     * Domain verification token.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly domainVerificationToken?: string;
    /** Duration in years (must be between 1 and 3). */
    validityInYears?: number;
    /** Certificate key size. */
    keySize?: number;
    /** Certificate product type. */
    productType?: CertificateProductType;
    /** <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>. */
    autoRenew?: boolean;
    /**
     * Status of certificate order.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * Current order status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CertificateOrderStatus;
    /**
     * Signed certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly signedCertificate?: CertificateDetails;
    /** Last CSR that was created for this order. */
    csr?: string;
    /**
     * Intermediate certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly intermediate?: CertificateDetails;
    /**
     * Root certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly root?: CertificateDetails;
    /**
     * Current serial number of the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serialNumber?: string;
    /**
     * Certificate last issuance time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastCertificateIssuanceTime?: Date;
    /**
     * Certificate expiration time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expirationTime?: Date;
    /**
     * <code>true</code> if private key is external; otherwise, <code>false</code>.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isPrivateKeyExternal?: boolean;
    /**
     * Reasons why App Service Certificate is not renewable at the current moment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly appServiceCertificateNotRenewableReasons?: AppServiceCertificateOrderPatchResourcePropertiesAppServiceCertificateNotRenewableReasonsItem[];
    /**
     * Time stamp when the certificate would be auto renewed next
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextAutoRenewalTimeStamp?: Date;
};

/**
 * Defines values for AppServiceCertificateOrderPatchResourcePropertiesAppServiceCertificateNotRenewableReasonsItem. \
 * {@link KnownAppServiceCertificateOrderPatchResourcePropertiesAppServiceCertificateNotRenewableReasonsItem} can be used interchangeably with AppServiceCertificateOrderPatchResourcePropertiesAppServiceCertificateNotRenewableReasonsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **RegistrationStatusNotSupportedForRenewal** \
 * **ExpirationNotInRenewalTimeRange** \
 * **SubscriptionNotActive**
 */
export declare type AppServiceCertificateOrderPatchResourcePropertiesAppServiceCertificateNotRenewableReasonsItem = string;

/**
 * Defines values for AppServiceCertificateOrderPropertiesAppServiceCertificateNotRenewableReasonsItem. \
 * {@link KnownAppServiceCertificateOrderPropertiesAppServiceCertificateNotRenewableReasonsItem} can be used interchangeably with AppServiceCertificateOrderPropertiesAppServiceCertificateNotRenewableReasonsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **RegistrationStatusNotSupportedForRenewal** \
 * **ExpirationNotInRenewalTimeRange** \
 * **SubscriptionNotActive**
 */
export declare type AppServiceCertificateOrderPropertiesAppServiceCertificateNotRenewableReasonsItem = string;

/** Interface representing a AppServiceCertificateOrders. */
export declare interface AppServiceCertificateOrders {
    /**
     * Description for List all certificate orders in a subscription.
     * @param options The options parameters.
     */
    list(options?: AppServiceCertificateOrdersListOptionalParams): PagedAsyncIterableIterator<AppServiceCertificateOrder>;
    /**
     * Description for Get certificate orders in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: AppServiceCertificateOrdersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AppServiceCertificateOrder>;
    /**
     * Description for List all certificates associated with a certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param options The options parameters.
     */
    listCertificates(resourceGroupName: string, certificateOrderName: string, options?: AppServiceCertificateOrdersListCertificatesOptionalParams): PagedAsyncIterableIterator<AppServiceCertificateResource>;
    /**
     * Description for Validate information for a certificate order.
     * @param appServiceCertificateOrder Information for a certificate order.
     * @param options The options parameters.
     */
    validatePurchaseInformation(appServiceCertificateOrder: AppServiceCertificateOrder, options?: AppServiceCertificateOrdersValidatePurchaseInformationOptionalParams): Promise<void>;
    /**
     * Description for Get a certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order..
     * @param options The options parameters.
     */
    get(resourceGroupName: string, certificateOrderName: string, options?: AppServiceCertificateOrdersGetOptionalParams): Promise<AppServiceCertificateOrdersGetResponse>;
    /**
     * Description for Create or update a certificate purchase order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param certificateDistinguishedName Distinguished name to use for the certificate order.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, certificateOrderName: string, certificateDistinguishedName: AppServiceCertificateOrder, options?: AppServiceCertificateOrdersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<AppServiceCertificateOrdersCreateOrUpdateResponse>, AppServiceCertificateOrdersCreateOrUpdateResponse>>;
    /**
     * Description for Create or update a certificate purchase order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param certificateDistinguishedName Distinguished name to use for the certificate order.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, certificateOrderName: string, certificateDistinguishedName: AppServiceCertificateOrder, options?: AppServiceCertificateOrdersCreateOrUpdateOptionalParams): Promise<AppServiceCertificateOrdersCreateOrUpdateResponse>;
    /**
     * Description for Delete an existing certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, certificateOrderName: string, options?: AppServiceCertificateOrdersDeleteOptionalParams): Promise<void>;
    /**
     * Description for Create or update a certificate purchase order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param certificateDistinguishedName Distinguished name to use for the certificate order.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, certificateOrderName: string, certificateDistinguishedName: AppServiceCertificateOrderPatchResource, options?: AppServiceCertificateOrdersUpdateOptionalParams): Promise<AppServiceCertificateOrdersUpdateResponse>;
    /**
     * Description for Get the certificate associated with a certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param name Name of the certificate.
     * @param options The options parameters.
     */
    getCertificate(resourceGroupName: string, certificateOrderName: string, name: string, options?: AppServiceCertificateOrdersGetCertificateOptionalParams): Promise<AppServiceCertificateOrdersGetCertificateResponse>;
    /**
     * Description for Creates or updates a certificate and associates with key vault secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param name Name of the certificate.
     * @param keyVaultCertificate Key vault certificate resource Id.
     * @param options The options parameters.
     */
    beginCreateOrUpdateCertificate(resourceGroupName: string, certificateOrderName: string, name: string, keyVaultCertificate: AppServiceCertificateResource, options?: AppServiceCertificateOrdersCreateOrUpdateCertificateOptionalParams): Promise<PollerLike<PollOperationState<AppServiceCertificateOrdersCreateOrUpdateCertificateResponse>, AppServiceCertificateOrdersCreateOrUpdateCertificateResponse>>;
    /**
     * Description for Creates or updates a certificate and associates with key vault secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param name Name of the certificate.
     * @param keyVaultCertificate Key vault certificate resource Id.
     * @param options The options parameters.
     */
    beginCreateOrUpdateCertificateAndWait(resourceGroupName: string, certificateOrderName: string, name: string, keyVaultCertificate: AppServiceCertificateResource, options?: AppServiceCertificateOrdersCreateOrUpdateCertificateOptionalParams): Promise<AppServiceCertificateOrdersCreateOrUpdateCertificateResponse>;
    /**
     * Description for Delete the certificate associated with a certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param name Name of the certificate.
     * @param options The options parameters.
     */
    deleteCertificate(resourceGroupName: string, certificateOrderName: string, name: string, options?: AppServiceCertificateOrdersDeleteCertificateOptionalParams): Promise<void>;
    /**
     * Description for Creates or updates a certificate and associates with key vault secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param name Name of the certificate.
     * @param keyVaultCertificate Key vault certificate resource Id.
     * @param options The options parameters.
     */
    updateCertificate(resourceGroupName: string, certificateOrderName: string, name: string, keyVaultCertificate: AppServiceCertificatePatchResource, options?: AppServiceCertificateOrdersUpdateCertificateOptionalParams): Promise<AppServiceCertificateOrdersUpdateCertificateResponse>;
    /**
     * Description for Reissue an existing certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param reissueCertificateOrderRequest Parameters for the reissue.
     * @param options The options parameters.
     */
    reissue(resourceGroupName: string, certificateOrderName: string, reissueCertificateOrderRequest: ReissueCertificateOrderRequest, options?: AppServiceCertificateOrdersReissueOptionalParams): Promise<void>;
    /**
     * Description for Renew an existing certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param renewCertificateOrderRequest Renew parameters
     * @param options The options parameters.
     */
    renew(resourceGroupName: string, certificateOrderName: string, renewCertificateOrderRequest: RenewCertificateOrderRequest, options?: AppServiceCertificateOrdersRenewOptionalParams): Promise<void>;
    /**
     * Description for Resend certificate email.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param options The options parameters.
     */
    resendEmail(resourceGroupName: string, certificateOrderName: string, options?: AppServiceCertificateOrdersResendEmailOptionalParams): Promise<void>;
    /**
     * Description for Verify domain ownership for this certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param nameIdentifier Email address
     * @param options The options parameters.
     */
    resendRequestEmails(resourceGroupName: string, certificateOrderName: string, nameIdentifier: NameIdentifier, options?: AppServiceCertificateOrdersResendRequestEmailsOptionalParams): Promise<void>;
    /**
     * Description for Verify domain ownership for this certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param siteSealRequest Site seal request.
     * @param options The options parameters.
     */
    retrieveSiteSeal(resourceGroupName: string, certificateOrderName: string, siteSealRequest: SiteSealRequest, options?: AppServiceCertificateOrdersRetrieveSiteSealOptionalParams): Promise<AppServiceCertificateOrdersRetrieveSiteSealResponse>;
    /**
     * Description for Verify domain ownership for this certificate order.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param certificateOrderName Name of the certificate order.
     * @param options The options parameters.
     */
    verifyDomainOwnership(resourceGroupName: string, certificateOrderName: string, options?: AppServiceCertificateOrdersVerifyDomainOwnershipOptionalParams): Promise<void>;
    /**
     * Description for Retrieve the list of certificate actions.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate order.
     * @param options The options parameters.
     */
    retrieveCertificateActions(resourceGroupName: string, name: string, options?: AppServiceCertificateOrdersRetrieveCertificateActionsOptionalParams): Promise<AppServiceCertificateOrdersRetrieveCertificateActionsResponse>;
    /**
     * Description for Retrieve email history.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate order.
     * @param options The options parameters.
     */
    retrieveCertificateEmailHistory(resourceGroupName: string, name: string, options?: AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOptionalParams): Promise<AppServiceCertificateOrdersRetrieveCertificateEmailHistoryResponse>;
}

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersCreateOrUpdateCertificateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateCertificate operation. */
export declare type AppServiceCertificateOrdersCreateOrUpdateCertificateResponse = AppServiceCertificateResource;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type AppServiceCertificateOrdersCreateOrUpdateResponse = AppServiceCertificateOrder;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersDeleteCertificateOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersGetCertificateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getCertificate operation. */
export declare type AppServiceCertificateOrdersGetCertificateResponse = AppServiceCertificateResource;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type AppServiceCertificateOrdersGetResponse = AppServiceCertificateOrder;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type AppServiceCertificateOrdersListByResourceGroupNextResponse = AppServiceCertificateOrderCollection;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type AppServiceCertificateOrdersListByResourceGroupResponse = AppServiceCertificateOrderCollection;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersListCertificatesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listCertificatesNext operation. */
export declare type AppServiceCertificateOrdersListCertificatesNextResponse = AppServiceCertificateCollection;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersListCertificatesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listCertificates operation. */
export declare type AppServiceCertificateOrdersListCertificatesResponse = AppServiceCertificateCollection;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AppServiceCertificateOrdersListNextResponse = AppServiceCertificateOrderCollection;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AppServiceCertificateOrdersListResponse = AppServiceCertificateOrderCollection;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersReissueOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersRenewOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersResendEmailOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersResendRequestEmailsOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersRetrieveCertificateActionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the retrieveCertificateActions operation. */
export declare type AppServiceCertificateOrdersRetrieveCertificateActionsResponse = CertificateOrderAction[];

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the retrieveCertificateEmailHistory operation. */
export declare type AppServiceCertificateOrdersRetrieveCertificateEmailHistoryResponse = CertificateEmail[];

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersRetrieveSiteSealOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the retrieveSiteSeal operation. */
export declare type AppServiceCertificateOrdersRetrieveSiteSealResponse = SiteSeal;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersUpdateCertificateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateCertificate operation. */
export declare type AppServiceCertificateOrdersUpdateCertificateResponse = AppServiceCertificateResource;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type AppServiceCertificateOrdersUpdateResponse = AppServiceCertificateOrder;

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersValidatePurchaseInformationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServiceCertificateOrdersVerifyDomainOwnershipOptionalParams extends coreClient.OperationOptions {
}

/** Key Vault container ARM resource for a certificate that is purchased through Azure. */
export declare type AppServiceCertificatePatchResource = ProxyOnlyResource & {
    /** Key Vault resource Id. */
    keyVaultId?: string;
    /** Key Vault secret name. */
    keyVaultSecretName?: string;
    /**
     * Status of the Key Vault secret.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: KeyVaultSecretStatus;
};

/** Key Vault container ARM resource for a certificate that is purchased through Azure. */
export declare type AppServiceCertificateResource = Resource & {
    /** Key Vault resource Id. */
    keyVaultId?: string;
    /** Key Vault secret name. */
    keyVaultSecretName?: string;
    /**
     * Status of the Key Vault secret.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: KeyVaultSecretStatus;
};

/** Description of an App Service Environment. */
export declare interface AppServiceEnvironment {
    /** Name of the App Service Environment. */
    name: string;
    /** Location of the App Service Environment, e.g. "West US". */
    location: string;
    /**
     * Provisioning state of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * Current status of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: HostingEnvironmentStatus;
    /** Name of the Virtual Network for the App Service Environment. */
    vnetName?: string;
    /** Resource group of the Virtual Network. */
    vnetResourceGroupName?: string;
    /** Subnet of the Virtual Network. */
    vnetSubnetName?: string;
    /** Description of the Virtual Network. */
    virtualNetwork: VirtualNetworkProfile;
    /** Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. */
    internalLoadBalancingMode?: InternalLoadBalancingMode;
    /** Front-end VM size, e.g. "Medium", "Large". */
    multiSize?: string;
    /** Number of front-end instances. */
    multiRoleCount?: number;
    /** Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool. */
    workerPools: WorkerPool[];
    /** Number of IP SSL addresses reserved for the App Service Environment. */
    ipsslAddressCount?: number;
    /**
     * Edition of the metadata database for the App Service Environment, e.g. "Standard".
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseEdition?: string;
    /**
     * Service objective of the metadata database for the App Service Environment, e.g. "S0".
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseServiceObjective?: string;
    /**
     * Number of upgrade domains of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly upgradeDomains?: number;
    /**
     * Subscription of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subscriptionId?: string;
    /** DNS suffix of the App Service Environment. */
    dnsSuffix?: string;
    /**
     * Last deployment action on the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastAction?: string;
    /**
     * Result of the last deployment action on the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastActionResult?: string;
    /**
     * List of comma separated strings describing which VM sizes are allowed for front-ends.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly allowedMultiSizes?: string;
    /**
     * List of comma separated strings describing which VM sizes are allowed for workers.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly allowedWorkerSizes?: string;
    /**
     * Maximum number of VMs in the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximumNumberOfMachines?: number;
    /**
     * Description of IP SSL mapping for the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vipMappings?: VirtualIPMapping[];
    /**
     * Current total, used, and available worker capacities.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly environmentCapacities?: StampCapacity[];
    /** Access control list for controlling traffic to the App Service Environment. */
    networkAccessControlList?: NetworkAccessControlEntry[];
    /**
     * True/false indicating whether the App Service Environment is healthy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly environmentIsHealthy?: boolean;
    /**
     * Detailed message about with results of the last check of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly environmentStatus?: string;
    /**
     * Resource group of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGroup?: string;
    /** Scale factor for front-ends. */
    frontEndScaleFactor?: number;
    /**
     * Default Scale Factor for FrontEnds.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultFrontEndScaleFactor?: number;
    /** API Management Account associated with the App Service Environment. */
    apiManagementAccountId?: string;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    suspended?: boolean;
    /**
     * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     * (most likely because NSG blocked the incoming traffic).
     */
    dynamicCacheEnabled?: boolean;
    /** Custom settings for changing the behavior of the App Service Environment. */
    clusterSettings?: NameValuePair[];
    /** User added ip ranges to whitelist on ASE db */
    userWhitelistedIpRanges?: string[];
    /** Flag that displays whether an ASE has linux workers or not */
    hasLinuxWorkers?: boolean;
    /** Key Vault ID for ILB App Service Environment default SSL certificate */
    sslCertKeyVaultId?: string;
    /** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
    sslCertKeyVaultSecretName?: string;
}

/** Collection of App Service Environments. */
export declare interface AppServiceEnvironmentCollection {
    /** Collection of resources. */
    value: AppServiceEnvironmentResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** ARM resource for a app service environment. */
export declare type AppServiceEnvironmentPatchResource = ProxyOnlyResource & {
    /** Name of the App Service Environment. */
    namePropertiesName?: string;
    /** Location of the App Service Environment, e.g. "West US". */
    location?: string;
    /**
     * Provisioning state of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * Current status of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: HostingEnvironmentStatus;
    /** Name of the Virtual Network for the App Service Environment. */
    vnetName?: string;
    /** Resource group of the Virtual Network. */
    vnetResourceGroupName?: string;
    /** Subnet of the Virtual Network. */
    vnetSubnetName?: string;
    /** Description of the Virtual Network. */
    virtualNetwork?: VirtualNetworkProfile;
    /** Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. */
    internalLoadBalancingMode?: InternalLoadBalancingMode;
    /** Front-end VM size, e.g. "Medium", "Large". */
    multiSize?: string;
    /** Number of front-end instances. */
    multiRoleCount?: number;
    /** Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool. */
    workerPools?: WorkerPool[];
    /** Number of IP SSL addresses reserved for the App Service Environment. */
    ipsslAddressCount?: number;
    /**
     * Edition of the metadata database for the App Service Environment, e.g. "Standard".
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseEdition?: string;
    /**
     * Service objective of the metadata database for the App Service Environment, e.g. "S0".
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseServiceObjective?: string;
    /**
     * Number of upgrade domains of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly upgradeDomains?: number;
    /**
     * Subscription of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subscriptionId?: string;
    /** DNS suffix of the App Service Environment. */
    dnsSuffix?: string;
    /**
     * Last deployment action on the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastAction?: string;
    /**
     * Result of the last deployment action on the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastActionResult?: string;
    /**
     * List of comma separated strings describing which VM sizes are allowed for front-ends.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly allowedMultiSizes?: string;
    /**
     * List of comma separated strings describing which VM sizes are allowed for workers.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly allowedWorkerSizes?: string;
    /**
     * Maximum number of VMs in the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximumNumberOfMachines?: number;
    /**
     * Description of IP SSL mapping for the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vipMappings?: VirtualIPMapping[];
    /**
     * Current total, used, and available worker capacities.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly environmentCapacities?: StampCapacity[];
    /** Access control list for controlling traffic to the App Service Environment. */
    networkAccessControlList?: NetworkAccessControlEntry[];
    /**
     * True/false indicating whether the App Service Environment is healthy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly environmentIsHealthy?: boolean;
    /**
     * Detailed message about with results of the last check of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly environmentStatus?: string;
    /**
     * Resource group of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGroup?: string;
    /** Scale factor for front-ends. */
    frontEndScaleFactor?: number;
    /**
     * Default Scale Factor for FrontEnds.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultFrontEndScaleFactor?: number;
    /** API Management Account associated with the App Service Environment. */
    apiManagementAccountId?: string;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    suspended?: boolean;
    /**
     * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     * (most likely because NSG blocked the incoming traffic).
     */
    dynamicCacheEnabled?: boolean;
    /** Custom settings for changing the behavior of the App Service Environment. */
    clusterSettings?: NameValuePair[];
    /** User added ip ranges to whitelist on ASE db */
    userWhitelistedIpRanges?: string[];
    /** Flag that displays whether an ASE has linux workers or not */
    hasLinuxWorkers?: boolean;
    /** Key Vault ID for ILB App Service Environment default SSL certificate */
    sslCertKeyVaultId?: string;
    /** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
    sslCertKeyVaultSecretName?: string;
};

/** App Service Environment ARM resource. */
export declare type AppServiceEnvironmentResource = Resource & {
    /** Name of the App Service Environment. */
    namePropertiesName?: string;
    /** Location of the App Service Environment, e.g. "West US". */
    locationPropertiesLocation?: string;
    /**
     * Provisioning state of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * Current status of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: HostingEnvironmentStatus;
    /** Name of the Virtual Network for the App Service Environment. */
    vnetName?: string;
    /** Resource group of the Virtual Network. */
    vnetResourceGroupName?: string;
    /** Subnet of the Virtual Network. */
    vnetSubnetName?: string;
    /** Description of the Virtual Network. */
    virtualNetwork?: VirtualNetworkProfile;
    /** Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. */
    internalLoadBalancingMode?: InternalLoadBalancingMode;
    /** Front-end VM size, e.g. "Medium", "Large". */
    multiSize?: string;
    /** Number of front-end instances. */
    multiRoleCount?: number;
    /** Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool. */
    workerPools?: WorkerPool[];
    /** Number of IP SSL addresses reserved for the App Service Environment. */
    ipsslAddressCount?: number;
    /**
     * Edition of the metadata database for the App Service Environment, e.g. "Standard".
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseEdition?: string;
    /**
     * Service objective of the metadata database for the App Service Environment, e.g. "S0".
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseServiceObjective?: string;
    /**
     * Number of upgrade domains of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly upgradeDomains?: number;
    /**
     * Subscription of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subscriptionId?: string;
    /** DNS suffix of the App Service Environment. */
    dnsSuffix?: string;
    /**
     * Last deployment action on the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastAction?: string;
    /**
     * Result of the last deployment action on the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastActionResult?: string;
    /**
     * List of comma separated strings describing which VM sizes are allowed for front-ends.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly allowedMultiSizes?: string;
    /**
     * List of comma separated strings describing which VM sizes are allowed for workers.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly allowedWorkerSizes?: string;
    /**
     * Maximum number of VMs in the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximumNumberOfMachines?: number;
    /**
     * Description of IP SSL mapping for the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vipMappings?: VirtualIPMapping[];
    /**
     * Current total, used, and available worker capacities.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly environmentCapacities?: StampCapacity[];
    /** Access control list for controlling traffic to the App Service Environment. */
    networkAccessControlList?: NetworkAccessControlEntry[];
    /**
     * True/false indicating whether the App Service Environment is healthy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly environmentIsHealthy?: boolean;
    /**
     * Detailed message about with results of the last check of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly environmentStatus?: string;
    /**
     * Resource group of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGroup?: string;
    /** Scale factor for front-ends. */
    frontEndScaleFactor?: number;
    /**
     * Default Scale Factor for FrontEnds.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultFrontEndScaleFactor?: number;
    /** API Management Account associated with the App Service Environment. */
    apiManagementAccountId?: string;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    suspended?: boolean;
    /**
     * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     * (most likely because NSG blocked the incoming traffic).
     */
    dynamicCacheEnabled?: boolean;
    /** Custom settings for changing the behavior of the App Service Environment. */
    clusterSettings?: NameValuePair[];
    /** User added ip ranges to whitelist on ASE db */
    userWhitelistedIpRanges?: string[];
    /** Flag that displays whether an ASE has linux workers or not */
    hasLinuxWorkers?: boolean;
    /** Key Vault ID for ILB App Service Environment default SSL certificate */
    sslCertKeyVaultId?: string;
    /** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
    sslCertKeyVaultSecretName?: string;
};

/** Interface representing a AppServiceEnvironments. */
export declare interface AppServiceEnvironments {
    /**
     * Description for Get all App Service Environments for a subscription.
     * @param options The options parameters.
     */
    list(options?: AppServiceEnvironmentsListOptionalParams): PagedAsyncIterableIterator<AppServiceEnvironmentResource>;
    /**
     * Description for Get all App Service Environments in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: AppServiceEnvironmentsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AppServiceEnvironmentResource>;
    /**
     * Description for Get the used, available, and total worker capacity an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listCapacities(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListCapacitiesOptionalParams): PagedAsyncIterableIterator<StampCapacity>;
    /**
     * Description for Move an App Service Environment to a different VNET.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param vnetInfo Details for the new virtual network.
     * @param options The options parameters.
     */
    beginListChangeVnetAndWait(resourceGroupName: string, name: string, vnetInfo: VirtualNetworkProfile, options?: AppServiceEnvironmentsChangeVnetOptionalParams): PagedAsyncIterableIterator<Site>;
    /**
     * Description for Get the network endpoints of all inbound dependencies of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listInboundNetworkDependenciesEndpoints(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsOptionalParams): PagedAsyncIterableIterator<InboundEnvironmentEndpoint>;
    /**
     * Description for Get all multi-role pools.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listMultiRolePools(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListMultiRolePoolsOptionalParams): PagedAsyncIterableIterator<WorkerPoolResource>;
    /**
     * Description for Get metric definitions for a specific instance of a multi-role pool of an App
     * Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param instance Name of the instance in the multi-role pool.
     * @param options The options parameters.
     */
    listMultiRolePoolInstanceMetricDefinitions(resourceGroupName: string, name: string, instance: string, options?: AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<ResourceMetricDefinition>;
    /**
     * Description for Get metric definitions for a multi-role pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listMultiRoleMetricDefinitions(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListMultiRoleMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<ResourceMetricDefinition>;
    /**
     * Description for Get available SKUs for scaling a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listMultiRolePoolSkus(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListMultiRolePoolSkusOptionalParams): PagedAsyncIterableIterator<SkuInfo>;
    /**
     * Description for Get usage metrics for a multi-role pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listMultiRoleUsages(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListMultiRoleUsagesOptionalParams): PagedAsyncIterableIterator<Usage>;
    /**
     * Description for Get the network endpoints of all outbound dependencies of an App Service
     * Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listOutboundNetworkDependenciesEndpoints(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsOptionalParams): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint>;
    /**
     * Description for Resume an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    beginListResumeAndWait(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsResumeOptionalParams): PagedAsyncIterableIterator<Site>;
    /**
     * Description for Get all App Service plans in an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listAppServicePlans(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListAppServicePlansOptionalParams): PagedAsyncIterableIterator<AppServicePlan>;
    /**
     * Description for Get all apps in an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listWebApps(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListWebAppsOptionalParams): PagedAsyncIterableIterator<Site>;
    /**
     * Description for Suspend an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    beginListSuspendAndWait(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsSuspendOptionalParams): PagedAsyncIterableIterator<Site>;
    /**
     * Description for Get global usage metrics of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listUsages(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListUsagesOptionalParams): PagedAsyncIterableIterator<CsmUsageQuota>;
    /**
     * Description for Get all worker pools of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listWorkerPools(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListWorkerPoolsOptionalParams): PagedAsyncIterableIterator<WorkerPoolResource>;
    /**
     * Description for Get metric definitions for a specific instance of a worker pool of an App Service
     * Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param instance Name of the instance in the worker pool.
     * @param options The options parameters.
     */
    listWorkerPoolInstanceMetricDefinitions(resourceGroupName: string, name: string, workerPoolName: string, instance: string, options?: AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<ResourceMetricDefinition>;
    /**
     * Description for Get metric definitions for a worker pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    listWebWorkerMetricDefinitions(resourceGroupName: string, name: string, workerPoolName: string, options?: AppServiceEnvironmentsListWebWorkerMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<ResourceMetricDefinition>;
    /**
     * Description for Get available SKUs for scaling a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    listWorkerPoolSkus(resourceGroupName: string, name: string, workerPoolName: string, options?: AppServiceEnvironmentsListWorkerPoolSkusOptionalParams): PagedAsyncIterableIterator<SkuInfo>;
    /**
     * Description for Get usage metrics for a worker pool of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    listWebWorkerUsages(resourceGroupName: string, name: string, workerPoolName: string, options?: AppServiceEnvironmentsListWebWorkerUsagesOptionalParams): PagedAsyncIterableIterator<Usage>;
    /**
     * Description for Get the properties of an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetOptionalParams): Promise<AppServiceEnvironmentsGetResponse>;
    /**
     * Description for Create or update an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param hostingEnvironmentEnvelope Configuration details of the App Service Environment.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, name: string, hostingEnvironmentEnvelope: AppServiceEnvironmentResource, options?: AppServiceEnvironmentsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<AppServiceEnvironmentsCreateOrUpdateResponse>, AppServiceEnvironmentsCreateOrUpdateResponse>>;
    /**
     * Description for Create or update an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param hostingEnvironmentEnvelope Configuration details of the App Service Environment.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, name: string, hostingEnvironmentEnvelope: AppServiceEnvironmentResource, options?: AppServiceEnvironmentsCreateOrUpdateOptionalParams): Promise<AppServiceEnvironmentsCreateOrUpdateResponse>;
    /**
     * Description for Delete an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Delete an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsDeleteOptionalParams): Promise<void>;
    /**
     * Description for Create or update an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param hostingEnvironmentEnvelope Configuration details of the App Service Environment.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, name: string, hostingEnvironmentEnvelope: AppServiceEnvironmentPatchResource, options?: AppServiceEnvironmentsUpdateOptionalParams): Promise<AppServiceEnvironmentsUpdateResponse>;
    /**
     * Description for Get IP addresses assigned to an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    getVipInfo(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetVipInfoOptionalParams): Promise<AppServiceEnvironmentsGetVipInfoResponse>;
    /**
     * Description for Get diagnostic information for an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listDiagnostics(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListDiagnosticsOptionalParams): Promise<AppServiceEnvironmentsListDiagnosticsResponse>;
    /**
     * Description for Get a diagnostics item for an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param diagnosticsName Name of the diagnostics item.
     * @param options The options parameters.
     */
    getDiagnosticsItem(resourceGroupName: string, name: string, diagnosticsName: string, options?: AppServiceEnvironmentsGetDiagnosticsItemOptionalParams): Promise<AppServiceEnvironmentsGetDiagnosticsItemResponse>;
    /**
     * Description for Get properties of a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    getMultiRolePool(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsGetMultiRolePoolOptionalParams): Promise<AppServiceEnvironmentsGetMultiRolePoolResponse>;
    /**
     * Description for Create or update a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param multiRolePoolEnvelope Properties of the multi-role pool.
     * @param options The options parameters.
     */
    beginCreateOrUpdateMultiRolePool(resourceGroupName: string, name: string, multiRolePoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsCreateOrUpdateMultiRolePoolOptionalParams): Promise<PollerLike<PollOperationState<AppServiceEnvironmentsCreateOrUpdateMultiRolePoolResponse>, AppServiceEnvironmentsCreateOrUpdateMultiRolePoolResponse>>;
    /**
     * Description for Create or update a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param multiRolePoolEnvelope Properties of the multi-role pool.
     * @param options The options parameters.
     */
    beginCreateOrUpdateMultiRolePoolAndWait(resourceGroupName: string, name: string, multiRolePoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsCreateOrUpdateMultiRolePoolOptionalParams): Promise<AppServiceEnvironmentsCreateOrUpdateMultiRolePoolResponse>;
    /**
     * Description for Create or update a multi-role pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param multiRolePoolEnvelope Properties of the multi-role pool.
     * @param options The options parameters.
     */
    updateMultiRolePool(resourceGroupName: string, name: string, multiRolePoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsUpdateMultiRolePoolOptionalParams): Promise<AppServiceEnvironmentsUpdateMultiRolePoolResponse>;
    /**
     * Description for List all currently running operations on the App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    listOperations(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsListOperationsOptionalParams): Promise<AppServiceEnvironmentsListOperationsResponse>;
    /**
     * Description for Reboot all machines in an App Service Environment.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param options The options parameters.
     */
    reboot(resourceGroupName: string, name: string, options?: AppServiceEnvironmentsRebootOptionalParams): Promise<void>;
    /**
     * Description for Get properties of a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param options The options parameters.
     */
    getWorkerPool(resourceGroupName: string, name: string, workerPoolName: string, options?: AppServiceEnvironmentsGetWorkerPoolOptionalParams): Promise<AppServiceEnvironmentsGetWorkerPoolResponse>;
    /**
     * Description for Create or update a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param workerPoolEnvelope Properties of the worker pool.
     * @param options The options parameters.
     */
    beginCreateOrUpdateWorkerPool(resourceGroupName: string, name: string, workerPoolName: string, workerPoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsCreateOrUpdateWorkerPoolOptionalParams): Promise<PollerLike<PollOperationState<AppServiceEnvironmentsCreateOrUpdateWorkerPoolResponse>, AppServiceEnvironmentsCreateOrUpdateWorkerPoolResponse>>;
    /**
     * Description for Create or update a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param workerPoolEnvelope Properties of the worker pool.
     * @param options The options parameters.
     */
    beginCreateOrUpdateWorkerPoolAndWait(resourceGroupName: string, name: string, workerPoolName: string, workerPoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsCreateOrUpdateWorkerPoolOptionalParams): Promise<AppServiceEnvironmentsCreateOrUpdateWorkerPoolResponse>;
    /**
     * Description for Create or update a worker pool.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service Environment.
     * @param workerPoolName Name of the worker pool.
     * @param workerPoolEnvelope Properties of the worker pool.
     * @param options The options parameters.
     */
    updateWorkerPool(resourceGroupName: string, name: string, workerPoolName: string, workerPoolEnvelope: WorkerPoolResource, options?: AppServiceEnvironmentsUpdateWorkerPoolOptionalParams): Promise<AppServiceEnvironmentsUpdateWorkerPoolResponse>;
}

/** Optional parameters. */
export declare interface AppServiceEnvironmentsChangeVnetNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the changeVnetNext operation. */
export declare type AppServiceEnvironmentsChangeVnetNextResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsChangeVnetOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the changeVnet operation. */
export declare type AppServiceEnvironmentsChangeVnetResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsCreateOrUpdateMultiRolePoolOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateMultiRolePool operation. */
export declare type AppServiceEnvironmentsCreateOrUpdateMultiRolePoolResponse = WorkerPoolResource;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type AppServiceEnvironmentsCreateOrUpdateResponse = AppServiceEnvironmentResource;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsCreateOrUpdateWorkerPoolOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateWorkerPool operation. */
export declare type AppServiceEnvironmentsCreateOrUpdateWorkerPoolResponse = WorkerPoolResource;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to force the deletion even if the App Service Environment contains resources. The default is <code>false</code>. */
    forceDelete?: boolean;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface AppServiceEnvironmentsGetDiagnosticsItemOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDiagnosticsItem operation. */
export declare type AppServiceEnvironmentsGetDiagnosticsItemResponse = HostingEnvironmentDiagnostics;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInboundNetworkDependenciesEndpointsNext operation. */
export declare type AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsNextResponse = InboundEnvironmentEndpointCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInboundNetworkDependenciesEndpoints operation. */
export declare type AppServiceEnvironmentsGetInboundNetworkDependenciesEndpointsResponse = InboundEnvironmentEndpointCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsGetMultiRolePoolOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMultiRolePool operation. */
export declare type AppServiceEnvironmentsGetMultiRolePoolResponse = WorkerPoolResource;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsGetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getOutboundNetworkDependenciesEndpointsNext operation. */
export declare type AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsNextResponse = OutboundEnvironmentEndpointCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getOutboundNetworkDependenciesEndpoints operation. */
export declare type AppServiceEnvironmentsGetOutboundNetworkDependenciesEndpointsResponse = OutboundEnvironmentEndpointCollection;

/** Contains response data for the get operation. */
export declare type AppServiceEnvironmentsGetResponse = AppServiceEnvironmentResource;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsGetVipInfoOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getVipInfo operation. */
export declare type AppServiceEnvironmentsGetVipInfoResponse = AddressResponse;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsGetWorkerPoolOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getWorkerPool operation. */
export declare type AppServiceEnvironmentsGetWorkerPoolResponse = WorkerPoolResource;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListAppServicePlansNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAppServicePlansNext operation. */
export declare type AppServiceEnvironmentsListAppServicePlansNextResponse = AppServicePlanCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListAppServicePlansOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAppServicePlans operation. */
export declare type AppServiceEnvironmentsListAppServicePlansResponse = AppServicePlanCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type AppServiceEnvironmentsListByResourceGroupNextResponse = AppServiceEnvironmentCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type AppServiceEnvironmentsListByResourceGroupResponse = AppServiceEnvironmentCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListCapacitiesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listCapacitiesNext operation. */
export declare type AppServiceEnvironmentsListCapacitiesNextResponse = StampCapacityCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListCapacitiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listCapacities operation. */
export declare type AppServiceEnvironmentsListCapacitiesResponse = StampCapacityCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListDiagnosticsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDiagnostics operation. */
export declare type AppServiceEnvironmentsListDiagnosticsResponse = HostingEnvironmentDiagnostics[];

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRoleMetricDefinitionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRoleMetricDefinitionsNext operation. */
export declare type AppServiceEnvironmentsListMultiRoleMetricDefinitionsNextResponse = ResourceMetricDefinitionCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRoleMetricDefinitionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRoleMetricDefinitions operation. */
export declare type AppServiceEnvironmentsListMultiRoleMetricDefinitionsResponse = ResourceMetricDefinitionCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRolePoolInstanceMetricDefinitionsNext operation. */
export declare type AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsNextResponse = ResourceMetricDefinitionCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRolePoolInstanceMetricDefinitions operation. */
export declare type AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitionsResponse = ResourceMetricDefinitionCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRolePoolSkusNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRolePoolSkusNext operation. */
export declare type AppServiceEnvironmentsListMultiRolePoolSkusNextResponse = SkuInfoCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRolePoolSkusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRolePoolSkus operation. */
export declare type AppServiceEnvironmentsListMultiRolePoolSkusResponse = SkuInfoCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRolePoolsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRolePoolsNext operation. */
export declare type AppServiceEnvironmentsListMultiRolePoolsNextResponse = WorkerPoolCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRolePoolsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRolePools operation. */
export declare type AppServiceEnvironmentsListMultiRolePoolsResponse = WorkerPoolCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRoleUsagesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRoleUsagesNext operation. */
export declare type AppServiceEnvironmentsListMultiRoleUsagesNextResponse = UsageCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListMultiRoleUsagesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMultiRoleUsages operation. */
export declare type AppServiceEnvironmentsListMultiRoleUsagesResponse = UsageCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AppServiceEnvironmentsListNextResponse = AppServiceEnvironmentCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListOperationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperations operation. */
export declare type AppServiceEnvironmentsListOperationsResponse = Operation[];

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AppServiceEnvironmentsListResponse = AppServiceEnvironmentCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListUsagesNextOptionalParams extends coreClient.OperationOptions {
    /** Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listUsagesNext operation. */
export declare type AppServiceEnvironmentsListUsagesNextResponse = CsmUsageQuotaCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListUsagesOptionalParams extends coreClient.OperationOptions {
    /** Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listUsages operation. */
export declare type AppServiceEnvironmentsListUsagesResponse = CsmUsageQuotaCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWebAppsNextOptionalParams extends coreClient.OperationOptions {
    /** Comma separated list of app properties to include. */
    propertiesToInclude?: string;
}

/** Contains response data for the listWebAppsNext operation. */
export declare type AppServiceEnvironmentsListWebAppsNextResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWebAppsOptionalParams extends coreClient.OperationOptions {
    /** Comma separated list of app properties to include. */
    propertiesToInclude?: string;
}

/** Contains response data for the listWebApps operation. */
export declare type AppServiceEnvironmentsListWebAppsResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWebWorkerMetricDefinitionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebWorkerMetricDefinitionsNext operation. */
export declare type AppServiceEnvironmentsListWebWorkerMetricDefinitionsNextResponse = ResourceMetricDefinitionCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWebWorkerMetricDefinitionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebWorkerMetricDefinitions operation. */
export declare type AppServiceEnvironmentsListWebWorkerMetricDefinitionsResponse = ResourceMetricDefinitionCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWebWorkerUsagesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebWorkerUsagesNext operation. */
export declare type AppServiceEnvironmentsListWebWorkerUsagesNextResponse = UsageCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWebWorkerUsagesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebWorkerUsages operation. */
export declare type AppServiceEnvironmentsListWebWorkerUsagesResponse = UsageCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWorkerPoolInstanceMetricDefinitionsNext operation. */
export declare type AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsNextResponse = ResourceMetricDefinitionCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWorkerPoolInstanceMetricDefinitions operation. */
export declare type AppServiceEnvironmentsListWorkerPoolInstanceMetricDefinitionsResponse = ResourceMetricDefinitionCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWorkerPoolSkusNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWorkerPoolSkusNext operation. */
export declare type AppServiceEnvironmentsListWorkerPoolSkusNextResponse = SkuInfoCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWorkerPoolSkusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWorkerPoolSkus operation. */
export declare type AppServiceEnvironmentsListWorkerPoolSkusResponse = SkuInfoCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWorkerPoolsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWorkerPoolsNext operation. */
export declare type AppServiceEnvironmentsListWorkerPoolsNextResponse = WorkerPoolCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsListWorkerPoolsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWorkerPools operation. */
export declare type AppServiceEnvironmentsListWorkerPoolsResponse = WorkerPoolCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsRebootOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServiceEnvironmentsResumeNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the resumeNext operation. */
export declare type AppServiceEnvironmentsResumeNextResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsResumeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the resume operation. */
export declare type AppServiceEnvironmentsResumeResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsSuspendNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the suspendNext operation. */
export declare type AppServiceEnvironmentsSuspendNextResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsSuspendOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the suspend operation. */
export declare type AppServiceEnvironmentsSuspendResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsUpdateMultiRolePoolOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateMultiRolePool operation. */
export declare type AppServiceEnvironmentsUpdateMultiRolePoolResponse = WorkerPoolResource;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type AppServiceEnvironmentsUpdateResponse = AppServiceEnvironmentResource;

/** Optional parameters. */
export declare interface AppServiceEnvironmentsUpdateWorkerPoolOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateWorkerPool operation. */
export declare type AppServiceEnvironmentsUpdateWorkerPoolResponse = WorkerPoolResource;

/** App Service plan. */
export declare type AppServicePlan = Resource & {
    /** Description of a SKU for a scalable resource. */
    sku?: SkuDescription;
    /** Target worker tier assigned to the App Service plan. */
    workerTierName?: string;
    /**
     * App Service plan status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: StatusOptions;
    /**
     * App Service plan subscription.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subscription?: string;
    /** Specification for the App Service Environment to use for the App Service plan. */
    hostingEnvironmentProfile?: HostingEnvironmentProfile;
    /**
     * Maximum number of instances that can be assigned to this App Service plan.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximumNumberOfWorkers?: number;
    /**
     * Geographical location for the App Service plan.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly geoRegion?: string;
    /**
     * If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
     * If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
     */
    perSiteScaling?: boolean;
    /** Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan */
    maximumElasticWorkerCount?: number;
    /**
     * Number of apps assigned to this App Service plan.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly numberOfSites?: number;
    /** If <code>true</code>, this App Service Plan owns spot instances. */
    isSpot?: boolean;
    /** The time when the server farm expires. Valid only if it is a spot server farm. */
    spotExpirationTime?: Date;
    /** The time when the server farm free offer expires. */
    freeOfferExpirationTime?: Date;
    /**
     * Resource group of the App Service plan.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGroup?: string;
    /** If Linux app service plan <code>true</code>, <code>false</code> otherwise. */
    reserved?: boolean;
    /** Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise. */
    isXenon?: boolean;
    /** If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise. */
    hyperV?: boolean;
    /** Scaling worker count. */
    targetWorkerCount?: number;
    /** Scaling worker size ID. */
    targetWorkerSizeId?: number;
    /**
     * Provisioning state of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Collection of App Service plans. */
export declare interface AppServicePlanCollection {
    /** Collection of resources. */
    value: AppServicePlan[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** ARM resource for a app service plan. */
export declare type AppServicePlanPatchResource = ProxyOnlyResource & {
    /** Target worker tier assigned to the App Service plan. */
    workerTierName?: string;
    /**
     * App Service plan status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: StatusOptions;
    /**
     * App Service plan subscription.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subscription?: string;
    /** Specification for the App Service Environment to use for the App Service plan. */
    hostingEnvironmentProfile?: HostingEnvironmentProfile;
    /**
     * Maximum number of instances that can be assigned to this App Service plan.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximumNumberOfWorkers?: number;
    /**
     * Geographical location for the App Service plan.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly geoRegion?: string;
    /**
     * If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
     * If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
     */
    perSiteScaling?: boolean;
    /** Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan */
    maximumElasticWorkerCount?: number;
    /**
     * Number of apps assigned to this App Service plan.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly numberOfSites?: number;
    /** If <code>true</code>, this App Service Plan owns spot instances. */
    isSpot?: boolean;
    /** The time when the server farm expires. Valid only if it is a spot server farm. */
    spotExpirationTime?: Date;
    /** The time when the server farm free offer expires. */
    freeOfferExpirationTime?: Date;
    /**
     * Resource group of the App Service plan.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGroup?: string;
    /** If Linux app service plan <code>true</code>, <code>false</code> otherwise. */
    reserved?: boolean;
    /** Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise. */
    isXenon?: boolean;
    /** If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise. */
    hyperV?: boolean;
    /** Scaling worker count. */
    targetWorkerCount?: number;
    /** Scaling worker size ID. */
    targetWorkerSizeId?: number;
    /**
     * Provisioning state of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Defines values for AppServicePlanRestrictions. */
export declare type AppServicePlanRestrictions = "None" | "Free" | "Shared" | "Basic" | "Standard" | "Premium";

/** Interface representing a AppServicePlans. */
export declare interface AppServicePlans {
    /**
     * Description for Get all App Service plans for a subscription.
     * @param options The options parameters.
     */
    list(options?: AppServicePlansListOptionalParams): PagedAsyncIterableIterator<AppServicePlan>;
    /**
     * Description for Get all App Service plans in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: AppServicePlansListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AppServicePlan>;
    /**
     * Description for Get all apps that use a Hybrid Connection in an App Service Plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param namespaceName Name of the Hybrid Connection namespace.
     * @param relayName Name of the Hybrid Connection relay.
     * @param options The options parameters.
     */
    listWebAppsByHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, options?: AppServicePlansListWebAppsByHybridConnectionOptionalParams): PagedAsyncIterableIterator<string>;
    /**
     * Description for Retrieve all Hybrid Connections in use in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param options The options parameters.
     */
    listHybridConnections(resourceGroupName: string, name: string, options?: AppServicePlansListHybridConnectionsOptionalParams): PagedAsyncIterableIterator<HybridConnection>;
    /**
     * Description for Get all apps associated with an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param options The options parameters.
     */
    listWebApps(resourceGroupName: string, name: string, options?: AppServicePlansListWebAppsOptionalParams): PagedAsyncIterableIterator<Site>;
    /**
     * Description for Gets server farm usage information
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of App Service Plan
     * @param options The options parameters.
     */
    listUsages(resourceGroupName: string, name: string, options?: AppServicePlansListUsagesOptionalParams): PagedAsyncIterableIterator<CsmUsageQuota>;
    /**
     * Description for Get an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, name: string, options?: AppServicePlansGetOptionalParams): Promise<AppServicePlansGetResponse>;
    /**
     * Description for Creates or updates an App Service Plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param appServicePlan Details of the App Service plan.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, name: string, appServicePlan: AppServicePlan, options?: AppServicePlansCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<AppServicePlansCreateOrUpdateResponse>, AppServicePlansCreateOrUpdateResponse>>;
    /**
     * Description for Creates or updates an App Service Plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param appServicePlan Details of the App Service plan.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, name: string, appServicePlan: AppServicePlan, options?: AppServicePlansCreateOrUpdateOptionalParams): Promise<AppServicePlansCreateOrUpdateResponse>;
    /**
     * Description for Delete an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, name: string, options?: AppServicePlansDeleteOptionalParams): Promise<void>;
    /**
     * Description for Creates or updates an App Service Plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param appServicePlan Details of the App Service plan.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, name: string, appServicePlan: AppServicePlanPatchResource, options?: AppServicePlansUpdateOptionalParams): Promise<AppServicePlansUpdateResponse>;
    /**
     * Description for List all capabilities of an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param options The options parameters.
     */
    listCapabilities(resourceGroupName: string, name: string, options?: AppServicePlansListCapabilitiesOptionalParams): Promise<AppServicePlansListCapabilitiesResponse>;
    /**
     * Description for Retrieve a Hybrid Connection in use in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param namespaceName Name of the Service Bus namespace.
     * @param relayName Name of the Service Bus relay.
     * @param options The options parameters.
     */
    getHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, options?: AppServicePlansGetHybridConnectionOptionalParams): Promise<AppServicePlansGetHybridConnectionResponse>;
    /**
     * Description for Delete a Hybrid Connection in use in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param namespaceName Name of the Service Bus namespace.
     * @param relayName Name of the Service Bus relay.
     * @param options The options parameters.
     */
    deleteHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, options?: AppServicePlansDeleteHybridConnectionOptionalParams): Promise<void>;
    /**
     * Description for Get the send key name and value of a Hybrid Connection.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param namespaceName The name of the Service Bus namespace.
     * @param relayName The name of the Service Bus relay.
     * @param options The options parameters.
     */
    listHybridConnectionKeys(resourceGroupName: string, name: string, namespaceName: string, relayName: string, options?: AppServicePlansListHybridConnectionKeysOptionalParams): Promise<AppServicePlansListHybridConnectionKeysResponse>;
    /**
     * Description for Get the maximum number of Hybrid Connections allowed in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param options The options parameters.
     */
    getHybridConnectionPlanLimit(resourceGroupName: string, name: string, options?: AppServicePlansGetHybridConnectionPlanLimitOptionalParams): Promise<AppServicePlansGetHybridConnectionPlanLimitResponse>;
    /**
     * Description for Restart all apps in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param options The options parameters.
     */
    restartWebApps(resourceGroupName: string, name: string, options?: AppServicePlansRestartWebAppsOptionalParams): Promise<void>;
    /**
     * Description for Gets all selectable SKUs for a given App Service Plan
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of App Service Plan
     * @param options The options parameters.
     */
    getServerFarmSkus(resourceGroupName: string, name: string, options?: AppServicePlansGetServerFarmSkusOptionalParams): Promise<AppServicePlansGetServerFarmSkusResponse>;
    /**
     * Description for Get all Virtual Networks associated with an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param options The options parameters.
     */
    listVnets(resourceGroupName: string, name: string, options?: AppServicePlansListVnetsOptionalParams): Promise<AppServicePlansListVnetsResponse>;
    /**
     * Description for Get a Virtual Network associated with an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param vnetName Name of the Virtual Network.
     * @param options The options parameters.
     */
    getVnetFromServerFarm(resourceGroupName: string, name: string, vnetName: string, options?: AppServicePlansGetVnetFromServerFarmOptionalParams): Promise<AppServicePlansGetVnetFromServerFarmResponse>;
    /**
     * Description for Get a Virtual Network gateway.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param vnetName Name of the Virtual Network.
     * @param gatewayName Name of the gateway. Only the 'primary' gateway is supported.
     * @param options The options parameters.
     */
    getVnetGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, options?: AppServicePlansGetVnetGatewayOptionalParams): Promise<AppServicePlansGetVnetGatewayResponse>;
    /**
     * Description for Update a Virtual Network gateway.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param vnetName Name of the Virtual Network.
     * @param gatewayName Name of the gateway. Only the 'primary' gateway is supported.
     * @param connectionEnvelope Definition of the gateway.
     * @param options The options parameters.
     */
    updateVnetGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, connectionEnvelope: VnetGateway, options?: AppServicePlansUpdateVnetGatewayOptionalParams): Promise<AppServicePlansUpdateVnetGatewayResponse>;
    /**
     * Description for Get all routes that are associated with a Virtual Network in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param vnetName Name of the Virtual Network.
     * @param options The options parameters.
     */
    listRoutesForVnet(resourceGroupName: string, name: string, vnetName: string, options?: AppServicePlansListRoutesForVnetOptionalParams): Promise<AppServicePlansListRoutesForVnetResponse>;
    /**
     * Description for Get a Virtual Network route in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param vnetName Name of the Virtual Network.
     * @param routeName Name of the Virtual Network route.
     * @param options The options parameters.
     */
    getRouteForVnet(resourceGroupName: string, name: string, vnetName: string, routeName: string, options?: AppServicePlansGetRouteForVnetOptionalParams): Promise<AppServicePlansGetRouteForVnetResponse>;
    /**
     * Description for Create or update a Virtual Network route in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param vnetName Name of the Virtual Network.
     * @param routeName Name of the Virtual Network route.
     * @param route Definition of the Virtual Network route.
     * @param options The options parameters.
     */
    createOrUpdateVnetRoute(resourceGroupName: string, name: string, vnetName: string, routeName: string, route: VnetRoute, options?: AppServicePlansCreateOrUpdateVnetRouteOptionalParams): Promise<AppServicePlansCreateOrUpdateVnetRouteResponse>;
    /**
     * Description for Delete a Virtual Network route in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param vnetName Name of the Virtual Network.
     * @param routeName Name of the Virtual Network route.
     * @param options The options parameters.
     */
    deleteVnetRoute(resourceGroupName: string, name: string, vnetName: string, routeName: string, options?: AppServicePlansDeleteVnetRouteOptionalParams): Promise<void>;
    /**
     * Description for Create or update a Virtual Network route in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param vnetName Name of the Virtual Network.
     * @param routeName Name of the Virtual Network route.
     * @param route Definition of the Virtual Network route.
     * @param options The options parameters.
     */
    updateVnetRoute(resourceGroupName: string, name: string, vnetName: string, routeName: string, route: VnetRoute, options?: AppServicePlansUpdateVnetRouteOptionalParams): Promise<AppServicePlansUpdateVnetRouteResponse>;
    /**
     * Description for Reboot a worker machine in an App Service plan.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the App Service plan.
     * @param workerName Name of worker machine, which typically starts with RD.
     * @param options The options parameters.
     */
    rebootWorker(resourceGroupName: string, name: string, workerName: string, options?: AppServicePlansRebootWorkerOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface AppServicePlansCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type AppServicePlansCreateOrUpdateResponse = AppServicePlan;

/** Optional parameters. */
export declare interface AppServicePlansCreateOrUpdateVnetRouteOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateVnetRoute operation. */
export declare type AppServicePlansCreateOrUpdateVnetRouteResponse = VnetRoute;

/** Optional parameters. */
export declare interface AppServicePlansDeleteHybridConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServicePlansDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServicePlansDeleteVnetRouteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServicePlansGetHybridConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServicePlansGetHybridConnectionPlanLimitOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getHybridConnectionPlanLimit operation. */
export declare type AppServicePlansGetHybridConnectionPlanLimitResponse = HybridConnectionLimits;

/** Contains response data for the getHybridConnection operation. */
export declare type AppServicePlansGetHybridConnectionResponse = HybridConnection;

/** Optional parameters. */
export declare interface AppServicePlansGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type AppServicePlansGetResponse = AppServicePlan;

/** Optional parameters. */
export declare interface AppServicePlansGetRouteForVnetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRouteForVnet operation. */
export declare type AppServicePlansGetRouteForVnetResponse = VnetRoute[];

/** Optional parameters. */
export declare interface AppServicePlansGetServerFarmSkusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getServerFarmSkus operation. */
export declare type AppServicePlansGetServerFarmSkusResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface AppServicePlansGetVnetFromServerFarmOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getVnetFromServerFarm operation. */
export declare type AppServicePlansGetVnetFromServerFarmResponse = VnetInfo;

/** Optional parameters. */
export declare interface AppServicePlansGetVnetGatewayOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getVnetGateway operation. */
export declare type AppServicePlansGetVnetGatewayResponse = VnetGateway;

/** Optional parameters. */
export declare interface AppServicePlansListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type AppServicePlansListByResourceGroupNextResponse = AppServicePlanCollection;

/** Optional parameters. */
export declare interface AppServicePlansListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type AppServicePlansListByResourceGroupResponse = AppServicePlanCollection;

/** Optional parameters. */
export declare interface AppServicePlansListCapabilitiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listCapabilities operation. */
export declare type AppServicePlansListCapabilitiesResponse = Capability[];

/** Optional parameters. */
export declare interface AppServicePlansListHybridConnectionKeysOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHybridConnectionKeys operation. */
export declare type AppServicePlansListHybridConnectionKeysResponse = HybridConnectionKey;

/** Optional parameters. */
export declare interface AppServicePlansListHybridConnectionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHybridConnectionsNext operation. */
export declare type AppServicePlansListHybridConnectionsNextResponse = HybridConnectionCollection;

/** Optional parameters. */
export declare interface AppServicePlansListHybridConnectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHybridConnections operation. */
export declare type AppServicePlansListHybridConnectionsResponse = HybridConnectionCollection;

/** Optional parameters. */
export declare interface AppServicePlansListNextOptionalParams extends coreClient.OperationOptions {
    /**
     * Specify <code>true</code> to return all App Service plan properties. The default is <code>false</code>, which returns a subset of the properties.
     *  Retrieval of all properties may increase the API latency.
     */
    detailed?: boolean;
}

/** Contains response data for the listNext operation. */
export declare type AppServicePlansListNextResponse = AppServicePlanCollection;

/** Optional parameters. */
export declare interface AppServicePlansListOptionalParams extends coreClient.OperationOptions {
    /**
     * Specify <code>true</code> to return all App Service plan properties. The default is <code>false</code>, which returns a subset of the properties.
     *  Retrieval of all properties may increase the API latency.
     */
    detailed?: boolean;
}

/** Contains response data for the list operation. */
export declare type AppServicePlansListResponse = AppServicePlanCollection;

/** Optional parameters. */
export declare interface AppServicePlansListRoutesForVnetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listRoutesForVnet operation. */
export declare type AppServicePlansListRoutesForVnetResponse = VnetRoute[];

/** Optional parameters. */
export declare interface AppServicePlansListUsagesNextOptionalParams extends coreClient.OperationOptions {
    /** Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2'). */
    filter?: string;
}

/** Contains response data for the listUsagesNext operation. */
export declare type AppServicePlansListUsagesNextResponse = CsmUsageQuotaCollection;

/** Optional parameters. */
export declare interface AppServicePlansListUsagesOptionalParams extends coreClient.OperationOptions {
    /** Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2'). */
    filter?: string;
}

/** Contains response data for the listUsages operation. */
export declare type AppServicePlansListUsagesResponse = CsmUsageQuotaCollection;

/** Optional parameters. */
export declare interface AppServicePlansListVnetsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVnets operation. */
export declare type AppServicePlansListVnetsResponse = VnetInfo[];

/** Optional parameters. */
export declare interface AppServicePlansListWebAppsByHybridConnectionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebAppsByHybridConnectionNext operation. */
export declare type AppServicePlansListWebAppsByHybridConnectionNextResponse = ResourceCollection;

/** Optional parameters. */
export declare interface AppServicePlansListWebAppsByHybridConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebAppsByHybridConnection operation. */
export declare type AppServicePlansListWebAppsByHybridConnectionResponse = ResourceCollection;

/** Optional parameters. */
export declare interface AppServicePlansListWebAppsNextOptionalParams extends coreClient.OperationOptions {
    /** Supported filter: $filter=state eq running. Returns only web apps that are currently running */
    filter?: string;
    /** Skip to a web app in the list of webapps associated with app service plan. If specified, the resulting list will contain web apps starting from (including) the skipToken. Otherwise, the resulting list contains web apps from the start of the list */
    skipToken?: string;
    /** List page size. If specified, results are paged. */
    top?: string;
}

/** Contains response data for the listWebAppsNext operation. */
export declare type AppServicePlansListWebAppsNextResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServicePlansListWebAppsOptionalParams extends coreClient.OperationOptions {
    /** Supported filter: $filter=state eq running. Returns only web apps that are currently running */
    filter?: string;
    /** Skip to a web app in the list of webapps associated with app service plan. If specified, the resulting list will contain web apps starting from (including) the skipToken. Otherwise, the resulting list contains web apps from the start of the list */
    skipToken?: string;
    /** List page size. If specified, results are paged. */
    top?: string;
}

/** Contains response data for the listWebApps operation. */
export declare type AppServicePlansListWebAppsResponse = WebAppCollection;

/** Optional parameters. */
export declare interface AppServicePlansRebootWorkerOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AppServicePlansRestartWebAppsOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to perform a soft restart, applies the configuration settings and restarts the apps if necessary. The default is <code>false</code>, which always restarts and reprovisions the apps */
    softRestart?: boolean;
}

/** Optional parameters. */
export declare interface AppServicePlansUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type AppServicePlansUpdateResponse = AppServicePlan;

/** Optional parameters. */
export declare interface AppServicePlansUpdateVnetGatewayOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateVnetGateway operation. */
export declare type AppServicePlansUpdateVnetGatewayResponse = VnetGateway;

/** Optional parameters. */
export declare interface AppServicePlansUpdateVnetRouteOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateVnetRoute operation. */
export declare type AppServicePlansUpdateVnetRouteResponse = VnetRoute;

/** A wrapper for an ARM resource id */
export declare interface ArmIdWrapper {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly id?: string;
}

/** Actions which to take by the auto-heal module when a rule is triggered. */
export declare interface AutoHealActions {
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

/** Defines values for AutoHealActionType. */
export declare type AutoHealActionType = "Recycle" | "LogEvent" | "CustomAction";

/**
 * Custom action to be executed
 * when an auto heal rule is triggered.
 */
export declare interface AutoHealCustomAction {
    /** Executable to be run. */
    exe?: string;
    /** Parameters for the executable. */
    parameters?: string;
}

/** Rules that can be defined for auto-heal. */
export declare interface AutoHealRules {
    /** Conditions that describe when to execute the auto-heal actions. */
    triggers?: AutoHealTriggers;
    /** Actions to be executed when a rule is triggered. */
    actions?: AutoHealActions;
}

/** Triggers for auto-heal. */
export declare interface AutoHealTriggers {
    /** A rule based on total requests. */
    requests?: RequestsBasedTrigger;
    /** A rule based on private bytes. */
    privateBytesInKB?: number;
    /** A rule based on status codes. */
    statusCodes?: StatusCodesBasedTrigger[];
    /** A rule based on request execution time. */
    slowRequests?: SlowRequestsBasedTrigger;
}

/** Application logs azure blob storage configuration. */
export declare interface AzureBlobStorageApplicationLogsConfig {
    /** Log level. */
    level?: LogLevel;
    /** SAS url to a azure blob container with read/write/list/delete permissions. */
    sasUrl?: string;
    /**
     * Retention in days.
     * Remove blobs older than X days.
     * 0 or lower means no retention.
     */
    retentionInDays?: number;
}

/** Http logs to azure blob storage configuration. */
export declare interface AzureBlobStorageHttpLogsConfig {
    /** SAS url to a azure blob container with read/write/list/delete permissions. */
    sasUrl?: string;
    /**
     * Retention in days.
     * Remove blobs older than X days.
     * 0 or lower means no retention.
     */
    retentionInDays?: number;
    /** True if configuration is enabled, false if it is disabled and null if configuration is not set. */
    enabled?: boolean;
}

/** Defines values for AzureResourceType. */
export declare type AzureResourceType = "Website" | "TrafficManager";

/** Azure Files or Blob Storage access information value for dictionary storage. */
export declare interface AzureStorageInfoValue {
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
    /**
     * State of the storage account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: AzureStorageState;
}

/** AzureStorageInfo dictionary resource. */
export declare type AzureStoragePropertyDictionaryResource = ProxyOnlyResource & {
    /** Azure storage accounts. */
    properties?: {
        [propertyName: string]: AzureStorageInfoValue;
    };
};

/** Defines values for AzureStorageState. */
export declare type AzureStorageState = "Ok" | "InvalidCredentials" | "InvalidShare";

/** Defines values for AzureStorageType. */
export declare type AzureStorageType = "AzureFiles" | "AzureBlob";

/** Application logs to Azure table storage configuration. */
export declare interface AzureTableStorageApplicationLogsConfig {
    /** Log level. */
    level?: LogLevel;
    /** SAS URL to an Azure table with add/query/delete permissions. */
    sasUrl: string;
}

/** Backup description. */
export declare type BackupItem = ProxyOnlyResource & {
    /**
     * Id of the backup.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly backupId?: number;
    /**
     * SAS URL for the storage account container which contains this backup.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly storageAccountUrl?: string;
    /**
     * Name of the blob which contains data for this backup.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly blobName?: string;
    /**
     * Name of this backup.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly namePropertiesName?: string;
    /**
     * Backup status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: BackupItemStatus;
    /**
     * Size of the backup in bytes.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sizeInBytes?: number;
    /**
     * Timestamp of the backup creation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly created?: Date;
    /**
     * Details regarding this backup. Might contain an error message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly log?: string;
    /**
     * List of databases included in the backup.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databases?: DatabaseBackupSetting[];
    /**
     * True if this backup has been created due to a schedule being triggered.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly scheduled?: boolean;
    /**
     * Timestamp of a last restore operation which used this backup.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastRestoreTimeStamp?: Date;
    /**
     * Timestamp when this backup finished.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly finishedTimeStamp?: Date;
    /**
     * Unique correlation identifier. Please use this along with the timestamp while communicating with Azure support.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly correlationId?: string;
    /**
     * Size of the original web app which has been backed up.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly websiteSizeInBytes?: number;
};

/** Collection of backup items. */
export declare interface BackupItemCollection {
    /** Collection of resources. */
    value: BackupItem[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for BackupItemStatus. */
export declare type BackupItemStatus = "InProgress" | "Failed" | "Succeeded" | "TimedOut" | "Created" | "Skipped" | "PartiallySucceeded" | "DeleteInProgress" | "DeleteFailed" | "Deleted";

/** Description of a backup which will be performed. */
export declare type BackupRequest = ProxyOnlyResource & {
    /** Name of the backup. */
    backupName?: string;
    /** True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled. */
    enabled?: boolean;
    /** SAS URL to the container. */
    storageAccountUrl?: string;
    /** Schedule for the backup if it is executed periodically. */
    backupSchedule?: BackupSchedule;
    /** Databases included in the backup. */
    databases?: DatabaseBackupSetting[];
};

/** Defines values for BackupRestoreOperationType. */
export declare type BackupRestoreOperationType = "Default" | "Clone" | "Relocation" | "Snapshot" | "CloudFS";

/** Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy. */
export declare interface BackupSchedule {
    /** How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day) */
    frequencyInterval: number;
    /** The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7) */
    frequencyUnit: FrequencyUnit;
    /** True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise. */
    keepAtLeastOneBackup: boolean;
    /** After how many days backups should be deleted. */
    retentionPeriodInDays: number;
    /** When the schedule should start working. */
    startTime?: Date;
    /**
     * Last time when this schedule was triggered.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastExecutionTime?: Date;
}

/** App Service billing entity that contains information about meter which the Azure billing system utilizes to charge users for services. */
export declare type BillingMeter = ProxyOnlyResource & {
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
};

/** Collection of Billing Meters */
export declare interface BillingMeterCollection {
    /** Collection of resources. */
    value: BillingMeter[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for BuildStatus. \
 * {@link KnownBuildStatus} can be used interchangeably with BuildStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **WaitingForDeployment** \
 * **Uploading** \
 * **Deploying** \
 * **Ready** \
 * **Failed** \
 * **Deleting** \
 * **Detached**
 */
export declare type BuildStatus = string;

/** Defines values for BuiltInAuthenticationProvider. */
export declare type BuiltInAuthenticationProvider = "AzureActiveDirectory" | "Facebook" | "Google" | "MicrosoftAccount" | "Twitter";

/** Describes the capabilities/features allowed for a specific SKU. */
export declare interface Capability {
    /** Name of the SKU capability. */
    name?: string;
    /** Value of the SKU capability. */
    value?: string;
    /** Reason of the SKU capability. */
    reason?: string;
}

/** SSL certificate for an app. */
export declare type Certificate = Resource & {
    /**
     * Friendly name of the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly friendlyName?: string;
    /**
     * Subject name of the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subjectName?: string;
    /** Host names the certificate applies to. */
    hostNames?: string[];
    /** Pfx blob. */
    pfxBlob?: Uint8Array;
    /**
     * App name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly siteName?: string;
    /**
     * Self link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly selfLink?: string;
    /**
     * Certificate issuer.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly issuer?: string;
    /**
     * Certificate issue Date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly issueDate?: Date;
    /**
     * Certificate expiration date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expirationDate?: Date;
    /** Certificate password. */
    password?: string;
    /**
     * Certificate thumbprint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly thumbprint?: string;
    /**
     * Is the certificate valid?.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly valid?: boolean;
    /**
     * Raw bytes of .cer file
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly cerBlob?: Uint8Array;
    /**
     * Public key hash.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicKeyHash?: string;
    /**
     * Specification for the App Service Environment to use for the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
    /** Key Vault Csm resource Id. */
    keyVaultId?: string;
    /** Key Vault secret name. */
    keyVaultSecretName?: string;
    /**
     * Status of the Key Vault secret.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keyVaultSecretStatus?: KeyVaultSecretStatus;
    /** Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}". */
    serverFarmId?: string;
    /** CNAME of the certificate to be issued via free certificate */
    canonicalName?: string;
};

/** Collection of certificates. */
export declare interface CertificateCollection {
    /** Collection of resources. */
    value: Certificate[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** SSL certificate details. */
export declare interface CertificateDetails {
    /**
     * Certificate Version.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly version?: number;
    /**
     * Certificate Serial Number.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serialNumber?: string;
    /**
     * Certificate Thumbprint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly thumbprint?: string;
    /**
     * Certificate Subject.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subject?: string;
    /**
     * Date Certificate is valid from.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly notBefore?: Date;
    /**
     * Date Certificate is valid to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly notAfter?: Date;
    /**
     * Certificate Signature algorithm.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly signatureAlgorithm?: string;
    /**
     * Certificate Issuer.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly issuer?: string;
    /**
     * Raw certificate data.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly rawData?: string;
}

/** SSL certificate email. */
export declare type CertificateEmail = ProxyOnlyResource & {
    /** Email id. */
    emailId?: string;
    /** Time stamp. */
    timeStamp?: Date;
};

/** Certificate order action. */
export declare type CertificateOrderAction = ProxyOnlyResource & {
    /**
     * Action type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actionType?: CertificateOrderActionType;
    /**
     * Time at which the certificate action was performed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly createdAt?: Date;
};

/** Defines values for CertificateOrderActionType. */
export declare type CertificateOrderActionType = "CertificateIssued" | "CertificateOrderCanceled" | "CertificateOrderCreated" | "CertificateRevoked" | "DomainValidationComplete" | "FraudDetected" | "OrgNameChange" | "OrgValidationComplete" | "SanDrop" | "FraudCleared" | "CertificateExpired" | "CertificateExpirationWarning" | "FraudDocumentationRequired" | "Unknown";

/** Defines values for CertificateOrderStatus. */
export declare type CertificateOrderStatus = "Pendingissuance" | "Issued" | "Revoked" | "Canceled" | "Denied" | "Pendingrevocation" | "PendingRekey" | "Unused" | "Expired" | "NotSubmitted";

/** ARM resource for a certificate. */
export declare type CertificatePatchResource = ProxyOnlyResource & {
    /**
     * Friendly name of the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly friendlyName?: string;
    /**
     * Subject name of the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subjectName?: string;
    /** Host names the certificate applies to. */
    hostNames?: string[];
    /** Pfx blob. */
    pfxBlob?: Uint8Array;
    /**
     * App name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly siteName?: string;
    /**
     * Self link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly selfLink?: string;
    /**
     * Certificate issuer.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly issuer?: string;
    /**
     * Certificate issue Date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly issueDate?: Date;
    /**
     * Certificate expiration date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expirationDate?: Date;
    /** Certificate password. */
    password?: string;
    /**
     * Certificate thumbprint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly thumbprint?: string;
    /**
     * Is the certificate valid?.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly valid?: boolean;
    /**
     * Raw bytes of .cer file
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly cerBlob?: Uint8Array;
    /**
     * Public key hash.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicKeyHash?: string;
    /**
     * Specification for the App Service Environment to use for the certificate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
    /** Key Vault Csm resource Id. */
    keyVaultId?: string;
    /** Key Vault secret name. */
    keyVaultSecretName?: string;
    /**
     * Status of the Key Vault secret.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keyVaultSecretStatus?: KeyVaultSecretStatus;
    /** Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}". */
    serverFarmId?: string;
    /** CNAME of the certificate to be issued via free certificate */
    canonicalName?: string;
};

/** Defines values for CertificateProductType. */
export declare type CertificateProductType = "StandardDomainValidatedSsl" | "StandardDomainValidatedWildCardSsl";

/** Interface representing a CertificateRegistrationProvider. */
export declare interface CertificateRegistrationProvider {
    /**
     * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the
     * resource provider
     * @param options The options parameters.
     */
    listOperations(options?: CertificateRegistrationProviderListOperationsOptionalParams): PagedAsyncIterableIterator<CsmOperationDescription>;
}

/** Optional parameters. */
export declare interface CertificateRegistrationProviderListOperationsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNext operation. */
export declare type CertificateRegistrationProviderListOperationsNextResponse = CsmOperationCollection;

/** Optional parameters. */
export declare interface CertificateRegistrationProviderListOperationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperations operation. */
export declare type CertificateRegistrationProviderListOperationsResponse = CsmOperationCollection;

/** Interface representing a Certificates. */
export declare interface Certificates {
    /**
     * Description for Get all certificates for a subscription.
     * @param options The options parameters.
     */
    list(options?: CertificatesListOptionalParams): PagedAsyncIterableIterator<Certificate>;
    /**
     * Description for Get all certificates in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: CertificatesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Certificate>;
    /**
     * Description for Get a certificate.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, name: string, options?: CertificatesGetOptionalParams): Promise<CertificatesGetResponse>;
    /**
     * Description for Create or update a certificate.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate.
     * @param certificateEnvelope Details of certificate, if it exists already.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, name: string, certificateEnvelope: Certificate, options?: CertificatesCreateOrUpdateOptionalParams): Promise<CertificatesCreateOrUpdateResponse>;
    /**
     * Description for Delete a certificate.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, name: string, options?: CertificatesDeleteOptionalParams): Promise<void>;
    /**
     * Description for Create or update a certificate.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate.
     * @param certificateEnvelope Details of certificate, if it exists already.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, name: string, certificateEnvelope: CertificatePatchResource, options?: CertificatesUpdateOptionalParams): Promise<CertificatesUpdateResponse>;
}

/** Optional parameters. */
export declare interface CertificatesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type CertificatesCreateOrUpdateResponse = Certificate;

/** Optional parameters. */
export declare interface CertificatesDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface CertificatesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type CertificatesGetResponse = Certificate;

/** Optional parameters. */
export declare interface CertificatesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type CertificatesListByResourceGroupNextResponse = CertificateCollection;

/** Optional parameters. */
export declare interface CertificatesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type CertificatesListByResourceGroupResponse = CertificateCollection;

/** Optional parameters. */
export declare interface CertificatesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type CertificatesListNextResponse = CertificateCollection;

/** Optional parameters. */
export declare interface CertificatesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type CertificatesListResponse = CertificateCollection;

/** Optional parameters. */
export declare interface CertificatesUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type CertificatesUpdateResponse = Certificate;

/** Defines values for Channels. */
export declare type Channels = "Notification" | "Api" | "Email" | "Webhook" | "All";

/**
 * Defines values for CheckNameResourceTypes. \
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
export declare type CheckNameResourceTypes = string;

/** Defines values for CloneAbilityResult. */
export declare type CloneAbilityResult = "Cloneable" | "PartiallyCloneable" | "NotCloneable";

/** Information needed for cloning operation. */
export declare interface CloningInfo {
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
    appSettingsOverrides?: {
        [propertyName: string]: string;
    };
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

export declare interface Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties {
    /**
     * Principal Id of user assigned identity
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * Client Id of user assigned identity
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
}

/** Defines values for ComputeModeOptions. */
export declare type ComputeModeOptions = "Shared" | "Dedicated" | "Dynamic";

/** String dictionary resource. */
export declare type ConnectionStringDictionary = ProxyOnlyResource & {
    /** Connection strings. */
    properties?: {
        [propertyName: string]: ConnStringValueTypePair;
    };
};

/** Defines values for ConnectionStringType. */
export declare type ConnectionStringType = "MySql" | "SQLServer" | "SQLAzure" | "Custom" | "NotificationHub" | "ServiceBus" | "EventHub" | "ApiHub" | "DocDb" | "RedisCache" | "PostgreSQL";

/** Database connection string information. */
export declare interface ConnStringInfo {
    /** Name of connection string. */
    name?: string;
    /** Connection string value. */
    connectionString?: string;
    /** Type of database. */
    type?: ConnectionStringType;
}

/** Database connection string value to type pair. */
export declare interface ConnStringValueTypePair {
    /** Value of pair. */
    value: string;
    /** Type of database. */
    type: ConnectionStringType;
}

/**
 * Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois
 * directories as per ICANN requirements.
 */
export declare interface Contact {
    /** Mailing address. */
    addressMailing?: Address;
    /** Email address. */
    email: string;
    /** Fax number. */
    fax?: string;
    /** Job title. */
    jobTitle?: string;
    /** First name. */
    nameFirst: string;
    /** Last name. */
    nameLast: string;
    /** Middle name. */
    nameMiddle?: string;
    /** Organization contact belongs to. */
    organization?: string;
    /** Phone number. */
    phone: string;
}

export declare interface ContainerCpuStatistics {
    cpuUsage?: ContainerCpuUsage;
    systemCpuUsage?: number;
    onlineCpuCount?: number;
    throttlingData?: ContainerThrottlingData;
}

export declare interface ContainerCpuUsage {
    totalUsage?: number;
    perCpuUsage?: number[];
    kernelModeUsage?: number;
    userModeUsage?: number;
}

export declare interface ContainerInfo {
    currentTimeStamp?: Date;
    previousTimeStamp?: Date;
    currentCpuStats?: ContainerCpuStatistics;
    previousCpuStats?: ContainerCpuStatistics;
    memoryStats?: ContainerMemoryStatistics;
    name?: string;
    id?: string;
    eth0?: ContainerNetworkInterfaceStatistics;
}

export declare interface ContainerMemoryStatistics {
    usage?: number;
    maxUsage?: number;
    limit?: number;
}

export declare interface ContainerNetworkInterfaceStatistics {
    rxBytes?: number;
    rxPackets?: number;
    rxErrors?: number;
    rxDropped?: number;
    txBytes?: number;
    txPackets?: number;
    txErrors?: number;
    txDropped?: number;
}

export declare interface ContainerThrottlingData {
    periods?: number;
    throttledPeriods?: number;
    throttledTime?: number;
}

/** Continuous Web Job Information. */
export declare type ContinuousWebJob = ProxyOnlyResource & {
    /** Job status. */
    status?: ContinuousWebJobStatus;
    /** Detailed status. */
    detailedStatus?: string;
    /** Log URL. */
    logUrl?: string;
    /** Run command. */
    runCommand?: string;
    /** Job URL. */
    url?: string;
    /** Extra Info URL. */
    extraInfoUrl?: string;
    /** Job type. */
    webJobType?: WebJobType;
    /** Error information. */
    error?: string;
    /** Using SDK? */
    usingSdk?: boolean;
    /** Job settings. */
    settings?: {
        [propertyName: string]: Record<string, unknown>;
    };
};

/** Collection of Kudu continuous web job information elements. */
export declare interface ContinuousWebJobCollection {
    /** Collection of resources. */
    value: ContinuousWebJob[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for ContinuousWebJobStatus. */
export declare type ContinuousWebJobStatus = "Initializing" | "Starting" | "Running" | "PendingRestart" | "Stopped";

/** Cross-Origin Resource Sharing (CORS) settings for the app. */
export declare interface CorsSettings {
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

/** Copy deployment slot parameters. */
export declare interface CsmCopySlotEntity {
    /** Destination deployment slot during copy operation. */
    targetSlot: string;
    /**
     * The site object which will be merged with the source slot site
     * to produce new destination slot site object.
     * <code>null</code> to just copy source slot content. Otherwise a <code>Site</code>
     * object with properties to override source slot site.
     */
    siteConfig: SiteConfig;
}

/** Object with a list of the resources that need to be moved and the resource group they should be moved to. */
export declare interface CsmMoveResourceEnvelope {
    targetResourceGroup?: string;
    resources?: string[];
}

/** Collection of Azure resource manager operation metadata. */
export declare interface CsmOperationCollection {
    /** Collection of resources. */
    value: CsmOperationDescription[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Description of an operation available for Microsoft.Web resource provider. */
export declare interface CsmOperationDescription {
    name?: string;
    /** Meta data about operation used for display in portal. */
    display?: CsmOperationDisplay;
    origin?: string;
    /** Properties available for a Microsoft.Web resource provider operation. */
    properties?: CsmOperationDescriptionProperties;
}

/** Properties available for a Microsoft.Web resource provider operation. */
export declare interface CsmOperationDescriptionProperties {
    /** Resource metrics service provided by Microsoft.Insights resource provider. */
    serviceSpecification?: ServiceSpecification;
}

/** Meta data about operation used for display in portal. */
export declare interface CsmOperationDisplay {
    provider?: string;
    resource?: string;
    operation?: string;
    description?: string;
}

/** Publishing options for requested profile. */
export declare interface CsmPublishingProfileOptions {
    /**
     * Name of the format. Valid values are:
     * FileZilla3
     * WebDeploy -- default
     * Ftp
     */
    format?: PublishingProfileFormat;
    /** Include the DisasterRecover endpoint if true */
    includeDisasterRecoveryEndpoints?: boolean;
}

/** Deployment slot parameters. */
export declare interface CsmSlotEntity {
    /** Destination deployment slot during swap operation. */
    targetSlot: string;
    /** <code>true</code> to preserve Virtual Network to the slot during swap; otherwise, <code>false</code>. */
    preserveVnet: boolean;
}

/** Usage of the quota resource. */
export declare interface CsmUsageQuota {
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

/** Collection of CSM usage quotas. */
export declare interface CsmUsageQuotaCollection {
    /** Collection of resources. */
    value: CsmUsageQuota[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Custom domain analysis. */
export declare type CustomHostnameAnalysisResult = ProxyOnlyResource & {
    /**
     * <code>true</code> if hostname is already verified; otherwise, <code>false</code>.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isHostnameAlreadyVerified?: boolean;
    /**
     * DNS verification test result.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly customDomainVerificationTest?: DnsVerificationTestResult;
    /**
     * Raw failure information if DNS verification fails.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly customDomainVerificationFailureInfo?: ErrorEntity;
    /**
     * <code>true</code> if there is a conflict on a scale unit; otherwise, <code>false</code>.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasConflictOnScaleUnit?: boolean;
    /**
     * <code>true</code> if there is a conflict across subscriptions; otherwise, <code>false</code>.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasConflictAcrossSubscription?: boolean;
    /**
     * Name of the conflicting app on scale unit if it's within the same subscription.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly conflictingAppResourceId?: string;
    /** CName records controller can see for this hostname. */
    cNameRecords?: string[];
    /** TXT records controller can see for this hostname. */
    txtRecords?: string[];
    /** A records controller can see for this hostname. */
    aRecords?: string[];
    /** Alternate CName records controller can see for this hostname. */
    alternateCNameRecords?: string[];
    /** Alternate TXT records controller can see for this hostname. */
    alternateTxtRecords?: string[];
};

/** Defines values for CustomHostNameDnsRecordType. */
export declare type CustomHostNameDnsRecordType = "CName" | "A";

/** Database backup settings. */
export declare interface DatabaseBackupSetting {
    /** Database type (e.g. SqlAzure / MySql). */
    databaseType: DatabaseType;
    name?: string;
    /**
     * Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
     * This is used during restore with overwrite connection strings options.
     */
    connectionStringName?: string;
    /** Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one. */
    connectionString?: string;
}

/**
 * Defines values for DatabaseType. \
 * {@link KnownDatabaseType} can be used interchangeably with DatabaseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SqlAzure** \
 * **MySql** \
 * **LocalMySql** \
 * **PostgreSql**
 */
export declare type DatabaseType = string;

/** Class representing data source used by the detectors */
export declare interface DataSource {
    /** Instructions if any for the data source */
    instructions?: string[];
    /** Datasource Uri Links */
    dataSourceUri?: NameValuePair[];
}

/** Column definition */
export declare interface DataTableResponseColumn {
    /** Name of the column */
    columnName?: string;
    /** Data type which looks like 'String' or 'Int32'. */
    dataType?: string;
    /** Column Type */
    columnType?: string;
}

/** Data Table which defines columns and raw row values */
export declare interface DataTableResponseObject {
    /** Name of the table */
    tableName?: string;
    /** List of columns with data types */
    columns?: DataTableResponseColumn[];
    /** Raw row values */
    rows?: string[][];
}

/** App Service error response. */
export declare interface DefaultErrorResponse {
    /**
     * Error model.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly error?: DefaultErrorResponseError;
}

/** Error model. */
export declare interface DefaultErrorResponseError {
    /**
     * Standardized string to programmatically identify the error.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly code?: string;
    /**
     * Detailed error description and debugging information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
    /**
     * Detailed error description and debugging information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly target?: string;
    details?: DefaultErrorResponseErrorDetailsItem[];
    /**
     * More information to debug error.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly innererror?: string;
}

/** Detailed errors. */
export declare interface DefaultErrorResponseErrorDetailsItem {
    /**
     * Standardized string to programmatically identify the error.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly code?: string;
    /**
     * Detailed error description and debugging information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
    /**
     * Detailed error description and debugging information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly target?: string;
}

/** Details about restoring a deleted app. */
export declare type DeletedAppRestoreRequest = ProxyOnlyResource & {
    /**
     * ARM resource ID of the deleted app. Example:
     * /subscriptions/{subId}/providers/Microsoft.Web/deletedSites/{deletedSiteId}
     */
    deletedSiteId?: string;
    /** If true, deleted site configuration, in addition to content, will be restored. */
    recoverConfiguration?: boolean;
    /**
     * Point in time to restore the deleted app from, formatted as a DateTime string.
     * If unspecified, default value is the time that the app was deleted.
     */
    snapshotTime?: string;
    /** If true, the snapshot is retrieved from DRSecondary endpoint. */
    useDRSecondary?: boolean;
};

/** A deleted app. */
export declare type DeletedSite = ProxyOnlyResource & {
    /**
     * Numeric id for the deleted site
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletedSiteId?: number;
    /**
     * Time in UTC when the app was deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletedTimestamp?: string;
    /**
     * Subscription containing the deleted site
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subscription?: string;
    /**
     * ResourceGroup that contained the deleted site
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGroup?: string;
    /**
     * Name of the deleted site
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletedSiteName?: string;
    /**
     * Slot of the deleted site
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly slot?: string;
    /**
     * Kind of site that was deleted
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kindPropertiesKind?: string;
    /**
     * Geo Region of the deleted site
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly geoRegionName?: string;
};

/** Collection of deleted apps. */
export declare interface DeletedWebAppCollection {
    /** Collection of resources. */
    value: DeletedSite[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a DeletedWebApps. */
export declare interface DeletedWebApps {
    /**
     * Description for Get all deleted apps for a subscription.
     * @param options The options parameters.
     */
    list(options?: DeletedWebAppsListOptionalParams): PagedAsyncIterableIterator<DeletedSite>;
    /**
     * Description for Get all deleted apps for a subscription at location
     * @param location
     * @param options The options parameters.
     */
    listByLocation(location: string, options?: DeletedWebAppsListByLocationOptionalParams): PagedAsyncIterableIterator<DeletedSite>;
    /**
     * Description for Get deleted app for a subscription at location.
     * @param location
     * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
     * @param options The options parameters.
     */
    getDeletedWebAppByLocation(location: string, deletedSiteId: string, options?: DeletedWebAppsGetDeletedWebAppByLocationOptionalParams): Promise<DeletedWebAppsGetDeletedWebAppByLocationResponse>;
}

/** Optional parameters. */
export declare interface DeletedWebAppsGetDeletedWebAppByLocationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDeletedWebAppByLocation operation. */
export declare type DeletedWebAppsGetDeletedWebAppByLocationResponse = DeletedSite;

/** Optional parameters. */
export declare interface DeletedWebAppsListByLocationNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByLocationNext operation. */
export declare type DeletedWebAppsListByLocationNextResponse = DeletedWebAppCollection;

/** Optional parameters. */
export declare interface DeletedWebAppsListByLocationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByLocation operation. */
export declare type DeletedWebAppsListByLocationResponse = DeletedWebAppCollection;

/** Optional parameters. */
export declare interface DeletedWebAppsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type DeletedWebAppsListNextResponse = DeletedWebAppCollection;

/** Optional parameters. */
export declare interface DeletedWebAppsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type DeletedWebAppsListResponse = DeletedWebAppCollection;

/** User credentials used for publishing activity. */
export declare type Deployment = ProxyOnlyResource & {
    /** Deployment status. */
    status?: number;
    /** Details about deployment status. */
    message?: string;
    /** Who authored the deployment. */
    author?: string;
    /** Who performed the deployment. */
    deployer?: string;
    /** Author email. */
    authorEmail?: string;
    /** Start time. */
    startTime?: Date;
    /** End time. */
    endTime?: Date;
    /** True if deployment is currently active, false if completed and null if not started. */
    active?: boolean;
    /** Details on deployment. */
    details?: string;
};

/** Collection of app deployments. */
export declare interface DeploymentCollection {
    /** Collection of resources. */
    value: Deployment[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * List of available locations (regions or App Service Environments) for
 * deployment of App Service resources.
 */
export declare interface DeploymentLocations {
    /** Available regions. */
    locations?: GeoRegion[];
    /** Available App Service Environments with full descriptions of the environments. */
    hostingEnvironments?: AppServiceEnvironment[];
    /** Available App Service Environments with basic information. */
    hostingEnvironmentDeploymentInfos?: HostingEnvironmentDeploymentInfo[];
}

/** Class representing Abnormal Time Period detected. */
export declare interface DetectorAbnormalTimePeriod {
    /** Start time of the correlated event */
    startTime?: Date;
    /** End time of the correlated event */
    endTime?: Date;
    /** Message describing the event */
    message?: string;
    /** Represents the name of the Detector */
    source?: string;
    /** Represents the rank of the Detector */
    priority?: number;
    /** Downtime metadata */
    metaData?: NameValuePair[][];
    /** Represents the type of the Detector */
    type?: IssueType;
    /** List of proposed solutions */
    solutions?: Solution[];
}

/** Class representing detector definition */
export declare type DetectorDefinition = ProxyOnlyResource & {
    /**
     * Display name of the detector
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /**
     * Description of the detector
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
    /**
     * Detector Rank
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly rank?: number;
    /**
     * Flag representing whether detector is enabled or not.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isEnabled?: boolean;
};

/** Definition of Detector */
export declare interface DetectorInfo {
    /**
     * Short description of the detector and its purpose
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
    /**
     * Support Category
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly category?: string;
    /**
     * Support Sub Category
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subCategory?: string;
    /**
     * Support Topic Id
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportTopicId?: string;
}

/** Class representing Response from Detector */
export declare type DetectorResponse = ProxyOnlyResource & {
    /** metadata for the detector */
    metadata?: DetectorInfo;
    /** Data Set */
    dataset?: DiagnosticData[];
};

/** Collection of detector responses */
export declare interface DetectorResponseCollection {
    /** Collection of resources. */
    value: DetectorResponse[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Class representing a diagnostic analysis done on an application */
export declare type DiagnosticAnalysis = ProxyOnlyResource & {
    /** Start time of the period */
    startTime?: Date;
    /** End time of the period */
    endTime?: Date;
    /** List of time periods. */
    abnormalTimePeriods?: AbnormalTimePeriod[];
    /** Data by each detector */
    payload?: AnalysisData[];
    /** Data by each detector for detectors that did not corelate */
    nonCorrelatedDetectors?: DetectorDefinition[];
};

/** Collection of Diagnostic Analyses */
export declare interface DiagnosticAnalysisCollection {
    /** Collection of resources. */
    value: AnalysisDefinition[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Class representing detector definition */
export declare type DiagnosticCategory = ProxyOnlyResource & {
    /**
     * Description of the diagnostic category
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
};

/** Collection of Diagnostic Categories */
export declare interface DiagnosticCategoryCollection {
    /** Collection of resources. */
    value: DiagnosticCategory[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Set of data with rendering instructions */
export declare interface DiagnosticData {
    /** Data in table form */
    table?: DataTableResponseObject;
    /** Properties that describe how the table should be rendered */
    renderingProperties?: Rendering;
}

/** Collection of Diagnostic Detectors */
export declare interface DiagnosticDetectorCollection {
    /** Collection of resources. */
    value: DetectorDefinition[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Class representing Response from Diagnostic Detectors */
export declare type DiagnosticDetectorResponse = ProxyOnlyResource & {
    /** Start time of the period */
    startTime?: Date;
    /** End time of the period */
    endTime?: Date;
    /** Flag representing Issue was detected. */
    issueDetected?: boolean;
    /** Detector's definition */
    detectorDefinition?: DetectorDefinition;
    /** Metrics provided by the detector */
    metrics?: DiagnosticMetricSet[];
    /** List of Correlated events found by the detector */
    abnormalTimePeriods?: DetectorAbnormalTimePeriod[];
    /** Additional Data that detector wants to send. */
    data?: NameValuePair[][];
    /** Meta Data */
    responseMetaData?: ResponseMetaData;
};

/** Class representing Diagnostic Metric */
export declare interface DiagnosticMetricSample {
    /** Time at which metric is measured */
    timestamp?: Date;
    /**
     * Role Instance. Null if this counter is not per instance
     * This is returned and should be whichever instance name we desire to be returned
     * i.e. CPU and Memory return RDWORKERNAME (LargeDed..._IN_0)
     * where RDWORKERNAME is Machine name below and RoleInstance name in parenthesis
     */
    roleInstance?: string;
    /** Total value of the metric. If multiple measurements are made this will have sum of all. */
    total?: number;
    /** Maximum of the metric sampled during the time period */
    maximum?: number;
    /** Minimum of the metric sampled during the time period */
    minimum?: number;
    /** Whether the values are aggregates across all workers or not */
    isAggregated?: boolean;
}

/** Class representing Diagnostic Metric information */
export declare interface DiagnosticMetricSet {
    /** Name of the metric */
    name?: string;
    /** Metric's unit */
    unit?: string;
    /** Start time of the period */
    startTime?: Date;
    /** End time of the period */
    endTime?: Date;
    /** Presented time grain. Supported grains at the moment are PT1M, PT1H, P1D */
    timeGrain?: string;
    /** Collection of metric values for the selected period based on the {Microsoft.Web.Hosting.Administration.DiagnosticMetricSet.TimeGrain} */
    values?: DiagnosticMetricSample[];
}

/** Interface representing a Diagnostics. */
export declare interface Diagnostics {
    /**
     * Description for List Hosting Environment Detector Responses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site Name
     * @param options The options parameters.
     */
    listHostingEnvironmentDetectorResponses(resourceGroupName: string, name: string, options?: DiagnosticsListHostingEnvironmentDetectorResponsesOptionalParams): PagedAsyncIterableIterator<DetectorResponse>;
    /**
     * Description for List Site Detector Responses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param options The options parameters.
     */
    listSiteDetectorResponses(resourceGroupName: string, siteName: string, options?: DiagnosticsListSiteDetectorResponsesOptionalParams): PagedAsyncIterableIterator<DetectorResponse>;
    /**
     * Description for Get Diagnostics Categories
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param options The options parameters.
     */
    listSiteDiagnosticCategories(resourceGroupName: string, siteName: string, options?: DiagnosticsListSiteDiagnosticCategoriesOptionalParams): PagedAsyncIterableIterator<DiagnosticCategory>;
    /**
     * Description for Get Site Analyses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param options The options parameters.
     */
    listSiteAnalyses(resourceGroupName: string, siteName: string, diagnosticCategory: string, options?: DiagnosticsListSiteAnalysesOptionalParams): PagedAsyncIterableIterator<AnalysisDefinition>;
    /**
     * Description for Get Detectors
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param options The options parameters.
     */
    listSiteDetectors(resourceGroupName: string, siteName: string, diagnosticCategory: string, options?: DiagnosticsListSiteDetectorsOptionalParams): PagedAsyncIterableIterator<DetectorDefinition>;
    /**
     * Description for List Site Detector Responses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    listSiteDetectorResponsesSlot(resourceGroupName: string, siteName: string, slot: string, options?: DiagnosticsListSiteDetectorResponsesSlotOptionalParams): PagedAsyncIterableIterator<DetectorResponse>;
    /**
     * Description for Get Diagnostics Categories
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    listSiteDiagnosticCategoriesSlot(resourceGroupName: string, siteName: string, slot: string, options?: DiagnosticsListSiteDiagnosticCategoriesSlotOptionalParams): PagedAsyncIterableIterator<DiagnosticCategory>;
    /**
     * Description for Get Site Analyses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param options The options parameters.
     */
    listSiteAnalysesSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, slot: string, options?: DiagnosticsListSiteAnalysesSlotOptionalParams): PagedAsyncIterableIterator<AnalysisDefinition>;
    /**
     * Description for Get Detectors
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param options The options parameters.
     */
    listSiteDetectorsSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, slot: string, options?: DiagnosticsListSiteDetectorsSlotOptionalParams): PagedAsyncIterableIterator<DetectorDefinition>;
    /**
     * Description for Get Hosting Environment Detector Response
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name App Service Environment Name
     * @param detectorName Detector Resource Name
     * @param options The options parameters.
     */
    getHostingEnvironmentDetectorResponse(resourceGroupName: string, name: string, detectorName: string, options?: DiagnosticsGetHostingEnvironmentDetectorResponseOptionalParams): Promise<DiagnosticsGetHostingEnvironmentDetectorResponseResponse>;
    /**
     * Description for Get site detector response
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param detectorName Detector Resource Name
     * @param options The options parameters.
     */
    getSiteDetectorResponse(resourceGroupName: string, siteName: string, detectorName: string, options?: DiagnosticsGetSiteDetectorResponseOptionalParams): Promise<DiagnosticsGetSiteDetectorResponseResponse>;
    /**
     * Description for Get Diagnostics Category
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param options The options parameters.
     */
    getSiteDiagnosticCategory(resourceGroupName: string, siteName: string, diagnosticCategory: string, options?: DiagnosticsGetSiteDiagnosticCategoryOptionalParams): Promise<DiagnosticsGetSiteDiagnosticCategoryResponse>;
    /**
     * Description for Get Site Analysis
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param analysisName Analysis Name
     * @param options The options parameters.
     */
    getSiteAnalysis(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, options?: DiagnosticsGetSiteAnalysisOptionalParams): Promise<DiagnosticsGetSiteAnalysisResponse>;
    /**
     * Description for Execute Analysis
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Category Name
     * @param analysisName Analysis Resource Name
     * @param options The options parameters.
     */
    executeSiteAnalysis(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, options?: DiagnosticsExecuteSiteAnalysisOptionalParams): Promise<DiagnosticsExecuteSiteAnalysisResponse>;
    /**
     * Description for Get Detector
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param detectorName Detector Name
     * @param options The options parameters.
     */
    getSiteDetector(resourceGroupName: string, siteName: string, diagnosticCategory: string, detectorName: string, options?: DiagnosticsGetSiteDetectorOptionalParams): Promise<DiagnosticsGetSiteDetectorResponse>;
    /**
     * Description for Execute Detector
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param detectorName Detector Resource Name
     * @param diagnosticCategory Category Name
     * @param options The options parameters.
     */
    executeSiteDetector(resourceGroupName: string, siteName: string, detectorName: string, diagnosticCategory: string, options?: DiagnosticsExecuteSiteDetectorOptionalParams): Promise<DiagnosticsExecuteSiteDetectorResponse>;
    /**
     * Description for Get site detector response
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param detectorName Detector Resource Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    getSiteDetectorResponseSlot(resourceGroupName: string, siteName: string, detectorName: string, slot: string, options?: DiagnosticsGetSiteDetectorResponseSlotOptionalParams): Promise<DiagnosticsGetSiteDetectorResponseSlotResponse>;
    /**
     * Description for Get Diagnostics Category
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param options The options parameters.
     */
    getSiteDiagnosticCategorySlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, slot: string, options?: DiagnosticsGetSiteDiagnosticCategorySlotOptionalParams): Promise<DiagnosticsGetSiteDiagnosticCategorySlotResponse>;
    /**
     * Description for Get Site Analysis
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param analysisName Analysis Name
     * @param slot Slot - optional
     * @param options The options parameters.
     */
    getSiteAnalysisSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, slot: string, options?: DiagnosticsGetSiteAnalysisSlotOptionalParams): Promise<DiagnosticsGetSiteAnalysisSlotResponse>;
    /**
     * Description for Execute Analysis
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Category Name
     * @param analysisName Analysis Resource Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    executeSiteAnalysisSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, slot: string, options?: DiagnosticsExecuteSiteAnalysisSlotOptionalParams): Promise<DiagnosticsExecuteSiteAnalysisSlotResponse>;
    /**
     * Description for Get Detector
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param detectorName Detector Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    getSiteDetectorSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, detectorName: string, slot: string, options?: DiagnosticsGetSiteDetectorSlotOptionalParams): Promise<DiagnosticsGetSiteDetectorSlotResponse>;
    /**
     * Description for Execute Detector
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param detectorName Detector Resource Name
     * @param diagnosticCategory Category Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    executeSiteDetectorSlot(resourceGroupName: string, siteName: string, detectorName: string, diagnosticCategory: string, slot: string, options?: DiagnosticsExecuteSiteDetectorSlotOptionalParams): Promise<DiagnosticsExecuteSiteDetectorSlotResponse>;
}

/** Optional parameters. */
export declare interface DiagnosticsExecuteSiteAnalysisOptionalParams extends coreClient.OperationOptions {
    /** Start Time */
    startTime?: Date;
    /** End Time */
    endTime?: Date;
    /** Time Grain */
    timeGrain?: string;
}

/** Contains response data for the executeSiteAnalysis operation. */
export declare type DiagnosticsExecuteSiteAnalysisResponse = DiagnosticAnalysis;

/** Optional parameters. */
export declare interface DiagnosticsExecuteSiteAnalysisSlotOptionalParams extends coreClient.OperationOptions {
    /** Start Time */
    startTime?: Date;
    /** End Time */
    endTime?: Date;
    /** Time Grain */
    timeGrain?: string;
}

/** Contains response data for the executeSiteAnalysisSlot operation. */
export declare type DiagnosticsExecuteSiteAnalysisSlotResponse = DiagnosticAnalysis;

/** Optional parameters. */
export declare interface DiagnosticsExecuteSiteDetectorOptionalParams extends coreClient.OperationOptions {
    /** Start Time */
    startTime?: Date;
    /** End Time */
    endTime?: Date;
    /** Time Grain */
    timeGrain?: string;
}

/** Contains response data for the executeSiteDetector operation. */
export declare type DiagnosticsExecuteSiteDetectorResponse = DiagnosticDetectorResponse;

/** Optional parameters. */
export declare interface DiagnosticsExecuteSiteDetectorSlotOptionalParams extends coreClient.OperationOptions {
    /** Start Time */
    startTime?: Date;
    /** End Time */
    endTime?: Date;
    /** Time Grain */
    timeGrain?: string;
}

/** Contains response data for the executeSiteDetectorSlot operation. */
export declare type DiagnosticsExecuteSiteDetectorSlotResponse = DiagnosticDetectorResponse;

/** Optional parameters. */
export declare interface DiagnosticsGetHostingEnvironmentDetectorResponseOptionalParams extends coreClient.OperationOptions {
    /** Start Time */
    startTime?: Date;
    /** End Time */
    endTime?: Date;
    /** Time Grain */
    timeGrain?: string;
}

/** Contains response data for the getHostingEnvironmentDetectorResponse operation. */
export declare type DiagnosticsGetHostingEnvironmentDetectorResponseResponse = DetectorResponse;

/** Optional parameters. */
export declare interface DiagnosticsGetSiteAnalysisOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSiteAnalysis operation. */
export declare type DiagnosticsGetSiteAnalysisResponse = AnalysisDefinition;

/** Optional parameters. */
export declare interface DiagnosticsGetSiteAnalysisSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSiteAnalysisSlot operation. */
export declare type DiagnosticsGetSiteAnalysisSlotResponse = AnalysisDefinition;

/** Optional parameters. */
export declare interface DiagnosticsGetSiteDetectorOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSiteDetector operation. */
export declare type DiagnosticsGetSiteDetectorResponse = DetectorDefinition;

/** Optional parameters. */
export declare interface DiagnosticsGetSiteDetectorResponseOptionalParams extends coreClient.OperationOptions {
    /** Start Time */
    startTime?: Date;
    /** End Time */
    endTime?: Date;
    /** Time Grain */
    timeGrain?: string;
}

/** Contains response data for the getSiteDetectorResponse operation. */
export declare type DiagnosticsGetSiteDetectorResponseResponse = DetectorResponse;

/** Optional parameters. */
export declare interface DiagnosticsGetSiteDetectorResponseSlotOptionalParams extends coreClient.OperationOptions {
    /** Start Time */
    startTime?: Date;
    /** End Time */
    endTime?: Date;
    /** Time Grain */
    timeGrain?: string;
}

/** Contains response data for the getSiteDetectorResponseSlot operation. */
export declare type DiagnosticsGetSiteDetectorResponseSlotResponse = DetectorResponse;

/** Optional parameters. */
export declare interface DiagnosticsGetSiteDetectorSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSiteDetectorSlot operation. */
export declare type DiagnosticsGetSiteDetectorSlotResponse = DetectorDefinition;

/** Optional parameters. */
export declare interface DiagnosticsGetSiteDiagnosticCategoryOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSiteDiagnosticCategory operation. */
export declare type DiagnosticsGetSiteDiagnosticCategoryResponse = DiagnosticCategory;

/** Optional parameters. */
export declare interface DiagnosticsGetSiteDiagnosticCategorySlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSiteDiagnosticCategorySlot operation. */
export declare type DiagnosticsGetSiteDiagnosticCategorySlotResponse = DiagnosticCategory;

/** Optional parameters. */
export declare interface DiagnosticsListHostingEnvironmentDetectorResponsesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHostingEnvironmentDetectorResponsesNext operation. */
export declare type DiagnosticsListHostingEnvironmentDetectorResponsesNextResponse = DetectorResponseCollection;

/** Optional parameters. */
export declare interface DiagnosticsListHostingEnvironmentDetectorResponsesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHostingEnvironmentDetectorResponses operation. */
export declare type DiagnosticsListHostingEnvironmentDetectorResponsesResponse = DetectorResponseCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteAnalysesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteAnalysesNext operation. */
export declare type DiagnosticsListSiteAnalysesNextResponse = DiagnosticAnalysisCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteAnalysesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteAnalyses operation. */
export declare type DiagnosticsListSiteAnalysesResponse = DiagnosticAnalysisCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteAnalysesSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteAnalysesSlotNext operation. */
export declare type DiagnosticsListSiteAnalysesSlotNextResponse = DiagnosticAnalysisCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteAnalysesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteAnalysesSlot operation. */
export declare type DiagnosticsListSiteAnalysesSlotResponse = DiagnosticAnalysisCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDetectorResponsesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDetectorResponsesNext operation. */
export declare type DiagnosticsListSiteDetectorResponsesNextResponse = DetectorResponseCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDetectorResponsesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDetectorResponses operation. */
export declare type DiagnosticsListSiteDetectorResponsesResponse = DetectorResponseCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDetectorResponsesSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDetectorResponsesSlotNext operation. */
export declare type DiagnosticsListSiteDetectorResponsesSlotNextResponse = DetectorResponseCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDetectorResponsesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDetectorResponsesSlot operation. */
export declare type DiagnosticsListSiteDetectorResponsesSlotResponse = DetectorResponseCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDetectorsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDetectorsNext operation. */
export declare type DiagnosticsListSiteDetectorsNextResponse = DiagnosticDetectorCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDetectorsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDetectors operation. */
export declare type DiagnosticsListSiteDetectorsResponse = DiagnosticDetectorCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDetectorsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDetectorsSlotNext operation. */
export declare type DiagnosticsListSiteDetectorsSlotNextResponse = DiagnosticDetectorCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDetectorsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDetectorsSlot operation. */
export declare type DiagnosticsListSiteDetectorsSlotResponse = DiagnosticDetectorCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDiagnosticCategoriesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDiagnosticCategoriesNext operation. */
export declare type DiagnosticsListSiteDiagnosticCategoriesNextResponse = DiagnosticCategoryCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDiagnosticCategoriesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDiagnosticCategories operation. */
export declare type DiagnosticsListSiteDiagnosticCategoriesResponse = DiagnosticCategoryCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDiagnosticCategoriesSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDiagnosticCategoriesSlotNext operation. */
export declare type DiagnosticsListSiteDiagnosticCategoriesSlotNextResponse = DiagnosticCategoryCollection;

/** Optional parameters. */
export declare interface DiagnosticsListSiteDiagnosticCategoriesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteDiagnosticCategoriesSlot operation. */
export declare type DiagnosticsListSiteDiagnosticCategoriesSlotResponse = DiagnosticCategoryCollection;

/**
 * Dimension of a resource metric. For e.g. instance specific HTTP requests for a web app,
 * where instance name is dimension of the metric HTTP request
 */
export declare interface Dimension {
    name?: string;
    displayName?: string;
    internalName?: string;
    toBeExportedForShoebox?: boolean;
}

/** Defines values for DnsType. */
export declare type DnsType = "AzureDns" | "DefaultDomainRegistrarDns";

/** Defines values for DnsVerificationTestResult. */
export declare type DnsVerificationTestResult = "Passed" | "Failed" | "Skipped";

/** Information about a domain. */
export declare type Domain = Resource & {
    /** Administrative contact. */
    contactAdmin?: Contact;
    /** Billing contact. */
    contactBilling?: Contact;
    /** Registrant contact. */
    contactRegistrant?: Contact;
    /** Technical contact. */
    contactTech?: Contact;
    /**
     * Domain registration status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly registrationStatus?: DomainStatus;
    /**
     * Domain provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * Name servers.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nameServers?: string[];
    /** <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>. */
    privacy?: boolean;
    /**
     * Domain creation timestamp.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly createdTime?: Date;
    /**
     * Domain expiration timestamp.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expirationTime?: Date;
    /**
     * Timestamp when the domain was renewed last time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastRenewedTime?: Date;
    /** <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>. */
    autoRenew?: boolean;
    /**
     * <code>true</code> if Azure can assign this domain to App Service apps; otherwise, <code>false</code>. This value will be <code>true</code> if domain registration status is active and
     *  it is hosted on name servers Azure has programmatic access to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly readyForDnsRecordManagement?: boolean;
    /**
     * All hostnames derived from the domain and assigned to Azure resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly managedHostNames?: HostName[];
    /** Legal agreement consent. */
    consent?: DomainPurchaseConsent;
    /**
     * Reasons why domain is not renewable.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly domainNotRenewableReasons?: DomainPropertiesDomainNotRenewableReasonsItem[];
    /** Current DNS type */
    dnsType?: DnsType;
    /** Azure DNS Zone to use */
    dnsZoneId?: string;
    /** Target DNS type (would be used for migration) */
    targetDnsType?: DnsType;
    authCode?: string;
};

/** Domain availability check result. */
export declare interface DomainAvailabilityCheckResult {
    /** Name of the domain. */
    name?: string;
    /** <code>true</code> if domain can be purchased using CreateDomain API; otherwise, <code>false</code>. */
    available?: boolean;
    /** Valid values are Regular domain: Azure will charge the full price of domain registration, SoftDeleted: Purchasing this domain will simply restore it and this operation will not cost anything. */
    domainType?: DomainType;
}

/** Collection of domains. */
export declare interface DomainCollection {
    /** Collection of resources. */
    value: Domain[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Single sign-on request information for domain management. */
export declare interface DomainControlCenterSsoRequest {
    /**
     * URL where the single sign-on request is to be made.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly url?: string;
    /**
     * Post parameter key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly postParameterKey?: string;
    /**
     * Post parameter value. Client should use 'application/x-www-form-urlencoded' encoding for this value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly postParameterValue?: string;
}

/** Domain ownership Identifier. */
export declare type DomainOwnershipIdentifier = ProxyOnlyResource & {
    /** Ownership Id. */
    ownershipId?: string;
};

/** Collection of domain ownership identifiers. */
export declare interface DomainOwnershipIdentifierCollection {
    /** Collection of resources. */
    value: DomainOwnershipIdentifier[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** ARM resource for a domain. */
export declare type DomainPatchResource = ProxyOnlyResource & {
    /** Administrative contact. */
    contactAdmin?: Contact;
    /** Billing contact. */
    contactBilling?: Contact;
    /** Registrant contact. */
    contactRegistrant?: Contact;
    /** Technical contact. */
    contactTech?: Contact;
    /**
     * Domain registration status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly registrationStatus?: DomainStatus;
    /**
     * Domain provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * Name servers.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nameServers?: string[];
    /** <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>. */
    privacy?: boolean;
    /**
     * Domain creation timestamp.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly createdTime?: Date;
    /**
     * Domain expiration timestamp.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expirationTime?: Date;
    /**
     * Timestamp when the domain was renewed last time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastRenewedTime?: Date;
    /** <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>. */
    autoRenew?: boolean;
    /**
     * <code>true</code> if Azure can assign this domain to App Service apps; otherwise, <code>false</code>. This value will be <code>true</code> if domain registration status is active and
     *  it is hosted on name servers Azure has programmatic access to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly readyForDnsRecordManagement?: boolean;
    /**
     * All hostnames derived from the domain and assigned to Azure resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly managedHostNames?: HostName[];
    /** Legal agreement consent. */
    consent?: DomainPurchaseConsent;
    /**
     * Reasons why domain is not renewable.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly domainNotRenewableReasons?: DomainPatchResourcePropertiesDomainNotRenewableReasonsItem[];
    /** Current DNS type */
    dnsType?: DnsType;
    /** Azure DNS Zone to use */
    dnsZoneId?: string;
    /** Target DNS type (would be used for migration) */
    targetDnsType?: DnsType;
    authCode?: string;
};

/**
 * Defines values for DomainPatchResourcePropertiesDomainNotRenewableReasonsItem. \
 * {@link KnownDomainPatchResourcePropertiesDomainNotRenewableReasonsItem} can be used interchangeably with DomainPatchResourcePropertiesDomainNotRenewableReasonsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **RegistrationStatusNotSupportedForRenewal** \
 * **ExpirationNotInRenewalTimeRange** \
 * **SubscriptionNotActive**
 */
export declare type DomainPatchResourcePropertiesDomainNotRenewableReasonsItem = string;

/**
 * Defines values for DomainPropertiesDomainNotRenewableReasonsItem. \
 * {@link KnownDomainPropertiesDomainNotRenewableReasonsItem} can be used interchangeably with DomainPropertiesDomainNotRenewableReasonsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **RegistrationStatusNotSupportedForRenewal** \
 * **ExpirationNotInRenewalTimeRange** \
 * **SubscriptionNotActive**
 */
export declare type DomainPropertiesDomainNotRenewableReasonsItem = string;

/** Domain purchase consent object, representing acceptance of applicable legal agreements. */
export declare interface DomainPurchaseConsent {
    /** List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API under <code>TopLevelDomain</code> resource. */
    agreementKeys?: string[];
    /** Client IP address. */
    agreedBy?: string;
    /** Timestamp when the agreements were accepted. */
    agreedAt?: Date;
}

/** Domain recommendation search parameters. */
export declare interface DomainRecommendationSearchParameters {
    /** Keywords to be used for generating domain recommendations. */
    keywords?: string;
    /** Maximum number of recommendations. */
    maxDomainRecommendations?: number;
}

/** Interface representing a DomainRegistrationProvider. */
export declare interface DomainRegistrationProvider {
    /**
     * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the
     * resource provider
     * @param options The options parameters.
     */
    listOperations(options?: DomainRegistrationProviderListOperationsOptionalParams): PagedAsyncIterableIterator<CsmOperationDescription>;
}

/** Optional parameters. */
export declare interface DomainRegistrationProviderListOperationsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNext operation. */
export declare type DomainRegistrationProviderListOperationsNextResponse = CsmOperationCollection;

/** Optional parameters. */
export declare interface DomainRegistrationProviderListOperationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperations operation. */
export declare type DomainRegistrationProviderListOperationsResponse = CsmOperationCollection;

/** Interface representing a Domains. */
export declare interface Domains {
    /**
     * Description for Get all domains in a subscription.
     * @param options The options parameters.
     */
    list(options?: DomainsListOptionalParams): PagedAsyncIterableIterator<Domain>;
    /**
     * Description for Get domain name recommendations based on keywords.
     * @param parameters Search parameters for domain name recommendations.
     * @param options The options parameters.
     */
    listRecommendations(parameters: DomainRecommendationSearchParameters, options?: DomainsListRecommendationsOptionalParams): PagedAsyncIterableIterator<NameIdentifier>;
    /**
     * Description for Get all domains in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DomainsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Domain>;
    /**
     * Description for Lists domain ownership identifiers.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param options The options parameters.
     */
    listOwnershipIdentifiers(resourceGroupName: string, domainName: string, options?: DomainsListOwnershipIdentifiersOptionalParams): PagedAsyncIterableIterator<DomainOwnershipIdentifier>;
    /**
     * Description for Check if a domain is available for registration.
     * @param identifier Name of the domain.
     * @param options The options parameters.
     */
    checkAvailability(identifier: NameIdentifier, options?: DomainsCheckAvailabilityOptionalParams): Promise<DomainsCheckAvailabilityResponse>;
    /**
     * Description for Generate a single sign-on request for the domain management portal.
     * @param options The options parameters.
     */
    getControlCenterSsoRequest(options?: DomainsGetControlCenterSsoRequestOptionalParams): Promise<DomainsGetControlCenterSsoRequestResponse>;
    /**
     * Description for Get a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, domainName: string, options?: DomainsGetOptionalParams): Promise<DomainsGetResponse>;
    /**
     * Description for Creates or updates a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param domain Domain registration information.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, domainName: string, domain: Domain, options?: DomainsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DomainsCreateOrUpdateResponse>, DomainsCreateOrUpdateResponse>>;
    /**
     * Description for Creates or updates a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param domain Domain registration information.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, domainName: string, domain: Domain, options?: DomainsCreateOrUpdateOptionalParams): Promise<DomainsCreateOrUpdateResponse>;
    /**
     * Description for Delete a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, domainName: string, options?: DomainsDeleteOptionalParams): Promise<void>;
    /**
     * Description for Creates or updates a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param domain Domain registration information.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, domainName: string, domain: DomainPatchResource, options?: DomainsUpdateOptionalParams): Promise<DomainsUpdateResponse>;
    /**
     * Description for Get ownership identifier for domain
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param name Name of identifier.
     * @param options The options parameters.
     */
    getOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, options?: DomainsGetOwnershipIdentifierOptionalParams): Promise<DomainsGetOwnershipIdentifierResponse>;
    /**
     * Description for Creates an ownership identifier for a domain or updates identifier details for an
     * existing identifer
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param name Name of identifier.
     * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
     * @param options The options parameters.
     */
    createOrUpdateOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, domainOwnershipIdentifier: DomainOwnershipIdentifier, options?: DomainsCreateOrUpdateOwnershipIdentifierOptionalParams): Promise<DomainsCreateOrUpdateOwnershipIdentifierResponse>;
    /**
     * Description for Delete ownership identifier for domain
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param name Name of identifier.
     * @param options The options parameters.
     */
    deleteOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, options?: DomainsDeleteOwnershipIdentifierOptionalParams): Promise<void>;
    /**
     * Description for Creates an ownership identifier for a domain or updates identifier details for an
     * existing identifer
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of domain.
     * @param name Name of identifier.
     * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
     * @param options The options parameters.
     */
    updateOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, domainOwnershipIdentifier: DomainOwnershipIdentifier, options?: DomainsUpdateOwnershipIdentifierOptionalParams): Promise<DomainsUpdateOwnershipIdentifierResponse>;
    /**
     * Description for Renew a domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param domainName Name of the domain.
     * @param options The options parameters.
     */
    renew(resourceGroupName: string, domainName: string, options?: DomainsRenewOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface DomainsCheckAvailabilityOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the checkAvailability operation. */
export declare type DomainsCheckAvailabilityResponse = DomainAvailabilityCheckResult;

/** Optional parameters. */
export declare interface DomainsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DomainsCreateOrUpdateOwnershipIdentifierOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateOwnershipIdentifier operation. */
export declare type DomainsCreateOrUpdateOwnershipIdentifierResponse = DomainOwnershipIdentifier;

/** Contains response data for the createOrUpdate operation. */
export declare type DomainsCreateOrUpdateResponse = Domain;

/** Optional parameters. */
export declare interface DomainsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to delete the domain immediately. The default is <code>false</code> which deletes the domain after 24 hours. */
    forceHardDeleteDomain?: boolean;
}

/** Optional parameters. */
export declare interface DomainsDeleteOwnershipIdentifierOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DomainsGetControlCenterSsoRequestOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getControlCenterSsoRequest operation. */
export declare type DomainsGetControlCenterSsoRequestResponse = DomainControlCenterSsoRequest;

/** Optional parameters. */
export declare interface DomainsGetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DomainsGetOwnershipIdentifierOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getOwnershipIdentifier operation. */
export declare type DomainsGetOwnershipIdentifierResponse = DomainOwnershipIdentifier;

/** Contains response data for the get operation. */
export declare type DomainsGetResponse = Domain;

/** Optional parameters. */
export declare interface DomainsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type DomainsListByResourceGroupNextResponse = DomainCollection;

/** Optional parameters. */
export declare interface DomainsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type DomainsListByResourceGroupResponse = DomainCollection;

/** Optional parameters. */
export declare interface DomainsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type DomainsListNextResponse = DomainCollection;

/** Optional parameters. */
export declare interface DomainsListOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DomainsListOwnershipIdentifiersNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwnershipIdentifiersNext operation. */
export declare type DomainsListOwnershipIdentifiersNextResponse = DomainOwnershipIdentifierCollection;

/** Optional parameters. */
export declare interface DomainsListOwnershipIdentifiersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOwnershipIdentifiers operation. */
export declare type DomainsListOwnershipIdentifiersResponse = DomainOwnershipIdentifierCollection;

/** Optional parameters. */
export declare interface DomainsListRecommendationsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listRecommendationsNext operation. */
export declare type DomainsListRecommendationsNextResponse = NameIdentifierCollection;

/** Optional parameters. */
export declare interface DomainsListRecommendationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listRecommendations operation. */
export declare type DomainsListRecommendationsResponse = NameIdentifierCollection;

/** Contains response data for the list operation. */
export declare type DomainsListResponse = DomainCollection;

/** Optional parameters. */
export declare interface DomainsRenewOptionalParams extends coreClient.OperationOptions {
}

/** Defines values for DomainStatus. */
export declare type DomainStatus = "Active" | "Awaiting" | "Cancelled" | "Confiscated" | "Disabled" | "Excluded" | "Expired" | "Failed" | "Held" | "Locked" | "Parked" | "Pending" | "Reserved" | "Reverted" | "Suspended" | "Transferred" | "Unknown" | "Unlocked" | "Unparked" | "Updated" | "JsonConverterFailed";

/** Optional parameters. */
export declare interface DomainsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DomainsUpdateOwnershipIdentifierOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateOwnershipIdentifier operation. */
export declare type DomainsUpdateOwnershipIdentifierResponse = DomainOwnershipIdentifier;

/** Contains response data for the update operation. */
export declare type DomainsUpdateResponse = Domain;

/** Defines values for DomainType. */
export declare type DomainType = "Regular" | "SoftDeleted";

/** Enabled configuration. */
export declare interface EnabledConfig {
    /** True if configuration is enabled, false if it is disabled and null if configuration is not set. */
    enabled?: boolean;
}

/** A domain name that a service is reached at, including details of the current connection status. */
export declare interface EndpointDependency {
    /** The domain name of the dependency. */
    domainName?: string;
    /** The IP Addresses and Ports used when connecting to DomainName. */
    endpointDetails?: EndpointDetail[];
}

/** Current TCP connectivity information from the App Service Environment to a single endpoint. */
export declare interface EndpointDetail {
    /** An IP Address that Domain Name currently resolves to. */
    ipAddress?: string;
    /** The port an endpoint is connected to. */
    port?: number;
    /** The time in milliseconds it takes for a TCP connection to be created from the App Service Environment to this IpAddress at this Port. */
    latency?: number;
    /** Whether it is possible to create a TCP connection from the App Service Environment to this IpAddress at this Port. */
    isAccessible?: boolean;
}

/**
 * Defines values for Enum4. \
 * {@link KnownEnum4} can be used interchangeably with Enum4,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Windows** \
 * **Linux** \
 * **WindowsFunctions** \
 * **LinuxFunctions**
 */
export declare type Enum4 = string;

/**
 * Defines values for Enum5. \
 * {@link KnownEnum5} can be used interchangeably with Enum5,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Windows** \
 * **Linux** \
 * **WindowsFunctions** \
 * **LinuxFunctions**
 */
export declare type Enum5 = string;

/** Body of the error response returned from the API. */
export declare interface ErrorEntity {
    /** Type of error. */
    extendedCode?: string;
    /** Message template. */
    messageTemplate?: string;
    /** Parameters for the template. */
    parameters?: string[];
    /** Inner errors. */
    innerErrors?: ErrorEntity[];
    /** Basic error code. */
    code?: string;
    /** Any details of the error. */
    message?: string;
}

/** Routing rules in production experiments. */
export declare interface Experiments {
    /** List of ramp-up rules. */
    rampUpRules?: RampUpRule[];
}

/** Application logs to file system configuration. */
export declare interface FileSystemApplicationLogsConfig {
    /** Log level. */
    level?: LogLevel;
}

/** Http logs to file system configuration. */
export declare interface FileSystemHttpLogsConfig {
    /**
     * Maximum size in megabytes that http log files can use.
     * When reached old log files will be removed to make space for new ones.
     * Value can range between 25 and 100.
     */
    retentionInMb?: number;
    /**
     * Retention in days.
     * Remove files older than X days.
     * 0 or lower means no retention.
     */
    retentionInDays?: number;
    /** True if configuration is enabled, false if it is disabled and null if configuration is not set. */
    enabled?: boolean;
}

/** Defines values for FrequencyUnit. */
export declare type FrequencyUnit = "Day" | "Hour";

/**
 * Defines values for FtpsState. \
 * {@link KnownFtpsState} can be used interchangeably with FtpsState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AllAllowed** \
 * **FtpsOnly** \
 * **Disabled**
 */
export declare type FtpsState = string;

/** Function information. */
export declare type FunctionEnvelope = ProxyOnlyResource & {
    /** Function App ID. */
    functionAppId?: string;
    /** Script root path URI. */
    scriptRootPathHref?: string;
    /** Script URI. */
    scriptHref?: string;
    /** Config URI. */
    configHref?: string;
    /** Test data URI. */
    testDataHref?: string;
    /** Secrets file URI. */
    secretsFileHref?: string;
    /** Function URI. */
    href?: string;
    /** Config information. */
    config?: Record<string, unknown>;
    /** File list. */
    files?: {
        [propertyName: string]: string;
    };
    /** Test data used when testing via the Azure Portal. */
    testData?: string;
    /** The invocation URL */
    invokeUrlTemplate?: string;
    /** The function language */
    language?: string;
    /** Gets or sets a value indicating whether the function is disabled */
    isDisabled?: boolean;
};

/** Collection of Kudu function information elements. */
export declare interface FunctionEnvelopeCollection {
    /** Collection of resources. */
    value: FunctionEnvelope[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Function secrets. */
export declare type FunctionSecrets = ProxyOnlyResource & {
    /** Secret key. */
    key?: string;
    /** Trigger URL. */
    triggerUrl?: string;
};

/** Geographical region. */
export declare type GeoRegion = ProxyOnlyResource & {
    /**
     * Region description.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
    /**
     * Display name for region.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /**
     * Display name for region.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly orgDomain?: string;
};

/** Collection of geographical regions. */
export declare interface GeoRegionCollection {
    /** Collection of resources. */
    value: GeoRegion[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A Global SKU Description. */
export declare interface GlobalCsmSkuDescription {
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

/**
 * The IIS handler mappings used to define which handler processes HTTP requests with certain extension.
 * For example, it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.
 */
export declare interface HandlerMapping {
    /** Requests with this extension will be handled using the specified FastCGI application. */
    extension?: string;
    /** The absolute path to the FastCGI application. */
    scriptProcessor?: string;
    /** Command-line arguments to be passed to the script processor. */
    arguments?: string;
}

/** Information needed to create resources on an App Service Environment. */
export declare interface HostingEnvironmentDeploymentInfo {
    /** Name of the App Service Environment. */
    name?: string;
    /** Location of the App Service Environment. */
    location?: string;
}

/** Diagnostics for an App Service Environment. */
export declare interface HostingEnvironmentDiagnostics {
    /** Name/identifier of the diagnostics. */
    name?: string;
    /** Diagnostics output. */
    diagnosticsOutput?: string;
}

/** Specification for an App Service Environment to use for this resource. */
export declare interface HostingEnvironmentProfile {
    /** Resource ID of the App Service Environment. */
    id?: string;
    /**
     * Name of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type of the App Service Environment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
}

/** Defines values for HostingEnvironmentStatus. */
export declare type HostingEnvironmentStatus = "Preparing" | "Ready" | "Scaling" | "Deleting";

/** Functions host level keys. */
export declare interface HostKeys {
    /** Secret key. */
    masterKey?: string;
    /** Host level function keys. */
    functionKeys?: {
        [propertyName: string]: string;
    };
    /** System keys. */
    systemKeys?: {
        [propertyName: string]: string;
    };
}

/** Details of a hostname derived from a domain. */
export declare interface HostName {
    /** Name of the hostname. */
    name?: string;
    /** List of apps the hostname is assigned to. This list will have more than one app only if the hostname is pointing to a Traffic Manager. */
    siteNames?: string[];
    /** Name of the Azure resource the hostname is assigned to. If it is assigned to a Traffic Manager then it will be the Traffic Manager name otherwise it will be the app name. */
    azureResourceName?: string;
    /** Type of the Azure resource the hostname is assigned to. */
    azureResourceType?: AzureResourceType;
    /** Type of the DNS record. */
    customHostNameDnsRecordType?: CustomHostNameDnsRecordType;
    /** Type of the hostname. */
    hostNameType?: HostNameType;
}

/** A hostname binding object. */
export declare type HostNameBinding = ProxyOnlyResource & {
    /** App Service app name. */
    siteName?: string;
    /** Fully qualified ARM domain resource URI. */
    domainId?: string;
    /** Azure resource name. */
    azureResourceName?: string;
    /** Azure resource type. */
    azureResourceType?: AzureResourceType;
    /** Custom DNS record type. */
    customHostNameDnsRecordType?: CustomHostNameDnsRecordType;
    /** Hostname type. */
    hostNameType?: HostNameType;
    /** SSL type */
    sslState?: SslState;
    /** SSL certificate thumbprint */
    thumbprint?: string;
    /**
     * Virtual IP address assigned to the hostname if IP based SSL is enabled.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualIP?: string;
};

/** Collection of hostname bindings. */
export declare interface HostNameBindingCollection {
    /** Collection of resources. */
    value: HostNameBinding[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** SSL-enabled hostname. */
export declare interface HostNameSslState {
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

/** Defines values for HostNameType. */
export declare type HostNameType = "Verified" | "Managed";

/** Defines values for HostType. */
export declare type HostType = "Standard" | "Repository";

/** Http logs configuration. */
export declare interface HttpLogsConfig {
    /** Http logs to file system configuration. */
    fileSystem?: FileSystemHttpLogsConfig;
    /** Http logs to azure blob storage configuration. */
    azureBlobStorage?: AzureBlobStorageHttpLogsConfig;
}

/** Hybrid Connection contract. This is used to configure a Hybrid Connection. */
export declare type HybridConnection = ProxyOnlyResource & {
    /** The name of the Service Bus namespace. */
    serviceBusNamespace?: string;
    /** The name of the Service Bus relay. */
    relayName?: string;
    /** The ARM URI to the Service Bus relay. */
    relayArmUri?: string;
    /** The hostname of the endpoint. */
    hostname?: string;
    /** The port of the endpoint. */
    port?: number;
    /** The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus. */
    sendKeyName?: string;
    /**
     * The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
     * normally, use the POST /listKeys API instead.
     */
    sendKeyValue?: string;
    /** The suffix for the service bus endpoint. By default this is .servicebus.windows.net */
    serviceBusSuffix?: string;
};

/** Collection of hostname bindings. */
export declare interface HybridConnectionCollection {
    /** Collection of resources. */
    value: HybridConnection[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection. */
export declare type HybridConnectionKey = ProxyOnlyResource & {
    /**
     * The name of the send key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sendKeyName?: string;
    /**
     * The value of the send key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sendKeyValue?: string;
};

/** Hybrid Connection limits contract. This is used to return the plan limits of Hybrid Connections. */
export declare type HybridConnectionLimits = ProxyOnlyResource & {
    /**
     * The current number of Hybrid Connections.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly current?: number;
    /**
     * The maximum number of Hybrid Connections allowed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximum?: number;
};

/** A domain specific resource identifier. */
export declare type Identifier = ProxyOnlyResource & {
    /** String representation of the identity. */
    value?: string;
};

/** Collection of identifiers. */
export declare interface IdentifierCollection {
    /** Collection of resources. */
    value: Identifier[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for InAvailabilityReasonType. \
 * {@link KnownInAvailabilityReasonType} can be used interchangeably with InAvailabilityReasonType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export declare type InAvailabilityReasonType = string;

/** The IP Addresses and Ports that require inbound network access to and within the subnet of the App Service Environment. */
export declare interface InboundEnvironmentEndpoint {
    /** Short text describing the purpose of the network traffic. */
    description?: string;
    /** The IP addresses that network traffic will originate from in cidr notation. */
    endpoints?: string[];
    /** The ports that network traffic will arrive to the App Service Environment at. */
    ports?: string[];
}

/** Collection of Inbound Environment Endpoints */
export declare interface InboundEnvironmentEndpointCollection {
    /** Collection of resources. */
    value: InboundEnvironmentEndpoint[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for InternalLoadBalancingMode. */
export declare type InternalLoadBalancingMode = "None" | "Web" | "Publishing";

/** Defines values for IpFilterTag. */
export declare type IpFilterTag = "Default" | "XffProxy";

/** IP security restriction on an app. */
export declare interface IpSecurityRestriction {
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
}

/** Defines values for IssueType. */
export declare type IssueType = "ServiceIncident" | "AppDeployment" | "AppCrash" | "RuntimeIssueDetected" | "AseDeployment" | "UserIssue" | "PlatformIssue" | "Other";

/** Function key info. */
export declare interface KeyInfo {
    /** Key name */
    name?: string;
    /** Key value */
    value?: string;
}

/** Web app key vault reference and status ARM resource. */
export declare type KeyVaultReferenceCollection = ProxyOnlyResource & {
    /** Dictionary of <ApiKVReference> */
    keyToReferenceStatuses?: {
        [propertyName: string]: ApiKVReference;
    };
};

/** Web app key vault reference and status ARM resource. */
export declare type KeyVaultReferenceResource = ProxyOnlyResource & {
    reference?: string;
    status?: ResolveStatus;
    vaultName?: string;
    secretName?: string;
    secretVersion?: string;
    /** Type of managed service identity. */
    identityType?: ManagedServiceIdentityType;
    details?: string;
    source?: "KeyVault";
    location?: "ApplicationSetting";
};

/** Defines values for KeyVaultSecretStatus. */
export declare type KeyVaultSecretStatus = "Initialized" | "WaitingOnCertificateOrder" | "Succeeded" | "CertificateOrderFailed" | "OperationNotPermittedOnKeyVault" | "AzureServiceUnauthorizedToAccessKeyVault" | "KeyVaultDoesNotExist" | "KeyVaultSecretDoesNotExist" | "UnknownError" | "ExternalPrivateKey" | "Unknown";

/** Known values of {@link AppServiceCertificateOrderPatchResourcePropertiesAppServiceCertificateNotRenewableReasonsItem} that the service accepts. */
export declare enum KnownAppServiceCertificateOrderPatchResourcePropertiesAppServiceCertificateNotRenewableReasonsItem {
    RegistrationStatusNotSupportedForRenewal = "RegistrationStatusNotSupportedForRenewal",
    ExpirationNotInRenewalTimeRange = "ExpirationNotInRenewalTimeRange",
    SubscriptionNotActive = "SubscriptionNotActive"
}

/** Known values of {@link AppServiceCertificateOrderPropertiesAppServiceCertificateNotRenewableReasonsItem} that the service accepts. */
export declare enum KnownAppServiceCertificateOrderPropertiesAppServiceCertificateNotRenewableReasonsItem {
    RegistrationStatusNotSupportedForRenewal = "RegistrationStatusNotSupportedForRenewal",
    ExpirationNotInRenewalTimeRange = "ExpirationNotInRenewalTimeRange",
    SubscriptionNotActive = "SubscriptionNotActive"
}

/** Known values of {@link BuildStatus} that the service accepts. */
export declare enum KnownBuildStatus {
    WaitingForDeployment = "WaitingForDeployment",
    Uploading = "Uploading",
    Deploying = "Deploying",
    Ready = "Ready",
    Failed = "Failed",
    Deleting = "Deleting",
    Detached = "Detached"
}

/** Known values of {@link CheckNameResourceTypes} that the service accepts. */
export declare enum KnownCheckNameResourceTypes {
    Site = "Site",
    Slot = "Slot",
    HostingEnvironment = "HostingEnvironment",
    PublishingUser = "PublishingUser",
    MicrosoftWebSites = "Microsoft.Web/sites",
    MicrosoftWebSitesSlots = "Microsoft.Web/sites/slots",
    MicrosoftWebHostingEnvironments = "Microsoft.Web/hostingEnvironments",
    MicrosoftWebPublishingUsers = "Microsoft.Web/publishingUsers"
}

/** Known values of {@link DatabaseType} that the service accepts. */
export declare enum KnownDatabaseType {
    SqlAzure = "SqlAzure",
    MySql = "MySql",
    LocalMySql = "LocalMySql",
    PostgreSql = "PostgreSql"
}

/** Known values of {@link DomainPatchResourcePropertiesDomainNotRenewableReasonsItem} that the service accepts. */
export declare enum KnownDomainPatchResourcePropertiesDomainNotRenewableReasonsItem {
    RegistrationStatusNotSupportedForRenewal = "RegistrationStatusNotSupportedForRenewal",
    ExpirationNotInRenewalTimeRange = "ExpirationNotInRenewalTimeRange",
    SubscriptionNotActive = "SubscriptionNotActive"
}

/** Known values of {@link DomainPropertiesDomainNotRenewableReasonsItem} that the service accepts. */
export declare enum KnownDomainPropertiesDomainNotRenewableReasonsItem {
    RegistrationStatusNotSupportedForRenewal = "RegistrationStatusNotSupportedForRenewal",
    ExpirationNotInRenewalTimeRange = "ExpirationNotInRenewalTimeRange",
    SubscriptionNotActive = "SubscriptionNotActive"
}

/** Known values of {@link Enum4} that the service accepts. */
export declare enum KnownEnum4 {
    Windows = "Windows",
    Linux = "Linux",
    WindowsFunctions = "WindowsFunctions",
    LinuxFunctions = "LinuxFunctions"
}

/** Known values of {@link Enum5} that the service accepts. */
export declare enum KnownEnum5 {
    Windows = "Windows",
    Linux = "Linux",
    WindowsFunctions = "WindowsFunctions",
    LinuxFunctions = "LinuxFunctions"
}

/** Known values of {@link FtpsState} that the service accepts. */
export declare enum KnownFtpsState {
    AllAllowed = "AllAllowed",
    FtpsOnly = "FtpsOnly",
    Disabled = "Disabled"
}

/** Known values of {@link InAvailabilityReasonType} that the service accepts. */
export declare enum KnownInAvailabilityReasonType {
    Invalid = "Invalid",
    AlreadyExists = "AlreadyExists"
}

/** Known values of {@link PublishingProfileFormat} that the service accepts. */
export declare enum KnownPublishingProfileFormat {
    FileZilla3 = "FileZilla3",
    WebDeploy = "WebDeploy",
    Ftp = "Ftp"
}

/** Known values of {@link ResourceScopeType} that the service accepts. */
export declare enum KnownResourceScopeType {
    ServerFarm = "ServerFarm",
    Subscription = "Subscription",
    WebSite = "WebSite"
}

/** Known values of {@link RouteType} that the service accepts. */
export declare enum KnownRouteType {
    Default = "DEFAULT",
    Inherited = "INHERITED",
    Static = "STATIC"
}

/** Known values of {@link ScmType} that the service accepts. */
export declare enum KnownScmType {
    None = "None",
    Dropbox = "Dropbox",
    Tfs = "Tfs",
    LocalGit = "LocalGit",
    GitHub = "GitHub",
    CodePlexGit = "CodePlexGit",
    CodePlexHg = "CodePlexHg",
    BitbucketGit = "BitbucketGit",
    BitbucketHg = "BitbucketHg",
    ExternalGit = "ExternalGit",
    ExternalHg = "ExternalHg",
    OneDrive = "OneDrive",
    VSO = "VSO",
    Vstsrm = "VSTSRM"
}

/** Known values of {@link SkuName} that the service accepts. */
export declare enum KnownSkuName {
    Free = "Free",
    Shared = "Shared",
    Basic = "Basic",
    Standard = "Standard",
    Premium = "Premium",
    Dynamic = "Dynamic",
    Isolated = "Isolated",
    PremiumV2 = "PremiumV2",
    ElasticPremium = "ElasticPremium",
    ElasticIsolated = "ElasticIsolated"
}

/** Known values of {@link SupportedTlsVersions} that the service accepts. */
export declare enum KnownSupportedTlsVersions {
    One0 = "1.0",
    One1 = "1.1",
    One2 = "1.2"
}

/** Known values of {@link TriggerTypes} that the service accepts. */
export declare enum KnownTriggerTypes {
    HttpTrigger = "HttpTrigger",
    Unknown = "Unknown"
}

/** Known values of {@link ValidateResourceTypes} that the service accepts. */
export declare enum KnownValidateResourceTypes {
    ServerFarm = "ServerFarm",
    Site = "Site"
}

/** Localizable string object containing the name and a localized value. */
export declare interface LocalizableString {
    /** Non-localized name. */
    value?: string;
    /** Localized name. */
    localizedValue?: string;
}

/** Defines values for LogLevel. */
export declare type LogLevel = "Off" | "Verbose" | "Information" | "Warning" | "Error";

/** Log Definition of a single resource metric. */
export declare interface LogSpecification {
    name?: string;
    displayName?: string;
    blobDuration?: string;
}

/** Defines values for ManagedPipelineMode. */
export declare type ManagedPipelineMode = "Integrated" | "Classic";

/** Managed service identity. */
export declare interface ManagedServiceIdentity {
    /** Type of managed service identity. */
    type?: ManagedServiceIdentityType;
    /**
     * Tenant of managed service identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /**
     * Principal Id of managed service identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
    userAssignedIdentities?: {
        [propertyName: string]: Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties;
    };
}

/** Defines values for ManagedServiceIdentityType. */
export declare type ManagedServiceIdentityType = "None" | "SystemAssigned" | "UserAssigned";

/** Retention policy of a resource metric. */
export declare interface MetricAvailability {
    timeGrain?: string;
    blobDuration?: string;
}

/** Definition of a single resource metric. */
export declare interface MetricSpecification {
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
}

/** MySQL migration request. */
export declare type MigrateMySqlRequest = ProxyOnlyResource & {
    /** Connection string to the remote MySQL database. */
    connectionString?: string;
    /** The type of migration operation to be done */
    migrationType?: MySqlMigrationType;
};

/** MySQL migration status. */
export declare type MigrateMySqlStatus = ProxyOnlyResource & {
    /**
     * Status of the migration task.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly migrationOperationStatus?: OperationStatus;
    /**
     * Operation ID for the migration task.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationId?: string;
    /**
     * True if the web app has in app MySql enabled
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly localMySqlEnabled?: boolean;
};

/** MSDeploy ARM PUT information */
export declare type MSDeploy = ProxyOnlyResource & {
    /** Package URI */
    packageUri?: string;
    /** SQL Connection String */
    connectionString?: string;
    /** Database Type */
    dbType?: string;
    /** URI of MSDeploy Parameters file. Must not be set if SetParameters is used. */
    setParametersXmlFileUri?: string;
    /** MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. */
    setParameters?: {
        [propertyName: string]: string;
    };
    /**
     * Controls whether the MSDeploy operation skips the App_Data directory.
     * If set to <code>true</code>, the existing App_Data directory on the destination
     * will not be deleted, and any App_Data directory in the source will be ignored.
     * Setting is <code>false</code> by default.
     */
    skipAppData?: boolean;
    /**
     * Sets the AppOffline rule while the MSDeploy operation executes.
     * Setting is <code>false</code> by default.
     */
    appOffline?: boolean;
};

/** MSDeploy log */
export declare type MSDeployLog = ProxyOnlyResource & {
    /**
     * List of log entry messages
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly entries?: MSDeployLogEntry[];
};

/** MSDeploy log entry */
export declare interface MSDeployLogEntry {
    /**
     * Timestamp of log entry
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly time?: Date;
    /**
     * Log entry type
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: MSDeployLogEntryType;
    /**
     * Log entry message
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
}

/** Defines values for MSDeployLogEntryType. */
export declare type MSDeployLogEntryType = "Message" | "Warning" | "Error";

/** Defines values for MSDeployProvisioningState. */
export declare type MSDeployProvisioningState = "accepted" | "running" | "succeeded" | "failed" | "canceled";

/** MSDeploy ARM response */
export declare type MSDeployStatus = ProxyOnlyResource & {
    /**
     * Username of deployer
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deployer?: string;
    /**
     * Provisioning state
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: MSDeployProvisioningState;
    /**
     * Start time of deploy operation
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * End time of deploy operation
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTime?: Date;
    /**
     * Whether the deployment operation has completed
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly complete?: boolean;
};

/** Defines values for MySqlMigrationType. */
export declare type MySqlMigrationType = "LocalToRemote" | "RemoteToLocal";

/** Identifies an object. */
export declare interface NameIdentifier {
    /** Name of the object. */
    name?: string;
}

/** Collection of domain name identifiers. */
export declare interface NameIdentifierCollection {
    /** Collection of resources. */
    value: NameIdentifier[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Name value pair. */
export declare interface NameValuePair {
    /** Pair name. */
    name?: string;
    /** Pair value. */
    value?: string;
}

/** Network access control entry. */
export declare interface NetworkAccessControlEntry {
    /** Action object. */
    action?: AccessControlEntryAction;
    /** Description of network access control entry. */
    description?: string;
    /** Order of precedence. */
    order?: number;
    /** Remote subnet. */
    remoteSubnet?: string;
}

/** Full view of network features for an app (presently VNET integration and Hybrid Connections). */
export declare type NetworkFeatures = ProxyOnlyResource & {
    /**
     * The Virtual Network name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualNetworkName?: string;
    /**
     * The Virtual Network summary view.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualNetworkConnection?: VnetInfo;
    /**
     * The Hybrid Connections summary view.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hybridConnections?: RelayServiceConnectionEntity[];
    /**
     * The Hybrid Connection V2 (Service Bus) view.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hybridConnectionsV2?: HybridConnection[];
};

/** Network trace */
export declare interface NetworkTrace {
    /** Local file path for the captured network trace file. */
    path?: string;
    /** Current status of the network trace operation, same as Operation.Status (InProgress/Succeeded/Failed). */
    status?: string;
    /** Detailed message of a network trace operation, e.g. error message in case of failure. */
    message?: string;
}

/** Defines values for NotificationLevel. */
export declare type NotificationLevel = "Critical" | "Warning" | "Information" | "NonUrgentSuggestion";

/** An operation on a resource. */
export declare interface Operation {
    /** Operation ID. */
    id?: string;
    /** Operation name. */
    name?: string;
    /** The current status of the operation. */
    status?: OperationStatus;
    /** Any errors associate with the operation. */
    errors?: ErrorEntity[];
    /** Time when operation has started. */
    createdTime?: Date;
    /** Time when operation has been updated. */
    modifiedTime?: Date;
    /** Time when operation will expire. */
    expirationTime?: Date;
    /** Applicable only for stamp operation ids. */
    geoMasterOperationId?: string;
}

/** Defines values for OperationStatus. */
export declare type OperationStatus = "InProgress" | "Failed" | "Succeeded" | "TimedOut" | "Created";

/** Endpoints accessed for a common purpose that the App Service Environment requires outbound network access to. */
export declare interface OutboundEnvironmentEndpoint {
    /** The type of service accessed by the App Service Environment, e.g., Azure Storage, Azure SQL Database, and Azure Active Directory. */
    category?: string;
    /** The endpoints that the App Service Environment reaches the service at. */
    endpoints?: EndpointDependency[];
}

/** Collection of Outbound Environment Endpoints */
export declare interface OutboundEnvironmentEndpointCollection {
    /** Collection of resources. */
    value: OutboundEnvironmentEndpoint[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Collection of performance monitor counters. */
export declare interface PerfMonCounterCollection {
    /** Collection of resources. */
    value: PerfMonResponse[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Performance monitor API response. */
export declare interface PerfMonResponse {
    /** The response code. */
    code?: string;
    /** The message. */
    message?: string;
    /** The performance monitor counters. */
    data?: PerfMonSet;
}

/** Performance monitor sample in a set. */
export declare interface PerfMonSample {
    /** Point in time for which counter was measured. */
    time?: Date;
    /** Name of the server on which the measurement is made. */
    instanceName?: string;
    /** Value of counter at a certain time. */
    value?: number;
}

/** Metric information. */
export declare interface PerfMonSet {
    /** Unique key name of the counter. */
    name?: string;
    /** Start time of the period. */
    startTime?: Date;
    /** End time of the period. */
    endTime?: Date;
    /** Presented time grain. */
    timeGrain?: string;
    /** Collection of workers that are active during this time. */
    values?: PerfMonSample[];
}

/** Premier add-on. */
export declare type PremierAddOn = Resource & {
    /** Premier add on SKU. */
    sku?: string;
    /** Premier add on Product. */
    product?: string;
    /** Premier add on Vendor. */
    vendor?: string;
    /** Premier add on Marketplace publisher. */
    marketplacePublisher?: string;
    /** Premier add on Marketplace offer. */
    marketplaceOffer?: string;
};

/** Premier add-on offer. */
export declare type PremierAddOnOffer = ProxyOnlyResource & {
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
};

/** Collection of premier add-on offers. */
export declare interface PremierAddOnOfferCollection {
    /** Collection of resources. */
    value: PremierAddOnOffer[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** ARM resource for a PremierAddOn. */
export declare type PremierAddOnPatchResource = ProxyOnlyResource & {
    /** Premier add on SKU. */
    sku?: string;
    /** Premier add on Product. */
    product?: string;
    /** Premier add on Vendor. */
    vendor?: string;
    /** Premier add on Marketplace publisher. */
    marketplacePublisher?: string;
    /** Premier add on Marketplace offer. */
    marketplaceOffer?: string;
};

/** Description of the parameters of Private Access for a Web Site. */
export declare type PrivateAccess = ProxyOnlyResource & {
    /** Whether private access is enabled or not. */
    enabled?: boolean;
    /** The Virtual Networks (and subnets) allowed to access the site privately. */
    virtualNetworks?: PrivateAccessVirtualNetwork[];
};

/** Description of a Virtual Network subnet that is useable for private site access. */
export declare interface PrivateAccessSubnet {
    /** The name of the subnet. */
    name?: string;
    /** The key (ID) of the subnet. */
    key?: number;
}

/** Description of a Virtual Network that is useable for private site access. */
export declare interface PrivateAccessVirtualNetwork {
    /** The name of the Virtual Network. */
    name?: string;
    /** The key (ID) of the Virtual Network. */
    key?: number;
    /** The ARM uri of the Virtual Network */
    resourceId?: string;
    /** A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network. */
    subnets?: PrivateAccessSubnet[];
}

/** Private Endpoint Connection ARM resource. */
export declare type PrivateEndpointConnectionResource = ProxyOnlyResource & {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly provisioningState?: string;
    /** PrivateEndpoint of a remote private endpoint connection */
    privateEndpoint?: ArmIdWrapper;
    /** The state of a private link connection */
    privateLinkServiceConnectionState?: PrivateLinkConnectionState;
};

/** Private Endpoint Connection Approval ARM resource. */
export declare type PrivateLinkConnectionApprovalRequestResource = ProxyOnlyResource & {
    /** The state of a private link connection */
    privateLinkServiceConnectionState?: PrivateLinkConnectionState;
};

/** The state of a private link connection */
export declare interface PrivateLinkConnectionState {
    /** Status of a private link connection */
    status?: string;
    /** Description of a private link connection */
    description?: string;
    /** ActionsRequired for a private link connection */
    actionsRequired?: string;
}

/** A private link resource */
export declare interface PrivateLinkResource {
    id: string;
    /** Name of a private link resource */
    name: string;
    type: string;
    /** Properties of a private link resource */
    properties: PrivateLinkResourceProperties;
}

/** Properties of a private link resource */
export declare interface PrivateLinkResourceProperties {
    /**
     * GroupId of a private link resource
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly groupId?: string;
    /**
     * RequiredMembers of a private link resource
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requiredMembers?: string[];
    /**
     * RequiredZoneNames of a private link resource
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requiredZoneNames?: string[];
}

/** Wrapper for a collection of private link resources */
export declare interface PrivateLinkResourcesWrapper {
    value: PrivateLinkResource[];
}

/** Process Information. */
export declare type ProcessInfo = ProxyOnlyResource & {
    /**
     * ARM Identifier for deployment.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly identifier?: number;
    /** Deployment name. */
    deploymentName?: string;
    /** HRef URI. */
    href?: string;
    /** Minidump URI. */
    minidump?: string;
    /** Is profile running? */
    isProfileRunning?: boolean;
    /** Is the IIS Profile running? */
    isIisProfileRunning?: boolean;
    /** IIS Profile timeout (seconds). */
    iisProfileTimeoutInSeconds?: number;
    /** Parent process. */
    parent?: string;
    /** Child process list. */
    children?: string[];
    /** Thread list. */
    threads?: ProcessThreadInfo[];
    /** List of open files. */
    openFileHandles?: string[];
    /** List of modules. */
    modules?: ProcessModuleInfo[];
    /** File name of this process. */
    fileName?: string;
    /** Command line. */
    commandLine?: string;
    /** User name. */
    userName?: string;
    /** Handle count. */
    handleCount?: number;
    /** Module count. */
    moduleCount?: number;
    /** Thread count. */
    threadCount?: number;
    /** Start time. */
    startTime?: Date;
    /** Total CPU time. */
    totalCpuTime?: string;
    /** User CPU time. */
    userCpuTime?: string;
    /** Privileged CPU time. */
    privilegedCpuTime?: string;
    /** Working set. */
    workingSet?: number;
    /** Peak working set. */
    peakWorkingSet?: number;
    /** Private memory size. */
    privateMemory?: number;
    /** Virtual memory size. */
    virtualMemory?: number;
    /** Peak virtual memory usage. */
    peakVirtualMemory?: number;
    /** Paged system memory. */
    pagedSystemMemory?: number;
    /** Non-paged system memory. */
    nonPagedSystemMemory?: number;
    /** Paged memory. */
    pagedMemory?: number;
    /** Peak paged memory. */
    peakPagedMemory?: number;
    /** Time stamp. */
    timeStamp?: Date;
    /** List of environment variables. */
    environmentVariables?: {
        [propertyName: string]: string;
    };
    /** Is this the SCM site? */
    isScmSite?: boolean;
    /** Is this a Web Job? */
    isWebjob?: boolean;
    /** Description of process. */
    description?: string;
};

/** Collection of Kudu process information elements. */
export declare interface ProcessInfoCollection {
    /** Collection of resources. */
    value: ProcessInfo[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Process Module Information. */
export declare type ProcessModuleInfo = ProxyOnlyResource & {
    /** Base address. Used as module identifier in ARM resource URI. */
    baseAddress?: string;
    /** File name. */
    fileName?: string;
    /** HRef URI. */
    href?: string;
    /** File path. */
    filePath?: string;
    /** Module memory size. */
    moduleMemorySize?: number;
    /** File version. */
    fileVersion?: string;
    /** File description. */
    fileDescription?: string;
    /** Product name. */
    product?: string;
    /** Product version. */
    productVersion?: string;
    /** Is debug? */
    isDebug?: boolean;
    /** Module language (locale). */
    language?: string;
};

/** Collection of Kudu thread information elements. */
export declare interface ProcessModuleInfoCollection {
    /** Collection of resources. */
    value: ProcessModuleInfo[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Process Thread Information. */
export declare type ProcessThreadInfo = ProxyOnlyResource & {
    /**
     * Site extension ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly identifier?: number;
    /** HRef URI. */
    href?: string;
    /** Process URI. */
    process?: string;
    /** Start address. */
    startAddress?: string;
    /** Current thread priority. */
    currentPriority?: number;
    /** Thread priority level. */
    priorityLevel?: string;
    /** Base priority. */
    basePriority?: number;
    /** Start time. */
    startTime?: Date;
    /** Total processor time. */
    totalProcessorTime?: string;
    /** User processor time. */
    userProcessorTime?: string;
    /** Thread state. */
    state?: string;
    /** Wait reason. */
    waitReason?: string;
};

/** Collection of Kudu thread information elements. */
export declare interface ProcessThreadInfoCollection {
    /** Collection of resources. */
    value: ProcessThreadInfo[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a Provider. */
export declare interface Provider {
    /**
     * Description for Get available application frameworks and their versions
     * @param options The options parameters.
     */
    listAvailableStacks(options?: ProviderGetAvailableStacksOptionalParams): PagedAsyncIterableIterator<ApplicationStackResource>;
    /**
     * Description for Gets all available operations for the Microsoft.Web resource provider. Also exposes
     * resource metric definitions
     * @param options The options parameters.
     */
    listOperations(options?: ProviderListOperationsOptionalParams): PagedAsyncIterableIterator<CsmOperationDescription>;
    /**
     * Description for Get available application frameworks and their versions
     * @param options The options parameters.
     */
    listAvailableStacksOnPrem(options?: ProviderGetAvailableStacksOnPremOptionalParams): PagedAsyncIterableIterator<ApplicationStackResource>;
}

/** Optional parameters. */
export declare interface ProviderGetAvailableStacksNextOptionalParams extends coreClient.OperationOptions {
    osTypeSelected?: Enum4;
}

/** Contains response data for the getAvailableStacksNext operation. */
export declare type ProviderGetAvailableStacksNextResponse = ApplicationStackCollection;

/** Optional parameters. */
export declare interface ProviderGetAvailableStacksOnPremNextOptionalParams extends coreClient.OperationOptions {
    osTypeSelected?: Enum5;
}

/** Contains response data for the getAvailableStacksOnPremNext operation. */
export declare type ProviderGetAvailableStacksOnPremNextResponse = ApplicationStackCollection;

/** Optional parameters. */
export declare interface ProviderGetAvailableStacksOnPremOptionalParams extends coreClient.OperationOptions {
    osTypeSelected?: Enum5;
}

/** Contains response data for the getAvailableStacksOnPrem operation. */
export declare type ProviderGetAvailableStacksOnPremResponse = ApplicationStackCollection;

/** Optional parameters. */
export declare interface ProviderGetAvailableStacksOptionalParams extends coreClient.OperationOptions {
    osTypeSelected?: Enum4;
}

/** Contains response data for the getAvailableStacks operation. */
export declare type ProviderGetAvailableStacksResponse = ApplicationStackCollection;

/** Optional parameters. */
export declare interface ProviderListOperationsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNext operation. */
export declare type ProviderListOperationsNextResponse = CsmOperationCollection;

/** Optional parameters. */
export declare interface ProviderListOperationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperations operation. */
export declare type ProviderListOperationsResponse = CsmOperationCollection;

/** Defines values for ProvisioningState. */
export declare type ProvisioningState = "Succeeded" | "Failed" | "Canceled" | "InProgress" | "Deleting";

/** Azure proxy only resource. This resource is not tracked by Azure Resource Manager. */
export declare interface ProxyOnlyResource {
    /**
     * Resource Id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Resource Name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /** Kind of resource. */
    kind?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
}

/** Public certificate object */
export declare type PublicCertificate = ProxyOnlyResource & {
    /** Public Certificate byte array */
    blob?: Uint8Array;
    /** Public Certificate Location */
    publicCertificateLocation?: PublicCertificateLocation;
    /**
     * Certificate Thumbprint
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly thumbprint?: string;
};

/** Collection of public certificates */
export declare interface PublicCertificateCollection {
    /** Collection of resources. */
    value: PublicCertificate[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for PublicCertificateLocation. */
export declare type PublicCertificateLocation = "CurrentUserMy" | "LocalMachineMy" | "Unknown";

/**
 * Defines values for PublishingProfileFormat. \
 * {@link KnownPublishingProfileFormat} can be used interchangeably with PublishingProfileFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FileZilla3** \
 * **WebDeploy** \
 * **Ftp**
 */
export declare type PublishingProfileFormat = string;

/** Push settings for the App. */
export declare type PushSettings = ProxyOnlyResource & {
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
};

/** Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance. */
export declare interface RampUpRule {
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
    /**
     * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
     * https://www.siteextensions.net/packages/TiPCallback/
     */
    changeDecisionCallbackUrl?: string;
    /** Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. */
    name?: string;
}

/** Represents a recommendation result generated by the recommendation engine. */
export declare type Recommendation = ProxyOnlyResource & {
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
    /**
     * The list of category tags that this recommendation belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
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
};

/** Collection of recommendations. */
export declare interface RecommendationCollection {
    /** Collection of resources. */
    value: Recommendation[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Represents a recommendation rule that the recommendation engine can perform. */
export declare type RecommendationRule = ProxyOnlyResource & {
    /** Unique name of the rule. */
    recommendationName?: string;
    /** UI friendly name of the rule. */
    displayName?: string;
    /** Localized name of the rule (Good for UI). */
    message?: string;
    /**
     * Recommendation ID of an associated recommendation object tied to the rule, if exists.
     * If such an object doesn't exist, it is set to null.
     */
    recommendationId?: string;
    /** Localized detailed description of the rule. */
    description?: string;
    /** Name of action that is recommended by this rule in string. */
    actionName?: string;
    /** Level of impact indicating how critical this rule is. */
    level?: NotificationLevel;
    /** List of available channels that this rule applies. */
    channels?: Channels;
    /**
     * The list of category tags that this recommendation rule belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly categoryTags?: string[];
    /** True if this is associated with a dynamically added rule */
    isDynamic?: boolean;
    /** Extension name of the portal if exists. Applicable to dynamic rule only. */
    extensionName?: string;
    /** Deep link to a blade on the portal. Applicable to dynamic rule only. */
    bladeName?: string;
    /** Forward link to an external document associated with the rule. Applicable to dynamic rule only. */
    forwardLink?: string;
};

/** Interface representing a Recommendations. */
export declare interface Recommendations {
    /**
     * Description for List all recommendations for a subscription.
     * @param options The options parameters.
     */
    list(options?: RecommendationsListOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    /**
     * Description for Get past recommendations for an app, optionally specified by the time range.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the hosting environment.
     * @param options The options parameters.
     */
    listHistoryForHostingEnvironment(resourceGroupName: string, hostingEnvironmentName: string, options?: RecommendationsListHistoryForHostingEnvironmentOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    /**
     * Description for Get all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the app.
     * @param options The options parameters.
     */
    listRecommendedRulesForHostingEnvironment(resourceGroupName: string, hostingEnvironmentName: string, options?: RecommendationsListRecommendedRulesForHostingEnvironmentOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    /**
     * Description for Get past recommendations for an app, optionally specified by the time range.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    listHistoryForWebApp(resourceGroupName: string, siteName: string, options?: RecommendationsListHistoryForWebAppOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    /**
     * Description for Get all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    listRecommendedRulesForWebApp(resourceGroupName: string, siteName: string, options?: RecommendationsListRecommendedRulesForWebAppOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    /**
     * Description for Reset all recommendation opt-out settings for a subscription.
     * @param options The options parameters.
     */
    resetAllFilters(options?: RecommendationsResetAllFiltersOptionalParams): Promise<void>;
    /**
     * Description for Disables the specified rule so it will not apply to a subscription in the future.
     * @param name Rule name
     * @param options The options parameters.
     */
    disableRecommendationForSubscription(name: string, options?: RecommendationsDisableRecommendationForSubscriptionOptionalParams): Promise<void>;
    /**
     * Description for Disable all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param environmentName Name of the app.
     * @param hostingEnvironmentName
     * @param options The options parameters.
     */
    disableAllForHostingEnvironment(resourceGroupName: string, environmentName: string, hostingEnvironmentName: string, options?: RecommendationsDisableAllForHostingEnvironmentOptionalParams): Promise<void>;
    /**
     * Description for Reset all recommendation opt-out settings for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param environmentName Name of the app.
     * @param hostingEnvironmentName
     * @param options The options parameters.
     */
    resetAllFiltersForHostingEnvironment(resourceGroupName: string, environmentName: string, hostingEnvironmentName: string, options?: RecommendationsResetAllFiltersForHostingEnvironmentOptionalParams): Promise<void>;
    /**
     * Description for Get a recommendation rule for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the hosting environment.
     * @param name Name of the recommendation.
     * @param options The options parameters.
     */
    getRuleDetailsByHostingEnvironment(resourceGroupName: string, hostingEnvironmentName: string, name: string, options?: RecommendationsGetRuleDetailsByHostingEnvironmentOptionalParams): Promise<RecommendationsGetRuleDetailsByHostingEnvironmentResponse>;
    /**
     * Description for Disables the specific rule for a web site permanently.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param environmentName Site name
     * @param name Rule name
     * @param hostingEnvironmentName
     * @param options The options parameters.
     */
    disableRecommendationForHostingEnvironment(resourceGroupName: string, environmentName: string, name: string, hostingEnvironmentName: string, options?: RecommendationsDisableRecommendationForHostingEnvironmentOptionalParams): Promise<void>;
    /**
     * Description for Disable all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    disableAllForWebApp(resourceGroupName: string, siteName: string, options?: RecommendationsDisableAllForWebAppOptionalParams): Promise<void>;
    /**
     * Description for Reset all recommendation opt-out settings for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    resetAllFiltersForWebApp(resourceGroupName: string, siteName: string, options?: RecommendationsResetAllFiltersForWebAppOptionalParams): Promise<void>;
    /**
     * Description for Get a recommendation rule for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param name Name of the recommendation.
     * @param options The options parameters.
     */
    getRuleDetailsByWebApp(resourceGroupName: string, siteName: string, name: string, options?: RecommendationsGetRuleDetailsByWebAppOptionalParams): Promise<RecommendationsGetRuleDetailsByWebAppResponse>;
    /**
     * Description for Disables the specific rule for a web site permanently.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site name
     * @param name Rule name
     * @param options The options parameters.
     */
    disableRecommendationForSite(resourceGroupName: string, siteName: string, name: string, options?: RecommendationsDisableRecommendationForSiteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface RecommendationsDisableAllForHostingEnvironmentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface RecommendationsDisableAllForWebAppOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface RecommendationsDisableRecommendationForHostingEnvironmentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface RecommendationsDisableRecommendationForSiteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface RecommendationsDisableRecommendationForSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface RecommendationsGetRuleDetailsByHostingEnvironmentOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to update the last-seen timestamp of the recommendation object. */
    updateSeen?: boolean;
    /** The GUID of the recommendation object if you query an expired one. You don't need to specify it to query an active entry. */
    recommendationId?: string;
}

/** Contains response data for the getRuleDetailsByHostingEnvironment operation. */
export declare type RecommendationsGetRuleDetailsByHostingEnvironmentResponse = RecommendationRule;

/** Optional parameters. */
export declare interface RecommendationsGetRuleDetailsByWebAppOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to update the last-seen timestamp of the recommendation object. */
    updateSeen?: boolean;
    /** The GUID of the recommendation object if you query an expired one. You don't need to specify it to query an active entry. */
    recommendationId?: string;
}

/** Contains response data for the getRuleDetailsByWebApp operation. */
export declare type RecommendationsGetRuleDetailsByWebAppResponse = RecommendationRule;

/** Optional parameters. */
export declare interface RecommendationsListHistoryForHostingEnvironmentNextOptionalParams extends coreClient.OperationOptions {
    /** Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[PT1H|PT1M|P1D] */
    filter?: string;
    /** Specify <code>false</code> to return all recommendations. The default is <code>true</code>, which returns only expired recommendations. */
    expiredOnly?: boolean;
}

/** Contains response data for the listHistoryForHostingEnvironmentNext operation. */
export declare type RecommendationsListHistoryForHostingEnvironmentNextResponse = RecommendationCollection;

/** Optional parameters. */
export declare interface RecommendationsListHistoryForHostingEnvironmentOptionalParams extends coreClient.OperationOptions {
    /** Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[PT1H|PT1M|P1D] */
    filter?: string;
    /** Specify <code>false</code> to return all recommendations. The default is <code>true</code>, which returns only expired recommendations. */
    expiredOnly?: boolean;
}

/** Contains response data for the listHistoryForHostingEnvironment operation. */
export declare type RecommendationsListHistoryForHostingEnvironmentResponse = RecommendationCollection;

/** Optional parameters. */
export declare interface RecommendationsListHistoryForWebAppNextOptionalParams extends coreClient.OperationOptions {
    /** Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[PT1H|PT1M|P1D] */
    filter?: string;
    /** Specify <code>false</code> to return all recommendations. The default is <code>true</code>, which returns only expired recommendations. */
    expiredOnly?: boolean;
}

/** Contains response data for the listHistoryForWebAppNext operation. */
export declare type RecommendationsListHistoryForWebAppNextResponse = RecommendationCollection;

/** Optional parameters. */
export declare interface RecommendationsListHistoryForWebAppOptionalParams extends coreClient.OperationOptions {
    /** Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[PT1H|PT1M|P1D] */
    filter?: string;
    /** Specify <code>false</code> to return all recommendations. The default is <code>true</code>, which returns only expired recommendations. */
    expiredOnly?: boolean;
}

/** Contains response data for the listHistoryForWebApp operation. */
export declare type RecommendationsListHistoryForWebAppResponse = RecommendationCollection;

/** Optional parameters. */
export declare interface RecommendationsListNextOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations. */
    featured?: boolean;
    /** Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[PT1H|PT1M|P1D] */
    filter?: string;
}

/** Contains response data for the listNext operation. */
export declare type RecommendationsListNextResponse = RecommendationCollection;

/** Optional parameters. */
export declare interface RecommendationsListOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations. */
    featured?: boolean;
    /** Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[PT1H|PT1M|P1D] */
    filter?: string;
}

/** Optional parameters. */
export declare interface RecommendationsListRecommendedRulesForHostingEnvironmentNextOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations. */
    featured?: boolean;
    /** Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' */
    filter?: string;
}

/** Contains response data for the listRecommendedRulesForHostingEnvironmentNext operation. */
export declare type RecommendationsListRecommendedRulesForHostingEnvironmentNextResponse = RecommendationCollection;

/** Optional parameters. */
export declare interface RecommendationsListRecommendedRulesForHostingEnvironmentOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations. */
    featured?: boolean;
    /** Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' */
    filter?: string;
}

/** Contains response data for the listRecommendedRulesForHostingEnvironment operation. */
export declare type RecommendationsListRecommendedRulesForHostingEnvironmentResponse = RecommendationCollection;

/** Optional parameters. */
export declare interface RecommendationsListRecommendedRulesForWebAppNextOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations. */
    featured?: boolean;
    /** Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' */
    filter?: string;
}

/** Contains response data for the listRecommendedRulesForWebAppNext operation. */
export declare type RecommendationsListRecommendedRulesForWebAppNextResponse = RecommendationCollection;

/** Optional parameters. */
export declare interface RecommendationsListRecommendedRulesForWebAppOptionalParams extends coreClient.OperationOptions {
    /** Specify <code>true</code> to return only the most critical recommendations. The default is <code>false</code>, which returns all recommendations. */
    featured?: boolean;
    /** Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channel eq 'Api' or channel eq 'Notification' */
    filter?: string;
}

/** Contains response data for the listRecommendedRulesForWebApp operation. */
export declare type RecommendationsListRecommendedRulesForWebAppResponse = RecommendationCollection;

/** Contains response data for the list operation. */
export declare type RecommendationsListResponse = RecommendationCollection;

/** Optional parameters. */
export declare interface RecommendationsResetAllFiltersForHostingEnvironmentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface RecommendationsResetAllFiltersForWebAppOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface RecommendationsResetAllFiltersOptionalParams extends coreClient.OperationOptions {
}

/** Defines values for RedundancyMode. */
export declare type RedundancyMode = "None" | "Manual" | "Failover" | "ActiveActive" | "GeoRedundant";

/** Class representing certificate reissue request. */
export declare type ReissueCertificateOrderRequest = ProxyOnlyResource & {
    /** Certificate Key Size. */
    keySize?: number;
    /** Delay in hours to revoke existing certificate after the new certificate is issued. */
    delayExistingRevokeInHours?: number;
    /** Csr to be used for re-key operation. */
    csr?: string;
    /** Should we change the ASC type (from managed private key to external private key and vice versa). */
    isPrivateKeyExternal?: boolean;
};

/** Hybrid Connection for an App Service app. */
export declare type RelayServiceConnectionEntity = ProxyOnlyResource & {
    entityName?: string;
    entityConnectionString?: string;
    resourceType?: string;
    resourceConnectionString?: string;
    hostname?: string;
    port?: number;
    biztalkUri?: string;
};

/** Instructions for rendering the data */
export declare interface Rendering {
    /** Rendering Type */
    type?: RenderingType;
    /** Title of data */
    title?: string;
    /** Description of the data that will help it be interpreted */
    description?: string;
}

/** Defines values for RenderingType. */
export declare type RenderingType = "NoGraph" | "Table" | "TimeSeries" | "TimeSeriesPerInstance";

/** Class representing certificate renew request. */
export declare type RenewCertificateOrderRequest = ProxyOnlyResource & {
    /** Certificate Key Size. */
    keySize?: number;
    /** Csr to be used for re-key operation. */
    csr?: string;
    /** Should we change the ASC type (from managed private key to external private key and vice versa). */
    isPrivateKeyExternal?: boolean;
};

/** Trigger based on total requests. */
export declare interface RequestsBasedTrigger {
    /** Request Count. */
    count?: number;
    /** Time interval. */
    timeInterval?: string;
}

/** Defines values for ResolveStatus. */
export declare type ResolveStatus = "Initialized" | "Resolved" | "InvalidSyntax" | "MSINotEnabled" | "VaultNotFound" | "SecretNotFound" | "SecretVersionNotFound" | "AccessToKeyVaultDenied" | "OtherReasons";

/** Azure resource. This resource is tracked in Azure Resource Manager */
export declare interface Resource {
    /**
     * Resource Id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Resource Name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /** Kind of resource. */
    kind?: string;
    /** Resource Location. */
    location: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Collection of resources. */
export declare interface ResourceCollection {
    /** Collection of resources. */
    value: string[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Used for getting ResourceHealthCheck settings. */
export declare type ResourceHealthMetadata = ProxyOnlyResource & {
    /** The category that the resource matches in the RHC Policy File */
    category?: string;
    /** Is there a health signal for the resource */
    signalAvailability?: boolean;
};

/** Collection of resource health metadata. */
export declare interface ResourceHealthMetadataCollection {
    /** Collection of resources. */
    value: ResourceHealthMetadata[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Optional parameters. */
export declare interface ResourceHealthMetadataGetBySiteOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBySite operation. */
export declare type ResourceHealthMetadataGetBySiteResponse = ResourceHealthMetadata;

/** Optional parameters. */
export declare interface ResourceHealthMetadataGetBySiteSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBySiteSlot operation. */
export declare type ResourceHealthMetadataGetBySiteSlotResponse = ResourceHealthMetadata;

/** Optional parameters. */
export declare interface ResourceHealthMetadataListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ResourceHealthMetadataListByResourceGroupNextResponse = ResourceHealthMetadataCollection;

/** Optional parameters. */
export declare interface ResourceHealthMetadataListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ResourceHealthMetadataListByResourceGroupResponse = ResourceHealthMetadataCollection;

/** Optional parameters. */
export declare interface ResourceHealthMetadataListBySiteNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySiteNext operation. */
export declare type ResourceHealthMetadataListBySiteNextResponse = ResourceHealthMetadataCollection;

/** Optional parameters. */
export declare interface ResourceHealthMetadataListBySiteOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySite operation. */
export declare type ResourceHealthMetadataListBySiteResponse = ResourceHealthMetadataCollection;

/** Optional parameters. */
export declare interface ResourceHealthMetadataListBySiteSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySiteSlotNext operation. */
export declare type ResourceHealthMetadataListBySiteSlotNextResponse = ResourceHealthMetadataCollection;

/** Optional parameters. */
export declare interface ResourceHealthMetadataListBySiteSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySiteSlot operation. */
export declare type ResourceHealthMetadataListBySiteSlotResponse = ResourceHealthMetadataCollection;

/** Optional parameters. */
export declare interface ResourceHealthMetadataListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ResourceHealthMetadataListNextResponse = ResourceHealthMetadataCollection;

/** Optional parameters. */
export declare interface ResourceHealthMetadataListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ResourceHealthMetadataListResponse = ResourceHealthMetadataCollection;

/** Interface representing a ResourceHealthMetadataOperations. */
export declare interface ResourceHealthMetadataOperations {
    /**
     * Description for List all ResourceHealthMetadata for all sites in the subscription.
     * @param options The options parameters.
     */
    list(options?: ResourceHealthMetadataListOptionalParams): PagedAsyncIterableIterator<ResourceHealthMetadata>;
    /**
     * Description for List all ResourceHealthMetadata for all sites in the resource group in the
     * subscription.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ResourceHealthMetadataListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ResourceHealthMetadata>;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
     * collection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    listBySite(resourceGroupName: string, name: string, options?: ResourceHealthMetadataListBySiteOptionalParams): PagedAsyncIterableIterator<ResourceHealthMetadata>;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
     * collection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    listBySiteSlot(resourceGroupName: string, name: string, slot: string, options?: ResourceHealthMetadataListBySiteSlotOptionalParams): PagedAsyncIterableIterator<ResourceHealthMetadata>;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app
     * @param options The options parameters.
     */
    getBySite(resourceGroupName: string, name: string, options?: ResourceHealthMetadataGetBySiteOptionalParams): Promise<ResourceHealthMetadataGetBySiteResponse>;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    getBySiteSlot(resourceGroupName: string, name: string, slot: string, options?: ResourceHealthMetadataGetBySiteSlotOptionalParams): Promise<ResourceHealthMetadataGetBySiteSlotResponse>;
}

/** Metrics availability and retention. */
export declare interface ResourceMetricAvailability {
    /**
     * Time grain .
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timeGrain?: string;
    /**
     * Retention period for the current time grain.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly retention?: string;
}

/** Metadata for the metrics. */
export declare type ResourceMetricDefinition = ProxyOnlyResource & {
    /**
     * Unit of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: string;
    /**
     * Primary aggregation type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primaryAggregationType?: string;
    /**
     * List of time grains supported for the metric together with retention period.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly metricAvailabilities?: ResourceMetricAvailability[];
    /**
     * Resource URI.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceUri?: string;
    /**
     * Resource metric definition properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly properties?: {
        [propertyName: string]: string;
    };
};

/** Collection of metric definitions. */
export declare interface ResourceMetricDefinitionCollection {
    /** Collection of resources. */
    value: ResourceMetricDefinition[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Information regarding availability of a resource name. */
export declare interface ResourceNameAvailability {
    /** <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both. */
    nameAvailable?: boolean;
    /** <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable. */
    reason?: InAvailabilityReasonType;
    /** If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name. */
    message?: string;
}

/** Resource name availability request content. */
export declare interface ResourceNameAvailabilityRequest {
    /** Resource name to verify. */
    name: string;
    /** Resource type used for verification. */
    type: CheckNameResourceTypes;
    /** Is fully qualified domain name. */
    isFqdn?: boolean;
}

/**
 * Defines values for ResourceScopeType. \
 * {@link KnownResourceScopeType} can be used interchangeably with ResourceScopeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServerFarm** \
 * **Subscription** \
 * **WebSite**
 */
export declare type ResourceScopeType = string;

export declare interface ResponseMetaData {
    /** Source of the Data */
    dataSource?: DataSource;
}

/** Description of a restore request. */
export declare type RestoreRequest = ProxyOnlyResource & {
    /** SAS URL to the container. */
    storageAccountUrl?: string;
    /** Name of a blob which contains the backup. */
    blobName?: string;
    /** <code>true</code> if the restore operation can overwrite target app; otherwise, <code>false</code>. <code>true</code> is needed if trying to restore over an existing app. */
    overwrite?: boolean;
    /** Name of an app. */
    siteName?: string;
    /** Collection of databases which should be restored. This list has to match the list of databases included in the backup. */
    databases?: DatabaseBackupSetting[];
    /**
     * Changes a logic when restoring an app with custom domains. <code>true</code> to remove custom domains automatically. If <code>false</code>, custom domains are added to
     * the app's object when it is being restored, but that might fail due to conflicts during the operation.
     */
    ignoreConflictingHostNames?: boolean;
    /** Ignore the databases and only restore the site content */
    ignoreDatabases?: boolean;
    /** Specify app service plan that will own restored site. */
    appServicePlan?: string;
    /** Operation type. */
    operationType?: BackupRestoreOperationType;
    /** <code>true</code> if SiteConfig.ConnectionStrings should be set in new app; otherwise, <code>false</code>. */
    adjustConnectionStrings?: boolean;
    /** App Service Environment name, if needed (only when restoring an app to an App Service Environment). */
    hostingEnvironment?: string;
};

/**
 * Defines values for RouteType. \
 * {@link KnownRouteType} can be used interchangeably with RouteType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DEFAULT** \
 * **INHERITED** \
 * **STATIC**
 */
export declare type RouteType = string;

/**
 * Defines values for ScmType. \
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
export declare type ScmType = string;

/** Resource metrics service provided by Microsoft.Insights resource provider. */
export declare interface ServiceSpecification {
    metricSpecifications?: MetricSpecification[];
    logSpecifications?: LogSpecification[];
}

/** A web app, a mobile app backend, or an API app. */
export declare type Site = Resource & {
    /** Managed service identity. */
    identity?: ManagedServiceIdentity;
    /**
     * Current state of the app.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /**
     * Hostnames associated with the app.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hostNames?: string[];
    /**
     * Name of the repository site.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly repositorySiteName?: string;
    /**
     * State indicating whether the app has exceeded its quota usage. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly usageState?: UsageState;
    /** <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline). */
    enabled?: boolean;
    /**
     * Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
     * the app is not served on those hostnames.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly enabledHostNames?: string[];
    /**
     * Management information availability state for the app.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
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
    /**
     * Last time the app was modified, in UTC. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTimeUtc?: Date;
    /** Configuration of the app. */
    siteConfig?: SiteConfig;
    /**
     * Azure Traffic Manager hostnames associated with the app. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly trafficManagerHostNames?: string[];
    /** <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>. */
    scmSiteAlsoStopped?: boolean;
    /**
     * Specifies which deployment slot this app will swap into. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetSwapSlot?: string;
    /** App Service Environment to use for the app. */
    hostingEnvironmentProfile?: HostingEnvironmentProfile;
    /** <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>. */
    clientAffinityEnabled?: boolean;
    /** <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>. */
    clientCertEnabled?: boolean;
    /** client certificate authentication comma-separated exclusion paths */
    clientCertExclusionPaths?: string;
    /**
     * <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
     *  If <code>true</code>, the app is only accessible via API management process.
     */
    hostNamesDisabled?: boolean;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outboundIpAddresses?: string;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants except dataComponent. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly possibleOutboundIpAddresses?: string;
    /** Size of the function container. */
    containerSize?: number;
    /** Maximum allowed daily memory-time quota (applicable on dynamic apps only). */
    dailyMemoryTimeQuota?: number;
    /**
     * App suspended till in case memory-time quota is exceeded.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly suspendedTill?: Date;
    /**
     * Maximum number of workers.
     * This only applies to Functions container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxNumberOfWorkers?: number;
    /** If specified during app creation, the app is cloned from a source app. */
    cloningInfo?: CloningInfo;
    /**
     * Name of the resource group the app belongs to. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGroup?: string;
    /**
     * <code>true</code> if the app is a default container; otherwise, <code>false</code>.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isDefaultContainer?: boolean;
    /**
     * Default hostname of the app. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultHostName?: string;
    /**
     * Status of the last deployment slot swap operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly slotSwapStatus?: SlotSwapStatus;
    /**
     * HttpsOnly: configures a web site to accept only https requests. Issues redirect for
     * http requests
     */
    httpsOnly?: boolean;
    /** Site redundancy mode */
    redundancyMode?: RedundancyMode;
    /**
     * Specifies an operation id if this site has a pending operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly inProgressOperationId?: string;
};

/** Configuration settings for the Azure App Service Authentication / Authorization feature. */
export declare type SiteAuthSettings = ProxyOnlyResource & {
    /** <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>. */
    enabled?: boolean;
    /**
     * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
     */
    runtimeVersion?: string;
    /** The action to take when an unauthenticated client attempts to access the app. */
    unauthenticatedClientAction?: UnauthenticatedClientAction;
    /**
     * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
     *  The default is <code>false</code>.
     */
    tokenStoreEnabled?: boolean;
    /**
     * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
     * This is an advanced setting typically only needed by Windows Store application backends.
     * Note that URLs within the current domain are always implicitly allowed.
     */
    allowedExternalRedirectUrls?: string[];
    /**
     * The default authentication provider to use when multiple providers are configured.
     * This setting is only needed if multiple providers are configured and the unauthenticated client
     * action is set to "RedirectToLoginPage".
     */
    defaultProvider?: BuiltInAuthenticationProvider;
    /**
     * The number of hours after session token expiration that a session token can be used to
     * call the token refresh API. The default is 72 hours.
     */
    tokenRefreshExtensionHours?: number;
    /**
     * The Client ID of this relying party application, known as the client_id.
     * This setting is required for enabling OpenID Connection authentication with Azure Active Directory or
     * other 3rd party OpenID Connect providers.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    clientId?: string;
    /**
     * The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
     * This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.
     * Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    clientSecret?: string;
    /**
     * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret. It is also optional.
     */
    clientSecretCertificateThumbprint?: string;
    /**
     * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
     * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://sts.windows.net/{tenant-guid}/.
     * This URI is a case-sensitive identifier for the token issuer.
     * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
     */
    issuer?: string;
    /** Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such. */
    validateIssuer?: boolean;
    /**
     * Allowed audience values to consider when validating JWTs issued by
     * Azure Active Directory. Note that the <code>ClientID</code> value is always considered an
     * allowed audience, regardless of this setting.
     */
    allowedAudiences?: string[];
    /**
     * Login parameters to send to the OpenID Connect authorization endpoint when
     * a user logs in. Each parameter must be in the form "key=value".
     */
    additionalLoginParams?: string[];
    /**
     * The OpenID Connect Client ID for the Google web application.
     * This setting is required for enabling Google Sign-In.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    googleClientId?: string;
    /**
     * The client secret associated with the Google web application.
     * This setting is required for enabling Google Sign-In.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    googleClientSecret?: string;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
     * This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    googleOAuthScopes?: string[];
    /**
     * The App ID of the Facebook app used for login.
     * This setting is required for enabling Facebook Login.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    facebookAppId?: string;
    /**
     * The App Secret of the Facebook app used for Facebook Login.
     * This setting is required for enabling Facebook Login.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    facebookAppSecret?: string;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
     * This setting is optional.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    facebookOAuthScopes?: string[];
    /**
     * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    twitterConsumerKey?: string;
    /**
     * The OAuth 1.0a consumer secret of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    twitterConsumerSecret?: string;
    /**
     * The OAuth 2.0 client ID that was created for the app used for authentication.
     * This setting is required for enabling Microsoft Account authentication.
     * Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
     */
    microsoftAccountClientId?: string;
    /**
     * The OAuth 2.0 client secret that was created for the app used for authentication.
     * This setting is required for enabling Microsoft Account authentication.
     * Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
     */
    microsoftAccountClientSecret?: string;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
     * This setting is optional. If not specified, "wl.basic" is used as the default scope.
     * Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx
     */
    microsoftAccountOAuthScopes?: string[];
};

/** Defines values for SiteAvailabilityState. */
export declare type SiteAvailabilityState = "Normal" | "Limited" | "DisasterRecoveryMode";

/** Represents whether or not an app is cloneable. */
export declare interface SiteCloneability {
    /** Name of app. */
    result?: CloneAbilityResult;
    /** List of features enabled on app that prevent cloning. */
    blockingFeatures?: SiteCloneabilityCriterion[];
    /**
     * List of features enabled on app that are non-blocking but cannot be cloned. The app can still be cloned
     * but the features in this list will not be set up on cloned app.
     */
    unsupportedFeatures?: SiteCloneabilityCriterion[];
    /** List of blocking application characteristics. */
    blockingCharacteristics?: SiteCloneabilityCriterion[];
}

/** An app cloneability criterion. */
export declare interface SiteCloneabilityCriterion {
    /** Name of criterion. */
    name?: string;
    /** Description of criterion. */
    description?: string;
}

/** Configuration of an App Service app. */
export declare interface SiteConfig {
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
    /** HTTP logs directory size limit. */
    logsDirectorySizeLimit?: number;
    /** <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>. */
    detailedErrorLoggingEnabled?: boolean;
    /** Publishing user name. */
    publishingUsername?: string;
    /** Application settings. */
    appSettings?: NameValuePair[];
    /** Connection strings. */
    connectionStrings?: ConnStringInfo[];
    /**
     * Site MachineKey.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
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
    /** IP security restrictions for main. */
    ipSecurityRestrictions?: IpSecurityRestriction[];
    /** IP security restrictions for scm. */
    scmIpSecurityRestrictions?: IpSecurityRestriction[];
    /** IP security restrictions for scm to use main. */
    scmIpSecurityRestrictionsUseMain?: boolean;
    /** Http20Enabled: configures a web site to allow clients to connect over http2.0 */
    http20Enabled?: boolean;
    /** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
    minTlsVersion?: SupportedTlsVersions;
    /** State of FTP / FTPS service */
    ftpsState?: FtpsState;
    /**
     * Number of preWarmed instances.
     * This setting only applies to the Consumption and Elastic Plans
     */
    preWarmedInstanceCount?: number;
    /** Health check path */
    healthCheckPath?: string;
}

/** Web app configuration ARM resource. */
export declare type SiteConfigResource = ProxyOnlyResource & {
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
    /** HTTP logs directory size limit. */
    logsDirectorySizeLimit?: number;
    /** <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>. */
    detailedErrorLoggingEnabled?: boolean;
    /** Publishing user name. */
    publishingUsername?: string;
    /** Application settings. */
    appSettings?: NameValuePair[];
    /** Connection strings. */
    connectionStrings?: ConnStringInfo[];
    /**
     * Site MachineKey.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
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
    /** IP security restrictions for main. */
    ipSecurityRestrictions?: IpSecurityRestriction[];
    /** IP security restrictions for scm. */
    scmIpSecurityRestrictions?: IpSecurityRestriction[];
    /** IP security restrictions for scm to use main. */
    scmIpSecurityRestrictionsUseMain?: boolean;
    /** Http20Enabled: configures a web site to allow clients to connect over http2.0 */
    http20Enabled?: boolean;
    /** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
    minTlsVersion?: SupportedTlsVersions;
    /** State of FTP / FTPS service */
    ftpsState?: FtpsState;
    /**
     * Number of preWarmed instances.
     * This setting only applies to the Consumption and Elastic Plans
     */
    preWarmedInstanceCount?: number;
    /** Health check path */
    healthCheckPath?: string;
};

/** Collection of site configurations. */
export declare interface SiteConfigResourceCollection {
    /** Collection of resources. */
    value: SiteConfigResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A snapshot of a web app configuration. */
export declare type SiteConfigurationSnapshotInfo = ProxyOnlyResource & {
    /**
     * The time the snapshot was taken.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly time?: Date;
    /**
     * The id of the snapshot
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly snapshotId?: number;
};

/** Collection of metadata for the app configuration snapshots that can be restored. */
export declare interface SiteConfigurationSnapshotInfoCollection {
    /** Collection of resources. */
    value: SiteConfigurationSnapshotInfo[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Site Extension Information. */
export declare type SiteExtensionInfo = ProxyOnlyResource & {
    /** Site extension ID. */
    extensionId?: string;
    title?: string;
    /** Site extension type. */
    extensionType?: SiteExtensionType;
    /** Summary description. */
    summary?: string;
    /** Detailed description. */
    description?: string;
    /** Version information. */
    version?: string;
    /** Extension URL. */
    extensionUrl?: string;
    /** Project URL. */
    projectUrl?: string;
    /** Icon URL. */
    iconUrl?: string;
    /** License URL. */
    licenseUrl?: string;
    /** Feed URL. */
    feedUrl?: string;
    /** List of authors. */
    authors?: string[];
    /** Installer command line parameters. */
    installerCommandLineParams?: string;
    /** Published timestamp. */
    publishedDateTime?: Date;
    /** Count of downloads. */
    downloadCount?: number;
    /** <code>true</code> if the local version is the latest version; <code>false</code> otherwise. */
    localIsLatestVersion?: boolean;
    /** Local path. */
    localPath?: string;
    /** Installed timestamp. */
    installedDateTime?: Date;
    /** Provisioning state. */
    provisioningState?: string;
    /** Site Extension comment. */
    comment?: string;
};

/** Collection of Kudu site extension information elements. */
export declare interface SiteExtensionInfoCollection {
    /** Collection of resources. */
    value: SiteExtensionInfo[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for SiteExtensionType. */
export declare type SiteExtensionType = "Gallery" | "WebRoot";

/** Instance of an app. */
export declare type SiteInstance = ProxyOnlyResource & {
    /**
     * Name of instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly siteInstanceName?: string;
};

/** Metric limits set on an app. */
export declare interface SiteLimits {
    /** Maximum allowed CPU usage percentage. */
    maxPercentageCpu?: number;
    /** Maximum allowed memory usage in MB. */
    maxMemoryInMb?: number;
    /** Maximum allowed disk size usage in MB. */
    maxDiskSizeInMb?: number;
}

/** Defines values for SiteLoadBalancing. */
export declare type SiteLoadBalancing = "WeightedRoundRobin" | "LeastRequests" | "LeastResponseTime" | "WeightedTotalTraffic" | "RequestHash";

/** Configuration of App Service site logs. */
export declare type SiteLogsConfig = ProxyOnlyResource & {
    /** Application logs configuration. */
    applicationLogs?: ApplicationLogsConfig;
    /** HTTP logs configuration. */
    httpLogs?: HttpLogsConfig;
    /** Failed requests tracing configuration. */
    failedRequestsTracing?: EnabledConfig;
    /** Detailed error messages configuration. */
    detailedErrorMessages?: EnabledConfig;
};

/** MachineKey of an app. */
export declare interface SiteMachineKey {
    /** MachineKey validation. */
    validation?: string;
    /** Validation key. */
    validationKey?: string;
    /** Algorithm used for decryption. */
    decryption?: string;
    /** Decryption key. */
    decryptionKey?: string;
}

/** ARM resource for a site. */
export declare type SitePatchResource = ProxyOnlyResource & {
    /** Managed service identity. */
    identity?: ManagedServiceIdentity;
    /**
     * Current state of the app.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /**
     * Hostnames associated with the app.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hostNames?: string[];
    /**
     * Name of the repository site.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly repositorySiteName?: string;
    /**
     * State indicating whether the app has exceeded its quota usage. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly usageState?: UsageState;
    /** <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline). */
    enabled?: boolean;
    /**
     * Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
     * the app is not served on those hostnames.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly enabledHostNames?: string[];
    /**
     * Management information availability state for the app.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
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
    /**
     * Last time the app was modified, in UTC. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTimeUtc?: Date;
    /** Configuration of the app. */
    siteConfig?: SiteConfig;
    /**
     * Azure Traffic Manager hostnames associated with the app. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly trafficManagerHostNames?: string[];
    /** <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>. */
    scmSiteAlsoStopped?: boolean;
    /**
     * Specifies which deployment slot this app will swap into. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetSwapSlot?: string;
    /** App Service Environment to use for the app. */
    hostingEnvironmentProfile?: HostingEnvironmentProfile;
    /** <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>. */
    clientAffinityEnabled?: boolean;
    /** <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>. */
    clientCertEnabled?: boolean;
    /** client certificate authentication comma-separated exclusion paths */
    clientCertExclusionPaths?: string;
    /**
     * <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
     *  If <code>true</code>, the app is only accessible via API management process.
     */
    hostNamesDisabled?: boolean;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outboundIpAddresses?: string;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants except dataComponent. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly possibleOutboundIpAddresses?: string;
    /** Size of the function container. */
    containerSize?: number;
    /** Maximum allowed daily memory-time quota (applicable on dynamic apps only). */
    dailyMemoryTimeQuota?: number;
    /**
     * App suspended till in case memory-time quota is exceeded.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly suspendedTill?: Date;
    /**
     * Maximum number of workers.
     * This only applies to Functions container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxNumberOfWorkers?: number;
    /** If specified during app creation, the app is cloned from a source app. */
    cloningInfo?: CloningInfo;
    /**
     * Name of the resource group the app belongs to. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGroup?: string;
    /**
     * <code>true</code> if the app is a default container; otherwise, <code>false</code>.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isDefaultContainer?: boolean;
    /**
     * Default hostname of the app. Read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultHostName?: string;
    /**
     * Status of the last deployment slot swap operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly slotSwapStatus?: SlotSwapStatus;
    /**
     * HttpsOnly: configures a web site to accept only https requests. Issues redirect for
     * http requests
     */
    httpsOnly?: boolean;
    /** Site redundancy mode */
    redundancyMode?: RedundancyMode;
    /**
     * Specifies an operation id if this site has a pending operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly inProgressOperationId?: string;
};

/** Used for getting PHP error logging flag. */
export declare type SitePhpErrorLogFlag = ProxyOnlyResource & {
    /** Local log_errors setting. */
    localLogErrors?: string;
    /** Master log_errors setting. */
    masterLogErrors?: string;
    /** Local log_errors_max_len setting. */
    localLogErrorsMaxLength?: string;
    /** Master log_errors_max_len setting. */
    masterLogErrorsMaxLength?: string;
};

/** Defines values for SiteRuntimeState. */
export declare type SiteRuntimeState = "READY" | "STOPPED" | "UNKNOWN";

/** Site seal */
export declare interface SiteSeal {
    /** HTML snippet */
    html: string;
}

/** Site seal request. */
export declare interface SiteSealRequest {
    /** If <code>true</code> use the light color theme for site seal; otherwise, use the default color theme. */
    lightTheme?: boolean;
    /** Locale of site seal. */
    locale?: string;
}

/** Source control configuration for an app. */
export declare type SiteSourceControl = ProxyOnlyResource & {
    /** Repository or source control URL. */
    repoUrl?: string;
    /** Name of branch to use for deployment. */
    branch?: string;
    /** <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub). */
    isManualIntegration?: boolean;
    /** <code>true</code> to enable deployment rollback; otherwise, <code>false</code>. */
    deploymentRollbackEnabled?: boolean;
    /** <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository. */
    isMercurial?: boolean;
};

/** Description of the App Service plan scale options. */
export declare interface SkuCapacity {
    /** Minimum number of workers for this App Service plan SKU. */
    minimum?: number;
    /** Maximum number of workers for this App Service plan SKU. */
    maximum?: number;
    /** Default number of workers for this App Service plan SKU. */
    default?: number;
    /** Available scale configurations for an App Service plan. */
    scaleType?: string;
}

/** Description of a SKU for a scalable resource. */
export declare interface SkuDescription {
    /** Name of the resource SKU. */
    name?: string;
    /** Service tier of the resource SKU. */
    tier?: string;
    /** Size specifier of the resource SKU. */
    size?: string;
    /** Family code of the resource SKU. */
    family?: string;
    /** Current number of instances assigned to the resource. */
    capacity?: number;
    /** Min, max, and default scale values of the SKU. */
    skuCapacity?: SkuCapacity;
    /** Locations of the SKU. */
    locations?: string[];
    /** Capabilities of the SKU, e.g., is traffic manager enabled? */
    capabilities?: Capability[];
}

/** SKU discovery information. */
export declare interface SkuInfo {
    /** Resource type that this SKU applies to. */
    resourceType?: string;
    /** Name and tier of the SKU. */
    sku?: SkuDescription;
    /** Min, max, and default scale values of the SKU. */
    capacity?: SkuCapacity;
}

/** Collection of SKU information. */
export declare interface SkuInfoCollection {
    /** Collection of resources. */
    value: SkuInfo[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Collection of SKU information. */
export declare interface SkuInfos {
    /** Resource type that this SKU applies to. */
    resourceType?: string;
    /** List of SKUs the subscription is able to use. */
    skus?: GlobalCsmSkuDescription[];
}

/**
 * Defines values for SkuName. \
 * {@link KnownSkuName} can be used interchangeably with SkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Free** \
 * **Shared** \
 * **Basic** \
 * **Standard** \
 * **Premium** \
 * **Dynamic** \
 * **Isolated** \
 * **PremiumV2** \
 * **ElasticPremium** \
 * **ElasticIsolated**
 */
export declare type SkuName = string;

/** Slot Config names azure resource. */
export declare type SlotConfigNamesResource = ProxyOnlyResource & {
    /** List of connection string names. */
    connectionStringNames?: string[];
    /** List of application settings names. */
    appSettingNames?: string[];
    /** List of external Azure storage account identifiers. */
    azureStorageConfigNames?: string[];
};

/** A setting difference between two deployment slots of an app. */
export declare type SlotDifference = ProxyOnlyResource & {
    /**
     * Level of the difference: Information, Warning or Error.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly level?: string;
    /**
     * The type of the setting: General, AppSetting or ConnectionString.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly settingType?: string;
    /**
     * Rule that describes how to process the setting difference during a slot swap.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly diffRule?: string;
    /**
     * Name of the setting.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly settingName?: string;
    /**
     * Value of the setting in the current slot.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly valueInCurrentSlot?: string;
    /**
     * Value of the setting in the target slot.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly valueInTargetSlot?: string;
    /**
     * Description of the setting difference.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
};

/** Collection of slot differences. */
export declare interface SlotDifferenceCollection {
    /** Collection of resources. */
    value: SlotDifference[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The status of the last successful slot swap operation. */
export declare interface SlotSwapStatus {
    /**
     * The time the last successful slot swap completed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timestampUtc?: Date;
    /**
     * The source slot of the last swap operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sourceSlotName?: string;
    /**
     * The destination slot of the last swap operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly destinationSlotName?: string;
}

/** Trigger based on request execution time. */
export declare interface SlowRequestsBasedTrigger {
    /** Time taken. */
    timeTaken?: string;
    /** Request Count. */
    count?: number;
    /** Time interval. */
    timeInterval?: string;
}

/** A snapshot of an app. */
export declare type Snapshot = ProxyOnlyResource & {
    /**
     * The time the snapshot was taken.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly time?: string;
};

/** Collection of snapshots which can be used to revert an app to a previous time. */
export declare interface SnapshotCollection {
    /** Collection of resources. */
    value: Snapshot[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Specifies the web app that snapshot contents will be retrieved from. */
export declare interface SnapshotRecoverySource {
    /** Geographical location of the source web app, e.g. SouthEastAsia, SouthCentralUS */
    location?: string;
    /**
     * ARM resource ID of the source app.
     * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and
     * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
     */
    id?: string;
}

/** Details about app recovery operation. */
export declare type SnapshotRestoreRequest = ProxyOnlyResource & {
    /** Point in time in which the app restore should be done, formatted as a DateTime string. */
    snapshotTime?: string;
    /**
     * Optional. Specifies the web app that snapshot contents will be retrieved from.
     * If empty, the targeted web app will be used as the source.
     */
    recoverySource?: SnapshotRecoverySource;
    /** If <code>true</code> the restore operation can overwrite source app; otherwise, <code>false</code>. */
    overwrite?: boolean;
    /** If true, site configuration, in addition to content, will be reverted. */
    recoverConfiguration?: boolean;
    /**
     * If true, custom hostname conflicts will be ignored when recovering to a target web app.
     * This setting is only necessary when RecoverConfiguration is enabled.
     */
    ignoreConflictingHostNames?: boolean;
    /** If true, the snapshot is retrieved from DRSecondary endpoint. */
    useDRSecondary?: boolean;
};

/** Class Representing Solution for problems detected. */
export declare interface Solution {
    /** Solution Id. */
    id?: number;
    /** Display Name of the solution */
    displayName?: string;
    /** Order of the solution. */
    order?: number;
    /** Description of the solution */
    description?: string;
    /** Type of Solution */
    type?: SolutionType;
    /** Solution Data. */
    data?: NameValuePair[][];
    /** Solution Metadata. */
    metadata?: NameValuePair[][];
}

/** Defines values for SolutionType. */
export declare type SolutionType = "QuickSolution" | "DeepInvestigation" | "BestPractices";

/** The source control OAuth token. */
export declare type SourceControl = ProxyOnlyResource & {
    /** OAuth access token. */
    token?: string;
    /** OAuth access token secret. */
    tokenSecret?: string;
    /** OAuth refresh token. */
    refreshToken?: string;
    /** OAuth token expiration. */
    expirationTime?: Date;
};

/** Collection of source controls. */
export declare interface SourceControlCollection {
    /** Collection of resources. */
    value: SourceControl[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for SslState. */
export declare type SslState = "Disabled" | "SniEnabled" | "IpBasedEnabled";

/** Application stack major version. */
export declare interface StackMajorVersion {
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
}

/** Application stack minor version. */
export declare interface StackMinorVersion {
    /** Application stack minor version (display only). */
    displayVersion?: string;
    /** Application stack minor version (runtime only). */
    runtimeVersion?: string;
    /** <code>true</code> if this is the default minor version; otherwise, <code>false</code>. */
    isDefault?: boolean;
    /** <code>true</code> if this supports Remote Debugging, otherwise <code>false</code>. */
    isRemoteDebuggingEnabled?: boolean;
}

/** Stamp capacity information. */
export declare interface StampCapacity {
    /** Name of the stamp. */
    name?: string;
    /** Available capacity (# of machines, bytes of storage etc...). */
    availableCapacity?: number;
    /** Total capacity (# of machines, bytes of storage etc...). */
    totalCapacity?: number;
    /** Name of the unit. */
    unit?: string;
    /** Shared/dedicated workers. */
    computeMode?: ComputeModeOptions;
    /** Size of the machines. */
    workerSize?: WorkerSizeOptions;
    /**
     * Size ID of machines:
     * 0 - Small
     * 1 - Medium
     * 2 - Large
     */
    workerSizeId?: number;
    /**
     * If <code>true</code>, it includes basic apps.
     * Basic apps are not used for capacity allocation.
     */
    excludeFromCapacityAllocation?: boolean;
    /** <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>. */
    isApplicableForAllComputeModes?: boolean;
    /** Shared or Dedicated. */
    siteMode?: string;
    /** Is this a linux stamp capacity */
    isLinux?: boolean;
}

/** Collection of stamp capacities. */
export declare interface StampCapacityCollection {
    /** Collection of resources. */
    value: StampCapacity[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Static Site ARM resource. */
export declare type StaticSiteARMResource = Resource & {
    /** Description of a SKU for a scalable resource. */
    sku?: SkuDescription;
    /**
     * The default autogenerated hostname for the static site.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultHostname?: string;
    /** URL for the repository of the static site. */
    repositoryUrl?: string;
    /** The target branch in the repository. */
    branch?: string;
    /**
     * The custom domains associated with this static site.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly customDomains?: string[];
    /** A user's github repository token. This is used to setup the Github Actions workflow file and API secrets. */
    repositoryToken?: string;
    /** Build properties to configure on the repository. */
    buildProperties?: StaticSiteBuildProperties;
};

/** Static Site Build ARM resource. */
export declare type StaticSiteBuildARMResource = ProxyOnlyResource & {
    /**
     * An identifier for the static site build.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly buildId?: string;
    /**
     * The source branch.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sourceBranch?: string;
    /**
     * The title of a pull request that a static site build is related to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly pullRequestTitle?: string;
    /**
     * The hostname for a static site build.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hostname?: string;
    /**
     * When this build was created.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly createdTimeUtc?: Date;
    /**
     * When this build was updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastUpdatedOn?: Date;
    /**
     * The status of the static site build.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: BuildStatus;
};

/** Collection of static site builds. */
export declare interface StaticSiteBuildCollection {
    /** Collection of resources. */
    value: StaticSiteBuildARMResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Build properties for the static site. */
export declare interface StaticSiteBuildProperties {
    /** The path to the app code within the repository. */
    appLocation?: string;
    /** The path to the api code within the repository. */
    apiLocation?: string;
    /** The path of the app artifacts after building. */
    appArtifactLocation?: string;
}

/** Collection of static sites. */
export declare interface StaticSiteCollection {
    /** Collection of resources. */
    value: StaticSiteARMResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Static Site Custom Domain Overview ARM resource. */
export declare type StaticSiteCustomDomainOverviewARMResource = ProxyOnlyResource & {
    /**
     * The domain name for the static site custom domain.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly domainName?: string;
    /**
     * The date and time on which the custom domain was created for the static site.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly createdOn?: Date;
};

/** Collection of static site custom domains. */
export declare interface StaticSiteCustomDomainOverviewCollection {
    /** Collection of resources. */
    value: StaticSiteCustomDomainOverviewARMResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Static Site Function Overview ARM resource. */
export declare type StaticSiteFunctionOverviewARMResource = ProxyOnlyResource & {
    /**
     * The name for the function
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly functionName?: string;
    /**
     * The trigger type of the function
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly triggerType?: TriggerTypes;
};

/** Collection of static site functions. */
export declare interface StaticSiteFunctionOverviewCollection {
    /** Collection of resources. */
    value: StaticSiteFunctionOverviewARMResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** ARM resource for a static site when patching */
export declare type StaticSitePatchResource = ProxyOnlyResource & {
    /**
     * The default autogenerated hostname for the static site.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultHostname?: string;
    /** URL for the repository of the static site. */
    repositoryUrl?: string;
    /** The target branch in the repository. */
    branch?: string;
    /**
     * The custom domains associated with this static site.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly customDomains?: string[];
    /** A user's github repository token. This is used to setup the Github Actions workflow file and API secrets. */
    repositoryToken?: string;
    /** Build properties to configure on the repository. */
    buildProperties?: StaticSiteBuildProperties;
};

/** Static Site Reset Properties ARM resource. */
export declare type StaticSiteResetPropertiesARMResource = ProxyOnlyResource & {
    /** The token which proves admin privileges to the repository. */
    repositoryToken?: string;
    /** Determines whether the repository should be updated with the new properties. */
    shouldUpdateRepository?: boolean;
};

/** Interface representing a StaticSites. */
export declare interface StaticSites {
    /**
     * Description for Get all Static Sites for a subscription.
     * @param options The options parameters.
     */
    list(options?: StaticSitesListOptionalParams): PagedAsyncIterableIterator<StaticSiteARMResource>;
    /**
     * Description for Gets all static sites in the specified resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listStaticSitesByResourceGroup(resourceGroupName: string, options?: StaticSitesGetStaticSitesByResourceGroupOptionalParams): PagedAsyncIterableIterator<StaticSiteARMResource>;
    /**
     * Description for Gets the list of users of a static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param authprovider The auth provider for the users.
     * @param options The options parameters.
     */
    listStaticSiteUsers(resourceGroupName: string, name: string, authprovider: string, options?: StaticSitesListStaticSiteUsersOptionalParams): PagedAsyncIterableIterator<StaticSiteUserARMResource>;
    /**
     * Description for Gets all static site builds for a particular static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param options The options parameters.
     */
    listStaticSiteBuilds(resourceGroupName: string, name: string, options?: StaticSitesGetStaticSiteBuildsOptionalParams): PagedAsyncIterableIterator<StaticSiteBuildARMResource>;
    /**
     * Description for Gets the functions of a particular static site build.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param prId The stage site identifier.
     * @param options The options parameters.
     */
    listStaticSiteBuildFunctions(resourceGroupName: string, name: string, prId: string, options?: StaticSitesListStaticSiteBuildFunctionsOptionalParams): PagedAsyncIterableIterator<StaticSiteFunctionOverviewARMResource>;
    /**
     * Description for Gets all static site custom domains for a particular static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site resource to search in.
     * @param options The options parameters.
     */
    listStaticSiteCustomDomains(resourceGroupName: string, name: string, options?: StaticSitesListStaticSiteCustomDomainsOptionalParams): PagedAsyncIterableIterator<StaticSiteCustomDomainOverviewARMResource>;
    /**
     * Description for Gets the functions of a static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param options The options parameters.
     */
    listStaticSiteFunctions(resourceGroupName: string, name: string, options?: StaticSitesListStaticSiteFunctionsOptionalParams): PagedAsyncIterableIterator<StaticSiteFunctionOverviewARMResource>;
    /**
     * Description for Gets the details of a static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param options The options parameters.
     */
    getStaticSite(resourceGroupName: string, name: string, options?: StaticSitesGetStaticSiteOptionalParams): Promise<StaticSitesGetStaticSiteResponse>;
    /**
     * Description for Creates a new static site in an existing resource group, or updates an existing
     * static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site to create or update.
     * @param staticSiteEnvelope A JSON representation of the staticsite properties. See example.
     * @param options The options parameters.
     */
    createOrUpdateStaticSite(resourceGroupName: string, name: string, staticSiteEnvelope: StaticSiteARMResource, options?: StaticSitesCreateOrUpdateStaticSiteOptionalParams): Promise<StaticSitesCreateOrUpdateStaticSiteResponse>;
    /**
     * Description for Deletes a static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site to delete.
     * @param options The options parameters.
     */
    deleteStaticSite(resourceGroupName: string, name: string, options?: StaticSitesDeleteStaticSiteOptionalParams): Promise<void>;
    /**
     * Description for Creates a new static site in an existing resource group, or updates an existing
     * static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site to create or update.
     * @param staticSiteEnvelope A JSON representation of the staticsite properties. See example.
     * @param options The options parameters.
     */
    updateStaticSite(resourceGroupName: string, name: string, staticSiteEnvelope: StaticSitePatchResource, options?: StaticSitesUpdateStaticSiteOptionalParams): Promise<StaticSitesUpdateStaticSiteResponse>;
    /**
     * Description for Deletes the user entry from the static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the staticsite.
     * @param authprovider The auth provider for this user.
     * @param userid The user id of the user.
     * @param options The options parameters.
     */
    deleteStaticSiteUser(resourceGroupName: string, name: string, authprovider: string, userid: string, options?: StaticSitesDeleteStaticSiteUserOptionalParams): Promise<void>;
    /**
     * Description for Updates a user entry with the listed roles
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param authprovider The auth provider for this user.
     * @param userid The user id of the user.
     * @param staticSiteUserEnvelope A JSON representation of the StaticSiteUser properties. See example.
     * @param options The options parameters.
     */
    updateStaticSiteUser(resourceGroupName: string, name: string, authprovider: string, userid: string, staticSiteUserEnvelope: StaticSiteUserARMResource, options?: StaticSitesUpdateStaticSiteUserOptionalParams): Promise<StaticSitesUpdateStaticSiteUserResponse>;
    /**
     * Description for Gets the details of a static site build.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param prId The stage site identifier.
     * @param options The options parameters.
     */
    getStaticSiteBuild(resourceGroupName: string, name: string, prId: string, options?: StaticSitesGetStaticSiteBuildOptionalParams): Promise<StaticSitesGetStaticSiteBuildResponse>;
    /**
     * Description for Deletes a static site build.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param prId The stage site identifier.
     * @param options The options parameters.
     */
    deleteStaticSiteBuild(resourceGroupName: string, name: string, prId: string, options?: StaticSitesDeleteStaticSiteBuildOptionalParams): Promise<void>;
    /**
     * Description for Creates or updates the function app settings of a static site build.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param prId The stage site identifier.
     * @param appSettings String dictionary resource.
     * @param options The options parameters.
     */
    createOrUpdateStaticSiteBuildFunctionAppSettings(resourceGroupName: string, name: string, prId: string, appSettings: StringDictionary, options?: StaticSitesCreateOrUpdateStaticSiteBuildFunctionAppSettingsOptionalParams): Promise<StaticSitesCreateOrUpdateStaticSiteBuildFunctionAppSettingsResponse>;
    /**
     * Description for Gets the application settings of a static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param prId The stage site identifier.
     * @param options The options parameters.
     */
    listStaticSiteBuildFunctionAppSettings(resourceGroupName: string, name: string, prId: string, options?: StaticSitesListStaticSiteBuildFunctionAppSettingsOptionalParams): Promise<StaticSitesListStaticSiteBuildFunctionAppSettingsResponse>;
    /**
     * Description for Creates or updates the function app settings of a static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param appSettings String dictionary resource.
     * @param options The options parameters.
     */
    createOrUpdateStaticSiteFunctionAppSettings(resourceGroupName: string, name: string, appSettings: StringDictionary, options?: StaticSitesCreateOrUpdateStaticSiteFunctionAppSettingsOptionalParams): Promise<StaticSitesCreateOrUpdateStaticSiteFunctionAppSettingsResponse>;
    /**
     * Description for Creates an invitation link for a user with the role
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param staticSiteUserRolesInvitationEnvelope Static sites user roles invitation resource.
     * @param options The options parameters.
     */
    createUserRolesInvitationLink(resourceGroupName: string, name: string, staticSiteUserRolesInvitationEnvelope: StaticSiteUserInvitationRequestResource, options?: StaticSitesCreateUserRolesInvitationLinkOptionalParams): Promise<StaticSitesCreateUserRolesInvitationLinkResponse>;
    /**
     * Description for Creates a new static site custom domain in an existing resource group and static
     * site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param domainName The custom domain to create.
     * @param options The options parameters.
     */
    createOrUpdateStaticSiteCustomDomain(resourceGroupName: string, name: string, domainName: string, options?: StaticSitesCreateOrUpdateStaticSiteCustomDomainOptionalParams): Promise<StaticSitesCreateOrUpdateStaticSiteCustomDomainResponse>;
    /**
     * Description for Deletes a custom domain.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param domainName The custom domain to delete.
     * @param options The options parameters.
     */
    deleteStaticSiteCustomDomain(resourceGroupName: string, name: string, domainName: string, options?: StaticSitesDeleteStaticSiteCustomDomainOptionalParams): Promise<void>;
    /**
     * Description for Validates a particular custom domain can be added to a static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param domainName The custom domain to validate.
     * @param options The options parameters.
     */
    validateCustomDomainCanBeAddedToStaticSite(resourceGroupName: string, name: string, domainName: string, options?: StaticSitesValidateCustomDomainCanBeAddedToStaticSiteOptionalParams): Promise<void>;
    /**
     * Description for Detaches a static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site to detach.
     * @param options The options parameters.
     */
    detachStaticSite(resourceGroupName: string, name: string, options?: StaticSitesDetachStaticSiteOptionalParams): Promise<void>;
    /**
     * Description for Gets the application settings of a static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param options The options parameters.
     */
    listStaticSiteFunctionAppSettings(resourceGroupName: string, name: string, options?: StaticSitesListStaticSiteFunctionAppSettingsOptionalParams): Promise<StaticSitesListStaticSiteFunctionAppSettingsResponse>;
    /**
     * Description for Lists the secrets for an existing static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param options The options parameters.
     */
    listStaticSiteSecrets(resourceGroupName: string, name: string, options?: StaticSitesListStaticSiteSecretsOptionalParams): Promise<StaticSitesListStaticSiteSecretsResponse>;
    /**
     * Description for Resets the api key for an existing static site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the static site.
     * @param resetPropertiesEnvelope Static Site Reset Properties ARM resource.
     * @param options The options parameters.
     */
    resetStaticSiteApiKey(resourceGroupName: string, name: string, resetPropertiesEnvelope: StaticSiteResetPropertiesARMResource, options?: StaticSitesResetStaticSiteApiKeyOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface StaticSitesCreateOrUpdateStaticSiteBuildFunctionAppSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateStaticSiteBuildFunctionAppSettings operation. */
export declare type StaticSitesCreateOrUpdateStaticSiteBuildFunctionAppSettingsResponse = StringDictionary;

/** Optional parameters. */
export declare interface StaticSitesCreateOrUpdateStaticSiteCustomDomainOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateStaticSiteCustomDomain operation. */
export declare type StaticSitesCreateOrUpdateStaticSiteCustomDomainResponse = StaticSiteCustomDomainOverviewARMResource;

/** Optional parameters. */
export declare interface StaticSitesCreateOrUpdateStaticSiteFunctionAppSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateStaticSiteFunctionAppSettings operation. */
export declare type StaticSitesCreateOrUpdateStaticSiteFunctionAppSettingsResponse = StringDictionary;

/** Optional parameters. */
export declare interface StaticSitesCreateOrUpdateStaticSiteOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateStaticSite operation. */
export declare type StaticSitesCreateOrUpdateStaticSiteResponse = StaticSiteARMResource;

/** Optional parameters. */
export declare interface StaticSitesCreateUserRolesInvitationLinkOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createUserRolesInvitationLink operation. */
export declare type StaticSitesCreateUserRolesInvitationLinkResponse = StaticSiteUserInvitationResponseResource;

/** Optional parameters. */
export declare interface StaticSitesDeleteStaticSiteBuildOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface StaticSitesDeleteStaticSiteCustomDomainOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface StaticSitesDeleteStaticSiteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface StaticSitesDeleteStaticSiteUserOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface StaticSitesDetachStaticSiteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface StaticSitesGetStaticSiteBuildOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getStaticSiteBuild operation. */
export declare type StaticSitesGetStaticSiteBuildResponse = StaticSiteBuildARMResource;

/** Optional parameters. */
export declare interface StaticSitesGetStaticSiteBuildsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getStaticSiteBuildsNext operation. */
export declare type StaticSitesGetStaticSiteBuildsNextResponse = StaticSiteBuildCollection;

/** Optional parameters. */
export declare interface StaticSitesGetStaticSiteBuildsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getStaticSiteBuilds operation. */
export declare type StaticSitesGetStaticSiteBuildsResponse = StaticSiteBuildCollection;

/** Optional parameters. */
export declare interface StaticSitesGetStaticSiteOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getStaticSite operation. */
export declare type StaticSitesGetStaticSiteResponse = StaticSiteARMResource;

/** Optional parameters. */
export declare interface StaticSitesGetStaticSitesByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getStaticSitesByResourceGroupNext operation. */
export declare type StaticSitesGetStaticSitesByResourceGroupNextResponse = StaticSiteCollection;

/** Optional parameters. */
export declare interface StaticSitesGetStaticSitesByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getStaticSitesByResourceGroup operation. */
export declare type StaticSitesGetStaticSitesByResourceGroupResponse = StaticSiteCollection;

/** Optional parameters. */
export declare interface StaticSitesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type StaticSitesListNextResponse = StaticSiteCollection;

/** Optional parameters. */
export declare interface StaticSitesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type StaticSitesListResponse = StaticSiteCollection;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteBuildFunctionAppSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteBuildFunctionAppSettings operation. */
export declare type StaticSitesListStaticSiteBuildFunctionAppSettingsResponse = StringDictionary;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteBuildFunctionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteBuildFunctionsNext operation. */
export declare type StaticSitesListStaticSiteBuildFunctionsNextResponse = StaticSiteFunctionOverviewCollection;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteBuildFunctionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteBuildFunctions operation. */
export declare type StaticSitesListStaticSiteBuildFunctionsResponse = StaticSiteFunctionOverviewCollection;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteCustomDomainsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteCustomDomainsNext operation. */
export declare type StaticSitesListStaticSiteCustomDomainsNextResponse = StaticSiteCustomDomainOverviewCollection;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteCustomDomainsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteCustomDomains operation. */
export declare type StaticSitesListStaticSiteCustomDomainsResponse = StaticSiteCustomDomainOverviewCollection;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteFunctionAppSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteFunctionAppSettings operation. */
export declare type StaticSitesListStaticSiteFunctionAppSettingsResponse = StringDictionary;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteFunctionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteFunctionsNext operation. */
export declare type StaticSitesListStaticSiteFunctionsNextResponse = StaticSiteFunctionOverviewCollection;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteFunctionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteFunctions operation. */
export declare type StaticSitesListStaticSiteFunctionsResponse = StaticSiteFunctionOverviewCollection;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteSecretsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteSecrets operation. */
export declare type StaticSitesListStaticSiteSecretsResponse = StringDictionary;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteUsersNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteUsersNext operation. */
export declare type StaticSitesListStaticSiteUsersNextResponse = StaticSiteUserCollection;

/** Optional parameters. */
export declare interface StaticSitesListStaticSiteUsersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listStaticSiteUsers operation. */
export declare type StaticSitesListStaticSiteUsersResponse = StaticSiteUserCollection;

/** Optional parameters. */
export declare interface StaticSitesResetStaticSiteApiKeyOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface StaticSitesUpdateStaticSiteOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateStaticSite operation. */
export declare type StaticSitesUpdateStaticSiteResponse = StaticSiteARMResource;

/** Optional parameters. */
export declare interface StaticSitesUpdateStaticSiteUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateStaticSiteUser operation. */
export declare type StaticSitesUpdateStaticSiteUserResponse = StaticSiteUserARMResource;

/** Optional parameters. */
export declare interface StaticSitesValidateCustomDomainCanBeAddedToStaticSiteOptionalParams extends coreClient.OperationOptions {
}

/** Static Site User ARM resource. */
export declare type StaticSiteUserARMResource = ProxyOnlyResource & {
    /**
     * The identity provider for the static site user.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provider?: string;
    /**
     * The user id for the static site user.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly userId?: string;
    /**
     * The display name for the static site user.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /** The roles for the static site user, in free-form string format */
    roles?: string;
};

/** Collection of static site custom users. */
export declare interface StaticSiteUserCollection {
    /** Collection of resources. */
    value: StaticSiteUserARMResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Static sites user roles invitation resource. */
export declare type StaticSiteUserInvitationRequestResource = ProxyOnlyResource & {
    /** The domain name for the static site custom domain. */
    domain?: string;
    /** The identity provider for the static site user. */
    provider?: string;
    /** The user id for the static site user. */
    userDetails?: string;
    /** The roles for the static site user, in free-form string format */
    roles?: string;
    /** The number of hours the sas token stays valid */
    numHoursToExpiration?: number;
};

/** Static sites user roles invitation link resource. */
export declare type StaticSiteUserInvitationResponseResource = ProxyOnlyResource & {
    /**
     * The expiration time of the invitation
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expiresOn?: Date;
    /**
     * The url for the invitation link
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly invitationUrl?: string;
};

/** Trigger based on status code. */
export declare interface StatusCodesBasedTrigger {
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
}

/** Defines values for StatusOptions. */
export declare type StatusOptions = "Ready" | "Pending" | "Creating";

/** Options for app content migration. */
export declare type StorageMigrationOptions = ProxyOnlyResource & {
    /** AzureFiles connection string. */
    azurefilesConnectionString?: string;
    /** AzureFiles share. */
    azurefilesShare?: string;
    /** <code>true</code>if the app should be switched over; otherwise, <code>false</code>. */
    switchSiteAfterMigration?: boolean;
    /** <code>true</code> if the app should be read only during copy operation; otherwise, <code>false</code>. */
    blockWriteAccessToSite?: boolean;
};

/** Response for a migration of app content request. */
export declare type StorageMigrationResponse = ProxyOnlyResource & {
    /**
     * When server starts the migration process, it will return an operation ID identifying that particular migration operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationId?: string;
};

/** String dictionary resource. */
export declare type StringDictionary = ProxyOnlyResource & {
    /** Settings. */
    properties?: {
        [propertyName: string]: string;
    };
};

/**
 * Defines values for SupportedTlsVersions. \
 * {@link KnownSupportedTlsVersions} can be used interchangeably with SupportedTlsVersions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **1.0** \
 * **1.1** \
 * **1.2**
 */
export declare type SupportedTlsVersions = string;

/** Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration. */
export declare type SwiftVirtualNetwork = ProxyOnlyResource & {
    /** The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first. */
    subnetResourceId?: string;
    /** A flag that specifies if the scale unit this Web App is on supports Swift integration. */
    swiftSupported?: boolean;
};

/** Legal agreement for a top level domain. */
export declare interface TldLegalAgreement {
    /** Unique identifier for the agreement. */
    agreementKey: string;
    /** Agreement title. */
    title: string;
    /** Agreement details. */
    content: string;
    /** URL where a copy of the agreement details is hosted. */
    url?: string;
}

/** Collection of top-level domain legal agreements. */
export declare interface TldLegalAgreementCollection {
    /** Collection of resources. */
    value: TldLegalAgreement[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A top level domain object. */
export declare type TopLevelDomain = ProxyOnlyResource & {
    /** If <code>true</code>, then the top level domain supports domain privacy; otherwise, <code>false</code>. */
    privacy?: boolean;
};

/** Options for retrieving the list of top level domain legal agreements. */
export declare interface TopLevelDomainAgreementOption {
    /** If <code>true</code>, then the list of agreements will include agreements for domain privacy as well; otherwise, <code>false</code>. */
    includePrivacy?: boolean;
    /** If <code>true</code>, then the list of agreements will include agreements for domain transfer as well; otherwise, <code>false</code>. */
    forTransfer?: boolean;
}

/** Collection of Top-level domains. */
export declare interface TopLevelDomainCollection {
    /** Collection of resources. */
    value: TopLevelDomain[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a TopLevelDomains. */
export declare interface TopLevelDomains {
    /**
     * Description for Get all top-level domains supported for registration.
     * @param options The options parameters.
     */
    list(options?: TopLevelDomainsListOptionalParams): PagedAsyncIterableIterator<TopLevelDomain>;
    /**
     * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
     * @param name Name of the top-level domain.
     * @param agreementOption Domain agreement options.
     * @param options The options parameters.
     */
    listAgreements(name: string, agreementOption: TopLevelDomainAgreementOption, options?: TopLevelDomainsListAgreementsOptionalParams): PagedAsyncIterableIterator<TldLegalAgreement>;
    /**
     * Description for Get details of a top-level domain.
     * @param name Name of the top-level domain.
     * @param options The options parameters.
     */
    get(name: string, options?: TopLevelDomainsGetOptionalParams): Promise<TopLevelDomainsGetResponse>;
}

/** Optional parameters. */
export declare interface TopLevelDomainsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type TopLevelDomainsGetResponse = TopLevelDomain;

/** Optional parameters. */
export declare interface TopLevelDomainsListAgreementsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAgreementsNext operation. */
export declare type TopLevelDomainsListAgreementsNextResponse = TldLegalAgreementCollection;

/** Optional parameters. */
export declare interface TopLevelDomainsListAgreementsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAgreements operation. */
export declare type TopLevelDomainsListAgreementsResponse = TldLegalAgreementCollection;

/** Optional parameters. */
export declare interface TopLevelDomainsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type TopLevelDomainsListNextResponse = TopLevelDomainCollection;

/** Optional parameters. */
export declare interface TopLevelDomainsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type TopLevelDomainsListResponse = TopLevelDomainCollection;

/** Triggered Web Job History. List of Triggered Web Job Run Information elements. */
export declare type TriggeredJobHistory = ProxyOnlyResource & {
    /** List of triggered web job runs. */
    runs?: TriggeredJobRun[];
};

/** Collection of Kudu continuous web job information elements. */
export declare interface TriggeredJobHistoryCollection {
    /** Collection of resources. */
    value: TriggeredJobHistory[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Triggered Web Job Run Information. */
export declare type TriggeredJobRun = ProxyOnlyResource & {
    /** Job ID. */
    webJobId?: string;
    /** Job name. */
    webJobName?: string;
    /** Job status. */
    status?: TriggeredWebJobStatus;
    /** Start time. */
    startTime?: Date;
    /** End time. */
    endTime?: Date;
    /** Job duration. */
    duration?: string;
    /** Output URL. */
    outputUrl?: string;
    /** Error URL. */
    errorUrl?: string;
    /** Job URL. */
    url?: string;
    /** Job name. */
    jobName?: string;
    /** Job trigger. */
    trigger?: string;
};

/** Triggered Web Job Information. */
export declare type TriggeredWebJob = ProxyOnlyResource & {
    /** Latest job run information. */
    latestRun?: TriggeredJobRun;
    /** History URL. */
    historyUrl?: string;
    /** Scheduler Logs URL. */
    schedulerLogsUrl?: string;
    /** Run command. */
    runCommand?: string;
    /** Job URL. */
    url?: string;
    /** Extra Info URL. */
    extraInfoUrl?: string;
    /** Job type. */
    webJobType?: WebJobType;
    /** Error information. */
    error?: string;
    /** Using SDK? */
    usingSdk?: boolean;
    /** Job settings. */
    settings?: {
        [propertyName: string]: Record<string, unknown>;
    };
};

/** Collection of Kudu continuous web job information elements. */
export declare interface TriggeredWebJobCollection {
    /** Collection of resources. */
    value: TriggeredWebJob[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for TriggeredWebJobStatus. */
export declare type TriggeredWebJobStatus = "Success" | "Failed" | "Error";

/**
 * Defines values for TriggerTypes. \
 * {@link KnownTriggerTypes} can be used interchangeably with TriggerTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **HttpTrigger** \
 * **Unknown**
 */
export declare type TriggerTypes = string;

/** Defines values for UnauthenticatedClientAction. */
export declare type UnauthenticatedClientAction = "RedirectToLoginPage" | "AllowAnonymous";

/** Usage of the quota resource. */
export declare type Usage = ProxyOnlyResource & {
    /**
     * Friendly name shown in the UI.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /**
     * Name of the quota resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceName?: string;
    /**
     * Units of measurement for the quota resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: string;
    /**
     * The current value of the resource counter.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentValue?: number;
    /**
     * The resource limit.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * Next reset time for the resource counter.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextResetTime?: Date;
    /**
     * Compute mode used for this usage.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly computeMode?: ComputeModeOptions;
    /**
     * Site mode used for this usage.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly siteMode?: string;
};

/** Collection of usages. */
export declare interface UsageCollection {
    /** Collection of resources. */
    value: Usage[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for UsageState. */
export declare type UsageState = "Normal" | "Exceeded";

/** User credentials used for publishing activity. */
export declare type User = ProxyOnlyResource & {
    /** Username used for publishing. */
    publishingUserName?: string;
    /**
     * Password used for publishing.
     * This value contains a credential. Consider obscuring before showing to users
     */
    publishingPassword?: string;
    /**
     * Password hash used for publishing.
     * This value contains a credential. Consider obscuring before showing to users
     */
    publishingPasswordHash?: string;
    /**
     * Password hash salt used for publishing.
     * This value contains a credential. Consider obscuring before showing to users
     */
    publishingPasswordHashSalt?: string;
    /** Url of SCM site. */
    scmUri?: string;
};

/** Resource validation request content. */
export declare interface ValidateRequest {
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
}

/**
 * Defines values for ValidateResourceTypes. \
 * {@link KnownValidateResourceTypes} can be used interchangeably with ValidateResourceTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServerFarm** \
 * **Site**
 */
export declare type ValidateResourceTypes = string;

/** Describes the result of resource validation. */
export declare interface ValidateResponse {
    /** Result of validation. */
    status?: string;
    /** Error details for the case when validation fails. */
    error?: ValidateResponseError;
}

/** Error details for when validation fails. */
export declare interface ValidateResponseError {
    /** Validation error code. */
    code?: string;
    /** Validation error message. */
    message?: string;
}

/** Virtual application in an app. */
export declare interface VirtualApplication {
    /** Virtual path. */
    virtualPath?: string;
    /** Physical path. */
    physicalPath?: string;
    /** <code>true</code> if preloading is enabled; otherwise, <code>false</code>. */
    preloadEnabled?: boolean;
    /** Virtual directories for virtual application. */
    virtualDirectories?: VirtualDirectory[];
}

/** Directory for virtual application. */
export declare interface VirtualDirectory {
    /** Path to virtual application. */
    virtualPath?: string;
    /** Physical path. */
    physicalPath?: string;
}

/** Virtual IP mapping. */
export declare interface VirtualIPMapping {
    /** Virtual IP address. */
    virtualIP?: string;
    /** Internal HTTP port. */
    internalHttpPort?: number;
    /** Internal HTTPS port. */
    internalHttpsPort?: number;
    /** Is virtual IP mapping in use. */
    inUse?: boolean;
    /** name of the service that virtual IP is assigned to */
    serviceName?: string;
}

/** Specification for using a Virtual Network. */
export declare interface VirtualNetworkProfile {
    /** Resource id of the Virtual Network. */
    id?: string;
    /**
     * Name of the Virtual Network (read-only).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type of the Virtual Network (read-only).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Subnet within the Virtual Network. */
    subnet?: string;
}

/** The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package. */
export declare type VnetGateway = ProxyOnlyResource & {
    /** The Virtual Network name. */
    vnetName?: string;
    /** The URI where the VPN package can be downloaded. */
    vpnPackageUri?: string;
};

/** Virtual Network information contract. */
export declare type VnetInfo = ProxyOnlyResource & {
    /** The Virtual Network's resource ID. */
    vnetResourceId?: string;
    /**
     * The client certificate thumbprint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly certThumbprint?: string;
    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a
     * Point-To-Site VPN connection.
     */
    certBlob?: string;
    /**
     * The routes that this Virtual Network connection uses.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly routes?: VnetRoute[];
    /**
     * <code>true</code> if a resync is required; otherwise, <code>false</code>.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resyncRequired?: boolean;
    /** DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses. */
    dnsServers?: string;
    /** Flag that is used to denote if this is VNET injection */
    isSwift?: boolean;
};

/** The required set of inputs to validate a VNET */
export declare type VnetParameters = ProxyOnlyResource & {
    /** The Resource Group of the VNET to be validated */
    vnetResourceGroup?: string;
    /** The name of the VNET to be validated */
    vnetName?: string;
    /** The subnet name to be validated */
    vnetSubnetName?: string;
};

/** Virtual Network route contract used to pass routing information for a Virtual Network. */
export declare type VnetRoute = ProxyOnlyResource & {
    /** The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified. */
    startAddress?: string;
    /** The ending address for this route. If the start address is specified in CIDR notation, this must be omitted. */
    endAddress?: string;
    /**
     * The type of route this is:
     * DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
     * INHERITED - Routes inherited from the real Virtual Network routes
     * STATIC - Static route set on the app only
     *
     * These values will be used for syncing an app's routes with those from a Virtual Network.
     */
    routeType?: RouteType;
};

/** A class that describes the reason for a validation failure. */
export declare type VnetValidationFailureDetails = ProxyOnlyResource & {
    /** A flag describing whether or not validation failed. */
    failed?: boolean;
    /** A list of tests that failed in the validation. */
    failedTests?: VnetValidationTestFailure[];
};

/** A class that describes a test that failed during NSG and UDR validation. */
export declare type VnetValidationTestFailure = ProxyOnlyResource & {
    /** The name of the test that failed. */
    testName?: string;
    /** The details of what caused the failure, e.g. the blocking rule name, etc. */
    details?: string;
};

/** Collection of App Service apps. */
export declare interface WebAppCollection {
    /** Collection of resources. */
    value: Site[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Collection of app instances. */
export declare interface WebAppInstanceCollection {
    /** Collection of resources. */
    value: SiteInstance[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a WebApps. */
export declare interface WebApps {
    /**
     * Description for Get all apps for a subscription.
     * @param options The options parameters.
     */
    list(options?: WebAppsListOptionalParams): PagedAsyncIterableIterator<Site>;
    /**
     * Description for Gets all web, mobile, and API apps in the specified resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: WebAppsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Site>;
    /**
     * Description for Gets existing backups of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listBackups(resourceGroupName: string, name: string, options?: WebAppsListBackupsOptionalParams): PagedAsyncIterableIterator<BackupItem>;
    /**
     * Description for List the configurations of an app
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listConfigurations(resourceGroupName: string, name: string, options?: WebAppsListConfigurationsOptionalParams): PagedAsyncIterableIterator<SiteConfigResource>;
    /**
     * Description for Gets a list of web app configuration snapshots identifiers. Each element of the list
     * contains a timestamp and the ID of the snapshot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listConfigurationSnapshotInfo(resourceGroupName: string, name: string, options?: WebAppsListConfigurationSnapshotInfoOptionalParams): PagedAsyncIterableIterator<SiteConfigurationSnapshotInfo>;
    /**
     * Description for List continuous web jobs for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param options The options parameters.
     */
    listContinuousWebJobs(resourceGroupName: string, name: string, options?: WebAppsListContinuousWebJobsOptionalParams): PagedAsyncIterableIterator<ContinuousWebJob>;
    /**
     * Description for List deployments for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listDeployments(resourceGroupName: string, name: string, options?: WebAppsListDeploymentsOptionalParams): PagedAsyncIterableIterator<Deployment>;
    /**
     * Description for Lists ownership identifiers for domain associated with web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listDomainOwnershipIdentifiers(resourceGroupName: string, name: string, options?: WebAppsListDomainOwnershipIdentifiersOptionalParams): PagedAsyncIterableIterator<Identifier>;
    /**
     * Description for List the functions for a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param options The options parameters.
     */
    listFunctions(resourceGroupName: string, name: string, options?: WebAppsListFunctionsOptionalParams): PagedAsyncIterableIterator<FunctionEnvelope>;
    /**
     * Description for Get hostname bindings for an app or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listHostNameBindings(resourceGroupName: string, name: string, options?: WebAppsListHostNameBindingsOptionalParams): PagedAsyncIterableIterator<HostNameBinding>;
    /**
     * Description for Gets all scale-out instances of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listInstanceIdentifiers(resourceGroupName: string, name: string, options?: WebAppsListInstanceIdentifiersOptionalParams): PagedAsyncIterableIterator<SiteInstance>;
    /**
     * Description for Get list of processes for a web site, or a deployment slot, or for a specific
     * scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    listInstanceProcesses(resourceGroupName: string, name: string, instanceId: string, options?: WebAppsListInstanceProcessesOptionalParams): PagedAsyncIterableIterator<ProcessInfo>;
    /**
     * Description for List module information for a process by its ID for a specific scaled-out instance
     * in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    listInstanceProcessModules(resourceGroupName: string, name: string, processId: string, instanceId: string, options?: WebAppsListInstanceProcessModulesOptionalParams): PagedAsyncIterableIterator<ProcessModuleInfo>;
    /**
     * Description for List the threads in a process by its ID for a specific scaled-out instance in a web
     * site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    listInstanceProcessThreads(resourceGroupName: string, name: string, processId: string, instanceId: string, options?: WebAppsListInstanceProcessThreadsOptionalParams): PagedAsyncIterableIterator<ProcessThreadInfo>;
    /**
     * Description for Gets existing backups of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listSiteBackups(resourceGroupName: string, name: string, options?: WebAppsListSiteBackupsOptionalParams): PagedAsyncIterableIterator<BackupItem>;
    /**
     * Description for Gets perfmon counters for web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    listPerfMonCounters(resourceGroupName: string, name: string, options?: WebAppsListPerfMonCountersOptionalParams): PagedAsyncIterableIterator<PerfMonResponse>;
    /**
     * Description for Get list of processes for a web site, or a deployment slot, or for a specific
     * scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param options The options parameters.
     */
    listProcesses(resourceGroupName: string, name: string, options?: WebAppsListProcessesOptionalParams): PagedAsyncIterableIterator<ProcessInfo>;
    /**
     * Description for List module information for a process by its ID for a specific scaled-out instance
     * in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param options The options parameters.
     */
    listProcessModules(resourceGroupName: string, name: string, processId: string, options?: WebAppsListProcessModulesOptionalParams): PagedAsyncIterableIterator<ProcessModuleInfo>;
    /**
     * Description for List the threads in a process by its ID for a specific scaled-out instance in a web
     * site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param options The options parameters.
     */
    listProcessThreads(resourceGroupName: string, name: string, processId: string, options?: WebAppsListProcessThreadsOptionalParams): PagedAsyncIterableIterator<ProcessThreadInfo>;
    /**
     * Description for Get public certificates for an app or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listPublicCertificates(resourceGroupName: string, name: string, options?: WebAppsListPublicCertificatesOptionalParams): PagedAsyncIterableIterator<PublicCertificate>;
    /**
     * Description for Get list of siteextensions for a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param options The options parameters.
     */
    listSiteExtensions(resourceGroupName: string, name: string, options?: WebAppsListSiteExtensionsOptionalParams): PagedAsyncIterableIterator<SiteExtensionInfo>;
    /**
     * Description for Gets an app's deployment slots.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listSlots(resourceGroupName: string, name: string, options?: WebAppsListSlotsOptionalParams): PagedAsyncIterableIterator<Site>;
    /**
     * Description for Gets existing backups of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get backups of the
     *             production slot.
     * @param options The options parameters.
     */
    listBackupsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListBackupsSlotOptionalParams): PagedAsyncIterableIterator<BackupItem>;
    /**
     * Description for List the configurations of an app
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will return
     *             configuration for the production slot.
     * @param options The options parameters.
     */
    listConfigurationsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListConfigurationsSlotOptionalParams): PagedAsyncIterableIterator<SiteConfigResource>;
    /**
     * Description for Gets a list of web app configuration snapshots identifiers. Each element of the list
     * contains a timestamp and the ID of the snapshot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will return
     *             configuration for the production slot.
     * @param options The options parameters.
     */
    listConfigurationSnapshotInfoSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListConfigurationSnapshotInfoSlotOptionalParams): PagedAsyncIterableIterator<SiteConfigurationSnapshotInfo>;
    /**
     * Description for List continuous web jobs for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment
     *             for the production slot.
     * @param options The options parameters.
     */
    listContinuousWebJobsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListContinuousWebJobsSlotOptionalParams): PagedAsyncIterableIterator<ContinuousWebJob>;
    /**
     * Description for List deployments for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    listDeploymentsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListDeploymentsSlotOptionalParams): PagedAsyncIterableIterator<Deployment>;
    /**
     * Description for Lists ownership identifiers for domain associated with web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the binding
     *             for the production slot.
     * @param options The options parameters.
     */
    listDomainOwnershipIdentifiersSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListDomainOwnershipIdentifiersSlotOptionalParams): PagedAsyncIterableIterator<Identifier>;
    /**
     * Description for List the functions for a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    listInstanceFunctionsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListInstanceFunctionsSlotOptionalParams): PagedAsyncIterableIterator<FunctionEnvelope>;
    /**
     * Description for Get hostname bindings for an app or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API gets hostname bindings
     *             for the production slot.
     * @param options The options parameters.
     */
    listHostNameBindingsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListHostNameBindingsSlotOptionalParams): PagedAsyncIterableIterator<HostNameBinding>;
    /**
     * Description for Gets all scale-out instances of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API gets the production
     *             slot instances.
     * @param options The options parameters.
     */
    listInstanceIdentifiersSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListInstanceIdentifiersSlotOptionalParams): PagedAsyncIterableIterator<SiteInstance>;
    /**
     * Description for Get list of processes for a web site, or a deployment slot, or for a specific
     * scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    listInstanceProcessesSlot(resourceGroupName: string, name: string, slot: string, instanceId: string, options?: WebAppsListInstanceProcessesSlotOptionalParams): PagedAsyncIterableIterator<ProcessInfo>;
    /**
     * Description for List module information for a process by its ID for a specific scaled-out instance
     * in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    listInstanceProcessModulesSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, options?: WebAppsListInstanceProcessModulesSlotOptionalParams): PagedAsyncIterableIterator<ProcessModuleInfo>;
    /**
     * Description for List the threads in a process by its ID for a specific scaled-out instance in a web
     * site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    listInstanceProcessThreadsSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, options?: WebAppsListInstanceProcessThreadsSlotOptionalParams): PagedAsyncIterableIterator<ProcessThreadInfo>;
    /**
     * Description for Gets existing backups of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get backups of the
     *             production slot.
     * @param options The options parameters.
     */
    listSiteBackupsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListSiteBackupsSlotOptionalParams): PagedAsyncIterableIterator<BackupItem>;
    /**
     * Description for Gets perfmon counters for web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    listPerfMonCountersSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListPerfMonCountersSlotOptionalParams): PagedAsyncIterableIterator<PerfMonResponse>;
    /**
     * Description for Get list of processes for a web site, or a deployment slot, or for a specific
     * scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    listProcessesSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListProcessesSlotOptionalParams): PagedAsyncIterableIterator<ProcessInfo>;
    /**
     * Description for List module information for a process by its ID for a specific scaled-out instance
     * in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    listProcessModulesSlot(resourceGroupName: string, name: string, processId: string, slot: string, options?: WebAppsListProcessModulesSlotOptionalParams): PagedAsyncIterableIterator<ProcessModuleInfo>;
    /**
     * Description for List the threads in a process by its ID for a specific scaled-out instance in a web
     * site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    listProcessThreadsSlot(resourceGroupName: string, name: string, processId: string, slot: string, options?: WebAppsListProcessThreadsSlotOptionalParams): PagedAsyncIterableIterator<ProcessThreadInfo>;
    /**
     * Description for Get public certificates for an app or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API gets hostname bindings
     *             for the production slot.
     * @param options The options parameters.
     */
    listPublicCertificatesSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListPublicCertificatesSlotOptionalParams): PagedAsyncIterableIterator<PublicCertificate>;
    /**
     * Description for Get list of siteextensions for a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API uses the production
     *             slot.
     * @param options The options parameters.
     */
    listSiteExtensionsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListSiteExtensionsSlotOptionalParams): PagedAsyncIterableIterator<SiteExtensionInfo>;
    /**
     * Description for Get the difference in configuration settings between two web app slots.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the source slot. If a slot is not specified, the production slot is used as the
     *             source slot.
     * @param slotSwapEntity JSON object that contains the target slot name. See example.
     * @param options The options parameters.
     */
    listSlotDifferencesSlot(resourceGroupName: string, name: string, slot: string, slotSwapEntity: CsmSlotEntity, options?: WebAppsListSlotDifferencesSlotOptionalParams): PagedAsyncIterableIterator<SlotDifference>;
    /**
     * Description for Returns all Snapshots to the user.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Website Name.
     * @param slot Website Slot.
     * @param options The options parameters.
     */
    listSnapshotsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListSnapshotsSlotOptionalParams): PagedAsyncIterableIterator<Snapshot>;
    /**
     * Description for Returns all Snapshots to the user from DRSecondary endpoint.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Website Name.
     * @param slot Website Slot.
     * @param options The options parameters.
     */
    listSnapshotsFromDRSecondarySlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListSnapshotsFromDRSecondarySlotOptionalParams): PagedAsyncIterableIterator<Snapshot>;
    /**
     * Description for List triggered web jobs for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment
     *             for the production slot.
     * @param options The options parameters.
     */
    listTriggeredWebJobsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListTriggeredWebJobsSlotOptionalParams): PagedAsyncIterableIterator<TriggeredWebJob>;
    /**
     * Description for List a triggered web job's history for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param slot Name of the deployment slot. If a slot is not specified, the API uses the production
     *             slot.
     * @param options The options parameters.
     */
    listTriggeredWebJobHistorySlot(resourceGroupName: string, name: string, webJobName: string, slot: string, options?: WebAppsListTriggeredWebJobHistorySlotOptionalParams): PagedAsyncIterableIterator<TriggeredJobHistory>;
    /**
     * Description for Gets the quota usage information of an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get quota
     *             information of the production slot.
     * @param options The options parameters.
     */
    listUsagesSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListUsagesSlotOptionalParams): PagedAsyncIterableIterator<CsmUsageQuota>;
    /**
     * Description for List webjobs for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    listWebJobsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListWebJobsSlotOptionalParams): PagedAsyncIterableIterator<WebJob>;
    /**
     * Description for Get the difference in configuration settings between two web app slots.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slotSwapEntity JSON object that contains the target slot name. See example.
     * @param options The options parameters.
     */
    listSlotDifferencesFromProduction(resourceGroupName: string, name: string, slotSwapEntity: CsmSlotEntity, options?: WebAppsListSlotDifferencesFromProductionOptionalParams): PagedAsyncIterableIterator<SlotDifference>;
    /**
     * Description for Returns all Snapshots to the user.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Website Name.
     * @param options The options parameters.
     */
    listSnapshots(resourceGroupName: string, name: string, options?: WebAppsListSnapshotsOptionalParams): PagedAsyncIterableIterator<Snapshot>;
    /**
     * Description for Returns all Snapshots to the user from DRSecondary endpoint.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Website Name.
     * @param options The options parameters.
     */
    listSnapshotsFromDRSecondary(resourceGroupName: string, name: string, options?: WebAppsListSnapshotsFromDRSecondaryOptionalParams): PagedAsyncIterableIterator<Snapshot>;
    /**
     * Description for List triggered web jobs for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param options The options parameters.
     */
    listTriggeredWebJobs(resourceGroupName: string, name: string, options?: WebAppsListTriggeredWebJobsOptionalParams): PagedAsyncIterableIterator<TriggeredWebJob>;
    /**
     * Description for List a triggered web job's history for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param options The options parameters.
     */
    listTriggeredWebJobHistory(resourceGroupName: string, name: string, webJobName: string, options?: WebAppsListTriggeredWebJobHistoryOptionalParams): PagedAsyncIterableIterator<TriggeredJobHistory>;
    /**
     * Description for Gets the quota usage information of an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listUsages(resourceGroupName: string, name: string, options?: WebAppsListUsagesOptionalParams): PagedAsyncIterableIterator<CsmUsageQuota>;
    /**
     * Description for List webjobs for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param options The options parameters.
     */
    listWebJobs(resourceGroupName: string, name: string, options?: WebAppsListWebJobsOptionalParams): PagedAsyncIterableIterator<WebJob>;
    /**
     * Description for Gets the details of a web, mobile, or API app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, name: string, options?: WebAppsGetOptionalParams): Promise<WebAppsGetResponse>;
    /**
     * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an
     * existing app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Unique name of the app to create or update. To create or update a deployment slot, use
     *             the {slot} parameter.
     * @param siteEnvelope A JSON representation of the app properties. See example.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, name: string, siteEnvelope: Site, options?: WebAppsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateOrUpdateResponse>, WebAppsCreateOrUpdateResponse>>;
    /**
     * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an
     * existing app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Unique name of the app to create or update. To create or update a deployment slot, use
     *             the {slot} parameter.
     * @param siteEnvelope A JSON representation of the app properties. See example.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, name: string, siteEnvelope: Site, options?: WebAppsCreateOrUpdateOptionalParams): Promise<WebAppsCreateOrUpdateResponse>;
    /**
     * Description for Deletes a web, mobile, or API app, or one of the deployment slots.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app to delete.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, name: string, options?: WebAppsDeleteOptionalParams): Promise<void>;
    /**
     * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an
     * existing app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Unique name of the app to create or update. To create or update a deployment slot, use
     *             the {slot} parameter.
     * @param siteEnvelope A JSON representation of the app properties. See example.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, name: string, siteEnvelope: SitePatchResource, options?: WebAppsUpdateOptionalParams): Promise<WebAppsUpdateResponse>;
    /**
     * Description for Analyze a custom hostname.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    analyzeCustomHostname(resourceGroupName: string, name: string, options?: WebAppsAnalyzeCustomHostnameOptionalParams): Promise<WebAppsAnalyzeCustomHostnameResponse>;
    /**
     * Description for Applies the configuration settings from the target slot onto the current slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slotSwapEntity JSON object that contains the target slot name. See example.
     * @param options The options parameters.
     */
    applySlotConfigToProduction(resourceGroupName: string, name: string, slotSwapEntity: CsmSlotEntity, options?: WebAppsApplySlotConfigToProductionOptionalParams): Promise<void>;
    /**
     * Description for Creates a backup of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param request Backup configuration. You can use the JSON response from the POST action as input
     *                here.
     * @param options The options parameters.
     */
    backup(resourceGroupName: string, name: string, request: BackupRequest, options?: WebAppsBackupOptionalParams): Promise<WebAppsBackupResponse>;
    /**
     * Description for Gets a backup of an app by its ID.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param backupId ID of the backup.
     * @param options The options parameters.
     */
    getBackupStatus(resourceGroupName: string, name: string, backupId: string, options?: WebAppsGetBackupStatusOptionalParams): Promise<WebAppsGetBackupStatusResponse>;
    /**
     * Description for Deletes a backup of an app by its ID.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param backupId ID of the backup.
     * @param options The options parameters.
     */
    deleteBackup(resourceGroupName: string, name: string, backupId: string, options?: WebAppsDeleteBackupOptionalParams): Promise<void>;
    /**
     * Description for Gets status of a web app backup that may be in progress, including secrets
     * associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS
     * URL for the backup if a new URL is passed in the request body.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param backupId ID of backup.
     * @param request Information on backup request.
     * @param options The options parameters.
     */
    listBackupStatusSecrets(resourceGroupName: string, name: string, backupId: string, request: BackupRequest, options?: WebAppsListBackupStatusSecretsOptionalParams): Promise<WebAppsListBackupStatusSecretsResponse>;
    /**
     * Description for Restores a specific backup to another app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param backupId ID of the backup.
     * @param request Information on restore request .
     * @param options The options parameters.
     */
    beginRestore(resourceGroupName: string, name: string, backupId: string, request: RestoreRequest, options?: WebAppsRestoreOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Restores a specific backup to another app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param backupId ID of the backup.
     * @param request Information on restore request .
     * @param options The options parameters.
     */
    beginRestoreAndWait(resourceGroupName: string, name: string, backupId: string, request: RestoreRequest, options?: WebAppsRestoreOptionalParams): Promise<void>;
    /**
     * Description for Replaces the application settings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param appSettings Application settings of the app.
     * @param options The options parameters.
     */
    updateApplicationSettings(resourceGroupName: string, name: string, appSettings: StringDictionary, options?: WebAppsUpdateApplicationSettingsOptionalParams): Promise<WebAppsUpdateApplicationSettingsResponse>;
    /**
     * Description for Gets the application settings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listApplicationSettings(resourceGroupName: string, name: string, options?: WebAppsListApplicationSettingsOptionalParams): Promise<WebAppsListApplicationSettingsResponse>;
    /**
     * Description for Updates the Authentication / Authorization settings associated with web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param siteAuthSettings Auth settings associated with web app.
     * @param options The options parameters.
     */
    updateAuthSettings(resourceGroupName: string, name: string, siteAuthSettings: SiteAuthSettings, options?: WebAppsUpdateAuthSettingsOptionalParams): Promise<WebAppsUpdateAuthSettingsResponse>;
    /**
     * Description for Gets the Authentication/Authorization settings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    getAuthSettings(resourceGroupName: string, name: string, options?: WebAppsGetAuthSettingsOptionalParams): Promise<WebAppsGetAuthSettingsResponse>;
    /**
     * Description for Updates the Azure storage account configurations of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param azureStorageAccounts Azure storage accounts of the app.
     * @param options The options parameters.
     */
    updateAzureStorageAccounts(resourceGroupName: string, name: string, azureStorageAccounts: AzureStoragePropertyDictionaryResource, options?: WebAppsUpdateAzureStorageAccountsOptionalParams): Promise<WebAppsUpdateAzureStorageAccountsResponse>;
    /**
     * Description for Gets the Azure storage account configurations of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listAzureStorageAccounts(resourceGroupName: string, name: string, options?: WebAppsListAzureStorageAccountsOptionalParams): Promise<WebAppsListAzureStorageAccountsResponse>;
    /**
     * Description for Updates the backup configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param request Edited backup configuration.
     * @param options The options parameters.
     */
    updateBackupConfiguration(resourceGroupName: string, name: string, request: BackupRequest, options?: WebAppsUpdateBackupConfigurationOptionalParams): Promise<WebAppsUpdateBackupConfigurationResponse>;
    /**
     * Description for Deletes the backup configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    deleteBackupConfiguration(resourceGroupName: string, name: string, options?: WebAppsDeleteBackupConfigurationOptionalParams): Promise<void>;
    /**
     * Description for Gets the backup configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    getBackupConfiguration(resourceGroupName: string, name: string, options?: WebAppsGetBackupConfigurationOptionalParams): Promise<WebAppsGetBackupConfigurationResponse>;
    /**
     * Description for Gets the config reference app settings and status of an app
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    getAppSettingsKeyVaultReferences(resourceGroupName: string, name: string, options?: WebAppsGetAppSettingsKeyVaultReferencesOptionalParams): Promise<WebAppsGetAppSettingsKeyVaultReferencesResponse>;
    /**
     * Description for Gets the config reference and status of an app
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param appSettingKey App Setting key name.
     * @param options The options parameters.
     */
    getAppSettingKeyVaultReference(resourceGroupName: string, name: string, appSettingKey: string, options?: WebAppsGetAppSettingKeyVaultReferenceOptionalParams): Promise<WebAppsGetAppSettingKeyVaultReferenceResponse>;
    /**
     * Description for Replaces the connection strings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param connectionStrings Connection strings of the app or deployment slot. See example.
     * @param options The options parameters.
     */
    updateConnectionStrings(resourceGroupName: string, name: string, connectionStrings: ConnectionStringDictionary, options?: WebAppsUpdateConnectionStringsOptionalParams): Promise<WebAppsUpdateConnectionStringsResponse>;
    /**
     * Description for Gets the connection strings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listConnectionStrings(resourceGroupName: string, name: string, options?: WebAppsListConnectionStringsOptionalParams): Promise<WebAppsListConnectionStringsResponse>;
    /**
     * Description for Gets the logging configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    getDiagnosticLogsConfiguration(resourceGroupName: string, name: string, options?: WebAppsGetDiagnosticLogsConfigurationOptionalParams): Promise<WebAppsGetDiagnosticLogsConfigurationResponse>;
    /**
     * Description for Updates the logging configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param siteLogsConfig A SiteLogsConfig JSON object that contains the logging configuration to change
     *                       in the "properties" property.
     * @param options The options parameters.
     */
    updateDiagnosticLogsConfig(resourceGroupName: string, name: string, siteLogsConfig: SiteLogsConfig, options?: WebAppsUpdateDiagnosticLogsConfigOptionalParams): Promise<WebAppsUpdateDiagnosticLogsConfigResponse>;
    /**
     * Description for Replaces the metadata of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param metadata Edited metadata of the app or deployment slot. See example.
     * @param options The options parameters.
     */
    updateMetadata(resourceGroupName: string, name: string, metadata: StringDictionary, options?: WebAppsUpdateMetadataOptionalParams): Promise<WebAppsUpdateMetadataResponse>;
    /**
     * Description for Gets the metadata of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listMetadata(resourceGroupName: string, name: string, options?: WebAppsListMetadataOptionalParams): Promise<WebAppsListMetadataResponse>;
    /**
     * Description for Gets the Git/FTP publishing credentials of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    beginListPublishingCredentials(resourceGroupName: string, name: string, options?: WebAppsListPublishingCredentialsOptionalParams): Promise<PollerLike<PollOperationState<WebAppsListPublishingCredentialsResponse>, WebAppsListPublishingCredentialsResponse>>;
    /**
     * Description for Gets the Git/FTP publishing credentials of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    beginListPublishingCredentialsAndWait(resourceGroupName: string, name: string, options?: WebAppsListPublishingCredentialsOptionalParams): Promise<WebAppsListPublishingCredentialsResponse>;
    /**
     * Description for Updates the Push settings associated with web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param pushSettings Push settings associated with web app.
     * @param options The options parameters.
     */
    updateSitePushSettings(resourceGroupName: string, name: string, pushSettings: PushSettings, options?: WebAppsUpdateSitePushSettingsOptionalParams): Promise<WebAppsUpdateSitePushSettingsResponse>;
    /**
     * Description for Gets the Push settings associated with web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    listSitePushSettings(resourceGroupName: string, name: string, options?: WebAppsListSitePushSettingsOptionalParams): Promise<WebAppsListSitePushSettingsResponse>;
    /**
     * Description for Gets the names of app settings and connection strings that stick to the slot (not
     * swapped).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listSlotConfigurationNames(resourceGroupName: string, name: string, options?: WebAppsListSlotConfigurationNamesOptionalParams): Promise<WebAppsListSlotConfigurationNamesResponse>;
    /**
     * Description for Updates the names of application settings and connection string that remain with the
     * slot during swap operation.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slotConfigNames Names of application settings and connection strings. See example.
     * @param options The options parameters.
     */
    updateSlotConfigurationNames(resourceGroupName: string, name: string, slotConfigNames: SlotConfigNamesResource, options?: WebAppsUpdateSlotConfigurationNamesOptionalParams): Promise<WebAppsUpdateSlotConfigurationNamesResponse>;
    /**
     * Description for Gets the configuration of an app, such as platform version and bitness, default
     * documents, virtual applications, Always On, etc.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    getConfiguration(resourceGroupName: string, name: string, options?: WebAppsGetConfigurationOptionalParams): Promise<WebAppsGetConfigurationResponse>;
    /**
     * Description for Updates the configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param siteConfig JSON representation of a SiteConfig object. See example.
     * @param options The options parameters.
     */
    createOrUpdateConfiguration(resourceGroupName: string, name: string, siteConfig: SiteConfigResource, options?: WebAppsCreateOrUpdateConfigurationOptionalParams): Promise<WebAppsCreateOrUpdateConfigurationResponse>;
    /**
     * Description for Updates the configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param siteConfig JSON representation of a SiteConfig object. See example.
     * @param options The options parameters.
     */
    updateConfiguration(resourceGroupName: string, name: string, siteConfig: SiteConfigResource, options?: WebAppsUpdateConfigurationOptionalParams): Promise<WebAppsUpdateConfigurationResponse>;
    /**
     * Description for Gets a snapshot of the configuration of an app at a previous point in time.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param snapshotId The ID of the snapshot to read.
     * @param options The options parameters.
     */
    getConfigurationSnapshot(resourceGroupName: string, name: string, snapshotId: string, options?: WebAppsGetConfigurationSnapshotOptionalParams): Promise<WebAppsGetConfigurationSnapshotResponse>;
    /**
     * Description for Reverts the configuration of an app to a previous snapshot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param snapshotId The ID of the snapshot to read.
     * @param options The options parameters.
     */
    recoverSiteConfigurationSnapshot(resourceGroupName: string, name: string, snapshotId: string, options?: WebAppsRecoverSiteConfigurationSnapshotOptionalParams): Promise<void>;
    /**
     * Description for Gets the last lines of docker logs for the given site
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    getWebSiteContainerLogs(resourceGroupName: string, name: string, options?: WebAppsGetWebSiteContainerLogsOptionalParams): Promise<WebAppsGetWebSiteContainerLogsResponse>;
    /**
     * Description for Gets the ZIP archived docker log files for the given site
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    getContainerLogsZip(resourceGroupName: string, name: string, options?: WebAppsGetContainerLogsZipOptionalParams): Promise<WebAppsGetContainerLogsZipResponse>;
    /**
     * Description for Gets a continuous web job by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param options The options parameters.
     */
    getContinuousWebJob(resourceGroupName: string, name: string, webJobName: string, options?: WebAppsGetContinuousWebJobOptionalParams): Promise<WebAppsGetContinuousWebJobResponse>;
    /**
     * Description for Delete a continuous web job by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param options The options parameters.
     */
    deleteContinuousWebJob(resourceGroupName: string, name: string, webJobName: string, options?: WebAppsDeleteContinuousWebJobOptionalParams): Promise<void>;
    /**
     * Description for Start a continuous web job for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param options The options parameters.
     */
    startContinuousWebJob(resourceGroupName: string, name: string, webJobName: string, options?: WebAppsStartContinuousWebJobOptionalParams): Promise<void>;
    /**
     * Description for Stop a continuous web job for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param options The options parameters.
     */
    stopContinuousWebJob(resourceGroupName: string, name: string, webJobName: string, options?: WebAppsStopContinuousWebJobOptionalParams): Promise<void>;
    /**
     * Description for Get a deployment by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param id Deployment ID.
     * @param options The options parameters.
     */
    getDeployment(resourceGroupName: string, name: string, id: string, options?: WebAppsGetDeploymentOptionalParams): Promise<WebAppsGetDeploymentResponse>;
    /**
     * Description for Create a deployment for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param id ID of an existing deployment.
     * @param deployment Deployment details.
     * @param options The options parameters.
     */
    createDeployment(resourceGroupName: string, name: string, id: string, deployment: Deployment, options?: WebAppsCreateDeploymentOptionalParams): Promise<WebAppsCreateDeploymentResponse>;
    /**
     * Description for Delete a deployment by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param id Deployment ID.
     * @param options The options parameters.
     */
    deleteDeployment(resourceGroupName: string, name: string, id: string, options?: WebAppsDeleteDeploymentOptionalParams): Promise<void>;
    /**
     * Description for List deployment log for specific deployment for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param id The ID of a specific deployment. This is the value of the name property in the JSON
     *           response from "GET /api/sites/{siteName}/deployments".
     * @param options The options parameters.
     */
    listDeploymentLog(resourceGroupName: string, name: string, id: string, options?: WebAppsListDeploymentLogOptionalParams): Promise<WebAppsListDeploymentLogResponse>;
    /**
     * Description for Discovers an existing app backup that can be restored from a blob in Azure storage.
     * Use this to get information about the databases stored in a backup.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param request A RestoreRequest object that includes Azure storage URL and blog name for discovery
     *                of backup.
     * @param options The options parameters.
     */
    discoverBackup(resourceGroupName: string, name: string, request: RestoreRequest, options?: WebAppsDiscoverBackupOptionalParams): Promise<WebAppsDiscoverBackupResponse>;
    /**
     * Description for Get domain ownership identifier for web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param domainOwnershipIdentifierName Name of domain ownership identifier.
     * @param options The options parameters.
     */
    getDomainOwnershipIdentifier(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, options?: WebAppsGetDomainOwnershipIdentifierOptionalParams): Promise<WebAppsGetDomainOwnershipIdentifierResponse>;
    /**
     * Description for Creates a domain ownership identifier for web app, or updates an existing ownership
     * identifier.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param domainOwnershipIdentifierName Name of domain ownership identifier.
     * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
     * @param options The options parameters.
     */
    createOrUpdateDomainOwnershipIdentifier(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, domainOwnershipIdentifier: Identifier, options?: WebAppsCreateOrUpdateDomainOwnershipIdentifierOptionalParams): Promise<WebAppsCreateOrUpdateDomainOwnershipIdentifierResponse>;
    /**
     * Description for Deletes a domain ownership identifier for a web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param domainOwnershipIdentifierName Name of domain ownership identifier.
     * @param options The options parameters.
     */
    deleteDomainOwnershipIdentifier(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, options?: WebAppsDeleteDomainOwnershipIdentifierOptionalParams): Promise<void>;
    /**
     * Description for Creates a domain ownership identifier for web app, or updates an existing ownership
     * identifier.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param domainOwnershipIdentifierName Name of domain ownership identifier.
     * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
     * @param options The options parameters.
     */
    updateDomainOwnershipIdentifier(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, domainOwnershipIdentifier: Identifier, options?: WebAppsUpdateDomainOwnershipIdentifierOptionalParams): Promise<WebAppsUpdateDomainOwnershipIdentifierResponse>;
    /**
     * Description for Get the status of the last MSDeploy operation.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    getMSDeployStatus(resourceGroupName: string, name: string, options?: WebAppsGetMSDeployStatusOptionalParams): Promise<WebAppsGetMSDeployStatusResponse>;
    /**
     * Description for Invoke the MSDeploy web app extension.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param mSDeploy Details of MSDeploy operation
     * @param options The options parameters.
     */
    beginCreateMSDeployOperation(resourceGroupName: string, name: string, mSDeploy: MSDeploy, options?: WebAppsCreateMSDeployOperationOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateMSDeployOperationResponse>, WebAppsCreateMSDeployOperationResponse>>;
    /**
     * Description for Invoke the MSDeploy web app extension.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param mSDeploy Details of MSDeploy operation
     * @param options The options parameters.
     */
    beginCreateMSDeployOperationAndWait(resourceGroupName: string, name: string, mSDeploy: MSDeploy, options?: WebAppsCreateMSDeployOperationOptionalParams): Promise<WebAppsCreateMSDeployOperationResponse>;
    /**
     * Description for Get the MSDeploy Log for the last MSDeploy operation.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    getMSDeployLog(resourceGroupName: string, name: string, options?: WebAppsGetMSDeployLogOptionalParams): Promise<WebAppsGetMSDeployLogResponse>;
    /**
     * Description for Fetch a short lived token that can be exchanged for a master key.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    getFunctionsAdminToken(resourceGroupName: string, name: string, options?: WebAppsGetFunctionsAdminTokenOptionalParams): Promise<WebAppsGetFunctionsAdminTokenResponse>;
    /**
     * Description for Get function information by its ID for web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param options The options parameters.
     */
    getFunction(resourceGroupName: string, name: string, functionName: string, options?: WebAppsGetFunctionOptionalParams): Promise<WebAppsGetFunctionResponse>;
    /**
     * Description for Create function for web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param functionEnvelope Function details.
     * @param options The options parameters.
     */
    beginCreateFunction(resourceGroupName: string, name: string, functionName: string, functionEnvelope: FunctionEnvelope, options?: WebAppsCreateFunctionOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateFunctionResponse>, WebAppsCreateFunctionResponse>>;
    /**
     * Description for Create function for web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param functionEnvelope Function details.
     * @param options The options parameters.
     */
    beginCreateFunctionAndWait(resourceGroupName: string, name: string, functionName: string, functionEnvelope: FunctionEnvelope, options?: WebAppsCreateFunctionOptionalParams): Promise<WebAppsCreateFunctionResponse>;
    /**
     * Description for Delete a function for web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param options The options parameters.
     */
    deleteFunction(resourceGroupName: string, name: string, functionName: string, options?: WebAppsDeleteFunctionOptionalParams): Promise<void>;
    /**
     * Description for Add or update a function secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName The name of the function.
     * @param keyName The name of the key.
     * @param key The key to create or update
     * @param options The options parameters.
     */
    createOrUpdateFunctionSecret(resourceGroupName: string, name: string, functionName: string, keyName: string, key: KeyInfo, options?: WebAppsCreateOrUpdateFunctionSecretOptionalParams): Promise<WebAppsCreateOrUpdateFunctionSecretResponse>;
    /**
     * Description for Delete a function secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName The name of the function.
     * @param keyName The name of the key.
     * @param options The options parameters.
     */
    deleteFunctionSecret(resourceGroupName: string, name: string, functionName: string, keyName: string, options?: WebAppsDeleteFunctionSecretOptionalParams): Promise<void>;
    /**
     * Description for Get function keys for a function in a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param options The options parameters.
     */
    listFunctionKeys(resourceGroupName: string, name: string, functionName: string, options?: WebAppsListFunctionKeysOptionalParams): Promise<WebAppsListFunctionKeysResponse>;
    /**
     * Description for Get function secrets for a function in a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param options The options parameters.
     */
    listFunctionSecrets(resourceGroupName: string, name: string, functionName: string, options?: WebAppsListFunctionSecretsOptionalParams): Promise<WebAppsListFunctionSecretsResponse>;
    /**
     * Description for Get host secrets for a function app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param options The options parameters.
     */
    listHostKeys(resourceGroupName: string, name: string, options?: WebAppsListHostKeysOptionalParams): Promise<WebAppsListHostKeysResponse>;
    /**
     * Description for This is to allow calling via powershell and ARM template.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listSyncStatus(resourceGroupName: string, name: string, options?: WebAppsListSyncStatusOptionalParams): Promise<void>;
    /**
     * Description for Syncs function trigger metadata to the management database
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    syncFunctions(resourceGroupName: string, name: string, options?: WebAppsSyncFunctionsOptionalParams): Promise<void>;
    /**
     * Description for Add or update a host level secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param keyType The type of host key.
     * @param keyName The name of the key.
     * @param key The key to create or update
     * @param options The options parameters.
     */
    createOrUpdateHostSecret(resourceGroupName: string, name: string, keyType: string, keyName: string, key: KeyInfo, options?: WebAppsCreateOrUpdateHostSecretOptionalParams): Promise<WebAppsCreateOrUpdateHostSecretResponse>;
    /**
     * Description for Delete a host level secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param keyType The type of host key.
     * @param keyName The name of the key.
     * @param options The options parameters.
     */
    deleteHostSecret(resourceGroupName: string, name: string, keyType: string, keyName: string, options?: WebAppsDeleteHostSecretOptionalParams): Promise<void>;
    /**
     * Description for Get the named hostname binding for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param hostName Hostname in the hostname binding.
     * @param options The options parameters.
     */
    getHostNameBinding(resourceGroupName: string, name: string, hostName: string, options?: WebAppsGetHostNameBindingOptionalParams): Promise<WebAppsGetHostNameBindingResponse>;
    /**
     * Description for Creates a hostname binding for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param hostName Hostname in the hostname binding.
     * @param hostNameBinding Binding details. This is the JSON representation of a HostNameBinding object.
     * @param options The options parameters.
     */
    createOrUpdateHostNameBinding(resourceGroupName: string, name: string, hostName: string, hostNameBinding: HostNameBinding, options?: WebAppsCreateOrUpdateHostNameBindingOptionalParams): Promise<WebAppsCreateOrUpdateHostNameBindingResponse>;
    /**
     * Description for Deletes a hostname binding for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param hostName Hostname in the hostname binding.
     * @param options The options parameters.
     */
    deleteHostNameBinding(resourceGroupName: string, name: string, hostName: string, options?: WebAppsDeleteHostNameBindingOptionalParams): Promise<void>;
    /**
     * Description for Retrieves a specific Service Bus Hybrid Connection used by this Web App.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param namespaceName The namespace for this hybrid connection.
     * @param relayName The relay name for this hybrid connection.
     * @param options The options parameters.
     */
    getHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, options?: WebAppsGetHybridConnectionOptionalParams): Promise<WebAppsGetHybridConnectionResponse>;
    /**
     * Description for Creates a new Hybrid Connection using a Service Bus relay.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param namespaceName The namespace for this hybrid connection.
     * @param relayName The relay name for this hybrid connection.
     * @param connectionEnvelope The details of the hybrid connection.
     * @param options The options parameters.
     */
    createOrUpdateHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, connectionEnvelope: HybridConnection, options?: WebAppsCreateOrUpdateHybridConnectionOptionalParams): Promise<WebAppsCreateOrUpdateHybridConnectionResponse>;
    /**
     * Description for Removes a Hybrid Connection from this site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param namespaceName The namespace for this hybrid connection.
     * @param relayName The relay name for this hybrid connection.
     * @param options The options parameters.
     */
    deleteHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, options?: WebAppsDeleteHybridConnectionOptionalParams): Promise<void>;
    /**
     * Description for Creates a new Hybrid Connection using a Service Bus relay.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param namespaceName The namespace for this hybrid connection.
     * @param relayName The relay name for this hybrid connection.
     * @param connectionEnvelope The details of the hybrid connection.
     * @param options The options parameters.
     */
    updateHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, connectionEnvelope: HybridConnection, options?: WebAppsUpdateHybridConnectionOptionalParams): Promise<WebAppsUpdateHybridConnectionResponse>;
    /**
     * Description for Retrieves all Service Bus Hybrid Connections used by this Web App.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param options The options parameters.
     */
    listHybridConnections(resourceGroupName: string, name: string, options?: WebAppsListHybridConnectionsOptionalParams): Promise<WebAppsListHybridConnectionsResponse>;
    /**
     * Description for Gets hybrid connections configured for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listRelayServiceConnections(resourceGroupName: string, name: string, options?: WebAppsListRelayServiceConnectionsOptionalParams): Promise<WebAppsListRelayServiceConnectionsResponse>;
    /**
     * Description for Gets a hybrid connection configuration by its name.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param entityName Name of the hybrid connection.
     * @param options The options parameters.
     */
    getRelayServiceConnection(resourceGroupName: string, name: string, entityName: string, options?: WebAppsGetRelayServiceConnectionOptionalParams): Promise<WebAppsGetRelayServiceConnectionResponse>;
    /**
     * Description for Creates a new hybrid connection configuration (PUT), or updates an existing one
     * (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param entityName Name of the hybrid connection configuration.
     * @param connectionEnvelope Details of the hybrid connection configuration.
     * @param options The options parameters.
     */
    createOrUpdateRelayServiceConnection(resourceGroupName: string, name: string, entityName: string, connectionEnvelope: RelayServiceConnectionEntity, options?: WebAppsCreateOrUpdateRelayServiceConnectionOptionalParams): Promise<WebAppsCreateOrUpdateRelayServiceConnectionResponse>;
    /**
     * Description for Deletes a relay service connection by its name.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param entityName Name of the hybrid connection configuration.
     * @param options The options parameters.
     */
    deleteRelayServiceConnection(resourceGroupName: string, name: string, entityName: string, options?: WebAppsDeleteRelayServiceConnectionOptionalParams): Promise<void>;
    /**
     * Description for Creates a new hybrid connection configuration (PUT), or updates an existing one
     * (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param entityName Name of the hybrid connection configuration.
     * @param connectionEnvelope Details of the hybrid connection configuration.
     * @param options The options parameters.
     */
    updateRelayServiceConnection(resourceGroupName: string, name: string, entityName: string, connectionEnvelope: RelayServiceConnectionEntity, options?: WebAppsUpdateRelayServiceConnectionOptionalParams): Promise<WebAppsUpdateRelayServiceConnectionResponse>;
    /**
     * Description for Gets all scale-out instances of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param instanceId
     * @param options The options parameters.
     */
    getInstanceInfo(resourceGroupName: string, name: string, instanceId: string, options?: WebAppsGetInstanceInfoOptionalParams): Promise<WebAppsGetInstanceInfoResponse>;
    /**
     * Description for Get the status of the last MSDeploy operation.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param instanceId ID of web app instance.
     * @param options The options parameters.
     */
    getInstanceMsDeployStatus(resourceGroupName: string, name: string, instanceId: string, options?: WebAppsGetInstanceMsDeployStatusOptionalParams): Promise<WebAppsGetInstanceMsDeployStatusResponse>;
    /**
     * Description for Invoke the MSDeploy web app extension.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param instanceId ID of web app instance.
     * @param mSDeploy Details of MSDeploy operation
     * @param options The options parameters.
     */
    beginCreateInstanceMSDeployOperation(resourceGroupName: string, name: string, instanceId: string, mSDeploy: MSDeploy, options?: WebAppsCreateInstanceMSDeployOperationOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateInstanceMSDeployOperationResponse>, WebAppsCreateInstanceMSDeployOperationResponse>>;
    /**
     * Description for Invoke the MSDeploy web app extension.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param instanceId ID of web app instance.
     * @param mSDeploy Details of MSDeploy operation
     * @param options The options parameters.
     */
    beginCreateInstanceMSDeployOperationAndWait(resourceGroupName: string, name: string, instanceId: string, mSDeploy: MSDeploy, options?: WebAppsCreateInstanceMSDeployOperationOptionalParams): Promise<WebAppsCreateInstanceMSDeployOperationResponse>;
    /**
     * Description for Get the MSDeploy Log for the last MSDeploy operation.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param instanceId ID of web app instance.
     * @param options The options parameters.
     */
    getInstanceMSDeployLog(resourceGroupName: string, name: string, instanceId: string, options?: WebAppsGetInstanceMSDeployLogOptionalParams): Promise<WebAppsGetInstanceMSDeployLogResponse>;
    /**
     * Description for Get process information by its ID for a specific scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    getInstanceProcess(resourceGroupName: string, name: string, processId: string, instanceId: string, options?: WebAppsGetInstanceProcessOptionalParams): Promise<WebAppsGetInstanceProcessResponse>;
    /**
     * Description for Terminate a process by its ID for a web site, or a deployment slot, or specific
     * scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    deleteInstanceProcess(resourceGroupName: string, name: string, processId: string, instanceId: string, options?: WebAppsDeleteInstanceProcessOptionalParams): Promise<void>;
    /**
     * Description for Get a memory dump of a process by its ID for a specific scaled-out instance in a web
     * site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    getInstanceProcessDump(resourceGroupName: string, name: string, processId: string, instanceId: string, options?: WebAppsGetInstanceProcessDumpOptionalParams): Promise<WebAppsGetInstanceProcessDumpResponse>;
    /**
     * Description for Get process information by its ID for a specific scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param baseAddress Module base address.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    getInstanceProcessModule(resourceGroupName: string, name: string, processId: string, baseAddress: string, instanceId: string, options?: WebAppsGetInstanceProcessModuleOptionalParams): Promise<WebAppsGetInstanceProcessModuleResponse>;
    /**
     * Description for Shows whether an app can be cloned to another resource group or subscription.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    isCloneable(resourceGroupName: string, name: string, options?: WebAppsIsCloneableOptionalParams): Promise<WebAppsIsCloneableResponse>;
    /**
     * Description for This is to allow calling via powershell and ARM template.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listSyncFunctionTriggers(resourceGroupName: string, name: string, options?: WebAppsListSyncFunctionTriggersOptionalParams): Promise<WebAppsListSyncFunctionTriggersResponse>;
    /**
     * Description for Restores a web app.
     * @param subscriptionName Azure subscription.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param migrationOptions Migration migrationOptions.
     * @param options The options parameters.
     */
    beginMigrateStorage(subscriptionName: string, resourceGroupName: string, name: string, migrationOptions: StorageMigrationOptions, options?: WebAppsMigrateStorageOptionalParams): Promise<PollerLike<PollOperationState<WebAppsMigrateStorageResponse>, WebAppsMigrateStorageResponse>>;
    /**
     * Description for Restores a web app.
     * @param subscriptionName Azure subscription.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param migrationOptions Migration migrationOptions.
     * @param options The options parameters.
     */
    beginMigrateStorageAndWait(subscriptionName: string, resourceGroupName: string, name: string, migrationOptions: StorageMigrationOptions, options?: WebAppsMigrateStorageOptionalParams): Promise<WebAppsMigrateStorageResponse>;
    /**
     * Description for Migrates a local (in-app) MySql database to a remote MySql database.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param migrationRequestEnvelope MySql migration options.
     * @param options The options parameters.
     */
    beginMigrateMySql(resourceGroupName: string, name: string, migrationRequestEnvelope: MigrateMySqlRequest, options?: WebAppsMigrateMySqlOptionalParams): Promise<PollerLike<PollOperationState<WebAppsMigrateMySqlResponse>, WebAppsMigrateMySqlResponse>>;
    /**
     * Description for Migrates a local (in-app) MySql database to a remote MySql database.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param migrationRequestEnvelope MySql migration options.
     * @param options The options parameters.
     */
    beginMigrateMySqlAndWait(resourceGroupName: string, name: string, migrationRequestEnvelope: MigrateMySqlRequest, options?: WebAppsMigrateMySqlOptionalParams): Promise<WebAppsMigrateMySqlResponse>;
    /**
     * Description for Returns the status of MySql in app migration, if one is active, and whether or not
     * MySql in app is enabled
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    getMigrateMySqlStatus(resourceGroupName: string, name: string, options?: WebAppsGetMigrateMySqlStatusOptionalParams): Promise<WebAppsGetMigrateMySqlStatusResponse>;
    /**
     * Description for Gets a Swift Virtual Network connection.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    getSwiftVirtualNetworkConnection(resourceGroupName: string, name: string, options?: WebAppsGetSwiftVirtualNetworkConnectionOptionalParams): Promise<WebAppsGetSwiftVirtualNetworkConnectionResponse>;
    /**
     * Description for Integrates this Web App with a Virtual Network. This requires that 1)
     * "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has
     * already been delegated, and is not
     * in use by another App Service Plan other than the one this App is in.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param connectionEnvelope Properties of the Virtual Network connection. See example.
     * @param options The options parameters.
     */
    createOrUpdateSwiftVirtualNetworkConnection(resourceGroupName: string, name: string, connectionEnvelope: SwiftVirtualNetwork, options?: WebAppsCreateOrUpdateSwiftVirtualNetworkConnectionOptionalParams): Promise<WebAppsCreateOrUpdateSwiftVirtualNetworkConnectionResponse>;
    /**
     * Description for Deletes a Swift Virtual Network connection from an app (or deployment slot).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    deleteSwiftVirtualNetwork(resourceGroupName: string, name: string, options?: WebAppsDeleteSwiftVirtualNetworkOptionalParams): Promise<void>;
    /**
     * Description for Integrates this Web App with a Virtual Network. This requires that 1)
     * "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has
     * already been delegated, and is not
     * in use by another App Service Plan other than the one this App is in.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param connectionEnvelope Properties of the Virtual Network connection. See example.
     * @param options The options parameters.
     */
    updateSwiftVirtualNetworkConnection(resourceGroupName: string, name: string, connectionEnvelope: SwiftVirtualNetwork, options?: WebAppsUpdateSwiftVirtualNetworkConnectionOptionalParams): Promise<WebAppsUpdateSwiftVirtualNetworkConnectionResponse>;
    /**
     * Description for Gets all network features used by the app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param view The type of view. This can either be "summary" or "detailed".
     * @param options The options parameters.
     */
    listNetworkFeatures(resourceGroupName: string, name: string, view: string, options?: WebAppsListNetworkFeaturesOptionalParams): Promise<WebAppsListNetworkFeaturesResponse>;
    /**
     * Description for Gets a named operation for a network trace capturing (or deployment slot, if
     * specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param operationId GUID of the operation.
     * @param options The options parameters.
     */
    getNetworkTraceOperation(resourceGroupName: string, name: string, operationId: string, options?: WebAppsGetNetworkTraceOperationOptionalParams): Promise<WebAppsGetNetworkTraceOperationResponse>;
    /**
     * Description for Start capturing network packets for the site (To be deprecated).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param options The options parameters.
     */
    startWebSiteNetworkTrace(resourceGroupName: string, name: string, options?: WebAppsStartWebSiteNetworkTraceOptionalParams): Promise<WebAppsStartWebSiteNetworkTraceResponse>;
    /**
     * Description for Start capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param options The options parameters.
     */
    beginStartWebSiteNetworkTraceOperation(resourceGroupName: string, name: string, options?: WebAppsStartWebSiteNetworkTraceOperationOptionalParams): Promise<PollerLike<PollOperationState<WebAppsStartWebSiteNetworkTraceOperationResponse>, WebAppsStartWebSiteNetworkTraceOperationResponse>>;
    /**
     * Description for Start capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param options The options parameters.
     */
    beginStartWebSiteNetworkTraceOperationAndWait(resourceGroupName: string, name: string, options?: WebAppsStartWebSiteNetworkTraceOperationOptionalParams): Promise<WebAppsStartWebSiteNetworkTraceOperationResponse>;
    /**
     * Description for Stop ongoing capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param options The options parameters.
     */
    stopWebSiteNetworkTrace(resourceGroupName: string, name: string, options?: WebAppsStopWebSiteNetworkTraceOptionalParams): Promise<void>;
    /**
     * Description for Gets a named operation for a network trace capturing (or deployment slot, if
     * specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param operationId GUID of the operation.
     * @param options The options parameters.
     */
    getNetworkTraces(resourceGroupName: string, name: string, operationId: string, options?: WebAppsGetNetworkTracesOptionalParams): Promise<WebAppsGetNetworkTracesResponse>;
    /**
     * Description for Gets a named operation for a network trace capturing (or deployment slot, if
     * specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param operationId GUID of the operation.
     * @param options The options parameters.
     */
    getNetworkTraceOperationV2(resourceGroupName: string, name: string, operationId: string, options?: WebAppsGetNetworkTraceOperationV2OptionalParams): Promise<WebAppsGetNetworkTraceOperationV2Response>;
    /**
     * Description for Gets a named operation for a network trace capturing (or deployment slot, if
     * specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param operationId GUID of the operation.
     * @param options The options parameters.
     */
    getNetworkTracesV2(resourceGroupName: string, name: string, operationId: string, options?: WebAppsGetNetworkTracesV2OptionalParams): Promise<WebAppsGetNetworkTracesV2Response>;
    /**
     * Description for Generates a new publishing password for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    generateNewSitePublishingPassword(resourceGroupName: string, name: string, options?: WebAppsGenerateNewSitePublishingPasswordOptionalParams): Promise<void>;
    /**
     * Description for Gets web app's event logs.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    getSitePhpErrorLogFlag(resourceGroupName: string, name: string, options?: WebAppsGetSitePhpErrorLogFlagOptionalParams): Promise<WebAppsGetSitePhpErrorLogFlagResponse>;
    /**
     * Description for Gets the premier add-ons of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listPremierAddOns(resourceGroupName: string, name: string, options?: WebAppsListPremierAddOnsOptionalParams): Promise<WebAppsListPremierAddOnsResponse>;
    /**
     * Description for Gets a named add-on of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param premierAddOnName Add-on name.
     * @param options The options parameters.
     */
    getPremierAddOn(resourceGroupName: string, name: string, premierAddOnName: string, options?: WebAppsGetPremierAddOnOptionalParams): Promise<WebAppsGetPremierAddOnResponse>;
    /**
     * Description for Updates a named add-on of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param premierAddOnName Add-on name.
     * @param premierAddOn A JSON representation of the edited premier add-on.
     * @param options The options parameters.
     */
    addPremierAddOn(resourceGroupName: string, name: string, premierAddOnName: string, premierAddOn: PremierAddOn, options?: WebAppsAddPremierAddOnOptionalParams): Promise<WebAppsAddPremierAddOnResponse>;
    /**
     * Description for Delete a premier add-on from an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param premierAddOnName Add-on name.
     * @param options The options parameters.
     */
    deletePremierAddOn(resourceGroupName: string, name: string, premierAddOnName: string, options?: WebAppsDeletePremierAddOnOptionalParams): Promise<void>;
    /**
     * Description for Updates a named add-on of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param premierAddOnName Add-on name.
     * @param premierAddOn A JSON representation of the edited premier add-on.
     * @param options The options parameters.
     */
    updatePremierAddOn(resourceGroupName: string, name: string, premierAddOnName: string, premierAddOn: PremierAddOnPatchResource, options?: WebAppsUpdatePremierAddOnOptionalParams): Promise<WebAppsUpdatePremierAddOnResponse>;
    /**
     * Description for Gets data around private site access enablement and authorized Virtual Networks that
     * can access the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param options The options parameters.
     */
    getPrivateAccess(resourceGroupName: string, name: string, options?: WebAppsGetPrivateAccessOptionalParams): Promise<WebAppsGetPrivateAccessResponse>;
    /**
     * Description for Sets data around private site access enablement and authorized Virtual Networks that
     * can access the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param access The information for the private access
     * @param options The options parameters.
     */
    putPrivateAccessVnet(resourceGroupName: string, name: string, access: PrivateAccess, options?: WebAppsPutPrivateAccessVnetOptionalParams): Promise<WebAppsPutPrivateAccessVnetResponse>;
    /**
     * Description for Get process information by its ID for a specific scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param options The options parameters.
     */
    getProcess(resourceGroupName: string, name: string, processId: string, options?: WebAppsGetProcessOptionalParams): Promise<WebAppsGetProcessResponse>;
    /**
     * Description for Terminate a process by its ID for a web site, or a deployment slot, or specific
     * scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param options The options parameters.
     */
    deleteProcess(resourceGroupName: string, name: string, processId: string, options?: WebAppsDeleteProcessOptionalParams): Promise<void>;
    /**
     * Description for Get a memory dump of a process by its ID for a specific scaled-out instance in a web
     * site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param options The options parameters.
     */
    getProcessDump(resourceGroupName: string, name: string, processId: string, options?: WebAppsGetProcessDumpOptionalParams): Promise<WebAppsGetProcessDumpResponse>;
    /**
     * Description for Get process information by its ID for a specific scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param baseAddress Module base address.
     * @param options The options parameters.
     */
    getProcessModule(resourceGroupName: string, name: string, processId: string, baseAddress: string, options?: WebAppsGetProcessModuleOptionalParams): Promise<WebAppsGetProcessModuleResponse>;
    /**
     * Description for Get the named public certificate for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param publicCertificateName Public certificate name.
     * @param options The options parameters.
     */
    getPublicCertificate(resourceGroupName: string, name: string, publicCertificateName: string, options?: WebAppsGetPublicCertificateOptionalParams): Promise<WebAppsGetPublicCertificateResponse>;
    /**
     * Description for Creates a hostname binding for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param publicCertificateName Public certificate name.
     * @param publicCertificate Public certificate details. This is the JSON representation of a
     *                          PublicCertificate object.
     * @param options The options parameters.
     */
    createOrUpdatePublicCertificate(resourceGroupName: string, name: string, publicCertificateName: string, publicCertificate: PublicCertificate, options?: WebAppsCreateOrUpdatePublicCertificateOptionalParams): Promise<WebAppsCreateOrUpdatePublicCertificateResponse>;
    /**
     * Description for Deletes a hostname binding for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param publicCertificateName Public certificate name.
     * @param options The options parameters.
     */
    deletePublicCertificate(resourceGroupName: string, name: string, publicCertificateName: string, options?: WebAppsDeletePublicCertificateOptionalParams): Promise<void>;
    /**
     * Description for Gets the publishing profile for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param publishingProfileOptions Specifies publishingProfileOptions for publishing profile. For
     *                                 example, use {"format": "FileZilla3"} to get a FileZilla publishing profile.
     * @param options The options parameters.
     */
    listPublishingProfileXmlWithSecrets(resourceGroupName: string, name: string, publishingProfileOptions: CsmPublishingProfileOptions, options?: WebAppsListPublishingProfileXmlWithSecretsOptionalParams): Promise<WebAppsListPublishingProfileXmlWithSecretsResponse>;
    /**
     * Description for Resets the configuration settings of the current slot if they were previously
     * modified by calling the API with POST.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    resetProductionSlotConfig(resourceGroupName: string, name: string, options?: WebAppsResetProductionSlotConfigOptionalParams): Promise<void>;
    /**
     * Description for Restarts an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    restart(resourceGroupName: string, name: string, options?: WebAppsRestartOptionalParams): Promise<void>;
    /**
     * Description for Restores an app from a backup blob in Azure Storage.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param request Information on restore request .
     * @param options The options parameters.
     */
    beginRestoreFromBackupBlob(resourceGroupName: string, name: string, request: RestoreRequest, options?: WebAppsRestoreFromBackupBlobOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Restores an app from a backup blob in Azure Storage.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param request Information on restore request .
     * @param options The options parameters.
     */
    beginRestoreFromBackupBlobAndWait(resourceGroupName: string, name: string, request: RestoreRequest, options?: WebAppsRestoreFromBackupBlobOptionalParams): Promise<void>;
    /**
     * Description for Restores a deleted web app to this web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param restoreRequest Deleted web app restore information.
     * @param options The options parameters.
     */
    beginRestoreFromDeletedApp(resourceGroupName: string, name: string, restoreRequest: DeletedAppRestoreRequest, options?: WebAppsRestoreFromDeletedAppOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Restores a deleted web app to this web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param restoreRequest Deleted web app restore information.
     * @param options The options parameters.
     */
    beginRestoreFromDeletedAppAndWait(resourceGroupName: string, name: string, restoreRequest: DeletedAppRestoreRequest, options?: WebAppsRestoreFromDeletedAppOptionalParams): Promise<void>;
    /**
     * Description for Restores a web app from a snapshot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param restoreRequest Snapshot restore settings. Snapshot information can be obtained by calling
     *                       GetDeletedSites or GetSiteSnapshots API.
     * @param options The options parameters.
     */
    beginRestoreSnapshot(resourceGroupName: string, name: string, restoreRequest: SnapshotRestoreRequest, options?: WebAppsRestoreSnapshotOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Restores a web app from a snapshot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param restoreRequest Snapshot restore settings. Snapshot information can be obtained by calling
     *                       GetDeletedSites or GetSiteSnapshots API.
     * @param options The options parameters.
     */
    beginRestoreSnapshotAndWait(resourceGroupName: string, name: string, restoreRequest: SnapshotRestoreRequest, options?: WebAppsRestoreSnapshotOptionalParams): Promise<void>;
    /**
     * Description for Get site extension information by its ID for a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param siteExtensionId Site extension name.
     * @param options The options parameters.
     */
    getSiteExtension(resourceGroupName: string, name: string, siteExtensionId: string, options?: WebAppsGetSiteExtensionOptionalParams): Promise<WebAppsGetSiteExtensionResponse>;
    /**
     * Description for Install site extension on a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param siteExtensionId Site extension name.
     * @param options The options parameters.
     */
    beginInstallSiteExtension(resourceGroupName: string, name: string, siteExtensionId: string, options?: WebAppsInstallSiteExtensionOptionalParams): Promise<PollerLike<PollOperationState<WebAppsInstallSiteExtensionResponse>, WebAppsInstallSiteExtensionResponse>>;
    /**
     * Description for Install site extension on a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param siteExtensionId Site extension name.
     * @param options The options parameters.
     */
    beginInstallSiteExtensionAndWait(resourceGroupName: string, name: string, siteExtensionId: string, options?: WebAppsInstallSiteExtensionOptionalParams): Promise<WebAppsInstallSiteExtensionResponse>;
    /**
     * Description for Remove a site extension from a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param siteExtensionId Site extension name.
     * @param options The options parameters.
     */
    deleteSiteExtension(resourceGroupName: string, name: string, siteExtensionId: string, options?: WebAppsDeleteSiteExtensionOptionalParams): Promise<void>;
    /**
     * Description for Copies a deployment slot to another deployment slot of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param copySlotEntity JSON object that contains the target slot name and site config properties to
     *                       override the source slot config. See example.
     * @param options The options parameters.
     */
    beginCopyProductionSlot(resourceGroupName: string, name: string, copySlotEntity: CsmCopySlotEntity, options?: WebAppsCopyProductionSlotOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Copies a deployment slot to another deployment slot of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param copySlotEntity JSON object that contains the target slot name and site config properties to
     *                       override the source slot config. See example.
     * @param options The options parameters.
     */
    beginCopyProductionSlotAndWait(resourceGroupName: string, name: string, copySlotEntity: CsmCopySlotEntity, options?: WebAppsCopyProductionSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets the details of a web, mobile, or API app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. By default, this API returns the production slot.
     * @param options The options parameters.
     */
    getSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetSlotOptionalParams): Promise<WebAppsGetSlotResponse>;
    /**
     * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an
     * existing app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Unique name of the app to create or update. To create or update a deployment slot, use
     *             the {slot} parameter.
     * @param slot Name of the deployment slot to create or update. By default, this API attempts to create
     *             or modify the production slot.
     * @param siteEnvelope A JSON representation of the app properties. See example.
     * @param options The options parameters.
     */
    beginCreateOrUpdateSlot(resourceGroupName: string, name: string, slot: string, siteEnvelope: Site, options?: WebAppsCreateOrUpdateSlotOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateOrUpdateSlotResponse>, WebAppsCreateOrUpdateSlotResponse>>;
    /**
     * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an
     * existing app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Unique name of the app to create or update. To create or update a deployment slot, use
     *             the {slot} parameter.
     * @param slot Name of the deployment slot to create or update. By default, this API attempts to create
     *             or modify the production slot.
     * @param siteEnvelope A JSON representation of the app properties. See example.
     * @param options The options parameters.
     */
    beginCreateOrUpdateSlotAndWait(resourceGroupName: string, name: string, slot: string, siteEnvelope: Site, options?: WebAppsCreateOrUpdateSlotOptionalParams): Promise<WebAppsCreateOrUpdateSlotResponse>;
    /**
     * Description for Deletes a web, mobile, or API app, or one of the deployment slots.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app to delete.
     * @param slot Name of the deployment slot to delete. By default, the API deletes the production slot.
     * @param options The options parameters.
     */
    deleteSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsDeleteSlotOptionalParams): Promise<void>;
    /**
     * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an
     * existing app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Unique name of the app to create or update. To create or update a deployment slot, use
     *             the {slot} parameter.
     * @param slot Name of the deployment slot to create or update. By default, this API attempts to create
     *             or modify the production slot.
     * @param siteEnvelope A JSON representation of the app properties. See example.
     * @param options The options parameters.
     */
    updateSlot(resourceGroupName: string, name: string, slot: string, siteEnvelope: SitePatchResource, options?: WebAppsUpdateSlotOptionalParams): Promise<WebAppsUpdateSlotResponse>;
    /**
     * Description for Analyze a custom hostname.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    analyzeCustomHostnameSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsAnalyzeCustomHostnameSlotOptionalParams): Promise<WebAppsAnalyzeCustomHostnameSlotResponse>;
    /**
     * Description for Applies the configuration settings from the target slot onto the current slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the source slot. If a slot is not specified, the production slot is used as the
     *             source slot.
     * @param slotSwapEntity JSON object that contains the target slot name. See example.
     * @param options The options parameters.
     */
    applySlotConfigurationSlot(resourceGroupName: string, name: string, slot: string, slotSwapEntity: CsmSlotEntity, options?: WebAppsApplySlotConfigurationSlotOptionalParams): Promise<void>;
    /**
     * Description for Creates a backup of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will create a backup
     *             for the production slot.
     * @param request Backup configuration. You can use the JSON response from the POST action as input
     *                here.
     * @param options The options parameters.
     */
    backupSlot(resourceGroupName: string, name: string, slot: string, request: BackupRequest, options?: WebAppsBackupSlotOptionalParams): Promise<WebAppsBackupSlotResponse>;
    /**
     * Description for Gets a backup of an app by its ID.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param backupId ID of the backup.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get a backup of
     *             the production slot.
     * @param options The options parameters.
     */
    getBackupStatusSlot(resourceGroupName: string, name: string, backupId: string, slot: string, options?: WebAppsGetBackupStatusSlotOptionalParams): Promise<WebAppsGetBackupStatusSlotResponse>;
    /**
     * Description for Deletes a backup of an app by its ID.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param backupId ID of the backup.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete a backup of
     *             the production slot.
     * @param options The options parameters.
     */
    deleteBackupSlot(resourceGroupName: string, name: string, backupId: string, slot: string, options?: WebAppsDeleteBackupSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets status of a web app backup that may be in progress, including secrets
     * associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS
     * URL for the backup if a new URL is passed in the request body.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param backupId ID of backup.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param request Information on backup request.
     * @param options The options parameters.
     */
    listBackupStatusSecretsSlot(resourceGroupName: string, name: string, backupId: string, slot: string, request: BackupRequest, options?: WebAppsListBackupStatusSecretsSlotOptionalParams): Promise<WebAppsListBackupStatusSecretsSlotResponse>;
    /**
     * Description for Restores a specific backup to another app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param backupId ID of the backup.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will restore a backup
     *             of the production slot.
     * @param request Information on restore request .
     * @param options The options parameters.
     */
    beginRestoreSlot(resourceGroupName: string, name: string, backupId: string, slot: string, request: RestoreRequest, options?: WebAppsRestoreSlotOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Restores a specific backup to another app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param backupId ID of the backup.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will restore a backup
     *             of the production slot.
     * @param request Information on restore request .
     * @param options The options parameters.
     */
    beginRestoreSlotAndWait(resourceGroupName: string, name: string, backupId: string, slot: string, request: RestoreRequest, options?: WebAppsRestoreSlotOptionalParams): Promise<void>;
    /**
     * Description for Replaces the application settings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the
     *             application settings for the production slot.
     * @param appSettings Application settings of the app.
     * @param options The options parameters.
     */
    updateApplicationSettingsSlot(resourceGroupName: string, name: string, slot: string, appSettings: StringDictionary, options?: WebAppsUpdateApplicationSettingsSlotOptionalParams): Promise<WebAppsUpdateApplicationSettingsSlotResponse>;
    /**
     * Description for Gets the application settings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the
     *             application settings for the production slot.
     * @param options The options parameters.
     */
    listApplicationSettingsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListApplicationSettingsSlotOptionalParams): Promise<WebAppsListApplicationSettingsSlotResponse>;
    /**
     * Description for Updates the Authentication / Authorization settings associated with web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param siteAuthSettings Auth settings associated with web app.
     * @param options The options parameters.
     */
    updateAuthSettingsSlot(resourceGroupName: string, name: string, slot: string, siteAuthSettings: SiteAuthSettings, options?: WebAppsUpdateAuthSettingsSlotOptionalParams): Promise<WebAppsUpdateAuthSettingsSlotResponse>;
    /**
     * Description for Gets the Authentication/Authorization settings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the settings
     *             for the production slot.
     * @param options The options parameters.
     */
    getAuthSettingsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetAuthSettingsSlotOptionalParams): Promise<WebAppsGetAuthSettingsSlotResponse>;
    /**
     * Description for Updates the Azure storage account configurations of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the Azure
     *             storage account configurations for the production slot.
     * @param azureStorageAccounts Azure storage accounts of the app.
     * @param options The options parameters.
     */
    updateAzureStorageAccountsSlot(resourceGroupName: string, name: string, slot: string, azureStorageAccounts: AzureStoragePropertyDictionaryResource, options?: WebAppsUpdateAzureStorageAccountsSlotOptionalParams): Promise<WebAppsUpdateAzureStorageAccountsSlotResponse>;
    /**
     * Description for Gets the Azure storage account configurations of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the Azure
     *             storage account configurations for the production slot.
     * @param options The options parameters.
     */
    listAzureStorageAccountsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListAzureStorageAccountsSlotOptionalParams): Promise<WebAppsListAzureStorageAccountsSlotResponse>;
    /**
     * Description for Updates the backup configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the backup
     *             configuration for the production slot.
     * @param request Edited backup configuration.
     * @param options The options parameters.
     */
    updateBackupConfigurationSlot(resourceGroupName: string, name: string, slot: string, request: BackupRequest, options?: WebAppsUpdateBackupConfigurationSlotOptionalParams): Promise<WebAppsUpdateBackupConfigurationSlotResponse>;
    /**
     * Description for Deletes the backup configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the backup
     *             configuration for the production slot.
     * @param options The options parameters.
     */
    deleteBackupConfigurationSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsDeleteBackupConfigurationSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets the backup configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the backup
     *             configuration for the production slot.
     * @param options The options parameters.
     */
    getBackupConfigurationSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetBackupConfigurationSlotOptionalParams): Promise<WebAppsGetBackupConfigurationSlotResponse>;
    /**
     * Description for Replaces the connection strings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the
     *             connection settings for the production slot.
     * @param connectionStrings Connection strings of the app or deployment slot. See example.
     * @param options The options parameters.
     */
    updateConnectionStringsSlot(resourceGroupName: string, name: string, slot: string, connectionStrings: ConnectionStringDictionary, options?: WebAppsUpdateConnectionStringsSlotOptionalParams): Promise<WebAppsUpdateConnectionStringsSlotResponse>;
    /**
     * Description for Gets the connection strings of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the connection
     *             settings for the production slot.
     * @param options The options parameters.
     */
    listConnectionStringsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListConnectionStringsSlotOptionalParams): Promise<WebAppsListConnectionStringsSlotResponse>;
    /**
     * Description for Gets the logging configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the logging
     *             configuration for the production slot.
     * @param options The options parameters.
     */
    getDiagnosticLogsConfigurationSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetDiagnosticLogsConfigurationSlotOptionalParams): Promise<WebAppsGetDiagnosticLogsConfigurationSlotResponse>;
    /**
     * Description for Updates the logging configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the logging
     *             configuration for the production slot.
     * @param siteLogsConfig A SiteLogsConfig JSON object that contains the logging configuration to change
     *                       in the "properties" property.
     * @param options The options parameters.
     */
    updateDiagnosticLogsConfigSlot(resourceGroupName: string, name: string, slot: string, siteLogsConfig: SiteLogsConfig, options?: WebAppsUpdateDiagnosticLogsConfigSlotOptionalParams): Promise<WebAppsUpdateDiagnosticLogsConfigSlotResponse>;
    /**
     * Description for Replaces the metadata of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the
     *             metadata for the production slot.
     * @param metadata Edited metadata of the app or deployment slot. See example.
     * @param options The options parameters.
     */
    updateMetadataSlot(resourceGroupName: string, name: string, slot: string, metadata: StringDictionary, options?: WebAppsUpdateMetadataSlotOptionalParams): Promise<WebAppsUpdateMetadataSlotResponse>;
    /**
     * Description for Gets the metadata of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the metadata
     *             for the production slot.
     * @param options The options parameters.
     */
    listMetadataSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListMetadataSlotOptionalParams): Promise<WebAppsListMetadataSlotResponse>;
    /**
     * Description for Gets the Git/FTP publishing credentials of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the publishing
     *             credentials for the production slot.
     * @param options The options parameters.
     */
    beginListPublishingCredentialsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListPublishingCredentialsSlotOptionalParams): Promise<PollerLike<PollOperationState<WebAppsListPublishingCredentialsSlotResponse>, WebAppsListPublishingCredentialsSlotResponse>>;
    /**
     * Description for Gets the Git/FTP publishing credentials of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the publishing
     *             credentials for the production slot.
     * @param options The options parameters.
     */
    beginListPublishingCredentialsSlotAndWait(resourceGroupName: string, name: string, slot: string, options?: WebAppsListPublishingCredentialsSlotOptionalParams): Promise<WebAppsListPublishingCredentialsSlotResponse>;
    /**
     * Description for Updates the Push settings associated with web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param pushSettings Push settings associated with web app.
     * @param options The options parameters.
     */
    updateSitePushSettingsSlot(resourceGroupName: string, name: string, slot: string, pushSettings: PushSettings, options?: WebAppsUpdateSitePushSettingsSlotOptionalParams): Promise<WebAppsUpdateSitePushSettingsSlotResponse>;
    /**
     * Description for Gets the Push settings associated with web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    listSitePushSettingsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListSitePushSettingsSlotOptionalParams): Promise<WebAppsListSitePushSettingsSlotResponse>;
    /**
     * Description for Gets the configuration of an app, such as platform version and bitness, default
     * documents, virtual applications, Always On, etc.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will return
     *             configuration for the production slot.
     * @param options The options parameters.
     */
    getConfigurationSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetConfigurationSlotOptionalParams): Promise<WebAppsGetConfigurationSlotResponse>;
    /**
     * Description for Updates the configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update
     *             configuration for the production slot.
     * @param siteConfig JSON representation of a SiteConfig object. See example.
     * @param options The options parameters.
     */
    createOrUpdateConfigurationSlot(resourceGroupName: string, name: string, slot: string, siteConfig: SiteConfigResource, options?: WebAppsCreateOrUpdateConfigurationSlotOptionalParams): Promise<WebAppsCreateOrUpdateConfigurationSlotResponse>;
    /**
     * Description for Updates the configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update
     *             configuration for the production slot.
     * @param siteConfig JSON representation of a SiteConfig object. See example.
     * @param options The options parameters.
     */
    updateConfigurationSlot(resourceGroupName: string, name: string, slot: string, siteConfig: SiteConfigResource, options?: WebAppsUpdateConfigurationSlotOptionalParams): Promise<WebAppsUpdateConfigurationSlotResponse>;
    /**
     * Description for Gets a snapshot of the configuration of an app at a previous point in time.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param snapshotId The ID of the snapshot to read.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will return
     *             configuration for the production slot.
     * @param options The options parameters.
     */
    getConfigurationSnapshotSlot(resourceGroupName: string, name: string, snapshotId: string, slot: string, options?: WebAppsGetConfigurationSnapshotSlotOptionalParams): Promise<WebAppsGetConfigurationSnapshotSlotResponse>;
    /**
     * Description for Reverts the configuration of an app to a previous snapshot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param snapshotId The ID of the snapshot to read.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will return
     *             configuration for the production slot.
     * @param options The options parameters.
     */
    recoverSiteConfigurationSnapshotSlot(resourceGroupName: string, name: string, snapshotId: string, slot: string, options?: WebAppsRecoverSiteConfigurationSnapshotSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets the last lines of docker logs for the given site
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    getWebSiteContainerLogsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetWebSiteContainerLogsSlotOptionalParams): Promise<WebAppsGetWebSiteContainerLogsSlotResponse>;
    /**
     * Description for Gets the ZIP archived docker log files for the given site
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    getContainerLogsZipSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetContainerLogsZipSlotOptionalParams): Promise<WebAppsGetContainerLogsZipSlotResponse>;
    /**
     * Description for Gets a continuous web job by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment
     *             for the production slot.
     * @param options The options parameters.
     */
    getContinuousWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, options?: WebAppsGetContinuousWebJobSlotOptionalParams): Promise<WebAppsGetContinuousWebJobSlotResponse>;
    /**
     * Description for Delete a continuous web job by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment
     *             for the production slot.
     * @param options The options parameters.
     */
    deleteContinuousWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, options?: WebAppsDeleteContinuousWebJobSlotOptionalParams): Promise<void>;
    /**
     * Description for Start a continuous web job for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment
     *             for the production slot.
     * @param options The options parameters.
     */
    startContinuousWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, options?: WebAppsStartContinuousWebJobSlotOptionalParams): Promise<void>;
    /**
     * Description for Stop a continuous web job for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment
     *             for the production slot.
     * @param options The options parameters.
     */
    stopContinuousWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, options?: WebAppsStopContinuousWebJobSlotOptionalParams): Promise<void>;
    /**
     * Description for Get a deployment by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param id Deployment ID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API gets a deployment for
     *             the production slot.
     * @param options The options parameters.
     */
    getDeploymentSlot(resourceGroupName: string, name: string, id: string, slot: string, options?: WebAppsGetDeploymentSlotOptionalParams): Promise<WebAppsGetDeploymentSlotResponse>;
    /**
     * Description for Create a deployment for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param id ID of an existing deployment.
     * @param slot Name of the deployment slot. If a slot is not specified, the API creates a deployment
     *             for the production slot.
     * @param deployment Deployment details.
     * @param options The options parameters.
     */
    createDeploymentSlot(resourceGroupName: string, name: string, id: string, slot: string, deployment: Deployment, options?: WebAppsCreateDeploymentSlotOptionalParams): Promise<WebAppsCreateDeploymentSlotResponse>;
    /**
     * Description for Delete a deployment by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param id Deployment ID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment
     *             for the production slot.
     * @param options The options parameters.
     */
    deleteDeploymentSlot(resourceGroupName: string, name: string, id: string, slot: string, options?: WebAppsDeleteDeploymentSlotOptionalParams): Promise<void>;
    /**
     * Description for List deployment log for specific deployment for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param id The ID of a specific deployment. This is the value of the name property in the JSON
     *           response from "GET /api/sites/{siteName}/deployments".
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    listDeploymentLogSlot(resourceGroupName: string, name: string, id: string, slot: string, options?: WebAppsListDeploymentLogSlotOptionalParams): Promise<WebAppsListDeploymentLogSlotResponse>;
    /**
     * Description for Discovers an existing app backup that can be restored from a blob in Azure storage.
     * Use this to get information about the databases stored in a backup.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will perform discovery
     *             for the production slot.
     * @param request A RestoreRequest object that includes Azure storage URL and blog name for discovery
     *                of backup.
     * @param options The options parameters.
     */
    discoverBackupSlot(resourceGroupName: string, name: string, slot: string, request: RestoreRequest, options?: WebAppsDiscoverBackupSlotOptionalParams): Promise<WebAppsDiscoverBackupSlotResponse>;
    /**
     * Description for Get domain ownership identifier for web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param domainOwnershipIdentifierName Name of domain ownership identifier.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the binding
     *             for the production slot.
     * @param options The options parameters.
     */
    getDomainOwnershipIdentifierSlot(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, slot: string, options?: WebAppsGetDomainOwnershipIdentifierSlotOptionalParams): Promise<WebAppsGetDomainOwnershipIdentifierSlotResponse>;
    /**
     * Description for Creates a domain ownership identifier for web app, or updates an existing ownership
     * identifier.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param domainOwnershipIdentifierName Name of domain ownership identifier.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the binding
     *             for the production slot.
     * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
     * @param options The options parameters.
     */
    createOrUpdateDomainOwnershipIdentifierSlot(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, slot: string, domainOwnershipIdentifier: Identifier, options?: WebAppsCreateOrUpdateDomainOwnershipIdentifierSlotOptionalParams): Promise<WebAppsCreateOrUpdateDomainOwnershipIdentifierSlotResponse>;
    /**
     * Description for Deletes a domain ownership identifier for a web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param domainOwnershipIdentifierName Name of domain ownership identifier.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the binding
     *             for the production slot.
     * @param options The options parameters.
     */
    deleteDomainOwnershipIdentifierSlot(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, slot: string, options?: WebAppsDeleteDomainOwnershipIdentifierSlotOptionalParams): Promise<void>;
    /**
     * Description for Creates a domain ownership identifier for web app, or updates an existing ownership
     * identifier.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param domainOwnershipIdentifierName Name of domain ownership identifier.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the binding
     *             for the production slot.
     * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
     * @param options The options parameters.
     */
    updateDomainOwnershipIdentifierSlot(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, slot: string, domainOwnershipIdentifier: Identifier, options?: WebAppsUpdateDomainOwnershipIdentifierSlotOptionalParams): Promise<WebAppsUpdateDomainOwnershipIdentifierSlotResponse>;
    /**
     * Description for Get the status of the last MSDeploy operation.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    getMSDeployStatusSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetMSDeployStatusSlotOptionalParams): Promise<WebAppsGetMSDeployStatusSlotResponse>;
    /**
     * Description for Invoke the MSDeploy web app extension.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param mSDeploy Details of MSDeploy operation
     * @param options The options parameters.
     */
    beginCreateMSDeployOperationSlot(resourceGroupName: string, name: string, slot: string, mSDeploy: MSDeploy, options?: WebAppsCreateMSDeployOperationSlotOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateMSDeployOperationSlotResponse>, WebAppsCreateMSDeployOperationSlotResponse>>;
    /**
     * Description for Invoke the MSDeploy web app extension.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param mSDeploy Details of MSDeploy operation
     * @param options The options parameters.
     */
    beginCreateMSDeployOperationSlotAndWait(resourceGroupName: string, name: string, slot: string, mSDeploy: MSDeploy, options?: WebAppsCreateMSDeployOperationSlotOptionalParams): Promise<WebAppsCreateMSDeployOperationSlotResponse>;
    /**
     * Description for Get the MSDeploy Log for the last MSDeploy operation.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    getMSDeployLogSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetMSDeployLogSlotOptionalParams): Promise<WebAppsGetMSDeployLogSlotResponse>;
    /**
     * Description for Fetch a short lived token that can be exchanged for a master key.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    getFunctionsAdminTokenSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetFunctionsAdminTokenSlotOptionalParams): Promise<WebAppsGetFunctionsAdminTokenSlotResponse>;
    /**
     * Description for Get function information by its ID for web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    getInstanceFunctionSlot(resourceGroupName: string, name: string, functionName: string, slot: string, options?: WebAppsGetInstanceFunctionSlotOptionalParams): Promise<WebAppsGetInstanceFunctionSlotResponse>;
    /**
     * Description for Create function for web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param slot Name of the deployment slot.
     * @param functionEnvelope Function details.
     * @param options The options parameters.
     */
    beginCreateInstanceFunctionSlot(resourceGroupName: string, name: string, functionName: string, slot: string, functionEnvelope: FunctionEnvelope, options?: WebAppsCreateInstanceFunctionSlotOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateInstanceFunctionSlotResponse>, WebAppsCreateInstanceFunctionSlotResponse>>;
    /**
     * Description for Create function for web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param slot Name of the deployment slot.
     * @param functionEnvelope Function details.
     * @param options The options parameters.
     */
    beginCreateInstanceFunctionSlotAndWait(resourceGroupName: string, name: string, functionName: string, slot: string, functionEnvelope: FunctionEnvelope, options?: WebAppsCreateInstanceFunctionSlotOptionalParams): Promise<WebAppsCreateInstanceFunctionSlotResponse>;
    /**
     * Description for Delete a function for web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    deleteInstanceFunctionSlot(resourceGroupName: string, name: string, functionName: string, slot: string, options?: WebAppsDeleteInstanceFunctionSlotOptionalParams): Promise<void>;
    /**
     * Description for Add or update a function secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName The name of the function.
     * @param keyName The name of the key.
     * @param slot Name of the deployment slot.
     * @param key The key to create or update
     * @param options The options parameters.
     */
    createOrUpdateFunctionSecretSlot(resourceGroupName: string, name: string, functionName: string, keyName: string, slot: string, key: KeyInfo, options?: WebAppsCreateOrUpdateFunctionSecretSlotOptionalParams): Promise<WebAppsCreateOrUpdateFunctionSecretSlotResponse>;
    /**
     * Description for Delete a function secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName The name of the function.
     * @param keyName The name of the key.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    deleteFunctionSecretSlot(resourceGroupName: string, name: string, functionName: string, keyName: string, slot: string, options?: WebAppsDeleteFunctionSecretSlotOptionalParams): Promise<void>;
    /**
     * Description for Get function keys for a function in a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    listFunctionKeysSlot(resourceGroupName: string, name: string, functionName: string, slot: string, options?: WebAppsListFunctionKeysSlotOptionalParams): Promise<WebAppsListFunctionKeysSlotResponse>;
    /**
     * Description for Get function secrets for a function in a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param functionName Function name.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    listFunctionSecretsSlot(resourceGroupName: string, name: string, functionName: string, slot: string, options?: WebAppsListFunctionSecretsSlotOptionalParams): Promise<WebAppsListFunctionSecretsSlotResponse>;
    /**
     * Description for Get host secrets for a function app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    listHostKeysSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListHostKeysSlotOptionalParams): Promise<WebAppsListHostKeysSlotResponse>;
    /**
     * Description for This is to allow calling via powershell and ARM template.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    listSyncStatusSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListSyncStatusSlotOptionalParams): Promise<void>;
    /**
     * Description for Syncs function trigger metadata to the management database
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    syncFunctionsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsSyncFunctionsSlotOptionalParams): Promise<void>;
    /**
     * Description for Add or update a host level secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param keyType The type of host key.
     * @param keyName The name of the key.
     * @param slot Name of the deployment slot.
     * @param key The key to create or update
     * @param options The options parameters.
     */
    createOrUpdateHostSecretSlot(resourceGroupName: string, name: string, keyType: string, keyName: string, slot: string, key: KeyInfo, options?: WebAppsCreateOrUpdateHostSecretSlotOptionalParams): Promise<WebAppsCreateOrUpdateHostSecretSlotResponse>;
    /**
     * Description for Delete a host level secret.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param keyType The type of host key.
     * @param keyName The name of the key.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    deleteHostSecretSlot(resourceGroupName: string, name: string, keyType: string, keyName: string, slot: string, options?: WebAppsDeleteHostSecretSlotOptionalParams): Promise<void>;
    /**
     * Description for Get the named hostname binding for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API the named binding for
     *             the production slot.
     * @param hostName Hostname in the hostname binding.
     * @param options The options parameters.
     */
    getHostNameBindingSlot(resourceGroupName: string, name: string, slot: string, hostName: string, options?: WebAppsGetHostNameBindingSlotOptionalParams): Promise<WebAppsGetHostNameBindingSlotResponse>;
    /**
     * Description for Creates a hostname binding for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param hostName Hostname in the hostname binding.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will create a binding
     *             for the production slot.
     * @param hostNameBinding Binding details. This is the JSON representation of a HostNameBinding object.
     * @param options The options parameters.
     */
    createOrUpdateHostNameBindingSlot(resourceGroupName: string, name: string, hostName: string, slot: string, hostNameBinding: HostNameBinding, options?: WebAppsCreateOrUpdateHostNameBindingSlotOptionalParams): Promise<WebAppsCreateOrUpdateHostNameBindingSlotResponse>;
    /**
     * Description for Deletes a hostname binding for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the binding
     *             for the production slot.
     * @param hostName Hostname in the hostname binding.
     * @param options The options parameters.
     */
    deleteHostNameBindingSlot(resourceGroupName: string, name: string, slot: string, hostName: string, options?: WebAppsDeleteHostNameBindingSlotOptionalParams): Promise<void>;
    /**
     * Description for Retrieves a specific Service Bus Hybrid Connection used by this Web App.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param namespaceName The namespace for this hybrid connection.
     * @param relayName The relay name for this hybrid connection.
     * @param slot The name of the slot for the web app.
     * @param options The options parameters.
     */
    getHybridConnectionSlot(resourceGroupName: string, name: string, namespaceName: string, relayName: string, slot: string, options?: WebAppsGetHybridConnectionSlotOptionalParams): Promise<WebAppsGetHybridConnectionSlotResponse>;
    /**
     * Description for Creates a new Hybrid Connection using a Service Bus relay.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param namespaceName The namespace for this hybrid connection.
     * @param relayName The relay name for this hybrid connection.
     * @param slot The name of the slot for the web app.
     * @param connectionEnvelope The details of the hybrid connection.
     * @param options The options parameters.
     */
    createOrUpdateHybridConnectionSlot(resourceGroupName: string, name: string, namespaceName: string, relayName: string, slot: string, connectionEnvelope: HybridConnection, options?: WebAppsCreateOrUpdateHybridConnectionSlotOptionalParams): Promise<WebAppsCreateOrUpdateHybridConnectionSlotResponse>;
    /**
     * Description for Removes a Hybrid Connection from this site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param namespaceName The namespace for this hybrid connection.
     * @param relayName The relay name for this hybrid connection.
     * @param slot The name of the slot for the web app.
     * @param options The options parameters.
     */
    deleteHybridConnectionSlot(resourceGroupName: string, name: string, namespaceName: string, relayName: string, slot: string, options?: WebAppsDeleteHybridConnectionSlotOptionalParams): Promise<void>;
    /**
     * Description for Creates a new Hybrid Connection using a Service Bus relay.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param namespaceName The namespace for this hybrid connection.
     * @param relayName The relay name for this hybrid connection.
     * @param slot The name of the slot for the web app.
     * @param connectionEnvelope The details of the hybrid connection.
     * @param options The options parameters.
     */
    updateHybridConnectionSlot(resourceGroupName: string, name: string, namespaceName: string, relayName: string, slot: string, connectionEnvelope: HybridConnection, options?: WebAppsUpdateHybridConnectionSlotOptionalParams): Promise<WebAppsUpdateHybridConnectionSlotResponse>;
    /**
     * Description for Retrieves all Service Bus Hybrid Connections used by this Web App.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for the web app.
     * @param options The options parameters.
     */
    listHybridConnectionsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListHybridConnectionsSlotOptionalParams): Promise<WebAppsListHybridConnectionsSlotResponse>;
    /**
     * Description for Gets hybrid connections configured for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get hybrid
     *             connections for the production slot.
     * @param options The options parameters.
     */
    listRelayServiceConnectionsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListRelayServiceConnectionsSlotOptionalParams): Promise<WebAppsListRelayServiceConnectionsSlotResponse>;
    /**
     * Description for Gets a hybrid connection configuration by its name.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param entityName Name of the hybrid connection.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get a hybrid
     *             connection for the production slot.
     * @param options The options parameters.
     */
    getRelayServiceConnectionSlot(resourceGroupName: string, name: string, entityName: string, slot: string, options?: WebAppsGetRelayServiceConnectionSlotOptionalParams): Promise<WebAppsGetRelayServiceConnectionSlotResponse>;
    /**
     * Description for Creates a new hybrid connection configuration (PUT), or updates an existing one
     * (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param entityName Name of the hybrid connection configuration.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will create or update a
     *             hybrid connection for the production slot.
     * @param connectionEnvelope Details of the hybrid connection configuration.
     * @param options The options parameters.
     */
    createOrUpdateRelayServiceConnectionSlot(resourceGroupName: string, name: string, entityName: string, slot: string, connectionEnvelope: RelayServiceConnectionEntity, options?: WebAppsCreateOrUpdateRelayServiceConnectionSlotOptionalParams): Promise<WebAppsCreateOrUpdateRelayServiceConnectionSlotResponse>;
    /**
     * Description for Deletes a relay service connection by its name.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param entityName Name of the hybrid connection configuration.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete a hybrid
     *             connection for the production slot.
     * @param options The options parameters.
     */
    deleteRelayServiceConnectionSlot(resourceGroupName: string, name: string, entityName: string, slot: string, options?: WebAppsDeleteRelayServiceConnectionSlotOptionalParams): Promise<void>;
    /**
     * Description for Creates a new hybrid connection configuration (PUT), or updates an existing one
     * (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param entityName Name of the hybrid connection configuration.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will create or update a
     *             hybrid connection for the production slot.
     * @param connectionEnvelope Details of the hybrid connection configuration.
     * @param options The options parameters.
     */
    updateRelayServiceConnectionSlot(resourceGroupName: string, name: string, entityName: string, slot: string, connectionEnvelope: RelayServiceConnectionEntity, options?: WebAppsUpdateRelayServiceConnectionSlotOptionalParams): Promise<WebAppsUpdateRelayServiceConnectionSlotResponse>;
    /**
     * Description for Gets all scale-out instances of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param instanceId
     * @param slot Name of the deployment slot. If a slot is not specified, the API gets the production
     *             slot instances.
     * @param options The options parameters.
     */
    getInstanceInfoSlot(resourceGroupName: string, name: string, instanceId: string, slot: string, options?: WebAppsGetInstanceInfoSlotOptionalParams): Promise<WebAppsGetInstanceInfoSlotResponse>;
    /**
     * Description for Get the status of the last MSDeploy operation.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param instanceId ID of web app instance.
     * @param options The options parameters.
     */
    getInstanceMsDeployStatusSlot(resourceGroupName: string, name: string, slot: string, instanceId: string, options?: WebAppsGetInstanceMsDeployStatusSlotOptionalParams): Promise<WebAppsGetInstanceMsDeployStatusSlotResponse>;
    /**
     * Description for Invoke the MSDeploy web app extension.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param instanceId ID of web app instance.
     * @param mSDeploy Details of MSDeploy operation
     * @param options The options parameters.
     */
    beginCreateInstanceMSDeployOperationSlot(resourceGroupName: string, name: string, slot: string, instanceId: string, mSDeploy: MSDeploy, options?: WebAppsCreateInstanceMSDeployOperationSlotOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateInstanceMSDeployOperationSlotResponse>, WebAppsCreateInstanceMSDeployOperationSlotResponse>>;
    /**
     * Description for Invoke the MSDeploy web app extension.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param instanceId ID of web app instance.
     * @param mSDeploy Details of MSDeploy operation
     * @param options The options parameters.
     */
    beginCreateInstanceMSDeployOperationSlotAndWait(resourceGroupName: string, name: string, slot: string, instanceId: string, mSDeploy: MSDeploy, options?: WebAppsCreateInstanceMSDeployOperationSlotOptionalParams): Promise<WebAppsCreateInstanceMSDeployOperationSlotResponse>;
    /**
     * Description for Get the MSDeploy Log for the last MSDeploy operation.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param instanceId ID of web app instance.
     * @param options The options parameters.
     */
    getInstanceMSDeployLogSlot(resourceGroupName: string, name: string, slot: string, instanceId: string, options?: WebAppsGetInstanceMSDeployLogSlotOptionalParams): Promise<WebAppsGetInstanceMSDeployLogSlotResponse>;
    /**
     * Description for Get process information by its ID for a specific scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    getInstanceProcessSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, options?: WebAppsGetInstanceProcessSlotOptionalParams): Promise<WebAppsGetInstanceProcessSlotResponse>;
    /**
     * Description for Terminate a process by its ID for a web site, or a deployment slot, or specific
     * scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    deleteInstanceProcessSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, options?: WebAppsDeleteInstanceProcessSlotOptionalParams): Promise<void>;
    /**
     * Description for Get a memory dump of a process by its ID for a specific scaled-out instance in a web
     * site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    getInstanceProcessDumpSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, options?: WebAppsGetInstanceProcessDumpSlotOptionalParams): Promise<WebAppsGetInstanceProcessDumpSlotResponse>;
    /**
     * Description for Get process information by its ID for a specific scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param baseAddress Module base address.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param instanceId ID of a specific scaled-out instance. This is the value of the name property in
     *                   the JSON response from "GET api/sites/{siteName}/instances".
     * @param options The options parameters.
     */
    getInstanceProcessModuleSlot(resourceGroupName: string, name: string, processId: string, baseAddress: string, slot: string, instanceId: string, options?: WebAppsGetInstanceProcessModuleSlotOptionalParams): Promise<WebAppsGetInstanceProcessModuleSlotResponse>;
    /**
     * Description for Shows whether an app can be cloned to another resource group or subscription.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. By default, this API returns information on the production
     *             slot.
     * @param options The options parameters.
     */
    isCloneableSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsIsCloneableSlotOptionalParams): Promise<WebAppsIsCloneableSlotResponse>;
    /**
     * Description for This is to allow calling via powershell and ARM template.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    listSyncFunctionTriggersSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListSyncFunctionTriggersSlotOptionalParams): Promise<WebAppsListSyncFunctionTriggersSlotResponse>;
    /**
     * Description for Returns the status of MySql in app migration, if one is active, and whether or not
     * MySql in app is enabled
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    getMigrateMySqlStatusSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetMigrateMySqlStatusSlotOptionalParams): Promise<WebAppsGetMigrateMySqlStatusSlotResponse>;
    /**
     * Description for Gets a Swift Virtual Network connection.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get a gateway for
     *             the production slot's Virtual Network.
     * @param options The options parameters.
     */
    getSwiftVirtualNetworkConnectionSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetSwiftVirtualNetworkConnectionSlotOptionalParams): Promise<WebAppsGetSwiftVirtualNetworkConnectionSlotResponse>;
    /**
     * Description for Integrates this Web App with a Virtual Network. This requires that 1)
     * "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has
     * already been delegated, and is not
     * in use by another App Service Plan other than the one this App is in.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will add or update
     *             connections for the production slot.
     * @param connectionEnvelope Properties of the Virtual Network connection. See example.
     * @param options The options parameters.
     */
    createOrUpdateSwiftVirtualNetworkConnectionSlot(resourceGroupName: string, name: string, slot: string, connectionEnvelope: SwiftVirtualNetwork, options?: WebAppsCreateOrUpdateSwiftVirtualNetworkConnectionSlotOptionalParams): Promise<WebAppsCreateOrUpdateSwiftVirtualNetworkConnectionSlotResponse>;
    /**
     * Description for Deletes a Swift Virtual Network connection from an app (or deployment slot).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the
     *             connection for the production slot.
     * @param options The options parameters.
     */
    deleteSwiftVirtualNetworkSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsDeleteSwiftVirtualNetworkSlotOptionalParams): Promise<void>;
    /**
     * Description for Integrates this Web App with a Virtual Network. This requires that 1)
     * "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has
     * already been delegated, and is not
     * in use by another App Service Plan other than the one this App is in.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will add or update
     *             connections for the production slot.
     * @param connectionEnvelope Properties of the Virtual Network connection. See example.
     * @param options The options parameters.
     */
    updateSwiftVirtualNetworkConnectionSlot(resourceGroupName: string, name: string, slot: string, connectionEnvelope: SwiftVirtualNetwork, options?: WebAppsUpdateSwiftVirtualNetworkConnectionSlotOptionalParams): Promise<WebAppsUpdateSwiftVirtualNetworkConnectionSlotResponse>;
    /**
     * Description for Gets all network features used by the app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param view The type of view. This can either be "summary" or "detailed".
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get network
     *             features for the production slot.
     * @param options The options parameters.
     */
    listNetworkFeaturesSlot(resourceGroupName: string, name: string, view: string, slot: string, options?: WebAppsListNetworkFeaturesSlotOptionalParams): Promise<WebAppsListNetworkFeaturesSlotResponse>;
    /**
     * Description for Gets a named operation for a network trace capturing (or deployment slot, if
     * specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param operationId GUID of the operation.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get an operation
     *             for the production slot.
     * @param options The options parameters.
     */
    getNetworkTraceOperationSlot(resourceGroupName: string, name: string, operationId: string, slot: string, options?: WebAppsGetNetworkTraceOperationSlotOptionalParams): Promise<WebAppsGetNetworkTraceOperationSlotResponse>;
    /**
     * Description for Start capturing network packets for the site (To be deprecated).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for this web app.
     * @param options The options parameters.
     */
    startWebSiteNetworkTraceSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsStartWebSiteNetworkTraceSlotOptionalParams): Promise<WebAppsStartWebSiteNetworkTraceSlotResponse>;
    /**
     * Description for Start capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for this web app.
     * @param options The options parameters.
     */
    beginStartWebSiteNetworkTraceOperationSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsStartWebSiteNetworkTraceOperationSlotOptionalParams): Promise<PollerLike<PollOperationState<WebAppsStartWebSiteNetworkTraceOperationSlotResponse>, WebAppsStartWebSiteNetworkTraceOperationSlotResponse>>;
    /**
     * Description for Start capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for this web app.
     * @param options The options parameters.
     */
    beginStartWebSiteNetworkTraceOperationSlotAndWait(resourceGroupName: string, name: string, slot: string, options?: WebAppsStartWebSiteNetworkTraceOperationSlotOptionalParams): Promise<WebAppsStartWebSiteNetworkTraceOperationSlotResponse>;
    /**
     * Description for Stop ongoing capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for this web app.
     * @param options The options parameters.
     */
    stopWebSiteNetworkTraceSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsStopWebSiteNetworkTraceSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets a named operation for a network trace capturing (or deployment slot, if
     * specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param operationId GUID of the operation.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get an operation
     *             for the production slot.
     * @param options The options parameters.
     */
    getNetworkTracesSlot(resourceGroupName: string, name: string, operationId: string, slot: string, options?: WebAppsGetNetworkTracesSlotOptionalParams): Promise<WebAppsGetNetworkTracesSlotResponse>;
    /**
     * Description for Gets a named operation for a network trace capturing (or deployment slot, if
     * specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param operationId GUID of the operation.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get an operation
     *             for the production slot.
     * @param options The options parameters.
     */
    getNetworkTraceOperationSlotV2(resourceGroupName: string, name: string, operationId: string, slot: string, options?: WebAppsGetNetworkTraceOperationSlotV2OptionalParams): Promise<WebAppsGetNetworkTraceOperationSlotV2Response>;
    /**
     * Description for Gets a named operation for a network trace capturing (or deployment slot, if
     * specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param operationId GUID of the operation.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get an operation
     *             for the production slot.
     * @param options The options parameters.
     */
    getNetworkTracesSlotV2(resourceGroupName: string, name: string, operationId: string, slot: string, options?: WebAppsGetNetworkTracesSlotV2OptionalParams): Promise<WebAppsGetNetworkTracesSlotV2Response>;
    /**
     * Description for Generates a new publishing password for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API generate a new
     *             publishing password for the production slot.
     * @param options The options parameters.
     */
    generateNewSitePublishingPasswordSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGenerateNewSitePublishingPasswordSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets web app's event logs.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    getSitePhpErrorLogFlagSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetSitePhpErrorLogFlagSlotOptionalParams): Promise<WebAppsGetSitePhpErrorLogFlagSlotResponse>;
    /**
     * Description for Gets the premier add-ons of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the premier
     *             add-ons for the production slot.
     * @param options The options parameters.
     */
    listPremierAddOnsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListPremierAddOnsSlotOptionalParams): Promise<WebAppsListPremierAddOnsSlotResponse>;
    /**
     * Description for Gets a named add-on of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param premierAddOnName Add-on name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the named
     *             add-on for the production slot.
     * @param options The options parameters.
     */
    getPremierAddOnSlot(resourceGroupName: string, name: string, premierAddOnName: string, slot: string, options?: WebAppsGetPremierAddOnSlotOptionalParams): Promise<WebAppsGetPremierAddOnSlotResponse>;
    /**
     * Description for Updates a named add-on of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param premierAddOnName Add-on name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the named
     *             add-on for the production slot.
     * @param premierAddOn A JSON representation of the edited premier add-on.
     * @param options The options parameters.
     */
    addPremierAddOnSlot(resourceGroupName: string, name: string, premierAddOnName: string, slot: string, premierAddOn: PremierAddOn, options?: WebAppsAddPremierAddOnSlotOptionalParams): Promise<WebAppsAddPremierAddOnSlotResponse>;
    /**
     * Description for Delete a premier add-on from an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param premierAddOnName Add-on name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the named
     *             add-on for the production slot.
     * @param options The options parameters.
     */
    deletePremierAddOnSlot(resourceGroupName: string, name: string, premierAddOnName: string, slot: string, options?: WebAppsDeletePremierAddOnSlotOptionalParams): Promise<void>;
    /**
     * Description for Updates a named add-on of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param premierAddOnName Add-on name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the named
     *             add-on for the production slot.
     * @param premierAddOn A JSON representation of the edited premier add-on.
     * @param options The options parameters.
     */
    updatePremierAddOnSlot(resourceGroupName: string, name: string, premierAddOnName: string, slot: string, premierAddOn: PremierAddOnPatchResource, options?: WebAppsUpdatePremierAddOnSlotOptionalParams): Promise<WebAppsUpdatePremierAddOnSlotResponse>;
    /**
     * Description for Gets data around private site access enablement and authorized Virtual Networks that
     * can access the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for the web app.
     * @param options The options parameters.
     */
    getPrivateAccessSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetPrivateAccessSlotOptionalParams): Promise<WebAppsGetPrivateAccessSlotResponse>;
    /**
     * Description for Sets data around private site access enablement and authorized Virtual Networks that
     * can access the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for the web app.
     * @param access The information for the private access
     * @param options The options parameters.
     */
    putPrivateAccessVnetSlot(resourceGroupName: string, name: string, slot: string, access: PrivateAccess, options?: WebAppsPutPrivateAccessVnetSlotOptionalParams): Promise<WebAppsPutPrivateAccessVnetSlotResponse>;
    /**
     * Description for Gets a private endpoint connection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the site.
     * @param privateEndpointConnectionName
     * @param options The options parameters.
     */
    getPrivateEndpointConnection(resourceGroupName: string, name: string, privateEndpointConnectionName: string, options?: WebAppsGetPrivateEndpointConnectionOptionalParams): Promise<WebAppsGetPrivateEndpointConnectionResponse>;
    /**
     * Description for Approves or rejects a private endpoint connection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the site.
     * @param privateEndpointConnectionName
     * @param privateEndpointWrapper Private Endpoint Connection Approval ARM resource.
     * @param options The options parameters.
     */
    beginApproveOrRejectPrivateEndpointConnection(resourceGroupName: string, name: string, privateEndpointConnectionName: string, privateEndpointWrapper: PrivateLinkConnectionApprovalRequestResource, options?: WebAppsApproveOrRejectPrivateEndpointConnectionOptionalParams): Promise<PollerLike<PollOperationState<WebAppsApproveOrRejectPrivateEndpointConnectionResponse>, WebAppsApproveOrRejectPrivateEndpointConnectionResponse>>;
    /**
     * Description for Approves or rejects a private endpoint connection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the site.
     * @param privateEndpointConnectionName
     * @param privateEndpointWrapper Private Endpoint Connection Approval ARM resource.
     * @param options The options parameters.
     */
    beginApproveOrRejectPrivateEndpointConnectionAndWait(resourceGroupName: string, name: string, privateEndpointConnectionName: string, privateEndpointWrapper: PrivateLinkConnectionApprovalRequestResource, options?: WebAppsApproveOrRejectPrivateEndpointConnectionOptionalParams): Promise<WebAppsApproveOrRejectPrivateEndpointConnectionResponse>;
    /**
     * Description for Deletes a private endpoint connection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the site.
     * @param privateEndpointConnectionName
     * @param options The options parameters.
     */
    beginDeletePrivateEndpointConnection(resourceGroupName: string, name: string, privateEndpointConnectionName: string, options?: WebAppsDeletePrivateEndpointConnectionOptionalParams): Promise<PollerLike<PollOperationState<WebAppsDeletePrivateEndpointConnectionResponse>, WebAppsDeletePrivateEndpointConnectionResponse>>;
    /**
     * Description for Deletes a private endpoint connection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the site.
     * @param privateEndpointConnectionName
     * @param options The options parameters.
     */
    beginDeletePrivateEndpointConnectionAndWait(resourceGroupName: string, name: string, privateEndpointConnectionName: string, options?: WebAppsDeletePrivateEndpointConnectionOptionalParams): Promise<WebAppsDeletePrivateEndpointConnectionResponse>;
    /**
     * Description for Gets the private link resources
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the site.
     * @param options The options parameters.
     */
    getPrivateLinkResources(resourceGroupName: string, name: string, options?: WebAppsGetPrivateLinkResourcesOptionalParams): Promise<WebAppsGetPrivateLinkResourcesResponse>;
    /**
     * Description for Get process information by its ID for a specific scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    getProcessSlot(resourceGroupName: string, name: string, processId: string, slot: string, options?: WebAppsGetProcessSlotOptionalParams): Promise<WebAppsGetProcessSlotResponse>;
    /**
     * Description for Terminate a process by its ID for a web site, or a deployment slot, or specific
     * scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    deleteProcessSlot(resourceGroupName: string, name: string, processId: string, slot: string, options?: WebAppsDeleteProcessSlotOptionalParams): Promise<void>;
    /**
     * Description for Get a memory dump of a process by its ID for a specific scaled-out instance in a web
     * site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    getProcessDumpSlot(resourceGroupName: string, name: string, processId: string, slot: string, options?: WebAppsGetProcessDumpSlotOptionalParams): Promise<WebAppsGetProcessDumpSlotResponse>;
    /**
     * Description for Get process information by its ID for a specific scaled-out instance in a web site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param processId PID.
     * @param baseAddress Module base address.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    getProcessModuleSlot(resourceGroupName: string, name: string, processId: string, baseAddress: string, slot: string, options?: WebAppsGetProcessModuleSlotOptionalParams): Promise<WebAppsGetProcessModuleSlotResponse>;
    /**
     * Description for Get the named public certificate for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API the named binding for
     *             the production slot.
     * @param publicCertificateName Public certificate name.
     * @param options The options parameters.
     */
    getPublicCertificateSlot(resourceGroupName: string, name: string, slot: string, publicCertificateName: string, options?: WebAppsGetPublicCertificateSlotOptionalParams): Promise<WebAppsGetPublicCertificateSlotResponse>;
    /**
     * Description for Creates a hostname binding for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param publicCertificateName Public certificate name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will create a binding
     *             for the production slot.
     * @param publicCertificate Public certificate details. This is the JSON representation of a
     *                          PublicCertificate object.
     * @param options The options parameters.
     */
    createOrUpdatePublicCertificateSlot(resourceGroupName: string, name: string, publicCertificateName: string, slot: string, publicCertificate: PublicCertificate, options?: WebAppsCreateOrUpdatePublicCertificateSlotOptionalParams): Promise<WebAppsCreateOrUpdatePublicCertificateSlotResponse>;
    /**
     * Description for Deletes a hostname binding for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the binding
     *             for the production slot.
     * @param publicCertificateName Public certificate name.
     * @param options The options parameters.
     */
    deletePublicCertificateSlot(resourceGroupName: string, name: string, slot: string, publicCertificateName: string, options?: WebAppsDeletePublicCertificateSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets the publishing profile for an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the publishing
     *             profile for the production slot.
     * @param publishingProfileOptions Specifies publishingProfileOptions for publishing profile. For
     *                                 example, use {"format": "FileZilla3"} to get a FileZilla publishing profile.
     * @param options The options parameters.
     */
    listPublishingProfileXmlWithSecretsSlot(resourceGroupName: string, name: string, slot: string, publishingProfileOptions: CsmPublishingProfileOptions, options?: WebAppsListPublishingProfileXmlWithSecretsSlotOptionalParams): Promise<WebAppsListPublishingProfileXmlWithSecretsSlotResponse>;
    /**
     * Description for Resets the configuration settings of the current slot if they were previously
     * modified by calling the API with POST.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API resets configuration
     *             settings for the production slot.
     * @param options The options parameters.
     */
    resetSlotConfigurationSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsResetSlotConfigurationSlotOptionalParams): Promise<void>;
    /**
     * Description for Restarts an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will restart the
     *             production slot.
     * @param options The options parameters.
     */
    restartSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsRestartSlotOptionalParams): Promise<void>;
    /**
     * Description for Restores an app from a backup blob in Azure Storage.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will restore a backup
     *             of the production slot.
     * @param request Information on restore request .
     * @param options The options parameters.
     */
    beginRestoreFromBackupBlobSlot(resourceGroupName: string, name: string, slot: string, request: RestoreRequest, options?: WebAppsRestoreFromBackupBlobSlotOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Restores an app from a backup blob in Azure Storage.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will restore a backup
     *             of the production slot.
     * @param request Information on restore request .
     * @param options The options parameters.
     */
    beginRestoreFromBackupBlobSlotAndWait(resourceGroupName: string, name: string, slot: string, request: RestoreRequest, options?: WebAppsRestoreFromBackupBlobSlotOptionalParams): Promise<void>;
    /**
     * Description for Restores a deleted web app to this web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param restoreRequest Deleted web app restore information.
     * @param options The options parameters.
     */
    beginRestoreFromDeletedAppSlot(resourceGroupName: string, name: string, slot: string, restoreRequest: DeletedAppRestoreRequest, options?: WebAppsRestoreFromDeletedAppSlotOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Restores a deleted web app to this web app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param restoreRequest Deleted web app restore information.
     * @param options The options parameters.
     */
    beginRestoreFromDeletedAppSlotAndWait(resourceGroupName: string, name: string, slot: string, restoreRequest: DeletedAppRestoreRequest, options?: WebAppsRestoreFromDeletedAppSlotOptionalParams): Promise<void>;
    /**
     * Description for Restores a web app from a snapshot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param restoreRequest Snapshot restore settings. Snapshot information can be obtained by calling
     *                       GetDeletedSites or GetSiteSnapshots API.
     * @param options The options parameters.
     */
    beginRestoreSnapshotSlot(resourceGroupName: string, name: string, slot: string, restoreRequest: SnapshotRestoreRequest, options?: WebAppsRestoreSnapshotSlotOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Restores a web app from a snapshot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param restoreRequest Snapshot restore settings. Snapshot information can be obtained by calling
     *                       GetDeletedSites or GetSiteSnapshots API.
     * @param options The options parameters.
     */
    beginRestoreSnapshotSlotAndWait(resourceGroupName: string, name: string, slot: string, restoreRequest: SnapshotRestoreRequest, options?: WebAppsRestoreSnapshotSlotOptionalParams): Promise<void>;
    /**
     * Description for Get site extension information by its ID for a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param siteExtensionId Site extension name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API uses the production
     *             slot.
     * @param options The options parameters.
     */
    getSiteExtensionSlot(resourceGroupName: string, name: string, siteExtensionId: string, slot: string, options?: WebAppsGetSiteExtensionSlotOptionalParams): Promise<WebAppsGetSiteExtensionSlotResponse>;
    /**
     * Description for Install site extension on a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param siteExtensionId Site extension name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API uses the production
     *             slot.
     * @param options The options parameters.
     */
    beginInstallSiteExtensionSlot(resourceGroupName: string, name: string, siteExtensionId: string, slot: string, options?: WebAppsInstallSiteExtensionSlotOptionalParams): Promise<PollerLike<PollOperationState<WebAppsInstallSiteExtensionSlotResponse>, WebAppsInstallSiteExtensionSlotResponse>>;
    /**
     * Description for Install site extension on a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param siteExtensionId Site extension name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API uses the production
     *             slot.
     * @param options The options parameters.
     */
    beginInstallSiteExtensionSlotAndWait(resourceGroupName: string, name: string, siteExtensionId: string, slot: string, options?: WebAppsInstallSiteExtensionSlotOptionalParams): Promise<WebAppsInstallSiteExtensionSlotResponse>;
    /**
     * Description for Remove a site extension from a web site, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param siteExtensionId Site extension name.
     * @param slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment
     *             for the production slot.
     * @param options The options parameters.
     */
    deleteSiteExtensionSlot(resourceGroupName: string, name: string, siteExtensionId: string, slot: string, options?: WebAppsDeleteSiteExtensionSlotOptionalParams): Promise<void>;
    /**
     * Description for Copies a deployment slot to another deployment slot of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the source slot. If a slot is not specified, the production slot is used as the
     *             source slot.
     * @param copySlotEntity JSON object that contains the target slot name and site config properties to
     *                       override the source slot config. See example.
     * @param options The options parameters.
     */
    beginCopySlot(resourceGroupName: string, name: string, slot: string, copySlotEntity: CsmCopySlotEntity, options?: WebAppsCopySlotOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Copies a deployment slot to another deployment slot of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the source slot. If a slot is not specified, the production slot is used as the
     *             source slot.
     * @param copySlotEntity JSON object that contains the target slot name and site config properties to
     *                       override the source slot config. See example.
     * @param options The options parameters.
     */
    beginCopySlotAndWait(resourceGroupName: string, name: string, slot: string, copySlotEntity: CsmCopySlotEntity, options?: WebAppsCopySlotOptionalParams): Promise<void>;
    /**
     * Description for Swaps two deployment slots of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the source slot. If a slot is not specified, the production slot is used as the
     *             source slot.
     * @param slotSwapEntity JSON object that contains the target slot name. See example.
     * @param options The options parameters.
     */
    beginSwapSlot(resourceGroupName: string, name: string, slot: string, slotSwapEntity: CsmSlotEntity, options?: WebAppsSwapSlotOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Swaps two deployment slots of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the source slot. If a slot is not specified, the production slot is used as the
     *             source slot.
     * @param slotSwapEntity JSON object that contains the target slot name. See example.
     * @param options The options parameters.
     */
    beginSwapSlotAndWait(resourceGroupName: string, name: string, slot: string, slotSwapEntity: CsmSlotEntity, options?: WebAppsSwapSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the source
     *             control configuration for the production slot.
     * @param options The options parameters.
     */
    getSourceControlSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsGetSourceControlSlotOptionalParams): Promise<WebAppsGetSourceControlSlotResponse>;
    /**
     * Description for Updates the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the source
     *             control configuration for the production slot.
     * @param siteSourceControl JSON representation of a SiteSourceControl object. See example.
     * @param options The options parameters.
     */
    beginCreateOrUpdateSourceControlSlot(resourceGroupName: string, name: string, slot: string, siteSourceControl: SiteSourceControl, options?: WebAppsCreateOrUpdateSourceControlSlotOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateOrUpdateSourceControlSlotResponse>, WebAppsCreateOrUpdateSourceControlSlotResponse>>;
    /**
     * Description for Updates the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the source
     *             control configuration for the production slot.
     * @param siteSourceControl JSON representation of a SiteSourceControl object. See example.
     * @param options The options parameters.
     */
    beginCreateOrUpdateSourceControlSlotAndWait(resourceGroupName: string, name: string, slot: string, siteSourceControl: SiteSourceControl, options?: WebAppsCreateOrUpdateSourceControlSlotOptionalParams): Promise<WebAppsCreateOrUpdateSourceControlSlotResponse>;
    /**
     * Description for Deletes the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the source
     *             control configuration for the production slot.
     * @param options The options parameters.
     */
    deleteSourceControlSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsDeleteSourceControlSlotOptionalParams): Promise<void>;
    /**
     * Description for Updates the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will update the source
     *             control configuration for the production slot.
     * @param siteSourceControl JSON representation of a SiteSourceControl object. See example.
     * @param options The options parameters.
     */
    updateSourceControlSlot(resourceGroupName: string, name: string, slot: string, siteSourceControl: SiteSourceControl, options?: WebAppsUpdateSourceControlSlotOptionalParams): Promise<WebAppsUpdateSourceControlSlotResponse>;
    /**
     * Description for Starts an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will start the
     *             production slot.
     * @param options The options parameters.
     */
    startSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsStartSlotOptionalParams): Promise<void>;
    /**
     * Description for Start capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for this web app.
     * @param options The options parameters.
     */
    beginStartNetworkTraceSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsStartNetworkTraceSlotOptionalParams): Promise<PollerLike<PollOperationState<WebAppsStartNetworkTraceSlotResponse>, WebAppsStartNetworkTraceSlotResponse>>;
    /**
     * Description for Start capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for this web app.
     * @param options The options parameters.
     */
    beginStartNetworkTraceSlotAndWait(resourceGroupName: string, name: string, slot: string, options?: WebAppsStartNetworkTraceSlotOptionalParams): Promise<WebAppsStartNetworkTraceSlotResponse>;
    /**
     * Description for Stops an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will stop the
     *             production slot.
     * @param options The options parameters.
     */
    stopSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsStopSlotOptionalParams): Promise<void>;
    /**
     * Description for Stop ongoing capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param slot The name of the slot for this web app.
     * @param options The options parameters.
     */
    stopNetworkTraceSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsStopNetworkTraceSlotOptionalParams): Promise<void>;
    /**
     * Description for Sync web app repository.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    syncRepositorySlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsSyncRepositorySlotOptionalParams): Promise<void>;
    /**
     * Description for Syncs function trigger metadata to the management database
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot.
     * @param options The options parameters.
     */
    syncFunctionTriggersSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsSyncFunctionTriggersSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets a triggered web job by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param slot Name of the deployment slot. If a slot is not specified, the API uses the production
     *             slot.
     * @param options The options parameters.
     */
    getTriggeredWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, options?: WebAppsGetTriggeredWebJobSlotOptionalParams): Promise<WebAppsGetTriggeredWebJobSlotResponse>;
    /**
     * Description for Delete a triggered web job by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param slot Name of the deployment slot. If a slot is not specified, the API deletes web job for the
     *             production slot.
     * @param options The options parameters.
     */
    deleteTriggeredWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, options?: WebAppsDeleteTriggeredWebJobSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets a triggered web job's history by its ID for an app, , or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param id History ID.
     * @param slot Name of the deployment slot. If a slot is not specified, the API uses the production
     *             slot.
     * @param options The options parameters.
     */
    getTriggeredWebJobHistorySlot(resourceGroupName: string, name: string, webJobName: string, id: string, slot: string, options?: WebAppsGetTriggeredWebJobHistorySlotOptionalParams): Promise<WebAppsGetTriggeredWebJobHistorySlotResponse>;
    /**
     * Description for Run a triggered web job for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param slot Name of the deployment slot. If a slot is not specified, the API uses the production
     *             slot.
     * @param options The options parameters.
     */
    runTriggeredWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, options?: WebAppsRunTriggeredWebJobSlotOptionalParams): Promise<void>;
    /**
     * Description for Gets the virtual networks the app (or deployment slot) is connected to.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get virtual
     *             network connections for the production slot.
     * @param options The options parameters.
     */
    listVnetConnectionsSlot(resourceGroupName: string, name: string, slot: string, options?: WebAppsListVnetConnectionsSlotOptionalParams): Promise<WebAppsListVnetConnectionsSlotResponse>;
    /**
     * Description for Gets a virtual network the app (or deployment slot) is connected to by name.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the virtual network.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get the named
     *             virtual network for the production slot.
     * @param options The options parameters.
     */
    getVnetConnectionSlot(resourceGroupName: string, name: string, vnetName: string, slot: string, options?: WebAppsGetVnetConnectionSlotOptionalParams): Promise<WebAppsGetVnetConnectionSlotResponse>;
    /**
     * Description for Adds a Virtual Network connection to an app or slot (PUT) or updates the connection
     * properties (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of an existing Virtual Network.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will add or update
     *             connections for the production slot.
     * @param connectionEnvelope Properties of the Virtual Network connection. See example.
     * @param options The options parameters.
     */
    createOrUpdateVnetConnectionSlot(resourceGroupName: string, name: string, vnetName: string, slot: string, connectionEnvelope: VnetInfo, options?: WebAppsCreateOrUpdateVnetConnectionSlotOptionalParams): Promise<WebAppsCreateOrUpdateVnetConnectionSlotResponse>;
    /**
     * Description for Deletes a connection from an app (or deployment slot to a named virtual network.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the virtual network.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will delete the
     *             connection for the production slot.
     * @param options The options parameters.
     */
    deleteVnetConnectionSlot(resourceGroupName: string, name: string, vnetName: string, slot: string, options?: WebAppsDeleteVnetConnectionSlotOptionalParams): Promise<void>;
    /**
     * Description for Adds a Virtual Network connection to an app or slot (PUT) or updates the connection
     * properties (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of an existing Virtual Network.
     * @param slot Name of the deployment slot. If a slot is not specified, the API will add or update
     *             connections for the production slot.
     * @param connectionEnvelope Properties of the Virtual Network connection. See example.
     * @param options The options parameters.
     */
    updateVnetConnectionSlot(resourceGroupName: string, name: string, vnetName: string, slot: string, connectionEnvelope: VnetInfo, options?: WebAppsUpdateVnetConnectionSlotOptionalParams): Promise<WebAppsUpdateVnetConnectionSlotResponse>;
    /**
     * Description for Gets an app's Virtual Network gateway.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the Virtual Network.
     * @param gatewayName Name of the gateway. Currently, the only supported string is "primary".
     * @param slot Name of the deployment slot. If a slot is not specified, the API will get a gateway for
     *             the production slot's Virtual Network.
     * @param options The options parameters.
     */
    getVnetConnectionGatewaySlot(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, slot: string, options?: WebAppsGetVnetConnectionGatewaySlotOptionalParams): Promise<WebAppsGetVnetConnectionGatewaySlotResponse>;
    /**
     * Description for Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the Virtual Network.
     * @param gatewayName Name of the gateway. Currently, the only supported string is "primary".
     * @param slot Name of the deployment slot. If a slot is not specified, the API will add or update a
     *             gateway for the production slot's Virtual Network.
     * @param connectionEnvelope The properties to update this gateway with.
     * @param options The options parameters.
     */
    createOrUpdateVnetConnectionGatewaySlot(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, slot: string, connectionEnvelope: VnetGateway, options?: WebAppsCreateOrUpdateVnetConnectionGatewaySlotOptionalParams): Promise<WebAppsCreateOrUpdateVnetConnectionGatewaySlotResponse>;
    /**
     * Description for Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the Virtual Network.
     * @param gatewayName Name of the gateway. Currently, the only supported string is "primary".
     * @param slot Name of the deployment slot. If a slot is not specified, the API will add or update a
     *             gateway for the production slot's Virtual Network.
     * @param connectionEnvelope The properties to update this gateway with.
     * @param options The options parameters.
     */
    updateVnetConnectionGatewaySlot(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, slot: string, connectionEnvelope: VnetGateway, options?: WebAppsUpdateVnetConnectionGatewaySlotOptionalParams): Promise<WebAppsUpdateVnetConnectionGatewaySlotResponse>;
    /**
     * Description for Get webjob information for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of the web job.
     * @param slot Name of the deployment slot. If a slot is not specified, the API returns deployments for
     *             the production slot.
     * @param options The options parameters.
     */
    getWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, options?: WebAppsGetWebJobSlotOptionalParams): Promise<WebAppsGetWebJobSlotResponse>;
    /**
     * Description for Swaps two deployment slots of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slotSwapEntity JSON object that contains the target slot name. See example.
     * @param options The options parameters.
     */
    beginSwapSlotWithProduction(resourceGroupName: string, name: string, slotSwapEntity: CsmSlotEntity, options?: WebAppsSwapSlotWithProductionOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Description for Swaps two deployment slots of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param slotSwapEntity JSON object that contains the target slot name. See example.
     * @param options The options parameters.
     */
    beginSwapSlotWithProductionAndWait(resourceGroupName: string, name: string, slotSwapEntity: CsmSlotEntity, options?: WebAppsSwapSlotWithProductionOptionalParams): Promise<void>;
    /**
     * Description for Gets the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    getSourceControl(resourceGroupName: string, name: string, options?: WebAppsGetSourceControlOptionalParams): Promise<WebAppsGetSourceControlResponse>;
    /**
     * Description for Updates the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param siteSourceControl JSON representation of a SiteSourceControl object. See example.
     * @param options The options parameters.
     */
    beginCreateOrUpdateSourceControl(resourceGroupName: string, name: string, siteSourceControl: SiteSourceControl, options?: WebAppsCreateOrUpdateSourceControlOptionalParams): Promise<PollerLike<PollOperationState<WebAppsCreateOrUpdateSourceControlResponse>, WebAppsCreateOrUpdateSourceControlResponse>>;
    /**
     * Description for Updates the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param siteSourceControl JSON representation of a SiteSourceControl object. See example.
     * @param options The options parameters.
     */
    beginCreateOrUpdateSourceControlAndWait(resourceGroupName: string, name: string, siteSourceControl: SiteSourceControl, options?: WebAppsCreateOrUpdateSourceControlOptionalParams): Promise<WebAppsCreateOrUpdateSourceControlResponse>;
    /**
     * Description for Deletes the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    deleteSourceControl(resourceGroupName: string, name: string, options?: WebAppsDeleteSourceControlOptionalParams): Promise<void>;
    /**
     * Description for Updates the source control configuration of an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param siteSourceControl JSON representation of a SiteSourceControl object. See example.
     * @param options The options parameters.
     */
    updateSourceControl(resourceGroupName: string, name: string, siteSourceControl: SiteSourceControl, options?: WebAppsUpdateSourceControlOptionalParams): Promise<WebAppsUpdateSourceControlResponse>;
    /**
     * Description for Starts an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    start(resourceGroupName: string, name: string, options?: WebAppsStartOptionalParams): Promise<void>;
    /**
     * Description for Start capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param options The options parameters.
     */
    beginStartNetworkTrace(resourceGroupName: string, name: string, options?: WebAppsStartNetworkTraceOptionalParams): Promise<PollerLike<PollOperationState<WebAppsStartNetworkTraceResponse>, WebAppsStartNetworkTraceResponse>>;
    /**
     * Description for Start capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param options The options parameters.
     */
    beginStartNetworkTraceAndWait(resourceGroupName: string, name: string, options?: WebAppsStartNetworkTraceOptionalParams): Promise<WebAppsStartNetworkTraceResponse>;
    /**
     * Description for Stops an app (or deployment slot, if specified).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    stop(resourceGroupName: string, name: string, options?: WebAppsStopOptionalParams): Promise<void>;
    /**
     * Description for Stop ongoing capturing network packets for the site.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name The name of the web app.
     * @param options The options parameters.
     */
    stopNetworkTrace(resourceGroupName: string, name: string, options?: WebAppsStopNetworkTraceOptionalParams): Promise<void>;
    /**
     * Description for Sync web app repository.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    syncRepository(resourceGroupName: string, name: string, options?: WebAppsSyncRepositoryOptionalParams): Promise<void>;
    /**
     * Description for Syncs function trigger metadata to the management database
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    syncFunctionTriggers(resourceGroupName: string, name: string, options?: WebAppsSyncFunctionTriggersOptionalParams): Promise<void>;
    /**
     * Description for Gets a triggered web job by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param options The options parameters.
     */
    getTriggeredWebJob(resourceGroupName: string, name: string, webJobName: string, options?: WebAppsGetTriggeredWebJobOptionalParams): Promise<WebAppsGetTriggeredWebJobResponse>;
    /**
     * Description for Delete a triggered web job by its ID for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param options The options parameters.
     */
    deleteTriggeredWebJob(resourceGroupName: string, name: string, webJobName: string, options?: WebAppsDeleteTriggeredWebJobOptionalParams): Promise<void>;
    /**
     * Description for Gets a triggered web job's history by its ID for an app, , or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param id History ID.
     * @param options The options parameters.
     */
    getTriggeredWebJobHistory(resourceGroupName: string, name: string, webJobName: string, id: string, options?: WebAppsGetTriggeredWebJobHistoryOptionalParams): Promise<WebAppsGetTriggeredWebJobHistoryResponse>;
    /**
     * Description for Run a triggered web job for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of Web Job.
     * @param options The options parameters.
     */
    runTriggeredWebJob(resourceGroupName: string, name: string, webJobName: string, options?: WebAppsRunTriggeredWebJobOptionalParams): Promise<void>;
    /**
     * Description for Gets the virtual networks the app (or deployment slot) is connected to.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param options The options parameters.
     */
    listVnetConnections(resourceGroupName: string, name: string, options?: WebAppsListVnetConnectionsOptionalParams): Promise<WebAppsListVnetConnectionsResponse>;
    /**
     * Description for Gets a virtual network the app (or deployment slot) is connected to by name.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the virtual network.
     * @param options The options parameters.
     */
    getVnetConnection(resourceGroupName: string, name: string, vnetName: string, options?: WebAppsGetVnetConnectionOptionalParams): Promise<WebAppsGetVnetConnectionResponse>;
    /**
     * Description for Adds a Virtual Network connection to an app or slot (PUT) or updates the connection
     * properties (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of an existing Virtual Network.
     * @param connectionEnvelope Properties of the Virtual Network connection. See example.
     * @param options The options parameters.
     */
    createOrUpdateVnetConnection(resourceGroupName: string, name: string, vnetName: string, connectionEnvelope: VnetInfo, options?: WebAppsCreateOrUpdateVnetConnectionOptionalParams): Promise<WebAppsCreateOrUpdateVnetConnectionResponse>;
    /**
     * Description for Deletes a connection from an app (or deployment slot to a named virtual network.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the virtual network.
     * @param options The options parameters.
     */
    deleteVnetConnection(resourceGroupName: string, name: string, vnetName: string, options?: WebAppsDeleteVnetConnectionOptionalParams): Promise<void>;
    /**
     * Description for Adds a Virtual Network connection to an app or slot (PUT) or updates the connection
     * properties (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of an existing Virtual Network.
     * @param connectionEnvelope Properties of the Virtual Network connection. See example.
     * @param options The options parameters.
     */
    updateVnetConnection(resourceGroupName: string, name: string, vnetName: string, connectionEnvelope: VnetInfo, options?: WebAppsUpdateVnetConnectionOptionalParams): Promise<WebAppsUpdateVnetConnectionResponse>;
    /**
     * Description for Gets an app's Virtual Network gateway.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the Virtual Network.
     * @param gatewayName Name of the gateway. Currently, the only supported string is "primary".
     * @param options The options parameters.
     */
    getVnetConnectionGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, options?: WebAppsGetVnetConnectionGatewayOptionalParams): Promise<WebAppsGetVnetConnectionGatewayResponse>;
    /**
     * Description for Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the Virtual Network.
     * @param gatewayName Name of the gateway. Currently, the only supported string is "primary".
     * @param connectionEnvelope The properties to update this gateway with.
     * @param options The options parameters.
     */
    createOrUpdateVnetConnectionGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, connectionEnvelope: VnetGateway, options?: WebAppsCreateOrUpdateVnetConnectionGatewayOptionalParams): Promise<WebAppsCreateOrUpdateVnetConnectionGatewayResponse>;
    /**
     * Description for Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the app.
     * @param vnetName Name of the Virtual Network.
     * @param gatewayName Name of the gateway. Currently, the only supported string is "primary".
     * @param connectionEnvelope The properties to update this gateway with.
     * @param options The options parameters.
     */
    updateVnetConnectionGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, connectionEnvelope: VnetGateway, options?: WebAppsUpdateVnetConnectionGatewayOptionalParams): Promise<WebAppsUpdateVnetConnectionGatewayResponse>;
    /**
     * Description for Get webjob information for an app, or a deployment slot.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site name.
     * @param webJobName Name of the web job.
     * @param options The options parameters.
     */
    getWebJob(resourceGroupName: string, name: string, webJobName: string, options?: WebAppsGetWebJobOptionalParams): Promise<WebAppsGetWebJobResponse>;
}

/** Optional parameters. */
export declare interface WebAppsAddPremierAddOnOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the addPremierAddOn operation. */
export declare type WebAppsAddPremierAddOnResponse = PremierAddOn;

/** Optional parameters. */
export declare interface WebAppsAddPremierAddOnSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the addPremierAddOnSlot operation. */
export declare type WebAppsAddPremierAddOnSlotResponse = PremierAddOn;

/** Optional parameters. */
export declare interface WebAppsAnalyzeCustomHostnameOptionalParams extends coreClient.OperationOptions {
    /** Custom hostname. */
    hostName?: string;
}

/** Contains response data for the analyzeCustomHostname operation. */
export declare type WebAppsAnalyzeCustomHostnameResponse = CustomHostnameAnalysisResult;

/** Optional parameters. */
export declare interface WebAppsAnalyzeCustomHostnameSlotOptionalParams extends coreClient.OperationOptions {
    /** Custom hostname. */
    hostName?: string;
}

/** Contains response data for the analyzeCustomHostnameSlot operation. */
export declare type WebAppsAnalyzeCustomHostnameSlotResponse = CustomHostnameAnalysisResult;

/** Optional parameters. */
export declare interface WebAppsApplySlotConfigToProductionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsApplySlotConfigurationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsApproveOrRejectPrivateEndpointConnectionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the approveOrRejectPrivateEndpointConnection operation. */
export declare type WebAppsApproveOrRejectPrivateEndpointConnectionResponse = PrivateEndpointConnectionResource;

/** Optional parameters. */
export declare interface WebAppsBackupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the backup operation. */
export declare type WebAppsBackupResponse = BackupItem;

/** Optional parameters. */
export declare interface WebAppsBackupSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the backupSlot operation. */
export declare type WebAppsBackupSlotResponse = BackupItem;

/** Optional parameters. */
export declare interface WebAppsCopyProductionSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsCopySlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsCreateDeploymentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createDeployment operation. */
export declare type WebAppsCreateDeploymentResponse = Deployment;

/** Optional parameters. */
export declare interface WebAppsCreateDeploymentSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createDeploymentSlot operation. */
export declare type WebAppsCreateDeploymentSlotResponse = Deployment;

/** Optional parameters. */
export declare interface WebAppsCreateFunctionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createFunction operation. */
export declare type WebAppsCreateFunctionResponse = FunctionEnvelope;

/** Optional parameters. */
export declare interface WebAppsCreateInstanceFunctionSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createInstanceFunctionSlot operation. */
export declare type WebAppsCreateInstanceFunctionSlotResponse = FunctionEnvelope;

/** Optional parameters. */
export declare interface WebAppsCreateInstanceMSDeployOperationOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createInstanceMSDeployOperation operation. */
export declare type WebAppsCreateInstanceMSDeployOperationResponse = MSDeployStatus;

/** Optional parameters. */
export declare interface WebAppsCreateInstanceMSDeployOperationSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createInstanceMSDeployOperationSlot operation. */
export declare type WebAppsCreateInstanceMSDeployOperationSlotResponse = MSDeployStatus;

/** Optional parameters. */
export declare interface WebAppsCreateMSDeployOperationOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createMSDeployOperation operation. */
export declare type WebAppsCreateMSDeployOperationResponse = MSDeployStatus;

/** Optional parameters. */
export declare interface WebAppsCreateMSDeployOperationSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createMSDeployOperationSlot operation. */
export declare type WebAppsCreateMSDeployOperationSlotResponse = MSDeployStatus;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateConfigurationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateConfiguration operation. */
export declare type WebAppsCreateOrUpdateConfigurationResponse = SiteConfigResource;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateConfigurationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateConfigurationSlot operation. */
export declare type WebAppsCreateOrUpdateConfigurationSlotResponse = SiteConfigResource;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateDomainOwnershipIdentifierOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateDomainOwnershipIdentifier operation. */
export declare type WebAppsCreateOrUpdateDomainOwnershipIdentifierResponse = Identifier;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateDomainOwnershipIdentifierSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateDomainOwnershipIdentifierSlot operation. */
export declare type WebAppsCreateOrUpdateDomainOwnershipIdentifierSlotResponse = Identifier;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateFunctionSecretOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateFunctionSecret operation. */
export declare type WebAppsCreateOrUpdateFunctionSecretResponse = KeyInfo;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateFunctionSecretSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateFunctionSecretSlot operation. */
export declare type WebAppsCreateOrUpdateFunctionSecretSlotResponse = KeyInfo;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateHostNameBindingOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateHostNameBinding operation. */
export declare type WebAppsCreateOrUpdateHostNameBindingResponse = HostNameBinding;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateHostNameBindingSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateHostNameBindingSlot operation. */
export declare type WebAppsCreateOrUpdateHostNameBindingSlotResponse = HostNameBinding;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateHostSecretOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateHostSecret operation. */
export declare type WebAppsCreateOrUpdateHostSecretResponse = KeyInfo;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateHostSecretSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateHostSecretSlot operation. */
export declare type WebAppsCreateOrUpdateHostSecretSlotResponse = KeyInfo;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateHybridConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateHybridConnection operation. */
export declare type WebAppsCreateOrUpdateHybridConnectionResponse = HybridConnection;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateHybridConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateHybridConnectionSlot operation. */
export declare type WebAppsCreateOrUpdateHybridConnectionSlotResponse = HybridConnection;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdatePublicCertificateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdatePublicCertificate operation. */
export declare type WebAppsCreateOrUpdatePublicCertificateResponse = PublicCertificate;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdatePublicCertificateSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdatePublicCertificateSlot operation. */
export declare type WebAppsCreateOrUpdatePublicCertificateSlotResponse = PublicCertificate;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateRelayServiceConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateRelayServiceConnection operation. */
export declare type WebAppsCreateOrUpdateRelayServiceConnectionResponse = RelayServiceConnectionEntity;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateRelayServiceConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateRelayServiceConnectionSlot operation. */
export declare type WebAppsCreateOrUpdateRelayServiceConnectionSlotResponse = RelayServiceConnectionEntity;

/** Contains response data for the createOrUpdate operation. */
export declare type WebAppsCreateOrUpdateResponse = Site;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateSlot operation. */
export declare type WebAppsCreateOrUpdateSlotResponse = Site;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateSourceControlOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateSourceControl operation. */
export declare type WebAppsCreateOrUpdateSourceControlResponse = SiteSourceControl;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateSourceControlSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateSourceControlSlot operation. */
export declare type WebAppsCreateOrUpdateSourceControlSlotResponse = SiteSourceControl;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateSwiftVirtualNetworkConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateSwiftVirtualNetworkConnection operation. */
export declare type WebAppsCreateOrUpdateSwiftVirtualNetworkConnectionResponse = SwiftVirtualNetwork;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateSwiftVirtualNetworkConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateSwiftVirtualNetworkConnectionSlot operation. */
export declare type WebAppsCreateOrUpdateSwiftVirtualNetworkConnectionSlotResponse = SwiftVirtualNetwork;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateVnetConnectionGatewayOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateVnetConnectionGateway operation. */
export declare type WebAppsCreateOrUpdateVnetConnectionGatewayResponse = VnetGateway;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateVnetConnectionGatewaySlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateVnetConnectionGatewaySlot operation. */
export declare type WebAppsCreateOrUpdateVnetConnectionGatewaySlotResponse = VnetGateway;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateVnetConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateVnetConnection operation. */
export declare type WebAppsCreateOrUpdateVnetConnectionResponse = VnetInfo;

/** Optional parameters. */
export declare interface WebAppsCreateOrUpdateVnetConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateVnetConnectionSlot operation. */
export declare type WebAppsCreateOrUpdateVnetConnectionSlotResponse = VnetInfo;

/** Optional parameters. */
export declare interface WebAppsDeleteBackupConfigurationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteBackupConfigurationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteBackupOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteBackupSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteContinuousWebJobOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteContinuousWebJobSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteDeploymentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteDeploymentSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteDomainOwnershipIdentifierOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteDomainOwnershipIdentifierSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteFunctionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteFunctionSecretOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteFunctionSecretSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteHostNameBindingOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteHostNameBindingSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteHostSecretOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteHostSecretSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteHybridConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteHybridConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteInstanceFunctionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteInstanceProcessOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteInstanceProcessSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteOptionalParams extends coreClient.OperationOptions {
    /** If true, web app metrics are also deleted. */
    deleteMetrics?: boolean;
    /** Specify false if you want to keep empty App Service plan. By default, empty App Service plan is deleted. */
    deleteEmptyServerFarm?: boolean;
}

/** Optional parameters. */
export declare interface WebAppsDeletePremierAddOnOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeletePremierAddOnSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeletePrivateEndpointConnectionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the deletePrivateEndpointConnection operation. */
export declare type WebAppsDeletePrivateEndpointConnectionResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface WebAppsDeleteProcessOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteProcessSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeletePublicCertificateOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeletePublicCertificateSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteRelayServiceConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteRelayServiceConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteSiteExtensionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteSiteExtensionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteSlotOptionalParams extends coreClient.OperationOptions {
    /** If true, web app metrics are also deleted. */
    deleteMetrics?: boolean;
    /** Specify true if the App Service plan will be empty after app deletion and you want to delete the empty App Service plan. By default, the empty App Service plan is not deleted. */
    deleteEmptyServerFarm?: boolean;
}

/** Optional parameters. */
export declare interface WebAppsDeleteSourceControlOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteSourceControlSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteSwiftVirtualNetworkOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteSwiftVirtualNetworkSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteTriggeredWebJobOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteTriggeredWebJobSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteVnetConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDeleteVnetConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsDiscoverBackupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the discoverBackup operation. */
export declare type WebAppsDiscoverBackupResponse = RestoreRequest;

/** Optional parameters. */
export declare interface WebAppsDiscoverBackupSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the discoverBackupSlot operation. */
export declare type WebAppsDiscoverBackupSlotResponse = RestoreRequest;

/** Optional parameters. */
export declare interface WebAppsGenerateNewSitePublishingPasswordOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsGenerateNewSitePublishingPasswordSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsGetAppSettingKeyVaultReferenceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAppSettingKeyVaultReference operation. */
export declare type WebAppsGetAppSettingKeyVaultReferenceResponse = KeyVaultReferenceResource;

/** Optional parameters. */
export declare interface WebAppsGetAppSettingsKeyVaultReferencesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAppSettingsKeyVaultReferences operation. */
export declare type WebAppsGetAppSettingsKeyVaultReferencesResponse = KeyVaultReferenceCollection;

/** Optional parameters. */
export declare interface WebAppsGetAuthSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAuthSettings operation. */
export declare type WebAppsGetAuthSettingsResponse = SiteAuthSettings;

/** Optional parameters. */
export declare interface WebAppsGetAuthSettingsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAuthSettingsSlot operation. */
export declare type WebAppsGetAuthSettingsSlotResponse = SiteAuthSettings;

/** Optional parameters. */
export declare interface WebAppsGetBackupConfigurationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBackupConfiguration operation. */
export declare type WebAppsGetBackupConfigurationResponse = BackupRequest;

/** Optional parameters. */
export declare interface WebAppsGetBackupConfigurationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBackupConfigurationSlot operation. */
export declare type WebAppsGetBackupConfigurationSlotResponse = BackupRequest;

/** Optional parameters. */
export declare interface WebAppsGetBackupStatusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBackupStatus operation. */
export declare type WebAppsGetBackupStatusResponse = BackupItem;

/** Optional parameters. */
export declare interface WebAppsGetBackupStatusSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBackupStatusSlot operation. */
export declare type WebAppsGetBackupStatusSlotResponse = BackupItem;

/** Optional parameters. */
export declare interface WebAppsGetConfigurationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getConfiguration operation. */
export declare type WebAppsGetConfigurationResponse = SiteConfigResource;

/** Optional parameters. */
export declare interface WebAppsGetConfigurationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getConfigurationSlot operation. */
export declare type WebAppsGetConfigurationSlotResponse = SiteConfigResource;

/** Optional parameters. */
export declare interface WebAppsGetConfigurationSnapshotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getConfigurationSnapshot operation. */
export declare type WebAppsGetConfigurationSnapshotResponse = SiteConfigResource;

/** Optional parameters. */
export declare interface WebAppsGetConfigurationSnapshotSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getConfigurationSnapshotSlot operation. */
export declare type WebAppsGetConfigurationSnapshotSlotResponse = SiteConfigResource;

/** Optional parameters. */
export declare interface WebAppsGetContainerLogsZipOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getContainerLogsZip operation. */
export declare type WebAppsGetContainerLogsZipResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsGetContainerLogsZipSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getContainerLogsZipSlot operation. */
export declare type WebAppsGetContainerLogsZipSlotResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsGetContinuousWebJobOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getContinuousWebJob operation. */
export declare type WebAppsGetContinuousWebJobResponse = ContinuousWebJob;

/** Optional parameters. */
export declare interface WebAppsGetContinuousWebJobSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getContinuousWebJobSlot operation. */
export declare type WebAppsGetContinuousWebJobSlotResponse = ContinuousWebJob;

/** Optional parameters. */
export declare interface WebAppsGetDeploymentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDeployment operation. */
export declare type WebAppsGetDeploymentResponse = Deployment;

/** Optional parameters. */
export declare interface WebAppsGetDeploymentSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDeploymentSlot operation. */
export declare type WebAppsGetDeploymentSlotResponse = Deployment;

/** Optional parameters. */
export declare interface WebAppsGetDiagnosticLogsConfigurationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDiagnosticLogsConfiguration operation. */
export declare type WebAppsGetDiagnosticLogsConfigurationResponse = SiteLogsConfig;

/** Optional parameters. */
export declare interface WebAppsGetDiagnosticLogsConfigurationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDiagnosticLogsConfigurationSlot operation. */
export declare type WebAppsGetDiagnosticLogsConfigurationSlotResponse = SiteLogsConfig;

/** Optional parameters. */
export declare interface WebAppsGetDomainOwnershipIdentifierOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDomainOwnershipIdentifier operation. */
export declare type WebAppsGetDomainOwnershipIdentifierResponse = Identifier;

/** Optional parameters. */
export declare interface WebAppsGetDomainOwnershipIdentifierSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDomainOwnershipIdentifierSlot operation. */
export declare type WebAppsGetDomainOwnershipIdentifierSlotResponse = Identifier;

/** Optional parameters. */
export declare interface WebAppsGetFunctionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getFunction operation. */
export declare type WebAppsGetFunctionResponse = FunctionEnvelope;

/** Optional parameters. */
export declare interface WebAppsGetFunctionsAdminTokenOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getFunctionsAdminToken operation. */
export declare type WebAppsGetFunctionsAdminTokenResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface WebAppsGetFunctionsAdminTokenSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getFunctionsAdminTokenSlot operation. */
export declare type WebAppsGetFunctionsAdminTokenSlotResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface WebAppsGetHostNameBindingOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getHostNameBinding operation. */
export declare type WebAppsGetHostNameBindingResponse = HostNameBinding;

/** Optional parameters. */
export declare interface WebAppsGetHostNameBindingSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getHostNameBindingSlot operation. */
export declare type WebAppsGetHostNameBindingSlotResponse = HostNameBinding;

/** Optional parameters. */
export declare interface WebAppsGetHybridConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getHybridConnection operation. */
export declare type WebAppsGetHybridConnectionResponse = HybridConnection;

/** Optional parameters. */
export declare interface WebAppsGetHybridConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getHybridConnectionSlot operation. */
export declare type WebAppsGetHybridConnectionSlotResponse = HybridConnection;

/** Optional parameters. */
export declare interface WebAppsGetInstanceFunctionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceFunctionSlot operation. */
export declare type WebAppsGetInstanceFunctionSlotResponse = FunctionEnvelope;

/** Optional parameters. */
export declare interface WebAppsGetInstanceInfoOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceInfo operation. */
export declare type WebAppsGetInstanceInfoResponse = WebSiteInstanceStatus;

/** Optional parameters. */
export declare interface WebAppsGetInstanceInfoSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceInfoSlot operation. */
export declare type WebAppsGetInstanceInfoSlotResponse = WebSiteInstanceStatus;

/** Optional parameters. */
export declare interface WebAppsGetInstanceMSDeployLogOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceMSDeployLog operation. */
export declare type WebAppsGetInstanceMSDeployLogResponse = MSDeployLog;

/** Optional parameters. */
export declare interface WebAppsGetInstanceMSDeployLogSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceMSDeployLogSlot operation. */
export declare type WebAppsGetInstanceMSDeployLogSlotResponse = MSDeployLog;

/** Optional parameters. */
export declare interface WebAppsGetInstanceMsDeployStatusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceMsDeployStatus operation. */
export declare type WebAppsGetInstanceMsDeployStatusResponse = MSDeployStatus;

/** Optional parameters. */
export declare interface WebAppsGetInstanceMsDeployStatusSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceMsDeployStatusSlot operation. */
export declare type WebAppsGetInstanceMsDeployStatusSlotResponse = MSDeployStatus;

/** Optional parameters. */
export declare interface WebAppsGetInstanceProcessDumpOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceProcessDump operation. */
export declare type WebAppsGetInstanceProcessDumpResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsGetInstanceProcessDumpSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceProcessDumpSlot operation. */
export declare type WebAppsGetInstanceProcessDumpSlotResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsGetInstanceProcessModuleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceProcessModule operation. */
export declare type WebAppsGetInstanceProcessModuleResponse = ProcessModuleInfo;

/** Optional parameters. */
export declare interface WebAppsGetInstanceProcessModuleSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceProcessModuleSlot operation. */
export declare type WebAppsGetInstanceProcessModuleSlotResponse = ProcessModuleInfo;

/** Optional parameters. */
export declare interface WebAppsGetInstanceProcessOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceProcess operation. */
export declare type WebAppsGetInstanceProcessResponse = ProcessInfo;

/** Optional parameters. */
export declare interface WebAppsGetInstanceProcessSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceProcessSlot operation. */
export declare type WebAppsGetInstanceProcessSlotResponse = ProcessInfo;

/** Optional parameters. */
export declare interface WebAppsGetMigrateMySqlStatusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMigrateMySqlStatus operation. */
export declare type WebAppsGetMigrateMySqlStatusResponse = MigrateMySqlStatus;

/** Optional parameters. */
export declare interface WebAppsGetMigrateMySqlStatusSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMigrateMySqlStatusSlot operation. */
export declare type WebAppsGetMigrateMySqlStatusSlotResponse = MigrateMySqlStatus;

/** Optional parameters. */
export declare interface WebAppsGetMSDeployLogOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMSDeployLog operation. */
export declare type WebAppsGetMSDeployLogResponse = MSDeployLog;

/** Optional parameters. */
export declare interface WebAppsGetMSDeployLogSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMSDeployLogSlot operation. */
export declare type WebAppsGetMSDeployLogSlotResponse = MSDeployLog;

/** Optional parameters. */
export declare interface WebAppsGetMSDeployStatusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMSDeployStatus operation. */
export declare type WebAppsGetMSDeployStatusResponse = MSDeployStatus;

/** Optional parameters. */
export declare interface WebAppsGetMSDeployStatusSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMSDeployStatusSlot operation. */
export declare type WebAppsGetMSDeployStatusSlotResponse = MSDeployStatus;

/** Optional parameters. */
export declare interface WebAppsGetNetworkTraceOperationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getNetworkTraceOperation operation. */
export declare type WebAppsGetNetworkTraceOperationResponse = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsGetNetworkTraceOperationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getNetworkTraceOperationSlot operation. */
export declare type WebAppsGetNetworkTraceOperationSlotResponse = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsGetNetworkTraceOperationSlotV2OptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getNetworkTraceOperationSlotV2 operation. */
export declare type WebAppsGetNetworkTraceOperationSlotV2Response = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsGetNetworkTraceOperationV2OptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getNetworkTraceOperationV2 operation. */
export declare type WebAppsGetNetworkTraceOperationV2Response = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsGetNetworkTracesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getNetworkTraces operation. */
export declare type WebAppsGetNetworkTracesResponse = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsGetNetworkTracesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getNetworkTracesSlot operation. */
export declare type WebAppsGetNetworkTracesSlotResponse = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsGetNetworkTracesSlotV2OptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getNetworkTracesSlotV2 operation. */
export declare type WebAppsGetNetworkTracesSlotV2Response = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsGetNetworkTracesV2OptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getNetworkTracesV2 operation. */
export declare type WebAppsGetNetworkTracesV2Response = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsGetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsGetPremierAddOnOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPremierAddOn operation. */
export declare type WebAppsGetPremierAddOnResponse = PremierAddOn;

/** Optional parameters. */
export declare interface WebAppsGetPremierAddOnSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPremierAddOnSlot operation. */
export declare type WebAppsGetPremierAddOnSlotResponse = PremierAddOn;

/** Optional parameters. */
export declare interface WebAppsGetPrivateAccessOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPrivateAccess operation. */
export declare type WebAppsGetPrivateAccessResponse = PrivateAccess;

/** Optional parameters. */
export declare interface WebAppsGetPrivateAccessSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPrivateAccessSlot operation. */
export declare type WebAppsGetPrivateAccessSlotResponse = PrivateAccess;

/** Optional parameters. */
export declare interface WebAppsGetPrivateEndpointConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPrivateEndpointConnection operation. */
export declare type WebAppsGetPrivateEndpointConnectionResponse = PrivateEndpointConnectionResource;

/** Optional parameters. */
export declare interface WebAppsGetPrivateLinkResourcesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPrivateLinkResources operation. */
export declare type WebAppsGetPrivateLinkResourcesResponse = PrivateLinkResourcesWrapper;

/** Optional parameters. */
export declare interface WebAppsGetProcessDumpOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getProcessDump operation. */
export declare type WebAppsGetProcessDumpResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsGetProcessDumpSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getProcessDumpSlot operation. */
export declare type WebAppsGetProcessDumpSlotResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsGetProcessModuleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getProcessModule operation. */
export declare type WebAppsGetProcessModuleResponse = ProcessModuleInfo;

/** Optional parameters. */
export declare interface WebAppsGetProcessModuleSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getProcessModuleSlot operation. */
export declare type WebAppsGetProcessModuleSlotResponse = ProcessModuleInfo;

/** Optional parameters. */
export declare interface WebAppsGetProcessOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getProcess operation. */
export declare type WebAppsGetProcessResponse = ProcessInfo;

/** Optional parameters. */
export declare interface WebAppsGetProcessSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getProcessSlot operation. */
export declare type WebAppsGetProcessSlotResponse = ProcessInfo;

/** Optional parameters. */
export declare interface WebAppsGetPublicCertificateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPublicCertificate operation. */
export declare type WebAppsGetPublicCertificateResponse = PublicCertificate;

/** Optional parameters. */
export declare interface WebAppsGetPublicCertificateSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPublicCertificateSlot operation. */
export declare type WebAppsGetPublicCertificateSlotResponse = PublicCertificate;

/** Optional parameters. */
export declare interface WebAppsGetRelayServiceConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRelayServiceConnection operation. */
export declare type WebAppsGetRelayServiceConnectionResponse = RelayServiceConnectionEntity;

/** Optional parameters. */
export declare interface WebAppsGetRelayServiceConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRelayServiceConnectionSlot operation. */
export declare type WebAppsGetRelayServiceConnectionSlotResponse = RelayServiceConnectionEntity;

/** Contains response data for the get operation. */
export declare type WebAppsGetResponse = Site;

/** Optional parameters. */
export declare interface WebAppsGetSiteExtensionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSiteExtension operation. */
export declare type WebAppsGetSiteExtensionResponse = SiteExtensionInfo;

/** Optional parameters. */
export declare interface WebAppsGetSiteExtensionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSiteExtensionSlot operation. */
export declare type WebAppsGetSiteExtensionSlotResponse = SiteExtensionInfo;

/** Optional parameters. */
export declare interface WebAppsGetSitePhpErrorLogFlagOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSitePhpErrorLogFlag operation. */
export declare type WebAppsGetSitePhpErrorLogFlagResponse = SitePhpErrorLogFlag;

/** Optional parameters. */
export declare interface WebAppsGetSitePhpErrorLogFlagSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSitePhpErrorLogFlagSlot operation. */
export declare type WebAppsGetSitePhpErrorLogFlagSlotResponse = SitePhpErrorLogFlag;

/** Optional parameters. */
export declare interface WebAppsGetSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSlot operation. */
export declare type WebAppsGetSlotResponse = Site;

/** Optional parameters. */
export declare interface WebAppsGetSourceControlOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSourceControl operation. */
export declare type WebAppsGetSourceControlResponse = SiteSourceControl;

/** Optional parameters. */
export declare interface WebAppsGetSourceControlSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSourceControlSlot operation. */
export declare type WebAppsGetSourceControlSlotResponse = SiteSourceControl;

/** Optional parameters. */
export declare interface WebAppsGetSwiftVirtualNetworkConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSwiftVirtualNetworkConnection operation. */
export declare type WebAppsGetSwiftVirtualNetworkConnectionResponse = SwiftVirtualNetwork;

/** Optional parameters. */
export declare interface WebAppsGetSwiftVirtualNetworkConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSwiftVirtualNetworkConnectionSlot operation. */
export declare type WebAppsGetSwiftVirtualNetworkConnectionSlotResponse = SwiftVirtualNetwork;

/** Optional parameters. */
export declare interface WebAppsGetTriggeredWebJobHistoryOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTriggeredWebJobHistory operation. */
export declare type WebAppsGetTriggeredWebJobHistoryResponse = TriggeredJobHistory;

/** Optional parameters. */
export declare interface WebAppsGetTriggeredWebJobHistorySlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTriggeredWebJobHistorySlot operation. */
export declare type WebAppsGetTriggeredWebJobHistorySlotResponse = TriggeredJobHistory;

/** Optional parameters. */
export declare interface WebAppsGetTriggeredWebJobOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTriggeredWebJob operation. */
export declare type WebAppsGetTriggeredWebJobResponse = TriggeredWebJob;

/** Optional parameters. */
export declare interface WebAppsGetTriggeredWebJobSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTriggeredWebJobSlot operation. */
export declare type WebAppsGetTriggeredWebJobSlotResponse = TriggeredWebJob;

/** Optional parameters. */
export declare interface WebAppsGetVnetConnectionGatewayOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getVnetConnectionGateway operation. */
export declare type WebAppsGetVnetConnectionGatewayResponse = VnetGateway;

/** Optional parameters. */
export declare interface WebAppsGetVnetConnectionGatewaySlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getVnetConnectionGatewaySlot operation. */
export declare type WebAppsGetVnetConnectionGatewaySlotResponse = VnetGateway;

/** Optional parameters. */
export declare interface WebAppsGetVnetConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getVnetConnection operation. */
export declare type WebAppsGetVnetConnectionResponse = VnetInfo;

/** Optional parameters. */
export declare interface WebAppsGetVnetConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getVnetConnectionSlot operation. */
export declare type WebAppsGetVnetConnectionSlotResponse = VnetInfo;

/** Optional parameters. */
export declare interface WebAppsGetWebJobOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getWebJob operation. */
export declare type WebAppsGetWebJobResponse = WebJob;

/** Optional parameters. */
export declare interface WebAppsGetWebJobSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getWebJobSlot operation. */
export declare type WebAppsGetWebJobSlotResponse = WebJob;

/** Optional parameters. */
export declare interface WebAppsGetWebSiteContainerLogsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getWebSiteContainerLogs operation. */
export declare type WebAppsGetWebSiteContainerLogsResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsGetWebSiteContainerLogsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getWebSiteContainerLogsSlot operation. */
export declare type WebAppsGetWebSiteContainerLogsSlotResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsInstallSiteExtensionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the installSiteExtension operation. */
export declare type WebAppsInstallSiteExtensionResponse = SiteExtensionInfo;

/** Optional parameters. */
export declare interface WebAppsInstallSiteExtensionSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the installSiteExtensionSlot operation. */
export declare type WebAppsInstallSiteExtensionSlotResponse = SiteExtensionInfo;

/** Optional parameters. */
export declare interface WebAppsIsCloneableOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the isCloneable operation. */
export declare type WebAppsIsCloneableResponse = SiteCloneability;

/** Optional parameters. */
export declare interface WebAppsIsCloneableSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the isCloneableSlot operation. */
export declare type WebAppsIsCloneableSlotResponse = SiteCloneability;

/** Optional parameters. */
export declare interface WebAppsListApplicationSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listApplicationSettings operation. */
export declare type WebAppsListApplicationSettingsResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsListApplicationSettingsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listApplicationSettingsSlot operation. */
export declare type WebAppsListApplicationSettingsSlotResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsListAzureStorageAccountsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAzureStorageAccounts operation. */
export declare type WebAppsListAzureStorageAccountsResponse = AzureStoragePropertyDictionaryResource;

/** Optional parameters. */
export declare interface WebAppsListAzureStorageAccountsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAzureStorageAccountsSlot operation. */
export declare type WebAppsListAzureStorageAccountsSlotResponse = AzureStoragePropertyDictionaryResource;

/** Optional parameters. */
export declare interface WebAppsListBackupsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBackupsNext operation. */
export declare type WebAppsListBackupsNextResponse = BackupItemCollection;

/** Optional parameters. */
export declare interface WebAppsListBackupsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBackups operation. */
export declare type WebAppsListBackupsResponse = BackupItemCollection;

/** Optional parameters. */
export declare interface WebAppsListBackupsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBackupsSlotNext operation. */
export declare type WebAppsListBackupsSlotNextResponse = BackupItemCollection;

/** Optional parameters. */
export declare interface WebAppsListBackupsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBackupsSlot operation. */
export declare type WebAppsListBackupsSlotResponse = BackupItemCollection;

/** Optional parameters. */
export declare interface WebAppsListBackupStatusSecretsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBackupStatusSecrets operation. */
export declare type WebAppsListBackupStatusSecretsResponse = BackupItem;

/** Optional parameters. */
export declare interface WebAppsListBackupStatusSecretsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBackupStatusSecretsSlot operation. */
export declare type WebAppsListBackupStatusSecretsSlotResponse = BackupItem;

/** Optional parameters. */
export declare interface WebAppsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
    /** Specify <strong>true</strong> to include deployment slots in results. The default is false, which only gives you the production slot of all apps. */
    includeSlots?: boolean;
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type WebAppsListByResourceGroupNextResponse = WebAppCollection;

/** Optional parameters. */
export declare interface WebAppsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
    /** Specify <strong>true</strong> to include deployment slots in results. The default is false, which only gives you the production slot of all apps. */
    includeSlots?: boolean;
}

/** Contains response data for the listByResourceGroup operation. */
export declare type WebAppsListByResourceGroupResponse = WebAppCollection;

/** Optional parameters. */
export declare interface WebAppsListConfigurationSnapshotInfoNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConfigurationSnapshotInfoNext operation. */
export declare type WebAppsListConfigurationSnapshotInfoNextResponse = SiteConfigurationSnapshotInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListConfigurationSnapshotInfoOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConfigurationSnapshotInfo operation. */
export declare type WebAppsListConfigurationSnapshotInfoResponse = SiteConfigurationSnapshotInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListConfigurationSnapshotInfoSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConfigurationSnapshotInfoSlotNext operation. */
export declare type WebAppsListConfigurationSnapshotInfoSlotNextResponse = SiteConfigurationSnapshotInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListConfigurationSnapshotInfoSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConfigurationSnapshotInfoSlot operation. */
export declare type WebAppsListConfigurationSnapshotInfoSlotResponse = SiteConfigurationSnapshotInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListConfigurationsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConfigurationsNext operation. */
export declare type WebAppsListConfigurationsNextResponse = SiteConfigResourceCollection;

/** Optional parameters. */
export declare interface WebAppsListConfigurationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConfigurations operation. */
export declare type WebAppsListConfigurationsResponse = SiteConfigResourceCollection;

/** Optional parameters. */
export declare interface WebAppsListConfigurationsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConfigurationsSlotNext operation. */
export declare type WebAppsListConfigurationsSlotNextResponse = SiteConfigResourceCollection;

/** Optional parameters. */
export declare interface WebAppsListConfigurationsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConfigurationsSlot operation. */
export declare type WebAppsListConfigurationsSlotResponse = SiteConfigResourceCollection;

/** Optional parameters. */
export declare interface WebAppsListConnectionStringsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConnectionStrings operation. */
export declare type WebAppsListConnectionStringsResponse = ConnectionStringDictionary;

/** Optional parameters. */
export declare interface WebAppsListConnectionStringsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConnectionStringsSlot operation. */
export declare type WebAppsListConnectionStringsSlotResponse = ConnectionStringDictionary;

/** Optional parameters. */
export declare interface WebAppsListContinuousWebJobsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listContinuousWebJobsNext operation. */
export declare type WebAppsListContinuousWebJobsNextResponse = ContinuousWebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListContinuousWebJobsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listContinuousWebJobs operation. */
export declare type WebAppsListContinuousWebJobsResponse = ContinuousWebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListContinuousWebJobsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listContinuousWebJobsSlotNext operation. */
export declare type WebAppsListContinuousWebJobsSlotNextResponse = ContinuousWebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListContinuousWebJobsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listContinuousWebJobsSlot operation. */
export declare type WebAppsListContinuousWebJobsSlotResponse = ContinuousWebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListDeploymentLogOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeploymentLog operation. */
export declare type WebAppsListDeploymentLogResponse = Deployment;

/** Optional parameters. */
export declare interface WebAppsListDeploymentLogSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeploymentLogSlot operation. */
export declare type WebAppsListDeploymentLogSlotResponse = Deployment;

/** Optional parameters. */
export declare interface WebAppsListDeploymentsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeploymentsNext operation. */
export declare type WebAppsListDeploymentsNextResponse = DeploymentCollection;

/** Optional parameters. */
export declare interface WebAppsListDeploymentsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeployments operation. */
export declare type WebAppsListDeploymentsResponse = DeploymentCollection;

/** Optional parameters. */
export declare interface WebAppsListDeploymentsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeploymentsSlotNext operation. */
export declare type WebAppsListDeploymentsSlotNextResponse = DeploymentCollection;

/** Optional parameters. */
export declare interface WebAppsListDeploymentsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeploymentsSlot operation. */
export declare type WebAppsListDeploymentsSlotResponse = DeploymentCollection;

/** Optional parameters. */
export declare interface WebAppsListDomainOwnershipIdentifiersNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDomainOwnershipIdentifiersNext operation. */
export declare type WebAppsListDomainOwnershipIdentifiersNextResponse = IdentifierCollection;

/** Optional parameters. */
export declare interface WebAppsListDomainOwnershipIdentifiersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDomainOwnershipIdentifiers operation. */
export declare type WebAppsListDomainOwnershipIdentifiersResponse = IdentifierCollection;

/** Optional parameters. */
export declare interface WebAppsListDomainOwnershipIdentifiersSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDomainOwnershipIdentifiersSlotNext operation. */
export declare type WebAppsListDomainOwnershipIdentifiersSlotNextResponse = IdentifierCollection;

/** Optional parameters. */
export declare interface WebAppsListDomainOwnershipIdentifiersSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDomainOwnershipIdentifiersSlot operation. */
export declare type WebAppsListDomainOwnershipIdentifiersSlotResponse = IdentifierCollection;

/** Optional parameters. */
export declare interface WebAppsListFunctionKeysOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listFunctionKeys operation. */
export declare type WebAppsListFunctionKeysResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsListFunctionKeysSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listFunctionKeysSlot operation. */
export declare type WebAppsListFunctionKeysSlotResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsListFunctionSecretsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listFunctionSecrets operation. */
export declare type WebAppsListFunctionSecretsResponse = FunctionSecrets;

/** Optional parameters. */
export declare interface WebAppsListFunctionSecretsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listFunctionSecretsSlot operation. */
export declare type WebAppsListFunctionSecretsSlotResponse = FunctionSecrets;

/** Optional parameters. */
export declare interface WebAppsListFunctionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listFunctionsNext operation. */
export declare type WebAppsListFunctionsNextResponse = FunctionEnvelopeCollection;

/** Optional parameters. */
export declare interface WebAppsListFunctionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listFunctions operation. */
export declare type WebAppsListFunctionsResponse = FunctionEnvelopeCollection;

/** Optional parameters. */
export declare interface WebAppsListHostKeysOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHostKeys operation. */
export declare type WebAppsListHostKeysResponse = HostKeys;

/** Optional parameters. */
export declare interface WebAppsListHostKeysSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHostKeysSlot operation. */
export declare type WebAppsListHostKeysSlotResponse = HostKeys;

/** Optional parameters. */
export declare interface WebAppsListHostNameBindingsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHostNameBindingsNext operation. */
export declare type WebAppsListHostNameBindingsNextResponse = HostNameBindingCollection;

/** Optional parameters. */
export declare interface WebAppsListHostNameBindingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHostNameBindings operation. */
export declare type WebAppsListHostNameBindingsResponse = HostNameBindingCollection;

/** Optional parameters. */
export declare interface WebAppsListHostNameBindingsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHostNameBindingsSlotNext operation. */
export declare type WebAppsListHostNameBindingsSlotNextResponse = HostNameBindingCollection;

/** Optional parameters. */
export declare interface WebAppsListHostNameBindingsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHostNameBindingsSlot operation. */
export declare type WebAppsListHostNameBindingsSlotResponse = HostNameBindingCollection;

/** Optional parameters. */
export declare interface WebAppsListHybridConnectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHybridConnections operation. */
export declare type WebAppsListHybridConnectionsResponse = HybridConnection;

/** Optional parameters. */
export declare interface WebAppsListHybridConnectionsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHybridConnectionsSlot operation. */
export declare type WebAppsListHybridConnectionsSlotResponse = HybridConnection;

/** Optional parameters. */
export declare interface WebAppsListInstanceFunctionsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceFunctionsSlotNext operation. */
export declare type WebAppsListInstanceFunctionsSlotNextResponse = FunctionEnvelopeCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceFunctionsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceFunctionsSlot operation. */
export declare type WebAppsListInstanceFunctionsSlotResponse = FunctionEnvelopeCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceIdentifiersNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceIdentifiersNext operation. */
export declare type WebAppsListInstanceIdentifiersNextResponse = WebAppInstanceCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceIdentifiersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceIdentifiers operation. */
export declare type WebAppsListInstanceIdentifiersResponse = WebAppInstanceCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceIdentifiersSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceIdentifiersSlotNext operation. */
export declare type WebAppsListInstanceIdentifiersSlotNextResponse = WebAppInstanceCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceIdentifiersSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceIdentifiersSlot operation. */
export declare type WebAppsListInstanceIdentifiersSlotResponse = WebAppInstanceCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessesNext operation. */
export declare type WebAppsListInstanceProcessesNextResponse = ProcessInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcesses operation. */
export declare type WebAppsListInstanceProcessesResponse = ProcessInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessesSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessesSlotNext operation. */
export declare type WebAppsListInstanceProcessesSlotNextResponse = ProcessInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessesSlot operation. */
export declare type WebAppsListInstanceProcessesSlotResponse = ProcessInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessModulesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessModulesNext operation. */
export declare type WebAppsListInstanceProcessModulesNextResponse = ProcessModuleInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessModulesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessModules operation. */
export declare type WebAppsListInstanceProcessModulesResponse = ProcessModuleInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessModulesSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessModulesSlotNext operation. */
export declare type WebAppsListInstanceProcessModulesSlotNextResponse = ProcessModuleInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessModulesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessModulesSlot operation. */
export declare type WebAppsListInstanceProcessModulesSlotResponse = ProcessModuleInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessThreadsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessThreadsNext operation. */
export declare type WebAppsListInstanceProcessThreadsNextResponse = ProcessThreadInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessThreadsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessThreads operation. */
export declare type WebAppsListInstanceProcessThreadsResponse = ProcessThreadInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessThreadsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessThreadsSlotNext operation. */
export declare type WebAppsListInstanceProcessThreadsSlotNextResponse = ProcessThreadInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListInstanceProcessThreadsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInstanceProcessThreadsSlot operation. */
export declare type WebAppsListInstanceProcessThreadsSlotResponse = ProcessThreadInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListMetadataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetadata operation. */
export declare type WebAppsListMetadataResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsListMetadataSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetadataSlot operation. */
export declare type WebAppsListMetadataSlotResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsListNetworkFeaturesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNetworkFeatures operation. */
export declare type WebAppsListNetworkFeaturesResponse = NetworkFeatures;

/** Optional parameters. */
export declare interface WebAppsListNetworkFeaturesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNetworkFeaturesSlot operation. */
export declare type WebAppsListNetworkFeaturesSlotResponse = NetworkFeatures;

/** Optional parameters. */
export declare interface WebAppsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type WebAppsListNextResponse = WebAppCollection;

/** Optional parameters. */
export declare interface WebAppsListOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsListPerfMonCountersNextOptionalParams extends coreClient.OperationOptions {
    /** Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listPerfMonCountersNext operation. */
export declare type WebAppsListPerfMonCountersNextResponse = PerfMonCounterCollection;

/** Optional parameters. */
export declare interface WebAppsListPerfMonCountersOptionalParams extends coreClient.OperationOptions {
    /** Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listPerfMonCounters operation. */
export declare type WebAppsListPerfMonCountersResponse = PerfMonCounterCollection;

/** Optional parameters. */
export declare interface WebAppsListPerfMonCountersSlotNextOptionalParams extends coreClient.OperationOptions {
    /** Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listPerfMonCountersSlotNext operation. */
export declare type WebAppsListPerfMonCountersSlotNextResponse = PerfMonCounterCollection;

/** Optional parameters. */
export declare interface WebAppsListPerfMonCountersSlotOptionalParams extends coreClient.OperationOptions {
    /** Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listPerfMonCountersSlot operation. */
export declare type WebAppsListPerfMonCountersSlotResponse = PerfMonCounterCollection;

/** Optional parameters. */
export declare interface WebAppsListPremierAddOnsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPremierAddOns operation. */
export declare type WebAppsListPremierAddOnsResponse = PremierAddOn;

/** Optional parameters. */
export declare interface WebAppsListPremierAddOnsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPremierAddOnsSlot operation. */
export declare type WebAppsListPremierAddOnsSlotResponse = PremierAddOn;

/** Optional parameters. */
export declare interface WebAppsListProcessesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessesNext operation. */
export declare type WebAppsListProcessesNextResponse = ProcessInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcesses operation. */
export declare type WebAppsListProcessesResponse = ProcessInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessesSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessesSlotNext operation. */
export declare type WebAppsListProcessesSlotNextResponse = ProcessInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessesSlot operation. */
export declare type WebAppsListProcessesSlotResponse = ProcessInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessModulesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessModulesNext operation. */
export declare type WebAppsListProcessModulesNextResponse = ProcessModuleInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessModulesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessModules operation. */
export declare type WebAppsListProcessModulesResponse = ProcessModuleInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessModulesSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessModulesSlotNext operation. */
export declare type WebAppsListProcessModulesSlotNextResponse = ProcessModuleInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessModulesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessModulesSlot operation. */
export declare type WebAppsListProcessModulesSlotResponse = ProcessModuleInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessThreadsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessThreadsNext operation. */
export declare type WebAppsListProcessThreadsNextResponse = ProcessThreadInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessThreadsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessThreads operation. */
export declare type WebAppsListProcessThreadsResponse = ProcessThreadInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessThreadsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessThreadsSlotNext operation. */
export declare type WebAppsListProcessThreadsSlotNextResponse = ProcessThreadInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListProcessThreadsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listProcessThreadsSlot operation. */
export declare type WebAppsListProcessThreadsSlotResponse = ProcessThreadInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListPublicCertificatesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPublicCertificatesNext operation. */
export declare type WebAppsListPublicCertificatesNextResponse = PublicCertificateCollection;

/** Optional parameters. */
export declare interface WebAppsListPublicCertificatesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPublicCertificates operation. */
export declare type WebAppsListPublicCertificatesResponse = PublicCertificateCollection;

/** Optional parameters. */
export declare interface WebAppsListPublicCertificatesSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPublicCertificatesSlotNext operation. */
export declare type WebAppsListPublicCertificatesSlotNextResponse = PublicCertificateCollection;

/** Optional parameters. */
export declare interface WebAppsListPublicCertificatesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPublicCertificatesSlot operation. */
export declare type WebAppsListPublicCertificatesSlotResponse = PublicCertificateCollection;

/** Optional parameters. */
export declare interface WebAppsListPublishingCredentialsOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listPublishingCredentials operation. */
export declare type WebAppsListPublishingCredentialsResponse = User;

/** Optional parameters. */
export declare interface WebAppsListPublishingCredentialsSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listPublishingCredentialsSlot operation. */
export declare type WebAppsListPublishingCredentialsSlotResponse = User;

/** Optional parameters. */
export declare interface WebAppsListPublishingProfileXmlWithSecretsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPublishingProfileXmlWithSecrets operation. */
export declare type WebAppsListPublishingProfileXmlWithSecretsResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsListPublishingProfileXmlWithSecretsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPublishingProfileXmlWithSecretsSlot operation. */
export declare type WebAppsListPublishingProfileXmlWithSecretsSlotResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface WebAppsListRelayServiceConnectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listRelayServiceConnections operation. */
export declare type WebAppsListRelayServiceConnectionsResponse = RelayServiceConnectionEntity;

/** Optional parameters. */
export declare interface WebAppsListRelayServiceConnectionsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listRelayServiceConnectionsSlot operation. */
export declare type WebAppsListRelayServiceConnectionsSlotResponse = RelayServiceConnectionEntity;

/** Contains response data for the list operation. */
export declare type WebAppsListResponse = WebAppCollection;

/** Optional parameters. */
export declare interface WebAppsListSiteBackupsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteBackupsNext operation. */
export declare type WebAppsListSiteBackupsNextResponse = BackupItemCollection;

/** Optional parameters. */
export declare interface WebAppsListSiteBackupsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteBackups operation. */
export declare type WebAppsListSiteBackupsResponse = BackupItemCollection;

/** Optional parameters. */
export declare interface WebAppsListSiteBackupsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteBackupsSlotNext operation. */
export declare type WebAppsListSiteBackupsSlotNextResponse = BackupItemCollection;

/** Optional parameters. */
export declare interface WebAppsListSiteBackupsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteBackupsSlot operation. */
export declare type WebAppsListSiteBackupsSlotResponse = BackupItemCollection;

/** Optional parameters. */
export declare interface WebAppsListSiteExtensionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteExtensionsNext operation. */
export declare type WebAppsListSiteExtensionsNextResponse = SiteExtensionInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListSiteExtensionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteExtensions operation. */
export declare type WebAppsListSiteExtensionsResponse = SiteExtensionInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListSiteExtensionsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteExtensionsSlotNext operation. */
export declare type WebAppsListSiteExtensionsSlotNextResponse = SiteExtensionInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListSiteExtensionsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteExtensionsSlot operation. */
export declare type WebAppsListSiteExtensionsSlotResponse = SiteExtensionInfoCollection;

/** Optional parameters. */
export declare interface WebAppsListSitePushSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSitePushSettings operation. */
export declare type WebAppsListSitePushSettingsResponse = PushSettings;

/** Optional parameters. */
export declare interface WebAppsListSitePushSettingsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSitePushSettingsSlot operation. */
export declare type WebAppsListSitePushSettingsSlotResponse = PushSettings;

/** Optional parameters. */
export declare interface WebAppsListSlotConfigurationNamesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSlotConfigurationNames operation. */
export declare type WebAppsListSlotConfigurationNamesResponse = SlotConfigNamesResource;

/** Optional parameters. */
export declare interface WebAppsListSlotDifferencesFromProductionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSlotDifferencesFromProductionNext operation. */
export declare type WebAppsListSlotDifferencesFromProductionNextResponse = SlotDifferenceCollection;

/** Optional parameters. */
export declare interface WebAppsListSlotDifferencesFromProductionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSlotDifferencesFromProduction operation. */
export declare type WebAppsListSlotDifferencesFromProductionResponse = SlotDifferenceCollection;

/** Optional parameters. */
export declare interface WebAppsListSlotDifferencesSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSlotDifferencesSlotNext operation. */
export declare type WebAppsListSlotDifferencesSlotNextResponse = SlotDifferenceCollection;

/** Optional parameters. */
export declare interface WebAppsListSlotDifferencesSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSlotDifferencesSlot operation. */
export declare type WebAppsListSlotDifferencesSlotResponse = SlotDifferenceCollection;

/** Optional parameters. */
export declare interface WebAppsListSlotsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSlotsNext operation. */
export declare type WebAppsListSlotsNextResponse = WebAppCollection;

/** Optional parameters. */
export declare interface WebAppsListSlotsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSlots operation. */
export declare type WebAppsListSlotsResponse = WebAppCollection;

/** Optional parameters. */
export declare interface WebAppsListSnapshotsFromDRSecondaryNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSnapshotsFromDRSecondaryNext operation. */
export declare type WebAppsListSnapshotsFromDRSecondaryNextResponse = SnapshotCollection;

/** Optional parameters. */
export declare interface WebAppsListSnapshotsFromDRSecondaryOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSnapshotsFromDRSecondary operation. */
export declare type WebAppsListSnapshotsFromDRSecondaryResponse = SnapshotCollection;

/** Optional parameters. */
export declare interface WebAppsListSnapshotsFromDRSecondarySlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSnapshotsFromDRSecondarySlotNext operation. */
export declare type WebAppsListSnapshotsFromDRSecondarySlotNextResponse = SnapshotCollection;

/** Optional parameters. */
export declare interface WebAppsListSnapshotsFromDRSecondarySlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSnapshotsFromDRSecondarySlot operation. */
export declare type WebAppsListSnapshotsFromDRSecondarySlotResponse = SnapshotCollection;

/** Optional parameters. */
export declare interface WebAppsListSnapshotsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSnapshotsNext operation. */
export declare type WebAppsListSnapshotsNextResponse = SnapshotCollection;

/** Optional parameters. */
export declare interface WebAppsListSnapshotsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSnapshots operation. */
export declare type WebAppsListSnapshotsResponse = SnapshotCollection;

/** Optional parameters. */
export declare interface WebAppsListSnapshotsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSnapshotsSlotNext operation. */
export declare type WebAppsListSnapshotsSlotNextResponse = SnapshotCollection;

/** Optional parameters. */
export declare interface WebAppsListSnapshotsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSnapshotsSlot operation. */
export declare type WebAppsListSnapshotsSlotResponse = SnapshotCollection;

/** Optional parameters. */
export declare interface WebAppsListSyncFunctionTriggersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSyncFunctionTriggers operation. */
export declare type WebAppsListSyncFunctionTriggersResponse = FunctionSecrets;

/** Optional parameters. */
export declare interface WebAppsListSyncFunctionTriggersSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSyncFunctionTriggersSlot operation. */
export declare type WebAppsListSyncFunctionTriggersSlotResponse = FunctionSecrets;

/** Optional parameters. */
export declare interface WebAppsListSyncStatusOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsListSyncStatusSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsListTriggeredWebJobHistoryNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTriggeredWebJobHistoryNext operation. */
export declare type WebAppsListTriggeredWebJobHistoryNextResponse = TriggeredJobHistoryCollection;

/** Optional parameters. */
export declare interface WebAppsListTriggeredWebJobHistoryOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTriggeredWebJobHistory operation. */
export declare type WebAppsListTriggeredWebJobHistoryResponse = TriggeredJobHistoryCollection;

/** Optional parameters. */
export declare interface WebAppsListTriggeredWebJobHistorySlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTriggeredWebJobHistorySlotNext operation. */
export declare type WebAppsListTriggeredWebJobHistorySlotNextResponse = TriggeredJobHistoryCollection;

/** Optional parameters. */
export declare interface WebAppsListTriggeredWebJobHistorySlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTriggeredWebJobHistorySlot operation. */
export declare type WebAppsListTriggeredWebJobHistorySlotResponse = TriggeredJobHistoryCollection;

/** Optional parameters. */
export declare interface WebAppsListTriggeredWebJobsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTriggeredWebJobsNext operation. */
export declare type WebAppsListTriggeredWebJobsNextResponse = TriggeredWebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListTriggeredWebJobsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTriggeredWebJobs operation. */
export declare type WebAppsListTriggeredWebJobsResponse = TriggeredWebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListTriggeredWebJobsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTriggeredWebJobsSlotNext operation. */
export declare type WebAppsListTriggeredWebJobsSlotNextResponse = TriggeredWebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListTriggeredWebJobsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTriggeredWebJobsSlot operation. */
export declare type WebAppsListTriggeredWebJobsSlotResponse = TriggeredWebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListUsagesNextOptionalParams extends coreClient.OperationOptions {
    /** Return only information specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listUsagesNext operation. */
export declare type WebAppsListUsagesNextResponse = CsmUsageQuotaCollection;

/** Optional parameters. */
export declare interface WebAppsListUsagesOptionalParams extends coreClient.OperationOptions {
    /** Return only information specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listUsages operation. */
export declare type WebAppsListUsagesResponse = CsmUsageQuotaCollection;

/** Optional parameters. */
export declare interface WebAppsListUsagesSlotNextOptionalParams extends coreClient.OperationOptions {
    /** Return only information specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listUsagesSlotNext operation. */
export declare type WebAppsListUsagesSlotNextResponse = CsmUsageQuotaCollection;

/** Optional parameters. */
export declare interface WebAppsListUsagesSlotOptionalParams extends coreClient.OperationOptions {
    /** Return only information specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. */
    filter?: string;
}

/** Contains response data for the listUsagesSlot operation. */
export declare type WebAppsListUsagesSlotResponse = CsmUsageQuotaCollection;

/** Optional parameters. */
export declare interface WebAppsListVnetConnectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVnetConnections operation. */
export declare type WebAppsListVnetConnectionsResponse = VnetInfo[];

/** Optional parameters. */
export declare interface WebAppsListVnetConnectionsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVnetConnectionsSlot operation. */
export declare type WebAppsListVnetConnectionsSlotResponse = VnetInfo[];

/** Optional parameters. */
export declare interface WebAppsListWebJobsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebJobsNext operation. */
export declare type WebAppsListWebJobsNextResponse = WebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListWebJobsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebJobs operation. */
export declare type WebAppsListWebJobsResponse = WebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListWebJobsSlotNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebJobsSlotNext operation. */
export declare type WebAppsListWebJobsSlotNextResponse = WebJobCollection;

/** Optional parameters. */
export declare interface WebAppsListWebJobsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listWebJobsSlot operation. */
export declare type WebAppsListWebJobsSlotResponse = WebJobCollection;

/** Optional parameters. */
export declare interface WebAppsMigrateMySqlOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the migrateMySql operation. */
export declare type WebAppsMigrateMySqlResponse = Operation;

/** Optional parameters. */
export declare interface WebAppsMigrateStorageOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the migrateStorage operation. */
export declare type WebAppsMigrateStorageResponse = StorageMigrationResponse;

/** Optional parameters. */
export declare interface WebAppsPutPrivateAccessVnetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the putPrivateAccessVnet operation. */
export declare type WebAppsPutPrivateAccessVnetResponse = PrivateAccess;

/** Optional parameters. */
export declare interface WebAppsPutPrivateAccessVnetSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the putPrivateAccessVnetSlot operation. */
export declare type WebAppsPutPrivateAccessVnetSlotResponse = PrivateAccess;

/** Optional parameters. */
export declare interface WebAppsRecoverSiteConfigurationSnapshotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsRecoverSiteConfigurationSnapshotSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsResetProductionSlotConfigOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsResetSlotConfigurationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsRestartOptionalParams extends coreClient.OperationOptions {
    /** Specify true to apply the configuration settings and restarts the app only if necessary. By default, the API always restarts and reprovisions the app. */
    softRestart?: boolean;
    /** Specify true to block until the app is restarted. By default, it is set to false, and the API responds immediately (asynchronous). */
    synchronous?: boolean;
}

/** Optional parameters. */
export declare interface WebAppsRestartSlotOptionalParams extends coreClient.OperationOptions {
    /** Specify true to apply the configuration settings and restarts the app only if necessary. By default, the API always restarts and reprovisions the app. */
    softRestart?: boolean;
    /** Specify true to block until the app is restarted. By default, it is set to false, and the API responds immediately (asynchronous). */
    synchronous?: boolean;
}

/** Optional parameters. */
export declare interface WebAppsRestoreFromBackupBlobOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsRestoreFromBackupBlobSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsRestoreFromDeletedAppOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsRestoreFromDeletedAppSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsRestoreOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsRestoreSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsRestoreSnapshotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsRestoreSnapshotSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsRunTriggeredWebJobOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsRunTriggeredWebJobSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStartContinuousWebJobOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStartContinuousWebJobSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStartNetworkTraceOptionalParams extends coreClient.OperationOptions {
    /** The duration to keep capturing in seconds. */
    durationInSeconds?: number;
    /** The maximum frame length in bytes (Optional). */
    maxFrameLength?: number;
    /** The Blob URL to store capture file. */
    sasUrl?: string;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the startNetworkTrace operation. */
export declare type WebAppsStartNetworkTraceResponse = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsStartNetworkTraceSlotOptionalParams extends coreClient.OperationOptions {
    /** The duration to keep capturing in seconds. */
    durationInSeconds?: number;
    /** The maximum frame length in bytes (Optional). */
    maxFrameLength?: number;
    /** The Blob URL to store capture file. */
    sasUrl?: string;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the startNetworkTraceSlot operation. */
export declare type WebAppsStartNetworkTraceSlotResponse = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsStartOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStartSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStartWebSiteNetworkTraceOperationOptionalParams extends coreClient.OperationOptions {
    /** The duration to keep capturing in seconds. */
    durationInSeconds?: number;
    /** The maximum frame length in bytes (Optional). */
    maxFrameLength?: number;
    /** The Blob URL to store capture file. */
    sasUrl?: string;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the startWebSiteNetworkTraceOperation operation. */
export declare type WebAppsStartWebSiteNetworkTraceOperationResponse = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsStartWebSiteNetworkTraceOperationSlotOptionalParams extends coreClient.OperationOptions {
    /** The duration to keep capturing in seconds. */
    durationInSeconds?: number;
    /** The maximum frame length in bytes (Optional). */
    maxFrameLength?: number;
    /** The Blob URL to store capture file. */
    sasUrl?: string;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the startWebSiteNetworkTraceOperationSlot operation. */
export declare type WebAppsStartWebSiteNetworkTraceOperationSlotResponse = NetworkTrace[];

/** Optional parameters. */
export declare interface WebAppsStartWebSiteNetworkTraceOptionalParams extends coreClient.OperationOptions {
    /** The duration to keep capturing in seconds. */
    durationInSeconds?: number;
    /** The maximum frame length in bytes (Optional). */
    maxFrameLength?: number;
    /** The Blob URL to store capture file. */
    sasUrl?: string;
}

/** Contains response data for the startWebSiteNetworkTrace operation. */
export declare type WebAppsStartWebSiteNetworkTraceResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface WebAppsStartWebSiteNetworkTraceSlotOptionalParams extends coreClient.OperationOptions {
    /** The duration to keep capturing in seconds. */
    durationInSeconds?: number;
    /** The maximum frame length in bytes (Optional). */
    maxFrameLength?: number;
    /** The Blob URL to store capture file. */
    sasUrl?: string;
}

/** Contains response data for the startWebSiteNetworkTraceSlot operation. */
export declare type WebAppsStartWebSiteNetworkTraceSlotResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface WebAppsStopContinuousWebJobOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStopContinuousWebJobSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStopNetworkTraceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStopNetworkTraceSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStopOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStopSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStopWebSiteNetworkTraceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsStopWebSiteNetworkTraceSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsSwapSlotOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsSwapSlotWithProductionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebAppsSyncFunctionsOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsSyncFunctionsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsSyncFunctionTriggersOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsSyncFunctionTriggersSlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsSyncRepositoryOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsSyncRepositorySlotOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsUpdateApplicationSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateApplicationSettings operation. */
export declare type WebAppsUpdateApplicationSettingsResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsUpdateApplicationSettingsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateApplicationSettingsSlot operation. */
export declare type WebAppsUpdateApplicationSettingsSlotResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsUpdateAuthSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateAuthSettings operation. */
export declare type WebAppsUpdateAuthSettingsResponse = SiteAuthSettings;

/** Optional parameters. */
export declare interface WebAppsUpdateAuthSettingsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateAuthSettingsSlot operation. */
export declare type WebAppsUpdateAuthSettingsSlotResponse = SiteAuthSettings;

/** Optional parameters. */
export declare interface WebAppsUpdateAzureStorageAccountsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateAzureStorageAccounts operation. */
export declare type WebAppsUpdateAzureStorageAccountsResponse = AzureStoragePropertyDictionaryResource;

/** Optional parameters. */
export declare interface WebAppsUpdateAzureStorageAccountsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateAzureStorageAccountsSlot operation. */
export declare type WebAppsUpdateAzureStorageAccountsSlotResponse = AzureStoragePropertyDictionaryResource;

/** Optional parameters. */
export declare interface WebAppsUpdateBackupConfigurationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateBackupConfiguration operation. */
export declare type WebAppsUpdateBackupConfigurationResponse = BackupRequest;

/** Optional parameters. */
export declare interface WebAppsUpdateBackupConfigurationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateBackupConfigurationSlot operation. */
export declare type WebAppsUpdateBackupConfigurationSlotResponse = BackupRequest;

/** Optional parameters. */
export declare interface WebAppsUpdateConfigurationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateConfiguration operation. */
export declare type WebAppsUpdateConfigurationResponse = SiteConfigResource;

/** Optional parameters. */
export declare interface WebAppsUpdateConfigurationSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateConfigurationSlot operation. */
export declare type WebAppsUpdateConfigurationSlotResponse = SiteConfigResource;

/** Optional parameters. */
export declare interface WebAppsUpdateConnectionStringsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateConnectionStrings operation. */
export declare type WebAppsUpdateConnectionStringsResponse = ConnectionStringDictionary;

/** Optional parameters. */
export declare interface WebAppsUpdateConnectionStringsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateConnectionStringsSlot operation. */
export declare type WebAppsUpdateConnectionStringsSlotResponse = ConnectionStringDictionary;

/** Optional parameters. */
export declare interface WebAppsUpdateDiagnosticLogsConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDiagnosticLogsConfig operation. */
export declare type WebAppsUpdateDiagnosticLogsConfigResponse = SiteLogsConfig;

/** Optional parameters. */
export declare interface WebAppsUpdateDiagnosticLogsConfigSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDiagnosticLogsConfigSlot operation. */
export declare type WebAppsUpdateDiagnosticLogsConfigSlotResponse = SiteLogsConfig;

/** Optional parameters. */
export declare interface WebAppsUpdateDomainOwnershipIdentifierOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDomainOwnershipIdentifier operation. */
export declare type WebAppsUpdateDomainOwnershipIdentifierResponse = Identifier;

/** Optional parameters. */
export declare interface WebAppsUpdateDomainOwnershipIdentifierSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDomainOwnershipIdentifierSlot operation. */
export declare type WebAppsUpdateDomainOwnershipIdentifierSlotResponse = Identifier;

/** Optional parameters. */
export declare interface WebAppsUpdateHybridConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateHybridConnection operation. */
export declare type WebAppsUpdateHybridConnectionResponse = HybridConnection;

/** Optional parameters. */
export declare interface WebAppsUpdateHybridConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateHybridConnectionSlot operation. */
export declare type WebAppsUpdateHybridConnectionSlotResponse = HybridConnection;

/** Optional parameters. */
export declare interface WebAppsUpdateMetadataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateMetadata operation. */
export declare type WebAppsUpdateMetadataResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsUpdateMetadataSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateMetadataSlot operation. */
export declare type WebAppsUpdateMetadataSlotResponse = StringDictionary;

/** Optional parameters. */
export declare interface WebAppsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebAppsUpdatePremierAddOnOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updatePremierAddOn operation. */
export declare type WebAppsUpdatePremierAddOnResponse = PremierAddOn;

/** Optional parameters. */
export declare interface WebAppsUpdatePremierAddOnSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updatePremierAddOnSlot operation. */
export declare type WebAppsUpdatePremierAddOnSlotResponse = PremierAddOn;

/** Optional parameters. */
export declare interface WebAppsUpdateRelayServiceConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateRelayServiceConnection operation. */
export declare type WebAppsUpdateRelayServiceConnectionResponse = RelayServiceConnectionEntity;

/** Optional parameters. */
export declare interface WebAppsUpdateRelayServiceConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateRelayServiceConnectionSlot operation. */
export declare type WebAppsUpdateRelayServiceConnectionSlotResponse = RelayServiceConnectionEntity;

/** Contains response data for the update operation. */
export declare type WebAppsUpdateResponse = Site;

/** Optional parameters. */
export declare interface WebAppsUpdateSitePushSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateSitePushSettings operation. */
export declare type WebAppsUpdateSitePushSettingsResponse = PushSettings;

/** Optional parameters. */
export declare interface WebAppsUpdateSitePushSettingsSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateSitePushSettingsSlot operation. */
export declare type WebAppsUpdateSitePushSettingsSlotResponse = PushSettings;

/** Optional parameters. */
export declare interface WebAppsUpdateSlotConfigurationNamesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateSlotConfigurationNames operation. */
export declare type WebAppsUpdateSlotConfigurationNamesResponse = SlotConfigNamesResource;

/** Optional parameters. */
export declare interface WebAppsUpdateSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateSlot operation. */
export declare type WebAppsUpdateSlotResponse = Site;

/** Optional parameters. */
export declare interface WebAppsUpdateSourceControlOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateSourceControl operation. */
export declare type WebAppsUpdateSourceControlResponse = SiteSourceControl;

/** Optional parameters. */
export declare interface WebAppsUpdateSourceControlSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateSourceControlSlot operation. */
export declare type WebAppsUpdateSourceControlSlotResponse = SiteSourceControl;

/** Optional parameters. */
export declare interface WebAppsUpdateSwiftVirtualNetworkConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateSwiftVirtualNetworkConnection operation. */
export declare type WebAppsUpdateSwiftVirtualNetworkConnectionResponse = SwiftVirtualNetwork;

/** Optional parameters. */
export declare interface WebAppsUpdateSwiftVirtualNetworkConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateSwiftVirtualNetworkConnectionSlot operation. */
export declare type WebAppsUpdateSwiftVirtualNetworkConnectionSlotResponse = SwiftVirtualNetwork;

/** Optional parameters. */
export declare interface WebAppsUpdateVnetConnectionGatewayOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateVnetConnectionGateway operation. */
export declare type WebAppsUpdateVnetConnectionGatewayResponse = VnetGateway;

/** Optional parameters. */
export declare interface WebAppsUpdateVnetConnectionGatewaySlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateVnetConnectionGatewaySlot operation. */
export declare type WebAppsUpdateVnetConnectionGatewaySlotResponse = VnetGateway;

/** Optional parameters. */
export declare interface WebAppsUpdateVnetConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateVnetConnection operation. */
export declare type WebAppsUpdateVnetConnectionResponse = VnetInfo;

/** Optional parameters. */
export declare interface WebAppsUpdateVnetConnectionSlotOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateVnetConnectionSlot operation. */
export declare type WebAppsUpdateVnetConnectionSlotResponse = VnetInfo;

/** Web Job Information. */
export declare type WebJob = ProxyOnlyResource & {
    /** Run command. */
    runCommand?: string;
    /** Job URL. */
    url?: string;
    /** Extra Info URL. */
    extraInfoUrl?: string;
    /** Job type. */
    webJobType?: WebJobType;
    /** Error information. */
    error?: string;
    /** Using SDK? */
    usingSdk?: boolean;
    /** Job settings. */
    settings?: {
        [propertyName: string]: Record<string, unknown>;
    };
};

/** Collection of Kudu web job information elements. */
export declare interface WebJobCollection {
    /** Collection of resources. */
    value: WebJob[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for WebJobType. */
export declare type WebJobType = "Continuous" | "Triggered";

export declare type WebSiteInstanceStatus = ProxyOnlyResource & {
    state?: SiteRuntimeState;
    /** Link to the GetStatusApi in Kudu */
    statusUrl?: string;
    /** Link to the Diagnose and Solve Portal */
    detectorUrl?: string;
    /** Link to the Diagnose and Solve Portal */
    consoleUrl?: string;
    /** Dictionary of <ContainerInfo> */
    containers?: {
        [propertyName: string]: ContainerInfo;
    };
};

export declare class WebSiteManagementClient extends WebSiteManagementClientContext {
    /**
     * Initializes a new instance of the WebSiteManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g.
     *                       00000000-0000-0000-0000-000000000000).
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: WebSiteManagementClientOptionalParams);
    /**
     * Description for Gets the source controls available for Azure websites.
     * @param options The options parameters.
     */
    listSourceControls(options?: WebSiteManagementClientListSourceControlsOptionalParams): PagedAsyncIterableIterator<SourceControl>;
    private listSourceControlsPagingPage;
    private listSourceControlsPagingAll;
    /**
     * Description for Gets a list of meters for a given location.
     * @param options The options parameters.
     */
    listBillingMeters(options?: WebSiteManagementClientListBillingMetersOptionalParams): PagedAsyncIterableIterator<BillingMeter>;
    private listBillingMetersPagingPage;
    private listBillingMetersPagingAll;
    /**
     * Description for Get a list of available geographical regions.
     * @param options The options parameters.
     */
    listGeoRegions(options?: WebSiteManagementClientListGeoRegionsOptionalParams): PagedAsyncIterableIterator<GeoRegion>;
    private listGeoRegionsPagingPage;
    private listGeoRegionsPagingAll;
    /**
     * Description for List all apps that are assigned to a hostname.
     * @param nameIdentifier Hostname information.
     * @param options The options parameters.
     */
    listSiteIdentifiersAssignedToHostName(nameIdentifier: NameIdentifier, options?: WebSiteManagementClientListSiteIdentifiersAssignedToHostNameOptionalParams): PagedAsyncIterableIterator<Identifier>;
    private listSiteIdentifiersAssignedToHostNamePagingPage;
    private listSiteIdentifiersAssignedToHostNamePagingAll;
    /**
     * Description for List all premier add-on offers.
     * @param options The options parameters.
     */
    listPremierAddOnOffers(options?: WebSiteManagementClientListPremierAddOnOffersOptionalParams): PagedAsyncIterableIterator<PremierAddOnOffer>;
    private listPremierAddOnOffersPagingPage;
    private listPremierAddOnOffersPagingAll;
    /**
     * Description for Gets publishing user
     * @param options The options parameters.
     */
    getPublishingUser(options?: WebSiteManagementClientGetPublishingUserOptionalParams): Promise<WebSiteManagementClientGetPublishingUserResponse>;
    /**
     * Description for Updates publishing user
     * @param userDetails Details of publishing user
     * @param options The options parameters.
     */
    updatePublishingUser(userDetails: User, options?: WebSiteManagementClientUpdatePublishingUserOptionalParams): Promise<WebSiteManagementClientUpdatePublishingUserResponse>;
    /**
     * Description for Gets the source controls available for Azure websites.
     * @param options The options parameters.
     */
    private _listSourceControls;
    /**
     * Description for Gets source control token
     * @param sourceControlType Type of source control
     * @param options The options parameters.
     */
    getSourceControl(sourceControlType: string, options?: WebSiteManagementClientGetSourceControlOptionalParams): Promise<WebSiteManagementClientGetSourceControlResponse>;
    /**
     * Description for Updates source control token
     * @param sourceControlType Type of source control
     * @param requestMessage Source control token information
     * @param options The options parameters.
     */
    updateSourceControl(sourceControlType: string, requestMessage: SourceControl, options?: WebSiteManagementClientUpdateSourceControlOptionalParams): Promise<WebSiteManagementClientUpdateSourceControlResponse>;
    /**
     * Description for Gets a list of meters for a given location.
     * @param options The options parameters.
     */
    private _listBillingMeters;
    /**
     * Description for Check if a resource name is available.
     * @param name Resource name to verify.
     * @param typeParam Resource type used for verification.
     * @param options The options parameters.
     */
    checkNameAvailability(name: string, typeParam: CheckNameResourceTypes, options?: WebSiteManagementClientCheckNameAvailabilityOptionalParams): Promise<WebSiteManagementClientCheckNameAvailabilityResponse>;
    /**
     * Description for Gets list of available geo regions plus ministamps
     * @param options The options parameters.
     */
    getSubscriptionDeploymentLocations(options?: WebSiteManagementClientGetSubscriptionDeploymentLocationsOptionalParams): Promise<WebSiteManagementClientGetSubscriptionDeploymentLocationsResponse>;
    /**
     * Description for Get a list of available geographical regions.
     * @param options The options parameters.
     */
    private _listGeoRegions;
    /**
     * Description for List all apps that are assigned to a hostname.
     * @param nameIdentifier Hostname information.
     * @param options The options parameters.
     */
    private _listSiteIdentifiersAssignedToHostName;
    /**
     * Description for List all premier add-on offers.
     * @param options The options parameters.
     */
    private _listPremierAddOnOffers;
    /**
     * Description for List all SKUs.
     * @param options The options parameters.
     */
    listSkus(options?: WebSiteManagementClientListSkusOptionalParams): Promise<WebSiteManagementClientListSkusResponse>;
    /**
     * Description for Verifies if this VNET is compatible with an App Service Environment by analyzing the
     * Network Security Group rules.
     * @param parameters VNET information
     * @param options The options parameters.
     */
    verifyHostingEnvironmentVnet(parameters: VnetParameters, options?: WebSiteManagementClientVerifyHostingEnvironmentVnetOptionalParams): Promise<WebSiteManagementClientVerifyHostingEnvironmentVnetResponse>;
    /**
     * Description for Move resources between resource groups.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param moveResourceEnvelope Object that represents the resource to move.
     * @param options The options parameters.
     */
    move(resourceGroupName: string, moveResourceEnvelope: CsmMoveResourceEnvelope, options?: WebSiteManagementClientMoveOptionalParams): Promise<void>;
    /**
     * Description for Validate if a resource can be created.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param validateRequest Request with the resources to validate.
     * @param options The options parameters.
     */
    validate(resourceGroupName: string, validateRequest: ValidateRequest, options?: WebSiteManagementClientValidateOptionalParams): Promise<WebSiteManagementClientValidateResponse>;
    /**
     * Description for Validate whether a resource can be moved.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param moveResourceEnvelope Object that represents the resource to move.
     * @param options The options parameters.
     */
    validateMove(resourceGroupName: string, moveResourceEnvelope: CsmMoveResourceEnvelope, options?: WebSiteManagementClientValidateMoveOptionalParams): Promise<void>;
    /**
     * ListSourceControlsNext
     * @param nextLink The nextLink from the previous successful call to the ListSourceControls method.
     * @param options The options parameters.
     */
    private _listSourceControlsNext;
    /**
     * ListBillingMetersNext
     * @param nextLink The nextLink from the previous successful call to the ListBillingMeters method.
     * @param options The options parameters.
     */
    private _listBillingMetersNext;
    /**
     * ListGeoRegionsNext
     * @param nextLink The nextLink from the previous successful call to the ListGeoRegions method.
     * @param options The options parameters.
     */
    private _listGeoRegionsNext;
    /**
     * ListSiteIdentifiersAssignedToHostNameNext
     * @param nameIdentifier Hostname information.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListSiteIdentifiersAssignedToHostName method.
     * @param options The options parameters.
     */
    private _listSiteIdentifiersAssignedToHostNameNext;
    /**
     * ListPremierAddOnOffersNext
     * @param nextLink The nextLink from the previous successful call to the ListPremierAddOnOffers method.
     * @param options The options parameters.
     */
    private _listPremierAddOnOffersNext;
    appServiceCertificateOrders: AppServiceCertificateOrders;
    certificateRegistrationProvider: CertificateRegistrationProvider;
    domains: Domains;
    topLevelDomains: TopLevelDomains;
    domainRegistrationProvider: DomainRegistrationProvider;
    certificates: Certificates;
    deletedWebApps: DeletedWebApps;
    diagnostics: Diagnostics;
    provider: Provider;
    recommendations: Recommendations;
    webApps: WebApps;
    staticSites: StaticSites;
    appServiceEnvironments: AppServiceEnvironments;
    appServicePlans: AppServicePlans;
    resourceHealthMetadataOperations: ResourceHealthMetadataOperations;
}

/** Optional parameters. */
export declare interface WebSiteManagementClientCheckNameAvailabilityOptionalParams extends coreClient.OperationOptions {
    /** Is fully qualified domain name. */
    isFqdn?: boolean;
}

/** Contains response data for the checkNameAvailability operation. */
export declare type WebSiteManagementClientCheckNameAvailabilityResponse = ResourceNameAvailability;

export declare class WebSiteManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    apiVersion: string;
    /**
     * Initializes a new instance of the WebSiteManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g.
     *                       00000000-0000-0000-0000-000000000000).
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: WebSiteManagementClientOptionalParams);
}

/** Optional parameters. */
export declare interface WebSiteManagementClientGetPublishingUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPublishingUser operation. */
export declare type WebSiteManagementClientGetPublishingUserResponse = User;

/** Optional parameters. */
export declare interface WebSiteManagementClientGetSourceControlOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSourceControl operation. */
export declare type WebSiteManagementClientGetSourceControlResponse = SourceControl;

/** Optional parameters. */
export declare interface WebSiteManagementClientGetSubscriptionDeploymentLocationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSubscriptionDeploymentLocations operation. */
export declare type WebSiteManagementClientGetSubscriptionDeploymentLocationsResponse = DeploymentLocations;

/** Optional parameters. */
export declare interface WebSiteManagementClientListBillingMetersNextOptionalParams extends coreClient.OperationOptions {
    /** Azure Location of billable resource */
    billingLocation?: string;
    /** App Service OS type meters used for */
    osType?: string;
}

/** Contains response data for the listBillingMetersNext operation. */
export declare type WebSiteManagementClientListBillingMetersNextResponse = BillingMeterCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientListBillingMetersOptionalParams extends coreClient.OperationOptions {
    /** Azure Location of billable resource */
    billingLocation?: string;
    /** App Service OS type meters used for */
    osType?: string;
}

/** Contains response data for the listBillingMeters operation. */
export declare type WebSiteManagementClientListBillingMetersResponse = BillingMeterCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientListGeoRegionsNextOptionalParams extends coreClient.OperationOptions {
    /** Name of SKU used to filter the regions. */
    sku?: SkuName;
    /** Specify <code>true</code> if you want to filter to only regions that support Linux workers. */
    linuxWorkersEnabled?: boolean;
    /** Specify <code>true</code> if you want to filter to only regions that support Xenon workers. */
    xenonWorkersEnabled?: boolean;
    /** Specify <code>true</code> if you want to filter to only regions that support Linux Consumption Workers. */
    linuxDynamicWorkersEnabled?: boolean;
}

/** Contains response data for the listGeoRegionsNext operation. */
export declare type WebSiteManagementClientListGeoRegionsNextResponse = GeoRegionCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientListGeoRegionsOptionalParams extends coreClient.OperationOptions {
    /** Name of SKU used to filter the regions. */
    sku?: SkuName;
    /** Specify <code>true</code> if you want to filter to only regions that support Linux workers. */
    linuxWorkersEnabled?: boolean;
    /** Specify <code>true</code> if you want to filter to only regions that support Xenon workers. */
    xenonWorkersEnabled?: boolean;
    /** Specify <code>true</code> if you want to filter to only regions that support Linux Consumption Workers. */
    linuxDynamicWorkersEnabled?: boolean;
}

/** Contains response data for the listGeoRegions operation. */
export declare type WebSiteManagementClientListGeoRegionsResponse = GeoRegionCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientListPremierAddOnOffersNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPremierAddOnOffersNext operation. */
export declare type WebSiteManagementClientListPremierAddOnOffersNextResponse = PremierAddOnOfferCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientListPremierAddOnOffersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPremierAddOnOffers operation. */
export declare type WebSiteManagementClientListPremierAddOnOffersResponse = PremierAddOnOfferCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientListSiteIdentifiersAssignedToHostNameNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteIdentifiersAssignedToHostNameNext operation. */
export declare type WebSiteManagementClientListSiteIdentifiersAssignedToHostNameNextResponse = IdentifierCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientListSiteIdentifiersAssignedToHostNameOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSiteIdentifiersAssignedToHostName operation. */
export declare type WebSiteManagementClientListSiteIdentifiersAssignedToHostNameResponse = IdentifierCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientListSkusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSkus operation. */
export declare type WebSiteManagementClientListSkusResponse = SkuInfos;

/** Optional parameters. */
export declare interface WebSiteManagementClientListSourceControlsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSourceControlsNext operation. */
export declare type WebSiteManagementClientListSourceControlsNextResponse = SourceControlCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientListSourceControlsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSourceControls operation. */
export declare type WebSiteManagementClientListSourceControlsResponse = SourceControlCollection;

/** Optional parameters. */
export declare interface WebSiteManagementClientMoveOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebSiteManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Optional parameters. */
export declare interface WebSiteManagementClientUpdatePublishingUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updatePublishingUser operation. */
export declare type WebSiteManagementClientUpdatePublishingUserResponse = User;

/** Optional parameters. */
export declare interface WebSiteManagementClientUpdateSourceControlOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateSourceControl operation. */
export declare type WebSiteManagementClientUpdateSourceControlResponse = SourceControl;

/** Optional parameters. */
export declare interface WebSiteManagementClientValidateMoveOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface WebSiteManagementClientValidateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the validate operation. */
export declare type WebSiteManagementClientValidateResponse = ValidateResponse;

/** Optional parameters. */
export declare interface WebSiteManagementClientVerifyHostingEnvironmentVnetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the verifyHostingEnvironmentVnet operation. */
export declare type WebSiteManagementClientVerifyHostingEnvironmentVnetResponse = VnetValidationFailureDetails;

/** Worker pool of an App Service Environment. */
export declare interface WorkerPool {
    /** Worker size ID for referencing this worker pool. */
    workerSizeId?: number;
    /** Shared or dedicated app hosting. */
    computeMode?: ComputeModeOptions;
    /** VM size of the worker pool instances. */
    workerSize?: string;
    /** Number of instances in the worker pool. */
    workerCount?: number;
    /**
     * Names of all instances in the worker pool (read only).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly instanceNames?: string[];
}

/** Collection of worker pools. */
export declare interface WorkerPoolCollection {
    /** Collection of resources. */
    value: WorkerPoolResource[];
    /**
     * Link to next page of resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Worker pool of an App Service Environment ARM resource. */
export declare type WorkerPoolResource = ProxyOnlyResource & {
    /** Description of a SKU for a scalable resource. */
    sku?: SkuDescription;
    /** Worker size ID for referencing this worker pool. */
    workerSizeId?: number;
    /** Shared or dedicated app hosting. */
    computeMode?: ComputeModeOptions;
    /** VM size of the worker pool instances. */
    workerSize?: string;
    /** Number of instances in the worker pool. */
    workerCount?: number;
    /**
     * Names of all instances in the worker pool (read only).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly instanceNames?: string[];
};

/** Defines values for WorkerSizeOptions. */
export declare type WorkerSizeOptions = "Small" | "Medium" | "Large" | "D1" | "D2" | "D3" | "NestedSmall" | "Default";

export { }
