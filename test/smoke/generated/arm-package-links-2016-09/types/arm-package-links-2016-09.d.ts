import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

export declare class ManagementLinkClient extends ManagementLinkClientContext {
    /**
     * Initializes a new instance of the ManagementLinkClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ManagementLinkClientOptionalParams);
    operations: Operations;
    resourceLinks: ResourceLinks;
}

export declare class ManagementLinkClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ManagementLinkClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ManagementLinkClientOptionalParams);
}

/** Optional parameters. */
export declare interface ManagementLinkClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Microsoft.Resources operation */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}

/** The object that represents the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft.Resources */
    provider?: string;
    /** Resource on which the operation is performed: Profile, endpoint, etc. */
    resource?: string;
    /** Operation type: Read, write, delete, etc. */
    operation?: string;
    /** Description of the operation. */
    description?: string;
}

/** Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of Microsoft.Resources operations. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Lists all of the available Microsoft.Resources REST API operations.
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

/** The resource link. */
export declare interface ResourceLink {
    /**
     * The fully qualified ID of the resource link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the resource link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The resource link object.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: Record<string, unknown>;
    /** Properties for resource link. */
    properties?: ResourceLinkProperties;
}

/** Resource link filter. */
export declare interface ResourceLinkFilter {
    /** The ID of the target resource. */
    targetId: string;
}

/** The resource link properties. */
export declare interface ResourceLinkProperties {
    /**
     * The fully qualified ID of the source resource in the link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sourceId?: string;
    /** The fully qualified ID of the target resource in the link. */
    targetId: string;
    /** Notes about the resource link. */
    notes?: string;
}

/** List of resource links. */
export declare interface ResourceLinkResult {
    /** An array of resource links. */
    value: ResourceLink[];
    /**
     * The URL to use for getting the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ResourceLinks. */
export declare interface ResourceLinks {
    /**
     * Gets all the linked resources for the subscription.
     * @param options The options parameters.
     */
    listAtSubscription(options?: ResourceLinksListAtSubscriptionOptionalParams): PagedAsyncIterableIterator<ResourceLink>;
    /**
     * Gets a list of resource links at and below the specified source scope.
     * @param scope The fully qualified ID of the scope for getting the resource links. For example, to
     *              list resource links at and under a resource group, set the scope to
     *              /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
     * @param options The options parameters.
     */
    listAtSourceScope(scope: string, options?: ResourceLinksListAtSourceScopeOptionalParams): PagedAsyncIterableIterator<ResourceLink>;
    /**
     * Deletes a resource link with the specified ID.
     * @param linkId The fully qualified ID of the resource link. Use the format,
     *               /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}.
     *               For example,
     *               /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
     * @param options The options parameters.
     */
    delete(linkId: string, options?: ResourceLinksDeleteOptionalParams): Promise<void>;
    /**
     * Creates or updates a resource link between the specified resources.
     * @param linkId The fully qualified ID of the resource link. Use the format,
     *               /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}.
     *               For example,
     *               /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
     * @param parameters Parameters for creating or updating a resource link.
     * @param options The options parameters.
     */
    createOrUpdate(linkId: string, parameters: ResourceLink, options?: ResourceLinksCreateOrUpdateOptionalParams): Promise<ResourceLinksCreateOrUpdateResponse>;
    /**
     * Gets a resource link with the specified ID.
     * @param linkId The fully qualified Id of the resource link. For example,
     *               /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
     * @param options The options parameters.
     */
    get(linkId: string, options?: ResourceLinksGetOptionalParams): Promise<ResourceLinksGetResponse>;
}

/** Optional parameters. */
export declare interface ResourceLinksCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ResourceLinksCreateOrUpdateResponse = ResourceLink;

/** Optional parameters. */
export declare interface ResourceLinksDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ResourceLinksGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ResourceLinksGetResponse = ResourceLink;

/** Optional parameters. */
export declare interface ResourceLinksListAtSourceScopeNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAtSourceScopeNext operation. */
export declare type ResourceLinksListAtSourceScopeNextResponse = ResourceLinkResult;

/** Optional parameters. */
export declare interface ResourceLinksListAtSourceScopeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAtSourceScope operation. */
export declare type ResourceLinksListAtSourceScopeResponse = ResourceLinkResult;

/** Optional parameters. */
export declare interface ResourceLinksListAtSubscriptionNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the list resource links operation. The supported filter for list resource links is targetId. For example, $filter=targetId eq {value} */
    filter?: string;
}

/** Contains response data for the listAtSubscriptionNext operation. */
export declare type ResourceLinksListAtSubscriptionNextResponse = ResourceLinkResult;

/** Optional parameters. */
export declare interface ResourceLinksListAtSubscriptionOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the list resource links operation. The supported filter for list resource links is targetId. For example, $filter=targetId eq {value} */
    filter?: string;
}

/** Contains response data for the listAtSubscription operation. */
export declare type ResourceLinksListAtSubscriptionResponse = ResourceLinkResult;

export { }
