import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class NotVersionedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: NotVersionedClientOptionalParams);
    withoutApiVersion(options?: WithoutApiVersionOptionalParams): Promise<void>;
    withQueryApiVersion(apiVersion: string, options?: WithQueryApiVersionOptionalParams): Promise<void>;
    withPathApiVersion(apiVersion: string, options?: WithPathApiVersionOptionalParams): Promise<void>;
}

export declare interface NotVersionedClientOptionalParams extends ClientOptions {
}

export declare interface WithoutApiVersionOptionalParams extends OperationOptions {
}

export declare interface WithPathApiVersionOptionalParams extends OperationOptions {
}

export declare interface WithQueryApiVersionOptionalParams extends OperationOptions {
}

export { }
