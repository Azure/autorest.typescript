import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

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

export declare interface WithoutApiVersionOptionalParams extends OperationOptions {
}

export declare interface WithPathApiVersionOptionalParams extends OperationOptions {
}

export declare interface WithQueryApiVersionOptionalParams extends OperationOptions {
}

export { }
