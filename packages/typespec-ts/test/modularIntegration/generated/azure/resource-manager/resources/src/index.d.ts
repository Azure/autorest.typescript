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

export declare enum KnownCreatedByType {
    User = "User",
    Application = "Application",
    ManagedIdentity = "ManagedIdentity",
    Key = "Key"
}

export declare enum KnownProvisioningState {
    Succeeded = "Succeeded",
    Failed = "Failed",
    Canceled = "Canceled",
    Provisioning = "Provisioning",
    Updating = "Updating",
    Deleting = "Deleting",
    Accepted = "Accepted"
}

export declare enum KnownVersions {
    v2023_12_01_preview = "2023-12-01-preview"
}

export declare interface NestedCreateOrReplaceOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
    contentType?: "application/json";
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

export declare interface NestedProxyResource extends ProxyResource {
    properties?: NestedProxyResourceProperties;
}

export declare interface NestedProxyResourceProperties {
    readonly provisioningState?: ProvisioningState;
    description?: string;
}

export declare interface NestedUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
    contentType?: "application/json";
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

export declare type ProvisioningState = string;

export declare interface ProxyResource extends Resource {
}

export declare interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: SystemData;
}

export declare class ResourcesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(subscriptionId: string, options?: ResourcesClientOptionalParams);
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
    contentType?: "application/json";
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

export declare interface SingletonTrackedResource extends TrackedResource {
    properties?: SingletonTrackedResourceProperties;
}

export declare interface SingletonTrackedResourceProperties {
    readonly provisioningState?: ProvisioningState;
    description?: string;
}

export declare interface SingletonUpdateOptionalParams extends OperationOptions {
    contentType?: "application/json";
}

export declare interface SystemData {
    createdBy?: string;
    createdByType?: CreatedByType;
    createdAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    lastModifiedAt?: Date;
}

export declare interface TopLevelActionSyncOptionalParams extends OperationOptions {
    contentType?: "application/json";
}

export declare interface TopLevelCreateOrReplaceOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
    contentType?: "application/json";
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

export declare interface TopLevelTrackedResource extends TrackedResource {
    properties?: TopLevelTrackedResourceProperties;
}

export declare interface TopLevelTrackedResourceProperties {
    readonly provisioningState?: ProvisioningState;
    description?: string;
}

export declare interface TopLevelUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
    contentType?: "application/json";
}

export declare interface TrackedResource extends Resource {
    tags?: Record<string, string>;
    location: string;
}

export { }
