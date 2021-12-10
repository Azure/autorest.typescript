import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

/** An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. */
export declare interface AccessPolicyEntry {
    /** The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault. */
    tenantId: string;
    /** The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies. */
    objectId: string;
    /**  Application ID of the client making request on behalf of a principal */
    applicationId?: string;
    /** Permissions the identity has for keys, secrets and certificates. */
    permissions: Permissions_2;
}

/** Defines values for AccessPolicyUpdateKind. */
export declare type AccessPolicyUpdateKind = "add" | "replace" | "remove";

export declare interface Action {
    /** The type of action. */
    type?: KeyRotationPolicyActionType;
}

/**
 * Defines values for ActionsRequired. \
 * {@link KnownActionsRequired} can be used interchangeably with ActionsRequired,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**
 */
export declare type ActionsRequired = string;

/** The object attributes managed by the KeyVault service. */
export declare interface Attributes {
    /** Determines whether the object is enabled. */
    enabled?: boolean;
    /** Not before date in seconds since 1970-01-01T00:00:00Z. */
    notBefore?: Date;
    /** Expiry date in seconds since 1970-01-01T00:00:00Z. */
    expires?: Date;
    /**
     * Creation time in seconds since 1970-01-01T00:00:00Z.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly created?: Date;
    /**
     * Last updated time in seconds since 1970-01-01T00:00:00Z.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly updated?: Date;
}

/**
 * Defines values for CertificatePermissions. \
 * {@link KnownCertificatePermissions} can be used interchangeably with CertificatePermissions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **all** \
 * **get** \
 * **list** \
 * **delete** \
 * **create** \
 * **import** \
 * **update** \
 * **managecontacts** \
 * **getissuers** \
 * **listissuers** \
 * **setissuers** \
 * **deleteissuers** \
 * **manageissuers** \
 * **recover** \
 * **purge** \
 * **backup** \
 * **restore**
 */
export declare type CertificatePermissions = string;

/** The CheckNameAvailability operation response. */
export declare interface CheckNameAvailabilityResult {
    /**
     * A boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nameAvailable?: boolean;
    /**
     * The reason that a vault name could not be used. The Reason element is only returned if NameAvailable is false.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reason?: Reason;
    /**
     * An error message explaining the Reason value in more detail.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
}

/** An error response from Key Vault resource provider */
export declare interface CloudError {
    /** An error response from Key Vault resource provider */
    error?: CloudErrorBody;
}

/** An error response from Key Vault resource provider */
export declare interface CloudErrorBody {
    /** Error code. This is a mnemonic that can be consumed programmatically. */
    code?: string;
    /** User friendly error message. The message is typically localized and may vary with service version. */
    message?: string;
}

/** Defines values for CreateMode. */
export declare type CreateMode = "recover" | "default";

export declare interface DeletedManagedHsm {
    /**
     * The Azure Resource Manager resource ID for the deleted managed HSM Pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the managed HSM Pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The resource type of the managed HSM Pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Properties of the deleted managed HSM */
    properties?: DeletedManagedHsmProperties;
}

/** List of deleted managed HSM Pools */
export declare interface DeletedManagedHsmListResult {
    /** The list of deleted managed HSM Pools. */
    value?: DeletedManagedHsm[];
    /** The URL to get the next set of deleted managed HSM Pools. */
    nextLink?: string;
}

/** Properties of the deleted managed HSM. */
export declare interface DeletedManagedHsmProperties {
    /**
     * The resource id of the original managed HSM.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly mhsmId?: string;
    /**
     * The location of the original managed HSM.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * The deleted date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletionDate?: Date;
    /**
     * The scheduled purged date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly scheduledPurgeDate?: Date;
    /**
     * Purge protection status of the original managed HSM.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly purgeProtectionEnabled?: boolean;
    /**
     * Tags of the original managed HSM.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tags?: {
        [propertyName: string]: string;
    };
}

/** Deleted vault information with extended details. */
export declare interface DeletedVault {
    /**
     * The resource ID for the deleted key vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the key vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The resource type of the key vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Properties of the vault */
    properties?: DeletedVaultProperties;
}

/** List of vaults */
export declare interface DeletedVaultListResult {
    /** The list of deleted vaults. */
    value?: DeletedVault[];
    /** The URL to get the next set of deleted vaults. */
    nextLink?: string;
}

/** Properties of the deleted vault. */
export declare interface DeletedVaultProperties {
    /**
     * The resource id of the original vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vaultId?: string;
    /**
     * The location of the original vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * The deleted date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletionDate?: Date;
    /**
     * The scheduled purged date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly scheduledPurgeDate?: Date;
    /**
     * Tags of the original vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tags?: {
        [propertyName: string]: string;
    };
    /**
     * Purge protection status of the original vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly purgeProtectionEnabled?: boolean;
}

/**
 * Defines values for DeletionRecoveryLevel. \
 * {@link KnownDeletionRecoveryLevel} can be used interchangeably with DeletionRecoveryLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Purgeable** \
 * **Recoverable+Purgeable** \
 * **Recoverable** \
 * **Recoverable+ProtectedSubscription**
 */
export declare type DeletionRecoveryLevel = string;

/** Type of operation: get, read, delete, etc. */
export declare interface DimensionProperties {
    /** Name of dimension. */
    name?: string;
    /** Display name of dimension. */
    displayName?: string;
    /** Property to specify whether the dimension should be exported for Shoebox. */
    toBeExportedForShoebox?: boolean;
}

/** The server error. */
export declare interface ErrorModel {
    /**
     * The error code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly code?: string;
    /**
     * The error message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
    /**
     * The inner error, contains a more specific error code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly innerError?: ErrorModel;
}

/**
 * Defines values for IdentityType. \
 * {@link KnownIdentityType} can be used interchangeably with IdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export declare type IdentityType = string;

/** A rule governing the accessibility of a vault from a specific ip address or ip range. */
export declare interface IPRule {
    /** An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78). */
    value: string;
}

/**
 * Defines values for JsonWebKeyCurveName. \
 * {@link KnownJsonWebKeyCurveName} can be used interchangeably with JsonWebKeyCurveName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **P-256** \
 * **P-384** \
 * **P-521** \
 * **P-256K**
 */
export declare type JsonWebKeyCurveName = string;

/**
 * Defines values for JsonWebKeyOperation. \
 * {@link KnownJsonWebKeyOperation} can be used interchangeably with JsonWebKeyOperation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **encrypt** \
 * **decrypt** \
 * **sign** \
 * **verify** \
 * **wrapKey** \
 * **unwrapKey** \
 * **import** \
 * **release**
 */
export declare type JsonWebKeyOperation = string;

/**
 * Defines values for JsonWebKeyType. \
 * {@link KnownJsonWebKeyType} can be used interchangeably with JsonWebKeyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EC** \
 * **EC-HSM** \
 * **RSA** \
 * **RSA-HSM**
 */
export declare type JsonWebKeyType = string;

/** The key resource. */
export declare type Key = Resource & {
    /** The attributes of the key. */
    attributes?: KeyAttributes;
    /** The type of the key. For valid values, see JsonWebKeyType. */
    kty?: JsonWebKeyType;
    keyOps?: JsonWebKeyOperation[];
    /** The key size in bits. For example: 2048, 3072, or 4096 for RSA. */
    keySize?: number;
    /** The elliptic curve name. For valid values, see JsonWebKeyCurveName. */
    curveName?: JsonWebKeyCurveName;
    /**
     * The URI to retrieve the current version of the key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keyUri?: string;
    /**
     * The URI to retrieve the specific version of the key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keyUriWithVersion?: string;
    /** Key rotation policy in response. It will be used for both output and input. Omitted if empty */
    rotationPolicy?: RotationPolicy;
    /** Key release policy in response. It will be used for both output and input. Omitted if empty */
    releasePolicy?: KeyReleasePolicy;
};

/** The object attributes managed by the Azure Key Vault service. */
export declare interface KeyAttributes {
    /** Determines whether or not the object is enabled. */
    enabled?: boolean;
    /** Not before date in seconds since 1970-01-01T00:00:00Z. */
    notBefore?: number;
    /** Expiry date in seconds since 1970-01-01T00:00:00Z. */
    expires?: number;
    /**
     * Creation time in seconds since 1970-01-01T00:00:00Z.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly created?: number;
    /**
     * Last updated time in seconds since 1970-01-01T00:00:00Z.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly updated?: number;
    /**
     * The deletion recovery level currently in effect for the object. If it contains 'Purgeable', then the object can be permanently deleted by a privileged user; otherwise, only the system can purge the object at the end of the retention interval.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly recoveryLevel?: DeletionRecoveryLevel;
    /** Indicates if the private key can be exported. */
    exportable?: boolean;
}

/** The parameters used to create a key. */
export declare interface KeyCreateParameters {
    /** The tags that will be assigned to the key. */
    tags?: {
        [propertyName: string]: string;
    };
    /** The properties of the key to be created. */
    properties: KeyProperties;
}

/** The page of keys. */
export declare interface KeyListResult {
    /** The key resources. */
    value?: Key[];
    /** The URL to get the next page of keys. */
    nextLink?: string;
}

/**
 * Defines values for KeyPermissions. \
 * {@link KnownKeyPermissions} can be used interchangeably with KeyPermissions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **all** \
 * **encrypt** \
 * **decrypt** \
 * **wrapKey** \
 * **unwrapKey** \
 * **sign** \
 * **verify** \
 * **get** \
 * **list** \
 * **create** \
 * **update** \
 * **import** \
 * **delete** \
 * **backup** \
 * **restore** \
 * **recover** \
 * **purge** \
 * **rotate** \
 * **getrotationpolicy** \
 * **setrotationpolicy** \
 * **release**
 */
export declare type KeyPermissions = string;

/** The properties of the key. */
export declare interface KeyProperties {
    /** The attributes of the key. */
    attributes?: KeyAttributes;
    /** The type of the key. For valid values, see JsonWebKeyType. */
    kty?: JsonWebKeyType;
    keyOps?: JsonWebKeyOperation[];
    /** The key size in bits. For example: 2048, 3072, or 4096 for RSA. */
    keySize?: number;
    /** The elliptic curve name. For valid values, see JsonWebKeyCurveName. */
    curveName?: JsonWebKeyCurveName;
    /**
     * The URI to retrieve the current version of the key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keyUri?: string;
    /**
     * The URI to retrieve the specific version of the key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly keyUriWithVersion?: string;
    /** Key rotation policy in response. It will be used for both output and input. Omitted if empty */
    rotationPolicy?: RotationPolicy;
    /** Key release policy in response. It will be used for both output and input. Omitted if empty */
    releasePolicy?: KeyReleasePolicy;
}

export declare interface KeyReleasePolicy {
    /** Content type and version of key release policy */
    contentType?: string;
    /** Blob encoding the policy rules under which the key can be released. */
    data?: Uint8Array;
}

/** Defines values for KeyRotationPolicyActionType. */
export declare type KeyRotationPolicyActionType = "rotate" | "notify";

export declare interface KeyRotationPolicyAttributes {
    /**
     * Creation time in seconds since 1970-01-01T00:00:00Z.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly created?: number;
    /**
     * Last updated time in seconds since 1970-01-01T00:00:00Z.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly updated?: number;
    /** The expiration time for the new key version. It should be in ISO8601 format. Eg: 'P90D', 'P1Y'. */
    expiryTime?: string;
}

/** Interface representing a Keys. */
export declare interface Keys {
    /**
     * Lists the keys in the specified key vault.
     * @param resourceGroupName The name of the resource group which contains the specified key vault.
     * @param vaultName The name of the vault which contains the keys to be retrieved.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, vaultName: string, options?: KeysListOptionalParams): PagedAsyncIterableIterator<Key>;
    /**
     * Lists the versions of the specified key in the specified key vault.
     * @param resourceGroupName The name of the resource group which contains the specified key vault.
     * @param vaultName The name of the vault which contains the key versions to be retrieved.
     * @param keyName The name of the key versions to be retrieved.
     * @param options The options parameters.
     */
    listVersions(resourceGroupName: string, vaultName: string, keyName: string, options?: KeysListVersionsOptionalParams): PagedAsyncIterableIterator<Key>;
    /**
     * Creates the first version of a new key if it does not exist. If it already exists, then the existing
     * key is returned without any write operations being performed. This API does not create subsequent
     * versions, and does not update existing keys.
     * @param resourceGroupName The name of the resource group which contains the specified key vault.
     * @param vaultName The name of the key vault which contains the key to be created.
     * @param keyName The name of the key to be created.
     * @param parameters The parameters used to create the specified key.
     * @param options The options parameters.
     */
    createIfNotExist(resourceGroupName: string, vaultName: string, keyName: string, parameters: KeyCreateParameters, options?: KeysCreateIfNotExistOptionalParams): Promise<KeysCreateIfNotExistResponse>;
    /**
     * Gets the current version of the specified key from the specified key vault.
     * @param resourceGroupName The name of the resource group which contains the specified key vault.
     * @param vaultName The name of the vault which contains the key to be retrieved.
     * @param keyName The name of the key to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vaultName: string, keyName: string, options?: KeysGetOptionalParams): Promise<KeysGetResponse>;
    /**
     * Gets the specified version of the specified key in the specified key vault.
     * @param resourceGroupName The name of the resource group which contains the specified key vault.
     * @param vaultName The name of the vault which contains the key version to be retrieved.
     * @param keyName The name of the key version to be retrieved.
     * @param keyVersion The version of the key to be retrieved.
     * @param options The options parameters.
     */
    getVersion(resourceGroupName: string, vaultName: string, keyName: string, keyVersion: string, options?: KeysGetVersionOptionalParams): Promise<KeysGetVersionResponse>;
}

/** Optional parameters. */
export declare interface KeysCreateIfNotExistOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createIfNotExist operation. */
export declare type KeysCreateIfNotExistResponse = Key;

/** Optional parameters. */
export declare interface KeysGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type KeysGetResponse = Key;

/** Optional parameters. */
export declare interface KeysGetVersionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getVersion operation. */
export declare type KeysGetVersionResponse = Key;

/** Optional parameters. */
export declare interface KeysListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type KeysListNextResponse = KeyListResult;

/** Optional parameters. */
export declare interface KeysListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type KeysListResponse = KeyListResult;

/** Optional parameters. */
export declare interface KeysListVersionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVersionsNext operation. */
export declare type KeysListVersionsNextResponse = KeyListResult;

/** Optional parameters. */
export declare interface KeysListVersionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVersions operation. */
export declare type KeysListVersionsResponse = KeyListResult;

export declare class KeyVaultManagementClient extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    apiVersion: string;
    /**
     * Initializes a new instance of the KeyVaultManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
     *                       The subscription ID forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: KeyVaultManagementClientOptionalParams);
    keys: Keys;
    vaults: Vaults;
    privateEndpointConnections: PrivateEndpointConnections;
    privateLinkResources: PrivateLinkResources;
    managedHsms: ManagedHsms;
    mhsmPrivateEndpointConnections: MhsmPrivateEndpointConnections;
    mhsmPrivateLinkResources: MhsmPrivateLinkResources;
    operations: Operations;
    secrets: Secrets;
}

/** Optional parameters. */
export declare interface KeyVaultManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Known values of {@link ActionsRequired} that the service accepts. */
export declare enum KnownActionsRequired {
    None = "None"
}

/** Known values of {@link CertificatePermissions} that the service accepts. */
export declare enum KnownCertificatePermissions {
    All = "all",
    Get = "get",
    List = "list",
    Delete = "delete",
    Create = "create",
    Import = "import",
    Update = "update",
    Managecontacts = "managecontacts",
    Getissuers = "getissuers",
    Listissuers = "listissuers",
    Setissuers = "setissuers",
    Deleteissuers = "deleteissuers",
    Manageissuers = "manageissuers",
    Recover = "recover",
    Purge = "purge",
    Backup = "backup",
    Restore = "restore"
}

/** Known values of {@link DeletionRecoveryLevel} that the service accepts. */
export declare enum KnownDeletionRecoveryLevel {
    Purgeable = "Purgeable",
    RecoverablePurgeable = "Recoverable+Purgeable",
    Recoverable = "Recoverable",
    RecoverableProtectedSubscription = "Recoverable+ProtectedSubscription"
}

/** Known values of {@link IdentityType} that the service accepts. */
export declare enum KnownIdentityType {
    User = "User",
    Application = "Application",
    ManagedIdentity = "ManagedIdentity",
    Key = "Key"
}

/** Known values of {@link JsonWebKeyCurveName} that the service accepts. */
export declare enum KnownJsonWebKeyCurveName {
    P256 = "P-256",
    P384 = "P-384",
    P521 = "P-521",
    P256K = "P-256K"
}

/** Known values of {@link JsonWebKeyOperation} that the service accepts. */
export declare enum KnownJsonWebKeyOperation {
    Encrypt = "encrypt",
    Decrypt = "decrypt",
    Sign = "sign",
    Verify = "verify",
    WrapKey = "wrapKey",
    UnwrapKey = "unwrapKey",
    Import = "import",
    Release = "release"
}

/** Known values of {@link JsonWebKeyType} that the service accepts. */
export declare enum KnownJsonWebKeyType {
    EC = "EC",
    ECHSM = "EC-HSM",
    RSA = "RSA",
    RSAHSM = "RSA-HSM"
}

/** Known values of {@link KeyPermissions} that the service accepts. */
export declare enum KnownKeyPermissions {
    All = "all",
    Encrypt = "encrypt",
    Decrypt = "decrypt",
    WrapKey = "wrapKey",
    UnwrapKey = "unwrapKey",
    Sign = "sign",
    Verify = "verify",
    Get = "get",
    List = "list",
    Create = "create",
    Update = "update",
    Import = "import",
    Delete = "delete",
    Backup = "backup",
    Restore = "restore",
    Recover = "recover",
    Purge = "purge",
    Rotate = "rotate",
    Getrotationpolicy = "getrotationpolicy",
    Setrotationpolicy = "setrotationpolicy",
    Release = "release"
}

/** Known values of {@link ManagedHsmSkuFamily} that the service accepts. */
export declare enum KnownManagedHsmSkuFamily {
    B = "B"
}

/** Known values of {@link NetworkRuleAction} that the service accepts. */
export declare enum KnownNetworkRuleAction {
    Allow = "Allow",
    Deny = "Deny"
}

/** Known values of {@link NetworkRuleBypassOptions} that the service accepts. */
export declare enum KnownNetworkRuleBypassOptions {
    AzureServices = "AzureServices",
    None = "None"
}

/** Known values of {@link PrivateEndpointConnectionProvisioningState} that the service accepts. */
export declare enum KnownPrivateEndpointConnectionProvisioningState {
    Succeeded = "Succeeded",
    Creating = "Creating",
    Updating = "Updating",
    Deleting = "Deleting",
    Failed = "Failed",
    Disconnected = "Disconnected"
}

/** Known values of {@link PrivateEndpointServiceConnectionStatus} that the service accepts. */
export declare enum KnownPrivateEndpointServiceConnectionStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected",
    Disconnected = "Disconnected"
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export declare enum KnownProvisioningState {
    /** The managed HSM Pool has been full provisioned. */
    Succeeded = "Succeeded",
    /** The managed HSM Pool is currently being provisioned. */
    Provisioning = "Provisioning",
    /** Provisioning of the managed HSM Pool has failed. */
    Failed = "Failed",
    /** The managed HSM Pool is currently being updated. */
    Updating = "Updating",
    /** The managed HSM Pool is currently being deleted. */
    Deleting = "Deleting",
    /** The managed HSM pool is ready for normal use. */
    Activated = "Activated",
    /** The managed HSM pool is waiting for a security domain restore action. */
    SecurityDomainRestore = "SecurityDomainRestore",
    /** The managed HSM pool is being restored from full HSM backup. */
    Restoring = "Restoring"
}

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export declare enum KnownPublicNetworkAccess {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link SecretPermissions} that the service accepts. */
export declare enum KnownSecretPermissions {
    All = "all",
    Get = "get",
    List = "list",
    Set = "set",
    Delete = "delete",
    Backup = "backup",
    Restore = "restore",
    Recover = "recover",
    Purge = "purge"
}

/** Known values of {@link SkuFamily} that the service accepts. */
export declare enum KnownSkuFamily {
    A = "A"
}

/** Known values of {@link StoragePermissions} that the service accepts. */
export declare enum KnownStoragePermissions {
    All = "all",
    Get = "get",
    List = "list",
    Delete = "delete",
    Set = "set",
    Update = "update",
    Regeneratekey = "regeneratekey",
    Recover = "recover",
    Purge = "purge",
    Backup = "backup",
    Restore = "restore",
    Setsas = "setsas",
    Listsas = "listsas",
    Getsas = "getsas",
    Deletesas = "deletesas"
}

/** Known values of {@link VaultProvisioningState} that the service accepts. */
export declare enum KnownVaultProvisioningState {
    Succeeded = "Succeeded",
    RegisteringDns = "RegisteringDns"
}

export declare interface LifetimeAction {
    /** The trigger of key rotation policy lifetimeAction. */
    trigger?: Trigger;
    /** The action of key rotation policy lifetimeAction. */
    action?: Action;
}

/** Log specification of operation. */
export declare interface LogSpecification {
    /** Name of log specification. */
    name?: string;
    /** Display name of log specification. */
    displayName?: string;
    /** Blob duration of specification. */
    blobDuration?: string;
}

/** Resource information with extended details. */
export declare type ManagedHsm = ManagedHsmResource & {
    /** Properties of the managed HSM */
    properties?: ManagedHsmProperties;
};

/** The error exception. */
export declare interface ManagedHsmError {
    /**
     * The server error.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly error?: ErrorModel;
}

/** List of managed HSM Pools */
export declare interface ManagedHsmListResult {
    /** The list of managed HSM Pools. */
    value?: ManagedHsm[];
    /** The URL to get the next set of managed HSM Pools. */
    nextLink?: string;
}

/** Properties of the managed HSM Pool */
export declare interface ManagedHsmProperties {
    /** The Azure Active Directory tenant ID that should be used for authenticating requests to the managed HSM pool. */
    tenantId?: string;
    /** Array of initial administrators object ids for this managed hsm pool. */
    initialAdminObjectIds?: string[];
    /**
     * The URI of the managed hsm pool for performing operations on keys.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hsmUri?: string;
    /** Property to specify whether the 'soft delete' functionality is enabled for this managed HSM pool. If it's not set to any value(true or false) when creating new managed HSM pool, it will be set to true by default. Once set to true, it cannot be reverted to false. */
    enableSoftDelete?: boolean;
    /** softDelete data retention days. It accepts >=7 and <=90. */
    softDeleteRetentionInDays?: number;
    /** Property specifying whether protection against purge is enabled for this managed HSM pool. Setting this property to true activates protection against purge for this managed HSM pool and its content - only the Managed HSM service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible. */
    enablePurgeProtection?: boolean;
    /** The create mode to indicate whether the resource is being created or is being recovered from a deleted resource. */
    createMode?: CreateMode;
    /**
     * Resource Status Message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statusMessage?: string;
    /**
     * Provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Rules governing the accessibility of the key vault from specific network locations. */
    networkAcls?: MhsmNetworkRuleSet;
    /**
     * List of private endpoint connections associated with the managed hsm pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpointConnections?: MhsmPrivateEndpointConnectionItem[];
    /** Control permission for data plane traffic coming from public networks while private endpoint is enabled. */
    publicNetworkAccess?: PublicNetworkAccess;
    /**
     * The scheduled purge date in UTC.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly scheduledPurgeDate?: Date;
}

/** Managed HSM resource */
export declare interface ManagedHsmResource {
    /**
     * The Azure Resource Manager resource ID for the managed HSM Pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the managed HSM Pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The resource type of the managed HSM Pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The supported Azure location where the managed HSM Pool should be created. */
    location?: string;
    /** SKU details */
    sku?: ManagedHsmSku;
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * Metadata pertaining to creation and last modification of the key vault resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly systemData?: SystemData;
}

/** Interface representing a ManagedHsms. */
export declare interface ManagedHsms {
    /**
     * The List operation gets information about the managed HSM Pools associated with the subscription and
     * within the specified resource group.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ManagedHsmsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ManagedHsm>;
    /**
     * The List operation gets information about the managed HSM Pools associated with the subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: ManagedHsmsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<ManagedHsm>;
    /**
     * The List operation gets information about the deleted managed HSMs associated with the subscription.
     * @param options The options parameters.
     */
    listDeleted(options?: ManagedHsmsListDeletedOptionalParams): PagedAsyncIterableIterator<DeletedManagedHsm>;
    /**
     * Create or update a managed HSM Pool in the specified subscription.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param parameters Parameters to create or update the managed HSM Pool
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, name: string, parameters: ManagedHsm, options?: ManagedHsmsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedHsmsCreateOrUpdateResponse>, ManagedHsmsCreateOrUpdateResponse>>;
    /**
     * Create or update a managed HSM Pool in the specified subscription.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param parameters Parameters to create or update the managed HSM Pool
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, name: string, parameters: ManagedHsm, options?: ManagedHsmsCreateOrUpdateOptionalParams): Promise<ManagedHsmsCreateOrUpdateResponse>;
    /**
     * Update a managed HSM Pool in the specified subscription.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param parameters Parameters to patch the managed HSM Pool
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, name: string, parameters: ManagedHsm, options?: ManagedHsmsUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedHsmsUpdateResponse>, ManagedHsmsUpdateResponse>>;
    /**
     * Update a managed HSM Pool in the specified subscription.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param parameters Parameters to patch the managed HSM Pool
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, name: string, parameters: ManagedHsm, options?: ManagedHsmsUpdateOptionalParams): Promise<ManagedHsmsUpdateResponse>;
    /**
     * Deletes the specified managed HSM Pool.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name The name of the managed HSM Pool to delete
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, name: string, options?: ManagedHsmsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified managed HSM Pool.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name The name of the managed HSM Pool to delete
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, name: string, options?: ManagedHsmsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified managed HSM Pool.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name The name of the managed HSM Pool.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, name: string, options?: ManagedHsmsGetOptionalParams): Promise<ManagedHsmsGetResponse>;
    /**
     * Gets the specified deleted managed HSM.
     * @param name The name of the deleted managed HSM.
     * @param location The location of the deleted managed HSM.
     * @param options The options parameters.
     */
    getDeleted(name: string, location: string, options?: ManagedHsmsGetDeletedOptionalParams): Promise<ManagedHsmsGetDeletedResponse>;
    /**
     * Permanently deletes the specified managed HSM.
     * @param name The name of the soft-deleted managed HSM.
     * @param location The location of the soft-deleted managed HSM.
     * @param options The options parameters.
     */
    beginPurgeDeleted(name: string, location: string, options?: ManagedHsmsPurgeDeletedOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Permanently deletes the specified managed HSM.
     * @param name The name of the soft-deleted managed HSM.
     * @param location The location of the soft-deleted managed HSM.
     * @param options The options parameters.
     */
    beginPurgeDeletedAndWait(name: string, location: string, options?: ManagedHsmsPurgeDeletedOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ManagedHsmsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedHsmsCreateOrUpdateResponse = ManagedHsm;

/** Optional parameters. */
export declare interface ManagedHsmsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ManagedHsmsGetDeletedOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDeleted operation. */
export declare type ManagedHsmsGetDeletedResponse = DeletedManagedHsm;

/** Optional parameters. */
export declare interface ManagedHsmsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedHsmsGetResponse = ManagedHsm;

/** SKU details */
export declare interface ManagedHsmSku {
    /** SKU Family of the managed HSM Pool */
    family: ManagedHsmSkuFamily;
    /** SKU of the managed HSM Pool */
    name: ManagedHsmSkuName;
}

/**
 * Defines values for ManagedHsmSkuFamily. \
 * {@link KnownManagedHsmSkuFamily} can be used interchangeably with ManagedHsmSkuFamily,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **B**
 */
export declare type ManagedHsmSkuFamily = string;

/** Defines values for ManagedHsmSkuName. */
export declare type ManagedHsmSkuName = "Standard_B1" | "Custom_B32";

/** Optional parameters. */
export declare interface ManagedHsmsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ManagedHsmsListByResourceGroupNextResponse = ManagedHsmListResult;

/** Optional parameters. */
export declare interface ManagedHsmsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ManagedHsmsListByResourceGroupResponse = ManagedHsmListResult;

/** Optional parameters. */
export declare interface ManagedHsmsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type ManagedHsmsListBySubscriptionNextResponse = ManagedHsmListResult;

/** Optional parameters. */
export declare interface ManagedHsmsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listBySubscription operation. */
export declare type ManagedHsmsListBySubscriptionResponse = ManagedHsmListResult;

/** Optional parameters. */
export declare interface ManagedHsmsListDeletedNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeletedNext operation. */
export declare type ManagedHsmsListDeletedNextResponse = DeletedManagedHsmListResult;

/** Optional parameters. */
export declare interface ManagedHsmsListDeletedOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeleted operation. */
export declare type ManagedHsmsListDeletedResponse = DeletedManagedHsmListResult;

/** Optional parameters. */
export declare interface ManagedHsmsPurgeDeletedOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ManagedHsmsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type ManagedHsmsUpdateResponse = ManagedHsm;

/** Metric specification of operation. */
export declare interface MetricSpecification {
    /** Name of metric specification. */
    name?: string;
    /** Display name of metric specification. */
    displayName?: string;
    /** Display description of metric specification. */
    displayDescription?: string;
    /** The metric unit. Possible values include: 'Bytes', 'Count', 'Milliseconds'. */
    unit?: string;
    /** The metric aggregation type. Possible values include: 'Average', 'Count', 'Total'. */
    aggregationType?: string;
    /** The supported aggregation types for the metrics. */
    supportedAggregationTypes?: string[];
    /** The supported time grain types for the metrics. */
    supportedTimeGrainTypes?: string[];
    /** The metric lock aggregation type. */
    lockAggregationType?: string;
    /** The dimensions of metric */
    dimensions?: DimensionProperties[];
    /** Property to specify whether to fill gap with zero. */
    fillGapWithZero?: boolean;
    /** The internal metric name. */
    internalMetricName?: string;
}

/** A rule governing the accessibility of a managed hsm pool from a specific ip address or ip range. */
export declare interface MhsmipRule {
    /** An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78). */
    value: string;
}

/** A set of rules governing the network accessibility of a managed hsm pool. */
export declare interface MhsmNetworkRuleSet {
    /** Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'. */
    bypass?: NetworkRuleBypassOptions;
    /** The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated. */
    defaultAction?: NetworkRuleAction;
    /** The list of IP address rules. */
    ipRules?: MhsmipRule[];
    /** The list of virtual network rules. */
    virtualNetworkRules?: MhsmVirtualNetworkRule[];
}

/** Private endpoint object properties. */
export declare interface MhsmPrivateEndpoint {
    /**
     * Full identifier of the private endpoint resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
}

/** Private endpoint connection resource. */
export declare type MhsmPrivateEndpointConnection = ManagedHsmResource & {
    /** Modified whenever there is a change in the state of private endpoint connection. */
    etag?: string;
    /** Properties of the private endpoint object. */
    privateEndpoint?: MhsmPrivateEndpoint;
    /** Approval state of the private link connection. */
    privateLinkServiceConnectionState?: MhsmPrivateLinkServiceConnectionState;
    /** Provisioning state of the private endpoint connection. */
    provisioningState?: PrivateEndpointConnectionProvisioningState;
};

/** Private endpoint connection item. */
export declare interface MhsmPrivateEndpointConnectionItem {
    /** Properties of the private endpoint object. */
    privateEndpoint?: MhsmPrivateEndpoint;
    /** Approval state of the private link connection. */
    privateLinkServiceConnectionState?: MhsmPrivateLinkServiceConnectionState;
    /** Provisioning state of the private endpoint connection. */
    provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/** Interface representing a MhsmPrivateEndpointConnections. */
export declare interface MhsmPrivateEndpointConnections {
    /**
     * The List operation gets information about the private endpoint connections associated with the
     * managed HSM Pool.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param options The options parameters.
     */
    listByResource(resourceGroupName: string, name: string, options?: MhsmPrivateEndpointConnectionsListByResourceOptionalParams): PagedAsyncIterableIterator<MhsmPrivateEndpointConnection>;
    /**
     * Gets the specified private endpoint connection associated with the managed HSM Pool.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the
     *                                      managed hsm pool.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, name: string, privateEndpointConnectionName: string, options?: MhsmPrivateEndpointConnectionsGetOptionalParams): Promise<MhsmPrivateEndpointConnectionsGetResponse>;
    /**
     * Updates the specified private endpoint connection associated with the managed hsm pool.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the
     *                                      managed hsm pool.
     * @param properties The intended state of private endpoint connection.
     * @param options The options parameters.
     */
    put(resourceGroupName: string, name: string, privateEndpointConnectionName: string, properties: MhsmPrivateEndpointConnection, options?: MhsmPrivateEndpointConnectionsPutOptionalParams): Promise<MhsmPrivateEndpointConnectionsPutResponse>;
    /**
     * Deletes the specified private endpoint connection associated with the managed hsm pool.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the
     *                                      managed hsm pool.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, name: string, privateEndpointConnectionName: string, options?: MhsmPrivateEndpointConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<MhsmPrivateEndpointConnectionsDeleteResponse>, MhsmPrivateEndpointConnectionsDeleteResponse>>;
    /**
     * Deletes the specified private endpoint connection associated with the managed hsm pool.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the
     *                                      managed hsm pool.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, name: string, privateEndpointConnectionName: string, options?: MhsmPrivateEndpointConnectionsDeleteOptionalParams): Promise<MhsmPrivateEndpointConnectionsDeleteResponse>;
}

/** Defines headers for MhsmPrivateEndpointConnections_delete operation. */
export declare interface MhsmPrivateEndpointConnectionsDeleteHeaders {
    /** The recommended number of seconds to wait before calling the URI specified in the location header. */
    retryAfter?: number;
    /** The URI to poll for completion status. */
    location?: string;
}

/** Optional parameters. */
export declare interface MhsmPrivateEndpointConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export declare type MhsmPrivateEndpointConnectionsDeleteResponse = MhsmPrivateEndpointConnection;

/** Optional parameters. */
export declare interface MhsmPrivateEndpointConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type MhsmPrivateEndpointConnectionsGetResponse = MhsmPrivateEndpointConnection;

/** Optional parameters. */
export declare interface MhsmPrivateEndpointConnectionsListByResourceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceNext operation. */
export declare type MhsmPrivateEndpointConnectionsListByResourceNextResponse = MhsmPrivateEndpointConnectionsListResult;

/** Optional parameters. */
export declare interface MhsmPrivateEndpointConnectionsListByResourceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResource operation. */
export declare type MhsmPrivateEndpointConnectionsListByResourceResponse = MhsmPrivateEndpointConnectionsListResult;

/** List of private endpoint connections associated with a managed HSM Pools */
export declare interface MhsmPrivateEndpointConnectionsListResult {
    /** The private endpoint connection associated with a managed HSM Pools. */
    value?: MhsmPrivateEndpointConnection[];
    /** The URL to get the next set of managed HSM Pools. */
    nextLink?: string;
}

/** Defines headers for MhsmPrivateEndpointConnections_put operation. */
export declare interface MhsmPrivateEndpointConnectionsPutHeaders {
    /** (specified only if operation does not finish synchronously) The recommended number of seconds to wait before calling the URI specified in Azure-AsyncOperation. */
    retryAfter?: number;
    /** (specified only if operation does not finish synchronously) The URI to poll for completion status. The response of this URI may be synchronous or asynchronous. */
    azureAsyncOperation?: string;
}

/** Optional parameters. */
export declare interface MhsmPrivateEndpointConnectionsPutOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the put operation. */
export declare type MhsmPrivateEndpointConnectionsPutResponse = MhsmPrivateEndpointConnectionsPutHeaders & MhsmPrivateEndpointConnection;

/** A private link resource */
export declare type MhsmPrivateLinkResource = ManagedHsmResource & {
    /**
     * Group identifier of private link resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly groupId?: string;
    /**
     * Required member names of private link resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requiredMembers?: string[];
    /** Required DNS zone names of the the private link resource. */
    requiredZoneNames?: string[];
};

/** A list of private link resources */
export declare interface MhsmPrivateLinkResourceListResult {
    /** Array of private link resources */
    value?: MhsmPrivateLinkResource[];
}

/** Interface representing a MhsmPrivateLinkResources. */
export declare interface MhsmPrivateLinkResources {
    /**
     * Gets the private link resources supported for the managed hsm pool.
     * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
     * @param name Name of the managed HSM Pool
     * @param options The options parameters.
     */
    listByMhsmResource(resourceGroupName: string, name: string, options?: MhsmPrivateLinkResourcesListByMhsmResourceOptionalParams): Promise<MhsmPrivateLinkResourcesListByMhsmResourceResponse>;
}

/** Optional parameters. */
export declare interface MhsmPrivateLinkResourcesListByMhsmResourceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByMhsmResource operation. */
export declare type MhsmPrivateLinkResourcesListByMhsmResourceResponse = MhsmPrivateLinkResourceListResult;

/** An object that represents the approval state of the private link connection. */
export declare interface MhsmPrivateLinkServiceConnectionState {
    /** Indicates whether the connection has been approved, rejected or removed by the key vault owner. */
    status?: PrivateEndpointServiceConnectionStatus;
    /** The reason for approval or rejection. */
    description?: string;
    /** A message indicating if changes on the service provider require any updates on the consumer. */
    actionsRequired?: ActionsRequired;
}

/** A rule governing the accessibility of a managed hsm pool from a specific virtual network. */
export declare interface MhsmVirtualNetworkRule {
    /** Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'. */
    id: string;
}

/**
 * Defines values for NetworkRuleAction. \
 * {@link KnownNetworkRuleAction} can be used interchangeably with NetworkRuleAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export declare type NetworkRuleAction = string;

/**
 * Defines values for NetworkRuleBypassOptions. \
 * {@link KnownNetworkRuleBypassOptions} can be used interchangeably with NetworkRuleBypassOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzureServices** \
 * **None**
 */
export declare type NetworkRuleBypassOptions = string;

/** A set of rules governing the network accessibility of a vault. */
export declare interface NetworkRuleSet {
    /** Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'. */
    bypass?: NetworkRuleBypassOptions;
    /** The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated. */
    defaultAction?: NetworkRuleAction;
    /** The list of IP address rules. */
    ipRules?: IPRule[];
    /** The list of virtual network rules. */
    virtualNetworkRules?: VirtualNetworkRule[];
}

/** Key Vault REST API operation definition. */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** Display metadata associated with the operation. */
    display?: OperationDisplay;
    /** The origin of operations. */
    origin?: string;
    /** Property to specify whether the action is a data action. */
    isDataAction?: boolean;
    /** One property of operation, include metric specifications. */
    serviceSpecification?: ServiceSpecification;
}

/** Display metadata associated with the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft Key Vault. */
    provider?: string;
    /** Resource on which the operation is performed etc. */
    resource?: string;
    /** Type of operation: get, read, delete, etc. */
    operation?: string;
    /** Description of operation. */
    description?: string;
}

/** Result of the request to list Storage operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of Storage operations supported by the Storage resource provider. */
    value?: Operation[];
    /** The URL to get the next set of operations. */
    nextLink?: string;
}

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Lists all of the available Key Vault Rest API operations.
     * @param options The options parameters.
     */
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

/** Optional parameters. */
export declare interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type OperationsListResponse = OperationListResult;

/** Permissions the identity has for keys, secrets, certificates and storage. */
declare interface Permissions_2 {
    /** Permissions to keys */
    keys?: KeyPermissions[];
    /** Permissions to secrets */
    secrets?: SecretPermissions[];
    /** Permissions to certificates */
    certificates?: CertificatePermissions[];
    /** Permissions to storage accounts */
    storage?: StoragePermissions[];
}
export { Permissions_2 as Permissions }

/** Private endpoint object properties. */
export declare interface PrivateEndpoint {
    /**
     * Full identifier of the private endpoint resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
}

/** Private endpoint connection resource. */
export declare type PrivateEndpointConnection = Resource & {
    /** Modified whenever there is a change in the state of private endpoint connection. */
    etag?: string;
    /** Properties of the private endpoint object. */
    privateEndpoint?: PrivateEndpoint;
    /** Approval state of the private link connection. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    /** Provisioning state of the private endpoint connection. */
    provisioningState?: PrivateEndpointConnectionProvisioningState;
};

/** Private endpoint connection item. */
export declare interface PrivateEndpointConnectionItem {
    /** Id of private endpoint connection. */
    id?: string;
    /** Modified whenever there is a change in the state of private endpoint connection. */
    etag?: string;
    /** Properties of the private endpoint object. */
    privateEndpoint?: PrivateEndpoint;
    /** Approval state of the private link connection. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    /** Provisioning state of the private endpoint connection. */
    provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/** List of private endpoint connections. */
export declare interface PrivateEndpointConnectionListResult {
    /** The list of private endpoint connections. */
    value?: PrivateEndpointConnection[];
    /** The URL to get the next set of private endpoint connections. */
    nextLink?: string;
}

/**
 * Defines values for PrivateEndpointConnectionProvisioningState. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Failed** \
 * **Disconnected**
 */
export declare type PrivateEndpointConnectionProvisioningState = string;

/** Interface representing a PrivateEndpointConnections. */
export declare interface PrivateEndpointConnections {
    /**
     * The List operation gets information about the private endpoint connections associated with the
     * vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param options The options parameters.
     */
    listByResource(resourceGroupName: string, vaultName: string, options?: PrivateEndpointConnectionsListByResourceOptionalParams): PagedAsyncIterableIterator<PrivateEndpointConnection>;
    /**
     * Gets the specified private endpoint connection associated with the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
     *                                      vault.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsGetOptionalParams): Promise<PrivateEndpointConnectionsGetResponse>;
    /**
     * Updates the specified private endpoint connection associated with the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
     *                                      vault.
     * @param properties The intended state of private endpoint connection.
     * @param options The options parameters.
     */
    put(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, properties: PrivateEndpointConnection, options?: PrivateEndpointConnectionsPutOptionalParams): Promise<PrivateEndpointConnectionsPutResponse>;
    /**
     * Deletes the specified private endpoint connection associated with the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
     *                                      vault.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<PrivateEndpointConnectionsDeleteResponse>, PrivateEndpointConnectionsDeleteResponse>>;
    /**
     * Deletes the specified private endpoint connection associated with the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
     *                                      vault.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<PrivateEndpointConnectionsDeleteResponse>;
}

/** Defines headers for PrivateEndpointConnections_delete operation. */
export declare interface PrivateEndpointConnectionsDeleteHeaders {
    /** The recommended number of seconds to wait before calling the URI specified in the location header. */
    retryAfter?: number;
    /** The URI to poll for completion status. */
    location?: string;
}

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export declare type PrivateEndpointConnectionsDeleteResponse = PrivateEndpointConnection;

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsListByResourceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceNext operation. */
export declare type PrivateEndpointConnectionsListByResourceNextResponse = PrivateEndpointConnectionListResult;

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsListByResourceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResource operation. */
export declare type PrivateEndpointConnectionsListByResourceResponse = PrivateEndpointConnectionListResult;

/** Defines headers for PrivateEndpointConnections_put operation. */
export declare interface PrivateEndpointConnectionsPutHeaders {
    /** (specified only if operation does not finish synchronously) The recommended number of seconds to wait before calling the URI specified in Azure-AsyncOperation. */
    retryAfter?: number;
    /** (specified only if operation does not finish synchronously) The URI to poll for completion status. The response of this URI may be synchronous or asynchronous. */
    azureAsyncOperation?: string;
}

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsPutOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the put operation. */
export declare type PrivateEndpointConnectionsPutResponse = PrivateEndpointConnectionsPutHeaders & PrivateEndpointConnection;

/**
 * Defines values for PrivateEndpointServiceConnectionStatus. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected** \
 * **Disconnected**
 */
export declare type PrivateEndpointServiceConnectionStatus = string;

/** A private link resource */
export declare type PrivateLinkResource = Resource & {
    /**
     * Group identifier of private link resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly groupId?: string;
    /**
     * Required member names of private link resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requiredMembers?: string[];
    /** Required DNS zone names of the the private link resource. */
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
     * Gets the private link resources supported for the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param options The options parameters.
     */
    listByVault(resourceGroupName: string, vaultName: string, options?: PrivateLinkResourcesListByVaultOptionalParams): Promise<PrivateLinkResourcesListByVaultResponse>;
}

/** Optional parameters. */
export declare interface PrivateLinkResourcesListByVaultOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByVault operation. */
export declare type PrivateLinkResourcesListByVaultResponse = PrivateLinkResourceListResult;

/** An object that represents the approval state of the private link connection. */
export declare interface PrivateLinkServiceConnectionState {
    /** Indicates whether the connection has been approved, rejected or removed by the key vault owner. */
    status?: PrivateEndpointServiceConnectionStatus;
    /** The reason for approval or rejection. */
    description?: string;
    /** A message indicating if changes on the service provider require any updates on the consumer. */
    actionsRequired?: ActionsRequired;
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: The managed HSM Pool has been full provisioned. \
 * **Provisioning**: The managed HSM Pool is currently being provisioned. \
 * **Failed**: Provisioning of the managed HSM Pool has failed. \
 * **Updating**: The managed HSM Pool is currently being updated. \
 * **Deleting**: The managed HSM Pool is currently being deleted. \
 * **Activated**: The managed HSM pool is ready for normal use. \
 * **SecurityDomainRestore**: The managed HSM pool is waiting for a security domain restore action. \
 * **Restoring**: The managed HSM pool is being restored from full HSM backup.
 */
export declare type ProvisioningState = string;

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type PublicNetworkAccess = string;

/** Defines values for Reason. */
export declare type Reason = "AccountNameInvalid" | "AlreadyExists";

/** Key Vault resource */
export declare interface Resource {
    /**
     * Fully qualified identifier of the key vault resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Name of the key vault resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type of the key vault resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * Azure location of the key vault resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * Tags assigned to the key vault resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tags?: {
        [propertyName: string]: string;
    };
}

/** List of vault resources. */
export declare interface ResourceListResult {
    /** The list of vault resources. */
    value?: Resource[];
    /** The URL to get the next set of vault resources. */
    nextLink?: string;
}

export declare interface RotationPolicy {
    /** The attributes of key rotation policy. */
    attributes?: KeyRotationPolicyAttributes;
    /** The lifetimeActions for key rotation action. */
    lifetimeActions?: LifetimeAction[];
}

/** Resource information with extended details. */
export declare type Secret = Resource & {
    /** Properties of the secret */
    properties: SecretProperties;
};

/** The secret management attributes. */
export declare type SecretAttributes = Attributes & {};

/** Parameters for creating or updating a secret */
export declare interface SecretCreateOrUpdateParameters {
    /** The tags that will be assigned to the secret. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Properties of the secret */
    properties: SecretProperties;
}

/** List of secrets */
export declare interface SecretListResult {
    /** The list of secrets. */
    value?: Secret[];
    /** The URL to get the next set of secrets. */
    nextLink?: string;
}

/** Parameters for patching a secret */
export declare interface SecretPatchParameters {
    /** The tags that will be assigned to the secret. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Properties of the secret */
    properties?: SecretPatchProperties;
}

/** Properties of the secret */
export declare interface SecretPatchProperties {
    /** The value of the secret. */
    value?: string;
    /** The content type of the secret. */
    contentType?: string;
    /** The attributes of the secret. */
    attributes?: SecretAttributes;
}

/**
 * Defines values for SecretPermissions. \
 * {@link KnownSecretPermissions} can be used interchangeably with SecretPermissions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **all** \
 * **get** \
 * **list** \
 * **set** \
 * **delete** \
 * **backup** \
 * **restore** \
 * **recover** \
 * **purge**
 */
export declare type SecretPermissions = string;

/** Properties of the secret */
export declare interface SecretProperties {
    /** The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. */
    value?: string;
    /** The content type of the secret. */
    contentType?: string;
    /** The attributes of the secret. */
    attributes?: SecretAttributes;
    /**
     * The URI to retrieve the current version of the secret.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly secretUri?: string;
    /**
     * The URI to retrieve the specific version of the secret.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly secretUriWithVersion?: string;
}

/** Interface representing a Secrets. */
export declare interface Secrets {
    /**
     * The List operation gets information about the secrets in a vault.  NOTE: This API is intended for
     * internal use in ARM deployments. Users should use the data-plane REST service for interaction with
     * vault secrets.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName The name of the vault.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, vaultName: string, options?: SecretsListOptionalParams): PagedAsyncIterableIterator<Secret>;
    /**
     * Create or update a secret in a key vault in the specified subscription.  NOTE: This API is intended
     * for internal use in ARM deployments. Users should use the data-plane REST service for interaction
     * with vault secrets.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName Name of the vault
     * @param secretName Name of the secret
     * @param parameters Parameters to create or update the secret
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, vaultName: string, secretName: string, parameters: SecretCreateOrUpdateParameters, options?: SecretsCreateOrUpdateOptionalParams): Promise<SecretsCreateOrUpdateResponse>;
    /**
     * Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM
     * deployments.  Users should use the data-plane REST service for interaction with vault secrets.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName Name of the vault
     * @param secretName Name of the secret
     * @param parameters Parameters to patch the secret
     * @param options The options parameters.
     */
    update(resourceGroupName: string, vaultName: string, secretName: string, parameters: SecretPatchParameters, options?: SecretsUpdateOptionalParams): Promise<SecretsUpdateResponse>;
    /**
     * Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users
     * should use the data-plane REST service for interaction with vault secrets.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName The name of the vault.
     * @param secretName The name of the secret.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vaultName: string, secretName: string, options?: SecretsGetOptionalParams): Promise<SecretsGetResponse>;
}

/** Optional parameters. */
export declare interface SecretsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type SecretsCreateOrUpdateResponse = Secret;

/** Optional parameters. */
export declare interface SecretsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SecretsGetResponse = Secret;

/** Optional parameters. */
export declare interface SecretsListNextOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listNext operation. */
export declare type SecretsListNextResponse = SecretListResult;

/** Optional parameters. */
export declare interface SecretsListOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the list operation. */
export declare type SecretsListResponse = SecretListResult;

/** Optional parameters. */
export declare interface SecretsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type SecretsUpdateResponse = Secret;

/** One property of operation, include log specifications. */
export declare interface ServiceSpecification {
    /** Log specifications of operation. */
    logSpecifications?: LogSpecification[];
    /** Metric specifications of operation. */
    metricSpecifications?: MetricSpecification[];
}

/** SKU details */
export declare interface Sku {
    /** SKU family name */
    family: SkuFamily;
    /** SKU name to specify whether the key vault is a standard vault or a premium vault. */
    name: SkuName;
}

/**
 * Defines values for SkuFamily. \
 * {@link KnownSkuFamily} can be used interchangeably with SkuFamily,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **A**
 */
export declare type SkuFamily = string;

/** Defines values for SkuName. */
export declare type SkuName = "standard" | "premium";

/**
 * Defines values for StoragePermissions. \
 * {@link KnownStoragePermissions} can be used interchangeably with StoragePermissions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **all** \
 * **get** \
 * **list** \
 * **delete** \
 * **set** \
 * **update** \
 * **regeneratekey** \
 * **recover** \
 * **purge** \
 * **backup** \
 * **restore** \
 * **setsas** \
 * **listsas** \
 * **getsas** \
 * **deletesas**
 */
export declare type StoragePermissions = string;

/** Metadata pertaining to creation and last modification of the key vault resource. */
export declare interface SystemData {
    /** The identity that created the key vault resource. */
    createdBy?: string;
    /** The type of identity that created the key vault resource. */
    createdByType?: IdentityType;
    /** The timestamp of the key vault resource creation (UTC). */
    createdAt?: Date;
    /** The identity that last modified the key vault resource. */
    lastModifiedBy?: string;
    /** The type of identity that last modified the key vault resource. */
    lastModifiedByType?: IdentityType;
    /** The timestamp of the key vault resource last modification (UTC). */
    lastModifiedAt?: Date;
}

export declare interface Trigger {
    /** The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'. */
    timeAfterCreate?: string;
    /** The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'. */
    timeBeforeExpiry?: string;
}

/** Resource information with extended details. */
export declare interface Vault {
    /**
     * Fully qualified identifier of the key vault resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Name of the key vault resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type of the key vault resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Azure location of the key vault resource. */
    location?: string;
    /** Tags assigned to the key vault resource. */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * System metadata for the key vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly systemData?: SystemData;
    /** Properties of the vault */
    properties: VaultProperties;
}

/** Parameters for updating the access policy in a vault */
export declare interface VaultAccessPolicyParameters {
    /**
     * The resource id of the access policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The resource name of the access policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The resource name of the access policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The resource type of the access policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /** Properties of the access policy */
    properties: VaultAccessPolicyProperties;
}

/** Properties of the vault access policy */
export declare interface VaultAccessPolicyProperties {
    /** An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. */
    accessPolicies: AccessPolicyEntry[];
}

/** The parameters used to check the availability of the vault name. */
export declare interface VaultCheckNameAvailabilityParameters {
    /** The vault name. */
    name: string;
    /** The type of resource, Microsoft.KeyVault/vaults */
    type: "Microsoft.KeyVault/vaults";
}

/** Parameters for creating or updating a vault */
export declare interface VaultCreateOrUpdateParameters {
    /** The supported Azure location where the key vault should be created. */
    location: string;
    /** The tags that will be assigned to the key vault. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Properties of the vault */
    properties: VaultProperties;
}

/** List of vaults */
export declare interface VaultListResult {
    /** The list of vaults. */
    value?: Vault[];
    /** The URL to get the next set of vaults. */
    nextLink?: string;
}

/** Parameters for creating or updating a vault */
export declare interface VaultPatchParameters {
    /** The tags that will be assigned to the key vault. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Properties of the vault */
    properties?: VaultPatchProperties;
}

/** Properties of the vault */
export declare interface VaultPatchProperties {
    /** The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault. */
    tenantId?: string;
    /** SKU details */
    sku?: Sku;
    /** An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. */
    accessPolicies?: AccessPolicyEntry[];
    /** Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. */
    enabledForDeployment?: boolean;
    /** Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. */
    enabledForDiskEncryption?: boolean;
    /** Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. */
    enabledForTemplateDeployment?: boolean;
    /** Property to specify whether the 'soft delete' functionality is enabled for this key vault. Once set to true, it cannot be reverted to false. */
    enableSoftDelete?: boolean;
    /** Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the value of this property will not change. */
    enableRbacAuthorization?: boolean;
    /** softDelete data retention days. It accepts >=7 and <=90. */
    softDeleteRetentionInDays?: number;
    /** The vault's create mode to indicate whether the vault need to be recovered or not. */
    createMode?: CreateMode;
    /** Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value. */
    enablePurgeProtection?: boolean;
    /** A collection of rules governing the accessibility of the vault from specific network locations. */
    networkAcls?: NetworkRuleSet;
    /** Property to specify whether the vault will accept traffic from public internet. If set to 'disabled' all traffic except private endpoint traffic and that that originates from trusted services will be blocked. This will override the set firewall rules, meaning that even if the firewall rules are present we will not honor the rules. */
    publicNetworkAccess?: string;
}

/** Properties of the vault */
export declare interface VaultProperties {
    /** The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault. */
    tenantId: string;
    /** SKU details */
    sku: Sku;
    /** An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. When `createMode` is set to `recover`, access policies are not required. Otherwise, access policies are required. */
    accessPolicies?: AccessPolicyEntry[];
    /** The URI of the vault for performing operations on keys and secrets. */
    vaultUri?: string;
    /**
     * The resource id of HSM Pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hsmPoolResourceId?: string;
    /** Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. */
    enabledForDeployment?: boolean;
    /** Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. */
    enabledForDiskEncryption?: boolean;
    /** Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. */
    enabledForTemplateDeployment?: boolean;
    /** Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false. */
    enableSoftDelete?: boolean;
    /** softDelete data retention days. It accepts >=7 and <=90. */
    softDeleteRetentionInDays?: number;
    /** Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC. */
    enableRbacAuthorization?: boolean;
    /** The vault's create mode to indicate whether the vault need to be recovered or not. */
    createMode?: CreateMode;
    /** Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value. */
    enablePurgeProtection?: boolean;
    /** Rules governing the accessibility of the key vault from specific network locations. */
    networkAcls?: NetworkRuleSet;
    /** Provisioning state of the vault. */
    provisioningState?: VaultProvisioningState;
    /**
     * List of private endpoint connections associated with the key vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpointConnections?: PrivateEndpointConnectionItem[];
    /** Property to specify whether the vault will accept traffic from public internet. If set to 'disabled' all traffic except private endpoint traffic and that that originates from trusted services will be blocked. This will override the set firewall rules, meaning that even if the firewall rules are present we will not honor the rules. */
    publicNetworkAccess?: string;
}

/**
 * Defines values for VaultProvisioningState. \
 * {@link KnownVaultProvisioningState} can be used interchangeably with VaultProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **RegisteringDns**
 */
export declare type VaultProvisioningState = string;

/** Interface representing a Vaults. */
export declare interface Vaults {
    /**
     * The List operation gets information about the vaults associated with the subscription and within the
     * specified resource group.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VaultsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Vault>;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: VaultsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Vault>;
    /**
     * Gets information about the deleted vaults in a subscription.
     * @param options The options parameters.
     */
    listDeleted(options?: VaultsListDeletedOptionalParams): PagedAsyncIterableIterator<DeletedVault>;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     * @param options The options parameters.
     */
    list(options?: VaultsListOptionalParams): PagedAsyncIterableIterator<Resource>;
    /**
     * Create or update a key vault in the specified subscription.
     * @param resourceGroupName The name of the Resource Group to which the server belongs.
     * @param vaultName Name of the vault
     * @param parameters Parameters to create or update the vault
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, vaultName: string, parameters: VaultCreateOrUpdateParameters, options?: VaultsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VaultsCreateOrUpdateResponse>, VaultsCreateOrUpdateResponse>>;
    /**
     * Create or update a key vault in the specified subscription.
     * @param resourceGroupName The name of the Resource Group to which the server belongs.
     * @param vaultName Name of the vault
     * @param parameters Parameters to create or update the vault
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, vaultName: string, parameters: VaultCreateOrUpdateParameters, options?: VaultsCreateOrUpdateOptionalParams): Promise<VaultsCreateOrUpdateResponse>;
    /**
     * Update a key vault in the specified subscription.
     * @param resourceGroupName The name of the Resource Group to which the server belongs.
     * @param vaultName Name of the vault
     * @param parameters Parameters to patch the vault
     * @param options The options parameters.
     */
    update(resourceGroupName: string, vaultName: string, parameters: VaultPatchParameters, options?: VaultsUpdateOptionalParams): Promise<VaultsUpdateResponse>;
    /**
     * Deletes the specified Azure key vault.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName The name of the vault to delete
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, vaultName: string, options?: VaultsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Azure key vault.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName The name of the vault.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vaultName: string, options?: VaultsGetOptionalParams): Promise<VaultsGetResponse>;
    /**
     * Update access policies in a key vault in the specified subscription.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName Name of the vault
     * @param operationKind Name of the operation
     * @param parameters Access policy to merge into the vault
     * @param options The options parameters.
     */
    updateAccessPolicy(resourceGroupName: string, vaultName: string, operationKind: AccessPolicyUpdateKind, parameters: VaultAccessPolicyParameters, options?: VaultsUpdateAccessPolicyOptionalParams): Promise<VaultsUpdateAccessPolicyResponse>;
    /**
     * Gets the deleted Azure key vault.
     * @param vaultName The name of the vault.
     * @param location The location of the deleted vault.
     * @param options The options parameters.
     */
    getDeleted(vaultName: string, location: string, options?: VaultsGetDeletedOptionalParams): Promise<VaultsGetDeletedResponse>;
    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     * @param vaultName The name of the soft-deleted vault.
     * @param location The location of the soft-deleted vault.
     * @param options The options parameters.
     */
    beginPurgeDeleted(vaultName: string, location: string, options?: VaultsPurgeDeletedOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     * @param vaultName The name of the soft-deleted vault.
     * @param location The location of the soft-deleted vault.
     * @param options The options parameters.
     */
    beginPurgeDeletedAndWait(vaultName: string, location: string, options?: VaultsPurgeDeletedOptionalParams): Promise<void>;
    /**
     * Checks that the vault name is valid and is not already in use.
     * @param vaultName The name of the vault.
     * @param options The options parameters.
     */
    checkNameAvailability(vaultName: VaultCheckNameAvailabilityParameters, options?: VaultsCheckNameAvailabilityOptionalParams): Promise<VaultsCheckNameAvailabilityResponse>;
}

/** Optional parameters. */
export declare interface VaultsCheckNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the checkNameAvailability operation. */
export declare type VaultsCheckNameAvailabilityResponse = CheckNameAvailabilityResult;

/** Optional parameters. */
export declare interface VaultsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VaultsCreateOrUpdateResponse = Vault;

/** Optional parameters. */
export declare interface VaultsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface VaultsGetDeletedOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDeleted operation. */
export declare type VaultsGetDeletedResponse = DeletedVault;

/** Optional parameters. */
export declare interface VaultsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VaultsGetResponse = Vault;

/** Optional parameters. */
export declare interface VaultsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type VaultsListByResourceGroupNextResponse = VaultListResult;

/** Optional parameters. */
export declare interface VaultsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export declare type VaultsListByResourceGroupResponse = VaultListResult;

/** Optional parameters. */
export declare interface VaultsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type VaultsListBySubscriptionNextResponse = VaultListResult;

/** Optional parameters. */
export declare interface VaultsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listBySubscription operation. */
export declare type VaultsListBySubscriptionResponse = VaultListResult;

/** Optional parameters. */
export declare interface VaultsListDeletedNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeletedNext operation. */
export declare type VaultsListDeletedNextResponse = DeletedVaultListResult;

/** Optional parameters. */
export declare interface VaultsListDeletedOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listDeleted operation. */
export declare type VaultsListDeletedResponse = DeletedVaultListResult;

/** Optional parameters. */
export declare interface VaultsListNextOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the listNext operation. */
export declare type VaultsListNextResponse = ResourceListResult;

/** Optional parameters. */
export declare interface VaultsListOptionalParams extends coreClient.OperationOptions {
    /** Maximum number of results to return. */
    top?: number;
}

/** Contains response data for the list operation. */
export declare type VaultsListResponse = ResourceListResult;

/** Optional parameters. */
export declare interface VaultsPurgeDeletedOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VaultsUpdateAccessPolicyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateAccessPolicy operation. */
export declare type VaultsUpdateAccessPolicyResponse = VaultAccessPolicyParameters;

/** Optional parameters. */
export declare interface VaultsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type VaultsUpdateResponse = Vault;

/** A rule governing the accessibility of a vault from a specific virtual network. */
export declare interface VirtualNetworkRule {
    /** Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'. */
    id: string;
    /** Property to specify whether NRP will ignore the check if parent subnet has serviceEndpoints configured. */
    ignoreMissingVnetServiceEndpoint?: boolean;
}

export { }
