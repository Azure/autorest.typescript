import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

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
}

export declare type Versions = "2021-01-01-preview" | "2022-12-01-preview";

export declare interface WithoutApiVersionOptionalParams extends OperationOptions {
}

export declare interface WithPathApiVersionOptionalParams extends OperationOptions {
}

export declare interface WithQueryApiVersionOptionalParams extends OperationOptions {
    apiVersion?: string;
}

export declare interface WithQueryOldApiVersionOptionalParams extends OperationOptions {
    apiVersion?: string;
}

export { }