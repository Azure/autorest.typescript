import * as coreClient from "@azure/core-client";
/** Result of the request to list Microsoft.Authorization operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
    /** List of Microsoft.Authorization operations. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}
/** Microsoft.Authorization operation */
export interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}
/** The object that represents the operation. */
export interface OperationDisplay {
    /** Service provider: Microsoft.Authorization */
    provider?: string;
    /** Resource on which the operation is performed: Profile, endpoint, etc. */
    resource?: string;
    /** Operation type: Read, write, delete, etc. */
    operation?: string;
}
/** The lock information. */
export interface ManagementLockObject {
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
export interface ManagementLockOwner {
    /** The application ID of the lock owner. */
    applicationId?: string;
}
/** The list of locks. */
export interface ManagementLockListResult {
    /** The list of locks. */
    value?: ManagementLockObject[];
    /** The URL to use for getting the next set of results. */
    nextLink?: string;
}
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
/** Optional parameters. */
export interface AuthorizationOperationsListOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the list operation. */
export declare type AuthorizationOperationsListResponse = OperationListResult;
/** Optional parameters. */
export interface AuthorizationOperationsListNextOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the listNext operation. */
export declare type AuthorizationOperationsListNextResponse = OperationListResult;
/** Optional parameters. */
export interface ManagementLocksCreateOrUpdateAtResourceGroupLevelOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the createOrUpdateAtResourceGroupLevel operation. */
export declare type ManagementLocksCreateOrUpdateAtResourceGroupLevelResponse = ManagementLockObject;
/** Optional parameters. */
export interface ManagementLocksDeleteAtResourceGroupLevelOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ManagementLocksGetAtResourceGroupLevelOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAtResourceGroupLevel operation. */
export declare type ManagementLocksGetAtResourceGroupLevelResponse = ManagementLockObject;
/** Optional parameters. */
export interface ManagementLocksCreateOrUpdateByScopeOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the createOrUpdateByScope operation. */
export declare type ManagementLocksCreateOrUpdateByScopeResponse = ManagementLockObject;
/** Optional parameters. */
export interface ManagementLocksDeleteByScopeOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ManagementLocksGetByScopeOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getByScope operation. */
export declare type ManagementLocksGetByScopeResponse = ManagementLockObject;
/** Optional parameters. */
export interface ManagementLocksCreateOrUpdateAtResourceLevelOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the createOrUpdateAtResourceLevel operation. */
export declare type ManagementLocksCreateOrUpdateAtResourceLevelResponse = ManagementLockObject;
/** Optional parameters. */
export interface ManagementLocksDeleteAtResourceLevelOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ManagementLocksGetAtResourceLevelOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAtResourceLevel operation. */
export declare type ManagementLocksGetAtResourceLevelResponse = ManagementLockObject;
/** Optional parameters. */
export interface ManagementLocksCreateOrUpdateAtSubscriptionLevelOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the createOrUpdateAtSubscriptionLevel operation. */
export declare type ManagementLocksCreateOrUpdateAtSubscriptionLevelResponse = ManagementLockObject;
/** Optional parameters. */
export interface ManagementLocksDeleteAtSubscriptionLevelOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ManagementLocksGetAtSubscriptionLevelOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAtSubscriptionLevel operation. */
export declare type ManagementLocksGetAtSubscriptionLevelResponse = ManagementLockObject;
/** Optional parameters. */
export interface ManagementLocksListAtResourceGroupLevelOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}
/** Contains response data for the listAtResourceGroupLevel operation. */
export declare type ManagementLocksListAtResourceGroupLevelResponse = ManagementLockListResult;
/** Optional parameters. */
export interface ManagementLocksListAtResourceLevelOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}
/** Contains response data for the listAtResourceLevel operation. */
export declare type ManagementLocksListAtResourceLevelResponse = ManagementLockListResult;
/** Optional parameters. */
export interface ManagementLocksListAtSubscriptionLevelOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}
/** Contains response data for the listAtSubscriptionLevel operation. */
export declare type ManagementLocksListAtSubscriptionLevelResponse = ManagementLockListResult;
/** Optional parameters. */
export interface ManagementLocksListByScopeOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}
/** Contains response data for the listByScope operation. */
export declare type ManagementLocksListByScopeResponse = ManagementLockListResult;
/** Optional parameters. */
export interface ManagementLocksListAtResourceGroupLevelNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}
/** Contains response data for the listAtResourceGroupLevelNext operation. */
export declare type ManagementLocksListAtResourceGroupLevelNextResponse = ManagementLockListResult;
/** Optional parameters. */
export interface ManagementLocksListAtResourceLevelNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}
/** Contains response data for the listAtResourceLevelNext operation. */
export declare type ManagementLocksListAtResourceLevelNextResponse = ManagementLockListResult;
/** Optional parameters. */
export interface ManagementLocksListAtSubscriptionLevelNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}
/** Contains response data for the listAtSubscriptionLevelNext operation. */
export declare type ManagementLocksListAtSubscriptionLevelNextResponse = ManagementLockListResult;
/** Optional parameters. */
export interface ManagementLocksListByScopeNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}
/** Contains response data for the listByScopeNext operation. */
export declare type ManagementLocksListByScopeNextResponse = ManagementLockListResult;
/** Optional parameters. */
export interface ManagementLockClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}
//# sourceMappingURL=index.d.ts.map