import { AbortSignalLike } from '@azure/abort-controller';
import { CancelOnProgress } from '@azure/core-lro';
import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { CreateHttpPollerOptions } from '@azure/core-lro';
import { ErrorModel } from '@azure-rest/core-client';
import { ErrorResponse } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient({ apiVersion, ...options }?: RpcClientOptions): RpcClient;
export default createClient;

export declare interface GenerationOptions {
    prompt: string;
}

export declare interface GenerationResultOutput {
    data: string;
}

export declare function getLongRunningPoller<TResult extends LongRunningRpcLogicalResponse | LongRunningRpcDefaultResponse>(client: Client, initialResponse: LongRunningRpc202Response | LongRunningRpcDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function isUnexpected(response: LongRunningRpc202Response | LongRunningRpcLogicalResponse | LongRunningRpcDefaultResponse): response is LongRunningRpcDefaultResponse;

export declare interface LongRunningRpc {
    post(options: LongRunningRpcParameters): StreamableMethod<LongRunningRpc202Response | LongRunningRpcDefaultResponse>;
}

export declare interface LongRunningRpc202Headers {
    "operation-location": string;
}

export declare interface LongRunningRpc202Response extends HttpResponse {
    status: "202";
    body: ResourceOperationStatusGenerationResponseGenerationResultErrorOutput;
    headers: RawHttpHeaders & LongRunningRpc202Headers;
}

export declare interface LongRunningRpcBodyParam {
    body: GenerationOptions;
}

export declare interface LongRunningRpcDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface LongRunningRpcDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & LongRunningRpcDefaultHeaders;
}

export declare interface LongRunningRpcLogicalResponse extends HttpResponse {
    status: "200";
    body: ResourceOperationStatusGenerationResponseGenerationResultErrorOutput;
}

export declare type LongRunningRpcParameters = LongRunningRpcBodyParam & RequestParameters;

export declare type OperationStateOutput = string;

export declare interface ResourceOperationStatusGenerationResponseGenerationResultErrorOutput {
    readonly id: string;
    status: OperationStateOutput;
    error?: ErrorModel;
    result?: GenerationResultOutput;
}

export declare interface Routes {
    (path: "/azure/core/lro/rpc/generations:submit"): LongRunningRpc;
}

export declare type RpcClient = Client & {
    path: Routes;
};

export declare interface RpcClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface SimplePollerLike<TState extends OperationState<TResult>, TResult> {
    isDone(): boolean;
    getOperationState(): TState;
    getResult(): TResult | undefined;
    poll(options?: {
        abortSignal?: AbortSignalLike;
    }): Promise<TState>;
    pollUntilDone(pollOptions?: {
        abortSignal?: AbortSignalLike;
    }): Promise<TResult>;
    onProgress(callback: (state: TState) => void): CancelOnProgress;
    serialize(): Promise<string>;
    submitted(): Promise<void>;
    toString(): string;
    stopPolling(): void;
    isStopped(): boolean;
}

export { }
