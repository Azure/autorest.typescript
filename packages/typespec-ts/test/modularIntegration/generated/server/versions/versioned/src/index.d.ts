import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function createVersioned(endpointParam: string, options?: VersionedClientOptionalParams): VersionedContext;

export declare class VersionedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: VersionedClientOptionalParams);
    withoutApiVersion(options?: WithoutApiVersionOptionalParams): Promise<void>;
    withQueryApiVersion(options?: WithQueryApiVersionOptionalParams): Promise<void>;
    withPathApiVersion(apiVersion: string, options?: WithPathApiVersionOptionalParams): Promise<void>;
    withQueryOldApiVersion(options?: WithQueryOldApiVersionOptionalParams): Promise<void>;
}

export declare interface VersionedClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface VersionedContext extends Client {
}

export declare function withoutApiVersion(context: VersionedContext, options?: WithoutApiVersionOptionalParams): Promise<void>;

export declare interface WithoutApiVersionOptionalParams extends OperationOptions {
}

export declare function withPathApiVersion(context: VersionedContext, apiVersion: string, options?: WithPathApiVersionOptionalParams): Promise<void>;

export declare interface WithPathApiVersionOptionalParams extends OperationOptions {
}

export declare function withQueryApiVersion(context: VersionedContext, options?: WithQueryApiVersionOptionalParams): Promise<void>;

export declare interface WithQueryApiVersionOptionalParams extends OperationOptions {
    apiVersion?: string;
}

export declare function withQueryOldApiVersion(context: VersionedContext, options?: WithQueryOldApiVersionOptionalParams): Promise<void>;

export declare interface WithQueryOldApiVersionOptionalParams extends OperationOptions {
    apiVersion?: string;
}

export { }
