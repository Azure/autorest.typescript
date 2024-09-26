import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function createReturnTypeChangedFrom(endpointParam: string, version: Versions, options?: ReturnTypeChangedFromClientOptionalParams): ReturnTypeChangedFromContext;

export declare class ReturnTypeChangedFromClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: ReturnTypeChangedFromClientOptionalParams);
    test(body: string, options?: TestOptionalParams): Promise<string>;
}

export declare interface ReturnTypeChangedFromClientOptionalParams extends ClientOptions {
}

export declare interface ReturnTypeChangedFromContext extends Client {
}

declare function test_2(context: ReturnTypeChangedFromContext, body: string, options?: TestOptionalParams): Promise<string>;
export { test_2 as test }

export declare interface TestOptionalParams extends OperationOptions {
}

export declare type Versions = "v1" | "v2";

export { }
