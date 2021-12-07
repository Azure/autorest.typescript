import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

/** Information about managed application. */
export declare type Application = GenericResource & {
    /** The plan information. */
    plan?: Plan;
    /** The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog. */
    kind: string;
    /** The managed resource group Id. */
    managedResourceGroupId: string;
    /** The fully qualified path of managed application definition Id. */
    applicationDefinitionId?: string;
    /** Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. */
    parameters?: Record<string, unknown>;
    /**
     * Name and value pairs that define the managed application outputs.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outputs?: Record<string, unknown>;
    /**
     * The managed application provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Managed application artifact. */
export declare interface ApplicationArtifact {
    /** The managed application artifact name. */
    name?: string;
    /** The managed application artifact blob uri. */
    uri?: string;
    /** The managed application artifact type. */
    type?: ApplicationArtifactType;
}

/** Defines values for ApplicationArtifactType. */
export declare type ApplicationArtifactType = "Template" | "Custom";

export declare class ApplicationClient extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ApplicationClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ApplicationClientOptionalParams);
    /**
     * Lists all of the available Microsoft.Solutions REST API operations.
     * @param options The options parameters.
     */
    listOperations(options?: ListOperationsOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsPagingPage;
    private listOperationsPagingAll;
    /**
     * ListOperationsNext
     * @param nextLink The nextLink from the previous successful call to the ListOperations method.
     * @param options The options parameters.
     */
    listOperationsNext(nextLink: string, options?: ListOperationsNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextPagingPage;
    private listOperationsNextPagingAll;
    /**
     * ListOperationsNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNext method.
     * @param options The options parameters.
     */
    listOperationsNextNext(nextLink: string, options?: ListOperationsNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextPagingPage;
    private listOperationsNextNextPagingAll;
    /**
     * ListOperationsNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNext method.
     * @param options The options parameters.
     */
    listOperationsNextNextNext(nextLink: string, options?: ListOperationsNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextPagingPage;
    private listOperationsNextNextNextPagingAll;
    /**
     * ListOperationsNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listOperationsNextNextNextNext(nextLink: string, options?: ListOperationsNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextNextPagingPage;
    private listOperationsNextNextNextNextPagingAll;
    /**
     * ListOperationsNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listOperationsNextNextNextNextNext(nextLink: string, options?: ListOperationsNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextNextNextPagingPage;
    private listOperationsNextNextNextNextNextPagingAll;
    /**
     * ListOperationsNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listOperationsNextNextNextNextNextNext(nextLink: string, options?: ListOperationsNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextNextNextNextPagingPage;
    private listOperationsNextNextNextNextNextNextPagingAll;
    /**
     * ListOperationsNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listOperationsNextNextNextNextNextNextNext(nextLink: string, options?: ListOperationsNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextNextNextNextNextPagingPage;
    private listOperationsNextNextNextNextNextNextNextPagingAll;
    /**
     * Lists all of the available Microsoft.Solutions REST API operations.
     * @param options The options parameters.
     */
    private _listOperations;
    /**
     * ListOperationsNext
     * @param nextLink The nextLink from the previous successful call to the ListOperations method.
     * @param options The options parameters.
     */
    private _listOperationsNext;
    /**
     * ListOperationsNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNext;
    /**
     * ListOperationsNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNext;
    /**
     * ListOperationsNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNext;
    /**
     * ListOperationsNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNextNext;
    /**
     * ListOperationsNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNextNextNext;
    /**
     * ListOperationsNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNextNextNextNext;
    /**
     * ListOperationsNextNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNextNextNextNextNext;
    applications: Applications;
    applicationDefinitions: ApplicationDefinitions;
}

/** Optional parameters. */
export declare interface ApplicationClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Information about managed application definition. */
export declare type ApplicationDefinition = GenericResource & {
    /** The managed application lock level. */
    lockLevel: ApplicationLockLevel;
    /** The managed application definition display name. */
    displayName?: string;
    /** A value indicating whether the package is enabled or not. */
    isEnabled?: string;
    /** The managed application provider authorizations. */
    authorizations: ApplicationProviderAuthorization[];
    /** The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition. */
    artifacts?: ApplicationArtifact[];
    /** The managed application definition description. */
    description?: string;
    /** The managed application definition package file Uri. Use this element */
    packageFileUri?: string;
    /** The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string. */
    mainTemplate?: Record<string, unknown>;
    /** The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string. */
    createUiDefinition?: Record<string, unknown>;
};

/** List of managed application definitions. */
export declare interface ApplicationDefinitionListResult {
    /** The array of managed application definitions. */
    value?: ApplicationDefinition[];
    /** The URL to use for getting the next set of results. */
    nextLink?: string;
}

/** Interface representing a ApplicationDefinitions. */
export declare interface ApplicationDefinitions {
    /**
     * Lists the managed application definitions in a resource group.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ApplicationDefinitionsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ApplicationDefinition>;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    listByResourceGroupNext(resourceGroupName: string, nextLink: string, options?: ApplicationDefinitionsListByResourceGroupNextOptionalParams): PagedAsyncIterableIterator<ApplicationDefinition>;
    /**
     * ListByResourceGroupNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupNext
     *                 method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationDefinitionsListByResourceGroupNextNextOptionalParams): PagedAsyncIterableIterator<ApplicationDefinition>;
    /**
     * ListByResourceGroupNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupNextNext
     *                 method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationDefinitionsListByResourceGroupNextNextNextOptionalParams): PagedAsyncIterableIterator<ApplicationDefinition>;
    /**
     * ListByResourceGroupNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationDefinitionsListByResourceGroupNextNextNextNextOptionalParams): PagedAsyncIterableIterator<ApplicationDefinition>;
    /**
     * ListByResourceGroupNextNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationDefinitionsListByResourceGroupNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<ApplicationDefinition>;
    /**
     * ListByResourceGroupNextNextNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationDefinitionsListByResourceGroupNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<ApplicationDefinition>;
    /**
     * ListByResourceGroupNextNextNextNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNextNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationDefinitionsListByResourceGroupNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<ApplicationDefinition>;
    /**
     * Gets the managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, applicationDefinitionName: string, options?: ApplicationDefinitionsGetOptionalParams): Promise<ApplicationDefinitionsGetResponse>;
    /**
     * Deletes the managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition to delete.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, applicationDefinitionName: string, options?: ApplicationDefinitionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition to delete.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, applicationDefinitionName: string, options?: ApplicationDefinitionsDeleteOptionalParams): Promise<void>;
    /**
     * Creates a new managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition.
     * @param parameters Parameters supplied to the create or update an managed application definition.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, applicationDefinitionName: string, parameters: ApplicationDefinition, options?: ApplicationDefinitionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ApplicationDefinitionsCreateOrUpdateResponse>, ApplicationDefinitionsCreateOrUpdateResponse>>;
    /**
     * Creates a new managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition.
     * @param parameters Parameters supplied to the create or update an managed application definition.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, applicationDefinitionName: string, parameters: ApplicationDefinition, options?: ApplicationDefinitionsCreateOrUpdateOptionalParams): Promise<ApplicationDefinitionsCreateOrUpdateResponse>;
    /**
     * Gets the managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition.
     * @param options The options parameters.
     */
    getById(resourceGroupName: string, applicationDefinitionName: string, options?: ApplicationDefinitionsGetByIdOptionalParams): Promise<ApplicationDefinitionsGetByIdResponse>;
    /**
     * Deletes the managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition.
     * @param options The options parameters.
     */
    beginDeleteById(resourceGroupName: string, applicationDefinitionName: string, options?: ApplicationDefinitionsDeleteByIdOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition.
     * @param options The options parameters.
     */
    beginDeleteByIdAndWait(resourceGroupName: string, applicationDefinitionName: string, options?: ApplicationDefinitionsDeleteByIdOptionalParams): Promise<void>;
    /**
     * Creates a new managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition.
     * @param parameters Parameters supplied to the create or update a managed application definition.
     * @param options The options parameters.
     */
    beginCreateOrUpdateById(resourceGroupName: string, applicationDefinitionName: string, parameters: ApplicationDefinition, options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams): Promise<PollerLike<PollOperationState<ApplicationDefinitionsCreateOrUpdateByIdResponse>, ApplicationDefinitionsCreateOrUpdateByIdResponse>>;
    /**
     * Creates a new managed application definition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationDefinitionName The name of the managed application definition.
     * @param parameters Parameters supplied to the create or update a managed application definition.
     * @param options The options parameters.
     */
    beginCreateOrUpdateByIdAndWait(resourceGroupName: string, applicationDefinitionName: string, parameters: ApplicationDefinition, options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams): Promise<ApplicationDefinitionsCreateOrUpdateByIdResponse>;
}

/** Optional parameters. */
export declare interface ApplicationDefinitionsCreateOrUpdateByIdOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateById operation. */
export declare type ApplicationDefinitionsCreateOrUpdateByIdResponse = ApplicationDefinition;

/** Optional parameters. */
export declare interface ApplicationDefinitionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ApplicationDefinitionsCreateOrUpdateResponse = ApplicationDefinition;

/** Optional parameters. */
export declare interface ApplicationDefinitionsDeleteByIdOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ApplicationDefinitionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ApplicationDefinitionsGetByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getById operation. */
export declare type ApplicationDefinitionsGetByIdResponse = ApplicationDefinition;

/** Optional parameters. */
export declare interface ApplicationDefinitionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ApplicationDefinitionsGetResponse = ApplicationDefinition;

/** Optional parameters. */
export declare interface ApplicationDefinitionsListByResourceGroupNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNextNextNextNext operation. */
export declare type ApplicationDefinitionsListByResourceGroupNextNextNextNextNextNextNextNextResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export declare interface ApplicationDefinitionsListByResourceGroupNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNextNextNext operation. */
export declare type ApplicationDefinitionsListByResourceGroupNextNextNextNextNextNextNextResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export declare interface ApplicationDefinitionsListByResourceGroupNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNextNext operation. */
export declare type ApplicationDefinitionsListByResourceGroupNextNextNextNextNextNextResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export declare interface ApplicationDefinitionsListByResourceGroupNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNext operation. */
export declare type ApplicationDefinitionsListByResourceGroupNextNextNextNextNextResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export declare interface ApplicationDefinitionsListByResourceGroupNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNext operation. */
export declare type ApplicationDefinitionsListByResourceGroupNextNextNextNextResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export declare interface ApplicationDefinitionsListByResourceGroupNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNext operation. */
export declare type ApplicationDefinitionsListByResourceGroupNextNextNextResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export declare interface ApplicationDefinitionsListByResourceGroupNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNext operation. */
export declare type ApplicationDefinitionsListByResourceGroupNextNextResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export declare interface ApplicationDefinitionsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ApplicationDefinitionsListByResourceGroupNextResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export declare interface ApplicationDefinitionsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ApplicationDefinitionsListByResourceGroupResponse = ApplicationDefinitionListResult;

/** List of managed applications. */
export declare interface ApplicationListResult {
    /** The array of managed applications. */
    value?: Application[];
    /** The URL to use for getting the next set of results. */
    nextLink?: string;
}

/** Defines values for ApplicationLockLevel. */
export declare type ApplicationLockLevel = "CanNotDelete" | "ReadOnly" | "None";

/** Information about managed application. */
export declare type ApplicationPatchable = GenericResource & {
    /** The plan information. */
    plan?: PlanPatchable;
    /** The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog. */
    kind?: string;
    /** The managed resource group Id. */
    managedResourceGroupId?: string;
    /** The fully qualified path of managed application definition Id. */
    applicationDefinitionId?: string;
    /** Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. */
    parameters?: Record<string, unknown>;
    /**
     * Name and value pairs that define the managed application outputs.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outputs?: Record<string, unknown>;
    /**
     * The managed application provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** The managed application provider authorization. */
export declare interface ApplicationProviderAuthorization {
    /** The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources. */
    principalId: string;
    /** The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group. */
    roleDefinitionId: string;
}

/** Interface representing a Applications. */
export declare interface Applications {
    /**
     * Gets all the applications within a resource group.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ApplicationsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * Gets all the applications within a subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: ApplicationsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    listByResourceGroupNext(resourceGroupName: string, nextLink: string, options?: ApplicationsListByResourceGroupNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListBySubscriptionNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
     * @param options The options parameters.
     */
    listBySubscriptionNext(nextLink: string, options?: ApplicationsListBySubscriptionNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListByResourceGroupNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupNext
     *                 method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationsListByResourceGroupNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListBySubscriptionNextNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionNext method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNext(nextLink: string, options?: ApplicationsListBySubscriptionNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListByResourceGroupNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupNextNext
     *                 method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationsListByResourceGroupNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListBySubscriptionNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionNextNext
     *                 method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNext(nextLink: string, options?: ApplicationsListBySubscriptionNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListByResourceGroupNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationsListByResourceGroupNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListBySubscriptionNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNextNext(nextLink: string, options?: ApplicationsListBySubscriptionNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListByResourceGroupNextNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationsListByResourceGroupNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListBySubscriptionNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListBySubscriptionNextNextNextNext method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNextNextNext(nextLink: string, options?: ApplicationsListBySubscriptionNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListByResourceGroupNextNextNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationsListByResourceGroupNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListBySubscriptionNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListBySubscriptionNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNextNextNextNext(nextLink: string, options?: ApplicationsListBySubscriptionNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListByResourceGroupNextNextNextNextNextNextNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListByResourceGroupNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listByResourceGroupNextNextNextNextNextNextNext(resourceGroupName: string, nextLink: string, options?: ApplicationsListByResourceGroupNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * ListBySubscriptionNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListBySubscriptionNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listBySubscriptionNextNextNextNextNextNextNext(nextLink: string, options?: ApplicationsListBySubscriptionNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Application>;
    /**
     * Gets the managed application.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationName The name of the managed application.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, applicationName: string, options?: ApplicationsGetOptionalParams): Promise<ApplicationsGetResponse>;
    /**
     * Deletes the managed application.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationName The name of the managed application.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, applicationName: string, options?: ApplicationsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the managed application.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationName The name of the managed application.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, applicationName: string, options?: ApplicationsDeleteOptionalParams): Promise<void>;
    /**
     * Creates a new managed application.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationName The name of the managed application.
     * @param parameters Parameters supplied to the create or update a managed application.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, applicationName: string, parameters: Application, options?: ApplicationsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ApplicationsCreateOrUpdateResponse>, ApplicationsCreateOrUpdateResponse>>;
    /**
     * Creates a new managed application.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationName The name of the managed application.
     * @param parameters Parameters supplied to the create or update a managed application.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, applicationName: string, parameters: Application, options?: ApplicationsCreateOrUpdateOptionalParams): Promise<ApplicationsCreateOrUpdateResponse>;
    /**
     * Updates an existing managed application. The only value that can be updated via PATCH currently is
     * the tags.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param applicationName The name of the managed application.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, applicationName: string, options?: ApplicationsUpdateOptionalParams): Promise<ApplicationsUpdateResponse>;
    /**
     * Gets the managed application.
     * @param applicationId The fully qualified ID of the managed application, including the managed
     *                      application name and the managed application resource type. Use the format,
     *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
     * @param options The options parameters.
     */
    getById(applicationId: string, options?: ApplicationsGetByIdOptionalParams): Promise<ApplicationsGetByIdResponse>;
    /**
     * Deletes the managed application.
     * @param applicationId The fully qualified ID of the managed application, including the managed
     *                      application name and the managed application resource type. Use the format,
     *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
     * @param options The options parameters.
     */
    beginDeleteById(applicationId: string, options?: ApplicationsDeleteByIdOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the managed application.
     * @param applicationId The fully qualified ID of the managed application, including the managed
     *                      application name and the managed application resource type. Use the format,
     *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
     * @param options The options parameters.
     */
    beginDeleteByIdAndWait(applicationId: string, options?: ApplicationsDeleteByIdOptionalParams): Promise<void>;
    /**
     * Creates a new managed application.
     * @param applicationId The fully qualified ID of the managed application, including the managed
     *                      application name and the managed application resource type. Use the format,
     *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
     * @param parameters Parameters supplied to the create or update a managed application.
     * @param options The options parameters.
     */
    beginCreateOrUpdateById(applicationId: string, parameters: Application, options?: ApplicationsCreateOrUpdateByIdOptionalParams): Promise<PollerLike<PollOperationState<ApplicationsCreateOrUpdateByIdResponse>, ApplicationsCreateOrUpdateByIdResponse>>;
    /**
     * Creates a new managed application.
     * @param applicationId The fully qualified ID of the managed application, including the managed
     *                      application name and the managed application resource type. Use the format,
     *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
     * @param parameters Parameters supplied to the create or update a managed application.
     * @param options The options parameters.
     */
    beginCreateOrUpdateByIdAndWait(applicationId: string, parameters: Application, options?: ApplicationsCreateOrUpdateByIdOptionalParams): Promise<ApplicationsCreateOrUpdateByIdResponse>;
    /**
     * Updates an existing managed application. The only value that can be updated via PATCH currently is
     * the tags.
     * @param applicationId The fully qualified ID of the managed application, including the managed
     *                      application name and the managed application resource type. Use the format,
     *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
     * @param options The options parameters.
     */
    updateById(applicationId: string, options?: ApplicationsUpdateByIdOptionalParams): Promise<ApplicationsUpdateByIdResponse>;
}

/** Optional parameters. */
export declare interface ApplicationsCreateOrUpdateByIdOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdateById operation. */
export declare type ApplicationsCreateOrUpdateByIdResponse = Application;

/** Optional parameters. */
export declare interface ApplicationsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ApplicationsCreateOrUpdateResponse = Application;

/** Optional parameters. */
export declare interface ApplicationsDeleteByIdOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ApplicationsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ApplicationsGetByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getById operation. */
export declare type ApplicationsGetByIdResponse = Application;

/** Optional parameters. */
export declare interface ApplicationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ApplicationsGetResponse = Application;

/** Optional parameters. */
export declare interface ApplicationsListByResourceGroupNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNextNextNextNext operation. */
export declare type ApplicationsListByResourceGroupNextNextNextNextNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListByResourceGroupNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNextNextNext operation. */
export declare type ApplicationsListByResourceGroupNextNextNextNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListByResourceGroupNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNextNext operation. */
export declare type ApplicationsListByResourceGroupNextNextNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListByResourceGroupNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNextNext operation. */
export declare type ApplicationsListByResourceGroupNextNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListByResourceGroupNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNextNext operation. */
export declare type ApplicationsListByResourceGroupNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListByResourceGroupNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNextNext operation. */
export declare type ApplicationsListByResourceGroupNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListByResourceGroupNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNextNext operation. */
export declare type ApplicationsListByResourceGroupNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ApplicationsListByResourceGroupNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ApplicationsListByResourceGroupResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListBySubscriptionNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNextNextNextNextNext operation. */
export declare type ApplicationsListBySubscriptionNextNextNextNextNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListBySubscriptionNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNextNextNextNext operation. */
export declare type ApplicationsListBySubscriptionNextNextNextNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListBySubscriptionNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNextNextNext operation. */
export declare type ApplicationsListBySubscriptionNextNextNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListBySubscriptionNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNextNext operation. */
export declare type ApplicationsListBySubscriptionNextNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListBySubscriptionNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNextNext operation. */
export declare type ApplicationsListBySubscriptionNextNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListBySubscriptionNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNextNext operation. */
export declare type ApplicationsListBySubscriptionNextNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListBySubscriptionNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNextNext operation. */
export declare type ApplicationsListBySubscriptionNextNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type ApplicationsListBySubscriptionNextResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscription operation. */
export declare type ApplicationsListBySubscriptionResponse = ApplicationListResult;

/** Optional parameters. */
export declare interface ApplicationsUpdateByIdOptionalParams extends coreClient.OperationOptions {
    /** Parameters supplied to update an existing managed application. */
    parameters?: Application;
}

/** Contains response data for the updateById operation. */
export declare type ApplicationsUpdateByIdResponse = Application;

/** Optional parameters. */
export declare interface ApplicationsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Parameters supplied to update an existing managed application. */
    parameters?: ApplicationPatchable;
}

/** Contains response data for the update operation. */
export declare type ApplicationsUpdateResponse = Application;

/** Error response indicates managed application is not able to process the incoming request. The reason is provided in the error message. */
export declare interface ErrorResponse {
    /** Http status code. */
    httpStatus?: string;
    /** Error code. */
    errorCode?: string;
    /** Error message indicating why the operation failed. */
    errorMessage?: string;
}

/** Resource information. */
export declare type GenericResource = Resource & {
    /** ID of the resource that manages this resource. */
    managedBy?: string;
    /** The SKU of the resource. */
    sku?: Sku;
    /** The identity of the resource. */
    identity?: Identity;
};

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
    type?: "SystemAssigned";
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export declare enum KnownProvisioningState {
    Accepted = "Accepted",
    Running = "Running",
    Ready = "Ready",
    Creating = "Creating",
    Created = "Created",
    Deleting = "Deleting",
    Deleted = "Deleted",
    Canceled = "Canceled",
    Failed = "Failed",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNextNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNext operation. */
export declare type ListOperationsNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNext operation. */
export declare type ListOperationsNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNext operation. */
export declare type ListOperationsNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperations operation. */
export declare type ListOperationsResponse = OperationListResult;

/** Microsoft.Solutions operation */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}

/** The object that represents the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft.Solutions */
    provider?: string;
    /** Resource on which the operation is performed: Application, JitRequest, etc. */
    resource?: string;
    /** Operation type: Read, write, delete, etc. */
    operation?: string;
}

/** Result of the request to list Microsoft.Solutions operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of Microsoft.Solutions operations. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Plan for the managed application. */
export declare interface Plan {
    /** The plan name. */
    name: string;
    /** The publisher ID. */
    publisher: string;
    /** The product code. */
    product: string;
    /** The promotion code. */
    promotionCode?: string;
    /** The plan's version. */
    version: string;
}

/** Plan for the managed application. */
export declare interface PlanPatchable {
    /** The plan name. */
    name?: string;
    /** The publisher ID. */
    publisher?: string;
    /** The product code. */
    product?: string;
    /** The promotion code. */
    promotionCode?: string;
    /** The plan's version. */
    version?: string;
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Running** \
 * **Ready** \
 * **Creating** \
 * **Created** \
 * **Deleting** \
 * **Deleted** \
 * **Canceled** \
 * **Failed** \
 * **Succeeded** \
 * **Updating**
 */
export declare type ProvisioningState = string;

/** Resource information. */
export declare interface Resource {
    /**
     * Resource ID
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Resource name
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource location */
    location?: string;
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
}

/** SKU for the resource. */
export declare interface Sku {
    /** The SKU name. */
    name: string;
    /** The SKU tier. */
    tier?: string;
    /** The SKU size. */
    size?: string;
    /** The SKU family. */
    family?: string;
    /** The SKU model. */
    model?: string;
    /** The SKU capacity. */
    capacity?: number;
}

export { }
