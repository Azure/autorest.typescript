import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ActionType = string;

export declare enum AzureClouds {
    AZURE_PUBLIC_CLOUD = "AZURE_PUBLIC_CLOUD",
    AZURE_CHINA_CLOUD = "AZURE_CHINA_CLOUD",
    AZURE_US_GOVERNMENT = "AZURE_US_GOVERNMENT"
}

export declare type AzureSupportedClouds = `${AzureClouds}`;

export declare type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

export declare type CreatedByType = string;

export declare interface ErrorAdditionalInfo {
    readonly type?: string;
    readonly info?: any;
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

export declare enum KnownActionType {
    Internal = "Internal"
}

export declare enum KnownCreatedByType {
    User = "User",
    Application = "Application",
    ManagedIdentity = "ManagedIdentity",
    Key = "Key"
}

export declare enum KnownOrigin {
    User = "user",
    System = "system",
    UserSystem = "user,system"
}

export declare enum KnownResourceProvisioningState {
    Succeeded = "Succeeded",
    Failed = "Failed",
    Canceled = "Canceled"
}

export declare enum KnownVersions {
    V20231201Preview = "2023-12-01-preview"
}

export declare class MethodSubscriptionIdClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: MethodSubscriptionIdClientOptionalParams);
    constructor(subscriptionId: string, options?: MethodSubscriptionIdClientOptionalParams);
    readonly operations: OperationsOperations;
    readonly resourceGroupResourceOperations: ResourceGroupResourceOperationsOperations;
    readonly subscriptionResourceOperations: SubscriptionResourceOperationsOperations;
    readonly subscriptionResource2Operations: SubscriptionResource2OperationsOperations;
    readonly subscriptionResource1Operations: SubscriptionResource1OperationsOperations;
}

export declare interface MethodSubscriptionIdClientOptionalParams extends ClientOptions {
    apiVersion?: string;
    cloudSetting?: AzureSupportedClouds;
}

export declare interface Operation {
    readonly name?: string;
    readonly isDataAction?: boolean;
    display?: OperationDisplay;
    readonly origin?: Origin;
    readonly actionType?: ActionType;
}

export declare interface OperationDisplay {
    readonly provider?: string;
    readonly resource?: string;
    readonly operation?: string;
    readonly description?: string;
}

export declare interface OperationsListOptionalParams extends OperationOptions {
}

export declare interface OperationsOperations {
    list: (options?: OperationsListOptionalParams) => PagedAsyncIterableIterator<Operation>;
}

export declare type Origin = string;

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare interface ProxyResource extends Resource {
}

export declare interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: SystemData;
}

export declare interface ResourceGroupResource extends TrackedResource {
    properties?: ResourceGroupResourceProperties;
}

export declare interface ResourceGroupResourceOperationsDeleteOptionalParams extends OperationOptions {
}

export declare interface ResourceGroupResourceOperationsGetOptionalParams extends OperationOptions {
}

export declare interface ResourceGroupResourceOperationsOperations {
    delete: (resourceGroupName: string, resourceGroupResourceName: string, options?: ResourceGroupResourceOperationsDeleteOptionalParams) => Promise<void>;
    put: (resourceGroupName: string, resourceGroupResourceName: string, resource: ResourceGroupResource, options?: ResourceGroupResourceOperationsPutOptionalParams) => Promise<ResourceGroupResource>;
    get: (resourceGroupName: string, resourceGroupResourceName: string, options?: ResourceGroupResourceOperationsGetOptionalParams) => Promise<ResourceGroupResource>;
}

export declare interface ResourceGroupResourceOperationsPutOptionalParams extends OperationOptions {
}

export declare interface ResourceGroupResourceProperties {
    readonly provisioningState?: ResourceProvisioningState;
    resourceGroupSetting?: string;
}

export declare type ResourceProvisioningState = string;

export declare interface SubscriptionResource extends ProxyResource {
    properties?: SubscriptionResourceProperties;
}

export declare interface SubscriptionResource1 extends ProxyResource {
    properties?: SubscriptionResource1Properties;
}

export declare interface SubscriptionResource1OperationsDeleteOptionalParams extends OperationOptions {
}

export declare interface SubscriptionResource1OperationsGetOptionalParams extends OperationOptions {
}

export declare interface SubscriptionResource1OperationsOperations {
    delete: (subscriptionId: string, subscriptionResource1Name: string, options?: SubscriptionResource1OperationsDeleteOptionalParams) => Promise<void>;
    put: (subscriptionId: string, subscriptionResource1Name: string, resource: SubscriptionResource1, options?: SubscriptionResource1OperationsPutOptionalParams) => Promise<SubscriptionResource1>;
    get: (subscriptionId: string, subscriptionResource1Name: string, options?: SubscriptionResource1OperationsGetOptionalParams) => Promise<SubscriptionResource1>;
}

export declare interface SubscriptionResource1OperationsPutOptionalParams extends OperationOptions {
}

export declare interface SubscriptionResource1Properties {
    readonly provisioningState?: ResourceProvisioningState;
    description?: string;
}

export declare interface SubscriptionResource2 extends ProxyResource {
    properties?: SubscriptionResource2Properties;
}

export declare interface SubscriptionResource2OperationsDeleteOptionalParams extends OperationOptions {
}

export declare interface SubscriptionResource2OperationsGetOptionalParams extends OperationOptions {
}

export declare interface SubscriptionResource2OperationsOperations {
    delete: (subscriptionId: string, subscriptionResource2Name: string, options?: SubscriptionResource2OperationsDeleteOptionalParams) => Promise<void>;
    put: (subscriptionId: string, subscriptionResource2Name: string, resource: SubscriptionResource2, options?: SubscriptionResource2OperationsPutOptionalParams) => Promise<SubscriptionResource2>;
    get: (subscriptionId: string, subscriptionResource2Name: string, options?: SubscriptionResource2OperationsGetOptionalParams) => Promise<SubscriptionResource2>;
}

export declare interface SubscriptionResource2OperationsPutOptionalParams extends OperationOptions {
}

export declare interface SubscriptionResource2Properties {
    readonly provisioningState?: ResourceProvisioningState;
    configValue?: string;
}

export declare interface SubscriptionResourceOperationsDeleteOptionalParams extends OperationOptions {
}

export declare interface SubscriptionResourceOperationsGetOptionalParams extends OperationOptions {
}

export declare interface SubscriptionResourceOperationsOperations {
    delete: (subscriptionId: string, subscriptionResourceName: string, options?: SubscriptionResourceOperationsDeleteOptionalParams) => Promise<void>;
    put: (subscriptionId: string, subscriptionResourceName: string, resource: SubscriptionResource, options?: SubscriptionResourceOperationsPutOptionalParams) => Promise<SubscriptionResource>;
    get: (subscriptionId: string, subscriptionResourceName: string, options?: SubscriptionResourceOperationsGetOptionalParams) => Promise<SubscriptionResource>;
}

export declare interface SubscriptionResourceOperationsPutOptionalParams extends OperationOptions {
}

export declare interface SubscriptionResourceProperties {
    readonly provisioningState?: ResourceProvisioningState;
    subscriptionSetting?: string;
}

export declare interface SystemData {
    createdBy?: string;
    createdByType?: CreatedByType;
    createdAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    lastModifiedAt?: Date;
}

export declare interface TrackedResource extends Resource {
    tags?: Record<string, string>;
    location: string;
}

export { }
