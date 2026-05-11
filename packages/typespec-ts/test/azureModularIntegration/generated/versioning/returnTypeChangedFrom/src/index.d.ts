import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export { isRestError }

export { RestError }

export declare class ReturnTypeChangedFromClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: ReturnTypeChangedFromClientOptionalParams);
    test(body: string, options?: TestOptionalParams): Promise<TestResponse>;
}

export declare interface ReturnTypeChangedFromClientOptionalParams extends ClientOptions {
    version?: Versions;
}

export declare interface TestOptionalParams extends OperationOptions {
}

export declare type TestResponse = {
    body: string;
};

export declare type Versions = "v1" | "v2";

export { }
