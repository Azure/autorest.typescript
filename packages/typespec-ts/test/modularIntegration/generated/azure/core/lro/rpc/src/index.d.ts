import { AbortSignalLike } from '@azure/abort-controller';
import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { ErrorModel } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState as OperationState_2 } from '@azure/core-lro';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PollerLike } from '@azure/core-lro';

export declare function createRpc(options?: RpcClientOptionalParams): RpcContext;

export declare interface GenerationOptions {
    prompt: string;
}

export declare interface GenerationResult {
    data: string;
}

export declare function longRunningRpc(context: RpcContext, body: GenerationOptions, options?: LongRunningRpcOptionalParams): PollerLike<OperationState_2<GenerationResult>, GenerationResult>;

export declare interface LongRunningRpcOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare type OperationState = "NotStarted" | "Running" | "Succeeded" | "Failed" | "Canceled";

export declare interface ResourceOperationStatusGenerationResponseGenerationResultError {
    readonly id: string;
    status: OperationState;
    error?: ErrorModel;
    result?: GenerationResult;
}

export declare function restorePoller<TResponse extends PathUncheckedResponse, TResult>(client: RpcClient, serializedState: string, sourceOperation: (...args: any[]) => PollerLike<OperationState_2<TResult>, TResult>, options?: RestorePollerOptions<TResult>): PollerLike<OperationState_2<TResult>, TResult>;

export declare interface RestorePollerOptions<TResult, TResponse extends PathUncheckedResponse = PathUncheckedResponse> extends OperationOptions {
    updateIntervalInMs?: number;
    abortSignal?: AbortSignalLike;
    processResponseBody?: (result: TResponse) => Promise<TResult>;
}

export declare class RpcClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RpcClientOptionalParams);
    longRunningRpc(body: GenerationOptions, options?: LongRunningRpcOptionalParams): PollerLike<OperationState_2<GenerationResult>, GenerationResult>;
}

export declare interface RpcClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface RpcContext extends Client {
}

export { }
