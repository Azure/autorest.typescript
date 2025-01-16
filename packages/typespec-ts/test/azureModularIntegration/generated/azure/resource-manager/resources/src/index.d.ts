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

declare type CreatedByType = string;

declare interface ExtensionResource extends Resource {
}

declare interface ExtensionsResource extends ExtensionResource {
    properties?: ExtensionsResourceProperties;
}

declare interface ExtensionsResourceProperties {
    description?: string;
    readonly provisioningState?: ProvisioningState;
}

export declare interface ExtensionsResourcesCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface ExtensionsResourcesDeleteOptionalParams extends OperationOptions {
}

export declare interface ExtensionsResourcesGetOptionalParams extends OperationOptions {
}

export declare interface ExtensionsResourcesListByScopeOptionalParams extends OperationOptions {
}

export declare interface ExtensionsResourcesOperations {
    listByScope: (resourceUri: string, options?: ExtensionsResourcesListByScopeOptionalParams) => PagedAsyncIterableIterator<ExtensionsResource>;
    delete: (resourceUri: string, extensionsResourceName: string, options?: ExtensionsResourcesDeleteOptionalParams) => Promise<void>;
    update: (resourceUri: string, extensionsResourceName: string, properties: ExtensionsResource, options?: ExtensionsResourcesUpdateOptionalParams) => Promise<ExtensionsResource>;
    createOrUpdate: (resourceUri: string, extensionsResourceName: string, resource: ExtensionsResource, options?: ExtensionsResourcesCreateOrUpdateOptionalParams) => PollerLike<OperationState<ExtensionsResource>, ExtensionsResource>;
    get: (resourceUri: string, extensionsResourceName: string, options?: ExtensionsResourcesGetOptionalParams) => Promise<ExtensionsResource>;
}

export declare interface ExtensionsResourcesUpdateOptionalParams extends OperationOptions {
}

declare interface LocationResource extends ProxyResource {
    properties?: LocationResourceProperties;
}

declare interface LocationResourceProperties {
    description?: string;
    readonly provisioningState?: ProvisioningState;
}

export declare interface LocationResourcesCreateOrUpdateOptionalParams extends OperationOptions {
}

export declare interface LocationResourcesDeleteOptionalParams extends OperationOptions {
}

export declare interface LocationResourcesGetOptionalParams extends OperationOptions {
}

export declare interface LocationResourcesListByLocationOptionalParams extends OperationOptions {
}

export declare interface LocationResourcesOperations {
    listByLocation: (location: string, options?: LocationResourcesListByLocationOptionalParams) => PagedAsyncIterableIterator<LocationResource>;
    delete: (location: string, locationResourceName: string, options?: LocationResourcesDeleteOptionalParams) => Promise<void>;
    update: (location: string, locationResourceName: string, properties: LocationResource, options?: LocationResourcesUpdateOptionalParams) => Promise<LocationResource>;
    createOrUpdate: (location: string, locationResourceName: string, resource: LocationResource, options?: LocationResourcesCreateOrUpdateOptionalParams) => Promise<LocationResource>;
    get: (location: string, locationResourceName: string, options?: LocationResourcesGetOptionalParams) => Promise<LocationResource>;
}

export declare interface LocationResourcesUpdateOptionalParams extends OperationOptions {
}

export declare interface NestedCreateOrReplaceOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface NestedDeleteOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface NestedGetOptionalParams extends OperationOptions {
}

export declare interface NestedListByTopLevelTrackedResourceOptionalParams extends OperationOptions {
}

export declare interface NestedOperations {
    listByTopLevelTrackedResource: (resourceGroupName: string, topLevelTrackedResourceName: string, options?: NestedListByTopLevelTrackedResourceOptionalParams) => PagedAsyncIterableIterator<NestedProxyResource>;
    delete: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, options?: NestedDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    update: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, properties: NestedProxyResource, options?: NestedUpdateOptionalParams) => PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
    createOrReplace: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, resource: NestedProxyResource, options?: NestedCreateOrReplaceOptionalParams) => PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
    get: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, options?: NestedGetOptionalParams) => Promise<NestedProxyResource>;
}

declare interface NestedProxyResource extends ProxyResource {
    properties?: NestedProxyResourceProperties;
}

declare interface NestedProxyResourceProperties {
    readonly provisioningState?: ProvisioningState;
    description?: string;
}

export declare interface NestedUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

declare interface NotificationDetails {
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

declare type ProvisioningState = string;

declare interface ProxyResource extends Resource {
}

declare interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: SystemData;
}

export declare class ResourcesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(subscriptionId: string, options?: ResourcesClientOptionalParams);
    readonly locationResources: LocationResourcesOperations;
    readonly extensionsResources: ExtensionsResourcesOperations;
    readonly singleton: SingletonOperations;
    readonly nested: NestedOperations;
    readonly topLevel: TopLevelOperations;
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

export declare interface SingletonCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface SingletonGetByResourceGroupOptionalParams extends OperationOptions {
}

export declare interface SingletonListByResourceGroupOptionalParams extends OperationOptions {
}

export declare interface SingletonOperations {
    listByResourceGroup: (resourceGroupName: string, options?: SingletonListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<SingletonTrackedResource>;
    update: (resourceGroupName: string, properties: SingletonTrackedResource, options?: SingletonUpdateOptionalParams) => Promise<SingletonTrackedResource>;
    createOrUpdate: (resourceGroupName: string, resource: SingletonTrackedResource, options?: SingletonCreateOrUpdateOptionalParams) => PollerLike<OperationState<SingletonTrackedResource>, SingletonTrackedResource>;
    getByResourceGroup: (resourceGroupName: string, options?: SingletonGetByResourceGroupOptionalParams) => Promise<SingletonTrackedResource>;
}

declare interface SingletonTrackedResource extends TrackedResource {
    properties?: SingletonTrackedResourceProperties;
}

declare interface SingletonTrackedResourceProperties {
    readonly provisioningState?: ProvisioningState;
    description?: string;
}

export declare interface SingletonUpdateOptionalParams extends OperationOptions {
}

declare interface SystemData {
    createdBy?: string;
    createdByType?: CreatedByType;
    createdAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    lastModifiedAt?: Date;
}

export declare interface TopLevelActionSyncOptionalParams extends OperationOptions {
}

export declare interface TopLevelCreateOrReplaceOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface TopLevelDeleteOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface TopLevelGetOptionalParams extends OperationOptions {
}

export declare interface TopLevelListByResourceGroupOptionalParams extends OperationOptions {
}

export declare interface TopLevelListBySubscriptionOptionalParams extends OperationOptions {
}

export declare interface TopLevelOperations {
    actionSync: (resourceGroupName: string, topLevelTrackedResourceName: string, body: NotificationDetails, options?: TopLevelActionSyncOptionalParams) => Promise<void>;
    listBySubscription: (options?: TopLevelListBySubscriptionOptionalParams) => PagedAsyncIterableIterator<TopLevelTrackedResource>;
    listByResourceGroup: (resourceGroupName: string, options?: TopLevelListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<TopLevelTrackedResource>;
    delete: (resourceGroupName: string, topLevelTrackedResourceName: string, options?: TopLevelDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    update: (resourceGroupName: string, topLevelTrackedResourceName: string, properties: TopLevelTrackedResource, options?: TopLevelUpdateOptionalParams) => PollerLike<OperationState<TopLevelTrackedResource>, TopLevelTrackedResource>;
    createOrReplace: (resourceGroupName: string, topLevelTrackedResourceName: string, resource: TopLevelTrackedResource, options?: TopLevelCreateOrReplaceOptionalParams) => PollerLike<OperationState<TopLevelTrackedResource>, TopLevelTrackedResource>;
    get: (resourceGroupName: string, topLevelTrackedResourceName: string, options?: TopLevelGetOptionalParams) => Promise<TopLevelTrackedResource>;
}

declare interface TopLevelTrackedResource extends TrackedResource {
    properties?: TopLevelTrackedResourceProperties;
}

declare interface TopLevelTrackedResourceProperties {
    readonly provisioningState?: ProvisioningState;
    description?: string;
}

export declare interface TopLevelUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

declare interface TrackedResource extends Resource {
    tags?: Record<string, string>;
    location: string;
}

export { }
