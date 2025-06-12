import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class MultipleClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: MultipleClientOptionalParams);
    withOperationPathParam(keyword: string, options?: WithOperationPathParamOptionalParams): Promise<void>;
    noOperationParams(options?: NoOperationParamsOptionalParams): Promise<void>;
}

export declare interface MultipleClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface NoOperationParamsOptionalParams extends OperationOptions {
}

export declare type Versions = "v1.0";

export declare interface WithOperationPathParamOptionalParams extends OperationOptions {
}

export { }
