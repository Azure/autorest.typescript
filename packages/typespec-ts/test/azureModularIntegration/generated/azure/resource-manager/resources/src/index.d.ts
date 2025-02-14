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
    listByScope: (resourceUri: string, options?: ExtensionsResourcesListByScopeOptionalParams) => PagedAsyncIterableIterator<ResourceManagerResourcesExtensionsResource>;
    delete: (resourceUri: string, extensionsResourceName: string, options?: ExtensionsResourcesDeleteOptionalParams) => Promise<void>;
    update: (resourceUri: string, extensionsResourceName: string, properties: ResourceManagerResourcesExtensionsResource, options?: ExtensionsResourcesUpdateOptionalParams) => Promise<ResourceManagerResourcesExtensionsResource>;
    createOrUpdate: (resourceUri: string, extensionsResourceName: string, resource: ResourceManagerResourcesExtensionsResource, options?: ExtensionsResourcesCreateOrUpdateOptionalParams) => PollerLike<OperationState<ResourceManagerResourcesExtensionsResource>, ResourceManagerResourcesExtensionsResource>;
    get: (resourceUri: string, extensionsResourceName: string, options?: ExtensionsResourcesGetOptionalParams) => Promise<ResourceManagerResourcesExtensionsResource>;
}

export declare interface ExtensionsResourcesUpdateOptionalParams extends OperationOptions {
}

export declare enum KnownResourceManagerCommonTypescreatedByType {
    User = "User",
    Application = "Application",
    ManagedIdentity = "ManagedIdentity",
    Key = "Key"
}

export declare enum KnownResourceManagerResourcesProvisioningState {
    Succeeded = "Succeeded",
    Failed = "Failed",
    Canceled = "Canceled",
    Provisioning = "Provisioning",
    Updating = "Updating",
    Deleting = "Deleting",
    Accepted = "Accepted"
}

export declare enum KnownResourceManagerResourcesVersions {
    v2023_12_01_preview = "2023-12-01-preview"
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
    listByLocation: (location: string, options?: LocationResourcesListByLocationOptionalParams) => PagedAsyncIterableIterator<ResourceManagerResourcesLocationResource>;
    delete: (location: string, locationResourceName: string, options?: LocationResourcesDeleteOptionalParams) => Promise<void>;
    update: (location: string, locationResourceName: string, properties: ResourceManagerResourcesLocationResource, options?: LocationResourcesUpdateOptionalParams) => Promise<ResourceManagerResourcesLocationResource>;
    createOrUpdate: (location: string, locationResourceName: string, resource: ResourceManagerResourcesLocationResource, options?: LocationResourcesCreateOrUpdateOptionalParams) => Promise<ResourceManagerResourcesLocationResource>;
    get: (location: string, locationResourceName: string, options?: LocationResourcesGetOptionalParams) => Promise<ResourceManagerResourcesLocationResource>;
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
    listByTopLevelTrackedResource: (resourceGroupName: string, topLevelTrackedResourceName: string, options?: NestedListByTopLevelTrackedResourceOptionalParams) => PagedAsyncIterableIterator<ResourceManagerResourcesNestedProxyResource>;
    delete: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, options?: NestedDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    update: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, properties: ResourceManagerResourcesNestedProxyResource, options?: NestedUpdateOptionalParams) => PollerLike<OperationState<ResourceManagerResourcesNestedProxyResource>, ResourceManagerResourcesNestedProxyResource>;
    createOrReplace: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, resource: ResourceManagerResourcesNestedProxyResource, options?: NestedCreateOrReplaceOptionalParams) => PollerLike<OperationState<ResourceManagerResourcesNestedProxyResource>, ResourceManagerResourcesNestedProxyResource>;
    get: (resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string, options?: NestedGetOptionalParams) => Promise<ResourceManagerResourcesNestedProxyResource>;
}

export declare interface NestedUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare type ResourceManagerCommonTypescreatedByType = string;

export declare interface ResourceManagerCommonTypesErrorAdditionalInfo {
    readonly type?: string;
    readonly info?: Record<string, any>;
}

export declare interface ResourceManagerCommonTypesErrorDetail {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
    readonly details?: ResourceManagerCommonTypesErrorDetail[];
    readonly additionalInfo?: ResourceManagerCommonTypesErrorAdditionalInfo[];
}

export declare interface ResourceManagerCommonTypesErrorResponse {
    error?: ResourceManagerCommonTypesErrorDetail;
}

export declare interface ResourceManagerCommonTypesExtensionResource extends ResourceManagerCommonTypesResource {
}

export declare interface ResourceManagerCommonTypesProxyResource extends ResourceManagerCommonTypesResource {
}

export declare interface ResourceManagerCommonTypesResource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: ResourceManagerCommonTypesSystemData;
}

export declare interface ResourceManagerCommonTypesSystemData {
    createdBy?: string;
    createdByType?: ResourceManagerCommonTypescreatedByType;
    createdAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: ResourceManagerCommonTypescreatedByType;
    lastModifiedAt?: Date;
}

export declare interface ResourceManagerCommonTypesTrackedResource extends ResourceManagerCommonTypesResource {
    tags?: Record<string, string>;
    location: string;
}

export declare interface ResourceManagerResourcesExtensionsResource extends ResourceManagerCommonTypesExtensionResource {
    properties?: ResourceManagerResourcesExtensionsResourceProperties;
}

export declare interface ResourceManagerResourcesExtensionsResourceProperties {
    description?: string;
    readonly provisioningState?: ResourceManagerResourcesProvisioningState;
}

export declare interface ResourceManagerResourcesLocationResource extends ResourceManagerCommonTypesProxyResource {
    properties?: ResourceManagerResourcesLocationResourceProperties;
}

export declare interface ResourceManagerResourcesLocationResourceProperties {
    description?: string;
    readonly provisioningState?: ResourceManagerResourcesProvisioningState;
}

export declare interface ResourceManagerResourcesNestedProxyResource extends ResourceManagerCommonTypesProxyResource {
    properties?: ResourceManagerResourcesNestedProxyResourceProperties;
}

export declare interface ResourceManagerResourcesNestedProxyResourceProperties {
    readonly provisioningState?: ResourceManagerResourcesProvisioningState;
    description?: string;
}

export declare interface ResourceManagerResourcesNotificationDetails {
    message: string;
    urgent: boolean;
}

export declare type ResourceManagerResourcesProvisioningState = string;

export declare interface ResourceManagerResourcesSingletonTrackedResource extends ResourceManagerCommonTypesTrackedResource {
    properties?: ResourceManagerResourcesSingletonTrackedResourceProperties;
}

export declare interface ResourceManagerResourcesSingletonTrackedResourceProperties {
    readonly provisioningState?: ResourceManagerResourcesProvisioningState;
    description?: string;
}

export declare interface ResourceManagerResourcesTopLevelTrackedResource extends ResourceManagerCommonTypesTrackedResource {
    properties?: ResourceManagerResourcesTopLevelTrackedResourceProperties;
}

export declare interface ResourceManagerResourcesTopLevelTrackedResourceProperties {
    readonly provisioningState?: ResourceManagerResourcesProvisioningState;
    description?: string;
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
    listByResourceGroup: (resourceGroupName: string, options?: SingletonListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<ResourceManagerResourcesSingletonTrackedResource>;
    update: (resourceGroupName: string, properties: ResourceManagerResourcesSingletonTrackedResource, options?: SingletonUpdateOptionalParams) => Promise<ResourceManagerResourcesSingletonTrackedResource>;
    createOrUpdate: (resourceGroupName: string, resource: ResourceManagerResourcesSingletonTrackedResource, options?: SingletonCreateOrUpdateOptionalParams) => PollerLike<OperationState<ResourceManagerResourcesSingletonTrackedResource>, ResourceManagerResourcesSingletonTrackedResource>;
    getByResourceGroup: (resourceGroupName: string, options?: SingletonGetByResourceGroupOptionalParams) => Promise<ResourceManagerResourcesSingletonTrackedResource>;
}

export declare interface SingletonUpdateOptionalParams extends OperationOptions {
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
    actionSync: (resourceGroupName: string, topLevelTrackedResourceName: string, body: ResourceManagerResourcesNotificationDetails, options?: TopLevelActionSyncOptionalParams) => Promise<void>;
    listBySubscription: (options?: TopLevelListBySubscriptionOptionalParams) => PagedAsyncIterableIterator<ResourceManagerResourcesTopLevelTrackedResource>;
    listByResourceGroup: (resourceGroupName: string, options?: TopLevelListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<ResourceManagerResourcesTopLevelTrackedResource>;
    delete: (resourceGroupName: string, topLevelTrackedResourceName: string, options?: TopLevelDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    update: (resourceGroupName: string, topLevelTrackedResourceName: string, properties: ResourceManagerResourcesTopLevelTrackedResource, options?: TopLevelUpdateOptionalParams) => PollerLike<OperationState<ResourceManagerResourcesTopLevelTrackedResource>, ResourceManagerResourcesTopLevelTrackedResource>;
    createOrReplace: (resourceGroupName: string, topLevelTrackedResourceName: string, resource: ResourceManagerResourcesTopLevelTrackedResource, options?: TopLevelCreateOrReplaceOptionalParams) => PollerLike<OperationState<ResourceManagerResourcesTopLevelTrackedResource>, ResourceManagerResourcesTopLevelTrackedResource>;
    get: (resourceGroupName: string, topLevelTrackedResourceName: string, options?: TopLevelGetOptionalParams) => Promise<ResourceManagerResourcesTopLevelTrackedResource>;
}

export declare interface TopLevelUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export { }
