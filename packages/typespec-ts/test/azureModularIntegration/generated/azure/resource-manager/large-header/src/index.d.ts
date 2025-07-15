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

export declare interface CancelResult {
    succeeded: boolean;
}

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

export declare enum KnownVersions {
    V20231201Preview = "2023-12-01-preview"
}

export declare class LargeHeaderClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(subscriptionId: string, options?: LargeHeaderClientOptionalParams);
    readonly largeHeaders: LargeHeadersOperations;
}

export declare interface LargeHeaderClientOptionalParams extends ClientOptions {
    apiVersion?: string;
    cloudSetting?: AzureClouds;
}

export declare interface LargeHeadersOperations {
    two6K: (resourceGroupName: string, largeHeaderName: string, options?: LargeHeadersTwo6KOptionalParams) => PollerLike<OperationState<CancelResult>, CancelResult>;
}

export declare interface LargeHeadersTwo6KOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare function restorePoller<TResponse extends PathUncheckedResponse, TResult>(client: LargeHeaderClient, serializedState: string, sourceOperation: (...args: any[]) => PollerLike<OperationState<TResult>, TResult>, options?: RestorePollerOptions<TResult>): PollerLike<OperationState<TResult>, TResult>;

export declare interface RestorePollerOptions<TResult, TResponse extends PathUncheckedResponse = PathUncheckedResponse> extends OperationOptions {
    updateIntervalInMs?: number;
    abortSignal?: AbortSignalLike;
    processResponseBody?: (result: TResponse) => Promise<TResult>;
}

export { }
