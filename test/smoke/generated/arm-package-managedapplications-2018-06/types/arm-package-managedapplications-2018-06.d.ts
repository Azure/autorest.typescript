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

export declare class ApplicationClient extends ApplicationClientContext {
    /**
     * Initializes a new instance of the ApplicationClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ApplicationClientOptionalParams);
    applications: Applications;
    applicationDefinitions: ApplicationDefinitions;
}

export declare class ApplicationClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ApplicationClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ApplicationClientOptionalParams);
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
     * @param applicationDefinitionId The fully qualified ID of the managed application definition,
     *                                including the managed application name and the managed application definition resource type. Use the
     *                                format,
     *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
     * @param options The options parameters.
     */
    getById(applicationDefinitionId: string, options?: ApplicationDefinitionsGetByIdOptionalParams): Promise<ApplicationDefinitionsGetByIdResponse>;
    /**
     * Deletes the managed application definition.
     * @param applicationDefinitionId The fully qualified ID of the managed application definition,
     *                                including the managed application name and the managed application definition resource type. Use the
     *                                format,
     *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
     * @param options The options parameters.
     */
    beginDeleteById(applicationDefinitionId: string, options?: ApplicationDefinitionsDeleteByIdOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the managed application definition.
     * @param applicationDefinitionId The fully qualified ID of the managed application definition,
     *                                including the managed application name and the managed application definition resource type. Use the
     *                                format,
     *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
     * @param options The options parameters.
     */
    beginDeleteByIdAndWait(applicationDefinitionId: string, options?: ApplicationDefinitionsDeleteByIdOptionalParams): Promise<void>;
    /**
     * Creates a new managed application definition.
     * @param applicationDefinitionId The fully qualified ID of the managed application definition,
     *                                including the managed application name and the managed application definition resource type. Use the
     *                                format,
     *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
     * @param parameters Parameters supplied to the create or update a managed application definition.
     * @param options The options parameters.
     */
    beginCreateOrUpdateById(applicationDefinitionId: string, parameters: ApplicationDefinition, options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams): Promise<PollerLike<PollOperationState<ApplicationDefinitionsCreateOrUpdateByIdResponse>, ApplicationDefinitionsCreateOrUpdateByIdResponse>>;
    /**
     * Creates a new managed application definition.
     * @param applicationDefinitionId The fully qualified ID of the managed application definition,
     *                                including the managed application name and the managed application definition resource type. Use the
     *                                format,
     *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
     * @param parameters Parameters supplied to the create or update a managed application definition.
     * @param options The options parameters.
     */
    beginCreateOrUpdateByIdAndWait(applicationDefinitionId: string, parameters: ApplicationDefinition, options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams): Promise<ApplicationDefinitionsCreateOrUpdateByIdResponse>;
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
    parameters?: Application;
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
