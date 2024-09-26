import { AbortSignalLike } from '@azure/abort-controller';
import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { ErrorModel } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState as OperationState_2 } from '@azure/core-lro';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PollerLike } from '@azure/core-lro';

export declare function $delete(context: StandardContext, name: string, options?: DeleteOptionalParams): PollerLike<OperationState_2<void>, void>;

export declare function $export(context: StandardContext, name: string, format: string, options?: ExportOptionalParams): PollerLike<OperationState_2<ExportedUser>, ExportedUser>;

export declare function createOrReplace(context: StandardContext, name: string, resource: User, options?: CreateOrReplaceOptionalParams): PollerLike<OperationState_2<User>, User>;

export declare interface CreateOrReplaceOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

export declare function createStandard(options?: StandardClientOptionalParams): StandardContext;

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

export declare type OperationState = "NotStarted" | "Running" | "Succeeded" | "Failed" | "Canceled";

export declare interface OperationStatusError {
    id: string;
    status: OperationState;
    error?: ErrorModel;
}

export declare interface ResourceOperationStatusUserExportedUserError {
    id: string;
    status: OperationState;
    error?: ErrorModel;
    result?: ExportedUser;
}

export declare function restorePoller<TResponse extends PathUncheckedResponse, TResult>(client: StandardClient, serializedState: string, sourceOperation: (...args: any[]) => PollerLike<OperationState_2<TResult>, TResult>, options?: RestorePollerOptions<TResult>): PollerLike<OperationState_2<TResult>, TResult>;

export declare interface RestorePollerOptions<TResult, TResponse extends PathUncheckedResponse = PathUncheckedResponse> extends OperationOptions {
    updateIntervalInMs?: number;
    abortSignal?: AbortSignalLike;
    processResponseBody?: (result: TResponse) => Promise<TResult>;
}

export declare class StandardClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: StandardClientOptionalParams);
    createOrReplace(name: string, resource: User, options?: CreateOrReplaceOptionalParams): PollerLike<OperationState_2<User>, User>;
    delete(name: string, options?: DeleteOptionalParams): PollerLike<OperationState_2<void>, void>;
    export(name: string, format: string, options?: ExportOptionalParams): PollerLike<OperationState_2<ExportedUser>, ExportedUser>;
}

export declare interface StandardClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface StandardContext extends Client {
}

export declare interface User {
    readonly name: string;
    role: string;
}

export declare type Versions = "2022-12-01-preview";

export { }
