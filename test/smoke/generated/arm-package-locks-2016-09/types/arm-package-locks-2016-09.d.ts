import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

/** Interface representing a AuthorizationOperations. */
export declare interface AuthorizationOperations {
    /**
     * Lists all of the available Microsoft.Authorization REST API operations.
     * @param options The options parameters.
     */
    list(options?: AuthorizationOperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

/** Optional parameters. */
export declare interface AuthorizationOperationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AuthorizationOperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface AuthorizationOperationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AuthorizationOperationsListResponse = OperationListResult;

/** Known values of {@link LockLevel} that the service accepts. */
export declare enum KnownLockLevel {
    NotSpecified = "NotSpecified",
    CanNotDelete = "CanNotDelete",
    ReadOnly = "ReadOnly"
}

/**
 * Defines values for LockLevel. \
 * {@link KnownLockLevel} can be used interchangeably with LockLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **CanNotDelete** \
 * **ReadOnly**
 */
export declare type LockLevel = string;

export declare class ManagementLockClient extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ManagementLockClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ManagementLockClientOptionalParams);
    authorizationOperations: AuthorizationOperations;
    managementLocks: ManagementLocks;
}

/** Optional parameters. */
export declare interface ManagementLockClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** The list of locks. */
export declare interface ManagementLockListResult {
    /** The list of locks. */
    value?: ManagementLockObject[];
    /** The URL to use for getting the next set of results. */
    nextLink?: string;
}

/** The lock information. */
export declare interface ManagementLockObject {
    /**
     * The resource ID of the lock.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The resource type of the lock - Microsoft.Authorization/locks.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The name of the lock.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /** The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it. */
    level: LockLevel;
    /** Notes about the lock. Maximum of 512 characters. */
    notes?: string;
    /** The owners of the lock. */
    owners?: ManagementLockOwner[];
}

/** Lock owner properties. */
export declare interface ManagementLockOwner {
    /** The application ID of the lock owner. */
    applicationId?: string;
}

/** Interface representing a ManagementLocks. */
export declare interface ManagementLocks {
    /**
     * Gets all the management locks for a resource group.
     * @param resourceGroupName The name of the resource group containing the locks to get.
     * @param options The options parameters.
     */
    listAtResourceGroupLevel(resourceGroupName: string, options?: ManagementLocksListAtResourceGroupLevelOptionalParams): PagedAsyncIterableIterator<ManagementLockObject>;
    /**
     * Gets all the management locks for a resource or any level below resource.
     * @param resourceGroupName The name of the resource group containing the locked resource. The name is
     *                          case insensitive.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type of the locked resource.
     * @param resourceName The name of the locked resource.
     * @param options The options parameters.
     */
    listAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options?: ManagementLocksListAtResourceLevelOptionalParams): PagedAsyncIterableIterator<ManagementLockObject>;
    /**
     * Gets all the management locks for a subscription.
     * @param options The options parameters.
     */
    listAtSubscriptionLevel(options?: ManagementLocksListAtSubscriptionLevelOptionalParams): PagedAsyncIterableIterator<ManagementLockObject>;
    /**
     * Gets all the management locks for a scope.
     * @param scope The scope for the lock. When providing a scope for the assignment, use
     *              '/subscriptions/{subscriptionId}' for subscriptions,
     *              '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and
     *              '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}'
     *              for resources.
     * @param options The options parameters.
     */
    listByScope(scope: string, options?: ManagementLocksListByScopeOptionalParams): PagedAsyncIterableIterator<ManagementLockObject>;
    /**
     * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
     * management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     * @param resourceGroupName The name of the resource group to lock.
     * @param lockName The lock name. The lock name can be a maximum of 260 characters. It cannot contain
     *                 <, > %, &, :, \, ?, /, or any control characters.
     * @param parameters The management lock parameters.
     * @param options The options parameters.
     */
    createOrUpdateAtResourceGroupLevel(resourceGroupName: string, lockName: string, parameters: ManagementLockObject, options?: ManagementLocksCreateOrUpdateAtResourceGroupLevelOptionalParams): Promise<ManagementLocksCreateOrUpdateAtResourceGroupLevelResponse>;
    /**
     * To delete management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     * @param resourceGroupName The name of the resource group containing the lock.
     * @param lockName The name of lock to delete.
     * @param options The options parameters.
     */
    deleteAtResourceGroupLevel(resourceGroupName: string, lockName: string, options?: ManagementLocksDeleteAtResourceGroupLevelOptionalParams): Promise<void>;
    /**
     * Gets a management lock at the resource group level.
     * @param resourceGroupName The name of the locked resource group.
     * @param lockName The name of the lock to get.
     * @param options The options parameters.
     */
    getAtResourceGroupLevel(resourceGroupName: string, lockName: string, options?: ManagementLocksGetAtResourceGroupLevelOptionalParams): Promise<ManagementLocksGetAtResourceGroupLevelResponse>;
    /**
     * Create or update a management lock by scope.
     * @param scope The scope for the lock. When providing a scope for the assignment, use
     *              '/subscriptions/{subscriptionId}' for subscriptions,
     *              '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and
     *              '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}'
     *              for resources.
     * @param lockName The name of lock.
     * @param parameters Create or update management lock parameters.
     * @param options The options parameters.
     */
    createOrUpdateByScope(scope: string, lockName: string, parameters: ManagementLockObject, options?: ManagementLocksCreateOrUpdateByScopeOptionalParams): Promise<ManagementLocksCreateOrUpdateByScopeResponse>;
    /**
     * Delete a management lock by scope.
     * @param scope The scope for the lock.
     * @param lockName The name of lock.
     * @param options The options parameters.
     */
    deleteByScope(scope: string, lockName: string, options?: ManagementLocksDeleteByScopeOptionalParams): Promise<void>;
    /**
     * Get a management lock by scope.
     * @param scope The scope for the lock.
     * @param lockName The name of lock.
     * @param options The options parameters.
     */
    getByScope(scope: string, lockName: string, options?: ManagementLocksGetByScopeOptionalParams): Promise<ManagementLocksGetByScopeResponse>;
    /**
     * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
     * management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     * @param resourceGroupName The name of the resource group containing the resource to lock.
     * @param resourceProviderNamespace The resource provider namespace of the resource to lock.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type of the resource to lock.
     * @param resourceName The name of the resource to lock.
     * @param lockName The name of lock. The lock name can be a maximum of 260 characters. It cannot
     *                 contain <, > %, &, :, \, ?, /, or any control characters.
     * @param parameters Parameters for creating or updating a  management lock.
     * @param options The options parameters.
     */
    createOrUpdateAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, parameters: ManagementLockObject, options?: ManagementLocksCreateOrUpdateAtResourceLevelOptionalParams): Promise<ManagementLocksCreateOrUpdateAtResourceLevelResponse>;
    /**
     * To delete management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     * @param resourceGroupName The name of the resource group containing the resource with the lock to
     *                          delete.
     * @param resourceProviderNamespace The resource provider namespace of the resource with the lock to
     *                                  delete.
     * @param parentResourcePath The parent resource identity.
     * @param resourceType The resource type of the resource with the lock to delete.
     * @param resourceName The name of the resource with the lock to delete.
     * @param lockName The name of the lock to delete.
     * @param options The options parameters.
     */
    deleteAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, options?: ManagementLocksDeleteAtResourceLevelOptionalParams): Promise<void>;
    /**
     * Get the management lock of a resource or any level below resource.
     * @param resourceGroupName The name of the resource group.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param parentResourcePath An extra path parameter needed in some services, like SQL Databases.
     * @param resourceType The type of the resource.
     * @param resourceName The name of the resource.
     * @param lockName The name of lock.
     * @param options The options parameters.
     */
    getAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, options?: ManagementLocksGetAtResourceLevelOptionalParams): Promise<ManagementLocksGetAtResourceLevelResponse>;
    /**
     * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
     * management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     * @param lockName The name of lock. The lock name can be a maximum of 260 characters. It cannot
     *                 contain <, > %, &, :, \, ?, /, or any control characters.
     * @param parameters The management lock parameters.
     * @param options The options parameters.
     */
    createOrUpdateAtSubscriptionLevel(lockName: string, parameters: ManagementLockObject, options?: ManagementLocksCreateOrUpdateAtSubscriptionLevelOptionalParams): Promise<ManagementLocksCreateOrUpdateAtSubscriptionLevelResponse>;
    /**
     * To delete management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     * @param lockName The name of lock to delete.
     * @param options The options parameters.
     */
    deleteAtSubscriptionLevel(lockName: string, options?: ManagementLocksDeleteAtSubscriptionLevelOptionalParams): Promise<void>;
    /**
     * Gets a management lock at the subscription level.
     * @param lockName The name of the lock to get.
     * @param options The options parameters.
     */
    getAtSubscriptionLevel(lockName: string, options?: ManagementLocksGetAtSubscriptionLevelOptionalParams): Promise<ManagementLocksGetAtSubscriptionLevelResponse>;
}

/** Optional parameters. */
export declare interface ManagementLocksCreateOrUpdateAtResourceGroupLevelOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateAtResourceGroupLevel operation. */
export declare type ManagementLocksCreateOrUpdateAtResourceGroupLevelResponse = ManagementLockObject;

/** Optional parameters. */
export declare interface ManagementLocksCreateOrUpdateAtResourceLevelOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateAtResourceLevel operation. */
export declare type ManagementLocksCreateOrUpdateAtResourceLevelResponse = ManagementLockObject;

/** Optional parameters. */
export declare interface ManagementLocksCreateOrUpdateAtSubscriptionLevelOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateAtSubscriptionLevel operation. */
export declare type ManagementLocksCreateOrUpdateAtSubscriptionLevelResponse = ManagementLockObject;

/** Optional parameters. */
export declare interface ManagementLocksCreateOrUpdateByScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdateByScope operation. */
export declare type ManagementLocksCreateOrUpdateByScopeResponse = ManagementLockObject;

/** Optional parameters. */
export declare interface ManagementLocksDeleteAtResourceGroupLevelOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagementLocksDeleteAtResourceLevelOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagementLocksDeleteAtSubscriptionLevelOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagementLocksDeleteByScopeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagementLocksGetAtResourceGroupLevelOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtResourceGroupLevel operation. */
export declare type ManagementLocksGetAtResourceGroupLevelResponse = ManagementLockObject;

/** Optional parameters. */
export declare interface ManagementLocksGetAtResourceLevelOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtResourceLevel operation. */
export declare type ManagementLocksGetAtResourceLevelResponse = ManagementLockObject;

/** Optional parameters. */
export declare interface ManagementLocksGetAtSubscriptionLevelOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAtSubscriptionLevel operation. */
export declare type ManagementLocksGetAtSubscriptionLevelResponse = ManagementLockObject;

/** Optional parameters. */
export declare interface ManagementLocksGetByScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getByScope operation. */
export declare type ManagementLocksGetByScopeResponse = ManagementLockObject;

/** Optional parameters. */
export declare interface ManagementLocksListAtResourceGroupLevelNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the listAtResourceGroupLevelNext operation. */
export declare type ManagementLocksListAtResourceGroupLevelNextResponse = ManagementLockListResult;

/** Optional parameters. */
export declare interface ManagementLocksListAtResourceGroupLevelOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the listAtResourceGroupLevel operation. */
export declare type ManagementLocksListAtResourceGroupLevelResponse = ManagementLockListResult;

/** Optional parameters. */
export declare interface ManagementLocksListAtResourceLevelNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the listAtResourceLevelNext operation. */
export declare type ManagementLocksListAtResourceLevelNextResponse = ManagementLockListResult;

/** Optional parameters. */
export declare interface ManagementLocksListAtResourceLevelOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the listAtResourceLevel operation. */
export declare type ManagementLocksListAtResourceLevelResponse = ManagementLockListResult;

/** Optional parameters. */
export declare interface ManagementLocksListAtSubscriptionLevelNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the listAtSubscriptionLevelNext operation. */
export declare type ManagementLocksListAtSubscriptionLevelNextResponse = ManagementLockListResult;

/** Optional parameters. */
export declare interface ManagementLocksListAtSubscriptionLevelOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the listAtSubscriptionLevel operation. */
export declare type ManagementLocksListAtSubscriptionLevelResponse = ManagementLockListResult;

/** Optional parameters. */
export declare interface ManagementLocksListByScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the listByScopeNext operation. */
export declare type ManagementLocksListByScopeNextResponse = ManagementLockListResult;

/** Optional parameters. */
export declare interface ManagementLocksListByScopeOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the listByScope operation. */
export declare type ManagementLocksListByScopeResponse = ManagementLockListResult;

/** Microsoft.Authorization operation */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}

/** The object that represents the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft.Authorization */
    provider?: string;
    /** Resource on which the operation is performed: Profile, endpoint, etc. */
    resource?: string;
    /** Operation type: Read, write, delete, etc. */
    operation?: string;
}

/** Result of the request to list Microsoft.Authorization operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of Microsoft.Authorization operations. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

export { }
