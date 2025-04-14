import { AbortSignalLike } from '@azure/abort-controller';
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

export declare class StandardClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: StandardClientOptionalParams);
    export(name: string, format: string, options?: ExportOptionalParams): PollerLike<OperationState<ExportedUser>, ExportedUser>;
    delete(name: string, options?: DeleteOptionalParams): PollerLike<OperationState<void>, void>;
    createOrReplace(name: string, resource: User, options?: CreateOrReplaceOptionalParams): PollerLike<OperationState<User>, User>;
}

export declare interface StandardClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface User {
    readonly name: string;
    role: string;
}

export { }
