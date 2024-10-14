import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

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
