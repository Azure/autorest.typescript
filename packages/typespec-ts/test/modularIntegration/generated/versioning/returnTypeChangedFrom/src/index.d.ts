import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ReturnTypeChangedFromClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: ReturnTypeChangedFromClientOptionalParams);
    test(body: string, options?: TestOptionalParams): Promise<string>;
}

export declare interface ReturnTypeChangedFromClientOptionalParams extends ClientOptions {
}

export declare interface TestOptionalParams extends OperationOptions {
    contentType?: "application/json";
}

export declare type Versions = "v1" | "v2";

export { }
