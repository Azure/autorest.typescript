import type { AbortSignalLike } from '@azure/abort-controller';
import type { CancelOnProgress } from '@azure/core-lro';
import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { CreateHttpPollerOptions } from '@azure/core-lro';
import type { HttpResponse } from '@azure-rest/core-client';
import type { OperationState } from '@azure/core-lro';
import type { RawHttpHeaders } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AzureArmLargeHeaderClient = Client & {
    path: Routes;
};

export declare interface AzureArmLargeHeaderClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface CancelResultOutput {
    succeeded: boolean;
}

declare function createClient({ apiVersion, ...options }?: AzureArmLargeHeaderClientOptions): AzureArmLargeHeaderClient;
export default createClient;

export declare interface ErrorAdditionalInfoOutput {
    readonly type?: string;
    readonly info?: any;
}

export declare interface ErrorDetailOutput {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
    readonly details?: Array<ErrorDetailOutput>;
    readonly additionalInfo?: Array<ErrorAdditionalInfoOutput>;
}

export declare interface ErrorResponseOutput {
    error?: ErrorDetailOutput;
}

export declare function getLongRunningPoller<TResult extends Two6KLogicalResponse | Two6KDefaultResponse>(client: Client, initialResponse: Two6K200Response | Two6K202Response | Two6KDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function isUnexpected(response: Two6K200Response | Two6K202Response | Two6KLogicalResponse | Two6KDefaultResponse): response is Two6KDefaultResponse;

export declare interface Routes {
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.LargeHeader/largeHeaders/{largeHeaderName}/two6k", subscriptionId: string, resourceGroupName: string, largeHeaderName: string): Two6K;
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

export declare interface Two6K {
    post(options: Two6KParameters): StreamableMethod<Two6K200Response | Two6K202Response | Two6KDefaultResponse>;
}

export declare interface Two6K200Response extends HttpResponse {
    status: "200";
    body: CancelResultOutput;
}

export declare interface Two6K202Headers {
    "azure-asyncoperation"?: string;
    location?: string;
    "retry-after"?: number;
}

export declare interface Two6K202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & Two6K202Headers;
}

export declare interface Two6KDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface Two6KLogicalResponse extends HttpResponse {
    status: "200";
    body: CancelResultOutput;
}

export declare type Two6KParameters = RequestParameters;

export { }
