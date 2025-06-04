import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class ReturnTypeChangedFromClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: ReturnTypeChangedFromClientOptionalParams);
    test(body: string, options?: TestOptionalParams): Promise<string>;
}

export declare interface ReturnTypeChangedFromClientOptionalParams extends ClientOptions {
    version?: Versions;
}

export declare interface TestOptionalParams extends OperationOptions {
}

export declare type Versions = "v1" | "v2";

export { }
