import { AbortSignalLike } from '@azure/abort-controller';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PollerLike } from '@azure/core-lro';

export declare interface GenerationOptions {
    prompt: string;
}

export declare interface GenerationResult {
    data: string;
}

export declare enum KnownVersions {
    v2022_12_01_preview = "2022-12-01-preview"
}

export declare interface LongRunningRpcOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare function restorePoller<TResponse extends PathUncheckedResponse, TResult>(client: RpcClient, serializedState: string, sourceOperation: (...args: any[]) => PollerLike<OperationState<TResult>, TResult>, options?: RestorePollerOptions<TResult>): PollerLike<OperationState<TResult>, TResult>;

export declare interface RestorePollerOptions<TResult, TResponse extends PathUncheckedResponse = PathUncheckedResponse> extends OperationOptions {
    updateIntervalInMs?: number;
    abortSignal?: AbortSignalLike;
    processResponseBody?: (result: TResponse) => Promise<TResult>;
}

export declare class RpcClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RpcClientOptionalParams);
    longRunningRpc(body: GenerationOptions, options?: LongRunningRpcOptionalParams): PollerLike<OperationState<GenerationResult>, GenerationResult>;
}

export declare interface RpcClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export { }
