import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

/** An error response from the ManagedServiceIdentity service. */
export declare interface CloudError {
    /** A list of additional details about the error. */
    error?: CloudErrorBody;
}

/** An error response from the ManagedServiceIdentity service. */
export declare interface CloudErrorBody {
    /** An identifier for the error. */
    code?: string;
    /** A message describing the error, intended to be suitable for display in a user interface. */
    message?: string;
    /** The target of the particular error. For example, the name of the property in error. */
    target?: string;
    /** A list of additional details about the error. */
    details?: CloudErrorBody[];
}

/** Describes an identity resource. */
export declare type Identity = TrackedResource & {
    /**
     * The id of the tenant which the identity belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /**
     * The id of the service principal object associated with the created identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The id of the app associated with the identity. This is a random generated UUID by MSI.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
};

/** Describes an identity resource. */
export declare type IdentityUpdate = Resource & {
    /** The geo-location where the resource lives */
    location?: string;
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * The id of the tenant which the identity belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /**
     * The id of the service principal object associated with the created identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The id of the app associated with the identity. This is a random generated UUID by MSI.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
};

export declare class ManagedServiceIdentityClient extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ManagedServiceIdentityClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The Id of the Subscription to which the identity belongs.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ManagedServiceIdentityClientOptionalParams);
    systemAssignedIdentities: SystemAssignedIdentities;
    operations: Operations;
    userAssignedIdentities: UserAssignedIdentities;
}

/** Optional parameters. */
export declare interface ManagedServiceIdentityClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Operation supported by the Microsoft.ManagedIdentity REST API. */
export declare interface Operation {
    /** The name of the REST Operation. This is of the format {provider}/{resource}/{operation}. */
    name?: string;
    /** The object that describes the operation. */
    display?: OperationDisplay;
}

/** The object that describes the operation. */
export declare interface OperationDisplay {
    /** Friendly name of the resource provider. */
    provider?: string;
    /** The type of operation. For example: read, write, delete. */
    operation?: string;
    /** The resource type on which the operation is performed. */
    resource?: string;
    /** A description of the operation. */
    description?: string;
}

/** A list of operations supported by Microsoft.ManagedIdentity Resource Provider. */
export declare interface OperationListResult {
    /** A list of operations supported by Microsoft.ManagedIdentity Resource Provider. */
    value?: Operation[];
    /** The url to get the next page of results, if any. */
    nextLink?: string;
}

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Lists available operations for the Microsoft.ManagedIdentity provider
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

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export declare type ProxyResource = Resource & {};

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

/** Interface representing a SystemAssignedIdentities. */
export declare interface SystemAssignedIdentities {
    /**
     * Gets the systemAssignedIdentity available under the specified RP scope.
     * @param scope The resource provider scope of the resource. Parent resource being extended by Managed
     *              Identities.
     * @param options The options parameters.
     */
    getByScope(scope: string, options?: SystemAssignedIdentitiesGetByScopeOptionalParams): Promise<SystemAssignedIdentitiesGetByScopeResponse>;
}

/** Optional parameters. */
export declare interface SystemAssignedIdentitiesGetByScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getByScope operation. */
export declare type SystemAssignedIdentitiesGetByScopeResponse = SystemAssignedIdentity;

/** Describes a system assigned identity resource. */
export declare type SystemAssignedIdentity = ProxyResource & {
    /** The geo-location where the resource lives */
    location: string;
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * The id of the tenant which the identity belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /**
     * The id of the service principal object associated with the created identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The id of the app associated with the identity. This is a random generated UUID by MSI.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
    /**
     *  The ManagedServiceIdentity DataPlane URL that can be queried to obtain the identity credentials.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientSecretUrl?: string;
};

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export declare type TrackedResource = Resource & {
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** The geo-location where the resource lives */
    location: string;
};

/** Interface representing a UserAssignedIdentities. */
export declare interface UserAssignedIdentities {
    /**
     * Lists all the userAssignedIdentities available under the specified subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: UserAssignedIdentitiesListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Identity>;
    /**
     * Lists all the userAssignedIdentities available under the specified ResourceGroup.
     * @param resourceGroupName The name of the Resource Group to which the identity belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: UserAssignedIdentitiesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Identity>;
    /**
     * Create or update an identity in the specified subscription and resource group.
     * @param resourceGroupName The name of the Resource Group to which the identity belongs.
     * @param resourceName The name of the identity resource.
     * @param parameters Parameters to create or update the identity
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, resourceName: string, parameters: Identity, options?: UserAssignedIdentitiesCreateOrUpdateOptionalParams): Promise<UserAssignedIdentitiesCreateOrUpdateResponse>;
    /**
     * Update an identity in the specified subscription and resource group.
     * @param resourceGroupName The name of the Resource Group to which the identity belongs.
     * @param resourceName The name of the identity resource.
     * @param parameters Parameters to update the identity
     * @param options The options parameters.
     */
    update(resourceGroupName: string, resourceName: string, parameters: IdentityUpdate, options?: UserAssignedIdentitiesUpdateOptionalParams): Promise<UserAssignedIdentitiesUpdateResponse>;
    /**
     * Gets the identity.
     * @param resourceGroupName The name of the Resource Group to which the identity belongs.
     * @param resourceName The name of the identity resource.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, resourceName: string, options?: UserAssignedIdentitiesGetOptionalParams): Promise<UserAssignedIdentitiesGetResponse>;
    /**
     * Deletes the identity.
     * @param resourceGroupName The name of the Resource Group to which the identity belongs.
     * @param resourceName The name of the identity resource.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, resourceName: string, options?: UserAssignedIdentitiesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface UserAssignedIdentitiesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type UserAssignedIdentitiesCreateOrUpdateResponse = Identity;

/** Optional parameters. */
export declare interface UserAssignedIdentitiesDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface UserAssignedIdentitiesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type UserAssignedIdentitiesGetResponse = Identity;

/** Optional parameters. */
export declare interface UserAssignedIdentitiesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type UserAssignedIdentitiesListByResourceGroupNextResponse = UserAssignedIdentitiesListResult;

/** Optional parameters. */
export declare interface UserAssignedIdentitiesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type UserAssignedIdentitiesListByResourceGroupResponse = UserAssignedIdentitiesListResult;

/** Optional parameters. */
export declare interface UserAssignedIdentitiesListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type UserAssignedIdentitiesListBySubscriptionNextResponse = UserAssignedIdentitiesListResult;

/** Optional parameters. */
export declare interface UserAssignedIdentitiesListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscription operation. */
export declare type UserAssignedIdentitiesListBySubscriptionResponse = UserAssignedIdentitiesListResult;

/** Values returned by the List operation. */
export declare interface UserAssignedIdentitiesListResult {
    /** The collection of userAssignedIdentities returned by the listing operation. */
    value?: Identity[];
    /** The url to get the next page of results, if any. */
    nextLink?: string;
}

/** Optional parameters. */
export declare interface UserAssignedIdentitiesUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type UserAssignedIdentitiesUpdateResponse = Identity;

export { }
