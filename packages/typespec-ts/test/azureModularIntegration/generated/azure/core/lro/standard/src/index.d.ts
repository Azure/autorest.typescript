import { AbortSignalLike } from '@azure/abort-controller';
import { CancelOnProgress } from '@azure/core-lro';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PollerLike } from '@azure/core-lro';

export declare interface CreateOrReplaceOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface DeleteOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare interface ExportedUser {
    name: string;
    resourceUri: string;
}

export declare interface ExportOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare enum KnownVersions {
    V20221201Preview = "2022-12-01-preview"
}

export declare function restorePoller<TResponse extends PathUncheckedResponse, TResult>(client: StandardClient, serializedState: string, sourceOperation: (...args: any[]) => PollerLike<OperationState<TResult>, TResult>, options?: RestorePollerOptions<TResult>): PollerLike<OperationState<TResult>, TResult>;

export declare interface RestorePollerOptions<TResult, TResponse extends PathUncheckedResponse = PathUncheckedResponse> extends OperationOptions {
    updateIntervalInMs?: number;
    abortSignal?: AbortSignalLike;
    processResponseBody?: (result: TResponse) => Promise<TResult>;
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

export declare class StandardClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: StandardClientOptionalParams);
    export(name: string, format: string, options?: ExportOptionalParams): PollerLike<OperationState<ExportedUser>, ExportedUser>;
    beginExport(name: string, format: string, options?: ExportOptionalParams): Promise<SimplePollerLike<OperationState<ExportedUser>, ExportedUser>>;
    beginExportAndWait(name: string, format: string, options?: ExportOptionalParams): Promise<ExportedUser>;
    delete(name: string, options?: DeleteOptionalParams): PollerLike<OperationState<void>, void>;
    beginDelete(name: string, options?: DeleteOptionalParams): Promise<SimplePollerLike<OperationState<void>, void>>;
    beginDeleteAndWait(name: string, options?: DeleteOptionalParams): Promise<void>;
    createOrReplace(name: string, resource: User, options?: CreateOrReplaceOptionalParams): PollerLike<OperationState<User>, User>;
    beginCreateOrReplace(name: string, resource: User, options?: CreateOrReplaceOptionalParams): Promise<SimplePollerLike<OperationState<User>, User>>;
    beginCreateOrReplaceAndWait(name: string, resource: User, options?: CreateOrReplaceOptionalParams): Promise<User>;
}

export declare interface StandardClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface User {
    readonly name: string;
    role: string;
}

export { }
