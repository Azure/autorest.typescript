import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

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
