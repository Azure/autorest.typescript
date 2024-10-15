import { AbortSignalLike } from '@azure/abort-controller';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PollerLike } from '@azure/core-lro';

export declare type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

export declare type CreatedByType = string;

export declare interface ErrorAdditionalInfo {
    readonly type?: string;
    readonly info?: Record<string, any>;
}

export declare interface ErrorDetail {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
    readonly details?: ErrorDetail[];
    readonly additionalInfo?: ErrorAdditionalInfo[];
}

export declare interface ErrorResponse {
    error?: ErrorDetail;
}

export declare enum KnownCreatedByType {
    User = "User",
    Application = "Application",
    ManagedIdentity = "ManagedIdentity",
    Key = "Key"
}

export declare enum KnownResourceProvisioningState {
    Succeeded = "Succeeded",
    Failed = "Failed",
    Canceled = "Canceled"
}

export declare interface NestedProxyResource extends ProxyResource {
    properties?: NestedProxyResourceProperties;
}

export declare interface NestedProxyResourceProperties {
    readonly provisioningState?: ProvisioningState_1;
    description?: string;
}

export declare interface NestedProxyResourcesCreateOrReplaceOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface NestedProxyResourcesDeleteOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface NestedProxyResourcesGetOptionalParams extends OperationOptions {
}

export declare interface NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams extends OperationOptions {
}

export declare interface NestedProxyResourcesOperations {
    get: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, options?: NestedProxyResourcesGetOptionalParams) => Promise<NestedProxyResource>;
    createOrReplace: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, resource: NestedProxyResource, options?: NestedProxyResourcesCreateOrReplaceOptionalParams) => PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
    update: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, properties: NestedProxyResource, options?: NestedProxyResourcesUpdateOptionalParams) => PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
    delete: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, options?: NestedProxyResourcesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByTopLevelTrackedResource: (resourceGroupName: string, topLevelTrackedResourceName: string, options?: NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams) => PagedAsyncIterableIterator<NestedProxyResource>;
}

export declare interface NestedProxyResourcesUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface NotificationDetails {
    message: string;
    urgent: boolean;
}

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare type ProvisioningState = ResourceProvisioningState | "Provisioning" | "Updating" | "Deleting" | "Accepted";

export declare type ProvisioningState_1 = ResourceProvisioningState | "Provisioning" | "Updating" | "Deleting" | "Accepted";

export declare type ProvisioningState_2 = ResourceProvisioningState | "Provisioning" | "Updating" | "Deleting" | "Accepted";

export declare interface ProxyResource extends Resource {
}

export declare interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: SystemData;
}

export declare type ResourceProvisioningState = string;

export declare class ResourcesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(subscriptionId: string, options?: ResourcesClientOptionalParams);
    readonly topLevelTrackedResources: TopLevelTrackedResourcesOperations;
    readonly nestedProxyResources: NestedProxyResourcesOperations;
    readonly singletonTrackedResources: SingletonTrackedResourcesOperations;
}

export declare interface ResourcesClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare function restorePoller<TResponse extends PathUncheckedResponse, TResult>(client: ResourcesClient, serializedState: string, sourceOperation: (...args: any[]) => PollerLike<OperationState<TResult>, TResult>, options?: RestorePollerOptions<TResult>): PollerLike<OperationState<TResult>, TResult>;

export declare interface RestorePollerOptions<TResult, TResponse extends PathUncheckedResponse = PathUncheckedResponse> extends OperationOptions {
    updateIntervalInMs?: number;
    abortSignal?: AbortSignalLike;
    processResponseBody?: (result: TResponse) => Promise<TResult>;
}

export declare interface SingletonTrackedResource extends TrackedResource {
    properties?: SingletonTrackedResourceProperties;
}

export declare interface SingletonTrackedResourceProperties {
    readonly provisioningState?: ProvisioningState;
    description?: string;
}

export declare interface SingletonTrackedResourcesCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface SingletonTrackedResourcesGetByResourceGroupOptionalParams extends OperationOptions {
}

export declare interface SingletonTrackedResourcesListByResourceGroupOptionalParams extends OperationOptions {
}

export declare interface SingletonTrackedResourcesOperations {
    getByResourceGroup: (resourceGroupName: string, options?: SingletonTrackedResourcesGetByResourceGroupOptionalParams) => Promise<SingletonTrackedResource>;
    createOrUpdate: (resourceGroupName: string, resource: SingletonTrackedResource, options?: SingletonTrackedResourcesCreateOrUpdateOptionalParams) => PollerLike<OperationState<SingletonTrackedResource>, SingletonTrackedResource>;
    update: (resourceGroupName: string, properties: SingletonTrackedResource, options?: SingletonTrackedResourcesUpdateOptionalParams) => Promise<SingletonTrackedResource>;
    listByResourceGroup: (resourceGroupName: string, options?: SingletonTrackedResourcesListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<SingletonTrackedResource>;
}

export declare interface SingletonTrackedResourcesUpdateOptionalParams extends OperationOptions {
}

export declare interface SystemData {
    createdBy?: string;
    createdByType?: CreatedByType;
    createdAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    lastModifiedAt?: Date;
}

export declare interface TopLevelTrackedResource extends TrackedResource {
    properties?: TopLevelTrackedResourceProperties;
}

export declare interface TopLevelTrackedResourceProperties {
    readonly provisioningState?: ProvisioningState_2;
    description?: string;
}

export declare interface TopLevelTrackedResourcesActionSyncOptionalParams extends OperationOptions {
}

export declare interface TopLevelTrackedResourcesCreateOrReplaceOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface TopLevelTrackedResourcesDeleteOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface TopLevelTrackedResourcesGetOptionalParams extends OperationOptions {
}

export declare interface TopLevelTrackedResourcesListByResourceGroupOptionalParams extends OperationOptions {
}

export declare interface TopLevelTrackedResourcesListBySubscriptionOptionalParams extends OperationOptions {
}

export declare interface TopLevelTrackedResourcesOperations {
    get: (resourceGroupName: string, topLevelTrackedResourceName: string, options?: TopLevelTrackedResourcesGetOptionalParams) => Promise<TopLevelTrackedResource>;
    createOrReplace: (resourceGroupName: string, topLevelTrackedResourceName: string, resource: TopLevelTrackedResource, options?: TopLevelTrackedResourcesCreateOrReplaceOptionalParams) => PollerLike<OperationState<TopLevelTrackedResource>, TopLevelTrackedResource>;
    update: (resourceGroupName: string, topLevelTrackedResourceName: string, properties: TopLevelTrackedResource, options?: TopLevelTrackedResourcesUpdateOptionalParams) => PollerLike<OperationState<TopLevelTrackedResource>, TopLevelTrackedResource>;
    delete: (resourceGroupName: string, topLevelTrackedResourceName: string, options?: TopLevelTrackedResourcesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByResourceGroup: (resourceGroupName: string, options?: TopLevelTrackedResourcesListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<TopLevelTrackedResource>;
    listBySubscription: (options?: TopLevelTrackedResourcesListBySubscriptionOptionalParams) => PagedAsyncIterableIterator<TopLevelTrackedResource>;
    actionSync: (resourceGroupName: string, topLevelTrackedResourceName: string, body: NotificationDetails, options?: TopLevelTrackedResourcesActionSyncOptionalParams) => Promise<void>;
}

export declare interface TopLevelTrackedResourcesUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface TrackedResource extends Resource {
    tags?: Record<string, string>;
    location: string;
}

export { }
