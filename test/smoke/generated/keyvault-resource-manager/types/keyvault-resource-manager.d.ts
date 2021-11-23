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

/**
 * Defines values for CertificatePermissions. \
 * {@link KnownCertificatePermissions} can be used interchangeably with CertificatePermissions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
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
}

/** A rule governing the accessibility of a vault from a specific ip address or ip range. */
export declare interface IPRule {
    /** An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78). */
    value: string;
}

/**
 * Defines values for KeyPermissions. \
 * {@link KnownKeyPermissions} can be used interchangeably with KeyPermissions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
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
 * **purge**
 */
export declare type KeyPermissions = string;

export declare class KeyVaultManagementClient extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the KeyVaultManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
     *                       The subscription ID forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: KeyVaultManagementClientOptionalParams);
    vaults: Vaults;
    privateEndpointConnections: PrivateEndpointConnections;
    privateLinkResources: PrivateLinkResources;
    operations: Operations;
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

/** Known values of {@link CertificatePermissions} that the service accepts. */
export declare enum KnownCertificatePermissions {
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

/** Known values of {@link KeyPermissions} that the service accepts. */
export declare enum KnownKeyPermissions {
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
    Purge = "purge"
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

/** Known values of {@link SecretPermissions} that the service accepts. */
export declare enum KnownSecretPermissions {
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

/** Log specification of operation. */
export declare interface LogSpecification {
    /** Name of log specification. */
    name?: string;
    /** Display name of log specification. */
    displayName?: string;
    /** Blob duration of specification. */
    blobDuration?: string;
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
    /** Properties of the private endpoint object. */
    privateEndpoint?: PrivateEndpoint;
    /** Approval state of the private link connection. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    /**
     * Provisioning state of the private endpoint connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
};

/** Private endpoint connection item. */
export declare interface PrivateEndpointConnectionItem {
    /** Properties of the private endpoint object. */
    privateEndpoint?: PrivateEndpoint;
    /** Approval state of the private link connection. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    /**
     * Provisioning state of the private endpoint connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
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
    actionRequired?: string;
}

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

/**
 * Defines values for SecretPermissions. \
 * {@link KnownSecretPermissions} can be used interchangeably with SecretPermissions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
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

/** One property of operation, include log specifications. */
export declare interface ServiceSpecification {
    /** Log specifications of operation. */
    logSpecifications?: LogSpecification[];
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
    /**
     * List of private endpoint connections associated with the key vault.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpointConnections?: PrivateEndpointConnectionItem[];
}

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
}

export { }
