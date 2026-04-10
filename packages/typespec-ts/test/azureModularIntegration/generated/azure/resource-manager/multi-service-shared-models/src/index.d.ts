import { AbortSignalLike } from '@azure/abort-controller';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PollerLike } from '@azure/core-lro';

export declare enum AzureClouds {
    AZURE_PUBLIC_CLOUD = "AZURE_PUBLIC_CLOUD",
    AZURE_CHINA_CLOUD = "AZURE_CHINA_CLOUD",
    AZURE_US_GOVERNMENT = "AZURE_US_GOVERNMENT"
}

export declare type AzureSupportedClouds = `${AzureClouds}`;

export declare class Combined {
    private _client;
    readonly pipeline: Pipeline;
    constructor(subscriptionId: string, options?: CombinedOptionalParams);
    readonly storageAccounts: StorageAccountsOperations;
    readonly virtualMachines: VirtualMachinesOperations;
}

export declare interface CombinedOptionalParams extends ClientOptions {
    cloudSetting?: AzureSupportedClouds;
}

export declare type CreatedByType = "User" | "Application" | "ManagedIdentity" | "Key";

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

export declare interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: SystemData;
}

export declare type ResourceProvisioningState = "Succeeded" | "Failed" | "Canceled";

export declare function restorePoller<TResponse extends PathUncheckedResponse, TResult>(client: Combined, serializedState: string, sourceOperation: (...args: any[]) => PollerLike<OperationState<TResult>, TResult>, options?: RestorePollerOptions<TResult>): PollerLike<OperationState<TResult>, TResult>;

export declare interface RestorePollerOptions<TResult, TResponse extends PathUncheckedResponse = PathUncheckedResponse> extends OperationOptions {
    updateIntervalInMs?: number;
    abortSignal?: AbortSignalLike;
    processResponseBody?: (result: TResponse) => Promise<TResult>;
}

export declare interface SharedMetadata {
    createdAt?: Date;
    createdBy?: string;
    tags?: Record<string, string>;
}

export declare interface StorageAccount extends TrackedResource {
    properties?: StorageAccountProperties;
}

export declare interface StorageAccountProperties {
    readonly provisioningState?: ResourceProvisioningState;
    metadata?: SharedMetadata;
}

export declare interface StorageAccountsCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface StorageAccountsGetOptionalParams extends OperationOptions {
}

export declare interface StorageAccountsOperations {
    createOrUpdate: (resourceGroupName: string, accountName: string, resource: StorageAccount, options?: StorageAccountsCreateOrUpdateOptionalParams) => PollerLike<OperationState<StorageAccount>, StorageAccount>;
    get: (resourceGroupName: string, accountName: string, options?: StorageAccountsGetOptionalParams) => Promise<StorageAccount>;
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

export declare interface VirtualMachine extends TrackedResource {
    properties?: VirtualMachineProperties;
}

export declare interface VirtualMachineProperties {
    readonly provisioningState?: ResourceProvisioningState;
    metadata?: SharedMetadata;
}

export declare interface VirtualMachinesCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface VirtualMachinesGetOptionalParams extends OperationOptions {
}

export declare interface VirtualMachinesOperations {
    createOrUpdate: (resourceGroupName: string, vmName: string, resource: VirtualMachine, options?: VirtualMachinesCreateOrUpdateOptionalParams) => PollerLike<OperationState<VirtualMachine>, VirtualMachine>;
    get: (resourceGroupName: string, vmName: string, options?: VirtualMachinesGetOptionalParams) => Promise<VirtualMachine>;
}

export { }
