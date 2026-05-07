import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export { isRestError }

export declare class NotVersionedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: NotVersionedClientOptionalParams);
    withPathApiVersion(apiVersion: string, options?: WithPathApiVersionOptionalParams): Promise<void>;
    withQueryApiVersion(apiVersion: string, options?: WithQueryApiVersionOptionalParams): Promise<void>;
    withoutApiVersion(options?: WithoutApiVersionOptionalParams): Promise<void>;
}

export declare interface NotVersionedClientOptionalParams extends ClientOptions {
}

export { RestError }

export declare interface WithoutApiVersionOptionalParams extends OperationOptions {
}

export declare interface WithPathApiVersionOptionalParams extends OperationOptions {
}

export declare interface WithQueryApiVersionOptionalParams extends OperationOptions {
}

export { }
