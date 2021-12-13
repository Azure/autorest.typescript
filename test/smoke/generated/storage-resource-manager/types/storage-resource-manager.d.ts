import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

export declare interface AccessPolicy {
    /** Start time of the access policy */
    startTime?: Date;
    /** Expiry time of the access policy */
    expiryTime?: Date;
    /** List of abbreviated permissions. */
    permission?: string;
}

/** Defines values for AccessTier. */
export declare type AccessTier = "Hot" | "Cool";

/** This defines account-level immutability policy properties. */
export declare interface AccountImmutabilityPolicyProperties {
    /** The immutability period for the blobs in the container since the policy creation, in days. */
    immutabilityPeriodSinceCreationInDays?: number;
    /** The ImmutabilityPolicy state defines the mode of the policy. Disabled state disables the policy, Unlocked state allows increase and decrease of immutability retention time and also allows toggling allowProtectedAppendWrites property, Locked state only allows the increase of the immutability retention time. A policy can only be created in a Disabled or Unlocked state and can be toggled between the two states. Only a policy in an Unlocked state can transition to a Locked state which cannot be reverted. */
    state?: AccountImmutabilityPolicyState;
    /** This property can only be changed for disabled and unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. */
    allowProtectedAppendWrites?: boolean;
}

/**
 * Defines values for AccountImmutabilityPolicyState. \
 * {@link KnownAccountImmutabilityPolicyState} can be used interchangeably with AccountImmutabilityPolicyState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unlocked** \
 * **Locked** \
 * **Disabled**
 */
export declare type AccountImmutabilityPolicyState = string;

/** The parameters to list SAS credentials of a storage account. */
export declare interface AccountSasParameters {
    /** The signed services accessible with the account SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f). */
    services: Services;
    /** The signed resource types that are accessible with the account SAS. Service (s): Access to service-level APIs; Container (c): Access to container-level APIs; Object (o): Access to object-level APIs for blobs, queue messages, table entities, and files. */
    resourceTypes: SignedResourceTypes;
    /** The signed permissions for the account SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p). */
    permissions: Permissions_2;
    /** An IP address or a range of IP addresses from which to accept requests. */
    iPAddressOrRange?: string;
    /** The protocol permitted for a request made with the account SAS. */
    protocols?: HttpProtocol;
    /** The time at which the SAS becomes valid. */
    sharedAccessStartTime?: Date;
    /** The time at which the shared access signature becomes invalid. */
    sharedAccessExpiryTime: Date;
    /** The key to sign the account SAS token with. */
    keyToSign?: string;
}

/** Defines values for AccountStatus. */
export declare type AccountStatus = "available" | "unavailable";

/** Settings properties for Active Directory (AD). */
export declare interface ActiveDirectoryProperties {
    /** Specifies the primary domain that the AD DNS server is authoritative for. */
    domainName: string;
    /** Specifies the NetBIOS domain name. */
    netBiosDomainName: string;
    /** Specifies the Active Directory forest to get. */
    forestName: string;
    /** Specifies the domain GUID. */
    domainGuid: string;
    /** Specifies the security identifier (SID). */
    domainSid: string;
    /** Specifies the security identifier (SID) for Azure Storage. */
    azureStorageSid: string;
}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export declare type AzureEntityResource = Resource & {
    /**
     * Resource Etag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
};

/** Settings for Azure Files identity based authentication. */
export declare interface AzureFilesIdentityBasedAuthentication {
    /** Indicates the directory service used. */
    directoryServiceOptions: DirectoryServiceOptions;
    /** Required if choose AD. */
    activeDirectoryProperties?: ActiveDirectoryProperties;
    /** Default share permission for users using Kerberos authentication if RBAC role is not assigned. */
    defaultSharePermission?: DefaultSharePermission;
}

/** Properties of the blob container, including Id, resource name, resource type, Etag. */
export declare type BlobContainer = AzureEntityResource & {
    /**
     * The version of the deleted blob container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly version?: string;
    /**
     * Indicates whether the blob container was deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deleted?: boolean;
    /**
     * Blob container deletion time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletedTime?: Date;
    /**
     * Remaining retention days for soft deleted blob container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly remainingRetentionDays?: number;
    /** Default the container to use specified encryption scope for all writes. */
    defaultEncryptionScope?: string;
    /** Block override of encryption scope from the container default. */
    denyEncryptionScopeOverride?: boolean;
    /** Specifies whether data in the container may be accessed publicly and the level of access. */
    publicAccess?: PublicAccess;
    /**
     * Returns the date and time the container was last modified.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTime?: Date;
    /**
     * The lease status of the container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseStatus?: LeaseStatus;
    /**
     * Lease state of the container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseState?: LeaseState;
    /**
     * Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseDuration?: LeaseDuration;
    /** A name-value pair to associate with the container as metadata. */
    metadata?: {
        [propertyName: string]: string;
    };
    /**
     * The ImmutabilityPolicy property of the container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly immutabilityPolicy?: ImmutabilityPolicyProperties;
    /**
     * The LegalHold property of the container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly legalHold?: LegalHoldProperties;
    /**
     * The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasLegalHold?: boolean;
    /**
     * The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasImmutabilityPolicy?: boolean;
    /** The object level immutability property of the container. The property is immutable and can only be set to true at the container creation time. Existing containers must undergo a migration process. */
    immutableStorageWithVersioning?: ImmutableStorageWithVersioning;
    /** Enable NFSv3 root squash on blob container. */
    enableNfsV3RootSquash?: boolean;
    /** Enable NFSv3 all squash on blob container. */
    enableNfsV3AllSquash?: boolean;
};

/** Interface representing a BlobContainers. */
export declare interface BlobContainers {
    /**
     * Lists all containers and does not support a prefix like data plane. Also SRP today does not return
     * continuation token.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: BlobContainersListOptionalParams): PagedAsyncIterableIterator<ListContainerItem>;
    /**
     * Creates a new container under the specified account as described by request body. The container
     * resource includes metadata and properties for that container. It does not include a list of the
     * blobs contained by the container.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param blobContainer Properties of the blob container to create.
     * @param options The options parameters.
     */
    create(resourceGroupName: string, accountName: string, containerName: string, blobContainer: BlobContainer, options?: BlobContainersCreateOptionalParams): Promise<BlobContainersCreateResponse>;
    /**
     * Updates container properties as specified in request body. Properties not mentioned in the request
     * will be unchanged. Update fails if the specified container doesn't already exist.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param blobContainer Properties to update for the blob container.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, accountName: string, containerName: string, blobContainer: BlobContainer, options?: BlobContainersUpdateOptionalParams): Promise<BlobContainersUpdateResponse>;
    /**
     * Gets properties of a specified container.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, containerName: string, options?: BlobContainersGetOptionalParams): Promise<BlobContainersGetResponse>;
    /**
     * Deletes specified container under its account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, containerName: string, options?: BlobContainersDeleteOptionalParams): Promise<void>;
    /**
     * Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows
     * an append pattern and does not clear out the existing tags that are not specified in the request.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param legalHold The LegalHold property that will be set to a blob container.
     * @param options The options parameters.
     */
    setLegalHold(resourceGroupName: string, accountName: string, containerName: string, legalHold: LegalHold, options?: BlobContainersSetLegalHoldOptionalParams): Promise<BlobContainersSetLegalHoldResponse>;
    /**
     * Clears legal hold tags. Clearing the same or non-existent tag results in an idempotent operation.
     * ClearLegalHold clears out only the specified tags in the request.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param legalHold The LegalHold property that will be clear from a blob container.
     * @param options The options parameters.
     */
    clearLegalHold(resourceGroupName: string, accountName: string, containerName: string, legalHold: LegalHold, options?: BlobContainersClearLegalHoldOptionalParams): Promise<BlobContainersClearLegalHoldResponse>;
    /**
     * Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not
     * required for this operation.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param options The options parameters.
     */
    createOrUpdateImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, options?: BlobContainersCreateOrUpdateImmutabilityPolicyOptionalParams): Promise<BlobContainersCreateOrUpdateImmutabilityPolicyResponse>;
    /**
     * Gets the existing immutability policy along with the corresponding ETag in response headers and
     * body.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param options The options parameters.
     */
    getImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, options?: BlobContainersGetImmutabilityPolicyOptionalParams): Promise<BlobContainersGetImmutabilityPolicyResponse>;
    /**
     * Aborts an unlocked immutability policy. The response of delete has
     * immutabilityPeriodSinceCreationInDays set to 0. ETag in If-Match is required for this operation.
     * Deleting a locked immutability policy is not allowed, the only way is to delete the container after
     * deleting all expired blobs inside the policy locked container.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param ifMatch The entity state (ETag) version of the immutability policy to update. A value of "*"
     *                can be used to apply the operation only if the immutability policy already exists. If omitted, this
     *                operation will always be applied.
     * @param options The options parameters.
     */
    deleteImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, ifMatch: string, options?: BlobContainersDeleteImmutabilityPolicyOptionalParams): Promise<BlobContainersDeleteImmutabilityPolicyResponse>;
    /**
     * Sets the ImmutabilityPolicy to Locked state. The only action allowed on a Locked policy is
     * ExtendImmutabilityPolicy action. ETag in If-Match is required for this operation.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param ifMatch The entity state (ETag) version of the immutability policy to update. A value of "*"
     *                can be used to apply the operation only if the immutability policy already exists. If omitted, this
     *                operation will always be applied.
     * @param options The options parameters.
     */
    lockImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, ifMatch: string, options?: BlobContainersLockImmutabilityPolicyOptionalParams): Promise<BlobContainersLockImmutabilityPolicyResponse>;
    /**
     * Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action
     * allowed on a Locked policy will be this action. ETag in If-Match is required for this operation.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param ifMatch The entity state (ETag) version of the immutability policy to update. A value of "*"
     *                can be used to apply the operation only if the immutability policy already exists. If omitted, this
     *                operation will always be applied.
     * @param options The options parameters.
     */
    extendImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, ifMatch: string, options?: BlobContainersExtendImmutabilityPolicyOptionalParams): Promise<BlobContainersExtendImmutabilityPolicyResponse>;
    /**
     * The Lease Container operation establishes and manages a lock on a container for delete operations.
     * The lock duration can be 15 to 60 seconds, or can be infinite.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param options The options parameters.
     */
    lease(resourceGroupName: string, accountName: string, containerName: string, options?: BlobContainersLeaseOptionalParams): Promise<BlobContainersLeaseResponse>;
    /**
     * This operation migrates a blob container from container level WORM to object level immutability
     * enabled container. Prerequisites require a container level immutability policy either in locked or
     * unlocked state, Account level versioning must be enabled and there should be no Legal hold on the
     * container.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param options The options parameters.
     */
    beginObjectLevelWorm(resourceGroupName: string, accountName: string, containerName: string, options?: BlobContainersObjectLevelWormOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * This operation migrates a blob container from container level WORM to object level immutability
     * enabled container. Prerequisites require a container level immutability policy either in locked or
     * unlocked state, Account level versioning must be enabled and there should be no Legal hold on the
     * container.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param containerName The name of the blob container within the specified storage account. Blob
     *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
     *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
     *                      number.
     * @param options The options parameters.
     */
    beginObjectLevelWormAndWait(resourceGroupName: string, accountName: string, containerName: string, options?: BlobContainersObjectLevelWormOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface BlobContainersClearLegalHoldOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the clearLegalHold operation. */
export declare type BlobContainersClearLegalHoldResponse = LegalHold;

/** Optional parameters. */
export declare interface BlobContainersCreateOptionalParams extends coreClient.OperationOptions {
}

/** Defines headers for BlobContainers_createOrUpdateImmutabilityPolicy operation. */
export declare interface BlobContainersCreateOrUpdateImmutabilityPolicyHeaders {
    /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. */
    eTag?: string;
}

/** Optional parameters. */
export declare interface BlobContainersCreateOrUpdateImmutabilityPolicyOptionalParams extends coreClient.OperationOptions {
    /** The ImmutabilityPolicy Properties that will be created or updated to a blob container. */
    parameters?: ImmutabilityPolicy;
    /** The entity state (ETag) version of the immutability policy to update. A value of "*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. */
    ifMatch?: string;
}

/** Contains response data for the createOrUpdateImmutabilityPolicy operation. */
export declare type BlobContainersCreateOrUpdateImmutabilityPolicyResponse = BlobContainersCreateOrUpdateImmutabilityPolicyHeaders & ImmutabilityPolicy;

/** Contains response data for the create operation. */
export declare type BlobContainersCreateResponse = BlobContainer;

/** Defines headers for BlobContainers_deleteImmutabilityPolicy operation. */
export declare interface BlobContainersDeleteImmutabilityPolicyHeaders {
    /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. */
    eTag?: string;
}

/** Optional parameters. */
export declare interface BlobContainersDeleteImmutabilityPolicyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteImmutabilityPolicy operation. */
export declare type BlobContainersDeleteImmutabilityPolicyResponse = BlobContainersDeleteImmutabilityPolicyHeaders & ImmutabilityPolicy;

/** Optional parameters. */
export declare interface BlobContainersDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Defines headers for BlobContainers_extendImmutabilityPolicy operation. */
export declare interface BlobContainersExtendImmutabilityPolicyHeaders {
    /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. */
    eTag?: string;
}

/** Optional parameters. */
export declare interface BlobContainersExtendImmutabilityPolicyOptionalParams extends coreClient.OperationOptions {
    /** The ImmutabilityPolicy Properties that will be extended for a blob container. */
    parameters?: ImmutabilityPolicy;
}

/** Contains response data for the extendImmutabilityPolicy operation. */
export declare type BlobContainersExtendImmutabilityPolicyResponse = BlobContainersExtendImmutabilityPolicyHeaders & ImmutabilityPolicy;

/** Defines headers for BlobContainers_getImmutabilityPolicy operation. */
export declare interface BlobContainersGetImmutabilityPolicyHeaders {
    /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. */
    eTag?: string;
}

/** Optional parameters. */
export declare interface BlobContainersGetImmutabilityPolicyOptionalParams extends coreClient.OperationOptions {
    /** The entity state (ETag) version of the immutability policy to update. A value of "*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied. */
    ifMatch?: string;
}

/** Contains response data for the getImmutabilityPolicy operation. */
export declare type BlobContainersGetImmutabilityPolicyResponse = BlobContainersGetImmutabilityPolicyHeaders & ImmutabilityPolicy;

/** Optional parameters. */
export declare interface BlobContainersGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type BlobContainersGetResponse = BlobContainer;

/** Optional parameters. */
export declare interface BlobContainersLeaseOptionalParams extends coreClient.OperationOptions {
    /** Lease Container request body. */
    parameters?: LeaseContainerRequest;
}

/** Contains response data for the lease operation. */
export declare type BlobContainersLeaseResponse = LeaseContainerResponse;

/** Optional parameters. */
export declare interface BlobContainersListNextOptionalParams extends coreClient.OperationOptions {
    /** Optional. Specified maximum number of containers that can be included in the list. */
    maxpagesize?: string;
    /** Optional. When specified, only container names starting with the filter will be listed. */
    filter?: string;
    /** Optional, used to include the properties for soft deleted blob containers. */
    include?: ListContainersInclude;
}

/** Contains response data for the listNext operation. */
export declare type BlobContainersListNextResponse = ListContainerItems;

/** Optional parameters. */
export declare interface BlobContainersListOptionalParams extends coreClient.OperationOptions {
    /** Optional. Specified maximum number of containers that can be included in the list. */
    maxpagesize?: string;
    /** Optional. When specified, only container names starting with the filter will be listed. */
    filter?: string;
    /** Optional, used to include the properties for soft deleted blob containers. */
    include?: ListContainersInclude;
}

/** Contains response data for the list operation. */
export declare type BlobContainersListResponse = ListContainerItems;

/** Defines headers for BlobContainers_lockImmutabilityPolicy operation. */
export declare interface BlobContainersLockImmutabilityPolicyHeaders {
    /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. */
    eTag?: string;
}

/** Optional parameters. */
export declare interface BlobContainersLockImmutabilityPolicyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the lockImmutabilityPolicy operation. */
export declare type BlobContainersLockImmutabilityPolicyResponse = BlobContainersLockImmutabilityPolicyHeaders & ImmutabilityPolicy;

/** Optional parameters. */
export declare interface BlobContainersObjectLevelWormOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface BlobContainersSetLegalHoldOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the setLegalHold operation. */
export declare type BlobContainersSetLegalHoldResponse = LegalHold;

/** Optional parameters. */
export declare interface BlobContainersUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type BlobContainersUpdateResponse = BlobContainer;

/** Interface representing a BlobInventoryPolicies. */
export declare interface BlobInventoryPolicies {
    /**
     * Gets the blob inventory policy associated with the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: BlobInventoryPoliciesListOptionalParams): PagedAsyncIterableIterator<BlobInventoryPolicy>;
    /**
     * Gets the blob inventory policy associated with the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param blobInventoryPolicyName The name of the storage account blob inventory policy. It should
     *                                always be 'default'
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, blobInventoryPolicyName: BlobInventoryPolicyName, options?: BlobInventoryPoliciesGetOptionalParams): Promise<BlobInventoryPoliciesGetResponse>;
    /**
     * Sets the blob inventory policy to the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param blobInventoryPolicyName The name of the storage account blob inventory policy. It should
     *                                always be 'default'
     * @param properties The blob inventory policy set to a storage account.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, accountName: string, blobInventoryPolicyName: BlobInventoryPolicyName, properties: BlobInventoryPolicy, options?: BlobInventoryPoliciesCreateOrUpdateOptionalParams): Promise<BlobInventoryPoliciesCreateOrUpdateResponse>;
    /**
     * Deletes the blob inventory policy associated with the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param blobInventoryPolicyName The name of the storage account blob inventory policy. It should
     *                                always be 'default'
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, blobInventoryPolicyName: BlobInventoryPolicyName, options?: BlobInventoryPoliciesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface BlobInventoryPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type BlobInventoryPoliciesCreateOrUpdateResponse = BlobInventoryPolicy;

/** Optional parameters. */
export declare interface BlobInventoryPoliciesDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface BlobInventoryPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type BlobInventoryPoliciesGetResponse = BlobInventoryPolicy;

/** Optional parameters. */
export declare interface BlobInventoryPoliciesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type BlobInventoryPoliciesListResponse = ListBlobInventoryPolicy;

/** The storage account blob inventory policy. */
export declare type BlobInventoryPolicy = Resource & {
    /**
     * Metadata pertaining to creation and last modification of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly systemData?: SystemData;
    /**
     * Returns the last modified date and time of the blob inventory policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTime?: Date;
    /** The storage account blob inventory policy object. It is composed of policy rules. */
    policy?: BlobInventoryPolicySchema;
};

/** An object that defines the blob inventory rule. */
export declare interface BlobInventoryPolicyDefinition {
    /** An object that defines the filter set. */
    filters?: BlobInventoryPolicyFilter;
    /** This is a required field, it specifies the format for the inventory files. */
    format: Format;
    /** This is a required field. This field is used to schedule an inventory formation. */
    schedule: Schedule;
    /** This is a required field. This field specifies the scope of the inventory created either at the blob or container level. */
    objectType: ObjectType;
    /** This is a required field. This field specifies the fields and properties of the object to be included in the inventory. The Schema field value 'Name' is always required. The valid values for this field for the 'Blob' definition.objectType include 'Name, Creation-Time, Last-Modified, Content-Length, Content-MD5, BlobType, AccessTier, AccessTierChangeTime, AccessTierInferred, Tags, Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, Snapshot, VersionId, IsCurrentVersion, Metadata, LastAccessTime'. The valid values for 'Container' definition.objectType include 'Name, Last-Modified, Metadata, LeaseStatus, LeaseState, LeaseDuration, PublicAccess, HasImmutabilityPolicy, HasLegalHold'. Schema field values 'Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl' are valid only for Hns enabled accounts.'Tags' field is only valid for non Hns accounts */
    schemaFields: string[];
}

/** An object that defines the blob inventory rule filter conditions. For 'Blob' definition.objectType all filter properties are applicable, 'blobTypes' is required and others are optional. For 'Container' definition.objectType only prefixMatch is applicable and is optional. */
export declare interface BlobInventoryPolicyFilter {
    /** An array of strings for blob prefixes to be matched. */
    prefixMatch?: string[];
    /** An array of predefined enum values. Valid values include blockBlob, appendBlob, pageBlob. Hns accounts does not support pageBlobs. This field is required when definition.objectType property is set to 'Blob'. */
    blobTypes?: string[];
    /** Includes blob versions in blob inventory when value is set to true. The definition.schemaFields values 'VersionId and IsCurrentVersion' are required if this property is set to true, else they must be excluded. */
    includeBlobVersions?: boolean;
    /** Includes blob snapshots in blob inventory when value is set to true. The definition.schemaFields value 'Snapshot' is required if this property is set to true, else it must be excluded. */
    includeSnapshots?: boolean;
}

/**
 * Defines values for BlobInventoryPolicyName. \
 * {@link KnownBlobInventoryPolicyName} can be used interchangeably with BlobInventoryPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type BlobInventoryPolicyName = string;

/** An object that wraps the blob inventory rule. Each rule is uniquely defined by name. */
export declare interface BlobInventoryPolicyRule {
    /** Rule is enabled when set to true. */
    enabled: boolean;
    /** A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy. */
    name: string;
    /** Container name where blob inventory files are stored. Must be pre-created. */
    destination: string;
    /** An object that defines the blob inventory policy rule. */
    definition: BlobInventoryPolicyDefinition;
}

/** The storage account blob inventory policy rules. */
export declare interface BlobInventoryPolicySchema {
    /** Policy is enabled if set to true. */
    enabled: boolean;
    /** The valid value is Inventory */
    type: InventoryRuleType;
    /** The storage account blob inventory policy rules. The rule is applied when it is enabled. */
    rules: BlobInventoryPolicyRule[];
}

/** Blob restore parameters */
export declare interface BlobRestoreParameters {
    /** Restore blob to the specified time. */
    timeToRestore: Date;
    /** Blob ranges to restore. */
    blobRanges: BlobRestoreRange[];
}

/**
 * Defines values for BlobRestoreProgressStatus. \
 * {@link KnownBlobRestoreProgressStatus} can be used interchangeably with BlobRestoreProgressStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InProgress** \
 * **Complete** \
 * **Failed**
 */
export declare type BlobRestoreProgressStatus = string;

/** Blob range */
export declare interface BlobRestoreRange {
    /** Blob start range. This is inclusive. Empty means account start. */
    startRange: string;
    /** Blob end range. This is exclusive. Empty means account end. */
    endRange: string;
}

/** Blob restore status. */
export declare interface BlobRestoreStatus {
    /**
     * The status of blob restore progress. Possible values are: - InProgress: Indicates that blob restore is ongoing. - Complete: Indicates that blob restore has been completed successfully. - Failed: Indicates that blob restore is failed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: BlobRestoreProgressStatus;
    /**
     * Failure reason when blob restore is failed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failureReason?: string;
    /**
     * Id for tracking blob restore request.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly restoreId?: string;
    /**
     * Blob restore request parameters.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly parameters?: BlobRestoreParameters;
}

export declare interface BlobServiceItems {
    /**
     * List of blob services returned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: BlobServiceProperties[];
}

/** The properties of a storage account’s Blob service. */
export declare type BlobServiceProperties = Resource & {
    /**
     * Sku name and tier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sku?: Sku;
    /** Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service. */
    cors?: CorsRules;
    /** DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions. */
    defaultServiceVersion?: string;
    /** The blob service properties for blob soft delete. */
    deleteRetentionPolicy?: DeleteRetentionPolicy;
    /** Versioning is enabled if set to true. */
    isVersioningEnabled?: boolean;
    /** Deprecated in favor of isVersioningEnabled property. */
    automaticSnapshotPolicyEnabled?: boolean;
    /** The blob service properties for change feed events. */
    changeFeed?: ChangeFeed;
    /** The blob service properties for blob restore policy. */
    restorePolicy?: RestorePolicyProperties;
    /** The blob service properties for container soft delete. */
    containerDeleteRetentionPolicy?: DeleteRetentionPolicy;
    /** The blob service property to configure last access time based tracking policy. */
    lastAccessTimeTrackingPolicy?: LastAccessTimeTrackingPolicy;
};

/** Interface representing a BlobServices. */
export declare interface BlobServices {
    /**
     * List blob services of storage account. It returns a collection of one object named default.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: BlobServicesListOptionalParams): PagedAsyncIterableIterator<BlobServiceProperties>;
    /**
     * Sets the properties of a storage account’s Blob service, including properties for Storage Analytics
     * and CORS (Cross-Origin Resource Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The properties of a storage account’s Blob service, including properties for
     *                   Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
     * @param options The options parameters.
     */
    setServiceProperties(resourceGroupName: string, accountName: string, parameters: BlobServiceProperties, options?: BlobServicesSetServicePropertiesOptionalParams): Promise<BlobServicesSetServicePropertiesResponse>;
    /**
     * Gets the properties of a storage account’s Blob service, including properties for Storage Analytics
     * and CORS (Cross-Origin Resource Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    getServiceProperties(resourceGroupName: string, accountName: string, options?: BlobServicesGetServicePropertiesOptionalParams): Promise<BlobServicesGetServicePropertiesResponse>;
}

/** Optional parameters. */
export declare interface BlobServicesGetServicePropertiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getServiceProperties operation. */
export declare type BlobServicesGetServicePropertiesResponse = BlobServiceProperties;

/** Optional parameters. */
export declare interface BlobServicesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type BlobServicesListResponse = BlobServiceItems;

/** Optional parameters. */
export declare interface BlobServicesSetServicePropertiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the setServiceProperties operation. */
export declare type BlobServicesSetServicePropertiesResponse = BlobServiceProperties;

/**
 * Defines values for Bypass. \
 * {@link KnownBypass} can be used interchangeably with Bypass,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Logging** \
 * **Metrics** \
 * **AzureServices**
 */
export declare type Bypass = string;

/** The blob service properties for change feed events. */
export declare interface ChangeFeed {
    /** Indicates whether change feed event logging is enabled for the Blob service. */
    enabled?: boolean;
    /** Indicates the duration of changeFeed retention in days. Minimum value is 1 day and maximum value is 146000 days (400 years). A null value indicates an infinite retention of the change feed. */
    retentionInDays?: number;
}

/** The CheckNameAvailability operation response. */
export declare interface CheckNameAvailabilityResult {
    /**
     * Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nameAvailable?: boolean;
    /**
     * Gets the reason that a storage account name could not be used. The Reason element is only returned if NameAvailable is false.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reason?: Reason;
    /**
     * Gets an error message explaining the Reason value in more detail.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
}

/** An error response from the Storage service. */
export declare interface CloudError {
    /** An error response from the Storage service. */
    error?: CloudErrorBody;
}

/** An error response from the Storage service. */
export declare interface CloudErrorAutoGenerated {
    /** An error response from the Storage service. */
    error?: CloudErrorBodyAutoGenerated;
}

/** An error response from the Storage service. */
export declare interface CloudErrorBody {
    /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
    code?: string;
    /** A message describing the error, intended to be suitable for display in a user interface. */
    message?: string;
    /** The target of the particular error. For example, the name of the property in error. */
    target?: string;
    /** A list of additional details about the error. */
    details?: CloudErrorBody[];
}

/** An error response from the Storage service. */
export declare interface CloudErrorBodyAutoGenerated {
    /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
    code?: string;
    /** A message describing the error, intended to be suitable for display in a user interface. */
    message?: string;
    /** The target of the particular error. For example, the name of the property in error. */
    target?: string;
    /** A list of additional details about the error. */
    details?: CloudErrorBodyAutoGenerated[];
}

/** Specifies a CORS rule for the Blob service. */
export declare interface CorsRule {
    /** Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains */
    allowedOrigins: string[];
    /** Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin. */
    allowedMethods: CorsRuleAllowedMethodsItem[];
    /** Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response. */
    maxAgeInSeconds: number;
    /** Required if CorsRule element is present. A list of response headers to expose to CORS clients. */
    exposedHeaders: string[];
    /** Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request. */
    allowedHeaders: string[];
}

/**
 * Defines values for CorsRuleAllowedMethodsItem. \
 * {@link KnownCorsRuleAllowedMethodsItem} can be used interchangeably with CorsRuleAllowedMethodsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DELETE** \
 * **GET** \
 * **HEAD** \
 * **MERGE** \
 * **POST** \
 * **OPTIONS** \
 * **PUT**
 */
export declare type CorsRuleAllowedMethodsItem = string;

/** Sets the CORS rules. You can include up to five CorsRule elements in the request. */
export declare interface CorsRules {
    /** The List of CORS rules. You can include up to five CorsRule elements in the request. */
    corsRules?: CorsRule[];
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export declare type CreatedByType = string;

/** The custom domain assigned to this storage account. This can be set via Update. */
export declare interface CustomDomain {
    /** Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source. */
    name: string;
    /** Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates. */
    useSubDomainName?: boolean;
}

/** Object to define the number of days after creation. */
export declare interface DateAfterCreation {
    /** Value indicating the age in days after creation */
    daysAfterCreationGreaterThan: number;
}

/** Object to define the number of days after object last modification Or last access. Properties daysAfterModificationGreaterThan and daysAfterLastAccessTimeGreaterThan are mutually exclusive. */
export declare interface DateAfterModification {
    /** Value indicating the age in days after last modification */
    daysAfterModificationGreaterThan?: number;
    /** Value indicating the age in days after last blob access. This property can only be used in conjunction with last access time tracking policy */
    daysAfterLastAccessTimeGreaterThan?: number;
}

/** Defines values for DefaultAction. */
export declare type DefaultAction = "Allow" | "Deny";

/**
 * Defines values for DefaultSharePermission. \
 * {@link KnownDefaultSharePermission} can be used interchangeably with DefaultSharePermission,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **StorageFileDataSmbShareReader** \
 * **StorageFileDataSmbShareContributor** \
 * **StorageFileDataSmbShareElevatedContributor**
 */
export declare type DefaultSharePermission = string;

/** Deleted storage account */
export declare type DeletedAccount = ProxyResource & {
    /**
     * Full resource id of the original storage account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly storageAccountResourceId?: string;
    /**
     * Location of the deleted account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * Can be used to attempt recovering this deleted account via PutStorageAccount API.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly restoreReference?: string;
    /**
     * Creation time of the deleted account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationTime?: string;
    /**
     * Deletion time of the deleted account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletionTime?: string;
};

/** The response from the List Deleted Accounts operation. */
export declare interface DeletedAccountListResult {
    /**
     * Gets the list of deleted accounts and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: DeletedAccount[];
    /**
     * Request URL that can be used to query next page of deleted accounts. Returned when total number of requested deleted accounts exceed maximum page size.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a DeletedAccounts. */
export declare interface DeletedAccounts {
    /**
     * Lists deleted accounts under the subscription.
     * @param options The options parameters.
     */
    list(options?: DeletedAccountsListOptionalParams): PagedAsyncIterableIterator<DeletedAccount>;
    /**
     * Get properties of specified deleted account resource.
     * @param deletedAccountName Name of the deleted storage account.
     * @param location The location of the deleted storage account.
     * @param options The options parameters.
     */
    get(deletedAccountName: string, location: string, options?: DeletedAccountsGetOptionalParams): Promise<DeletedAccountsGetResponse>;
}

/** Optional parameters. */
export declare interface DeletedAccountsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DeletedAccountsGetResponse = DeletedAccount;

/** Optional parameters. */
export declare interface DeletedAccountsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type DeletedAccountsListNextResponse = DeletedAccountListResult;

/** Optional parameters. */
export declare interface DeletedAccountsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type DeletedAccountsListResponse = DeletedAccountListResult;

/** The deleted share to be restored. */
export declare interface DeletedShare {
    /** Required. Identify the name of the deleted share that will be restored. */
    deletedShareName: string;
    /** Required. Identify the version of the deleted share that will be restored. */
    deletedShareVersion: string;
}

/** The service properties for soft delete. */
export declare interface DeleteRetentionPolicy {
    /** Indicates whether DeleteRetentionPolicy is enabled. */
    enabled?: boolean;
    /** Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365. */
    days?: number;
}

/** Dimension of blobs, possibly be blob type or access tier. */
export declare interface Dimension {
    /** Display name of dimension. */
    name?: string;
    /** Display name of dimension. */
    displayName?: string;
}

/**
 * Defines values for DirectoryServiceOptions. \
 * {@link KnownDirectoryServiceOptions} can be used interchangeably with DirectoryServiceOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **AADDS** \
 * **AD**
 */
export declare type DirectoryServiceOptions = string;

/**
 * Defines values for EnabledProtocols. \
 * {@link KnownEnabledProtocols} can be used interchangeably with EnabledProtocols,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SMB** \
 * **NFS**
 */
export declare type EnabledProtocols = string;

/** The encryption settings on the storage account. */
export declare interface Encryption {
    /** List of services which support encryption. */
    services?: EncryptionServices;
    /** The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault */
    keySource: KeySource;
    /** A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest. */
    requireInfrastructureEncryption?: boolean;
    /** Properties provided by key vault. */
    keyVaultProperties?: KeyVaultProperties;
    /** The identity to be used with service-side encryption at rest. */
    encryptionIdentity?: EncryptionIdentity;
}

/** Encryption identity for the storage account. */
export declare interface EncryptionIdentity {
    /** Resource identifier of the UserAssigned identity to be associated with server-side encryption on the storage account. */
    encryptionUserAssignedIdentity?: string;
}

/** The Encryption Scope resource. */
export declare type EncryptionScope = Resource & {
    /** The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault. */
    source?: EncryptionScopeSource;
    /** The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled. */
    state?: EncryptionScopeState;
    /**
     * Gets the creation date and time of the encryption scope in UTC.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationTime?: Date;
    /**
     * Gets the last modification date and time of the encryption scope in UTC.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTime?: Date;
    /** The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'. */
    keyVaultProperties?: EncryptionScopeKeyVaultProperties;
    /** A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest. */
    requireInfrastructureEncryption?: boolean;
};

/** The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'. */
export declare interface EncryptionScopeKeyVaultProperties {
    /** The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope. */
    keyUri?: string;
    /**
     * The object identifier of the current versioned Key Vault Key in use.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentVersionedKeyIdentifier?: string;
    /**
     * Timestamp of last rotation of the Key Vault Key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastKeyRotationTimestamp?: Date;
}

/** List of encryption scopes requested, and if paging is required, a URL to the next page of encryption scopes. */
export declare interface EncryptionScopeListResult {
    /**
     * List of encryption scopes requested.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: EncryptionScope[];
    /**
     * Request URL that can be used to query next page of encryption scopes. Returned when total number of requested encryption scopes exceeds the maximum page size.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a EncryptionScopes. */
export declare interface EncryptionScopes {
    /**
     * Lists all the encryption scopes available under the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: EncryptionScopesListOptionalParams): PagedAsyncIterableIterator<EncryptionScope>;
    /**
     * Synchronously creates or updates an encryption scope under the specified storage account. If an
     * encryption scope is already created and a subsequent request is issued with different properties,
     * the encryption scope properties will be updated per the specified request.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param encryptionScopeName The name of the encryption scope within the specified storage account.
     *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
     *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
     *                            letter or number.
     * @param encryptionScope Encryption scope properties to be used for the create or update.
     * @param options The options parameters.
     */
    put(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: EncryptionScope, options?: EncryptionScopesPutOptionalParams): Promise<EncryptionScopesPutResponse>;
    /**
     * Update encryption scope properties as specified in the request body. Update fails if the specified
     * encryption scope does not already exist.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param encryptionScopeName The name of the encryption scope within the specified storage account.
     *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
     *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
     *                            letter or number.
     * @param encryptionScope Encryption scope properties to be used for the update.
     * @param options The options parameters.
     */
    patch(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: EncryptionScope, options?: EncryptionScopesPatchOptionalParams): Promise<EncryptionScopesPatchResponse>;
    /**
     * Returns the properties for the specified encryption scope.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param encryptionScopeName The name of the encryption scope within the specified storage account.
     *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
     *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
     *                            letter or number.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, encryptionScopeName: string, options?: EncryptionScopesGetOptionalParams): Promise<EncryptionScopesGetResponse>;
}

/** Optional parameters. */
export declare interface EncryptionScopesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type EncryptionScopesGetResponse = EncryptionScope;

/** Optional parameters. */
export declare interface EncryptionScopesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type EncryptionScopesListNextResponse = EncryptionScopeListResult;

/** Optional parameters. */
export declare interface EncryptionScopesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type EncryptionScopesListResponse = EncryptionScopeListResult;

/**
 * Defines values for EncryptionScopeSource. \
 * {@link KnownEncryptionScopeSource} can be used interchangeably with EncryptionScopeSource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Microsoft.Storage** \
 * **Microsoft.KeyVault**
 */
export declare type EncryptionScopeSource = string;

/** Optional parameters. */
export declare interface EncryptionScopesPatchOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the patch operation. */
export declare type EncryptionScopesPatchResponse = EncryptionScope;

/** Optional parameters. */
export declare interface EncryptionScopesPutOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the put operation. */
export declare type EncryptionScopesPutResponse = EncryptionScope;

/**
 * Defines values for EncryptionScopeState. \
 * {@link KnownEncryptionScopeState} can be used interchangeably with EncryptionScopeState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type EncryptionScopeState = string;

/** A service that allows server-side encryption to be used. */
export declare interface EncryptionService {
    /** A boolean indicating whether or not the service encrypts the data as it is stored. */
    enabled?: boolean;
    /**
     * Gets a rough estimate of the date/time when the encryption was last enabled by the user. Only returned when encryption is enabled. There might be some unencrypted blobs which were written after this time, as it is just a rough estimate.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastEnabledTime?: Date;
    /** Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used. */
    keyType?: KeyType_2;
}

/** A list of services that support encryption. */
export declare interface EncryptionServices {
    /** The encryption function of the blob storage service. */
    blob?: EncryptionService;
    /** The encryption function of the file storage service. */
    file?: EncryptionService;
    /** The encryption function of the table storage service. */
    table?: EncryptionService;
    /** The encryption function of the queue storage service. */
    queue?: EncryptionService;
}

/** The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object. */
export declare interface Endpoints {
    /**
     * Gets the blob endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly blob?: string;
    /**
     * Gets the queue endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly queue?: string;
    /**
     * Gets the table endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly table?: string;
    /**
     * Gets the file endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly file?: string;
    /**
     * Gets the web endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly web?: string;
    /**
     * Gets the dfs endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly dfs?: string;
    /** Gets the microsoft routing storage endpoints. */
    microsoftEndpoints?: StorageAccountMicrosoftEndpoints;
    /** Gets the internet routing storage endpoints */
    internetEndpoints?: StorageAccountInternetEndpoints;
}

/** An error response from the storage resource provider. */
export declare interface ErrorResponse {
    /** Azure Storage Resource Provider error response body. */
    error?: ErrorResponseBody;
}

/** Error response body contract. */
export declare interface ErrorResponseBody {
    /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
    code?: string;
    /** A message describing the error, intended to be suitable for display in a user interface. */
    message?: string;
}

/**
 * Defines values for ExpirationAction. \
 * {@link KnownExpirationAction} can be used interchangeably with ExpirationAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Log**
 */
export declare type ExpirationAction = string;

/** The complex type of the extended location. */
export declare interface ExtendedLocation {
    /** The name of the extended location. */
    name?: string;
    /** The type of the extended location. */
    type?: ExtendedLocationTypes;
}

/**
 * Defines values for ExtendedLocationTypes. \
 * {@link KnownExtendedLocationTypes} can be used interchangeably with ExtendedLocationTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EdgeZone**
 */
export declare type ExtendedLocationTypes = string;

export declare interface FileServiceItems {
    /**
     * List of file services returned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: FileServiceProperties[];
}

/** The properties of File services in storage account. */
export declare type FileServiceProperties = Resource & {
    /**
     * Sku name and tier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sku?: Sku;
    /** Specifies CORS rules for the File service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the File service. */
    cors?: CorsRules;
    /** The file service properties for share soft delete. */
    shareDeleteRetentionPolicy?: DeleteRetentionPolicy;
    /** Protocol settings for file service */
    protocolSettings?: ProtocolSettings;
};

/** Interface representing a FileServices. */
export declare interface FileServices {
    /**
     * List all file services in storage accounts
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: FileServicesListOptionalParams): Promise<FileServicesListResponse>;
    /**
     * Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource
     * Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The properties of file services in storage accounts, including CORS (Cross-Origin
     *                   Resource Sharing) rules.
     * @param options The options parameters.
     */
    setServiceProperties(resourceGroupName: string, accountName: string, parameters: FileServiceProperties, options?: FileServicesSetServicePropertiesOptionalParams): Promise<FileServicesSetServicePropertiesResponse>;
    /**
     * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource
     * Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    getServiceProperties(resourceGroupName: string, accountName: string, options?: FileServicesGetServicePropertiesOptionalParams): Promise<FileServicesGetServicePropertiesResponse>;
}

/** Optional parameters. */
export declare interface FileServicesGetServicePropertiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getServiceProperties operation. */
export declare type FileServicesGetServicePropertiesResponse = FileServiceProperties;

/** Optional parameters. */
export declare interface FileServicesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type FileServicesListResponse = FileServiceItems;

/** Optional parameters. */
export declare interface FileServicesSetServicePropertiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the setServiceProperties operation. */
export declare type FileServicesSetServicePropertiesResponse = FileServiceProperties;

/** Properties of the file share, including Id, resource name, resource type, Etag. */
export declare type FileShare = AzureEntityResource & {
    /**
     * Returns the date and time the share was last modified.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTime?: Date;
    /** A name-value pair to associate with the share as metadata. */
    metadata?: {
        [propertyName: string]: string;
    };
    /** The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400. */
    shareQuota?: number;
    /** The authentication protocol that is used for the file share. Can only be specified when creating a share. */
    enabledProtocols?: EnabledProtocols;
    /** The property is for NFS share only. The default is NoRootSquash. */
    rootSquash?: RootSquashType;
    /**
     * The version of the share.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly version?: string;
    /**
     * Indicates whether the share was deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deleted?: boolean;
    /**
     * The deleted time if the share was deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletedTime?: Date;
    /**
     * Remaining retention days for share that was soft deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly remainingRetentionDays?: number;
    /** Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium. */
    accessTier?: ShareAccessTier;
    /**
     * Indicates the last modification time for share access tier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly accessTierChangeTime?: Date;
    /**
     * Indicates if there is a pending transition for access tier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly accessTierStatus?: string;
    /**
     * The approximate size of the data stored on the share. Note that this value may not include all recently created or recently resized files.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly shareUsageBytes?: number;
    /**
     * The lease status of the share.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseStatus?: LeaseStatus;
    /**
     * Lease state of the share.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseState?: LeaseState;
    /**
     * Specifies whether the lease on a share is of infinite or fixed duration, only when the share is leased.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseDuration?: LeaseDuration;
    /** List of stored access policies specified on the share. */
    signedIdentifiers?: SignedIdentifier[];
    /**
     * Creation time of share snapshot returned in the response of list shares with expand param "snapshots".
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly snapshotTime?: Date;
};

/** The file share properties be listed out. */
export declare type FileShareItem = AzureEntityResource & {
    /**
     * Returns the date and time the share was last modified.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTime?: Date;
    /** A name-value pair to associate with the share as metadata. */
    metadata?: {
        [propertyName: string]: string;
    };
    /** The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400. */
    shareQuota?: number;
    /** The authentication protocol that is used for the file share. Can only be specified when creating a share. */
    enabledProtocols?: EnabledProtocols;
    /** The property is for NFS share only. The default is NoRootSquash. */
    rootSquash?: RootSquashType;
    /**
     * The version of the share.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly version?: string;
    /**
     * Indicates whether the share was deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deleted?: boolean;
    /**
     * The deleted time if the share was deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletedTime?: Date;
    /**
     * Remaining retention days for share that was soft deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly remainingRetentionDays?: number;
    /** Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium. */
    accessTier?: ShareAccessTier;
    /**
     * Indicates the last modification time for share access tier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly accessTierChangeTime?: Date;
    /**
     * Indicates if there is a pending transition for access tier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly accessTierStatus?: string;
    /**
     * The approximate size of the data stored on the share. Note that this value may not include all recently created or recently resized files.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly shareUsageBytes?: number;
    /**
     * The lease status of the share.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseStatus?: LeaseStatus;
    /**
     * Lease state of the share.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseState?: LeaseState;
    /**
     * Specifies whether the lease on a share is of infinite or fixed duration, only when the share is leased.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseDuration?: LeaseDuration;
    /** List of stored access policies specified on the share. */
    signedIdentifiers?: SignedIdentifier[];
    /**
     * Creation time of share snapshot returned in the response of list shares with expand param "snapshots".
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly snapshotTime?: Date;
};

/** Response schema. Contains list of shares returned, and if paging is requested or required, a URL to next page of shares. */
export declare interface FileShareItems {
    /**
     * List of file shares returned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: FileShareItem[];
    /**
     * Request URL that can be used to query next page of shares. Returned when total number of requested shares exceed maximum page size.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a FileShares. */
export declare interface FileShares {
    /**
     * Lists all shares.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: FileSharesListOptionalParams): PagedAsyncIterableIterator<FileShareItem>;
    /**
     * Creates a new share under the specified account as described by request body. The share resource
     * includes metadata and properties for that share. It does not include a list of the files contained
     * by the share.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param shareName The name of the file share within the specified storage account. File share names
     *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
     *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
     * @param fileShare Properties of the file share to create.
     * @param options The options parameters.
     */
    create(resourceGroupName: string, accountName: string, shareName: string, fileShare: FileShare, options?: FileSharesCreateOptionalParams): Promise<FileSharesCreateResponse>;
    /**
     * Updates share properties as specified in request body. Properties not mentioned in the request will
     * not be changed. Update fails if the specified share does not already exist.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param shareName The name of the file share within the specified storage account. File share names
     *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
     *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
     * @param fileShare Properties to update for the file share.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, accountName: string, shareName: string, fileShare: FileShare, options?: FileSharesUpdateOptionalParams): Promise<FileSharesUpdateResponse>;
    /**
     * Gets properties of a specified share.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param shareName The name of the file share within the specified storage account. File share names
     *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
     *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, shareName: string, options?: FileSharesGetOptionalParams): Promise<FileSharesGetResponse>;
    /**
     * Deletes specified share under its account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param shareName The name of the file share within the specified storage account. File share names
     *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
     *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, shareName: string, options?: FileSharesDeleteOptionalParams): Promise<void>;
    /**
     * Restore a file share within a valid retention days if share soft delete is enabled
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param shareName The name of the file share within the specified storage account. File share names
     *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
     *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
     * @param deletedShare The deleted share to be restored.
     * @param options The options parameters.
     */
    restore(resourceGroupName: string, accountName: string, shareName: string, deletedShare: DeletedShare, options?: FileSharesRestoreOptionalParams): Promise<void>;
    /**
     * The Lease Share operation establishes and manages a lock on a share for delete operations. The lock
     * duration can be 15 to 60 seconds, or can be infinite.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param shareName The name of the file share within the specified storage account. File share names
     *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
     *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
     * @param options The options parameters.
     */
    lease(resourceGroupName: string, accountName: string, shareName: string, options?: FileSharesLeaseOptionalParams): Promise<FileSharesLeaseResponse>;
}

/** Optional parameters. */
export declare interface FileSharesCreateOptionalParams extends coreClient.OperationOptions {
    /** Optional, used to expand the properties within share's properties. Valid values are: snapshots. Should be passed as a string with delimiter ',' */
    expand?: string;
}

/** Contains response data for the create operation. */
export declare type FileSharesCreateResponse = FileShare;

/** Optional parameters. */
export declare interface FileSharesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Optional, used to delete a snapshot. */
    xMsSnapshot?: string;
    /** Optional. Valid values are: snapshots, leased-snapshots, none. The default value is snapshots. For 'snapshots', the file share is deleted including all of its file share snapshots. If the file share contains leased-snapshots, the deletion fails. For 'leased-snapshots', the file share is deleted included all of its file share snapshots (leased/unleased). For 'none', the file share is deleted if it has no share snapshots. If the file share contains any snapshots (leased or unleased), the deletion fails. */
    include?: string;
}

/** Optional parameters. */
export declare interface FileSharesGetOptionalParams extends coreClient.OperationOptions {
    /** Optional, used to expand the properties within share's properties. Valid values are: stats. Should be passed as a string with delimiter ','. */
    expand?: string;
    /** Optional, used to retrieve properties of a snapshot. */
    xMsSnapshot?: string;
}

/** Contains response data for the get operation. */
export declare type FileSharesGetResponse = FileShare;

/** Defines headers for FileShares_lease operation. */
export declare interface FileSharesLeaseHeaders {
    /** The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. */
    eTag?: string;
}

/** Optional parameters. */
export declare interface FileSharesLeaseOptionalParams extends coreClient.OperationOptions {
    /** Optional. Specify the snapshot time to lease a snapshot. */
    xMsSnapshot?: string;
    /** Lease Share request body. */
    parameters?: LeaseShareRequest;
}

/** Contains response data for the lease operation. */
export declare type FileSharesLeaseResponse = FileSharesLeaseHeaders & LeaseShareResponse;

/** Optional parameters. */
export declare interface FileSharesListNextOptionalParams extends coreClient.OperationOptions {
    /** Optional. Specified maximum number of shares that can be included in the list. */
    maxpagesize?: string;
    /** Optional. When specified, only share names starting with the filter will be listed. */
    filter?: string;
    /** Optional, used to expand the properties within share's properties. Valid values are: deleted, snapshots. Should be passed as a string with delimiter ',' */
    expand?: string;
}

/** Contains response data for the listNext operation. */
export declare type FileSharesListNextResponse = FileShareItems;

/** Optional parameters. */
export declare interface FileSharesListOptionalParams extends coreClient.OperationOptions {
    /** Optional. Specified maximum number of shares that can be included in the list. */
    maxpagesize?: string;
    /** Optional. When specified, only share names starting with the filter will be listed. */
    filter?: string;
    /** Optional, used to expand the properties within share's properties. Valid values are: deleted, snapshots. Should be passed as a string with delimiter ',' */
    expand?: string;
}

/** Contains response data for the list operation. */
export declare type FileSharesListResponse = FileShareItems;

/** Optional parameters. */
export declare interface FileSharesRestoreOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface FileSharesUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type FileSharesUpdateResponse = FileShare;

/**
 * Defines values for Format. \
 * {@link KnownFormat} can be used interchangeably with Format,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Csv** \
 * **Parquet**
 */
export declare type Format = string;

/** Statistics related to replication for storage account's Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account. */
export declare interface GeoReplicationStats {
    /**
     * The status of the secondary location. Possible values are: - Live: Indicates that the secondary location is active and operational. - Bootstrap: Indicates initial synchronization from the primary location to the secondary location is in progress.This typically occurs when replication is first enabled. - Unavailable: Indicates that the secondary location is temporarily unavailable.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: GeoReplicationStatus;
    /**
     * All primary writes preceding this UTC date/time value are guaranteed to be available for read operations. Primary writes following this point in time may or may not be available for reads. Element may be default value if value of LastSyncTime is not available, this can happen if secondary is offline or we are in bootstrap.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastSyncTime?: Date;
    /**
     * A boolean flag which indicates whether or not account failover is supported for the account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly canFailover?: boolean;
}

/**
 * Defines values for GeoReplicationStatus. \
 * {@link KnownGeoReplicationStatus} can be used interchangeably with GeoReplicationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Live** \
 * **Bootstrap** \
 * **Unavailable**
 */
export declare type GeoReplicationStatus = string;

/** Defines values for HttpProtocol. */
export declare type HttpProtocol = "https,http" | "https";

/** Identity for the resource. */
export declare interface Identity {
    /**
     * The principal ID of resource identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The tenant ID of resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /** The identity type. */
    type: IdentityType;
    /** Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here. */
    userAssignedIdentities?: {
        [propertyName: string]: UserAssignedIdentity;
    };
}

/**
 * Defines values for IdentityType. \
 * {@link KnownIdentityType} can be used interchangeably with IdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned,UserAssigned**
 */
export declare type IdentityType = string;

/** The ImmutabilityPolicy property of a blob container, including Id, resource name, resource type, Etag. */
export declare type ImmutabilityPolicy = AzureEntityResource & {
    /** The immutability period for the blobs in the container since the policy creation, in days. */
    immutabilityPeriodSinceCreationInDays?: number;
    /**
     * The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: ImmutabilityPolicyState;
    /** This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. */
    allowProtectedAppendWrites?: boolean;
    /** This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive. */
    allowProtectedAppendWritesAll?: boolean;
};

/** The properties of an ImmutabilityPolicy of a blob container. */
export declare interface ImmutabilityPolicyProperties {
    /**
     * ImmutabilityPolicy Etag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The ImmutabilityPolicy update history of the blob container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly updateHistory?: UpdateHistoryProperty[];
    /** The immutability period for the blobs in the container since the policy creation, in days. */
    immutabilityPeriodSinceCreationInDays?: number;
    /**
     * The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: ImmutabilityPolicyState;
    /** This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. */
    allowProtectedAppendWrites?: boolean;
    /** This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive. */
    allowProtectedAppendWritesAll?: boolean;
}

/**
 * Defines values for ImmutabilityPolicyState. \
 * {@link KnownImmutabilityPolicyState} can be used interchangeably with ImmutabilityPolicyState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Locked** \
 * **Unlocked**
 */
export declare type ImmutabilityPolicyState = string;

/**
 * Defines values for ImmutabilityPolicyUpdateType. \
 * {@link KnownImmutabilityPolicyUpdateType} can be used interchangeably with ImmutabilityPolicyUpdateType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **put** \
 * **lock** \
 * **extend**
 */
export declare type ImmutabilityPolicyUpdateType = string;

/** This property enables and defines account-level immutability. Enabling the feature auto-enables Blob Versioning. */
export declare interface ImmutableStorageAccount {
    /** A boolean flag which enables account-level immutability. All the containers under such an account have object-level immutability enabled by default. */
    enabled?: boolean;
    /** Specifies the default account-level immutability policy which is inherited and applied to objects that do not possess an explicit immutability policy at the object level. The object-level immutability policy has higher precedence than the container-level immutability policy, which has a higher precedence than the account-level immutability policy. */
    immutabilityPolicy?: AccountImmutabilityPolicyProperties;
}

/** Object level immutability properties of the container. */
export declare interface ImmutableStorageWithVersioning {
    /** This is an immutable property, when set to true it enables object level immutability at the container level. */
    enabled?: boolean;
    /**
     * Returns the date and time the object level immutability was enabled.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timeStamp?: Date;
    /**
     * This property denotes the container level immutability to object level immutability migration state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly migrationState?: MigrationState;
}

/**
 * Defines values for InventoryRuleType. \
 * {@link KnownInventoryRuleType} can be used interchangeably with InventoryRuleType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Inventory**
 */
export declare type InventoryRuleType = string;

/** IP rule with specific IP or IP range in CIDR format. */
export declare interface IPRule {
    /** Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed. */
    iPAddressOrRange: string;
    /** The action of IP ACL rule. */
    action?: "Allow";
}

/** Storage account keys creation time. */
export declare interface KeyCreationTime {
    key1?: Date;
    key2?: Date;
}

/** Defines values for KeyPermission. */
export declare type KeyPermission = "Read" | "Full";

/** KeyPolicy assigned to the storage account. */
export declare interface KeyPolicy {
    /** The key expiration period in days. */
    keyExpirationPeriodInDays: number;
}

/**
 * Defines values for KeySource. \
 * {@link KnownKeySource} can be used interchangeably with KeySource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Microsoft.Storage** \
 * **Microsoft.Keyvault**
 */
export declare type KeySource = string;

/**
 * Defines values for KeyType. \
 * {@link KnownKeyType} can be used interchangeably with KeyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Service** \
 * **Account**
 */
declare type KeyType_2 = string;
export { KeyType_2 as KeyType }

/** Properties of key vault. */
export declare interface KeyVaultProperties {
    /** The name of KeyVault key. */
    keyName?: string;
    /** The version of KeyVault key. */
    keyVersion?: string;
    /** The Uri of KeyVault. */
    keyVaultUri?: string;
    /**
     * The object identifier of the current versioned Key Vault Key in use.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentVersionedKeyIdentifier?: string;
    /**
     * Timestamp of last rotation of the Key Vault Key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastKeyRotationTimestamp?: Date;
}

/**
 * Defines values for Kind. \
 * {@link KnownKind} can be used interchangeably with Kind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Storage** \
 * **StorageV2** \
 * **BlobStorage** \
 * **FileStorage** \
 * **BlockBlobStorage**
 */
export declare type Kind = string;

/** Known values of {@link AccountImmutabilityPolicyState} that the service accepts. */
export declare enum KnownAccountImmutabilityPolicyState {
    Unlocked = "Unlocked",
    Locked = "Locked",
    Disabled = "Disabled"
}

/** Known values of {@link BlobInventoryPolicyName} that the service accepts. */
export declare enum KnownBlobInventoryPolicyName {
    Default = "default"
}

/** Known values of {@link BlobRestoreProgressStatus} that the service accepts. */
export declare enum KnownBlobRestoreProgressStatus {
    InProgress = "InProgress",
    Complete = "Complete",
    Failed = "Failed"
}

/** Known values of {@link Bypass} that the service accepts. */
export declare enum KnownBypass {
    None = "None",
    Logging = "Logging",
    Metrics = "Metrics",
    AzureServices = "AzureServices"
}

/** Known values of {@link CorsRuleAllowedMethodsItem} that the service accepts. */
export declare enum KnownCorsRuleAllowedMethodsItem {
    Delete = "DELETE",
    GET = "GET",
    Head = "HEAD",
    Merge = "MERGE",
    Post = "POST",
    Options = "OPTIONS",
    PUT = "PUT"
}

/** Known values of {@link CreatedByType} that the service accepts. */
export declare enum KnownCreatedByType {
    User = "User",
    Application = "Application",
    ManagedIdentity = "ManagedIdentity",
    Key = "Key"
}

/** Known values of {@link DefaultSharePermission} that the service accepts. */
export declare enum KnownDefaultSharePermission {
    None = "None",
    StorageFileDataSmbShareReader = "StorageFileDataSmbShareReader",
    StorageFileDataSmbShareContributor = "StorageFileDataSmbShareContributor",
    StorageFileDataSmbShareElevatedContributor = "StorageFileDataSmbShareElevatedContributor"
}

/** Known values of {@link DirectoryServiceOptions} that the service accepts. */
export declare enum KnownDirectoryServiceOptions {
    None = "None",
    Aadds = "AADDS",
    AD = "AD"
}

/** Known values of {@link EnabledProtocols} that the service accepts. */
export declare enum KnownEnabledProtocols {
    SMB = "SMB",
    NFS = "NFS"
}

/** Known values of {@link EncryptionScopeSource} that the service accepts. */
export declare enum KnownEncryptionScopeSource {
    MicrosoftStorage = "Microsoft.Storage",
    MicrosoftKeyVault = "Microsoft.KeyVault"
}

/** Known values of {@link EncryptionScopeState} that the service accepts. */
export declare enum KnownEncryptionScopeState {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link ExpirationAction} that the service accepts. */
export declare enum KnownExpirationAction {
    Log = "Log"
}

/** Known values of {@link ExtendedLocationTypes} that the service accepts. */
export declare enum KnownExtendedLocationTypes {
    EdgeZone = "EdgeZone"
}

/** Known values of {@link Format} that the service accepts. */
export declare enum KnownFormat {
    Csv = "Csv",
    Parquet = "Parquet"
}

/** Known values of {@link GeoReplicationStatus} that the service accepts. */
export declare enum KnownGeoReplicationStatus {
    Live = "Live",
    Bootstrap = "Bootstrap",
    Unavailable = "Unavailable"
}

/** Known values of {@link IdentityType} that the service accepts. */
export declare enum KnownIdentityType {
    None = "None",
    SystemAssigned = "SystemAssigned",
    UserAssigned = "UserAssigned",
    SystemAssignedUserAssigned = "SystemAssigned,UserAssigned"
}

/** Known values of {@link ImmutabilityPolicyState} that the service accepts. */
export declare enum KnownImmutabilityPolicyState {
    Locked = "Locked",
    Unlocked = "Unlocked"
}

/** Known values of {@link ImmutabilityPolicyUpdateType} that the service accepts. */
export declare enum KnownImmutabilityPolicyUpdateType {
    Put = "put",
    Lock = "lock",
    Extend = "extend"
}

/** Known values of {@link InventoryRuleType} that the service accepts. */
export declare enum KnownInventoryRuleType {
    Inventory = "Inventory"
}

/** Known values of {@link KeySource} that the service accepts. */
export declare enum KnownKeySource {
    MicrosoftStorage = "Microsoft.Storage",
    MicrosoftKeyvault = "Microsoft.Keyvault"
}

/** Known values of {@link KeyType} that the service accepts. */
export declare enum KnownKeyType {
    Service = "Service",
    Account = "Account"
}

/** Known values of {@link Kind} that the service accepts. */
export declare enum KnownKind {
    Storage = "Storage",
    StorageV2 = "StorageV2",
    BlobStorage = "BlobStorage",
    FileStorage = "FileStorage",
    BlockBlobStorage = "BlockBlobStorage"
}

/** Known values of {@link LargeFileSharesState} that the service accepts. */
export declare enum KnownLargeFileSharesState {
    Disabled = "Disabled",
    Enabled = "Enabled"
}

/** Known values of {@link LeaseContainerRequestAction} that the service accepts. */
export declare enum KnownLeaseContainerRequestAction {
    Acquire = "Acquire",
    Renew = "Renew",
    Change = "Change",
    Release = "Release",
    Break = "Break"
}

/** Known values of {@link LeaseDuration} that the service accepts. */
export declare enum KnownLeaseDuration {
    Infinite = "Infinite",
    Fixed = "Fixed"
}

/** Known values of {@link LeaseShareAction} that the service accepts. */
export declare enum KnownLeaseShareAction {
    Acquire = "Acquire",
    Renew = "Renew",
    Change = "Change",
    Release = "Release",
    Break = "Break"
}

/** Known values of {@link LeaseState} that the service accepts. */
export declare enum KnownLeaseState {
    Available = "Available",
    Leased = "Leased",
    Expired = "Expired",
    Breaking = "Breaking",
    Broken = "Broken"
}

/** Known values of {@link LeaseStatus} that the service accepts. */
export declare enum KnownLeaseStatus {
    Locked = "Locked",
    Unlocked = "Unlocked"
}

/** Known values of {@link ListContainersInclude} that the service accepts. */
export declare enum KnownListContainersInclude {
    Deleted = "deleted"
}

/** Known values of {@link ManagementPolicyName} that the service accepts. */
export declare enum KnownManagementPolicyName {
    Default = "default"
}

/** Known values of {@link MigrationState} that the service accepts. */
export declare enum KnownMigrationState {
    InProgress = "InProgress",
    Completed = "Completed"
}

/** Known values of {@link MinimumTlsVersion} that the service accepts. */
export declare enum KnownMinimumTlsVersion {
    TLS10 = "TLS1_0",
    TLS11 = "TLS1_1",
    TLS12 = "TLS1_2"
}

/** Known values of {@link Name} that the service accepts. */
export declare enum KnownName {
    AccessTimeTracking = "AccessTimeTracking"
}

/** Known values of {@link ObjectType} that the service accepts. */
export declare enum KnownObjectType {
    Blob = "Blob",
    Container = "Container"
}

/** Known values of {@link Permissions} that the service accepts. */
export declare enum KnownPermissions {
    R = "r",
    D = "d",
    W = "w",
    L = "l",
    A = "a",
    C = "c",
    U = "u",
    P = "p"
}

/** Known values of {@link PrivateEndpointConnectionProvisioningState} that the service accepts. */
export declare enum KnownPrivateEndpointConnectionProvisioningState {
    Succeeded = "Succeeded",
    Creating = "Creating",
    Deleting = "Deleting",
    Failed = "Failed"
}

/** Known values of {@link PrivateEndpointServiceConnectionStatus} that the service accepts. */
export declare enum KnownPrivateEndpointServiceConnectionStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected"
}

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export declare enum KnownPublicNetworkAccess {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link ReasonCode} that the service accepts. */
export declare enum KnownReasonCode {
    QuotaId = "QuotaId",
    NotAvailableForSubscription = "NotAvailableForSubscription"
}

/** Known values of {@link RootSquashType} that the service accepts. */
export declare enum KnownRootSquashType {
    NoRootSquash = "NoRootSquash",
    RootSquash = "RootSquash",
    AllSquash = "AllSquash"
}

/** Known values of {@link RoutingChoice} that the service accepts. */
export declare enum KnownRoutingChoice {
    MicrosoftRouting = "MicrosoftRouting",
    InternetRouting = "InternetRouting"
}

/** Known values of {@link RuleType} that the service accepts. */
export declare enum KnownRuleType {
    Lifecycle = "Lifecycle"
}

/** Known values of {@link Schedule} that the service accepts. */
export declare enum KnownSchedule {
    Daily = "Daily",
    Weekly = "Weekly"
}

/** Known values of {@link Services} that the service accepts. */
export declare enum KnownServices {
    B = "b",
    Q = "q",
    T = "t",
    F = "f"
}

/** Known values of {@link ShareAccessTier} that the service accepts. */
export declare enum KnownShareAccessTier {
    TransactionOptimized = "TransactionOptimized",
    Hot = "Hot",
    Cool = "Cool",
    Premium = "Premium"
}

/** Known values of {@link SignedResource} that the service accepts. */
export declare enum KnownSignedResource {
    B = "b",
    C = "c",
    F = "f",
    S = "s"
}

/** Known values of {@link SignedResourceTypes} that the service accepts. */
export declare enum KnownSignedResourceTypes {
    S = "s",
    C = "c",
    O = "o"
}

/** Known values of {@link SkuName} that the service accepts. */
export declare enum KnownSkuName {
    StandardLRS = "Standard_LRS",
    StandardGRS = "Standard_GRS",
    StandardRagrs = "Standard_RAGRS",
    StandardZRS = "Standard_ZRS",
    PremiumLRS = "Premium_LRS",
    PremiumZRS = "Premium_ZRS",
    StandardGzrs = "Standard_GZRS",
    StandardRagzrs = "Standard_RAGZRS"
}

/** Known values of {@link State} that the service accepts. */
export declare enum KnownState {
    Provisioning = "Provisioning",
    Deprovisioning = "Deprovisioning",
    Succeeded = "Succeeded",
    Failed = "Failed",
    NetworkSourceDeleted = "NetworkSourceDeleted"
}

/**
 * Defines values for LargeFileSharesState. \
 * {@link KnownLargeFileSharesState} can be used interchangeably with LargeFileSharesState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export declare type LargeFileSharesState = string;

/** The blob service properties for Last access time based tracking policy. */
export declare interface LastAccessTimeTrackingPolicy {
    /** When set to true last access time based tracking is enabled. */
    enable: boolean;
    /** Name of the policy. The valid value is AccessTimeTracking. This field is currently read only */
    name?: Name;
    /** The field specifies blob object tracking granularity in days, typically how often the blob object should be tracked.This field is currently read only with value as 1 */
    trackingGranularityInDays?: number;
    /** An array of predefined supported blob types. Only blockBlob is the supported value. This field is currently read only */
    blobType?: string[];
}

/** Lease Container request schema. */
export declare interface LeaseContainerRequest {
    /** Specifies the lease action. Can be one of the available actions. */
    action: LeaseContainerRequestAction;
    /** Identifies the lease. Can be specified in any valid GUID string format. */
    leaseId?: string;
    /** Optional. For a break action, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60. */
    breakPeriod?: number;
    /** Required for acquire. Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. */
    leaseDuration?: number;
    /** Optional for acquire, required for change. Proposed lease ID, in a GUID string format. */
    proposedLeaseId?: string;
}

/**
 * Defines values for LeaseContainerRequestAction. \
 * {@link KnownLeaseContainerRequestAction} can be used interchangeably with LeaseContainerRequestAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Acquire** \
 * **Renew** \
 * **Change** \
 * **Release** \
 * **Break**
 */
export declare type LeaseContainerRequestAction = string;

/** Lease Container response schema. */
export declare interface LeaseContainerResponse {
    /** Returned unique lease ID that must be included with any request to delete the container, or to renew, change, or release the lease. */
    leaseId?: string;
    /** Approximate time remaining in the lease period, in seconds. */
    leaseTimeSeconds?: string;
}

/**
 * Defines values for LeaseDuration. \
 * {@link KnownLeaseDuration} can be used interchangeably with LeaseDuration,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Infinite** \
 * **Fixed**
 */
export declare type LeaseDuration = string;

/**
 * Defines values for LeaseShareAction. \
 * {@link KnownLeaseShareAction} can be used interchangeably with LeaseShareAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Acquire** \
 * **Renew** \
 * **Change** \
 * **Release** \
 * **Break**
 */
export declare type LeaseShareAction = string;

/** Lease Share request schema. */
export declare interface LeaseShareRequest {
    /** Specifies the lease action. Can be one of the available actions. */
    action: LeaseShareAction;
    /** Identifies the lease. Can be specified in any valid GUID string format. */
    leaseId?: string;
    /** Optional. For a break action, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60. */
    breakPeriod?: number;
    /** Required for acquire. Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. */
    leaseDuration?: number;
    /** Optional for acquire, required for change. Proposed lease ID, in a GUID string format. */
    proposedLeaseId?: string;
}

/** Lease Share response schema. */
export declare interface LeaseShareResponse {
    /** Returned unique lease ID that must be included with any request to delete the share, or to renew, change, or release the lease. */
    leaseId?: string;
    /** Approximate time remaining in the lease period, in seconds. */
    leaseTimeSeconds?: string;
}

/**
 * Defines values for LeaseState. \
 * {@link KnownLeaseState} can be used interchangeably with LeaseState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Available** \
 * **Leased** \
 * **Expired** \
 * **Breaking** \
 * **Broken**
 */
export declare type LeaseState = string;

/**
 * Defines values for LeaseStatus. \
 * {@link KnownLeaseStatus} can be used interchangeably with LeaseStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Locked** \
 * **Unlocked**
 */
export declare type LeaseStatus = string;

/** The LegalHold property of a blob container. */
export declare interface LegalHold {
    /**
     * The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasLegalHold?: boolean;
    /** Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case at SRP. */
    tags: string[];
    /** When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining legal hold protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. */
    allowProtectedAppendWritesAll?: boolean;
}

/** The LegalHold property of a blob container. */
export declare interface LegalHoldProperties {
    /**
     * The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasLegalHold?: boolean;
    /** The list of LegalHold tags of a blob container. */
    tags?: TagProperty[];
    /** Protected append blob writes history. */
    protectedAppendWritesHistory?: ProtectedAppendWritesHistory;
}

/** The List SAS credentials operation response. */
export declare interface ListAccountSasResponse {
    /**
     * List SAS credentials of storage account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly accountSasToken?: string;
}

/** List of blob inventory policies returned. */
export declare interface ListBlobInventoryPolicy {
    /**
     * List of blob inventory policies.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: BlobInventoryPolicy[];
}

/** The blob container properties be listed out. */
export declare type ListContainerItem = AzureEntityResource & {
    /**
     * The version of the deleted blob container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly version?: string;
    /**
     * Indicates whether the blob container was deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deleted?: boolean;
    /**
     * Blob container deletion time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletedTime?: Date;
    /**
     * Remaining retention days for soft deleted blob container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly remainingRetentionDays?: number;
    /** Default the container to use specified encryption scope for all writes. */
    defaultEncryptionScope?: string;
    /** Block override of encryption scope from the container default. */
    denyEncryptionScopeOverride?: boolean;
    /** Specifies whether data in the container may be accessed publicly and the level of access. */
    publicAccess?: PublicAccess;
    /**
     * Returns the date and time the container was last modified.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTime?: Date;
    /**
     * The lease status of the container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseStatus?: LeaseStatus;
    /**
     * Lease state of the container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseState?: LeaseState;
    /**
     * Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly leaseDuration?: LeaseDuration;
    /** A name-value pair to associate with the container as metadata. */
    metadata?: {
        [propertyName: string]: string;
    };
    /**
     * The ImmutabilityPolicy property of the container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly immutabilityPolicy?: ImmutabilityPolicyProperties;
    /**
     * The LegalHold property of the container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly legalHold?: LegalHoldProperties;
    /**
     * The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasLegalHold?: boolean;
    /**
     * The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasImmutabilityPolicy?: boolean;
    /** The object level immutability property of the container. The property is immutable and can only be set to true at the container creation time. Existing containers must undergo a migration process. */
    immutableStorageWithVersioning?: ImmutableStorageWithVersioning;
    /** Enable NFSv3 root squash on blob container. */
    enableNfsV3RootSquash?: boolean;
    /** Enable NFSv3 all squash on blob container. */
    enableNfsV3AllSquash?: boolean;
};

/** Response schema. Contains list of blobs returned, and if paging is requested or required, a URL to next page of containers. */
export declare interface ListContainerItems {
    /**
     * List of blobs containers returned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ListContainerItem[];
    /**
     * Request URL that can be used to query next page of containers. Returned when total number of requested containers exceed maximum page size.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for ListContainersInclude. \
 * {@link KnownListContainersInclude} can be used interchangeably with ListContainersInclude,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **deleted**
 */
export declare type ListContainersInclude = string;

export declare type ListQueue = Resource & {
    /** A name-value pair that represents queue metadata. */
    metadata?: {
        [propertyName: string]: string;
    };
};

/** Response schema. Contains list of queues returned */
export declare interface ListQueueResource {
    /**
     * List of queues returned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ListQueue[];
    /**
     * Request URL that can be used to list next page of queues
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

export declare interface ListQueueServices {
    /**
     * List of queue services returned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: QueueServiceProperties[];
}

/** The List service SAS credentials operation response. */
export declare interface ListServiceSasResponse {
    /**
     * List service SAS credentials of specific resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceSasToken?: string;
}

/** Response schema. Contains list of tables returned */
export declare interface ListTableResource {
    /**
     * List of tables returned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: Table[];
    /**
     * Request URL that can be used to query next page of tables
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

export declare interface ListTableServices {
    /**
     * List of table services returned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: TableServiceProperties[];
}

/** Interface representing a ManagementPolicies. */
export declare interface ManagementPolicies {
    /**
     * Gets the managementpolicy associated with the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param managementPolicyName The name of the Storage Account Management Policy. It should always be
     *                             'default'
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, managementPolicyName: ManagementPolicyName, options?: ManagementPoliciesGetOptionalParams): Promise<ManagementPoliciesGetResponse>;
    /**
     * Sets the managementpolicy to the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param managementPolicyName The name of the Storage Account Management Policy. It should always be
     *                             'default'
     * @param properties The ManagementPolicy set to a storage account.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, accountName: string, managementPolicyName: ManagementPolicyName, properties: ManagementPolicy, options?: ManagementPoliciesCreateOrUpdateOptionalParams): Promise<ManagementPoliciesCreateOrUpdateResponse>;
    /**
     * Deletes the managementpolicy associated with the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param managementPolicyName The name of the Storage Account Management Policy. It should always be
     *                             'default'
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, managementPolicyName: ManagementPolicyName, options?: ManagementPoliciesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ManagementPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagementPoliciesCreateOrUpdateResponse = ManagementPolicy;

/** Optional parameters. */
export declare interface ManagementPoliciesDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagementPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagementPoliciesGetResponse = ManagementPolicy;

/** The Get Storage Account ManagementPolicies operation response. */
export declare type ManagementPolicy = Resource & {
    /**
     * Returns the date and time the ManagementPolicies was last modified.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTime?: Date;
    /** The Storage Account ManagementPolicy, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
    policy?: ManagementPolicySchema;
};

/** Actions are applied to the filtered blobs when the execution condition is met. */
export declare interface ManagementPolicyAction {
    /** The management policy action for base blob */
    baseBlob?: ManagementPolicyBaseBlob;
    /** The management policy action for snapshot */
    snapshot?: ManagementPolicySnapShot;
    /** The management policy action for version */
    version?: ManagementPolicyVersion;
}

/** Management policy action for base blob. */
export declare interface ManagementPolicyBaseBlob {
    /** The function to tier blobs to cool storage. Support blobs currently at Hot tier */
    tierToCool?: DateAfterModification;
    /** The function to tier blobs to archive storage. Support blobs currently at Hot or Cool tier */
    tierToArchive?: DateAfterModification;
    /** The function to delete the blob */
    delete?: DateAfterModification;
    /** This property enables auto tiering of a blob from cool to hot on a blob access. This property requires tierToCool.daysAfterLastAccessTimeGreaterThan. */
    enableAutoTierToHotFromCool?: boolean;
}

/** An object that defines the Lifecycle rule. Each definition is made up with a filters set and an actions set. */
export declare interface ManagementPolicyDefinition {
    /** An object that defines the action set. */
    actions: ManagementPolicyAction;
    /** An object that defines the filter set. */
    filters?: ManagementPolicyFilter;
}

/** Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters. */
export declare interface ManagementPolicyFilter {
    /** An array of strings for prefixes to be match. */
    prefixMatch?: string[];
    /** An array of predefined enum values. Currently blockBlob supports all tiering and delete actions. Only delete actions are supported for appendBlob. */
    blobTypes: string[];
    /** An array of blob index tag based filters, there can be at most 10 tag filters */
    blobIndexMatch?: TagFilter[];
}

/**
 * Defines values for ManagementPolicyName. \
 * {@link KnownManagementPolicyName} can be used interchangeably with ManagementPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type ManagementPolicyName = string;

/** An object that wraps the Lifecycle rule. Each rule is uniquely defined by name. */
export declare interface ManagementPolicyRule {
    /** Rule is enabled if set to true. */
    enabled?: boolean;
    /** A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy. */
    name: string;
    /** The valid value is Lifecycle */
    type: RuleType;
    /** An object that defines the Lifecycle rule. */
    definition: ManagementPolicyDefinition;
}

/** The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
export declare interface ManagementPolicySchema {
    /** The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
    rules: ManagementPolicyRule[];
}

/** Management policy action for snapshot. */
export declare interface ManagementPolicySnapShot {
    /** The function to tier blob snapshot to cool storage. Support blob snapshot currently at Hot tier */
    tierToCool?: DateAfterCreation;
    /** The function to tier blob snapshot to archive storage. Support blob snapshot currently at Hot or Cool tier */
    tierToArchive?: DateAfterCreation;
    /** The function to delete the blob snapshot */
    delete?: DateAfterCreation;
}

/** Management policy action for blob version. */
export declare interface ManagementPolicyVersion {
    /** The function to tier blob version to cool storage. Support blob version currently at Hot tier */
    tierToCool?: DateAfterCreation;
    /** The function to tier blob version to archive storage. Support blob version currently at Hot or Cool tier */
    tierToArchive?: DateAfterCreation;
    /** The function to delete the blob version */
    delete?: DateAfterCreation;
}

/** Metric specification of operation. */
export declare interface MetricSpecification {
    /** Name of metric specification. */
    name?: string;
    /** Display name of metric specification. */
    displayName?: string;
    /** Display description of metric specification. */
    displayDescription?: string;
    /** Unit could be Bytes or Count. */
    unit?: string;
    /** Dimensions of blobs, including blob type and access tier. */
    dimensions?: Dimension[];
    /** Aggregation type could be Average. */
    aggregationType?: string;
    /** The property to decide fill gap with zero or not. */
    fillGapWithZero?: boolean;
    /** The category this metric specification belong to, could be Capacity. */
    category?: string;
    /** Account Resource Id. */
    resourceIdDimensionNameOverride?: string;
}

/**
 * Defines values for MigrationState. \
 * {@link KnownMigrationState} can be used interchangeably with MigrationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InProgress** \
 * **Completed**
 */
export declare type MigrationState = string;

/**
 * Defines values for MinimumTlsVersion. \
 * {@link KnownMinimumTlsVersion} can be used interchangeably with MinimumTlsVersion,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TLS1_0** \
 * **TLS1_1** \
 * **TLS1_2**
 */
export declare type MinimumTlsVersion = string;

/** Multichannel setting. Applies to Premium FileStorage only. */
export declare interface Multichannel {
    /** Indicates whether multichannel is enabled */
    enabled?: boolean;
}

/**
 * Defines values for Name. \
 * {@link KnownName} can be used interchangeably with Name,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AccessTimeTracking**
 */
export declare type Name = string;

/** Network rule set */
export declare interface NetworkRuleSet {
    /** Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics. */
    bypass?: Bypass;
    /** Sets the resource access rules */
    resourceAccessRules?: ResourceAccessRule[];
    /** Sets the virtual network rules */
    virtualNetworkRules?: VirtualNetworkRule[];
    /** Sets the IP ACL rules */
    ipRules?: IPRule[];
    /** Specifies the default action of allow or deny when no other rules match. */
    defaultAction: DefaultAction;
}

/** List storage account object replication policies. */
export declare interface ObjectReplicationPolicies {
    /** The replication policy between two storage accounts. */
    value?: ObjectReplicationPolicy[];
}

/** Optional parameters. */
export declare interface ObjectReplicationPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ObjectReplicationPoliciesCreateOrUpdateResponse = ObjectReplicationPolicy;

/** Optional parameters. */
export declare interface ObjectReplicationPoliciesDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ObjectReplicationPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ObjectReplicationPoliciesGetResponse = ObjectReplicationPolicy;

/** Optional parameters. */
export declare interface ObjectReplicationPoliciesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ObjectReplicationPoliciesListResponse = ObjectReplicationPolicies;

/** Interface representing a ObjectReplicationPoliciesOperations. */
export declare interface ObjectReplicationPoliciesOperations {
    /**
     * List the object replication policies associated with the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: ObjectReplicationPoliciesListOptionalParams): PagedAsyncIterableIterator<ObjectReplicationPolicy>;
    /**
     * Get the object replication policy of the storage account by policy ID.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param objectReplicationPolicyId For the destination account, provide the value 'default'. Configure
     *                                  the policy on the destination account first. For the source account, provide the value of the policy
     *                                  ID that is returned when you download the policy that was defined on the destination account. The
     *                                  policy is downloaded as a JSON file.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, objectReplicationPolicyId: string, options?: ObjectReplicationPoliciesGetOptionalParams): Promise<ObjectReplicationPoliciesGetResponse>;
    /**
     * Create or update the object replication policy of the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param objectReplicationPolicyId For the destination account, provide the value 'default'. Configure
     *                                  the policy on the destination account first. For the source account, provide the value of the policy
     *                                  ID that is returned when you download the policy that was defined on the destination account. The
     *                                  policy is downloaded as a JSON file.
     * @param properties The object replication policy set to a storage account. A unique policy ID will be
     *                   created if absent.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, accountName: string, objectReplicationPolicyId: string, properties: ObjectReplicationPolicy, options?: ObjectReplicationPoliciesCreateOrUpdateOptionalParams): Promise<ObjectReplicationPoliciesCreateOrUpdateResponse>;
    /**
     * Deletes the object replication policy associated with the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param objectReplicationPolicyId For the destination account, provide the value 'default'. Configure
     *                                  the policy on the destination account first. For the source account, provide the value of the policy
     *                                  ID that is returned when you download the policy that was defined on the destination account. The
     *                                  policy is downloaded as a JSON file.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, objectReplicationPolicyId: string, options?: ObjectReplicationPoliciesDeleteOptionalParams): Promise<void>;
}

/** The replication policy between two storage accounts. Multiple rules can be defined in one policy. */
export declare type ObjectReplicationPolicy = Resource & {
    /**
     * A unique id for object replication policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly policyId?: string;
    /**
     * Indicates when the policy is enabled on the source account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly enabledTime?: Date;
    /** Required. Source account name. It should be full resource id if allowCrossTenantReplication set to false. */
    sourceAccount?: string;
    /** Required. Destination account name. It should be full resource id if allowCrossTenantReplication set to false. */
    destinationAccount?: string;
    /** The storage account object replication rules. */
    rules?: ObjectReplicationPolicyRule[];
};

/** Filters limit replication to a subset of blobs within the storage account. A logical OR is performed on values in the filter. If multiple filters are defined, a logical AND is performed on all filters. */
export declare interface ObjectReplicationPolicyFilter {
    /** Optional. Filters the results to replicate only blobs whose names begin with the specified prefix. */
    prefixMatch?: string[];
    /** Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z */
    minCreationTime?: string;
}

/** The replication policy rule between two containers. */
export declare interface ObjectReplicationPolicyRule {
    /** Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account. */
    ruleId?: string;
    /** Required. Source container name. */
    sourceContainer: string;
    /** Required. Destination container name. */
    destinationContainer: string;
    /** Optional. An object that defines the filter set. */
    filters?: ObjectReplicationPolicyFilter;
}

/**
 * Defines values for ObjectType. \
 * {@link KnownObjectType} can be used interchangeably with ObjectType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Blob** \
 * **Container**
 */
export declare type ObjectType = string;

/** Storage REST API operation definition. */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** Display metadata associated with the operation. */
    display?: OperationDisplay;
    /** The origin of operations. */
    origin?: string;
    /** One property of operation, include metric specifications. */
    serviceSpecification?: ServiceSpecification;
}

/** Display metadata associated with the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft Storage. */
    provider?: string;
    /** Resource on which the operation is performed etc. */
    resource?: string;
    /** Type of operation: get, read, delete, etc. */
    operation?: string;
    /** Description of the operation. */
    description?: string;
}

/** Result of the request to list Storage operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of Storage operations supported by the Storage resource provider. */
    value?: Operation[];
}

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Lists all of the available Storage Rest API operations.
     * @param options The options parameters.
     */
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

/** Optional parameters. */
export declare interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type OperationsListResponse = OperationListResult;

/**
 * Defines values for Permissions. \
 * {@link KnownPermissions} can be used interchangeably with Permissions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **r** \
 * **d** \
 * **w** \
 * **l** \
 * **a** \
 * **c** \
 * **u** \
 * **p**
 */
declare type Permissions_2 = string;
export { Permissions_2 as Permissions }

/** The Private Endpoint resource. */
export declare interface PrivateEndpoint {
    /**
     * The ARM identifier for Private Endpoint
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
}

/** The Private Endpoint Connection resource. */
export declare type PrivateEndpointConnection = Resource & {
    /** The resource of private end point. */
    privateEndpoint?: PrivateEndpoint;
    /** A collection of information about the state of the connection between service consumer and provider. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    /**
     * The provisioning state of the private endpoint connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
};

/** List of private endpoint connection associated with the specified storage account */
export declare interface PrivateEndpointConnectionListResult {
    /** Array of private endpoint connections */
    value?: PrivateEndpointConnection[];
}

/**
 * Defines values for PrivateEndpointConnectionProvisioningState. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export declare type PrivateEndpointConnectionProvisioningState = string;

/** Interface representing a PrivateEndpointConnections. */
export declare interface PrivateEndpointConnections {
    /**
     * List all the private endpoint connections associated with the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: PrivateEndpointConnectionsListOptionalParams): PagedAsyncIterableIterator<PrivateEndpointConnection>;
    /**
     * Gets the specified private endpoint connection associated with the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
     *                                      Azure resource
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsGetOptionalParams): Promise<PrivateEndpointConnectionsGetResponse>;
    /**
     * Update the state of specified private endpoint connection associated with the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
     *                                      Azure resource
     * @param properties The private endpoint connection properties.
     * @param options The options parameters.
     */
    put(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, properties: PrivateEndpointConnection, options?: PrivateEndpointConnectionsPutOptionalParams): Promise<PrivateEndpointConnectionsPutResponse>;
    /**
     * Deletes the specified private endpoint connection associated with the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
     *                                      Azure resource
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type PrivateEndpointConnectionsListResponse = PrivateEndpointConnectionListResult;

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsPutOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the put operation. */
export declare type PrivateEndpointConnectionsPutResponse = PrivateEndpointConnection;

/**
 * Defines values for PrivateEndpointServiceConnectionStatus. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected**
 */
export declare type PrivateEndpointServiceConnectionStatus = string;

/** A private link resource */
export declare type PrivateLinkResource = Resource & {
    /**
     * The private link resource group id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly groupId?: string;
    /**
     * The private link resource required member names.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requiredMembers?: string[];
    /** The private link resource Private link DNS zone name. */
    requiredZoneNames?: string[];
};

/** A list of private link resources */
export declare interface PrivateLinkResourceListResult {
    /** Array of private link resources */
    value?: PrivateLinkResource[];
}

/** Interface representing a PrivateLinkResources. */
export declare interface PrivateLinkResources {
    /**
     * Gets the private link resources that need to be created for a storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    listByStorageAccount(resourceGroupName: string, accountName: string, options?: PrivateLinkResourcesListByStorageAccountOptionalParams): Promise<PrivateLinkResourcesListByStorageAccountResponse>;
}

/** Optional parameters. */
export declare interface PrivateLinkResourcesListByStorageAccountOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByStorageAccount operation. */
export declare type PrivateLinkResourcesListByStorageAccountResponse = PrivateLinkResourceListResult;

/** A collection of information about the state of the connection between service consumer and provider. */
export declare interface PrivateLinkServiceConnectionState {
    /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
    status?: PrivateEndpointServiceConnectionStatus;
    /** The reason for approval/rejection of the connection. */
    description?: string;
    /** A message indicating if changes on the service provider require any updates on the consumer. */
    actionRequired?: string;
}

/** Protected append writes history setting for the blob container with Legal holds. */
export declare interface ProtectedAppendWritesHistory {
    /** When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining legal hold protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. */
    allowProtectedAppendWritesAll?: boolean;
    /**
     * Returns the date and time the tag was added.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timestamp?: Date;
}

/** Protocol settings for file service */
export declare interface ProtocolSettings {
    /** Setting for SMB protocol */
    smb?: SmbSetting;
}

/** Defines values for ProvisioningState. */
export declare type ProvisioningState = "Creating" | "ResolvingDNS" | "Succeeded";

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export declare type ProxyResource = Resource & {};

/** Defines values for PublicAccess. */
export declare type PublicAccess = "Container" | "Blob" | "None";

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type PublicNetworkAccess = string;

/** Interface representing a Queue. */
export declare interface Queue {
    /**
     * Gets a list of all the queues under the specified storage account
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: QueueListOptionalParams): PagedAsyncIterableIterator<ListQueue>;
    /**
     * Creates a new queue with the specified queue name, under the specified account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
     *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
     *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
     * @param queue Queue properties and metadata to be created with
     * @param options The options parameters.
     */
    create(resourceGroupName: string, accountName: string, queueName: string, queue: StorageQueue, options?: QueueCreateOptionalParams): Promise<QueueCreateResponse>;
    /**
     * Creates a new queue with the specified queue name, under the specified account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
     *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
     *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
     * @param queue Queue properties and metadata to be created with
     * @param options The options parameters.
     */
    update(resourceGroupName: string, accountName: string, queueName: string, queue: StorageQueue, options?: QueueUpdateOptionalParams): Promise<QueueUpdateResponse>;
    /**
     * Gets the queue with the specified queue name, under the specified account if it exists.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
     *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
     *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, queueName: string, options?: QueueGetOptionalParams): Promise<QueueGetResponse>;
    /**
     * Deletes the queue with the specified queue name, under the specified account if it exists.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
     *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
     *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, queueName: string, options?: QueueDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface QueueCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the create operation. */
export declare type QueueCreateResponse = StorageQueue;

/** Optional parameters. */
export declare interface QueueDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface QueueGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type QueueGetResponse = StorageQueue;

/** Optional parameters. */
export declare interface QueueListNextOptionalParams extends coreClient.OperationOptions {
    /** Optional, a maximum number of queues that should be included in a list queue response */
    maxpagesize?: string;
    /** Optional, When specified, only the queues with a name starting with the given filter will be listed. */
    filter?: string;
}

/** Contains response data for the listNext operation. */
export declare type QueueListNextResponse = ListQueueResource;

/** Optional parameters. */
export declare interface QueueListOptionalParams extends coreClient.OperationOptions {
    /** Optional, a maximum number of queues that should be included in a list queue response */
    maxpagesize?: string;
    /** Optional, When specified, only the queues with a name starting with the given filter will be listed. */
    filter?: string;
}

/** Contains response data for the list operation. */
export declare type QueueListResponse = ListQueueResource;

/** The properties of a storage account’s Queue service. */
export declare type QueueServiceProperties = Resource & {
    /** Specifies CORS rules for the Queue service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Queue service. */
    cors?: CorsRules;
};

/** Interface representing a QueueServices. */
export declare interface QueueServices {
    /**
     * List all queue services for the storage account
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: QueueServicesListOptionalParams): Promise<QueueServicesListResponse>;
    /**
     * Sets the properties of a storage account’s Queue service, including properties for Storage Analytics
     * and CORS (Cross-Origin Resource Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The properties of a storage account’s Queue service, only properties for Storage
     *                   Analytics and CORS (Cross-Origin Resource Sharing) rules can be specified.
     * @param options The options parameters.
     */
    setServiceProperties(resourceGroupName: string, accountName: string, parameters: QueueServiceProperties, options?: QueueServicesSetServicePropertiesOptionalParams): Promise<QueueServicesSetServicePropertiesResponse>;
    /**
     * Gets the properties of a storage account’s Queue service, including properties for Storage Analytics
     * and CORS (Cross-Origin Resource Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    getServiceProperties(resourceGroupName: string, accountName: string, options?: QueueServicesGetServicePropertiesOptionalParams): Promise<QueueServicesGetServicePropertiesResponse>;
}

/** Optional parameters. */
export declare interface QueueServicesGetServicePropertiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getServiceProperties operation. */
export declare type QueueServicesGetServicePropertiesResponse = QueueServiceProperties;

/** Optional parameters. */
export declare interface QueueServicesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type QueueServicesListResponse = ListQueueServices;

/** Optional parameters. */
export declare interface QueueServicesSetServicePropertiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the setServiceProperties operation. */
export declare type QueueServicesSetServicePropertiesResponse = QueueServiceProperties;

/** Optional parameters. */
export declare interface QueueUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type QueueUpdateResponse = StorageQueue;

/** Defines values for Reason. */
export declare type Reason = "AccountNameInvalid" | "AlreadyExists";

/**
 * Defines values for ReasonCode. \
 * {@link KnownReasonCode} can be used interchangeably with ReasonCode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **QuotaId** \
 * **NotAvailableForSubscription**
 */
export declare type ReasonCode = string;

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export declare interface Resource {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the resource
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
}

/** Resource Access Rule. */
export declare interface ResourceAccessRule {
    /** Tenant Id */
    tenantId?: string;
    /** Resource Id */
    resourceId?: string;
}

/** The blob service properties for blob restore policy */
export declare interface RestorePolicyProperties {
    /** Blob restore is enabled if set to true. */
    enabled: boolean;
    /** how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days. */
    days?: number;
    /**
     * Deprecated in favor of minRestoreTime property.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastEnabledTime?: Date;
    /**
     * Returns the minimum date and time that the restore can be started.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minRestoreTime?: Date;
}

/** The restriction because of which SKU cannot be used. */
export declare interface Restriction {
    /**
     * The type of restrictions. As of now only possible value for this is location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly values?: string[];
    /** The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The "NotAvailableForSubscription" is related to capacity at DC. */
    reasonCode?: ReasonCode;
}

/**
 * Defines values for RootSquashType. \
 * {@link KnownRootSquashType} can be used interchangeably with RootSquashType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NoRootSquash** \
 * **RootSquash** \
 * **AllSquash**
 */
export declare type RootSquashType = string;

/**
 * Defines values for RoutingChoice. \
 * {@link KnownRoutingChoice} can be used interchangeably with RoutingChoice,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **MicrosoftRouting** \
 * **InternetRouting**
 */
export declare type RoutingChoice = string;

/** Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing */
export declare interface RoutingPreference {
    /** Routing Choice defines the kind of network routing opted by the user. */
    routingChoice?: RoutingChoice;
    /** A boolean flag which indicates whether microsoft routing storage endpoints are to be published */
    publishMicrosoftEndpoints?: boolean;
    /** A boolean flag which indicates whether internet routing storage endpoints are to be published */
    publishInternetEndpoints?: boolean;
}

/**
 * Defines values for RuleType. \
 * {@link KnownRuleType} can be used interchangeably with RuleType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Lifecycle**
 */
export declare type RuleType = string;

/** SasPolicy assigned to the storage account. */
export declare interface SasPolicy {
    /** The SAS expiration period, DD.HH:MM:SS. */
    sasExpirationPeriod: string;
    /** The SAS expiration action. Can only be Log. */
    expirationAction: ExpirationAction;
}

/**
 * Defines values for Schedule. \
 * {@link KnownSchedule} can be used interchangeably with Schedule,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Daily** \
 * **Weekly**
 */
export declare type Schedule = string;

/**
 * Defines values for Services. \
 * {@link KnownServices} can be used interchangeably with Services,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **b** \
 * **q** \
 * **t** \
 * **f**
 */
export declare type Services = string;

/** The parameters to list service SAS credentials of a specific resource. */
export declare interface ServiceSasParameters {
    /** The canonical path to the signed resource. */
    canonicalizedResource: string;
    /** The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s). */
    resource?: SignedResource;
    /** The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p). */
    permissions?: Permissions_2;
    /** An IP address or a range of IP addresses from which to accept requests. */
    iPAddressOrRange?: string;
    /** The protocol permitted for a request made with the account SAS. */
    protocols?: HttpProtocol;
    /** The time at which the SAS becomes valid. */
    sharedAccessStartTime?: Date;
    /** The time at which the shared access signature becomes invalid. */
    sharedAccessExpiryTime?: Date;
    /** A unique value up to 64 characters in length that correlates to an access policy specified for the container, queue, or table. */
    identifier?: string;
    /** The start of partition key. */
    partitionKeyStart?: string;
    /** The end of partition key. */
    partitionKeyEnd?: string;
    /** The start of row key. */
    rowKeyStart?: string;
    /** The end of row key. */
    rowKeyEnd?: string;
    /** The key to sign the account SAS token with. */
    keyToSign?: string;
    /** The response header override for cache control. */
    cacheControl?: string;
    /** The response header override for content disposition. */
    contentDisposition?: string;
    /** The response header override for content encoding. */
    contentEncoding?: string;
    /** The response header override for content language. */
    contentLanguage?: string;
    /** The response header override for content type. */
    contentType?: string;
}

/** One property of operation, include metric specifications. */
export declare interface ServiceSpecification {
    /** Metric specifications of operation. */
    metricSpecifications?: MetricSpecification[];
}

/**
 * Defines values for ShareAccessTier. \
 * {@link KnownShareAccessTier} can be used interchangeably with ShareAccessTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TransactionOptimized** \
 * **Hot** \
 * **Cool** \
 * **Premium**
 */
export declare type ShareAccessTier = string;

export declare interface SignedIdentifier {
    /** An unique identifier of the stored access policy. */
    id?: string;
    /** Access policy */
    accessPolicy?: AccessPolicy;
}

/**
 * Defines values for SignedResource. \
 * {@link KnownSignedResource} can be used interchangeably with SignedResource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **b** \
 * **c** \
 * **f** \
 * **s**
 */
export declare type SignedResource = string;

/**
 * Defines values for SignedResourceTypes. \
 * {@link KnownSignedResourceTypes} can be used interchangeably with SignedResourceTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **s** \
 * **c** \
 * **o**
 */
export declare type SignedResourceTypes = string;

/** The SKU of the storage account. */
export declare interface Sku {
    /** The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType. */
    name: SkuName;
    /**
     * The SKU tier. This is based on the SKU name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tier?: SkuTier;
}

/** The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc. */
export declare interface SKUCapability {
    /**
     * The name of capability, The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * A string value to indicate states of given capability. Possibly 'true' or 'false'.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: string;
}

/** Storage SKU and its properties */
export declare interface SkuInformation {
    /** The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType. */
    name: SkuName;
    /**
     * The SKU tier. This is based on the SKU name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tier?: SkuTier;
    /**
     * The type of the resource, usually it is 'storageAccounts'.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceType?: string;
    /**
     * Indicates the type of storage account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: Kind;
    /**
     * The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly locations?: string[];
    /**
     * The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly capabilities?: SKUCapability[];
    /** The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. */
    restrictions?: Restriction[];
}

/**
 * Defines values for SkuName. \
 * {@link KnownSkuName} can be used interchangeably with SkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS** \
 * **Standard_GRS** \
 * **Standard_RAGRS** \
 * **Standard_ZRS** \
 * **Premium_LRS** \
 * **Premium_ZRS** \
 * **Standard_GZRS** \
 * **Standard_RAGZRS**
 */
export declare type SkuName = string;

/** Interface representing a Skus. */
export declare interface Skus {
    /**
     * Lists the available SKUs supported by Microsoft.Storage for given subscription.
     * @param options The options parameters.
     */
    list(options?: SkusListOptionalParams): PagedAsyncIterableIterator<SkuInformation>;
}

/** Optional parameters. */
export declare interface SkusListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type SkusListResponse = StorageSkuListResult;

/** Defines values for SkuTier. */
export declare type SkuTier = "Standard" | "Premium";

/** Setting for SMB protocol */
export declare interface SmbSetting {
    /** Multichannel setting. Applies to Premium FileStorage only. */
    multichannel?: Multichannel;
    /** SMB protocol versions supported by server. Valid values are SMB2.1, SMB3.0, SMB3.1.1. Should be passed as a string with delimiter ';'. */
    versions?: string;
    /** SMB authentication methods supported by server. Valid values are NTLMv2, Kerberos. Should be passed as a string with delimiter ';'. */
    authenticationMethods?: string;
    /** Kerberos ticket encryption supported by server. Valid values are RC4-HMAC, AES-256. Should be passed as a string with delimiter ';' */
    kerberosTicketEncryption?: string;
    /** SMB channel encryption supported by server. Valid values are AES-128-CCM, AES-128-GCM, AES-256-GCM. Should be passed as a string with delimiter ';'. */
    channelEncryption?: string;
}

/**
 * Defines values for State. \
 * {@link KnownState} can be used interchangeably with State,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Deprovisioning** \
 * **Succeeded** \
 * **Failed** \
 * **NetworkSourceDeleted**
 */
export declare type State = string;

/** The storage account. */
export declare type StorageAccount = TrackedResource & {
    /**
     * Gets the SKU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sku?: Sku;
    /**
     * Gets the Kind.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: Kind;
    /** The identity of the resource. */
    identity?: Identity;
    /** The extendedLocation of the resource. */
    extendedLocation?: ExtendedLocation;
    /**
     * Gets the status of the storage account at the time the operation was called.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primaryEndpoints?: Endpoints;
    /**
     * Gets the location of the primary data center for the storage account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primaryLocation?: string;
    /**
     * Gets the status indicating whether the primary location of the storage account is available or unavailable.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statusOfPrimary?: AccountStatus;
    /**
     * Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastGeoFailoverTime?: Date;
    /**
     * Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly secondaryLocation?: string;
    /**
     * Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statusOfSecondary?: AccountStatus;
    /**
     * Gets the creation date and time of the storage account in UTC.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationTime?: Date;
    /**
     * Gets the custom domain the user assigned to this storage account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly customDomain?: CustomDomain;
    /**
     * SasPolicy assigned to the storage account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sasPolicy?: SasPolicy;
    /**
     * KeyPolicy assigned to the storage account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keyPolicy?: KeyPolicy;
    /**
     * Storage account keys creation time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keyCreationTime?: KeyCreationTime;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object from the secondary location of the storage account. Only available if the SKU name is Standard_RAGRS.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly secondaryEndpoints?: Endpoints;
    /**
     * Gets the encryption settings on the account. If unspecified, the account is unencrypted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly encryption?: Encryption;
    /**
     * Required for storage accounts where kind = BlobStorage. The access tier used for billing.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly accessTier?: AccessTier;
    /** Provides the identity based authentication settings for Azure Files. */
    azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication;
    /** Allows https traffic only to storage service if sets to true. */
    enableHttpsTrafficOnly?: boolean;
    /**
     * Network rule set
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly networkRuleSet?: NetworkRuleSet;
    /** Account HierarchicalNamespace enabled if sets to true. */
    isHnsEnabled?: boolean;
    /**
     * Geo Replication Stats
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly geoReplicationStats?: GeoReplicationStats;
    /**
     * If the failover is in progress, the value will be true, otherwise, it will be null.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failoverInProgress?: boolean;
    /** Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. */
    largeFileSharesState?: LargeFileSharesState;
    /**
     * List of private endpoint connection associated with the specified storage account
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpointConnections?: PrivateEndpointConnection[];
    /** Maintains information about the network routing choice opted by the user for data transfer */
    routingPreference?: RoutingPreference;
    /**
     * Blob restore status
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly blobRestoreStatus?: BlobRestoreStatus;
    /** Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property. */
    allowBlobPublicAccess?: boolean;
    /** Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property. */
    minimumTlsVersion?: MinimumTlsVersion;
    /** Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true. */
    allowSharedKeyAccess?: boolean;
    /** NFS 3.0 protocol support enabled if set to true. */
    enableNfsV3?: boolean;
    /** Allow or disallow cross AAD tenant object replication. The default interpretation is true for this property. */
    allowCrossTenantReplication?: boolean;
    /** A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property. */
    defaultToOAuthAuthentication?: boolean;
    /** Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'. */
    publicNetworkAccess?: PublicNetworkAccess;
    /** The property is immutable and can only be set to true at the account creation time. When set to true, it enables object level immutability for all the containers in the account by default. */
    immutableStorageWithVersioning?: ImmutableStorageAccount;
};

/** The parameters used to check the availability of the storage account name. */
export declare interface StorageAccountCheckNameAvailabilityParameters {
    /** The storage account name. */
    name: string;
    /** The type of resource, Microsoft.Storage/storageAccounts */
    type: "Microsoft.Storage/storageAccounts";
}

/** The parameters used when creating a storage account. */
export declare interface StorageAccountCreateParameters {
    /** Required. Gets or sets the SKU name. */
    sku: Sku;
    /** Required. Indicates the type of storage account. */
    kind: Kind;
    /** Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed. */
    location: string;
    /** Optional. Set the extended location of the resource. If not set, the storage account will be created in Azure main region. Otherwise it will be created in the specified extended location */
    extendedLocation?: ExtendedLocation;
    /** Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. */
    tags?: {
        [propertyName: string]: string;
    };
    /** The identity of the resource. */
    identity?: Identity;
    /** Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'. */
    publicNetworkAccess?: PublicNetworkAccess;
    /** SasPolicy assigned to the storage account. */
    sasPolicy?: SasPolicy;
    /** KeyPolicy assigned to the storage account. */
    keyPolicy?: KeyPolicy;
    /** User domain assigned to the storage account. Name is the CNAME source. Only one custom domain is supported per storage account at this time. To clear the existing custom domain, use an empty string for the custom domain name property. */
    customDomain?: CustomDomain;
    /** Not applicable. Azure Storage encryption is enabled for all storage accounts and cannot be disabled. */
    encryption?: Encryption;
    /** Network rule set */
    networkRuleSet?: NetworkRuleSet;
    /** Required for storage accounts where kind = BlobStorage. The access tier used for billing. */
    accessTier?: AccessTier;
    /** Provides the identity based authentication settings for Azure Files. */
    azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication;
    /** Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01. */
    enableHttpsTrafficOnly?: boolean;
    /** Account HierarchicalNamespace enabled if sets to true. */
    isHnsEnabled?: boolean;
    /** Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. */
    largeFileSharesState?: LargeFileSharesState;
    /** Maintains information about the network routing choice opted by the user for data transfer */
    routingPreference?: RoutingPreference;
    /** Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property. */
    allowBlobPublicAccess?: boolean;
    /** Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property. */
    minimumTlsVersion?: MinimumTlsVersion;
    /** Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true. */
    allowSharedKeyAccess?: boolean;
    /** NFS 3.0 protocol support enabled if set to true. */
    enableNfsV3?: boolean;
    /** Allow or disallow cross AAD tenant object replication. The default interpretation is true for this property. */
    allowCrossTenantReplication?: boolean;
    /** A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property. */
    defaultToOAuthAuthentication?: boolean;
    /** The property is immutable and can only be set to true at the account creation time. When set to true, it enables object level immutability for all the new containers in the account by default. */
    immutableStorageWithVersioning?: ImmutableStorageAccount;
}

/** Defines values for StorageAccountExpand. */
export declare type StorageAccountExpand = "geoReplicationStats" | "blobRestoreStatus";

/** The URIs that are used to perform a retrieval of a public blob, file, web or dfs object via a internet routing endpoint. */
export declare interface StorageAccountInternetEndpoints {
    /**
     * Gets the blob endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly blob?: string;
    /**
     * Gets the file endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly file?: string;
    /**
     * Gets the web endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly web?: string;
    /**
     * Gets the dfs endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly dfs?: string;
}

/** An access key for the storage account. */
export declare interface StorageAccountKey {
    /**
     * Name of the key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keyName?: string;
    /**
     * Base 64-encoded value of the key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: string;
    /**
     * Permissions for the key -- read-only or full permissions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly permissions?: KeyPermission;
    /**
     * Creation time of the key, in round trip date format.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationTime?: Date;
}

/** The response from the ListKeys operation. */
export declare interface StorageAccountListKeysResult {
    /**
     * Gets the list of storage account keys and their properties for the specified storage account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keys?: StorageAccountKey[];
}

/** The response from the List Storage Accounts operation. */
export declare interface StorageAccountListResult {
    /**
     * Gets the list of storage accounts and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: StorageAccount[];
    /**
     * Request URL that can be used to query next page of storage accounts. Returned when total number of requested storage accounts exceed maximum page size.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object via a microsoft routing endpoint. */
export declare interface StorageAccountMicrosoftEndpoints {
    /**
     * Gets the blob endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly blob?: string;
    /**
     * Gets the queue endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly queue?: string;
    /**
     * Gets the table endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly table?: string;
    /**
     * Gets the file endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly file?: string;
    /**
     * Gets the web endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly web?: string;
    /**
     * Gets the dfs endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly dfs?: string;
}

/** The parameters used to regenerate the storage account key. */
export declare interface StorageAccountRegenerateKeyParameters {
    /** The name of storage keys that want to be regenerated, possible values are key1, key2, kerb1, kerb2. */
    keyName: string;
}

/** Interface representing a StorageAccounts. */
export declare interface StorageAccounts {
    /**
     * Lists all the storage accounts available under the subscription. Note that storage keys are not
     * returned; use the ListKeys operation for this.
     * @param options The options parameters.
     */
    list(options?: StorageAccountsListOptionalParams): PagedAsyncIterableIterator<StorageAccount>;
    /**
     * Lists all the storage accounts available under the given resource group. Note that storage keys are
     * not returned; use the ListKeys operation for this.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: StorageAccountsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<StorageAccount>;
    /**
     * Checks that the storage account name is valid and is not already in use.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    checkNameAvailability(accountName: StorageAccountCheckNameAvailabilityParameters, options?: StorageAccountsCheckNameAvailabilityOptionalParams): Promise<StorageAccountsCheckNameAvailabilityResponse>;
    /**
     * Asynchronously creates a new storage account with the specified parameters. If an account is already
     * created and a subsequent create request is issued with different properties, the account properties
     * will be updated. If an account is already created and a subsequent create or update request is
     * issued with the exact same set of properties, the request will succeed.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The parameters to provide for the created account.
     * @param options The options parameters.
     */
    beginCreate(resourceGroupName: string, accountName: string, parameters: StorageAccountCreateParameters, options?: StorageAccountsCreateOptionalParams): Promise<PollerLike<PollOperationState<StorageAccountsCreateResponse>, StorageAccountsCreateResponse>>;
    /**
     * Asynchronously creates a new storage account with the specified parameters. If an account is already
     * created and a subsequent create request is issued with different properties, the account properties
     * will be updated. If an account is already created and a subsequent create or update request is
     * issued with the exact same set of properties, the request will succeed.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The parameters to provide for the created account.
     * @param options The options parameters.
     */
    beginCreateAndWait(resourceGroupName: string, accountName: string, parameters: StorageAccountCreateParameters, options?: StorageAccountsCreateOptionalParams): Promise<StorageAccountsCreateResponse>;
    /**
     * Deletes a storage account in Microsoft Azure.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, options?: StorageAccountsDeleteOptionalParams): Promise<void>;
    /**
     * Returns the properties for the specified storage account including but not limited to name, SKU
     * name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    getProperties(resourceGroupName: string, accountName: string, options?: StorageAccountsGetPropertiesOptionalParams): Promise<StorageAccountsGetPropertiesResponse>;
    /**
     * The update operation can be used to update the SKU, encryption, access tier, or tags for a storage
     * account. It can also be used to map the account to a custom domain. Only one custom domain is
     * supported per storage account; the replacement/change of custom domain is not supported. In order to
     * replace an old custom domain, the old value must be cleared/unregistered before a new value can be
     * set. The update of multiple properties is supported. This call does not change the storage keys for
     * the account. If you want to change the storage account keys, use the regenerate keys operation. The
     * location and name of the storage account cannot be changed after creation.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The parameters to provide for the updated account.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, accountName: string, parameters: StorageAccountUpdateParameters, options?: StorageAccountsUpdateOptionalParams): Promise<StorageAccountsUpdateResponse>;
    /**
     * Lists the access keys or Kerberos keys (if active directory enabled) for the specified storage
     * account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    listKeys(resourceGroupName: string, accountName: string, options?: StorageAccountsListKeysOptionalParams): Promise<StorageAccountsListKeysResponse>;
    /**
     * Regenerates one of the access keys or Kerberos keys for the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param regenerateKey Specifies name of the key which should be regenerated -- key1, key2, kerb1,
     *                      kerb2.
     * @param options The options parameters.
     */
    regenerateKey(resourceGroupName: string, accountName: string, regenerateKey: StorageAccountRegenerateKeyParameters, options?: StorageAccountsRegenerateKeyOptionalParams): Promise<StorageAccountsRegenerateKeyResponse>;
    /**
     * List SAS credentials of a storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The parameters to provide to list SAS credentials for the storage account.
     * @param options The options parameters.
     */
    listAccountSAS(resourceGroupName: string, accountName: string, parameters: AccountSasParameters, options?: StorageAccountsListAccountSASOptionalParams): Promise<StorageAccountsListAccountSASResponse>;
    /**
     * List service SAS credentials of a specific resource.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The parameters to provide to list service SAS credentials.
     * @param options The options parameters.
     */
    listServiceSAS(resourceGroupName: string, accountName: string, parameters: ServiceSasParameters, options?: StorageAccountsListServiceSASOptionalParams): Promise<StorageAccountsListServiceSASResponse>;
    /**
     * Failover request can be triggered for a storage account in case of availability issues. The failover
     * occurs from the storage account's primary cluster to secondary cluster for RA-GRS accounts. The
     * secondary cluster will become primary after failover.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    beginFailover(resourceGroupName: string, accountName: string, options?: StorageAccountsFailoverOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Failover request can be triggered for a storage account in case of availability issues. The failover
     * occurs from the storage account's primary cluster to secondary cluster for RA-GRS accounts. The
     * secondary cluster will become primary after failover.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    beginFailoverAndWait(resourceGroupName: string, accountName: string, options?: StorageAccountsFailoverOptionalParams): Promise<void>;
    /**
     * Live Migration of storage account to enable Hns
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param requestType Required. Hierarchical namespace migration type can either be a hierarchical
     *                    namespace validation request 'HnsOnValidationRequest' or a hydration request
     *                    'HnsOnHydrationRequest'. The validation request will validate the migration whereas the hydration
     *                    request will migrate the account.
     * @param options The options parameters.
     */
    beginHierarchicalNamespaceMigration(resourceGroupName: string, accountName: string, requestType: string, options?: StorageAccountsHierarchicalNamespaceMigrationOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Live Migration of storage account to enable Hns
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param requestType Required. Hierarchical namespace migration type can either be a hierarchical
     *                    namespace validation request 'HnsOnValidationRequest' or a hydration request
     *                    'HnsOnHydrationRequest'. The validation request will validate the migration whereas the hydration
     *                    request will migrate the account.
     * @param options The options parameters.
     */
    beginHierarchicalNamespaceMigrationAndWait(resourceGroupName: string, accountName: string, requestType: string, options?: StorageAccountsHierarchicalNamespaceMigrationOptionalParams): Promise<void>;
    /**
     * Abort live Migration of storage account to enable Hns
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    beginAbortHierarchicalNamespaceMigration(resourceGroupName: string, accountName: string, options?: StorageAccountsAbortHierarchicalNamespaceMigrationOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Abort live Migration of storage account to enable Hns
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    beginAbortHierarchicalNamespaceMigrationAndWait(resourceGroupName: string, accountName: string, options?: StorageAccountsAbortHierarchicalNamespaceMigrationOptionalParams): Promise<void>;
    /**
     * Restore blobs in the specified blob ranges
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The parameters to provide for restore blob ranges.
     * @param options The options parameters.
     */
    beginRestoreBlobRanges(resourceGroupName: string, accountName: string, parameters: BlobRestoreParameters, options?: StorageAccountsRestoreBlobRangesOptionalParams): Promise<PollerLike<PollOperationState<StorageAccountsRestoreBlobRangesResponse>, StorageAccountsRestoreBlobRangesResponse>>;
    /**
     * Restore blobs in the specified blob ranges
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The parameters to provide for restore blob ranges.
     * @param options The options parameters.
     */
    beginRestoreBlobRangesAndWait(resourceGroupName: string, accountName: string, parameters: BlobRestoreParameters, options?: StorageAccountsRestoreBlobRangesOptionalParams): Promise<StorageAccountsRestoreBlobRangesResponse>;
    /**
     * Revoke user delegation keys.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    revokeUserDelegationKeys(resourceGroupName: string, accountName: string, options?: StorageAccountsRevokeUserDelegationKeysOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface StorageAccountsAbortHierarchicalNamespaceMigrationOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface StorageAccountsCheckNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the checkNameAvailability operation. */
export declare type StorageAccountsCheckNameAvailabilityResponse = CheckNameAvailabilityResult;

/** Optional parameters. */
export declare interface StorageAccountsCreateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the create operation. */
export declare type StorageAccountsCreateResponse = StorageAccount;

/** Optional parameters. */
export declare interface StorageAccountsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface StorageAccountsFailoverOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface StorageAccountsGetPropertiesOptionalParams extends coreClient.OperationOptions {
    /** May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats and blobRestoreStatus. */
    expand?: StorageAccountExpand;
}

/** Contains response data for the getProperties operation. */
export declare type StorageAccountsGetPropertiesResponse = StorageAccount;

/** Optional parameters. */
export declare interface StorageAccountsHierarchicalNamespaceMigrationOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface StorageAccountsListAccountSASOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAccountSAS operation. */
export declare type StorageAccountsListAccountSASResponse = ListAccountSasResponse;

/** Optional parameters. */
export declare interface StorageAccountsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type StorageAccountsListByResourceGroupNextResponse = StorageAccountListResult;

/** Optional parameters. */
export declare interface StorageAccountsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type StorageAccountsListByResourceGroupResponse = StorageAccountListResult;

/** Optional parameters. */
export declare interface StorageAccountsListKeysOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listKeys operation. */
export declare type StorageAccountsListKeysResponse = StorageAccountListKeysResult;

/** Optional parameters. */
export declare interface StorageAccountsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type StorageAccountsListNextResponse = StorageAccountListResult;

/** Optional parameters. */
export declare interface StorageAccountsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type StorageAccountsListResponse = StorageAccountListResult;

/** Optional parameters. */
export declare interface StorageAccountsListServiceSASOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listServiceSAS operation. */
export declare type StorageAccountsListServiceSASResponse = ListServiceSasResponse;

/** Optional parameters. */
export declare interface StorageAccountsRegenerateKeyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the regenerateKey operation. */
export declare type StorageAccountsRegenerateKeyResponse = StorageAccountListKeysResult;

/** Optional parameters. */
export declare interface StorageAccountsRestoreBlobRangesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the restoreBlobRanges operation. */
export declare type StorageAccountsRestoreBlobRangesResponse = BlobRestoreStatus;

/** Optional parameters. */
export declare interface StorageAccountsRevokeUserDelegationKeysOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface StorageAccountsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type StorageAccountsUpdateResponse = StorageAccount;

/** The parameters that can be provided when updating the storage account properties. */
export declare interface StorageAccountUpdateParameters {
    /** Gets or sets the SKU name. Note that the SKU name cannot be updated to Standard_ZRS, Premium_LRS or Premium_ZRS, nor can accounts of those SKU names be updated to any other value. */
    sku?: Sku;
    /** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters. */
    tags?: {
        [propertyName: string]: string;
    };
    /** The identity of the resource. */
    identity?: Identity;
    /** Optional. Indicates the type of storage account. Currently only StorageV2 value supported by server. */
    kind?: Kind;
    /** Custom domain assigned to the storage account by the user. Name is the CNAME source. Only one custom domain is supported per storage account at this time. To clear the existing custom domain, use an empty string for the custom domain name property. */
    customDomain?: CustomDomain;
    /** Provides the encryption settings on the account. The default setting is unencrypted. */
    encryption?: Encryption;
    /** SasPolicy assigned to the storage account. */
    sasPolicy?: SasPolicy;
    /** KeyPolicy assigned to the storage account. */
    keyPolicy?: KeyPolicy;
    /** Required for storage accounts where kind = BlobStorage. The access tier used for billing. */
    accessTier?: AccessTier;
    /** Provides the identity based authentication settings for Azure Files. */
    azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication;
    /** Allows https traffic only to storage service if sets to true. */
    enableHttpsTrafficOnly?: boolean;
    /** Network rule set */
    networkRuleSet?: NetworkRuleSet;
    /** Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. */
    largeFileSharesState?: LargeFileSharesState;
    /** Maintains information about the network routing choice opted by the user for data transfer */
    routingPreference?: RoutingPreference;
    /** Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property. */
    allowBlobPublicAccess?: boolean;
    /** Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property. */
    minimumTlsVersion?: MinimumTlsVersion;
    /** Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true. */
    allowSharedKeyAccess?: boolean;
    /** Allow or disallow cross AAD tenant object replication. The default interpretation is true for this property. */
    allowCrossTenantReplication?: boolean;
    /** A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property. */
    defaultToOAuthAuthentication?: boolean;
    /** Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'. */
    publicNetworkAccess?: PublicNetworkAccess;
    /** The property is immutable and can only be set to true at the account creation time. When set to true, it enables object level immutability for all the containers in the account by default. */
    immutableStorageWithVersioning?: ImmutableStorageAccount;
}

export declare class StorageManagementClient extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the StorageManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: StorageManagementClientOptionalParams);
    operations: Operations;
    skus: Skus;
    storageAccounts: StorageAccounts;
    deletedAccounts: DeletedAccounts;
    usages: Usages;
    managementPolicies: ManagementPolicies;
    blobInventoryPolicies: BlobInventoryPolicies;
    privateEndpointConnections: PrivateEndpointConnections;
    privateLinkResources: PrivateLinkResources;
    objectReplicationPoliciesOperations: ObjectReplicationPoliciesOperations;
    encryptionScopes: EncryptionScopes;
    blobServices: BlobServices;
    blobContainers: BlobContainers;
    fileServices: FileServices;
    fileShares: FileShares;
    queueServices: QueueServices;
    queue: Queue;
    tableServices: TableServices;
    tableOperations: TableOperations;
}

/** Optional parameters. */
export declare interface StorageManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

export declare type StorageQueue = Resource & {
    /** A name-value pair that represents queue metadata. */
    metadata?: {
        [propertyName: string]: string;
    };
    /**
     * Integer indicating an approximate number of messages in the queue. This number is not lower than the actual number of messages in the queue, but could be higher.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly approximateMessageCount?: number;
};

/** The response from the List Storage SKUs operation. */
export declare interface StorageSkuListResult {
    /**
     * Get the list result of storage SKUs and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SkuInformation[];
}

/** Metadata pertaining to creation and last modification of the resource. */
export declare interface SystemData {
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

/** Properties of the table, including Id, resource name, resource type. */
export declare type Table = Resource & {
    /**
     * Table name under the specified account
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tableName?: string;
};

/** Optional parameters. */
export declare interface TableCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the create operation. */
export declare type TableCreateResponse = Table;

/** Optional parameters. */
export declare interface TableDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface TableGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type TableGetResponse = Table;

/** Optional parameters. */
export declare interface TableListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type TableListNextResponse = ListTableResource;

/** Optional parameters. */
export declare interface TableListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type TableListResponse = ListTableResource;

/** Interface representing a TableOperations. */
export declare interface TableOperations {
    /**
     * Gets a list of all the tables under the specified storage account
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: TableListOptionalParams): PagedAsyncIterableIterator<Table>;
    /**
     * Creates a new table with the specified table name, under the specified account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param tableName A table name must be unique within a storage account and must be between 3 and 63
     *                  characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric
     *                  character.
     * @param options The options parameters.
     */
    create(resourceGroupName: string, accountName: string, tableName: string, options?: TableCreateOptionalParams): Promise<TableCreateResponse>;
    /**
     * Creates a new table with the specified table name, under the specified account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param tableName A table name must be unique within a storage account and must be between 3 and 63
     *                  characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric
     *                  character.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, accountName: string, tableName: string, options?: TableUpdateOptionalParams): Promise<TableUpdateResponse>;
    /**
     * Gets the table with the specified table name, under the specified account if it exists.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param tableName A table name must be unique within a storage account and must be between 3 and 63
     *                  characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric
     *                  character.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, tableName: string, options?: TableGetOptionalParams): Promise<TableGetResponse>;
    /**
     * Deletes the table with the specified table name, under the specified account if it exists.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param tableName A table name must be unique within a storage account and must be between 3 and 63
     *                  characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric
     *                  character.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, tableName: string, options?: TableDeleteOptionalParams): Promise<void>;
}

/** The properties of a storage account’s Table service. */
export declare type TableServiceProperties = Resource & {
    /** Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service. */
    cors?: CorsRules;
};

/** Interface representing a TableServices. */
export declare interface TableServices {
    /**
     * List all table services for the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: TableServicesListOptionalParams): Promise<TableServicesListResponse>;
    /**
     * Sets the properties of a storage account’s Table service, including properties for Storage Analytics
     * and CORS (Cross-Origin Resource Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The properties of a storage account’s Table service, only properties for Storage
     *                   Analytics and CORS (Cross-Origin Resource Sharing) rules can be specified.
     * @param options The options parameters.
     */
    setServiceProperties(resourceGroupName: string, accountName: string, parameters: TableServiceProperties, options?: TableServicesSetServicePropertiesOptionalParams): Promise<TableServicesSetServicePropertiesResponse>;
    /**
     * Gets the properties of a storage account’s Table service, including properties for Storage Analytics
     * and CORS (Cross-Origin Resource Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    getServiceProperties(resourceGroupName: string, accountName: string, options?: TableServicesGetServicePropertiesOptionalParams): Promise<TableServicesGetServicePropertiesResponse>;
}

/** Optional parameters. */
export declare interface TableServicesGetServicePropertiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getServiceProperties operation. */
export declare type TableServicesGetServicePropertiesResponse = TableServiceProperties;

/** Optional parameters. */
export declare interface TableServicesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type TableServicesListResponse = ListTableServices;

/** Optional parameters. */
export declare interface TableServicesSetServicePropertiesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the setServiceProperties operation. */
export declare type TableServicesSetServicePropertiesResponse = TableServiceProperties;

/** Optional parameters. */
export declare interface TableUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type TableUpdateResponse = Table;

/** Blob index tag based filtering for blob objects */
export declare interface TagFilter {
    /** This is the filter tag name, it can have 1 - 128 characters */
    name: string;
    /** This is the comparison operator which is used for object comparison and filtering. Only == (equality operator) is currently supported */
    op: string;
    /** This is the filter tag value field used for tag based filtering, it can have 0 - 256 characters */
    value: string;
}

/** A tag of the LegalHold of a blob container. */
export declare interface TagProperty {
    /**
     * The tag value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tag?: string;
    /**
     * Returns the date and time the tag was added.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timestamp?: Date;
    /**
     * Returns the Object ID of the user who added the tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly objectIdentifier?: string;
    /**
     * Returns the Tenant ID that issued the token for the user who added the tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /**
     * Returns the User Principal Name of the user who added the tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly upn?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export declare type TrackedResource = Resource & {
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** The geo-location where the resource lives */
    location: string;
};

/** An update history of the ImmutabilityPolicy of a blob container. */
export declare interface UpdateHistoryProperty {
    /**
     * The ImmutabilityPolicy update type of a blob container, possible values include: put, lock and extend.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly update?: ImmutabilityPolicyUpdateType;
    /**
     * The immutability period for the blobs in the container since the policy creation, in days.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly immutabilityPeriodSinceCreationInDays?: number;
    /**
     * Returns the date and time the ImmutabilityPolicy was updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timestamp?: Date;
    /**
     * Returns the Object ID of the user who updated the ImmutabilityPolicy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly objectIdentifier?: string;
    /**
     * Returns the Tenant ID that issued the token for the user who updated the ImmutabilityPolicy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /**
     * Returns the User Principal Name of the user who updated the ImmutabilityPolicy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly upn?: string;
    /** This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. */
    allowProtectedAppendWrites?: boolean;
    /** This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive. */
    allowProtectedAppendWritesAll?: boolean;
}

/** Describes Storage Resource Usage. */
export declare interface Usage {
    /**
     * Gets the unit of measurement.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: UsageUnit;
    /**
     * Gets the current count of the allocated resources in the subscription.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentValue?: number;
    /**
     * Gets the maximum count of the resources that can be allocated in the subscription.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * Gets the name of the type of usage.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: UsageName;
}

/** The response from the List Usages operation. */
export declare interface UsageListResult {
    /** Gets or sets the list of Storage Resource Usages. */
    value?: Usage[];
}

/** The usage names that can be used; currently limited to StorageAccount. */
export declare interface UsageName {
    /**
     * Gets a string describing the resource name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: string;
    /**
     * Gets a localized string describing the resource name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly localizedValue?: string;
}

/** Interface representing a Usages. */
export declare interface Usages {
    /**
     * Gets the current usage count and the limit for the resources of the location under the subscription.
     * @param location The location of the Azure Storage resource.
     * @param options The options parameters.
     */
    listByLocation(location: string, options?: UsagesListByLocationOptionalParams): PagedAsyncIterableIterator<Usage>;
}

/** Optional parameters. */
export declare interface UsagesListByLocationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByLocation operation. */
export declare type UsagesListByLocationResponse = UsageListResult;

/** Defines values for UsageUnit. */
export declare type UsageUnit = "Count" | "Bytes" | "Seconds" | "Percent" | "CountsPerSecond" | "BytesPerSecond";

/** UserAssignedIdentity for the resource. */
export declare interface UserAssignedIdentity {
    /**
     * The principal ID of the identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The client ID of the identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
}

/** Virtual Network rule. */
export declare interface VirtualNetworkRule {
    /** Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}. */
    virtualNetworkResourceId: string;
    /** The action of virtual network rule. */
    action?: "Allow";
    /** Gets the state of virtual network rule. */
    state?: State;
}

export { }
