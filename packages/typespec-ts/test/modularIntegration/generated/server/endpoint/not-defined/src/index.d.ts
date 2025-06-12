import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class NotDefinedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: NotDefinedClientOptionalParams);
    valid(options?: ValidOptionalParams): Promise<void>;
}

export declare interface NotDefinedClientOptionalParams extends ClientOptions {
}

export declare interface ValidOptionalParams extends OperationOptions {
}

export { }
