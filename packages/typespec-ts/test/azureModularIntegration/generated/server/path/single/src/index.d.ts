import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface MyOpOptionalParams extends OperationOptions {
}

export declare class SingleClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: SingleClientOptionalParams);
    myOp(options?: MyOpOptionalParams): Promise<void>;
}

export declare interface SingleClientOptionalParams extends ClientOptions {
}

export { }
