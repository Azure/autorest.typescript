import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class MultipleClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: MultipleClientOptionalParams);
    noOperationParams(options?: NoOperationParamsOptionalParams): Promise<void>;
    withOperationPathParam(keyword: string, options?: WithOperationPathParamOptionalParams): Promise<void>;
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
