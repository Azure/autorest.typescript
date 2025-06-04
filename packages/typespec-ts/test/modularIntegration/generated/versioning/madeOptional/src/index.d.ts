import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class MadeOptionalClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: MadeOptionalClientOptionalParams);
    test(body: TestModel, options?: TestOptionalParams): Promise<TestModel>;
}

export declare interface MadeOptionalClientOptionalParams extends ClientOptions {
    version?: Versions;
}

export declare interface TestModel {
    prop: string;
    changedProp?: string;
}

export declare interface TestOptionalParams extends OperationOptions {
    param?: string;
}

export declare type Versions = "v1" | "v2";

export { }
